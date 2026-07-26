import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Tab = 'all' | 'upcoming' | 'live' | 'completed';
type ViewMode = 'grid' | 'list';

const cards = [
  {
    id: '1',
    sport: 'Cricket',
    sportIcon: 'sports_cricket',
    location: 'Mumbai, MH',
    name: 'Elite Corporate Smashers T20',
    badge: 'Filling Fast',
    badgeClass: 'bg-[#006c40] text-white',
    entry: '₹5,00,000 Entry',
    closingIn: 'Registration Closes in 2 days',
    prize: '₹1,50,000',
    participants: '14/16 Registered',
    progress: 85,
    isLive: false,
    organizer: 'Sportz Arena',
    initials: 'SA',
    avatarClass: 'bg-[#d5e0f8] text-[#586377]',
    btnLabel: 'Register Now',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAexN7rz_M7avneP_pNRv92BVHTwCLUKFnh1A5MGIHL4ekwPJDoWawAXdyHDRAJXpXH7dg5rL5G7Mz6P3ERoKnGZWWEVz1-TVOqIsqeAatZewc3UlHje02mzVwXIqaaVOFxULOHx8mcUDJ-R1AHv29e87t6XNbzejTENOIYcdIGfpoixXjt0bnRXZ5cyZ71085U0csP3XVf59ILZ54ydwZhs6QtzZMSnK0FiVjtD-ziAhPv5RLe5qVHJMl2NK3K_Cwjtm5Z2-LhaP7n',
  },
  {
    id: '2',
    sport: 'Badminton',
    sportIcon: 'sports_tennis',
    location: 'Bangalore, KA',
    name: 'Shuttle Masters Open 2024',
    badge: 'Registration Open',
    badgeClass: 'bg-[#72db9d] text-[#00391f]',
    entry: '₹1,200 Entry',
    closingIn: 'Registration Closes in 10 days',
    prize: '₹50,000',
    participants: '32/128',
    progress: 25,
    isLive: false,
    organizer: 'Knotty Sports',
    initials: 'KN',
    avatarClass: 'bg-[#0b8852]/20 text-[#006c40]',
    btnLabel: 'Register Now',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9HqDzs5wa8qnyydCxrbd1jTHGcP6HIb4YFbXQMq7mBDy1g6xcy4fTIhn9UGoOCr5eAf_j0rg62hCwLJwI-wWT7pp-qwUsrHx2YHqAaXbVTk1sF1T4RcDB3KDh6-xMQL80Lg3h3mnqdZPJgLV1L3_0ksoG6vJCRm5ujvZkuYexLCw8poomd_UddXpv9HYsVeMT9XMSLQpPGNVcqMzpn471kWvihsyHzb4NxJguNQEI7R4HyiC75I3hs9YjQ11rdEWkUZps2wPnp665',
  },
  {
    id: '3',
    sport: 'Football',
    sportIcon: 'sports_soccer',
    location: 'New Delhi, DL',
    name: 'Capital Futsal League',
    badge: 'Live Now',
    badgeClass: 'bg-[#9e3e44] text-white',
    entry: '',
    closingIn: 'Ongoing: Semifinals Round',
    prize: '₹2,00,000',
    participants: '16/16 (Closed)',
    progress: 100,
    isLive: true,
    organizer: 'Delhi Kickers',
    initials: 'DL',
    avatarClass: 'bg-[#ffdad9] text-[#9e3e44]',
    btnLabel: 'View Stats',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwLBpcXnuqp8KPsRhVvEd2Gb72mseLQufkPaHMZxM2CZwTbE5RpGbmdnCZJd8eMMUiXZwo1zr66_PCwV-hskt_jNX2rluWa6u7S0eY3Dsy3anG22UmRby4mWyJBmeaw8mieuggVYIq6Xx1UgyEGgbUrcTA7-O4__W-p1UVlfW3RIw49CfipWZHwp_Nsx9iVpDJuurTwDJeCA1Ag4EymMjbgExO4Vswxkx2zQCe1dI0Nl1_28rtELS8GKB_xiKZZO3bvQ0_fDfCLk5z',
  },
];

