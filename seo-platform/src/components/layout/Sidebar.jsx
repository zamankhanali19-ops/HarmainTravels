import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Search, FileText, Code2, Key, PenTool,
  BarChart3, Settings, Bot, ChevronLeft, ChevronRight, Zap, Globe, MapPin
} from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/audit', icon: Search, label: 'Site Audit' },
  { path: '/on-page', icon: FileText, label: 'On-Page SEO' },
  { path: '/technical', icon: Code2, label: 'Technical SEO' },
  { path: '/local-seo', icon: MapPin, label: 'Local SEO' },
  { path: '/keywords', icon: Key, label: 'Keywords' },
  { path: '/content', icon: PenTool, label: 'Content' },
  { path: '/reports', icon: BarChart3, label: 'Reports' },
  { path: '/ai', icon: Bot, label: 'AI Assistant' },
];

const bottomItems = [
  { path: '/settings', icon: Settings, label: 'Settings' },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? 'w-[72px]' : 'w-[260px]'
        } max-lg:${collapsed ? '-translate-x-full' : 'translate-x-0'}`}
        style={{ background: 'var(--bg-sidebar)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo */}
        <div className={`flex items-center h-16 px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="w-9 h-9 rounded-xl gradient-bg-animated flex items-center justify-center shrink-0 shadow-lg">
            <Zap size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <span className="text-white font-[800] text-lg tracking-tight">SEO</span>
              <span className="text-indigo-400 font-[800] text-lg">Pulse</span>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  if (item.path === '/ai') {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('open-seo-ai'));
                  }
                }}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  collapsed ? 'justify-center' : ''
                } ${
                  isActive
                    ? 'bg-indigo-500/15 text-indigo-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title={collapsed ? item.label : ''}
              >
                <item.icon size={19} className={`shrink-0 transition-colors ${isActive ? 'text-indigo-400' : 'group-hover:text-white'}`} />
                {!collapsed && <span>{item.label}</span>}
                {isActive && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Items */}
        <div className="px-3 pb-4 space-y-1 border-t border-white/5 pt-3">
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  collapsed ? 'justify-center' : ''
                } ${
                  isActive
                    ? 'bg-indigo-500/15 text-indigo-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title={collapsed ? item.label : ''}
              >
                <item.icon size={19} className="shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}

          {/* Collapse Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`hidden lg:flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200 w-full ${collapsed ? 'justify-center' : ''}`}
          >
            {collapsed ? <ChevronRight size={19} /> : <ChevronLeft size={19} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
