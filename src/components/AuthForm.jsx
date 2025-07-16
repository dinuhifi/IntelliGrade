import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ title, isSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (isSignup && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const endpoint = isSignup ? '/signup' : '/signin';
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({
          mail_id: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        if (isSignup) {
          // For signup, show success message and redirect to login
          alert('Account created successfully! Please sign in.');
          navigate('/teacher/login');
        } else {
          // For signin, redirect to dashboard
          navigate('/dashboard');
        }
      } else {
        setError(data.message || `${isSignup ? 'Signup' : 'Signin'} failed`);
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-white px-28 py-12 rounded-3xl shadow-md max-w-md">
        <h1 className="text-center font-bold text-3xl mb-10">{title}</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl mb-5 flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Enter Password" 
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            {isSignup && (
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )}
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center mb-4">
              {error}
            </div>
          )}
          
          <div className="text-center">
            <button 
              type="submit" 
              disabled={loading}
              className="text-center font-semibold text-xl text-white bg-black px-4 py-2 rounded-lg transition transform hover:bg-green-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : (isSignup ? "Signup" : "Login")}
            </button>
          </div>
          
          <div className="text-center mt-5 flex flex-col gap-1">
            {!isSignup && <a href="#" className="underline">Forgot Password?</a>}
            <span>
              {isSignup ? "Existing User?" : "Don't have an Account?"}  
              <Link to={isSignup ? "/teacher/login" : "/teacher/signup"} className="underline ml-1">
                {isSignup ? "Login" : "Sign Up"}
              </Link>
            </span>
          </div>
          <div className="text-center mt-5">
            <Link to="/" className="text-blue-600 underline">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;