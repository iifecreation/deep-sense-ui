"use client";

import React from "react";
import { 
  Zap, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Cpu, 
  Network, 
  BarChart3, 
  Lock, 
  Smartphone,
  RefreshCw,
  Search,
  MousePointer2,
  AlertTriangle,
  History
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function TransactionFraudPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-red-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Zap className="w-3.5 h-3.5" />
              <span>Real-Time Ingestion Layer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Stop Transaction <br /><span className="text-red-600">Fraud</span> Instantly.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense evaluates every transaction in milliseconds to identify professional fraudsters while ensuring a frictionless experience for legitimate customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase">
                 Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                 Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10">Legacy Fraud Tools Are Too Slow.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-6 pr-12">Static rules and delayed processing create false positives that block good revenue and false negatives that allow professional fraud rings to operate undetected.</p>
                 <div className="space-y-4 font-manrope pr-6">
                    {[
                       "High false positive rates block legitimate customers.",
                       "Detection lag allows funds to be laundered instantly.",
                       "Inflexible rules can't adapt to new fraud patterns.",
                       "Fragmented data prevents accurate real-time scoring."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-red-600 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-6 group-hover:text-red-600 transition-colors">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-red-600/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Operational Leakage</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24">"False positives cost businesses $443B in lost revenue annually — far more than actual fraud."</p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:border-red-400 transition-all">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">False Declines</span>
                          <span className="block text-2xl font-black italic">62% Reduc.</span>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Decision Speed</span>
                          <span className="block text-2xl font-black italic">&lt; 150ms</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-7. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-red-100 decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">Real-Time Transaction Integrity</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10 pr-10 font-manrope italic">Deep Sense operates at the intersection of network, device, and behavioral intelligence to identify fraud at the point of ingestion.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope italic pr-10 pr-12 group">
                 {[
                   { t: "Card-Not-Present (CNP)", d: "Stop stolen credit card usage and professional carding sessions at checkout.", c: "Identify Proxy & VPN usage", i: <CreditCard /> },
                   { t: "Instant Payments", d: "Screen high-velocity instant transfers without delaying the settlement cycle.", c: "Prevent Push Payment Fraud", i: <Zap /> },
                   { t: "P2P Transfers", d: "Monitor wallet-to-wallet or account-to-account moves for unusual smurfing patterns.", c: "Detect Structuring Rings", i: <RefreshCw /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-12 pr-6 group">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-zinc-100" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8 italic pr-6">{it.d}</p>
                      <div className="flex items-center gap-3 text-red-600 font-black uppercase text-[10px] tracking-widest font-manrope italic">
                         <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse font-manrope" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. Intelligence Layers */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10 font-manrope italic pr-10 pr-12">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  {[
                    { t: "Dynamic Velocity Analysis", d: "Track transaction frequency and speed across accounts and cards to spot bots.", i: <Activity /> },
                    { t: "Behavioral Biometrics", d: "Analyze mouse paths and keystroke speed at the checkout form to identify non-human actors.", i: <MousePointer2 /> },
                    { t: "Historical Profiling", d: "Compare current events to the customer's legitimate baseline behavior in real-time.", i: <History /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic mb-10 last:mb-0">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all font-manrope">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-white/10 font-manrope" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight">Beyond The <br />Point-of-Sale.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12">Transaction fraud is rarely a single isolated event. Deep Sense looks across the entire user journey to identify the precursor signals of high-value fraud.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10 pr-12 group hover:border-red-400 transition-all">
                    "Deep Sense calculates risk before the customer even clicks 'Pay', by analyzing behavioral signals during form fill."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Built for Frictionless Growth</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Detection Feature</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-red-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Legacy Rules</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time behavioral risk scoring",
                         "Dynamic velocity thresholding",
                         "Invisible proxy/VPN identification",
                         "Institutional chargeback prediction",
                         "Zero-friction silent authentication"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block">Institutional Ready</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               No / Manual
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
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Secure Transactional Liquidity</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10">
                   Stop Fraud, <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Keep the Revenue.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope">
                    Protect your checkout, reduce false declines, and eliminate professional carding with the real-time intelligence engine built for scale.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Request Risk Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     Analyze My Data
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
