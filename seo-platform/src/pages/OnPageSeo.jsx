import { useState } from 'react';
import { useAudit } from '../hooks/useAudit';
import { Tag, Heading, Image as ImageIcon, Eye, AlertTriangle, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';

const OnPageSeo = () => {
  const { results } = useAudit();
  const [activeSubTab, setActiveSubTab] = useState('serp');

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 text-indigo-500">
          <Tag size={28} />
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No Audit Data Found</h2>
        <p className="text-sm max-w-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          Run a site audit from the Dashboard or Site Audit page first to view your On-Page SEO details.
        </p>
      </div>
    );
  }

  const { meta, headings, images } = results;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          On-Page SEO
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Analyze tags, structure, social optimization, and media for <strong>{results.url}</strong>
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-1 p-1 rounded-xl overflow-x-auto" style={{ background: 'var(--bg-tertiary)' }}>
        {[
          { id: 'serp', label: 'SERP Preview & Meta', icon: Eye },
          { id: 'headings', label: 'Heading Structure', icon: Heading },
          { id: 'images', label: 'Image Analysis', icon: ImageIcon },
          { id: 'og', label: 'Social & OG Tags', icon: Share2 }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeSubTab === tab.id
                ? 'bg-[var(--bg-elevated)] shadow-sm text-[var(--text-primary)]'
                : 'hover:bg-[var(--bg-elevated)]/50 text-[var(--text-tertiary)]'
            }`}
          >
            <tab.icon size={14} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in" key={activeSubTab}>
        {activeSubTab === 'serp' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* SERP Visualizer */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Google SERP Preview
                </h3>
                <div className="p-5 rounded-xl border border-white/5 bg-[#121212] font-sans text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#bdc1c6] truncate">
                    <span>{results.url}</span>
                    <span className="text-[10px] text-[#9aa0a6]">▼</span>
                  </div>
                  <h4 className="text-xl text-[#8ab4f8] font-medium hover:underline cursor-pointer leading-tight line-clamp-1">
                    {meta.title || 'Please enter a title tag'}
                  </h4>
                  <p className="text-sm text-[#bdc1c6] line-clamp-2 leading-relaxed">
                    {meta.metaDesc || 'Please provide a meta description. Search engines will show a snippet based on page contents if this is empty.'}
                  </p>
                </div>
              </div>

              {/* Tag Details */}
              <div className="card p-6 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Meta Tag Analysis
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Title Tag</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        meta.title.length >= 50 && meta.title.length <= 60 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {meta.title.length} / 60 chars
                      </span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{meta.title || '(empty)'}</p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
                      Ideal: 50–60 characters. Keeping titles in this range prevents truncation in SERP results.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Meta Description</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        meta.metaDesc.length >= 120 && meta.metaDesc.length <= 160 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {meta.metaDesc.length} / 160 chars
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>{meta.metaDesc || '(empty)'}</p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-tertiary)' }}>
                      Ideal: 120–160 characters. A good description acts as organic ad copy to increase CTR.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status / Checklist */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  On-Page Checklist
                </h3>
                <div className="space-y-3">
                  <ChecklistItem label="Title tag present" checked={!!meta.title} />
                  <ChecklistItem label="Title length optimal" checked={meta.title.length >= 40 && meta.title.length <= 65} />
                  <ChecklistItem label="Description present" checked={!!meta.metaDesc} />
                  <ChecklistItem label="Description length optimal" checked={meta.metaDesc.length >= 110 && meta.metaDesc.length <= 165} />
                  <ChecklistItem label="Canonical tag set" checked={!!meta.canonical} />
                  <ChecklistItem label="Viewport declared" checked={!!meta.viewport} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'headings' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                Semantic Heading Hierarchy
              </h3>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                {headings.hierarchy.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors border border-white/[0.02]"
                    style={{ paddingLeft: `${(h.level - 1) * 16 + 12}px` }}
                  >
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      h.level === 1 
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                        : h.level === 2
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-slate-500/10 text-slate-400 border border-white/5'
                    }`}>
                      H{h.level}
                    </span>
                    <span className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{h.text}</span>
                  </div>
                ))}
                {headings.hierarchy.length === 0 && (
                  <p className="text-sm py-8 text-center" style={{ color: 'var(--text-tertiary)' }}>No headings detected.</p>
                )}
              </div>
            </div>

            {/* Heading Density Summary */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Tag Counts
                </h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map(level => {
                    const count = headings.headings[`h${level}`]?.length || 0;
                    return (
                      <div key={level} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
                        <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>H{level} Tag</span>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          count > 0 ? 'bg-indigo-500/10 text-indigo-400' : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'
                        }`}>{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'images' && (
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                Image ALT Tags & Optimization
              </h3>
              <span className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>
                {images.total} images detected
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Image URL / Src</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Alt Text</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Performance</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {images.images.map((img, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] border-b border-white/5 last:border-0 transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-xs font-mono truncate block max-w-sm" style={{ color: 'var(--text-secondary)' }}>
                          {img.src}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {img.hasAlt ? (
                          <span className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{img.alt}</span>
                        ) : (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-400">Missing ALT tag</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          img.loading === 'lazy' 
                            ? 'bg-emerald-500/10 text-emerald-400' 
                            : 'bg-amber-500/10 text-amber-400'
                        }`}>
                          {img.loading === 'lazy' ? 'Lazy Loaded' : 'Eager'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {img.hasAlt ? (
                          <CheckCircle2 size={16} className="text-emerald-500" />
                        ) : (
                          <AlertTriangle size={16} className="text-red-400" />
                        )}
                      </td>
                    </tr>
                  ))}
                  {images.images.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
                        No images detected on this page.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSubTab === 'og' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Open Graph Card */}
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Share2 size={16} className="text-indigo-400" />
                Facebook Open Graph
              </h3>
              
              {meta.og && Object.keys(meta.og).length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(meta.og).map(([key, val]) => (
                    <div key={key} className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">og:{key}</span>
                      <span className="text-sm font-medium break-all" style={{ color: 'var(--text-primary)' }}>{val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  No Open Graph (OG) tags detected. Include OG tags to customize how pages look when shared on social media.
                </div>
              )}
            </div>

            {/* Twitter Card */}
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Share2 size={16} className="text-sky-400" />
                Twitter Card
              </h3>

              {meta.twitter && Object.keys(meta.twitter).length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(meta.twitter).map(([key, val]) => (
                    <div key={key} className="p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                      <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">twitter:{key}</span>
                      <span className="text-sm font-medium break-all" style={{ color: 'var(--text-primary)' }}>{val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  No Twitter Card tags detected.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ChecklistItem = ({ label, checked }) => (
  <div className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
    {checked ? (
      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
        <CheckCircle2 size={13} /> Active
      </span>
    ) : (
      <span className="text-xs font-bold text-red-400 flex items-center gap-1">
        <AlertTriangle size={13} /> Missing
      </span>
    )}
  </div>
);

export default OnPageSeo;
