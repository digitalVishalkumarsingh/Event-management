import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-white">
          EventKiya
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>

          <div className="group relative">
            <button className="hover:text-black transition">Services</button>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded-md shadow-lg overflow-hidden z-10">
              {["idea", "event", "service", "activation", "exhinitions", "artist", "intellectual", "merchanding", "wedding", "birthday"].map(service => (
                <Link
                  key={service}
                  to={`/${service}`}
                  className="px-4 py-2 hover:bg-red-100"
                >
                  {service.charAt(0).toUpperCase() + service.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="hover:text-black transition">Gallery</button>
            <div className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 rounded-md shadow-lg z-10">
              <Link to="/photo" className="px-4 py-2 hover:bg-red-100">Photo</Link>
              <Link to="/video" className="px-4 py-2 hover:bg-red-100">Video</Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/bookevent" className="hover:text-black transition">Book Event</Link>
          <Link to="/getevent" className="hover:text-black transition">Upcoming Event</Link>
        </div>

        {/* User / Account */}
        <div className="relative">
          {user ? (
            <div className="flex items-center space-x-2">
              <FaUserCircle size={24} />
              <div className="group relative">
                <span className="cursor-pointer hover:text-black transition">
                  Welcome, {user}
                </span>
                <div className="absolute hidden group-hover:flex flex-col bg-white text-black right-0 mt-2 rounded-md shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-red-100 text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="group relative">
              <button className="hover:text-black transition">Account</button>
              <div className="absolute hidden group-hover:flex flex-col bg-white text-black right-0 mt-2 rounded-md shadow-lg z-10">
                <Link to="/login" className="px-4 py-2 hover:bg-red-100">Login</Link>
                <Link to="/registration" className="px-4 py-2 hover:bg-red-100">Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav Toggle (Optional) */}
      {/* Add responsive hamburger toggle logic if needed */}
    </nav>
  );
};

export default Navbar;
