"use client";

import React from "react";
import { 
  ShieldCheck, 
  History, 
  Scale, 
  Lock, 
  Eye, 
  Settings, 
  Users, 
  Workflow, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Zap, 
  Database, 
  ShieldAlert,
  Search,
  Key,
  Globe
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PlatformGovernancePage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-slate-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Accountability Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Built for <span className="text-indigo-600">Governance</span> and Oversight.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense provides the controls, visibility, and auditability required to support enterprise governance and regulatory compliance across your entire organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. Governance Overview */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-indigo-200 decoration-8 underline-offset-16">A Platform Designed for Oversight</h2>
             <p className="text-zinc-500 text-lg mb-16 max-w-3xl italic font-inter leading-relaxed font-manrope">Deep Sense enables organizations to maintain full control over their fraud and AML operations through structured governance, deep auditability, and role-based access workflows.</p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
                {[
                  { title: "Structured Accountability", desc: "Clearly defined roles and permissions to ensure separation of duties.", icon: <Users /> },
                  { title: "Absolute Traceability", desc: "Every system event and user action recorded with institutional integrity.", icon: <History /> },
                  { title: "Process Control", desc: "Approval and escalation workflows that prevent operational deviation.", icon: <Workflow /> }
                ].map((it, i) => (
                  <div key={i} className="p-12 bg-white border border-zinc-200 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-lime/20 transition-colors" />
                     <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6" })}
                     </div>
                     <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter font-manrope">{it.title}</h4>
                     <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-4">{it.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. Governance Framework & 4. Access Governance */}
        <section className="py-32 px-8 overflow-hidden relative font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Control Every Layer of Your Operations</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Deep Sense provides an integrated framework that covers everything from user permissions to decision tracking and final disclosure workflows.</p>
                 
                 <div className="grid grid-cols-2 gap-6 mb-20 font-bold text-sm text-neutral-900 italic">
                    {[
                      "User Access Governance",
                      "Operational Workflow Control",
                      "Decision-Making Auditability",
                      "Reporting Integrity Rails"
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-zinc-50 border border-zinc-100 rounded-3xl group hover:shadow-xl transition-all">
                         <CheckCircle2 className="text-indigo-600 w-5 h-5 group-hover:text-brand-lime transition-colors" />
                         <span>{it}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Role-Based Access Control</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic leading-relaxed pr-12 italic">Enforce strict least-privilege principles by controlling who can access which records and which actions they can perform.</p>
                 <div className="space-y-4 font-bold text-zinc-600 italic">
                    {[
                      "Granular RBAC Permissions",
                      "Least-Privilege Access Protocols",
                      "Separation of Duties (Analyst vs Admin)",
                      "Controlled Access to Sensitive Actions"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="w-2 h-10 bg-indigo-50 rounded-full" />
                         <span className="text-xs uppercase tracking-tight italic font-manrope">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 lg:p-24 bg-neutral-900 rounded-[80px] text-white shadow-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-10 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Access Console</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12">Dynamic authorization for institutional compliance teams.</p>
                    <div className="space-y-4">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex justify-between items-center group-hover:border-brand-lime transition-all">
                          <div className="flex flex-col">
                             <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">USER_ROLE: Analyst</span>
                             <span className="text-xs font-bold italic">Investigation Queue (READ/WRITE)</span>
                          </div>
                          <Lock className="w-5 h-5 text-brand-lime" />
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl opacity-30">
                          <div className="flex flex-col">
                             <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">USER_ROLE: Regulatory Reporting</span>
                             <span className="text-xs font-bold italic">Submission Portal (LOCKED)</span>
                          </div>
                          <ShieldAlert className="w-5 h-5" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Audit Traceability & 6. Decision Governance & 7. Workflow Gov */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight">Accountability for Every Decision</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32">Build an unbreakable chain of oversight from detection to final board-level reporting.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left w-full">
                 {[
                   { title: "Decision Governance", desc: "Trace every signal trigger, rule-match, and analyst note back to its original source.", icon: <Scale /> },
                   { title: "Workflow Governance", desc: "Controlled operational steps with mandated approval and escalation gates.", icon: <Workflow /> },
                   { title: "Configuration Governance", desc: "Permanent versioned history of every rule modification and model update.", icon: <Settings /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-200 rounded-[56px] shadow-sm group hover:shadow-3xl hover:-translate-y-2 transition-all">
                      <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg">
                        {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-4 italic">{it.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 10. Visibility & 11. Data Gov & 12. Multi-Tenant & 13. Real-Time */}
        <section className="py-32 px-8 overflow-hidden relative font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5">
                 <div className="absolute top-0 right-0 p-12">
                   <Globe className="w-48 h-48 text-white/5 animate-spin-slow opacity-10" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Governance Monitoring</h3>
                 <div className="space-y-8 relative z-10">
                    {[
                      { l: "Operational Performance", v: "Real-time visibility into alert queues and case statuses." },
                      { l: "Audit Dashboard", v: "Continuous oversight of user footprints and access logs." },
                      { l: "Multi-Tenant Boundaries", v: "Secure isolation between different organizational contexts." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                        <Activity className="w-5 h-5 text-indigo-400 shrink-0" />
                        <div>
                           <span className="block font-bold text-sm tracking-tight italic uppercase">{it.l}</span>
                           <span className="text-[10px] text-zinc-500 italic font-inter">{it.v}</span>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase leading-tight font-manrope">Full Operational <br />Visibility.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope">Monitor user activity, track workflow performance, and detect operational anomalies as they happen. Governance is no longer a periodic audit—it's continuous.</p>
                 <div className="space-y-4">
                    {[
                      "Real-time visibility into all active alerts and cases",
                      "Immediate access to comprehensive institutional logs",
                      "Automated tracking of reporting integrity",
                      "Independent governance trails for every organization"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <div className="w-2 h-10 bg-indigo-50 group-hover:bg-brand-lime transition-all rounded-full" />
                         <span className="text-xs uppercase tracking-tight italic font-manrope">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 14. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Enterprise-Grade Control</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Governance Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense Platform</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Universal auditability of every event",
                         "Multi-level operational governance",
                         "Institutional-grade access control (RBAC)",
                         "Continuous real-time oversight",
                         "Permanent version history of all configs"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight">
                               Partial / Basic
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 15. Impact & 16. Positioning & 17. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Institutional Governance Framework</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Take Control of Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic font-manrope">Compliance Operations.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Strengthen governance, simplify regulatory audits, and ensure absolute operational integrity with the platform built for institutional oversight.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request Governance Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Talk to Sales
                   </button>
                 </div>
                 <div className="mt-16 pt-8 border-t border-white/10 text-white/40 text-[10px] italic max-w-lg mx-auto font-manrope italic pr-12">
                    Deep Sense provides institutional governance capabilities but should be implemented within your organization’s broader risk management and compliance framework.
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
