import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    q: 'How do I register my team for an elite tournament?',
    a: 'To register your team, navigate to the "Tournaments" tab in your enterprise dashboard. Select the desired event and click "Register Team." You will need to provide a complete roster, team logo, and athlete credentials. Once submitted, our sports directors will review your application within 24 hours.'
  },
  {
    q: 'When are live scores updated on the public dashboard?',
    a: 'Live scores are updated in real-time with a sub-second latency for enterprise partners. For standard public views, there may be a 30-60 second buffer depending on the venue\'s connectivity. Coaches can monitor raw data feeds directly via the Analytics panel.'
  },
  {
    q: 'What payment methods are accepted for registration fees?',
    a: 'We accept all major credit cards (Visa, Mastercard, AMEX), corporate bank transfers, and digital wallets. For enterprise accounts managing multiple events, we offer monthly consolidated invoicing. All transactions are secured through 256-bit encryption.'
  },
  {
    q: 'How can I update athlete performance metrics post-game?',
    a: 'Post-game metrics can be adjusted by authorized personnel in the "Athletes" section. Select the specific game log and choose "Manual Override." Note that all manual changes are logged in the audit trail for tournament integrity.'
  },
  {
    q: 'Are there specific technical requirements for live streaming integration?',
    a: 'Yes, for seamless live streaming integration, we recommend an RTMP-compatible encoder and a minimum upload speed of 10Mbps. Our API documentation provides detailed endpoints for pushing real-time scoreboard overlays directly to your broadcast software.'
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaq = faqData.filter(
    item => item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-24 px-10 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[150%] bg-[radial-gradient(circle_at_center,_#006c40/10,_transparent_70%)] -z-10 blur-3xl opacity-50"></div>
        <h2 className="text-[48px] font-bold text-[#191c1e] mb-6 max-w-3xl leading-tight">How can we help you today?</h2>
        <div className="relative w-full max-w-2xl group">
          <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[#006c40] text-3xl group-focus-within:scale-110 transition-transform">search</span>
          <input
            className="w-full h-20 bg-[#e6e8ea] border-2 border-[#bdcabe] rounded-[18px] pl-16 pr-8 text-xl text-[#191c1e] focus:ring-4 focus:ring-[#006c40]/20 focus:border-[#006c40] transition-all outline-none shadow-2xl"
            placeholder="Search for questions, categories, or keywords..."
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-[#3e4a41] text-[14px]">
          <span>Popular:</span>
          <a className="text-[#006c40] hover:underline" href="#">Registration Guide</a>
          <a className="text-[#006c40] hover:underline" href="#">Live Score Delay</a>
          <a className="text-[#006c40] hover:underline" href="#">Refund Policy</a>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1440px] mx-auto">
          {/* Category Card 1 */}
          <div className="bg-white/70 backdrop-blur-[12px] border border-white p-8 rounded-[18px] flex flex-col items-center text-center group cursor-pointer hover:bg-[#e0e3e5]/80 transition-all active:scale-95">
            <div className="w-16 h-16 bg-[#006c40]/10 rounded-2xl flex items-center justify-center text-[#006c40] mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">emoji_events</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#191c1e] mb-2">Tournament</h3>
            <p className="text-[#3e4a41] text-sm">Rules, scheduling, and brackets</p>
          </div>
          {/* Category Card 2 */}
          <div className="bg-white/70 backdrop-blur-[12px] border border-white p-8 rounded-[18px] flex flex-col items-center text-center group cursor-pointer hover:bg-[#e0e3e5]/80 transition-all active:scale-95">
            <div className="w-16 h-16 bg-[#575e70]/10 rounded-2xl flex items-center justify-center text-[#575e70] mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">how_to_reg</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#191c1e] mb-2">Registration</h3>
            <p className="text-[#3e4a41] text-sm">Team signups and roster management</p>
          </div>
          {/* Category Card 3 */}
          <div className="bg-white/70 backdrop-blur-[12px] border border-white p-8 rounded-[18px] flex flex-col items-center text-center group cursor-pointer hover:bg-[#e0e3e5]/80 transition-all active:scale-95">
            <div className="w-16 h-16 bg-[#00884f]/10 rounded-2xl flex items-center justify-center text-[#006c3e] mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">payments</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#191c1e] mb-2">Payments</h3>
            <p className="text-[#3e4a41] text-sm">Invoices, refunds, and gateways</p>
          </div>
          {/* Category Card 4 */}
          <div className="bg-white/70 backdrop-blur-[12px] border border-white p-8 rounded-[18px] flex flex-col items-center text-center group cursor-pointer hover:bg-[#e0e3e5]/80 transition-all active:scale-95">
            <div className="w-16 h-16 bg-[#ba1a1a]/10 rounded-2xl flex items-center justify-center text-[#ba1a1a] mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">live_tv</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#191c1e] mb-2">Live Score</h3>
            <p className="text-[#3e4a41] text-sm">Real-time stats and tracking</p>
          </div>
          {/* Category Card 5 */}
          <div className="bg-white/70 backdrop-blur-[12px] border border-white p-8 rounded-[18px] flex flex-col items-center text-center group cursor-pointer hover:bg-[#e0e3e5]/80 transition-all active:scale-95">
            <div className="w-16 h-16 bg-[#e0e3e5]/30 rounded-2xl flex items-center justify-center text-[#191c1e] mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">engineering</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#191c1e] mb-2">Support</h3>
            <p className="text-[#3e4a41] text-sm">API help and technical issues</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-10 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[32px] font-bold text-[#191c1e]">Frequently Asked Questions</h2>
            <button className="text-[#006c40] font-medium flex items-center gap-2 hover:underline">
              View All Questions
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
          <div className="space-y-4">
            {filteredFaq.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white/70 backdrop-blur-[12px] border border-[#E2E8F0] rounded-[18px] px-8 py-6 cursor-pointer group transition-all`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[20px] font-medium text-[#191c1e] group-hover:text-[#006c40] transition-colors">{item.q}</h4>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                  </div>
                  {isOpen && (
                    <div className="pt-4 text-[#3e4a41] text-[16px] leading-relaxed transition-all">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-10 pb-16">
        <div className="max-w-5xl mx-auto rounded-[18px] overflow-hidden relative border border-[#bdcabe] p-10 md:p-16 text-center bg-white/70">
          <div className="absolute inset-0 -z-10 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuD562qsbg6LJ0eS-9bMzi0xz0-YUvKPUfgn97EBWZ8gcrulMcXP04dr6_XULSlvSifZmqtvuFlbYtkkigpMn1WKzGblTrGY7ZpxxBTLJI0jPpAbr_53qfYXqIThsUrKbL5bjeNI6M0oA032K31izw_Ld_eReQvsQDXcM3UfVpGCJLZvL2jIoXOsdRt4UgBDOFc98blRAsgcgAX7XwkV9Dc7FS0REJAWkWmcJV-B1xm0qITWH_eXN_tQFOHy5l49BvrsT2p9gDn0f-2B\')' }}></div>
          <h2 className="text-[32px] font-bold text-[#191c1e] mb-4">Still need help?</h2>
          <p className="text-[#3e4a41] text-[18px] mb-10 max-w-2xl mx-auto">Our elite support team is standing by to help you manage your tournaments and athletes with championship precision.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/support" className="bg-[#006c40] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#006c40]/20">
              <span className="material-symbols-outlined">support_agent</span>
              Contact Support
            </Link>
            <a href="mailto:support@smartsportz.in" className="bg-[#eceef0] border border-[#bdcabe] text-[#191c1e] px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#eceef0]/80 transition-all active:scale-95">
              <span className="material-symbols-outlined">mail</span>
              Email Us
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#bdcabe]/30 pt-12">
            <div>
              <p className="text-[#3e4a41] text-[12px] uppercase tracking-widest mb-1">Average response time</p>
              <p className="text-[#006c40] font-bold text-xl">14 Minutes</p>
            </div>
            <div>
              <p className="text-[#3e4a41] text-[12px] uppercase tracking-widest mb-1">Support availability</p>
              <p className="text-[#191c1e] font-bold text-xl">24 / 7 / 365</p>
            </div>
            <div>
              <p className="text-[#3e4a41] text-[12px] uppercase tracking-widest mb-1">Client Satisfaction</p>
              <p className="text-[#191c1e] font-bold text-xl">99.8%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FAQ;
