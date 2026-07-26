import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log('Autoplay blocked:', err);
          setIsPlaying(false);
        });
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => console.log(err));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted) {
      video.volume = 0.5;
    }
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col">
        {/* Hero Video Banner */}
        <div className="relative w-full aspect-video bg-black overflow-hidden group">
          <video
            ref={videoRef}
            id="hero-bg-video"
            className="w-full h-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/IMG_5480.MOV" type="video/quicktime" />
            <source src="/IMG_5480.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Bottom Right Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="h-12 w-12 rounded-full bg-[#006c40]/95 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              onClick={handleMuteUnmute}
              className="h-12 w-12 rounded-full bg-[#e5eeff]/80 backdrop-blur-md text-[#006c40] flex items-center justify-center shadow-lg hover:bg-[#dce9ff] transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
            </button>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-20 max-w-[1280px] mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b8852]/10 text-[#006c40] text-[12px] font-semibold border border-[#0b8852]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006c40] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#006c40]"></span>
              </span>
              The New Standard in Sports Tech
            </div>
            <h1 className="text-[48px] font-bold text-[#0b1c30] leading-tight">
              Elevate Your <span className="text-[#006c40]">Tournament Management</span>
            </h1>
            <p className="text-[18px] text-[#3e4a41] max-w-lg">
              A high-fidelity platform designed for elite athletic organizations to streamline operations, engage fans, and scale championships with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-[#006c40] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#0b8852] hover:-translate-y-0.5 transition-all text-[14px]"
              >
                Get Started
              </Link>
              <button
                onClick={() => alert('Demo video coming soon!')}
                className="bg-[#eff4ff] text-[#006c40] border border-[#bdcabe] px-8 py-4 rounded-lg font-bold hover:bg-[#e5eeff] transition-all flex items-center gap-2 text-[14px]"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
              <div className="w-24 h-8 bg-[#3e4a41]/20 rounded"></div>
              <div className="w-24 h-8 bg-[#3e4a41]/20 rounded"></div>
              <div className="w-24 h-8 bg-[#3e4a41]/20 rounded"></div>
            </div>
          </div>
          <div className="hidden md:block relative">
            {/* Floating Metric Tiles */}
            <div className="absolute -top-10 -left-10 bg-white/70 backdrop-blur-[12px] border border-white p-6 rounded-2xl shadow-md">
              <div className="text-[#006c40] text-[24px] font-bold">99.9%</div>
              <div className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider">Uptime Reliability</div>
            </div>
            <div className="absolute -bottom-10 -right-4 bg-white/70 backdrop-blur-[12px] border border-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#006c40]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#006c40]">trophy</span>
                </div>
                <div>
                  <div className="text-[24px] font-bold">2.4k+</div>
                  <div className="text-[12px] text-[#3e4a41]">Tournaments Hosted</div>
                </div>
              </div>
            </div>
            {/* Main Dashboard Preview */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-[#f8f9ff] border border-[#bdcabe]/30">
              <div
                className="w-full aspect-[4/3] bg-cover bg-center"
                data-alt="A clean, minimalist UI dashboard preview showing professional cricket statistics."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLdvzbTePlQdGmt8BaGw5WMky26cgskdXv5SuQbOhTnRgIl2khV7cYARQJEtNrweW-9cEgySMty-acemVV4m9Z4KC9JE0TBPdzwRiJ3yQ0hNlLtPP7IpHAzmYSvRJFiPt5fVk9YxvliOsB2tkQ8M1ObtMGpacbcKWzRKGfjBwYnoMfPLsQicWAAYxzL1RpQzHegurfAjOI7UgHCpKbSyusim9GAZ1iLfSnJQ--N24P5NXfZWk7nQsGd5tMg80uoShm5J_ZgbTwMLd-')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white border-y border-[#bdcabe]/20">
        <div className="max-w-[1280px] mx-auto px-10">
          <p className="text-center text-[12px] font-semibold text-[#3e4a41] uppercase tracking-[0.2em] mb-12">
            Trusted by Global Sports Leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="h-10 w-full flex justify-center items-center">
              <span className="font-bold text-xl text-[#3e4a41]">INDCRICKET</span>
            </div>
            <div className="h-10 w-full flex justify-center items-center">
              <span className="font-bold text-xl text-[#3e4a41]">ELITE_FED</span>
            </div>
            <div className="h-10 w-full flex justify-center items-center">
              <span className="font-bold text-xl text-[#3e4a41]">STATE_LEAGUE</span>
            </div>
            <div className="h-10 w-full flex justify-center items-center">
              <span className="font-bold text-xl text-[#3e4a41]">PRO_SERIES</span>
            </div>
            <div className="h-10 w-full flex justify-center items-center">
              <span className="font-bold text-xl text-[#3e4a41]">CHAMP_ZONE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[30px] font-bold mb-6">Designed for Every Competitive Edge</h2>
          <p className="text-[18px] text-[#3e4a41]">Everything you need to orchestrate world-class tournaments from a single, intuitive command center.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Live Scoring Card */}
          <div className="bg-[#f8f9ff] p-10 rounded-[18px] shadow-md border border-[#bdcabe]/10 hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-[#0b8852]/10 flex items-center justify-center mb-8 group-hover:bg-[#006c40] transition-colors">
              <span className="material-symbols-outlined text-[#006c40] group-hover:text-white transition-colors" style={{ fontSize: '32px' }}>sensors</span>
            </div>
            <h3 className="text-[24px] font-bold mb-4">Live Scoring</h3>
            <p className="text-[#3e4a41] mb-6 leading-relaxed">Broadcast real-time match data to millions with sub-second latency. Professional-grade ball-by-ball updates.</p>
            <Link className="text-[#006c40] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" to="/dashboard">
              Explore Engine <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          {/* Player Stats Card */}
          <div className="bg-[#f8f9ff] p-10 rounded-[18px] shadow-md border border-[#bdcabe]/10 hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-[#0b8852]/10 flex items-center justify-center mb-8 group-hover:bg-[#006c40] transition-colors">
              <span className="material-symbols-outlined text-[#006c40] group-hover:text-white transition-colors" style={{ fontSize: '32px' }}>analytics</span>
            </div>
            <h3 className="text-[24px] font-bold mb-4">Player Stats</h3>
            <p className="text-[#3e4a41] mb-6 leading-relaxed">Deep-dive into performance metrics. Automated profile building and historical data tracking for every athlete.</p>
            <Link className="text-[#006c40] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" to="/analytics">
              View Analytics <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          {/* Automated Scheduling Card */}
          <div className="bg-[#f8f9ff] p-10 rounded-[18px] shadow-md border border-[#bdcabe]/10 hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-[#0b8852]/10 flex items-center justify-center mb-8 group-hover:bg-[#006c40] transition-colors">
              <span className="material-symbols-outlined text-[#006c40] group-hover:text-white transition-colors" style={{ fontSize: '32px' }}>calendar_month</span>
            </div>
            <h3 className="text-[24px] font-bold mb-4">Automated Scheduling</h3>
            <p className="text-[#3e4a41] mb-6 leading-relaxed">Optimize venues and time-slots with our AI-driven scheduler. Resolve conflicts instantly with drag-and-drop ease.</p>
            <a className="text-[#006c40] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="/html/tournament_listing_page/code.html">
              Learn Process <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="py-24 bg-[#eff4ff] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
              <h2 className="text-[30px] font-bold text-[#0b1c30]">Real-Time Control</h2>
              <p className="text-[14px] text-[#3e4a41]">Experience a command center that works as fast as the game itself. From instant results to dynamic leaderboards, control the pulse of your league.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[14px] font-semibold text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#006c40]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  One-Click Result Processing
                </li>
                <li className="flex items-center gap-3 text-[14px] font-semibold text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#006c40]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Live PDF Certificate Generation
                </li>
                <li className="flex items-center gap-3 text-[14px] font-semibold text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[#006c40]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Multi-Venue Syncing
                </li>
              </ul>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 border border-[#bdcabe]/30">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[14px] font-semibold text-[#006c40]">LIVE STATS</span>
                    <div className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">LIVE</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-[#eff4ff] p-3 rounded-xl">
                      <div className="h-10 w-10 rounded-full bg-[#8ef8b7]"></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-[#3e4a41]/20 rounded"></div>
                        <div className="h-1.5 w-16 bg-[#3e4a41]/10 rounded mt-1"></div>
                      </div>
                      <div className="font-bold text-[#006c40]">84*</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-[#bdcabe]/10">
                      <div className="h-10 w-10 rounded-full bg-[#dce2f7]"></div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-[#3e4a41]/20 rounded"></div>
                        <div className="h-1.5 w-12 bg-[#3e4a41]/10 rounded mt-1"></div>
                      </div>
                      <div className="font-bold text-[#3e4a41]">22</div>
                    </div>
                    <div className="pt-4 h-full">
                      <div
                        className="w-full h-32 rounded-lg bg-cover bg-center"
                        data-alt="A sophisticated data visualization chart showing real-time player performance."
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4mL_jt7HMKCVXLhzEwoxwoOOBQzSj3kJ4PfKwrKxAhw8Shvb0wj3b9kJ_1LP8cX7rapRrf2CIf256oXk3Imc-CUFRPKgSxqfVxxo3QR_bCGw5tYydOq8hLnrKAzZC2jQd6S6MyebRLNb9IYbfBJbpU2j_guibBMwP4IcceIqVHuTp4D2AACx4irMNp58IUyGLN0KbfBFs-CVt4RRqPNfo3PAPDj_cVJFMHXD4OCxQpyxT6AxL9RQSR-Fxisuy6mkmdMot6aEkMY9D')" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 h-full">
                  <div className="h-[calc(50%-8px)] bg-[#006c40] text-white rounded-2xl p-6 relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="text-[12px] text-white/70 uppercase">Tournament Reach</span>
                      <div className="text-3xl font-bold mt-2">1.2M+</div>
                      <p className="text-white/80 text-[12px] mt-1">Active Viewers</p>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                      <span className="material-symbols-outlined text-[120px]">public</span>
                    </div>
                  </div>
                  <div className="h-[calc(50%-8px)] bg-white rounded-2xl p-6 shadow-md border border-[#bdcabe]/30">
                    <span className="text-[12px] text-[#3e4a41] uppercase">Recent Awards</span>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#ffdad9] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#9e3e44] text-sm">stars</span>
                        </div>
                        <span className="text-[12px] font-semibold">Top Sports Tech '24</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#8ef8b7]/30 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#006c40] text-sm">security</span>
                        </div>
                        <span className="text-[12px] font-semibold">ISO Certified Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="relative bg-[#006c40] rounded-[32px] overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12">
              <span className="material-symbols-outlined text-[300px] text-white">sports_cricket</span>
            </div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-[30px] md:text-[48px] font-bold text-white leading-tight">Join the Elite Organizations Already Winning.</h2>
              <p className="text-white/80 text-[18px]">Scale your tournament from local grounds to global stages with SmartSportz.in.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/register" className="bg-white text-[#006c40] px-12 py-5 rounded-xl font-bold hover:bg-[#8ef8b7] transition-all shadow-xl text-[14px]">
                  Get Started Now
                </Link>
                <Link to="/support" className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-[14px]">
                  Schedule a Consult
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#bdcabe]/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1280px] mx-auto px-10 py-20">
          <div className="space-y-6">
            <div className="text-[30px] font-bold text-[#006c40]">SmartSportz.in</div>
            <p className="text-[14px] text-[#3e4a41] max-w-xs">The ultimate tournament orchestration platform for modern sports federations and leagues.</p>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#0b1c30] uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-[14px]">
              <li><a className="text-[#3e4a41] hover:text-[#006c40] transition-colors" href="/html/tournament_listing_page/code.html">Tournaments</a></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/dashboard">Live Scores</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/leaderboard">Leaderboards</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/teams">Teams</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#0b1c30] uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-[14px]">
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/news">Blogs</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/sponsors">Sponsors</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/support">Contact</Link></li>
              <li><a className="text-[#3e4a41] hover:text-[#006c40] transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-[#0b1c30] uppercase tracking-widest mb-6">Community</h4>
            <ul className="space-y-4 text-[14px]">
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/players">Players</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/gallery">Gallery</Link></li>
              <li><Link className="text-[#3e4a41] hover:text-[#006c40] transition-colors" to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#bdcabe]/30 py-8">
          <div className="max-w-[1280px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-[#3e4a41]">© 2024 SmartSportz.in. All rights reserved.</p>
            <div className="flex gap-8 text-[12px]">
              <a className="text-[#3e4a41] hover:text-[#006c40] transition-colors" href="#">Terms of Service</a>
              <a className="text-[#3e4a41] hover:text-[#006c40] transition-colors" href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
