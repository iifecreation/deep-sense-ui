"use client";

import React from "react";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  Globe, 
  CpuIcon, 
  Database, 
  Key, 
  Webhook, 
  Smartphone, 
  FileCode,
  CheckCircle2,
  Copy,
  ChevronRight,
  Server,
  Cloud,
  Layout,
  Activity
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function DeveloperHubPage() {
  return (
    <div className="min-h-screen bg-[#050505] font-manrope text-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section - Extreme Technical Aesthetic */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative border-b border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-brand-lime/10 rounded-full blur-[160px] opacity-40 translate-x-1/4 -translate-y-1/4" />
          
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-[0.2em] mb-8 shadow-2xl">
                <Terminal className="w-3.5 h-3.5" />
                <span>Developer Pro-Series</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter uppercase italic">
                Build The <br />
                <span className="text-brand-lime">Intelligence</span> <br />
                of Finance.
              </h1>
              <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-xl mb-12 italic pr-12">
                Deep Sense provides high-performance APIs and SDKs to integrate institutional-grade fraud and AML detection into any application in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
                <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-black">
                   Get API Key
                </button>
                <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all text-lg tracking-tighter uppercase font-black">
                   Read The Docs
                </button>
              </div>
            </div>
            
            {/* Terminal Mockup */}
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-lime/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] transform-gpu hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                  </div>
                  <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest italic font-manrope">ingest_transaction.sh</span>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed text-zinc-300">
                   <div className="flex gap-4 mb-4">
                      <span className="text-zinc-600">1</span>
                      <span className="text-brand-lime italic">curl</span>
                      <span className="text-zinc-400"> -X POST https://api.deepsense.ai/v1/events \</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-zinc-600">2</span>
                      <span className="text-zinc-400">  -H "Authorization: Bearer ds_live_..." \</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-zinc-600">3</span>
                      <span className="text-zinc-400">  -d '{"{"}'</span>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-zinc-600">4</span>
                      <span className="text-zinc-400 pl-4">"type": "payment.authorized",</span>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-zinc-600">5</span>
                      <span className="text-zinc-400 pl-4">"amount": 250000,</span>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-zinc-600">6</span>
                      <span className="text-zinc-400 pl-4 text-brand-lime">"currency": "NGN"</span>
                   </div>
                   <div className="flex gap-4 mb-4">
                      <span className="text-zinc-600">7</span>
                      <span className="text-zinc-400">  {"}"}'</span>
                   </div>
                   <div className="mt-8 border-t border-white/5 pt-6 animate-pulse">
                      <span className="text-brand-lime">{"{"}</span>
                      <span className="text-zinc-400 pl-4 italic">"decision": "APPROVED",</span>
                      <span className="text-zinc-400 pl-4 italic">"score": 0.04</span>
                      <span className="text-brand-lime">{"}"}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Getting Started Grid */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Quickstart", d: "Get up and running in under 5 minutes.", i: <Zap />, h: "/developers/quickstart" },
              { t: "API Reference", d: "Full documentation for all REST endpoints.", i: <BookOpen />, h: "/developers/api-overview" },
              { t: "SDKs", d: "Drop-in libraries for Go, Node, and Python.", i: <Layers />, h: "/developers/sdks" },
              { t: "Webhooks", d: "Real-time event notifications for your back-end.", i: <Webhook />, h: "/developers/webhooks" }
            ].map((card, i) => (
              <a key={i} href={card.h} className="group p-10 bg-[#0A0A0A] border border-white/5 rounded-[40px] hover:border-brand-lime hover:bg-neutral-900 transition-all">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-lime group-hover:text-black transition-all shadow-xl">
                    {React.cloneElement(card.i as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-2xl font-black uppercase italic italic mb-4 tracking-tighter font-manrope">{card.t}</h3>
                <p className="text-zinc-500 text-sm italic font-inter italic leading-relaxed pr-6 group-hover:text-zinc-400 transition-colors">{card.d}</p>
                <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-lime opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 italic">
                  <span>Explore Module</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 3. Core Concepts */}
        <section className="py-32 px-8 bg-neutral-900/30 border-y border-white/5 relative italic">
          <div className="max-w-[1440px] mx-auto">
             <div className="flex flex-col lg:flex-row gap-24 items-start">
                <div className="lg:w-1/3 italic pr-12">
                   <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 tracking-tighter font-manrope underline decoration-brand-lime decoration-4 underline-offset-12 decoration-black/0 group-hover:decoration-brand-lime transition-all">Core Concepts.</h2>
                   <p className="text-zinc-500 text-lg leading-relaxed italic pr-12 font-manrope">Understand the fundamental building blocks of the Deep Sense intelligence engine.</p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 font-manrope italic">
                   {[
                     { t: "Event Ingestion", d: "Direct ingestion of synchronous and asynchronous events via REST.", i: <Database /> },
                     { t: "The Rules Engine", d: "Declarative logic to evaluate institutional and regional risk.", i: <Cpu /> },
                     { t: "Decision Fusion", d: "Combined ML and rule-based decisioning with explainable XAI logs.", i: <Activity /> },
                     { t: "Institutional Graph", d: "Cross-entity resolution identifying hidden relationships in real-time.", i: <Network /> }
                   ].map((concept, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                           {React.cloneElement(concept.i as React.ReactElement, { className: "w-6 h-6" })}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold uppercase italic tracking-tighter mb-2 italic pr-6 leading-tight">{concept.t}</h4>
                           <p className="text-zinc-500 font-inter italic leading-relaxed text-sm pr-12 italic">{concept.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 4. Featured APIs */}
        <section className="py-32 px-8 font-manrope italic overflow-hidden">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
             <h2 className="text-5xl font-black uppercase italic italic mb-20 tracking-tighter font-manrope underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Featured APIs.</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left font-manrope italic">
                {[
                  { t: "Identity Ingestion", d: "POST /v1/identity", i: <Smartphone />, v: "KYC/CDD Sync" },
                  { t: "Transaction Probe", d: "POST /v1/events", i: <Zap />, v: "Real-time Detection" },
                  { t: "Sanctions Search", d: "GET /v1/scr/screening", i: <Search />, v: "Watchlist matching" }
                ].map((api, i) => (
                  <div key={i} className="p-12 bg-[#0A0A0A] border border-white/5 rounded-[48px] hover:border-brand-lime transition-all overflow-hidden relative group">
                     <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-lime/10 transition-colors">
                        {React.cloneElement(api.i as React.ReactElement, { className: "w-32 h-32" })}
                     </div>
                     <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest mb-4 block italic font-manrope underline decoration-brand-lime/30 underline-offset-8">{api.v}</span>
                        <h4 className="text-2xl font-black italic uppercase leading-tight mb-8 font-manrope italic pr-12">{api.t}</h4>
                        <div className="p-5 bg-black rounded-2xl border border-white/10 flex items-center justify-between group shadow-3xl">
                           <code className="text-xs font-mono text-zinc-300 group-hover:text-brand-lime transition-colors">{api.d}</code>
                           <Copy className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. SDK Gallery */}
        <section className="py-32 px-8 bg-[#0A0A0A] border-y border-white/5 italic">
          <div className="max-w-[1440px] mx-auto text-center">
             <h2 className="text-4xl font-black uppercase italic italic mb-20 tracking-tight italic">SDKs for Every Stack.</h2>
             <div className="flex flex-wrap justify-center gap-8">
                {[
                  { n: "Golang", v: "v1.4.2" },
                  { n: "Node.js", v: "v2.1.0" },
                  { n: "Python", v: "v1.3.1" },
                  { n: "Ruby", v: "v0.9.0" }
                ].map((sdk, i) => (
                  <div key={i} className="px-12 py-10 bg-black border border-white/10 rounded-[32px] flex flex-col items-center gap-4 hover:border-brand-lime transition-all group scale-100 hover:scale-105 active:scale-95 duration-500">
                     <Layout className="w-8 h-8 text-zinc-500 group-hover:text-brand-lime transition-colors" />
                     <span className="text-xl font-black italic uppercase italic">{sdk.n}</span>
                     <span className="text-[9px] font-black tracking-widest text-zinc-600 uppercase italic underline underline-offset-4 decoration-white/10">{sdk.v}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Technical Specs */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-black font-manrope text-white mb-10 tracking-[0.05] uppercase italic pr-12 leading-tight">Institutional Performance.</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-manrope italic">
                    {[
                      { t: "150ms", l: "Average End-to-End Latency" },
                      { t: "100k+", l: "Concurrent Requests / Sec" },
                      { t: "99.99%", l: "Institutional Uptime SLA" },
                      { t: "Region-Locked", l: "Geographical Data Residency" }
                    ].map((st, i) => (
                      <div key={i} className="flex flex-col gap-1 border-l border-white/10 pl-6 group">
                         <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest italic group-hover:text-brand-lime transition-colors">{st.l}</span>
                         <span className="text-3xl font-black tracking-tight italic group-hover:translate-x-2 transition-transform">{st.t}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 border border-white/5 rounded-[64px] shadow-3xl text-left relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 pointer-events-none transition-all duration-1000 group-hover:opacity-40" />
                 <h3 className="text-2xl font-black italic uppercase italic mb-8 border-b border-white/5 pb-8 italic pr-24">Global Connectivity</h3>
                 <div className="grid grid-cols-1 gap-6 font-manrope italic pr-12">
                    {[
                      { l: "Primary Ingestion", v: "Ingestion API (v1.9.0)", s: "Operational" },
                      { l: "Sanctions Gateway", v: "Oasis Engine (v4.2.1)", s: "Operational" },
                      { l: "Decision Fabric", v: "Decision API (v2.0.4)", s: "Operational" }
                    ].map((svc, i) => (
                      <div key={i} className="flex justify-between items-center group-hover:translate-x-4 transition-transform font-manrope">
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest italic">{svc.l}</span>
                            <span className="text-sm font-black italic leading-tight">{svc.v}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse underline decoration-brand-lime/50 underline-offset-4" />
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic">{svc.s}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 9. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 border border-white/5 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 font-manrope italic" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic italic pr-12 font-manrope">Build The Impossible</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight">
                   Start Building <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Institutional Security.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Get started with our free sandbox environment and integrate world-class fraud and AML intelligence today.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope shadow-2xl">
                     Get API Provider Key
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     API Reference
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
