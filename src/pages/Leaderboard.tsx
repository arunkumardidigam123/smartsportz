import React from 'react';

const rows = [
  { rank: 1,  name: 'Mumbai Strikers', sport: 'Cricket',    pts: 52, wins: 18, losses: 4,  nrr: '+1.24' },
  { rank: 2,  name: 'Delhi Dynamos',   sport: 'Football',   pts: 45, wins: 14, losses: 7,  nrr: '+0.88' },
  { rank: 3,  name: 'Chennai Eagles',  sport: 'Basketball', pts: 38, wins: 12, losses: 10, nrr: '+0.42' },
  { rank: 4,  name: 'Hyderabad Hawks', sport: 'Cricket',    pts: 30, wins: 9,  losses: 11, nrr: '-0.14' },
  { rank: 5,  name: 'Kolkata Kings',   sport: 'Football',   pts: 25, wins: 8,  losses: 13, nrr: '-0.67' },
  { rank: 6,  name: 'Bangalore Bulls', sport: 'Volleyball', pts: 22, wins: 7,  losses: 15, nrr: '-1.05' },
];

export const Leaderboard: React.FC = () => (
  <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
    <div>
      <h1 className="text-[28px] font-black text-[#081C3A]">Leaderboard</h1>
      <p className="text-[#4B5563] text-[14px] mt-1">Current standings across all active tournaments</p>
    </div>

    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
      <div className="grid grid-cols-7 px-6 py-3.5 text-[11px] font-bold text-[#6e7a70] uppercase tracking-wider border-b border-[#E2E8F0] bg-[#f7f9fb]">
        <span>#</span>
        <span className="col-span-2">Team</span>
        <span>Sport</span>
        <span className="text-center">W</span>
        <span className="text-center">L</span>
        <span className="text-right">Pts</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.rank}
          className={`grid grid-cols-7 px-6 py-4 items-center border-b border-[#E2E8F0] last:border-0 hover:bg-[#f7f9fb] transition-colors ${i === 0 ? 'bg-[#006c40]/4' : ''}`}
        >
          <div className="flex items-center">
            {row.rank <= 3 ? (
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-black ${row.rank === 1 ? 'bg-yellow-400 text-white' : row.rank === 2 ? 'bg-[#94a3b8] text-white' : 'bg-[#b45309] text-white'}`}>
                {row.rank}
              </div>
            ) : (
              <span className="text-[14px] font-bold text-[#6e7a70] w-7 text-center">{row.rank}</span>
            )}
          </div>
          <div className="col-span-2 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#081C3A] to-[#006c40] flex items-center justify-center text-white text-[11px] font-black">
              {row.name.split(' ').map((w) => w[0]).join('')}
            </div>
            <span className="font-semibold text-[14px] text-[#081C3A]">{row.name}</span>
          </div>
          <span className="text-[13px] text-[#4B5563]">{row.sport}</span>
          <span className="text-center font-bold text-[14px] text-[#006c40]">{row.wins}</span>
          <span className="text-center font-bold text-[14px] text-[#4B5563]">{row.losses}</span>
          <span className="text-right font-black text-[16px] text-[#081C3A]">{row.pts}</span>
        </div>
      ))}
    </div>
  </div>
);
