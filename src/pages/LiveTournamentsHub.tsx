import React from 'react';

interface LiveMatch {
  id: string;
  sport: string;
  league: string;
  category: string;
  stage: string;
  stageColor: string;
  team1: string;
  team2: string;
  score: string;
  time: string;
  location: string;
  teams: number;
  watching: string;
  pool: string;
  progress: number;
  img: string;
}

const liveMatches: LiveMatch[] = [
  {
    id: '1',
    sport: 'Football',
    league: 'I-League Junior',
    category: 'Under-16',
    stage: 'Semi Final',
    stageColor: 'bg-[#d5e0f8] text-[#586377]',
    team1: 'Bengaluru FC',
    team2: 'ATK Mohun Bagan',
    score: '2 - 1',
    time: "76'",
    location: 'Salt Lake Stadium, Kolkata',
    teams: 16,
    watching: '12k',
    pool: '₹5L',
    progress: 76,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR4tL7PyTqnmd7JmvYXEAvIxRpEsEr9TVUHEKj7IyyENAzk6GxrsUkNh7OfVOLZ1G5koXQCv3dbPHOx4o0wogv5V5uUsGXedOpC2MfjvULDfnwdif3kVjUWmrkGwiOdLv1HzhGA5I6VWif4Ont-LIy5N7fEzTxy26OI3vY1HIZhzXFPUA5HBSkrzJ-j13xrPZxS5S45sq9SNydPFopPpJK-PHGUqfiYVEnlvpRoV5ssqZjXQb2skGLe5f5qPnHS6ti3wtgTvFrnC_f',
  },
  {
    id: '2',
    sport: 'Cricket',
    league: 'Corporate T20 Cup',
    category: 'Professional',
    stage: 'League Stage',
    stageColor: 'bg-[#d5e0f8] text-[#586377]',
    team1: 'Reliance Titans',
    team2: 'Infosys Knights',
    score: '182/4 (18.3)',
    time: 'Yet to Bat',
    location: 'Wankhede Stadium, Mumbai',
    teams: 32,
    watching: '25k',
    pool: '₹10L',
    progress: 92,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_bQbNZO3K8574cg-9-iIfGGRyQfPTJp-xTlR7YJLxJgx6Do0c3p5cWtP06-Ldm787qqV03C3Fb19qsV6s2DJQwqWZW6HlSoShgsIzr5o1ZRgOcm1yv3wWqdpdH8lFh6DRK_9zBZWMGTHJb1jJsq09jpqLc8OlQTWLJ2LZZ0dVfA3CduSfCzzPaSjyCoCFnOy7sBko9uPbPjVcY1bCxisn27R4I9a2kohMllRZRlmHNNMZ3ej-sUPGUr7JzMdg_Hp5s3aYz-hs8WDf',
  },
  {
    id: '3',
    sport: 'Basketball',
    league: 'National Pro League',
    category: 'Open Category',
    stage: 'Final',
    stageColor: 'bg-[#ffdad9] text-[#9e3e44]',
    team1: 'Punjab Steelers',
    team2: 'Chennai Heat',
    score: '84 - 79',
    time: 'Q4 (02:45)',
    location: 'Indira Gandhi Indoor, Delhi',
    teams: 12,
    watching: '8k',
    pool: '₹3L',
    progress: 85,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnGL-52RnvnnJFB_1hq78tlKnjUe8Niwis440GdQZQEnr00CjQiEUciIi1k_VZkReoT3nakDHxL4iDbPKXv5W5AIqy-0xc1XJXADTOvjNzSkc-YrzCUmZCcsAy6Hn-aUmwvnAiudWd0kVs6WHXqvdwPRT2Z2SF3MYKj2bJpEkHizFWpRlnzS6cOKNn8Gtz9AATN0oh8lxRNOyd8a4hE3YeliVaksOgWqLsibdSFTnycoQhEg2_eWuRb914btPZc7C2ImG1O_KQhIiB',
  },
  {
    id: '4',
    sport: 'Volleyball',
    league: 'All India Smashers',
    category: "Women's Elite",
    stage: 'League Stage',
    stageColor: 'bg-[#d5e0f8] text-[#586377]',
    team1: 'Kerala Queens',
    team2: 'Mizoram Spikers',
    score: 'Sets 2 - 1',
    time: 'Set 4: 14-12',
    location: 'Gachibowli Stadium, Hyderabad',
    teams: 24,
    watching: '5k',
    pool: '₹1.5L',
    progress: 55,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGK9FuTTAF_XwGPTQgjc5tW5pxOk16pzWm-uOeopuoNGXvX-mx6z3NquU6ipakpLXEsP71m4aGzyx-Yzp83TRUB6w0HnuYymGManwqnRlUUWj7MF4dUd2cIFbfiwW04wP2Jelt5p_z9tVhK08ds7VCaTE_yLFDQUoeJX_BGxy7ATvGLIZbk7Eh0noiD1TxJkU1AfYQf3SHbn6hwotlfOZdWGC0F28CblO5-Y5a7ZFSotXPqZlqS9RO6c1yUrbl7coo6tYsrPbGaxpo',
  },
];

export const LiveTournamentsHub: React.FC = () => {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen pb-20">
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-[40px] md:text-[48px] font-bold text-[#0b1c30]">
              🏆 Live Tournaments
            </h1>
            <p className="text-[18px] text-[#3e4a41]">
              Follow live tournaments happening across India in real time.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-red-50 px-4 py-2 rounded-full border border-red-100 self-start md:self-auto">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-600 font-bold text-[12px] tracking-widest">LIVE NOW</span>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {liveMatches.map(m => (
              <div key={m.id} className="min-w-[320px] md:min-w-[420px] snap-center flex-shrink-0">
                <div className="bg-white rounded-[18px] shadow-md overflow-hidden group/card hover:-translate-y-2 transition-all duration-300 border border-[#bdcabe]/30 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      src={m.img}
                      alt={m.category}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[#006c40] font-bold text-[11px] uppercase tracking-wider mb-1">
                          {m.sport} • {m.league}
                        </p>
                        <h3 className="text-[22px] font-bold text-[#0b1c30]">{m.category}</h3>
                      </div>
                      <span className={`${m.stageColor} px-3 py-1 rounded-full text-[11px] font-semibold`}>
                        {m.stage}
                      </span>
                    </div>

                    {/* Score Board */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center bg-[#eff4ff] p-4 rounded-xl">
                        <div className="text-center flex-1">
                          <p className="font-bold text-[#0b1c30] text-sm">{m.team1}</p>
                        </div>
                        <div className="px-4 text-center">
                          <span className="text-2xl font-bold text-[#006c40]">{m.score}</span>
                          <p className="text-[10px] font-bold text-red-500 animate-pulse">{m.time}</p>
                        </div>
                        <div className="text-center flex-1">
                          <p className="font-bold text-[#0b1c30] text-sm">{m.team2}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[#3e4a41] text-sm">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>{m.location}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {[
                        { label: 'Teams', value: String(m.teams) },
                        { label: 'Watching', value: m.watching },
                        { label: 'Pool', value: m.pool },
                      ].map(stat => (
                        <div key={stat.label} className="bg-[#f8f9ff] p-3 rounded-lg text-center border border-[#bdcabe]/20">
                          <p className="text-[10px] text-[#3e4a41] uppercase font-bold mb-1">{stat.label}</p>
                          <p className={`font-bold ${stat.label === 'Pool' ? 'text-[#006c40]' : 'text-[#0b1c30]'}`}>{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-auto">
                      <div className="w-full bg-[#eceef0] h-1.5 rounded-full mb-6 overflow-hidden">
                        <div className="bg-[#006c40] h-full rounded-full transition-all" style={{ width: `${m.progress}%` }} />
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="bg-[#006c40] hover:bg-[#0b8852] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2">
                          Watch Live
                          <span className="material-symbols-outlined text-sm">play_circle</span>
                        </button>
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg border border-[#bdcabe] hover:bg-[#eff4ff] transition-colors">
                            <span className="material-symbols-outlined text-[#3e4a41] text-lg">share</span>
                          </button>
                          <button className="p-2 rounded-lg border border-[#bdcabe] hover:bg-[#eff4ff] transition-colors">
                            <span className="material-symbols-outlined text-[#3e4a41] text-lg">bookmark</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade hints */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f8f9ff] to-transparent pointer-events-none" />
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-4 border-2 border-[#006c40] text-[#006c40] font-bold rounded-full hover:bg-[#006c40] hover:text-white transition-all duration-300">
            View All Live Tournaments
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LiveTournamentsHub;
