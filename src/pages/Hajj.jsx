import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';

const Hajj = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Hajj Packages from Pakistan",
    "image": "https://harmaintravels.com/logo.png",
    "description": "Premium Hajj packages with 5-star accommodations, VIP tents in Mina, and expert guidance from Harmain Travels.",
    "brand": {
      "@type": "Brand",
      "name": "Harmain Travels"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "56"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "PKR",
      "lowPrice": "1500000",
      "highPrice": "3000000",
      "offerCount": "2",
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
        <p className="text-brand-muted max-w-2xl text-lg font-body mb-12">Coming soon. Premium Hajj experiences with 5-star accommodations and VIP services.</p>
        
        <div className="max-w-4xl">
          <h2 className="text-2xl font-display font-bold text-brand-white mb-4">Premium Hajj Packages from Pakistan</h2>
          <p className="text-brand-muted font-body leading-relaxed mb-4">
            Performing Hajj is a sacred duty and a journey of a lifetime. At Harmain Travels, the leading travel agency in Blue Area Islamabad, we specialize in organizing premium and luxury Hajj packages for pilgrims from across Pakistan. Our expert team ensures every aspect of your spiritual journey is meticulously planned and executed flawlessly.
          </p>
          <p className="text-brand-muted font-body leading-relaxed mb-4">
            Our upcoming VIP Hajj packages for 2026 will feature 5-star accommodations near the Haram in both Makkah and Madinah, such as the Fairmont Makkah Clock Royal Tower. We also provide dedicated VIP tents in Mina and Arafat, complete with modern amenities, comfortable bedding, and dedicated private transport.
          </p>
          <p className="text-brand-muted font-body leading-relaxed">
            With over a decade of experience in religious pilgrimages, Harmain Travels takes the stress out of your Hajj preparations. From visa processing and flight bookings to guided Ziyarat with experienced Islamic scholars, we offer comprehensive services so you can focus entirely on your worship and connection with Allah. Stay tuned for our exclusive Hajj 2026 announcements, or contact our consultants today to pre-register your interest.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hajj;

