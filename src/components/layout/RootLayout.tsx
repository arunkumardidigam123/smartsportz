import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { useAppStore } from '@/store/appStore';
import { cn } from '@/utils/cn';

/** Pages that hide the sidebar (full-width layout) */
const FULL_WIDTH_ROUTES = ['/', '/login', '/register'];

export const RootLayout: React.FC = () => {
  const { isSidebarCollapsed } = useAppStore();
  const { pathname } = useLocation();

  const isFullWidth = FULL_WIDTH_ROUTES.includes(pathname);

  const mainLeftPadding = isFullWidth
    ? ''
    : isSidebarCollapsed
    ? 'lg:pl-16'
    : 'lg:pl-60';

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex">
      {/* ── Sidebar (hidden on full-width pages like Landing) ── */}
      {!isFullWidth && <Sidebar />}

      {/* ── Main Column ───────────────────────────────────── */}
      <div
        className={cn(
          'flex flex-col flex-1 min-h-screen transition-all duration-300',
          mainLeftPadding
        )}
      >
        {/* ── Top Navbar (always visible) ─────────────────── */}
        <TopNavbar />

        {/* ── Page Content ────────────────────────────────── */}
        <main className="flex-1 pt-16 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
