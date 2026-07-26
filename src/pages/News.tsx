import React, { useState } from 'react';

const posts = [
  {
    category: 'Football',
    title: 'Digital Scouting: Tracking Talent Across 5 Continents',
    desc: 'Our latest integration with global databases allows managers to see real-time player stats from local leagues to international stages.',
    readTime: '5 min read',
    date: 'Oct 22, 2023',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9qwV0D4ZxxKHkidg6uupnakVkRN21e-fKgBbv6EDJYYYTd1hlEqK2lJaq9F4oPgzrbZSQkKPfJ7ssZbW_LDJI5HXf6g_BwlfjXyG8Ht-HKimip8i9TYES863tw7EJpcKi6Rqh9AzcrYUkS4S9cVz3Fj1U6p36Zij7UYVmLB4-7jDpAyqSz8QbRUNjT9tNzdtZ2FgEpV_1HS0Buw0_bVYNEcTOiSQJTIXd4SdNCEg5FjhSy0xHUxzwWrZwCttCd0JyRtXw_DtoQg2'
  },
  {
    category: 'Basketball',
    title: 'Wearable Tech in the NBA: Pre-empting Injuries',
    desc: 'How biometric sensors are providing the data necessary to extend athletic careers by years through smart recovery.',
    readTime: '12 min read',
    date: 'Oct 20, 2023',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-iQNfqb2tHIOcpjAlAIdmaaTAecGdM0VkL1YjL0Y_PQFvqgBuYFyIK6SJ7E7y8H2JTPI9E7D82AHP8a0IRrIcjZZPxvVarCFPc8dTOtpLdyJ1LrLrfcXKUBKjzKrgfODzFT1Y9On2vYtnd90ELSgbI6BvsyoYN0ZRwu-pYTmqEgb1FQnZQGVDA6iFPjMA42ZCxNi_4Q46kLx5b2KvgV-ce_KTiy3dM00-IEQWc_cGu8a6acPAhBbe4cwMiFhoS2plCOSicaLZud23'
  },
  {
    category: 'Tennis',
    title: 'Serve Dynamics: Analyzing the Fastest Shots in History',
    desc: 'A deep dive into the biomechanics of the serve and how new training protocols are breaking speed records.',
    readTime: '7 min read',
    date: 'Oct 18, 2023',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChCUQ_nnmmEE8pELMSejEVFyovtjTejVunAThwYrAMmCJwoXa_o_lggNv2O9K6jQIZp9uCVS_H2iS_IsdcF2RY5A74Ow5GPLyU_2Uqy7A79xoFvCEqpnLBYbr4TuvgqHl_c-eni5-7u6VKxnSx_GClSb2tytOK21tFFT8rQdBDN0WY2Id8uT-HsVNyLjhZomdVQ1FjVDJJRRhpZ-j6ZT6YmwoXxvnNQDc4MB7o7C71-f57SjCA1vxUxolq1q7bsXJc8HTsGadlGEfC'
  },
  {
    category: 'Science',
    title: 'Hyper-Personalized Nutrition for Elite Teams',
    desc: 'Moving beyond standard diets—how DNA testing and real-time blood analysis are tailoring meal plans for performance.',
    readTime: '10 min read',
    date: 'Oct 15, 2023',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA698H9pl-rRaGedD1FIK39V9iccM7Yj5P4E7jCfZsAy3UQBVK_UgAYLjNzK1uw9izrx9k7fiCmvf4GIL0Z3nQB6U6cGQsENAXkOyx6d5pDrBA7299_ThTfVIfSUzuY2mkxWQ1ixpMeALb49TH53EFYwpxGoBqHE-UYQ3F-iZshso1t0lJy5r79cpOIL76ZnGewJbbobO7NszumXvvN8doYn9Hi5INzIIAsjb283uxgBQFnC9i588asf1QbcYXryOvHx3PxocIsDvUo'
  }
];

