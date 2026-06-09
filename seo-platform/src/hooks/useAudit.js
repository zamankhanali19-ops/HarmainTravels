import { useState, useCallback } from 'react';
import { analyzeUrl } from '../services/seoAnalyzer';

export const useAudit = () => {
  const [results, setResults] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('seopulse-last-results') || 'null');
    } catch { return null; }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('seopulse-history') || '[]');
    } catch { return []; }
  });

  const runAudit = useCallback(async (url) => {
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const data = await analyzeUrl(url);
      setResults(data);
      localStorage.setItem('seopulse-last-results', JSON.stringify(data));
      
      const entry = {
        url: data.url,
        timestamp: data.timestamp,
        scores: data.scores,
        issueCount: data.issues.critical.length + data.issues.warnings.length,
      };
      const updated = [entry, ...history.filter(h => h.url !== data.url)].slice(0, 20);
      setHistory(updated);
      localStorage.setItem('seopulse-history', JSON.stringify(updated));
      
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [history]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    setResults(null);
    localStorage.removeItem('seopulse-history');
    localStorage.removeItem('seopulse-last-results');
  }, []);

  return { results, loading, error, history, runAudit, clearHistory, setResults };
};
