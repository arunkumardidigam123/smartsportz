import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tournaments = [
  {
    id: '1',
    name: 'Mumbai Premier Bash',
    sport: 'Cricket',
    icon: 'sports_cricket',
    date: 'Oct 24, 2024',
    location: 'DY Patil Stadium, Mumbai',
    city: 'Mumbai',
    prize: '₹5,00,000',
    slots: '12 / 32',
    isOpen: true,
    badgeColor: 'bg-[#006c40]/90',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnnzXZcFimLL7T9ac2kTo8J77vfkdXk4C5bjAaHg0DlXTFdWMYGO8QX7ya8zuAKbQ9xlxxGtE6O5K_lAln4OCOV_9GkBIQgeYh-v5jvjVrT2ULM8p5rvu6lUc-Ljec7dkKjq0k28U_sXTpmb9pTSbsPwmYsAq_PfZhZpWjScmDDmame6V73TzlS3AHPdSP-EydLk5uv8H_0pJsxl2SK-i3GruZQT_19cdlON3Wr6IIb-h5lf8uLyN7PsblkN83wL7SCfBsoCK9EgPV',
  },
  {
    id: '2',
    name: 'Delhi Elite Cup',
    sport: 'Football',
    icon: 'sports_soccer',
    date: 'Nov 02, 2024',
    location: 'Jawaharlal Nehru Stadium, Delhi',
    city: 'Delhi',
    prize: '₹3,50,000',
    slots: '4 / 16',
    isOpen: true,
    badgeColor: 'bg-[#9e3e44]/90',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Q4lSZ2bs-z8oYzP5hbZtHFpAd5D_R91MATkCZm66OntxRj7Py1GPv_zJzN7eQOvs75WsBaSAgMXpdD6cPudl4u62eyxi1cQlw9YDlH5KVzl7x7pE3lWe7XBB4LtPeiwFcdAlxcR1HELvMmqoGGQ9i91A-jUMHidmAYBPqmh4nfETJeVvAznAuX4C4qCnYka5bNqVetF7Th2x6Slfkuv8nfUiu2PkGQb4zZVck090EbfumGLMZdfgqzNIGIbigR3sXxlnZ6F6qgAT',
  },
  {
    id: '3',
    name: 'Bangalore Open Smash',
    sport: 'Tennis',
    icon: 'sports_tennis',
    date: 'Nov 15, 2024',
    location: 'KSLTA Stadium, Bangalore',
    city: 'Bangalore',
    prize: '₹2,00,000',
    slots: 'Full',
    isOpen: false,
    badgeColor: 'bg-[#545f73]/90',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv20Z2rtRZrD9_IcO9n-vThCtkrwMnIJpz_yWKL80v-xI_pAHiJ2nnmlGd63yZlKfdcH2TS0qFSntoP22KKHGW4xC7IpsoqlO3WvCXd8WQ5UlXDlA3hiERPMyQp3moXkmRx93hzKKU_zShEQkDNPF_y2sfvfdRLxk78BpT35AO9QkNgWdUB6anVXGZCcFFUwgvqRtO-Kv9rAgitrbDuVQuKJHT0WwVVBJ14J_XV-F-R5pCzDzlh7PnKGnztVKxpycwxaeBR3M952P1',
  },
  {
    id: '4',
    name: 'Pune Dunk Masters',
    sport: 'Basketball',
    icon: 'sports_basketball',
    date: 'Dec 05, 2024',
    location: 'Balewadi Stadium, Pune',
    city: 'Pune',
    prize: '₹1,50,000',
    slots: '24 / 24',
    isOpen: true,
    badgeColor: 'bg-[#0b8852]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCGLHyx0uIcSplPHWca8K8anwmYjgSwX4bR3L78QuAOnei7uVa7Tf14SE31shIjAdZ_8l31M7jgWKyWmOOZN4EBoGxHJ7rg_Pqy8bI0R3CL44iowlFNzmgtE1RUddMnplTJIkzZx_f76vYRVrpibFmba5XT2iyT-EOVF0js_Xxl_2DYJgBgPBLJrTwEYYVTAglKDcEcbTs_nlfRt4p7NYQH3FnxeEzAwLM9RjMCZMig9QYhJ2sSC4O_0U4HlPAayG-ZxcHPAW97UvJ',
  },
];

export interface EnterpriseDiscoveryHubProps {
  isInline?: boolean;
}

export const EnterpriseDiscoveryHub: React.FC<EnterpriseDiscoveryHubProps> = ({ isInline = false }) => {
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('All Sports');
  const [city, setCity] = useState('All Cities');
  const [fee, setFee] = useState('Any Price');

  const filtered = tournaments.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase());
    const matchSport = sport === 'All Sports' || t.sport === sport;
    const matchCity = city === 'All Cities' || t.city === city;
    return matchSearch && matchSport && matchCity;
  });

  return (
    <div className={isInline ? "" : "bg-[#f8f9ff] text-[#0b1c30] min-h-screen pb-20 pt-6"}>
      {/* Filter & Search Section */}
      <section className={isInline ? "max-w-[1280px] mx-auto mb-12" : "max-w-[1280px] mx-auto px-10 pt-10 mb-12"}>
        {!isInline && (
          <Link to="/tournaments" className="inline-flex items-center gap-2 text-[#006c40] font-semibold mb-6 hover:gap-3 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Tournaments</span>
          </Link>
        )}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {!isInline ? (
              <div>
                <h1 className="text-[48px] font-bold text-[#0b1c30] mb-2 leading-tight">
                  Upcoming Tournaments
                </h1>
                <p className="text-[#3e4a41] max-w-2xl text-[18px]">
                  Discover and register for the elite sporting events across the country. Track your progress and rise through the ranks.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-[24px] font-bold text-[#0b1c30]">Upcoming Events</h2>
              </div>
            )}
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

          {/* Filter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Sport</label>
              <select className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={sport} onChange={e => setSport(e.target.value)}>
                <option>All Sports</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Tennis</option>
                <option>Basketball</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider ml-1">Location</label>
              <select className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={city} onChange={e => setCity(e.target.value)}>
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
              <select className="bg-[#eff4ff] border-none rounded-xl px-4 py-3 text-[14px] font-semibold text-[#0b1c30] focus:ring-2 focus:ring-[#006c40]"
                value={fee} onChange={e => setFee(e.target.value)}>
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
      <section className={isInline ? "max-w-[1280px] mx-auto" : "max-w-[1280px] mx-auto px-10"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(t => (
            <div key={t.id} className="bg-white rounded-[18px] overflow-hidden shadow-md group flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${t.img}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className={`${t.badgeColor} backdrop-blur-md text-white font-semibold px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 text-[12px]`}>
                    <span className="material-symbols-outlined text-sm">{t.icon}</span>
                    {t.sport}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
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

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-[#3e4a41] text-[14px] text-center">
            Showing {filtered.length} of {tournaments.length} upcoming tournaments
          </p>
          <button className="flex items-center gap-2 text-[#006c40] font-semibold hover:translate-y-0.5 transition-transform">
            View All Tournaments
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseDiscoveryHub;
