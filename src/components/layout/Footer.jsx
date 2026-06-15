import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Flights', path: '/flights' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer 
      style={{ background: 'linear-gradient(135deg, #002147 0%, #001124 55%, #A61D24 100%)' }}
      className="text-white pt-24 pb-12 relative overflow-hidden border-t-4 border-[#A61D24]"
    >

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Core Branding */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-2xl border border-slate-100">
                <img src="/logo.png" alt="Harmain Travels Logo" className="h-12 sm:h-14 object-contain" loading="lazy" />
              </div>
              <p className="text-white/90 text-sm sm:text-base font-bold tracking-wide uppercase leading-relaxed max-w-sm mb-6">
                Your high-end travel partner. Curating elite escapes and world-class itineraries since 2010.
              </p>
            </div>

            {/* Original SVG Social Icons */}
            <div className="flex gap-4 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#002147] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.794h-2.96v-3.429h2.96v-2.529c0-2.933 1.791-4.529 4.405-4.529 1.252 0 2.327.093 2.641.135v3.062h-1.812c-1.424 0-1.7.677-1.7 1.669v2.189h3.39l-.443 3.429h-2.947v8.794h6.107c.731 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#002147] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.226-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#002147] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.034l4.717 6.175 5.493-6.175zM17.082 19.77h1.833L7.084 4.126H5.117L17.082 19.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <span className="text-white font-black uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-6 block border-b border-white/10 pb-2">Navigation</span>
            <ul className="space-y-3.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 hover:translate-x-2"
                  >
                    <Sparkles size={12} className="text-[#A61D24] group-hover:text-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-4">
            <span className="text-white font-black uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-6 block border-b border-white/10 pb-2">Get in Touch</span>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-white/60 block text-[9px] font-black uppercase tracking-widest mb-1">Our Location</span>
                  <p className="text-white font-bold tracking-wide uppercase text-xs sm:text-sm leading-normal">Office no.11, Alay plaza, Fazal-e-Haq Road, Blue Area, Islamabad</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-white/60 block text-[9px] font-black uppercase tracking-widest mb-1">Direct Hotline</span>
                  <a href="tel:+923175477919" className="text-white font-black tracking-[0.1em] uppercase text-xs sm:text-base hover:text-white/80 transition-all">+92 317 5477919</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-white/60 block text-[9px] font-black uppercase tracking-widest mb-1">Email Inquiries</span>
                  <a href="mailto:harmaintravelisb@gmail.com" className="text-white font-bold tracking-wide uppercase text-xs sm:text-sm hover:text-white/80 transition-all">harmaintravelisb@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
            © {currentYear} Harmain Travels. The Ultimate Asian Travel Authority.
          </p>
          <div className="flex gap-6 text-white/40 font-black uppercase tracking-widest text-[9px] sm:text-[10px]">
            <a href="#" className="hover:text-white transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
