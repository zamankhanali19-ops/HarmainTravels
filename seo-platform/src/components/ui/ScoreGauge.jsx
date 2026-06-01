import { useEffect, useRef, useState } from 'react';

const ScoreGauge = ({ score = 0, size = 140, strokeWidth = 10, label = '', delay = 0 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getColor = (s) => {
    if (s >= 80) return '#10b981';
    if (s >= 60) return '#22c55e';
    if (s >= 40) return '#f59e0b';
    return '#ef4444';
  };

  const getGrade = (s) => {
    if (s >= 90) return 'A+';
    if (s >= 80) return 'A';
    if (s >= 70) return 'B';
    if (s >= 60) return 'C';
    if (s >= 40) return 'D';
    return 'F';
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setAnimatedScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }, [score, visible]);

  const color = getColor(animatedScore);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background Circle */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke="var(--border-primary)"
            strokeWidth={strokeWidth}
            opacity={0.4}
          />
          {/* Score Arc */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.05s linear, stroke 0.3s ease', filter: `drop-shadow(0 0 8px ${color}40)` }}
          />
        </svg>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-[800] tracking-tight" style={{ color, fontFamily: 'var(--font-sans)' }}>
            {animatedScore}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
            {getGrade(animatedScore)}
          </span>
        </div>
      </div>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </span>
      )}
    </div>
  );
};

export default ScoreGauge;
