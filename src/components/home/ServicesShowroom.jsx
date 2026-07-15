import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Crown, Globe, Briefcase, HeartHandshake } from 'lucide-react';

const ServicesShowroom = () => {
  const services = [
    { icon: Crown, title: 'Corporate Tours', desc: 'Bespoke executive itineraries and luxury corporate travel management for businesses in Pakistan.' },
    { icon: Globe, title: 'Global Concierge', desc: 'Dedicated 24/7 travel agents in Islamabad handling international flight bookings and sudden changes.' },
    { icon: ShieldCheck, title: 'Visa Services', desc: 'Streamlined, expert e-visa processing and consulting for top international destinations.' },
    { icon: HeartHandshake, title: 'Spiritual Journeys', desc: 'Premium Umrah & Hajj packages from Pakistan with 5-star Haram-view properties.' },
    { icon: Briefcase, title: 'Event Logistics', desc: 'Complete destination management and travel coordination for high-end international retreats.' },
    { icon: Clock, title: 'Fast-Track Services', desc: 'Exclusive airport meet & greet and fast-track immigration for our VIP corporate clients.' },
  ];

  return (
    <section className="py-24 bg-brand-bg-primary relative border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-4 block">Premium Travel Management</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight">
            Exclusive <span className="text-brand-red">Travel Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-white mb-3 group-hover:text-brand-red transition-colors">{s.title}</h3>
              <p className="text-brand-muted font-body text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowroom;
