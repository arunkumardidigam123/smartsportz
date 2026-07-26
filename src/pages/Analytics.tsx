import React from 'react';

const statsCards = [
  { icon: 'payments',    label: 'Total Revenue',    value: '₹12,84,500', sub: '+12.4% growth',   color: 'financial-gradient text-white' },
  { icon: 'sports_cricket', label: 'Active Tournaments', value: '14',     sub: '3 launching this week', color: 'bg-white border border-[#E2E8F0]' },
  { icon: 'groups',      label: 'Total Teams',      value: '156',         sub: '24 new this month', color: 'bg-white border border-[#E2E8F0]' },
  { icon: 'person',      label: 'Registered Players', value: '2,847',    sub: '187 new this week', color: 'bg-white border border-[#E2E8F0]' },
];

const recentActivity = [
  { icon: 'verified',    color: 'text-[#006c40]', title: 'Payment Verified',    desc: 'Corporate Soccer League registration fee received from Tech Mahindra.', time: '12 MINS AGO' },
  { icon: 'edit_calendar', color: 'text-blue-500',  title: 'Schedule Updated',    desc: 'IPL Regional Match #CR-4022 moved from 17:30 to 18:00 IST.',         time: '1 HOUR AGO' },
  { icon: 'error',       color: 'text-red-500',   title: 'Disciplinary Action', desc: 'Red card reported in Match #FB-882. Automated review pending.',      time: '3 HOURS AGO' },
  { icon: 'person_add',  color: 'text-[#006c40]', title: 'New Team Registered', desc: "'Mumbai Strikers' completed onboarding for Winter Cup.",             time: '5 HOURS AGO' },
];

const schedule = [
  { id: '#CR-4021', teams: 'Titans vs Blazers',    time: '14:00 IST', status: 'ON SCHEDULE', statusColor: 'bg-[#006c40]/10 text-[#006c40]', venue: 'Ground A' },
  { id: '#FB-9920', teams: 'United FC vs City Stars', time: '16:30 IST', status: 'WARM UP',     statusColor: 'bg-yellow-100 text-yellow-700',  venue: 'Main Stadium' },
  { id: '#CR-4022', teams: 'Warriors vs Kings',    time: '18:00 IST', status: 'PENDING',    statusColor: 'bg-gray-100 text-gray-600',      venue: 'Ground B' },
];

