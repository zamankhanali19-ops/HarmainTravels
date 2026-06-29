import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DestinationsHero from '../components/destinations/DestinationsHero';
import RegionSelector from '../components/destinations/RegionSelector';
import CountriesGrid from '../components/destinations/CountriesGrid';
import { asianRegions } from '../data/asianRegions';

import SEO from '../components/common/SEO';

const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState('south');



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Luxury Asian Tour Packages",
    "description": "Curated travel packages to South Asia, Southeast Asia, East Asia, and the Middle East.",
    "itemListElement": asianRegions.map((region, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": region.name,
      "url": `https://harmaintravels.com/asia-tours`
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Luxury Asian Tours from Pakistan [2026] | Harmain Travels"
        description="Explore curated tours to Thailand, Malaysia, Maldives, and 40+ Asian destinations. Plan your perfect luxury escape with our travel architects."
        url="https://harmaintravels.com/asia-tours"
        schema={schema}
      />
      <Navbar>
        <RegionSelector 
          asianRegions={asianRegions} 
          activeRegion={activeRegion} 
          setActiveRegion={setActiveRegion} 
        />
      </Navbar>
      <DestinationsHero />
      <CountriesGrid 
        asianRegions={asianRegions} 
        activeRegion={activeRegion} 
      />
      {/* Long-form SEO Optimized Content Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block">World-Class Tourism</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002147] uppercase tracking-tighter leading-none mb-6">
                Your Luxury <br/><span className="text-[#A61D24] font-light italic">Travel Blueprint</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Explore our world-class travel packages and luxury getaways tailored precisely by our regional destination experts. Our dynamic hub lists high-intent destinations across the continent. By leveraging 25 years of field-tested touring, we've developed bespoke travel itineraries that give you instant access to prime locations like Thailand, Malaysia, Singapore, and beyond.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether it is your first international journey or a seasoned escape, Harmain Travels covers all your bases. From visa consulting and flight itineraries to exclusive local transfers and boutique resort bookings, your trip is fully secured.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-slate-100 shadow-2xl">
              <h4 className="text-xl md:text-2xl font-black text-[#002147] uppercase tracking-tighter mb-6">Why Choose Our Asian Tours?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-sm font-bold tracking-wide text-slate-600">
                  <span className="w-6 h-6 bg-[#A61D24]/10 text-[#A61D24] rounded-full shrink-0 flex items-center justify-center font-black mt-0.5">✓</span>
                  <div>
                    <span className="block text-[#002147] uppercase tracking-wider mb-1">Guaranteed Visas</span>
                    <span className="font-medium text-slate-500 text-xs">Our expert consultants handle 100% of the complicated e-visa and sticker visa paperwork.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-sm font-bold tracking-wide text-slate-600">
                  <span className="w-6 h-6 bg-[#A61D24]/10 text-[#A61D24] rounded-full shrink-0 flex items-center justify-center font-black mt-0.5">✓</span>
                  <div>
                    <span className="block text-[#002147] uppercase tracking-wider mb-1">Curated Luxury Networks</span>
                    <span className="font-medium text-slate-500 text-xs">Direct API partnerships guarantee you the best rates at verified 4 and 5-star resorts.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-sm font-bold tracking-wide text-slate-600">
                  <span className="w-6 h-6 bg-[#A61D24]/10 text-[#A61D24] rounded-full shrink-0 flex items-center justify-center font-black mt-0.5">✓</span>
                  <div>
                    <span className="block text-[#002147] uppercase tracking-wider mb-1">Tailored Itineraries</span>
                    <span className="font-medium text-slate-500 text-xs">No rigid group tours. You control the pace, from arrival to departure.</span>
                  </div>
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

export default Destinations;
