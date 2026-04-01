"use client";

import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  ArrowRight, 
  Settings, 
  Zap, 
  Shield, 
  Database, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Code,
  Search,
  Activity,
  Filter,
  Clock,
  PlayCircle,
  ToggleLeft,
  Layout
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const ruleCapabilities = [
  { 
    title: "Conditions", 
    icon: <Filter className="w-5 h-5 text-brand-lime" />, 
    items: ["Amount thresholds", "Velocity (5 tx in 2 mins)", "Geolocation mismatch", "Device risk signals", "User behavior"] 
  },
  { 
    title: "Logical Operators", 
    icon: <Layers className="w-5 h-5 text-brand-lime" />, 
    items: ["AND / OR combinations", "Nested conditions", "Complex expressions", "Boolean mapping", "Priority weights"] 
  },
  { 
    title: "Time-Based Logic", 
    icon: <Clock className="w-5 h-5 text-brand-lime" />, 
    items: ["Sliding windows", "Frequency checks", "Time-of-day rules", "Historical lookup", "Event sequences"] 
  }
];

const logicComparison = [
  { capability: "Real-time execution", deepSense: "Yes", traditional: "Sometimes" },
  { capability: "Dynamic updates", deepSense: "Yes", traditional: "Limited" },
  { capability: "AI integration", deepSense: "Yes", traditional: "No" },
  { capability: "Simulation", deepSense: "Yes", traditional: "Rare" },
  { capability: "Explainability", deepSense: "Full", traditional: "Partial" }
];

