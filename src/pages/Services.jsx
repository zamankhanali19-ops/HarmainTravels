
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Plane, Map, ShieldCheck, Ticket, Users, Globe } from 'lucide-react';
import SEO from '../components/common/SEO';

const Services = () => {
  const allServices = [
    { title: "Flight Ticketing", icon: <Plane size={40} />, desc: "Domestic & International flight bookings with the best corporate rates." },
    { title: "Tour Planning", icon: <Map size={40} />, desc: "Customized family and group tour packages across Thailand, Malaysia, and beyond." },
    { title: "Visa Assistance", icon: <ShieldCheck size={40} />, desc: "Hassle-free visa processing for all Asian destinations." },
    { title: "Hotel Bookings", icon: <Globe size={40} />, desc: "Exclusive access to 5-star resorts and boutique hotels." },
    { title: "Group Charters", icon: <Users size={40} />, desc: "Specialized logistics for large corporate and student groups." },
    { title: "Event Management", icon: <Ticket size={40} />, desc: "Complete ground handling for destination weddings and corporate retreats." }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comprehensive Travel Services",
    "provider": {
      "@type": "TravelAgency",
      "name": "Harmain Travels"
    },
    "serviceType": "Travel Management",
    "description": "Comprehensive travel services including luxury bookings, corporate tours, and expedited visa processing."
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="Premium Travel Services & Visa Consulting | Harmain Travels"
        description="Comprehensive travel services including luxury bookings, corporate tours, and expedited visa processing for destinations across Asia."
        url="https://harmaintravels.com/services"
        schema={schema}
      />
      <Navbar />
      
      <section className="pt-48 pb-24 bg-brand-bg-primary text-center px-4">
        <span className="text-[#931328] font-black uppercase tracking-[0.5em] text-xs mb-6 block">What We Do</span>
        <h1 className="text-5xl md:text-8xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-none">
          Professional <br/> <span className="text-[#931328]">Travel Services</span>
        </h1>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allServices.map((s, i) => (
            <div key={i} className="p-12 rounded-[3.5rem] bg-brand-bg-secondary shadow-2xl border-l-8 border-[#931328] hover:bg-brand-bg-primary group transition-all duration-500">
              <div className="text-[#931328] group-hover:text-white transition-colors mb-10">
                {s.icon}
              </div>
              <h3 className="text-3xl font-black text-brand-white group-hover:text-white mb-6 uppercase tracking-tighter transition-colors">{s.title}</h3>
              <p className="text-brand-muted group-hover:text-brand-muted text-lg font-medium transition-colors leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
