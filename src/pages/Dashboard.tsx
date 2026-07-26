import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [runs, setRuns] = useState(142);
  const [wickets, setWickets] = useState(3);
  const [balls, setBalls] = useState(112); // 18.4 overs

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add runs or wicket
      const rand = Math.random();
      if (rand > 0.95) {
        setWickets(prev => (prev < 10 ? prev + 1 : 10));
      } else if (rand > 0.7) {
        setRuns(prev => prev + Math.floor(Math.random() * 4) + 1);
      }
      setBalls(prev => prev + 1);
    }, 5000); // Update every 5 seconds for visual HMR demo

    return () => clearInterval(interval);
  }, []);

  const overs = Math.floor(balls / 6);
  const currentBall = balls % 6;

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white pb-20">
      {/* Main Content Area */}
      <div className="p-8 grid grid-cols-12 gap-6 max-w-[1440px] mx-auto">
        {/* Left Column: Match & Timeline */}
        <div className="col-span-12 xl:col-span-8 space-y-6">
          {/* Main Match Scoreboard (Marquee) */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#081C3A] to-[#0B0F1A] p-8 shadow-2xl border border-white/5">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <div className="flex items-center gap-3 bg-red-600/20 text-red-500 px-4 py-1 rounded-full border border-red-500/30">
                  <span className="w-2 h-2 bg-red-500 rounded-full live-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest">Live Match • World Cup Qualifiers</span>
                </div>
                <div className="text-right">
                  <p className="text-[#4B5563] text-[13px] font-semibold">Narendra Modi Stadium, Ahmedabad</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* Team A */}
                <div className="flex flex-col items-center gap-4 w-1/3">
                  <div className="w-24 h-24 rounded-full bg-white/5 p-2 border-2 border-[#006c40]/20 shadow-xl overflow-hidden">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV6gNpQBd6apsmWi_mn3aGadrupKpy4WqCT7YlxzQDvYjK9ZRLb7NfUnNfojRSag419Gx377ivrqv7_ZS2HOmHYbmCHkEH2AR9gdjaymXm5TrV7zLy1b4Kw3ffuQkfCIOGxBDUeryxHksn46ZIR_I812rLCN-DlQdFEZXZgh3x8YoLE7Pj_sWBFpHPJZb9bgHZoQnmjdO4-6IHPkNe514j4OJlnCyVxq4mp1th7M2a55dEvwe6R-tJCH1pfsk4Wp9Tp91f-_eBcUVc" alt="INDIA" />
                  </div>
                  <h3 className="text-[32px] font-semibold leading-none text-white">INDIA</h3>
                </div>

                {/* Score Center */}
                <div className="flex flex-col items-center gap-2 w-1/3 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[48px] md:text-[64px] font-black text-[#72db9d] leading-none transition-all duration-300">{runs}/{wickets}</span>
                    <span className="text-[#4B5563] text-[20px] font-medium mt-2">({overs}.{currentBall} Overs)</span>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-[10px] text-[#4B5563] uppercase">CRR</p>
                      <p className="font-bold text-[#006c40]">7.61</p>
                    </div>
                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-[10px] text-[#4B5563] uppercase">Projected</p>
                      <p className="font-bold text-[#00D4FF]">210</p>
                    </div>
                  </div>
                </div>

                {/* Team B */}
                <div className="flex flex-col items-center gap-4 w-1/3">
                  <div className="w-24 h-24 rounded-full bg-white/5 p-2 border-2 border-[#575e70]/20 shadow-xl overflow-hidden">
                    <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjXua9eEPYhYEbMzZf4L5t1SD2Km0u-IKDWwxKYBM5ycpdkVBe6SI3_9QWOP8ZLK1Gd44vkKe8LpEiGHS4scjyJGjWNJ943QZ4VXRVBPTllwDBmCZ2g5MgIKjruceVKm2bVv8QM_t9Bu1toK7k1GmfTTRIUYrYlhomC6Ld0nFsG9u6k7zj7Or2q0jRas1WOBcaLzPnF9A2VXN8RpdwO-zMOevpqItPxiEmtky5abJW9TucNgkDrpKZnR8WP7SYCeTsivdiTaiOhzDi" alt="AUSTRALIA" />
                  </div>
                  <h3 className="text-[32px] font-semibold leading-none text-white">AUSTRALIA</h3>
                </div>
              </div>

              {/* Batting/Bowling Sub-details */}
              <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-xs uppercase text-[#4B5563] font-bold tracking-widest">On Strike</p>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-[#006c40]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#006c40]/20">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMyvt-VmC2VJCa0G0EkNzWwOayBFoYA9IcIlZLGNg8Uq1G_H7QOlZv2nb7YylPA614YMgISZgmLbHVvIpsJfozRX6GKGcA505bcIWR_6eLi1Qkd7uzimFkZdV_ySTTcXpTLbSO-E184KIsQV4g_6DpJ6IcoFnGibk1oLMN3laY0XN5TWw42iazB_E6w7yUuhRt2DiOsP9Nh--WD2tbkUFTVNt8JMVV0NIg1QCPZIan7pLFWXd5G493GssYTbNo8NiJ8UidBEenLtMy" alt="Virat Kohli" />
                      </div>
                      <div>
                        <p className="font-bold">Virat Kohli*</p>
                        <p className="text-xs text-[#4B5563]">64 (42)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#006c40] font-bold">S.R: 152.38</p>
                      <div className="flex gap-1 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c40]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006c40]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase text-[#4B5563] font-bold tracking-widest">Bowler</p>
                  <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-[#00D4FF]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#00D4FF]/20">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd4PMedkYVDw6r8bMFE5uiYm5im_HeAB-CZrd9MPOmw4gwbhPsH6FXVzz5GBanIlNuBlFXai7A-4LDd5niNPrjcQskK-rMOR6T5He3KUG208-Lt4KzlCFmdYpcqa8OK13rjCq4XvOOJUGvy92KkMFtmQEV6uvv2DIGajgeiUbBPOPlIll6tBCOK6ww6AD1N6mCbz7U0icUJ57eW5qSq8jzmUYnWQMELAiOcpFgK5vk7P-ZRqmOZOYGCpWozkidczGlSEAZ_QSkn-3u" alt="Pat Cummins" />
                      </div>
                      <div>
                        <p className="font-bold">Pat Cummins</p>
                        <p className="text-xs text-[#4B5563]">3.4 - 0 - 28 - 1</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#00D4FF] font-bold">ECON: 7.63</p>
                      <div className="flex gap-1 mt-1 justify-end">
                        <span className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[10px] text-[#4B5563]">W</span>
                        <span className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[10px] text-[#006c40]">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-[13px] font-semibold text-[#4B5563] uppercase">Win Probability</h4>
                <span className="material-symbols-outlined text-[#006c40]">trending_up</span>
              </div>
              <div className="relative h-24 flex items-end gap-2 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">68%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#006c40]" style={{ width: '68%' }}></div>
                </div>
              </div>
              <p className="text-xs text-[#4B5563] mt-2">India is currently favored to win</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-[13px] font-semibold text-[#4B5563] uppercase">Run Rate Graph</h4>
                <span className="material-symbols-outlined text-[#00D4FF]">bar_chart</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                <div className="flex-1 bg-[#006c40]/20 rounded-t h-[40%]"></div>
                <div className="flex-1 bg-[#006c40]/40 rounded-t h-[60%]"></div>
                <div className="flex-1 bg-[#006c40]/20 rounded-t h-[30%]"></div>
                <div className="flex-1 bg-[#006c40]/60 rounded-t h-[80%]"></div>
                <div className="flex-1 bg-[#006c40]/80 rounded-t h-[70%]"></div>
                <div className="flex-1 bg-[#006c40] rounded-t h-[100%]"></div>
              </div>
              <p className="text-xs text-[#4B5563] mt-2">Last 5 Overs: 48 runs, 0 wickets</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-[13px] font-semibold text-[#4B5563] uppercase">Ball by Ball</h4>
                <span className="material-symbols-outlined text-white">info</span>
              </div>
              <div className="flex gap-2 justify-center py-2">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">1</span>
                <span className="w-8 h-8 rounded-full bg-[#006c40] flex items-center justify-center text-xs font-bold">4</span>
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">wd</span>
                <span className="w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center text-xs font-bold">W</span>
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">0</span>
                <span className="w-8 h-8 rounded-full bg-[#006c40] flex items-center justify-center text-xs font-bold">6</span>
              </div>
              <p className="text-xs text-center text-[#4B5563]">Current Over: 15 Runs</p>
            </div>
          </div>

          {/* Match Commentary */}
          <section className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-[400px]">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="text-[20px] font-medium">Live Commentary</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded bg-[#006c40]/20 text-[#72db9d] text-xs font-bold">KEY EVENTS</button>
                <button className="px-3 py-1 rounded bg-white/5 text-[#4B5563] text-xs font-bold">ALL</button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-[#006c40]">18.4</span>
                  <div className="w-0.5 flex-1 bg-white/10 my-2"></div>
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">SIX! Kohli is on fire.</p>
                  <p className="text-sm text-[#4B5563]">Short and wide from Cummins, Kohli stands tall and slaps it over deep extra cover. The crowd is erupting here in Ahmedabad! That takes him to 64.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-[#00D4FF]">18.3</span>
                  <div className="w-0.5 flex-1 bg-white/10 my-2"></div>
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">WICKET! Cummins strikes back.</p>
                  <p className="text-sm text-[#4B5563]">Hardik Pandya tries to clear the long-on boundary but mistimes it completely. Starc takes a comfortable catch. A huge blow for India just before the death overs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-white/50">18.2</span>
                  <div className="w-0.5 flex-1 bg-white/10 my-2"></div>
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">No run.</p>
                  <p className="text-sm text-[#4B5563]">Good length delivery, pushed back to the bowler. Sharp fielding by Cummins.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Other Matches & Action Bar */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* Action Bar */}
          <section className="bg-white/5 border border-white/5 p-6 rounded-2xl grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95">
              <span className="material-symbols-outlined text-[#006c40]">share</span>
              <span className="text-[13px] font-semibold">Share Score</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95">
              <span className="material-symbols-outlined text-[#00D4FF]">notifications_active</span>
              <span className="text-[13px] font-semibold">Set Alerts</span>
            </button>
            <Link to="/analytics" className="col-span-2 flex items-center justify-center gap-2 py-3 bg-[#0b8852] text-white rounded-xl hover:bg-[#006c40] transition-all active:scale-95 shadow-lg shadow-[#006c40]/20">
              <span className="material-symbols-outlined">analytics</span>
              <span className="text-[13px] font-semibold">Detailed Analytics</span>
            </Link>
          </section>

          {/* Multi-Sport Match Cards */}
          <section className="space-y-4">
            <h3 className="text-[20px] font-medium px-2 flex justify-between items-center text-white">
              Active Global Matches
              <span className="text-xs text-[#006c40] font-bold uppercase cursor-pointer hover:underline">View All</span>
            </h3>
            {/* Football Card */}
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl border-l-4 border-[#006c40] hover:translate-x-1 transition-transform cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4B5563] text-sm">sports_soccer</span>
                  <span className="text-[10px] text-[#4B5563] uppercase font-bold tracking-widest">Premier League</span>
                </div>
                <span className="text-xs text-[#006c40] font-bold bg-[#006c40]/10 px-2 py-0.5 rounded italic">74' Live</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-[10px]">ARS</div>
                  <span className="font-bold">2</span>
                </div>
                <div className="text-[#4B5563] text-xs">vs</div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">1</span>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-[10px]">MCI</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden flex">
                  <div className="h-full bg-red-500" style={{ width: '58%' }}></div>
                  <div className="h-full bg-blue-500" style={{ width: '42%' }}></div>
                </div>
                <span className="text-[10px] text-[#4B5563]">58% Possession</span>
              </div>
            </div>
            {/* Basketball Card */}
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl border-l-4 border-[#00D4FF] hover:translate-x-1 transition-transform cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4B5563] text-sm">sports_basketball</span>
                  <span className="text-[10px] text-[#4B5563] uppercase font-bold tracking-widest">NBA Season</span>
                </div>
                <span className="text-xs text-[#00D4FF] font-bold bg-[#00D4FF]/10 px-2 py-0.5 rounded italic">Q4 2:14</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center font-bold text-[10px]">LAL</div>
                  <span className="font-bold">88</span>
                </div>
                <div className="text-[#4B5563] text-xs">vs</div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">92</span>
                  <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center font-bold text-[10px]">BOS</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-[#4B5563] uppercase font-bold">
                <span>FG%: 46.2%</span>
                <span>Timeouts: 2 | 1</span>
              </div>
            </div>
          </section>

          {/* Trending Topics / Highlights */}
          <section className="bg-white/5 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-[13px] font-semibold text-[#4B5563] uppercase mb-4 tracking-widest">Key Highlights</h3>
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-xl h-24 cursor-pointer">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtrqJ5nWhiktAEsB3fwG5rc2EgD_CCMe7G0LV7hrCSZgD_ZaR1FGdBcdvz-_u_TBGevIWe25A6WqJT8SoWAdGjiGWHH7Y4KA1nRSpA_u4B-a3sTwKFAIHRljQZUeBU4pGkX9TWlfAzJtX_InFYN7XDu-gZbuJXE73Yt_bLRtZL4nXcMvxR00XiwdIR60idq-XURSoVYHpPnBV_6sEkR_fLI8eykz-rbUfuPk5tu9OEWunv1rAvVNFympF1KYMdngJ2U4xxZEs9fBd8')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <p className="text-xs font-bold leading-tight">LeBron's record-breaking dunk against Celtics</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl h-24 cursor-pointer">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTvJxVmNPAx5lwWaDMi7_e3_V9GIU-9D7cgAOEQ2oMq7Ikg7NzpLQsqKwGRNaVjFH9UnaebPNU1GFW8yDnC3rUPuh4U3kIBG2fp5LcrFmi3OYxNefKUgTiNwBK1YAZ2Yw3ZAKt3gtqFqW1arLvT3jxMkZntE2DszlYCKfX5-jnyYnpoqUco2bExbXalUHQKCIYzoMD00zelpo27dkuhgMk1Ro4PnnqnWa8d9H_2bbDVHewUv4sR1tZLRZHjM6rQVVx3fiCXAx5o8h3')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                  <p className="text-xs font-bold leading-tight">Saka's brilliant volley to put Arsenal ahead</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 p-6 border-t border-white/5 flex justify-between items-center text-[#4B5563] text-[12px] bg-[#081C3A] max-w-[1440px] mx-auto rounded-[18px]">
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
export default Dashboard;
