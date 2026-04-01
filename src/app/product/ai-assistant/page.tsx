"use client";

import React from "react";
import Link from "next/link";
import { 
  Zap, 
  ArrowRight, 
  Shield, 
  Search, 
  Database, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  BarChart2, 
  Users, 
  RefreshCw, 
  Layers, 
  Lock, 
  TrendingUp,
  Cpu,
  History
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const aiCapabilities = [
  { t: "Smart Summaries", d: "Instantly understand why a transaction was flagged with human-readable explanations.", i: <MessageSquare /> },
  { t: "Linked Insights", d: "Uncover hidden connections across accounts, devices, and previous fraud cases.", i: <Layers /> },
  { t: "Next-Step Guidance", d: "Receive data-backed recommendations on whether to block, review, or approve.", i: <TrendingUp /> },
  { t: "Pattern Discovery", d: "Identify evolving fraud tactics that legacy rules-based systems miss.", i: <Sparkles /> }
];

const aiComparison = [
  { capability: "AI summaries", deepSense: "Yes", traditional: "No" },
  { capability: "Investigation guidance", deepSense: "Yes", traditional: "No" },
  { capability: "Linked insights", deepSense: "Yes", traditional: "Limited" },
  { capability: "Speed", deepSense: "High", traditional: "Slower" },
  { capability: "Consistency", deepSense: "99.9%", traditional: "Variable" }
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-[900px] relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-xs font-bold uppercase tracking-widest mb-8 shadow-2xl">
              <Sparkles className="w-4 h-4" />
              Machine Intelligence
            </div>
            <h1 className="text-6xl lg:text-9xl font-bold leading-none mb-8 tracking-tighter text-neutral-900 italic uppercase">
              Investigate Fraud <br />
              <span className="text-zinc-300">with AI Assistance.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[650px]">
              Deep Sense uses AI to analyze fraud signals, summarize insights, and guide investigators — so your team can act faster and smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border border-gray-100 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg group">
                See It in Action
                <ArrowRight className="w-5 h-5 text-brand-lime group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="space-y-8">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Fraud Investigations <br />Are Slow and Complex.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[500px]"> Analysts spend hours reviewing thousands of data points manually, leading to overload and inconsistent results.</p>
                 <div className="space-y-6">
                    {[
                      "Manual review of fragmented data sources.",
                      "Exhausting alert volumes causing burnout.",
                      "Slow identification of complex fraud networks.",
                      "Highly variable investigation outcomes per analyst."
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4 items-center text-lg text-neutral-900 font-bold">
                         <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                         {p}
                      </div>
                    ))}
                 </div>
                 <div className="pt-8 border-t border-gray-200">
                    <p className="text-2xl font-bold italic tracking-tight text-neutral-900">The harder it is to investigate, <br /><span className="text-zinc-300">the slower you stop fraud.</span></p>
                 </div>
              </div>
              
              <div className="bg-white p-12 rounded-[64px] border border-gray-100 shadow-3xl flex flex-col justify-center relative scale-105">
                 <div className="absolute top-0 right-0 p-8">
                    <History className="w-12 h-12 text-zinc-100 animate-spin-slow opacity-50" />
                 </div>
                 <div className="space-y-10">
                    <div className="flex justify-between items-center mb-8">
                       <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Analyst Workload</span>
                       <span className="text-red-500 font-bold text-xs uppercase tracking-widest italic">Overloaded</span>
                    </div>
                    {[
                      { l: "Time Per Case", v: "42m", p: "85%" },
                      { l: "Manual Steps", v: "14", p: "90%" },
                      { l: "Backlog Size", v: "1,240", p: "95%" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end text-sm font-bold">
                            <span className="text-zinc-400">{stat.l}</span>
                            <span className="text-neutral-900">{stat.v}</span>
                         </div>
                         <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                            <div className="h-full bg-red-400" style={{ width: stat.p }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 💡 THE SOLUTION & HOW IT WORKS */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-center">
              <div className="text-center mb-24 max-w-[800px]">
                 <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter italic uppercase">AI-Powered Support</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed font-inter italic mx-auto">
                    &quot;Deep Sense provides an AI assistant that turns complex fraud data into clear, actionable insights, helping analysts make better decisions faster.&quot;
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                 {[
                   { t: "Flag Detection", i: <Shield /> },
                   { t: "Signal Gathers", i: <Database /> },
                   { t: "AI Synthesis", i: <Cpu /> },
                   { t: "Action Guidance", i: <Zap /> }
                 ].map((s, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 group cursor-pointer">
                      <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl shadow-xl flex items-center justify-center group-hover:border-brand-lime transition-all duration-300">
                        {React.cloneElement(s.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8 text-neutral-900" })}
                      </div>
                      <div className="h-0.5 w-12 bg-zinc-100 group-hover:w-24 group-hover:bg-brand-lime transition-all" />
                      <h4 className="font-bold uppercase tracking-widest text-[10px] text-zinc-400 font-manrope">{s.t}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 SMART SUMMARIES & AI CHAT MOCKUP */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-linear-to-br from-brand-lime/5 to-transparent opacity-50" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Understand Fraud <br /><span className="text-brand-lime italic underline decoration-brand-lime/20 decoration-8 underline-offset-16">Instantly.</span></h2>
                 <p className="text-lg text-white/40 leading-relaxed font-inter italic max-w-[500px]">The AI assistant generates clear, natural-language explanations of why a transaction is suspicious, cutting investigation prep time by 80%.</p>
                 <div className="space-y-10">
                    {aiCapabilities.map((cap, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all">
                            {cap.i}
                         </div>
                         <div>
                            <h4 className="font-bold text-xl mb-2">{cap.t}</h4>
                            <p className="text-sm text-white/30 max-w-[400px] font-inter">{cap.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="p-8 lg:p-14 bg-white/5 border border-white/10 rounded-[64px] shadow-3xl text-left relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <Sparkles className="w-12 h-12 text-brand-lime opacity-5 animate-pulse" />
                 </div>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                       <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center font-bold text-neutral-900 text-xs shadow-lg shadow-brand-lime/20">DS</div>
                       <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Deep Sense Assistant</p>
                          <span className="text-xs font-bold">Investigation Summary #9182</span>
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-md">
                          <p className="text-sm leading-relaxed italic opacity-80">
                             &quot;Transaction flagged due to high-risk device signature and unusual geolocation mismatch (IP: Lagos, Account: Berlin). User behavior shows 4 failed logins before this attempt.&quot;
                          </p>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                             <span className="block text-[8px] font-bold text-white/30 uppercase mb-2">Confidence</span>
                             <span className="text-lg font-bold">98.2%</span>
                          </div>
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                             <span className="block text-[8px] font-bold text-white/30 uppercase mb-2">Risk Factor</span>
                             <span className="text-lg font-bold text-red-400">High</span>
                          </div>
                       </div>
                       
                       <div className="pt-6 border-t border-white/5">
                          <p className="text-[10px] font-bold text-white/40 mb-4 tracking-widest uppercase">Recommended Next Steps</p>
                          <div className="flex flex-wrap gap-3">
                             <button className="px-4 py-2 bg-red-500/20 text-red-500 rounded-lg text-[10px] font-bold ring-1 ring-red-500/50">Block Account</button>
                             <button className="px-4 py-2 bg-brand-lime text-neutral-900 rounded-lg text-[10px] font-bold shadow-lg shadow-brand-lime/10">Request MFA</button>
                             <button className="px-4 py-2 bg-white/5 text-white/60 rounded-lg text-[10px] font-bold border border-white/5">Mark Safe</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧭 INVESTIGATION GUIDANCE & SPEED */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { t: "Investigation Guidance", d: "Data-backed suggestions on the most effective resolution path.", i: <Search /> },
                { t: "Speed & Efficiency", d: "Faster decision-making with fewer manual assessment steps.", i: <Zap /> },
                { t: "Standardization", d: "Consistent analysis quality across all your analysts.", i: <BarChart2 /> },
                { t: "Accuracy", d: "Reduced human error with double-checking AI logic.", i: <CheckCircle2 /> }
              ].map((feat, i) => (
                <div key={i} className="flex flex-col items-center space-y-6 group px-4">
                   <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-900 border border-gray-100 group-hover:bg-brand-lime transition-all duration-300">
                      {feat.i}
                   </div>
                   <h4 className="text-xl font-bold font-manrope">{feat.t}</h4>
                   <p className="text-sm text-zinc-500 leading-relaxed font-inter">{feat.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 🔐 SAFE & CONTROLLED AI */}
        <section className="py-40 bg-zinc-50 rounded-[100px] mx-4 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-video">
                 <div className="absolute inset-0 bg-neutral-900 rounded-[64px] p-12 overflow-hidden group shadow-3xl">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <div className="relative h-full flex flex-col justify-center items-center text-center">
                       <Lock className="w-16 h-16 text-brand-lime mb-8 group-hover:scale-110 transition-transform duration-700" />
                       <h3 className="text-white text-3xl font-bold font-manrope mb-4 uppercase italic">Human-in-the-Loop</h3>
                       <p className="text-white/40 text-sm max-w-[350px]">All AI outputs are explainable. No autonomous decisions are made without analyst approval.</p>
                    </div>
                 </div>
              </div>
              
              <div className="space-y-10">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope leading-tight text-neutral-900 tracking-tight">Built with Control <br />and Transparency.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed">Unlike &quot;black box&quot; systems, Deep Sense AI identifies patterns but keeps your human analysts in control of the final policy.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Assist, Not Replace", d: "AI augments analyst decisions for better results." },
                      { t: "Explainable Output", d: "Every summary is backed by raw evidence links." },
                      { t: "Custom Approval", d: "Set strict boundaries for AI recommendations." },
                      { t: "Audit Ready", d: "All AI interactions are logged for compliance." }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5 shrink-0" />
                         <div>
                            <h5 className="font-bold text-neutral-900 mb-1">{f.t}</h5>
                            <p className="text-xs text-zinc-400">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-32">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold font-manrope mb-4 text-neutral-900">Beyond Manual Investigations</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 font-bold italic uppercase tracking-tighter">
               <div className="bg-neutral-900 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl text-white">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-8 text-[10px] text-white/40 tracking-widest font-manrope">Capability</th>
                           <th className="p-8 text-xs text-brand-lime border-l border-white/10 tracking-widest font-manrope">Deep Sense</th>
                           <th className="p-8 text-[10px] text-white/40 hidden md:table-cell tracking-widest font-manrope">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-xs">
                        {aiComparison.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-8 text-white/60">{row.capability}</td>
                             <td className="p-8 text-white border-l border-white/5">{row.deepSense}</td>
                             <td className="p-8 text-white/20 hidden md:table-cell">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 🏭 USE CASES & BUSINESS IMPACT */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-bold font-manrope mb-4 uppercase italic">Smarter Teams, Faster Results</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "High-Volume Ops", d: "Manage massive alert queues without scaling staff linearly.", i: <Zap /> },
                   { t: "Complex Patterns", d: "Uncover multi-step fraud attempts that rules cannot describe.", i: <RefreshCw /> },
                   { t: "Rapid Response", d: "Decide on high-risk transactions in seconds, not hours.", i: <Clock /> },
                   { t: "Team Scaling", d: "Onboard new analysts faster with built-in guidance.", i: <Users /> }
                 ].map((uc, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-200 rounded-[40px] hover:scale-105 transition-all">
                      <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-colors">
                        {React.cloneElement(uc.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h3 className="font-bold text-lg font-manrope mb-4">{uc.t}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed font-inter">{uc.d}</p>
                   </div>
                 ))}
              </div>
              
              <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 items-center">
                  <div className="p-12 bg-neutral-900 rounded-[56px] text-white flex flex-col items-center">
                     <span className="text-7xl font-bold italic tracking-tighter text-brand-lime mb-4">-80%</span>
                     <span className="text-xs font-bold uppercase tracking-widest text-white/40">Investigation Prep Time</span>
                  </div>
                  <div className="p-12 bg-neutral-900 rounded-[56px] text-white flex flex-col items-center">
                     <span className="text-7xl font-bold italic tracking-tighter text-brand-lime mb-4">+3x</span>
                     <span className="text-xs font-bold uppercase tracking-widest text-white/40">Analyst Throughput</span>
                  </div>
              </div>
           </div>
        </section>

        {/* 💬 TRUST STATEMENT (PLACEHOLDER) */}
        <section className="py-40 bg-white text-center">
           <div className="max-w-[900px] mx-auto px-8 space-y-12">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic leading-none opacity-20">AI That Works <br />With Your Team.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 italic">
                 <p className="text-xl font-bold text-neutral-900 leading-relaxed">&quot;Investigations that took hours now take minutes with the Deep Sense assistant.&quot;</p>
                 <p className="text-xl font-bold text-neutral-900 leading-relaxed">&quot;The summaries allow our junior analysts to perform like veteran investigators.&quot;</p>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 relative">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-lime)_0%,transparent_70%)] opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase text-white">Investigate Fraud <br />Smarter.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed text-white">Unlock the power of AI to stop fraud faster than ever before.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95">
                      Explore Platform
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
