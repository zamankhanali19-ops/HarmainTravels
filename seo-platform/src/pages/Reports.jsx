import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import { FileText, Printer, Trash2, Scale, ArrowRight, ArrowDown } from 'lucide-react';

const Reports = () => {
  const { history, clearHistory, results } = useAudit();
  const [compareA, setCompareA] = useState('');
  const [compareB, setCompareB] = useState('');
  const [compareResults, setCompareResults] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCompare = (e) => {
    e.preventDefault();
    if (!compareA || !compareB) return;

    // Retrieve full score info from history if available or simulate
    const itemA = history.find(h => h.url === compareA);
    const itemB = history.find(h => h.url === compareB);

    if (itemA && itemB) {
      setCompareResults({
        a: itemA,
        b: itemB
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 animate-fade-in no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Reports & History
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            Export analysis reports or compare audit versions side-by-side
          </p>
        </div>
        
        <div className="flex gap-2">
          {results && (
            <button onClick={handlePrint} className="btn btn-neutral gap-2 btn-sm text-xs font-bold">
              <Printer size={14} />
              Print / Save PDF
            </button>
          )}
          {history.length > 0 && (
            <button onClick={clearHistory} className="btn btn-error gap-2 btn-sm text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20">
              <Trash2 size={14} />
              Clear History
            </button>
          )}
        </div>
      </div>

      {/* History Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 no-print">
        <div className="lg:col-span-2 card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            Audit History ({history.length})
          </h3>
          
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-[var(--bg-tertiary)] border border-white/5 bg-[var(--bg-secondary)] gap-4 transition-colors">
                <div className="min-w-0 space-y-1">
                  <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{h.url}</div>
                  <div className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                    Analyzed on {new Date(h.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center gap-6 shrink-0 justify-between sm:justify-end">
                  <div className="text-right">
                    <span className="text-[10px] block font-semibold" style={{ color: 'var(--text-tertiary)' }}>Issues Found</span>
                    <span className="text-sm font-bold font-mono" style={{ color: h.issueCount > 3 ? 'var(--error)' : 'var(--warning)' }}>{h.issueCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] block font-semibold text-right" style={{ color: 'var(--text-tertiary)' }}>Score</span>
                    <span className={`text-sm font-extrabold ${
                      h.scores.overall >= 80 ? 'text-emerald-400' : h.scores.overall >= 50 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {h.scores.overall}/100
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {history.length === 0 && (
              <p className="text-sm py-12 text-center" style={{ color: 'var(--text-tertiary)' }}>No audits found in history.</p>
            )}
          </div>
        </div>

        {/* Compare Widget */}
        {history.length >= 2 && (
          <div className="card p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
              <Scale size={16} className="text-indigo-400" />
              Compare Audits
            </h3>
            
            <form onSubmit={handleCompare} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Audit A</label>
                <select
                  value={compareA}
                  onChange={e => setCompareA(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-white/10 text-xs font-semibold"
                  style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
                >
                  <option value="">Select Audit</option>
                  {history.map((h, idx) => (
                    <option key={idx} value={h.url}>{h.url}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Audit B</label>
                <select
                  value={compareB}
                  onChange={e => setCompareB(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-white/10 text-xs font-semibold"
                  style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
                >
                  <option value="">Select Audit</option>
                  {history.map((h, idx) => (
                    <option key={idx} value={h.url}>{h.url}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={!compareA || !compareB || compareA === compareB}
                className="w-full btn btn-primary py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                Compare Metrics
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Comparison Results */}
      {compareResults && (
        <div className="card p-6 space-y-6 animate-fade-in no-print">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            Comparison: {compareResults.a.url} vs {compareResults.b.url}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <CompareCard
              label="Overall Score"
              valA={compareResults.a.scores.overall}
              valB={compareResults.b.scores.overall}
              max={100}
            />
            <CompareCard
              label="SEO Score"
              valA={compareResults.a.scores.seo}
              valB={compareResults.b.scores.seo}
              max={100}
            />
            <CompareCard
              label="Health Score"
              valA={compareResults.a.scores.health}
              valB={compareResults.b.scores.health}
              max={100}
            />
            <CompareCard
              label="Performance Score"
              valA={compareResults.a.scores.performance}
              valB={compareResults.b.scores.performance}
              max={100}
            />
            <CompareCard
              label="Technical Score"
              valA={compareResults.a.scores.technical}
              valB={compareResults.b.scores.technical}
              max={100}
            />
            <CompareCard
              label="Content Quality Score"
              valA={compareResults.a.scores.content}
              valB={compareResults.b.scores.content}
              max={100}
            />
          </div>
        </div>
      )}

      {/* Print / Save PDF View (Only visible during printing) */}
      {results && (
        <div className="hidden space-y-8 font-sans bg-white text-black p-8 rounded-none" style={{ display: 'none' }} id="print-view">
          <div className="border-b-2 border-black pb-4">
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-black">SEO Performance Report</h1>
            <p className="text-sm font-semibold text-gray-600 mt-2">Target Site URL: {results.url}</p>
            <p className="text-xs text-gray-500">Report Generated on {new Date(results.timestamp).toLocaleString()}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PrintMetric label="Overall SEO Rating" score={results.scores.overall} />
            <PrintMetric label="On-Page Tag Quality" score={results.scores.seo} />
            <PrintMetric label="Technical Standards" score={results.scores.technical} />
            <PrintMetric label="Performance Speed" score={results.scores.performance} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-300 pb-2 text-black">Detected Crawling Issues</h3>
            <div className="space-y-2">
              {results.issues.critical.map((item, i) => (
                <div key={i} className="text-sm font-medium pl-4 border-l-4 border-red-600 py-1 text-black">
                  <strong>Critical:</strong> {item.message}
                </div>
              ))}
              {results.issues.warnings.map((item, i) => (
                <div key={i} className="text-sm font-medium pl-4 border-l-4 border-amber-600 py-1 text-black">
                  <strong>Warning:</strong> {item.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CompareCard = ({ label, valA, valB, max }) => {
  const diff = valB - valA;
  const isPos = diff > 0;
  return (
    <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-3">
      <span className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase block tracking-wider">{label}</span>
      <div className="flex items-center justify-between font-mono">
        <span className="text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>A: {valA}</span>
        <ArrowRight size={14} className="text-[var(--text-tertiary)]" />
        <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>B: {valB}</span>
      </div>
      <div className="flex justify-between items-center text-xs font-bold pt-1.5 border-t border-white/5">
        <span style={{ color: 'var(--text-tertiary)' }}>Difference</span>
        <span className={diff === 0 ? 'text-slate-400' : isPos ? 'text-emerald-400' : 'text-red-400'}>
          {diff === 0 ? '±0' : isPos ? `+${diff}` : diff}
        </span>
      </div>
    </div>
  );
};

const PrintMetric = ({ label, score }) => (
  <div className="p-4 border border-gray-300 rounded-lg">
    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</div>
    <div className="text-3xl font-extrabold text-black mt-1">{score}/100</div>
  </div>
);

export default Reports;
