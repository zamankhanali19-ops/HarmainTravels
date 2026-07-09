import { X, ArrowRight } from 'lucide-react';

const InteractiveModal = ({ selectedCountry, setSelectedCountry, standardRequirements }) => {
  if (!selectedCountry) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-brand-bg-primary/95 backdrop-blur-md" onClick={() => setSelectedCountry(null)}></div>
      
      <div className="relative w-full max-w-4xl bg-brand-bg-secondary rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-20 duration-500 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-brand-red p-6 sm:p-10 md:p-16 text-white relative">
          <button 
            onClick={() => setSelectedCountry(null)}
            className="absolute top-4 right-4 sm:top-10 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-brand-bg-secondary/10 rounded-full flex items-center justify-center hover:bg-brand-bg-secondary/20 transition-colors"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          <span className="text-white/60 font-black uppercase tracking-[0.5em] text-[8px] sm:text-[10px] mb-2 sm:mb-4 block">{selectedCountry.region}</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6">{selectedCountry.name}</h2>
          <p className="text-sm sm:text-base md:text-2xl font-medium tracking-wide opacity-90">{selectedCountry.desc}</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-brand-white uppercase tracking-tighter mb-4 md:mb-8 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-brand-red"></span> Visa Requirements
            </h3>
            <div className="space-y-4 md:space-y-6">
               <div className="bg-brand-bg-primary p-4 sm:p-6 rounded-2xl md:rounded-3xl border-l-8 border-brand-red">
                  <p className="text-brand-white font-bold text-sm sm:text-base md:text-lg leading-relaxed italic">
                    "{selectedCountry.visa}"
                  </p>
               </div>
               <div className="space-y-3">
                  {standardRequirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 text-brand-silver font-bold uppercase tracking-wider text-[9px] sm:text-[11px] md:text-xs">
                      <div className="text-brand-red shrink-0">{req.icon}</div>
                      {req.text}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-brand-bg-primary p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-brand-white uppercase tracking-tighter mb-4">Expert Guidance</h3>
              <p className="text-brand-muted font-medium leading-relaxed mb-4 text-xs sm:text-sm">
                Our visa architects handle the entire process for you. From documentation to interview prep, we ensure a seamless approval journey.
              </p>
            </div>
            <a 
              href={`https://wa.me/92325880050?text=Hello Harmain Travels, I am interested in a trip to ${selectedCountry.name}. Please guide me about the visa process.`}
              target="_blank"
              className="btn-primary w-full text-center flex items-center justify-center gap-4 !rounded-xl sm:!rounded-2xl !py-4 md:!py-6 !text-xs md:!text-sm"
            >
              Apply Now via WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveModal;
