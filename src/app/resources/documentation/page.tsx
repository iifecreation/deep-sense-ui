"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Book, 
  Terminal, 
  Zap, 
  Key, 
  Shield, 
  Layers, 
  Activity, 
  History,
  ArrowRight,
  Search,
  CodeXml,
  ChevronRight,
  Database
} from "lucide-react";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-50 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Book className="w-3.5 h-3.5" />
               Knowledge Base
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Documentation <br />
               <span className="text-zinc-300 italic">Core Stack.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Full-spectrum technical guides, API references, and integration blueprints designed for high-performance fintech engineering teams.
             </p>
             <div className="relative max-w-2xl mx-auto">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
               <input 
                 type="text" 
                 placeholder="Search the documentation..."
                 className="w-full pl-16 pr-8 py-7 bg-zinc-50 border border-gray-100 rounded-full text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brand-lime/20 transition-all italic shadow-sm"
               />
             </div>
          </div>
        </section>

        {/* 2. 🚀 QUICK START */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <div className="bg-neutral-900 rounded-[100px] p-12 lg:p-24 relative overflow-hidden border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold text-brand-lime italic uppercase tracking-tighter leading-none font-manrope">Quick Start.</h2>
                    <p className="text-white/40 text-sm font-inter italic max-w-lg italic">The fastest path to millisecond-latency fraud detection. Integrate our core scoring engine in under 10 minutes.</p>
                    <div className="space-y-4">
                       {[
                         { t: "Retrieve your API Key", d: "Generate production or sandbox keys in the dash." },
                         { t: "Config Endpoint", d: "Point your SDK to our high-performance edge." },
                         { t: "Send First Request", d: "Standard JSON payload for instant risk scoring." }
                       ].map((step, i) => (
                         <div key={i} className="flex gap-8 group">
                            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xs font-bold text-white group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">{i+1}</div>
                            <div>
                               <h5 className="font-bold text-white uppercase text-xs mb-1 mb-2">{step.t}</h5>
                               <p className="text-[10px] text-white/20 font-inter italic">{step.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="px-12 py-6 bg-white text-neutral-900 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-3">
                       Read Integration Guide
                       <Zap className="w-5 h-5 text-brand-lime" />
                    </button>
                 </div>

                 <div className="bg-black/50 border border-white/5 p-12 rounded-[64px] font-mono text-[10px] text-white/50 space-y-6">
                    <div className="flex justify-between items-center opacity-50 border-b border-white/5 pb-4">
                       <span className="flex items-center gap-2 italic">POST /v1/score</span>
                       <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded italic">EST: 12ms</span>
                    </div>
                    <pre className="text-brand-lime leading-relaxed">
{`{
  "user_id": "usr_7721",
  "amount": 1000.00,
  "currency": "USD",
  "method": "CARD_TRANS",
  "metadata": {
    "device_fp": "dv_881",
    "ip_address": "8.8.8.8"
  }
}`}
                    </pre>
                    <div className="pt-8 opacity-20 italic"># Initialize SDK and listen for scores</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. 📚 DOC SECTIONS */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "API Reference", d: "Complete specification for ingestion, scoring, and management endpoints.", i: <Terminal /> },
                { t: "Authentication", d: "Enterprise security patterns including Bearer tokens and key rotation.", i: <Key /> },
                { t: "Transactions", d: "Structured data schemas for varying financial asset classes.", i: <Database /> },
                { t: "Scoring Logic", d: "Deep dive into our ML/RL intelligence and rule evaluation strategy.", i: <Zap /> },
                { t: "Webhooks", d: "Configure real-time sync for edge detections and state changes.", i: <CodeXml /> },
                { t: "Error Handling", d: "Standardized HTTP responses and detailed diagnostic troubleshooting.", i: <History /> }
              ].map((it, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group cursor-pointer border-b-4 border-b-transparent hover:border-b-brand-lime">
                   <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                   </div>
                   <h4 className="text-2xl font-bold italic uppercase tracking-tighter mb-4 italic">{it.t}</h4>
                   <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{it.d}</p>
                   <div className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-900 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                      View Section <ChevronRight className="w-4 h-4 text-brand-lime" />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. 📣 CTA */}
        <section className="max-w-[1440px] mx-auto px-8 mb-24 text-center">
           <div className="bg-zinc-50 rounded-[100px] p-24 border border-zinc-100 relative group overflow-hidden italic shadow-3xl">
              <div className="max-w-[800px] mx-auto space-y-12 relative z-10">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-neutral-900 font-manrope">Build with <br /><span className="text-zinc-200">Confidence.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-neutral-500 italic">The tools you need to stop fraud before it starts are right here.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope flex items-center gap-3">
                       View API Docs
                       <ArrowRight className="w-5 h-5 text-brand-lime" />
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl font-manrope">
                       Get API Key
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
