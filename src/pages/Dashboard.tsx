import React from 'react';

const liveMatch = {
  teamA: { name: 'INDIA', abbr: 'IND', score: '142/3', overs: '18.4' },
  teamB: { name: 'AUSTRALIA', abbr: 'AUS', score: 'Yet to Bat', overs: '' },
  crr: '7.61', projected: '210', tournament: 'World Cup Qualifiers',
  venue: 'Narendra Modi Stadium, Ahmedabad',
};

const liveMatches = [
  { id: 1, sport: 'Football', teams: 'Mumbai FC vs Delhi Kings', score: '2 – 1', time: '72\'', status: 'LIVE' },
  { id: 2, sport: 'Basketball', teams: 'Warriors vs Blazers', score: '78 – 74', time: 'Q3', status: 'LIVE' },
  { id: 3, sport: 'Cricket', teams: 'CSK vs MI', score: '178/5 vs 165/8', time: 'Completed', status: 'COMPLETED' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <div className="p-6 space-y-6 max-w-[1440px] mx-auto">

        {/* ── Live Header ─────────────────────────────── */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
              <span className="text-red-400 text-[11px] font-bold uppercase tracking-widest">Live Now</span>
            </div>
            <h1 className="text-[28px] font-black text-white">Live Score Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white/8 border border-white/10 rounded-xl text-[12px] font-medium text-white/70 hover:text-white hover:bg-white/12 transition-all">
              <span className="material-symbols-outlined text-[16px]">filter_list</span>
              Filter
            </button>
          </div>
        </div>

        {/* ── Main Scoreboard ──────────────────────────── */}
        <div className="glass-dark rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Status badge */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-3 bg-red-600/20 text-red-400 px-4 py-1.5 rounded-full border border-red-500/25">
              <span className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest">
                Live Match • {liveMatch.tournament}
              </span>
            </div>
            <div className="text-right">
              <p className="text-white/45 text-[12px] font-medium">{liveMatch.venue}</p>
            </div>
          </div>

          {/* Teams & Score */}
          <div className="flex items-center justify-between">
            {/* Team A */}
            <div className="flex flex-col items-center gap-3 w-1/3">
              <div className="w-20 h-20 rounded-full glass-dark border-2 border-[#006c40]/25 flex items-center justify-center text-2xl font-black text-[#72db9d] shadow-xl">
                {liveMatch.teamA.abbr}
              </div>
              <h3 className="font-black text-[20px] text-white">{liveMatch.teamA.name}</h3>
            </div>

            {/* Score Center */}
            <div className="flex flex-col items-center gap-3 w-1/3 text-center">
              <div>
                <span className="text-[48px] font-black text-[#72db9d] leading-none">{liveMatch.teamA.score}</span>
                <p className="text-white/50 text-[14px] font-medium mt-1">({liveMatch.teamA.overs} Overs)</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <div className="h-px w-12 bg-white/15" />
                <span className="text-white/30 text-[12px] font-bold uppercase">vs</span>
                <div className="h-px w-12 bg-white/15" />
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/8">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">CRR</p>
                  <p className="font-bold text-[#006c40] text-[15px]">{liveMatch.crr}</p>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/8">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Projected</p>
                  <p className="font-bold text-[#00D4FF] text-[15px]">{liveMatch.projected}</p>
                </div>
              </div>
            </div>

            {/* Team B */}
            <div className="flex flex-col items-center gap-3 w-1/3">
              <div className="w-20 h-20 rounded-full glass-dark border-2 border-white/10 flex items-center justify-center text-2xl font-black text-white/60 shadow-xl">
                {liveMatch.teamB.abbr}
              </div>
              <h3 className="font-black text-[20px] text-white">{liveMatch.teamB.name}</h3>
              <span className="text-white/40 text-[14px]">{liveMatch.teamB.score}</span>
            </div>
          </div>
        </div>

        {/* ── Other Live Matches ───────────────────────── */}
        <div>
          <h2 className="text-[18px] font-bold text-white mb-4">Other Live Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {liveMatches.map((m) => (
              <div key={m.id} className="glass-dark rounded-2xl p-5 border border-white/5 hover:border-[#006c40]/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-[#6e7a70] uppercase tracking-wider">{m.sport}</span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${m.status === 'LIVE' ? 'bg-red-500/15 text-red-400 border border-red-500/20' : 'bg-white/8 text-white/40 border border-white/8'}`}>
                    {m.status === 'LIVE' ? (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full live-pulse" />
                        LIVE
                      </span>
                    ) : m.time}
                  </span>
                </div>
                <p className="font-semibold text-[14px] text-white/80 mb-2">{m.teams}</p>
                <p className="text-[18px] font-black text-[#72db9d]">{m.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
