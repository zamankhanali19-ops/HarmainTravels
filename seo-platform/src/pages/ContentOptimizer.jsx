import { useState, useEffect } from 'react';
import { useAudit } from '../hooks/useAudit';
import { PenTool, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

const ContentOptimizer = () => {
  const { results } = useAudit();
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readabilityScore: 0,
    readabilityLevel: 'N/A'
  });

  // Load audit data if present
  useEffect(() => {
    if (results && results.content) {
      // Set to some demo text if the audit was run
      setText(`This is an optimized snippet of ${results.url}. SEO optimization plays a vital role in organic keyword indexing. Keep headings relevant, titles engaging, and image alt tags fully detailed. Write sentences that are simple, clear, and direct. Avoid excessive jargon or long paragraphs that lower the reading level. Good copy keeps users engaged longer.`);
    }
  }, [results]);

  useEffect(() => {
    // Dynamic text analysis
    const cleanText = text.trim();
    if (!cleanText) {
      setStats({ words: 0, sentences: 0, paragraphs: 0, readabilityScore: 0, readabilityLevel: 'N/A' });
      return;
    }

    const wordsArray = cleanText.split(/\s+/).filter(w => w.length > 0);
    const wordsCount = wordsArray.length;
    const sentencesCount = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0).length || 1;
    const paragraphsCount = cleanText.split(/\n+/).filter(p => p.trim().length > 0).length || 1;

    // Flesch Reading Ease Formula: 206.835 - 1.015 * (total words / total sentences) - 84.6 * (total syllables / total words)
    // We approximate syllables by counting vowels
    let syllables = 0;
    wordsArray.forEach(w => {
      const vowelMatches = w.match(/[aeiouy]/gi);
      syllables += vowelMatches ? vowelMatches.length : 1;
    });

    const wordsPerSentence = wordsCount / sentencesCount;
    const syllablesPerWord = syllables / wordsCount;
    let score = Math.round(206.835 - (1.015 * wordsPerSentence) - (84.6 * syllablesPerWord));
    score = Math.max(0, Math.min(100, score));

    let level = 'Easy';
    if (score < 30) level = 'Very Difficult (Academic)';
    else if (score < 50) level = 'Difficult (College)';
    else if (score < 60) level = 'Fairly Difficult (High School)';
    else if (score < 70) level = 'Plain English (8th Grade)';
    else if (score < 80) level = 'Fairly Easy';
    else if (score < 90) level = 'Easy';
    else level = 'Very Easy';

    setStats({
      words: wordsCount,
      sentences: sentencesCount,
      paragraphs: paragraphsCount,
      readabilityScore: score,
      readabilityLevel: level
    });
  }, [text]);

  const scoreClass = stats.readabilityScore >= 60 
    ? 'text-emerald-400 border-emerald-500/20' 
    : stats.readabilityScore >= 40 
      ? 'text-amber-400 border-amber-500/20' 
      : 'text-red-400 border-red-500/20';

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Content Editor & Optimizer
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          Analyze copy readability, complexity, and styling rules in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Area */}
        <div className="lg:col-span-2 card p-6 space-y-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Optimizing Copy</h3>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>{text.length} characters</span>
          </div>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste your page copy here to begin optimizing readability and styling structure..."
            className="w-full h-96 p-4 rounded-xl border border-white/10 outline-none resize-none font-sans text-sm leading-relaxed"
            style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
          />
        </div>

        {/* Real-time stats sidebar */}
        <div className="space-y-6">
          <div className="card p-6 text-center space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Readability Score</h3>
            <div className={`text-5xl font-[900] ${scoreClass}`}>
              {stats.readabilityScore}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              {stats.readabilityLevel}
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${stats.readabilityScore}%` }}
              />
            </div>
          </div>

          <div className="card p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">Copy Metrics</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <span className="text-base font-bold font-mono" style={{ color: 'var(--text-primary)' }}>{stats.words}</span>
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] block mt-0.5">Words</span>
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <span className="text-base font-bold font-mono" style={{ color: 'var(--text-primary)' }}>{stats.sentences}</span>
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] block mt-0.5">Sentences</span>
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <span className="text-base font-bold font-mono" style={{ color: 'var(--text-primary)' }}>{stats.paragraphs}</span>
                <span className="text-[9px] uppercase tracking-wider text-[var(--text-tertiary)] block mt-0.5">Paragraphs</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <ChecklistItem label="Keep paragraphs under 150 words" checked={stats.words / (stats.paragraphs || 1) < 150} />
              <ChecklistItem label="Sentence complexity is low" checked={stats.words / (stats.sentences || 1) < 20} />
              <ChecklistItem label="Minimal text length (&gt;100 words)" checked={stats.words > 100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChecklistItem = ({ label, checked }) => (
  <div className="flex items-center justify-between py-1">
    <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
    {checked ? (
      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
        <CheckCircle2 size={13} /> Passed
      </span>
    ) : (
      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
        <AlertTriangle size={13} /> Check
      </span>
    )}
  </div>
);

export default ContentOptimizer;
