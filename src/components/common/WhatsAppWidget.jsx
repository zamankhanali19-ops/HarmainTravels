import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const WhatsAppWidget = () => {
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
    window.addEventListener('open-whatsapp-widget', handleOpen);
    return () => window.removeEventListener('open-whatsapp-widget', handleOpen);
  }, []);

  const agents = [
    { name: 'Arslan Ahmed', number: '923258880051', role: 'Travel Consultant' },
    { name: 'Ali Zaman', number: '923258880050', role: 'CEO' }
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 bg-[#111827] border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[260px]"
          >
            <h4 className="text-white font-display font-semibold mb-3 px-1 text-sm uppercase tracking-wider">Start a Conversation</h4>
            <div className="space-y-2">
              {agents.map((agent, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${agent.number}?text=${customMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{agent.name}</div>
                    <div className="text-gray-400 text-xs">{agent.role}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center relative"
      >
        {isOpen ? <X size={26} strokeWidth={2.5} /> : <MessageCircle size={26} fill="white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-red border-2 border-[#25D366]"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
