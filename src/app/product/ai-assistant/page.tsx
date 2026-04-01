"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Sparkles, 
  Zap, 
  Activity, 
  ArrowRight,
  TrendingUp,
  History,
  MessageSquare,
  Search,
  CheckCircle2,
  Cpu,
  RefreshCcw
} from "lucide-react";

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Sparkles className="w-3.5 h-3.5" />
               Next-Gen Fraud Copilot
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Fraud Intelligence, <br />
               <span className="text-zinc-300 italic">Conversational.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense AI Assistant transforms complex fraud data into clear, actionable insights through natural language. Ask questions, generate summaries, and explain risk in seconds.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Try AI Assistant
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. THE INVESTIGATOR'S AI */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Conversational IQ.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Stop writing complex queries. Just ask. Deep Sense AI understands your data schema and business rules, providing instant answers to your most pressing risk questions.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { l: "Natural Language Queries", d: "“Show me all high-risk logins from high-velocity IPs.”", i: <MessageSquare /> },
                      { l: "Auto-Summaries", d: "Generate comprehensive case reports with a single click.", i: <Activity /> },
                      { l: "Explainable Risk", d: "Understand exactly why a transaction was flagged.", i: <Cpu /> },
                      { l: "Rule Generation", d: "Translate plain English into active production rules.", i: <Zap /> }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 rounded-[40px] border border-white/5 hover:border-brand-lime/20 transition-all group">
                         <div className="text-brand-lime mb-4 group-hover:scale-110 transition-transform">{it.i}</div>
                         <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-1 italic">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute top-0 right-0 p-12">
                    <Sparkles className="w-40 h-40 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">Smart Console.</h3>
                 <div className="space-y-4">
                    <div className="flex justify-end">
                       <div className="p-4 bg-white/10 rounded-[24px] text-[10px] text-white/60 font-inter italic max-w-[80%]">
                          Why was the settlement for user #882 blocked?
                       </div>
                    </div>
                    <div className="flex justify-start">
                       <div className="p-6 bg-neutral-900 border border-brand-lime/30 rounded-[32px] text-[10px] text-white font-inter leading-relaxed shadow-3xl italic">
                          User #882 was blocked due to a <span className="text-brand-lime font-bold italic">Velocity Spike (9 trx/min)</span> originating from a <span className="text-brand-lime font-bold italic">known VPN proxy</span>. Behavioral signals also show <span className="text-brand-lime font-bold italic">95% mouse-movement automation</span>.
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. KEY FEATURES LIST */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { l: "Schema Aware", d: "Instantly understands your custom transaction metadata.", i: <Search /> },
                   { l: "One-Click Reports", d: "Export professional summaries for compliance teams.", i: <RefreshCcw /> },
                   { l: "Audit Ready", d: "Every AI-generated response is logged for full accountability.", i: <History /> }
                 ].map((it, i) => (
                   <div key={i} className="space-y-8 p-12 bg-zinc-50 rounded-[64px] border border-gray-100 group hover:bg-neutral-900 transition-all">
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight text-neutral-900 group-hover:text-white transition-all">{it.l}</h4>
                      <p className="text-zinc-500 font-inter leading-relaxed italic group-hover:text-white/40 transition-all">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. PERFORMANCE METRICS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 text-center text-neutral-900">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto">AI Performance.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { v: "85%", l: "Faster Investigation Cycles", i: <TrendingUp /> },
                   { v: "99%", l: "Intent Recognition Accuracy", i: <CheckCircle2 /> },
                   { v: "<2s", l: "Average Response Time", i: <Zap /> }
                 ].map((m, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-xl transition-all">
                      <div className="text-neutral-900 mb-8 flex justify-center">{m.i}</div>
                      <div className="text-6xl font-black text-neutral-900 italic tracking-tighter mb-4">{m.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 italic">{m.l}</div>
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
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Talk to Your <br /><span className="text-white/20">Data.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Experience the full power of Deep Sense for AI-driven fraud intelligence.</p>
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

// Minimal missing component definitions
export {};
