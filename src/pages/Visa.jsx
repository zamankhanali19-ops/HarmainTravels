import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import { ArrowRight, CheckCircle2, Clock, FileText, Globe, ShieldCheck, MapPin, Award } from 'lucide-react';

const visaCountries = [
  {
    country: 'United Arab Emirates',
    type: 'E-Visa (30/60 Days)',
    time: '2-4 Working Days',
    fee: 'PKR 30,000 (30-Day Incl. Service)',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    country: 'Saudi Arabia',
    type: 'Umrah / Tourist E-Visa',
    time: '24-48 Hours',
    fee: 'PKR 65,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    country: 'Turkey',
    type: 'Sticker Visa (Anatolia)',
    time: '15-20 Working Days',
    fee: 'PKR 55,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    country: 'Schengen (Europe)',
    type: 'Short Stay (Type C)',
    time: '15-20 Working Days',
    fee: 'EUR 102 (Incl. VFS Fee)',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    country: 'United Kingdom',
    type: 'Standard Visitor Visa',
    time: '3-4 Weeks',
    fee: 'GBP 115 + VFS Fee',
    image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    country: 'United States',
    type: 'B1/B2 Visitor Visa',
    time: 'Varies by Embassy',
    fee: 'USD 185 (MRV Fee)',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    country: 'Malaysia',
    type: 'E-Visa',
    time: '3-5 Working Days',
    fee: 'PKR 15,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
    popular: false,
    officialDropbox: true
  },
  {
    country: 'Thailand',
    type: 'Sticker Visa',
    time: '10-15 Working Days',
    fee: 'PKR 20,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
    popular: false,
    officialDropbox: true
  },
  {
    country: 'Indonesia',
    type: 'Calling Visa / B211A',
    time: '10-14 Working Days',
    fee: 'PKR 30,000 (Drop-box Incl. Service)',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    popular: true,
    officialDropbox: true
  },
  {
    country: 'Singapore',
    type: 'E-Visa via Agent',
    time: '5-7 Working Days',
    fee: 'PKR 25,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    country: 'Azerbaijan',
    type: 'ASAN E-Visa',
    time: '3 Working Days',
    fee: 'PKR 12,000 (Incl. Service)',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800',
    popular: true
  }
];

