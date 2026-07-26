import React from 'react';

const images = [
  { id: '1', title: 'IPL Finals 2024',             sport: 'Cricket',    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w' },
  { id: '2', title: 'Football Championship',        sport: 'Football',   img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1UH2pJy4k5KlGnGHo1eoGrpTtHSwIUl0D-pE6TgH0L3KHSz1iM5XPK5NWZOVQCp9LjOAj7tnTYbz9L6KFjdgCLrBfP4KJj8pjz7c3R7PKDkV_SV87lAEyNcRuPvmM03nWqhp_j9AaVfxfYqDXi-pnKQdDXpXD2SqajNABGBaVqcbqbm_CZ_0mcZ2GTCi1D5qfR5R_2v7RFV4x4hDpKsj9f5lF8SFGXqgFxnWLd6HtD' },
  { id: '3', title: 'Cricket World Cup Qualifiers', sport: 'Cricket',    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfESm7w1tDg2h8UZyAx8LuW6_YMqYynqjLTVpJ3y5e_fE4nQTD3g7K2ug5fz_M0WDfvbq__p7e0IMVOw73I4banAeR4p6TrovX188vZ1xKhHla7QOw4tMxPTqtCpvkJrNyPrJdisDOLXvXMCtUpEaEtNXiFMCY6rZO6BKFHWUIUVTnMzrgHcSrIWPmF7QpBq6d-MYqnzX7yyeeAWwLDAfFj0ELBIunZAk6sfJegBUuTIrCxRJvw-F8CtbZYRSVjW1mNzCActaYzv1w' },
  { id: '4', title: 'National Basketball Meet',     sport: 'Basketball', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1UH2pJy4k5KlGnGHo1eoGrpTtHSwIUl0D-pE6TgH0L3KHSz1iM5XPK5NWZOVQCp9LjOAj7tnTYbz9L6KFjdgCLrBfP4KJj8pjz7c3R7PKDkV_SV87lAEyNcRuPvmM03nWqhp_j9AaVfxfYqDXi-pnKQdDXpXD2SqajNABGBaVqcbqbm_CZ_0mcZ2GTCi1D5qfR5R_2v7RFV4x4hDpKsj9f5lF8SFGXqgFxnWLd6HtD' },
];

export const Gallery: React.FC = () => (
  <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
    <div>
      <h1 className="text-[28px] font-black text-[#081C3A]">Media Gallery</h1>
      <p className="text-[#4B5563] text-[14px] mt-1">Premium sports photography from our top tournaments</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
      {images.map((img) => (
        <div key={img.id} className="group relative rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]">
          <img src={img.img} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div>
              <span className="text-[11px] font-bold text-[#72db9d] uppercase tracking-wider">{img.sport}</span>
              <p className="text-white font-bold text-[15px] mt-1">{img.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
