import { motion } from 'framer-motion';
import { PlaneTakeoff, FileCheck } from 'lucide-react';

const VisaFlightsSection = () => {
  return (
    <section className="py-24 bg-brand-bg-primary border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 overflow-hidden relative group"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] group-hover:bg-brand-red/10 transition-colors"></div>
            <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
              <FileCheck size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-white uppercase tracking-tight mb-4">
              Visa Processing Services
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-8">
              Navigate international travel effortlessly with our premium visa processing services in Islamabad. Our top-rated travel agents provide end-to-end assistance for tourist and business e-visas across major destinations, maximizing your approval rates.
            </p>
            <button className="btn-secondary">Explore Visas</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 md:p-14 overflow-hidden relative group"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-silver/5 rounded-full blur-[80px] group-hover:bg-brand-silver/10 transition-colors"></div>
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-silver mb-8 shadow-lg group-hover:border-brand-silver transition-colors">
              <PlaneTakeoff size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-white uppercase tracking-tight mb-4">
              International Flight Booking
            </h3>
            <p className="text-brand-muted font-body text-base leading-relaxed mb-8">
              Book international flights with Pakistan's trusted corporate travel consultants. As an authorized IATA agency, we offer exclusive ticketing rates on First Class and Business flights through global partners like Emirates, Qatar Airways, and Saudia Airlines.
            </p>
            <button className="btn-primary">Book Flights</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisaFlightsSection;
