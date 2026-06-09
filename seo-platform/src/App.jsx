import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import SiteAudit from './pages/SiteAudit';
import OnPageSeo from './pages/OnPageSeo';
import TechnicalSeo from './pages/TechnicalSeo';
import Keywords from './pages/Keywords';
import ContentOptimizer from './pages/ContentOptimizer';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AiAssistant from './components/ai/AiAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="audit" element={<SiteAudit />} />
          <Route path="on-page" element={<OnPageSeo />} />
          <Route path="technical" element={<TechnicalSeo />} />
          <Route path="keywords" element={<Keywords />} />
          <Route path="content" element={<ContentOptimizer />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <AiAssistant />
    </Router>
  );
}

export default App;
