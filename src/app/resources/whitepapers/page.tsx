"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  FileText, 
  Download, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Zap,
  Globe,
  Star,
  Search
} from "lucide-react";

const whitepapers = [
  {
    title: "The Future of Real-Time Fraud Detection",
    summary: "How millisecond-latency scoring is replacing batch processing as the standard for financial integrity.",
    date: "March 2026",
    size: "4.2 MB",
    pages: "24",
    featured: true
  },
  {
    title: "Graph Intelligence in Fraud Rings",
    summary: "Detecting coordinated networks through relational mapping and graph-based analysis.",
    date: "February 2026",
    size: "3.8 MB",
    pages: "18"
  },
  {
    title: "AI in Financial Fraud Prevention",
    summary: "Why generative models are the new threat and how to build a defensive AI posture.",
    date: "January 2026",
    size: "5.1 MB",
    pages: "32"
  },
  {
    title: "Scalable Risk Infrastructure for Neobanks",
    summary: "A technical blueprint for scaling fraud operations without compromising user growth.",
    date: "December 2025",
    size: "4.5 MB",
    pages: "28"
  }
];

export default function WhitepapersPage() {
  const featuredWP = whitepapers.find(w => w.featured);
  const remainingWPs = whitepapers.filter(w => !w.featured);

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <FileText className="w-3.5 h-3.5" />
               Deep Sense Research
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Technical <br />
               <span className="text-zinc-300 italic">Whitepapers.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14 italic text-center">
                In-depth research and intelligence into the next generation of financial fraud prevention and detection architectures.
             </p>
          </div>
        </section>

        {/* 2. 🧠 FEATURED WHITEPAPER */}
        {featuredWP && (
          <section className="max-w-[1440px] mx-auto px-8 mb-40">
             <div className="bg-neutral-900 rounded-[100px] p-12 lg:p-32 border border-white/5 relative overflow-hidden group shadow-3xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                   <div className="space-y-12">
                      <div className="flex gap-4 items-center text-brand-lime text-[10px] font-bold uppercase tracking-widest">
                         <Star className="w-4 h-4 fill-brand-lime" />
                         Premium Intelligence
                      </div>
                      <h2 className="text-5xl lg:text-8xl font-bold uppercase leading-none italic text-white tracking-tighter italic">{featuredWP.title}</h2>
                      <p className="text-xl text-white/40 leading-relaxed font-inter italic max-w-lg">{featuredWP.summary}</p>
                      <div className="flex items-center gap-10 text-white/20 text-xs font-bold uppercase tracking-widest">
                         <span className="flex items-center gap-2">PAGES: {featuredWP.pages}</span>
                         <span className="flex items-center gap-2">SIZE: {featuredWP.size}</span>
                      </div>
                      <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all flex items-center gap-4">
                         Download Whitepaper <Download className="w-6 h-6" />
                      </button>
                   </div>
                   <div className="relative group/cover flex justify-center">
                      <div className="w-[300px] lg:w-[450px] aspect-[1/1.414] bg-white rounded-[40px] shadow-3xl p-12 lg:p-20 flex flex-col justify-between group-hover:-rotate-3 transition-transform duration-1000 rotate-2 border-8 border-neutral-800">
                         <div className="space-y-8">
                            <div className="w-16 h-1 bg-brand-lime" />
                            <h3 className="text-4xl lg:text-5xl font-black italic text-neutral-900 tracking-tighter leading-none italic">{featuredWP.title}</h3>
                         </div>
                         <div className="flex justify-between items-end">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Edition <br /> 2026-Q1</div>
                            <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-brand-lime">
                               <Zap className="w-6 h-6" />
                            </div>
                         </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-[-40px] h-[100px] bg-neutral-900 blur-3xl opacity-50" />
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* 3. 📚 LIST */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <h3 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope italic underline decoration-zinc-100 decoration-8 underline-offset-16 italic text-neutral-900">Research Archive.</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {remainingWPs.map((wp, i) => (
                <div key={i} className="group p-12 bg-zinc-50 border border-gray-100 rounded-[72px] hover:bg-white hover:shadow-3xl transition-all shadow-sm border-b-4 border-b-transparent hover:border-b-brand-lime relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5 scale-0 group-hover:scale-100 transition-transform duration-1000">
                      <Download className="w-16 h-16 text-neutral-900" />
                   </div>
                   <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                         <span>{wp.date}</span>
                         <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5" /> PDF</span>
                      </div>
                      <h4 className="text-3xl font-bold italic uppercase tracking-tight text-neutral-900 leading-tight italic group-hover:text-brand-lime transition-colors">{wp.title}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{wp.summary}</p>
                      <div className="flex items-center gap-6 pt-6 border-t border-zinc-100 group-hover:border-brand-lime/20 transition-all font-bold text-[10px] uppercase tracking-widest text-zinc-300">
                         <span>{wp.pages} PAGES</span>
                         <span>{wp.size}</span>
                      </div>
                      <button className="w-full py-6 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-lime hover:text-neutral-900 transition-all italic">
                         Download Now
                         <Download className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 📣 CTA */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center italic">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">The Future of <br /><span className="text-white/20">Security.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white italic">Download our research pieces to gain a competitive edge in your risk strategy.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope group-hover:bg-white group-hover:text-black">
                      Download Whitepaper
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl font-manrope">
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
