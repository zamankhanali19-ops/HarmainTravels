import React from 'react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const dropboxCountries = [
  {
    name: 'Malaysia',
    flag: 'https://flagcdn.com/w320/my.png',
    description: 'Guaranteed Priority Processing'
  },
  {
    name: 'Thailand',
    flag: 'https://flagcdn.com/w320/th.png',
    description: 'Fast-Track Verification'
  },
  {
    name: 'Indonesia',
    flag: 'https://flagcdn.com/w320/id.png',
    description: 'VIP Embassy Handling'
  }
];

const OfficialDropbox = () => {
  return (
    <section className="py-24 bg-brand-bg-primary relative overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Award size={14} /> Official Authorization
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight mb-6">
            Authorized <span className="text-[#D4AF37]">Dropbox Center</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Harmain Travels holds the prestigious status of being the official Dropbox center for key Southeast Asian destinations, offering you unparalleled speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {dropboxCountries.map((country, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gradient-to-b from-brand-bg-secondary to-brand-bg-primary rounded-3xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-16 rounded-lg overflow-hidden shadow-2xl mb-6 ring-2 ring-white/10 group-hover:ring-[#D4AF37]/50 transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} Flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-brand-white uppercase tracking-wide mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {country.name}
                </h3>
                
                <p className="text-brand-muted text-sm font-body mb-6">
                  {country.description}
                </p>
                
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 py-2 px-4 rounded-full border border-[#D4AF37]/20 w-full justify-center">
                  <ShieldCheck size={14} /> Official Holder
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="/visa-services" 
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-brand-bg-primary font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
          >
            <Zap size={16} /> Apply for Fast-Track Visa
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfficialDropbox;
