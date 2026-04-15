"use client";

import React from "react";
import { 
  FileText, 
  Shield, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  Database, 
  LayoutDashboard,
  Lock,
  RefreshCw,
  FileSearch,
  BookOpen,
  Send,
  History,
  Scale
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function RegulatoryReportingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 -translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <FileText className="w-3.5 h-3.5" />
              <span>AML Compliance Layer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl text-center">
              Automated <span className="text-indigo-600 italic">Regulatory Reporting</span> for AML.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Generate, manage, and track regulatory reports with structured workflows — ensuring compliance with financial authorities.
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
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <AlertTriangle className="w-24 h-24 text-red-50/50" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">The Reporting Bottleneck</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10">"Delayed or incorrect reporting can result in serious regulatory consequences."</p>
                     <ul className="space-y-6">
                        {[
                          "Regulatory reports are increasingly complex and time-sensitive.",
                          "Manual processes lead to frequent errors and inconsistencies.",
                          "Missing mandatory submission deadlines leads to heavy penalties.",
                          "Compliance teams are overloaded with fragmented data gathering."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">Manual Reporting Is Risky and Inefficient</h2>
                  <p className="text-zinc-500 text-lg mb-12">The gap between detecting a suspicious activity and filing a formal report is where the highest compliance risk lives. Manual reporting can't keep up with modern transaction volumes.</p>
                  <div className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm border-l-4 border-l-red-500">
                     <p className="text-sm font-bold text-neutral-800 italic">"Ensure 100% on-time submission accuracy with automated filing workflows."</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">Automated AML Reporting Workflows</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20">Deep Sense streamlines regulatory reporting by connecting detection, investigation, and reporting into a single, audit-ready system.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Auto Report Gen", desc: "Pre-populate STRs and CTRs using data from your investigation cases.", icon: <FileText /> },
                { title: "Structured Workflows", desc: "Follow state-mandated steps from alert to final submission.", icon: <Layers /> },
                { title: "Investigation Linked", desc: "Attach evidence, risk scores, and notes directly to the report.", icon: <Search /> },
                { title: "Audit-Ready Output", desc: "Generate formatted outputs ready for immediate regulatory portal upload.", icon: <CheckCircle2 /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-indigo-500/10 blur-[150px] opacity-40 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto text-center relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-6">From Detection to Reporting</h2>
              <p className="text-zinc-400 text-lg mb-20 italic">"A seamless transition from insight to submission."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative text-center">
                 {[
                   { label: "Detection", sub: "Activity flagged by engine", icon: <Zap /> },
                   { label: "Alert", sub: "Operational alert generated", icon: <AlertTriangle /> },
                   { label: "Case", sub: "Investigated by compliance", icon: <FileSearch /> },
                   { label: "Formulate", sub: "Report prepared automatically", icon: <BookOpen /> },
                   { label: "Submit", sub: "Review and submission sent", icon: <Send /> }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-lime group-hover:text-black transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed px-4">{item.sub}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-6 h-6 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Report Types & 6. Data-Driven (Combined) */}
        <section className="py-32 px-8 bg-zinc-50 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Compliance Reporting Coverage</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense supports the mandatory report types required by global and local regulators (NFIU, CBN, etc.).</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <FileText color="indigo" />, label: "STRs (Suspicious Transaction)" },
                      { icon: <Scale color="indigo" />, label: "CTRs (Currency Transaction)" },
                      { icon: <Shield color="indigo" />, label: "Compliance Reports" },
                      { icon: <Database color="indigo" />, label: "Regulatory Audits" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 font-bold text-sm shadow-sm group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        {item.label}
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl font-bold font-manrope mt-20 mb-8 tracking-tight">Reports Built from Real Data</h2>
                 <p className="text-zinc-500 text-sm mb-8">Stop manual copy-pasting. Deep Sense automatically populates your regulatory forms using live intelligence.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      "Transaction Data",
                      "Customer Profiles",
                      "Risk Scores",
                      "Investigation Outcomes"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-bold text-sm text-zinc-600">
                         <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-white rounded-[56px] shadow-2xl border border-zinc-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <Send className="w-32 h-32 text-indigo-50 opacity-50" />
                 </div>
                 <h3 className="text-2xl font-bold mb-10 italic">Seamless Investigation to Reporting</h3>
                 <div className="space-y-6">
                    <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-between group-hover:border-indigo-600 transition-colors">
                       <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Step 1</span>
                       <span className="text-xs font-black italic">Convert Case #992 to STR</span>
                    </div>
                    <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-between group-hover:border-indigo-600 transition-colors">
                       <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Step 2</span>
                       <span className="text-xs font-black italic">Attach Risk Profile Evidence</span>
                    </div>
                    <div className="p-5 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-between group-hover:border-indigo-600 transition-colors">
                       <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Step 3</span>
                       <span className="text-xs font-black italic">Auto-Generate Submission XML/PDF</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8. Review & Approval & 9. Integration */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Controlled Reporting Process</h2>
                 <p className="text-zinc-500 text-lg mb-12">Maintain strict quality control with multi-step review and approval workflows before any submission.</p>
                 <div className="space-y-8">
                    {[
                      { title: "Review Workflows", desc: "Four-eyes principle applied to every regulatory submission.", icon: <Search /> },
                      { title: "Approval Steps", desc: "Explicit sign-off levels for different report sensitivities.", icon: <Shield /> },
                      { title: "Version Tracking", desc: "Track every draft and modification before finalization.", icon: <History /> },
                      { title: "Regulatory Submission", desc: "Ready for direct integration with FIUs and Central Banks.", icon: <Send /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100">
                           {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600" })}
                        </div>
                        <div>
                           <h4 className="font-bold text-neutral-900 mb-1">{item.title}</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-indigo-600 rounded-[56px] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl" />
                 <h3 className="text-3xl font-bold mb-10 italic">Ready for Regulatory Submission</h3>
                 <p className="mb-12 text-indigo-100">Deep Sense supports integration with systems such as Financial Intelligence Units and Central Banking submission platforms.</p>
                 <div className="grid grid-cols-1 gap-4">
                    {[
                       "Financial Intelligence Units (FIU)",
                       "Central Banking Systems (CBN, etc.)",
                       "Compliance Data Gateways"
                    ].map((sys, i) => (
                       <div key={i} className="flex items-center gap-4 p-5 bg-white/10 border border-white/20 rounded-2xl group hover:bg-white hover:text-indigo-600 transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm font-bold uppercase tracking-tight">{sys}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Audit Trails & 11. Security */}
        <section className="py-32 bg-zinc-900 px-8 text-white rounded-[64px] mx-4 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="order-2 lg:order-1">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Fully Auditable Reporting</h2>
                 <p className="text-zinc-400 text-lg mb-12">Every change, review, and submission is logged, creating a flawless paper trail for governance and oversight.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Report History", desc: "Access every report ever filed instantly.", icon: <History /> },
                      { title: "Submission Tracking", desc: "Proof of delivery for every regulatory filing.", icon: <Send /> },
                      { title: "User Activity Logs", desc: "Track which officer drafted vs approved.", icon: <Users /> },
                      { title: "Change Tracking", desc: "Audit granular edits made during review.", icon: <RefreshCw /> }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] group hover:bg-white hover:text-neutral-900 transition-all cursor-default">
                         <div className="text-brand-lime mb-6 group-hover:text-indigo-600 transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                         </div>
                         <h4 className="font-bold">{item.title}</h4>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[56px] backdrop-blur-xl">
                    <h2 className="text-3xl font-bold mb-10 italic">Secure Reporting Infrastructure</h2>
                    <div className="space-y-10">
                       {[
                         { title: "Data Protection", desc: "End-to-end encryption for sensitive submission data.", icon: <Lock /> },
                         { title: "Access Controls", desc: "Granular permissions for reporting vs investigation roles.", icon: <Shield /> },
                         { title: "Compliance Workflows", desc: "Platform-enforced separation of duties.", icon: <Scale /> }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                               {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-brand-lime" })}
                            </div>
                            <div>
                               <h4 className="font-bold mb-1">{item.title}</h4>
                               <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 text-center mb-20 tracking-tight">Beyond Manual Compliance</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Manual Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600">
                       {[
                         "Automated reporting",
                         "Integrated workflows",
                         "Full Audit trail",
                         "Real-time data reuse",
                         "Role-based submission"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               No / Fragmented
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1]">
                   Stay Compliant <br />
                   <span className="text-brand-lime italic font-black text-6xl italic">with Confidence.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                   Deep Sense enhances regulatory reporting workflows but should be used alongside your organization’s broader compliance policies and procedures. Meet requirements early and reduce risk.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg shadow-2xl shadow-brand-lime/10">
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

function LayersIcon({ className }: { className?: string }) {
   return (
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width="24" height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         className={className}
      >
         <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
         <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
         <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
   );
}
