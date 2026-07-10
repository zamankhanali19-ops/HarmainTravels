import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Building2, Moon, Search, Calendar, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { globalAirports } from '../../data/airports';
import { TravelCalendar } from '../common/TravelCalendar';

const searchSuggestions = {
  flights: globalAirports,
  hotels: [
    { code: 'DXB', city: 'Dubai', desc: 'United Arab Emirates' },
    { code: 'MAK', city: 'Makkah', desc: 'Saudi Arabia' },
    { code: 'MED', city: 'Madinah', desc: 'Saudi Arabia' },
    { code: 'IST', city: 'Istanbul', desc: 'Turkey' },
    { code: 'KUL', city: 'Kuala Lumpur', desc: 'Malaysia' },
  ],
  umrah: [
    { code: 'MAK', city: 'Makkah', desc: 'Saudi Arabia' },
    { code: 'MED', city: 'Madinah', desc: 'Saudi Arabia' },
    { code: 'JED', city: 'Jeddah', desc: 'Saudi Arabia' },
  ]
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [field1, setField1] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [shakeField, setShakeField] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);
  
  const dropdownRef = useRef(null);
  const calendarRef = useRef(null);
  const navigate = useNavigate();

  const isFormValid = field1.trim() !== '' && selectedDate !== null;

  const handleSearch = () => {
    if (!isFormValid) {
      setShakeField(true);
      setTimeout(() => setShakeField(false), 500);
      return;
    }
    if (activeTab === 'flights') navigate('/flights');
    if (activeTab === 'hotels') navigate('/hotels');
    if (activeTab === 'umrah') navigate('/umrah-packages');
  };

  // Click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendarDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    setField1(`${suggestion.city} (${suggestion.code})`);
    setShowDropdown(false);
  };

  const filteredSuggestions = searchSuggestions[activeTab].filter(
    (s) => s.city.toLowerCase().includes(field1.toLowerCase()) || 
           s.code.toLowerCase().includes(field1.toLowerCase()) ||
           s.desc.toLowerCase().includes(field1.toLowerCase())
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-bg-primary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2400" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          alt="Premium airplane wing view at sunset - Harmain Travels VIP Aviation"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-primary/90 via-brand-bg-primary/70 to-brand-bg-secondary"></div>
      </div>
      
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card border-brand-red/30 rounded-full text-brand-silver-light font-display font-semibold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            Premium Aviation & Travel
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-display font-bold mb-6 text-brand-white leading-[1.1] tracking-tight">
            Elevate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark">Journey Beyond</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg mb-10 text-brand-silver font-body max-w-2xl leading-relaxed">
            Experience the pinnacle of luxury travel. From exclusive Umrah packages to bespoke Asian tours and elite flight bookings, Harmain Travels sets the standard for modern exploration.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#booking-search" className="btn-primary">
              Plan Your Journey
            </a>
            <Link to="/about" className="btn-secondary">
              Discover More
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6 text-brand-silver-light font-display font-medium text-xs sm:text-sm">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red" /> VIP Visas</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red" /> 5-Star Hotels</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-red" /> Global Airlines</div>
          </div>
        </motion.div>

        {/* Right Content - Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 w-full"
          id="booking-search"
        >
          <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2rem] w-full max-w-lg mx-auto lg:ml-auto border border-white/5 shadow-2xl backdrop-blur-xl">
            <h3 className="font-display font-semibold text-brand-white text-xl md:text-2xl mb-6">Search & Book</h3>
            
            {/* Tabs */}
            <div className="flex gap-2 mb-6 p-1.5 bg-brand-bg-primary/50 rounded-xl">
              {[
                { id: 'flights', label: 'Flights', icon: Plane },
                { id: 'hotels', label: 'Hotels', icon: Building2 },
                { id: 'umrah', label: 'Umrah', icon: Moon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setField1(''); setSelectedDate(null); setShowDropdown(false); setShowCalendarDropdown(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-display font-medium text-xs sm:text-sm transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-brand-red text-brand-white shadow-md' 
                      : 'text-brand-silver hover:text-brand-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={16} /> <span className="hidden sm:inline-block">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Destination Dropdown Field */}
              <div className="relative" ref={dropdownRef}>
                <motion.div 
                  animate={shakeField && !field1 ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`bg-brand-bg-primary/50 border ${shakeField && !field1 ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 flex items-center focus-within:border-brand-red focus-within:bg-brand-bg-primary/80 transition-all cursor-text`}
                  onClick={() => setShowDropdown(true)}
                >
                  <MapPin size={20} className="text-brand-red mr-3 shrink-0" />
                  <div className="flex-1 min-w-0 relative">
                    <label htmlFor="search-location" className="block text-[10px] font-display font-semibold text-brand-muted uppercase tracking-widest mb-1">
                      {activeTab === 'flights' ? 'Destination / Airport' : activeTab === 'hotels' ? 'City / Hotel' : 'Location'}
                    </label>
                    <div className="flex items-center">
                      <input 
                        id="search-location"
                        type="text" 
                        value={field1}
                        onChange={(e) => {
                          setField1(e.target.value);
                          setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        placeholder={activeTab === 'flights' ? 'Where to fly?' : activeTab === 'hotels' ? 'Where to stay?' : 'Makkah / Madinah'} 
                        className="w-full bg-transparent text-sm sm:text-base font-body text-brand-white outline-none placeholder:text-brand-muted/70" 
                        autoComplete="off"
                      />
                      <ChevronDown size={16} className={`text-brand-muted transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-brand-bg-secondary border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 max-h-60 overflow-y-auto"
                    >
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((item, idx) => (
                          <div 
                            key={idx}
                            onClick={() => handleSuggestionClick(item)}
                            className="px-4 py-3 hover:bg-white/5 cursor-pointer flex items-center gap-3 border-b border-white/5 last:border-0 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-full bg-brand-bg-primary flex items-center justify-center text-brand-red font-display font-bold text-xs shrink-0">
                              {item.code}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-brand-white">{item.city}</div>
                              <div className="text-xs text-brand-muted truncate">{item.desc}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-center text-sm text-brand-muted">
                          No locations found. Press enter to use "{field1}".
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Date Field Dropdown */}
              <div className="relative" ref={calendarRef}>
                <motion.div 
                  animate={shakeField && !selectedDate ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`bg-brand-bg-primary/50 border ${shakeField && !selectedDate ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 flex items-center focus-within:border-brand-red focus-within:bg-brand-bg-primary/80 transition-all cursor-pointer`}
                  onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                >
                  <Calendar size={20} className="text-brand-red mr-3 shrink-0" />
                  <div className="flex-1 min-w-0 relative">
                    <label className="block text-[10px] font-display font-semibold text-brand-muted uppercase tracking-widest mb-1">
                      {activeTab === 'flights' ? 'Travel Date' : activeTab === 'hotels' ? 'Check-In' : 'Departure Date'}
                    </label>
                    <div className="flex items-center justify-between">
                      <div className={`text-sm sm:text-base font-body ${selectedDate ? 'text-brand-white' : 'text-brand-muted/70'}`}>
                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Select dates'}
                      </div>
                      <ChevronDown size={16} className={`text-brand-muted transition-transform duration-300 ${showCalendarDropdown ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Calendar Dropdown Menu */}
                <AnimatePresence>
                  {showCalendarDropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-brand-bg-secondary border border-white/10 rounded-xl shadow-2xl z-50 p-4"
                    >
                      <TravelCalendar 
                        selectedDate={selectedDate} 
                        onDateSelect={(date) => {
                          setSelectedDate(date);
                          setShowCalendarDropdown(false);
                        }} 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={handleSearch}
                aria-label={`Search for ${activeTab}`}
                className="w-full py-4 rounded-xl font-display font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red text-white shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_30px_rgba(230,57,70,0.5)] cursor-pointer transform hover:-translate-y-1"
              >
                <Search size={16} /> 
                {activeTab === 'flights' ? 'Search Flights' : activeTab === 'hotels' ? 'Search Hotels' : 'Explore Packages'}
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
