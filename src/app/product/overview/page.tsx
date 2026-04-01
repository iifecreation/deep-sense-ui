"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Database, Zap, BrainCircuit, ShieldCheck, 
  Search, Share2, Smartphone, BarChart3, 
  ArrowRight, FileCode, Lock, Cpu, Globe,
  Activity, Layers, MousePointer2
} from "lucide-react";
import Link from "next/link";

export default function ProductOverview() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-32">
        
        {/* 1. 🔥 HERO SECTION */}
        <section className="py-24 px-6 md:px-24 bg-white relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-96 bg-linear-to-b from-brand-lime/10 to-transparent pointer-events-none" />
          <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
            <span className="text-zinc-500 font-inter text-sm font-bold uppercase tracking-[0.3em] mb-6">Product Overview</span>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] mb-8 tracking-tighter max-w-[1000px]">
              A Complete <span className="text-neutral-900/40">Fraud Intelligence</span> Platform
            </h1>
            <p className="max-w-[700px] text-zinc-600 text-lg md:text-xl font-inter leading-relaxed mb-12">
              Deep Sense combines real-time data processing, machine learning, and graph intelligence to detect, analyze, and prevent fraud at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-neutral-900 text-white rounded-full text-lg font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Request Demo
              </button>
              <button className="px-10 py-4 border border-zinc-200 bg-white rounded-full text-lg font-bold font-manrope hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                View API Docs <FileCode className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Visual idea: System architecture diagram (pipeline style) */}
            <div className="mt-24 w-full max-w-[1100px] bg-zinc-50 rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,247,1,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-6">
                 {[
                   { label: "Data Source", icon: <Database className="w-5 h-5" /> },
                   { label: "Ingestion", icon: <Zap className="w-5 h-5" /> },
                   { label: "AI Scorer", icon: <BrainCircuit className="w-5 h-5" /> },
                   { label: "Decision", icon: <ShieldCheck className="w-5 h-5" /> },
                   { label: "Action", icon: <Activity className="w-5 h-5" /> }
                 ].map((step, idx, arr) => (
                   <React.Fragment key={idx}>
                     <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 group-hover:border-brand-lime/30 transition-all duration-500">
                           <div className="text-neutral-900 group-hover:text-brand-lime transition-all">
                              {step.icon}
                           </div>
                        </div>
                        <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">{step.label}</span>
                     </div>
                     {idx < arr.length - 1 && (
                       <div className="hidden md:flex flex-1 h-px bg-linear-to-r from-gray-200 via-brand-lime/30 to-gray-200 relative">
                          <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-brand-lime animate-ping" />
                       </div>
                     )}
                   </React.Fragment>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 2. 🧩 PLATFORM SUMMARY */}
        <section className="py-24 px-6 md:px-24 bg-zinc-50/50">
           <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                 <div className="flex-1 max-w-[540px]">
                    <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em] mb-4 block">Unified Infrastructure</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
                       Everything You Need to Detect and Stop Fraud
                    </h2>
                    <p className="text-lg text-zinc-600 font-inter leading-relaxed">
                       Deep Sense is not just a fraud detection tool — it’s a full-stack fraud intelligence platform designed to monitor transactions, score risk, detect patterns, and empower investigation teams.
                    </p>
                 </div>
                 
                 <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Real-Time Processing", dev: "Ingest and evaluate transactions instantly", icon: <Zap className="w-5 h-5" /> },
                      { title: "AI-Powered Detection", dev: "Machine learning and anomaly detection models", icon: <BrainCircuit className="w-5 h-5" /> },
                      { title: "Decision Engine", dev: "Combine rules and risk scores for actions", icon: <Cpu className="w-5 h-5" /> },
                      { title: "Investigation Tools", dev: "Alerts, cases, and analyst workflows", icon: <FolderSearch className="w-5 h-5" /> }
                    ].map((pill, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col gap-4 hover:shadow-xl transition-all">
                         <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-neutral-900">
                           {pill.icon}
                         </div>
                         <h4 className="text-lg font-bold font-manrope text-neutral-900">{pill.title}</h4>
                         <p className="text-sm text-zinc-500 font-inter leading-relaxed">{pill.dev}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. ⚙️ SYSTEM ARCHITECTURE */}
        <section className="py-32 px-6 md:px-24 bg-white">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <div className="flex flex-col gap-6 mb-20 max-w-[800px]">
                <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">End-to-End Pipeline</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
                  How Deep Sense <span className="text-neutral-900/40">Works End-to-End</span>
                </h2>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                 {/* Connection line for desktop */}
                 <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-zinc-100 z-0" />
                 
                 {[
                   "Transaction Ingestion", "Feature Engineering", "Fraud Scoring", "Decision Engine", "Alerts & Cases", "Investigation"
                 ].map((step, idx) => (
                   <div key={idx} className="flex flex-col items-center gap-6 relative z-10">
                      <div className="w-20 h-20 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center shadow-lg group hover:border-brand-lime transition-all duration-500">
                         <span className="text-xl font-bold font-manrope text-neutral-900 group-hover:text-brand-lime">{idx + 1}</span>
                      </div>
                      <span className="text-sm font-bold font-manrope text-neutral-800 tracking-tight leading-tight max-w-[120px]">{step}</span>
                   </div>
                 ))}
              </div>
              <p className="mt-16 text-zinc-400 font-inter text-sm italic">
                Designed for low-latency, high-volume environments with millisecond response requirements.
              </p>
           </div>
        </section>

        {/* 4. 🧠 CORE MODULES */}
        <section className="py-24 px-6 md:px-24 bg-zinc-50/50">
           <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-6 mb-20">
                <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">The Engine Room</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                   Core Platform <span className="text-neutral-900/40">Modules</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: "Transaction Monitoring", items: ["Real-time ingestion APIs", "Bulk/Streaming support", "Data enrichment"], icon: <Activity /> },
                   { title: "Fraud Scoring Engine", items: ["Machine learning models", "Anomaly detection", "Risk score generation"], icon: <BrainCircuit /> },
                   { title: "Rules Engine", items: ["Custom fraud rules", "Dynamic conditions", "Org-level config"], icon: <Layers /> },
                   { title: "Decision Service", items: ["Approve / Review / Block", "Policy-based decisions", "Explainable outcomes"], icon: <ShieldCheck /> },
                   { title: "Alerts & Case Mgmt", items: ["Automated alerts", "Case workflows", "Analyst tracking"], icon: <Bell /> },
                   { title: "Graph Intelligence", items: ["Linked entities", "Fraud ring detection", "Network risk scoring"], icon: <Share2 /> },
                   { title: "Device Intelligence", items: ["Fingerprinting", "Suspicious device detection", "Cross-tracking"], icon: <Smartphone /> },
                   { title: "Analytics & Reporting", items: ["Fraud trends", "Risk breakdowns", "Operational insights"], icon: <BarChart3 /> }
                 ].map((mod, idx) => (
                   <div key={idx} className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col gap-8 hover:shadow-2xl hover:shadow-indigo-50 transition-all duration-500 overflow-hidden relative group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white transition-all relative z-10">
                        {mod.icon}
                      </div>
                      <div className="flex flex-col gap-5 relative z-10">
                         <h4 className="text-xl font-bold font-manrope text-neutral-900">{mod.title}</h4>
                         <ul className="flex flex-col gap-3">
                           {mod.items.map((item, i) => (
                             <li key={i} className="text-zinc-500 text-sm font-inter flex items-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                               {item}
                             </li>
                           ))}
                         </ul>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5, 6, 7. technical depth sections combined in a structured way */}
        <section className="py-32 px-6 md:px-24 bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-brand-lime/10 to-transparent pointer-events-none" />
           <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                 {/* 5. ⚡ REAL-TIME ENGINE */}
                 <div className="flex flex-col gap-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-lime">
                       <Zap className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-4">
                       <h3 className="text-3xl font-bold font-manrope">Built for Real-Time</h3>
                       <p className="text-white/60 leading-relaxed font-inter">Deep Sense processes transactions as they happen, ensuring fraud is detected before damage occurs. Decisions in under 100ms.</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-sm text-brand-lime font-bold uppercase tracking-widest">
                       <li>• Millisecond scoring</li>
                       <li>• Async architecture</li>
                       <li>• Event-driven pipeline</li>
                    </ul>
                 </div>

                 {/* 6. 🔄 DECISIONING LAYER */}
                 <div className="flex flex-col gap-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-lime">
                       <Cpu className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-4">
                       <h3 className="text-3xl font-bold font-manrope">Signal to Action</h3>
                       <p className="text-white/60 leading-relaxed font-inter">Transform complex signals from ML, rules, and devices into clear, explainable decisions based on org-specific policies.</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-sm text-brand-lime font-bold uppercase tracking-widest">
                       <li>• Explainable results</li>
                       <li>• Policy-based logic</li>
                       <li>• Automated actions</li>
                    </ul>
                 </div>

                 {/* 7. 🧬 INTELLIGENCE LAYER */}
                 <div className="flex flex-col gap-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-lime">
                       <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-4">
                       <h3 className="text-3xl font-bold font-manrope">Beyond Traditional</h3>
                       <p className="text-white/60 leading-relaxed font-inter">Go beyond rules with graph-based ring detection and behavioral pattern analysis for future-ready security.</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-sm text-brand-lime font-bold uppercase tracking-widest">
                       <li>• Fraud ring detection</li>
                       <li>• Self-learning models</li>
                       <li>• Cross-entity intelligence</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* 8, 9, 10. Integration, Security, Scalability */}
        <section className="py-32 px-6 md:px-24 bg-white">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              <div className="flex flex-col gap-12">
                 {/* 8. 🔌 INTEGRATION & API */}
                 <div className="flex flex-col gap-6">
                    <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Connectivity</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">Designed for <span className="text-neutral-900/40">Developers</span></h2>
                    <p className="text-zinc-600 text-lg font-inter leading-relaxed max-w-[500px]">Integrate Deep Sense into your high-volume stream or batch system in minutes via standard REST APIs and Webhooks.</p>
                    <div className="p-8 bg-zinc-900 rounded-[32px] text-brand-lime font-mono text-sm overflow-hidden relative group">
                       <div className="flex flex-col gap-1">
                          <span className="text-white/40">// Example Score Request</span>
                          <span>POST /v1/score</span>
                          <span className="text-white opacity-40">{`{ "transaction_id": "tx_892", "amount": 1024.50 ... }`}</span>
                       </div>
                       <div className="absolute top-4 right-6 w-8 h-8 bg-white/5 rounded flex items-center justify-center text-white/20 group-hover:text-brand-lime transition-all">
                         <span className="text-[10px]">JSON</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col gap-16 justify-center">
                 {/* 9. 🔐 SECURITY & 10. SCALABILITY */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                       <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                          <Lock className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold font-manrope text-neutral-900">Secure by Design</h4>
                       <p className="text-sm text-zinc-500 font-inter leading-relaxed">Multi-tenant architecture with isolated data, RBAC, and full encryption at every stage.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                       <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center text-neutral-900">
                          <Layers className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold font-manrope text-neutral-900">Scaling with You</h4>
                       <p className="text-sm text-zinc-500 font-inter leading-relaxed">Distributed cloud-native engine built for billion-transaction monthly volumes.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11. 🧪 WHY THIS MATTERS */}
        <section className="py-24 px-6 md:px-24 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-6 mb-16 text-center lg:text-left">
                <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">The Deep Sense Edge</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Why Deep Sense Is <span className="text-neutral-900/40">Different</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                 {[
                   { label: "AI + Graph Intelligence", from: "Static rules only", to: "Hybrid ML & entity networks" },
                   { label: "Total Platform", from: "Detection alerts only", to: "Full investigation tools" },
                   { label: "Clear Action", from: "Just scoring", to: "Scoring + Decisions + Logic" },
                   { label: "True Real-Time", from: "Batch processing", to: "100ms async decisions" }
                 ].map((comp, idx) => (
                   <div key={idx} className="bg-white p-8 rounded-3xl flex flex-col gap-8 shadow-sm group hover:shadow-xl transition-all h-full">
                      <h4 className="text-lg font-bold font-manrope text-neutral-900">{comp.label}</h4>
                      <div className="flex flex-col gap-4 mt-auto">
                         <div className="flex flex-col gap-1 opacity-40">
                           <span className="text-[10px] uppercase font-bold tracking-widest font-inter">Traditional Systems</span>
                           <span className="text-sm line-through">{comp.from}</span>
                         </div>
                         <div className="flex flex-col gap-1 text-brand-lime">
                           <span className="text-[10px] uppercase font-bold tracking-widest font-inter">Deep Sense</span>
                           <span className="text-sm font-bold">{comp.to}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 12. 📣 CTA SECTION */}
        <section className="py-32 px-6 md:px-24 bg-white">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-12 md:p-24 flex flex-col items-center text-center gap-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,247,1,0.1)_0%,transparent_70%)] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="flex flex-col gap-6 relative z-10">
                 <h2 className="text-4xl md:text-6xl font-bold font-manrope text-white leading-tight tracking-tight">
                   See Deep Sense <br /> <span className="text-white/40">in Action</span>
                 </h2>
                 <p className="text-white/50 text-lg md:text-xl font-inter max-w-[600px] mx-auto">
                   Explore how our platform can transform your fraud detection strategy and protect your bottom line.
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                 <button className="px-12 py-5 bg-brand-lime text-neutral-900 rounded-full text-lg font-bold font-manrope shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    Request Demo
                 </button>
                 <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full text-lg font-bold font-manrope hover:bg-white/10 transition-all flex items-center gap-2">
                    Talk to Sales <ArrowRight className="w-5 h-5 text-brand-lime" />
                 </button>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

// Minimal missing component definitions
function Bell(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}

function FolderSearch(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="16" cy="16" r="3" />
            <path d="M20 20l-1.5-1.5" />
            <path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
        </svg>
    )
}
