import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationsGrid = ({ destinations }) => {
  return (
    <section id="destinations" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-24 lg:mb-32 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#A61D24] font-black uppercase tracking-[0.5em] text-xs mb-3 md:mb-6 block">Top Choices</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-[#002147]">
              Iconic <br/> <span className="italic font-light text-[#A61D24]">Destinations</span>
            </h2>
          </div>
          <Link to="/destinations" className="flex md:flex items-center gap-4 text-[#002147] font-black uppercase tracking-widest text-xs group">
            View All <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:bg-[#A61D24] group-hover:border-[#A61D24] group-hover:text-white transition-all duration-300">
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {destinations.map((dest, i) => (
            <Link 
              key={i} 
              to="/destinations"
              className={`${i === 0 || i === 3 || i === 5 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden rounded-[1.25rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] h-[250px] sm:h-[320px] md:h-[550px] cursor-pointer shadow-2xl block`}
            >
              <img 
                src={`${dest.image}?auto=format&fit=crop&q=80&w=1200`} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-95 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 p-4 sm:p-6 md:p-10 flex flex-col justify-end text-white">
                <div className="flex justify-between items-end gap-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-white bg-[#A61D24] px-2.5 py-1 rounded-full w-max font-black uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[10px] mb-2 md:mb-5 block shadow-lg backdrop-blur-md">{dest.tag}</span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-1.5 md:mb-3 break-words leading-tight line-clamp-2 md:line-clamp-1 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">{dest.name}</h3>
                    <p className="text-white/90 font-black tracking-widest text-[10px] sm:text-xs md:text-sm uppercase truncate drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">{dest.price}</p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 shrink-0">
                    <ArrowRight size={16} className="md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
