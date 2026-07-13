import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const Hajj = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Hajj Packages from Pakistan",
    "description": "Premium Hajj packages with 5-star accommodations, VIP tents in Mina, and expert guidance from Harmain Travels.",
    "brand": {
      "@type": "Organization",
      "name": "Harmain Travels"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock",
      "url": "https://harmaintravels.com/hajj-packages"
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-primary text-brand-silver-light">
      <SEO 
        title="Luxury Hajj Packages 2026 from Pakistan | Harmain Travels"
        description="Experience a spiritually uplifting journey with our luxury Hajj packages. Offering VIP tents, premium hotels, and expert guidance throughout."
        url="https://harmaintravels.com/hajj-packages"
        schema={schema}
      />
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