export const News: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Successfully subscribed with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col justify-between">
      {/* Page Content */}
      <main className="p-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Left Column (70%) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Featured Article */}
          <section>
            <div className="relative group cursor-pointer overflow-hidden rounded-[18px] h-[500px] border border-[#bdcabe]/30 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVDqOMCHV5xM6MnsMPjTCqsf9yUuuBPlyYuoSFlquQwG5c-B-KGSq3JUZroFMOK-KViA-zqfZHaAL6dlK1OOVYTHz-SqH23m-hO9WY0b2pIwDuO_heCbPxxSk6rtX-v1xDZUwZeWju6hq3YXt-X_NKdlCEHgyXNLb_2zoEqYZrTqu6AT4RpI1MkIcUPF57uTT8tndTXydhkUi0WjJE_jU9dwgygzU8ggzFUifJaF71A3Y-A8E38RhfHsMJyQhaK0nNkEFDGuzEZU_k"
                alt="Cricket player batting"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full lg:w-4/5">
                <span className="inline-block px-3 py-1 bg-[#0b8852] text-white rounded-full text-[12px] font-semibold mb-4">Cricket</span>
                <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight mb-4">The Evolution of T20 Analytics: How Data is Reshaping the Modern Game</h2>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-[14px] mb-6">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#72db9d]">person</span> Arjun Mehta
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#72db9d]">calendar_today</span> Oct 24, 2023
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#72db9d]">timer</span> 8 min read
                  </span>
                </div>
                <button
                  onClick={() => alert('Featured post content coming soon!')}
                  className="px-8 py-3 bg-[#0b8852] text-white font-bold rounded-xl hover:bg-[#006c40] transition-colors shadow-lg active:scale-95 text-[14px]"
                >
                  Read More
                </button>
              </div>
            </div>
          </section>

          {/* Recent Posts Grid */}
          <section className="space-y-6">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-[24px] font-bold text-[#191c1e]">Recent Posts</h3>
              <a className="text-[#006c40] font-bold hover:underline" href="#">View all</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-[18px] border border-[#bdcabe]/30 hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.img} alt={post.title} />
                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#006c40]">{post.category}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[18px] font-bold text-[#191c1e] mb-3 group-hover:text-[#006c40] transition-colors">{post.title}</h4>
                      <p className="text-[#3e4a41] text-[14px] mb-4 line-clamp-2">{post.desc}</p>
                    </div>
                    <div className="mt-auto flex justify-between items-center text-[#3e4a41] text-[12px] font-semibold">
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#bdcabe]/40 text-[#3e4a41] hover:text-[#006c40] transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0b8852] text-white font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#bdcabe]/40 text-[#191c1e] hover:border-[#006c40]/50 transition-colors">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#bdcabe]/40 text-[#191c1e] hover:border-[#006c40]/50 transition-colors">3</button>
              <span className="text-[#3e4a41] px-2">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#bdcabe]/40 text-[#191c1e] hover:border-[#006c40]/50 transition-colors">12</button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#bdcabe]/40 text-[#3e4a41] hover:text-[#006c40] transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Right Column (Sidebar 30%) */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Trending Now */}
          <div className="bg-white p-6 rounded-[18px] border border-[#bdcabe]/40 shadow-sm">
            <h3 className="text-[18px] font-bold text-[#191c1e] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006c40]">trending_up</span> Trending Now
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 text-[24px] font-black text-[#006c40]/20 group-hover:text-[#006c40]/40 transition-colors leading-none">01</div>
                <div className="flex-1">
                  <h5 className="text-[14px] font-bold text-[#191c1e] group-hover:text-[#006c40] transition-colors leading-tight mb-1">Champions League: New Format Explained for 2024</h5>
                  <p className="text-[10px] text-[#3e4a41] uppercase font-bold tracking-wider">Football • 2.4k reads</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 text-[24px] font-black text-[#006c40]/20 group-hover:text-[#006c40]/40 transition-colors leading-none">02</div>
                <div className="flex-1">
                  <h5 className="text-[14px] font-bold text-[#191c1e] group-hover:text-[#006c40] transition-colors leading-tight mb-1">The Rise of Esports in Professional Training Camps</h5>
                  <p className="text-[10px] text-[#3e4a41] uppercase font-bold tracking-wider">Tech • 1.9k reads</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="flex-shrink-0 text-[24px] font-black text-[#006c40]/20 group-hover:text-[#006c40]/40 transition-colors leading-none">03</div>
                <div className="flex-1">
                  <h5 className="text-[14px] font-bold text-[#191c1e] group-hover:text-[#006c40] transition-colors leading-tight mb-1">Cricket World Cup: Top 5 Data Trends to Watch</h5>
                  <p className="text-[10px] text-[#3e4a41] uppercase font-bold tracking-wider">Cricket • 1.5k reads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-[18px] border border-[#bdcabe]/40 shadow-sm">
            <h3 className="text-[18px] font-bold text-[#191c1e] mb-6">Categories</h3>
            <div className="space-y-1">
              <a className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-[#eceef0] transition-colors group text-[14px]" href="#">
                <span className="text-[#3e4a41] group-hover:text-[#006c40] transition-colors">Football</span>
                <span className="font-semibold text-[#3e4a41] bg-[#eceef0] px-2 py-0.5 rounded text-[10px]">42</span>
              </a>
              <a className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-[#eceef0] transition-colors group text-[14px]" href="#">
                <span className="text-[#3e4a41] group-hover:text-[#006c40] transition-colors">Cricket</span>
                <span className="font-semibold text-[#3e4a41] bg-[#eceef0] px-2 py-0.5 rounded text-[10px]">38</span>
              </a>
              <a className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-[#eceef0] transition-colors group text-[14px]" href="#">
                <span className="text-[#3e4a41] group-hover:text-[#006c40] transition-colors">Basketball</span>
                <span className="font-semibold text-[#3e4a41] bg-[#eceef0] px-2 py-0.5 rounded text-[10px]">29</span>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <form onSubmit={handleSubscribe} className="bg-white p-6 rounded-[18px] border-2 border-[#006c40]/20 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#006c40]/10 blur-3xl group-hover:bg-[#006c40]/20 transition-all"></div>
            <h3 className="text-[18px] font-bold text-[#191c1e] mb-2 relative z-10">Get the Insider Feed</h3>
            <p className="text-[#3e4a41] text-[14px] mb-6 relative z-10">Premium analysis and sports tech news delivered weekly to your inbox.</p>
            <div className="space-y-4 relative z-10">
              <input
                className="w-full bg-[#eceef0] border border-[#bdcabe]/40 rounded-xl px-4 py-3 text-[#191c1e] focus:outline-none focus:border-[#006c40] text-[14px]"
                placeholder="Your work email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button className="w-full py-3 bg-[#0b8852] text-white font-bold rounded-xl hover:bg-[#006c40] transition-all shadow-lg active:scale-95 text-[14px]">Subscribe</button>
            </div>
          </form>

          {/* Social Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-[18px] border border-[#bdcabe]/40 text-center shadow-sm">
              <div className="text-[#006c40] text-[24px] font-bold">120K</div>
              <div className="text-[#3e4a41] text-[10px] uppercase font-bold">Followers</div>
            </div>
            <div className="bg-white p-4 rounded-[18px] border border-[#bdcabe]/40 text-center shadow-sm">
              <div className="text-[#006c40] text-[24px] font-bold">1.5M</div>
              <div className="text-[#3e4a41] text-[10px] uppercase font-bold">Monthly Viewers</div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-10 border-t border-[#bdcabe]/20 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[20px] text-[#006c40] font-bold">SmartSportz.in</span>
            <span className="text-[#3e4a41] text-[14px]">© 2023 Elite Media.</span>
          </div>
          <div className="flex gap-6">
            <a className="text-[#3e4a41] hover:text-[#006c40] transition-colors text-xs" href="#">Privacy Policy</a>
            <a className="text-[#3e4a41] hover:text-[#006c40] transition-colors text-xs" href="#">Terms of Service</a>
            <a className="text-[#3e4a41] hover:text-[#006c40] transition-colors text-xs" href="#">Advertise</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default News;
