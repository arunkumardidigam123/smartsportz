import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

const sportsData = [
  { name: 'Football', icon: 'sports_soccer', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&auto=format&fit=crop', prompt: 'A close-up high-resolution shot of a professional textured football on a damp emerald green grass field.' },
  { name: 'Cricket', icon: 'sports_cricket', img: 'https://images.unsplash.com/photo-1531415080290-bc9b8998063a?q=80&w=400&auto=format&fit=crop', prompt: 'A pristine cricket ball resting on a professional cricket pitch at dusk.' },
  { name: 'Basketball', icon: 'sports_basketball', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=400&auto=format&fit=crop', prompt: 'An orange professional basketball suspended in mid-air against a sleek, modern indoor court background.' },
  { name: 'Hockey', icon: 'sports_hockey', img: 'https://images.unsplash.com/photo-1550256200-a15893fc647f?q=80&w=400&auto=format&fit=crop', prompt: 'A professional hockey puck on a smooth, slightly scratched ice surface.' },
  { name: 'Badminton', icon: 'sports_tennis', img: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2a9?q=80&w=400&auto=format&fit=crop', prompt: 'A premium feathered badminton shuttlecock resting on a professional green indoor court.' },
  { name: 'Volleyball', icon: 'sports_volleyball', img: 'https://images.unsplash.com/photo-1592656094270-b9bdb9453f55?q=80&w=400&auto=format&fit=crop', prompt: 'A yellow and blue professional volleyball on a polished indoor arena floor.' },
  { name: 'Table Tennis', icon: 'sports_tennis', img: 'https://images.unsplash.com/photo-1534158914141-b620ee67b0e4?q=80&w=400&auto=format&fit=crop', prompt: 'A minimalist shot of a white table tennis ball on a deep blue professional table.' },
  { name: 'Tennis', icon: 'sports_tennis', img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&auto=format&fit=crop', prompt: 'A vibrant yellow tennis ball resting against a green hard court surface.' },
  { name: 'Swimming', icon: 'pool', img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=400&auto=format&fit=crop', prompt: 'A pristine Olympic swimming pool with clear turquoise water and distinct lane markers.' },
  { name: 'Archery', icon: 'track_changes', img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=400&auto=format&fit=crop', prompt: 'A professional archery target with arrows tightly grouped in the center.' },
  { name: 'Pickleball', icon: 'sports_tennis', img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&auto=format&fit=crop', prompt: 'A modern pickleball court at sunrise. The specialized ball is in sharp focus on the court surface.' },
  { name: 'Go Karting', icon: 'directions_car', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop', prompt: 'A sleek, high-performance go-kart on a professional asphalt track.' },
  { name: 'Chess', icon: 'skateboarding', img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400&auto=format&fit=crop', prompt: 'A set of professional weighted chess pieces on a high-quality wooden board.' }
];

export const Sports: React.FC = () => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 5;
    const yPercent = (y / rect.height - 0.5) * 5;
    card.style.transform = `perspective(1000px) rotateY(${xPercent}deg) rotateX(${-yPercent}deg) translateY(-4px) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div className="bg-[#101415] text-[#e0e3e5] min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[500px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDmwQ-ODNWyBHmNx90se-TRJ2lapfYkBYm4i5dk13Xqv7f3Xc8Ss0xbJDVAq1FpIwwVNNNbZO21XjojuJDm0efdWREl0rCKbqwUveAFCEulPHBnsDANoEYHhDd0h8Ox0nGMaOly2sJLs1LENTY42n4eE84NQdQRe5UnEMEbTH4_k3ud7dKgi1TGugECvoRcFjB2SQ6O_TB7omqVkNcys171YvCYIdGcynSExLgliioT3xVybq6n-YUEN2vMeuuyR8fRmhtxZHpm9a7Y\')' }}></div>
        <div className="absolute inset-0 bg-gradient-to-bottom from-[rgba(10,25,47,0.4)] to-[rgba(10,25,47,1)]"></div>
        <div className="relative z-10 px-10 w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#72db9d]/20 border border-[#72db9d]/30 rounded-full text-[#72db9d] mb-6">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-[12px] font-medium uppercase tracking-widest">Enterprise Ready</span>
          </div>
          <h1 className="font-sans text-[48px] font-bold text-white mb-4 leading-tight">Explore Your Game</h1>
          <p className="font-sans text-[18px] text-[#bdcabe] max-w-2xl leading-relaxed">
            Choose from 15+ professional sports categories managed with enterprise precision. From local leagues to international tournaments, we power the future of competitive play.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/tournaments" className="px-8 py-4 bg-[#0b8852] text-white rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#006c40]/20">Get Started</Link>
            <button className="px-8 py-4 bg-[rgba(17,34,64,0.7)] backdrop-blur-[20px] border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all">View Stats</button>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 px-10 bg-[#101415]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[32px] font-bold text-white">Professional Categories</h2>
            <p className="text-[#bdcabe] mt-2">Filter and manage specialized tournament workflows per sport.</p>
          </div>
          <div className="flex gap-2 bg-[#191c1e] p-1 rounded-lg border border-[#3e4a41]">
            <button className="px-4 py-2 bg-[#0b8852] text-white rounded-md text-[14px] font-semibold">All Sports</button>
            <button className="px-4 py-2 text-[#bdcabe] hover:text-white transition-colors text-[14px] font-semibold">Team Sports</button>
            <button className="px-4 py-2 text-[#bdcabe] hover:text-white transition-colors text-[14px] font-semibold">Indoor</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {sportsData.map((sport) => (
            <div
              key={sport.name}
              className="relative group rounded-lg overflow-hidden bg-[rgba(17,34,64,0.7)] backdrop-blur-[20px] border border-white/10 flex flex-col h-72 transition-all duration-300 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-40"
                style={{ backgroundImage: `url('${sport.img}')` }}
                data-alt={sport.prompt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent" />

              <div className="relative z-10 p-6 mt-auto">
                <div className="w-12 h-12 rounded-lg bg-[#72db9d]/20 flex items-center justify-center border border-[#72db9d]/30 mb-4 group-hover:bg-[#72db9d] group-hover:text-[#0a192f] transition-all duration-300">
                  <span className="material-symbols-outlined">
                    {sport.icon}
                  </span>
                </div>
                <h3 className="text-[24px] font-semibold text-white mb-2">{sport.name}</h3>
                <Link to="/tournaments" className="inline-flex items-center gap-2 text-[#72db9d] font-semibold text-[14px] hover:underline group-hover:translate-x-1 transition-transform">
                  View Tournaments
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-gradient-to-tr from-[#72db9d]/5 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Data Section */}
      <section className="py-16 px-10 bg-[#0b0f10] border-y border-[#3e4a41]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-[40px] font-black text-[#72db9d] mb-2">150+</div>
            <div className="text-[14px] font-semibold text-[#bdcabe] uppercase tracking-widest">Active Leagues</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-black text-[#72db9d] mb-2">12K+</div>
            <div className="text-[14px] font-semibold text-[#bdcabe] uppercase tracking-widest">Teams Registered</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-black text-[#72db9d] mb-2">45k</div>
            <div className="text-[14px] font-semibold text-[#bdcabe] uppercase tracking-widest">Matches Managed</div>
          </div>
          <div className="text-center">
            <div className="text-[40px] font-black text-[#72db9d] mb-2">99.9%</div>
            <div className="text-[14px] font-semibold text-[#bdcabe] uppercase tracking-widest">Uptime Accuracy</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto bg-[#191c1e] border-t border-[#3e4a41]">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <span className="text-[24px] font-bold text-white mb-4">SmartSportz.in</span>
          <p className="text-[16px] text-[#bdcabe] max-w-xs text-center md:text-left">
            Professional sports management platform for modern leagues and elite athletes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Privacy Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Terms of Service</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Cookie Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Support</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[16px]" href="#">Contact</a>
        </div>
        <div className="text-center md:text-right">
          <p className="text-[12px] text-[#bdcabe]">© 2024 SmartSportz.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Sports;
