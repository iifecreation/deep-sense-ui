"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Activity, 
  Cpu, 
  BarChart3, 
  ArrowUpRight, 
  Workflow, 
  LayoutGrid, 
  Cloud, 
  Network, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp,
  MessageSquareQuote
} from "lucide-react";

const performanceHighlights = [
  { t: "Millisecond Scoring", d: "Sub-35ms real-time risk evaluation.", i: <Zap /> },
  { t: "Real-Time Decisions", d: "Instant Approve/Block outcomes.", i: <CheckCircle2 /> },
  { t: "Optimized Pipelines", d: "Parallelized feature computation.", i: <Workflow /> },
  { t: "Low Latency Impact", d: "Zero friction for your checkout flow.", i: <Activity /> }
];

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-lime/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
          <div className="max-w-[1100px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Zap className="w-3.5 h-3.5" />
               High-Performance Infrastructure
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Built for Speed. <br />
               <span className="text-zinc-300 italic">Designed to Scale.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[750px] mb-14">
               Deep Sense delivers real-time fraud detection with ultra-low latency and high throughput — built to handle modern financial workloads at any scale.
             </p>
             <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  View Architecture
                </button>
             </div>
          </div>
        </section>

        {/* ⚡ PERFORMANCE OVERVIEW */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Performance You Can Rely On.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense is engineered to process transactions concurrently and instantly, ensuring fraud is detected before it impacts your business reputation.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {performanceHighlights.map((h, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[44px] hover:bg-white/10 transition-all group">
                         <div className="text-brand-lime mb-6 group-hover:scale-110 transition-transform">{h.i}</div>
                         <h5 className="font-bold text-xs uppercase mb-2 tracking-tight italic">{h.t}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{h.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl text-center group overflow-hidden relative backdrop-blur-xl">
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
                 <TrendingUp className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Proven Throughput.</h3>
                 <div className="text-8xl font-black text-brand-lime italic tracking-tighter mb-6">100k+</div>
                 <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Transactions processed / second at peak</p>
              </div>
           </div>
        </section>

        {/* 🚀 LOW LATENCY & 📈 HIGH THROUGHPUT */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 lg:p-24 bg-white border border-gray-100 rounded-[80px] shadow-sm hover:shadow-2xl transition-all relative group overflow-hidden">
                 <Cpu className="w-24 h-24 absolute -top-8 -right-8 text-neutral-900 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 font-manrope">Low Latency Engine</h3>
                 <p className="text-lg text-zinc-500 font-inter italic mb-10 leading-relaxed">Every single transaction is evaluated against thousands of signals in real-time, delivering sub-35ms response stability.</p>
                 <div className="space-y-6">
                    {[
                      "Optimized scoring pipelines",
                      "In-memory caching for warm lookups",
                      "Efficient high-velocity feature computation",
                      "Minimal system processing overhead"
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{it}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 lg:p-24 bg-neutral-900 text-white rounded-[80px] shadow-3xl relative group overflow-hidden border border-white/5">
                 <Network className="w-24 h-24 absolute -bottom-8 -left-8 text-brand-lime opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 font-manrope">High Throughput</h3>
                 <p className="text-lg text-white/40 font-inter italic mb-10 leading-relaxed">Deep Sense handles large volumes of transaction metadata without any detection degradation, supported by a massive ingestion layer.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Request Rates", d: "Millions of daily events." },
                      { l: "Concurreny", d: "Parallelized scoring flows." },
                      { l: "Scaling", d: "Horizontal node expansion." },
                      { l: "Ingestion", d: "Asynchronous intake system." }
                    ].map((role, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[40px]">
                         <h5 className="font-bold text-brand-lime uppercase text-[10px] mb-2 tracking-tight italic">{role.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{role.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔄 ASYNC & 🧠 EVENT-DRIVEN */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center text-center lg:text-left">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Optimized Distribution.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px] leading-relaxed">We decouple real-time scoring from heavy background analytics to ensure your user-facing responses remain ultra-fast, always.</p>
                 <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {["Analytical Computations", "Model Updates", "Graph Intelligence", "Alert Delivery"].map((tag, i) => (
                      <span key={i} className="px-6 py-3 bg-neutral-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                 {[
                   { t: "Event-Driven Architecture", d: "Decoupled components for maximum system evolution speed.", i: <Workflow />, color: "text-brand-lime" },
                   { t: "Scalable Workflows", d: "Asynchronous processing for non-blocking analytics.", i: <LayoutGrid />, color: "text-zinc-200" }
                 ].map((b, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className={`w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${b.color}`}>
                         {React.cloneElement(b.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h3 className="text-xl font-bold italic uppercase tracking-tighter mb-8">{b.t}</h3>
                      <p className="text-[11px] text-zinc-400 font-inter leading-relaxed">{b.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🏗️ SCALABLE ARCHITECTURE & 🧪 LOAD HANDLING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 bg-neutral-900 text-white border border-white/5 rounded-[100px] p-12 lg:p-32 overflow-hidden shadow-3xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 font-manrope pointer-events-none" />
              <Cloud className="w-64 h-64 absolute bottom-0 right-0 p-12 text-white opacity-5 translate-y-1/2 translate-x-1/2" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Ready to Scale.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense performs consistently even during high-traffic promotional events or batch ingestion spikes.</p>
                    <div className="space-y-6">
                       {[
                         { l: "Payment Spikes", d: "Handle sales and holiday surges." },
                         { l: "Promotional Events", d: "Zero degradation during flash sales." },
                         { l: "Batch Surges", d: "Scale-out logic for high data ingest." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-6 items-center">
                            <div className="w-2 h-2 bg-brand-lime rounded-full" />
                            <div>
                               <h5 className="font-bold text-white text-[10px] uppercase mb-1">{it.l}</h5>
                               <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Retry Mechanisms", d: "Resilient backend logic." },
                      { l: "Idempotent Processing", d: "Zero duplicate scoring errors." },
                      { l: "Safe Failure Handling", d: "Graceful system degradation." },
                      { l: "No Data Loss", d: "Structured persistence protocols." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[48px] group hover:bg-brand-lime/10 transition-all">
                         <ShieldCheck className="w-6 h-6 text-brand-lime mb-6 group-hover:scale-110 transition-transform" />
                         <h5 className="font-bold text-white text-xs uppercase mb-2 italic tracking-tight">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
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
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Why Performance Matters.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">In modern finance, latency is fraud. See how we comparison against traditional legacy detection systems.</p>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Performance Metric</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-300 italic">Typical Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Real-Time Detection", d: "Yes (Sub-50ms)", s: "Often Delayed / Async" },
                         { c: "Average Latency", d: "<35ms", s: "250ms - 1s+" },
                         { c: "Peak Throughput", d: "100k+ TPS", s: "Limited Scaling" },
                         { c: "System Reliability", d: "99.99%", s: "Variable under load" },
                         { c: "Background Scoping", d: "Yes", s: "Synchronous Overhead" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-white transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-black">
                               <div className="flex items-center gap-3">
                                  <BarChart3 className="w-5 h-5 text-neutral-900" />
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

        {/* 💬 TRUST STATEMENT & 🏭 USE CASES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Enterprise Use Cases.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Strategic infrastructure for the world&apos;s most demanding financial environments.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Payment Processing", d: "Checkout integrity at scale." },
                      { l: "High-Volume Fintech", d: "Global user action monitoring." },
                      { l: "E-commerce Flows", d: "Promo & Inventory protection." },
                      { l: "Banking Transactions", d: "Real-time ledger monitoring." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-5 h-5 bg-neutral-900 text-brand-lime rounded-lg flex items-center justify-center mt-0.5">
                            <ArrowUpRight className="w-3 h-3" />
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic font-manrope">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden group border border-white/5 shadow-3xl">
                 <MessageSquareQuote className="w-24 h-24 text-brand-lime opacity-10 absolute bottom-0 left-0 p-8" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12 font-manrope">System Reliability.</h3>
                 <ul className="space-y-12">
                    {[
                      "We processed thousands of transactions per second without a single latency spike.",
                      "Deep Sense stayed resilient even during our highest holiday traffic peak.",
                      "Milliseconds matter when you are handling millions of dollars in real-time."
                    ].map((quote, i) => (
                      <li key={i} className="flex gap-8 group/quote">
                         <div className="w-1.5 h-12 bg-brand-lime group-hover/quote:h-16 transition-all duration-500" />
                         <p className="text-xl font-manrope italic text-white/60 group-hover/quote:text-white transition-colors">“{quote}”</p>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Scale Your Fraud <br /><span className="opacity-30">Operations.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Performance isn&apos;t just a feature — it&apos;s our foundation.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900 font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10 font-manrope">
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
