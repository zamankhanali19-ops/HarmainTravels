import { useParams, Link, useLocation } from 'react-router-dom';
import { asianRegions } from '../data/asianRegions';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FileCheck, Calendar, Wallet, UserCheck, ShieldAlert, ArrowLeft, Send, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import SEO from '../components/common/SEO';

const CountryDetail = () => {
  const { countrySlug } = useParams();
  const location = useLocation();

  // Read the country either from navigation state or fallback to global lookup
  const country = location.state?.country || asianRegions
    .flatMap((r) => r.countries)
    .find((c) => c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === countrySlug);

  const canonicalUrl = `https://harmaintravels.com/asia-tours/${countrySlug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!country) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-black text-[#002147] mb-4 uppercase tracking-wider">Country Not Found</h2>
        <Link to="/asia-tours" className="btn-primary !px-6 !py-3">Go Back to Asia Tours</Link>
      </div>
    );
  }

  const standardRequirements = [
    { icon: <FileCheck size={24} className="text-[#A61D24]" />, text: 'Original Passport (6 Months Validity)' },
    { icon: <UserCheck size={24} className="text-[#A61D24]" />, text: 'Recent Photos (White Background)' },
    { icon: <Wallet size={24} className="text-[#A61D24]" />, text: 'Bank Statement (Last 6 Months)' },
    { icon: <Calendar size={24} className="text-[#A61D24]" />, text: 'NTN & FBR Returns (If applicable)' },
    { icon: <ShieldAlert size={24} className="text-[#A61D24]" />, text: 'Vaccination Certificate (Polio/Covid)' }
  ];

  const travelInspirations = [
    { icon: <Compass size={24} className="text-[#002147]" />, title: 'Premium Curated Itineraries', text: 'Tailor-made itineraries customized to match your individual exploration pace and choices.' },
    { icon: <Sparkles size={24} className="text-[#002147]" />, title: 'Exclusive Local Experiences', text: 'Gain access to premium off-the-beaten-path experiences, guided by accredited local destination masters.' },
    { icon: <CheckCircle size={24} className="text-[#002147]" />, title: 'End-to-End Concierge', text: 'Enjoy a frictionless, end-to-end luxury travel experience from premium arrivals to high-end stays.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title={`${country.name} Tours & Visa Requirements | Harmain Travels`}
        description={`Plan your next premium tour to ${country.name} with Harmain Travels. Check the must-visit spots, complete document requirements, and apply for a visa today.`}
        url={canonicalUrl}
      />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Go Back Button */}
          <Link
            to="/asia-tours"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-[#002147] hover:text-[#A61D24] font-black uppercase text-xs tracking-wider transition-all mb-8 md:mb-12 px-6 py-3.5 rounded-full border border-slate-200/60 shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={16} /> Go Back to Destinations
          </Link>

          {/* Immersive Header / Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            {/* Country Image Backdrop */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-slate-100/50 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[300px] sm:min-h-[450px]">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-[#A61D24] font-black uppercase text-[10px] tracking-wider bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">Famous Spot</span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mt-2">{country.famousPlace}</h3>
              </div>
            </div>

            {/* Country Information Details */}
            <div className="flex flex-col h-full justify-between py-2">
              <div>
                <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-3 block">Premium Tour & Visa Details</span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#002147] tracking-tight uppercase leading-none mb-6">
                  {country.name}
                </h1>
                <p className="text-[#002147] font-bold text-sm sm:text-lg tracking-[0.2em] leading-relaxed uppercase opacity-85 mb-8">
                  {country.desc}
                </p>

                {/* Country Specific Visa Highlight */}
                <div className="bg-gradient-to-r from-[#A61D24]/10 via-[#A61D24]/5 to-transparent border-l-4 border-[#A61D24] p-5 sm:p-6 rounded-r-2xl mb-8">
                  <span className="text-[#A61D24] font-black uppercase tracking-wider text-[11px] block mb-2">Visa Requirement Notice</span>
                  <p className="text-[#002147] font-black text-sm sm:text-base leading-relaxed tracking-wide">
                    {country.visa}
                  </p>
                </div>

                {/* Requirements Grid */}
                <h4 className="text-[#002147] font-black uppercase text-xs tracking-wider mb-5">Standard Document Checklist:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {standardRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
                      {req.icon}
                      <span className="text-[#002147] font-bold text-xs sm:text-sm tracking-wide uppercase leading-tight">{req.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion / Call to Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 pt-8 mt-4">
                <a
                  href={`https://wa.me/923175477919?text=${encodeURIComponent(`Hello Harmain Travels, I would like to book a journey to ${country.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto !px-8 !py-4 !rounded-2xl !text-[11px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5"
                >
                  <Send size={16} /> Book Journey Now
                </a>
                <a
                  href={`https://wa.me/923175477919?text=${encodeURIComponent(`Hello Harmain Travels, I want to inquire about ${country.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#002147] font-black uppercase text-[11px] tracking-wider py-4 px-8 rounded-2xl text-center transition-all border border-slate-200/50"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* 1. Masterclass: Know Before You Go Section */}
          <div className="border-t border-slate-200/60 pt-16 mt-16">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Smart Traveler Handbook</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002147] text-center tracking-tight uppercase leading-none mb-12">
              Know Before You Go to {country.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all">
                <h4 className="text-[#002147] font-black uppercase text-sm tracking-wider mb-4 border-b border-slate-100 pb-2">Local Etiquette & Dress</h4>
                <p className="text-slate-600 text-xs sm:text-sm font-bold tracking-wide uppercase leading-relaxed">
                  Modest dress is highly appreciated across public and religious locations in {country.name}. Always ask permission before taking photos of local residents or spiritual buildings.
                </p>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all">
                <h4 className="text-[#002147] font-black uppercase text-sm tracking-wider mb-4 border-b border-slate-100 pb-2">Currency & Payment</h4>
                <p className="text-slate-600 text-xs sm:text-sm font-bold tracking-wide uppercase leading-relaxed">
                  Card acceptance is excellent in metropolitan spots. For traditional street bazaars or high-end local craft vendors, having local paper currency readily available is best.
                </p>
              </div>
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all">
                <h4 className="text-[#002147] font-black uppercase text-sm tracking-wider mb-4 border-b border-slate-100 pb-2">Transportation Modes</h4>
                <p className="text-slate-600 text-xs sm:text-sm font-bold tracking-wide uppercase leading-relaxed">
                  Public transit networks are fast and clean in modern hubs. Private premium air-conditioned shuttles and high-end rideshare platforms are best for personalized itineraries.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Dynamic Itineraries (H2, H3 optimized for AI scrappers) */}
          <div className="border-t border-slate-200/60 pt-16 mt-16">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Flexible Itinerary Frameworks</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002147] text-center tracking-tight uppercase leading-none mb-12">
              Curated Master itineraries for {country.name}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 3-Day Plan */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-2">3-Day Express Plan</h3>
                  <p className="text-[#A61D24] font-black text-[10px] uppercase tracking-[0.2em] mb-6">Short Escape & Business Transit</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D1</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Arrival, Luxury Check-in & Iconic City Sightseeing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D2</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Historical Core, UNESCO Heritage Walking Tour & Sunset Points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D3</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Souvenir Shopping & Modern Landmark Exploration Before Departure</span>
                    </li>
                  </ul>
                </div>
                <a href={`https://wa.me/923175477919?text=${encodeURIComponent(`Hello Harmain Travels, I am interested in the 3-Day Express Plan for ${country.name}.`)}`} target="_blank" rel="noopener noreferrer" className="text-center bg-slate-100 hover:bg-slate-200 text-[#002147] font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all border border-slate-200/50">
                  Select Express Itinerary
                </a>
              </div>

              {/* 5-Day Plan */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between relative ring-2 ring-[#A61D24]/10 bg-gradient-to-b from-white to-[#A61D24]/[0.01]">
                <span className="absolute top-6 right-6 text-[#A61D24] bg-[#A61D24]/10 px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full border border-[#A61D24]/20">Most Popular</span>
                <div>
                  <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-2">5-Day Classic Plan</h3>
                  <p className="text-[#A61D24] font-black text-[10px] uppercase tracking-[0.2em] mb-6">The Ultimate Immersion Itinerary</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D1-D2</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Full City Orientation, High-End Culinary Immersion & Cultural Highlights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D3-D4</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Countryside Escapes, Natural Scenic Sights & Historic Excursions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D5</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Leisure Rest, Traditional Bazaars, Local Tea Spots & Custom Departure</span>
                    </li>
                  </ul>
                </div>
                <a href={`https://wa.me/923175477919?text=${encodeURIComponent(`Hello Harmain Travels, I am interested in the 5-Day Classic Plan for ${country.name}.`)}`} target="_blank" rel="noopener noreferrer" className="text-center bg-[#A61D24] hover:bg-[#002147] text-white font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg">
                  Select Classic Itinerary
                </a>
              </div>

              {/* 10-Day Plan */}
              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-2">10-Day Grande Plan</h3>
                  <p className="text-[#A61D24] font-black text-[10px] uppercase tracking-[0.2em] mb-6">The All-In Grand Escapade</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D1-D3</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Settle in Capital, Exclusive Heritage Day Tours & Sunset Culinary Experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D4-D7</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Multi-City Region Circuit, Stunning Hidden Nature Reserve Reserves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-[#A61D24] shrink-0">D8-D10</span>
                      <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-snug">Remote Traditional Village Walks, Private Resort Stays & Rest Day</span>
                    </li>
                  </ul>
                </div>
                <a href={`https://wa.me/923175477919?text=${encodeURIComponent(`Hello Harmain Travels, I am interested in the 10-Day Grande Plan for ${country.name}.`)}`} target="_blank" rel="noopener noreferrer" className="text-center bg-slate-100 hover:bg-slate-200 text-[#002147] font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all border border-slate-200/50">
                  Select Grande Itinerary
                </a>
              </div>
            </div>
          </div>

          {/* 3. Interactive Seasonal Comparison Matrix (Best Time to Visit) */}
          <div className="border-t border-slate-200/60 pt-16 mt-16">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Seasonal Matrix</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002147] text-center tracking-tight uppercase leading-none mb-12">
              Best Time to Visit {country.name}
            </h2>
            <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-sm bg-white">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-[#002147] tracking-wider">Season / Months</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-[#002147] tracking-wider">Climate & Weather</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-[#002147] tracking-wider">Tourists Crowds</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-[#002147] tracking-wider">Package Price Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-black text-xs sm:text-sm uppercase text-[#002147]">Mar - Jun (Spring/Early Summer)</td>
                    <td className="p-5 font-bold text-xs text-slate-600 uppercase">Pleasant, moderate warmth with blooming landscapes</td>
                    <td className="p-5 font-black text-xs uppercase text-[#A61D24]">High / Peak Season</td>
                    <td className="p-5 font-bold text-xs uppercase text-slate-600">Standard / Premium Pricing</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-black text-xs sm:text-sm uppercase text-[#002147]">Jul - Sep (Peak Summer)</td>
                    <td className="p-5 font-bold text-xs text-slate-600 uppercase">Warm to hot sun, perfect for coastal retreats</td>
                    <td className="p-5 font-bold text-xs uppercase text-slate-600">Moderate Volume</td>
                    <td className="p-5 font-bold text-xs uppercase text-slate-600">Competitive / Economy Deals</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-black text-xs sm:text-sm uppercase text-[#002147]">Oct - Dec (Autumn/Winter)</td>
                    <td className="p-5 font-bold text-xs text-slate-600 uppercase">Crisp cool breeze, gorgeous colors, occasional snow</td>
                    <td className="p-5 font-bold text-xs uppercase text-slate-600">Lower Volumes</td>
                    <td className="p-5 font-black text-xs uppercase text-emerald-600">Value Packages</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. DIY vs. Harmain Comparison & FAQ */}
          <div className="border-t border-slate-200/60 pt-16 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* DIY Comparison */}
              <div>
                <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-3 block">Traveler Comparison</span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#002147] uppercase tracking-tighter mb-8 leading-tight">
                  DIY Booking vs. Harmain Travels
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl flex flex-col gap-2">
                    <h5 className="text-[#A61D24] font-black uppercase text-xs tracking-wider">Independent Booking (DIY)</h5>
                    <p className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      You manage your own confusing visa applications, risk booking non-refundable hotels, navigate public transit without local tips, and face potential hidden expenses.
                    </p>
                  </div>
                  <div className="bg-[#A61D24]/[0.02] border border-[#A61D24]/10 p-5 rounded-2xl flex flex-col gap-2">
                    <h5 className="text-[#002147] font-black uppercase text-xs tracking-wider">Harmain Travels Full Management</h5>
                    <p className="text-[#002147] text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      Enjoy a stress-free experience with direct visa applications, high-end pre-screened hotels, private ground transfers, and round-the-clock concierge support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advanced FAQ (With Schema structure) */}
              <div>
                <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-3 block">Expert Advice & FAQs</span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#002147] uppercase tracking-tighter mb-8 leading-tight">
                  Destination FAQs
                </h3>
                <div className="space-y-4">
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl">
                    <h5 className="text-[#002147] font-black uppercase text-xs tracking-wider mb-2">Q: How do I apply for a tourist visa to {country.name}?</h5>
                    <p className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      We offer a direct visa consultation service. Submit your valid passport, 6-month bank statement, and we will handle the rest smoothly.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl">
                    <h5 className="text-[#002147] font-black uppercase text-xs tracking-wider mb-2">Q: Are halal dining options available in {country.name}?</h5>
                    <p className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      Yes! Halal dining is available across major metropolitan areas. We include curated local halal restaurant recommendations in your travel handbook.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl">
                    <h5 className="text-[#002147] font-black uppercase text-xs tracking-wider mb-2">Q: Is it safe for solo female travelers?</h5>
                    <p className="text-slate-600 text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      Absolutely. {country.name} ranks highly for travel safety and security. Our team provides active 24/7 support throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADD MORE CONTENT: Curated Value / Travel Tips Section */}
          <div className="border-t border-slate-200/60 pt-16 mt-16">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Exclusive Advantages</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002147] text-center tracking-tight uppercase leading-none mb-12">
              The Harmain Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {travelInspirations.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-100/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100/60 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-[#002147] font-black uppercase text-sm tracking-wider mb-3 leading-tight">{item.title}</h4>
                  <p className="text-[#002147]/80 text-xs sm:text-sm font-semibold tracking-wide uppercase leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CountryDetail;
