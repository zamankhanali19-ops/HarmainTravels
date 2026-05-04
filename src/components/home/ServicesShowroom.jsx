import { Plane, Map, ShieldCheck } from 'lucide-react';

const ServicesShowroom = () => {
  return (
    <section className="py-20 md:py-40 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A61D24]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#002147] uppercase tracking-tighter mb-4 md:mb-8">
            Why <span className="text-[#A61D24]">Harmain</span>?
          </h2>
          <div className="w-16 md:w-24 h-2 bg-[#A61D24] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            { t: "VIP Ticketing", i: <Plane size={36} className="md:w-[48px]" />, d: "First-class flight management with zero-wait support." },
            { t: "Elite Planning", i: <Map size={36} className="md:w-[48px]" />, d: "Bespoke itineraries crafted by local regional experts." },
            { t: "Global Shield", i: <ShieldCheck size={36} className="md:w-[48px]" />, d: "24/7 dedicated concierge during your entire journey." }
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl flex items-center justify-center mx-auto mb-6 md:mb-10 text-[#A61D24] group-hover:bg-[#A61D24] group-hover:text-white transition-all duration-500 group-hover:-rotate-12">
                {s.i}
              </div>
              <h3 className="text-xl md:text-3xl font-black text-[#002147] uppercase tracking-tighter mb-3 md:mb-6">{s.t}</h3>
              <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed max-w-xs mx-auto">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowroom;
