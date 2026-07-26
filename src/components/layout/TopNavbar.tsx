import React, { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { useAppStore } from '@/store/appStore';

interface TopNavItem {
  name: string;
  path: string;
  pattern: RegExp;
}

interface ExternalNavItem {
  name: string;
  href: string;
  external?: boolean;
}

const topNavItems: TopNavItem[] = [
  { name: 'Home',        path: '/',             pattern: /^\/$/ },
  { name: 'Tournaments', path: '/tournaments',  pattern: /^\/tournaments/ },
  { name: 'Sports',      path: '/sports',       pattern: /^\/sports/ },
  { name: 'Dashboard',   path: '/dashboard',    pattern: /^\/dashboard/ },
  { name: 'Results',     path: '/results',      pattern: /^\/results/ },
  { name: 'Analytics',   path: '/analytics',    pattern: /^\/analytics/ },
  { name: 'Gallery',     path: '/gallery',      pattern: /^\/gallery/ },
  { name: 'Leaderboard', path: '/leaderboard',  pattern: /^\/leaderboard/ },
  { name: 'Sponsors',    path: '/sponsors',     pattern: /^\/sponsors/ },
];

const externalNavItems: ExternalNavItem[] = [
  { name: 'Live Matches', href: '/live-matches' },
];

/** Map route paths to page titles */
function usePageTitle(): string {
  const { pathname } = useLocation();
  const map: Record<string, string> = {
    '/':             'Home',
    '/dashboard':    'Live Score Dashboard',
    '/tournaments':  'Tournaments',
    '/analytics':    'Analytics & Reports',
    '/gallery':      'Media Gallery',
    '/teams':        'Teams Directory',
    '/players':      'Player Profiles',
    '/leaderboard':  'Leaderboard',
    '/news':         'Sports Insights',
    '/sponsors':     'Sponsorship',
    '/results':      'Match Results',
    '/login':        'Sign In',
  };
  return (
    Object.entries(map).find(([key]) =>
      key === '/' ? pathname === '/' : pathname.startsWith(key)
    )?.[1] ?? 'SmartSportz'
  );
}

export const TopNavbar: React.FC = () => {
  const { isSidebarCollapsed, setMobileSidebarOpen, isDarkMode, toggleDarkMode } =
    useAppStore();
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle = usePageTitle();
  const [searchOpen, setSearchOpen] = useState(false);

  const isFullWidth = ['/', '/login', '/register', '/forgot-password'].includes(location.pathname);

  const sidebarOffset = isFullWidth ? '' : (isSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-60');

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-40 h-16',
        'bg-white/90 backdrop-blur-md border-b border-[#E2E8F0]/80',
        'transition-all duration-300',
        sidebarOffset
      )}
    >
      <div className="h-full flex items-center justify-between px-5 gap-4">

        {/* ── Left: Mobile Hamburger + Page Title ─────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#3e4a41] hover:bg-[#eceef0] transition-colors"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>

          {/* SmartSportz wordmark (top bar on mobile / when sidebar collapsed) */}
          {(isFullWidth || isSidebarCollapsed) && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 group animate-fadeIn"
            >
              <span className="hidden sm:block text-[18px] font-bold text-[#006c40] tracking-tight leading-none">
                SmartSportz.in
              </span>
            </button>
          )}

          {/* Separator + Page breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-[#bdcabe]">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            <span className="text-[13px] font-semibold text-[#3e4a41]">{pageTitle}</span>
          </div>
        </div>

        {/* ── Center: Horizontal Nav Tabs ─────────────────── */}
        <nav className="hidden lg:flex items-center gap-0.5 overflow-x-auto no-scrollbar flex-1 justify-center max-w-2xl mx-auto">
          {externalNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-[12.5px] font-medium whitespace-nowrap',
                  'transition-all duration-200 relative',
                  isActive
                    ? 'text-[#006c40] bg-[#006c40]/8 font-semibold'
                    : 'text-[#4B5563] hover:text-[#006c40] hover:bg-[#006c40]/5'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#006c40] rounded-full" />
                )}
              </Link>
            );
          })}
          {topNavItems.map((item) => {
            const isActive = item.pattern.test(location.pathname);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-[12.5px] font-medium whitespace-nowrap',
                  'transition-all duration-200 relative',
                  isActive
                    ? 'text-[#006c40] bg-[#006c40]/8 font-semibold'
                    : 'text-[#4B5563] hover:text-[#006c40] hover:bg-[#006c40]/5'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#006c40] rounded-full" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ── Right: Actions ───────────────────────────────── */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Search */}
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-[#f2f4f6] rounded-xl px-3 py-1.5 border border-[#bdcabe]/50">
              <span className="material-symbols-outlined text-[18px] text-[#6e7a70]">search</span>
              <input
                autoFocus
                type="text"
                placeholder="Search tournaments, teams..."
                className="bg-transparent text-[13px] text-[#191c1e] placeholder-[#6e7a70] outline-none w-48"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl text-[#6e7a70] hover:text-[#006c40] hover:bg-[#006c40]/8 transition-all duration-200"
              title="Search"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-[#6e7a70] hover:text-[#006c40] hover:bg-[#006c40]/8 transition-all duration-200"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-xl text-[#6e7a70] hover:text-[#006c40] hover:bg-[#006c40]/8 transition-all duration-200"
            title="Notifications"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          {/* Settings */}
          <button
            className="p-2 rounded-xl text-[#6e7a70] hover:text-[#006c40] hover:bg-[#006c40]/8 transition-all duration-200"
            title="Settings"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-[#E2E8F0] mx-1" />

          {/* Login / Register */}
          <NavLink
            to="/login"
            className="hidden sm:flex px-4 py-1.5 border border-[#006c40] text-[#006c40] rounded-full text-[12px] font-semibold hover:bg-[#006c40]/8 transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="px-4 py-1.5 bg-[#006c40] text-white rounded-full text-[12px] font-semibold hover:bg-[#0b8852] transition-all duration-200 active:scale-95 whitespace-nowrap shadow-sm"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};
