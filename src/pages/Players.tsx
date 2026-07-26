import React from 'react';

const players = [
  { id: '1', name: 'Virat Kohli',  sport: 'Cricket',  team: 'Mumbai Strikers', position: 'Batsman', runs: 1284, avg: 58.4, matches: 34, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMyvt-VmC2VJCa0G0EkNzWwOayBFoYA9IcIlZLGNg8Uq1G_H7QOlZv2nb7YylPA614YMgISZgmLbHVvIpsJfozRX6GKGcA505bcIWR_6eLi1Qkd7uzimFkZdV_ySTTcXpTLbSO-E184KIsQV4g_6DpJ6IcoFnGibk1oLMN3laY0XN5TWw42iazB_E6w7yUuhRt2DiOsP9Nh--WD2tbkUFTVNt8JMVV0NIg1QCPZIan7pLFWXd5G493GssYTbNo8NiJ8UidBEenLtMy' },
  { id: '2', name: 'Rohit Sharma', sport: 'Cricket',  team: 'Delhi Dynamos',   position: 'Opener',  runs: 1156, avg: 52.1, matches: 31, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMyvt-VmC2VJCa0G0EkNzWwOayBFoYA9IcIlZLGNg8Uq1G_H7QOlZv2nb7YylPA614YMgISZgmLbHVvIpsJfozRX6GKGcA505bcIWR_6eLi1Qkd7uzimFkZdV_ySTTcXpTLbSO-E184KIsQV4g_6DpJ6IcoFnGibk1oLMN3laY0XN5TWw42iazB_E6w7yUuhRt2DiOsP9Nh--WD2tbkUFTVNt8JMVV0NIg1QCPZIan7pLFWXd5G493GssYTbNo8NiJ8UidBEenLtMy' },
  { id: '3', name: 'Sunil Nair',   sport: 'Football', team: 'Chennai Eagles',  position: 'Forward', runs: 0,    avg: 0,    matches: 22, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMyvt-VmC2VJCa0G0EkNzWwOayBFoYA9IcIlZLGNg8Uq1G_H7QOlZv2nb7YylPA614YMgISZgmLbHVvIpsJfozRX6GKGcA505bcIWR_6eLi1Qkd7uzimFkZdV_ySTTcXpTLbSO-E184KIsQV4g_6DpJ6IcoFnGibk1oLMN3laY0XN5TWw42iazB_E6w7yUuhRt2DiOsP9Nh--WD2tbkUFTVNt8JMVV0NIg1QCPZIan7pLFWXd5G493GssYTbNo8NiJ8UidBEenLtMy' },
];

export const Players: React.FC = () => (
  <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
    <div>
      <h1 className="text-[28px] font-black text-[#081C3A]">Player Profiles</h1>
      <p className="text-[#4B5563] text-[14px] mt-1">Browse and manage athlete profiles across all sports</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((p) => (
        <div key={p.id} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 group">
          <div className="h-48 bg-gradient-to-br from-[#081C3A] to-[#0d2a52] relative flex items-end p-5">
            <div className="w-16 h-16 rounded-2xl border-2 border-[#72db9d]/40 overflow-hidden shadow-xl">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-[17px] text-white">{p.name}</h3>
              <p className="text-white/55 text-[12px]">{p.position} • {p.sport}</p>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#006c40] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <span className="text-[13px] font-semibold text-[#4B5563]">{p.team}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#f7f9fb] rounded-xl p-3">
                <p className="text-[20px] font-black text-[#081C3A]">{p.matches}</p>
                <p className="text-[10px] text-[#6e7a70] font-medium">Matches</p>
              </div>
              {p.sport === 'Cricket' ? (
                <>
                  <div className="bg-[#f7f9fb] rounded-xl p-3">
                    <p className="text-[20px] font-black text-[#006c40]">{p.runs}</p>
                    <p className="text-[10px] text-[#6e7a70] font-medium">Runs</p>
                  </div>
                  <div className="bg-[#f7f9fb] rounded-xl p-3">
                    <p className="text-[20px] font-black text-[#081C3A]">{p.avg}</p>
                    <p className="text-[10px] text-[#6e7a70] font-medium">Avg</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#f7f9fb] rounded-xl p-3">
                    <p className="text-[20px] font-black text-[#006c40]">14</p>
                    <p className="text-[10px] text-[#6e7a70] font-medium">Goals</p>
                  </div>
                  <div className="bg-[#f7f9fb] rounded-xl p-3">
                    <p className="text-[20px] font-black text-[#081C3A]">8</p>
                    <p className="text-[10px] text-[#6e7a70] font-medium">Assists</p>
                  </div>
                </>
              )}
            </div>
            <button className="mt-4 w-full py-2.5 rounded-xl bg-[#081C3A] text-white text-[13px] font-semibold hover:bg-[#006c40] transition-colors">
              View Full Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
