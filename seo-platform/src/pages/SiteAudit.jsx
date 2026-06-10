import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import ScoreGauge from '../components/ui/ScoreGauge';
import {
  Globe, Search, Loader2, AlertCircle, AlertTriangle, CheckCircle2,
  FileText, Image, Link2, Code2, Shield, Heading, Tag, ExternalLink, MapPin
} from 'lucide-react';

const SiteAudit = () => {
  const [url, setUrl] = useState('');
  const { results, loading, error, runAudit } = useAudit();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) runAudit(url.trim());
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Search },
    { id: 'meta', label: 'Meta Tags', icon: Tag },
    { id: 'headings', label: 'Headings', icon: Heading },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'links', label: 'Links', icon: Link2 },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'schema', label: 'Schema', icon: Code2 },
    { id: 'localSeo', label: 'Local SEO', icon: MapPin },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Site Audit
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Enter any URL to run a comprehensive SEO analysis
        </p>
      </div>

      {/* URL Input */}
      <form onSubmit={handleSubmit} className="card p-4 sm:p-5 animate-slide-up">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'var(--bg-input)', border: '1.5px solid var(--border-primary)' }}>
            <Globe size={18} style={{ color: 'var(--text-tertiary)' }} className="shrink-0" />
            <input
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., example.com)"
              className="flex-1 bg-transparent outline-none text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={!url.trim() || loading}
            className="btn btn-primary gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search size={16} />
                Analyze
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        {loading && (
          <div className="mt-4">
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="h-full rounded-full gradient-bg-animated" style={{ width: '70%', animation: 'shimmer 1.5s infinite, progress 2s ease-in-out infinite alternate' }} />
            </div>
            <p className="text-xs mt-2 font-medium" style={{ color: 'var(--text-tertiary)' }}>
              Fetching and analyzing page content...
            </p>
          </div>
        )}
      </form>

      {/* Error */}
      {error && (
        <div className="card p-4 flex items-center gap-3 animate-fade-in" style={{ background: 'var(--error-bg)', borderColor: 'var(--error)' }}>
          <AlertCircle size={18} className="text-red-500 shrink-0" />
          <p className="text-sm font-medium" style={{ color: 'var(--error)' }}>{error}</p>
        </div>
      )}

      {/* Results */}
      {results && (
        <>
          {/* Tab Navigation */}
          <div className="flex gap-1 p-1 rounded-xl overflow-x-auto" style={{ background: 'var(--bg-tertiary)' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[var(--bg-elevated)] shadow-sm'
                    : 'hover:bg-[var(--bg-elevated)]/50'
                }`}
                style={{ color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
              >
                <tab.icon size={14} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in" key={activeTab}>
            {activeTab === 'overview' && <OverviewTab results={results} />}
            {activeTab === 'meta' && <MetaTab meta={results.meta} />}
            {activeTab === 'headings' && <HeadingsTab headings={results.headings} />}
            {activeTab === 'images' && <ImagesTab images={results.images} />}
            {activeTab === 'links' && <LinksTab links={results.links} />}
            {activeTab === 'content' && <ContentTab content={results.content} />}
            { activeTab === 'schema' && <SchemaTab schema={results.schema} /> }
            { activeTab === 'localSeo' && <LocalSeoTab localSeo={results.localSeo} /> }
            { activeTab === 'security' && <SecurityTab security={results.security} technical={results.technical} /> }
          </div>
        </>
      )}
    </div>
  );
};

/* ========== TAB COMPONENTS ========== */

const OverviewTab = ({ results }) => (
  <div className="space-y-6">
    <div className="card p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Audit Results</h2>
          <p className="text-xs mt-1 flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
            <Globe size={12} />
            {results.url} · Analyzed in {results.loadTime}ms
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <ScoreGauge score={results.scores.overall} label="Overall" size={110} strokeWidth={8} delay={0} />
        <ScoreGauge score={results.scores.seo} label="SEO" size={110} strokeWidth={8} delay={80} />
        <ScoreGauge score={results.scores.health} label="Health" size={110} strokeWidth={8} delay={160} />
        <ScoreGauge score={results.scores.performance} label="Speed" size={110} strokeWidth={8} delay={240} />
        <ScoreGauge score={results.scores.technical} label="Technical" size={110} strokeWidth={8} delay={320} />
        <ScoreGauge score={results.scores.content} label="Content" size={110} strokeWidth={8} delay={400} />
      </div>
    </div>

    {/* Quick Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <QuickStat label="Word Count" value={results.content.wordCount} />
      <QuickStat label="Images" value={results.images.total} />
      <QuickStat label="Links" value={results.links.totalLinks} />
      <QuickStat label="Headings" value={results.headings.totalHeadings} />
    </div>
  </div>
);

const QuickStat = ({ label, value }) => (
  <div className="card p-4 text-center">
    <div className="text-2xl font-[800]" style={{ color: 'var(--text-primary)' }}>{value}</div>
    <div className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: 'var(--text-tertiary)' }}>{label}</div>
  </div>
);

const MetaTab = ({ meta }) => (
  <div className="space-y-4">
    <IssuesList issues={meta.issues} warnings={meta.warnings} passed={meta.passed} />
    
    <div className="card p-5 space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Meta Tag Details</h3>
      <MetaRow label="Title" value={meta.title} charCount={meta.title.length} ideal="50-60 chars" />
      <MetaRow label="Description" value={meta.metaDesc} charCount={meta.metaDesc.length} ideal="150-160 chars" />
      <MetaRow label="Keywords" value={meta.metaKeywords || '(not set)'} />
      <MetaRow label="Canonical" value={meta.canonical || '(not set)'} />
      <MetaRow label="Robots" value={meta.robots || '(not set)'} />
      <MetaRow label="Viewport" value={meta.viewport || '(not set)'} />
    </div>

    {Object.keys(meta.og).length > 0 && (
      <div className="card p-5 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Open Graph Tags</h3>
        {Object.entries(meta.og).map(([key, val]) => (
          <MetaRow key={key} label={key} value={val} />
        ))}
      </div>
    )}

    {Object.keys(meta.twitter).length > 0 && (
      <div className="card p-5 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Twitter Card Tags</h3>
        {Object.entries(meta.twitter).map(([key, val]) => (
          <MetaRow key={key} label={key} value={val} />
        ))}
      </div>
    )}
  </div>
);

const MetaRow = ({ label, value, charCount, ideal }) => (
  <div className="p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
    <div className="flex items-center justify-between mb-1">
      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
      {charCount !== undefined && (
        <span className="text-[10px] font-mono" style={{ color: 'var(--text-tertiary)' }}>
          {charCount} chars {ideal && `· ideal: ${ideal}`}
        </span>
      )}
    </div>
    <p className="text-sm font-medium break-all" style={{ color: value && !value.startsWith('(') ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
      {value || '(empty)'}
    </p>
    {charCount !== undefined && (
      <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border-primary)' }}>
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${Math.min((charCount / (label === 'Title' ? 60 : 160)) * 100, 100)}%`,
            background: charCount > (label === 'Title' ? 60 : 160) ? 'var(--error)' : charCount < (label === 'Title' ? 30 : 120) ? 'var(--warning)' : 'var(--success)',
          }}
        />
      </div>
    )}
  </div>
);

