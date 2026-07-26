import React, { useState } from 'react';

export const Leaderboard: React.FC = () => {
  const [tournament, setTournament] = useState('Mumbai Premier Bash');
  const [sport, setSport] = useState('Cricket');

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-20 flex flex-col justify-between">
      {/* Content Canvas */}
      <div className="p-10 max-w-[1440px] mx-auto w-full space-y-8">
        {/* Header & Filters Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-[32px] font-bold text-[#191c1e] leading-tight">Tournament Leaderboards</h2>
            <p className="text-[#3e4a41] text-[16px] font-medium">Mumbai Premier Bash - Season 2024</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => alert('Leaderboard link copied to clipboard!')} className="flex items-center gap-2 bg-[#eceef0] border border-[#bdcabe]/40 px-4 py-2 rounded-lg text-[#191c1e] hover:bg-[#e0e3e5] transition-colors font-semibold">
              <span className="material-symbols-outlined text-[20px]">share</span>
              <span className="text-sm">Share</span>
            </button>
            <button onClick={() => alert('Downloading leaderboard report PDF...')} className="flex items-center gap-2 bg-[#006c40] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#0b8852] transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="text-sm">Download PDF</span>
            </button>
          </div>
        </section>

        {/* Sticky Filters */}
        <div className="sticky top-0 z-30 bg-[#f7f9fb]/90 backdrop-blur-md py-4 border-b border-[#bdcabe]/30">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-[#006c40] uppercase tracking-wider">Tournament</label>
              <select value={tournament} onChange={e => setTournament(e.target.value)} className="bg-[#eceef0] border-none rounded-lg text-sm text-[#191c1e] focus:ring-[#006c40] w-48 py-2 px-3 outline-none">
                <option>Mumbai Premier Bash</option>
                <option>Delhi Super League</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-[#006c40] uppercase tracking-wider">Sport</label>
              <select value={sport} onChange={e => setSport(e.target.value)} className="bg-[#eceef0] border-none rounded-lg text-sm text-[#191c1e] focus:ring-[#006c40] w-32 py-2 px-3 outline-none">
                <option>Cricket</option>
                <option>Football</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-bold text-[#006c40] uppercase tracking-wider">Season</label>
              <select className="bg-[#eceef0] border-none rounded-lg text-sm text-[#191c1e] focus:ring-[#006c40] w-24 py-2 px-3 outline-none">
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>
        </div>

        {/* Winner Highlights (Top 3 Podium) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* 2nd Place */}
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex flex-col items-center justify-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all h-72">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#575e70]"></div>
            <div className="w-24 h-24 rounded-full border-4 border-[#575e70]/30 mb-4 p-1 overflow-hidden">
              <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmr6002P4qE1A2Xx7AMVhXc6q7AZXVyFtutqv7MKmJpkp3h6d88DaVsyqG97CsyNmCBbIxujKNG6JLVVxecGswDuSAD1zP02eXFf0Eoe9XDtI8lD0dmbO8_HqiwHZ_sGUFDKBCgCFwBoMwmqS0ip9l0s6nDuGXRRYI1mrVaVR4uQ1yRCcZVAtPwzU9uCSpDRLMuMLco89J8qGRMayWUYfc8Q2_5lcTB2RxKX0FUClsIwaf4m-fsRfl39DEffRR0XZeFmhRd7PoSW5W" alt="Mumbai Titans" />
            </div>
            <div className="absolute top-4 right-4 text-[#575e70]">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#191c1e]">Mumbai Titans</h3>
            <p className="text-[#575e70] text-[12px] font-semibold uppercase tracking-wider">2ND PLACE</p>
            <div className="mt-4 flex gap-4 text-center">
              <div>
                <p className="text-[11px] text-[#3e4a41] uppercase">PTS</p>
                <p className="text-[18px] font-bold">154</p>
              </div>
              <div className="h-8 w-[1px] bg-[#bdcabe]"></div>
              <div>
                <p className="text-[11px] text-[#3e4a41] uppercase">NRR</p>
                <p className="text-[18px] font-bold">+1.24</p>
              </div>
            </div>
          </div>

          {/* 1st Place (Featured) */}
          <div className="bg-[#006c40]/5 border-2 border-[#006c40] rounded-[18px] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-xl shadow-[#006c40]/10 h-80">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#006c40]"></div>
            <div className="w-32 h-32 rounded-full border-4 border-[#006c40] p-1 mb-4 overflow-hidden">
              <img className="w-full h-full object-cover rounded-full animate-pulse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOWZ6u23VEDBFndbDcZgRmwJCPhAqmyBsPWyYE9lXqZMJXlZxz7_cdpC8n_u6PeVk__gnQIhesgjKpZQClgWQ0RR2KU0cxHiu4IAgoy_J1f4l1booWgweJMPfXTCpY565Xi-FmgsPYls2yIyUW5PSRdw-HN1nS9nOzoc42BB7rswcwGCh2Nf2oCJ6NP_4umwzeOPs3BdDoi1bd0kZbMG7HlXDWp4ubsfF5BWy_pKHtWli7ZnszfLN0KP9bJIRtk59gm60nX5K2miQ" alt="Bangalore Bulls" />
            </div>
            <div className="absolute top-6 right-6 text-[#006c40]">
              <span className="material-symbols-outlined text-5xl">emoji_events</span>
            </div>
            <h3 className="text-[22px] font-extrabold text-[#191c1e]">Bangalore Bulls</h3>
            <p className="text-[#006c40] font-bold tracking-widest text-xs">CHAMPIONS</p>
            <div className="mt-4 flex gap-6 text-center">
              <div>
                <p className="text-[11px] text-[#006c40] uppercase">PTS</p>
                <p className="text-[24px] font-bold text-[#006c40]">182</p>
              </div>
              <div className="h-10 w-[1px] bg-[#006c40]/30"></div>
              <div>
                <p className="text-[11px] text-[#006c40] uppercase">NRR</p>
                <p className="text-[24px] font-bold text-[#006c40]">+2.15</p>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex flex-col items-center justify-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all h-64">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#00884f]"></div>
            <div className="w-20 h-20 rounded-full border-4 border-[#00884f]/30 mb-4 p-1 overflow-hidden">
              <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsAGriiqTxi8FDXdSIdQP1WecA-8yv03VLhXlnsCx8C0lkQiPUA3r8IB-DbwqUvUDJGJy3bngRJHJp8n0cSagAzS6ABm58gdyYAddfiVGzssDlpCZ3CCTuY_2fsO-uVHYOFfYOyI3cBS_FnlpazWcHQ4gq6EnIvO4h_MrnppCVg7mRdwHp5a7vxtniv8Hzs8pIP883kytQvOidb3S8C4cfvrHRfrLA3FSayIqONmfXFB5n7IbRcVpVZo_yAhAqhTDPj0vo7Q6qOJG8" alt="Delhi Dragons" />
            </div>
            <div className="absolute top-4 right-4 text-[#00884f]">
              <span className="material-symbols-outlined text-3xl">military_tech</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#191c1e]">Delhi Dragons</h3>
            <p className="text-[#00884f] text-[12px] font-semibold uppercase tracking-wider">3RD PLACE</p>
            <div className="mt-3 flex gap-4 text-center">
              <div>
                <p className="text-[11px] text-[#3e4a41] uppercase">PTS</p>
                <p className="text-[16px] font-bold">142</p>
              </div>
              <div className="h-6 w-[1px] bg-[#bdcabe]"></div>
              <div>
                <p className="text-[11px] text-[#3e4a41] uppercase">NRR</p>
                <p className="text-[16px] font-bold">+0.85</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Data Standings */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Detailed Points Table */}
          <div className="lg:col-span-3 bg-white rounded-[18px] border border-[#bdcabe]/40 overflow-hidden flex flex-col shadow-sm">
            <div className="px-6 py-4 border-b border-[#bdcabe]/40 flex justify-between items-center bg-[#f2f4f6]/50">
              <h3 className="text-[18px] font-bold text-[#191c1e]">Full Standings</h3>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full bg-[#006c40]/20 border border-[#006c40]"></span>
                <span className="text-[11px] text-[#3e4a41] font-semibold">Playoffs Qualification Zone</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f2f4f6] text-[11px] text-[#006c40] uppercase tracking-wider">
                    <th className="px-6 py-4">Rank</th>
                    <th className="px-6 py-4">Team</th>
                    <th className="px-6 py-4 text-center">P</th>
                    <th className="px-6 py-4 text-center">W</th>
                    <th className="px-6 py-4 text-center">L</th>
                    <th className="px-6 py-4 text-center">NRR</th>
                    <th className="px-6 py-4 text-right">PTS</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr className="border-b border-[#bdcabe]/20 hover:bg-[#eceef0]/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#006c40]">04</span>
                        <span className="material-symbols-outlined text-[#006c40] text-sm">north</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eceef0] flex items-center justify-center overflow-hidden">
                          <img className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD45zwgEI2QTCxmEykfb4aB-lG6dGbtJy-EvjwTG5dqJa6FznbWtJyaq5PT0-cU12AgGksJc4-raMWJhziQwBNa8hxMUMv_pzIUGommFsF4gVwwCCCP_gCPwCroJfWYjLUz9-5NqL4dRQ0Wx6gc5jx2vUSfHfjt1NhNJJCMiwCaYlwOntWL-BovUpDnrL5-bnhwwL-k3UUZY9vCBh_JcFx0gGTBitCiDgaPqJeHJ-MlG8SwxyCuQmZ08Wqun8IdHfr1Vi1YpZCOiZEN" alt="Chennai" />
                        </div>
                        <span className="font-bold text-sm text-[#191c1e]">Chennai Chargers</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">14</td>
                    <td className="px-6 py-4 text-center font-semibold">8</td>
                    <td className="px-6 py-4 text-center font-semibold">6</td>
                    <td className="px-6 py-4 text-center text-[#006c40] font-semibold">+0.425</td>
                    <td className="px-6 py-4 text-right font-bold">16</td>
                  </tr>
                  <tr className="border-b border-[#bdcabe]/20 hover:bg-[#eceef0]/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#191c1e]">05</span>
                        <span className="material-symbols-outlined text-red-500 text-sm">south</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eceef0] flex items-center justify-center overflow-hidden">
                          <img className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT0_ok6NeToEKIqnxIGUAASrPmB1g6nMMpuMUhEQG7OSN0RzOWaIC0XSAhSms2E4AsqlFMC2IeDYYnEwnVZo7UaPU_zmO092yv2vo4szIo7nboEedBcqHWdTUdODlLu_5OLQ0C4t7N8cAPQ0wB4GbiFlXqxZgH3B9s1NpaNDmhOAKFgAqhoJOg1IbiUFSnNQUSsW_tLkMUn0Myj058yqtle3-VsLw2-VqIxoR7tzwTBko-8UlvT8JiZT9rH4RxbcU7iUyLQPAhfsQp" alt="Rajasthan" />
                        </div>
                        <span className="font-bold text-sm text-[#191c1e]">Rajasthan Royals</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">14</td>
                    <td className="px-6 py-4 text-center font-semibold">7</td>
                    <td className="px-6 py-4 text-center font-semibold">7</td>
                    <td className="px-6 py-4 text-center text-red-500 font-semibold">-0.112</td>
                    <td className="px-6 py-4 text-right font-bold">14</td>
                  </tr>
                  <tr className="border-b border-[#bdcabe]/20 hover:bg-[#eceef0]/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#191c1e]">06</span>
                        <span className="material-symbols-outlined text-[#3e4a41] text-sm">remove</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eceef0] flex items-center justify-center overflow-hidden">
                          <img className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsFwrJVPYvtgbh7tcgjVrKFpUGogh_GdcehBgmgypeCDd3-IzkaraiXKmdIedFxVZHZ5REVGJvYqUtfRkl6EOF3VtmsvnVQjBJAq7uacqcbTxbMvYfx3GnQdQ6tF6qp3MSFVvH6vHy5TzKKiGPVTgafFgwWH2JJZRHhDGuXp2PsGS5hf_jwor8GBJcRVtA6BVkD4vp9_CdDPBAfW1CW1oz8Ud5b2N7QYiAxOS8EOZUFIOOybU7FI0LZMRU75a6_Wx1cclw4u0g3PhN" alt="Kolkata" />
                        </div>
                        <span className="font-bold text-sm text-[#191c1e]">Kolkata Knights</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold">14</td>
                    <td className="px-6 py-4 text-center font-semibold">6</td>
                    <td className="px-6 py-4 text-center font-semibold">8</td>
                    <td className="px-6 py-4 text-center text-red-500 font-semibold">-0.450</td>
                    <td className="px-6 py-4 text-right font-bold">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-auto p-4 flex justify-center border-t border-[#bdcabe]/20">
              <button className="text-[#006c40] font-bold text-sm flex items-center gap-2 hover:underline">
                View All 12 Teams
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>

          {/* MVP & Side stats */}
          <div className="flex flex-col gap-6">
            {/* MVP Card */}
            <div className="bg-white rounded-[18px] border-2 border-[#006c40] p-6 flex flex-col flex-1 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#006c40]/10 text-[#006c40] px-3 py-1 rounded-full text-xs font-bold">MVP 2024</span>
                <span className="material-symbols-outlined text-[#006c40]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#bdcabe]/40">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAzQ83a2YLXDsE6PnnnktQByDgR28bcsVHNH5qJ0tViO2G6obplhWHbk-xg43PJyZ7IBuavz_ilD864QRQY1d3UsEK_Ob8WZYZ7HxNhMU2DKEyfuuqW0S8m0NyjrFM8XsvmBrYTLz7wtvH_anSYrXgc2OUE6ejqMSeHu66sEpCEGZP34CjEdqsjP_USzLa8qd9G4Q_CBaojWConHheEQNCjn4y5ncUKzTxMBJCfKa4GACzerM3hLYa6WYcY_eZB89nqig3C12ybeuL" alt="Rohit Sharma" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#191c1e] leading-tight">Rohit Sharma</h4>
                  <p className="text-[#3e4a41] text-xs">Mumbai Titans</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-[#bdcabe]/20 pb-2 text-[14px]">
                  <span className="text-[#3e4a41]">Total Runs</span>
                  <span className="font-bold text-[#006c40] text-lg">648</span>
                </div>
                <div className="flex justify-between items-end border-b border-[#bdcabe]/20 pb-2 text-[14px]">
                  <span className="text-[#3e4a41]">Strike Rate</span>
                  <span className="font-bold text-lg text-[#191c1e]">154.2</span>
                </div>
                <div className="flex justify-between items-end text-[14px]">
                  <span className="text-[#3e4a41]">Matches Played</span>
                  <span className="font-bold text-lg text-[#191c1e]">14</span>
                </div>
              </div>
            </div>

            {/* Honors Card */}
            <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex flex-col gap-4 shadow-sm">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#006c40]">Top Performers</h4>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#3e4a41]">sports_cricket</span>
                <div className="flex-1">
                  <p className="text-xs text-[#3e4a41]">Purple Cap (Wickets)</p>
                  <p className="font-bold text-sm text-[#191c1e]">Jasprit Bumrah (24)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#3e4a41]">rocket_launch</span>
                <div className="flex-1">
                  <p className="text-xs text-[#3e4a41]">Fastest Century</p>
                  <p className="font-bold text-sm text-[#191c1e]">Surya Kumar (42 balls)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Gauges Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full border-4 border-[#006c40]/20 flex items-center justify-center relative">
              <span className="text-[11px] font-bold">78%</span>
            </div>
            <div>
              <p className="text-xs text-[#3e4a41] uppercase font-bold">Win Rate</p>
              <p className="text-sm font-bold text-[#191c1e]">Overall League</p>
            </div>
          </div>
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full border-4 border-red-200 flex items-center justify-center relative">
              <span className="text-[11px] font-bold text-red-600">32%</span>
            </div>
            <div>
              <p className="text-xs text-[#3e4a41] uppercase font-bold">Upset Rate</p>
              <p className="text-sm font-bold text-[#191c1e]">T20 Bracket</p>
            </div>
          </div>
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex items-center gap-4 shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[#006c40]/40">groups_3</span>
            <div>
              <p className="text-xs text-[#3e4a41] uppercase font-bold">Athletes</p>
              <p className="text-sm font-bold text-[#191c1e]">240 Registered</p>
            </div>
          </div>
          <div className="bg-white rounded-[18px] border border-[#bdcabe]/40 p-6 flex items-center gap-4 shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[#006c40]/40">stadium</span>
            <div>
              <p className="text-xs text-[#3e4a41] uppercase font-bold">Venues</p>
              <p className="text-sm font-bold text-[#191c1e]">8 Active Stadia</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto border-t border-white/5 bg-[#191c1e] rounded-[18px]">
        <div className="mb-4 md:mb-0">
          <p className="text-sm font-bold text-white">SmartSportz.in</p>
          <p className="text-[#bdcabe] text-xs">© 2024 ProSeries India Sports Management. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-xs" href="#">Privacy Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-xs" href="#">Terms of Service</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-xs" href="#">Cookie Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-xs" href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};
export default Leaderboard;
