import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialTournaments = [
  {
    id: '1',
    name: 'Mumbai Premier Bash',
    sport: 'Cricket',
    date: 'Oct 24, 2024',
    location: 'DY Patil Stadium, Mumbai',
    prize: '₹5,00,000',
    slots: '12 / 32',
    isOpen: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnnzXZcFimLL7T9ac2kTo8J77vfkdXk4C5bjAaHg0DlXTFdWMYGO8QX7ya8zuAKbQ9xlxxGtE6O5K_lAln4OCOV_9GkBIQgeYh-v5jvjVrT2ULM8p5rvu6lUc-Ljec7dkKjq0k28U_sXTpmb9pTSbsPwmYsAq_PfZhZpWjScmDDmame6V73TzlS3AHPdSP-EydLk5uv8H_0pJsxl2SK-i3GruZQT_19cdlON3Wr6IIb-h5lf8uLyN7PsblkN83wL7SCfBsoCK9EgPV',
    alt: 'Professional cricket players in white uniforms during a match in a sun-drenched stadium in Mumbai.',
    badgeClass: 'bg-primary/90 text-on-primary',
    icon: 'sports_cricket'
  },
  {
    id: '2',
    name: 'Delhi Elite Cup',
    sport: 'Football',
    date: 'Nov 02, 2024',
    location: 'Jawaharlal Nehru Stadium, Delhi',
    prize: '₹3,50,000',
    slots: '4 / 16',
    isOpen: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Q4lSZ2bs-z8oYzP5hbZtHFpAd5D_R91MATkCZm66OntxRj7Py1GPv_zJzN7eQOvs75WsBaSAgMXpdD6cPudl4u62eyxi1cQlw9YDlH5KVzl7x7pE3lWe7XBB4LtPeiwFcdAlxcR1HELvMmqoGGQ9i91A-jUMHidmAYBPqmh4nfETJeVvAznAuX4C4qCnYka5bNqVetF7Th2x6Slfkuv8nfUiu2PkGQb4zZVck090EbfumGLMZdfgqzNIGIbigR3sXxlnZ6F6qgAT',
    alt: 'Dynamic action shot of a professional football match under stadium lights at dusk in Delhi.',
    badgeClass: 'bg-tertiary/90 text-on-primary',
    icon: 'sports_soccer'
  },
  {
    id: '3',
    name: 'Bangalore Open Smash',
    sport: 'Tennis',
    date: 'Nov 15, 2024',
    location: 'KSLTA Stadium, Bangalore',
    prize: '₹2,00,000',
    slots: 'Full',
    isOpen: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv20Z2rtRZrD9_IcO9n-vThCtkrwMnIJpz_yWKL80v-xI_pAHiJ2nnmlGd63yZlKfdcH2TS0qFSntoP22KKHGW4xC7IpsoqlO3WvCXd8WQ5UlXDlA3hiERPMyQp3moXkmRx93hzKKU_zShEQkDNPF_y2sfvfdRLxk78BpT35AO9QkNgWdUB6anVXGZCcFFUwgvqRtO-Kv9rAgitrbDuVQuKJHT0WwVVBJ14J_XV-F-R5pCzDzlh7PnKGnztVKxpycwxaeBR3M952P1',
    alt: 'Elite tennis tournament setting on an outdoor hard court in Bangalore.',
    badgeClass: 'bg-secondary/90 text-on-primary',
    icon: 'sports_tennis'
  },
  {
    id: '4',
    name: 'Pune Dunk Masters',
    sport: 'Basketball',
    date: 'Dec 05, 2024',
    location: 'Balewadi Stadium, Pune',
    prize: '₹1,50,000',
    slots: '24 / 24',
    isOpen: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCGLHyx0uIcSplPHWca8K8anwmYjgSwX4bR3L78QuAOnei7uVa7Tf14SE31shIjAdZ_8l31M7jgWKyWmOOZN4EBoGxHJ7rg_Pqy8bI0R3CL44iowlFNzmgtE1RUddMnplTJIkzZx_f76vYRVrpibFmba5XT2iyT-EOVF0js_Xxl_2DYJgBgPBLJrTwEYYVTAglKDcEcbTs_nlfRt4p7NYQH3FnxeEzAwLM9RjMCZMig9QYhJ2sSC4O_0U4HlPAayG-ZxcHPAW97UvJ',
    alt: 'High-speed indoor basketball game in a modern, glass-walled arena in Pune.',
    badgeClass: 'bg-primary-container text-on-primary-container',
    icon: 'sports_basketball'
  }
];