const Visa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Global Visa Consulting Services",
      "description": "Expert visa consulting and processing for UAE, Saudi Arabia, UK, USA, Schengen, and global destinations.",
      "numberOfItems": visaCountries.length,
      "itemListElement": visaCountries.map((visa, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": `${visa.country} Visa Service`,
          "description": `${visa.type} processing for ${visa.country}. Time: ${visa.time}.`,
          "provider": {
            "@type": "TravelAgency",
            "name": "Harmain Travels",
            "url": "https://harmaintravels.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Blue Area",
              "addressLocality": "Islamabad",
              "addressRegion": "Islamabad Capital Territory",
              "postalCode": "44000",
              "addressCountry": "PK"
            },
            "telephone": "+923258880050"
          }
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best visa agent in Islamabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Harmain Travels, located in Blue Area Islamabad, is the No. 1 visa agent in Pakistan. We process e-Visas and traditional visas for over 50 countries including Dubai, UK, USA, Schengen, and all Asian destinations."
          }
        },
        {
          "@type": "Question",
          "name": "How long does visa processing take from Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing times vary by country. UAE tourist visas take 3-5 business days, Saudi e-Visas are instant, UK visas take 15-20 working days, and Schengen visas take 10-15 working days. Harmain Travels offers expedited processing for urgent travel."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for a visa from Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common requirements include: valid passport (6+ months validity), passport-sized photos, bank statements, confirmed flight and hotel bookings, and employment/business proof. Requirements vary per country—contact our visa consultants for your specific destination."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg-primary">
      <SEO 
        title="Best Visa Agent in Islamabad | eVisa & Visa Requirements from Pakistan"
        description="Harmain Travels is the No. 1 visa agent in Blue Area Islamabad. Get expert guidance on visa requirements from Pakistan, global eVisa processing for Dubai, UK, USA, Schengen, and Asian countries."
        url="https://harmaintravels.com/visa-services"
        schema={schema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden bg-brand-bg-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=60&w=1200')] opacity-5 bg-cover bg-center mix-blend-screen"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-bg-primary/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs sm:text-sm mb-6 block flex items-center justify-center gap-2">
            <Globe size={16} /> Best Visa Agent in Islamabad
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-brand-white uppercase tracking-tight mb-8 leading-[1.1]">
            Global <span className="text-brand-red">eVisa</span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver-light to-brand-muted">& Visa Services</span>
          </h1>
          <p className="text-brand-muted max-w-3xl mx-auto text-lg sm:text-xl font-body leading-relaxed mb-10">
            Expert consultation and end-to-end processing for tourist, business, and transit visas. We simplify the complex world of international borders and provide detailed <strong>visa requirements from Pakistan</strong>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#destinations" className="btn-primary w-full sm:w-auto">Explore Destinations</a>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: 'Hello Harmain Travels, I need help with a visa application.' } }))} className="btn-secondary w-full sm:w-auto">Consult an Expert</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-bg-primary relative border-b border-white/5">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight mb-4">Our <span className="text-brand-red">Process</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto font-body">A seamless, hassle-free approach to securing your travel documents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FileText size={32} />, title: '1. Consultation', desc: 'Free assessment of your profile and travel history.' },
              { icon: <CheckCircle2 size={32} />, title: '2. Documentation', desc: 'Precise compilation and verification of required documents.' },
              { icon: <Globe size={32} />, title: '3. Submission', desc: 'Filing your application accurately with the respective embassy.' },
              { icon: <ShieldCheck size={32} />, title: '4. Approval', desc: 'Tracking and delivery of your approved visa.' },
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-8 text-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 text-9xl font-display font-black text-white/[0.02] -mt-8 -mr-4 group-hover:text-brand-red/[0.05] transition-colors">{idx + 1}</div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-white uppercase tracking-wide mb-3 relative z-10">{step.title}</h3>
                <p className="text-brand-muted font-body text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section id="destinations" className="py-24 bg-brand-bg-secondary relative">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <Award className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#D4AF37] uppercase tracking-wide mb-3">
                Official Dropbox Center
              </h3>
              <p className="text-brand-silver-light font-body text-lg leading-relaxed max-w-3xl">
                Harmain Travels is proud to be the <strong className="text-white">Official Authorized Dropbox</strong> for <strong className="text-white">Thailand, Malaysia, and Indonesia</strong>. We offer guaranteed priority processing, specialized verification, and faster approval times for these select destinations.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-red font-display font-semibold uppercase tracking-[0.3em] text-xs mb-4 block">Select Destination</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight">
                Visa <span className="text-brand-red">Destinations</span>
              </h2>
            </div>
            <p className="text-brand-muted font-body max-w-md">
              Choose your destination to inquire about the specific visa requirements, processing times, and fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {visaCountries.map((item, idx) => (
              <div key={idx} className="glass-card group overflow-hidden flex flex-col h-full border border-white/5 hover:border-brand-red/30 transition-all duration-500">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.country} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-primary via-brand-bg-primary/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  {item.officialDropbox ? (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-brand-bg-primary text-[10px] font-black uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-1.5 border border-white/20">
                      <Award size={12} strokeWidth={3} /> Official Dropbox
                    </div>
                  ) : item.popular ? (
                    <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-lg border border-white/10">
                      Popular
                    </div>
                  ) : null}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight flex items-center gap-2">
                      <MapPin size={18} className="text-brand-red" /> {item.country}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow justify-between gap-6 bg-brand-bg-primary/50">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                      <span className="text-brand-muted text-xs uppercase tracking-widest font-semibold">Visa Type</span>
                      <span className="text-brand-silver-light text-sm font-medium text-right">{item.type}</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                      <span className="text-brand-muted text-xs uppercase tracking-widest font-semibold">Processing</span>
                      <span className="text-brand-silver-light text-sm font-medium flex items-center gap-1">
                        <Clock size={14} className="text-brand-red" /> {item.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-start border-b border-white/5 pb-3">
                      <span className="text-brand-muted text-xs uppercase tracking-widest font-semibold">Approx Fee</span>
                      <span className="text-brand-red text-sm font-black flex items-center gap-1">
                        {item.fee || 'Contact Us'}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: `Hello Harmain Travels, I need details regarding the ${item.country} visa.` } }))}
                    className="flex items-center justify-between w-full p-3.5 border border-white/10 rounded-xl group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300 text-brand-silver-light font-display font-medium uppercase text-xs tracking-wider mt-auto"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-bg-primary relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-white uppercase tracking-tight mb-6">
            Need a Visa Not Listed Here?
          </h2>
          <p className="text-brand-muted font-body text-lg mb-8 max-w-2xl mx-auto">
            We process visas for over 50+ countries. Contact our visa experts to discuss your specific travel requirements.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal'))} className="btn-primary">
            Contact Visa Expert
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Visa;