export default function RulesEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="max-w-[900px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu className="w-4 h-4 text-brand-lime" />
              Rules Engine
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tight text-neutral-900">
              Flexible Fraud Rules, <br />
              <span className="text-brand-lime bg-neutral-900 px-4 inline-block transform -skew-x-2">Built for Control.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[650px]">
              Define, manage, and execute fraud detection rules in real time — without slowing down your system or relying on engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                Request Demo
              </button>
              <Link href="/developers/api-overview" className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                <Code className="w-5 h-5" />
                Explore Rules API
              </Link>
            </div>
          </div>
        </section>

        {/* 🧠 WHAT IS A RULES ENGINE */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-8">
                    <h2 className="text-4xl font-bold font-manrope">What Is a Fraud Rules Engine?</h2>
                    <p className="text-xl text-zinc-600 leading-relaxed max-w-[500px]">
                      A rules engine allows you to define conditions that flag or block suspicious activity based on known fraud patterns.
                    </p>
                    <div className="space-y-4">
                       <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                          <p className="font-bold text-neutral-900 italic">&quot;If transaction amount &gt; $1,000 AND device is new → flag for review&quot;</p>
                       </div>
                       <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-brand-lime shrink-0" />
                          <p className="font-bold text-neutral-900 italic">&quot;If IP country ≠ account country → prompt for MFA&quot;</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Rule Editor Mockup */}
                 <div className="bg-neutral-900 rounded-[48px] p-8 lg:p-12 shadow-3xl text-white font-mono text-sm leading-relaxed relative group">
                    <div className="absolute top-0 right-0 p-8">
                       <Settings className="w-12 h-12 text-white opacity-5 animate-spin-slow" />
                    </div>
                    <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                       <div className="w-3 h-3 bg-red-400 rounded-full" />
                       <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                       <div className="w-3 h-3 bg-green-400 rounded-full" />
                       <span className="text-white/20 ml-4 font-bold uppercase text-[10px] tracking-widest leading-none">Rule IDE</span>
                    </div>
                    
                    <div className="space-y-4">
                       <p className="text-blue-400">RULE <span className="text-white">&quot;HighValueNewDevice&quot;</span></p>
                       <p className="pl-4 text-purple-400">WHEN <span className="text-white">amount &gt; 1000</span></p>
                       <p className="pl-4 text-purple-400">AND <span className="text-white">device_is_new == true</span></p>
                       <p className="pl-4 text-emerald-400">THEN <span className="text-white">set_action(ACTION.REVIEW)</span></p>
                       <p className="pl-4 text-emerald-400">AND <span className="text-white">set_signal(&quot;VH_TX_ND&quot;, 0.85)</span></p>
                       <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
                          <span className="text-white/40 text-[10px] tracking-widest">REAL-TIME VALIDATION: OK</span>
                          <span className="px-3 py-1 bg-brand-lime text-neutral-900 rounded-full text-[10px] font-bold">READY TO DEPLOY</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ HOW THE RULES ENGINE WORKS */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                <h2 className="text-4xl font-bold font-manrope mb-4">How Deep Sense Executes Rules</h2>
                <p className="text-zinc-500 max-w-[600px] mx-auto">Rules are evaluated in parallel with ML models to ensure zero latency impact.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { t: "Transaction In", i: <Database /> },
                  { t: "Evaluate Instantly", i: <Activity /> },
                  { t: "Rules Trigger", i: <Zap /> },
                  { t: "Score Update", i: <Cpu /> },
                  { t: "Process Action", i: <Shield /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                    <div className="w-16 h-16 bg-white border border-gray-100 shadow-xl rounded-2xl flex items-center justify-center group-hover:border-brand-lime transition-all duration-300">
                      {React.cloneElement(item.i as React.ReactElement<{ className: string }>, { className: "w-7 h-7 text-neutral-900" })}
                    </div>
                    <div className="h-px w-full bg-gray-50 flex items-center justify-center relative">
                       <ArrowRight className="w-4 h-4 text-zinc-200 hidden md:block" />
                    </div>
                    <h3 className="font-bold font-manrope text-sm uppercase tracking-widest text-zinc-400">{item.t}</h3>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 🧩 RULE CAPABILITIES */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative">
              <div className="max-w-[600px] mb-20">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-6">Powerful and Flexible Rule Logic</h2>
                 <p className="text-white/40 text-lg">Construct complex fraud strategies with simple, readable expressions.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 {ruleCapabilities.map((cap, i) => (
                   <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[48px] hover:bg-white/10 transition-all group h-full">
                      <div className="w-12 h-12 bg-brand-lime/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-lime transition-colors group-hover:text-neutral-900">
                        {cap.icon}
                      </div>
                      <h3 className="text-2xl font-bold font-manrope mb-8">{cap.title}</h3>
                      <ul className="space-y-4">
                         {cap.items.map((li, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-white/50 text-sm font-medium">
                              <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                              {li}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 DYNAMIC RULES + RULES + AI */}
        <section className="py-32 bg-white">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="space-y-12">
                    <div>
                       <h2 className="text-4xl font-bold font-manrope mb-6 leading-tight">Rules That Work with AI — <br />Not Against It</h2>
                       <p className="text-lg text-zinc-500 leading-relaxed font-inter">Deep Sense combines deterministic rules with machine learning to create a high-accuracy hybrid system. Rules catch known patterns instantly, while AI detects anomalies and new threats.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <h4 className="font-bold flex items-center gap-2">
                             <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                             Known Patterns
                          </h4>
                          <p className="text-sm text-zinc-500 leading-relaxed">Catch specific threats (e.g., sanctioned countries, known bad IPs) with absolute certainty.</p>
                       </div>
                       <div className="space-y-4">
                          <h4 className="font-bold flex items-center gap-2">
                             <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                             Control & Weighting
                          </h4>
                          <p className="text-sm text-zinc-500 leading-relaxed">Assign custom weights to rules to directly influence the final unified risk score.</p>
                       </div>
                    </div>
                    
                    <div className="pt-8 border-t border-gray-100 flex gap-12">
                       <div>
                          <span className="block text-3xl font-bold text-neutral-900 mb-1">0ms</span>
                          <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Added Latency</span>
                       </div>
                       <div>
                          <span className="block text-3xl font-bold text-neutral-900 mb-1">Unlimited</span>
                          <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Active Rules</span>
                       </div>
                    </div>
                 </div>

                 <div className="p-12 bg-gray-50 rounded-[64px] border border-gray-100 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-lime)_0%,transparent_70%)] opacity-5" />
                    <div className="relative space-y-6">
                       <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center group">
                          <div className="flex gap-4 items-center">
                             <ToggleLeft className="w-8 h-8 text-neutral-900 group-hover:rotate-180 transition-transform" />
                             <div>
                                <h5 className="font-bold text-neutral-900">Blacklist Check</h5>
                                <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Instant Global Update</span>
                             </div>
                          </div>
                          <span className="px-3 py-1 bg-brand-lime/20 text-brand-lime text-[10px] font-bold rounded-full">ACTIVE</span>
                       </div>
                       <div className="bg-neutral-900 p-10 rounded-[40px] text-white space-y-4 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8">
                             <RefreshCw className="w-12 h-12 text-white/5 animate-spin-slow" />
                          </div>
                          <h4 className="text-xl font-bold font-manrope text-white mb-2 underline decoration-brand-lime decoration-4 underline-offset-8">Dynamic Logic</h4>
                          <p className="text-white/50 text-sm leading-relaxed">Enable or disable rules instantly without redeploying code. Update thresholds and policies in real time as fraud trends evolve.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🛠️ RULE MANAGEMENT & TESTING */}
        <section className="py-32 bg-neutral-900">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-6">
                       {[
                         { t: "Create & Edit", i: <Code />, d: "Simple UI for manual entry or API for batch uploads." },
                         { t: "Test & Simulate", i: <PlayCircle />, d: "Preview impact on historical data before going live." },
                         { t: "Full Auditing", i: <Search />, d: "See exactly who changed what and when." },
                         { t: "Draft System", i: <Layout />, d: "Work on new strategies securely in draft mode." }
                       ].map((feat, i) => (
                         <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all text-white">
                            <div className="text-brand-lime mb-6">{feat.i}</div>
                            <h4 className="font-bold mb-3 font-manrope">{feat.t}</h4>
                            <p className="text-white/40 text-xs leading-relaxed">{feat.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-4xl font-bold font-manrope text-white leading-tight">Full Control Over Your Fraud Policy</h2>
                    <p className="text-lg text-white/50 leading-relaxed font-inter">Stop waiting for engineering sprints. Fraud analysts can create, test, and deploy rules in minutes, allowing your team to react to new threats as they emerge.</p>
                    <div className="bg-brand-lime p-8 rounded-[32px] text-neutral-900 space-y-4">
                       <h4 className="text-xl font-bold font-manrope">Test Before You Deploy</h4>
                       <p className="text-sm font-bold opacity-70">Deep Sense allows you to simulate new rules against the last 30 days of transaction data to accurately predict the impact on your detection rate and false-positive frequency.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔍 RULE TRANSPARENCY */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl font-bold font-manrope mb-4">Know Exactly Why a Rule Triggered</h2>
              <p className="text-zinc-500 max-w-[600px] mx-auto">Full transparency for every transaction decision. No mystery blocks, just clear logic.</p>
           </div>
           
           <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { l: "Rule Name", v: "Burst_Detect_10" },
                { l: "Conditions", v: "Matched (3/3)" },
                { l: "Signals", v: "Score Impact +0.4" },
                { l: "Actions", v: "Decision: Review" }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                   <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{item.l}</span>
                   <span className="text-sm font-bold text-neutral-900">{item.v}</span>
                </div>
              ))}
           </div>
        </section>

        {/* 🏭 USE CASES */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-20">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Common Fraud Rules</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "High-value alerts", d: "Flag any transaction over a specific threshold for manual analysis." },
                   { t: "Transaction bursts", d: "Detect rapid sequences of trades or payments within seconds." },
                   { t: "Unusual locations", d: "Trigger MFA for logins outside of typical user geolocation." },
                   { t: "Failed attempts", d: "Block IPs with repeated failed login or payment attempts." },
                   { t: "Device behavior", d: "Flag users sharing browsers across multiple accounts." },
                   { t: "Merchant risk", d: "Monitor for sudden changes in seller behavior or volume." }
                 ].map((uc, i) => (
                   <div key={i} className="p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-xl transition-all">
                      <div className="h-1 w-10 bg-brand-lime mb-6 rounded-full" />
                      <h3 className="font-bold text-neutral-900 mb-4">{uc.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-inter">{uc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🆚 WHY DEEP SENSE RULES ENGINE */}
        <section className="py-32">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold font-manrope mb-4 text-neutral-900 underline decoration-zinc-100 underline-offset-8">Beyond Basic Rule Systems</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8">
               <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-neutral-900">
                           <th className="p-8 text-xs font-bold text-white/50 uppercase tracking-widest font-manrope">Capability</th>
                           <th className="p-8 text-xs font-bold text-brand-lime uppercase tracking-widest font-manrope border-l border-white/5">Deep Sense</th>
                           <th className="p-8 text-xs font-bold text-white/50 uppercase tracking-widest font-manrope hidden md:table-cell">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900 font-manrope">
                        {logicComparison.map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                             <td className="p-8 font-bold text-sm text-zinc-500">{row.capability}</td>
                             <td className="p-8 font-extrabold text-neutral-900 border-l border-gray-50">{row.deepSense}</td>
                             <td className="p-8 font-medium text-zinc-300 text-sm hidden md:table-cell">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24">
           <div className="bg-neutral-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-lime/10 to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-bold font-manrope text-white mb-8 relative z-10">Take Control of <br />Fraud Detection</h2>
              <p className="text-xl text-white/50 mb-12 max-w-[600px] mx-auto relative z-10">Construct, test, and deploy rules in real time. Give your fraud team the power to react to evolving threats instantly.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <button className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full font-bold font-manrope text-lg hover:scale-105 transition-all shadow-xl shadow-brand-lime/10">
                   Request Demo
                 </button>
                 <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold font-manrope text-lg hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                   Start Building Rules
                 </button>
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
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