export const Tournaments: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSport, setSelectedSport] = useState('All Sports');
  const [selectedLocation, setSelectedLocation] = useState('All Cities');
  const [selectedFee, setSelectedFee] = useState('Any Price');

  const filteredTournaments = initialTournaments.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                          t.location.toLowerCase().includes(search.toLowerCase());
    const matchesSport = selectedSport === 'All Sports' || t.sport === selectedSport;
    const matchesLocation = selectedLocation === 'All Cities' || t.location.includes(selectedLocation);
    
    // Fee mapping can be mocked or matches price
    return matchesSearch && matchesSport && matchesLocation;
  });

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen pb-20">
      {/* Filter and Search Section */}
      <section className="max-w-[1280px] mx-auto px-10 pt-10 mb-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-[48px] font-bold text-[#0b1c30] mb-2 leading-tight">Upcoming Tournaments</h1>
              <p className="text-[#3e4a41] max-w-2xl text-[18px]">Discover and register for the elite sporting events across the country. Track your progress and rise through the ranks.</p>
            </div>
            <div className="relative w-full md:w-96 group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6e7a70]">search</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#bdcabe]/50 rounded-[18px] focus:ring-2 focus:ring-[#006c40] focus:outline-none transition-all shadow-md"
                placeholder="Search tournaments..."
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* Bento-ish Filter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Sport</label>
              <select
                className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={selectedSport}
                onChange={e => setSelectedSport(e.target.value)}
              >
                <option>All Sports</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Tennis</option>
                <option>Basketball</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Location</label>
              <select
                className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
              >
                <option>All Cities</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Pune</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Date Range</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7a70] text-sm">calendar_month</span>
                <input className="w-full bg-[#eff4ff] border-none rounded-xl pl-10 pr-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]" placeholder="Select Date" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Entry Fee</label>
              <select
                className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={selectedFee}
                onChange={e => setSelectedFee(e.target.value)}
              >
                <option>Any Price</option>
                <option>Free</option>
                <option>Under ₹1000</option>
                <option>₹1000 - ₹5000</option>
              </select>
            </div>
            <div className="flex items-end md:col-span-1 col-span-2">
              <button className="w-full bg-[#d5e0f8] text-[#586377] font-semibold py-3.5 rounded-xl hover:bg-[#d5e0f8]/80 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">filter_alt</span>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Grid */}
      <section className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map(t => (
            <div key={t.id} className="bg-white rounded-[18px] overflow-hidden shadow-md group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt={t.alt}
                  style={{ backgroundImage: `url('${t.img}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className={`${t.badgeClass} backdrop-blur-md font-semibold px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 text-[12px]`}>
                    <span className="material-symbols-outlined text-sm">{t.icon}</span>
                    {t.sport}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-white font-semibold text-[13px] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">event</span>
                    {t.date}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div>
                  <h3 className="text-[20px] font-bold text-[#0b1c30] mb-1">{t.name}</h3>
                  <p className="text-[#3e4a41] text-[14px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {t.location}
                  </p>
                </div>
                <div className="flex items-center justify-between py-3 border-y border-[#bdcabe]/30">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#3e4a41] uppercase">Prize Pool</span>
                    <span className="text-[20px] font-bold text-[#006c40]">{t.prize}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[12px] font-semibold text-[#3e4a41] uppercase">Slots Left</span>
                    <span className="text-[13px] font-semibold text-[#0b1c30]">{t.slots}</span>
                  </div>
                </div>
                <div className="mt-auto pt-2">
                  {t.isOpen ? (
                    <Link to="/register" className="block w-full bg-[#006c40] text-white font-semibold py-4 rounded-lg text-center hover:bg-[#0b8852] transition-all active:scale-[0.98]">
                      Register Now
                    </Link>
                  ) : (
                    <button className="w-full bg-[#bdcabe] text-[#3e4a41] font-semibold py-4 rounded-lg cursor-not-allowed" disabled>
                      Registration Closed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-[#3e4a41] text-[14px] text-center">Showing {filteredTournaments.length} of {initialTournaments.length} upcoming tournaments</p>
          <button className="flex items-center gap-2 text-[#006c40] font-semibold hover:translate-y-0.5 transition-transform">
            View All Tournaments
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Tournaments;
