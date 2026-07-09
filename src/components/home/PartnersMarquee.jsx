import { Star } from 'lucide-react';

const PartnersMarquee = () => {
  const partners = [
    { name: 'Emirates', desc: 'Official Airline Partner' },
    { name: 'Qatar Airways', desc: 'Premium Flights' },
    { name: 'Marriott', desc: 'Luxury Stays' },
    { name: 'Hilton', desc: 'Elite Accommodation' },
    { name: 'Four Seasons', desc: 'Exclusive Resorts' },
    { name: 'Jumeirah', desc: 'Luxury Hotels' },
    { name: 'Turkish Airlines', desc: 'Global Connectivity' },
    { name: 'Singapore Airlines', desc: 'Award Winning' },
  ];

  return (
    <div className="bg-[#0f172a] py-6 sm:py-8 border-y border-white/10 overflow-hidden relative flex items-center group/marquee">
      <div className="absolute left-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex gap-12 sm:gap-24 animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] whitespace-nowrap px-12 items-center">
        {[...partners, ...partners].map((partner, i) => (
          <div key={i} className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
            <h4 className="text-white font-black text-xl sm:text-2xl uppercase tracking-[0.2em]">{partner.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <Star size={10} className="text-brand-red group-hover:text-[#FFC107] transition-colors" />
              <span className="text-brand-muted text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">{partner.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
