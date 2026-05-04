

const destinations = [
  {
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=1200",
    description: "Discover pristine beaches and vibrant culture."
  },
  {
    name: "Malaysia",
    image: "https://www.idea.int/democracytracker/sites/default/files/2023-02/Malaysia.jpg",
    description: "Experience the perfect blend of modern and tradition in Kuala Lumpur."
  },
  {
    name: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    description: "Tropical paradise with lush landscapes and beaches."
  },
  {
    name: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800",
    description: "The roof of the world awaits your adventure."
  },
  {
    name: "Bangladesh",
    image: "https://images.unsplash.com/photo-1621841635391-4775f0a0d635?auto=format&fit=crop&q=80&w=800",
    description: "Discover the lush tea gardens and rich heritage."
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="flex flex-col items-center mb-24">
        <span className="text-[#931328] font-black uppercase tracking-[0.5em] text-xs mb-4">Our Specialty</span>
        <h2 className="text-5xl md:text-7xl font-black text-[#002147] uppercase tracking-tighter">Asian Hub</h2>
        <div className="w-24 h-2 bg-[#931328] mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {destinations.map((dest, index) => (
          <div key={index} className="group relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl aspect-[4/5] cursor-pointer">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 md:p-10 text-white w-full">
              <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 uppercase tracking-tighter break-words leading-tight line-clamp-1">{dest.name}</h3>
              <p className="text-slate-200 mb-4 md:mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2 md:line-clamp-3">
                {dest.description}
              </p>
              <button className="text-[#931328] font-black uppercase tracking-widest text-xs border-b-2 border-[#931328] pb-2">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
