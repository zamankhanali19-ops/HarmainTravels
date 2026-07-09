import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TravelCalendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleSelect = (day) => {
    const sel = new Date(year, month, day);
    if (onDateSelect) onDateSelect(sel);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-black text-brand-white uppercase tracking-wider">
          {months[month]} {year}
        </h4>
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={prevMonth} 
            className="p-1.5 hover:bg-brand-bg-primary rounded-full transition-colors border border-white/5"
          >
            <ChevronLeft size={18} className="text-brand-red" />
          </button>
          <button 
            type="button"
            onClick={nextMonth} 
            className="p-1.5 hover:bg-brand-bg-primary rounded-full transition-colors border border-white/5"
          >
            <ChevronRight size={18} className="text-brand-red" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map((d, index) => (
          <span key={index} className="text-[10px] font-black uppercase tracking-wider text-brand-muted">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, index) => (
          <span key={index} className="p-2"></span>
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const isSelected = selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === month && 
            selectedDate.getFullYear() === year;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(day)}
              className={`p-2 text-xs font-bold rounded-xl transition-all ${
                isSelected 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'hover:bg-white/10 text-brand-white border border-transparent'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
