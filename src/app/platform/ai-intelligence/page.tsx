"use client";

import React from "react";
import { 
  Cpu, 
  Brain, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layers, 
  Activity, 
  RefreshCw, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  Database, 
  LineChart, 
  Code, 
  Network,
  Eye,
  Microscope,
  History
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PlatformAiPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Brain className="w-3.5 h-3.5" />
              <span>Computational Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              AI-Powered <span className="text-indigo-600">Decision</span> Intelligence.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense combines machine learning, rules, and real-time analytics to deliver accurate, explainable decisions at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter">
                Explore Platform
              </button>
            </div>
          </div>
        </section>

        {/* 2. Overview */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-indigo-200 decoration-8 underline-offset-16">Smarter Decisions, Powered by Intelligence</h2>
             <p className="text-zinc-500 text-lg mb-16 max-w-3xl italic font-inter leading-relaxed font-manrope">Deep Sense brings together multiple intelligence layers to evaluate risk and make definitive decisions in real time, moving beyond simple binary logic.</p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
                {[
                  { l: "ML Models", i: <Brain /> },
                  { l: "Rules Engine", i: <Settings /> },
                  { l: "Anomaly Detection", i: <Search /> },
                  { l: "Behavioral Analytics", i: <Activity /> }
                ].map((step, i) => (
                  <div key={i} className="p-10 bg-white border border-zinc-200 rounded-[40px] flex flex-col items-center gap-6 group hover:bg-neutral-900 transition-all shadow-sm hover:shadow-2xl">
                     <div className="text-indigo-600 group-hover:text-brand-lime transition-colors">
                        {React.cloneElement(step.i as React.ReactElement, { className: "w-10 h-10" })}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors italic">{step.l}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. Decision Engine & 4. ML Models */}
        <section className="py-32 px-8 overflow-hidden relative font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase leading-tight font-manrope">A Unified <br />Decision Layer</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-12 font-manrope">Every transaction or event is evaluated through a centralized decision engine that aggregates multiple signals to return an actionable outcome in milliseconds.</p>
                 
                 <div className="grid grid-cols-1 gap-4 mb-20 font-bold text-sm text-neutral-900 italic font-manrope">
                    {[
                      { l: "Aggregate Multiple Signals", d: "Combines data from device, network, behavior, and ledger." },
                      { l: "Calculate Risk Scores", d: "Proprietary algorithms assign precise numerical risk markers." },
                      { l: "Apply Decision Logic", d: "Fuses machine learning outputs with static institutional rules." },
                      { l: "Actionable Outcomes", d: "Returns immediate Approve, Review, or Decline triggers." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-start p-6 bg-zinc-50 border border-zinc-100 rounded-3xl group hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-1.5 h-12 bg-indigo-100 group-hover:bg-brand-lime transition-all rounded-full shrink-0" />
                         <div>
                            <span className="block font-bold text-neutral-900 uppercase tracking-tight text-sm font-manrope mb-1 italic">{it.l}</span>
                            <span className="text-xs text-zinc-400 font-inter font-medium leading-relaxed italic">{it.d}</span>
                         </div>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Learn from Your Data</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic leading-relaxed pr-12 italic">Our supervised machine learning models are constantly classifying risky behavior and adapting to new fraud patterns as they emerge in the stream.</p>
              </div>
              <div className="p-16 bg-neutral-900 rounded-[80px] text-white shadow-3xl relative overflow-hidden group border border-white/5">
                 <Cpu className="w-64 h-64 absolute top-0 right-0 p-12 text-white/5 animate-spin-slow" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Intelligence Graph</h3>
                 <div className="space-y-12 relative z-10 font-manrope">
                    <div className="flex flex-col gap-4">
                       <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Real-time Inference</span>
                       <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                          <div className="h-full bg-brand-lime w-[85%] animate-pulse" />
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { l: "ML CLASSIFIERS", v: "Supervised" },
                         { l: "ADAPTABILITY", v: "Dynamic" },
                         { l: "RETRAINING", v: "Continuous" },
                         { l: "FEATURES", v: "800+ Active" }
                       ].map((st, i) => (
                         <div key={i} className="flex flex-col gap-1">
                            <span className="text-[9px] font-black uppercase text-indigo-400 font-manrope italic">{st.l}</span>
                            <span className="text-2xl font-black italic">{st.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Anomaly Detection & 6. Rules Engine & 7. Feature Engineering */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24 font-manrope">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Multi-Signal Evaluation</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 font-manrope pr-10">We evaluate risk through every possible lens, ensuring that unusual patterns are never missed.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left w-full">
                 {[
                   { title: "Anomaly Detection", desc: "Identify transaction spikes, abnormal usage patterns, and deviations from baseline entity behavior.", icon: <Search /> },
                   { title: "Static Rules Engine", desc: "Combine AI with human intelligence through custom conditions, thresholds, and triggered actions.", icon: <Code /> },
                   { title: "Feature Engineering", desc: "Transform raw payload data into meaningful signals like frequency, velocity, and device patterns.", icon: <Layers /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-200 rounded-[56px] shadow-sm group hover:shadow-2xl hover:-translate-y-2 transition-all">
                      <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.title}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-12 italic">{it.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. Decision Fusion & 9. Real-Time & 10. Explainability */}
        <section className="py-32 px-8 overflow-hidden relative font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] text-neutral-900 shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Microscope className="w-48 h-48 text-zinc-100" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Decision Trace</h3>
                 <div className="space-y-6 relative z-10 font-manrope italic">
                    <p className="text-zinc-500 text-sm italic pr-12">Total transparency for institutional compliance teams.</p>
                    <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-3xl space-y-4">
                       <div className="flex justify-between font-black text-[10px] text-zinc-400">
                          <span>FACTOR</span>
                          <span>IMPACT</span>
                       </div>
                       {[
                         { f: "ML Fraud Classifier", i: "+42" },
                         { f: "Velocity Anomaly", i: "+18" },
                         { f: "Rule: High-Risk Geo", i: "TRIGGERED" }
                       ].map((it, i) => (
                         <div key={i} className="flex justify-between font-bold text-xs uppercase italic tracking-tight">
                            <span>{it.f}</span>
                            <span className={it.i === "TRIGGERED" ? "text-red-500" : "text-indigo-600"}>{it.i}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase leading-tight font-manrope italic underline decoration-indigo-200 decoration-8 underline-offset-16">Understand Every Decision.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-12 font-manrope italic">Deep Sense doesn't just return a score; it provides the "why." Our explainability layer shows contributing factors and triggered rules for every single event.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-sm italic">
                    {[
                       "Explainable ML Outputs",
                       "Decision Fusion Logic",
                       "Retraining Workflows",
                       "Activation/Deactivation Rails"
                    ].map((feat, i) => (
                       <div key={i} className="flex items-center gap-4 group">
                          <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                          <span className="text-xs uppercase tracking-tight italic font-manrope pr-4">{feat}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 11-13. Model Mgmt, Adaptability, Trust */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden text-center shadow-3xl font-manrope">
           <div className="absolute inset-0 bg-indigo-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-8 tracking-tight italic uppercase font-manrope">Continuous Adaptability.</h2>
              <p className="text-xl text-white/40 max-w-2xl mx-auto italic font-inter leading-relaxed mb-32">Models that evolve as fast as the threats they aim to stop.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left w-full max-w-6xl">
                 {[
                   { title: "Model Management", desc: "Institutional-grade versioning, retraining workflows, and performance metric tracking.", icon: <LineChart /> },
                   { title: "Threat Adaptability", desc: "Instantly adjust to new fraud patterns by refining models and rules dynamically.", icon: <Zap /> },
                   { title: "Trust & Control", desc: "Maintain absolute human oversight with rule overrides and configurable thresholds.", icon: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col gap-6 p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white hover:text-neutral-900 transition-all group">
                      <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                        {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold uppercase italic tracking-tighter italic font-manrope">{it.title}</h4>
                      <p className="text-zinc-500 text-sm group-hover:text-neutral-600 italic leading-relaxed pr-8 italic">{it.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 14. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Smarter Than Static Systems</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px] uppercase">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Decision Intelligence</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense AI</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Static Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "ML-driven real-time decisions",
                         "Multisignal decision fusion scoring",
                         "Total decision explainability",
                         "Dynamic model retraining rails",
                         "Integrated human oversight controls"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Limited / Delayed
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 15. Impact & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">AI-Driven Risk Oversight</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Upgrade to Intelligent <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Decision-Making.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Improve detection accuracy, reduce false positives, and scale your institution's decision-making power with our unified AI intelligence engine.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request AI Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Explore Platform
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
