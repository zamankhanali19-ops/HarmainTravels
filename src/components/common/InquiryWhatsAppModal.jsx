import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const InquiryWhatsAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Hello%20Harmain%20Travels%2C%20I%20need%20assistance.');

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail && e.detail.text) {
        setCustomMsg(encodeURIComponent(e.detail.text));
      } else {
        setCustomMsg('Hello%20Harmain%20Travels%2C%20I%20need%20assistance.');
      }
      setIsOpen(true);
    };
    window.addEventListener('open-inquiry-modal', handleOpen);
    return () => window.removeEventListener('open-inquiry-modal', handleOpen);
  }, []);

  const agents = [
    { name: 'Arslan Ahmed', number: '923258880051', role: 'Travel Consultant' },
    { name: 'Ali Zaman', number: '923258880050', role: 'CEO' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-bg-primary/95 backdrop-blur-md" 
            onClick={() => setIsOpen(false)}
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-sm bg-[#111827] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden z-10"
          >
            <div className="bg-brand-red p-6 text-center relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              >
                <X size={18} />
              </button>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter">Send Inquiry</h3>
              <p className="text-white/80 text-xs font-medium mt-1">Select an expert to continue on WhatsApp</p>
            </div>

            <div className="p-6 space-y-3">
              {agents.map((agent, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${agent.number}?text=${customMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-[#25D366]/50 bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-white text-base font-bold">{agent.name}</div>
                    <div className="text-gray-400 text-[10px] font-black uppercase tracking-wider">{agent.role}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InquiryWhatsAppModal;
