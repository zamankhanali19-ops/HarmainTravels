import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Send, CheckCircle, Sparkles, ShieldCheck, Heart, Moon, Calendar } from 'lucide-react';
import { TravelCalendar } from '../components/common/TravelCalendar';
import SEO from '../components/common/SEO';

const umrahPackages = [
  {
    title: "Executive 5-Star Luxury",
    duration: "14 Days (7 Makkah / 7 Madinah)",
    price: "From PKR 445,000",
    hotelMakkah: "Clock Tower Hotel (50m from Haram)",
    hotelMadinah: "Pullman Zamzam (100m from Masjid Nabawi)",
    features: [
      "5-Star Full-Board Luxury Hotels",
      "Direct Airline Flights via Saudi Airlines / PIA",
      "VIP Private Luxury Transport (GMC / SUV)",
      "Premium Umrah Visa + Complete Processing",
      "Ziarat in Makkah & Madinah with Arabic guide",
      "24/7 On-Call Support & Guidance"
    ]
  },
  {
    title: "Premium 4-Star Elite",
    duration: "14 Days (7 Makkah / 7 Madinah)",
    price: "From PKR 345,000",
    hotelMakkah: "Anjum Hotel Makkah",
    hotelMadinah: "Nozol Royal Inn Madinah",
    features: [
      "4-Star Premium Hotels with Breakfast",
      "Standard Return Flights included",
      "Shared Group Luxury Coasters for Transport",
      "Full Processing of Umrah Visa",
      "Detailed Makkah & Madinah Ziarat tours",
      "Complete guidance materials provided"
    ]
  },
  {
    title: "Economy Plus Saver",
    duration: "15 Days (8 Makkah / 7 Madinah)",
    price: "From PKR 275,000",
    hotelMakkah: "Standard Economy (600m with shuttle)",
    hotelMadinah: "Standard Economy (450m walking)",
    features: [
      "Budget friendly accommodations",
      "Connecting / Indirect Flights included",
      "Bus group transport included",
      "Standard Umrah Visa & documentation",
      "Local Ziarat in Makkah & Madinah",
      "Round-the-clock group assistance"
    ]
  }
];

