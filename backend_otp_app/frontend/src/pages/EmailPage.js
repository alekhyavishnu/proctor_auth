import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/auth/send-otp', {
        email
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.message === 'OTP sent') {
        localStorage.setItem('email', email);
        navigate('/otp');
      } else {
        setError('Unexpected response from server. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data?.error || 'Failed to send OTP. Please try again.');
      } else if (error.request) {
        setError('No response from server. Please check if the server is running.');
      } else {
        setError('Failed to send request. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6C63FF]">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Email Verification</h1>
        <p className="text-gray-500 mb-6 text-center">Enter your email to receive a one-time password (OTP).</p>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] mb-4"
            required
            disabled={loading}
            placeholder="you@example.com"
          />
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <button
            type="submit"
            className={`w-full bg-[#6C63FF] hover:bg-[#5548c8] text-white font-semibold py-2 px-4 rounded-md transition-colors shadow ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailPage;