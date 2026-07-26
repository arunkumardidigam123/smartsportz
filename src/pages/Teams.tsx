import React from 'react';

const teams = [
  { id: '1', name: 'Mumbai Strikers', sport: 'Cricket',    city: 'Mumbai',    wins: 18, losses: 4,  players: 15, rank: 1 },
  { id: '2', name: 'Delhi Dynamos',   sport: 'Football',   city: 'New Delhi', wins: 14, losses: 7,  players: 22, rank: 2 },
  { id: '3', name: 'Chennai Eagles',  sport: 'Basketball', city: 'Chennai',   wins: 12, losses: 10, players: 12, rank: 3 },
  { id: '4', name: 'Bangalore Bulls', sport: 'Volleyball', city: 'Bangalore', wins: 10, losses: 8,  players: 10, rank: 4 },
  { id: '5', name: 'Hyderabad Hawks', sport: 'Cricket',    city: 'Hyderabad', wins: 9,  losses: 11, players: 16, rank: 5 },
  { id: '6', name: 'Kolkata Kings',   sport: 'Football',   city: 'Kolkata',   wins: 8,  losses: 13, players: 20, rank: 6 },
];

const sportColors: Record<string, string> = {
  Cricket:    'from-[#006c40] to-[#0b8852]',
  Football:   'from-[#081C3A] to-[#0d2a52]',
  Basketball: 'from-[#b45309] to-[#d97706]',
  Volleyball: 'from-[#7c3aed] to-[#a855f7]',
};

export const Teams: React.FC = () => (
  <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
    <div>
      <h1 className="text-[28px] font-black text-[#081C3A]">Teams Directory</h1>
      <p className="text-[#4B5563] text-[14px] mt-1">All registered teams across sports disciplines</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {teams.map((t) => (
        <div key={t.id} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className={`h-32 bg-gradient-to-br ${sportColors[t.sport] ?? 'from-[#081C3A] to-[#006c40]'} relative flex items-center justify-center`}>
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20">
              <span className="text-white font-black text-[24px]">{t.name.split(' ').map((w) => w[0]).join('')}</span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="bg-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full">#{t.rank}</span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-[17px] text-[#081C3A] mb-1">{t.name}</h3>
            <div className="flex items-center gap-3 text-[12px] text-[#4B5563] mb-4">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {t.city}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">sports</span>
                {t.sport}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#f7f9fb] rounded-xl p-3">
                <p className="text-[20px] font-black text-[#006c40]">{t.wins}</p>
                <p className="text-[10px] text-[#6e7a70] font-medium">Wins</p>
              </div>
              <div className="bg-[#f7f9fb] rounded-xl p-3">
                <p className="text-[20px] font-black text-[#081C3A]">{t.losses}</p>
                <p className="text-[10px] text-[#6e7a70] font-medium">Losses</p>
              </div>
              <div className="bg-[#f7f9fb] rounded-xl p-3">
                <p className="text-[20px] font-black text-[#081C3A]">{t.players}</p>
                <p className="text-[10px] text-[#6e7a70] font-medium">Players</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
