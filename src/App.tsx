import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { LandingPage } from '@/pages/LandingPage';
import { Dashboard } from '@/pages/Dashboard';
import { Tournaments } from '@/pages/Tournaments';
import { Analytics } from '@/pages/Analytics';
import { Players } from '@/pages/Players';
import { Teams } from '@/pages/Teams';
import { Leaderboard } from '@/pages/Leaderboard';
import { News } from '@/pages/News';
import { Gallery } from '@/pages/Gallery';
import { Login } from '@/pages/Login';
import { Sports } from '@/pages/Sports';
import { Results } from '@/pages/Results';
import { Sponsors } from '@/pages/Sponsors';
import { FAQ } from '@/pages/FAQ';
import { Support } from '@/pages/Support';
import { Register } from '@/pages/Register';
import { EnterpriseDiscoveryHub } from '@/pages/EnterpriseDiscoveryHub';
import { LiveTournamentsHub } from '@/pages/LiveTournamentsHub';
import { PremiumPasswordRecovery } from '@/pages/PremiumPasswordRecovery';

import { TournamentListingPage } from '@/pages/TournamentListingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Public full-width pages */}
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Inner pages (dual-nav layout) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tournaments" element={<TournamentListingPage />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/results" element={<Results />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* New React pages */}
          <Route path="/upcoming-tournaments" element={<EnterpriseDiscoveryHub />} />
          <Route path="/live-matches" element={<LiveTournamentsHub />} />
          <Route path="/forgot-password" element={<PremiumPasswordRecovery />} />

          {/* Catch-all → Landing */}
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

