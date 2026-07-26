import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { useAppStore } from '@/store/appStore';

interface SideNavItem {
  name: string;
  path: string;
  icon: string;
}

const mainNavItems: SideNavItem[] = [
  { name: 'Dashboard',     path: '/dashboard',    icon: 'dashboard' },
  { name: 'Tournaments',   path: '/tournaments',  icon: 'emoji_events' },
  { name: 'Insights',      path: '/news',         icon: 'newspaper' },
  { name: 'Media Gallery', path: '/gallery',      icon: 'image' },
  { name: 'Teams',         path: '/teams',        icon: 'groups' },
  { name: 'Players',       path: '/players',      icon: 'person' },
  { name: 'Analytics',     path: '/analytics',    icon: 'analytics' },
  { name: 'Leaderboard',   path: '/leaderboard',  icon: 'leaderboard' },
];

interface ExternalSideNavItem {
  name: string;
  href: string;
  icon: string;
}

const externalNavItems: ExternalSideNavItem[] = [
  { name: 'Live Matches', href: '/live-matches', icon: 'live_tv' },
];

export const Sidebar: React.FC = () => {
  const { isSidebarCollapsed, toggleSidebar, isMobileSidebarOpen, setMobileSidebarOpen } =
    useAppStore();
  const location = useLocation();

  const sidebarWidth = isSidebarCollapsed ? 'w-16' : 'w-60';

  return (
    <>
      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen z-50 flex flex-col py-6 sidebar-gradient shadow-2xl',
          'border-r border-white/5 transition-all duration-300 ease-in-out',
          sidebarWidth,
          // Mobile: slide in/out
          isMobileSidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* ── Logo & Collapse Toggle ─────────────────────── */}
        <div
          className={cn(
            'flex items-center mb-8 px-4',
            isSidebarCollapsed ? 'justify-center' : 'justify-between'
          )}
        >
          {!isSidebarCollapsed && (
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[22px] font-bold text-[#72db9d] tracking-tight truncate leading-none">
                SmartSportz
              </span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            title={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className={cn(
              'p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10',
              'transition-all duration-200 active:scale-90 flex-shrink-0'
            )}
          >
            <span className="material-symbols-outlined text-xl">
              {isSidebarCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
        </div>

        {/* ── Subtitle ──────────────────────────────────── */}
        {!isSidebarCollapsed && (
          <div className="px-5 mb-6">
            <span className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.12em]">
              Enterprise Admin
            </span>
          </div>
        )}

        {/* ── Main Navigation ───────────────────────────── */}
        <nav className="flex-grow space-y-0.5 overflow-y-auto no-scrollbar px-2">
          {/* External HTML page links */}
          {externalNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              title={isSidebarCollapsed ? item.name : undefined}
              className={cn(
                'flex items-center gap-3.5 px-3 py-2.5 rounded-xl',
                'transition-all duration-200 cursor-pointer group relative',
                isSidebarCollapsed ? 'justify-center' : '',
                location.pathname === item.href
                  ? 'bg-[#006c40]/20 text-[#72db9d] border-l-4 border-[#72db9d] pl-2'
                  : 'text-white/55 hover:text-white hover:bg-white/8 border-l-4 border-transparent'
              )}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <span
                className={cn(
                  'material-symbols-outlined text-[20px] flex-shrink-0 transition-all duration-200',
                  location.pathname === item.href ? 'text-[#72db9d]' : 'group-hover:text-white'
                )}
                style={location.pathname === item.href ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>

              {!isSidebarCollapsed && (
                <span className={cn('text-[13px] font-medium truncate transition-all duration-200',
                  location.pathname === item.href ? 'font-semibold' : '')}>
                  {item.name}
                </span>
              )}

              {isSidebarCollapsed && (
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1e293b] text-white text-[12px] font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50 border border-white/10">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path ||
              location.pathname.startsWith(item.path + '/');

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={isSidebarCollapsed ? item.name : undefined}
                className={cn(
                  'flex items-center gap-3.5 px-3 py-2.5 rounded-xl',
                  'transition-all duration-200 cursor-pointer group relative',
                  isSidebarCollapsed ? 'justify-center' : '',
                  isActive
                    ? 'bg-[#006c40]/20 text-[#72db9d] border-l-4 border-[#72db9d] pl-2'
                    : 'text-white/55 hover:text-white hover:bg-white/8 border-l-4 border-transparent'
                )}
                onClick={() => setMobileSidebarOpen(false)}
              >
                <span
                  className={cn(
                    'material-symbols-outlined text-[20px] flex-shrink-0 transition-all duration-200',
                    isActive ? 'text-[#72db9d]' : 'group-hover:text-white'
                  )}
                  style={
                    isActive
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {item.icon}
                </span>

                {!isSidebarCollapsed && (
                  <span
                    className={cn(
                      'text-[13px] font-medium truncate transition-all duration-200',
                      isActive ? 'font-semibold' : ''
                    )}
                  >
                    {item.name}
                  </span>
                )}

                {/* Tooltip when collapsed */}
                {isSidebarCollapsed && (
                  <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1e293b] text-white text-[12px] font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50 border border-white/10">
                    {item.name}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ── Bottom Section ─────────────────────────────── */}
        <div
          className={cn(
            'mt-4 pt-4 border-t border-white/8 px-2 flex flex-col gap-0.5'
          )}
        >
          {/* Create Tournament CTA */}
          {!isSidebarCollapsed && (
            <NavLink
              to="/tournaments/create"
              className="mx-1 mb-3 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#006c40] hover:bg-[#0b8852] text-white text-[13px] font-semibold transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Create Tournament</span>
            </NavLink>
          )}
          {isSidebarCollapsed && (
            <NavLink
              to="/tournaments/create"
              title="Create Tournament"
              className="flex items-center justify-center p-2.5 rounded-xl bg-[#006c40] hover:bg-[#0b8852] text-white mb-3 transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
            </NavLink>
          )}

          {/* Support */}
          <NavLink
            to="/support"
            title={isSidebarCollapsed ? 'Support' : undefined}
            className={cn(
              'flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-white/50',
              'hover:text-white hover:bg-white/8 transition-all duration-200 group relative',
              isSidebarCollapsed ? 'justify-center' : ''
            )}
          >
            <span className="material-symbols-outlined text-[20px] flex-shrink-0">help</span>
            {!isSidebarCollapsed && <span className="text-[13px] font-medium">Support</span>}
            {isSidebarCollapsed && (
              <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#1e293b] text-white text-[12px] font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl z-50 border border-white/10">
                Support
              </div>
            )}
          </NavLink>

          {/* User Avatar + Sign Out */}
          <div
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-xl',
              'hover:bg-white/5 transition-all duration-200 cursor-pointer group',
              isSidebarCollapsed ? 'justify-center' : ''
            )}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#006c40] to-[#0b8852] flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-white text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                person
              </span>
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-white/80 truncate">Rahul Sharma</p>
                <p className="text-[10px] text-white/35 truncate">Tournament Director</p>
              </div>
            )}
            {!isSidebarCollapsed && (
              <button
                title="Sign Out"
                className="text-white/30 hover:text-red-400 transition-colors duration-200 ml-auto"
              >
                <span className="material-symbols-outlined text-[18px]">logout</span>
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
