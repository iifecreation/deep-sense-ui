"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Shield, 
  Zap, 
  Activity, 
  Cpu, 
  Database, 
  ArrowRight,
  TrendingUp,
  Lock,
  CheckCircle2,
  LineChart,
  BarChart3,
  Network
} from "lucide-react";

export default function FraudDetectionProduct() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Shield className="w-3.5 h-3.5" />
               Real-Time Detection Engine
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Stop Fraud At <br />
               <span className="text-zinc-300 italic">The Signal Source.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense&apos;s detection engine combines billions of data points with millisecond-level processing to identify and block fraud before it impacts your bottom line.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3">
                  View API Docs
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. THE ENGINE (VISUAL FLOW) */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">The Intelligence Engine.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Our engine isn&apos;t just about rules. It&apos;s a multi-layer intelligence system that learns from every interaction.</p>
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { l: "High Fidelity", d: "Deep signal resolution for accurate decisions." },
                         { l: "Ultra Low Latency", d: "Sub-50ms processing for real-time checkout." },
                         { l: "Multi-Source", d: "Aggregating device, PII, and behavior." },
                         { l: "Self-Learning", d: "Models that adapt to evolving fraud vectors." }
                       ].map((it, i) => (
                         <div key={i} className="space-y-2">
                            <div className="text-brand-lime font-black italic text-lg uppercase tracking-tight">{it.l}</div>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                    <Cpu className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Signal Processing.</h3>
                    <div className="space-y-6">
                       {[
                         { l: "Step 1: Data Ingestion", i: <Database /> },
                         { l: "Step 2: Enrichment", i: <Zap /> },
                         { l: "Step 3: Graph Analysis", i: <Network /> },
                         { l: "Step 4: Machine Scoring", i: <BarChart3 /> },
                         { l: "Step 5: Decisioning", i: <CheckCircle2 /> }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-6 items-center group/item">
                            <div className="text-brand-lime group-hover/item:scale-110 transition-transform">{it.i}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover/item:text-white transition-colors">{it.l}</div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. LAYER 1: DEVICE INTELLIGENCE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-zinc-50 border border-gray-100 p-12 lg:p-24 rounded-[80px] shadow-sm relative overflow-hidden group">
                    <Lock className="w-16 h-16 text-neutral-900 mb-8" />
                    <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Device Intelligence.</h3>
                    <p className="text-zinc-500 text-lg font-inter mb-10 leading-relaxed italic">Identify fraudulent devices with accuracy, even across VPNs, proxies, and multi-accounting attempts.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {[
                         "Device Fingerprinting",
                         "VPN & Proxy Detection",
                         "Emulator Detection",
                         "Bot Mitigation",
                         "Hardware Profile Analysis",
                         "Incognito Mode Tracking"
                       ].map((it, i) => (
                         <div key={i} className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{it}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 order-1 lg:order-2">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Identity Proofing.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Go beyond static PII. Deep Sense cross-references account history, device health, and network reputation in real time.</p>
                 <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-xl flex items-center gap-3">
                   Explore Identity Intel
                   <ArrowRight className="w-5 h-5 text-brand-lime" />
                 </button>
              </div>
           </div>
        </section>

        {/* 4. LAYER 2: BEHAVIORAL BIOMETRICS */}
        <section className="py-40 bg-zinc-900 text-white mx-4 rounded-[100px] border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-lime/10 to-transparent pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime/30 decoration-8 underline-offset-16 font-manrope">Behavioral Signals.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Fraudsters follow patterns. We detect anomalies in typing, mouse movement, and page navigation to identify bots and bad actors.</p>
                 <div className="space-y-8">
                    {[
                      { l: "Nurture Patterns", d: "Identify bot-like acceleration in account warmup." },
                      { l: "Interaction Velocity", d: "Block rapid multi-account switches." },
                      { l: "Flow Anomalies", d: "Detect non-human page navigation paths." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 group/item">
                         <div className="w-1.5 h-12 bg-brand-lime/10 group-hover/item:bg-brand-lime transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-xs mb-1 tracking-tight">{it.l}</h5>
                            <p className="text-[10px] text-white/30 font-inter leading-relaxed max-w-[300px] italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 p-12 lg:p-24 rounded-[80px] border border-white/10 backdrop-blur-xl relative group">
                 <Activity className="w-40 h-40 absolute top-0 left-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 text-center font-manrope">Signal Health.</h3>
                 <div className="space-y-4">
                    {[85, 92, 78, 96].map((progress, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[8px] uppercase font-bold tracking-widest text-white/40">
                          <span>Layer 0{i+1}</span>
                          <span>{progress}% Reliability</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-lime transition-all duration-1000 group-hover:w-full" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. UNIFIED DECISIONING & 6. PERFORMANCE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Performance Core.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Absolute speed without compromising on detection fidelity.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { v: "47ms", l: "Average Decision Latency", i: <Zap /> },
                   { v: "99.99%", l: "Engine Uptime", i: <Lock /> },
                   { v: "10B+", l: "Events Processed / Mo", i: <LineChart /> },
                   { v: "0.01%", l: "False Positive Rate", i: <TrendingUp /> }
                 ].map((stat, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all text-center group">
                      <div className="text-neutral-900 mb-8 flex justify-center group-hover:text-brand-lime transition-colors">{stat.i}</div>
                      <div className="text-4xl font-black text-neutral-900 italic tracking-tighter mb-4">{stat.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 font-manrope">{stat.l}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Experience the <br /><span className="text-white/20">Detection Engine.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Integrate millisecond-level fraud intelligence into your stack today.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
                      View API Specs
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
