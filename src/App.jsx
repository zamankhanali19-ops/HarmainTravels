import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/common/LoadingSpinner';
import WhatsAppWidget from './components/common/WhatsAppWidget';
import InquiryWhatsAppModal from './components/common/InquiryWhatsAppModal';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Floating WhatsApp Widget */}
        <WhatsAppWidget />
        <InquiryWhatsAppModal />

        {/* Global Live Booking Social Proof removed */}
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
