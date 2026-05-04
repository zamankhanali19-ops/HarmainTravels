const DestinationsHero = () => {
  return (
    <section className="pt-40 sm:pt-48 md:pt-64 pb-16 sm:pb-24 md:pb-32 bg-[#002147] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A61D24]/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <span className="text-[#A61D24] font-black uppercase tracking-[0.5em] text-xs mb-4 md:mb-8 block">Interactive Hub</span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-4 md:mb-8 leading-none">
          Destination <br/> <span className="text-white drop-shadow-md">Explorer</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl font-bold tracking-[0.2em] uppercase leading-relaxed">
          Click any country to view full details and visa requirements.
        </p>
      </div>
    </section>
  );
};

export default DestinationsHero;
