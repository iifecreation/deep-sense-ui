"use client";

import React from "react";
import { 
  Building, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Search, 
  Layers, 
  Activity, 
  FileText, 
  Briefcase, 
  History, 
  Lock, 
  Scale, 
  Database, 
  Server, 
  RefreshCw, 
  Check, 
  AlertTriangle,
  BadgeCheck,
  Building2,
  PieChart
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CbnComplianceSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-emerald-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-emerald-500 text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <span className="text-lg">🇳🇬</span>
              <span>Regional Compliance Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Built for <span className="text-emerald-600">CBN AML</span> Compliance.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense helps financial institutions meet Central Bank of Nigeria AML requirements with real-time monitoring, screening, reporting, and audit-ready workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-emerald-100 text-emerald-900 rounded-full hover:bg-emerald-50 transition-all text-lg tracking-tighter">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-emerald-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <Building className="w-24 h-24 text-zinc-100 group-hover:text-emerald-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Meeting CBN AML Requirements Is Complex</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic font-manrope">"CBN compliance requires a complete, integrated AML system."</p>
                     <ul className="space-y-6 text-sm font-bold text-zinc-600 italic">
                        {[
                          "Regulations require multiple complex systems working in perfect synchronization.",
                          "Manual AML processes are no longer suitable for Nigeria's digital payment volumes.",
                          "Compliance gaps across siloed platforms create severe institutional regulatory risk.",
                          "Fragmented implementations often fail during mandatory CBN audits and inspections."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                             </div>
                             <span>{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The New Regulatory Standard.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic text-left leading-relaxed">The Nigerian financial sector is evolving. As the CBN mandates higher levels of AML automation, institutions must transition from legacy manual controls to real-time, event-driven monitoring systems.</p>
                  <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl shadow-xl border border-white/5 text-white transform hover:translate-x-4 transition-transform">
                     <BadgeCheck className="text-emerald-500 w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-100 leading-relaxed italic pr-6 italic font-manrope">Deep Sense is the unified platform built to solve for every section of the CBN AML/CFT Manual.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. Deep Sense Approach & 4. How It Works */}
        <section className="py-32 px-8 flex flex-col items-center">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 italic uppercase underline decoration-emerald-200 decoration-8 underline-offset-16">A Unified Platform for AML Compliance</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense provides a single hub that brings together all required components for Nigerian institutional compliance.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-32">
              {[
                { title: "Real-Time Monitoring", desc: "Automated transaction surveillance mandated for Banks and MMOs.", icon: <Activity /> },
                { title: "Risk Profiling", desc: "Dynamic risk-based tiers to support institutional risk management.", icon: <Layers /> },
                { title: "Watchlist Screening", desc: "Sanctions and PEP identification across the entire lifecycle.", icon: <Globe /> },
                { title: "Case Management", desc: "Structured investigation and decision-tracking documentation.", icon: <Briefcase /> },
                { title: "Regulatory Reporting", desc: "Direct support for STR and CTR submission preparation.", icon: <FileText /> },
                { title: "Audit Trails", desc: "Immutable records for CBN regulatory inspections and reviews.", icon: <History /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-emerald-500/10 shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors uppercase tracking-tight leading-tight italic">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-16 bg-neutral-900 rounded-[64px] text-white w-full max-w-6xl relative overflow-hidden text-left border border-white/5 shadow-3xl">
               <div className="absolute top-0 right-0 p-12">
                 <RefreshCw className="w-48 h-48 text-white/5 animate-spin-slow" />
               </div>
               <h3 className="text-3xl font-bold mb-10 italic uppercase border-b border-white/10 pb-10">Institutional Compliance Flow</h3>
               <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
                  {[
                    "Ingest", "Monitor", "Detect", "Alert", "Investigate", "Report"
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                       <div className="flex h-12 w-12 rounded-full border border-emerald-500/30 items-center justify-center text-xs font-black italic text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          {i+1}
                       </div>
                       <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{step}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 5. Alignment with CBN Requirements */}
        <section className="py-32 px-8 bg-zinc-900 text-white mx-4 rounded-[64px] overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-emerald-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto text-center relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Alignment with CBN Requirements</h2>
              <p className="text-xl text-white/40 max-w-3xl mx-auto italic font-inter leading-relaxed mb-20 text-center">Full coverage of core AML mandates outlined in Central Bank of Nigeria regulatory circulars.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[
                   { t: "Transaction Monitoring", d: ["Real-time monitoring", "Behavioral analysis", "Pattern detection"] },
                   { t: "Risk Profiling", d: ["Assign risk ratings", "Identify high-risk customers", "Track risk over time"] },
                   { t: "Sanctions Screening", d: ["Onboarding checks", "Transaction screening", "Watchlist monitoring"] },
                   { t: "PEP Identification", d: ["Domestic & Foreign PEPs", "RCA detection", "EDD automated triggers"] },
                   { t: "Case Management", d: ["Structured workflows", "Full documentation", "Escalation procedures"] },
                   { t: "Regulatory Reporting", d: ["STR & CTR support", "Structured reporting", "Submission tracking"] },
                   { t: "Audit & Governance", d: ["Full activity logs", "Decision traceability", "Auditor accessibility"] },
                   { t: "Data Security", d: ["E2E encryption", "Access control lists", "Secure handling"] }
                 ].map((cap, i) => (
                   <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:border-emerald-500 transition-all">
                      <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.2em] mb-4 italic leading-tight">{cap.t}</h4>
                      <ul className="space-y-3">
                         {cap.d.map((it, idx) => (
                           <li key={idx} className="flex items-center gap-3 text-white/60 group">
                              <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                              <span className="text-xs font-bold italic tracking-tight">{it}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. Who This Is For & 7. Integration */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-10 tracking-tight leading-[1.1] uppercase italic">Designed for Regulated <br />Institutions.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Deep Sense provides universal compliance coverage for all institutional categories covered by the CBN AML circulars.</p>
                 <div className="grid grid-cols-2 gap-6 mb-20 font-bold text-sm text-neutral-900 italic font-manrope">
                    {[
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Deposit Money Banks" },
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Microfinance Banks" },
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Mobile Money Operators" },
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Payment Service Providers" },
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Fintech Platforms" },
                      { icon: <Building2 className="w-4 h-4 text-emerald-600" />, label: "Brokerage Houses" }
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         {it.icon}
                         <span className="opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">{it.label}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Works with Your Infrastructure</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope">Deep Sense integrates seamlessly with core banking platforms, onboarding flows, and existing internal systems to ensure zero disruption to operations.</p>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] shadow-3xl text-neutral-900 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Server className="w-48 h-48 text-zinc-100" strokeWidth={1} />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Nigeria Market Integration</h3>
                 <div className="space-y-6 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12">Universal connectivity for the Nigerian financial ecosystem.</p>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-between group-hover:bg-emerald-600 group-hover:text-white transition-all">
                       <span className="text-xs font-black uppercase tracking-widest italic">Core Banking Flow</span>
                       <Zap className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-between opacity-40">
                       <span className="text-xs font-black uppercase tracking-widest italic">MMO Wallets</span>
                       <Check className="w-5 h-5" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8-9. Real-time Automation & Operational Benefits */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Move Beyond Manual Compliance</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Position your institution for long-term growth with professional AML automation.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
              {[
                { title: "Automated Detection", desc: "Reduce manual workload by identifying reportable risk signals instantly.", icon: <Zap /> },
                { title: "Response Speed", desc: "Improve response times to suspicious activity as required by regulators.", icon: <Activity /> },
                { title: "Risk Visibility", desc: "Gain deep, real-time insights into your institutional risk posture.", icon: <PieChart /> },
                { title: "Team Performance", desc: "Focus your compliance experts on high-complexity triage and disclosure.", icon: <Users /> }
              ].map((it, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                   <div className="w-14 h-14 bg-neutral-900 text-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-[11px] italic pr-4">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">A Better Approach to AML Compliance</h2>
              <div className="bg-white rounded-[40px] border border-emerald-100 overflow-hidden shadow-2xl w-full text-left font-manrope italic">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-emerald-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Manual / Legacy Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time transaction monitoring",
                         "Automatic screening coverage",
                         "Integrated institutional workflows",
                         "Continuous audit readiness",
                         "Nigeria Market localization"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-emerald-50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Limited / Disconnected
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 11. Important Positioning & 12. Impact & 13. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-emerald-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Ready for Regulation</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Prepare Your Institution for <br />
                   <span className="text-emerald-500 font-black text-6xl italic leading-none font-manrope italic">CBN Compliance.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Meet CBN AML expectations, reduce institutional compliance risk, and strengthen your regulatory readiness with the platform built for Nigerian financial standards.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-emerald-600 text-white rounded-full hover:scale-105 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Request Bank Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Talk to Sales
                   </button>
                 </div>
                 <div className="mt-16 pt-8 border-t border-white/10 text-white/40 text-[10px] italic max-w-lg mx-auto font-manrope italic pr-10">
                    Deep Sense is designed to support AML compliance requirements but should be implemented alongside your organization’s internal policies, controls, and wider regulatory obligations.
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
