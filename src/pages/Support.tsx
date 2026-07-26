import React, { useState } from 'react';

export const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Partnership Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. We will get back to you in BKC record response time (14 minutes average)!`);
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: 'Partnership Inquiry',
      message: ''
    });
  };

  return (
    <div className="bg-[#101415] text-[#e0e3e5] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#101415] via-[#101415]/80 to-transparent z-10"></div>
          <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCgfUJzzMAYR3ypJ6Or4YgEaHvj75bjDXFIN3rlKnFQrZnm0OXkkhhBaQlfDpesYafAPvQuhZ37aJHs1pQZrjY9fMt05yUD9q4ThbPf0jCq4VkpyCsVSARI6ipyk7ne7z7yQPN2Z1IrZzRkpwuxcDSHxpU06Z56_2LlMTLewS5lQoWCfo3VKrfO5DSiDUce2-zHKe-nxptNIkqF9PDs3hun0OuMJXDvsFIipG6j-XjL9D8U-OHo0AULYadilQQA1tme84B4cBTnE8x6\')' }}>
          </div>
        </div>
        <div className="relative z-20 max-w-2xl">
          <span className="inline-block py-1 px-4 rounded-full bg-[#006c40]/10 text-[#72db9d] border border-[#006c40]/20 text-[12px] font-semibold mb-6">Contact Enterprise Support</span>
          <h1 className="text-[48px] font-bold text-white mb-6 leading-tight">Elevate Your Game. <br/><span className="text-[#72db9d]">Get in Touch.</span></h1>
          <p className="text-[18px] text-[#bdcabe] mb-8">Connect with our specialized team for technical onboarding, custom tournament configurations, or partnership inquiries.</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1440px] mx-auto">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-10 rounded-xl">
              <h2 className="text-[32px] font-bold text-white mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-[#bdcabe] block">Full Name</label>
                    <input
                      className="w-full bg-[#1b2230] border border-[#bdcabe]/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#72db9d] focus:border-[#72db9d] transition-all outline-none"
                      placeholder="John Doe"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-[#bdcabe] block">Professional Email</label>
                    <input
                      className="w-full bg-[#1b2230] border border-[#bdcabe]/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#72db9d] focus:border-[#72db9d] transition-all outline-none"
                      placeholder="john@organization.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-[#bdcabe] block">Organization</label>
                    <input
                      className="w-full bg-[#1b2230] border border-[#bdcabe]/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#72db9d] focus:border-[#72db9d] transition-all outline-none"
                      placeholder="Sports Club / Agency"
                      type="text"
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-semibold text-[#bdcabe] block">Subject</label>
                    <select
                      className="w-full bg-[#1b2230] border border-[#bdcabe]/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#72db9d] focus:border-[#72db9d] transition-all outline-none"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>Partnership Inquiry</option>
                      <option>Technical Support</option>
                      <option>Account Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#bdcabe] block">Your Message</label>
                  <textarea
                    className="w-full bg-[#1b2230] border border-[#bdcabe]/20 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#72db9d] focus:border-[#72db9d] transition-all outline-none resize-none"
                    placeholder="How can our experts assist you today?"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-[#006c40] text-white rounded-lg font-bold hover:bg-[#0b8852] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3" type="submit">
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1b2230] p-8 rounded-xl border border-white/5 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#006c40]/5 rounded-full blur-3xl group-hover:bg-[#006c40]/10 transition-all duration-500"></div>
              <h3 className="text-[32px] font-bold text-white mb-8">Corporate Hub</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006c40]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#72db9d]">location_on</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#72db9d] uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-[14px] text-white/80 leading-relaxed">SmartSportz Plaza, BKC, Mumbai,<br/>Maharashtra 400051</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006c40]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#72db9d]">mail</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#72db9d] uppercase tracking-widest mb-1">Email Us</p>
                    <a className="text-[14px] text-white/80 hover:text-[#72db9d] transition-colors" href="mailto:support@smartsportz.in">support@smartsportz.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006c40]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#72db9d]">call</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#72db9d] uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-[14px] text-white/80">+91 22 4567 8900</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006c40]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#72db9d]">schedule</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#72db9d] uppercase tracking-widest mb-1">Operational Hours</p>
                    <p className="text-[14px] text-white/80">Mon - Fri: 09:00 - 18:00 IST</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[12px] font-semibold text-[#bdcabe] mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006c40] transition-all" href="#">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </a>
                  <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006c40] transition-all" href="#">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stats/Quick Link Card */}
            <div className="bg-gradient-to-br from-[#0b8852] to-[#081C3A] p-8 rounded-xl shadow-2xl">
              <h4 className="text-[32px] font-bold text-white mb-2">99.9% Uptime</h4>
              <p className="text-[14px] text-[#8ef8b7] mb-6">Our enterprise infrastructure is built for reliability. Need emergency support?</p>
              <a className="inline-flex items-center gap-2 font-bold text-white hover:gap-4 transition-all" href="#">
                Access Priority Support <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] relative mt-12 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-[#006c40]/5 pointer-events-none z-10"></div>
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCNQJfkHNf3TkFEq3F0YBHCMCDtA-w0dMMHTyK0o24ry2snnF_FyBlH7i_XeFqk2r0JaK5HMO8cIhiVHxG1OcZjGZ6HN1gERPqa7NhnOSmooZTZZO3MI6siBC4GKtH8rh15PS8k2LFbZ476CoMFcSUmHsWabI99ocokmuuOolYmComaC7Xy0h2ef9x0YXQTzp5CpBNQrUkgfSKc0VmCjR9XZbR7UURhqJw0xUgR2Zei6k-7X4HjXYuPqhfr8X_F4Oco8emgQ24RHaZy\')' }}></div>
        <div className="absolute bottom-8 left-8 z-20 bg-[#081C3A] p-6 rounded-xl border border-[#006c40]/20 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#006c40] animate-pulse"></div>
            <span className="text-[13px] font-semibold text-white">SmartSportz Plaza HQ</span>
          </div>
          <p className="text-[14px] text-[#bdcabe] mt-2">Bandra Kurla Complex, Mumbai</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto border-t border-white/5 bg-[#191c1e] rounded-[18px]">
        <div className="mb-6 md:mb-0">
          <span className="text-[24px] font-bold text-white block mb-2">SmartSportz.in</span>
          <p className="text-[14px] text-[#bdcabe]">© 2024 SmartSportz.in. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Privacy Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Terms of Service</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Cookie Policy</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Support</a>
          <a className="text-[#bdcabe] hover:text-[#72db9d] underline transition-all text-[14px]" href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};
export default Support;
