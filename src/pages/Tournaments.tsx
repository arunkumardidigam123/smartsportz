import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tournaments = [
  { id: '1', name: 'National Collegiate Cup 2024',  sport: 'Football',  status: 'REGISTRATION_OPEN', teams: 24, maxTeams: 32, date: 'Aug 20', location: 'New Delhi',   fee: 2500 },
  { id: '2', name: 'Corporate Premier League',       sport: 'Cricket',   status: 'LIVE',              teams: 16, maxTeams: 16, date: 'Jul 15', location: 'Mumbai',      fee: 5000 },
  { id: '3', name: 'All India Open Badminton',       sport: 'Badminton', status: 'UPCOMING',          teams: 8,  maxTeams: 64, date: 'Sep 5',  location: 'Bangalore',   fee: 1500 },
  { id: '4', name: 'State Basketball Championship',  sport: 'Basketball',status: 'REGISTRATION_OPEN', teams: 12, maxTeams: 16, date: 'Aug 30', location: 'Hyderabad',   fee: 3000 },
  { id: '5', name: 'Mumbai Football Tournament',     sport: 'Football',  status: 'LIVE',              teams: 20, maxTeams: 20, date: 'Jul 22', location: 'Mumbai',      fee: 4000 },
  { id: '6', name: 'South India Volleyball Open',   sport: 'Volleyball',status: 'UPCOMING',          teams: 4,  maxTeams: 32, date: 'Oct 10', location: 'Chennai',     fee: 2000 },
];

const sports = ['All', 'Football', 'Cricket', 'Badminton', 'Basketball', 'Volleyball'];

const statusMap: Record<string, { label: string; cls: string }> = {
  LIVE:              { label: 'LIVE',              cls: 'bg-red-500/10 text-red-600 border border-red-200' },
  REGISTRATION_OPEN: { label: 'REGISTRATION OPEN', cls: 'bg-[#006c40]/10 text-[#006c40] border border-[#006c40]/20' },
  UPCOMING:          { label: 'UPCOMING',          cls: 'bg-[#f2f4f6] text-[#4B5563] border border-[#E2E8F0]' },
};

export const Tournaments: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = tournaments.filter((t) => {
    const sportMatch = selectedSport === 'All' || t.sport === selectedSport;
    const searchMatch = t.name.toLowerCase().includes(search.toLowerCase()) || t.location.toLowerCase().includes(search.toLowerCase());
    return sportMatch && searchMatch;
  });

  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-[28px] font-black text-[#081C3A]">Browse Tournaments</h1>
          <p className="text-[#4B5563] text-[14px] mt-1">Discover and register for elite sports competitions across India</p>
        </div>
        <Link
          to="/tournaments/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#006c40] text-white rounded-xl font-semibold text-[13px] hover:bg-[#0b8852] transition-all active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Create Tournament
        </Link>
      </div>

      {/* ── Filters ────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex items-center gap-3 flex-1 bg-[#f2f4f6] rounded-xl px-4 py-2.5 border border-transparent focus-within:border-[#006c40]/30">
          <span className="material-symbols-outlined text-[#6e7a70] text-[20px]">search</span>
          <input
            type="text"
            placeholder="Search tournaments, locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent flex-1 text-[13px] text-[#191c1e] placeholder-[#6e7a70] outline-none"
          />
        </div>
        {/* Sport filter */}
        <div className="flex gap-2 flex-wrap">
          {sports.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSport(s)}
              className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200 ${
                selectedSport === s
                  ? 'bg-[#006c40] text-white shadow-sm'
                  : 'bg-[#f2f4f6] text-[#4B5563] hover:bg-[#006c40]/10 hover:text-[#006c40]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tournament Grid ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((t) => {
          const badge = statusMap[t.status];
          const progress = (t.teams / t.maxTeams) * 100;
          return (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Card header */}
              <div className="h-40 bg-gradient-to-br from-[#081C3A] to-[#0d2a52] relative flex items-center justify-center overflow-hidden">
                <span
                  className="material-symbols-outlined text-white/10 text-[120px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  emoji_events
                </span>
                {/* Sport badge */}
                <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-[11px] font-bold">{t.sport}</span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badge.cls}`}>
                    {badge.label}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[16px] text-[#081C3A] mb-3 leading-snug">{t.name}</h3>

                <div className="flex flex-wrap gap-3 text-[12px] text-[#4B5563] mb-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#6e7a70]">calendar_today</span>
                    {t.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#6e7a70]">location_on</span>
                    {t.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#6e7a70]">currency_rupee</span>
                    {t.fee.toLocaleString()}
                  </span>
                </div>

                {/* Team progress */}
                <div className="mb-5">
                  <div className="flex justify-between text-[11px] text-[#4B5563] mb-1.5">
                    <span>Teams Registered</span>
                    <span className="font-semibold text-[#081C3A]">{t.teams}/{t.maxTeams}</span>
                  </div>
                  <div className="h-1.5 bg-[#eceef0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#006c40] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  to={`/tournaments/${t.id}`}
                  className="mt-auto flex items-center justify-center gap-2 py-2.5 px-4 bg-[#081C3A] text-white rounded-xl text-[13px] font-semibold hover:bg-[#006c40] transition-colors active:scale-95"
                >
                  Register Now
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-[64px] text-[#bdcabe]">search_off</span>
          <p className="text-[#4B5563] text-[15px] mt-3">No tournaments found for your filters.</p>
        </div>
      )}
    </div>
  );
};
