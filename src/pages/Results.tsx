import React, { useState } from 'react';

const playersData = {
  'Rahul Prasad (CM)': {
    name: 'Rahul Prasad',
    impact: '9.2',
    speed: '32.4 km/h',
    distance: '8.2 km',
    passes: '88%',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKY9XNrGxf9moqNE1l-KBoWbAQCBV_KH8UMPGWn-kc5VgqOSMvUSE_H6WPapTmNTSGO9mo_myL-nQUmeiTI-qkbkIAloHpP3ahw8XwNbAmyh8ePgtTrf83bmIS8tjbYwztTL0gaYhQNKepK5YnObcJO1G0HYb8OHBe2dUNrLjkRiWFfeZGIySZcVE3urvclaq18_j5UwnHHKbYn-R_CaLfRX8FGfJ_qFDK8vtIUHbAYXRLvlcqaScnNhkZEnHZ58IjW0vPiAqt3q3',
    heatOffsets: ['top-1/4 left-1/3 w-32 h-32 bg-primary/40 blur-3xl', 'top-1/2 left-2/3 w-20 h-20 bg-primary/60 blur-2xl']
  },
  'Sanjay Verma (ST)': {
    name: 'Sanjay Verma',
    impact: '8.5',
    speed: '34.1 km/h',
    distance: '7.8 km',
    passes: '75%',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKY9XNrGxf9moqNE1l-KBoWbAQCBV_KH8UMPGWn-kc5VgqOSMvUSE_H6WPapTmNTSGO9mo_myL-nQUmeiTI-qkbkIAloHpP3ahw8XwNbAmyh8ePgtTrf83bmIS8tjbYwztTL0gaYhQNKepK5YnObcJO1G0HYb8OHBe2dUNrLjkRiWFfeZGIySZcVE3urvclaq18_j5UwnHHKbYn-R_CaLfRX8FGfJ_qFDK8vtIUHbAYXRLvlcqaScnNhkZEnHZ58IjW0vPiAqt3q3',
    heatOffsets: ['top-1/3 left-1/2 w-28 h-28 bg-yellow-500/30 blur-3xl', 'top-1/4 left-3/4 w-24 h-24 bg-red-500/40 blur-2xl']
  },
  'Kevin De (RM)': {
    name: 'Kevin De',
    impact: '7.9',
    speed: '31.2 km/h',
    distance: '9.1 km',
    passes: '82%',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKY9XNrGxf9moqNE1l-KBoWbAQCBV_KH8UMPGWn-kc5VgqOSMvUSE_H6WPapTmNTSGO9mo_myL-nQUmeiTI-qkbkIAloHpP3ahw8XwNbAmyh8ePgtTrf83bmIS8tjbYwztTL0gaYhQNKepK5YnObcJO1G0HYb8OHBe2dUNrLjkRiWFfeZGIySZcVE3urvclaq18_j5UwnHHKbYn-R_CaLfRX8FGfJ_qFDK8vtIUHbAYXRLvlcqaScnNhkZEnHZ58IjW0vPiAqt3q3',
    heatOffsets: ['top-1/2 left-1/4 w-24 h-24 bg-blue-500/30 blur-3xl', 'top-1/3 left-2/3 w-32 h-32 bg-primary/40 blur-3xl']
  }
};

