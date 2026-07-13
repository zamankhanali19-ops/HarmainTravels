import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg-primary text-brand-silver-light">
      <Helmet>
        <title>Page Not Found - Harmain Travels</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-black text-brand-red mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-lg text-brand-silver-light mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
