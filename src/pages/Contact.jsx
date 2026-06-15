import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { TravelCalendar } from '../components/common/TravelCalendar';

const Contact = () => {
  const [travelDate, setTravelDate] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Our Experts - Support & Queries | Harmain Travels";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Get in touch with the premium travel experts at Harmain Travels. Reach out today for personalized tour inquiries, flight support, or elite hotel bookings.";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-24 bg-slate-50 text-center px-4">
        <h1 className="text-5xl md:text-9xl font-black text-[#002147] uppercase tracking-tighter mb-8 leading-none">
          Get in <span className="text-[#931328]">Touch</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium tracking-widest uppercase">
          Your journey to Asia starts with a conversation.
        </p>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tighter mb-4">Our Office</h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Office no.11, Alay plaza, Fazal-e-Haq Road,<br/>Blue Area, Islamabad
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tighter mb-4">Phone</h3>
                <p className="text-xl text-slate-500 font-medium">+92 317 5477919</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#931328] shrink-0 shadow-xl">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#002147] uppercase tracking-tighter mb-4">Email</h3>
                <p className="text-xl text-slate-500 font-medium">harmaintravelisb@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form with Calendar */}
          <div className="bg-white p-10 md:p-12 rounded-[3.5rem] md:rounded-[4rem] shadow-2xl border-t-[12px] border-[#931328]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-[#002147]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Email Address</label>
                  <input type="email" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-[#002147]" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Select Travel / Consultation Date</label>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-full sm:w-1/2">
                    <TravelCalendar 
                      selectedDate={travelDate} 
                      onDateSelect={setTravelDate} 
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center h-full min-h-[160px]">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 block">Selected Date</span>
                    {travelDate ? (
                      <p className="text-xl md:text-2xl font-black text-[#A61D24] uppercase tracking-tighter">
                        {travelDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    ) : (
                      <p className="text-slate-400 text-sm font-bold tracking-wide italic">No date selected yet. Click any day on the calendar to select.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Message</label>
                <textarea rows="4" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-[#931328] font-bold text-[#002147]"></textarea>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-4">
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