export const Analytics: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">

      {/* ── Stats Grid ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Financial Overview */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#006c40] to-[#0b8852] rounded-2xl p-7 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[200px]">
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest opacity-75">Total Revenue</p>
                <h2 className="text-[42px] font-black mt-2 leading-none">₹12,84,500</h2>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-[28px]">payments</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-end justify-between mt-4">
            <div className="flex gap-3">
              <div className="bg-white/10 px-3.5 py-2 rounded-lg border border-white/10">
                <p className="text-[10px] opacity-65">Active Subs</p>
                <p className="font-bold text-[15px]">428</p>
              </div>
              <div className="bg-white/10 px-3.5 py-2 rounded-lg border border-white/10">
                <p className="text-[10px] opacity-65">Growth</p>
                <p className="font-bold text-[15px] text-[#72db9d]">+12.4%</p>
              </div>
            </div>
            <button className="text-[13px] font-semibold flex items-center gap-1 hover:underline">
              View Report
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
          {/* Decorative */}
          <div className="absolute -right-8 -bottom-8 opacity-10">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
          </div>
        </div>

        {statsCards.slice(1).map((card) => (
          <div key={card.label} className={`${card.color} rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all`}>
            <div>
              <div className="w-11 h-11 bg-[#006c40]/10 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#006c40] text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
              </div>
              <p className="text-[12px] font-semibold text-[#4B5563]">{card.label}</p>
              <h3 className="text-[30px] font-black text-[#081C3A] leading-tight">{card.value}</h3>
            </div>
            <p className="flex items-center gap-1 text-[#006c40] text-[12px] font-semibold mt-3">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      {/* ── Main Content Split ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Featured Tournaments Feed */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-[20px] font-bold text-[#081C3A]">Featured Tournaments</h3>
            <button className="text-[#006c40] font-bold text-[13px] hover:underline">Manage All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: 'IPL Regional Qualifiers 2024', sport: 'Cricket', status: 'LIVE', teams: '42/48', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w' },
              { name: 'Corporate Soccer League',       sport: 'Football', status: 'REGISTRATION_OPEN', teams: '18/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1UH2pJy4k5KlGnGHo1eoGrpTtHSwIUl0D-pE6TgH0L3KHSz1iM5XPK5NWZOVQCp9LjOAj7tnTYbz9L6KFjdgCLrBfP4KJj8pjz7c3R7PKDkV_SV87lAEyNcRuPvmM03nWqhp_j9AaVfxfYqDXi-pnKQdDXpXD2SqajNABGBaVqcbqbm_CZ_0mcZ2GTCi1D5qfR5R_2v7RFV4x4hDpKsj9f5lF8SFGXqgFxnWLd6HtD' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all duration-200 group">
                <div className="h-44 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={t.img} alt={t.name} />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.status === 'LIVE' ? 'bg-[#006c40]/90 text-white' : 'bg-[#0b8852]/90 text-white'}`}>
                      {t.status === 'LIVE' ? 'LIVE' : 'REGISTRATION OPEN'}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[15px] text-[#081C3A] mb-1">{t.name}</h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[12px] text-[#4B5563]">{t.teams} Teams</span>
                    <button className="px-3 py-1.5 bg-[#081C3A] text-white rounded-lg text-[11px] font-semibold hover:bg-[#006c40] transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Schedule */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-[#E2E8F0]">
              <h3 className="font-bold text-[17px] text-[#081C3A]">Upcoming Schedule</h3>
              <span className="material-symbols-outlined text-[#6e7a70] text-[20px]">filter_list</span>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              <div className="grid grid-cols-5 px-5 py-2.5 text-[11px] font-bold text-[#4B5563] uppercase tracking-wider">
                <span>Match ID</span>
                <span className="col-span-2">Teams</span>
                <span>Time</span>
                <span>Status</span>
              </div>
              {schedule.map((row) => (
                <div key={row.id} className="grid grid-cols-5 px-5 py-4 items-center hover:bg-[#f7f9fb] transition-colors">
                  <span className="font-mono text-[12px] font-bold text-[#006c40]">{row.id}</span>
                  <span className="col-span-2 text-[13px] font-medium text-[#081C3A]">{row.teams}</span>
                  <span className="text-[12px] text-[#4B5563]">{row.time}</span>
                  <span className={`inline-flex px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${row.statusColor}`}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Activity Log */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden h-fit">
          <div className="flex justify-between items-center p-5 border-b border-[#E2E8F0]">
            <h3 className="font-bold text-[17px] text-[#081C3A]">System Logs</h3>
            <span className="material-symbols-outlined text-[#6e7a70] text-[20px]">history</span>
          </div>
          <div className="divide-y divide-[#E2E8F0]">
            {recentActivity.map((item) => (
              <div key={item.title} className="p-5 flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f7f9fb] flex items-center justify-center flex-shrink-0 border border-[#E2E8F0]">
                  <span className={`material-symbols-outlined text-[18px] ${item.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[13px] text-[#081C3A]">{item.title}</p>
                  <p className="text-[12px] text-[#4B5563] leading-relaxed mt-0.5">{item.desc}</p>
                  <p className="text-[10px] text-[#6e7a70] font-bold mt-1 tracking-wider">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-[#E2E8F0]">
            <button className="w-full py-2.5 rounded-xl bg-[#f7f9fb] border border-[#E2E8F0] text-[13px] font-semibold text-[#081C3A] hover:bg-[#006c40] hover:text-white hover:border-[#006c40] transition-all duration-200">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
