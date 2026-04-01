"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Store, 
  ShieldAlert, 
  Activity, 
  Network, 
  BarChart3, 
  Search, 
  Bell, 
  ArrowRight,
  Database,
  Building2,
  Users,
  CheckCircle2,
  Zap,
  Share2,
  ShieldCheck
} from "lucide-react";

export default function MerchantFraudPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Store className="w-3.5 h-3.5" />
               Ecosystem Protection
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Detect & Prevent <br />
               <span className="text-zinc-300 italic">Merchant Fraud.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense identifies fraudulent merchants, suspicious activity, and platform abuse — protecting your ecosystem and your customers.
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
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">The Internal Threat.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Fraud doesn’t just come from users. Fake businesses and fraudulent merchants exploit platforms for laundering funds or processing illegitimate transactions.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Fake Businesses", d: "Shell merchants processing illegitimate volume." },
                      { l: "Payment Laundering", d: "Using clean accounts to hide dirty funds." },
                      { l: "Undetected Abuse", d: "Bad actors often hide for long periods." },
                      { l: "Platform Exposure", d: "A single merchant can risk your entire brand." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                    <p className="text-xl font-bold italic text-brand-lime">“A single bad merchant can expose your entire platform to risk.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <ShieldAlert className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Risk Intelligence.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense monitors merchant behavior, transactions, and relationships to detect suspicious activity early.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Risk Scoring", i: <BarChart3 /> },
                      { l: "Behavior Monitoring", i: <Activity /> },
                      { l: "Pattern Analysis", i: <Zap /> },
                      { l: "Network Detection", i: <Network /> }
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

        {/* 4. ⚙️ HOW IT WORKS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Detection Flow.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See how Deep Sense identifies suspicious merchant activity throughout their lifecycle on your platform.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                 {[
                   { l: "Tracking", d: "Continuous activity monitoring." },
                   { l: "Analysis", d: "In-depth transaction evaluation." },
                   { l: "Signals", d: "Generation of high-risk markers." },
                   { l: "Scoring", d: "Real-time risk computation." },
                   { l: "Response", d: "Automated flag or block." }
                 ].map((step, i) => (
                   <React.Fragment key={i}>
                    <div className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                       <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-transform">
                          <span className="font-bold text-sm italic">0{i+1}</span>
                       </div>
                       <h4 className="text-lg font-bold italic uppercase tracking-tight mb-2">{step.l}</h4>
                       <p className="text-[10px] text-zinc-400 font-inter uppercase tracking-widest leading-relaxed">{step.d}</p>
                    </div>
                    {i < 4 && <div className="hidden lg:flex justify-center"><ArrowRight className="w-6 h-6 text-zinc-100" /></div>}
                   </React.Fragment>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. 🧠 BEHAVIORAL & 6. 🕸️ NETWORK DETECTION */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">Abnormal Behavior.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px] leading-relaxed">Identify deviations from healthy merchant behavior using sophisticated behavioral and network patterns.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Transaction Spikes", d: "Sudden, unexplained volume increases.", i: <Zap /> },
                      { l: "Inconsistent Flows", d: "Payment patterns that don't match the vertical.", i: <Activity /> },
                      { l: "High Reversals", d: "Abnormal chargeback or refund ratios.", i: <ShieldAlert /> },
                      { l: "Network Graph", d: "Identify shared devices and linked identities.", i: <Network /> }
                    ].map((sig, i) => (
                      <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-[44px] hover:shadow-xl transition-all group">
                         <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all">{React.cloneElement(sig.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic font-manrope">{sig.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{sig.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
                 <Share2 className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Uncover Networks.</h3>
                 <div className="space-y-10">
                    {[
                      { l: "Shared Devices", d: "Identify multiple merchants using the same hardware." },
                      { l: "Linked Identities", d: "Discover common PII across suspicious entities." },
                      { l: "Coordinated Activity", d: "Detect simultaneous bursts across merchant pools." },
                      { l: "Hidden Patterns", d: "Unveiling relationships that traditional tools miss." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-1.5 h-12 bg-brand-lime group-hover/item:bg-white transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{it.l}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px]">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. 📊 SCORING & 8. 🔍 TRANSACTION MONITORING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 lg:p-24 bg-white border border-gray-100 rounded-[80px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Continuous Scoring.</h3>
                <p className="text-zinc-500 text-lg font-inter italic mb-10 leading-relaxed">Every merchant is evaluated continuously based on transaction behavior, device usage, and linked entities.</p>
                 <div className="grid grid-cols-1 gap-6 relative z-10">
                    {[
                      { l: "Transaction Behavior", v: "High Influence" },
                      { l: "Device Persistence", v: "Medium Influence" },
                      { l: "Graph Connections", v: "Critical Signal" }
                    ].map((it, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50">
                         <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 italic">{it.l}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime bg-neutral-900 px-3 py-1 rounded-full">{it.v}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 lg:p-24 bg-neutral-900 text-white rounded-[80px] shadow-3xl group overflow-hidden relative border border-white/5">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope">Platform Integrity.</h3>
                 <p className="text-white/40 text-lg font-inter italic mb-10 leading-relaxed">Deep Sense detects fraudulent transactions at the merchant level, identifying patterns across multiple accounts.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                    {[
                      { l: "Laundering Detection", i: <Database /> },
                      { l: "Velocity Control", i: <Zap /> },
                      { l: "Cross-Entity Risk", i: <Network /> },
                      { l: "Policy Enforcement", i: <CheckCircle2 /> }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="text-brand-lime">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}</div>
                         <h5 className="font-bold text-white text-[10px] uppercase mb-1 tracking-widest">{it.l}</h5>
                      </div>
                    ))}
                 </div>
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/5 to-transparent pointer-events-none" />
              </div>
           </div>
        </section>

        {/* 9. ⚡ ALERTS & 10. 🧑💻 INVESTIGATION TOOLS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 relative overflow-hidden group">
                 <Search className="w-40 h-40 absolute bottom-0 right-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Investigation Tools.</h3>
                 <ul className="space-y-8 relative z-10 font-manrope italic">
                    {[
                      { s: "Merchant Activity Timeline", d: "See every event in chronological order." },
                      { s: "Linked Entity Analysis", d: "Visual explore relationships and clusters." },
                      { s: "Transaction History", d: "Deep dive into specific payment patterns." },
                      { s: "Automated Case Workflow", d: "Move from alert to resolution in minutes." }
                    ].map((it, i) => (
                      <li key={i} className="flex gap-8 group/quote">
                         <div className="w-1 h-12 bg-brand-lime/40 group-hover/quote:bg-brand-lime transition-all duration-500" />
                         <div>
                            <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">{it.s}</h5>
                            <p className="text-[10px] text-white/30 font-inter">{it.d}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Act Immediately.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Don&apos;t wait for chargebacks. Identify risky merchants before they impact your financial bottom line.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Flag High-Risk", i: <ShieldAlert /> },
                      { l: "Block Transactions", i: <CheckCircle2 /> },
                      { l: "Trigger Alerts", i: <Bell /> },
                      { l: "Notify Teams", i: <Users /> }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">
                         <div className="text-neutral-900 mb-6">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-tight italic font-manrope">{it.l}</h4>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 11. 🏭 USE CASES & 12. 🆚 COMPARISON */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Ecosystem Protection.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See why Deep Sense is the preferred choice for marketplaces and modern payment providers.</p>
              </div>

              <div className="overflow-x-auto text-left mb-40">
                 <table className="w-full border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-200 italic">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Merchant Risk Scoring", d: "Yes (Continuous)", s: "Limited / Periodic" },
                         { c: "Network Ring Detection", d: "Yes (Graph-Based)", s: "None / Manual" },
                         { c: "Real-Time Monitoring", d: "Yes", s: "Often Delayed (Batch)" },
                         { c: "Behavior Analysis", d: "Yes (Advanced)", s: "Basic / Threshold-Based" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-neutral-100 transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-neutral-900 font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-200 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Fake Account Prevention", i: <Building2 /> },
                   { l: "Payment Laundering", i: <Zap /> },
                   { l: "Merchant Collusion", i: <Network /> },
                   { l: "Policy Enforcement", i: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center">
                      <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}</div>
                      <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest">{it.l}</h5>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 13. 📈 BUSINESS IMPACT & 14. 💬 TRUST */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Platform Integrity.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Protect your reputation and financial assets by ensuring your merchant pool is clean and compliant.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Reduce Abuse", d: "Mitigate platform-wide risk." },
                      { l: "Prevent Reputational Damage", d: "Protect your ecosystem integrity." },
                      { l: "Improve Partner Trust", d: "Build confidence with providers." },
                      { l: "Maintain Integrity", d: "Ensure high-quality merchant pools." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden group border border-white/5 shadow-3xl">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Ecosystem Trust.</h3>
                 <ul className="space-y-12">
                    {[
                      "We identified fraudulent merchants early before they could cascade risk.",
                      "Deep Sense helped us protect our marketplace ecosystem integrity.",
                      "The network ring detection is a critical asset for our compliance team."
                    ].map((quote, i) => (
                      <li key={i} className="flex gap-8 group/quote italic">
                         <div className="w-1 h-12 bg-white/10 group-hover/quote:bg-brand-lime transition-all duration-500" />
                         <p className="text-xl font-manrope font-italic text-white/50 group-hover/quote:text-white transition-colors leading-relaxed">“{quote}”</p>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* 15. 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br /><span className="opacity-30">Platform.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Stop merchant fraud before it cascades through your ecosystem.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900 font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10 font-manrope">
                      Talk to Sales
                    </button>
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
