"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Cpu, 
  Zap, 
  Shield, 
  ArrowRight,
  Layers,
  Settings,
  History,
  Terminal
} from "lucide-react";

export default function RulesEngineProduct() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Settings className="w-3.5 h-3.5" />
               Enterprise Rules Engine
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               The Power of <br />
               <span className="text-zinc-300 italic">Dynamic Logic.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense&apos;s rules engine provides ultimate control over your fraud logic. Create, test, and deploy complex behavioral rules in milliseconds.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Explore Rules API
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. DYNAMIC LOGIC (VISUAL) */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">No-Code Policy Engine.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Empower risk teams to adapt to fraud in seconds, not sprint cycles. Our flexible engine handles thousand-level rule sets with zero latency impact.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {[
                         { l: "Instant Deployment", d: "Go from rule creation to active production in seconds." },
                         { l: "Parallel Execution", d: "Run thousands of complex rules simultaneously." },
                         { l: "Version Control", d: "Full history and rollback for all logic changes." },
                         { l: "Conditional Logic", d: "Support for nested IF/THEN/ELSE operations." }
                       ].map((it, i) => (
                         <div key={i} className="space-y-2">
                            <div className="text-brand-lime font-black italic text-lg uppercase tracking-tight">{it.l}</div>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                    <Terminal className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">Rule Structure.</h3>
                    <div className="p-8 bg-black/40 rounded-[40px] border border-white/10 font-mono text-[10px] space-y-4">
                       <div className="text-brand-lime">{`// Velocity Protection`}</div>
                       <div className="text-white/60">IF count(transactions) &gt; <span className="text-brand-lime font-bold">5</span> IN <span className="text-brand-lime font-bold">60s</span></div>
                       <div className="text-white/60">AND total_amount &gt; <span className="text-brand-lime font-bold">1000</span></div>
                       <div className="text-white/60">AND device_reputation &lt; <span className="text-brand-lime font-bold">50</span></div>
                       <div className="text-brand-lime font-bold uppercase">THEN BLOCK_TRANSACTION</div>
                    </div>
                    <div className="mt-8 flex justify-between text-[8px] font-bold uppercase tracking-widest text-white/20">
                       <span>Processed in 2ms</span>
                       <span>Signal Source: API</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. CAPABILITIES (TESTING & SIMULATION) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-zinc-50 border border-gray-100 p-12 lg:p-24 rounded-[80px] shadow-sm relative overflow-hidden group">
                    <History className="w-16 h-16 text-neutral-900 mb-8" />
                    <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Shadow Testing.</h3>
                    <p className="text-zinc-500 text-lg font-inter mb-10 leading-relaxed italic">Test new rules against real historical data without affecting your production traffic. Minimize false positives before they happen.</p>
                    <div className="space-y-6">
                       {[
                         { l: "Backward Testing", v: "Re-run past events against new logic." },
                         { l: "Side-by-Side Analysis", v: "Compare production vs. shadow performance." },
                         { l: "Impact Forecasting", v: "Predict block rates and revenue impact." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-6 group/it items-center">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover/it:bg-neutral-900 group-hover/it:text-brand-lime transition-all">
                               <span className="font-bold text-xs italic">0{i+1}</span>
                            </div>
                            <div>
                               <h6 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 italic">{it.l}</h6>
                               <p className="text-[10px] text-zinc-400 font-inter font-manrope">{it.v}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 order-1 lg:order-2 text-center lg:text-left">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Unlimited Scalability.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Our engine scales with your volume. Whether you have 10 rules or 10,000, Deep Sense maintains institutional performance standards.</p>
                 <div className="flex gap-4 justify-center lg:justify-start">
                    <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-xl flex items-center gap-3 italic">
                      Explore Performance
                      <Layers className="w-5 h-5 text-brand-lime" />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. TECHNICAL SPECS */}
        <section className="py-40 bg-zinc-900 text-white mx-4 rounded-[100px] border border-white/5 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-brand-lime/10 decoration-8 underline-offset-16">Engine Specs.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[600px] mx-auto">Precision and speed optimized for mission-critical security.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { v: "<2ms", l: "Rule Evaluation", i: <Zap /> },
                   { v: "10k+", l: "Concurrent Rules Support", i: <Cpu /> },
                   { v: "99.999%", l: "Engine Availability", i: <Shield /> },
                   { v: "Full", l: "Audit & Versioning", i: <History /> }
                 ].map((stat, i) => (
                   <div key={i} className="p-12 bg-white/5 rounded-[72px] border border-white/10 hover:bg-white/10 transition-all text-center">
                      <div className="text-brand-lime mb-8 flex justify-center">{stat.i}</div>
                      <div className="text-4xl font-black text-white italic tracking-tighter mb-4">{stat.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-manrope italic">{stat.l}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Deploy Your <br /><span className="text-white/20">Rules Engine.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Build and deploy mission-critical fraud logic in seconds.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      View Rule Specs
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
