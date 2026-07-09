import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What makes your Umrah packages 'Premium'?",
      a: "Our premium packages include exclusive stays at 5-star properties located directly facing the Haram (such as Fairmont Makkah or the Oberoi Madinah). We also provide private VIP transfers in luxury vehicles, fast-track visa processing, and dedicated 24/7 concierge support during your spiritual journey."
    },
    {
      q: "Do you handle corporate travel and group bookings?",
      a: "Yes, we specialize in bespoke corporate travel management. Whether it's an executive retreat, an international conference, or incentive trips, our team handles all logistics including private charters, bulk luxury hotel bookings, and elite ground transport."
    },
    {
      q: "Which airlines do you partner with?",
      a: "We are an authorized IATA partner with direct affiliations with the world's leading airlines. For luxury travel, we highly recommend and frequently book with Emirates, Qatar Airways, Saudia, and Turkish Airlines, offering exclusive rates for Business and First Class."
    },
    {
      q: "Can you assist with complex visa applications?",
      a: "Absolutely. Our expert visa consulting team has over 15 years of experience. We provide end-to-end guidance for US, UK, Schengen, and highly specific Asian e-visas, significantly increasing your chances of approval by ensuring all paperwork is flawless."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-24 bg-brand-bg-primary relative border-t border-white/5">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-4 block">Knowledge Base</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <h4 className="font-display font-semibold text-brand-white text-lg pr-8">{faq.q}</h4>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-brand-red text-white' : 'text-brand-silver'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-brand-muted font-body leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
