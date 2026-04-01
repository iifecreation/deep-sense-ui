"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  BarChart, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Layers, 
  Zap,
  ChevronRight,
  Target
} from "lucide-react";

const caseStudies = [
  {
    org: "Global Fintech Lead",
    industry: "Payments / Banking",
    problem: "Rising chargeback rates and account takeover attempts on their high-risk digital wallet product.",
    solution: "Integrated Deep Sense real-time scoring and device intelligence across the entire payment pipeline.",
    results: [
      { l: "Reduced Fraud", v: "42%" },
      { l: "Detection Speed", v: "<12ms" },
      { l: "False Positives", v: "-15%" }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    org: "Next-Gen E-Commerce",
    industry: "Consumer Tech",
    problem: "High abandonment due to legacy fraud friction. Needed a silent detection layer for account security.",
    solution: "Switched to Deep Sense's behavioral monitoring API for account logins and checkout flows.",
    results: [
      { l: "Checkout Conversion", v: "+18%" },
      { l: "Blocked Bot Traffic", v: "99.2%" },
      { l: "User Support Volume", v: "-30%" }
    ],
    image: "https://images.unsplash.com/photo-1556742049-ed1f440ea90e?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Target className="w-3.5 h-3.5" />
               Real-World Impact
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Proven <br />
               <span className="text-zinc-300 italic">Fraud Resilience.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14 italic text-center">
                Learn how global leaders across fintech, payments, and consumer tech use Deep Sense to out-detect financial crime.
             </p>
          </div>
        </section>

        {/* 2. 📄 CASE STUDY LIST */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <div className="space-y-40">
              {caseStudies.map((study, i) => (
                <div key={i} className="group relative">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                      <div className="order-2 lg:order-1 space-y-12">
                         <div className="space-y-4">
                            <span className="px-4 py-2 bg-neutral-900 text-brand-lime rounded-full text-[10px] font-bold uppercase tracking-widest">{study.industry}</span>
                            <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight italic text-neutral-900">{study.org}</h2>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                               <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 italic border-l-2 border-zinc-100 pl-4">The Challenge</h5>
                               <p className="text-sm text-zinc-500 font-inter leading-relaxed italic">{study.problem}</p>
                            </div>
                            <div className="space-y-4">
                               <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 italic border-l-2 border-brand-lime pl-4">The Solution</h5>
                               <p className="text-sm text-zinc-500 font-inter leading-relaxed italic">{study.solution}</p>
                            </div>
                         </div>

                         <div className="bg-neutral-900 rounded-[64px] p-12 text-white relative overflow-hidden group/card shadow-3xl">
                            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                            <div className="relative z-10 grid grid-cols-1 md:row gap-12 justify-between">
                               {study.results.map((res, j) => (
                                 <div key={j} className="text-center md:text-left">
                                    <div className="text-4xl lg:text-6xl font-black italic text-brand-lime mb-2 italic tracking-tighter">{res.v}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 italic">{res.l}</div>
                                 </div>
                               ))}
                            </div>
                         </div>
                         <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:gap-8 transition-all italic">
                            Read Full Case Study <ArrowRight className="w-5 h-5 text-brand-lime" />
                         </button>
                      </div>

                      <div className="order-1 lg:order-2 relative h-[500px] lg:h-[800px] rounded-[100px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-1000 shadow-2xl">
                         <img 
                           src={study.image} 
                           alt={study.org} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                         />
                         <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
                         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. 📣 CTA */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center italic">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-neutral-900/5 shadow-3xl">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors duration-1000 group-hover:text-white">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase font-manrope">Stop Fraud <br />Scaling With You.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Real results are just an integration away. Let&apos;s build your detection pipeline.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope group-hover:bg-white group-hover:text-black hover:bg-brand-lime transition-all">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl font-manrope group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
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
