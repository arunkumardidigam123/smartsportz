import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: '1', category: 'Cricket',  title: 'IPL 2024: Top 5 Performers You Need to Watch This Season',        excerpt: 'As the IPL season heats up, certain players are standing out with extraordinary performances...', date: 'Jul 22, 2024', readTime: '4 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w' },
  { id: '2', category: 'Football', title: 'Rising Stars: India\'s Next Generation of Football Talent',          excerpt: 'The Indian football landscape is witnessing an exciting transformation with young talents emerging...', date: 'Jul 20, 2024', readTime: '5 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1UH2pJy4k5KlGnGHo1eoGrpTtHSwIUl0D-pE6TgH0L3KHSz1iM5XPK5NWZOVQCp9LjOAj7tnTYbz9L6KFjdgCLrBfP4KJj8pjz7c3R7PKDkV_SV87lAEyNcRuPvmM03nWqhp_j9AaVfxfYqDXi-pnKQdDXpXD2SqajNABGBaVqcbqbm_CZ_0mcZ2GTCi1D5qfR5R_2v7RFV4x4hDpKsj9f5lF8SFGXqgFxnWLd6HtD' },
  { id: '3', category: 'Analysis', title: 'How Data Analytics is Transforming Sports Tournament Management',    excerpt: 'Modern sports management has been revolutionized by data analytics and AI-powered insights...', date: 'Jul 18, 2024', readTime: '6 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w' },
];

const catColors: Record<string, string> = {
  Cricket:  'bg-[#006c40]/10 text-[#006c40]',
  Football: 'bg-blue-50 text-blue-600',
  Analysis: 'bg-purple-50 text-purple-600',
};

export const News: React.FC = () => (
  <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
    <div>
      <h1 className="text-[28px] font-black text-[#081C3A]">Sports Insights</h1>
      <p className="text-[#4B5563] text-[14px] mt-1">Latest news, analysis, and stories from the world of sports</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {articles.map((a) => (
        <article key={a.id} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
          <div className="h-48 overflow-hidden">
            <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${catColors[a.category] ?? 'bg-[#f2f4f6] text-[#4B5563]'}`}>{a.category}</span>
              <span className="text-[11px] text-[#6e7a70]">{a.readTime} read</span>
            </div>
            <h2 className="font-bold text-[16px] text-[#081C3A] leading-snug mb-2 group-hover:text-[#006c40] transition-colors">{a.title}</h2>
            <p className="text-[13px] text-[#4B5563] leading-relaxed flex-1 line-clamp-3">{a.excerpt}</p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#E2E8F0]">
              <span className="text-[11px] text-[#6e7a70]">{a.date}</span>
              <Link to={`/news/${a.id}`} className="flex items-center gap-1 text-[#006c40] text-[12px] font-semibold hover:underline">
                Read More
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);