const Umrah = () => {
  const [fullName, setFullName] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(umrahPackages[0]);
  const [selectedAirline, setSelectedAirline] = useState("Saudi Airlines");
  const [travelDate, setTravelDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isWidgetDateOpen, setIsWidgetDateOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [isPackageOpen, setIsPackageOpen] = useState(false);
  const [isAirlineOpen, setIsAirlineOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const umrahSchema = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "14-Day Premium VIP Umrah Package from Islamabad",
      "description": "5-Star accommodations at Fairmont Makkah and Pullman Zamzam, including direct flights from ISB and VIP transport.",
      "brand": {
        "@type": "Brand",
        "name": "Harmain Travels"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "PKR",
        "price": "345000",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Harmain Travels"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a 5-star VIP Umrah package cost from Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Premium VIP Umrah packages typically start from PKR 345,000, which includes 5-star accommodations near the Haram, direct flights, and VIP ground transport."
          }
        },
        {
          "@type": "Question",
          "name": "Which 5-star Makkah hotels are closest to the Haram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We partner with the closest 5-star luxury hotels including the Fairmont Makkah Clock Royal Tower, Swissôtel Al Maqam, and Conrad Makkah, allowing you to step right into the Haram courtyard."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Premium Umrah Packages from Islamabad [2026] | Harmain Travels"
        description="Book your 5-Star VIP Umrah package from Islamabad today. Experience elite comfort with Haram-view hotels, direct flights, and a dedicated 24/7 concierge."
        url="https://harmaintravels.com/umrah-packages"
        schema={umrahSchema}
      />
      <Navbar />

      {/* 1. Dynamic Hero Section with Glorified Picture and Search Bar */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#002147] text-center px-4 min-h-[90vh] flex flex-col justify-center z-10">
        <div className="absolute inset-0 opacity-45 scale-105 pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d8f7ec?auto=format&fit=crop&q=80&w=2000" 
            alt="Holy Mosque Makkah Background" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#931328]/30 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block animate-reveal">Spiritual Awakening</span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 sm:mb-8 leading-none animate-reveal [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
            Elite <span className="text-[#A61D24]">Umrah</span> Services
          </h1>
          <p className="text-slate-200 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl font-medium tracking-wide leading-relaxed px-2 mb-10 sm:mb-14 animate-reveal drop-shadow-md">
            Embark on a completely tailored spiritual journey with Harmain Travels. Experience the ultimate luxury and convenience with our all-inclusive Premium Umrah itineraries.
          </p>

          {/* Squeezed into 1 line for desktop and responsive to phone screen */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-3 sm:p-4 xl:px-5 xl:py-4 max-w-7xl mx-auto shadow-2xl animate-reveal delay-200 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 items-stretch">
              {/* Full Name input */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm placeholder:text-slate-300"
                />
              </div>

              {/* Package Selection */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Package Selection</label>
                <button
                  type="button"
                  onClick={() => setIsPackageOpen(!isPackageOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  <span className="truncate">{selectedPackage.title}</span>
                  <span className="text-[#A61D24]/40 shrink-0 text-xs ml-1">▼</span>
                </button>
                {isPackageOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsPackageOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 min-w-[240px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top flex flex-col">
                      {umrahPackages.map((pkg, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedPackage(pkg);
                            setIsPackageOpen(false);
                          }}
                          className={`w-full text-left p-3.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition-colors ${
                            selectedPackage.title === pkg.title ? 'text-[#A61D24] bg-slate-50/60' : 'text-[#002147]'
                          }`}
                        >
                          {pkg.title}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Airline/Accommodation selection */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Airline Choice</label>
                <button
                  type="button"
                  onClick={() => setIsAirlineOpen(!isAirlineOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  <span className="truncate">{selectedAirline}</span>
                  <span className="text-[#A61D24]/40 shrink-0 text-xs ml-1">▼</span>
                </button>
                {isAirlineOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsAirlineOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 min-w-[240px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top flex flex-col">
                      {["Saudi Airlines", "Pakistan Int. (PIA)", "Emirates Airline", "Gulf Air"].map((air, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedAirline(air);
                            setIsAirlineOpen(false);
                          }}
                          className={`w-full text-left p-3.5 rounded-xl font-bold text-xs hover:bg-slate-50 transition-colors ${
                            selectedAirline === air ? 'text-[#A61D24] bg-slate-50/60' : 'text-[#002147]'
                          }`}
                        >
                          {air}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Date selection - Pro Popover */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Departure Date</label>
                <button
                  type="button"
                  onClick={() => setIsWidgetDateOpen(!isWidgetDateOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  {travelDate ? (
                    <span className="truncate">{travelDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  ) : (
                    <span className="text-slate-400 truncate">Select Date</span>
                  )}
                  <Calendar size={14} className="text-[#A61D24]/40 shrink-0 ml-1" />
                </button>
                {isWidgetDateOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsWidgetDateOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 sm:p-5 min-w-[320px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top">
                      <TravelCalendar 
                        selectedDate={travelDate} 
                        onDateSelect={(date) => {
                          setTravelDate(date);
                          setIsWidgetDateOpen(false);
                        }} 
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Travelers Popover with plus/minus counters */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Travelers / Applicants</label>
                <button 
                  type="button"
                  onClick={() => setIsTravelersOpen(!isTravelersOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  <span className="truncate">
                    {adults} Ad{adults > 1 ? 's' : 't'}{children > 0 ? `, ${children} Ch` : ''}{infants > 0 ? `, ${infants} Inf` : ''}
                  </span>
                  <span className="text-[#A61D24]/40 shrink-0 text-xs ml-1">▼</span>
                </button>

                {isTravelersOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsTravelersOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-5 min-w-[280px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top flex flex-col gap-4">
                      {/* Adults counter */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#002147] block leading-tight">Adults</span>
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">12+ years</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button 
                            type="button"
                            disabled={adults <= 1}
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-7 h-7 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center font-black text-[#002147] text-sm transition-colors"
                          >
                            -
                          </button>
                          <span className="font-black text-sm text-[#002147] w-4 text-center">{adults}</span>
                          <button 
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-7 h-7 bg-[#A61D24]/10 hover:bg-[#A61D24]/20 text-[#A61D24] rounded-lg flex items-center justify-center font-black text-sm transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children counter */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#002147] block leading-tight">Children</span>
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">2-11 years</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button 
                            type="button"
                            disabled={children <= 0}
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-7 h-7 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center font-black text-[#002147] text-sm transition-colors"
                          >
                            -
                          </button>
                          <span className="font-black text-sm text-[#002147] w-4 text-center">{children}</span>
                          <button 
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-7 h-7 bg-[#A61D24]/10 hover:bg-[#A61D24]/20 text-[#A61D24] rounded-lg flex items-center justify-center font-black text-sm transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infants counter */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#002147] block leading-tight">Infants</span>
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">0-2 years</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <button 
                            type="button"
                            disabled={infants <= 0}
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            className="w-7 h-7 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg flex items-center justify-center font-black text-[#002147] text-sm transition-colors"
                          >
                            -
                          </button>
                          <span className="font-black text-sm text-[#002147] w-4 text-center">{infants}</span>
                          <button 
                            type="button"
                            onClick={() => setInfants(infants + 1)}
                            className="w-7 h-7 bg-[#A61D24]/10 hover:bg-[#A61D24]/20 text-[#A61D24] rounded-lg flex items-center justify-center font-black text-sm transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </div>

              {/* Action Button CTA */}
              <div className="w-full flex items-center h-full">
                {(() => {
                  const isValid = fullName.trim() !== '' && travelDate !== null;
                  return (
                    <button 
                      disabled={!isValid}
                      onClick={() => {
                        if (!isValid) return;
                        const msg = `Assalam o Alaikum Harmain Travels, I want to book an Umrah package with the following details:
- Name: ${fullName || 'Not provided'}
- Package: ${selectedPackage?.title || 'Selected Package'}
- Airline: ${selectedAirline || 'Not provided'}
- Date: ${travelDate ? travelDate.toLocaleDateString() : 'Not provided'}
- Travelers: ${adults} Adults, ${children} Children, ${infants} Infants`;
                        window.open(`https://wa.me/923471234567?text=${encodeURIComponent(msg)}`, '_blank');
                      }}
                      className={`w-full h-full min-h-[60px] xl:min-h-[75px] rounded-xl sm:rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-500 shadow-xl flex items-center justify-center gap-2 py-3.5 xl:py-0 ${
                        isValid 
                          ? 'bg-[#A61D24] hover:bg-[#002147] hover:scale-[1.01] text-white cursor-pointer' 
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Quick Reserve <Sparkles size={16} />
                    </button>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Showcase - Glorified & Fully Responsive */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group hover:scale-[1.03] transition-all duration-300">
              <div className="w-16 h-16 bg-[#A61D24]/10 text-[#A61D24] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#A61D24] group-hover:text-white transition-all duration-300">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-3">Unmatched Care</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">Our experienced ground team provides complete, hands-on support for you and your family.</p>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group hover:scale-[1.03] transition-all duration-300">
              <div className="w-16 h-16 bg-[#A61D24]/10 text-[#A61D24] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#A61D24] group-hover:text-white transition-all duration-300">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-3">Haram Proximity</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">Rest easy in top-tier luxury hotels situated just steps away from the sacred courtyard of the Haram.</p>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group hover:scale-[1.03] transition-all duration-300">
              <div className="w-16 h-16 bg-[#A61D24]/10 text-[#A61D24] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#A61D24] group-hover:text-white transition-all duration-300">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-black text-[#002147] uppercase tracking-wider mb-3">Premium Visas</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">Hassle-free and secure electronic visa processing directly through official portals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Packages Grid - Glorified & Fully Responsive */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Blessed Selections</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#002147] uppercase tracking-tighter leading-none mb-6">Explore Our <span className="text-[#A61D24]">Umrah Packages</span></h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium tracking-wide leading-relaxed">Choose from Economy Saver, Premium Elite, or Luxury 5-Star deals tailored for comfort and devotion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {umrahPackages.map((pkg, i) => {
            const isSel = selectedPackage.title === pkg.title;
            return (
              <div 
                key={i} 
                onClick={() => setSelectedPackage(pkg)}
                className={`bg-white rounded-[3rem] p-8 sm:p-10 border-2 cursor-pointer transition-all duration-500 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:scale-[1.02] ${
                  isSel ? 'border-[#A61D24] bg-slate-50/70' : 'border-transparent hover:border-slate-200'
                }`}
              >
                {isSel && (
                  <div className="absolute top-6 right-6 bg-[#A61D24] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    Selected
                  </div>
                )}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#002147] uppercase tracking-tighter mb-2 leading-tight group-hover:text-[#A61D24] transition-colors">{pkg.title}</h3>
                  <p className="text-slate-400 text-xs font-black tracking-wider uppercase mb-5">{pkg.duration}</p>
                  <p className="text-3xl sm:text-4xl font-black text-[#A61D24] uppercase tracking-tighter mb-8">{pkg.price}</p>

                  <div className="border-t border-slate-100 pt-6 mb-6">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Makkah Stay</span>
                    <p className="text-sm sm:text-base font-bold text-[#002147] mb-4">{pkg.hotelMakkah}</p>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Madinah Stay</span>
                    <p className="text-sm sm:text-base font-bold text-[#002147]">{pkg.hotelMadinah}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-3.5 text-sm font-bold tracking-wide text-slate-600">
                        <CheckCircle size={18} className="text-[#A61D24] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Inquiry Form Section - Glorified & Fully Responsive */}
        <div id="package-inquiry-form" className="bg-white p-6 sm:p-12 md:p-16 rounded-[3rem] sm:rounded-[4rem] border-t-[14px] border-[#A61D24] shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start scroll-mt-24">
          <div className="md:col-span-5 space-y-6">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs block">Confirm Booking</span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#002147] uppercase tracking-tighter leading-none">Complete <br/><span className="text-[#A61D24]">Package Booking</span></h3>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">Let our specialized consultants reserve your Umrah package. Fill out your details completely or contact our Blue Area, Islamabad office.</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-[#A61D24]/20 transition-colors">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">Your Package Choice</span>
                <p className="text-lg font-black text-[#002147] uppercase tracking-tighter">{selectedPackage.title}</p>
              </div>
              <Moon size={32} className="text-[#A61D24]/40" />
            </div>
          </div>
          <div className="md:col-span-7 w-full">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
                  <input type="text" placeholder="First and Last Name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-[#A61D24] font-bold text-[#002147] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Email Address</label>
                  <input type="email" placeholder="example@domain.com" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-[#A61D24] font-bold text-[#002147] transition-all" />
                </div>
              </div>

              <div className="space-y-4 relative">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Departure Booking Date</label>
                <div className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center relative">
                  <div className="w-full sm:w-1/2 relative">
                    <button
                      type="button"
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      className={`w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none font-black text-[#002147] text-left flex justify-between items-center transition-all hover:bg-slate-100/60 hover:border-[#A61D24]/30 focus:ring-2 focus:ring-[#A61D24]/20 ${
                        isCalendarOpen ? 'border-[#A61D24]/40 ring-4 ring-[#A61D24]/5 bg-white' : ''
                      }`}
                    >
                      {travelDate ? (
                        <span className="text-[#002147] tracking-tight">{travelDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      ) : (
                        <span className="text-slate-400">Select Departure Date</span>
                      )}
                      <Calendar className={`${isCalendarOpen ? 'text-[#A61D24]' : 'text-[#A61D24]/40'} transition-colors duration-300`} size={18} />
                    </button>
                    {isCalendarOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-40 bg-transparent cursor-default" 
                          onClick={() => setIsCalendarOpen(false)}
                        ></div>
                        <div className="absolute top-full left-0 z-50 mt-3 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-100/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-5 w-full min-w-[340px] animate-reveal origin-top">
                          <TravelCalendar 
                            selectedDate={travelDate} 
                            onDateSelect={(date) => {
                              setTravelDate(date);
                              setIsCalendarOpen(false);
                            }} 
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center h-full min-h-[140px] shadow-inner">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">Scheduled Day</span>
                    {travelDate ? (
                      <p className="text-base sm:text-lg font-black text-[#A61D24] uppercase tracking-tighter leading-snug">
                        {travelDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    ) : (
                      <p className="text-slate-400 text-xs font-bold tracking-wide italic leading-relaxed">No date selected. Click above to open the calendar.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Notes / Requests</label>
                <textarea rows="4" placeholder="Any special arrangements for elderly or infants..." className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-[#A61D24] font-bold text-[#002147] transition-all"></textarea>
              </div>

              <button type="submit" onClick={(e) => e.preventDefault()} className="btn-primary w-full flex items-center justify-center gap-4 py-4 sm:py-5 font-black uppercase tracking-[0.2em] shadow-lg hover:scale-[1.01] transition-transform">
                Book Umrah Package <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Glorified Advanced In-Depth SEO Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#A61D24] font-black uppercase tracking-[0.4em] text-xs mb-4 block animate-reveal">Expert Guidance</span>
              <h3 className="text-3xl sm:text-5xl font-black text-[#002147] uppercase tracking-tighter leading-none mb-6">
                Spiritual Journey <br/><span className="text-[#A61D24] font-light italic">Refined with Care</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                At Harmain Travels, our 15-year legacy guarantees your spiritual satisfaction. Our local guides, high-speed VIP coaches, and five-star luxury hotel choices place your peace of mind first.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Trust Pakistan's premier licensed agent to manage your comprehensive Umrah visa processing, airline ticketing, hotel reservations, and historic landmark Ziarats in Makkah and Madinah.
              </p>
            </div>
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <h4 className="text-xl md:text-2xl font-black text-[#002147] uppercase tracking-tighter mb-6">Frequently Asked Questions</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-[#A61D24] mb-2 text-sm uppercase tracking-wide">How much does a 5-star VIP Umrah package cost?</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">Our Premium VIP Umrah packages typically start from PKR 345,000, which includes 5-star accommodations near the Haram, direct flights, and VIP ground transport.</p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h5 className="font-bold text-[#A61D24] mb-2 text-sm uppercase tracking-wide">Which 5-star Makkah hotels are closest?</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">We partner with the closest 5-star luxury hotels including the Fairmont Makkah Clock Royal Tower, Swissôtel Al Maqam, and Conrad Makkah, allowing you to step right into the Haram courtyard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Umrah;
