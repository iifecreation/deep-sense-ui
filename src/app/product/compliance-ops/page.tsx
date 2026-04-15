"use client";

import React from "react";
import { 
  Layers, 
  Shield, 
  Search, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Clock, 
  Users, 
  Workflow, 
  Briefcase, 
  FileSearch, 
  BookOpen, 
  History, 
  Scale, 
  Zap,
  BarChart3,
  LayoutDashboard
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function ComplianceOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Workflow className="w-3.5 h-3.5" />
              <span>Full Ops Platform</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl text-center">
              Run Your <span className="text-indigo-600 italic">Compliance Operations</span> in One Platform.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense unifies alerts, investigations, case management, and reporting — enabling compliance teams to detect, review, and act on suspicious activity efficiently.
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

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <Zap className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Fragmented Workflows Slow Everything Down</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10">"Compliance teams need a unified system, not fragmented tools."</p>
                     <ul className="space-y-6">
                        {[
                          "Alerts are disconnected from the actual investigation context.",
                          "Teams are forced to rely on multiple tools for a single case.",
                          "Manual data entry and consolidation lead to frequent errors.",
                          "Tracking case histories across silos is difficult and time-consuming."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm italic">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Overhead of Disconnected Systems</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic">Disjointed compliance operations are more than just an efficiency problem—they are a security risk. When alerts don't flow directly into cases, and cases don't flow into reports, critical signals get missed.</p>
                  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime">
                     <AlertTriangle className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 leading-relaxed italic pr-6 italic">Fragmented compliance tools increase operational risk and lead to missing mandatory reporting deadlines.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">A Unified Compliance Operations Platform</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense connects fraud detection, AML monitoring, investigation workflows, and regulatory reporting into one operational system.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {[
                { title: "Alert Management", desc: "Real-time alert sorting and prioritization.", icon: <Bell /> },
                { title: "Case Workflows", desc: "Structured steps for deep investigation.", icon: <Briefcase /> },
                { title: "Investigation Tools", desc: "Full context on transactions and risks.", icon: <Search /> },
                { title: "Reporting Integration", desc: "Seamless conversion from case to STR/SAR.", icon: <FileText /> },
                { title: "Audit-Ready", desc: "Immutable records for regulatory governance.", icon: <Shield /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">From Detection to Resolution</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
                 {[
                   { l: "Detection", s: "Activity flagged", i: <Zap /> },
                   { l: "Alert", s: "Generated in UI", i: <Bell /> },
                   { l: "Case", s: "Created automatically", i: <Briefcase /> },
                   { l: "Investigate", s: "Context analyzed", i: <FileSearch /> },
                   { l: "Decision", s: "Outcome recorded", i: <Scale /> },
                   { l: "Report", s: "Filing generated", i: <FileText /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest">{it.s}</p>
                      {i < 5 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-white/10" style={{ left: `${(i+1)*16.6}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Alert Management & 6. Case Management */}
        <section className="py-32 px-8 overflow-hidden bg-zinc-50 rounded-[64px] mx-4 my-4 border border-zinc-100">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Centralized Alert Handling</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Deep Sense processes thousands of data points to present only the most critical alerts, ranked by risk severity and priority.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Real-time Alert Generation",
                      "Severity Classification",
                      "Filtering and Prioritization",
                      "Auto-assignment to Analysts"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 font-bold text-sm shadow-sm">
                         <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         {item}
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mt-20 mb-8 tracking-tight">Structured Case Workflows</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic">Move beyond simple flags. Deep Sense organizes alerts into structured cases that track ownership, status, and progress across your entire compliance team.</p>
                 <div className="space-y-4">
                    {[
                      "Create and manage complex cases",
                      "Link multiple related alerts to one entity",
                      "Assign case ownership and secondary reviewers",
                      "Full lifecycle tracking from New to Resolved"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-bold text-zinc-900 bg-white/50 p-4 rounded-xl border border-zinc-200/50">
                         <div className="w-2 h-2 rounded-full bg-brand-lime" />
                         <span className="text-sm italic">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-neutral-900 p-12 lg:p-20 rounded-[64px] text-white shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <History className="w-48 h-48 text-white/5 group-hover:rotate-180 transition-transform duration-[4000ms]" />
                 </div>
                 <h3 className="text-3xl font-bold mb-10 italic uppercase border-b border-white/10 pb-10">Operations Console</h3>
                 <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/10 group-hover:border-brand-lime transition-all">
                       <span className="text-xs font-black tracking-widest uppercase italic">Active Alerts</span>
                       <span className="text-2xl font-bold text-brand-lime">482</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                          <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Avg Resolution</span>
                          <div className="text-2xl font-bold mt-2">12.4m</div>
                       </div>
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                          <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Case Backlog</span>
                          <div className="text-2xl font-bold mt-2 text-red-500">-8%</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Investigation Tools & 8. Decisioning */}
        <section className="py-32 px-8 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto text-center mb-24">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Investigate with Full Context</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Everything you need to make a decision, presented in a single Pane of Glass.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Unified Profile", desc: "Customer risk scores, device intelligence, and network graph signals combined.", icon: <Users /> },
                { title: "Decision Rationale", desc: "Document outcomes and attach notes with audit-ready documentation.", icon: <Scale /> },
                { title: "Full History", desc: "Access the entire timeline of customer activity and past investigations.", icon: <History /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{item.title}</h4>
                   <p className="text-zinc-500 text-sm italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 9. Integrated Reporting & 10. Audit Trails */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center text-left">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Seamless Transition to Reporting</h2>
                 <p className="text-zinc-400 text-lg mb-12 italic">Investigate. Solve. File. Deep Sense converts cases into regulatory reports automatically, pre-populating data to ensure speed and accuracy.</p>
                 <div className="space-y-6">
                    <div className="flex gap-6 items-start group">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-lime transition-all">
                          <CheckCircle2 className="w-6 h-6 text-brand-lime group-hover:text-black transition-colors" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white uppercase italic text-sm tracking-tight mb-1">Pre-filled Data Extraction</h4>
                          <p className="text-xs text-zinc-500 italic">Automatically extract transaction IDs, counterparty names, and risk justifications.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start group">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-lime transition-all">
                          <CheckCircle2 className="w-6 h-6 text-brand-lime group-hover:text-black transition-colors" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white uppercase italic text-sm tracking-tight mb-1">Audit-Ready Submission Logs</h4>
                          <p className="text-xs text-zinc-500 italic">Every report filing status is tracked and logged for total operational transparency.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="p-12 bg-white/5 border border-white/10 rounded-[64px] backdrop-blur-xl relative group">
                 <Shield className="w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 group-hover:text-brand-lime/10 transition-all duration-1000" />
                 <h3 className="text-3xl font-bold mb-10 italic uppercase tracking-tighter relative z-10">Full Operational Transparency</h3>
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    {[
                      { l: "User Activity Logs", v: "100% Tracking" },
                      { l: "Case History", v: "Cryptographic Logs" },
                      { l: "Decision Audits", v: "Immutable" },
                      { l: "Config Tracking", v: "Versioned" }
                    ].map((st, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 text-center">
                         <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">{st.l}</div>
                         <div className="text-xs font-bold text-brand-lime italic">{st.v}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 11. Workflow Automation & 12. Team Collaboration & 13. Visibility */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: "Work Better as a Team", desc: "Shared case access, integrated analyst notes, and granular role-based permissions.", icon: <Users /> },
                { title: "Automate Routine Tasks", desc: "Auto-create cases, auto-assign alerts, and trigger intelligent escalation paths.", icon: <Workflow /> },
                { title: "Track Performance", desc: "Gain visibility into alert volumes, resolution times, and team workload trends.", icon: <BarChart3 /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-zinc-50 border border-zinc-100 rounded-[56px] text-left hover:bg-white hover:shadow-2xl transition-all group">
                   <div className="text-indigo-600 mb-8 group-hover:scale-110 transition-transform">{it.icon}</div>
                   <h4 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{it.title}</h4>
                   <p className="text-zinc-500 text-sm leading-relaxed italic">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 14. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Beyond Basic Case Tools</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Operational Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600">
                       {[
                         "Unified alert-to-report workflows",
                         "Integrated intelligence (Device/Graph)",
                         "Immutable audit trails",
                         "Intelligent automation hooks",
                         "Real-time visibility metrics"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors italic font-manrope">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Fragmented / No
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
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic">
                   Transform Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none">Compliance Operations.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Operate faster and smarter with a unified platform built for modern risk teams. Reduce investigation time, improve efficiency, and ensure audit readiness with Deep Sense.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl shadow-2xl shadow-brand-lime/10 tracking-tight uppercase">
                     Request Operation Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold font-manrope hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tight uppercase">
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

function FileTextIcon({ className }: { className?: string }) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
