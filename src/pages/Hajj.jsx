import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Hajj = () => {
  return (
    <div className="min-h-screen bg-brand-bg-primary text-brand-silver-light">
      <Navbar />
      <main className="pt-32 pb-24 max-w-[1500px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-white mb-6 uppercase tracking-tight">Luxury Hajj <span className="text-brand-red">Packages</span></h1>
        <p className="text-brand-muted max-w-2xl text-lg font-body">Coming soon. Premium Hajj experiences with 5-star accommodations and VIP services.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Hajj;
