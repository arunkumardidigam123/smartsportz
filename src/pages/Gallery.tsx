import React, { useState } from 'react';

const mediaItems = [
  {
    type: 'Match Highlights',
    title: 'IPL Finals - Mumbai Indians',
    date: 'May 24, 2024',
    author: 'Aris Malik',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRE3W4e5dbb6wg3aqCDcyUwCzc9ld3aq2xom6g_YdZzth40fLN1rmIh7gne4KtIVHxq4wQtTkf5jh-Lzvkq9hOAr66d4fkWHSXQqKedVZYBZ-jBUYX68C0Rovb2YTBSs0AJqK8MB_h9D2icH2O8RnLR2YH07wwH0HtCCpmonDxjncAqMoGpKQfgWi2UEfPrHLEfidiGuDkHWU5i-KCs4LBKU_VmYOIMLSCnZzavlSOPBqAwNbbN4ieplXEh7zf5MTp4BpUfTkI9O09',
    isVideo: false
  },
  {
    type: 'Match Highlights',
    title: 'Season Opening Highlights',
    date: 'Aug 12, 2024',
    author: '4K HDR Production',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPNQxZWm7jY8tb81r39Mu3aA1YmXt6Hhe8n7LhWy9DiZvPscscaHslLxlmPoZaSbXDjVg2ep5AYZARm5wjgq1AS8hWH6jFTpz3-qPO45neO9px1GY66Qly1qg1E8ubwRr-LRgIqv_btZC8bFJeqk4TChUMfPabc4fW4hpYgaw_KMUDl_BLbgXEqdJNWCqvA1DqFQbvwXc4ZRx7HCTU4ASRJjS0KnrdPL8wDC2UEjGVDIGXfkUrSY-1bWwFPzKJKg-YluORt0yYfSXM',
    isVideo: true,
    duration: '03:45'
  },
  {
    type: 'Training',
    title: 'Pre-Season Conditioning',
    date: 'Jun 15, 2024',
    author: 'Fitness Metrics Unit',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_x86hGERdmNaVXLqo-a5VPjmUiARiO3dxf7yPRsWFDVoQPmPiUXVtRW_PIUQdTkAEcP6Iv0xcPRCi37mCxoOEt7nakqVko3rPeffwDHCjaCdfIc1lvzctZCZWm5HhhV4GBD1RMNP6M1h6BCKNHipFzV6d8mWyvu0EBF06YOcnfcRHnr89Fdv0mBEfUhd23wy-feUMPLtMLOY8YDEaCOo5hwomun_AAz-htZrvb-HOOgI-qQgUoZdPYSnNCt5S-eMm8iscX-0Yze_S',
    isVideo: false
  },
  {
    type: 'Events',
    title: 'Annual Athlete Excellence Gala',
    date: 'Dec 20, 2023',
    author: 'PR Department',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV17yv9XoLISSybx96mqo8t5apczsYd91DIeRKAy9qHI1JYwqk9Q0ehilnE4rZIzb7NFfYbe38wZzaoqU9rx7MkOxPVYdpM8NWiX6Qt2SgJbQh6Xe_2UH9tw4EtSC5KLj_t3pur3HA7uIbsnz46aqIBTYsVe5ZC4OuzBBf58Xoqe_ot0e1M_JsVN4AIXPfpD0uA8rvOhxTBCOOYbL1gztxwmZvTy6XGFA4PO9CUkesRTyn4dwPN1h1gPmr4A2poRPRYlcHkJyL2XgB',
    isVideo: false
  },
  {
    type: 'Training',
    title: 'Athlete Focus Series: Elena Rossi',
    date: 'Sept 05, 2024',
    author: 'Portrait Studio',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG1KPlVPvgljk011vyoGXbF24MYnD3bCwn3DlhxURGNdAy7qhwSdrR2KSIuXRGtGWBMszrRCK95TJqI3zUFr1Fh2J374bKKMPWT-s6nonJNtBnriaAk_0CyduDrDKNPwoAuCCmIkRleReSoJNyZt_mWK3k3rr0aqO4iUf7yGI4upIso4XKxeslWYK3yVn3pnj9czb9b2bC6FoGK6xwgpGZD2cSk7e02e6uumq8-j4Xv5s2Ch99ALxMAsvdiVgtXpnPNfOnpzF1_nup',
    isVideo: false
  },
  {
    type: 'Events',
    title: 'Venue Highlight: Ahmedabad Arena',
    date: 'Jan 10, 2024',
    author: 'SkyView Media',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXVaCAQZ16DTX8xlnmkJefTB6GvcH3brvuK15ktFAGIEJnPZPPrpgYWG2E6kWrOsuc1wVwM0xjw3wHlKqSK5qo4gLELXpYLlAm6-RpV_ky0IanzIzypC9csnlIDRwCZdUESO0FURROPFx-XRWh6LbEH6pJFMST_dNePwJmDdb2k8AKgJ9r_R3adABPWv5sjG0uHSnkhrTpB4Nt2GSk4Ys4FqA3bQ3rhqzrH7K0iQKyorAX4pszKtH1boVy59P6LNswmga8rB4bLnrA',
    isVideo: false
  }
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All Media');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredMedia = mediaItems.filter(item => {
    if (filter === 'All Media') return true;
    if (filter === 'Videos') return item.isVideo;
    return item.type === filter;
  });

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-20">
      <div className="max-w-[1440px] mx-auto p-10 space-y-8">
        {/* Page Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[#006c40] text-[12px] font-bold tracking-widest uppercase">Asset Management</span>
            <h2 className="text-[32px] font-bold text-[#191c1e] tracking-tight">Sports Media Gallery</h2>
            <p className="text-[#3e4a41] text-[16px] max-w-xl">Curated high-performance visual assets, match highlights, and behind-the-scenes athlete documentation.</p>
          </div>
          {/* Filtering System */}
          <div className="flex flex-wrap gap-2 bg-[#eceef0] p-2 rounded-xl border border-[#bdcabe]/10">
            {['All Media', 'Match Highlights', 'Training', 'Events', 'Videos'].map(btn => {
              const isActive = filter === btn;
              return (
                <button
                  key={btn}
                  onClick={() => setFilter(btn)}
                  className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                    isActive ? 'bg-[#006c40] text-white' : 'text-[#3e4a41] hover:bg-[#e0e3e5]'
                  }`}
                >
                  {btn === 'Videos' && (
                    <span className="material-symbols-outlined text-[18px] mr-1.5 align-middle">play_circle</span>
                  )}
                  {btn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item.img)}
              className="group relative overflow-hidden rounded-xl border border-[#bdcabe]/20 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.img}
                  alt={item.title}
                />
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-[#006c40]/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl">play_arrow</span>
                    </div>
                  </div>
                )}
              </div>
              {item.isVideo && item.duration && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#006c40]/80 backdrop-blur-md text-white text-[12px] px-3 py-1 rounded-full border border-white/20">
                    {item.duration}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-[12px] border border-white/20 p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-[16px] font-bold text-white">{item.title}</h4>
                  <div className="flex justify-between items-center mt-2 text-xs text-white/80">
                    <p className="text-[#72db9d] font-bold">{item.date}</p>
                    <p className="italic">by {item.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Load More */}
        <div className="py-12 flex flex-col items-center gap-6">
          <p className="text-[#3e4a41] text-[12px] font-bold uppercase">Showing {filteredMedia.length} of 1,240 Assets</p>
          <button
            onClick={() => alert('Loading full asset archives...')}
            className="px-8 py-4 bg-transparent border border-[#006c40] text-[#006c40] rounded-xl font-bold hover:bg-[#006c40]/10 transition-colors duration-300 flex items-center gap-3 active:scale-95 text-[14px]"
          >
            <span className="material-symbols-outlined">refresh</span>
            Load Professional Archive
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img className="max-w-full max-h-[80vh] rounded-lg object-contain" src={lightboxImg} alt="Preview" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
