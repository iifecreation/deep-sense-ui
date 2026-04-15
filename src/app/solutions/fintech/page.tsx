"use client";

import React from "react";
import { 
  Zap, 
  Smartphone, 
  CreditCard, 
  Banknote, 
  Code, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  RefreshCw, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Users, 
  BarChart3,
  Server,
  Cloud,
  Rocket
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function FintechSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/5 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Rocket className="w-3.5 h-3.5" />
              <span>Next-Gen Financial Infrastructure</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Fraud Prevention <br />Built for <span className="text-zinc-400">Fintech.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense provides the high-performance infrastructure for neobanks and digital wallets to scale safely without compromising on user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase">
                View API Docs
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10">Fintech Mobility Requires Faster Risk Decisions.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-6">High-growth fintechs struggle with manual compliance bottlenecks, slow decisioning cycles, and rising false positives that churn high-value users.</p>
                 <div className="space-y-4">
                    {[
                       "Legacy AML systems are too slow for instant payments.",
                       "Manual review bottlenecks stop hyper-growth in its tracks.",
                       "High friction during onboarding kills conversion rates.",
                       "Fragmented data prevents a unified view of customer risk."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-brand-lime transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5">
                 <ShieldCheck className="w-64 h-64 absolute top-0 right-0 p-12 text-white/5 animate-pulse opacity-20" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">The Growth Tax</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12 font-manrope">Unchecked fraud costs fintechs 3.5x more than the actual transaction value.</p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Friction Loss</span>
                          <span className="block text-2xl font-black italic">42%</span>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Compliance Lag</span>
                          <span className="block text-2xl font-black italic">Zero</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-6. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">Enterprise AML for Agile Teams</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10">Real-time decisioning and developer-centric infrastructure designed to scale with your user base.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left">
                 {[
                   { t: "Neobanking", d: "Protect account opening and monitor P2P transfers in milliseconds.", c: "Detect ATO & Identity Theft", i: <Smartphone /> },
                   { t: "Digital Wallets", d: "Secure wallet-to-wallet transfers and prevent merchant fraud at scale.", c: "Instant Payment Screening", i: <CreditCard /> },
                   { t: "Lending & Credit", d: "Assess behavior and monitor repayment patterns for dynamic fraud detection.", c: "Onboarding Risk Scoring", i: <Banknote /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8">{it.d}</p>
                      <div className="flex items-center gap-3 text-brand-lime font-black uppercase text-[10px] tracking-widest">
                         <CheckCircle2 className="w-4 h-4" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Developer-First & 8. Performance */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-12">
           <div className="absolute top-0 right-0 p-24 opacity-20 filter grayscale invert contrast-200">
             <Code className="w-96 h-96 text-white/5 animate-pulse" />
           </div>
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic">Built to be Integrated.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-8">Our developer-first infrastructure provides the APIs and SDKs to drop enterprise-grade AML into your product in days, not months.</p>
                 <div className="grid grid-cols-2 gap-8 font-bold italic font-manrope">
                    {[
                      { l: "REST APIs", v: "Global Endpoints" },
                      { l: "Webhooks", v: "Event-Driven" },
                      { l: "SDKs", v: "Node, Go, Python" },
                      { l: "SANDBOX", v: "Unlimited Testing" }
                    ].map((st, i) => (
                      <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-6">
                         <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic">{st.l}</span>
                         <span className="text-2xl font-black tracking-tight italic">{st.v}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white/5 border border-white/10 rounded-[80px] backdrop-blur-3xl group">
                 <h3 className="text-3xl font-black uppercase italic mb-10 border-b border-white/5 pb-10">Performance Benchmarks</h3>
                 <div className="space-y-8 font-manrope italic">
                    <div className="flex flex-col gap-4">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
                          <span>API LATENCY (P99)</span>
                          <span className="text-brand-lime">&lt; 150MS</span>
                       </div>
                       <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-lime w-[98%] animate-pulse" />
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { l: "THROUGHPUT", v: "100k+ RPS", i: <Activity /> },
                         { l: "UPTIME", v: "99.99%", i: <Cloud /> },
                         { l: "DATA ISOLATION", v: "Single-Tenant", i: <Server /> },
                         { l: "AUTO-SCALING", v: "Infinite", i: <Cpu /> }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <div className="text-brand-lime">{it.i}</div>
                            <div className="flex flex-col">
                               <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{it.l}</span>
                               <span className="text-sm font-black italic">{it.v}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. Build vs Buy ANALYSIS */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Build vs. Buy</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Strategic Metric</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-brand-lime text-neutral-900">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Internal Build</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Time to market Dashboard",
                         "ML Model Retraining rails",
                         "Global sanction coverage",
                         "Operational overhead",
                         "Scalability maintenance"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block">Institutional Readiness</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               12-18 Months / High Overhead
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 13. CTA SECTION */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Institutional Growth Ready</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10">
                   Scale Your Fintech <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Without the Risk.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12">
                   Launch faster, scale higher, and stay compliant with the fraud engine built for modern neobanks and high-performance payments.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic">
                     Get Started Now
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12">
                     Talk to FinOps Sales
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
