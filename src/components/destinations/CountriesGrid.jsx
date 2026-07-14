import { MapPin, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CountriesGrid = ({ asianRegions, activeRegion }) => {
  return (
    <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {asianRegions.map((region) => (
        region.id === activeRegion && (
          <div key={region.id} className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 items-stretch">
              {region.countries.map((country, idx) => {
                const slug = country.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
                return (
                  <Link 
                    key={idx} 
                    to={`/destinations/${slug}`}
                    state={{ country }}
                    className="group bg-brand-bg-primary overflow-hidden rounded-[1.5rem] sm:rounded-[3rem] hover:bg-brand-bg-primary transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-4 border border-transparent hover:border-brand-red/30 flex flex-col h-full"
                  >
                    {country.image && (
                      <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden shrink-0">
                        <img 
                          src={`${country.image}?auto=format&fit=crop&q=80&w=800`} 
                          alt={country.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-primary/40 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 bg-brand-bg-secondary group-hover:bg-brand-red rounded-xl flex items-center justify-center text-brand-white group-hover:text-white transition-all duration-500 shadow-md">
                            <MapPin size={20} />
                          </div>
                          <ChevronRight className="text-brand-muted group-hover:text-brand-red transition-all" />
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-black text-brand-white group-hover:text-white uppercase tracking-tighter mb-2 transition-colors">
                          {country.name}
                        </h3>
                        
                        <p className="text-brand-muted group-hover:text-white/60 font-medium leading-relaxed mb-4 transition-colors line-clamp-2 text-xs sm:text-sm">
                          {country.desc}
                        </p>
                      </div>
                      
                      <div>
                        {country.famousPlace && (
                          <div className="flex items-center gap-2 mb-4 text-brand-red group-hover:text-[#FFC107] font-black uppercase tracking-widest text-[9px] sm:text-[10px] transition-colors">
                            <Star size={14} className="fill-current" />
                            Must See: {country.famousPlace}
                          </div>
                        )}

                        <div className="text-brand-red font-black uppercase tracking-widest text-[9px] md:text-[10px] py-2 border-t border-white/10 group-hover:border-white/10 group-hover:text-white transition-colors">
                          Tap to view requirements
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )
      ))}
    </section>
  );
};

export default CountriesGrid;
