import React from 'react';

export const Sponsors: React.FC = () => {
  return (
    <div className="bg-[#081C3A] text-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006c40]/10 border border-[#006c40]/20 text-[#72db9d] mb-6">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-[12px] font-semibold uppercase tracking-widest">Ecosystem Partners</span>
          </div>
          <h1 className="text-[48px] font-bold text-white mb-6 leading-tight">Our Partners in <br/><span className="text-[#72db9d]">Excellence</span></h1>
          <p className="text-[18px] text-[#bdcabe] max-w-2xl">
            SmartSportz is fueled by a network of visionary organizations dedicated to the advancement of professional athletics. Our sponsors provide the infrastructure and resources necessary to scout, train, and celebrate the next generation of global champions.
          </p>
        </div>
      </section>

      {/* Gold Tier */}
      <section className="px-10 py-8">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[#006c40] rounded-full"></div>
            <h2 className="text-[32px] font-bold text-white">Gold Partners</h2>
          </div>
          <span className="text-[12px] font-semibold text-[#72db9d] tracking-[0.2em] uppercase">Enterprise Tier</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gold Sponsor 1 */}
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-8 rounded-xl hover:-translate-y-1 transition-transform group">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-xl bg-[#0B0F1A] p-4 flex items-center justify-center border border-white/5 flex-shrink-0">
                <img className="w-full h-full object-contain filter group-hover:brightness-125 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jb_SOANySNUXH0sA5EZ5WTVd39eSsm6Pfoj5R3yHs2N3K85thBO5-wilSS5eCILybXdZ_Svx0uQrnmcDJbjxS3JdIHqxswkIqV9y_ZVHbbK0LKL8hBk66ku08fXdQ_oq4s3dS6PaaC-1OsUV-5rhg12Y13ehaqo4KSTD9aeppSGwNhlUBQ30qrWNwHFh6sGu2AEMiEoAj2aWyYC1ZPVf3m6VxsHySFyXwl0tkhzE43ZDSpZDCIehtWtk7kSNlGyoriA_Js1Jw688" alt="Vertex Analytics" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[20px] font-medium text-white">Vertex Analytics</h3>
                  <span className="px-2 py-0.5 rounded bg-[#006c40]/20 text-[#72db9d] text-[10px] uppercase font-bold">Tech</span>
                </div>
                <p className="text-[14px] text-[#bdcabe] mb-6">
                  The global leader in real-time biometric tracking and predictive performance modeling. Vertex provides the core data engine powering our athlete health dashboards.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-white/40 uppercase">Industry</span>
                    <span className="text-[14px] text-[#72db9d] font-semibold">Biotech AI</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-white/40 uppercase">Partner Since</span>
                    <span className="text-[14px] text-white font-semibold">2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gold Sponsor 2 */}
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-8 rounded-xl hover:-translate-y-1 transition-transform group">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-xl bg-[#0B0F1A] p-4 flex items-center justify-center border border-white/5 flex-shrink-0">
                <img className="w-full h-full object-contain filter group-hover:brightness-125 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK-xdzSGAHKoXEw0tpqPwuX6U7x7BLLPgUcpYpZ7ymbI3fT0oiqxcV34dlRhG7Lm9r2tS_enxST0ZzL2M6QA3rYAS8WZgte77D49G3__cYqFEI_DtjgeDrFVSl3YGT645_FmDDFg3f6K-dHe8AG2AoLSg8hdAufACHzgb9tbIe0Ke67pEwvtHglWLP4RK8WCCD7E6Ya0_zbeelYkQHo2CpZWKXr0V4QbGqA4vYtAY8CM7qXtljtRtwM_Ew5K2Ccf2zGj4RcirYKhqU" alt="Nexus Performance" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[20px] font-medium text-white">Nexus Performance</h3>
                  <span className="px-2 py-0.5 rounded bg-[#006c40]/20 text-[#72db9d] text-[10px] uppercase font-bold">Apparel</span>
                </div>
                <p className="text-[14px] text-[#bdcabe] mb-6">
                  Crafting high-performance compression wear integrated with active cooling technology. Nexus is the official outfitter of all tournament finalists.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-white/40 uppercase">Industry</span>
                    <span className="text-[14px] text-[#72db9d] font-semibold">Textile Tech</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-white/40 uppercase">Partner Since</span>
                    <span className="text-[14px] text-white font-semibold">2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silver Tier */}
      <section className="px-10 py-8">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[#575e70] rounded-full"></div>
            <h2 className="text-[32px] font-bold text-white">Silver Partners</h2>
          </div>
          <span className="text-[12px] font-semibold text-[#575e70] tracking-[0.2em] uppercase">Growth Tier</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-6 rounded-xl hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
            <div className="h-16 w-full mb-4 flex items-center justify-center">
              <img className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJMD8fzpZKeAGCdDXX5mVQ6p0SS7nrPfcxAxkHWhUsiI2dIP4TUEv6Hoh1lGu67B0fjwsyh8rcheZ5qQgPLpmaWsE0FAGSD2ZjP_4F4BA6axyLvgFo9lvDLsYpFwPJGg255TsPIR510riTNuGSHym1iM71vAjc82tzYS-fdfSvZ-Vs_3kkOTy2CsIcorkDCMtH-CXvJARQkDr44F3mbkzXkXUIDjCl8tZxl2sDjxDK9-Il9xmnUiXhytrRhLTdpnHwbN3e2emQAyot" alt="Aura Chrono" />
            </div>
            <h4 className="text-white text-[16px] font-semibold">Aura Chrono</h4>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-6 rounded-xl hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
            <div className="h-16 w-full mb-4 flex items-center justify-center">
              <img className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZi3OGmbl-5qCm_3TuL4NZ90IrLlhsJVlFPd8GKabiVJ53RWZ6wyMcrG0UUlOx4l3ogJ_uepHJK-DFuNDZmK7VlK9FNJOpqrcC2sG03UnlVgmCbVCRwC3o2QMxCz0nkYjnsObw6GVr2LnSyUUJw7Escsv1_0UI_YNyAxnqZd7gPKMJkauVWQeNKqeNNmXSJwZoLMyX-Zo4hUqc2rakrpsybS4hfWqNfpsPuMa23YOj6aPEGHhKLKk9EilYHBnL9vBa7kmqdPCurMsr" alt="Volt Hydration" />
            </div>
            <h4 className="text-white text-[16px] font-semibold">Volt Hydration</h4>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-6 rounded-xl hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
            <div className="h-16 w-full mb-4 flex items-center justify-center">
              <img className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9NcLWWnFl8WZB38Te3YFajA5cbOJrJjKnN7Py9i9gmqEUMi6q0KgZD5Ui3keTiAw5QnBTKqBnaVdCtNOmpHRgI9GjNEi0Q4OZmr9oRfit8FpJb8044rP7tcN3nD97rjoR2wZhia5LqXtntxfPD6_Lcd7ZLl7R_nicq5k5Yij5Kb5ohIAuqAGQTV7AiHiIg5rNbxiduRpZ_XZRWFhEU4TgTbKvbkuUOzt-cVcukqxuUYKNGZaCVIrvgwn_qpQKwl9xIT1DukZUvJgN" alt="SwiftPath" />
            </div>
            <h4 className="text-white text-[16px] font-semibold">SwiftPath</h4>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-6 rounded-xl hover:-translate-y-1 transition-transform flex flex-col items-center text-center">
            <div className="h-16 w-full mb-4 flex items-center justify-center">
              <img className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpX-8-vXbxBkX98ajvZDFHaj0HIU-cBqJXCyu1p4B4PgAUiBThcwN_HfkRpcbawc2tUlrtHJSvmSyxB2s85qeC1MlSJUh2ESvq8qVLRGWOTchu-N9ZQ8OYT_AjSYZw7C6-Mq-K22qaRpsMzR2KGyXPz33BDfb_DLXmaiYGjs0-SIuL6grfw9DHvmqaf1CtmC-1Oyx4_5lPPKBajHRwCDE5QmueK6q9AFSRljTqEXen-hTx1yFr73g88gVGAYaf09AcvImA09J9C1YB" alt="NeoVault" />
            </div>
            <h4 className="text-white text-[16px] font-semibold">NeoVault</h4>
          </div>
        </div>
      </section>

      {/* Bronze Tier */}
      <section className="px-10 py-8">
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-amber-600/50 rounded-full"></div>
            <h2 className="text-[32px] font-bold text-white">Bronze Partners</h2>
          </div>
          <span className="text-[12px] font-semibold text-amber-500/50 tracking-[0.2em] uppercase">Community Tier</span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5w4hSTS9PUDnzKV0YSUc0LfWoh0x1EebP71XaMmcBr1QGskX6uUoqxICjbmjp_KH1pDfNpVZ9p-qGG0KFASWYB4eTqDg0cvNIq3fnrO3hOTlCtm02EkQjEr098lSAXNypRlENiS0LZgMJxqXP62YqiAJgbcm6iG7LcHXXxLUN-SThUmmRI8RVJlTGwrzANMs_6wrzWpXY-02qoFJUBWaoLZlk7yR_aLTmMb7XQVpnH-Ptfbmjrpw4DH26aI4G7Vy1i9pV5THU1-qo" alt="Partner 1" />
          </div>
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjbY0d2rWx0qvHr0qt5pLr1TxDE8FkvGc_osuFrMrCiIKO91dr6G7QW-pvGxybcrfDxyxmAWag_7UAbiky-eUNBDV0Bxj8BgWzE39_hsZqZtqqw_K7bTZCYDxNVM5r9rwbwtwy8DqD9U8r5TQgNQUUGwnSFOERHleGkj4wgt-l3ga24o-iBGHKBByaYG_TL4ys_EwaLoZh5Togrq1xm8KXElUjabkHyKnV3OOOPoFanSSpXK5mJI31gUDbC0zvaM57H1Er6n4YNko" alt="Partner 2" />
          </div>
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAquSJ5wydx7CxgpylvWTZKy3-UGB35nnnqdBZEnhRxnBGYujjP0SQ0p98nnR0o89HAF2hakwaD2AXEu-ajYcckfN1AoDvIWt09OQj6Ap2qwfqhKHIbomBm07vOB9mwtLNUajCIhGKb4FdMGUEro1JuczehTVng5Y23wmSmpz0Y_XB-b3Lj2p2WdCyfFRuKXK1vcrZ3H9G6VG99thvyrknVP-JuyefYiAkb9pXGmTXtskn02TH-iyASjABpVUuau0jP3tquXh6DV2hY" alt="Partner 3" />
          </div>
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkbXS6AGMSvlbIBs2GU9zUoDt-9Gk44MzaHevX3IK_A0HmlBTSSUaKmJv0zYSgaHbn501xIWRS1lQHCxP5jsKvK6wJeERp0Ol2f1vhQmMWCtggX9r8GkLZ4FZlnQNIMyaAJNIYkJKnEvkpq7-lVZkj8FRYR8TBx_ZHmu4B7HSr_rx27W8jpUK5OATESWlkkERUCEV-1dPyhJSJrftv-XAspYw0XsoCTms0xO1GQZpwrg9tZ6EZeatNAlb2LATgBwz--EY5_80-pDfH" alt="Partner 4" />
          </div>
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW4c_7vmizo3Mj11H6zb6Dl3SNS8_wsAVRJtvesFVtgLUA6wJqa2x-1yyqJq1v6Ttks0coyMuftZ4ppiA0CeexIHeSY1_EoHSJQRr_YYlCNq0UmWlOGG421GCxVM_tYVPf5XhECxXoqkePQssOtH9MbHhysO7ulSR5ZMvtrqWJv1-15ECtcLt4bqcioUzqV63MzZV-AgkBkFuUKVW3MurgUllDhhUjfSALl7EUF4AEyP7xLahVFNjq21n34Yu85N7QcCVn1aQlCPa8" alt="Partner 5" />
          </div>
          <div className="h-20 bg-[#0B0F1A]/40 border border-white/5 rounded-lg flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="h-full object-contain opacity-40 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVF3sR29ouyjpodtb2BQq_iCD9k99yHQaP9u8cgD83vZ4peddoeyKLw9mskn_AtXFpTYDCzTJ0uglOh01w9sahM6UPbI_vnuVmN7Vxs_-BkAnZ9gibT5eWoOZwkIImpn_Kjja7j1XICTGZsLGNTFaVXFMuqJoh0rh_PArol_IDefjtgJ-yVuoLZlPcS_yB95B6nwR5NRds5_tsas-m1Zih7fp_K6HaVjqZXS7v2Nx8mEzXokDfYmWzH6dE3mQsax3BLGxRNoUmy0OG" alt="Partner 6" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-10 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#006c40] p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b8852] to-[#081C3A] opacity-90 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-[48px] font-bold text-white mb-8">Join the Elite Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-[4px] border border-white/10">
                <span className="material-symbols-outlined text-4xl mb-4 text-[#72db9d]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <h4 className="text-[20px] font-medium text-white mb-2">Brand Visibility</h4>
                <p className="text-[14px] text-white/70">Reach millions of engaged fans and professional decision-makers across our digital platforms.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-[4px] border border-white/10">
                <span className="material-symbols-outlined text-4xl mb-4 text-[#72db9d]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <h4 className="text-[20px] font-medium text-white mb-2">Talent Access</h4>
                <p className="text-[14px] text-white/70">Exclusive networking opportunities with emerging athletes and veteran sports management teams.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-[4px] border border-white/10">
                <span className="material-symbols-outlined text-4xl mb-4 text-[#72db9d]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <h4 className="text-[20px] font-medium text-white mb-2">Global Reach</h4>
                <p className="text-[14px] text-white/70">Multi-territory exposure through our decentralized tournament broadcasting infrastructure.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-4 bg-white text-[#006c40] font-bold text-lg rounded-xl hover:bg-opacity-90 transition-all shadow-2xl">
                Become a Sponsor
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto border-t border-white/5 bg-[#191c1e] rounded-[18px]">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-[24px] font-bold text-white mb-2">SmartSportz<span className="text-[#72db9d]">.in</span></div>
          <p className="text-[16px] text-[#bdcabe] max-w-sm">Driving the future of professional sport analytics and management worldwide.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Privacy Policy</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Terms of Service</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Support</a>
            <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Contact</a>
          </nav>
          <p className="text-[12px] text-white/50">© 2024 SmartSportz.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Sponsors;
