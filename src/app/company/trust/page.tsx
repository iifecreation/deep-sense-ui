"use client";

import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Key, 
  Layers, 
  Cpu, 
  Network, 
  BarChart3, 
  History, 
  Award, 
  LockIcon, 
  Server, 
  FileCheck, 
  Activity, 
  Eye, 
  Scale, 
  Download
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function TrustCenterPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-emerald-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional Trust Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Security and <br /><span className="text-emerald-600">Trust</span> Center.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               At Deep Sense, security is not a feature—it is the foundation of our entire institutional operating system.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-manrope">
                 Request Security Packet
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                 View Status Page
              </button>
            </div>
          </div>
        </section>

        {/* 2. Certification Portfolio */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12 pr-12">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope mb-20 uppercase italic">Institutional Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full font-manrope italic pr-12 border-b border-zinc-200 pb-24 mb-24">
                 {[
                   { t: "SOC2 Type II", l: "Certified Protection" },
                   { t: "ISO 27001", l: "Global Standard" },
                   { t: "GDPR Ready", l: "EU Privacy Hub" },
                   { t: "NDPR Compliant", l: "Regional Compliance" }
                 ].map((st, i) => (
                   <div key={i} className="flex flex-col gap-4 group">
                      <div className="w-20 h-20 bg-white rounded-3xl border border-zinc-100 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                         <Award className="w-10 h-10 text-emerald-600" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest italic">{st.l}</span>
                         <span className="text-xl font-black tracking-tight italic">{st.t}</span>
                      </div>
                   </div>
                 ))}
              </div>
              
              <div className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-manrope">
                 {[
                   { t: "Encryption Layer", d: "AES-256 for data at rest and TLS 1.3 for data in transit.", i: <LockIcon /> },
                   { t: "Data Isolation", d: "Single-tenant architecture options for enterprise institutions.", i: <Database /> },
                   { t: "Zero Trust Logic", d: "Granular access controls and continuous session verification.", i: <Key /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col gap-6">
                      <div className="w-10 h-10 text-emerald-600">
                        {React.cloneElement(it.i as React.ReactElement, { strokeWidth: 1.5, className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-lg font-black uppercase italic tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 text-xs italic leading-relaxed pr-6">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. Infrastructure & 5. Sovereignty */}
        <section className="py-32 px-8 font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center pr-10">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  <h2 className="text-5xl font-bold font-manrope mb-12 tracking-tight italic uppercase italic">Sovereign Data Infrastructure.</h2>
                  <p className="text-xl text-zinc-500 mb-16 italic font-manrope pr-12 pr-12">We provide regional infrastructure nodes to ensure that institutional data never leaves its required jurisdiction.</p>
                  {[
                    { t: "Regional Resident Nodes", d: "Local data storage and processing to satisfy national data sovereignty laws.", i: <Globe /> },
                    { t: "Multi-Cloud Redundancy", d: "Distributed architecture across AWS, GCP, and Azure for total failover resilience.", i: <Server /> },
                    { t: "PII Anonymization", d: "Sensitive data is hashed or redacted before ingestion into analytics layers.", i: <Eye /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic mb-10 last:mb-0">
                       <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all font-manrope">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 font-manrope" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <div className="aspect-square bg-neutral-900 rounded-[80px] overflow-hidden relative group border border-white/5 shadow-3xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative z-10 text-center flex flex-col items-center">
                       <Activity className="w-32 h-32 text-brand-lime mb-8 animate-pulse font-manrope" strokeWidth={1} />
                       <div className="flex flex-col items-center">
                          <span className="text-white text-5xl font-black italic uppercase leading-tight italic pr-6 italic inline">99.99%</span>
                          <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2 font-manrope italic">Institutional Uptime SLA</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. Operational Security */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-12">
           <div className="absolute top-0 left-0 p-24 opacity-20 filter grayscale invert contrast-200 pointer-events-none">
             <ShieldCheck className="w-96 h-96 text-white/5" />
           </div>
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10 font-manrope italic pr-12 pr-6">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight">Operational <br /><span className="text-brand-lime">Integrity.</span></h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-24 italic pr-12">We maintain rigorous internal security protocols to ensure that our platform remains impervious to institutional threats.</p>
                 <div className="grid grid-cols-1 gap-6 font-manrope">
                    {[
                      { l: "Vulnerability Management", v: "Continuous scans and rapid patching cycles." },
                      { l: "Penetration Testing", v: "Annual third-party audits and red-teaming." },
                      { l: "Supply Chain Security", d: "Rigorous vendor assessment and deep dependency auditing." }
                    ].map((st, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-lime transition-all">
                         <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest italic font-manrope mb-2 block">{st.l}</span>
                         <span className="block text-sm font-bold italic text-zinc-400">{st.v || st.d}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col gap-8 font-manrope pr-12">
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[56px] relative group overflow-hidden">
                    <h4 className="text-2xl font-black uppercase italic italic mb-8 border-b border-white/5 pb-8 italic">Data Sovereignty</h4>
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24 italic leading-relaxed mb-10">"We ensure compliance with regional mandates by isolating institutional data within national borders where required."</p>
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                       <span className="text-[10px] font-black uppercase tracking-widest italic pr-12">CBN Compliance Ready</span>
                    </div>
                 </div>
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[56px] relative group overflow-hidden group hover:bg-white transition-all cursor-pointer">
                    <div className="flex justify-between items-center group-hover:text-neutral-900 transition-colors">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400">Institutional Documentation</span>
                          <span className="text-xl font-black italic uppercase">Download Security Packet</span>
                       </div>
                       <Download className="w-8 h-8 text-brand-lime group-hover:text-emerald-600" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center font-manrope italic">
              <h2 className="text-5xl font-bold font-manrope text-neutral-900 mb-8 tracking-tight italic uppercase italic">Secure The Future.</h2>
              <p className="text-zinc-500 text-xl italic mb-16 px-12 italic font-manrope pr-12">Our trust center is open to all regulated institutions seeking to build a more secure future of finance.</p>
              <div className="flex flex-col sm:flex-row gap-6 italic font-bold">
                 <button className="px-14 py-7 bg-neutral-900 text-white rounded-full hover:bg-brand-lime hover:text-neutral-900 transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope shadow-2xl">
                    Request Security Audit
                 </button>
                 <button className="px-14 py-7 bg-white border-2 border-zinc-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                    Contact Security Team
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
