import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

const UmrahHajjSection = () => {
  return (
    <section className="py-24 bg-brand-bg-secondary relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=2400')] opacity-5 bg-cover bg-center bg-fixed mix-blend-screen"></div>
      
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-4 block flex items-center gap-2">
                <Moon size={14} /> Spiritual Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight leading-[1.1]">
                Premium <span className="text-brand-red">Umrah</span> & <br/>
                Luxury <span className="text-brand-red">Hajj</span>
              </h2>
            </div>
            
            <p className="text-brand-muted font-body text-base leading-relaxed">
              Embark on a sacred journey with absolute peace of mind. Our exclusive religious travel division handles everything from VIP visa processing to securing premium Haram-view suites in Makkah and Madinah. We partner exclusively with 5-star properties to ensure your spiritual focus is never compromised by logistical concerns.
            </p>

            <ul className="space-y-4">
              {[
                "Luxury Haram-View Accommodations",
                "VIP Dedicated Ground Transport",
                "Guided Ziyarat with Scholars",
                "Fast-Track Visa Services"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-silver-light font-body font-medium">
                  <Star size={18} className="text-brand-red shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 flex gap-4">
              <button className="btn-primary">View Packages</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="glass-card rounded-[2rem] overflow-hidden aspect-[4/5] relative group">
                <img src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=800" alt="Makkah" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2240] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white font-display font-bold text-xl uppercase tracking-wider">Makkah</h4>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card rounded-[2rem] overflow-hidden aspect-[4/5] relative group">
                <img src="https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?auto=format&fit=crop&q=80&w=800" alt="Madinah" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2240] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white font-display font-bold text-xl uppercase tracking-wider">Madinah</h4>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UmrahHajjSection;