export const TournamentListingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('All Sports');
  const [location, setLocation] = useState('Location');
  const navigate = useNavigate();

  const handleTabClick = (tab: Tab) => {
    if (tab === 'upcoming') {
      navigate('/upcoming-tournaments');
      return;
    }
    if (tab === 'live') {
      navigate('/live-matches');
      return;
    }
    setActiveTab(tab);
  };

  const filteredCards = cards.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase()) ||
      c.sport.toLowerCase().includes(search.toLowerCase());
    const matchSport = sport === 'All Sports' || c.sport === sport;
    const matchLoc = location === 'Location' || c.location.startsWith(location);
    return matchSearch && matchSport && matchLoc;
  });

  const tabClass = (tab: Tab) =>
    `pb-2 border-b-2 text-[14px] font-semibold whitespace-nowrap cursor-pointer transition-colors ${
      activeTab === tab
        ? 'border-[#006c40] text-[#006c40]'
        : 'border-transparent text-[#3e4a41] hover:text-[#006c40]'
    }`;

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen">
      {/* ── Hero ─────────────────────────── */}
      <section className="bg-[#081C3A] py-14 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#006c40,_transparent)]" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-[42px] md:text-[52px] font-black text-white mb-4 leading-tight">
            Find Your Next Tournament
          </h1>
          <p className="text-[18px] text-white/70 max-w-2xl">
            Discover and compete in premier sporting events across India. From local leagues to national championships, manage your athletic journey with precision.
          </p>
        </div>
      </section>

      {/* ── Sticky Control Bar ────────── */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 space-y-4">
          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="flex-grow min-w-[260px] relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7a70] text-[20px]">search</span>
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-[#f2f4f6] border border-[#e2e8f0] rounded-xl focus:ring-2 focus:ring-[#006c40]/20 focus:border-[#006c40] transition-all text-[14px] outline-none"
                placeholder="Search tournaments, sports, or cities..."
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Sport */}
            <select
              className="bg-[#f2f4f6] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-[14px] text-[#3e4a41] outline-none focus:ring-2 focus:ring-[#006c40]/20"
              value={sport}
              onChange={e => setSport(e.target.value)}
            >
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Badminton</option>
              <option>Football</option>
              <option>Basketball</option>
            </select>

            {/* Location */}
            <select
              className="bg-[#f2f4f6] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-[14px] text-[#3e4a41] outline-none focus:ring-2 focus:ring-[#006c40]/20"
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option>Location</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>New Delhi</option>
              <option>Hyderabad</option>
            </select>

            {/* View Toggle */}
            <div className="flex bg-[#f2f4f6] p-1 rounded-xl border border-[#e2e8f0]">
              <button
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow text-[#006c40]' : 'text-[#6e7a70] hover:text-[#006c40]'}`}
                onClick={() => setViewMode('grid')}
                title="Grid view"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </button>
              <button
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow text-[#006c40]' : 'text-[#6e7a70] hover:text-[#006c40]'}`}
                onClick={() => setViewMode('list')}
                title="List view"
              >
                <span className="material-symbols-outlined text-[20px]">list</span>
              </button>
            </div>
          </div>

          {/* Tabs Row */}
          <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-3">
            <div className="flex space-x-6 overflow-x-auto">
              <button className={tabClass('all')} onClick={() => handleTabClick('all')}>All Events</button>
              <button className={tabClass('upcoming')} onClick={() => handleTabClick('upcoming')}>Upcoming</button>
              <button className={tabClass('live')} onClick={() => handleTabClick('live')}>Live Now</button>
              <button className={tabClass('completed')} onClick={() => handleTabClick('completed')}>Completed</button>
            </div>
            <button className="flex items-center gap-2 text-[#006c40] font-semibold text-[14px] hover:bg-[#006c40]/8 px-4 py-2 rounded-lg transition-all">
              <span className="material-symbols-outlined">tune</span>
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Content Grid ──────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">
        {filteredCards.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-[80px] text-[#bdcabe] mb-6">sports_kabaddi</span>
            <h3 className="text-[24px] font-bold text-[#0b1c30] mb-2">No Tournaments Found</h3>
            <p className="text-[#3e4a41] max-w-sm mx-auto mb-8">
              We couldn't find any events matching your current filters. Try adjusting your search or sport selection.
            </p>
            <button
              className="px-8 py-3 bg-[#081C3A] text-white font-bold rounded-xl active:scale-95 transition-transform"
              onClick={() => { setSearch(''); setSport('All Sports'); setLocation('Location'); }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col gap-4'
          }>
            {filteredCards.map(card => (
              <div
                key={card.id}
                className={`bg-white border border-[#e2e8f0] rounded-[18px] overflow-hidden flex hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex-row' : 'flex-col'
                } ${card.isLive ? 'opacity-90' : ''}`}
              >
                {/* Card Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-52'}`}>
                  <img className="w-full h-full object-cover" src={card.img} alt={card.name} />
                  <div className="absolute top-3 left-3">
                    <span className={`${card.badgeClass} px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider`}>
                      {card.badge}
                    </span>
                  </div>
                  {card.entry && (
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-[#0b1c30] font-bold text-sm">{card.entry}</span>
                    </div>
                  )}
                  {card.isLive && (
                    <div className="absolute inset-0 bg-[#081C3A]/40 flex items-center justify-center">
                      <span className="text-white font-bold bg-red-600 px-4 py-1 rounded-lg animate-pulse text-sm">
                        MATCH IN PROGRESS
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#006c40] font-semibold text-[13px] flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">{card.sportIcon}</span>
                      {card.sport}
                    </span>
                    <span className="text-[#3e4a41] text-[13px] flex items-center gap-1">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      {card.location}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-bold text-[#0b1c30] mb-4">{card.name}</h3>

                  <div className="space-y-2 mb-5 text-[14px] text-[#3e4a41]">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined ${card.isLive ? 'text-red-500' : 'text-[#006c40]'}`}>
                        {card.isLive ? 'live_tv' : 'schedule'}
                      </span>
                      <span>{card.closingIn}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#006c40]">emoji_events</span>
                      <span>{card.isLive ? `Grand Prize: ${card.prize}` : `Prize Pool: ${card.prize}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#006c40]">groups</span>
                      <span>{card.isLive ? `Teams: ${card.participants}` : `Teams: ${card.participants}`}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#eceef0] rounded-full h-2 mb-5">
                    <div
                      className={`${card.isLive ? 'bg-[#9e3e44]' : 'bg-[#006c40]'} h-2 rounded-full transition-all`}
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full ${card.avatarClass} flex items-center justify-center font-bold text-xs`}>
                        {card.initials}
                      </div>
                      <span className="text-[13px] font-medium text-[#3e4a41]">{card.organizer}</span>
                    </div>
                    {card.isLive ? (
                      <Link
                        to="/live-matches"
                        className="bg-[#ffdad9] text-[#9e3e44] px-5 py-2 rounded-xl font-bold text-[14px] hover:bg-[#9e3e44] hover:text-white transition-all"
                      >
                        {card.btnLabel}
                      </Link>
                    ) : (
                      <Link
                        to="/register"
                        className="bg-[#d5e0f8] text-[#586377] px-5 py-2 rounded-xl font-bold text-[14px] hover:bg-[#006c40] hover:text-white transition-all"
                      >
                        {card.btnLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#6e7a70] hover:bg-[#f2f4f6] transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[1,2,3].map(n => (
            <button
              key={n}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                n === 1 ? 'bg-[#006c40] text-white' : 'border border-[#e2e8f0] text-[#3e4a41] hover:bg-[#f2f4f6]'
              }`}
            >
              {n}
            </button>
          ))}
          <span className="px-2 text-[#6e7a70]">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#3e4a41] hover:bg-[#f2f4f6] transition-colors font-bold">
            10
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e2e8f0] text-[#6e7a70] hover:bg-[#f2f4f6] transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* ── Footer ─────────────────────── */}
      <footer className="bg-[#081C3A] text-white/80 rounded-t-2xl overflow-hidden mt-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="text-[22px] font-black text-white mb-4">SmartSportz.in</div>
            <p className="text-sm opacity-70 leading-relaxed">
              India's premier digital sports management ecosystem, empowering athletes and organizers through technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-[14px]">
              {['About Us','Contact','Blogs','Support'].map(l => (
                <li key={l}><a className="opacity-70 hover:opacity-100 hover:text-[#72db9d] transition-colors" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-[14px]">
              {['Privacy Policy','Terms of Service','Tournament Guidelines','Careers'].map(l => (
                <li key={l}><a className="opacity-70 hover:opacity-100 hover:text-[#72db9d] transition-colors" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm opacity-70 mb-4">Stay updated with the latest tournaments.</p>
            <div className="flex flex-col gap-2">
              <input
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#72db9d] outline-none placeholder:text-white/40"
                placeholder="Your email address"
                type="email"
              />
              <button className="bg-[#006c40] text-white py-2 rounded-lg font-bold hover:bg-[#0b8852] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 px-10 text-center">
          <p className="text-sm opacity-50">© 2024 SmartSportz.in. All rights reserved. Premium Sports Management Excellence.</p>
        </div>
      </footer>
    </div>
  );
};
export default TournamentListingPage;
