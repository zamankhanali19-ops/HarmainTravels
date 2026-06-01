import { useState } from 'react';
import { Plane, Building2, Moon, Search, Calendar, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = ({ scrollY }) => {
  const [activeTab, setActiveTab] = useState('flights');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const navigate = useNavigate();

  const isFormValid = field1.trim() !== '' && field2.trim() !== '';

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setField1('');
    setField2('');
  };

  const handleSearch = () => {
    if (!isFormValid) return;
    if (activeTab === 'flights') navigate('/flights');
    if (activeTab === 'hotels') navigate('/hotels');
    if (activeTab === 'umrah') navigate('/umrah');
  };

  return (
    <section className="relative min-h-[100vh] h-auto py-16 sm:py-24 md:py-32 lg:py-0 lg:min-h-[115vh] flex items-center justify-center overflow-hidden bg-[#002147] pb-32">
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{ transform: typeof window !== 'undefined' && window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px) scale(1.1)` : 'none' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=90&w=2400" 
          className="w-full h-full object-cover brightness-[0.7]"
          alt="Hero Background"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#A61D24]/75 via-[#002147]/60 to-[#002147]/95 md:to-[#002147]/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-24 sm:mt-32 md:mt-40 w-full">
        <div className="inline-block px-5 py-1.5 md:px-6 md:py-2 bg-[#002147]/30 backdrop-blur-md border border-[#A61D24]/20 rounded-full text-white font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-8 animate-reveal">
          Welcome to the Asian Gateway
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-[900] mb-4 md:mb-6 text-white tracking-tighter uppercase leading-[0.8] animate-reveal [text-shadow:0_10px_40px_rgba(0,0,0,0.6)]">
          Explore <br/> <span className="text-white drop-shadow-md">Iconic Asia</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-white max-w-4xl mx-auto font-[900] tracking-widest uppercase leading-relaxed animate-reveal delay-100 drop-shadow-lg pr-4 pl-4 md:px-0">
          Harmain Travels — Redefining Your Journey to the Orient
        </p>

        {/* Interactive Booking Widget */}
        <div className="max-w-4xl mx-auto mt-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-2 md:p-3 animate-reveal delay-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Tabs */}
          <div className="flex gap-2 mb-2 p-1 bg-black/20 rounded-2xl w-max mx-auto md:mx-0">
            {[
              { id: 'flights', label: 'Flights', icon: Plane },
              { id: 'hotels', label: 'Hotels', icon: Building2 },
              { id: 'umrah', label: 'Umrah', icon: Moon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#A61D24] text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={16} /> <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search Fields — change labels based on tab */}
          <div className="bg-white rounded-2xl p-2 md:p-3 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 md:py-4">
              <MapPin size={20} className="text-[#A61D24] mr-3 shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {activeTab === 'flights' ? 'Destination' : activeTab === 'hotels' ? 'City / Hotel' : 'Your Name'}
                </div>
                <input 
                  type="text" 
                  value={field1}
                  onChange={(e) => setField1(e.target.value)}
                  placeholder={activeTab === 'flights' ? 'Where to fly?' : activeTab === 'hotels' ? 'Where to stay?' : 'Full name'} 
                  className="w-full bg-transparent text-sm md:text-base font-black text-[#002147] outline-none placeholder:text-slate-300 truncate" 
                />
              </div>
            </div>
            
            <div className="flex-1 flex items-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 md:py-4">
              <Calendar size={20} className="text-[#A61D24] mr-3 shrink-0" />
              <div className="text-left flex-1 min-w-0">
                <div className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {activeTab === 'flights' ? 'Travel Date' : activeTab === 'hotels' ? 'Check-In' : 'Departure Date'}
                </div>
                <input 
                  type="text" 
                  value={field2}
                  onChange={(e) => setField2(e.target.value)}
                  placeholder="Add dates" 
                  className="w-full bg-transparent text-sm md:text-base font-black text-[#002147] outline-none placeholder:text-slate-300 truncate" 
                />
              </div>
            </div>

            <button 
              onClick={handleSearch}
              disabled={!isFormValid}
              className={`px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 flex items-center justify-center gap-2 shrink-0 group ${
                isFormValid 
                  ? 'bg-gradient-to-r from-[#A61D24] to-[#002147] hover:from-[#002147] hover:to-[#A61D24] text-white shadow-lg hover:shadow-xl cursor-pointer' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <Search size={18} className={isFormValid ? 'group-hover:scale-110 transition-transform' : ''} /> 
              {activeTab === 'flights' ? 'Find Flights' : activeTab === 'hotels' ? 'Find Hotels' : 'View Packages'}
            </button>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-20 mt-8 sm:mt-12 md:mt-16 bg-[#002147]/60 backdrop-blur-md px-6 sm:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl border border-white/20 animate-reveal max-w-full">
          {[
            { n: "15+", label: "Years Exp" },
            { n: "10k+", label: "Happy Souls" },
            { n: "24/7", label: "VIP Care" }
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-[#A61D24] transition-colors">{s.n}</div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
