"use client";

import React from "react";
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layers, 
  Activity, 
  RefreshCw, 
  ShieldAlert, 
  Network, 
  Scale, 
  FileText, 
  Lock, 
  Target, 
  Filter,
  Briefcase,
  History,
  Building,
  UserPlus
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PepMonitoringSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative text-neutral-900">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Risk-Based Supervision</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Monitor <span className="text-indigo-600">PEPs</span> and High-Risk Customers.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense helps you identify politically exposed persons, assess customer risk, and continuously monitor high-risk entities across their entire lifecycle.
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

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <ShieldAlert className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">High-Risk Customers Require Continuous Oversight</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic font-manrope">"High-risk customers cannot be managed with static controls."</p>
                     <ul className="space-y-6 text-sm font-bold text-zinc-600 italic">
                        {[
                          "PEPs and high-risk individuals require mandated enhanced monitoring.",
                          "Risk profiles are dynamic and change over time based on behavior.",
                          "Manual tracking of high-risk portfolios is slow and error-prone.",
                          "Hidden relationships and indirect connections increase institutional exposure."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span>{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Vulnerability of Static Triage.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic text-left leading-relaxed">Identifying a PEP at onboarding is only the first step. True compliance requires an active, behavioral understanding of how that risk evolves through every transaction and connection.</p>
                  <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl shadow-xl border border-white/5 text-white transform hover:translate-x-4 transition-transform">
                     <Users className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-100 leading-relaxed italic pr-6 italic font-manrope">Deep Sense automates the continuous surveillance required for high-risk customer segments.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">Dynamic Risk Monitoring</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic font-manrope">Deep Sense combines PEP detection, customer risk scoring, and behavioral monitoring to identify and manage high-risk customers effectively.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "PEP Screening", desc: "Automated identification of domestic and foreign PEPs.", icon: <Globe /> },
                { title: "Dynamic Risk Profiling", desc: "Continuous scoring based on behavior and signals.", icon: <Target /> },
                { title: "Ongoing Monitoring", desc: "Passive surveillance beyond the onboarding stage.", icon: <RefreshCw /> },
                { title: "EDD Workflows", desc: "Structured controls for high-risk entity oversight.", icon: <ShieldCheck /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-indigo-500/10 shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight italic">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic pr-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center shadow-3xl">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase">From Identification to Continuous Oversight</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative w-full">
                 {[
                   { l: "Onboard", s: "Customer data ingestion", i: <UserPlus /> },
                   { l: "Screen", s: "PEP & Sanctions checks", i: <Globe /> },
                   { l: "Profile", s: "Initial risk tier assignment", i: <Target /> },
                   { l: "Monitor", s: "Behavioral surveillance", i: <Activity /> },
                   { l: "Update", s: "Dynamic risk adjustment", i: <RefreshCw /> },
                   { l: "Enforce", s: "EDD actions & Reporting", i: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic font-manrope">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed px-4 italic">{it.s}</p>
                      {i < 5 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-white/10" style={{ left: `${(i+1)*16.6}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. PEP Identification & 6. Risk Profiling */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Identify Politically Exposed Persons</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Deep Sense detects world-wide PEPs, including domestic officials, foreign leaders, and their close associates (RCAs).</p>
                 <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-20 font-bold text-sm text-neutral-900 italic font-manrope">
                    {[
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Domestic PEPs" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Foreign PEPs" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Close Associates (RCAs)" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Automated Screening" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Global List Matching" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Relationship Mapping" }
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         {it.icon}
                         <span className="opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">{it.label}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Dynamic Risk Profiling</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Classify customers into risk tiers and track changes in real-time as behavior, transaction activity, and external signals evolve.</p>
                 <div className="space-y-4 font-bold text-zinc-600 italic">
                    {[
                      "Automated Risk Tier Classification",
                      "Behavior-Based Dynamic Updates",
                      "Historical Risk Evolution Tracking",
                      "Prioritized High-Risk Queues"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-2 h-10 bg-indigo-100 group-hover:bg-brand-lime transition-all rounded-full" />
                         <span className="text-xs uppercase tracking-tight italic font-manrope">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] text-neutral-900 shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Target className="w-48 h-48 text-zinc-100 animate-spin-slow" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Entity Risk Console</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12">Monitor the live risk posture of any entity through a unified institutional console.</p>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-black text-zinc-400">CURRENT STATUS</span>
                          <span className="text-2xl font-black text-red-500 italic">HIGH RISK (PEP)</span>
                       </div>
                       <div className="flex items-center gap-4 text-[10px] font-black text-indigo-600">
                          <Activity className="w-4 h-4" />
                          <span>ENHANCED MONITORING ENABLED</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7-12. Continuous Monitoring, EDD, Network Analysis, Alerts, Investigations, Governance */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Integrated High-Risk Surveillance</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Position your institution at the forefront of the risk-based AML movement.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {[
                { title: "Behavioral Surveillance", desc: "Monitor transaction behavior, device usage, and linked entities beyond the onboarding stage.", icon: <Activity /> },
                { title: "Automated EDD Controls", desc: "Apply stricter rules, increased monitoring, and compliance escalations for PEP accounts.", icon: <ShieldAlert /> },
                { title: "Network Analysis", desc: "Uncover hidden connections, shared devices, and indirect relationships between entities.", icon: <Network /> },
                { title: "Intelligent Alerts", desc: "Fast-track high-risk activity into prioritized investigation cases automatically.", icon: <Bell /> },
                { title: "Structured Workflows", desc: "Equip teams with investigation documentation, finding notes, and decision tracking.", icon: <Briefcase /> },
                { title: "Institutional Oversight", desc: "Built-in audit trails, decision traceability, and full risk historical reporting.", icon: <History /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm italic pr-4">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Smarter Risk Management</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Dynamic risk profiling",
                         "Continuous lifestyle monitoring",
                         "Global PEP & RCA detection",
                         "Native network & graph analysis",
                         "Automated EDD triggers"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Static / Limited
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 15. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Manage High-Risk <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Entity Monitoring.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Identify PEPs early, improve your institutional risk posture, and automate the enhanced monitoring mandated for high-risk customer segments.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Start Monitoring
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     Request Risk Demo
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
