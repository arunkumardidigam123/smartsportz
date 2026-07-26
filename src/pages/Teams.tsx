import React, { useState } from 'react';

const initialTeams = [
  {
    name: 'Mumbai Mavericks',
    rank: '#01',
    sport: 'Cricket',
    region: 'Mumbai',
    status: 'Active • Premier Division',
    statusColor: '#006c40',
    squadSize: 18,
    winRate: '82%',
    winArrow: '↑',
    captain: 'Arjun Singh',
    captainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1zwqlQ-U4y0WmLJ69ZLlzLvY-y-vtIAXegqrFuWyioxKX0T6iV739YJe5kxHQt7C9KL_JcaWuWd8BMcp0F8F8beeK7Ma6tEUuFrJ9QA5eitxHgt60IBzP7hE_Ud_bw_2S9ZnTf1nNesq7Sl49N3O21WwQDl_qw7HDWPpFZVLteqZH208emEXmiiwm43alXkQYRF6gukftTuJHqiRfZbyBIWUdqdCW53XcDVw5wub5UQy-f0lNEOGiGIjB5_zfzusTeJ8qINit5jgx',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkorq4dyFl5RWVu4szkRCk-7UC2Z_x2juEsQMaUBRteJ_5IBtXcX_igCytwoeYe8wcy-lArICTqGsyQfzSjcRtPnXHARIA65kqjjoZL3wv9hoBu0UvFZk0Wc7HWelfmuzQdMHVGNSrpHYnIFIek5MzZ9t-GC4MFAMsBNRW0cpmSr2eX3Wvb85gJCP9Wn_PoS1iIiJk7vbqt3b_OmlFzcmsAbsbybESEZwyUa4hvhdAfQFv-LnBxRQV8-B1OKTE_Cx2q8ml72NmkUEe',
    wins: 156,
    nextMatch: 'Delhi Dynamos',
    nextMatchDate: '24 Oct'
  },
  {
    name: 'Bangalore Blaze',
    rank: '#04',
    sport: 'Cricket',
    region: 'Bangalore',
    status: 'Training • Regional North',
    statusColor: '#575e70',
    squadSize: 22,
    winRate: '68%',
    winArrow: '→',
    captain: 'Vikram K.',
    captainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIZZYQrB0f_bwe9hLLx5yl175UQ6efAbcgmAsw3tS1HgSWRj50hDj0BIBS7GjMHxjxrIxZXmeWE0uAUP7a37kJRis4lVEuYd3k5iQ76mn4DitzXLm-JhgY942m34fxPB9zKGjM4Dkqt6wyO6H-kL5l8UCMEjXc_TPiDG_T5p0Z-PieV059sxibUMRtzuUw0DKRB6hDuegy8yLecnf4SIWZZXPLc-9RT0VPf4misFtppLDLc-fb1UJRRZA8HCTN2mmNPUa81NJBYvoL',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1SIoW84XQz56DKSCyrqpCM4jxjLhAXQGLwZhPpyNkjqmGCgtN9BKb0e4rfErAwYiCrVbNLz9rkrMRAy0JRt6rZY9eG9hI82F6gOkWs2f7FyY2tmDf7zT4Kddu9gxX_LDSYQysOvztsNJwcs0ZQ6gwfNyiFQIWGnftIO-0sNBuG5b_3ncoHHAeEvx_6HjRrURxUCLoUv0Sd-NK40fWTTFFrG1ZiKcNNJvF-i7fa5tksBBWW4t-wWoUjeu8qxffZWyilcLWRR8LizOE',
    wins: 92,
    nextMatch: 'Kolkata Knights',
    nextMatchDate: '27 Oct'
  },
  {
    name: 'Chennai Chargers',
    rank: '#12',
    sport: 'Football',
    region: 'Delhi',
    status: 'Active • Southern Circuit',
    statusColor: '#006c40',
    squadSize: 15,
    winRate: '54%',
    winArrow: '↓',
    captain: 'Sanya Mirza',
    captainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMaToZL0wzWl8k1smv5rVR72mrmRKNjVUXJqICNh_XPAUzWfoHehp2G56nMTN7BCaFARpSGeS0f3mrGipYIGsKl9Ecu6W9-tG2ehuXH9kVxv6dHc7BgjPe9klsn71QDsGJavM9xI4KDG_2A95_LndYqOAgHu9-dRXiERH5pqU4_FShXTqYrMBcd2-plVNqYXBKE69YMN5-WHDacqULBIGZX7gjl8X9TOSw0Gaq0W_UFoM1yI2glVTbn2fyPA-QExhjIGF7splBdSwt',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxkqWisaLN0Gr7JdSs7TFYMTEkOrE7w5ZcYzJpbdVyXUIS96xIu7bQ6nEVB4v2lGraZS585oevEIJy3F3bg5wdqqCSipqY93SigZ15uSTHCkPuCPiAGfxQf9xPL0Qi2vSy8Kzj2j9bUHdMQcdrHYAeWUXF_3A8ynzjafMA-5bjOBOnEIvANrkTUr7V2ihxvn5PPn5apfyDeM6rGC1h40GorD8YtFjardTYLPhOJozsngLYq2CyNk7Q_OKwEknqZycoJp5fBS93e67M',
    wins: 64,
    nextMatch: 'Punjab Lions',
    nextMatchDate: '02 Nov'
  }
];

