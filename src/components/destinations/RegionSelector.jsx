const RegionSelector = ({ asianRegions, activeRegion, setActiveRegion }) => {
  return (
    <section className="bg-brand-bg-secondary/95 backdrop-blur-md border-b border-white/5 py-3 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-2 flex gap-3 sm:gap-8 md:gap-12 overflow-x-auto no-scrollbar justify-start md:justify-center items-center">
        {asianRegions.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id)}
            className={`whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] pb-1.5 px-0.5 transition-all border-b-2 sm:border-b-4 shrink-0 ${
              activeRegion === region.id 
                ? 'text-brand-red border-brand-red' 
                : 'text-brand-muted border-transparent hover:text-brand-white hover:border-white/20'
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RegionSelector;
