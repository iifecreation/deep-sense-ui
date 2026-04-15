"use client";

import React from "react";
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Key, 
  EyeOff, 
  Server, 
  ShieldCheck, 
  Globe, 
  Zap, 
  FileText,
  BadgeCheck,
  History,
  LockIcon,
  HardDrive,
  Users,
  Settings,
  Activity,
  UserCheck,
  Code
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function DataSecurityPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 -z-10 w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-[120px] opacity-60 -translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional Grade Security</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter uppercase italic">
              Protecting Your Data at <span className="text-indigo-600 font-black">Every Layer.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Deep Sense is built with strong security controls to ensure your data is protected, access is controlled, and operations remain secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all text-lg">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full active:scale-95 transition-all text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. Security Overview */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Security Built into the Platform</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic">"Security is embedded across the Deep Sense platform — from data ingestion to storage, processing, and access."</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                          { l: "Least Privilege Access", d: "Users only see the data they need.", i: <UserCheck /> },
                          { l: "Secure by Design", d: "Security as a core dev lifecycle pillar.", i: <Shield /> },
                          { l: "Continuous Monitoring", d: "24/7 scanning for anomalies.", i: <Activity /> },
                          { l: "Data Protection", d: "Encrypted at every single stage.", i: <Lock /> }
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col gap-3 group/p">
                             <div className="text-indigo-600 group-hover/p:text-brand-lime transition-colors">
                                {React.cloneElement(item.i as React.ReactElement, { className: "w-5 h-5" })}
                             </div>
                             <h4 className="font-bold text-sm uppercase tracking-tight italic">{item.l}</h4>
                             <p className="text-[10px] text-zinc-400 font-inter italic leading-relaxed">{item.d}</p>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">Institutional Defense Strategy.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic text-left">We understand that financial data is a trust relationship. Our security architecture is designed to exceed the requirements of global regulators and information security officers.</p>
                  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime">
                     <LockIcon className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 leading-relaxed italic pr-6 italic">Deep Sense provides strong security controls but should be implemented within your organization’s overall framework.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. Data Protection & 4. Access Control */}
        <section className="py-32 px-8 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Secure Data Handling</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Deep Sense ensures your sensitive financial datasets are protected using industrial-strength encryption and controlled access methods.</p>
                 
                 <div className="space-y-6">
                    {[
                      { l: "Encryption in Transit", d: "All traffic is secured via HTTPS/TLS 1.3 with strong cipher suites." },
                      { l: "Secure Storage Practices", d: "Data is encrypted at-rest using AES-256 standards." },
                      { l: "Sensitive Data Protection", d: "Automated masking of PII and PCI-governed variables." },
                      { l: "Controlled Access", d: "Strict authorization checks for every data record request." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="w-1.5 h-16 bg-indigo-50 group-hover:bg-brand-lime transition-all rounded-full shrink-0" />
                        <div>
                           <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight mb-1">{item.l}</h4>
                           <p className="text-[12px] text-zinc-400 font-inter italic leading-relaxed pr-12">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 lg:p-24 bg-neutral-900 rounded-[80px] text-white shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Key className="w-48 h-48 text-white/5 animate-pulse" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Access Control</h3>
                 <div className="space-y-6 relative z-10">
                    <p className="text-zinc-500 text-sm italic mb-10">Control who can access what with granular precision across your entire organization.</p>
                    {[
                      "Role-Based Access Control (RBAC)",
                      "Tenant-Level Data Isolation",
                      "Restricted Actions Authentication",
                      "Multi-Factor System Authorization"
                    ].map((cap, i) => (
                      <div key={i} className="flex gap-4 items-center text-white/40 hover:text-brand-lime transition-all">
                         <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover:bg-brand-lime transition-colors" />
                         <span className="text-xs font-bold uppercase tracking-widest italic">{cap}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Tenant Security & 6. API Security */}
        <section className="py-32 bg-zinc-900 text-white mx-4 rounded-[64px] overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-brand-lime/5 opacity-40 blur-[150px] translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto text-center relative z-10 pb-32">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Strong Tenant Isolation</h2>
              <p className="text-xl text-white/40 max-w-2xl mx-auto italic font-inter leading-relaxed mb-20">Deep Sense ensures that each organization’s data is securely separated within its own scoped context.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: "Tenant-Scoped Access", desc: "Hard boundaries preventing cross-tenant data visibility.", icon: <Users /> },
                   { title: "Isolated Processing", desc: "Independent computation contexts for risk and rules execution.", icon: <Cpu /> },
                   { title: "Secure Boundaries", desc: "Logical separation layers between every customer organization.", icon: <Shield /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[56px] text-left hover:bg-brand-lime hover:text-neutral-900 transition-all group">
                      <div className="text-brand-lime group-hover:text-neutral-900 mb-8 transition-colors">
                         {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{it.title}</h4>
                      <p className="text-zinc-500 group-hover:text-neutral-800 italic text-sm leading-relaxed">{it.desc}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center border-t border-white/10 pt-32 px-8">
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-10 tracking-tight leading-[1.1] uppercase italic">Secure Integration Points.</h2>
                  <p className="text-white/40 text-lg mb-12 italic leading-relaxed">Our APIs are developed for security first, ensuring that data exchange between your systems and Deep Sense is always protected.</p>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { l: "API Key Auth", i: <Key className="text-indigo-400" /> },
                       { l: "Request Validation", i: <CheckCircle2 className="text-brand-lime" /> },
                       { l: "Rate Limiting", i: <Activity className="text-white" /> },
                       { l: "Webhook Signatures", i: <LockIcon className="text-indigo-400" /> }
                     ].map((st, i) => (
                       <div key={i} className="flex items-center gap-4 group">
                          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">{st.i}</div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{st.l}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="p-12 bg-white/5 border border-white/10 rounded-[56px] text-zinc-500 font-mono text-[10px] relative overflow-hidden flex flex-col justify-center h-80">
                  <Terminal className="text-white/5 absolute top-0 right-0 p-12 w-48 h-48" />
                  <div className="space-y-4">
                     <div>POST /v1/ingest HTTP/1.1</div>
                     <div>Authorization: Bearer ds_****************</div>
                     <div className="text-brand-lime">Content-Type: application/json</div>
                     <div className="text-white/20">{"{"}</div>
                     <div className="text-white/20 pl-4">"signature": "hmac_sha256_e3b0c442...",</div>
                     <div className="text-white/20 pl-4">"payload": "encrypted_blob"</div>
                     <div className="text-white/20">{"}"}</div>
                  </div>
               </div>
           </div>
        </section>

        {/* 7-11. Monitoring, Integrity, Audit, Storage, Privacy */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Defensive Depth by Design</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Protecting financial data requires a multi-layered approach to integrity and privacy.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Threat Detection", desc: "Monitor system activity for unauthorized access patterns.", icon: <Activity /> },
                { title: "Data Integrity", desc: "Hashing and validation to prevent data corruption.", icon: <Database /> },
                { title: "Full Traceability", desc: "Audit logs for every record access and config change.", icon: <History /> },
                { title: "Secure Storage", desc: "Reliable and protected records storage protocol.", icon: <HardDrive /> },
                { title: "Privacy-First", desc: "Minimal data exposure aligned with data governance.", icon: <EyeOff /> }
              ].map((it, i) => (
                <div key={i} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                   <div className="w-12 h-12 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6" })}
                   </div>
                   <h4 className="text-lg font-bold mb-4 uppercase italic tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 italic text-[11px] leading-relaxed">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 12. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Built for Financial Data Protection</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Security Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Typical Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Encryption at-rest and in-transit",
                         "Granular RBAC",
                         "Strict tenant isolation boundaries",
                         "API security & signing",
                         "Privacy-first data masking"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Varies / Limited
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 13. Business Impact & 14. Positioning Note */}
        <section className="py-24 px-8 flex justify-center">
           <div className="max-w-4xl p-12 bg-indigo-50 border border-indigo-100 rounded-[56px] text-center">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 italic uppercase underline decoration-indigo-200 decoration-4 underline-offset-8">Operate Securely at Scale</h3>
              <p className="text-indigo-700 italic leading-relaxed text-sm mb-0">Deep Sense allows you to protect sensitive financial data and meet rigorous enterprise security expectations without sacrificing performance. Build deep customer trust on a foundation of professional-grade platform integrity.</p>
           </div>
        </section>

        {/* 15. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Secure Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Operations.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Protect sensitive data, reduce security risk, and build unshakeable institutional trust with our institutional-grade security controls.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Request Security Review
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     Contact Security Team
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

function Terminal({ className }: { className?: string }) {
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
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}
