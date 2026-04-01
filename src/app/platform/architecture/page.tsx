"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Workflow, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Database, 
  Cpu, 
  Users, 
  LayoutGrid,
  RefreshCw,
  Server,
  Network,
  Cloud,
  CheckCircle2
} from "lucide-react";

const archLayers = [
  {
    title: "Ingestion Layer",
    icon: <Database />,
    points: ["Transaction intake APIs", "Event collection", "Validation & Idempotency"],
    color: "text-blue-400"
  },
  {
    title: "Intelligence Layer",
    icon: <Cpu />,
    points: ["Feature Generation", "ML Scoring", "Anomaly Detection", "Rules Engine", "Device & Graph Intelligence"],
    color: "text-brand-lime"
  },
  {
    title: "Decision Layer",
    icon: <LayoutGrid />,
    points: ["Risk Fusion", "Threshold-based Decisions", "Approve / Review / Block Actions"],
    color: "text-emerald-400"
  },
  {
    title: "Operations Layer",
    icon: <Workflow />,
    points: ["Alerting Systems", "Case Management", "Audit Trails", "Investigation Workflows"],
    color: "text-zinc-200"
  },
  {
    title: "Analytics Layer",
    icon: <Activity />,
    points: ["Fraud Trends", "Operational Metrics", "Reporting & Dashboards"],
    color: "text-purple-400"
  }
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Network className="w-3.5 h-3.5" />
               Technical Infrastructure
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Built on a Modern <br />
               <span className="text-zinc-300 italic">Fraud Architecture.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[700px]">
               Deep Sense combines modular services, real-time processing, and intelligent risk analysis to deliver scalable fraud detection for modern financial systems.
             </p>
             <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  View API Docs
                </button>
             </div>
          </div>
        </section>

        {/* 💡 ARCHITECTURE OVERVIEW */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16">Designed for <br />Real-Time.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense is built to ingest, analyze, and act on fraud signals in real time. The platform is designed to support high-volume transaction environments while remaining flexible, secure, and easy to extend.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Real-time Ingestion", d: "Sub-50ms transaction processing." },
                      { l: "Modular Backend", d: "Domain-isolated fraud services." },
                      { l: "Intelligent Scoring", d: "Real-time risk evaluation." },
                      { l: "Operations Workflow", d: "Built-in case and alert management." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <Server className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Production-Ready.</h3>
                 <p className="text-white/40 text-sm italic max-w-[350px] mx-auto mb-10 leading-relaxed">Engineered for absolute durability, every component of the architecture is redundant, observable, and built for 99.99% availability.</p>
                 <div className="inline-flex gap-4 p-4 bg-brand-lime/10 rounded-full border border-brand-lime/20">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">Platform status: healthy</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧬 END-TO-END SYSTEM FLOW */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope">How the Platform Works.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Every layer of Deep Sense is optimized for speed, reliability, and operational visibility.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                 <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2 hidden lg:block" />
                 
                 {[
                   { t: "Ingestion", d: "Event enters platform", i: <RefreshCw /> },
                   { t: "Validation", d: "Data enriched & validated", i: <CheckCircle2 /> },
                   { t: "Generation", d: "Fraud signals created", i: <Zap /> },
                   { t: "Evaluation", d: "ML models score risk", i: <Cpu /> },
                   { t: "Decision", d: "Apply approve / block", i: <Workflow /> },
                   { t: "Updates", d: "Alerts & Cases updated", i: <Activity /> }
                 ].map((step, i) => (
                   <div key={i} className="p-8 bg-white border border-gray-100 rounded-[48px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center relative z-10">
                      <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:rotate-12 transition-transform">
                         {React.cloneElement(step.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-lg font-bold italic uppercase tracking-tight mb-2">{step.t}</h4>
                      <p className="text-[10px] text-zinc-400 font-inter uppercase tracking-widest">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧱 CORE ARCHITECTURAL LAYERS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope">Platform Layers.</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                 {archLayers.map((layer, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group">
                      <div className={`w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center mb-10 ${layer.color}`}>
                         {React.cloneElement(layer.icon as React.ReactElement<{ className: string }>, { className: "w-7 h-7" })}
                      </div>
                      <h3 className="text-xl font-bold italic uppercase tracking-tight mb-8">{layer.title}</h3>
                      <ul className="space-y-4">
                         {layer.points.map((p, j) => (
                           <li key={j} className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-relaxed">
                              <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full mt-1.5 group-hover:bg-brand-lime transition-colors" />
                              {p}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🏗️ MODULAR DESIGN & ⚡ REAL-TIME */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope">Modular by Design.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[550px] leading-relaxed">Deep Sense is built with a modular architecture that keeps fraud capabilities organized by domain. This allows for rapid iteration and future-ready service extraction.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { l: "Maintenance", d: "Easier system updates." },
                      { l: "Development", d: "Faster feature shipping." },
                      { l: "Domain Isolation", d: "Stronger system boundaries." },
                      { l: "Scalability", d: "Targeted resource allocation." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-zinc-50 rounded-[40px] border border-gray-100">
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight">{it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl group">
                 <Zap className="w-40 h-40 absolute top-0 right-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h2 className="text-4xl font-bold uppercase italic tracking-tighter mb-10">Built for Real-Time Decisioning.</h2>
                 <div className="space-y-8">
                    {[
                      "Event-driven processing engine",
                      "Sub-35ms low-latency scoring flows",
                      "Full support for asynchronous workloads",
                      "Immediate fraud response triggers"
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-5 h-5 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-brand-lime" />
                         </div>
                         <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">{it}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-14 pt-12 border-t border-white/5 grid grid-cols-2 gap-8 text-[9px] font-bold uppercase tracking-widest text-white/20">
                    <div>Payment Auth</div>
                    <div>ATO Detection</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🗄️ DATA, MULTI-TENANT & 🔐 SECURITY */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  t: "Reliable Data Foundations.", 
                  d: "Durable, production-ready storage layers for transactional integrity and operational analytics.", 
                  i: <Database />,
                  l: ["Audit Persistence", "Low-latency lookups", "Event persistence"]
                },
                { 
                  t: "Built for Multi-Tenancy.", 
                  d: "Strict organization-based isolation ensuring secure access boundaries for every customer.", 
                  i: <Users />,
                  l: ["Tenant Isolation", "Aware Scoring", "Org-specific rules"]
                },
                { 
                  t: "Secure by Design.", 
                  d: "Every architectural layer is reinforced with enterprise security controls and auditability.", 
                  i: <ShieldCheck />,
                  l: ["RBAC Access", "Audit Logging", "Best-practice encryption"]
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

        {/* 📈 SCALABILITY & RELIABILITY */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 bg-neutral-900 border border-white/5 rounded-[100px] p-12 lg:p-32 text-white overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <Cloud className="w-64 h-64 absolute bottom-0 right-0 p-12 text-white opacity-5 translate-y-1/2 translate-x-1/2" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Ready to Scale.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense is designed to handle thousands of transactions per second across a global multi-region environment.</p>
                    <div className="space-y-6">
                       {[
                         { l: "High Throughput", d: "Designed for intensive workloads." },
                         { l: "Operational Visibility", d: "Full health-checks and error tracking." },
                         { l: "Structured Monitoring", d: "Audit-ready logs and metrics." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-6 items-center">
                            <div className="w-2 h-2 bg-brand-lime rounded-full" />
                            <div>
                               <h5 className="font-bold text-white text-xs uppercase mb-1 tracking-tight">{it.l}</h5>
                               <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 font-manrope italic text-center">
                    {[
                      { v: "99.99%", l: "Target Availability" },
                      { v: "<35ms", l: "Average Latency" },
                      { v: "100%", l: "Tenant Isolation" },
                      { v: "24/7", l: "Monitoring Hooks" }
                    ].map((stat, i) => (
                      <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[48px] text-center group hover:bg-white/10 transition-all">
                         <div className="text-5xl font-black italic tracking-tighter text-brand-lime mb-2">{stat.v}</div>
                         <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.l}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">See the Platform <br />in Action.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Explore how our architecture can scale your fraud operations to the next level.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
                      Talk to Sales
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
