import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/audit');
  };

  const handleMenuClick = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div
        className="transition-all duration-300 min-h-screen flex flex-col"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <TopBar onMenuClick={handleMenuClick} onSearch={handleSearch} />
        
        <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile: Adjust margin */}
      <style>{`
        @media (max-width: 1023px) {
          .min-h-screen > div:nth-child(2) {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
