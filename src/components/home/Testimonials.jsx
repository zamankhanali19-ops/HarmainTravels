import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed Raza",
      role: "Corporate Executive",
      text: "The VIP Umrah package was beyond our expectations. The attention to detail, from the private airport transfer in Jeddah to the Fairmont suites, was impeccable.",
      rating: 5
    },
    {
      name: "Sarah Khan",
      role: "Frequent Traveler",
      text: "Harmain Travels arranged our honeymoon in the Maldives. The luxury resort selection and the seamless flight connections made it a truly memorable experience.",
      rating: 5
    },
    {
      name: "Usman Ali",
      role: "Business Consultant",
      text: "I rely on Harmain for all my international corporate travel. Their visa team is incredibly efficient and has saved me from multiple last-minute travel disasters.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-bg-primary relative border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-4 block">Client Experiences</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight">
            Luxury Travel <span className="text-brand-red">Reviews</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 relative"
            >
              <Quote size={40} className="text-brand-red/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-brand-red fill-brand-red" />
                ))}
              </div>
              <p className="text-brand-silver font-body leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div>
                <h5 className="font-display font-bold text-brand-white uppercase tracking-wider text-sm">{review.name}</h5>
                <span className="text-brand-muted text-xs font-medium tracking-widest uppercase">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
