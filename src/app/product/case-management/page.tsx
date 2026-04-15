"use client";

import React from "react";
import { 
  Briefcase, 
  AlertTriangle, 
  Bell, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Activity, 
  History, 
  Layers, 
  Zap,
  Target,
  Scale,
  FileText,
  Clock,
  Filter
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CaseManagementPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-red-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Reactive Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl">
              Intelligent <span className="text-red-600 italic">Case Management</span> & Alerts.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12 italic">
              Transform high-volume alerts into actionable investigations. Deep Sense prioritizes risk, automates case creation, and accelerates resolution times.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                View Case Workflows
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                Reduce False Positives
              </button>
            </div>
          </div>
        </section>

        {/* 2. Alert Prioritization */}
        <section className="py-32 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]">Stop Chasing Ghosts. Start Solving Cases.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Alert fatigue is the leading cause of missed threats. Our engine filters the noise to ensure your analysts spend 100% of their time on the highest-risk investigations.</p>
                 
                 <div className="space-y-6">
                    {[
                      { l: "Risk-Based Alert Scoring", d: "Alerts are automatically ranked (Low, Medium, High, Critical) based on multi-signal intelligence." },
                      { l: "Automated Case Grouping", d: "Related alerts involving the same entity or device are automatically grouped into a single case." },
                      { l: "Intelligent Triage", d: "Filter alerts by rule type, customer tier, or geographic risk to expedite review." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                         <div className="w-1.5 h-16 bg-red-100 group-hover:bg-red-600 transition-all rounded-full" />
                         <div>
                            <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight mb-2 underline decoration-red-50 underline-offset-4 decoration-4">{it.l}</h4>
                            <p className="text-xs text-zinc-400 font-inter italic leading-relaxed pr-10">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full" />
                 <div className="relative z-10 bg-neutral-900 p-12 lg:p-16 rounded-[64px] shadow-3xl text-white border border-white/5">
                    <div className="flex justify-between items-center mb-12">
                       <span className="text-xs font-black uppercase tracking-[0.3em] text-red-500 italic">Priority Triage Engine</span>
                       <Filter className="text-zinc-500" />
                    </div>
                    <div className="space-y-6">
                       <div className="p-6 bg-red-600/20 border border-red-600/30 rounded-3xl flex items-center justify-between group hover:bg-red-600 transition-all">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black italic shadow-lg shadow-black/20 text-xs">CRIT</div>
                             <span className="text-xs font-bold italic">Entity Match: Global Sanctions List</span>
                          </div>
                          <Clock className="w-4 h-4 text-white/40" />
                       </div>
                       <div className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between opacity-40 grayscale group-hover:grayscale-0 transition-all">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-black italic text-xs">HIGH</div>
                             <span className="text-xs font-bold italic italic">Unusual Velocity: Card Not Present</span>
                          </div>
                          <span className="text-[10px] uppercase font-black text-zinc-600">Pending</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. Core Workflow Features */}
        <section className="py-32 px-8 text-center max-w-[1440px] mx-auto">
           <h2 className="text-5xl font-bold mb-20 tracking-tight">Structured for Investigative Speed</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {[
                { title: "Dynamic Flow", desc: "Guide analysts through custom investigation steps based on case type—preventing process deviation.", icon: <Workflow /> },
                { title: "Evidence Locker", desc: "Attach transaction records, KYC documents, and investigative notes directly to the case file.", icon: <FileText /> },
                { title: "Collaborative Review", desc: "Seamlessly transition cases between analysts and senior compliance officers with full context audit.", icon: <Users /> }
              ].map((it, i) => (
                <div key={i} className="group p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-600/10 transition-colors" />
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tight leading-tight">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. Team Ops Section */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight mb-12">Accelerate <br /><span className="text-red-600 underline decoration-red-600 decoration-4 underline-offset-12">Resolution Times.</span></h2>
                 <p className="text-xl text-zinc-400 mb-16 italic max-w-lg leading-relaxed">Manual case tracking is slow and error-prone. Deep Sense unifies your team's collective intelligence to resolve cases 40% faster.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {[
                      { l: "Expert Queues", d: "Route high-complexity cases to senior analysts automatically." },
                      { l: "SLA Management", d: "Real-time tracking of turnaround times for regulatory mandates." },
                      { l: "Integrated Search", d: "Universal search across transaction histories and past cases." },
                      { l: "Decision Justification", d: "Enforce mandatory rationale tagging for true/false positives." }
                    ].map((it, i) => (
                      <div key={i} className="flex flex-col gap-3 group">
                         <div className="text-red-500 font-black uppercase text-xs italic tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            <ArrowRight className="w-3 h-3" />
                            {it.l}
                         </div>
                         <p className="text-[11px] text-zinc-500 font-inter font-medium leading-relaxed italic">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white rounded-[80px] text-neutral-900 relative group overflow-hidden shadow-3xl border border-white/5">
                 <div className="absolute top-0 right-0 p-12">
                    <History className="w-32 h-32 text-zinc-100 group-hover:text-red-600/10 transition-all font-light" strokeWidth={0.5} />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 leading-tight">Timeline-Based <br />Investigation.</h3>
                 <div className="space-y-6 relative z-10">
                    {[
                      { a: "Alert Triggered", t: "10:14 AM", d: "Velocity threshold exceeded on Merchant: X" },
                      { a: "Case Assigned", t: "10:15 AM", d: "Auto-routed to Analyst: Sarah" },
                      { a: "Review Complete", t: "10:24 AM", d: "Marked as True Positive - Reporting initiated" }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4 group/st">
                         <div className="w-1.5 h-12 bg-red-50 rounded-full group-hover/st:bg-red-600 transition-colors shrink-0" />
                         <div>
                            <div className="flex items-center gap-3">
                               <span className="text-xs font-black uppercase tracking-tighter italic">{step.a}</span>
                               <span className="text-[10px] text-zinc-400 italic">[{step.t}]</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 italic mt-1">{step.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 14. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1] uppercase italic">
                    Prioritize What <br />
                    <span className="text-red-600 font-black text-6xl italic leading-none">Matters Most.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                    Reduce false positives, accelerate investigation cycles, and manage your entire institutional risk feed with the Deep Sense case management engine.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-red-600 text-white rounded-full hover:bg-white hover:text-red-600 transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Explore Case Triage
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     View Integration Hub
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

function Workflow({ className }: { className?: string }) {
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
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 7h4v7" />
      <path d="M14 7h7" />
      <path d="M14 10h4" />
    </svg>
  );
}
