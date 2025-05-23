import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // First check localStorage
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (!storedAuth) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // Then verify with backend
        const response = await axios.get('http://localhost:4000/api/protected/check-session', {
          withCredentials: true
        });

        if (response.data.authenticated) {
          setIsAuthenticated(true);
          // Update session expiry time
          const expiryTime = new Date().getTime() + (30 * 60 * 1000); // 30 minutes from now
          localStorage.setItem('sessionExpiry', expiryTime);
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('sessionExpiry');
        }
      } catch (error) {
        console.error('Session check error:', error);
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('sessionExpiry');
      }
      setLoading(false);
    };

    checkSession();

    // Check session expiry every minute
    const interval = setInterval(() => {
      const expiryTime = localStorage.getItem('sessionExpiry');
      if (expiryTime && new Date().getTime() > parseInt(expiryTime)) {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('sessionExpiry');
        clearInterval(interval);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 