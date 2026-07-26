import React from 'react';
import { Link } from 'react-router-dom';

const sports = [
  { name: 'Football',    icon: 'sports_soccer' },
  { name: 'Cricket',     icon: 'sports_cricket' },
  { name: 'Basketball',  icon: 'sports_basketball' },
  { name: 'Badminton',   icon: 'sports_tennis' },
  { name: 'Volleyball',  icon: 'sports_volleyball' },
  { name: 'Hockey',      icon: 'sports_hockey' },
  { name: 'Tennis',      icon: 'sports_tennis' },
];

const featuredTournaments = [
  {
    id: '1',
    name: 'National Collegiate Cup 2024',
    sport: 'Football',
    status: 'REGISTRATION_OPEN',
    teams: 24, maxTeams: 32,
    startDate: 'Aug 20, 2024',
    location: 'New Delhi',
    gradient: 'from-[#006c40] to-[#0b8852]',
  },
  {
    id: '2',
    name: 'Corporate Premier League',
    sport: 'Cricket',
    status: 'LIVE',
    teams: 16, maxTeams: 16,
    startDate: 'Jul 15, 2024',
    location: 'Mumbai',
    gradient: 'from-[#081C3A] to-[#0d2a52]',
  },
  {
    id: '3',
    name: 'All India Open Badminton',
    sport: 'Badminton',
    status: 'UPCOMING',
    teams: 8, maxTeams: 64,
    startDate: 'Sep 5, 2024',
    location: 'Bangalore',
    gradient: 'from-[#00522f] to-[#006c40]',
  },
];

