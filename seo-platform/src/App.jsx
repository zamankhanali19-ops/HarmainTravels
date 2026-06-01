import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import SiteAudit from './pages/SiteAudit';
import AiAssistant from './components/ai/AiAssistant';

// Placeholder components for incomplete pages
const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[70vh] text-center animate-fade-in">
    <div className="w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mb-4">
      <span className="text-2xl" role="img" aria-label="construction">🚧</span>
    </div>
    <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{title} Module</h2>
    <p className="text-sm max-w-md" style={{ color: 'var(--text-secondary)' }}>
      This module is scheduled for Phase 2 development. It will include advanced backend processing and real API integrations.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="audit" element={<SiteAudit />} />
          <Route path="on-page" element={<Placeholder title="On-Page SEO" />} />
          <Route path="technical" element={<Placeholder title="Technical SEO" />} />
          <Route path="keywords" element={<Placeholder title="Keywords" />} />
          <Route path="content" element={<Placeholder title="Content Optimizer" />} />
          <Route path="reports" element={<Placeholder title="Reports" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <AiAssistant />
    </Router>
  );
}

export default App;