const HeadingsTab = ({ headings }) => (
  <div className="space-y-4">
    <IssuesList issues={headings.issues} warnings={headings.warnings} passed={headings.passed} />
    
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
        Heading Structure ({headings.totalHeadings} total)
      </h3>
      <div className="space-y-1.5">
        {headings.hierarchy.map((h, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
            style={{ paddingLeft: `${(h.level - 1) * 20 + 8}px` }}
          >
            <span className={`badge ${h.level === 1 ? 'badge-info' : 'badge-neutral'}`}>
              H{h.level}
            </span>
            <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{h.text}</span>
          </div>
        ))}
        {headings.hierarchy.length === 0 && (
          <p className="text-sm py-4 text-center" style={{ color: 'var(--text-tertiary)' }}>No headings found</p>
        )}
      </div>
    </div>

    {/* Heading Count Summary */}
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Count by Level</h3>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {[1,2,3,4,5,6].map(level => (
          <div key={level} className="text-center p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
            <div className="text-lg font-[800]" style={{ color: headings.headings[`h${level}`].length > 0 ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
              {headings.headings[`h${level}`].length}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-tertiary)' }}>H{level}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ImagesTab = ({ images }) => (
  <div className="space-y-4">
    <IssuesList issues={images.issues} warnings={images.warnings} passed={images.passed} />
    
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
        Images Found ({images.total})
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
              <th className="text-[10px] font-bold uppercase tracking-wider py-3 px-3" style={{ color: 'var(--text-tertiary)' }}>Source</th>
              <th className="text-[10px] font-bold uppercase tracking-wider py-3 px-3" style={{ color: 'var(--text-tertiary)' }}>Alt Text</th>
              <th className="text-[10px] font-bold uppercase tracking-wider py-3 px-3" style={{ color: 'var(--text-tertiary)' }}>Loading</th>
              <th className="text-[10px] font-bold uppercase tracking-wider py-3 px-3" style={{ color: 'var(--text-tertiary)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {images.images.slice(0, 20).map((img, i) => (
              <tr key={i} className="hover:bg-[var(--bg-tertiary)] transition-colors" style={{ borderBottom: '1px solid var(--border-secondary)' }}>
                <td className="py-2.5 px-3">
                  <span className="text-xs font-mono truncate block max-w-[200px]" style={{ color: 'var(--text-secondary)' }}>{img.src}</span>
                </td>
                <td className="py-2.5 px-3">
                  <span className="text-xs truncate block max-w-[200px]" style={{ color: img.hasAlt ? 'var(--text-primary)' : 'var(--error)' }}>
                    {img.hasAlt ? img.alt : 'Missing'}
                  </span>
                </td>
                <td className="py-2.5 px-3">
                  <span className={`badge ${img.loading === 'lazy' ? 'badge-success' : 'badge-neutral'}`}>
                    {img.loading || 'eager'}
                  </span>
                </td>
                <td className="py-2.5 px-3">
                  {img.hasAlt ? (
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={14} className="text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {images.total === 0 && (
          <p className="text-sm py-8 text-center" style={{ color: 'var(--text-tertiary)' }}>No images found on this page</p>
        )}
      </div>
    </div>
  </div>
);

const LinksTab = ({ links }) => (
  <div className="space-y-4">
    <IssuesList issues={links.issues} warnings={links.warnings} passed={links.passed} />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="card p-5">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
          <Link2 size={14} />
          Internal Links ({links.internal.length})
        </h3>
        <div className="space-y-1.5 max-h-[400px] overflow-y-auto">
          {links.internal.slice(0, 30).map((link, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg text-xs hover:bg-[var(--bg-tertiary)]">
              <span className="font-mono truncate flex-1" style={{ color: 'var(--text-secondary)' }}>{link.href}</span>
              {link.text && <span className="badge badge-neutral truncate max-w-[100px]">{link.text}</span>}
            </div>
          ))}
          {links.internal.length === 0 && <p className="text-sm text-center py-4" style={{ color: 'var(--text-tertiary)' }}>None found</p>}
        </div>
      </div>

      <div className="card p-5">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
          <ExternalLink size={14} />
          External Links ({links.external.length})
        </h3>
        <div className="space-y-1.5 max-h-[400px] overflow-y-auto">
          {links.external.slice(0, 30).map((link, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg text-xs hover:bg-[var(--bg-tertiary)]">
              <span className="font-mono truncate flex-1" style={{ color: 'var(--text-secondary)' }}>{link.href}</span>
              {link.rel?.includes('nofollow') && <span className="badge badge-warning">nofollow</span>}
            </div>
          ))}
          {links.external.length === 0 && <p className="text-sm text-center py-4" style={{ color: 'var(--text-tertiary)' }}>None found</p>}
        </div>
      </div>
    </div>
  </div>
);

const ContentTab = ({ content }) => (
  <div className="space-y-4">
    <IssuesList issues={content.issues} warnings={content.warnings} passed={content.passed} />
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <QuickStat label="Words" value={content.wordCount} />
      <QuickStat label="Sentences" value={content.sentences} />
      <QuickStat label="Paragraphs" value={content.paragraphs} />
      <div className="card p-4 text-center">
        <div className="text-2xl font-[800]" style={{ color: content.readabilityScore >= 60 ? 'var(--success)' : content.readabilityScore >= 40 ? 'var(--warning)' : 'var(--error)' }}>
          {content.readabilityScore}
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Readability
        </div>
      </div>
    </div>

    {/* Readability */}
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Readability Level</h3>
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <div className="h-full rounded-full" style={{ width: `${content.readabilityScore}%`, background: content.readabilityScore >= 60 ? 'var(--success)' : content.readabilityScore >= 40 ? 'var(--warning)' : 'var(--error)' }} />
        </div>
        <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{content.readabilityLevel}</span>
      </div>
    </div>

    {/* Top Keywords */}
    {content.topKeywords.length > 0 && (
      <div className="card p-5">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Top Keywords</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                <th className="text-[10px] font-bold uppercase tracking-wider py-2 px-3" style={{ color: 'var(--text-tertiary)' }}>Keyword</th>
                <th className="text-[10px] font-bold uppercase tracking-wider py-2 px-3" style={{ color: 'var(--text-tertiary)' }}>Count</th>
                <th className="text-[10px] font-bold uppercase tracking-wider py-2 px-3" style={{ color: 'var(--text-tertiary)' }}>Density</th>
                <th className="text-[10px] font-bold uppercase tracking-wider py-2 px-3" style={{ color: 'var(--text-tertiary)' }}>Distribution</th>
              </tr>
            </thead>
            <tbody>
              {content.topKeywords.map((kw, i) => (
                <tr key={i} className="hover:bg-[var(--bg-tertiary)]" style={{ borderBottom: '1px solid var(--border-secondary)' }}>
                  <td className="py-2 px-3 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{kw.word}</td>
                  <td className="py-2 px-3 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{kw.count}</td>
                  <td className="py-2 px-3 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>{kw.density}%</td>
                  <td className="py-2 px-3 w-32">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                      <div className="h-full rounded-full bg-indigo-500" style={{ width: `${Math.min(parseFloat(kw.density) * 20, 100)}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
);

const SchemaTab = ({ schema }) => (
  <div className="space-y-4">
    <IssuesList issues={schema.issues} warnings={schema.warnings} passed={schema.passed} />
    
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
        Detected Schema Markup ({schema.total})
      </h3>
      {schema.schemas.length > 0 ? (
        <div className="space-y-2">
          {schema.schemas.map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <Code2 size={16} style={{ color: 'var(--brand-500)' }} />
              <div className="flex-1">
                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{s.type}</span>
                <span className="text-xs ml-2" style={{ color: 'var(--text-tertiary)' }}>{s.format}</span>
              </div>
              <span className={`badge ${s.valid ? 'badge-success' : 'badge-error'}`}>
                {s.valid ? 'Valid' : 'Invalid'}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <Code2 size={32} className="mx-auto mb-3" style={{ color: 'var(--text-tertiary)' }} />
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>No structured data found</p>
          <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>Add JSON-LD schema markup to help search engines understand your content</p>
        </div>
      )}
    </div>
  </div>
);

const SecurityTab = ({ security, technical }) => (
  <div className="space-y-4">
    <IssuesList
      issues={[...security.issues, ...technical.issues]}
      warnings={[...security.warnings, ...technical.warnings]}
      passed={[...security.passed, ...technical.passed]}
    />
    
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>Technical Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TechItem label="HTTPS" value={security.isHttps ? 'Enabled' : 'Not enabled'} good={security.isHttps} />
        <TechItem label="HTML Size" value={`${technical.htmlSizeKb} KB`} good={technical.htmlSizeKb < 500} />
        <TechItem label="Language" value={technical.lang || 'Not set'} good={!!technical.lang} />
        <TechItem label="Favicon" value={technical.hasFavicon ? 'Present' : 'Missing'} good={technical.hasFavicon} />
        <TechItem label="Character Encoding" value={technical.hasCharset ? 'Declared' : 'Missing'} good={technical.hasCharset} />
        <TechItem label="Inline Styles" value={`${technical.inlineStyles} elements`} good={technical.inlineStyles < 20} />
      </div>
    </div>
  </div>
);

const TechItem = ({ label, value, good }) => (
  <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</span>
      {good ? <CheckCircle2 size={14} className="text-emerald-500" /> : <AlertCircle size={14} className="text-red-500" />}
    </div>
  </div>
);

const LocalSeoTab = ({ localSeo }) => (
  <div className="space-y-4">
    <IssuesList issues={localSeo.issues} warnings={localSeo.warnings} passed={localSeo.passed} />
    
    <div className="card p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
        <MapPin size={16} /> Local SEO Signals
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TechItem label="LocalBusiness Schema" value={localSeo.hasLocalSchema ? 'Found' : 'Missing'} good={localSeo.hasLocalSchema} />
        <TechItem label="Embedded Map" value={localSeo.hasGoogleMaps ? 'Found' : 'Missing'} good={localSeo.hasGoogleMaps} />
        <TechItem label="Clickable Phones" value={`${localSeo.phoneNumbers.length} found`} good={localSeo.hasPhoneLink} />
        <TechItem label="Clickable Emails" value={`${localSeo.emails.length} found`} good={localSeo.hasEmailLink} />
      </div>
    </div>
  </div>
);

/* ========== SHARED ISSUES LIST ========== */
const IssuesList = ({ issues = [], warnings = [], passed = [] }) => (
  <div className="space-y-3">
    {issues.map((item, i) => (
      <div key={`i-${i}`} className="card p-3 flex items-start gap-3" style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
        <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.message}</p>
          {item.fix && <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{item.fix}</p>}
        </div>
      </div>
    ))}
    {warnings.map((item, i) => (
      <div key={`w-${i}`} className="card p-3 flex items-start gap-3" style={{ borderColor: 'rgba(245,158,11,0.2)' }}>
        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.message}</p>
          {item.fix && <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{item.fix}</p>}
        </div>
      </div>
    ))}
    {passed.map((item, i) => (
      <div key={`p-${i}`} className="card p-3 flex items-center gap-3">
        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.message}</p>
      </div>
    ))}
  </div>
);

export default SiteAudit;
