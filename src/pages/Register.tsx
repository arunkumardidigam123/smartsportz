import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  const [step, setStep] = useState(2);
  const [teamName, setTeamName] = useState('');
  const [category, setCategory] = useState('Professional League A');
  const [coachCredentials, setCoachCredentials] = useState('');
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(['Roster_Signed.pdf']);

  const basePrice = 24999;
  const gst = basePrice * 0.18;
  const processingFee = 150;
  const discount = couponApplied ? 2000 : 0;
  const totalPayable = basePrice + gst + processingFee - discount;

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === 'PRO2024') {
      setCouponApplied(true);
      alert('Coupon PRO2024 applied successfully! You got a discount of ₹2,000.');
    } else {
      alert('Invalid coupon code. Try "PRO2024".');
    }
  };

  const handleRemoveFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter(f => f !== fileName));
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen pb-20">
      <div className="p-10 max-w-[1200px] mx-auto">
        {/* Hero Title */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold mb-2">Professional Tournament Registration</h2>
          <p className="text-[#3e4a41] text-[18px]">Initialize your competitive journey within the SmartSportz ecosystem.</p>
        </div>

        {/* Stepper */}
        <div className="mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#bdcabe]/30 -translate-y-1/2 z-0"></div>
          <div className="flex justify-between items-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStep(1)}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= 1 ? 'bg-[#0b8852] text-white shadow-md' : 'bg-[#dce9ff] text-[#3e4a41]'}`}>
                1
              </div>
              <span className={`text-[13px] font-semibold ${step >= 1 ? 'text-[#006c40]' : 'text-[#3e4a41]'}`}>Personal</span>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStep(2)}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= 2 ? 'bg-[#006c40] text-white' : 'bg-[#dce9ff] text-[#3e4a41]'}`}>
                2
              </div>
              <span className={`text-[13px] font-semibold ${step >= 2 ? 'text-[#006c40] font-bold' : 'text-[#3e4a41]'}`}>Team</span>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStep(3)}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= 3 ? 'bg-[#006c40] text-white' : 'bg-[#eff4ff] border border-white/10 text-[#3e4a41]'}`}>
                3
              </div>
              <span className={`text-[13px] font-semibold ${step >= 3 ? 'text-[#006c40]' : 'text-[#3e4a41]'}`}>Documents</span>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStep(4)}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= 4 ? 'bg-[#006c40] text-white' : 'bg-[#eff4ff] border border-white/10 text-[#3e4a41]'}`}>
                4
              </div>
              <span className={`text-[13px] font-semibold ${step >= 4 ? 'text-[#006c40]' : 'text-[#3e4a41]'}`}>Payment</span>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setStep(5)}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= 5 ? 'bg-[#006c40] text-white' : 'bg-[#eff4ff] border border-white/10 text-[#3e4a41]'}`}>
                5
              </div>
              <span className={`text-[13px] font-semibold ${step >= 5 ? 'text-[#006c40]' : 'text-[#3e4a41]'}`}>Review</span>
            </div>
          </div>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Team Details Card */}
            <section className="bg-white/70 backdrop-blur-[12px] border border-[#E2E8F0] rounded-[18px] p-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#006c40]">groups</span>
                <h3 className="text-[20px] font-semibold text-[#0b1c30]">Team Composition (Step {step})</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider">Team Official Name</label>
                  <div className="relative group">
                    <input
                      className="w-full bg-[#eff4ff] border-0 border-b-2 border-white/10 focus:border-[#006c40] focus:ring-0 text-[14px] py-4 transition-all outline-none pl-2"
                      placeholder="e.g. Maverick Strikers FC"
                      type="text"
                      value={teamName}
                      onChange={e => setTeamName(e.target.value)}
                    />
                    {teamName && (
                      <span className="material-symbols-outlined absolute right-2 top-4 text-[#006c40] text-sm">check_circle</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider">Primary Category</label>
                  <select
                    className="w-full bg-[#eff4ff] border-0 border-b-2 border-white/10 focus:border-[#006c40] focus:ring-0 text-[14px] py-4 appearance-none pl-2"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option>Professional League A</option>
                    <option>Under-21 Elite</option>
                    <option>Corporate Invitational</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider">Head Coach Credentials</label>
                  <input
                    className="w-full bg-[#eff4ff] border-0 border-b-2 border-white/10 focus:border-[#006c40] focus:ring-0 text-[14px] py-4 transition-all outline-none pl-2"
                    placeholder="Full name and AFC/FIFA License ID"
                    type="text"
                    value={coachCredentials}
                    onChange={e => setCoachCredentials(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Document Upload Section */}
            <section className="bg-white/70 backdrop-blur-[12px] border border-[#E2E8F0] rounded-[18px] p-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-[#006c40]">upload_file</span>
                <h3 className="text-[20px] font-semibold text-[#0b1c30]">Required Verification</h3>
              </div>
              <div className="border-2 border-dashed border-[#bdcabe] rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-[#006c40]/50 transition-all cursor-pointer bg-white/5">
                <div className="w-16 h-16 rounded-full bg-[#0b8852]/20 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[#006c40] text-4xl">cloud_upload</span>
                </div>
                <h4 className="text-[18px] font-bold mb-2">Drag &amp; Drop Documents</h4>
                <p className="text-[#3e4a41] text-sm mb-6 max-w-sm">Upload Player IDs, Medical Certificates, and Insurance Waivers. <br/>Supports PDF, JPEG (Max 10MB per file).</p>
                <button
                  onClick={() => setUploadedFiles([...uploadedFiles, `Verification_${Date.now().toString().slice(-4)}.pdf`])}
                  className="bg-[#006c40]/10 hover:bg-[#006c40]/20 text-[#006c40] font-bold py-3 px-8 rounded-full transition-all"
                >
                  Browse Files
                </button>
              </div>
              {uploadedFiles.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {uploadedFiles.map(file => (
                    <div key={file} className="bg-[#eff4ff] flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5">
                      <span className="material-symbols-outlined text-[#006c40] text-sm">picture_as_pdf</span>
                      <span className="text-xs font-semibold">{file}</span>
                      <button onClick={() => handleRemoveFile(file)} className="hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-xs">close</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Nav Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                className={`flex items-center gap-2 text-[#3e4a41] hover:text-[#0b1c30] transition-all ${step === 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Previous Step</span>
              </button>
              <button
                onClick={() => {
                  if (step < 5) setStep(step + 1);
                  else alert('Registration submitted successfully! Total Payable: ' + totalPayable.toLocaleString());
                }}
                className="bg-[#0b8852] hover:bg-[#006c40] text-white font-bold py-4 px-10 rounded-full active:scale-95 transition-all shadow-lg"
              >
                {step < 5 ? 'Continue to Review' : 'Submit Registration'}
              </button>
            </div>
          </div>

          {/* Right: Payment & Summary */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-[12px] border border-[#E2E8F0] rounded-[18px] p-8 sticky top-24">
              <h3 className="text-[20px] font-bold mb-6">Payment Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#3e4a41]">
                  <span>Registration Fee</span>
                  <span className="font-semibold">₹ 24,999.00</span>
                </div>
                <div className="flex justify-between text-[#3e4a41]">
                  <span>Service GST (18%)</span>
                  <span className="font-semibold">₹ 4,499.82</span>
                </div>
                <div className="flex justify-between text-[#3e4a41] pb-4 border-b border-[#bdcabe]/30">
                  <span>Processing Fee</span>
                  <span className="font-semibold">₹ 150.00</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-[#ba1a1a]">
                    <span>Discount</span>
                    <span className="font-semibold">- ₹ 2,000.00</span>
                  </div>
                )}
                <div className="flex justify-between text-[#0b1c30] font-bold text-lg pt-2">
                  <span>Total Payable</span>
                  <span className="text-[#006c40]">₹ {totalPayable.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="mb-8">
                <label className="text-[12px] font-semibold text-[#3e4a41] uppercase tracking-wider block mb-2">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    className="flex-1 bg-[#eff4ff] border border-[#bdcabe]/50 rounded-lg px-4 py-2 focus:ring-[#006c40] focus:border-[#006c40] transition-all uppercase outline-none text-[14px]"
                    placeholder="PRO2024"
                    type="text"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                  />
                  <button onClick={handleApplyCoupon} className="bg-[#0b8852] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#006c40] transition-all">Apply</button>
                </div>
              </div>
              {/* Razorpay Integration Button */}
              <button
                onClick={() => alert(`Redirecting to Razorpay for amount ₹${totalPayable.toLocaleString()}...`)}
                className="w-full bg-[#3395FF] hover:bg-[#2084f0] text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl overflow-hidden relative"
              >
                <span className="font-bold">Pay with Razorpay</span>
                <div className="h-6 w-px bg-white/20"></div>
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </button>
              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-[#3e4a41] text-[10px] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-xs">verified_user</span>
                  Secure PCI-DSS Encrypted Transaction
                </div>
              </div>
            </div>
            {/* Help Card */}
            <div className="bg-[#0b8852]/10 border border-[#0b8852]/20 rounded-[18px] p-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#006c40]">info</span>
                <div>
                  <p className="text-sm font-semibold mb-1">Need assistance?</p>
                  <p className="text-xs text-[#3e4a41] leading-relaxed">Our tournament directors are online to help with documentation or team grouping issues.</p>
                  <a className="inline-block mt-3 text-[#006c40] text-xs font-bold underline" href="#">Contact Registrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
