import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Search, MapPin, Star, Calendar, ArrowRight, Building2, BedDouble, ShieldCheck } from 'lucide-react';
import { TravelCalendar } from '../components/common/TravelCalendar';
import SEO from '../components/common/SEO';
const featuredHotels = [
  {
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    price: "From $1,200",
    rating: 5,
    tag: "Ultra Luxury"
  },
  {
    name: "Ayana Resort",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
    price: "From $450",
    rating: 5,
    tag: "Tropical Haven"
  },
  {
    name: "Fairmont Flame Towers",
    location: "Baku, Azerbaijan",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    price: "From $320",
    rating: 5,
    tag: "City Landmark"
  },
  {
    name: "The Ritz-Carlton",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    price: "From $680",
    rating: 5,
    tag: "Urban Zen"
  },
  {
    name: "Marina Bay Sands",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200",
    price: "From $550",
    rating: 5,
    tag: "Skyline Icon"
  },
  {
    name: "Amanbagh",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?auto=format&fit=crop&q=80&w=1200",
    price: "From $890",
    rating: 5,
    tag: "Royal Heritage"
  }
];

const Hotels = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Hotel Reservations",
    "provider": {
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
        },
      "telephone": "+923258880050"
    },
    "serviceType": "Hotel Booking",
    "description": "Exclusive 5-star hotel, private villa, and premium resort bookings across Asia with VIP perks.",
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="Luxury Hotel Bookings Worldwide | Harmain Travels"
        description="Book premium luxury hotels worldwide with Harmain Travels. Enjoy exclusive rates, VIP amenities, and exceptional service for your global stays."
        url="https://harmaintravels.com/hotels"
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="pt-64 pb-32 bg-brand-bg-primary relative z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-red font-black uppercase tracking-[0.5em] text-xs mb-8 block">Iconic Stays</span>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Premium <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Hotels</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-xl font-bold tracking-[0.2em] uppercase leading-relaxed">
              Curated luxury accommodations across the Asian continent.
            </p>
          </div>

          {/* Search Widget */}
          <div className="bg-brand-bg-secondary/95 backdrop-blur-xl border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-3 sm:p-4 xl:px-5 xl:py-4 max-w-7xl mx-auto shadow-2xl animate-reveal delay-200 relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 items-stretch">
              {/* Destination */}
              <div className="text-left bg-brand-bg-primary/80 p-3 rounded-xl sm:rounded-2xl border border-white/5 flex flex-col justify-between h-full min-h-[75px] hover:border-brand-red/20 transition-colors">
                <label className="text-[8px] font-black uppercase tracking-wider text-brand-muted mb-1">Destination</label>
                <div className="flex items-center gap-2 h-full min-h-[30px]">
                  <MapPin size={12} className="text-brand-red/40 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Where to stay?" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="bg-transparent border-0 outline-none w-full font-black text-brand-white text-xs sm:text-sm placeholder:text-brand-muted" 
                  />
                </div>
              </div>

              {/* Check-in Date */}
              <div className="text-left bg-brand-bg-primary/80 p-3 rounded-xl sm:rounded-2xl border border-white/5 flex flex-col justify-between h-full min-h-[75px] hover:border-brand-red/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-brand-muted mb-1">Check-In</label>
                <button
                  type="button"
                  onClick={() => setIsCheckInOpen(!isCheckInOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-brand-white text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  {checkInDate ? (
                    <span className="truncate">{checkInDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  ) : (
                    <span className="text-brand-muted truncate">Select Date</span>
                  )}
                  <Calendar size={12} className="text-brand-red/40 shrink-0 ml-1" />
                </button>
                {isCheckInOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsCheckInOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-brand-bg-secondary/95 backdrop-blur-xl border border-white/5 rounded-2xl p-4 sm:p-5 min-w-[320px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top">
                      <TravelCalendar 
                        selectedDate={checkInDate} 
                        onDateSelect={(date) => {
                          setCheckInDate(date);
                          setIsCheckInOpen(false);
                        }} 
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Check-out Date */}
              <div className="text-left bg-brand-bg-primary/80 p-3 rounded-xl sm:rounded-2xl border border-white/5 flex flex-col justify-between h-full min-h-[75px] hover:border-brand-red/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-brand-muted mb-1">Check-Out</label>
                <button
                  type="button"
                  onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-brand-white text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  {checkOutDate ? (
                    <span className="truncate">{checkOutDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  ) : (
                    <span className="text-brand-muted truncate">Select Date</span>
                  )}
                  <Calendar size={12} className="text-brand-red/40 shrink-0 ml-1" />
                </button>
                {isCheckOutOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsCheckOutOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-brand-bg-secondary/95 backdrop-blur-xl border border-white/5 rounded-2xl p-4 sm:p-5 min-w-[320px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top">
                      <TravelCalendar 
                        selectedDate={checkOutDate} 
                        onDateSelect={(date) => {
                          setCheckOutDate(date);
                          setIsCheckOutOpen(false);
                        }} 
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Guests - Travelers popover */}
              <div className="text-left bg-brand-bg-primary/80 p-3 rounded-xl sm:rounded-2xl border border-white/5 flex flex-col justify-between h-full min-h-[75px] hover:border-brand-red/20 transition-colors relative">
                <label className="text-[8px] font-black uppercase tracking-wider text-brand-muted mb-1">Guests</label>
                <button
                  type="button"
                  onClick={() => setIsTravelersOpen(!isTravelersOpen)}
                  className="bg-transparent border-0 outline-none w-full font-black text-brand-white text-xs sm:text-sm text-left flex justify-between items-center h-full min-h-[30px]"
                >
                  <span className="truncate">{adults + children + infants} Guests</span>
                  <span className="text-brand-red/40 shrink-0 text-xs ml-1">▼</span>
                </button>
                {isTravelersOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsTravelersOpen(false)}></div>
                    <div className="absolute top-full left-0 z-50 mt-2 bg-brand-bg-secondary/95 backdrop-blur-xl border border-white/5 rounded-2xl p-4 sm:p-5 min-w-[280px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-reveal origin-top flex flex-col gap-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div>
                          <p className="text-xs font-black text-brand-white">Adults</p>
                          <p className="text-[9px] font-bold text-brand-muted">Ages 12+</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={adults <= 1}
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-brand-white min-w-[16px] text-center">{adults}</span>
                          <button 
                            type="button" 
                            onClick={() => setAdults(adults + 1)}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div>
                          <p className="text-xs font-black text-brand-white">Children</p>
                          <p className="text-[9px] font-bold text-brand-muted">Ages 2-11</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={children <= 0}
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-brand-white min-w-[16px] text-center">{children}</span>
                          <button 
                            type="button" 
                            onClick={() => setChildren(children + 1)}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-black text-brand-white">Infants</p>
                          <p className="text-[9px] font-bold text-brand-muted">Under 2</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            type="button" 
                            disabled={infants <= 0}
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            -
                          </button>
                          <span className="text-xs font-black text-brand-white min-w-[16px] text-center">{infants}</span>
                          <button 
                            type="button" 
                            onClick={() => setInfants(infants + 1)}
                            className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center font-black text-xs text-brand-white hover:bg-brand-bg-primary"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Search Action Button */}
              {(() => {
                const isValid = destination.trim() !== '' && checkInDate !== null && checkOutDate !== null;
                return (
                  <button 
                    disabled={!isValid}
                    onClick={() => {
                      if (!isValid) return;
                      const msg = `Assalam o Alaikum Harmain Travels, I want to inquire about a hotel stay booking:
- Destination: ${destination || 'Not provided'}
- Check-in Date: ${checkInDate ? checkInDate.toLocaleDateString() : 'Not provided'}
- Check-out Date: ${checkOutDate ? checkOutDate.toLocaleDateString() : 'Not provided'}
- Guests: ${adults} Adults, ${children} Children, ${infants} Infants`;
                      window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: msg } }));
                    }}
                    className={`w-full !py-4 !rounded-2xl shadow-xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-wider transition-all duration-300 ${
                      isValid 
                        ? 'btn-primary cursor-pointer' 
                        : 'bg-white/10 text-brand-muted cursor-not-allowed border-none'
                    }`}
                  >
                    Find Stays <Search size={16} />
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Why Book with Harmain */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { t: "Best Rate Guarantee", i: <ShieldCheck size={40} />, d: "Access to exclusive corporate and agency rates unavailable to the public." },
            { t: "Handpicked Stays", i: <Building2 size={40} />, d: "We personally verify every luxury hotel for quality and architectural excellence." },
            { t: "VIP Services", i: <BedDouble size={40} />, d: "Enjoy early check-ins, room upgrades, and free breakfast at partner hotels." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="w-20 h-20 bg-brand-bg-primary rounded-3xl flex items-center justify-center text-brand-red shrink-0">
                {item.i}
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-white uppercase tracking-tighter mb-4">{item.t}</h3>
                <p className="text-brand-muted font-medium leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotel Grid */}
      <section className="py-24 bg-brand-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-brand-white uppercase tracking-tighter">
              Explore <span className="text-brand-red">Iconic Stays</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredHotels.map((hotel, i) => (
              <div key={i} className="group bg-brand-bg-secondary rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <img src={hotel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt={hotel.name} loading="lazy" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 md:px-4 py-1 md:py-2 bg-brand-bg-secondary/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-brand-white">
                    {hotel.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-3 md:px-4 py-1 md:py-2 bg-brand-red rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    {hotel.price}
                  </div>
                </div>
                <div className="p-5 md:p-8">
                  <div className="flex justify-between items-start mb-4 md:mb-6 gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-black text-brand-white uppercase tracking-tighter mb-2 break-words leading-tight line-clamp-1">{hotel.name}</h3>
                      <p className="text-brand-muted font-bold text-xs uppercase tracking-widest flex items-center gap-2 truncate">
                        <MapPin size={12} className="text-brand-red shrink-0" /> {hotel.location}
                      </p>
                    </div>
                    <div className="flex text-gold shrink-0">
                      {[...Array(hotel.rating)].map((_, i) => <Star key={i} size={12} className="md:w-[14px]" fill="#D1D5DB" color="#D1D5DB" />)}
                    </div>
                  </div>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `I am interested in booking a stay at ${hotel.name} in ${hotel.location}.` } }))}
                    className="flex items-center justify-between w-full p-3.5 border-2 border-white/10 rounded-2xl group-hover:bg-brand-bg-primary group-hover:border-brand-bg-primary group-hover:text-white transition-all duration-500"
                  >
                    <span className="font-black uppercase tracking-widest text-[10px]">Check Availability</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-40 bg-brand-bg-secondary">
        <div className="max-w-5xl mx-auto px-4 bg-brand-bg-primary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 relative z-10">
            Looking for something <span className="text-brand-red">Bespoke</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-medium tracking-widest uppercase mb-16 relative z-10 leading-relaxed">
            We have access to private villas, boutique estates, and long-term residences across Asia.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: 'Hello Harmain Travels, I am looking for a bespoke hotel stay.' } }))} className="btn-primary !rounded-full !px-16 !py-8 !text-sm shadow-2xl inline-block relative z-10">
            Consult a Travel Architect
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
