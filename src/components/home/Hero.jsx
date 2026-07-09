

const Hero = ({ Logo }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-bg-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-primary via-transparent to-brand-bg-primary"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="mb-16 inline-block animate-float">
           <div className="bg-brand-bg-secondary p-10 md:p-16 rounded-[4rem] border-t-[12px] border-[#931328] shadow-[0_60px_120px_-20px_rgba(0,33,71,0.6)]">
             <Logo className="scale-110 md:scale-[2.2] origin-center" showTagline={true} />
           </div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-[900] mb-8 text-white tracking-tighter uppercase leading-none">
          Travel <span className="text-[#931328]">Excellence</span>
        </h1>
        <p className="text-xl md:text-3xl mb-12 text-brand-muted max-w-4xl mx-auto font-medium tracking-widest uppercase leading-relaxed">
          Specializing in Thailand, Malaysia, Indonesia, Nepal & Bangladesh
        </p>
        
        <div className="bg-brand-bg-secondary/95 backdrop-blur-md border border-white/5 shadow-2xl rounded-[2.5rem] p-4 md:p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-left bg-brand-bg-primary p-4 rounded-2xl">
              <label className="block text-[10px] font-black text-[#931328] mb-2 uppercase tracking-widest">Where to go?</label>
              <select className="w-full bg-transparent font-bold text-brand-white outline-none">
                <option>Select Destination</option>
                <option>Thailand</option>
                <option>Malaysia</option>
                <option>Indonesia</option>
                <option>Nepal</option>
                <option>Bangladesh</option>
              </select>
            </div>
            <div className="text-left bg-brand-bg-primary p-4 rounded-2xl">
              <label className="block text-[10px] font-black text-[#931328] mb-2 uppercase tracking-widest">Travel Date</label>
              <input type="date" className="w-full bg-transparent font-bold text-brand-white outline-none" />
            </div>
            <div className="text-left bg-brand-bg-primary p-4 rounded-2xl">
              <label className="block text-[10px] font-black text-[#931328] mb-2 uppercase tracking-widest">Travellers</label>
              <input type="number" placeholder="2 Adults" className="w-full bg-transparent font-bold text-brand-white outline-none" />
            </div>
            <div className="flex items-center">
              <button className="bg-[#931328] hover:bg-brand-bg-primary text-white w-full h-full rounded-2xl font-black uppercase tracking-widest transition-all duration-300 shadow-xl">
                Search Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
