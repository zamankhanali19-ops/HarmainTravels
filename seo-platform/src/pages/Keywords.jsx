import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import { Key, BarChart3, TrendingUp, Search, Sparkles, HelpCircle } from 'lucide-react';

const Keywords = () => {
  const { results } = useAudit();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [simulatedKeywords, setSimulatedKeywords] = useState(null);

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 text-amber-500">
          <Key size={28} />
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No Audit Data Found</h2>
        <p className="text-sm max-w-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          Run a site audit from the Dashboard or Site Audit page first to view Keyword details.
        </p>
      </div>
    );
  }

  const { content } = results;

  const handleKeywordSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Simulate real keyword research metrics
    const keyword = searchTerm.trim().toLowerCase();
    const suggestions = [
      { word: keyword, volume: Math.round(5000 + Math.random() * 50000), difficulty: Math.round(20 + Math.random() * 60), cpc: '$' + (0.5 + Math.random() * 5).toFixed(2), intent: 'Commercial' },
      { word: `${keyword} services`, volume: Math.round(500 + Math.random() * 4000), difficulty: Math.round(15 + Math.random() * 40), cpc: '$' + (1.2 + Math.random() * 8).toFixed(2), intent: 'Transactional' },
      { word: `best ${keyword}`, volume: Math.round(1000 + Math.random() * 8000), difficulty: Math.round(25 + Math.random() * 55), cpc: '$' + (0.8 + Math.random() * 6).toFixed(2), intent: 'Informational' },
      { word: `cheap ${keyword}`, volume: Math.round(300 + Math.random() * 2000), difficulty: Math.round(10 + Math.random() * 30), cpc: '$' + (0.2 + Math.random() * 2).toFixed(2), intent: 'Transactional' },
      { word: `how to choose ${keyword}`, volume: Math.round(100 + Math.random() * 1000), difficulty: Math.round(5 + Math.random() * 25), cpc: '$' + (0.1 + Math.random() * 1.5).toFixed(2), intent: 'Informational' },
    ];

    setSimulatedKeywords(suggestions);
    setSearchHistory(prev => [searchTerm, ...prev.filter(x => x !== searchTerm)].slice(0, 5));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Keyword Explorer
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Review on-page keyword density and run semantic search simulations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* On-page Density Analysis */}
        <div className="lg:col-span-2 card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <BarChart3 size={16} className="text-indigo-400" />
            Top On-Page Keywords Density
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Keyword</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Count</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Density</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Density Heatmap</th>
                </tr>
              </thead>
              <tbody>
                {content.topKeywords.map((kw, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] border-b border-white/5 last:border-0 transition-colors">
                    <td className="py-3 px-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{kw.word}</td>
                    <td className="py-3 px-4 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{kw.count}</td>
                    <td className="py-3 px-4 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{kw.density}%</td>
                    <td className="py-3 px-4 w-48">
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{ width: `${Math.min(parseFloat(kw.density) * 20, 100)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info panel */}
        <div className="card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            Density Guidelines
          </h3>
          
          <div className="space-y-3 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              <strong>What is Keyword Density?</strong>
              <br />
              The percentage of times a keyword appears on your page compared to the total number of words.
            </p>
            <p>
              <strong>Optimal Density: 1% to 2.5%</strong>
              <br />
              Keeping key terms within this range helps search engines index your page without causing keyword stuffing penalties.
            </p>
          </div>
        </div>
      </div>

      {/* Keyword Research Simulator */}
      <div className="card p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
              <TrendingUp size={16} className="text-indigo-400" />
              Keyword Metrics Explorer (Real-time Simulation)
            </h3>
            <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
              Explore search volumes, difficulty, and cost-per-click values for target keywords.
            </p>
          </div>
        </div>

        <form onSubmit={handleKeywordSearch} className="flex gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10" style={{ background: 'var(--bg-input)' }}>
            <Search size={16} style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Enter target keyword (e.g. travel, hotels)"
              className="flex-1 bg-transparent border-0 outline-none text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
            />
          </div>
          <button type="submit" className="btn btn-primary gap-1.5 whitespace-nowrap">
            <Sparkles size={14} />
            Search
          </button>
        </form>

        {simulatedKeywords && (
          <div className="overflow-x-auto border border-white/5 rounded-xl animate-fade-in">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10" style={{ background: 'var(--bg-tertiary)' }}>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Keyword Suggestion</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Search Volume</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>CPC</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Difficulty</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Intent</th>
                </tr>
              </thead>
              <tbody>
                {simulatedKeywords.map((suggestion, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] border-b border-white/5 last:border-0 transition-colors">
                    <td className="py-3 px-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{suggestion.word}</td>
                    <td className="py-3 px-4 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{suggestion.volume.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{suggestion.cpc}</td>
                    <td className="py-3 px-4 text-sm font-mono">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        suggestion.difficulty < 30 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : suggestion.difficulty < 60 
                            ? 'bg-amber-500/10 text-amber-400' 
                            : 'bg-red-500/10 text-red-400'
                      }`}>{suggestion.difficulty}/100</span>
                    </td>
                    <td className="py-3 px-4 text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>{suggestion.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Keywords;
