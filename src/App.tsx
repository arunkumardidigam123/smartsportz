import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { LandingPage }  from '@/pages/LandingPage';
import { Dashboard }    from '@/pages/Dashboard';
import { Tournaments }  from '@/pages/Tournaments';
import { Analytics }    from '@/pages/Analytics';
import { Players }      from '@/pages/Players';
import { Teams }        from '@/pages/Teams';
import { Leaderboard }  from '@/pages/Leaderboard';
import { News }         from '@/pages/News';
import { Gallery }      from '@/pages/Gallery';
import { Login }        from '@/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Public full-width pages */}
          <Route index element={<LandingPage />} />
          <Route path="/login"    element={<Login />} />

          {/* Inner pages (dual-nav layout) */}
          <Route path="/dashboard"   element={<Dashboard />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/analytics"   element={<Analytics />} />
          <Route path="/players"     element={<Players />} />
          <Route path="/teams"       element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/news"        element={<News />} />
          <Route path="/gallery"     element={<Gallery />} />

          {/* Catch-all → Landing */}
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
