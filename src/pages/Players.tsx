import React from 'react';

export const Players: React.FC = () => {
  return (
    <div className="bg-[#101415] text-[#e0e3e5] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF4IXumQsbyYS7_90udAUGkSveQ1ycLhsH_Pgi1dy3uwlfKO1zxLgIcIA0MsIBQvEJ1pSziKbx-WZaeuWkQnn_jqwapGI_ogTrwD9LZXec9YNKoqtGtM5WVBPGZ8ZUDWYAFuFqMYG2N5Gj0llZMKL5iAOxJrMX9oEgzH2W5cMbCjNrVKw56FORaxYO1bOI4CGDK6DALbZ0w7WA2VOF7iIqt-3goXzdccW1U45-yRldYIJ0xS1MC42LzJG_0jeIEX5Tp0FaSLhKHawA"
            alt="Arjun Singh action shot"
          />
        </div>
        {/* Glass Overlay Info */}
        <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-[#101415] via-transparent to-transparent">
          <div className="w-full max-w-[1440px] mx-auto px-10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="bg-white/10 backdrop-blur-[12px] p-6 rounded-xl flex items-center gap-6 border border-white/20">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-4 border-[#006c40]/50 shadow-2xl flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlE2jRf2_lntTbegBfrliwF1Ubx-cLK8zDTwMIgZg0NUolyD6mVsb0rLEedUodppgbfKN5_1OhvOQAXGf_2rKgEmMRdeshTf9IrjtJQMkF_Kf6pbbiT_7w6t8_OIjXg7ZEPd3VgpunUCD31_TeAoehxRwH5jVF-hwB15hWYN2DeFL_uvYsx8Ij6O6b9BaV3MP92DDDYuDFIM-avw_Y7x3pbmQcYHwu-8wztbxpALk81VVPHKiphWLHQdUcaVZY_lJjt4LxIH7jmwMH"
                  alt="Arjun Singh"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#006c40] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Active Player</span>
                  <span className="material-symbols-outlined text-[#72db9d] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <h2 className="text-[36px] font-bold text-white leading-tight">Arjun Singh</h2>
                <div className="flex items-center gap-4 text-[#bdcabe] text-[14px]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">flag</span>
                    <span>India</span>
                  </div>
                  <div className="h-1 w-1 bg-[#bdcabe] rounded-full"></div>
                  <span>28 Years</span>
                  <div className="h-1 w-1 bg-[#bdcabe] rounded-full"></div>
                  <span>Cricket (Batsman)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 flex-1 md:w-32 p-4 rounded-xl text-center">
                <p className="text-[#bdcabe] text-[12px] font-semibold uppercase">Matches</p>
                <p className="text-[32px] font-bold text-[#72db9d] mt-1">142</p>
              </div>
              <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 flex-1 md:w-32 p-4 rounded-xl text-center">
                <p className="text-[#bdcabe] text-[12px] font-semibold uppercase">Total Runs</p>
                <p className="text-[32px] font-bold text-[#72db9d] mt-1">5.2k</p>
              </div>
              <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 flex-1 md:w-32 p-4 rounded-xl text-center">
                <p className="text-[#bdcabe] text-[12px] font-semibold uppercase">Win Rate</p>
                <p className="text-[32px] font-bold text-[#72db9d] mt-1">68<span className="text-[20px] font-medium">%</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="p-10 grid grid-cols-12 gap-6 max-w-[1440px] mx-auto">
        {/* Performance Trends */}
        <div className="col-span-12 lg:col-span-8 bg-[#191c1e] rounded-xl p-8 border border-[#bdcabe]/10 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-[24px] font-bold text-white">Performance Trend</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-[#006c40] text-white text-xs font-bold rounded-lg">LAST 10 MATCHES</button>
              <button className="px-3 py-1 bg-[#e0e3e5]/20 text-[#e0e3e5] text-xs font-bold rounded-lg">SEASON OVERVIEW</button>
            </div>
          </div>
          <div className="h-64 w-full relative">
            <div className="absolute inset-0 flex items-end gap-4 px-2">
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '60%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '85%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '45%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '95%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-xl opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                  124 RUNS
                </div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '70%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '80%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '30%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '55%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '85%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
              <div className="flex-1 bg-[#006c40]/20 rounded-t-lg relative group/bar" style={{ height: '90%' }}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#006c40] rounded-full group-hover/bar:bg-white transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10">
            <p className="text-[#bdcabe] text-[10px] uppercase font-semibold">T20 Avg</p>
            <p className="text-[32px] font-bold text-white mt-1">42.5</p>
            <div className="mt-2 text-[#72db9d] flex items-center gap-1 text-xs">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+4% vs last yr</span>
            </div>
          </div>
          <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10">
            <p className="text-[#bdcabe] text-[10px] uppercase font-semibold">ODI Best</p>
            <p className="text-[32px] font-bold text-white mt-1">184*</p>
            <p className="mt-2 text-[#bdcabe] text-xs">vs Australia</p>
          </div>
          <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10">
            <p className="text-[#bdcabe] text-[10px] uppercase font-semibold">Strike Rate</p>
            <p className="text-[32px] font-bold text-white mt-1">158.2</p>
            <p className="mt-2 text-[#bdcabe] text-xs">League Avg: 132</p>
          </div>
          <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10">
            <p className="text-[#bdcabe] text-[10px] uppercase font-semibold">Fours/Sixes</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-[32px] font-bold text-white">412</p>
              <p className="text-[#72db9d] text-xs">/ 84</p>
            </div>
            <p className="mt-2 text-[#bdcabe] text-xs">Career Stats</p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="col-span-12 mt-6">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-[24px] font-bold text-white">Achievements</h3>
            <div className="flex-1 h-px bg-[#bdcabe]/10"></div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
            <div className="flex-shrink-0 w-64 bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#006c40]/10 rounded-full flex items-center justify-center text-[#72db9d] border border-[#006c40]/20">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-white">IPL MVP 2023</h4>
                <p className="text-[#bdcabe] text-xs">Most Valuable Player</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-64 bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#006c40]/10 rounded-full flex items-center justify-center text-[#72db9d] border border-[#006c40]/20">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-white">Orange Cap</h4>
                <p className="text-[#bdcabe] text-xs">Highest Run Scorer</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-64 bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#006c40]/10 rounded-full flex items-center justify-center text-[#72db9d] border border-[#006c40]/20">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-white">Centurion</h4>
                <p className="text-[#bdcabe] text-xs">10+ Career 100s</p>
              </div>
            </div>
            <div className="flex-shrink-0 w-64 bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#006c40]/10 rounded-full flex items-center justify-center text-[#72db9d] border border-[#006c40]/20">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-white">Captains Club</h4>
                <p className="text-[#bdcabe] text-xs">U-19 World Cup Cap</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="col-span-12 lg:col-span-8 mt-6">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-[24px] font-bold text-white">Media Gallery</h3>
            <div className="flex-1 h-px bg-[#bdcabe]/10"></div>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsMneuIuHFlO9bwGBc50U2QHwTi5j2EcV16_gglnJBPMHVrT32-pgMPZZrDYa0tU2s5smgBAIsV-7CBAvV4Dv55hkUBGMIXjK0PxfZqADwYxe3VxK17vhjqopXR7YTa65gGTrBJ6bJdNmmjwCU4OixpldjCADNR5iSWUQaG-QzntT_GiOd-HyNQuGNyoBnsv7LAbvfqVaOs4bLpmib_DgDVIzQcLsBnRBZthu2Rs81zNIPqdoYWYgBn1B5eyPL4V6o-fyLmsqiFd2O"
                alt="Morning Drills"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                <p className="text-white text-sm font-bold">Morning Drills - Bangalore Training Academy</p>
              </div>
            </div>
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5LpN-bBkvZur7MgWw6hOUDTLBQR6-rVGRk-tM6KVSvKRL9d3BMO3pGPZ-2c5nsffWEz4whfn2ruvwEsKGhkzeZDfcEwfuzDEsEUH2hREL70m3PpdWj32ZXrAceXktY1ptHInANdpQyMvS9KZgdW-iIlpLH5rROYUrNBTLWozYFPleoVTAp5l2_77eO5rwQ5BA16x6tptZcO8_4jYvCU7UqqUS9Njzw9-ZouV1CAY8Gj9Lwzm9UxRYvPS51au-xjRBXgA4meBZZV_N"
                alt="Diving"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqdRkqMqf5nOek-J6sv87yyC3R-6KUpEBvQDno3CWtPNsz-tKi96hhl00o9nERk1j1XqhO_-Zg9m3yACKM9RtVi82nwoNEYvIcfAue-4qwHgrwL_nxXsLbouCI_UrN5RSV_PguXU_mbIWRzd9fRPl-PYvreXKs4tN-syEFh_Iwnn3HhlT6EqVwIw3Z349bxZqrALQeGGPWok9jc9uCtEm5bWvlV9-RvTWfbFtUaFKXIsQHg7JTeudZls5N9-MNK2JJeGd-lNTb0s1B"
                alt="Cricket gear"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3uJKZJ801mx40b848mjJZY66IvZTx8YKl1TUxc0-gsk5weDOfWQyTQuMwCg0uuyciiOmQ2vMDx0Gp8q-9VALOG0iuszbY0NHQ55OK12B-x3UOW98xXdKp3no_gRgRxK8z2pwCSKXZCMViAq_2oETFujePhm2fhzaRHQUd1aHMCEyV8f5S0on3TV-8oswrL5gb2h9VPw3812BSfOUmUbzpiB8NjfRX4voqDAw_r_c-0sxkteEm5D0_lwbn22ECzz8VpenD7iu1UD_X"
                alt="Signing autographs"
              />
            </div>
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="col-span-12 lg:col-span-4 mt-6">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-[24px] font-bold text-white">Upcoming</h3>
            <div className="flex-1 h-px bg-[#bdcabe]/10"></div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 hover:border-[#006c40] transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#006c40] text-[10px] font-bold uppercase tracking-widest">T20 Championship</p>
                  <p className="text-[#bdcabe] text-xs mt-1">OCT 14, 2024 • 7:30 PM</p>
                </div>
                <span className="material-symbols-outlined text-[#bdcabe] group-hover:text-[#006c40] transition-colors">calendar_add_on</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-[#1d2022] rounded-full flex items-center justify-center border border-[#bdcabe]/30 overflow-hidden">
                    <span className="material-symbols-outlined text-2xl">sports_cricket</span>
                  </div>
                  <p className="text-[10px] font-bold text-white">INDIAN LIONS</p>
                </div>
                <div className="text-[#bdcabe] text-[24px] font-bold">VS</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-[#006c40]/20 rounded-full flex items-center justify-center border border-[#006c40]/40 overflow-hidden">
                    <span className="material-symbols-outlined text-2xl text-[#006c40]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                  </div>
                  <p className="text-[10px] font-bold text-white">CITY KINGS</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-[#006c40] text-[#72db9d] hover:bg-[#006c40] hover:text-white font-bold rounded-lg transition-all text-sm">
                GET TICKETS
              </button>
            </div>
            <div className="bg-[#1d2022] p-6 rounded-xl border border-[#bdcabe]/10 hover:border-[#006c40] transition-colors group opacity-80 hover:opacity-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[#bdcabe] text-[10px] font-bold uppercase tracking-widest">Domestic Series</p>
                  <p className="text-[#bdcabe] text-xs mt-1">OCT 21, 2024 • 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-[#1d2022] rounded-full flex items-center justify-center border border-[#bdcabe]/30">
                    <span className="material-symbols-outlined text-xl">token</span>
                  </div>
                  <p className="text-[10px] font-bold text-white">MUMBAI STRIKE</p>
                </div>
                <div className="text-[#bdcabe] text-sm">VS</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 bg-[#1d2022] rounded-full flex items-center justify-center border border-[#bdcabe]/30">
                    <span className="material-symbols-outlined text-xl">bolt</span>
                  </div>
                  <p className="text-[10px] font-bold text-white">CITY KINGS</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-[#1d2022] text-[#bdcabe] font-bold rounded-lg transition-all text-sm">
                SET ALERT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Players;
