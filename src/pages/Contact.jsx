import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { TravelCalendar } from '../components/common/TravelCalendar';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [travelDate, setTravelDate] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Harmain Travels",
    "image": "https://harmaintravels.com/logo.png",
    "url": "https://harmaintravels.com/contact",
    "telephone": "+923258880050",
    "email": "harmaintravelisb@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.15 1st floor Aalay Plaza Fazal-e-Haq road Blue Area",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.7294,
      "longitude": 73.0931
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="Contact Harmain Travels | Islamabad Travel Agency Support"
        description="Get in touch with Harmain Travels in Islamabad. Contact us for Umrah packages, global tours, flight bookings, and VIP visa assistance."
        url="https://harmaintravels.com/contact"
        schema={schema}
      />
      <Navbar />
      
      <section className="pt-48 pb-24 bg-brand-bg-primary text-center px-4">
        <h1 className="text-5xl md:text-9xl font-black text-brand-white uppercase tracking-tighter mb-8 leading-none">
          Get in <span className="text-[#931328]">Touch</span>
        </h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-xl font-medium tracking-widest uppercase">
          Your journey to Asia starts with a conversation.
        </p>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-brand-bg-primary rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-white uppercase tracking-tighter mb-4">Our Office</h3>
                <p className="text-xl text-brand-muted font-medium leading-relaxed">
                  Office No.15 1st floor Aalay Plaza,<br/>Fazal-e-Haq road, Blue Area, Islamabad
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-brand-bg-primary rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-white uppercase tracking-tighter mb-4">Phone</h3>
                <p className="text-xl text-brand-muted font-medium">+92 325 880050</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-brand-bg-primary rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-white uppercase tracking-tighter mb-4">Email</h3>
                <p className="text-xl text-brand-muted font-medium">harmaintravelisb@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form with Calendar */}
          <div className="bg-brand-bg-secondary p-10 md:p-12 rounded-[3.5rem] md:rounded-[4rem] shadow-2xl border-t-[12px] border-[#931328]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Full Name</label>
                  <input type="text" className="w-full p-4 bg-brand-bg-primary rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-brand-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Email Address</label>
                  <input type="email" className="w-full p-4 bg-brand-bg-primary rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-brand-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Select Travel / Consultation Date</label>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-full sm:w-1/2">
                    <TravelCalendar 
                      selectedDate={travelDate} 
                      onDateSelect={setTravelDate} 
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 bg-brand-bg-primary rounded-2xl border border-white/5 flex flex-col justify-center h-full min-h-[160px]">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-muted mb-2 block">Selected Date</span>
                    {travelDate ? (
                      <p className="text-xl md:text-2xl font-black text-brand-red uppercase tracking-tighter">
                        {travelDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    ) : (
                      <p className="text-brand-muted text-sm font-bold tracking-wide italic">No date selected yet. Click any day on the calendar to select.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Message</label>
                <textarea rows="4" className="w-full p-4 bg-brand-bg-primary rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-brand-white"></textarea>
              </div>
              <button type="button" onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: 'Hello Harmain Travels, I would like to send an inquiry.' } }));
              }} className="btn-primary w-full flex items-center justify-center gap-4">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
