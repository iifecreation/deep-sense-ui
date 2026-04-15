"use client";

import React from "react";
import { 
  BookOpen, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Globe, 
  Scale, 
  Shield, 
  Zap, 
  Layers, 
  Activity, 
  Clock, 
  Filter,
  BarChart3,
  Lightbulb,
  Building,
  GraduationCap
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const resources = [
  { title: "Understanding AML Fundamentals", summary: "A comprehensive guide to Anti-Money Laundering principles for modern finance.", category: "AML Fundamentals", time: "12 min read" },
  { title: "Risk-Based Approach to Fraud", summary: "How to implement a proportional risk-management strategy in your institution.", category: "Fraud & Risk", time: "8 min read" },
  { title: "PEP Screening Best Practices", summary: "Identifying domestic and foreign politically exposed persons with high accuracy.", category: "Screening", time: "10 min read" },
  { title: "Automating Regulatory Reporting", summary: "Step-by-step framework for straight-through STR and CTR submission workflows.", category: "Regulatory", time: "15 min read" },
  { title: "Reducing False Positives", summary: "Using machine learning to improve investigative efficiency without missing matches.", category: "Operational", time: "7 min read" },
  { title: "CBN AML Implementation Checklist", summary: "A definitive checklist for Nigerian banks and fintechs seeking CBN compliance.", category: "Regulatory", time: "20 min read" }
];

export default function ComplianceCenterPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-sky-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Authority Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               <span className="text-sky-600">Compliance</span> Center
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Explore guides, insights, and resources to help you understand and meet regulatory requirements for fraud prevention and AML compliance.
            </p>
            <div className="w-full max-w-md relative font-manrope">
               <input 
                 type="text" 
                 placeholder="Search for articles, guides, or regulations..." 
                 className="w-full px-12 py-5 bg-white border border-zinc-200 rounded-full shadow-xl focus:ring-2 focus:ring-sky-500 transition-all text-sm font-bold italic"
               />
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            </div>
          </div>
        </section>

        {/* 2. Overview */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Everything You Need <br />for Compliance</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8">The Compliance Center provides structured resources to help organizations understand mandates, implement compliant systems, and improve institutional risk management.</p>
                 <div className="grid grid-cols-1 gap-6">
                    {[
                      "Understand dynamic AML requirements across regions.",
                      "Implement compliant, automated institutional systems.",
                      "Improve overall institutional risk management practices."
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <div className="w-2 h-10 bg-sky-200 group-hover:bg-brand-lime transition-all rounded-full" />
                         <span className="text-sm font-bold italic uppercase tracking-tight">{it}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="absolute inset-0 bg-sky-600/5 blur-[100px] rounded-full group-hover:bg-brand-lime/5 transition-all duration-1000" />
                 <div className="p-16 bg-white border border-zinc-200 rounded-[56px] shadow-3xl relative overflow-hidden">
                    <Building className="w-48 h-48 absolute top-0 right-0 p-12 text-zinc-50 opacity-40" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 border-b border-zinc-50 pb-8">Featured Resource</h3>
                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 mb-8">
                       <span className="text-[10px] font-black text-sky-600 uppercase tracking-[0.2em] mb-4 block italic">EXPERT GUIDE</span>
                       <h4 className="text-xl font-bold italic uppercase mb-4 tracking-tight leading-tight">CBN AML Compliance Guide for Financial Institutions</h4>
                       <p className="text-zinc-500 text-xs italic mb-8 pr-12">The definitive guide to satisfying Central Bank of Nigeria AML/CFT mandates for banks, fintechs, and payment providers.</p>
                       <button className="px-8 py-3 bg-neutral-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                          Read Full Guide
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Resource Categories */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center mb-24">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-sky-200 decoration-8 underline-offset-16">Browse by Topic</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-16 font-manrope italic">
                 {[
                   { t: "AML Fundamentals", d: ["What is AML", "Key Principles", "Risk-Based Approach"], i: <Scale /> },
                   { t: "Fraud & Risk Management", d: ["Detection Strategies", "Real-time Monitoring", "Risk Scoring"], i: <Shield /> },
                   { t: "Regulatory Compliance", d: ["CBN Requirements", "Reporting Obligations", "Board Governance"], i: <FileText /> },
                   { t: "Screening & Monitoring", d: ["Sanctions Screening", "PEP Detection", "KYC Profiling"], i: <Users /> }
                 ].map((cat, i) => (
                   <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group text-left">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(cat.i as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold mb-6 italic uppercase tracking-tighter leading-tight font-manrope">{cat.t}</h4>
                      <ul className="space-y-3">
                         {cat.d.map((it, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-zinc-500 hover:text-sky-600 cursor-pointer group">
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-manrope" />
                              <span className="text-[11px] font-bold uppercase tracking-tight italic">{it}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Guides & Articles List */}
        <section className="py-32 px-8 bg-zinc-50 mx-4 rounded-[64px] border border-zinc-100 overflow-hidden font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                 <h3 className="text-4xl font-bold mb-8 italic uppercase tracking-tighter leading-none">Recent Guides <br />& Insights</h3>
                 <p className="text-zinc-500 italic pr-8 mb-12">Expert analysis on the evolving compliance landscape across emerging markets.</p>
                 <button className="flex items-center gap-4 text-sky-600 font-bold uppercase tracking-widest text-xs group">
                    View All Resources <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform" />
                 </button>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 font-manrope">
                 {resources.map((res, i) => (
                   <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                      <div className="flex justify-between items-center mb-6">
                         <span className="px-3 py-1 bg-zinc-50 text-sky-600 text-[9px] font-black uppercase rounded-full shadow-sm">{res.category}</span>
                         <span className="flex items-center gap-2 text-zinc-300 text-[10px] font-bold uppercase">
                            <Clock className="w-3 h-3" />
                            {res.time}
                         </span>
                      </div>
                      <h4 className="text-lg font-bold mb-4 italic uppercase tracking-tight leading-tight group-hover:text-sky-600 transition-colors">{res.title}</h4>
                      <p className="text-zinc-400 text-xs italic leading-relaxed pr-8 mb-6">{res.summary}</p>
                      <ResourceLink href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-neutral-900 group-hover:translate-x-2 transition-transform italic">
                         Read More <ArrowRight className="w-3 h-3 text-brand-lime" />
                      </ResourceLink>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. Downloadable Resources & 7. Educational Content */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Downloadable Materials</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope">Professional toolkit developed for institutional compliance teams.</p>
                 <div className="space-y-4">
                    {[
                      { l: "AML Implementation Checklist", t: "PDF / 1.2 MB" },
                      { l: "Compliance Readiness Guide", t: "Interactive Tool" },
                      { l: "Fraud Detection Playbook", t: "E-book / 4.5 MB" },
                      { l: "Audit Preparation Kit", t: "Workflow Guide" }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-zinc-50 border border-zinc-200 rounded-[32px] flex justify-between items-center hover:bg-white hover:shadow-2xl transition-all group">
                         <div className="flex gap-6 items-center">
                            <Download className="w-5 h-5 text-sky-600" />
                            <div className="flex flex-col">
                               <span className="font-bold text-neutral-900 uppercase italic tracking-tighter">{it.l}</span>
                               <span className="text-[9px] font-black uppercase text-zinc-400 font-inter">{it.t}</span>
                            </div>
                         </div>
                         <ArrowRight className="w-6 h-6 text-zinc-300 group-hover:translate-x-2 group-hover:text-brand-lime transition-all" />
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl text-left relative overflow-hidden group">
                 <GraduationCap className="w-48 h-48 absolute top-0 right-0 p-12 text-white opacity-5 animate-pulse" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Learn Best Practices</h3>
                 <div className="space-y-12 relative z-10 font-manrope italic">
                    {[
                       { t: "Building an AML System", d: "A high-level blueprint for technical and compliance teams." },
                       { t: "Reducing False Positives", d: "Sophisticated strategies for operational efficiency." },
                       { t: "Scaling Compliance Operations", d: "How to manage 10x growth without headcount surge." }
                    ].map((it, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="w-10 h-10 rounded-full border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all text-xs font-black italic">
                             {i+1}
                          </div>
                          <div>
                             <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2">{it.t}</h4>
                             <p className="text-zinc-500 text-xs italic font-inter leading-relaxed pr-12">{it.d}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 9. Why It Matters & 10. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-sky-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-sky-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Stay Ahead of Regulation</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6">
                   Modernize Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Compliance Posture.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Understand evolving regulations, reduce institutional operational risk, and strengthen your compliance readiness with our platform-driven intelligence.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request Risk Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Explore Platform
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

function ResourceLink({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
  return (
    <a href={href} className={className}>{children}</a>
  );
}
