import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import LoadingSpinner from './components/common/LoadingSpinner';
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import('./pages/Home'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Hotels = lazy(() => import('./pages/Hotels'));
const Flights = lazy(() => import('./pages/Flights'));
const Umrah = lazy(() => import('./pages/Umrah'));
const Hajj = lazy(() => import('./pages/Hajj'));
const Visa = lazy(() => import('./pages/Visa'));
const CountryDetail = lazy(() => import('./pages/CountryDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asia-tours" element={<Destinations />} />
            <Route path="/asia-tours/:countrySlug" element={<CountryDetail />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/services" element={<Services />} />
            <Route path="/umrah-packages" element={<Umrah />} />
            <Route path="/hajj-packages" element={<Hajj />} />
            <Route path="/visa-services" element={<Visa />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/92325880050?text=Hello%20Harmain%20Travels%2C%20I%20need%20assistance." 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
        >
          <MessageCircle size={24} fill="white" />
        </a>

        {/* Global Live Booking Social Proof removed */}
        <Analytics />
      </div>
    </Router>
  );
};

export default App;
