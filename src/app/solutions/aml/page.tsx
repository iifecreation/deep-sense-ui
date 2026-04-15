"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Cpu, 
  Network, 
  BarChart3, 
  Workflow,
  Search,
  FileText,
  Users,
  Building,
  Scale,
  Globe,
  Database,
  History,
  Lock
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function AmlSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional AML Framework</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               The Unified <br /><span className="text-indigo-600">AML Operating</span> System.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense provides the end-to-end framework for institutional AML compliance—from automated onboarding and global screening to real-time monitoring and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase">
                 Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                 View Compliance Docs
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12 pr-12 group">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center font-manrope">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-tight">Fragmented AML Complexity.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-12 pr-12">Relying on separate vendors for KYC, Sanctions, Monitoring, and Reporting creates massive data silos, operational friction, and critical regulatory blind spots.</p>
                 <div className="space-y-4 font-manrope pr-6">
                    {[
                       "KYC/Onboarding doesn't talk to transaction monitoring.",
                       "Sanctions screening lists are not updated in real-time.",
                       "Manual reporting processes are slow and error-prone.",
                       "Fragmented audit trails fail institutional regulatory reviews."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-indigo-600 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-12 group-hover:text-indigo-600 transition-colors">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10 font-manrope">Compliance Tax</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24">"Institutional compliance costs have risen 60% in the last decade, primarily driven by manual efforts and technical fragmentation."</p>
                    <div className="grid grid-cols-2 gap-6 italic">
                       {[
                         { l: "Manual Effort", v: "70% Reduc." },
                         { l: "Audit Ready", v: "100% Always" }
                       ].map((it, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-lime transition-all">
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">{it.l}</span>
                            <span className="block text-2xl font-black italic">{it.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-7. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-indigo-100 decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">One Platform, Complete Compliance</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10 pr-10 font-manrope italic">Deep Sense unifies the four core pillars of AML into a single, high-performance operating system.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full text-left font-manrope italic pr-10 pr-12 group">
                 {[
                   { t: "KYC & Onboarding", d: "Automated identity verification (eIDV) and customer due diligence (CDD).", c: "Frictionless Onboarding", i: <Users /> },
                   { t: "Global Screening", d: "Real-time Sanctions, PEP, and adverse media screening across global watchlists.", c: "Watchlist Integrity", i: <Globe /> },
                   { t: "Transaction Monitoring", d: "Real-time behavioral and pattern-based surveillance for suspicious activity.", i: <Activity />, c: "Real-Time Detection" },
                   { t: "Regulatory Reporting", d: "Automatic generation and submission of STR and CTR regulatory files.", i: <FileText />, c: "Submission Ready" }
                 ].map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[48px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-12 pr-6 group">
                      <div className="w-12 h-12 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-5 h-5 border-zinc-100" })}
                      </div>
                      <h4 className="text-xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic pr-4">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-xs mb-10 italic pr-8 italic pr-6 group-hover:text-neutral-900 transition-colors">{it.d}</p>
                      <div className="flex items-center gap-3 text-indigo-600 font-black uppercase text-[10px] tracking-widest font-manrope italic border-t border-zinc-50 pt-6">
                         <CheckCircle2 className="w-4 h-4" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. Intelligence Layers */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10 font-manrope italic pr-10 pr-12">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  {[
                    { t: "Dynamic Risk Profiling", d: "Automatically update customer risk levels based on behavior and profile changes in real-time.", i: <BarChart3 /> },
                    { t: "Entity Resolution Graph", d: "Discover hidden corporate structures and ultimate beneficial owners (UBO) at scale.", i: <Network /> },
                    { t: "Institutional Audit Trails", d: "Maintain immutable, time-stamped logs of every decision, rule change, and risk score revision.", i: <History /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic mb-10 last:mb-0">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all font-manrope">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-white/10 font-manrope" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight font-manrope pr-16 pr-12">The Ecosystem, <br />Not the Rule.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12">AML is not a series of checkpoints—it's a continuous institutional culture. Deep Sense provides the infrastructure to operationalize that culture with total technical integrity.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10 pr-12 group hover:border-brand-lime transition-all">
                    "Deep Sense unifies disparate compliance workflows into a single data stream, providing a 360-degree view of institutional risk."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Institutional Regulatory Defense</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse font-manrope italic">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px] uppercase">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Institutional Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Standard Compliance</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Unified risk-based approach",
                         "Automatic STR/CTR generation",
                         "Real-time UBO entity resolution",
                         "Multi-jurisdictional rule handling",
                         "Immutable governance audit logs"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8 font-manrope">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block font-manrope tracking-tighter pr-4">Framework Ready</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               Manual / Fragmented
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 12. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Protect Your Institutional Reputation</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight">
                   Modernize Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">AML Infrastructure.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Eliminate compliance blind spots, reduce operational friction, and protect your institutional license with the unified AML operating system.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Request AML Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     Contact Compliance Advisory
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
