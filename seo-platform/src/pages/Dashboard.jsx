import { useAudit } from '../hooks/useAudit';
import ScoreGauge from '../components/ui/ScoreGauge';
import StatCard from '../components/ui/StatCard';
import { AlertTriangle, AlertCircle, CheckCircle2, Lightbulb, Globe, Clock, FileText, Link2, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { results, history } = useAudit();

  // Use latest results or demo data
  const scores = results?.scores || { overall: 0, seo: 0, health: 0, performance: 0, technical: 0, content: 0, ux: 0 };
  const issues = results?.issues || { critical: [], warnings: [], opportunities: [], passed: [] };
  const hasData = results !== null;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-2xl sm:text-3xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Dashboard
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            {hasData ? `Last audit: ${results.url}` : 'Run a site audit to see your SEO health'}
          </p>
        </div>
        <Link to="/audit" className="btn btn-primary btn-sm gap-2">
          <Globe size={15} />
          New Audit
        </Link>
      </div>

      {/* Welcome Card (when no data) */}
      {!hasData && (
        <div className="card p-8 sm:p-12 text-center animate-slide-up" style={{ background: 'linear-gradient(135deg, var(--bg-elevated), var(--bg-secondary))' }}>
          <div className="w-20 h-20 rounded-2xl gradient-bg-animated flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Activity size={32} className="text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-[800] tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
            Welcome to SEOPulse
          </h2>
          <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
            Enter any website URL to get a comprehensive SEO audit with scores, issues, and AI-powered recommendations.
          </p>
          <Link to="/audit" className="btn btn-primary btn-lg gap-2">
            <Globe size={18} />
            Start Your First Audit
          </Link>
        </div>
      )}

      {/* Score Gauges */}
      {hasData && (
        <div className="card p-6 sm:p-8 animate-slide-up">
          <h2 className="text-base font-bold uppercase tracking-wider mb-6" style={{ color: 'var(--text-secondary)' }}>
            SEO Health Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            <ScoreGauge score={scores.overall} label="Overall" delay={0} />
            <ScoreGauge score={scores.seo} label="SEO" delay={80} />
            <ScoreGauge score={scores.health} label="Health" delay={160} />
            <ScoreGauge score={scores.performance} label="Speed" delay={240} />
            <ScoreGauge score={scores.technical} label="Technical" delay={320} />
            <ScoreGauge score={scores.content} label="Content" delay={400} />
          </div>
        </div>
      )}

      {/* Issue Summary Cards */}
      {hasData && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={AlertCircle} label="Critical Issues" value={issues.critical.length} color="#ef4444" delay={100} />
          <StatCard icon={AlertTriangle} label="Warnings" value={issues.warnings.length} color="#f59e0b" delay={200} />
          <StatCard icon={Lightbulb} label="Opportunities" value={issues.opportunities?.length || 0} color="#3b82f6" delay={300} />
          <StatCard icon={CheckCircle2} label="Passed Checks" value={issues.passed.length} color="#10b981" delay={400} />
        </div>
      )}

      {/* Issues List */}
      {hasData && issues.critical.length > 0 && (
        <div className="card p-5 sm:p-6 animate-fade-in stagger-3" style={{ opacity: 0 }}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <AlertCircle size={16} className="text-red-500" />
            Critical Issues
          </h3>
          <div className="space-y-3">
            {issues.critical.map((issue, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl transition-colors" style={{ background: 'var(--error-bg)' }}>
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={13} className="text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{issue.message}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{issue.fix}</p>
                  <span className="badge badge-error mt-2">{issue.module}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warnings */}
      {hasData && issues.warnings.length > 0 && (
        <div className="card p-5 sm:p-6 animate-fade-in stagger-4" style={{ opacity: 0 }}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <AlertTriangle size={16} className="text-amber-500" />
            Warnings ({issues.warnings.length})
          </h3>
          <div className="space-y-2">
            {issues.warnings.slice(0, 8).map((warn, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--warning-bg)' }}>
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle size={11} className="text-amber-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{warn.message}</p>
                  <span className="badge badge-warning mt-1">{warn.module}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Passed Checks */}
      {hasData && issues.passed.length > 0 && (
        <div className="card p-5 sm:p-6 animate-fade-in stagger-5" style={{ opacity: 0 }}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <CheckCircle2 size={16} className="text-emerald-500" />
            Passed Checks ({issues.passed.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {issues.passed.map((pass, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{pass.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audit History */}
      {history.length > 0 && (
        <div className="card p-5 sm:p-6 animate-fade-in stagger-6" style={{ opacity: 0 }}>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Clock size={16} />
            Recent Audits
          </h3>
          <div className="space-y-2">
            {history.slice(0, 5).map((h, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <Globe size={16} style={{ color: 'var(--text-tertiary)' }} />
                  <span className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{h.url}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-xs font-bold ${h.scores.overall >= 70 ? 'text-emerald-500' : h.scores.overall >= 40 ? 'text-amber-500' : 'text-red-500'}`}>
                    {h.scores.overall}/100
                  </span>
                  <span className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                    {new Date(h.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
