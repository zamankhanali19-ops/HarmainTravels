import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import { Settings as SettingsIcon, Globe, Shield, RefreshCw, Key, Sparkles, CheckCircle2 } from 'lucide-react';
import ThemeToggle from '../components/ui/ThemeToggle';

const Settings = () => {
  const { clearHistory } = useAudit();
  const [crawlAgent, setCrawlAgent] = useState('desktop');
  const [proxyUrl, setProxyUrl] = useState('https://api.allorigins.win/raw?url=');
  const [openAiKey, setOpenAiKey] = useState('');
  const [googleKey, setGoogleKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to clear all history and stored audit configurations?')) {
      clearHistory();
      alert('Data reset successfully.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Settings
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Configure theme configurations, crawl proxies, and integration API credentials
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Appearance */}
        <div className="card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Globe size={16} className="text-indigo-400" />
            Appearance
          </h3>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
            <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>UI Color Theme</span>
            <ThemeToggle />
          </div>
        </div>

        {/* Crawl Preferences */}
        <div className="card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Shield size={16} className="text-indigo-400" />
            Crawler Configurations
          </h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">Crawl User-Agent</label>
              <select
                value={crawlAgent}
                onChange={e => setCrawlAgent(e.target.value)}
                className="w-full p-3 rounded-xl border border-white/10 text-xs font-semibold"
                style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
              >
                <option value="desktop">SEOPulse Desktop Crawler (Chrome/120)</option>
                <option value="mobile">SEOPulse Mobile Crawler (iPhone/Safari)</option>
                <option value="googlebot">Googlebot Simulator (Mobile Chrome)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">CORS Crawl Proxy Prefix</label>
              <input
                type="text"
                value={proxyUrl}
                onChange={e => setProxyUrl(e.target.value)}
                className="w-full p-3 rounded-xl border border-white/10 text-xs font-semibold"
                style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
              />
              <p className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                Bypasses standard client-side browser request limitations (CORS checks) during crawls.
              </p>
            </div>
          </div>
        </div>

        {/* Integration API Keys */}
        <div className="card p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Key size={16} className="text-indigo-400" />
            API Credentials (Phase 2 Preview)
          </h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">OpenAI API Key</label>
              <input
                type="password"
                value={openAiKey}
                onChange={e => setOpenAiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full p-3 rounded-xl border border-white/10 text-xs font-semibold"
                style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">Google Search Console API</label>
              <input
                type="password"
                value={googleKey}
                onChange={e => setGoogleKey(e.target.value)}
                placeholder="gsc-service-account-json..."
                className="w-full p-3 rounded-xl border border-white/10 text-xs font-semibold"
                style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="submit" className="flex-1 btn btn-primary py-3 font-bold uppercase tracking-wider gap-2">
            {isSaved ? (
              <>
                <CheckCircle2 size={16} />
                Configurations Saved
              </>
            ) : (
              <>
                <RefreshCw size={15} />
                Save Preferences
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleResetData}
            className="btn btn-error bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 px-6 py-3 font-bold uppercase tracking-wider"
          >
            Reset Cached Cache
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
