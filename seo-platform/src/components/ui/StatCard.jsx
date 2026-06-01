const StatCard = ({ icon: Icon, label, value, trend, trendValue, color, delay = 0 }) => {
  return (
    <div
      className="card p-5 animate-fade-in card-interactive"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15`, color }}
        >
          {Icon && <Icon size={20} />}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold ${
            trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-red-500' : 'text-amber-500'
          }`}>
            <span>{trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="text-2xl font-[800] tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
        {value}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;
