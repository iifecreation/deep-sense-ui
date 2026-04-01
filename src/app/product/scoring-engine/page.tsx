"use client";

import React from "react";
import Link from "next/link";
import { 
  BarChart2, 
  Cpu, 
  Activity, 
  Shield, 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  Info, 
  Settings, 
  Zap, 
  LineChart, 
  Brain,
  History,
  Code
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const scoringLayers = [
  { 
    title: "Machine Learning Models", 
    color: "bg-emerald-500", 
    icon: <Brain className="w-5 h-5" />, 
    desc: "Supervised models trained on historical fraud data to predict probability and adapt to new patterns." 
  },
  { 
    title: "Anomaly Detection", 
    color: "bg-amber-500", 
    icon: <Activity className="w-5 h-5" />, 
    desc: "Identifies outliers without labeled data, catching new and unknown fraud patterns instantly." 
  },
  { 
    title: "Rules Engine", 
    color: "bg-blue-500", 
    icon: <Settings className="w-5 h-5" />, 
    desc: "Custom business logic and immediate triggers for known fraud patterns, fully configurable." 
  },
  { 
    title: "Device Intelligence", 
    color: "bg-purple-500", 
    icon: <Cpu className="w-5 h-5" />, 
    desc: "Detects suspicious or reused devices and identifies device-based fraud patterns." 
  },
  { 
    title: "Graph Intelligence", 
    color: "bg-red-500", 
    icon: <Database className="w-5 h-5" />, 
    desc: "Detects linked entities and fraud rings to identify coordinated criminal activity." 
  }
];

const scoreBreakdown = [
  { label: "ML Score", value: 0.72, color: "bg-emerald-400" },
  { label: "Rules Score", value: 0.85, color: "bg-blue-400" },
  { label: "Device Risk", value: 0.65, color: "bg-purple-400" },
  { label: "Graph Risk", value: 0.90, color: "bg-red-400" },
  { label: "Anomaly Score", value: 0.78, color: "bg-amber-400" }
];

export default function FraudScoringEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="max-w-[900px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-neutral-900 text-xs font-bold uppercase tracking-widest mb-8">
              <BarChart2 className="w-4 h-4" />
              Scoring Engine
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tight text-neutral-900">
              Intelligent Fraud Scoring <br />
              <span className="text-zinc-300">Built for Accuracy.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[650px]">
              Deep Sense evaluates every transaction using machine learning, anomaly detection, and real-time intelligence to generate precise fraud risk scores.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                Request Demo
              </button>
              <Link href="/developers/api-overview" className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                <Code className="w-5 h-5" />
                View API Docs
              </Link>
            </div>
          </div>
        </section>

        {/* 🧠 WHAT IS FRAUD SCORING */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-8">
                    <h2 className="text-4xl font-bold font-manrope">What Is Fraud Scoring?</h2>
                    <p className="text-xl text-zinc-600 leading-relaxed">
                      Fraud scoring is the process of assigning a risk score to each transaction based on thousands of behavioral, device, and network signals.
                    </p>
                    <div className="p-8 bg-white rounded-[32px] border border-gray-200 shadow-sm space-y-6">
                       <div className="flex justify-between items-end">
                          <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Risk Spectrum</span>
                          <span className="text-xs font-medium text-zinc-400 italic">Precision: 0.001</span>
                       </div>
                       <div className="relative h-12 w-full bg-linear-to-r from-emerald-400 via-amber-400 to-red-500 rounded-2xl">
                          <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-0.5 h-16 bg-neutral-900" />
                          <div className="absolute -top-8 left-[10%] -translate-x-1/2 text-[10px] font-bold text-emerald-600 uppercase">0.0 (Safe)</div>
                          <div className="absolute top-1/2 left-[90%] -translate-y-1/2 w-0.5 h-16 bg-neutral-900" />
                          <div className="absolute -top-8 left-[90%] -translate-x-1/2 text-[10px] font-bold text-red-600 uppercase">1.0 (High Risk)</div>
                       </div>
                       <p className="text-sm text-zinc-500 font-medium">The higher the score, the more likely the transaction is fraudulent. Our engine provides a unified probability index for instant decisioning.</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Precision", val: "High", desc: "Granular scoring for custom thresholds." },
                      { label: "Signals", val: "2,000+", desc: "Points analyzed per transaction." },
                      { label: "Latency", val: "10ms", desc: "Internal inference time." },
                      { label: "Accuracy", val: "99.2%", desc: "AUC on historical fraud datasets." },
                    ].map((stat, i) => (
                      <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] shadow-sm transform hover:-translate-y-2 transition-all">
                         <span className="block text-3xl font-bold text-neutral-900 mb-1">{stat.val}</span>
                         <span className="block text-xs font-bold text-brand-lime uppercase tracking-widest mb-4">{stat.label}</span>
                         <p className="text-sm text-zinc-500 leading-tight font-inter">{stat.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ HOW SCORING WORKS */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                <h2 className="text-4xl font-bold font-manrope mb-4">How Deep Sense Calculates Risk</h2>
                <p className="text-zinc-500 max-w-[600px] mx-auto">A multi-stage pipeline designed for both accuracy and extreme speed.</p>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative">
                 <div className="absolute top-12 left-0 right-0 h-px bg-gray-100 hidden lg:block -z-10" />
                 {[
                   { t: "Collect Data", d: "Securely ingest transaction and user context via API." },
                   { t: "Feature Gen", d: "Generate 2,000+ fraud features in milliseconds." },
                   { t: "Model Inference", d: "Run scoring models and rules in parallel." },
                   { t: "Signal Sync", d: "Combine weighted signals into a unified score." },
                   { t: "Explain Result", d: "Return score with full breakdown for analysts." },
                 ].map((step, i) => (
                   <div key={i} className="flex-1 text-center space-y-6 group">
                      <div className="w-12 h-12 bg-neutral-900 text-brand-lime rounded-full flex items-center justify-center mx-auto text-lg font-bold border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <h3 className="font-bold font-manrope">{step.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed px-4">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧩 MULTI-LAYER SCORING ENGINE */}
        <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-brand-lime)_0%,transparent_50%)] opacity-10 pointer-events-none" />
           
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8">Multiple Detection Layers, <br />One Unified Score</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {scoringLayers.map((layer, i) => (
                   <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[48px] hover:bg-white/10 transition-all group overflow-hidden relative h-full">
                      <div className={`absolute top-0 right-0 w-24 h-24 ${layer.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                      <div className={`w-14 h-14 ${layer.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl`}>
                        {layer.icon}
                      </div>
                      <h3 className="text-2xl font-bold font-manrope mb-4">{layer.title}</h3>
                      <p className="text-white/50 leading-relaxed font-inter">{layer.desc}</p>
                   </div>
                 ))}
                 
                 <div className="p-10 bg-brand-lime text-neutral-900 rounded-[48px] flex flex-col justify-center items-center text-center">
                    <CheckCircle2 className="w-16 h-16 mb-6" />
                    <h3 className="text-2xl font-bold font-manrope mb-4 text-neutral-900">Final Output</h3>
                    <p className="font-bold opacity-70">Unified Risk Score + Full Signal Breakdown</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 📊 SCORE BREAKDOWN */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <h2 className="text-4xl font-bold font-manrope mb-8">Understand Every Score</h2>
                    <p className="text-lg text-zinc-500 mb-12">Deep Sense provides full transparency into how scores are calculated. Analysts can see exactly which layer contributed to the risk level.</p>
                    <div className="space-y-6">
                       {scoreBreakdown.map((item, i) => (
                         <div key={i} className="space-y-2">
                            <div className="flex justify-between items-end">
                               <span className="font-bold text-neutral-900">{item.label}</span>
                               <span className="text-sm font-bold text-zinc-400">{(item.value * 100).toFixed(0)}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                               <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value * 100}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] pointer-events-none" />
                    <div className="relative bg-neutral-900 rounded-[64px] p-12 text-white border border-white/10 shadow-3xl">
                       <div className="flex justify-between items-center mb-12">
                          <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Transaction Assessment</span>
                          <span className="px-3 py-1 bg-red-500 rounded-full text-[10px] font-bold">HIGH RISK</span>
                       </div>
                       
                       <div className="text-center py-12 border-y border-white/5 mb-12">
                          <span className="block text-8xl font-bold font-manrope text-white mb-2 tracking-tighter">0.86</span>
                          <span className="text-white/30 text-sm font-bold uppercase tracking-widest">Unified Global Score</span>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-8">
                          <div>
                             <span className="block text-white/40 text-[10px] font-bold uppercase mb-2">Primary Factor</span>
                             <span className="text-red-400 font-bold">Graph Linkage</span>
                          </div>
                          <div>
                             <span className="block text-white/40 text-[10px] font-bold uppercase mb-2">Confidence</span>
                             <span className="text-emerald-400 font-bold">98.2%</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔍 EXPLAINABILITY */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Explainable by Design</h2>
                 <p className="text-zinc-500 max-w-[600px] mx-auto">No black boxes. Every decision is backed by explainable evidence that your team can trust.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Contributing Signals", d: "Exact data points that pushed the score higher.", i: <LineChart /> },
                   { t: "Triggered Rules", d: "Immediate alerts based on your custom risk policies.", i: <Shield /> },
                   { t: "Linked Entities", d: "Visual mapping to known suspicious network nodes.", i: <Database /> },
                   { t: "Anomaly Indicators", d: "Description of behavioral deviation detected.", i: <Info /> },
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-white rounded-[40px] border border-gray-200 hover:scale-[1.03] transition-all group">
                      <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-colors">
                        {React.cloneElement(item.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h3 className="text-xl font-bold font-manrope mb-4">{item.t}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
              
              <div className="mt-20 flex flex-wrap justify-center gap-10">
                 {["Analysts Trust the System", "Faster Investigations", "Easier Compliance"].map((txt, i) => (
                   <div key={i} className="flex items-center gap-3 text-neutral-900 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                      {txt}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔁 CONTINUOUS LEARNING */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="relative aspect-square bg-gray-50 rounded-[64px] border border-gray-100 flex items-center justify-center p-20 animate-in fade-in duration-1000">
                    <div className="relative w-full h-full border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center animate-spin-slow">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                          <Brain className="w-8 h-8 text-emerald-500" />
                       </div>
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                          <History className="w-8 h-8 text-blue-500" />
                       </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <RefreshCw className="w-24 h-24 text-brand-lime group-hover:rotate-180 transition-transform duration-1000" />
                    </div>
                 </div>

                 <div>
                    <h2 className="text-4xl font-bold font-manrope mb-8 leading-tight">Models That Improve <br />With Every Decision</h2>
                    <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                      As your fraud analysts mark cases as &quot;fraud&quot; or &quot;benign,&quot; Deep Sense learns from that feedback to automatically refine its scoring models.
                    </p>
                    <div className="space-y-8">
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                             <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                             <h4 className="font-bold text-neutral-900 mb-1">Feedback Loop Integration</h4>
                             <p className="text-sm text-zinc-500">Analyst feedback feeds directly into model training datasets.</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                             <Zap className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                             <h4 className="font-bold text-neutral-900 mb-1">Periodic Retraining</h4>
                             <p className="text-sm text-zinc-500">Scheduled retraining cycles adapt to evolving criminal patterns.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🏭 USE CASES */}
        <section className="py-32 bg-neutral-900 text-white">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Where Fraud Scoring Matters</h2>
                 <p className="text-white/40 max-w-[600px] mx-auto">Precise risk assessment for critical points in the financial lifecycle.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Payment Fraud", d: "Real-time card and bank transfer detection." },
                   { t: "Account Takeover", d: "Identify when users are not who they claim to be." },
                   { t: "Transaction Monitoring", d: "Continuous monitoring for AML and risky behavior." },
                   { t: "Merchant Risk", d: "Assess and score merchant accounts for onboard risk." }
                 ].map((uc, i) => (
                   <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[48px] hover:bg-white/10 transition-all">
                      <div className="w-10 h-1 text-brand-lime mb-8 rounded-full" />
                      <h3 className="text-xl font-bold font-manrope mb-4">{uc.t}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{uc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON SECTION */}
        <section className="py-32 bg-gray-50">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold font-manrope mb-4 text-neutral-900">Beyond Basic Fraud Detection</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8">
               <div className="bg-white rounded-[40px] border border-gray-200 overflow-hidden shadow-xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-gray-100">
                           <th className="p-8 text-sm font-bold text-zinc-400 uppercase tracking-widest font-manrope">Capability</th>
                           <th className="p-8 text-sm font-bold text-brand-lime uppercase tracking-widest font-manrope bg-neutral-900">Deep Sense</th>
                           <th className="p-8 text-sm font-bold text-zinc-400 uppercase tracking-widest font-manrope bg-gray-50">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900">
                        {[
                          { c: "ML-based scoring", d: "Yes", t: "Limited" },
                          { c: "Anomaly detection", d: "Yes", t: "Rare" },
                          { c: "Graph intelligence", d: "Yes", t: "No" },
                          { c: "Explainability", d: "Full", t: "Limited" },
                          { c: "Real-time scoring", d: "Yes", t: "Delayed" },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0">
                             <td className="p-8 font-bold text-sm">{row.c}</td>
                             <td className="p-8 font-extrabold text-neutral-900">{row.d}</td>
                             <td className="p-8 font-medium text-zinc-400 text-sm">{row.t}</td>
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-lime)_0%,transparent_70%)] opacity-10 pointer-events-none" />
              <h2 className="text-4xl md:text-6xl font-bold font-manrope text-white mb-8 relative z-10">See How Deep Sense <br /> Scores Risk</h2>
              <p className="text-xl text-white/50 mb-12 max-w-[600px] mx-auto relative z-10">Request a technical demo and see our scoring engine handle complex fraud scenarios in real-time.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <button className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full font-bold font-manrope text-lg hover:scale-105 transition-all shadow-xl shadow-brand-lime/10">
                   Request Demo
                 </button>
                 <button className="px-10 py-5 bg-white text-neutral-900 rounded-full font-bold font-manrope text-lg hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                   Explore API
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
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
