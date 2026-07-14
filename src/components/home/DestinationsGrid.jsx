import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationsGrid = () => {
  const destinations = [
    { name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-259b08848526", price: "From $899", tag: "Beach Paradise" },
    { name: "Malaysia", image: "https://www.idea.int/democracytracker/sites/default/files/2023-02/Malaysia.jpg", price: "From $749", tag: "Urban Jungle" },
    { name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", price: "From $999", tag: "Spiritual Retreat" },
    { name: "Nepal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa", price: "From $699", tag: "Mountain Majesty" },
    { name: "Bangladesh", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7", price: "From $599", tag: "Lush Heritage" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", price: "From $1299", tag: "Tropical Oasis" }
  ];

  return (
    <section id="destinations" className="py-24 lg:py-32 bg-brand-bg-secondary relative">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-3 block">Top Choices</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-brand-white">
              Iconic <span className="text-brand-red">Destinations</span>
            </h2>
          </div>
          <Link to="/destinations" className="flex items-center gap-4 text-brand-silver-light font-display font-semibold uppercase tracking-widest text-xs group">
            View All 
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300">
              <ChevronRight size={20} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${i === 0 || i === 3 || i === 5 ? 'md:col-span-8' : 'md:col-span-4'}`}
            >
              <Link 
                to="/destinations"
                className="group relative overflow-hidden rounded-[2rem] h-[300px] md:h-[450px] cursor-pointer block border border-white/5"
              >
                <img 
                  src={`${dest.image}?auto=format&fit=crop&q=80&w=1200`} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-primary via-brand-bg-primary/50 group-hover:via-brand-bg-primary/70 to-transparent opacity-90 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-brand-white">
                  <div className="flex justify-between items-end gap-4">
                    <div className="min-w-0 flex-1">
                      <span className="text-white bg-brand-red px-3 py-1.5 rounded-full w-max font-display font-semibold uppercase tracking-widest text-[9px] mb-4 block shadow-lg backdrop-blur-md">{dest.tag}</span>
                      <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-2 break-words leading-tight drop-shadow-md">{dest.name}</h3>
                      <p className="text-brand-silver font-display font-medium tracking-widest text-xs uppercase truncate drop-shadow-md">{dest.price}</p>
                    </div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 shrink-0 border border-white/20">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
