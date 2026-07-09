import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { num: '15+', label: 'Years Experience' },
    { num: '50k+', label: 'Satisfied Travelers' },
    { num: '100+', label: 'Luxury Partners' },
    { num: '24/7', label: 'VIP Support' }
  ];

  return (
    <section className="py-20 bg-brand-red border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2400')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
      
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.num}</h4>
              <p className="text-white/80 font-display font-medium text-[10px] md:text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
