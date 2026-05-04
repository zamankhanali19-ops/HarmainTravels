import { useState, useEffect } from 'react';
import { Plane, CheckCircle2, X } from 'lucide-react';

const LiveBookingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  const bookings = [
    { name: 'Sarah M.', location: 'Dubai', destination: 'Maldives Retreat', time: 'Just now' },
    { name: 'Michael T.', location: 'London', destination: 'Thailand Explorer', time: '2 mins ago' },
    { name: 'Ayesha K.', location: 'Islamabad', destination: 'Luxury Umrah Package', time: '5 mins ago' },
    { name: 'David L.', location: 'New York', destination: 'Bali Resort', time: 'Just now' },
    { name: 'Omar R.', location: 'Qatar', destination: 'Malaysia Family Tour', time: '1 min ago' },
  ];

  useEffect(() => {
    const showRandomBooking = () => {
      const randomBooking = bookings[Math.floor(Math.random() * bookings.length)];
      setCurrentBooking(randomBooking);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      showRandomBooking();
      
      // Then show every 15-25 seconds
      setInterval(() => {
        showRandomBooking();
      }, Math.floor(Math.random() * 10000) + 15000);
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  if (!currentBooking) return null;

  return (
    <div 
      className={`fixed bottom-24 left-4 sm:left-6 z-[90] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] rounded-2xl p-3 sm:p-4 pr-10 flex items-center gap-3 sm:gap-4 max-w-[280px] sm:max-w-[320px] relative group">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <X size={14} />
        </button>

        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#A61D24] to-[#002147] flex items-center justify-center shrink-0 shadow-inner relative">
          <Plane size={18} className="text-white" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            <CheckCircle2 size={12} className="text-green-500 fill-green-100" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 flex items-center gap-1">
            Verified Booking
          </span>
          <p className="text-xs sm:text-sm font-extrabold text-[#002147] leading-tight">
            {currentBooking.name} from {currentBooking.location} booked a trip to <span className="text-[#A61D24]">{currentBooking.destination}</span>
          </p>
          <span className="text-[10px] font-medium text-slate-400 mt-1">
            {currentBooking.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveBookingPopup;
