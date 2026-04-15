"use client";

import React from "react";
import { 
  FileText, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Send, 
  History, 
  Lock, 
  Activity, 
  Database, 
  Scale, 
  Network, 
  Settings, 
  Server,
  Monitor,
  HardDrive
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PlatformReportingPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Workflow className="w-3.5 h-3.5" />
              <span>Institutional Orchestration</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Built for <span className="text-indigo-600">Regulatory</span> Workflows.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense provides the infrastructure to generate, manage, and track compliance reports — ensuring seamless regulatory workflows across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. Platform Overview */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-indigo-200 decoration-8 underline-offset-16">A System for End-to-End Compliance</h2>
            <p className="text-zinc-500 text-lg mb-16 max-w-3xl italic font-inter leading-relaxed">Reporting is not a feature; it's the final output of an integrated operational lifecycle. Deep Sense supports reporting as part of a much broader institutional workflow.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">
               {[
                 { l: "Detection", i: <Zap /> },
                 { l: "Investigation", i: <Search /> },
                 { l: "Decision", i: <Scale /> },
                 { l: "Reporting", i: <FileText /> },
                 { l: "Audit", i: <History /> }
               ].map((step, i) => (
                 <div key={i} className="p-8 bg-white border border-zinc-200 rounded-[32px] flex flex-col items-center gap-4 group hover:bg-neutral-900 transition-all">
                    <div className="text-indigo-600 group-hover:text-brand-lime transition-colors">
                       {React.cloneElement(step.i as React.ReactElement, { className: "w-8 h-8" })}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{step.l}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 3. Workflow Architecture */}
        <section className="py-32 px-8 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">From Event to Regulatory Submission</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Our architecture is designed to transition data from detection signals into structured disclosure files with zero friction.</p>
                 
                 <div className="space-y-6 relative">
                    {[
                      { l: "Event Detection", d: "Deep Sense identifies suspicious activity in real-time." },
                      { l: "Alert Trigger", d: "Detection logic fires a high-confidence operational alert." },
                      { l: "Case Escalation", d: "Alert is converted into a structured investigative case." },
                      { l: "Investigative Flow", d: "Analyst reviews context and attaches evidence lockers." },
                      { l: "Report Generation", d: "System auto-generates the ST/CT report from case data." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                         <div className="w-1.5 h-16 bg-indigo-50 group-hover:bg-brand-lime transition-all rounded-full shrink-0 mt-1" />
                         <div>
                            <div className="flex items-center gap-3">
                               <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-black italic">{i+1}</span>
                               <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight">{step.l}</h4>
                            </div>
                            <p className="text-xs text-zinc-400 font-inter italic mt-1 pr-12">{step.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 rounded-[64px] text-white shadow-3xl border border-white/5 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-12">
                   <Server className="w-48 h-48 text-white/5 animate-spin-slow" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">System Architecture</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12 font-inter italic leading-relaxed">Robust framework for institutional reporting workflows.</p>
                    <div className="grid grid-cols-2 gap-6">
                       {[
                         { l: "DATA LINEAGE", v: "Persistent" },
                         { l: "THROUGHPUT", v: "High-Volume" },
                         { l: "SCHEMA SUPPORT", v: "Universal" },
                         { l: "MODULARITY", v: "Extensible" }
                       ].map((st, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-1 items-left">
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest">{st.l}</span>
                            <span className="text-xl font-black italic">{st.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Infrastructure & 5. Automation */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight">Flexible Reporting Framework</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32">Deep Sense provides the system capability to scale reporting volumes without increasing operational overhead.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                 <div className="p-12 bg-white border border-zinc-200 rounded-[56px] text-left hover:shadow-2xl transition-all">
                    <h4 className="text-2xl font-bold italic uppercase tracking-tighter mb-8 italic underline decoration-indigo-200 decoration-8 underline-offset-8">Reporting Infrastructure</h4>
                    <ul className="space-y-6">
                       {[
                         { l: "Structured Report Generation", d: "Native support for industry-standard compliance files." },
                         { l: "Configurable Templates", d: "Modify report logic based on new regulatory mandates." },
                         { l: "Support for Multiple Assets", d: "Cross-asset reporting under one common infrastructure." },
                         { l: "Extensible Formats", d: "Support for JSON, XML, and custom delimited files." }
                       ].map((it, i) => (
                         <li key={i} className="flex gap-6 items-start">
                            <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                            <div>
                               <span className="block font-bold text-neutral-900 uppercase italic text-xs tracking-tight">{it.l}</span>
                               <span className="text-[11px] text-zinc-400 italic font-inter italic leading-relaxed">{it.d}</span>
                            </div>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="p-12 bg-neutral-900 text-white rounded-[56px] text-left shadow-3xl flex flex-col justify-center">
                    <h4 className="text-2xl font-bold italic uppercase tracking-tighter mb-8 italic text-brand-lime">Workflow Automation</h4>
                    <p className="text-zinc-500 text-sm mb-12 italic leading-relaxed pr-10 italic">"The average institution spends 14 hours per STR. Deep Sense reduces this to 14 minutes."</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         "Auto-Trigger Generation",
                         "Smart Workflow Routing",
                         "Approval Pipelines",
                         "Escalation Handling"
                       ].map((feat, i) => (
                         <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between text-[10px] font-black tracking-widest uppercase">
                            {feat}
                            <Zap className="w-3 h-3 text-brand-lime" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. Case-to-Report Linking & 7. Integration */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-12">
                  {[
                    { title: "Maintain Linear Context", desc: "Link reports directly to investigations to preserve data lineage and ensure absolute consistency for audits.", icon: <Layers /> },
                    { title: "External Connectivity", desc: "Supports direct integration through secure gateways to financial intelligence units and central regulators.", icon: <Network /> },
                    { title: "Institutional Oversight", desc: "Built-in role-based approvals and version tracking for highly sensitive reporting operations.", icon: <ShieldCheck /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                          {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6 border-indigo-100" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter">{it.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12">{it.desc}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 p-16 bg-white border border-zinc-200 rounded-[80px] text-neutral-900 shadow-3xl relative overflow-hidden group">
                 <Monitor className="w-48 h-48 absolute top-0 right-0 p-12 text-zinc-100" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Data Integrity Layers</h3>
                 <div className="space-y-6 font-manrope italic pr-16">
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 font-bold text-sm">
                       "Deep Sense preserves the original transaction payload from ingestion to final filing—preventing any data corruption or transformation errors."
                    </div>
                    <div className="flex gap-4 font-black uppercase text-[10px] tracking-widest text-indigo-600 italic">
                       <CheckCircle2 className="w-4 h-4" />
                       Validation Passed: 0.00% Transformation Loss
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Tracking & 11. Scalability */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden text-center shadow-3xl">
           <div className="absolute inset-0 bg-indigo-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-8 tracking-tight italic uppercase font-manrope">Industrial Scalability.</h2>
              <p className="text-xl text-white/40 max-w-2xl mx-auto italic font-inter leading-relaxed mb-32">Handle thousands of concurrent reporting workflows with minimal operational friction.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left w-full max-w-5xl">
                 {[
                   { title: "Status Tracking", desc: "Live monitoring of submission logs and report workflow history.", icon: <Activity /> },
                   { title: "High Throughput", desc: "Cloud-native architecture built to handle massive surges in event monitoring and disclosure.", icon: <HardDrive /> },
                   { title: "Change Tracking", desc: "Detailed modification logs for every report field across the entire institution.", icon: <Settings /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col gap-6 p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white hover:text-neutral-900 transition-all group">
                      <div className="text-indigo-600 group-hover:scale-110 transition-transform">{it.icon}</div>
                      <h4 className="text-xl font-bold uppercase italic tracking-tighter">{it.title}</h4>
                      <p className="text-zinc-500 text-[11px] group-hover:text-neutral-600 italic leading-relaxed">{it.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 12. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">More Than Just Reporting Tools</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">System Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense Platform</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Native end-to-end integrated workflows",
                         "Automated case-to-report generation",
                         "Institutional-grade auditability",
                         "Infinite horizontal scalability",
                         "Cross-platform connectivity"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               No / Fragmented
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 13. Impact & 14. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Platform-Level Efficiency</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Modernize Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Reporting System.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Reduce complexity, improve accuracy, and strengthen your institution's compliance readiness with our institutional-grade reporting infrastructure.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request System Overview
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     View Platform Docs
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function Search({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
