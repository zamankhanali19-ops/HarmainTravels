import { useAudit } from '../hooks/useAudit';
import ScoreGauge from '../components/ui/ScoreGauge';
import StatCard from '../components/ui/StatCard';
import { MapPin, Phone, Mail, Building, Map, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const LocalSeo = () => {
  const { auditData } = useAudit();

  if (!auditData) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] animate-fade-in">
        <MapPin size={64} className="text-slate-700 mb-4" />
        <h2 className="text-xl font-bold mb-2">No Audit Data</h2>
        <p className="text-slate-400">Run a site audit from the dashboard to see local SEO analysis.</p>
      </div>
    );
  }

  const { localSeo, scores } = auditData;
  const { hasLocalSchema, hasGoogleMaps, hasPhoneLink, hasEmailLink, phoneNumbers, emails } = localSeo;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-3 animate-fade-in">
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
          <MapPin size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-[800] tracking-tight" style={{ color: 'var(--text-primary)' }}>Local SEO Analysis</h1>
          <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Verify Maps, NAP consistency, and Schema markup</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 flex flex-col items-center justify-center animate-fade-in stagger-1">
          <ScoreGauge score={scores.localSeo || 80} size={160} strokeWidth={12} />
          <h3 className="text-lg font-bold mt-4 mb-1" style={{ color: 'var(--text-primary)' }}>Local SEO Score</h3>
          <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>Based on Maps, Schema, and Contact Info</p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in stagger-2">
          <StatCard 
            title="LocalBusiness Schema" 
            value={hasLocalSchema ? 'Found' : 'Missing'} 
            icon={Building} 
            trend={hasLocalSchema ? 'positive' : 'negative'}
          />
          <StatCard 
            title="Embedded Map" 
            value={hasGoogleMaps ? 'Detected' : 'Not Found'} 
            icon={Map} 
            trend={hasGoogleMaps ? 'positive' : 'negative'}
          />
          <StatCard 
            title="Clickable Phones" 
            value={phoneNumbers.length.toString()} 
            icon={Phone} 
            trend={hasPhoneLink ? 'positive' : 'neutral'}
          />
          <StatCard 
            title="Clickable Emails" 
            value={emails.length.toString()} 
            icon={Mail} 
            trend={hasEmailLink ? 'positive' : 'neutral'}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6 space-y-6 animate-fade-in stagger-3">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Building size={16} /> Schema & Maps
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
              <div className="flex items-center gap-3 mb-2">
                {hasLocalSchema ? <CheckCircle2 className="text-emerald-500" size={20} /> : <XCircle className="text-rose-500" size={20} />}
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>LocalBusiness JSON-LD</h4>
              </div>
              <p className="text-sm ml-8" style={{ color: 'var(--text-secondary)' }}>
                {hasLocalSchema 
                  ? "Search engines can clearly understand your business type and location via schema markup."
                  : "Missing structured data. Add JSON-LD LocalBusiness schema to improve visibility in local search results and the Google Local Pack."}
              </p>
            </div>

            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
              <div className="flex items-center gap-3 mb-2">
                {hasGoogleMaps ? <CheckCircle2 className="text-emerald-500" size={20} /> : <AlertTriangle className="text-amber-500" size={20} />}
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Interactive Map Embed</h4>
              </div>
              <p className="text-sm ml-8" style={{ color: 'var(--text-secondary)' }}>
                {hasGoogleMaps
                  ? "An embedded Google/Bing Map was detected, providing clear directions for users."
                  : "No embedded map iframe was found. Embedding a map increases user trust and time-on-page."}
              </p>
            </div>
          </div>
        </div>

        <div className="card p-6 space-y-6 animate-fade-in stagger-4">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <Phone size={16} /> Contact Details (NAP)
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  {hasPhoneLink ? <CheckCircle2 className="text-emerald-500" size={20} /> : <AlertTriangle className="text-amber-500" size={20} />}
                  <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Phone Numbers (tel:)</h4>
                </div>
                <span className="badge badge-neutral">{phoneNumbers.length} found</span>
              </div>
              {phoneNumbers.length > 0 ? (
                <div className="flex flex-wrap gap-2 ml-8 mt-3">
                  {phoneNumbers.map((phone, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 text-sm font-mono">
                      {phone}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm ml-8" style={{ color: 'var(--text-secondary)' }}>No clickable phone numbers found. Use &lt;a href="tel:..."&gt; for mobile users.</p>
              )}
            </div>

            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  {hasEmailLink ? <CheckCircle2 className="text-emerald-500" size={20} /> : <AlertTriangle className="text-amber-500" size={20} />}
                  <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Email Addresses (mailto:)</h4>
                </div>
                <span className="badge badge-neutral">{emails.length} found</span>
              </div>
              {emails.length > 0 ? (
                <div className="flex flex-wrap gap-2 ml-8 mt-3">
                  {emails.map((email, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 text-sm font-mono">
                      {email}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm ml-8" style={{ color: 'var(--text-secondary)' }}>No clickable email links found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LocalSeo;
