import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe, Camera, Send, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = ({ className = "", scrolled }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="relative flex flex-col items-center">
      <img
        src="/logo.png"
        alt="Harmain Travels Logo"
        className="h-10 md:h-12 object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.querySelector('.fallback-logo').style.display = 'flex';
        }}
      />
      <span className="text-brand-silver-light font-display font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-1">
        Travel and Tours
      </span>
      {/* Fallback Logo */}
      <div className="fallback-logo hidden flex-col items-center">
        <span className="text-brand-red font-display font-black text-xl uppercase tracking-widest">HT</span>
        <span className="text-brand-silver-light font-display font-bold text-[9px] mt-1 uppercase">HARMAIN</span>
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
    { name: 'Umrah Packages', path: '/umrah' },
    { name: 'Hajj Packages', path: '/hajj-packages' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Air Tickets', path: '/flights' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      {/* Top Contact Bar */}
      <div className={`bg-[#B11226]/30 backdrop-blur-2xl border-red-500/15 text-brand-silver-light transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 py-0 border-b-0 opacity-0' : 'max-h-[50px] py-2 border-b opacity-100'}`}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] md:text-[11px] font-display font-medium uppercase tracking-[0.2em]">
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-2 text-brand-muted">
              <MapPin size={14} className="text-brand-red" /> Office No.15, Aalay Plaza, Blue Area, Islamabad
            </div>
            <a href="tel:+923258880050" className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Phone size={14} className="text-brand-red" /> +92 325 8880050
            </a>
            <a href="mailto:harmaintravelisb@gmail.com" className="hidden md:flex items-center gap-2 hover:text-brand-red transition-colors">
              <Mail size={14} className="text-brand-red" /> harmaintravelisb@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="text-brand-silver hover:text-brand-red transition-colors"><Globe size={16} /></a>
              <a href="#" className="text-brand-silver hover:text-brand-red transition-colors"><Camera size={16} /></a>
              <a href="#" className="text-brand-silver hover:text-brand-red transition-colors"><Send size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`relative w-full transition-all duration-500 backdrop-blur-3xl backdrop-saturate-150 rounded-b-[2.5rem] md:rounded-b-[4rem] ${
          scrolled
            ? 'bg-[#B11226]/80 border-b-2 border-red-400/50 shadow-[0_20px_40px_rgba(177,18,38,0.5)] py-2'
            : 'bg-[#B11226]/50 border-b-2 border-red-400/40 shadow-[0_20px_50px_rgba(177,18,38,0.4)] py-4'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group shrink-0">
              <Logo className="group-hover:scale-105 transition-transform duration-500" scrolled={scrolled} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link font-display ${location.pathname === link.path ? 'text-brand-red active' : ''
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-red"
                    />
                  )}
                </Link>
              ))}
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: 'Hello' } }))} className="btn-primary !py-2.5 !px-6 !text-[11px]">Book Now</button>
            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden flex items-center gap-4">
              <a href="tel:+923258880050" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:bg-brand-red hover:text-white transition-all">
                <Phone size={16} />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white hover:bg-brand-red-dark transition-all">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="xl:hidden absolute top-full left-0 w-full bg-[#0E2240] z-[90] p-6 shadow-2xl border-t border-white/10 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-display font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-red' : 'text-brand-silver-light'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <button onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('open-inquiry-modal', { detail: { text: 'I want to book a journey' } })); }} className="btn-primary w-full">Book Your Journey</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {children}
    </header>
  );
};

export default Header;
