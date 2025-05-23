import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpPage() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/verify-otp', {
        email: email,
        otp: otp
      }, {
        withCredentials: true
      });
      localStorage.setItem('isAuthenticated', 'true');
      setSuccess(true);
      setTimeout(() => {
        navigate('/aws');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.error || 'Invalid OTP');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6C63FF]">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">OTP Verification</h1>
        <div className="w-full mb-6">
          <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded text-center text-sm">
            We've sent a verification code to your email - <span className="font-semibold">{email}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] mb-4"
            required
            placeholder="Enter verification code"
          />
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> User verified successfully. Redirecting to AWS page...</span>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#6C63FF] hover:bg-[#5548c8] text-white font-semibold py-2 px-4 rounded-md transition-colors shadow"
            disabled={success}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpPage;