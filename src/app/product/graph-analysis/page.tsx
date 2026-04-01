"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Network, 
  Zap, 
  ArrowRight,
  History,
  Layers,
  CheckCircle2,
  Share2,
  Search,
  Users,
  Eye
} from "lucide-react";

export default function GraphAnalysis() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Network className="w-3.5 h-3.5" />
               Network & Graph Intelligence
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Uncover Hidden <br />
               <span className="text-zinc-300 italic">Fraud Networks.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense maps billions of relationships in real-time to detect coordinated fraud rings and entity linking that others miss. Visualize risk like never before.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Explore Graph
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. BEYOND TRANSACTIONS */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Deep Linkage.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Fraudsters rarely act alone. Our graph engine identifies shared devices, IPs, and behavioral markers across thousands of accounts to stop rings in their tracks.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { l: "Entity Linking", d: "Connect disparate data points into a single identity profile.", i: <Users /> },
                      { l: "Ring Detection", d: "Identify clusters of accounts acting in coordination.", i: <Share2 /> },
                      { l: "Path Analysis", d: "Trace funds and signals across complex actor networks.", i: <Zap /> },
                      { l: "Visual Investigation", d: "Interactive graph view for your risk operations team.", i: <Eye /> }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 rounded-[40px] border border-white/5 hover:border-brand-lime/20 transition-all group">
                         <div className="text-brand-lime mb-4 group-hover:scale-110 transition-transform">{it.i}</div>
                         <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-1 italic">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute top-0 right-0 p-12">
                    <Network className="w-40 h-40 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-12 font-manrope">Network Density.</h3>
                 <div className="relative h-64 flex items-center justify-center">
                    {/* Simplified Graph Visual */}
                    <div className="relative w-48 h-48">
                       <div className="absolute inset-0 border-2 border-brand-lime/20 rounded-full animate-pulse" />
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-lime rounded-full shadow-2xl" />
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-lime rounded-full shadow-2xl" />
                       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-brand-lime rounded-full shadow-2xl" />
                       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-brand-lime rounded-full shadow-2xl" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-neutral-900 border border-brand-lime rounded-full flex items-center justify-center z-10">
                             <Users className="w-6 h-6 text-brand-lime" />
                          </div>
                          <div className="absolute w-px h-full bg-brand-lime/40 rotate-45" />
                          <div className="absolute w-px h-full bg-brand-lime/40 -rotate-45" />
                       </div>
                    </div>
                 </div>
                 <div className="mt-12 text-[10px] font-bold uppercase tracking-widest text-white/20 italic text-center">Real-world Ring Cluster: #FR-9422</div>
              </div>
           </div>
        </section>

        {/* 3. KEY FEATURES LIST */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { l: "Sub-Second Traversal", d: "Search across 10B+ edges in less than 200ms.", i: <Zap /> },
                   { l: "Automated Labeling", d: "ML-driven classification of network roles within a ring.", i: <History /> },
                   { l: "API-Integrated", d: "Access full graph context via REST for custom workflows.", i: <Layers /> }
                 ].map((it, i) => (
                   <div key={i} className="space-y-8 p-12 bg-zinc-50 rounded-[64px] border border-gray-100 group hover:bg-neutral-900 transition-all">
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight text-neutral-900 group-hover:text-white transition-all">{it.l}</h4>
                      <p className="text-zinc-500 font-inter leading-relaxed italic group-hover:text-white/40 transition-all">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. PERFORMANCE METRICS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 text-center text-neutral-900">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto">Graph Scale.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { v: "10B+", l: "Relationships Mapped", i: <Search /> },
                   { v: "<200ms", l: "Average Query Latency", i: <Zap /> },
                   { v: "95%", l: "Coordinate Ring Coverage", i: <CheckCircle2 /> }
                 ].map((m, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-xl transition-all">
                      <div className="text-neutral-900 mb-8 flex justify-center">{m.i}</div>
                      <div className="text-6xl font-black text-neutral-900 italic tracking-tighter mb-4">{m.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 italic">{m.l}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Visualize Your <br /><span className="text-white/20">Risk.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Experience the full power of Deep Sense for graph-based fraud investigations.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
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

// Minimal missing component definitions
export {};
