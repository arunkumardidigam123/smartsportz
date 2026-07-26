import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081C3A] via-[#0d2a52] to-[#081C3A] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-[28px] font-black text-[#72db9d]">SmartSportz.in</span>
          </Link>
          <p className="text-white/50 text-[14px] mt-2">India's Smart Tournament Management Platform</p>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-3xl p-8 border border-white/8">
          <h1 className="text-[24px] font-black text-white mb-2">Welcome back</h1>
          <p className="text-white/50 text-[14px] mb-8">Sign in to your SmartSportz account</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Email Address</label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#72db9d]/40 transition-colors">
                <span className="material-symbols-outlined text-white/30 text-[18px]">email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 text-[14px] text-white placeholder-white/25 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Password</label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#72db9d]/40 transition-colors">
                <span className="material-symbols-outlined text-white/30 text-[18px]">lock</span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-1 text-[14px] text-white placeholder-white/25 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                <span className="text-[13px] text-white/50">Remember me</span>
              </label>
              <a href="#" className="text-[13px] text-[#72db9d] hover:underline font-semibold">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#006c40] hover:bg-[#0b8852] text-white rounded-xl font-bold text-[15px] transition-all active:scale-[0.98] shadow-lg shadow-[#006c40]/20"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/8 text-center">
            <p className="text-white/40 text-[13px]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#72db9d] font-semibold hover:underline">Create one free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
