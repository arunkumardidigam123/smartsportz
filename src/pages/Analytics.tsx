import React from 'react';

export const Analytics: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-20">
      {/* Dashboard Canvas */}
      <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
        {/* Summary Stats & Bento Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Financial Overview - Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#006c40] to-[#0b8852] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px] active:scale-[0.98] transition-transform">
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[13px] font-semibold opacity-80 uppercase tracking-widest">Total Revenue</p>
                  <h2 className="text-[48px] font-bold mt-2">₹12,84,500</h2>
                </div>
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-[32px]">payments</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <div className="flex gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-[10px] opacity-70">Active Subs</p>
                  <p className="font-bold">428</p>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-[10px] opacity-70">Growth</p>
                  <p className="font-bold text-[#72db9d]">+12.4%</p>
                </div>
              </div>
              <button className="text-sm font-semibold flex items-center gap-1 hover:underline">
                View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            {/* Decorative background graphic */}
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <span className="material-symbols-outlined text-[240px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
          </div>
          {/* Active Tournaments Counter */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 bg-[#006c40]/10 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#006c40]">sports_cricket</span>
              </div>
              <p className="text-[13px] font-semibold text-[#4B5563]">Active Tournaments</p>
              <h3 className="text-[32px] font-bold text-[#081C3A]">14</h3>
            </div>
            <div className="flex items-center gap-2 text-[#006c40] font-semibold text-sm">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>3 launching this week</span>
            </div>
          </div>
          {/* Registered Teams */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#00D4FF]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <p className="text-[13px] font-semibold text-[#4B5563]">Total Teams</p>
              <h3 className="text-[32px] font-bold text-[#081C3A]">156</h3>
            </div>
            <div className="flex items-center gap-2 text-[#4B5563] font-semibold text-sm">
              <span className="material-symbols-outlined text-sm">person_add</span>
              <span>24 new this month</span>
            </div>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tournament Feed - Left (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-[24px] font-bold text-[#081C3A]">Featured Tournaments</h3>
              <button className="text-[#006c40] font-bold text-sm hover:underline">Manage All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tournament Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w" alt="Cricket Match" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#006c40]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">LIVE</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-medium text-[#081C3A] mb-2">IPL Regional Qualifiers 2024</h4>
                  <p className="text-[14px] text-[#4B5563] line-clamp-2 mb-4">Maharashtra State Cricket Association regional qualifiers for the upcoming national season.</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-[#006c40] text-[10px] text-white flex items-center justify-center font-bold">+12</div>
                    </div>
                    <span className="text-xs font-semibold text-[#4B5563]">42/48 Teams</span>
                  </div>
                </div>
              </div>
              {/* Tournament Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD75EOAKyLxEbQbA6VxnPjM9bG2wMBJvicJKHLBaVEGLPNl57kWpUV-i2ne3upZ4-rGMv3NzKSeTqrnIBHxrDGdXQjg9ZJU0Ah1LJN1Vop62oIcO8IzhrejNPapMZKcLdh7CPEkS6-Lx9bmpGRypt_Z_HygWevnEiltxuzA-DcjczvYT87jx11jkYl-3FfCY_OQV-FOAurFeA1SD8iOZLoE_myE3HASmLBc78quik7SA77GdaoIpwjqHgb6sKTyS8NFCrQEd4E9AFWT" alt="Football Match" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#081C3A]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">REGISTRATION OPEN</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[20px] font-medium text-[#081C3A] mb-2">Corporate Soccer League</h4>
                  <p className="text-[14px] text-[#4B5563] line-clamp-2 mb-4">The ultimate networking arena for tech and finance giants in Bengaluru's premium arenas.</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-[#006c40] text-[10px] text-white flex items-center justify-center font-bold">+8</div>
                    </div>
                    <span className="text-xs font-semibold text-[#4B5563]">18/20 Teams</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Task Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
              <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center">
                <h3 className="text-[24px] font-bold text-[#081C3A]">Upcoming Schedule</h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg hover:bg-[#eceef0] transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                </div>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f2f4f6]">
                    <th className="px-6 py-4 text-[13px] font-semibold text-[#4B5563] uppercase">Match ID</th>
                    <th className="px-6 py-4 text-[13px] font-semibold text-[#4B5563] uppercase">Teams</th>
                    <th className="px-6 py-4 text-[13px] font-semibold text-[#4B5563] uppercase">Time</th>
                    <th className="px-6 py-4 text-[13px] font-semibold text-[#4B5563] uppercase">Status</th>
                    <th className="px-6 py-4 text-[13px] font-semibold text-[#4B5563] uppercase">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#081C3A]">#CR-4021</td>
                    <td className="px-6 py-4">
                      <span className="text-[14px] text-[#191c1e]">Titans vs Blazers</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">14:00 IST</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">On Schedule</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">Ground A</td>
                  </tr>
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#081C3A]">#FB-9920</td>
                    <td className="px-6 py-4">
                      <span className="text-[14px] text-[#191c1e]">United FC vs City Stars</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">16:30 IST</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase">Warm up</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">Main Stadium</td>
                  </tr>
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#081C3A]">#CR-4022</td>
                    <td className="px-6 py-4">
                      <span className="text-[14px] text-[#191c1e]">Warriors vs Kings</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">18:00 IST</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-[#4B5563] text-[14px]">Ground B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity & Notifications - Right (Span 1) */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[24px] font-bold text-[#081C3A]">System Logs</h3>
                <span className="material-symbols-outlined text-[#4B5563] text-sm">history</span>
              </div>
              <div className="space-y-6 flex-grow">
                {/* Activity Item 1 */}
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#006c40]/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="material-symbols-outlined text-[#006c40] text-xl">verified</span>
                    </div>
                    <div className="absolute top-10 bottom-[-24px] left-5 w-[1px] bg-[#E2E8F0]"></div>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#081C3A] font-semibold">Payment Verified</p>
                    <p className="text-[12px] text-[#4B5563]">Corporate Soccer League registration fee received from 'Tech Mahindra'.</p>
                    <span className="text-[10px] font-bold text-[#4B5563]/50 uppercase mt-1 inline-block">12 mins ago</span>
                  </div>
                </div>
                {/* Activity Item 2 */}
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="material-symbols-outlined text-[#00D4FF] text-xl">edit_calendar</span>
                    </div>
                    <div className="absolute top-10 bottom-[-24px] left-5 w-[1px] bg-[#E2E8F0]"></div>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#081C3A] font-semibold">Schedule Updated</p>
                    <p className="text-[12px] text-[#4B5563]">IPL Regional Match #CR-4022 moved from 17:30 to 18:00 IST.</p>
                    <span className="text-[10px] font-bold text-[#4B5563]/50 uppercase mt-1 inline-block">1 hour ago</span>
                  </div>
                </div>
                {/* Activity Item 3 */}
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#ba1a1a]/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="material-symbols-outlined text-[#ba1a1a] text-xl">report</span>
                    </div>
                    <div className="absolute top-10 bottom-[-24px] left-5 w-[1px] bg-[#E2E8F0]"></div>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#081C3A] font-semibold">Disciplinary Action</p>
                    <p className="text-[12px] text-[#4B5563]">Red card reported in Match #FB-882. Automated review pending.</p>
                    <span className="text-[10px] font-bold text-[#4B5563]/50 uppercase mt-1 inline-block">3 hours ago</span>
                  </div>
                </div>
                {/* Activity Item 4 */}
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#081C3A]/10 rounded-full flex items-center justify-center relative z-10">
                      <span className="material-symbols-outlined text-[#081C3A] text-xl">person_add</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#081C3A] font-semibold">New Team Registered</p>
                    <p className="text-[12px] text-[#4B5563]">'Mumbai Strikers' completed onboarding for Winter Cup.</p>
                    <span className="text-[10px] font-bold text-[#4B5563]/50 uppercase mt-1 inline-block">5 hours ago</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full py-3 bg-[#eceef0] text-[#081C3A] font-semibold rounded-xl hover:bg-[#e6e8ea] transition-colors">
                View All Activity
              </button>
            </div>
            {/* Mini CTA Card */}
            <div className="bg-[#081C3A] rounded-2xl p-6 text-white relative overflow-hidden">
              <h4 className="text-[20px] font-medium mb-2 relative z-10">Need Custom Reports?</h4>
              <p className="text-[12px] opacity-70 mb-4 relative z-10">Our enterprise analytics engine can generate deep-dive performance metrics for your sponsors.</p>
              <button className="bg-[#006c40] hover:bg-[#0b8852] px-4 py-2 rounded-lg text-sm font-bold transition-all relative z-10">
                Upgrade Plan
              </button>
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-[100px]">rocket_launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
