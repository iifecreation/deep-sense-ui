"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  ShieldCheck, 
  Search, 
  Users, 
  Key, 
  RefreshCw, 
  FileText, 
  Activity, 
  Database, 
  Globe, 
  Fingerprint,
  Zap,
  CheckCircle2
} from "lucide-react";

const securityPrinciples = [
  { t: "Secure by Design", d: "Security as a first-class feature in every code submission.", i: <ShieldCheck /> },
  { t: "Least Privilege", d: "Strict access control ensuring minimal data exposure.", i: <Key /> },
  { t: "Continuous Monitoring", d: "Real-time visibility into system health and anomalies.", i: <Activity /> },
  { t: "Auditability", d: "Full traceability of every action, decision, and API call.", i: <FileText /> }
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[950px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <ShieldCheck className="w-3.5 h-3.5" />
               Enterprise Security Standards
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Enterprise-Grade <br />
               <span className="text-zinc-300 italic">Security & Trust.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[700px] mb-14">
               Deep Sense is designed with security, privacy, and compliance at its core — protecting your data and ensuring safe fraud detection at scale.
             </p>
             <div className="flex flex-wrap gap-8">
                <button className="px-12 py-6 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-12 py-6 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl">
                  Contact Sales
                </button>
             </div>
          </div>
        </section>

        {/* 🛡️ SECURITY OVERVIEW */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Security Built into Every Layer.</h2>
                    <p className="text-xl text-white/40 font-inter max-w-[500px] italic">Security is not an add-on — it is embedded across the entire Deep Sense platform, from data ingestion to fraud analysis and investigation workflows.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    {securityPrinciples.map((p, i) => (
                      <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[48px] hover:bg-white/10 transition-all group">
                         <div className="text-brand-lime mb-6 group-hover:scale-110 transition-transform">{p.i}</div>
                         <h5 className="font-bold text-sm uppercase mb-3 italic tracking-tight">{p.t}</h5>
                         <p className="text-[10px] text-white/30 font-inter leading-relaxed">{p.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔐 DATA SECURITY & 🧑💻 ACCESS CONTROL */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-12 lg:p-24 rounded-[80px] shadow-sm border border-gray-100 relative group overflow-hidden">
                 <Database className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-100 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8">Protecting Your Data</h3>
                 <p className="text-lg text-zinc-500 font-inter italic mb-10 leading-relaxed">Deep Sense ensures that all data is handled securely throughout its entire lifecycle using industry-standard protocols.</p>
                 <div className="space-y-6">
                    {[
                      { l: "Encryption in Transit", d: "Universal HTTPS / TLS 1.3 enforcement." },
                      { l: "Encryption at Rest", d: "A-AES-256 encryption for all data storage." },
                      { l: "Secure Lookups", d: "Low-latency isolated caching mechanisms." },
                      { l: "Storage Isolation", d: "Physical and logical separation of data." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="w-2 h-2 bg-neutral-900 rounded-full" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{it.l}: <span className="text-neutral-900">{it.d}</span></span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 p-12 lg:p-24 rounded-[80px] text-white shadow-3xl relative group overflow-hidden">
                 <Users className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8">Access Control (RBAC)</h3>
                 <p className="text-lg text-white/40 font-inter italic mb-10 leading-relaxed">Control who can access what within your organization with multi-level role-based permissions.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { r: "Admin", d: "Full system & org control." },
                      { r: "Analyst", d: "Fraud review & cases." },
                      { r: "Viewer", d: "Read-only metrics." },
                      { r: "Technician", d: "API & Rule management." }
                    ].map((role, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[40px]">
                         <h5 className="font-bold text-brand-lime uppercase text-xs mb-2 italic tracking-tight">{role.r}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{role.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🧾 AUDIT, 🏢 TENANT & 📡 API SECURITY */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  t: "Full Auditability.", 
                  d: "Every action within Deep Sense is traceable, from analyst reviews to API key rotations.", 
                  i: <Search />,
                  l: ["User action logs", "API request tracking", "Decision auditing"]
                },
                { 
                  t: "Tenant Isolation.", 
                  d: "Strict multi-tenant architecture ensures complete separation of workloads and org data.", 
                  i: <Globe />,
                  l: ["Isolated processing", "Tenant queries", "Secure separation"]
                },
                { 
                  t: "Secure API Access.", 
                  d: "All integrations are protected through secure authentication, rate limiting, and signing.", 
                  i: <Zap />,
                  l: ["HMAC-SHA256 Signatures", "AES key rotations", "IP Rate Limiting"]
                }
              ].map((b, i) => (
                <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] hover:shadow-2xl transition-all group flex flex-col">
                   <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(b.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                   </div>
                   <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-8">{b.t}</h3>
                   <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">{b.d}</p>
                   <div className="mt-auto pt-8 border-t border-gray-50 flex flex-wrap gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                      {b.l.map((tag, j) => (
                        <span key={j}>{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 📜 COMPLIANCE & 🔍 PRIVACY */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full text-neutral-900 text-[9px] font-bold uppercase tracking-widest shadow-sm">
                    <FileText className="w-3.5 h-3.5" />
                    Regulatory Readiness
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope">Compliance & Privacy.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense is built to support the stringent regulatory requirements of financial environments, ensuring absolute data governance.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Audit Trails", d: "Designed for regulatory review." },
                      { l: "Data Retention", d: "Configurable policy enforcement." },
                      { l: "Minimal Exposure", d: "Privacy-by-design data handling." },
                      { l: "Incident Awareness", d: "Real-time threat notification." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl group">
                 <Fingerprint className="w-40 h-40 absolute top-0 right-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h2 className="text-3xl font-bold italic uppercase tracking-tight mb-10">Privacy-First Design</h2>
                 <ul className="space-y-10">
                    {[
                      { s: "Minimal Data Exposure", d: "We ingest only the signals necessary for fraud intelligence." },
                      { s: "Controlled Access", d: "Hardware-level tenant isolation for all sensitive compute." },
                      { s: "Data Governance", d: "Built-in tools to support GDPR and local data policies." }
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
                 </ul>
              </div>
           </div>
        </section>

        {/* 🧠 CONTINUOUS MONITORING & 🔁 RESILIENCE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-lime/20 transition-all" />
                 <div className="bg-white p-12 lg:p-24 rounded-[88px] border border-gray-100 shadow-3xl relative z-10">
                    <Activity className="w-16 h-16 text-neutral-900 mb-10" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8">Continuous Monitoring</h3>
                    <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">Our Security Operations (SecOps) focus on real-time anomaly detection and system health across the entire global infrastructure.</p>
                    <div className="space-y-4">
                       {["System health monitoring", "Structured logging & Alerting", "Proactive anomaly detection", "Incident response readiness"].map((it, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <div className="w-4 h-4 bg-brand-lime/10 text-brand-lime rounded-full flex items-center justify-center">
                               <RefreshCw className="w-2 h-2" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{it}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope">Fault-Tolerant <br />by Nature.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense is designed to operate reliably under high load and failure scenarios, ensuring no fraud signal is lost.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { t: "Retry Mechanisms", d: "Automatic handling of network flakiness." },
                      { t: "Idempotency", d: "Zero duplicate transaction errors." },
                      { l: "Fault Tolerance", d: "Resilient backend processing patterns." },
                      { l: "Safe Failure", d: "Graceful degradation under pressure." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-zinc-50 rounded-[40px] border border-gray-100">
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight">{it.t || it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40 bg-neutral-900 text-white border-y border-white/5">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope underline decoration-white/5 decoration-8 underline-offset-16">Security You Can Trust.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[600px] mx-auto">See how Deep Sense compares to typical fraud systems in foundational security infrastructure.</p>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse font-manrope italic">
                    <thead>
                       <tr className="border-b border-white/10 uppercase tracking-widest text-[11px] text-zinc-500">
                          <th className="py-10 px-8 font-bold italic">Security Capability</th>
                          <th className="py-10 px-8 font-bold text-brand-lime italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold italic">Typical Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Enterprise-Grade Encryption", d: "Yes (At rest & In transit)", s: "Yes" },
                         { c: "Role-Based Access Control", d: "Yes (Detailed Org Scoping)", s: "Sometimes" },
                         { c: "Full User Audit Logs", d: "Yes (Every action logged)", s: "Limited" },
                         { c: "Multi-tenant Isolation", d: "Yes (Verified compute boundaries)", s: "Varies" },
                         { c: "Webhook HMAC Verification", d: "Yes (Industry Standard)", s: "Not Always" },
                         { c: "Real-time Anomaly Detection", d: "Yes (On API Usage)", s: "Reactive Only" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-bold italic">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-white/20 font-bold italic">{row.s}</td>
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
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-black duration-1000">
                 <h2 className="text-4xl md:text-9xl font-bold tracking-tighter leading-none italic uppercase">Secure Your <br /><span className="opacity-30">Operations.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Partner with a fraud intelligence platform that prioritizes your data as much as you do.</p>
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
