"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Building2, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Lock, 
  Users, 
  ArrowRight,
  TrendingUp,
  Gavel,
  History,
  Cpu,
  BarChart2,
  Eye
} from "lucide-react";

export default function BankingSolution() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Building2 className="w-3.5 h-3.5" />
               Institutional Fraud Intelligence
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Secure Banking for <br />
               <span className="text-zinc-300 italic">The Digital Age.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense empowers banks to detect and prevent complex fraud in real time — protecting institutional assets and maintaining regulatory compliance without compromising speed.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3">
                  Request Demo
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. 🚨 THE PROBLEM & 3. 💡 THE SOLUTION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl mt-24">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Banking Risk.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Modern banking faces unprecedented threats from account takeover, synthetic identity fraud, and coordinated money laundering attempts.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Identity Theft", d: "Sophisticated ATO and synthetic account opening." },
                      { l: "Real-Time Pressure", d: "Traditional batch systems can't keep up." },
                      { l: "Regulatory Risk", d: "Unpredictable compliance costs and fines." },
                      { l: "Customer Trust", d: "High friction leads to lost revenue." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1 italic">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                    <p className="text-xl font-bold italic text-white leading-relaxed">“Banks need intelligence that acts as fast as their customers do.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <ShieldCheck className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Unified Protection.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense provides an integrated security layer combining device, behavioral, and transaction intelligence.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "ML Scoring", i: <BarChart2 /> },
                      { l: "Entity Rules", i: <Cpu /> },
                      { l: "Device Intel", i: <Zap /> },
                      { l: "Compliance", i: <Gavel /> }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-brand-lime/20 transition-all group/it">
                         <div className="text-brand-lime mb-4 group-hover/it:scale-110 transition-transform">{it.i}</div>
                         <h6 className="text-[10px] font-bold uppercase tracking-widest text-white">{it.l}</h6>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. KEY CAPABILITIES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Core Capabilities.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Specific solutions designed to protect every aspect of the modern banking lifecycle.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Account Takeover", d: "Block unauthorized access with behavioral checks.", i: <Lock /> },
                   { l: "Synthetic ID Detection", d: "Identify fake identities during account opening.", i: <Users /> },
                   { l: "Transaction AML", d: "Real-time monitoring for suspicious flows.", i: <History /> },
                   { l: "Cross-Channel Risk", d: "Unified scoring across web, mobile, and API.", i: <Activity /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.l}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. COMPLIANCE & 6. OPERATIONS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">Institutional Scale.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Designed for high-volume environments that require absolute operational precision and auditability.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Sub-50ms Response", d: "Detect fraud before the transaction is finalized.", i: <Zap /> },
                      { l: "Full Audit Trails", d: "Detailed logs for every decision and rule change.", i: <History /> },
                      { l: "Enterprise RBAC", d: "Manage investigator access at scale.", i: <Users /> },
                      { l: "Explainable AI", d: "Scores backed by clear risk reasons for regulators.", i: <Eye /> }
                    ].map((sig, i) => (
                      <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-[44px] hover:shadow-xl transition-all group">
                         <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all">{React.cloneElement(sig.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic font-manrope">{sig.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter leading-relaxed italic">{sig.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
                 <TrendingUp className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Bank Efficiency.</h3>
                 <div className="space-y-10">
                    {[
                      { l: "30% Lower Manual Reviews", d: "Automate low-risk transactions with confidence." },
                      { l: "No-Code Policy Engine", d: "Change fraud logic in seconds, not sprint cycles." },
                      { l: "Integrated Case Mgmt", d: "Professional workspace for fraud investigators." },
                      { l: "Unified Data Layer", d: "Aggregate device, user, and entity patterns." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-1.5 h-12 bg-brand-lime/10 group-hover/item:bg-brand-lime transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{it.l}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px] italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. IMPACT METRICS & 8. CTA SECTION */}
        <section className="py-40 text-center">
           <div className="max-w-[1100px] mx-auto px-8">
              <h2 className="text-4xl md:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Protecting the Core.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                 {[
                   { v: "85%", l: "Reduction in Synthetic ID Fraud" },
                   { v: "<50ms", l: "Average Scoring Latency" },
                   { v: "2.4x", l: "ROI on Automated Decisions" }
                 ].map((m, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-xl transition-all">
                      <div className="text-6xl font-black text-neutral-900 italic tracking-tighter mb-4">{m.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 italic">{m.l}</div>
                   </div>
                 ))}
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
                 <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                 <div className="relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Upgrade Your <br /><span className="text-white/20">Risk Engine.</span></h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Experience institutional-grade fraud intelligence built for modern banks.</p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                       <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                         Request Demo
                       </button>
                       <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
                         Talk to Sales
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
