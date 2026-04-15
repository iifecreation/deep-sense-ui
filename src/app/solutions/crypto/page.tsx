"use client";

import React from "react";
import { 
  Zap, 
  Globe, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Network, 
  Users, 
  BarChart3,
  Link,
  Coins,
  ShieldAlert,
  History,
  Workflow,
  Lock,
  Globe2
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CryptoSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-violet-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Coins className="w-3.5 h-3.5" />
              <span>Web3 Intelligence Unit</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Trustless Assets, <br />Trustworthy <span className="text-violet-600">Compliance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense provides the cross-chain AML and fraud detection infrastructure for exchanges, wallets, and DeFi protocols to scale with absolute regulatory confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-manrope">
                 Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                 View API Docs
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-[1.1]">Blockchain Anonymity vs. Global Regulation.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-inter pr-12">As Web3 matures, crypto platforms must balance decentralization with the complex requirements of AML, Travel Rule compliance, and high-velocity fund monitoring.</p>
                 <div className="space-y-4 font-manrope pr-6">
                    {[
                       "Exchanges are prime targets for large-scale money laundering.",
                       "Un-hosted wallets create massive screening and attribution gaps.",
                       "Cross-chain fund movements hide the source of wealth.",
                       "Travel Rule requirements demand instant, secure data exchange."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-violet-600 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-6 group-hover:text-violet-600 transition-colors">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-violet-600/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10 font-manrope">Network Integrity</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24">"Monitoring the intersection of fiat and crypto is the most critical compliance frontier of the next decade."</p>
                    <div className="grid grid-cols-2 gap-6 italic">
                       {[
                         { l: "Chain Coverage", v: "25+ Networks" },
                         { l: "Attribution", v: "2B+ Records" }
                       ].map((it, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:border-violet-400 transition-all">
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">{it.l}</span>
                            <span className="block text-2xl font-black italic">{it.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-6. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-violet-100 decoration-8 underline-offset-16 font-manrope italic pr-12">Full-Stack Web3 Compliance</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10 pr-10 font-manrope italic">Deep Sense provides the cross-chain intelligence layer to monitor wallets, exchanges, and DeFi interactions in real-time.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope italic pr-10 pr-12 group">
                 {[
                   { t: "Exchange Monitoring", d: "Identify high-velocity wash trading and suspicious deposit patterns in real-time.", c: "Detect Illicit Fiat On-ramping", i: <Globe2 /> },
                   { t: "Wallet Screening", d: "Screen un-hosted wallets against global sanctions and high-risk attribution lists.", c: "Identify Mixer & Bridge usage", i: <Link /> },
                   { t: "Travel Rule Tools", d: "Automate the exchange of required originator and beneficiary data for cross-platform transfers.", c: "Satisfy VASP Obligations", i: <Workflow /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-12 pr-6">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-zinc-100" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8 italic">{it.d}</p>
                      <div className="flex items-center gap-3 text-violet-600 font-black uppercase text-[10px] tracking-widest font-manrope italic">
                         <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse font-manrope" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Real-time Chain Analysis */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-10">
           <div className="absolute top-0 right-0 p-24 opacity-20 filter grayscale invert contrast-200 pointer-events-none">
             <Layers className="w-96 h-96 text-white/5 animate-pulse" />
           </div>
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10 font-manrope italic pr-10 pr-12">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  {[
                    { t: "Cross-Chain Linkage", d: "Discover related entities across EVM and non-EVM networks with our graph intelligence.", i: <Network /> },
                    { t: "Sanctions Re-screening", d: "Continuously check all custodial wallets against frequently updated global watchlists.", i: <ShieldAlert /> },
                    { t: "High-Throughput Analytics", d: "Process millions of on-chain events per hour with sub-millisecond alert logic.", i: <Zap /> }
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
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight">Beyond The <br />Block.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12">Deep Sense fuses on-chain data with fiat attribution and behavioral biometrics to create the most complete view of Web3 risk available.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10 pr-12">
                    "Web3 compliance isn't just about screening wallets anymore—it's about understanding the institutional relationship between the asset and the actor."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Built for the Open Protocol Future</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Web3 Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-violet-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Standard Monitoring</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Native Travel Rule integration",
                         "Cross-chain entity resolution",
                         "Real-time DeFi interaction screening",
                         "Institutional fiat-crypto attribution",
                         "Support for un-hosted wallet risk"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block">Institutional Ready</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               Manual / Fragmented
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
              <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Secure Digital Asset Operations</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10">
                   Scale Your Web3 <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">With Confidence.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-10 font-manrope">
                    Protect your exchange, satisfy VASP obligations, and monitor complex on-chain behavior with the intelligence engine built for the next economy.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-violet-600 hover:text-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Request Web3 Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     View Travel Rule Docs
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