const features = [
  { icon: 'leaderboard',      title: 'Live Real-Time Scores',       desc: 'Instant score updates for cricket, football, and 15+ other sports.' },
  { icon: 'how_to_reg',       title: 'Online Registration',          desc: 'Streamlined digital onboarding for teams, players, and officials.' },
  { icon: 'payments',         title: 'Seamless Payments',            desc: 'Integrated Razorpay and UPI payment gateway with automated invoicing.' },
  { icon: 'manage_accounts',  title: 'Player Management',            desc: 'Build and manage detailed player profiles with performance history.' },
  { icon: 'analytics',        title: 'Deep Analytics',               desc: 'Comprehensive data visualization for organizers, coaches, and fans.' },
  { icon: 'auto_awesome',     title: 'Tournament Automations',       desc: 'Auto-generate fixtures, update brackets, and send notifications.' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',  role: 'Tournament Director, State Football Assoc.',
    text: 'SmartSportz made organizing our state-level cricket tournament incredibly easy. The automated fixture generation and live score updates kept everyone engaged like never before.',
    rating: 5,
  },
  {
    name: 'Priya Venkat',  role: 'Player, National Badminton Circuit',
    text: 'As a player, being able to see my stats and upcoming match schedule on a single dashboard is a game changer. The professional feel of the platform is truly top-notch.',
    rating: 5,
  },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const map: Record<string, string> = {
    LIVE:              'bg-red-500/90 text-white',
    REGISTRATION_OPEN: 'bg-[#006c40]/90 text-white',
    UPCOMING:          'bg-[#575e70]/80 text-white',
  };
  const label: Record<string, string> = {
    LIVE:              'LIVE',
    REGISTRATION_OPEN: 'REGISTRATION OPEN',
    UPCOMING:          'UPCOMING',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${map[status]}`}>
      {label[status]}
    </span>
  );
};

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb]">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#081C3A]/92 via-[#081C3A]/65 to-transparent z-10" />
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVTXetmIHCyTB42wZsqkjW_sjJwIPW-DLAjnUQ_kNrAgGSUdrU7G_MNNLLgbu-9GUMiq_fJO6iNS0ONjfDowFkgB53en0RPjIYQnPAYfbyeRAPCG6YkdpyhTAnOSqORiJfwFpRbrnPBr3lpMEl1eq9jwvnCBP0hzJQ83CX39ezx29Jemg2r9bFBvRDr-LGfRJUrq1npM5ot-uTTVyiRmmRYF5JQSxixcpwosrRKgunUT_wbMZbyh-5hzJsqAzTZc0s1NxPbpIZaEby"
            alt="SmartSportz Hero — Indian sports stadium"
          />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-7 max-w-2xl">
            <span className="inline-block py-1.5 px-4 bg-[#8ef8b7]/15 border border-[#8ef8b7]/25 rounded-full text-[#8ef8b7] text-[12px] font-semibold uppercase tracking-wider">
              India's Leading Sports Tech
            </span>
            <h1 className="text-white font-black text-[58px] leading-[1.08] tracking-tight">
              India's Smart Tournament{' '}
              <span className="text-[#72db9d]">Management Platform</span>
            </h1>
            <p className="text-white/75 text-[18px] leading-relaxed max-w-xl">
              Discover elite tournaments, register your team with ease, manage
              multi-sport events seamlessly, and track every point with real-time
              live scores.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/tournaments"
                className="px-8 py-3.5 bg-[#0b8852] text-white rounded-xl font-bold text-[15px] hover:bg-[#006c40] hover:shadow-lg hover:shadow-[#006c40]/25 transition-all active:scale-95"
              >
                Explore Tournaments
              </Link>
              <Link
                to="/tournaments/create"
                className="px-8 py-3.5 border-2 border-white/30 text-white rounded-xl font-bold text-[15px] hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95"
              >
                Register Tournament
              </Link>
            </div>
            {/* Stats row */}
            <div className="flex gap-8 pt-4">
              {[
                { val: '1,200+', label: 'Tournaments' },
                { val: '50,000+', label: 'Players' },
                { val: '15+', label: 'Sports' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[26px] font-black text-[#72db9d]">{s.val}</p>
                  <p className="text-white/55 text-[12px] font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero floating cards (desktop) */}
          <div className="hidden lg:flex flex-col gap-5 items-end relative">
            <div className="glass-light p-6 rounded-3xl w-80 shadow-2xl animate-float border border-white/30">
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center gap-2 text-red-500 font-bold text-[11px] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 live-pulse" />
                  Live Match
                </span>
                <span className="text-[#081C3A]/55 text-[11px] font-semibold">T20 Mumbai Cup</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold shadow">MI</div>
                    <span className="font-bold text-[#081C3A] text-[14px]">Mumbai Ind</span>
                  </div>
                  <span className="font-black text-[#081C3A]">164/4 (18.2)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] text-white font-bold shadow">RCB</div>
                    <span className="font-bold text-[#081C3A] text-[14px]">Royal Chall</span>
                  </div>
                  <span className="font-black text-[#081C3A]">Yet to Bat</span>
                </div>
              </div>
            </div>
            <div className="glass-light p-5 rounded-3xl w-72 shadow-2xl mr-16 border border-white/30" style={{ animation: 'float 8s ease-in-out infinite reverse' }}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="material-symbols-outlined text-[#006c40] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
                <span className="font-bold text-[#081C3A] text-[13px]">New Registration</span>
              </div>
              <p className="text-[#081C3A]/70 text-[12px] leading-relaxed mb-4">
                Under-19 State Football Championship registrations are now open for all clubs.
              </p>
              <Link to="/tournaments" className="block w-full py-2 bg-[#081C3A] text-white rounded-lg text-[12px] font-bold text-center hover:bg-[#006c40] transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Discover Your Sport ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-bold text-[#081C3A] mb-3">Discover Your Sport</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto text-[15px]">
              From professional championships to local club matches, we support over 15+ sports disciplines across India.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                to={`/sports?category=${sport.name.toLowerCase()}`}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#f7f9fb] hover:bg-[#006c40]/8 border border-transparent hover:border-[#006c40]/20 transition-all duration-200 group cursor-pointer active:scale-95"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#006c40] transition-colors duration-200">
                  <span
                    className="material-symbols-outlined text-[26px] text-[#006c40] group-hover:text-white transition-colors duration-200"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {sport.icon}
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-[#111827] group-hover:text-[#006c40] transition-colors text-center">
                  {sport.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Tournaments ─────────────────────────── */}
      <section className="py-20 bg-[#f7f9fb]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-[32px] font-bold text-[#081C3A]">Featured Tournaments</h2>
              <p className="text-[#4B5563] mt-1 text-[14px]">Register your team and compete at the highest level</p>
            </div>
            <Link to="/tournaments" className="flex items-center gap-1.5 text-[#006c40] font-semibold text-[14px] hover:underline">
              View All
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredTournaments.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`h-44 bg-gradient-to-br ${t.gradient} relative flex items-center justify-center`}>
                  <span
                    className="material-symbols-outlined text-white/20 text-[100px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    emoji_events
                  </span>
                  <div className="absolute top-4 left-4">
                    <StatusBadge status={t.status} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[17px] text-[#081C3A] mb-1.5">{t.name}</h3>
                  <div className="flex items-center gap-4 text-[#4B5563] text-[12px] mb-4">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {t.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {t.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-[#4B5563] mb-1">Teams Registered</p>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 bg-[#eceef0] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#006c40] rounded-full"
                            style={{ width: `${(t.teams / t.maxTeams) * 100}%` }}
                          />
                        </div>
                        <span className="text-[12px] font-semibold text-[#081C3A]">{t.teams}/{t.maxTeams}</span>
                      </div>
                    </div>
                    <Link
                      to={`/tournaments/${t.id}`}
                      className="px-4 py-2 bg-[#081C3A] text-white rounded-xl text-[12px] font-semibold hover:bg-[#006c40] transition-colors active:scale-95"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-bold text-[#081C3A] mb-3">Powerful Features for Modern Sports</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto text-[15px]">
              Everything you need to manage professional sports events and tournaments on a single dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((f) => (
              <div key={f.title} className="p-7 rounded-2xl bg-[#f7f9fb] border border-[#E2E8F0] hover:border-[#006c40]/30 hover:shadow-md transition-all duration-200 group">
                <div className="w-13 h-13 rounded-xl bg-[#006c40]/10 flex items-center justify-center mb-5 group-hover:bg-[#006c40] transition-colors duration-200">
                  <span className="material-symbols-outlined text-[#006c40] group-hover:text-white text-[24px] transition-colors duration-200" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {f.icon}
                  </span>
                </div>
                <h3 className="font-bold text-[16px] text-[#081C3A] mb-2">{f.title}</h3>
                <p className="text-[#4B5563] text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-20 bg-[#f7f9fb]">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-14">
            <h2 className="text-[32px] font-bold text-[#081C3A] mb-3">Trusted by India's Sports Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-[#4B5563] text-[14px] leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#006c40] to-[#0b8852] flex items-center justify-center text-white font-bold text-[14px]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-[#081C3A] text-[13px]">{t.name}</p>
                    <p className="text-[#4B5563] text-[11px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#081C3A] to-[#0d2a52]">
        <div className="max-w-[1440px] mx-auto px-12 text-center">
          <h2 className="text-[40px] font-black text-white mb-4">Ready to elevate your sports game?</h2>
          <p className="text-white/65 text-[16px] mb-10 max-w-xl mx-auto">
            Join over 1,200+ organizers and 50,000+ players across India on the most advanced sports management platform.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/register" className="px-8 py-3.5 bg-[#0b8852] text-white rounded-xl font-bold text-[15px] hover:bg-[#006c40] transition-all active:scale-95">
              Get Started for Free
            </Link>
            <Link to="/support" className="px-8 py-3.5 border-2 border-white/25 text-white rounded-xl font-bold text-[15px] hover:bg-white/10 transition-all active:scale-95">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="bg-[#081C3A] border-t border-white/8 py-14">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[22px] font-black text-[#72db9d] mb-3">SmartSportz.in</p>
            <p className="text-white/45 text-[13px] leading-relaxed max-w-xs">
              India's ultimate digital platform for sports tournament management and live sports tracking.
            </p>
          </div>
          {[
            { heading: 'Platform', links: ['Tournaments', 'Live Scores', 'Registration', 'Analytics'] },
            { heading: 'Resources', links: ['Blog', 'Tournament Guidelines', 'Support Center', 'Careers'] },
            { heading: 'Legal', links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'] },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-white/80 font-semibold text-[13px] mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/40 text-[13px] hover:text-[#72db9d] transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1440px] mx-auto px-12 mt-10 pt-6 border-t border-white/8 flex justify-between items-center">
          <p className="text-white/30 text-[12px]">© 2024 SmartSportz.in. All rights reserved.</p>
          <p className="text-white/30 text-[12px]">Made with ❤️ in India</p>
        </div>
      </footer>
    </div>
  );
};
