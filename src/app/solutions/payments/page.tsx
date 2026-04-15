"use client";

import React from "react";
import { 
  Zap, 
  CreditCard, 
  Send, 
  Globe, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  RefreshCw, 
  Cpu, 
  Network, 
  Users, 
  BarChart3,
  Building,
  ArrowUpRight,
  Workflow
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PaymentsSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[7000px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Send className="w-3.5 h-3.5" />
              <span>Payments Infrastructure Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Secure Payment <br /><span className="text-indigo-600">Integrity</span> at Scale.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense provides the real-time surveillance and risk automated controls for payment gateways, networks, and processors.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase">
                 Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase">
                 Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10">High-Volume Settlement Risk Is Growing.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-6">Payment processors must balance instant settlement expectations with the massive operational risk of undetected fraud rings and money laundering.</p>
                 <div className="space-y-4 font-manrope">
                    {[
                       "Instant settlement creates narrow investigation windows.",
                       "Merchant fraud (bust-out/carding) causes irreversible loss.",
                       "Cross-border transaction complexity increases blind spots.",
                       "Legacy screening tools cannot process real-time payment volumes."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-indigo-600 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5">
                 <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Risk Exposure</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic">
                    <p className="text-zinc-500 text-sm italic pr-12 font-manrope">"Every second of delay in payment fraud detection increases the probability of capital loss by 22%."</p>
                    <div className="grid grid-cols-1 gap-6">
                       <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex justify-between items-center group-hover:border-brand-lime transition-all">
                          <div>
                             <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Processing Time</span>
                             <span className="block text-xl font-black italic">&lt; 150ms per Tx</span>
                          </div>
                          <Zap className="text-brand-lime w-6 h-6" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-6. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-indigo-200 decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">Automated Payment Integrity</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10">Deep Sense provides the end-to-end framework for protecting every transaction from authorization to final settlement.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope italic">
                 {[
                   { t: "Processing Security", d: "High-speed screening for card-not-present and instant credit transactions.", c: "Identify Carding & Triangulation", i: <ShieldCheck /> },
                   { t: "Settlement Safety", d: "Automatic hold triggers on high-risk settlements to prevent bust-out loss.", c: "Prevent Settlement Leakage", i: <Building /> },
                   { t: "Merchant Risk", d: "Continuous monitoring of merchant behavior to detect sudden shifts in volume.", c: "Detect Transaction Laundering", i: <Workflow /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-zinc-100" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8 italic">{it.d}</p>
                      <div className="flex items-center gap-3 text-indigo-600 font-black uppercase text-[10px] tracking-widest font-manrope italic">
                         <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Fraud Patterns in Payments */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-12">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div className="order-2 lg:order-1 flex flex-col gap-12">
                  {[
                    { t: "Carding Detection", d: "Identify low-value authorization testing patterns used to validate stolen credentials.", i: <CreditCard /> },
                    { t: "Smurfing & Structuring", d: "Detect rapid, fragmented fund movements designed to bypass traditional reporting thresholds.", i: <Layers /> },
                    { t: "Merchant Bust-Out", d: "Spot sudden, unnatural surges in merchant transaction volume before settlement happens.", i: <ArrowUpRight /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group italic font-manrope">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-sm">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-white/10" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter italic font-manrope">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight">Identify <br />Payment Patterns.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-24">Our intelligence layer identifies complex financial crime patterns that traditional rule-based systems miss entirely.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-24 leading-tight italic">
                    "Deep Sense analyzes transaction velocity, IP geolocation, device fingerprints, and merchant category codes simultaneously to return a definitive risk score."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Enterprise Payment Oversight</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Payment Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Standard PSP Tools</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time settlement hold logic",
                         "Merchant risk behavioral monitoring",
                         "Cross-gateway transaction graph",
                         "Automatic STR disclosure files",
                         "Global sanction re-screening"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block">Institutional Ready</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               Partial / Delayed
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 12. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Secure Payment Liquidity</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10">
                   Protect Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Payment Ecosystem.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12">
                    Enable secure processing, prevent settlement fraud, and scale your gateway with institutional-grade risk infrastructure.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic">
                     Request Payment Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12">
                     Contact Risk Advisory
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
