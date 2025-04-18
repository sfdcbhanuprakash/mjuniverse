
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-mjblack py-20">
      <div className="text-center max-w-md mx-auto p-8 bg-mjblack-light border border-gold-dark rounded-lg">
        <h1 className="text-6xl font-bold mb-4 text-gold">404</h1>
        <p className="text-2xl text-white mb-6">This page has moonwalked away</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <Link to="/" className="glow-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
