import { Search, Bell, Menu, Globe } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const TopBar = ({ onMenuClick, onSearch }) => {
  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-6 gap-4"
      style={{
        background: 'var(--surface-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      {/* Left: Mobile menu + Search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden btn-ghost p-2 rounded-xl"
        >
          <Menu size={20} />
        </button>

        <div
          className="flex items-center gap-2 flex-1 max-w-md px-3 py-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-[var(--brand-300)]"
          style={{ background: 'var(--bg-input)', border: '1.5px solid var(--border-primary)' }}
          onClick={onSearch}
        >
          <Search size={15} style={{ color: 'var(--text-tertiary)' }} />
          <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Search or enter URL to audit...
          </span>
          <kbd className="hidden sm:inline-flex ml-auto px-1.5 py-0.5 rounded text-[10px] font-mono font-bold" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}>
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <ThemeToggle />

        <button
          className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
        >
          <Bell size={16} />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white font-bold flex items-center justify-center border-2" style={{ borderColor: 'var(--bg-primary)' }}>
            3
          </span>
        </button>

        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white cursor-pointer transition-all duration-200 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
        >
          U
        </div>
      </div>
    </header>
  );
};

export default TopBar;
