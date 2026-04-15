"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Search, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Clock, 
  ShieldCheck, 
  Briefcase, 
  Send, 
  History, 
  AlertTriangle, 
  Database, 
  Layers, 
  Activity, 
  Scale, 
  Lock, 
  BookOpen,
  Building
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function ReportingGuidePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-red-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-red-500 text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <FileText className="w-3.5 h-3.5" />
              <span>Expert Reporting Blueprint</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter uppercase italic font-manrope">
              Regulatory <span className="text-red-600">Reporting</span> Guide.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Learn how to detect, investigate, and report suspicious transactions in line with global AML requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button 
                onClick={() => document.getElementById('guide-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-manrope"
              >
                Download Guide
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                Request Demo
              </button>
            </div>
          </div>
        </section>

        {/* 2. Overview & 3. Why Reporting Matters */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Understanding AML Reporting</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8">Regulatory reporting is a critical part of AML compliance. Financial institutions must detect suspicious activity and report it to relevant authorities in a timely and structured manner to prevent financial crime and satisfy oversight mandates.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { t: "Compliance Adherence", d: "Satisfy strict regulatory mandates." },
                      { t: "Crime Detection", d: "Identify and disrupt illicit fund flows." },
                      { t: "Institutional Safety", d: "Reduce overall regulatory and operational risk." },
                      { t: "Law Enforcement", d: "Support global efforts to stop financial crime." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center group font-manrope">
                         <div className="w-1.5 h-10 bg-red-100 group-hover:bg-red-600 transition-all rounded-full shrink-0" />
                         <div>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 font-manrope italic leading-tight">{it.t}</span>
                            <span className="text-xs font-bold text-zinc-900 italic font-manrope">{it.d}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[56px] shadow-3xl text-left relative overflow-hidden group">
                 <Clock className="w-48 h-48 absolute top-0 right-0 p-12 text-zinc-50 group-hover:text-red-50 transition-colors" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 border-b border-zinc-50 pb-8">The Criticality of Speed</h3>
                 <p className="text-zinc-500 text-sm mb-12 italic pr-12 italic">"Delays in suspicious transaction reporting are often cited as a primary failure during regulatory enforcement actions."</p>
                 <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl text-white transform hover:translate-x-4 transition-transform border border-white/5 relative z-10">
                    <Send className="text-brand-lime w-10 h-10 shrink-0" />
                    <p className="text-xs font-bold italic pr-8 italic uppercase tracking-tight font-manrope leading-tight">Prompt disclosure is a mandatory procedural requirement across all major financial jurisdictions.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Common Reporting Requirements */}
        <section className="py-32 px-8 font-manrope">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic underline decoration-red-100 decoration-8 underline-offset-16 font-manrope italic">Common Reporting Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16 text-left font-manrope">
                 {[
                   { title: "STR / SAR", d: "Suspicious Transaction Reports are triggered after a structured investigation into unusual activity.", icon: <AlertTriangle className="text-red-600" /> },
                   { title: "CTR", d: "Currency Transaction Reports are mandated for transactions exceeding defined cash thresholds.", icon: <Database className="text-indigo-600" /> },
                   { title: "Internal Compliance", d: "Periodic institutional reviews for board-level oversight and regulatory audits.", icon: <ShieldCheck className="text-brand-lime" /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[48px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                      <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-neutral-900 group-hover:text-white transition-all shadow-sm">
                         {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-6 italic">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Reporting Workflow */}
        <section className="py-32 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden text-center shadow-3xl font-manrope italic">
           <div className="absolute inset-0 bg-red-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase italic">From Detection to Submission</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full text-center">
                 {[
                   { l: "Detect", i: <Search /> },
                   { l: "Alert", i: <Zap /> },
                   { l: "Case", i: <Briefcase /> },
                   { l: "Investigate", i: <Workflow /> },
                   { l: "Generate", i: <FileText /> },
                   { l: "Submit", i: <Send /> }
                 ].map((step, i) => (
                   <div key={i} className="flex flex-col items-center gap-6 group">
                      <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl font-manrope">
                         {React.cloneElement(step.i as React.ReactElement, { className: "w-8 h-8 font-manrope" })}
                         <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-neutral-900 rounded-full flex items-center justify-center text-[10px] font-black italic">
                           {i+1}
                         </div>
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500 group-hover:text-white transition-colors italic">{step.l}</span>
                      {i < 5 && <ArrowRight className="hidden md:block absolute top-[40px] w-4 h-4 text-white/5" style={{ left: `${(i+1)*16.6}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6-9. Detect, Process, Prep, Review */}
        <section className="py-32 px-8 overflow-hidden font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Prepare a Regulatory Report</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope">A high-quality disclosure is build on structured data. Deep Sense helps you populate the required schema with total institutional accuracy.</p>
                 <div className="space-y-6 mb-20 font-manrope">
                    {[
                      { l: "Identify Reportable Activity", d: "Smurfing, structuring, and rapid fund velocity signals." },
                      { l: "Build a Strong Case", d: "Analyze behavior, review history, and gather evidence." },
                      { l: "Report Generation", d: "Auto-populate customer, transaction, and reasons for suspicion." },
                      { l: "Review & Approval", d: "Internal institutional validation workflows to ensure accuracy." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-start group p-6 hover:bg-zinc-50 rounded-3xl border border-transparent hover:border-zinc-100 transition-all font-manrope italic">
                         <div className="w-1.5 h-16 bg-red-50 group-hover:bg-red-600 transition-all rounded-full shrink-0 mt-1" />
                         <div>
                            <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight mb-1 font-manrope italic">{it.l}</h4>
                            <p className="text-xs text-zinc-400 font-inter italic font-medium leading-relaxed italic pr-12">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] shadow-3xl text-neutral-900 relative overflow-hidden group font-manrope italic">
                 <Building className="w-48 h-48 absolute top-0 right-0 p-12 text-zinc-100" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Submission Workflow</h3>
                 <div className="space-y-6 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 font-manrope">Ensure compliance with the relevant oversight authorities across your jurisdiction.</p>
                    <div className="grid grid-cols-1 gap-4 font-manrope">
                       {[
                         { l: "Financial Intelligence Units (FIU)", s: "STR / SAR Submission" },
                         { l: "Central Banking Authorities", s: "CTR / Aggregate Filing" },
                         { l: "Institutional Governance Board", s: "Quarterly Compliance Reports" }
                       ].map((it, i) => (
                         <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl flex justify-between items-center group-hover:bg-red-600 group-hover:text-white transition-all font-manrope">
                            <div className="flex flex-col">
                               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{it.l}</span>
                               <span className="text-xs font-bold italic">{it.s}</span>
                            </div>
                            <Send className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11-13. Audit Trails, Challenges, Best Practices */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24 font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Institutional Reporting Integrity</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic font-manrope">Overcoming the common pain points of manual disclosure processes.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left font-manrope italic pr-10">
              {[
                { title: "Maintain Reporting Records", desc: "Track report history, store investigative data, and log all user actions in immutable logs.", icon: <History /> },
                { title: "Challenge: Fragmentation", desc: "Traditional systems suffer from data inconsistency and delayed institutional reporting.", icon: <Layers /> },
                { title: "BP: Workflow Automation", desc: "Automate detection and review pipelines to centralize institutional compliance data.", icon: <Zap /> },
                { title: "Security & Validation", desc: "Ensure report accuracy through multi-step review and institutional-grade validation.", icon: <ShieldCheck /> },
                { title: "Governance Controls", desc: "Built-in audit trails for final submissions to financial intelligence units.", icon: <Lock /> },
                { title: "Submission History", desc: "Persistent visibility into previous reports and regulatory correspondence.", icon: <Database /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden font-manrope italic">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-6 italic">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 14. How Deep Sense Helps & 15. Download Form */}
        <section id="guide-form" className="py-32 px-8 bg-neutral-900 border border-white/5 mx-4 rounded-[64px] relative overflow-hidden text-center shadow-3xl text-white font-manrope italic font-manrope">
           <div className="absolute inset-0 bg-red-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
              {formSubmitted ? (
                 <div className="py-24 animate-in zoom-in-95 duration-500">
                    <CheckCircle2 className="w-24 h-24 text-red-600 mx-auto mb-10" />
                    <h2 className="text-5xl font-black uppercase italic italic mb-8">Guide Inbound</h2>
                    <p className="text-zinc-500 text-lg mb-12 italic">Check your inbox for the high-fidelity Regulatory Reporting Guide PDF.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-red-500 font-black uppercase tracking-widest text-xs underline underline-offset-8">Download again</button>
                 </div>
              ) : (
                 <>
                    <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-8 tracking-tight italic uppercase italic">Get the Full Guide.</h2>
                    <p className="text-zinc-400 text-xl italic mb-16 px-12 italic">A detailed technical blueprint for institutional suspicious activity reporting.</p>
                    <form className="w-full space-y-6 text-left" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input type="text" required placeholder="Full Name" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-red-600 transition-all font-bold italic font-manrope" />
                          <input type="email" required placeholder="Work Email" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-red-600 transition-all font-bold italic font-manrope" />
                       </div>
                       <input type="text" required placeholder="Company Name" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-red-600 transition-all font-bold italic font-manrope" />
                       <div className="pt-8 flex flex-col items-center">
                          <button type="submit" className="px-16 py-8 bg-red-600 text-white rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all w-full md:w-fit uppercase tracking-tighter italic shadow-2xl">
                             Download Full Guide
                          </button>
                       </div>
                    </form>
                 </>
              )}
           </div>
        </section>

        {/* 16. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Streamline Disclosure Workflows</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6">
                   Modernize Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">AML Reporting.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                    Detect suspicious activity, manage institutional investigations, and generate structured reports with the Deep Sense reporting ecosystem.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
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
    </div>
  );
}
