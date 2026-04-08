import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../Service/Api';

const Login = () => {
  const [fdata, setFdata] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!fdata.email || !fdata.password) return 'Email and password are required';
    if (!emailRegex.test(fdata.email)) return 'Invalid email format';
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
      const response = await loginUser(fdata);
      if (!response.success) {
        alert("User access denied");
      } else {
        const { token, user } = response;
        localStorage.setItem('auth-token', token);
        localStorage.setItem('name', user?.name || '');
        localStorage.setItem('email', user?.email || '');
        alert('Login successful!');
        navigate('/'); // Redirect to dashboard
      }
    } catch (error) {
      setError(error.message || 'An error occurred.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-cover" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
      <div className="w-3/12 h-auto mt-5 p-8 bg-gradient-to-r from-sky-500 to-green-500 rounded-lg shadow-xl">
        <h2 className="text-4xl text-center text-white font-semibold mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {['email', 'password'].map((field, index) => (
            <div key={index} className="flex flex-col w-full">
              <label htmlFor={field} className="text-lg text-white capitalize mb-2">
                {field}:
              </label>
              <input
                type={field}
                id={field}
                name={field}
                className="border-2 border-gray-300 text-lg p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-gray-600"
                placeholder={`Enter your ${field}`}
                value={fdata[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`bg-yellow-500 text-white font-medium text-xl py-3 rounded-md hover:bg-yellow-400 transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-lg text-center mt-4 text-white">
          Don’t have an account?{' '}
          <Link to="/registration" className="text-blue-200 font-semibold hover:text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
