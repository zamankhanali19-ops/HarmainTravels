import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, Camera, Send, MapPin } from 'lucide-react';

const Logo = ({ className = "", scrolled }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="relative flex flex-col items-center">
      <img
        src="/logo.png"
        alt="Harmain Travels Logo"
        className="h-8 md:h-10 object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.querySelector('.fallback-logo').style.display = 'flex';
        }}
      />
      <span className={`${scrolled ? 'text-white' : 'text-[#002147]'} font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-1 transition-colors duration-500`}>
        Travel and Tours
      </span>
      {/* Fallback Architectural Logo */}
      <div className="fallback-logo hidden flex-col items-center">
        <div className="flex gap-2">
          <div className="w-2.5 h-10 bg-gradient-to-b from-[#A61D24] to-[#002147] rounded-t-full"></div>
          <div className="w-2.5 h-10 bg-gradient-to-b from-[#A61D24] to-[#002147] rounded-t-full"></div>
        </div>
        <span className={`${scrolled ? 'text-white' : 'text-[#002147]'} font-black text-[9px] mt-1 uppercase transition-colors duration-500`}>HARMAIN</span>
      </div>
    </div>
  </div>
);

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Flights', path: '/flights' },
    { name: 'Services', path: '/services' },
    { name: 'Umrah', path: '/umrah' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-500">
      {/* Top Contact Bar */}
      <div className={`bg-[#002147] text-white py-1 transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-2 text-white/60">
              <MapPin size={12} className="text-[#A61D24]" /> Blue Area, Islamabad
            </div>
            <a href="tel:+923175477919" className="flex items-center gap-2 hover:text-[#A61D24] transition-colors">
              <Phone size={12} className="text-[#A61D24]" /> +92 317 5477919
            </a>
            <a href="mailto:harmaintravelisb@gmail.com" className="hidden md:flex items-center gap-2 hover:text-[#A61D24] transition-colors">
              <Mail size={12} className="text-[#A61D24]" /> harmaintravelisb@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden lg:inline text-white/40">Follow Iconic Journeys:</span>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white"><Globe size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white"><Camera size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white"><Send size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        style={{ backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.65)' : 'rgba(255, 255, 255, 0.65)' }}
        className={`relative transition-all duration-500 border-b backdrop-blur-2xl ${
          scrolled 
            ? 'border-white/10 shadow-2xl py-1.5 text-white' 
            : 'border-slate-100/50 py-2 text-[#002147]'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group shrink-0 max-w-[60%] md:max-w-none">
              <Logo className="group-hover:scale-105 transition-transform duration-500" scrolled={scrolled} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-[11px] tracking-[0.2em] font-black uppercase transition-all duration-300 ${
                    scrolled 
                      ? location.pathname === link.path ? 'text-white underline underline-offset-4 font-black' : 'text-white/80 hover:text-white'
                      : location.pathname === link.path ? 'text-[#A61D24] underline underline-offset-4 font-black' : 'text-[#002147]/80 hover:text-[#002147]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://wa.me/923175477919?text=Hello%20Harmain%20Travels%2C%20I%20would%20like%20to%20plan%20an%20iconic%20trip." target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 !text-[10px] !rounded-full shadow-lg hover:shadow-2xl">Book Iconic Trip</a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-3 shrink-0">
              <a href="tel:+923175477919" className="bg-[#002147] text-white p-2.5 rounded-full hover:bg-[#A61D24] transition-all flex items-center justify-center shrink-0">
                <Phone size={18} />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="bg-[#A61D24] text-white p-2.5 hover:bg-[#002147] rounded-xl transition-all flex items-center justify-center shrink-0">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white z-[90] p-8 flex flex-col gap-8 shadow-2xl border-t border-slate-100 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <span className="text-slate-300 font-black text-[10px] uppercase tracking-[0.5em]">Explore Asia</span>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${location.pathname === link.path ? 'text-[#A61D24] translate-x-4' : 'text-[#002147]'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a href="https://wa.me/923175477919?text=Hello%20Harmain%20Travels%2C%20I%20would%20like%20to%20plan%20a%20journey." target="_blank" rel="noopener noreferrer" className="btn-primary w-full !rounded-2xl !py-4 !text-sm text-center block">Book Your Journey</a>
              <div className="mt-6 flex flex-col gap-4 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-4"><MapPin size={16} className="text-[#A61D24]" /> Blue Area, Islamabad</div>
                <div className="flex items-center gap-4"><Phone size={16} className="text-[#A61D24]" /> +92 317 5477919</div>
                <div className="flex items-center gap-4"><Mail size={16} className="text-[#A61D24]" /> harmaintravelisb@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {children}
    </header>
  );
};

export default Header;
