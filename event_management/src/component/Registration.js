import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postUser } from '../Service/Api';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';

const Registration = () => {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const phoneRegex = /^\d{10}$/;

    if (!fdata.name || !fdata.email || !fdata.phone || !fdata.password || !fdata.cpassword) {
      return 'All fields are required';
    }
    if (!emailRegex.test(fdata.email)) {
      return 'Invalid email format';
    }
    if (!phoneRegex.test(fdata.phone)) {
      return 'Phone number must be exactly 10 digits';
    }
    if (fdata.password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (fdata.password !== fdata.cpassword) {
      return 'Passwords do not match';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const { name, email, phone, password } = fdata;
      const response = await postUser({ name, email, phone, password });

      if (response.success) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        setError(response.message || 'Registration failed.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 px-4">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[40%] mt-8 mb-12 border-2 border-gray-200 p-6 bg-white bg-opacity-40 rounded-xl shadow-2xl backdrop-blur-lg transition-transform duration-500 hover:scale-[1.02]">
    <h2 className="text-3xl text-center text-gray-800 font-bold mb-4">Create an Account</h2>

    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      {/* Input field pattern */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 w-full">
        <label htmlFor="name" className="text-lg text-gray-700 w-full md:w-1/3 mb-2 md:mb-0">Full Name</label>
        <div className="w-full md:w-2/3 flex items-center border-2 border-gray-300 rounded-md">
          <HiOutlineUser className="text-gray-500 p-3" />
          <input
            type="text"
            id="name"
            name="name"
            className="w-full text-lg p-3 bg-transparent focus:outline-none"
            placeholder="Enter your name"
            value={fdata.name}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Repeat same responsive block for Email, Phone, Password, Confirm Password */}

      {/* Email */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 w-full">
        <label htmlFor="email" className="text-lg text-gray-700 w-full md:w-1/3 mb-2 md:mb-0">Email</label>
        <div className="w-full md:w-2/3 flex items-center border-2 border-gray-300 rounded-md">
          <HiOutlineMail className="text-gray-500 p-3" />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-lg p-3 bg-transparent focus:outline-none"
            placeholder="Enter your email"
            value={fdata.email}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 w-full">
        <label htmlFor="phone" className="text-lg text-gray-700 w-full md:w-1/3 mb-2 md:mb-0">Phone</label>
        <div className="w-full md:w-2/3 flex items-center border-2 border-gray-300 rounded-md">
          <HiOutlinePhone className="text-gray-500 p-3" />
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full text-lg p-3 bg-transparent focus:outline-none"
            placeholder="Enter your phone number"
            value={fdata.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 w-full">
        <label htmlFor="password" className="text-lg text-gray-700 w-full md:w-1/3 mb-2 md:mb-0">Password</label>
        <div className="w-full md:w-2/3 flex items-center border-2 border-gray-300 rounded-md">
          <HiOutlineLockClosed className="text-gray-500 p-3" />
          <input
            type="password"
            id="password"
            name="password"
            className="w-full text-lg p-3 bg-transparent focus:outline-none"
            placeholder="Enter your password"
            value={fdata.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 w-full">
        <label htmlFor="cpassword" className="text-lg text-gray-700 w-full md:w-1/3 mb-2 md:mb-0">Confirm Password</label>
        <div className="w-full md:w-2/3 flex items-center border-2 border-gray-300 rounded-md">
          <HiOutlineLockClosed className="text-gray-500 p-3" />
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            className="w-full text-lg p-3 bg-transparent focus:outline-none"
            placeholder="Confirm your password"
            value={fdata.cpassword}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-600 text-white font-semibold text-xl py-3 rounded-md hover:bg-blue-500 transition-all duration-300 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-solid mr-2" />
            Registering...
          </div>
        ) : (
          'Register'
        )}
      </button>
    </form>

    <p className="text-lg text-center mt-4 text-gray-700">
      Already have an account?{' '}
      <Link to="/login" className="text-blue-500 font-semibold hover:text-blue-400">
        Login
      </Link>
    </p>
  </div>
</div>

  );
};

export default Registration;
