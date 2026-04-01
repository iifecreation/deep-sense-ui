"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Activity, 
  Cpu, 
  ArrowRight,
  Shield,
  Target,
  Brain
} from "lucide-react";

export default function ScoringEngineProduct() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Target className="w-3.5 h-3.5" />
               High-Precision Fraud Scoring
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               The Science of <br />
               <span className="text-zinc-300 italic">Advanced Scoring.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense&apos;s scoring engine transforms raw signals into actionable fraud scores using institutional-grade machine learning and behavioral analysis.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3">
                  Test Scoring API
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. THE SCORING MODEL (VISUAL) */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Algorithmic Precision.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">We don&apos;t just provide a number. We provide a weighted risk assessment based on hundreds of feature vectors.</p>
                    <div className="space-y-6">
                       {[
                         { l: "Feature Extraction", d: "Automatic distillation of over 500 signal vectors." },
                         { l: "Weight Normalization", d: "Dynamic weighting based on industry-specific profiles." },
                         { l: "Anomaly Scoring", d: "Deviation analysis from established baseline behaviors." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-6 group/item">
                            <div className="w-1.5 h-12 bg-brand-lime/10 group-hover/item:bg-brand-lime transition-all duration-500" />
                            <div>
                               <h5 className="font-bold text-white uppercase text-xs mb-1 tracking-tight italic">{it.l}</h5>
                               <p className="text-[10px] text-white/30 font-inter leading-relaxed italic">{it.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                    <Brain className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">The Score Breakdown.</h3>
                    <div className="space-y-8">
                       <div className="p-8 bg-white/5 rounded-[40px] border border-white/10">
                          <div className="text-7xl font-black text-brand-lime italic tracking-tighter mb-2">842</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 italic">High Risk Alert</div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          {[
                            { l: "Identity Rep", v: "+150" },
                            { l: "Behavioral", v: "-40" },
                            { l: "Device Health", v: "+220" },
                            { l: "Velocity", v: "+312" }
                          ].map((it, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-[24px] border border-white/5">
                               <div className="text-xs font-bold uppercase text-white/40 mb-1">{it.l}</div>
                               <div className="text-lg font-bold text-white italic">{it.v}</div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. CAPABILITIES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-zinc-50 border border-gray-100 p-12 lg:p-24 rounded-[80px] shadow-sm relative overflow-hidden group">
                    <Shield className="w-16 h-16 text-neutral-900 mb-8" />
                    <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Configurable Risk.</h3>
                    <p className="text-zinc-500 text-lg font-inter mb-10 leading-relaxed italic">Tune the scoring engine to match your risk appetite. Adjust weights, set thresholds, and define custom fraud markers.</p>
                    <div className="grid grid-cols-1 gap-4">
                       {[
                         { l: "Custom Thresholds", d: "Define what constitutes low, medium, and high risk." },
                         { l: "Weight Calibration", d: "Prioritize specific signals like device mismatch." },
                         { l: "Scenario Modeling", d: "Test how scores would have reacted to past fraud." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-4 items-center p-6 bg-white border border-gray-100 rounded-[32px]">
                            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                            <div>
                               <h6 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 italic">{it.l}</h6>
                               <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 order-1 lg:order-2 text-center lg:text-left">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Explainable Decisions.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Every score comes with a detailed breakdown of contributing factors, ensuring auditability and investigative clarity.</p>
                 <div className="flex gap-4 justify-center lg:justify-start">
                    <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-xl flex items-center gap-3 italic">
                      Explore Explainability
                      <ArrowRight className="w-5 h-5 text-brand-lime font-manrope" />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. PERFORMANCE & DATA */}
        <section className="py-40 bg-zinc-900 text-white mx-4 rounded-[100px] border border-white/5 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-brand-lime/10 decoration-8 underline-offset-16">Scoring Speed.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[600px] mx-auto">Millisecond precision at global scale.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { v: "<12ms", l: "Feature Extraction", i: <Zap /> },
                   { v: "35ms", l: "Model Execution", i: <Cpu /> },
                   { v: "5ms", l: "Rule Validation", i: <Shield /> },
                   { v: "52ms", l: "Total Latency", i: <Activity /> }
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
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Scale Your <br /><span className="text-white/20">Scoring Engine.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Upgrade to institutional-grade fraud scoring today.</p>
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
