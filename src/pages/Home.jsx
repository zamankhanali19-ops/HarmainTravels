import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import PartnersMarquee from '../components/home/PartnersMarquee';
import DestinationsGrid from '../components/home/DestinationsGrid';
import ServicesShowroom from '../components/home/ServicesShowroom';
import Testimonials from '../components/home/Testimonials';

import SEO from '../components/common/SEO';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Harmain Travels",
    "image": "https://harmaintravels.com/logo.png",
    "url": "https://harmaintravels.com/",
    "telephone": "+923175477919",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.facebook.com/harmaintravels"
    ]
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=1200", price: "From $899", tag: "Beach Paradise" },
    { name: "Malaysia", image: "https://www.idea.int/democracytracker/sites/default/files/2023-02/Malaysia.jpg", price: "From $749", tag: "Urban Jungle" },
    { name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", price: "From $999", tag: "Spiritual Retreat" },
    { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa", price: "From $699", tag: "Mountain Majesty" },
    { name: "Bangladesh", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7", price: "From $599", tag: "Lush Heritage" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", price: "From $1299", tag: "Tropical Oasis" }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#A61D24] selection:text-white">
      <SEO 
        title="Harmain Travels - Pakistan's Top Rated Travel Agency & Visa Consultant"
        description="Harmain Travels is Pakistan's leading premium travel agency. Discover custom holiday packages, luxury hotels, easy flights, and comprehensive visa services for world-class travel experiences."
        schema={schema}
      />
      <Navbar />
      <HeroSection scrollY={scrollY} />
      <PartnersMarquee />
      <DestinationsGrid destinations={destinations} />
      <ServicesShowroom />
      <Testimonials />
      
      {/* Extensive SEO Content Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Elite Authority</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002147] uppercase tracking-tighter leading-none mb-6">
                Leading Asian <br/><span className="text-[#A61D24] font-light italic">Travel Portal</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Harmain Travels is widely recognized as the premier travel consultant and premium agency across Asia. Backed by 25 years of hands-on expertise in elite tourism, visa consulting, luxury hotel bookings, and airline ticketing, we specialize in curating first-rate holiday experiences for high-end travelers. Our exclusive portfolio spans high-demand regions, offering bespoke trips to Thailand, Malaysia, the Maldives, Indonesia, and across South Asia.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you're seeking a bespoke corporate itinerary or a spiritual retreat, our network of vetted luxury resorts and verified local partners ensures world-class services at every leg of your journey. Let us redefine your exploration of the Orient.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-slate-100 shadow-2xl">
              <h4 className="text-xl md:text-2xl font-black text-[#002147] uppercase tracking-tighter mb-6">Trending Travel Keywords</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="w-3 h-3 bg-[#A61D24] rounded-full shrink-0"></span>
                  Pakistan's Top Rated Travel Consultant
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="w-3 h-3 bg-[#A61D24] rounded-full shrink-0"></span>
                  Bespoke Corporate Tour Management
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="w-3 h-3 bg-[#A61D24] rounded-full shrink-0"></span>
                  Luxury Hotel & Resorts Network Asia
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span className="w-3 h-3 bg-[#A61D24] rounded-full shrink-0"></span>
                  Comprehensive E-Visa Advisory Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
