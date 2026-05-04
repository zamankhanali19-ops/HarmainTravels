import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote size={48} className="md:w-[80px] mx-auto text-slate-100 mb-6 md:mb-12" />
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#002147] italic mb-8 md:mb-20 leading-tight max-w-5xl mx-auto uppercase tracking-tighter">
          "Harmain Travels transformed our Asian tour into a masterpiece of architectural wonder and luxury."
        </h2>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-100 overflow-hidden">
             <img src="https://i.pravatar.cc/150?u=1" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="font-black text-[#002147] uppercase tracking-widest text-[10px] md:text-xs">Ayesha Khan</div>
            <div className="text-[#A61D24] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">VIP Client, Karachi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
