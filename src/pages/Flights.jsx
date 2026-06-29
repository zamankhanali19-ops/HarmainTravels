import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Calendar, Search, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { TravelCalendar } from '../components/common/TravelCalendar';
import SEO from '../components/common/SEO';

const popularRoutes = [
  { from: "Islamabad (ISB)", to: "Dubai (DXB)", price: "From $350", image: "https://images.unsplash.com/photo-1512453979798-5eaad0ff3b0d?auto=format&fit=crop&q=80&w=800" },
  { from: "Islamabad (ISB)", to: "Bangkok (BKK)", price: "From $420", image: "https://images.unsplash.com/photo-1504214208698-ea1919a23561?auto=format&fit=crop&q=80&w=800" },
  { from: "Islamabad (ISB)", to: "Istanbul (IST)", price: "From $580", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800" },
  { from: "Islamabad (ISB)", to: "Baku (GYD)", price: "From $390", image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&q=80&w=800" },
  { from: "Islamabad (ISB)", to: "Singapore (SIN)", price: "From $650", image: "https://images.unsplash.com/photo-1525598912003-663126343e1f?auto=format&fit=crop&q=80&w=800" },
  { from: "Islamabad (ISB)", to: "Tashkent (TAS)", price: "From $410", image: "https://images.unsplash.com/photo-1589405709128-48248248bb24?auto=format&fit=crop&q=80&w=800" }
];

const Flights = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('round');
  const [travelDate, setTravelDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "International Airline Ticketing",
    "provider": {
      "@type": "TravelAgency",
      "name": "Harmain Travels"
    },
    "serviceType": "Flight Reservations",
    "description": "Premium corporate and leisure airline ticketing services specializing in fast processing and VIP connections."
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Cheap Flights & Airline Ticketing from Pakistan | Harmain Travels"
        description="Book affordable international flights instantly. Harmain Travels offers exclusive airfare deals and 24/7 corporate ticketing support."
        url="https://harmaintravels.com/flights"
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="pt-64 pb-32 bg-[#002147] relative z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A61D24]/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.5em] text-xs mb-8 block">Global Skies</span>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Flight <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Reservations</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-xl font-bold tracking-[0.2em] uppercase leading-relaxed">
              Bespoke ticketing services for corporate and leisure travelers.
            </p>
          </div>

          {/* Booking Widget (Glorified Single-Line to match Umrah) */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-3 sm:p-4 xl:px-5 xl:py-4 max-w-7xl mx-auto shadow-2xl animate-reveal delay-200 relative z-30">
            {/* Trip Type Toggle */}
            <div className="flex gap-2 p-1.5 bg-slate-50/80 rounded-xl w-fit border border-slate-100 mb-4 ml-1">
              <button 
                onClick={() => setTripType('round')}
                className={`px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[9px] transition-all ${tripType === 'round' ? 'bg-[#002147] text-white shadow-md' : 'text-slate-400 hover:text-[#002147]'}`}
              >
                Round Trip
              </button>
              <button 
                onClick={() => setTripType('one')}
                className={`px-6 py-2 rounded-lg font-black uppercase tracking-widest text-[9px] transition-all ${tripType === 'one' ? 'bg-[#002147] text-white shadow-md' : 'text-slate-400 hover:text-[#002147]'}`}
              >
                One Way
              </button>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${tripType === 'round' ? 'xl:grid-cols-6' : 'xl:grid-cols-5'} gap-3 items-stretch`}>
              {/* Origin */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Origin</label>
                <div className="flex items-center gap-2 h-full min-h-[30px]">
                  <MapPin size={12} className="text-[#A61D24]/40 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Where from?" 
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm placeholder:text-slate-300" 
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Destination</label>
                <div className="flex items-center gap-2 h-full min-h-[30px]">
                  <MapPin size={12} className="text-[#A61D24]/40 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Where to?" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm placeholder:text-slate-300" 
                  />
                </div>
              </div>

              {/* Departure Date */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Departure Date</label>
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  {travelDate ? (
                    <span className="truncate">{travelDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  ) : (
                    <span className="text-slate-300 truncate">Select Date</span>
                  )}
                  <Calendar size={12} className="text-[#A61D24]/40 shrink-0 ml-1" />
                </button>
                {isCalendarOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsCalendarOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 sm:p-5 min-w-[320px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top">
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

              {/* Return Date - Only if Round Trip */}
              {tripType === 'round' && (
                <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                  <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Return Date</label>
                  <button
                    type="button"
                    onClick={() => setIsReturnCalendarOpen(!isReturnCalendarOpen)}
                    className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                  >
                    {returnDate ? (
                      <span className="truncate">{returnDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    ) : (
                      <span className="text-slate-300 truncate">Select Date</span>
                    )}
                    <Calendar size={12} className="text-[#A61D24]/40 shrink-0 ml-1" />
                  </button>
                  {isReturnCalendarOpen && (
                    <>
                      <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsReturnCalendarOpen(false)}></div>
                      <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 sm:p-5 min-w-[320px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top">
                        <TravelCalendar 
                          selectedDate={returnDate} 
                          onDateSelect={(date) => {
                            setReturnDate(date);
                            setIsReturnCalendarOpen(false);
                          }} 
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Passengers - Travelers popover */}
              <div className="text-left bg-slate-50/80 p-3 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-between h-full min-h-[75px] hover:border-[#A61D24]/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-1">Travelers</label>
                <button
                  type="button"
                  onClick={() => setIsTravelersOpen(!isTravelersOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-[#002147] text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  <span className="truncate">{adults + children + infants} Travelers</span>
                  <span className="text-[#A61D24]/40 shrink-0 text-xs ml-1">▼</span>
                </button>
                {isTravelersOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsTravelersOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 sm:p-5 min-w-[280px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top flex flex-col gap-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                        <div>
                          <p className="text-xs font-black text-[#002147]">Adults</p>
                          <p className="text-[9px] font-bold text-slate-400">Ages 12+</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={adults <= 1}
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-[#002147] min-w-[16px] text-center">{adults}</span>
                          <button 
                            type="button" 
                            onClick={() => setAdults(adults + 1)}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                        <div>
                          <p className="text-xs font-black text-[#002147]">Children</p>
                          <p className="text-[9px] font-bold text-slate-400">Ages 2-11</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={children <= 0}
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-[#002147] min-w-[16px] text-center">{children}</span>
                          <button 
                            type="button" 
                            onClick={() => setChildren(children + 1)}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-black text-[#002147]">Infants</p>
                          <p className="text-[9px] font-bold text-slate-400">Under 2</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={infants <= 0}
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-[#002147] min-w-[16px] text-center">{infants}</span>
                          <button 
                            type="button" 
                            onClick={() => setInfants(infants + 1)}
                            className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-black text-xs text-[#002147] hover:bg-slate-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Button */}
              {(() => {
                const isValid = origin.trim() !== '' && destination.trim() !== '' && travelDate !== null && (tripType === 'one' || returnDate !== null);
                return (
                  <button 
                    disabled={!isValid}
                    onClick={() => {
                      if (!isValid) return;
                      const msg = `Assalam o Alaikum Harmain Travels, I want to inquire about a flight booking:
- Trip Type: ${tripType === 'round' ? 'Round Trip' : 'One Way'}
- From: ${origin || 'Not provided'}
- To: ${destination || 'Not provided'}
- Departure Date: ${travelDate ? travelDate.toLocaleDateString() : 'Not provided'}
${tripType === 'round' ? `- Return Date: ${returnDate ? returnDate.toLocaleDateString() : 'Not provided'}` : ''}
- Passengers: ${adults} Adults, ${children} Children, ${infants} Infants`;
                      window.open(`https://wa.me/923175477919?text=${encodeURIComponent(msg)}`, '_blank');
                    }}
                    className={`w-full !py-4 !rounded-2xl shadow-xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-wider transition-all duration-300 ${
                      isValid 
                        ? 'btn-primary cursor-pointer' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed border-none'
                    }`}
                  >
                    Find Flights <Search size={16} />
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { t: "Best Connection", i: <Clock size={40} />, d: "We optimize for minimum layovers and premium airline quality." },
            { t: "Elite Partners", i: <Award size={40} />, d: "Partnered with Emirates, Qatar, and Turkish Airlines for VIP perks." },
            { t: "Safe Passage", i: <ShieldCheck size={40} />, d: "Full travel insurance and 24/7 dedicated support for every flight." }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-[#A61D24] mx-auto mb-8 group-hover:bg-[#A61D24] group-hover:text-white transition-all duration-500">
                {item.i}
              </div>
              <h3 className="text-xl font-black text-[#002147] uppercase tracking-tighter mb-4">{item.t}</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-[#A61D24] font-black uppercase tracking-[0.5em] text-xs mb-6 block">Direct Hubs</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#002147] uppercase tracking-tighter">
                Popular <span className="text-[#A61D24]">Asian Routes</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoutes.map((route, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 md:h-60">
                  <img src={route.image} alt={route.to} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 md:bottom-6 md:left-10 text-white min-w-0 pr-4">
                    <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter leading-tight break-words truncate">{route.to}</h3>
                    <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest truncate">From {route.from}</p>
                  </div>
                </div>
                <div className="p-5 md:p-8 flex justify-between items-center gap-4">
                  <div className="min-w-0">
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest block mb-1 text-left truncate">Starting at</span>
                    <span className="text-base md:text-xl font-black text-[#002147] truncate">{route.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/923175477919?text=I am looking for a flight from ${route.from} to ${route.to}. Please provide current fares and availability.`}
                    target="_blank"
                    className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#A61D24] group-hover:bg-[#002147] group-hover:text-white transition-all duration-500 shrink-0"
                  >
                    <ArrowRight size={20} className="md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airline Partners */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-slate-300 font-black uppercase tracking-[0.5em] text-xs mb-20">Global Airline Network</h3>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Text-based logos for premium look if images aren't available */}
             {["Emirates", "Qatar Airways", "Turkish", "PIA", "Etihad"].map((airline, i) => (
               <span key={i} className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-400 hover:text-[#002147] cursor-pointer transition-colors">
                 {airline}
               </span>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flights;
