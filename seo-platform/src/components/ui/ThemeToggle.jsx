import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
      style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(90deg) scale(0)' : 'rotate(0) scale(1)',
        }}
      />
      <Moon
        size={16}
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0)',
        }}
      />
    </button>
  );
};

export default ThemeToggle;
