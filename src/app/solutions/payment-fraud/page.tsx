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
  Send,
  Building,
  ArrowUpRight,
  Workflow,
  Globe,
  Lock,
  RefreshCw,
  Search
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PaymentFraudPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-red-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Real-Time Network Shield</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Eliminate Payment <br /><span className="text-red-600">Integrity</span> Risk.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense provides the cross-network intelligence to identify professional money laundering and payment fraud rings before settlement happens.
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

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12 pr-12 group">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center font-manrope">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-tight">Instant Payments, Instant Fragility.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-12 pr-12">The demand for real-time settlement has created a massive opportunity for fraudsters to execute high-velocity cash-out schemes before institutional detection layers can react.</p>
                 <div className="space-y-4 font-manrope pr-6">
                    {[
                       "Professional carding rings validate thousands of cards per minute.",
                       "Push-payment fraud (APP) leads to irreversible institutional loss.",
                       "Cross-border payment complexity hides money laundering trails.",
                       "Legacy network tools can't group related fraud signals in real-time."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-red-600 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-12 group-hover:text-red-600 transition-colors">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-red-600/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10 font-manrope">Network Fragility</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24">"Every second of processing latency in high-volume networks doubles the window for coordinated fraud ring execution."</p>
                    <div className="grid grid-cols-2 gap-6 italic">
                       {[
                         { l: "Coordinated Attack", v: "Instant Stop" },
                         { l: "Settlement Guard", v: "Real-Time" }
                       ].map((it, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-lime transition-all">
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">{it.l}</span>
                            <span className="block text-2xl font-black italic">{it.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-7. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-red-100 decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">Secure Every Payment Pathway</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10 pr-10 font-manrope italic">Deep Sense provides the cross-vector intelligence to protect payments across cards, banks, and digital wallets.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope italic pr-10 pr-12 group">
                 {[
                   { t: "Processing Security", d: "Identify carding shells and triangulation fraud at the point of authorization.", c: "Identify Velocity Surges", i: <ShieldCheck /> },
                   { t: "Digital Wallets & P2P", d: "Monitor wallet loading and transfers for unusual smurfing and structuring patterns.", c: "Prevent Push Payment Fraud", i: <Smartphone /> },
                   { t: "Cross-Border Payments", d: "Analyze international fund flow complexity to detect hidden money laundering trails.", c: "Identify Money Mules", i: <Globe /> }
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
                    { t: "Network Graph Detection", d: "Identify clusters of related accounts and merchants used in coordinated fraud ring attacks.", i: <Network /> },
                    { t: "Authorization Integrity", d: "Perform sub-millisecond risk checks during the payment authorization flow without adding latency.", i: <Zap /> },
                    { t: "Settlement Risk Hold", d: "Automatically trigger holds on high-risk settlements to prevent capital flight and bust-out loss.", i: <Building /> }
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
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight font-manrope pr-16">The Flow, <br />Not the File.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12">Payment fraud happens in the flux of high-velocity money movement. Deep Sense analyzes the *flow* of funds across entities to catch patterns that file-based screening misses.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10 pr-12 group hover:border-red-400 transition-all">
                    "Deep Sense analyzes transaction velocity, merchant category consistency, and cross-border risk signals simultaneously to return a definitive risk score."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Institutional Payment Oversight</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse font-manrope italic">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px] uppercase">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Payment Detection Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-red-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Standard Network Tools</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time settlement hold logic",
                         "Merchant risk behavioral monitoring",
                         "Cross-gateway transaction graphing",
                         "Automatic push-payment fraud alerts",
                         "Global sanction re-screening pipeline"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8 font-manrope">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block font-manrope tracking-tighter pr-4">Network Ready</span>
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
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Protect Your Payment Liquidity</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight">
                   Secure the Authorization <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Before the Settlement.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Eliminate payment fraud, identify money mules, and protect your institutional capital with the real-time intelligence engine built for processing at scale.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-red-600 hover:text-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Request Payment Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     View Platform Overview
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
