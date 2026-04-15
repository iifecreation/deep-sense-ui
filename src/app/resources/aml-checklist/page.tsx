"use client";

import React, { useState } from "react";
import { 
  ClipboardCheck, 
  CheckSquare, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Users, 
  Activity, 
  Target, 
  Globe, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  History, 
  Lock, 
  RefreshCw, 
  Zap,
  Layers,
  Building
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function AmlChecklistPage() {
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
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Implementation Toolkit</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter uppercase italic font-manrope">
              AML <span className="text-indigo-600">Implementation</span> Checklist.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              A step-by-step framework to help you design, implement, and maintain an effective institution-grade AML system.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button 
                onClick={() => document.getElementById('checklist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-manrope"
              >
                Download Checklist
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                View Blueprint
              </button>
            </div>
          </div>
        </section>

        {/* 2. Overview */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center italic">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Build a Strong AML System</h2>
              <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed max-w-3xl font-manrope pr-10">This checklist helps you ensure your organization has the core components required for effective and mandated AML compliance at institutional scale.</p>
           </div>
        </section>

        {/* 3-12. Checklist Sections */}
        <section className="py-32 px-8 overflow-hidden font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Customer Onboarding & KYC", 
                  items: ["Verify customer identity (eIDV)", "Collect mandated customer data", "Perform Tiered Due Diligence", "Assign initial risk rating", "Screen against sanctions lists", "Perform PEP checks"],
                  icon: <Users className="w-6 h-6" />
                },
                { 
                  title: "Transaction Monitoring", 
                  items: ["Implement real-time monitoring", "Detect unusual patterns/surges", "Apply behavioral velocity metrics", "Identify suspicious activities", "Generate alerts automatically"],
                  icon: <Activity className="w-6 h-6" />
                },
                { 
                  title: "Customer Risk Profiling", 
                  items: ["Assign risk levels (Low, Med, High)", "Track risk trajectory over time", "Identify High-Risk Entities (HRE)", "Dynamic profile updates"],
                  icon: <Target className="w-6 h-6" />
                },
                { 
                  title: "Screening Systems", 
                  items: ["Onboarding-stage screening", "Transaction-level screening", "Systemic background re-screening", "Internal watchlist maintenance"],
                  icon: <Globe className="w-6 h-6" />
                },
                { 
                  title: "PEP Management", 
                  items: ["Identify domestic PEPs", "Detect foreign PEPs & leaders", "Identify associates (RCAs)", "Trigger EDD workflows", "Continuous PEP monitoring"],
                  icon: <ShieldCheck className="w-6 h-6" />
                },
                { 
                  title: "Case Management", 
                  items: ["Auto-create cases from alerts", "Institutional role assignment", "Status tracking & SLA logs", "Full investigation documentation"],
                  icon: <Briefcase className="w-6 h-6" />
                },
                { 
                  title: "Regulatory Reporting", 
                  items: ["Generate STR / SAR files", "Generate CTR / currency logs", "Maintain audit-proof records", "Direct submission-track integration"],
                  icon: <FileText className="w-6 h-6" />
                },
                { 
                  title: "Audit & Governance", 
                  items: ["Track every user footprint", "Maintain immutable audit logs", "Record every decision rationale", "Version-control system changes"],
                  icon: <History className="w-6 h-6" />
                },
                { 
                   title: "Data Security", 
                   items: ["E2E Encryption in transit", "Granular Access Control (RBAC)", "Secure storage & isolation", "Non-repudiation logging"],
                   icon: <Lock className="w-6 h-6" />
                },
                { 
                   title: "System Integration", 
                   items: ["Core banking connectivity", "Onboarding flow integration", "Payment rail / Ledger sync", "Cross-system data consistency"],
                   icon: <RefreshCw className="w-6 h-6" />
                }
              ].map((section, idx) => (
                <div key={idx} className="p-10 bg-white border border-zinc-100 rounded-[48px] shadow-sm hover:shadow-2xl transition-all group font-manrope italic">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                         {section.icon}
                      </div>
                      <h3 className="text-xl font-bold uppercase italic tracking-tighter leading-tight font-manrope">{section.title}</h3>
                   </div>
                   <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-4 items-center">
                           <div className="w-5 h-5 rounded-md border-2 border-zinc-100 flex items-center justify-center shrink-0 group-hover:border-indigo-100 transition-colors">
                              <CheckSquare className="w-3 h-3 text-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                           </div>
                           <span className="text-xs font-bold text-zinc-500 uppercase tracking-tight italic font-manrope pr-6">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
              
              {/* Summary Section / Card */}
              <div className="p-12 bg-neutral-900 text-white rounded-[48px] shadow-3xl flex flex-col justify-center items-center text-center font-manrope italic overflow-hidden relative group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-black uppercase italic mb-6 relative z-10 italic">Are You AML Ready?</h3>
                 <p className="text-zinc-500 text-sm mb-10 italic px-8 relative z-10 font-inter">Use this checklist to evaluate your current system and identify critical gaps in your institutional implementation.</p>
                 <ShieldCheck className="w-24 h-24 text-brand-lime opacity-10 group-hover:scale-110 transition-transform font-manrope mb-8" />
                 <button className="px-10 py-5 bg-white text-neutral-900 rounded-full font-black uppercase text-sm tracking-widest hover:bg-brand-lime hover:scale-105 transition-all relative z-10 italic">Evaluate Now</button>
              </div>
           </div>
        </section>

        {/* 14. Download Form */}
        <section id="checklist-form" className="py-32 px-8 bg-zinc-50 border border-zinc-200 mx-4 rounded-[64px] relative overflow-hidden text-center shadow-3xl font-manrope italic font-manrope">
           <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
              {formSubmitted ? (
                 <div className="py-24 animate-in zoom-in-95 duration-500">
                    <CheckCircle2 className="w-24 h-24 text-indigo-600 mx-auto mb-10" />
                    <h2 className="text-5xl font-black uppercase italic italic mb-8">Asset Delivered</h2>
                    <p className="text-zinc-500 text-lg mb-12 italic font-manrope">The full AML Implementation Checklist (PDF) is on its way to your inbox.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-indigo-600 font-black uppercase tracking-widest text-xs underline underline-offset-8">Download another version</button>
                 </div>
              ) : (
                 <>
                    <h2 className="text-5xl md:text-7xl font-bold font-manrope text-neutral-900 mb-8 tracking-tight italic uppercase italic">Download the Full Checklist.</h2>
                    <p className="text-zinc-500 text-xl italic mb-16 px-12 italic font-manrope pr-12">Get the printable institutional blueprint for designing a compliant AML framework.</p>
                    <form className="w-full space-y-6 text-left" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input type="text" required placeholder="Full Name" className="w-full px-8 py-5 bg-white border border-zinc-200 rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-bold italic font-manrope" />
                          <input type="email" required placeholder="Work Email" className="w-full px-8 py-5 bg-white border border-zinc-200 rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-bold italic font-manrope" />
                       </div>
                       <input type="text" required placeholder="Company Name" className="w-full px-8 py-5 bg-white border border-zinc-200 rounded-full focus:ring-2 focus:ring-indigo-500 transition-all font-bold italic font-manrope" />
                       <div className="pt-8 flex flex-col items-center">
                          <button type="submit" className="px-16 py-8 bg-neutral-900 text-white rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all w-full md:w-fit uppercase tracking-tighter italic shadow-2xl">
                             Download Toolkit
                          </button>
                       </div>
                    </form>
                 </>
              )}
           </div>
        </section>

        {/* 15. How Deep Sense Helps & 16. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center mb-24 pr-10 pr-10 group">
              <h2 className="text-4xl font-bold mb-10 italic uppercase border-b border-zinc-100 pb-10">Simplify Your Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
                 {[
                    { t: "Monitoring Systems", desc: "Native real-time surveillance." },
                    { t: "Workflow Automation", desc: "Alert-to-case orchestration." },
                    { t: "Effort Reduction", desc: "Eliminate manual compliance bottlenecks." },
                    { t: "Audit Readiness", desc: "Governance built into the framework." }
                 ].map((it, i) => (
                    <div key={i} className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl text-left hover:border-brand-lime transition-all">
                       <h4 className="text-[10px] font-black uppercase text-indigo-600 mb-2 italic">{it.t}</h4>
                       <p className="text-xs font-bold font-manrope italic text-zinc-400 italic font-manrope pr-4">{it.desc}</p>
                    </div>
                 ))}
              </div>
           </div>

           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Operational Excellence</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-12 pr-6 leading-tight">
                   Ready to Build <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Your AML System?</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-10">
                    Transform your compliance culture with the automated AML operating system designed for the future of institutional finance.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold font-manrope">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request System Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
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
