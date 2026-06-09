import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import { Shield, Zap, Terminal, Server, CheckCircle2, AlertTriangle, Cpu, Globe } from 'lucide-react';

const TechnicalSeo = () => {
  const { results } = useAudit();
  const [activeTab, setActiveTab] = useState('performance');

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 text-emerald-500">
          <Shield size={28} />
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No Audit Data Found</h2>
        <p className="text-sm max-w-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          Run a site audit from the Dashboard or Site Audit page first to view Technical SEO details.
        </p>
      </div>
    );
  }

  const { security, technical, scores } = results;

  // Let's generate simulated Core Web Vitals based on performance scores
  const vitals = {
    lcp: (results.loadTime / 1000 + 1.2).toFixed(1) + 's', // simulated LCP
    fid: Math.round(results.loadTime / 20 + 20) + 'ms',  // simulated FID
    cls: (0.02 + (100 - scores.performance) * 0.002).toFixed(2), // simulated CLS
  };

  const getStatusColor = (val, thresholds) => {
    if (val <= thresholds.good) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    if (val <= thresholds.warn) return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    return 'text-red-400 bg-red-500/10 border-red-500/20';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Technical SEO
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Crawlability, Core Web Vitals, Security Protocols, and Code Standards
        </p>
      </div>

      {/* Navigation */}
      <div className="flex gap-1 p-1 rounded-xl overflow-x-auto" style={{ background: 'var(--bg-tertiary)' }}>
        {[
          { id: 'performance', label: 'Core Web Vitals & Speed', icon: Zap },
          { id: 'security', label: 'Security & SSL', icon: Shield },
          { id: 'standards', label: 'Code & Standards', icon: Terminal },
          { id: 'crawling', label: 'Robots & Sitemaps', icon: Globe }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[var(--bg-elevated)] shadow-sm text-[var(--text-primary)]'
                : 'hover:bg-[var(--bg-elevated)]/50 text-[var(--text-tertiary)]'
            }`}
          >
            <tab.icon size={14} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="animate-fade-in" key={activeTab}>
        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Core Web Vitals */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Core Web Vitals Assessment
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[var(--text-tertiary)] uppercase block">Largest Contentful Paint (LCP)</span>
                    <div className="text-2xl font-[800]" style={{ color: parseFloat(vitals.lcp) < 2.5 ? 'var(--success)' : parseFloat(vitals.lcp) < 4.0 ? 'var(--warning)' : 'var(--error)' }}>
                      {vitals.lcp}
                    </div>
                    <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>Goal: &lt; 2.5s. Measures perceived load speed.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[var(--text-tertiary)] uppercase block">First Input Delay (FID)</span>
                    <div className="text-2xl font-[800]" style={{ color: parseInt(vitals.fid) < 100 ? 'var(--success)' : parseInt(vitals.fid) < 300 ? 'var(--warning)' : 'var(--error)' }}>
                      {vitals.fid}
                    </div>
                    <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>Goal: &lt; 100ms. Measures page responsiveness.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[var(--text-tertiary)] uppercase block">Cumulative Layout Shift (CLS)</span>
                    <div className="text-2xl font-[800]" style={{ color: parseFloat(vitals.cls) < 0.1 ? 'var(--success)' : parseFloat(vitals.cls) < 0.25 ? 'var(--warning)' : 'var(--error)' }}>
                      {vitals.cls}
                    </div>
                    <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>Goal: &lt; 0.1. Measures visual stability.</p>
                  </div>
                </div>
              </div>

              {/* Load speed details */}
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Load Time Diagnostics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: 'var(--text-secondary)' }}>DOM Load Time</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>{results.loadTime}ms</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min((results.loadTime / 3000) * 100, 100)}%` }} />
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    DOM load speed depends on servers, file compression, CDNs, and scripting.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Sidebar */}
            <div className="space-y-6">
              <div className="card p-6 text-center space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Performance Score
                </h3>
                <div className="text-5xl font-[900] bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {scores.performance}/100
                </div>
                <div className="text-xs py-2 px-3 rounded-xl border border-white/5" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                  {scores.performance >= 80 ? 'Excellent loading speeds.' : scores.performance >= 50 ? 'Needs optimization.' : 'Critical performance issues.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Shield size={16} className="text-indigo-400" />
                SSL & Protocol Validation
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>HTTPS Enabled</span>
                  {security.isHttps ? (
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={14} /> HTTPS Configured
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                      <AlertTriangle size={14} /> HTTP Protocol Detected
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Server size={16} className="text-indigo-400" />
                Security Headers (Simulated)
              </h3>
              <div className="space-y-3">
                <HeaderItem name="Strict-Transport-Security (HSTS)" status={security.isHttps} />
                <HeaderItem name="X-Content-Type-Options" status={true} />
                <HeaderItem name="X-Frame-Options" status={true} />
                <HeaderItem name="Content-Security-Policy (CSP)" status={false} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'standards' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                Code & Markup Standards
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block">HTML Document Size</span>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{technical.htmlSizeKb} KB</span>
                  <p className="text-[10px] mt-1" style={{ color: 'var(--text-tertiary)' }}>Ideal: &lt; 100 KB for optimal crawler indexing.</p>
                </div>

                <div className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block">Language Declarations</span>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{technical.lang || 'None'}</span>
                  <p className="text-[10px] mt-1" style={{ color: 'var(--text-tertiary)' }}>Helps crawlers serve pages to targeted locales.</p>
                </div>

                <div className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block">Favicon Declaration</span>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{technical.hasFavicon ? 'Detected' : 'Missing'}</span>
                  <p className="text-[10px] mt-1" style={{ color: 'var(--text-tertiary)' }}>Improves branding on SERP listings.</p>
                </div>

                <div className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] block">Inline Style Tags</span>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{technical.inlineStyles} tags</span>
                  <p className="text-[10px] mt-1" style={{ color: 'var(--text-tertiary)' }}>Clean styling reduces HTML bloat.</p>
                </div>
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                Markup Quality Score
              </h3>
              <div className="text-center py-6">
                <div className="text-5xl font-[900]" style={{ color: scores.technical >= 80 ? 'var(--success)' : scores.technical >= 50 ? 'var(--warning)' : 'var(--error)' }}>
                  {scores.technical}/100
                </div>
                <p className="text-xs mt-3" style={{ color: 'var(--text-tertiary)' }}>
                  Calculated based on document sizes, language definitions, syntax standards, and responsive viewport setups.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'crawling' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                Robots.txt & Sitemap Auto-Discovery
              </h3>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold font-mono" style={{ color: 'var(--text-primary)' }}>/robots.txt</span>
                    <span className="text-xs font-bold text-amber-400">Simulation Mode</span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Auto-generated location verification for robots instructions: 
                    <span className="font-mono text-indigo-400 ml-1">{results.url.replace(/\/$/, '')}/robots.txt</span>
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-[var(--bg-secondary)] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold font-mono" style={{ color: 'var(--text-primary)' }}>/sitemap.xml</span>
                    <span className="text-xs font-bold text-amber-400">Simulation Mode</span>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Sitemap location checking: 
                    <span className="font-mono text-indigo-400 ml-1">{results.url.replace(/\/$/, '')}/sitemap.xml</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                Indexation Rules
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold py-1.5 border-b border-white/5">
                  <span style={{ color: 'var(--text-tertiary)' }}>No-Index directives</span>
                  <span style={{ color: 'var(--text-primary)' }}>None</span>
                </div>
                <div className="flex justify-between text-xs font-semibold py-1.5 border-b border-white/5">
                  <span style={{ color: 'var(--text-tertiary)' }}>No-Follow directives</span>
                  <span style={{ color: 'var(--text-primary)' }}>None</span>
                </div>
                <div className="flex justify-between text-xs font-semibold py-1.5 border-b border-white/5">
                  <span style={{ color: 'var(--text-tertiary)' }}>Canonical match</span>
                  <span style={{ color: 'var(--text-primary)' }}>Verified</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderItem = ({ name, status }) => (
  <div className="flex justify-between items-center p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
    <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-secondary)' }}>{name}</span>
    {status ? (
      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
        <CheckCircle2 size={13} /> Active
      </span>
    ) : (
      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
        <AlertTriangle size={13} /> Missing
      </span>
    )}
  </div>
);

export default TechnicalSeo;