export const Teams: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sportFilter, setSportFilter] = useState('All Sports');
  const [regionFilter, setRegionFilter] = useState('Region');

  const filteredTeams = initialTeams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(search.toLowerCase()) || team.captain.toLowerCase().includes(search.toLowerCase());
    const matchesSport = sportFilter === 'All Sports' || team.sport === sportFilter;
    const matchesRegion = regionFilter === 'Region' || team.region === regionFilter;
    return matchesSearch && matchesSport && matchesRegion;
  });

  return (
    <div className="bg-[#101415] text-[#e0e3e5] min-h-screen">
      {/* Hero Header Section */}
      <div className="relative w-full h-72 overflow-hidden bg-[#081C3A]">
        <div className="relative z-10 p-10 h-full flex flex-col justify-end">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#006c40]/25 text-[#72db9d] px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-widest">Global Ecosystem</span>
                <span className="text-[#bdcabe]">•</span>
                <span className="text-[#bdcabe] text-[12px] font-semibold">Active Teams: 242</span>
              </div>
              <h1 className="text-[48px] font-bold text-white mb-2 leading-none">Team Directory</h1>
              <p className="text-[16px] text-[#bdcabe] max-w-2xl">Manage and discover elite sports organizations across our global network of professional leagues.</p>
            </div>
          </div>
        </div>
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-transparent"></div>
      </div>

      <div className="px-10 -mt-12 relative z-20 pb-20 max-w-[1440px] mx-auto">
        {/* Search & Filters */}
        <div className="bg-[#1a1e20] p-6 rounded-xl flex flex-col lg:flex-row gap-6 items-center justify-between mb-8 border border-white/5">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#006c40]">search</span>
            <input
              className="w-full bg-[#101415] border border-[#bdcabe]/20 rounded-lg py-4 pl-12 pr-4 text-[14px] text-white focus:outline-none focus:border-[#006c40] transition-all outline-none"
              placeholder="Search by team name or captain..."
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <select
              className="bg-[#101415] border border-[#bdcabe]/20 rounded-lg py-3 px-6 text-[14px] text-white cursor-pointer hover:border-[#006c40] transition-colors outline-none"
              value={sportFilter}
              onChange={e => setSportFilter(e.target.value)}
            >
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Kabaddi</option>
            </select>
            <select
              className="bg-[#101415] border border-[#bdcabe]/20 rounded-lg py-3 px-6 text-[14px] text-white cursor-pointer hover:border-[#006c40] transition-colors outline-none"
              value={regionFilter}
              onChange={e => setRegionFilter(e.target.value)}
            >
              <option>Region</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
            <button className="bg-[#e0e3e5]/10 p-3 rounded-lg flex items-center justify-center hover:bg-[#006c40]/20 transition-colors">
              <span className="material-symbols-outlined text-[#006c40]">tune</span>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTeams.map((team, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-[12px] p-6 rounded-xl flex flex-col transition-all duration-300 border border-white/10 hover:-translate-y-1 h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#081C3A] to-black p-1">
                  <div className="w-full h-full rounded-lg bg-[#eff4ff] flex items-center justify-center overflow-hidden border border-white/10">
                    <img className="w-16 h-16 object-contain" src={team.logo} alt={team.name} />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[12px] text-[#bdcabe] uppercase tracking-tighter block">Current Rank</span>
                  <div className="text-[32px] font-bold text-[#006c40] mt-1">{team.rank}</div>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-[24px] font-bold text-white mb-1">{team.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#006c40] animate-pulse"></span>
                  <span className="text-[12px] text-[#bdcabe]">{team.status}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-[12px] text-[#bdcabe] mb-1">Squad Size</div>
                  <div className="text-[18px] font-semibold text-white">{team.squadSize} Players</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-[12px] text-[#bdcabe] mb-1">Win Rate</div>
                  <div className="text-[18px] font-semibold text-white">
                    {team.winRate} <span className="text-[#006c40] text-sm ml-1">{team.winArrow}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#006c40]/5 border border-[#006c40]/10 rounded-lg mb-8">
                <div className="w-10 h-10 rounded-full border-2 border-[#006c40]/30 overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src={team.captainImg} alt={team.captain} />
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-semibold text-[#006c40] uppercase">Captain</div>
                  <div className="text-[14px] text-white font-semibold">{team.captain}</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] text-[#bdcabe]">Wins</div>
                  <div className="text-[14px] text-white font-bold">{team.wins}</div>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center justify-between p-3 bg-[#081C3A]/50 rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#ba1a1a]"></div>
                    <span className="text-[12px] text-white">Next: {team.nextMatch}</span>
                  </div>
                  <span className="text-[12px] text-[#bdcabe]">{team.nextMatchDate}</span>
                </div>
                <button
                  onClick={() => alert(`Opening roster details for ${team.name}...`)}
                  className="w-full py-4 bg-[#006c40] text-white text-[13px] font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  View Full Roster
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto border-t border-white/5 bg-[#191c1e] rounded-[18px]">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[24px] font-bold text-white">SmartSportz.in</span>
          <p className="text-[14px] text-[#bdcabe] max-w-md text-center md:text-left">
            The definitive platform for sports management, tournament automation, and elite data analytics for modern leagues.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Privacy Policy</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Terms of Service</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Cookie Policy</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Support</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Contact</a>
          </nav>
          <p className="text-[12px] text-white/50">© 2024 SmartSportz.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Teams;
