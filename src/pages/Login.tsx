import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert('Logged in successfully!');
      navigate('/dashboard');
    } else {
      alert('Please fill in your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex text-[#191c1e] bg-[#f7f9fb]">
      {/* Left Side: Cinematic Visual */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#081C3A] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuynKLMUUeubhO3axCBaevAKZiqsukHIM_Z8VIrjENXpCBhACNCqHTM3WWoiexWo10j8Dmb99MBCaXE__IcZ5cN0gBqcmBWN-3V9PFVyI-KRVJYEZCkzAEHfPPWIMFGB369fS-l3lFyDBj-hJTFRooml6NDutkHTw4oUvhxM1BgqHGjTZSxK4d0QnC7BgTRzsdde97XC5-mxt2U3013jehNc4pAsf_7EauZObqA33Fqs2FBmJXg9BNHFP9MTT6TDzi2SOfCkumIE5N')" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#081C3A] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A]/90 to-transparent"></div>
        </div>
        {/* Branding Overlay */}
        <div className="relative z-10 p-12 text-left w-full max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-white text-5xl bg-[#006c40] p-2 rounded-xl">sports_score</span>
            <h2 className="text-[32px] font-black text-white tracking-tight">SmartSportz<span className="text-[#72db9d]">.in</span></h2>
          </div>
          <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-4 leading-tight">Precision Management for Elite Performance.</h1>
          <p className="text-[16px] text-white/80 max-w-lg">
            Empowering coaches, athletes, and sports directors with real-time analytics and high-performance workflows.
          </p>
          {/* Micro-interaction / Stats Decor */}
          <div className="mt-12 flex gap-6">
            <div className="bg-white/10 backdrop-blur-[12px] p-6 rounded-xl flex-1 border border-white/10">
              <div className="text-[12px] font-semibold text-[#72db9d] mb-1 uppercase tracking-wider">LIVE TOURNAMENTS</div>
              <div className="text-[32px] font-bold text-white">124</div>
            </div>
            <div className="bg-white/10 backdrop-blur-[12px] p-6 rounded-xl flex-1 border border-white/10">
              <div className="text-[12px] font-semibold text-[#72db9d] mb-1 uppercase tracking-wider">ACTIVE ATHLETES</div>
              <div className="text-[32px] font-bold text-white">12k+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Authentication Surface */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white">
        <div className="w-full max-w-[480px]">
          {/* Top Brand Logo */}
          <div className="flex flex-col items-center mb-12 lg:items-start">
            <div className="lg:hidden flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-white text-3xl bg-[#006c40] p-1.5 rounded-lg">sports_score</span>
              <span className="text-[24px] font-bold text-[#081C3A]">SmartSportz.in</span>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[32px] font-bold text-[#081C3A] mb-2">Welcome Back</h2>
              <p className="text-[14px] text-[#4B5563]">Please enter your credentials to access your dashboard.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[12px] font-semibold text-[#081C3A] uppercase tracking-wider" htmlFor="email">Email Address</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] group-focus-within:text-[#006c40] transition-colors">mail</span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-[#eceef0] border border-[#bdcabe]/40 rounded-lg text-[#191c1e] focus:outline-none focus:ring-1 focus:ring-[#006c40] focus:border-[#006c40] transition-all placeholder:text-[#4B5563]/50 text-[14px]"
                  id="email"
                  placeholder="coach@smartsportz.in"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-semibold text-[#081C3A] uppercase tracking-wider" htmlFor="password">Password</label>
                <Link className="text-[12px] font-semibold text-[#006c40] hover:text-[#0b8852] transition-colors" to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] group-focus-within:text-[#006c40] transition-colors">lock</span>
                <input
                  className="w-full pl-12 pr-12 py-4 bg-[#eceef0] border border-[#bdcabe]/40 rounded-lg text-[#191c1e] focus:outline-none focus:ring-1 focus:ring-[#006c40] focus:border-[#006c40] transition-all placeholder:text-[#4B5563]/50 text-[14px]"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#191c1e] transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 py-2">
              <input className="w-4 h-4 rounded border-[#bdcabe] bg-[#eceef0] text-[#006c40] focus:ring-[#006c40]" id="remember" type="checkbox" />
              <label className="text-[#4B5563] text-sm" htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button
              className="w-full py-4 bg-[#0b8852] hover:bg-[#006c40] text-white font-bold rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-[#0b8852]/20"
              type="submit"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#bdcabe]/40"></div>
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="px-4 bg-white text-[#4B5563] text-[12px] font-semibold">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-4">
            <button
              onClick={() => {
                alert('Logging in with Google...');
                navigate('/dashboard');
              }}
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#eceef0] hover:bg-[#e0e3e5] border border-[#bdcabe]/40 rounded-lg text-[#191c1e] font-semibold text-[14px] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span>Google</span>
            </button>
          </div>

          {/* Register Redirect */}
          <div className="mt-12 text-center">
            <p className="text-[#4B5563]">
              Don't have an account? 
              <Link className="text-[#006c40] font-semibold hover:underline ml-1" to="/register">Register Now</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
