"use client";

import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Search, 
  Globe, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Database, 
  Fingerprint, 
  Users, 
  Lock, 
  FileSearch,
  Zap,
  RefreshCw,
  Scale
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function SanctionsScreeningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 -z-10 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[140px] opacity-60 -translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Compliance Standard</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl">
              Real-Time <span className="text-indigo-600 italic">Sanctions</span> & Watchlist Screening.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Screen customers and transactions against global sanctions lists, watchlists, and internal databases — in real time and across the entire customer lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full font-bold font-manrope hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-10 rounded-[40px] border border-zinc-200 shadow-2xl">
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                           <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl text-neutral-900">Compliance Risk Map</h4>
                     </div>
                     <div className="space-y-6">
                        {[
                          { label: "UN Sanctions List Update", time: "2 mins ago", status: "Critical" },
                          { label: "Manual Check Queue", time: "Overloaded", status: "Warning" },
                          { label: "Possible Match Missed", time: "Legacy System Error", status: "Risk" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                             <div className="flex flex-col">
                                <span className="text-xs font-bold text-neutral-900">{item.label}</span>
                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest">{item.time}</span>
                             </div>
                             <span className="text-[9px] font-black p-1.5 px-3 bg-red-100 text-red-600 rounded-full uppercase italic">{item.status}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">Manual Screening Is Not Enough</h2>
                <div className="space-y-8">
                   {[
                     { title: "Constant Updates", desc: "Sanctions lists are updated globally and constantly. Static checks fail to capture real-time changes." },
                     { title: "Slow & Error-Prone", desc: "Manual checks introduce latency and human error exactly where speed and precision are required." },
                     { title: "Severe Penalties", desc: "Failure to screen properly can lead to severe regulatory penalties and loss of banking licenses." },
                     { title: "Continuous Risk", desc: "Risk isn't static—customers must be screened not just at onboarding, but continuously." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-5 group">
                        <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                           <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold text-neutral-900 border-b border-zinc-100 pb-1 mb-2 inline-block">{item.title}</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8 text-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight">Automated Sanctions Screening at Scale</h2>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-4xl mx-auto mb-20 italic">
              "Deep Sense automatically screens customers and transactions against multiple watchlists to identify potential risks and compliance violations."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Real-Time Screening", desc: "Screen instantly during onboarding and transaction execution.", icon: <Zap /> },
                { title: "Continuous Monitoring", desc: "Re-screen your entire database whenever watchlists are updated.", icon: <RefreshCw /> },
                { title: "Automated Alerts", desc: "Immediate notification the moment a match is detected.", icon: <AlertTriangle /> },
                { title: "Scalable Processing", desc: "Built to handle millions of screenings per second with zero lag.", icon: <Layers /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-14 h-14 bg-brand-lime text-neutral-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-brand-lime/10">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works (Flow) */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] opacity-40 translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-[1440px] mx-auto relative z-10">
             <div className="text-center mb-24">
                <h2 className="text-5xl font-bold font-manrope mb-6">Screening Across the Customer Lifecycle</h2>
                <p className="text-zinc-400 text-lg">From initial touchpoint to ongoing compliance.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
                {[
                  { label: "Onboarding", sub: "Screening at first point of entry", icon: <Fingerprint /> },
                  { label: "Identity Check", sub: "Matched against global databases", icon: <Database /> },
                  { label: "Transaction", sub: "Monitored as activity occurs", icon: <Activity /> },
                  { label: "Re-screening", sub: "Periodic checks for new risks", icon: <RefreshCw /> },
                  { label: "Review", sub: "Flagged matches reviewed by pros", icon: <Users /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all duration-500 shadow-xl group-hover:rotate-6">
                       {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.label}</h4>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest text-center italic">{item.sub}</p>
                    {i < 4 && <ArrowRight className="hidden md:block absolute top-12 w-5 h-5 text-indigo-500/40" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. Supported Watchlists */}
        <section className="py-32 px-8 bg-zinc-50 overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Comprehensive Screening Coverage</h2>
                   <p className="text-zinc-500 text-lg mb-12">Deep Sense connects to thousands of high-quality data sources, ensuring you meet every regulatory expectation.</p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "UN Sanctions Lists",
                        "OFAC / US Department of Treasure",
                        "EU Consolidated Lists",
                        "Local Regulatory Databases",
                        "Terrorism Watchlists",
                        "Internal Custom Lists"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm font-bold text-sm text-neutral-800">
                           <div className="w-2 h-2 rounded-full bg-indigo-600" />
                           {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="aspect-square bg-white rounded-[40px] shadow-2xl p-12 relative overflow-hidden flex flex-col items-center justify-center">
                   <div className="absolute top-0 right-0 p-8">
                      <Globe className="w-32 h-32 text-indigo-50/50" />
                   </div>
                   <div className="w-64 h-64 bg-indigo-50/50 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-dashed border-indigo-200 rounded-full animate-spin-slow" />
                      <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                         <Database className="w-16 h-16 text-indigo-600" />
                      </div>
                   </div>
                   <div className="mt-12 text-center">
                      <div className="text-3xl font-black italic text-neutral-900">12,000+</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Watched Entities Daily</div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. Matching & 10. Risk-Based (Combined) */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Accurate Name and Entity Matching</h2>
                 <p className="text-zinc-500 leading-relaxed mb-16">Our detection engine uses advanced linguistic algorithms to cut through noise and find matches that legacy systems miss.</p>
                 
                 <div className="space-y-10">
                    {[
                      { title: "Fuzzy Matching", desc: "Handle spelling variations, transliterations, and typos across different languages.", icon: <Search /> },
                      { title: "Alias Detection", desc: "Identify known aliases, DBA (Doing Business As) names, and secondary identities.", icon: <Users /> },
                      { title: "Entity Resolution", desc: "Determine if multiple records belong to the same high-risk individual or entity.", icon: <Fingerprint /> },
                      { title: "Risk-Based Scoring", desc: "Prioritize high-confidence matches and reduce operational noise.", icon: <Scale /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-100">
                           {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600" })}
                        </div>
                        <div>
                           <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col gap-8">
                 {/* 7. Real-Time Screening Section */}
                 <div className="p-10 bg-indigo-600 rounded-[48px] text-white shadow-xl shadow-indigo-600/10 hover:scale-[1.02] transition-transform cursor-default">
                    <h3 className="text-2xl font-bold mb-6 italic">Screen Instantly at Critical Moments</h3>
                    <div className="space-y-4">
                       {["Onboarding Screening", "Transaction-Time Screening", "Background Re-screening"].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/10 border border-white/20 rounded-2xl">
                           <span className="font-bold text-sm">{item}</span>
                           <Zap className="w-4 h-4 text-brand-lime" />
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* 8. Alert & 9. Workflows */}
                 <div className="p-10 bg-zinc-900 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl" />
                    <h3 className="text-2xl font-bold mb-8">Flag Matches Immediately</h3>
                    <p className="text-zinc-400 text-sm mb-10 leading-relaxed">Integrated workflows ensure no match is left unreviewed, with full attribution and confidence scoring.</p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                          <AlertTriangle className="w-6 h-6 text-red-500 mb-4" />
                          <div className="font-bold text-xs uppercase tracking-widest text-zinc-500">Auto Alert</div>
                       </div>
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                          <FileSearch className="w-6 h-6 text-indigo-400 mb-4" />
                          <div className="font-bold text-xs uppercase tracking-widest text-zinc-500">Case Review</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11. Continuous Monitoring, 12. Security & Governance & 15. Positioning */}
        <section className="py-24 bg-zinc-50 px-8">
           <div className="max-w-[1440px] mx-auto text-center mb-24">
              <h2 className="text-5xl font-bold font-manrope mb-8">Built for Continuous Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20">
                 {[
                   { title: "Stay Updated", desc: "Updates are synced daily, ensuring your screening is always against the latest worldwide sanctions.", icon: <RefreshCw color="indigo" /> },
                   { title: "Governance Ready", desc: "Traceable investigation outcomes with granular data access controls for total auditability.", icon: <Lock color="indigo" /> },
                   { title: "Framework Support", desc: "Designed to enhance and integrate into your broader, existing AML framework.", icon: <Layers color="indigo" /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-white rounded-[40px] border border-zinc-200">
                      <div className="w-12 h-12 mb-8">{item.icon}</div>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto">
              <h2 className="text-4xl font-bold font-manrope text-center mb-20 tracking-tight text-neutral-900">Built for Compliance-Ready Screening</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 shadow-xl overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-8 font-black uppercase tracking-[0.3em] text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-[0.3em] text-[10px] italic border-l border-white/10 bg-indigo-600 text-center">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-[0.3em] text-[10px] italic border-l border-white/10 text-center">Legacy Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm">
                       {[
                         "Real-time screening",
                         "Continuous monitoring",
                         "Multiple watchlists",
                         "Integrated workflows",
                         "Linguistic Matching"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                           <td className="p-8 text-neutral-700">{feat}</td>
                           <td className="p-8 text-center border-l border-zinc-50">
                              <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                           </td>
                           <td className="p-8 text-center border-l border-zinc-50 text-zinc-300 italic font-medium">
                              Limited / Fragmented
                           </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Business Impact & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1]">
                   Automate Your <br />
                   <span className="text-brand-lime italic">Sanctions Screening</span> Today.
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                   Reduce compliance risk, avoid regulatory penalties, and modernize your manual processes with industrial-grade intelligence.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg">
                     Request Demo
                   </button>
                   <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-bold font-manrope hover:bg-white hover:text-neutral-900 transition-all text-lg">
                     Talk to Sales
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function RefreshCwIcon({ className, color }: { className?: string, color?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color === "indigo" ? "#4f46e5" : "currentColor"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
