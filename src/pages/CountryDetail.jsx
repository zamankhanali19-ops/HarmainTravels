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
    .find((c) => c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') === countrySlug);

  const canonicalUrl = `https://harmaintravels.com/destinations/${countrySlug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!country) {
    return (
      <div className="min-h-screen bg-brand-bg-primary flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-black text-brand-white mb-4 uppercase tracking-wider">Country Not Found</h2>
        <Link to="/destinations" className="btn-primary !px-6 !py-3">Go Back to Destinations</Link>
      </div>
    );
  }

  const standardRequirements = [
    { icon: <FileCheck size={24} className="text-brand-red" />, text: 'Original Passport (6 Months Validity)' },
    { icon: <UserCheck size={24} className="text-brand-red" />, text: 'Recent Photos (White Background)' },
    { icon: <Wallet size={24} className="text-brand-red" />, text: 'Bank Statement (Last 6 Months)' },
    { icon: <Calendar size={24} className="text-brand-red" />, text: 'NTN & FBR Returns (If applicable)' },
    { icon: <ShieldAlert size={24} className="text-brand-red" />, text: 'Vaccination Certificate (Polio/Covid)' }
  ];

  const travelInspirations = [
    { icon: <Compass size={24} className="text-brand-white" />, title: 'Premium Curated Itineraries', text: 'Tailor-made itineraries customized to match your individual exploration pace and choices.' },
    { icon: <Sparkles size={24} className="text-brand-white" />, title: 'Exclusive Local Experiences', text: 'Gain access to premium off-the-beaten-path experiences, guided by accredited local destination masters.' },
    { icon: <CheckCircle size={24} className="text-brand-white" />, title: 'End-to-End Concierge', text: 'Enjoy a frictionless, end-to-end luxury travel experience from premium arrivals to high-end stays.' }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": country.name,
      "description": country.desc,
      "image": country.image,
      "touristType": [
        "Leisure",
        "Business",
        "Family"
      ],
      "includesAttraction": {
        "@type": "TouristAttraction",
        "name": country.famousPlace
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "TravelAction",
      "name": `Book a trip to ${country.name}`,
      "target": `https://harmaintravels.com/destinations/${countrySlug}`,
      "agent": {
        "@type": "TravelAgency",
        "name": "Harmain Travels",
        "url": "https://harmaintravels.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Blue Area",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        }
      },
      "location": {
        "@type": "Place",
        "name": country.name
      }
    },
    ...(country.faq ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": country.faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    }] : [])
  ];

  return (
    <div className="min-h-screen bg-brand-bg-primary flex flex-col">
      <SEO 
        title={country.seoTitle || `${country.name} Tours & Visa Requirements | Harmain Travels`}
        description={country.seoDescription || `Plan your next premium tour to ${country.name} with Harmain Travels. Check the must-visit spots, complete document requirements, and apply for a visa today.`}
        url={canonicalUrl}
        schema={schema}
      />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Go Back Button */}
          <Link
            to="/destinations"
            className="inline-flex items-center gap-3 bg-brand-bg-secondary hover:bg-brand-bg-primary text-brand-white hover:text-brand-red font-black uppercase text-xs tracking-wider transition-all mb-8 md:mb-12 px-6 py-3.5 rounded-full border border-white/10/60 shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={16} /> Go Back to Destinations
          </Link>

          {/* Immersive Header / Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
            {/* Country Image Backdrop */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/5/50 aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[300px] sm:min-h-[450px]">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <span className="text-brand-red font-black uppercase text-[10px] tracking-wider bg-brand-bg-secondary/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">Famous Spot</span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mt-2">{country.famousPlace}</h3>
              </div>
            </div>

            {/* Country Information Details */}
            <div className="flex flex-col h-full justify-between py-2">
              <div>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-3 block">Premium Tour & Visa Details</span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-brand-white tracking-tight uppercase leading-none mb-6">
                  {country.name}
                </h1>
                <p className="text-brand-white font-bold text-sm sm:text-lg tracking-[0.2em] leading-relaxed uppercase opacity-85 mb-8">
                  {country.desc}
                </p>

                {country.longDescription && (
                  <div className="mb-10 text-brand-silver font-medium text-sm sm:text-base leading-relaxed whitespace-pre-wrap opacity-90 border-l-2 border-white/10 pl-6 py-2">
                    {country.longDescription}
                  </div>
                )}

                {/* Country Specific Visa Highlight */}
                <div className="bg-gradient-to-r from-brand-red/10 via-brand-red/5 to-transparent border-l-4 border-brand-red p-5 sm:p-6 rounded-r-2xl mb-8">
                  <span className="text-brand-red font-black uppercase tracking-wider text-[11px] block mb-2">Visa Requirement Notice</span>
                  <p className="text-brand-white font-black text-sm sm:text-base leading-relaxed tracking-wide">
                    {country.visa}
                  </p>
                </div>

                {/* Dynamic Visa Requirements Grid */}
                <h4 className="text-brand-white font-black uppercase text-xs tracking-wider mb-5">Latest Visa Requirements (Pakistani Passport):</h4>
                <div className="bg-brand-bg-secondary border border-brand-red/20 rounded-2xl p-6 shadow-sm mb-10">
                  <div className="flex flex-col sm:flex-row justify-between border-b border-white/5 pb-4 mb-4 gap-4">
                    <div>
                      <span className="text-brand-silver font-bold uppercase text-[10px] tracking-wider block mb-1">Official Visa Fee (Approx)</span>
                      <span className="text-brand-red font-black text-lg">{country.visaDetails?.fee || 'Contact Us for latest fees'}</span>
                    </div>
                    <div>
                      <span className="text-brand-silver font-bold uppercase text-[10px] tracking-wider block mb-1">Processing Time</span>
                      <span className="text-brand-white font-black text-lg">{country.visaDetails?.processingTime || 'Varies'}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {(country.visaDetails?.requirements || []).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-brand-red shrink-0 mt-0.5" />
                        <span className="text-brand-white font-bold text-xs sm:text-sm tracking-wide uppercase leading-tight">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-silver text-[9px] mt-4 uppercase italic">Note: Visa fees and requirements are subject to change without notice based on official embassy updates.</p>
                </div>
              </div>

              {/* Conversion / Call to Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/5 pt-8 mt-4">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I would like to book a journey to ${country.name}.` } }))}
                  className="btn-primary w-full sm:w-auto !px-8 !py-4 !rounded-2xl !text-[11px] shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5"
                >
                  <Send size={16} /> Book Journey Now
                </button>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I want to inquire about ${country.name}.` } }))}
                  className="w-full sm:w-auto bg-brand-bg-secondary hover:bg-white/10 text-brand-white font-black uppercase text-[11px] tracking-wider py-4 px-8 rounded-2xl text-center transition-all border border-white/10/50"
                >
                  Inquire via WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Top Attractions */}
          {country.topAttractions && (
            <div className="border-t border-white/10/60 pt-16 mt-16">
              <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Must Visit Places</span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
                Top Attractions in {country.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {country.topAttractions.map((attr, idx) => (
                  <div key={idx} className="bg-brand-bg-secondary border border-white/5 p-6 rounded-[2rem] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <h4 className="text-brand-white font-black uppercase text-sm tracking-wider mb-2">{attr.name}</h4>
                      <p className="text-brand-silver text-[10px] font-bold uppercase tracking-widest text-brand-red mb-3">{attr.location}</p>
                      <p className="text-brand-silver text-xs sm:text-sm font-bold tracking-wide uppercase leading-relaxed mb-4">
                        {attr.description}
                      </p>
                    </div>
                    {attr.tip && (
                      <div className="bg-brand-bg-primary p-3 rounded-xl border border-brand-red/10 mt-auto">
                        <span className="text-brand-red font-black uppercase text-[9px] tracking-wider block mb-1">Pro Tip</span>
                        <p className="text-brand-white text-[10px] sm:text-xs font-semibold uppercase">{attr.tip}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Smart Traveler Handbook & Islamic Info */}
          <div className="border-t border-white/10/60 pt-16 mt-16">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Smart Traveler Handbook</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
              Essential Travel Guide
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {country.travelGuide ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-white uppercase mb-4">General Information</h3>
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Flight Info from PK</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.travelGuide.flightInfo}</p>
                  </div>
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Currency & Exchange</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.travelGuide.currency}</p>
                  </div>
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Language & Communication</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.travelGuide.language}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-white uppercase mb-4">Local Etiquette</h3>
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl">
                    <p className="text-brand-silver text-xs font-bold uppercase leading-relaxed">
                      Modest dress is highly appreciated across public and religious locations in {country.name}. Always ask permission before taking photos.
                    </p>
                  </div>
                </div>
              )}

              {country.islamicInfo ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-white uppercase mb-4">Halal & Islamic Facilities</h3>
                  <div className="bg-brand-bg-secondary border border-brand-red/10 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Halal Food Availability</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.islamicInfo.halalFood}</p>
                  </div>
                  <div className="bg-brand-bg-secondary border border-brand-red/10 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Mosques & Centers</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.islamicInfo.mosques}</p>
                  </div>
                  <div className="bg-brand-bg-secondary border border-brand-red/10 p-5 rounded-2xl">
                    <span className="text-brand-red font-black uppercase text-[10px] block mb-1">Prayer Facilities</span>
                    <p className="text-brand-silver text-xs font-bold uppercase">{country.islamicInfo.prayerFacilities}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-white uppercase mb-4">Currency & Transport</h3>
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl">
                    <p className="text-brand-silver text-xs font-bold uppercase leading-relaxed">
                      Card acceptance is excellent in metropolitan spots. Public transit networks are fast and clean in modern hubs.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. Dynamic Itineraries (H2, H3 optimized for AI scrappers) */}
          <div className="border-t border-white/10/60 pt-16 mt-16">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Flexible Itinerary Frameworks</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
              Curated Master itineraries for {country.name}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 3-Day Plan */}
              <div className="bg-brand-bg-secondary border border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-brand-white uppercase tracking-wider mb-2">3-Day Express Plan</h3>
                  <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.2em] mb-6">Short Escape & Business Transit</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D1</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Arrival, Luxury Check-in & Iconic City Sightseeing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D2</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Historical Core, UNESCO Heritage Walking Tour & Sunset Points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D3</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Souvenir Shopping & Modern Landmark Exploration Before Departure</span>
                    </li>
                  </ul>
                </div>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I am interested in the 3-Day Express Plan for ${country.name}.` } }))} className="text-center bg-brand-bg-secondary hover:bg-white/10 text-brand-white font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all border border-white/10/50 w-full">
                  Select Express Itinerary
                </button>
              </div>

              {/* 5-Day Plan */}
              <div className="bg-brand-bg-secondary border border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between relative ring-2 ring-brand-red/10 bg-gradient-to-b from-white to-brand-red/[0.01]">
                <span className="absolute top-6 right-6 text-brand-red bg-brand-red/10 px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full border border-brand-red/20">Most Popular</span>
                <div>
                  <h3 className="text-xl font-black text-brand-white uppercase tracking-wider mb-2">5-Day Classic Plan</h3>
                  <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.2em] mb-6">The Ultimate Immersion Itinerary</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D1-D2</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Full City Orientation, High-End Culinary Immersion & Cultural Highlights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D3-D4</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Countryside Escapes, Natural Scenic Sights & Historic Excursions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D5</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Leisure Rest, Traditional Bazaars, Local Tea Spots & Custom Departure</span>
                    </li>
                  </ul>
                </div>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I am interested in the 5-Day Classic Plan for ${country.name}.` } }))} className="text-center bg-brand-red hover:bg-brand-bg-primary text-white font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg w-full">
                  Select Classic Itinerary
                </button>
              </div>

              {/* 10-Day Plan */}
              <div className="bg-brand-bg-secondary border border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-brand-white uppercase tracking-wider mb-2">10-Day Grande Plan</h3>
                  <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.2em] mb-6">The All-In Grand Escapade</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D1-D3</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Settle in Capital, Exclusive Heritage Day Tours & Sunset Culinary Experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D4-D7</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Multi-City Region Circuit, Stunning Hidden Nature Reserve Reserves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-black text-brand-red shrink-0">D8-D10</span>
                      <span className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-snug">Remote Traditional Village Walks, Private Resort Stays & Rest Day</span>
                    </li>
                  </ul>
                </div>
                <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I am interested in the 10-Day Grande Plan for ${country.name}.` } }))} className="text-center bg-brand-bg-secondary hover:bg-white/10 text-brand-white font-black uppercase text-xs tracking-wider py-4 px-6 rounded-xl transition-all border border-white/10/50 w-full">
                  Select Grande Itinerary
                </button>
              </div>
            </div>
          </div>

          {/* 3. Interactive Seasonal Comparison Matrix (Best Time to Visit) */}
          <div className="border-t border-white/10/60 pt-16 mt-16">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Seasonal Matrix</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
              Best Time to Visit {country.name}
            </h2>
            <div className="overflow-x-auto rounded-[2rem] border border-white/5 shadow-sm bg-brand-bg-secondary">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-brand-bg-primary border-b border-white/5">
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-brand-white tracking-wider">Season / Months</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-brand-white tracking-wider">Climate & Weather</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-brand-white tracking-wider">Tourists Crowds</th>
                    <th className="p-5 font-black uppercase text-[10px] sm:text-xs text-brand-white tracking-wider">Package Price Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {country.seasonalGuide ? (
                    country.seasonalGuide.map((season, idx) => (
                      <tr key={idx} className="hover:bg-brand-bg-primary/50 transition-colors">
                        <td className="p-5 font-black text-xs sm:text-sm uppercase text-brand-white">{season.season}</td>
                        <td className="p-5 font-bold text-xs text-brand-silver uppercase">{season.weather}</td>
                        <td className="p-5 font-black text-xs uppercase text-brand-red">{season.crowd}</td>
                        <td className="p-5 font-bold text-xs uppercase text-brand-silver">{season.price}</td>
                      </tr>
                    ))
                  ) : (
                    <>
                      <tr className="hover:bg-brand-bg-primary/50 transition-colors">
                        <td className="p-5 font-black text-xs sm:text-sm uppercase text-brand-white">Mar - Jun (Spring/Early Summer)</td>
                        <td className="p-5 font-bold text-xs text-brand-silver uppercase">Pleasant, moderate warmth with blooming landscapes</td>
                        <td className="p-5 font-black text-xs uppercase text-brand-red">High / Peak Season</td>
                        <td className="p-5 font-bold text-xs uppercase text-brand-silver">Standard / Premium Pricing</td>
                      </tr>
                      <tr className="hover:bg-brand-bg-primary/50 transition-colors">
                        <td className="p-5 font-black text-xs sm:text-sm uppercase text-brand-white">Jul - Sep (Peak Summer)</td>
                        <td className="p-5 font-bold text-xs text-brand-silver uppercase">Warm to hot sun, perfect for coastal retreats</td>
                        <td className="p-5 font-bold text-xs uppercase text-brand-silver">Moderate Volume</td>
                        <td className="p-5 font-bold text-xs uppercase text-brand-silver">Competitive / Economy Deals</td>
                      </tr>
                      <tr className="hover:bg-brand-bg-primary/50 transition-colors">
                        <td className="p-5 font-black text-xs sm:text-sm uppercase text-brand-white">Oct - Dec (Autumn/Winter)</td>
                        <td className="p-5 font-bold text-xs text-brand-silver uppercase">Crisp cool breeze, gorgeous colors, occasional snow</td>
                        <td className="p-5 font-bold text-xs uppercase text-brand-silver">Lower Volumes</td>
                        <td className="p-5 font-black text-xs uppercase text-emerald-600">Value Packages</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dynamic Cost Breakdown */}
          {country.costBreakdown && (
            <div className="border-t border-white/10/60 pt-16 mt-16">
              <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Budget Planning</span>
              <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
                Estimated Trip Cost Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="bg-brand-bg-secondary border border-white/5 p-6 rounded-2xl shadow-sm text-center">
                  <span className="text-brand-red font-black uppercase text-[10px] tracking-wider block mb-2">Flights (Return)</span>
                  <p className="text-brand-white text-lg font-black uppercase">{country.costBreakdown.flightRange}</p>
                </div>
                <div className="bg-brand-bg-secondary border border-white/5 p-6 rounded-2xl shadow-sm text-center">
                  <span className="text-brand-red font-black uppercase text-[10px] tracking-wider block mb-2">Daily Hotel (Per Night)</span>
                  <p className="text-brand-white text-lg font-black uppercase">{country.costBreakdown.hotelRange}</p>
                </div>
                <div className="bg-brand-bg-secondary border border-white/5 p-6 rounded-2xl shadow-sm text-center">
                  <span className="text-brand-red font-black uppercase text-[10px] tracking-wider block mb-2">Daily Food (Per Person)</span>
                  <p className="text-brand-white text-lg font-black uppercase">{country.costBreakdown.foodDaily}</p>
                </div>
                <div className="bg-brand-bg-secondary border border-white/5 p-6 rounded-2xl shadow-sm text-center">
                  <span className="text-brand-red font-black uppercase text-[10px] tracking-wider block mb-2">Local Transport (Daily)</span>
                  <p className="text-brand-white text-lg font-black uppercase">{country.costBreakdown.transportDaily}</p>
                </div>
              </div>
              <p className="text-center text-brand-silver text-[10px] uppercase font-bold mt-6 italic">* Costs are estimated in PKR (unless stated otherwise) and can vary based on season and luxury level.</p>
            </div>
          )}

          {/* 4. DIY vs. Harmain Comparison & FAQ */}
          <div className="border-t border-white/10/60 pt-16 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* DIY Comparison */}
              <div>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-3 block">Traveler Comparison</span>
                <h3 className="text-2xl sm:text-4xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-tight">
                  DIY Booking vs. Harmain Travels
                </h3>
                <div className="space-y-4">
                  <div className="bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl flex flex-col gap-2">
                    <h5 className="text-brand-red font-black uppercase text-xs tracking-wider">Independent Booking (DIY)</h5>
                    <p className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      You manage your own confusing visa applications, risk booking non-refundable hotels, navigate public transit without local tips, and face potential hidden expenses.
                    </p>
                  </div>
                  <div className="bg-brand-red/[0.02] border border-brand-red/10 p-5 rounded-2xl flex flex-col gap-2">
                    <h5 className="text-brand-white font-black uppercase text-xs tracking-wider">Harmain Travels Full Management</h5>
                    <p className="text-brand-white text-xs sm:text-sm font-bold uppercase leading-relaxed">
                      Enjoy a stress-free experience with direct visa applications, high-end pre-screened hotels, private ground transfers, and round-the-clock concierge support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advanced FAQ (With Schema structure) */}
              <div>
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-3 block">Expert Advice & FAQs</span>
                <h3 className="text-2xl sm:text-4xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-tight">
                  Destination FAQs
                </h3>
                <div className="space-y-4">
                  {(country.faq || []).map((faq, idx) => (
                    <details key={idx} className="group bg-brand-bg-secondary border border-white/5 p-5 rounded-2xl cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex justify-between items-center font-black uppercase text-xs tracking-wider text-brand-white outline-none">
                        <span>Q: {faq.q}</span>
                        <span className="text-brand-red group-open:rotate-180 transition-transform duration-300">▼</span>
                      </summary>
                      <p className="text-brand-silver text-xs sm:text-sm font-bold uppercase leading-relaxed mt-4 pt-4 border-t border-white/5">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ADD MORE CONTENT: Curated Value / Travel Tips Section */}
          <div className="border-t border-white/10/60 pt-16 mt-16">
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-4 block text-center">Exclusive Advantages</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-white text-center tracking-tight uppercase leading-none mb-12">
              The Harmain Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {travelInspirations.map((item, idx) => (
                <div key={idx} className="bg-brand-bg-secondary border border-white/5/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-bg-primary border border-white/5/60 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-brand-white font-black uppercase text-sm tracking-wider mb-3 leading-tight">{item.title}</h4>
                  <p className="text-brand-white/80 text-xs sm:text-sm font-semibold tracking-wide uppercase leading-relaxed">{item.text}</p>
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