export const Results: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<keyof typeof playersData>('Rahul Prasad (CM)');

  const player = playersData[selectedPlayer];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-20">
      {/* Main Content Canvas */}
      <div className="p-6 max-w-[1440px] mx-auto space-y-6">
        {/* Hero Scoreboard */}
        <section className="relative h-[480px] rounded-[18px] overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCyW3EymhRiGgq9tHoFOgSGzz8xu7Qe8xCsFSOZc_TDven9vlhYGOV6bpdQDUlQfJxQhWrgQyYxUZaLLzWrjs0HQzLQI4Zj-RydZ_vlhpRxBOKy1didbPPOnaxaBBhUPpMpvch7RFNhTXQYdS6i2sff49BYZ0gXjGJVMnXCld35aPuM6f2SZGaLVMiAHAqnPcGha27DD1cxNDxzwIIGc-qn752Wfi7_LUOTlzDFOnqs6d8AH8HPeBJigUlpmjerPukwqxK1mdwyrgHT\')' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-[#081C3A]/40 to-transparent"></div>
          <div className="relative z-10 w-full px-12 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-8 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <span className="flex h-3 w-3 rounded-full bg-[#006c40] animate-pulse"></span>
              <span className="text-white font-semibold text-[13px] uppercase tracking-[0.2em]">Live • 2nd Half • 75:20</span>
            </div>
            <div className="w-full max-w-5xl flex justify-between items-center text-white">
              {/* Team 1 */}
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <img className="w-20 h-20 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB57Q4lepSKHL9D6rIo9hNwiVAyvj5GKlxW3T-Y-MnWD0DYUPatSRp1NwXnEhBbJ-65eMm9HYcNOlNneDiA_t_bCOAG23GTpdnUCor0sC7lIpTec2dunk_gDXOmHI82LGY9SXc9krVA7nqeztPlbHPp--FPzqBAe4RaMufts4na-u4IsM4Ryg-rCscF3rQGf5wkve53Gevz5r9ny90RIpqXvL2QKDN3mWlrbcIT9YeSKDQfmEFfAdWP4VpKPUMA5pOVSHRgz4ptaGOU" alt="Bengaluru Bulls" />
                </div>
                <div className="text-center">
                  <h2 className="text-[24px] font-bold">Bengaluru Bulls</h2>
                  <p className="text-white/60 text-[12px]">Away</p>
                </div>
              </div>
              {/* Score */}
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[24px]">
                <div className="flex items-baseline gap-6 text-[120px] font-extrabold leading-none tracking-tighter">
                  <span className="text-white">2</span>
                  <span className="text-white/30 text-[80px]">:</span>
                  <span className="text-[#72db9d]">1</span>
                </div>
                <div className="mt-4 flex gap-8 text-[13px] font-semibold">
                  <div className="text-center">
                    <p className="text-white">Rahul P. <span className="text-white/40">24'</span></p>
                    <p className="text-white">Sanjay V. <span className="text-white/40">58'</span></p>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-[#72db9d]">Kevin D. <span className="text-white/40">12'</span></p>
                  </div>
                </div>
              </div>
              {/* Team 2 */}
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <img className="w-20 h-20 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIJRZ7gBeTwyxMlDranPUbCCsLRjBkytZRoKSjNIlo_CPm3O7XSY10ySuzopA4BnZiOjt-AXllqhTjiiLLxTZgRv5rGm_maIMmDGwEXhux9hRELoBlJGRs2DP2zmgKHFNVn_UGeQZ8-M0AhZUFJAE9dXysOXnk58OnM3J86R-Sre6UjWzGfSK5VRuBbGbMk3phhHP0qzZKtEl4O55caUjTxu05znvjetY8fCC4zRPp8Euk8yD-Lyzolsw-mgMG1--rrBPUKyED0aKp" alt="Mumbai Mavericks" />
                </div>
                <div className="text-center">
                  <h2 className="text-[24px] font-bold">Mumbai Mavericks</h2>
                  <p className="text-white/60 text-[12px]">Home</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Layout for Stats and Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Interactive Timeline */}
            <div className="bg-white rounded-[18px] p-8 border border-[#E2E8F0] shadow-sm overflow-x-auto">
              <h3 className="text-[20px] font-medium mb-6 text-[#081C3A]">Match Timeline</h3>
              <div className="relative flex items-center min-w-[800px] h-20">
                <div className="absolute w-full h-1 bg-[#eceef0] rounded-full"></div>
                <div className="absolute left-0 w-full flex justify-between px-2">
                  <div className="flex flex-col items-center -translate-y-4">
                    <div className="w-3 h-3 bg-[#006c40] rounded-full ring-4 ring-[#006c40]/20"></div>
                    <span className="text-[12px] mt-2 font-bold">0'</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4">
                    <div className="w-3 h-3 bg-[#ba1a1a] rounded-full ring-4 ring-[#ba1a1a]/20"></div>
                    <span className="text-[12px] mt-2 font-bold">12' Goal</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4">
                    <div className="w-3 h-3 bg-[#006c40] rounded-full ring-4 ring-[#006c40]/20"></div>
                    <span className="text-[12px] mt-2 font-bold">24' Goal</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full ring-4 ring-yellow-400/20"></div>
                    <span className="text-[12px] mt-2 font-bold">45' Card</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4">
                    <div className="w-3 h-3 bg-[#006c40] rounded-full ring-4 ring-[#006c40]/20"></div>
                    <span className="text-[12px] mt-2 font-bold">58' Goal</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4 animate-pulse-subtle">
                    <div className="w-4 h-4 bg-[#006c40] ring-4 ring-[#006c40]/30 rounded-full"></div>
                    <span className="text-[12px] mt-2 font-bold text-[#006c40]">75' LIVE</span>
                  </div>
                  <div className="flex flex-col items-center -translate-y-4 opacity-20">
                    <div className="w-3 h-3 bg-[#e0e3e5] rounded-full"></div>
                    <span className="text-[12px] mt-2 font-bold">90'</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-[18px] p-6 border border-[#E2E8F0] shadow-sm flex flex-col items-center">
                <span className="text-[13px] font-semibold text-[#4B5563] uppercase mb-2">Possession</span>
                <div className="flex items-center gap-4 w-full">
                  <span className="text-[24px] font-semibold text-[#081C3A]">54%</span>
                  <div className="flex-1 h-2 bg-[#eceef0] rounded-full overflow-hidden flex">
                    <div className="bg-[#006c40] h-full" style={{ width: '54%' }}></div>
                    <div className="bg-[#081C3A]/20 h-full flex-1"></div>
                  </div>
                  <span className="text-[24px] font-semibold text-[#4B5563]">46%</span>
                </div>
              </div>
              <div className="bg-white rounded-[18px] p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-[13px] font-semibold text-[#4B5563] uppercase mb-2">Shots (Target)</span>
                <div className="flex justify-between items-end">
                  <span className="text-[24px] font-semibold text-[#081C3A]">12 (6)</span>
                  <span className="material-symbols-outlined text-[#72db9d]">sports_soccer</span>
                </div>
              </div>
              <div className="bg-white rounded-[18px] p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-[13px] font-semibold text-[#4B5563] uppercase mb-2">Passes</span>
                <div className="flex justify-between items-end">
                  <span className="text-[24px] font-semibold text-[#081C3A]">421</span>
                  <span className="text-[#0b8852] text-[13px] font-semibold">+12%</span>
                </div>
              </div>
              <div className="bg-white rounded-[18px] p-6 border border-[#E2E8F0] shadow-sm">
                <span className="text-[13px] font-semibold text-[#4B5563] uppercase mb-2">Fouls</span>
                <div className="flex justify-between items-end">
                  <span className="text-[24px] font-semibold text-[#081C3A]">8</span>
                  <span className="material-symbols-outlined text-[#ba1a1a]">warning</span>
                </div>
              </div>
            </div>

            {/* Heatmap Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 bg-white rounded-[18px] border border-[#E2E8F0] shadow-sm p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[20px] font-medium text-[#081C3A]">Player Activity Heatmap</h3>
                  <select
                    className="bg-[#eceef0] border-none rounded-lg text-[13px] font-semibold px-4 py-2"
                    value={selectedPlayer}
                    onChange={e => setSelectedPlayer(e.target.value as any)}
                  >
                    <option>Rahul Prasad (CM)</option>
                    <option>Sanjay Verma (ST)</option>
                    <option>Kevin De (RM)</option>
                  </select>
                </div>
                <div className="relative w-full h-[300px] bg-[#006c40]/10 rounded-xl overflow-hidden border border-[#006c40]/20">
                  <div className="absolute inset-0 border-2 border-white/40 m-4 rounded-lg flex items-center justify-center">
                    <div className="w-px h-full bg-white/40"></div>
                    <div className="absolute w-24 h-24 border-2 border-white/40 rounded-full"></div>
                  </div>
                  {player.heatOffsets.map((heat, idx) => (
                    <div key={idx} className={`absolute ${heat}`} />
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col">
                <div className="bg-[#081C3A] rounded-[18px] p-6 text-white shadow-lg flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8ef8b7]">
                      <img className="w-full h-full object-cover" src={player.img} alt={player.name} />
                    </div>
                    <div>
                      <h4 className="text-[20px] font-medium">{player.name}</h4>
                      <p className="text-[12px] text-[#8ef8b7]">Match Impact: {player.impact}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/60 text-[14px]">Top Speed</span>
                      <span className="text-[13px] font-semibold">{player.speed}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-white/60 text-[14px]">Distance</span>
                      <span className="text-[13px] font-semibold">{player.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-[14px]">Accurate Passes</span>
                      <span className="text-[13px] font-semibold">{player.passes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Commentary) */}
          <div className="lg:col-span-4 flex flex-col h-[calc(100vh-140px)] sticky top-[100px]">
            <div className="bg-white rounded-[18px] border border-[#E2E8F0] shadow-sm flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center bg-[#f2f4f6]">
                <h3 className="text-[20px] font-medium text-[#081C3A]">Live Commentary</h3>
                <span className="px-3 py-1 bg-[#006c40]/10 text-[#006c40] text-[13px] rounded-full font-bold">New Updates</span>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                <div className="flex gap-4 group">
                  <span className="text-[13px] font-semibold text-[#006c40] shrink-0 w-8">75'</span>
                  <div className="flex-1 bg-[#f2f4f6] p-4 rounded-xl border-l-4 border-[#006c40]">
                    <p className="text-[14px] text-[#081C3A]">Substitution: Bengaluru Bulls. Out goes number 7, in comes number 22.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[13px] font-semibold text-[#4B5563] shrink-0 w-8">72'</span>
                  <div className="flex-1">
                    <p className="text-[14px] text-[#4B5563]">Free kick awarded to Mumbai Mavericks just outside the box after a clumsy challenge.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[13px] font-semibold text-[#4B5563] shrink-0 w-8">68'</span>
                  <div className="flex-1">
                    <p className="text-[14px] text-[#4B5563]">Great save! The Bulls keeper dives to his left to deny a thunderous strike from distance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[13px] font-semibold text-[#006c40] shrink-0 w-8 font-bold">58'</span>
                  <div className="flex-1 bg-[#006c40]/5 p-4 rounded-xl border-l-4 border-[#006c40] shadow-sm">
                    <p className="text-[14px] font-bold text-[#081C3A]">GOAL! Bengaluru Bulls! Sanjay Verma converts a clinical counter-attack with a low finish into the corner!</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-[13px] font-semibold text-[#4B5563] shrink-0 w-8">52'</span>
                  <div className="flex-1">
                    <p className="text-[14px] text-[#4B5563]">Mumbai are piling on the pressure here. Bengaluru sitting deep and absorbing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 p-6 border-t border-[#E2E8F0] flex justify-between items-center text-[#4B5563] text-[12px] bg-white max-w-[1440px] mx-auto rounded-[18px]">
        <p>© 2024 ProSports AI Management System • SmartSportz.in Platform</p>
        <div className="flex gap-6">
          <a className="hover:text-[#006c40] transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#006c40] transition-colors" href="#">API Docs</a>
          <a className="hover:text-[#006c40] transition-colors" href="#">Data Integrity</a>
        </div>
      </footer>
    </div>
  );
};
export default Results;
