"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Cpu, 
  Zap, 
  Shield, 
  ArrowRight,
  Database,
  Search,
  CheckCircle2,
  History,
  TrendingUp
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <History className="w-3.5 h-3.5" />
               Technical Deep Dive
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               How Deep Sense <br />
               <span className="text-zinc-300 italic">Protects You.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Explore the multi-layer process that happens in milliseconds to ensure every transaction, login, and account action is secure and verified.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  View Architecture
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. THE 5-STEP PROCESS (VISUAL TIMELINE) */}
        <section className="py-24">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-100 -translate-y-1/2 z-0" />
                 {[
                   { t: "Ingestion", i: <Database />, s: "01" },
                   { t: "Enrichment", i: <Zap />, s: "02" },
                   { t: "AI Scoring", i: <Cpu />, s: "03" },
                   { t: "Decisioning", i: <Shield />, s: "04" },
                   { t: "Resolution", i: <CheckCircle2 />, s: "05" }
                 ].map((step, i) => (
                   <div key={i} className="relative z-10 flex flex-col items-center group">
                      <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
                         {React.cloneElement(step.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-1 italic">{step.s}</div>
                      <div className="text-sm font-bold uppercase tracking-tight text-neutral-900 italic">{step.t}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 3. STEP 1: INGESTION */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">01. Real-Time Ingestion.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense ingests billions of events per second with sub-5ms latency. Every data point is encrypted at the source and processed in memory.</p>
                 <div className="space-y-6">
                    {[
                      { l: "High Throughput", d: "Designed for web-scale transaction volumes." },
                      { l: "Global Edge", d: "Data processed closest to the user for speed." },
                      { l: "Schema-Less", d: "Flexible data ingestion for any event type." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 group/item">
                         <div className="w-1.5 h-12 bg-zinc-100 group-hover/item:bg-neutral-900 transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1 tracking-tight italic">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed max-w-[300px] italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group">
                 <Database className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-800 opacity-20 group-hover:scale-110 transition-transform italic" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Data Stream.</h3>
                 <div className="space-y-4 font-mono text-[10px] text-white/40">
                    <div className="flex gap-4"><span className="text-brand-lime">IN</span> <span>{`{ type: "transaction", amount: 450.00 }`}</span></div>
                    <div className="flex gap-4"><span className="text-brand-lime">IN</span> <span>{`{ type: "login", user: "u_9422", ip: "182..." }`}</span></div>
                    <div className="flex gap-4"><span className="text-brand-lime">IN</span> <span>{`{ type: "transfer", from: "a_1", to: "a_2" }`}</span></div>
                    <div className="flex gap-4"><span className="text-brand-lime">IN</span> <span>{`{ type: "signup", email: "test@..." }`}</span></div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. STEP 2: ENRICHMENT */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-white border border-gray-100 p-12 lg:p-24 rounded-[80px] shadow-sm relative overflow-hidden group">
                    <Search className="w-16 h-16 text-neutral-900 mb-8" />
                    <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Data Enrichment.</h3>
                    <p className="text-zinc-500 text-lg font-inter mb-10 leading-relaxed italic">Raw data is cross-referenced with our global intelligence network to add device health, IP reputation, and identity markers.</p>
                    <div className="grid grid-cols-2 gap-4">
                       {["Device Fingerprint", "VPN Detection", "Email Reputation", "Known Fraud Rings", "Proxy Scoring", "Location Velocity"].map((it, i) => (
                         <div key={i} className="px-6 py-4 bg-zinc-50 rounded-[32px] border border-gray-100 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 font-manrope">{it}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 order-1 lg:order-2">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">02. Global Intelligence.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">We enrich every event with signals from over 5 billion monitored devices and 100M+ known malicious actors.</p>
                 <div className="flex gap-6">
                    <div className="text-neutral-900 font-black italic text-5xl">5B+</div>
                    <div className="text-[10px] font-bold uppercase text-zinc-300 tracking-[0.3em] self-center">Monitored Signals</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. STEP 3: AI SCORING */}
        <section className="py-40 bg-neutral-900 text-white mx-4 rounded-[100px] border border-white/5 overflow-hidden relative">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime/20 decoration-8 underline-offset-16 font-manrope">03. Neural Scoring.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Our deep learning models analyze thousands of feature vectors to produce a weighted risk score in less than 35ms.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Behavioral Biometrics", d: "Typing, mouse speed, and flow." },
                      { l: "Anomaly Detection", d: "Deviation from user baseline." },
                      { l: "Graph Links", d: "Connections to known bad actors." },
                      { l: "Predictive Risk", d: "Anticipate the next fraud attempt." }
                    ].map((it, i) => (
                      <div key={i} className="space-y-2">
                         <div className="text-brand-lime font-black italic text-lg uppercase tracking-tight">{it.l}</div>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 p-12 lg:p-24 rounded-[80px] border border-white/10 backdrop-blur-xl relative group">
                 <div className="absolute top-0 right-0 p-12">
                    <TrendingUp className="w-20 h-20 text-brand-lime opacity-20" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 font-manrope">Model Evolution.</h3>
                 <div className="h-64 flex items-end gap-2 group-hover:scale-105 transition-transform duration-1000">
                    {[40, 60, 45, 90, 65, 80, 55, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-t-xl group-hover:bg-brand-lime/20 transition-all border-x border-white/5" style={{ height: `${h}%` }} />
                    ))}
                 </div>
                 <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/20 italic">Accuracy over 30 days</div>
              </div>
           </div>
        </section>

        {/* 6. STEP 4 & 5: DECISION & RESOLUTION */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Final Resolution.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">From detection to automated action and detailed investigative context.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div className="p-12 md:p-24 bg-zinc-50 border border-gray-100 rounded-[80px] group transition-all hover:bg-neutral-900 hover:text-white">
                    <Shield className="w-16 h-16 text-neutral-900 mb-10 group-hover:text-brand-lime transition-all" />
                    <h4 className="text-3xl font-bold italic uppercase tracking-tighter mb-6">Step 04: Logic Engine.</h4>
                    <p className="text-zinc-500 text-lg font-inter mb-10 leading-relaxed italic group-hover:text-white/40">Apply your custom business rules on top of AI scores to trigger specific actions like block, challenge, or approve.</p>
                    <div className="p-6 bg-white border border-gray-100 rounded-[32px] group-hover:bg-white/5 group-hover:border-white/10 transition-all">
                       <code className="text-xs font-mono text-neutral-400 group-hover:text-brand-lime transition-all">IF score &gt; 800 THEN BLOCK</code>
                    </div>
                 </div>

                 <div className="p-12 md:p-24 bg-neutral-900 text-white rounded-[80px] overflow-hidden relative group">
                    <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <CheckCircle2 className="w-16 h-16 text-brand-lime mb-10" />
                    <h4 className="text-3xl font-bold italic uppercase tracking-tighter mb-6">Step 05: Automation.</h4>
                    <p className="text-white/40 text-lg font-inter mb-10 leading-relaxed italic">Deep Sense automatically triggers webhooks, updates external lists, and creates investigative cases for your risk team.</p>
                    <div className="flex gap-4">
                       <button className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-sm hover:scale-110 transition-all italic">View Alert Card</button>
                       <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all italic">Explore API</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Securing the <br /><span className="text-white/20">Ecosystem.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Experience the full power of the Deep Sense intelligence pipeline.</p>
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
