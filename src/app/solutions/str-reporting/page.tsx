"use client";

import React from "react";
import { 
  FileText, 
  Search, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Bell, 
  Briefcase, 
  Send, 
  History, 
  Zap, 
  Layers, 
  Activity, 
  Scale, 
  Clock, 
  ShieldAlert,
  Database,
  BarChart3,
  Users
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function StrReportingSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-red-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <FileText className="w-3.5 h-3.5" />
              <span>Regulatory Reporting Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Streamline <span className="text-red-600">STR</span> Reporting Workflows.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense helps you detect suspicious activity, investigate cases, and generate structured reports for regulatory submission — all in one platform.
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
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">STR Processes Are Complex and Time-Sensitive</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic font-manrope">"Missing or delaying an STR can lead to serious regulatory consequences."</p>
                     <ul className="space-y-6 text-sm font-bold text-zinc-600 italic">
                        {[
                          "Identifying truly suspicious behavior within vast datasets is difficult.",
                          "Manual reporting workflows are slow, inefficient, and prone to error.",
                          "Critical compliance data is often scattered across multiple siloed systems.",
                          "Submission delays significantly increase institutional compliance risk."
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
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Cost of Reporting Friction.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic text-left leading-relaxed font-manrope">Complexity is the enemy of compliance. When reporting workflows are fragmented, suspicious activity slips through the cracks. Deep Sense unifies the entire lifecycle from discovery to delivery.</p>
                  <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl shadow-xl border border-white/5 text-white transform hover:translate-x-4 transition-transform">
                     <Send className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-100 leading-relaxed italic pr-6 italic font-manrope">Deep Sense provides the straight-through reporting rails required for modern AML operations.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">End-to-End STR Automation</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense connects transaction monitoring, investigation, and reporting into a single, high-efficiency workflow.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Automated Detection", desc: "Identify reportable activity as it occurs in the stream.", icon: <Zap /> },
                { title: "Case-Driven Flow", desc: "Structured investigations before you file.", icon: <Briefcase /> },
                { title: "Structured Generation", desc: "Populate regulatory formats automatically.", icon: <FileText /> },
                { title: "Audit-Ready Logs", desc: "Permanent record of the entire disclosure process.", icon: <History /> }
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
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center shadow-3xl">
           <div className="absolute inset-0 bg-red-600/5 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase">From Detection to Submission</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative w-full">
                 {[
                   { l: "Detect", s: "Suspicious activity occurs", i: <Search /> },
                   { l: "Alert", s: "Signal generated instantly", i: <Bell /> },
                   { l: "Case", s: "Structured workspace opens", i: <Briefcase /> },
                   { l: "Investigate", s: "Evidence and context review", i: <Workflow /> },
                   { l: "Generate", s: "STR auto-population", i: <FileText /> },
                   { l: "Submit", s: "Secure FIU transmission", i: <Send /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-neutral-900 rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
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

        {/* 5. Detect & 6. Case Investigations */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase leading-tight">Identify What Needs <br />to Be Reported</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Deep Sense leverages institutional-grade detection models to identify reportable events before they become compliance liabilities.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-20 font-bold text-sm text-neutral-900 italic font-manrope">
                    {[
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "Unusual Transaction Patterns" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "Structuring (Smurfing)" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "Rapid Movement of Funds" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "High-Risk Customer Activity" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "Geographic Risk Incongruity" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-red-600" />, label: "Sudden Lifestyle Changes" }
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         {it.icon}
                         <span className="opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">{it.label}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Build Strong Cases</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Don't disclose without evidence. Deep Sense provides a structured workspace to collect findings, attach proof, and document every investigative step.</p>
                 <div className="space-y-4 font-bold text-zinc-600 italic">
                    {[
                      "Link multiple Alerts to single investigation",
                      "Full customer and entity context attached",
                      "Evidence locker for supporting documentation",
                      "Timeline-based activity review"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-2 h-10 bg-indigo-100 group-hover:bg-red-600 transition-all rounded-full" />
                         <span className="text-xs uppercase tracking-tight italic font-manrope">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] text-neutral-900 shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Workflow className="w-48 h-48 text-zinc-100 animate-spin-slow" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">STR Generation Console</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic pr-12">Automatic population of thousands of data points from transaction history direct into regulatory schemas.</p>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 italic">
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-black text-zinc-400">FIU SCHEMA READY</span>
                          <span className="text-xl font-black text-indigo-600 uppercase">XML / JSON</span>
                       </div>
                       <div className="flex items-center gap-4 text-[10px] font-black text-red-600 italic">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>ALL MANDATORY FIELDS POPULATED</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7-12. STR Generation, Review, Submission, Audit Trails, Automation, Integration */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Full Reporting Lifecycle</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Position your institution for seamless regulatory transparency.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {[
                { title: "Review & Approval", desc: "Multi-step validation workflows ensuring report accuracy before institutional submission.", icon: <ShieldCheck /> },
                { title: "Submission Support", desc: "Ready for direct integration with financial intelligence units and central banking portals.", icon: <Send /> },
                { title: "Immutable Audit Logs", desc: "Maintain full history of report creation, modification, and final regulatory transmission.", icon: <History /> },
                { title: "Automation & Efficiency", desc: "Drastically reduce manual workload while improving the quality of filed disclosures.", icon: <Zap /> },
                { title: "Integrated AML", desc: "STR reporting is a native component of the wider Deep Sense monitoring ecosystem.", icon: <Layers /> },
                { title: "Governance Controls", desc: "Role-based access and version tracking for highly sensitive reporting operations.", icon: <Scale /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg">
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
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Simplify Reporting Workflows</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Manual Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Automated STR generation",
                         "Integrated alert-to-report flow",
                         "Granular reporting audit trails",
                         "Real-time suspicious detection",
                         "Approval & Review workflows"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               No / Fragmented
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 15. Positioning & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-red-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Compliant Reporting Hub</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Simplify Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">STR Reporting.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Improve reporting accuracy, meet strict regulatory deadlines, and streamline your entire disclosure operation. Connect detection directly to final submission.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Start Filing Reports
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     View Documentation
                   </button>
                 </div>
                 <div className="mt-16 pt-8 border-t border-white/10 text-zinc-500 text-[10px] italic max-w-lg mx-auto">
                    Deep Sense supports STR workflows but should be used within your organization’s broader institutional AML and compliance framework.
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
