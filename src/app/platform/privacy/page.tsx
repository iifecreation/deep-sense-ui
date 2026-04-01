"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Eye, 
  ShieldCheck, 
  Database, 
  UserCheck, 
  Workflow, 
  Lock, 
  Search, 
  Users, 
  Globe, 
  Eraser, 
  Activity,
  CheckCircle2
} from "lucide-react";

const collectionItems = [
  { t: "Transaction Data", d: "Amounts, timestamps, and payment metadata.", i: <Database /> },
  { t: "Account Activity", d: "User and account identifiers for behavior analysis.", i: <UserCheck /> },
  { t: "Device Intelligence", d: "Session data and platform environment signals.", i: <Workflow /> },
  { t: "Network Signals", d: "IP address and location markers for anomaly detection.", i: <Globe /> }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Eye className="w-3.5 h-3.5" />
               Transparency & Data Integrity
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Your Data, <br />
               <span className="text-zinc-300 italic">Protected and Controlled.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[700px] mb-14">
               Deep Sense is designed with privacy and data protection at its core — ensuring your data is handled securely, responsibly, and transparently.
             </p>
             <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Contact Sales
                </button>
             </div>
          </div>
        </section>

        {/* 🧠 DATA PHILOSOPHY */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Privacy-First <br />by Design.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">We believe fraud detection should not come at the cost of data privacy. Our philosophy is rooted in absolute transparency and organizational control.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      "Collect only what is necessary",
                      "Protect data at every stage",
                      "Full organizational control",
                      "Transparent processing flows"
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-0.5 group-hover:scale-150 transition-transform" />
                         <span className="font-bold text-white text-[10px] uppercase tracking-widest">{p}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <ShieldCheck className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Data Ethics.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense uses purpose-driven data processing, ensuring your signals are used strictly for fraud intelligence and nothing else.</p>
                 <div className="inline-flex gap-4 p-4 bg-brand-lime/10 rounded-full border border-brand-lime/20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">Zero unauthorized data sharing</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📥 DATA COLLECTION & ⚙️ PROCESSING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Data Ingestion.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto text-center">Collection is driven by your integration and use case, ensuring only essential signals are processed.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {collectionItems.map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.t}</h4>
                      <p className="text-[10px] text-zinc-400 font-inter leading-relaxed uppercase tracking-widest">{it.d}</p>
                   </div>
                 ))}
              </div>

              <div className="mt-32 p-12 lg:p-24 bg-zinc-50 rounded-[80px] border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-8">
                    <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-4">How Data Is Used</h3>
                    <p className="text-lg text-zinc-500 font-inter italic leading-relaxed">Deep Sense processes data strictly for fraud detection and operational analysis routines.</p>
                    <div className="flex flex-wrap gap-4">
                       {["Fraud Scoring", "Anomaly Detection", "Rule Evaluation", "Graph Analysis", "Investigations"].map((u, i) => (
                         <span key={i} className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">{u}</span>
                       ))}
                    </div>
                 </div>
                 <div className="bg-white border border-gray-100 p-12 rounded-[56px] shadow-3xl">
                    <div className="space-y-6">
                       {[
                         { l: "Encryption in Transit", s: "TLS 1.3 / HTTPS Only" },
                         { l: "Encryption at Rest", s: "A-AES-256 Volume Encryption" },
                         { l: "Access Logs", s: "Full auditability of data access" }
                       ].map((step, i) => (
                         <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{step.l}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-900">{step.s}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🏢 DATA ISOLATION & 🧑💻 ACCESS CONTROL */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Strict <br />Tenant Isolation.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Each organization’s data is logically separated and securely handled within our multi-tenant infrastructure.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { l: "Tenant-scoped Access", d: "No data leaks across orgs." },
                      { l: "Isolated Contexts", d: "Compute-level isolation." },
                      { l: "Secure Boundaries", d: "Hardened system separation." },
                      { l: "Encrypted Volume", d: "Org-specific data keys." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[40px]">
                         <h5 className="font-bold text-brand-lime text-xs mb-1 uppercase tracking-tight">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl relative overflow-hidden backdrop-blur-xl">
                 <Users className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Access Control</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Organizations have full control over how their data is accessed, from role-based permissions to detailed audit tracing.</p>
                 <div className="space-y-6">
                    {[
                      { l: "Configurable Permissions", s: "Fine-grained control" },
                      { l: "Audit Tracing", s: "Action-to-identity mapping" },
                      { l: "Login Governance", s: "Strict auth requirements" }
                    ].map((p, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{p.l}: <span className="text-white">{p.s}</span></span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔁 RETENTION & ❌ SHARING */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
              {[
                { 
                  t: "Flexible Retention.", 
                  d: "Configurable data retention periods aligned with your organizational or regulatory requirements.", 
                  i: <Eraser />,
                  l: ["Define periods", "Cleanup workflows", "Purge logic"]
                },
                { 
                  t: "No Data Sharing.", 
                  d: "Your data is not shared across organizations for model training or unauthorized third-party use.", 
                  i: <Lock />,
                  l: ["Zero sharing", "Private compute", "Secure isolation"]
                },
                { 
                  t: "Full Transparency.", 
                  d: "Full visibility into fraud decisions, rule executions, and processing flows for absolute auditability.", 
                  i: <Search />,
                  l: ["Audit logs", "Processing maps", "Decision visibility"]
                }
              ].map((b, i) => (
                <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                   <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(b.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                   </div>
                   <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-8">{b.t}</h3>
                   <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">{b.d}</p>
                   <div className="mt-auto pt-8 border-t border-gray-50 flex flex-wrap justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                      {b.l.map((tag, j) => (
                        <span key={j}>{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 📜 PRIVACY ALIGNMENT & 🧠 MINIMIZATION */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Privacy Alignment.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense is built to support technical privacy standards and common regulatory expectations in global financial environments.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Data Governance", d: "Structured lifecycle control." },
                      { l: "Full Auditability", s: "Traceable processing paths." },
                      { l: "Regulatory Support", d: "Aligned with global standards." },
                      { l: "Control Portability", d: "Configurable access tools." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-tight">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter">{it.d || it.s}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 p-12 lg:p-24 rounded-[88px] text-white shadow-3xl relative overflow-hidden group">
                 <Activity className="w-40 h-40 absolute top-0 right-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10">Purpose-Driven Design.</h3>
                 <div className="space-y-10">
                    {[
                      { s: "Data Minimization", d: "We focus only on data required for fraud intelligence." },
                      { s: "Controlled Access", d: "Identity-based governance for all data interactions." },
                      { s: "Focused Processing", d: "Direct focus on fraud detection use cases." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover/item:bg-white group-hover/item:text-neutral-900 transition-all">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{item.s}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px]">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Data Maturity.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See how Deep Sense compares to typical fraud systems in foundational data handling and privacy maturity.</p>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Data Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-300 italic">Typical Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Strict Tenant Isolation", d: "Yes (Verified compute)", s: "Varies" },
                         { c: "Full Data Control", d: "Yes (Role-based & Scoped)", s: "Limited" },
                         { c: "Processing Transparency", d: "Yes (Audit logs & Visibility)", s: "Limited / Blackbox" },
                         { c: "Privacy-First Design", d: "Yes (Minimization logic)", s: "Rare / Data-heavy" },
                         { c: "No Sharing Policy", d: "Yes", s: "Varies" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-white transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-300 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-40">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group border border-white/5 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-center pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-black duration-1000">
                 <h2 className="text-4xl md:text-9xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br /><span className="opacity-30">Future.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Trust our platform to handle your most sensitive intelligence with the respect it deserves.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-neutral-900 group-hover:text-white">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white/10 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:border-transparent">
                      Contact Sales
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
