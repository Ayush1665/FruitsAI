// src/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check login state

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  // If user is logged in, render the children component
  return children;
};

export default ProtectedRoute;
