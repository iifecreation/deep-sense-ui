"use client";

import React from "react";
import { 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Activity, 
  Search, 
  Layers, 
  Database, 
  FileText, 
  Briefcase, 
  History, 
  Lock, 
  Globe, 
  BarChart3, 
  Workflow,
  Scale,
  Building,
  Target,
  RefreshCw
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function BankingSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Building className="w-3.5 h-3.5" />
              <span>Institutional Grade Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl">
              Automated <span className="text-indigo-600 italic">AML</span> for Modern Banks.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense helps banks automate transaction monitoring, customer risk profiling, screening, investigations, and regulatory reporting in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all active:scale-95 text-lg">
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
                  <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <Zap className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900 uppercase tracking-tight leading-tight">Banks Need More Than <br />Manual AML Controls</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic">"Banks need automated AML intelligence that works in real time."</p>
                     <ul className="space-y-6 text-sm font-bold text-zinc-600 italic">
                        {[
                          "Transaction volumes are increasing rapidly across all digital channels.",
                          "Manual monitoring is no longer sufficient to meet regulatory speed.",
                          "Disconnected systems slow down compliance teams and hide risk.",
                          "Regulatory expectations are rising with stricter mandates on automation."
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
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">The Scaling Crisis in Compliance.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic pr-6 leading-relaxed">As transaction frequency and complexity explode, traditional manual monitoring creates dangerous backlogs. Modern banking requires a platform that keeps pace with digital-first operations.</p>
                  <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl shadow-xl text-white transform hover:translate-x-4 transition-transform">
                     <Shield className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold italic leading-relaxed pr-6 italic">Deep Sense provides the automated intelligence layer required for institutional scale.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Deep Sense Approach & 4. Target Institutions */}
        <section className="py-32 px-8 overflow-hidden flex flex-col items-center">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight">AML Automation Built for Banking</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense automates core AML workflows so banks can detect suspicious activity earlier, reduce manual effort, and improve compliance readiness across every department.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left mb-32">
              {[
                { title: "Monitoring", desc: "Real-time transaction surveillance architecture.", icon: <Activity /> },
                { title: "Risk Profiling", desc: "Dynamic risk ratings and high-risk identification.", icon: <Layers /> },
                { title: "Screening", desc: "Automated Sanctions, PEP, and Terrorism checks.", icon: <Search /> },
                { title: "Case Mgmt", desc: "Structured investigation and escalation flows.", icon: <Briefcase /> },
                { title: "Reporting", desc: "Integrated support for STR, CTR, and compliance reports.", icon: <FileText /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-indigo-500/10 shadow-lg">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight italic">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-16 bg-neutral-900 rounded-[64px] text-white w-full max-w-6xl relative overflow-hidden text-left border border-white/5 shadow-3xl">
               <div className="absolute top-0 right-0 p-12">
                 <Building className="w-48 h-48 text-white/5 animate-pulse" />
               </div>
               <h3 className="text-3xl font-bold mb-10 italic uppercase border-b border-white/10 pb-10">Designed for Regulated Institutions</h3>
               <p className="text-zinc-400 text-sm italic mb-12 max-w-xl">Deep Sense is explicitly engineered to meet the automation requirements for the specific regulated entities listed in the CBN AML/CFT 2022 Manual.</p>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12">
                  {[
                    "Deposit Money Banks",
                    "Microfinance Banks",
                    "Mobile Money Operators",
                    "Payment Service Banks",
                    "Other Regulated FIs"
                  ].map((ent, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                       <span className="text-xs font-bold uppercase tracking-widest text-indigo-100 italic group-hover:translate-x-2 transition-transform">{ent}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="py-32 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 text-center">
           <div className="max-w-[1440px] mx-auto text-center relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">From Monitoring to Compliance Action</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative w-full">
                 {[
                   { l: "Ingest", s: "Bank systems send data", i: <Database /> },
                   { l: "Monitor", s: "Real-time surveillance", i: <Shield /> },
                   { l: "Detect", s: "Match signals identified", i: <Zap /> },
                   { l: "Alert", s: "Case created instantly", i: <Bell /> },
                   { l: "Investigate", s: "Analyst reviews context", i: <FileSearch /> },
                   { l: "Report", s: "Filing and tracking", i: <FileText /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white border border-zinc-100 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-lime text-neutral-900 rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-50">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed px-4 italic">{it.s}</p>
                      {i < 5 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-zinc-100" style={{ left: `${(i+1)*16.6}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. Real-time Monitoring & 7. Risk Profiling */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Detect Suspicious Activity as It Happens</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Deep Sense helps banks identify and stop illicit fund flows direct from the ledger, aligning with the circular's real-time monitoring requirements.</p>
                 
                 <div className="space-y-6">
                    {[
                      { l: "Unusual Transaction Volume", d: "Instantly flag spikes and size anomalies." },
                      { l: "Rapid Fund Movement", d: "Detect smurfing and structuring patterns." },
                      { l: "Suspicious Cross-Border Activity", d: "Automatic geo-fencing and route risk analysis." },
                      { l: "Behavioral Risk Analytics", d: "Apply machine learning to identify shifting habits." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="w-1.5 h-16 bg-indigo-50 group-hover:bg-brand-lime transition-all rounded-full shrink-0 mt-1" />
                        <div>
                           <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight mb-1">{item.l}</h4>
                           <p className="text-xs text-zinc-400 font-inter italic leading-relaxed pr-8">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mt-20 mb-8 tracking-tight">Support Risk-Based AML Supervision</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic">Transition from static compliance to a dynamic risk framework that constantly evaluates customer profiles.</p>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { l: "Dynamic Risk Rating", i: <Scale className="text-indigo-600" /> },
                      { l: "High-Risk Customer Identification", i: <Target className="text-red-500" /> },
                      { l: "Risk Evolution Tracking", i: <Activity className="text-brand-lime" /> },
                      { l: "Enhanced Monitoring Triggers", i: <Zap className="text-orange-500" /> }
                    ].map((st, i) => (
                      <div key={i} className="p-6 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col gap-4 items-center text-center">
                         <div className="group-hover:scale-110 transition-transform">{st.i}</div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic font-manrope leading-tight">{st.l}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 rounded-[80px] text-white shadow-3xl border border-white/10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-10 pointer-events-none" />
                 <Workflow className="w-48 h-48 absolute top-0 right-0 p-12 text-white opacity-5 animate-spin-slow" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12 border-b border-white/10 pb-10">Compliance Workflow Snapshot</h3>
                 <div className="space-y-6 relative z-10 font-mono text-[10px]">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <div className="text-brand-lime font-black mb-4 tracking-widest uppercase italic">Automatic Case #9821 Created</div>
                       <div className="text-zinc-500 leading-relaxed italic pr-8">Reason: High-intensity cross-border fund movement matching Terrorism Finance indicators.</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-4 bg-indigo-600 rounded-2xl flex items-center justify-between font-bold italic">
                          <span>EDD Triggered</span>
                          <ArrowRight className="w-4 h-4" />
                       </div>
                       <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between opacity-50">
                          <span>Manual Review</span>
                          <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8-13. Screening, Case Mgmt, Reporting, Integration, Audit, Security */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24 text-center">
           <h2 className="text-5xl font-bold font-manrope tracking-tight mb-20 uppercase italic underline decoration-indigo-200 decoration-8 underline-offset-16">End-to-End Banking Compliance</h2>
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {[
                { title: "Lifecycle Screening", desc: "Continuous Sanctions, PEP, and Terrorism checks throughout the account lifecycle.", icon: <Globe /> },
                { title: "Structured Case Management", desc: "Automate case creation, escalation, and documentation for audit-ready records.", icon: <Briefcase /> },
                { title: "Streamlined Reporting", desc: "integrated support for mandatory STR, CTR, and monthly compliance reporting.", icon: <BarChart3 /> },
                { title: "Seamless Integration", desc: "Designed to connect directly with your core banking and onboarding systems.", icon: <RefreshCw /> },
                { title: "Built for Governance", desc: "Immutable audit trails for user actions, config changes, and decision rationale.", icon: <History /> },
                { title: "Defensive Data Security", desc: "E2E encryption and strict institutional access controls for sensitive files.", icon: <Lock /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm italic">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 14. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">A Better AML Operating Platform</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Manual / Legacy Approaches</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time monitoring",
                         "Automated screening & profiling",
                         "Structured case workflows",
                         "Integrated reporting support",
                         "Continuous audit readiness"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
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

        {/* 15. Impact & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope text-center">
                   Modernize AML Without <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Slowing Operations.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Reduce manual workload, improve suspicious activity detection, and strengthen your bank's compliance posture. Align your institution with the highest regulatory standards today.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Request Bank Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     Talk to Sales
                   </button>
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

function BellIcon({ className }: { className?: string }) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FileSearchIcon({ className }: { className?: string }) {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v10" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="8" cy="18" r="3" />
      <path d="m10.5 20.5 2.5 2.5" />
    </svg>
  );
}
