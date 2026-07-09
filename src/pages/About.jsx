import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { History } from 'lucide-react';

import SEO from '../components/common/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Harmain Travels",
    "url": "https://harmaintravels.com",
    "logo": "https://harmaintravels.com/logo.png",
    "foundingDate": "2011",
    "description": "Harmain Travels is a premium travel agency based in Islamabad, Pakistan, specializing in VIP Umrah packages, corporate travel management, and luxury Asian tours.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.15 1st floor Aalay Plaza Fazal-e-Haq road Blue Area Islamabad",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-317-5477919",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title="About Our Legacy & Excellence | Harmain Travels"
        description="Learn about the legacy of Harmain Travels. Discover our core values, accredited excellence, and dedication to delivering top-tier global travel services."
        url="https://harmaintravels.com/about"
        schema={schema}
      />
      <Navbar />
      
      <section className="pt-48 pb-32 bg-brand-bg-primary text-center px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#931328]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <History size={48} className="text-[#931328] mx-auto mb-8 animate-float-slow" />
          <span className="text-[#931328] font-black uppercase tracking-[0.5em] text-xs mb-6 block">Our Story</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Legacy of <br/> <span className="text-[#931328]">Harmain Travels</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-32">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-white uppercase tracking-tighter mb-6 md:mb-10 leading-tight">
              Redefining the <br/> <span className="text-[#931328]">Asian Gateway</span>
            </h2>
            <p className="text-brand-silver text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 md:mb-10">
              Founded on the principles of integrity and excellence, Harmain Travels has become the architectural bridge to Asia's most iconic wonders. We specialize in providing high-end, seamless travel experiences that go beyond mere ticketing.
            </p>
            <p className="text-brand-silver text-base md:text-lg lg:text-xl font-medium leading-relaxed italic border-l-8 border-[#931328] pl-6 md:pl-8">
              "We don't just book trips; we design memories that last a lifetime."
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5] bg-brand-bg-secondary" 
              alt="Harmain Travels Legacy" 
            />
            <div className="absolute bottom-4 right-4 md:-bottom-10 md:-right-10 bg-brand-bg-secondary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl z-20 border-b-[8px] md:border-b-[12px] border-[#931328]">
              <div className="text-4xl md:text-6xl font-black text-brand-white">15+</div>
              <div className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-muted">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed SEO Information Section */}
      <section className="py-24 bg-brand-bg-primary border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#931328] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Certified Excellence</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-white uppercase tracking-tighter leading-none mb-6">
                Accredited Travel <br/><span className="text-[#931328] font-light italic">Agency Since 2011</span>
              </h3>
              <p className="text-brand-silver text-sm sm:text-base leading-relaxed mb-4">
                As a fully registered and accredited travel authority, Harmain Travels has consistently maintained a world-class reputation in customer satisfaction, corporate trip management, and visa advisory services across South Asia and the Middle East. Over the past 15 years, our elite tourism experts have assisted thousands of high-end travelers in exploring first-rate destinations with zero stress.
              </p>
              <p className="text-brand-silver text-sm sm:text-base leading-relaxed">
                By choosing Harmain Travels, you are partnering with an authorized local travel agent equipped with direct API connections to five-star hotels and leading international airlines, ensuring that you receive unparalleled value and elite-tier hospitality.
              </p>
            </div>
            <div className="bg-brand-bg-secondary p-8 sm:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
              <h4 className="text-xl md:text-2xl font-black text-brand-white uppercase tracking-tighter mb-6">Why Trust Us?</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-sm font-bold tracking-wide text-brand-silver">
                  <span className="w-8 h-8 bg-[#931328]/10 text-[#931328] rounded-full shrink-0 flex items-center justify-center font-black">1</span>
                  Officially Licensed by the Ministry of Religious Affairs
                </li>
                <li className="flex items-center gap-4 text-sm font-bold tracking-wide text-brand-silver">
                  <span className="w-8 h-8 bg-[#931328]/10 text-[#931328] rounded-full shrink-0 flex items-center justify-center font-black">2</span>
                  Over 15 Years of Verifiable Industry Experience
                </li>
                <li className="flex items-center gap-4 text-sm font-bold tracking-wide text-brand-silver">
                  <span className="w-8 h-8 bg-[#931328]/10 text-[#931328] rounded-full shrink-0 flex items-center justify-center font-black">3</span>
                  Direct API Partnerships with 5-Star Hotel Chains
                </li>
                <li className="flex items-center gap-4 text-sm font-bold tracking-wide text-brand-silver">
                  <span className="w-8 h-8 bg-[#931328]/10 text-[#931328] rounded-full shrink-0 flex items-center justify-center font-black">4</span>
                  IATA Accredited Travel Agency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
