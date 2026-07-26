import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Step = 1 | 2 | 3;

export const PremiumPasswordRecovery: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (value: string, index: number) => {
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex bg-[#101415] text-[#e0e3e5]">
      {/* Left: Cinematic Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0b0f10]">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#101415]/40 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#101415] via-transparent to-transparent" />
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClEAHKMqDMTY1Ugg1VXp81LgpgUu39ClubSRWwOCCDXSS6yvPLir6BbQZiU_hKxOzS1C6znQmv3EOUxq5J5lhmWmzHSco8xQF0ewNEAJ2Ug-ckODf1s0IpisEz0sDmNgz9vbEU9TJgw8VcjIfBxOQq8kcjLpmPk2eW8wqdxYCMTmDmIrvseJnMun2aD-76cAx5fL9ks-kPtNn93WoVBdWpqqBUYAeUdrd3_RPbVFZHBf6TIh9EpeB6bMiJ1b8NEI8sEhfvMfd1NsJj"
          alt="Stadium"
        />
        <div className="absolute bottom-12 left-12 z-20 max-w-md">
          <h1 className="text-[32px] font-bold text-white mb-4">Elite Sports Management Platform</h1>
          <p className="text-[18px] text-[#b9c7e4]">
            Join thousands of professional organizers who trust SmartSportz for high-performance tournament operations.
          </p>
        </div>
      </div>

      {/* Right: Auth UI */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#101415] relative">
        {/* Brand */}
        <div className="absolute top-8 left-8 lg:left-24 lg:top-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#72db9d] rounded-lg flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[#00391f] font-bold">sports_score</span>
            </div>
            <span className="text-[32px] font-black tracking-tighter text-[#e0e3e5]">SmartSportz.in</span>
          </div>
        </div>

        <div className="w-full max-w-[440px] mt-16 lg:mt-0">

          {/* ── Step 1: Enter Email ── */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-[32px] font-bold text-[#e0e3e5] mb-2">Forgot Password?</h2>
                <p className="text-[#b9c7e4]">
                  No worries. Enter your email address and we'll send you a 6-digit code to reset your account access.
                </p>
              </div>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); setStep(2); }}>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#889489] uppercase tracking-widest" htmlFor="rec-email">
                    Registered Email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#889489]">mail</span>
                    <input
                      id="rec-email"
                      className="w-full bg-[#191c1e] border border-[#3e4a41] rounded-xl py-4 pl-12 pr-4 text-[#e0e3e5] focus:border-[#72db9d] focus:ring-0 focus:outline-none transition-all placeholder:text-[#3e4a41]"
                      placeholder="name@organization.com"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0b8852] text-white text-[20px] font-bold py-4 rounded-xl hover:bg-[#72db9d] hover:text-[#00391f] transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Send OTP</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="text-center">
                  <Link className="text-[#72db9d] hover:underline transition-all" to="/login">
                    Back to Login
                  </Link>
                </div>
              </form>
            </div>
          )}

          {/* ── Step 2: OTP Verification ── */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <button
                  className="flex items-center gap-2 text-[#72db9d] mb-6 hover:gap-3 transition-all"
                  onClick={() => setStep(1)}
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  <span className="text-[12px] font-semibold tracking-widest">CHANGE EMAIL</span>
                </button>
                <h2 className="text-[32px] font-bold text-[#e0e3e5] mb-2">Check your email</h2>
                <p className="text-[#b9c7e4]">
                  We've sent a verification code to{' '}
                  <span className="text-[#e0e3e5] font-bold">
                    {email ? email.replace(/(.{1}).*@/, '$1***@') : 'j***@smartsportz.in'}
                  </span>
                </p>
              </div>
              <form className="space-y-8" onSubmit={e => { e.preventDefault(); setStep(3); }}>
                <div className="flex justify-between gap-3">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      className="w-14 h-16 bg-[#191c1e] border border-[#3e4a41] rounded-xl text-center text-[32px] font-bold text-[#72db9d] focus:border-[#72db9d] focus:outline-none transition-all"
                      maxLength={1}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={e => handleOtpChange(e.target.value, i)}
                      onKeyDown={e => handleOtpKeyDown(e, i)}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0b8852] text-white text-[20px] font-bold py-4 rounded-xl hover:bg-[#72db9d] hover:text-[#00391f] transition-all active:scale-[0.98] shadow-lg"
                >
                  Verify OTP
                </button>
                <div className="text-center text-[#b9c7e4]">
                  Didn't receive code?{' '}
                  <button className="text-[#72db9d] hover:underline" type="button">
                    Resend in 0:45
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ── Step 3: Success ── */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center animate-fadeIn">
              <div className="w-24 h-24 bg-[#72db9d]/10 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-[#72db9d]/20 rounded-full animate-ping opacity-25" />
                <span
                  className="material-symbols-outlined text-[#72db9d] text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <h2 className="text-[32px] font-bold text-[#e0e3e5] mb-4">Account Verified</h2>
              <p className="text-[#b9c7e4] mb-10 px-4">
                Your identification has been confirmed. You can now securely reset your password or proceed to your dashboard.
              </p>
              <div className="w-full space-y-4">
                <button className="w-full bg-[#0b8852] text-white text-[20px] font-bold py-4 rounded-xl hover:bg-[#72db9d] hover:text-[#00391f] transition-all active:scale-[0.98]">
                  Reset Password
                </button>
                <Link
                  to="/login"
                  className="w-full inline-block border border-[#3e4a41] text-[#e0e3e5] text-[20px] font-bold py-4 rounded-xl hover:bg-white/5 transition-all text-center"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer links */}
        <div className="absolute bottom-8 left-8 lg:left-24 flex gap-6 text-[#889489] text-[12px]">
          <a className="hover:text-[#72db9d] transition-colors uppercase tracking-widest" href="#">Privacy Policy</a>
          <a className="hover:text-[#72db9d] transition-colors uppercase tracking-widest" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default PremiumPasswordRecovery;
