"use client";

import React from "react";
import { 
  Share2, 
  ArrowRight, 
  Network, 
  Users, 
  Database, 
  Shield, 
  Zap, 
  Search, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Globe, 
  Lock, 
  TrendingUp,
  Workflow,
  Eye,
  AlertTriangle,
  Fingerprint
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const graphEntities = [
  { name: "Users", icon: <Users />, color: "bg-blue-500" },
  { name: "Accounts", icon: <Lock />, color: "bg-emerald-500" },
  { name: "Devices", icon: <Cpu />, color: "bg-purple-500" },
  { name: "IP Addresses", icon: <Globe />, color: "bg-amber-500" },
  { name: "Transactions", icon: <Activity />, color: "bg-red-500" }
];

const logicComparison = [
  { capability: "Network analysis", deepSense: "Yes", traditional: "No" },
  { capability: "Fraud ring detection", deepSense: "Yes", traditional: "No" },
  { capability: "Cross-entity intelligence", deepSense: "Yes", traditional: "Limited" },
  { capability: "Relationship mapping", deepSense: "Yes", traditional: "No" },
  { capability: "Real-time propagation", deepSense: "Yes", traditional: "No" }
];

export default function GraphAnalysisPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-[950px] relative z-10 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full text-brand-lime text-xs font-bold uppercase tracking-widest mb-10 shadow-2xl">
              <Share2 className="w-4 h-4" />
              Intelligence Layer v4
            </div>
            <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 italic uppercase">
              Detect Fraud Rings <br />
              <span className="text-zinc-300">Not Just Transactions.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[700px] mx-auto">
              Deep Sense uncovers hidden connections between accounts, devices, and transactions to detect coordinated fraud patterns at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-xl tracking-tight">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-xl tracking-tight">
                See Graph Analysis
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Abstract Graph Visualization */}
          <div className="mt-24 relative h-[300px] max-w-[1200px] mx-auto flex items-center justify-center pointer-events-none opacity-20">
             <div className="absolute w-[600px] h-px bg-linear-to-r from-transparent via-neutral-900 to-transparent rotate-45 animate-pulse" />
             <div className="absolute w-[600px] h-px bg-linear-to-r from-transparent via-neutral-900 to-transparent -rotate-45 animate-pulse delay-100" />
             <div className="grid grid-cols-5 gap-32">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center border-4 border-white shadow-2xl z-10">
                     <span className="text-brand-lime font-bold text-xs">{i}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM */}
        <section className="py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-10 text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Fraud Is Not Isolated. <br />It&apos;s Organized.</h2>
                    <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[550px]">
                      Fraudsters operate in sophisticated networks. Traditional systems analyze transactions in isolation, leaving shared devices, IPs, and behaviors undetected.
                    </p>
                    <div className="space-y-6">
                       {[
                         "Multiple accounts sharing the same hardware footprint.",
                         "Coordinated transaction flows across thousands of entities.",
                         "Hidden relationships that go undetected by legacy rules.",
                         "Synthetic identity rings operating out of similar locations."
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4 items-center text-lg text-neutral-900 font-bold">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                            {item}
                         </div>
                       ))}
                    </div>
                    <div className="pt-10 border-t border-gray-200">
                       <p className="text-3xl font-bold text-neutral-900 italic tracking-tight">You can&apos;t stop fraud <br /><span className="text-zinc-300">if you can&apos;t see the network.</span></p>
                    </div>
                 </div>
                 
                 <div className="relative aspect-square bg-white rounded-[80px] p-12 shadow-3xl flex flex-col justify-center border border-gray-100">
                    <div className="absolute top-12 left-12 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-12 right-12 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    
                    <div className="space-y-12 relative z-10">
                       <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                          <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest block mb-4 italic">Isolated Detection (Legacy)</span>
                          <div className="flex gap-4 items-center">
                             <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                                <Lock className="text-neutral-900 w-6 h-6" />
                             </div>
                             <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-400 w-[10%] opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <span className="text-xs font-bold text-zinc-400 uppercase">SAFE</span>
                          </div>
                       </div>
                       
                       <div className="p-8 bg-neutral-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8">
                             <Share2 className="text-brand-lime w-12 h-12 opacity-20" />
                          </div>
                          <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-4 italic">Network Intelligence (Deep Sense)</span>
                          <div className="flex gap-4 items-center">
                             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                <Network className="text-brand-lime w-6 h-6" />
                             </div>
                             <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                <div className="h-full bg-red-500 w-[95%]" />
                             </div>
                             <span className="text-xs font-bold text-red-500 uppercase">FRAUD RING</span>
                          </div>
                          <p className="text-[10px] text-white/40 mt-6 font-bold uppercase tracking-widest">Matched: Shared Device + Linked IP + Coordinated Velocity</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 💡 THE SOLUTION */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24 max-w-[900px] mx-auto">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">Graph-Based Detection</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed">
                   Deep Sense builds a dynamic graph of entities and relationships to uncover fraud patterns that are invisible to traditional transactional analysis.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                 {graphEntities.map((entity, i) => (
                   <div key={i} className="text-center group">
                      <div className={`w-20 h-20 ${entity.color} rounded-[32px] mx-auto mb-8 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12`}>
                        {React.cloneElement(entity.icon as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="font-bold text-xl mb-4">{entity.name}</h4>
                      <div className="h-0.5 w-8 bg-zinc-100 mx-auto group-hover:w-16 group-hover:bg-brand-lime transition-all" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 HOW GRAPH DETECTION WORKS */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,247,1,0.05)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 flex flex-col items-center">
              <div className="text-center mb-32 max-w-[700px]">
                 <h2 className="text-4xl lg:text-5xl font-bold mb-8">From Data to Fraud Networks</h2>
                 <p className="text-white/40">Our processing engine builds and analyzes your entity graph in real time.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12 w-full">
                 {[
                   { t: "Entity Sync", d: "Collect entities from transaction payload.", i: <Database /> },
                   { t: "Link Building", d: "Instantly link entities across namespaces.", i: <Workflow /> },
                   { t: "Graph Construct", d: "Update the shared global entity graph.", i: <Layers /> },
                   { t: "Cluster Analysis", d: "Run community detection algorithms.", i: <Search /> },
                   { t: "Identify Rings", d: "Flag suspicious high-density groups.", i: <Shield /> }
                 ].map((step, i) => (
                   <div key={i} className="w-[220px] text-center space-y-8 group">
                      <div className="relative w-16 h-16 mx-auto">
                        <div className="absolute inset-0 bg-brand-lime rounded-full blur-[20px] scale-0 group-hover:scale-100 transition-transform duration-500 opacity-20" />
                        <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all">
                           {step.i}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold tracking-tight text-lg">{step.t}</h4>
                        <p className="text-xs text-white/30 leading-relaxed font-inter px-4">{step.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔗 LINKED ENTITY ANALYSIS & FRAUD RING DETECTION */}
        <section className="py-40 bg-white">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-lime/10 rounded-[64px] blur-[120px] -animate-pulse" />
                    <div className="relative bg-neutral-900 p-12 lg:p-20 rounded-[80px] text-white shadow-3xl pointer-events-none border border-white/5">
                        <div className="flex items-center gap-4 mb-12">
                           <Fingerprint className="text-brand-lime w-12 h-12" />
                           <h3 className="text-3xl font-bold tracking-tight">Reveal Hidden <br />Connections</h3>
                        </div>
                        <div className="space-y-8">
                           {[
                             "Multiple accounts using the same device.",
                             "Shared IP across suspicious transactions.",
                             "Repeated behavior patterns across merchants.",
                             "Device hopping across accounts."
                           ].map((item, i) => (
                             <div key={i} className="flex gap-4 items-center">
                                <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                                <span className="text-white/60 font-bold italic tracking-tight">{item}</span>
                             </div>
                           ))}
                        </div>
                    </div>
                 </div>

                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">Identify Coordinated <br /><span className="text-brand-lime underline decoration-brand-lime/20 decoration-8 underline-offset-16">Fraud Rings.</span></h2>
                    <p className="text-xl text-zinc-500 font-inter leading-relaxed">
                       Deep Sense uncovers coordinated groups of entities acting in malicious synchronization. By visualizing shared traits, we catch the signals that rules alone cannot see.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {[
                         { t: "Cluster Detection", d: "Identify high-density transactional groups." },
                         { t: "Shared Behavior", d: "Match behavioral signatures across accounts." },
                         { t: "Coordinated Flows", d: "Track money movement through hidden paths." },
                         { t: "Ring Scoping", d: "Automatically scope the size and impact of rings." }
                       ].map((feat, i) => (
                         <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:bg-zinc-50 transition-colors">
                            <h4 className="font-bold text-neutral-900 mb-2">{feat.t}</h4>
                            <p className="text-xs text-zinc-500 leading-relaxed font-inter">{feat.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📊 GRAPH RISK SCORING */}
        <section className="py-40 bg-zinc-50 rounded-[120px] mx-4 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 flex flex-col items-center">
              <div className="text-center mb-24 max-w-[800px]">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">Score Risk <br />Across Entire Networks</h2>
                 <p className="text-xl text-zinc-500">Risk is not just per transaction — it&apos;s a property of the whole network architecture.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                 {[
                   { l: "High-Risk Linkage", v: "Connected to known fraud ring entities.", s: "Critical" },
                   { l: "Device Association", v: "Device ID linked to 5+ suspicious cases.", s: "High" },
                   { l: "IP Associated Risk", v: "Located in a dynamic proxy cluster node.", s: "Medium" }
                 ].map((stat, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-200 rounded-[48px] shadow-sm transform hover:-translate-y-2 transition-all">
                      <span className="block text-xs font-bold text-zinc-300 uppercase tracking-widest mb-6 border-b border-gray-50 pb-4">{stat.s} Priority</span>
                      <h4 className="text-2xl font-bold mb-4 font-manrope">{stat.l}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed font-inter mb-8">{stat.v}</p>
                      <div className="h-1 w-full bg-gray-50 rounded-full overflow-hidden">
                         <div className="h-full bg-neutral-900 rounded-full" style={{ width: i === 0 ? "90%" : i === 1 ? "75%" : "50%" }} />
                      </div>
                   </div>
                 ))}
              </div>
              
              <div className="mt-24 p-12 bg-neutral-900 rounded-[64px] text-white w-full flex flex-col lg:flex-row items-center gap-12 group">
                 <div className="shrink-0">
                    <TrendingUp className="w-24 h-24 text-brand-lime group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-3xl font-bold tracking-tight">The Graph Outcome</h3>
                    <p className="text-xl text-white/50 leading-relaxed font-inter italic">&quot;Network-level risk scoring boosts detection accuracy by 40% compared to traditional standalone transaction analysis.&quot;</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚡ REAL-TIME GRAPH UPDATES & ADVANCED INTELLIGENCE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Always Up-to-Date Intelligence</h2>
                 <div className="space-y-8">
                    {[
                      { t: "Real-Time Propogation", d: "Every new transaction updates the graph and recalculates linkage risks instantly." },
                      { t: "Dynamic Link Detection", d: "Instantly detect new connections as they happen in milliseconds." },
                      { t: "Community Discovery", d: "Automated community detection identifies shifts in fraud group structures." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-brand-lime transition-all duration-300">
                           <Zap className="w-6 h-6" />
                         </div>
                         <div>
                            <h4 className="font-bold text-xl mb-2">{feat.t}</h4>
                            <p className="text-zinc-500 font-inter text-sm max-w-[450px]">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 lg:p-20 bg-neutral-900 rounded-[80px] text-white border border-white/5 relative overflow-hidden group shadow-3xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                 <Eye className="w-32 h-32 absolute top-0 right-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-10">
                    <h3 className="text-3xl font-bold tracking-tight">Investigation Power</h3>
                    <p className="text-white/40 text-lg font-inter leading-relaxed">Analysts get a unified view of relationship graphs within their workspace. Map every node, every shared signal, and every hidden link with absolute clarity.</p>
                    <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                        {["Node Selection", "Relationship Filtering", "Temporal Graph Views", "Entity Profiling"].map((tag, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/60 tracking-widest uppercase">{tag}</span>
                        ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 WHY IT MATTERS - COMPARISON */}
        <section className="py-32 bg-gray-50">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight">Beyond Traditional Fraud Detection</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8">
               <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl">
                  <table className="w-full text-left font-manrope">
                     <thead>
                        <tr className="bg-neutral-900">
                           <th className="p-8 text-xs font-bold text-white/50 uppercase tracking-widest">Capability</th>
                           <th className="p-8 text-xs font-bold text-brand-lime uppercase tracking-widest border-l border-white/5">Deep Sense</th>
                           <th className="p-8 text-xs font-bold text-white/50 uppercase tracking-widest hidden md:table-cell">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900 font-bold">
                        {logicComparison.map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                             <td className="p-8 text-sm text-zinc-500">{row.capability}</td>
                             <td className="p-8 text-neutral-900 border-l border-gray-50">{row.deepSense}</td>
                             <td className="p-8 text-zinc-300 text-sm hidden md:table-cell">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 🏭 USE CASES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-20 max-w-[800px] mx-auto">
                 <h2 className="text-4xl font-bold tracking-tight mb-8">Where Graph excels</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Synthetic identity rings", d: "Detect accounts with overlapping entity trees trying to mimic legitimate users." },
                   { t: "ATO Networks", d: "Track account takeovers that use shared proxy nodes and device footprints." },
                   { t: "Merchant Collusion", d: "Identify sellers coordinating fake reviews or laundering money through linked accounts." },
                   { t: "Coordinated Payment Fraud", d: "Stop synchronized high-value transaction attacks using distinct but linked accounts." },
                   { t: "Link Harvesting", d: "Detect accounts created specifically to harvest and link shared promotional data." },
                   { t: "Entity Hopping", d: "Uncover criminals moving across distinct IP namespaces to evade simple blacklists." }
                 ].map((uc, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[48px] hover:shadow-3xl hover:-translate-y-2 transition-all">
                      <div className="h-1.5 w-12 bg-neutral-900 mb-8 rounded-full" />
                      <h3 className="font-bold text-xl text-neutral-900 mb-4">{uc.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-inter">{uc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 💬 TRUST STATEMENT (PLACEHOLDER) */}
        <section className="py-40 bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-brand-lime)_0%,transparent_50%)] opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl font-bold tracking-tight mb-20 italic">See What Others Miss.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] space-y-8 flex flex-col items-center">
                    <p className="text-2xl font-bold italic tracking-tight opacity-70 leading-relaxed">&quot;We uncovered fraud networks we didn&apos;t know existed using Deep Sense graph detection.&quot;</p>
                    <div className="pt-8 border-t border-white/5 w-full">
                       <span className="font-bold uppercase tracking-widest text-xs text-brand-lime">CTO, Global Payments Provider</span>
                    </div>
                 </div>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] space-y-8 flex flex-col items-center">
                    <p className="text-2xl font-bold italic tracking-tight opacity-70 leading-relaxed">&quot;Graph detection has fundamentally changed how our analysts investigate coordinated attacks.&quot;</p>
                    <div className="pt-8 border-t border-white/5 w-full">
                       <span className="font-bold uppercase tracking-widest text-xs text-brand-lime">Head of Fraud, Tier 1 Neo-bank</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-0 group-hover:scale-110 transition-transform origin-center duration-1000" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase">Uncover Hidden <br />Fraud Networks</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Stop isolated transaction detection and start viewing organized fraud in high-resolution networks.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
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
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
