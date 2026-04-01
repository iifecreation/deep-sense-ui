"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  Users, 
  Zap,
  Globe
} from "lucide-react";

const guides = [
  {
    title: "How to Detect Transaction Fraud",
    summary: "Discover the core indicators of fraudulent payment patterns and how to verify high-risk transactions in real-time without adding friction.",
    readTime: "12 min read",
    category: "Transactions",
    featured: true
  },
  {
    title: "Preventing Account Takeover (ATO)",
    summary: "A comprehensive guide to identifying stolen credentials and unusual login patterns across your entire user base.",
    readTime: "15 min read",
    category: "Security"
  },
  {
    title: "Building a Fraud Detection System",
    summary: "Whether you're building in-house or using a platform, these are the architectural best practices your team must follow.",
    readTime: "25 min read",
    category: "Architecture"
  },
  {
    title: "Best Practices for Modern Fraud Teams",
    summary: "How to structure your risk operations, prioritize alerts, and leverage AI/ML to increase efficiency and reduce burnout.",
    readTime: "10 min read",
    category: "Operations"
  }
];

export default function GuidesPage() {
  const featuredGuide = guides.find(g => g.featured);
  const remainingGuides = guides.filter(g => !g.featured);

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <BookOpen className="w-3.5 h-3.5" />
               Knowledge Base
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Fraud Detection <br />
               <span className="text-zinc-300 italic">Practical Guides.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14 italic">
                Master the complexities of financial crime with our in-depth practical guides designed for risk teams, operations, and leadership.
             </p>
          </div>
        </section>

        {/* 2. 🧠 FEATURED GUIDE */}
        {featuredGuide && (
          <section className="max-w-[1440px] mx-auto px-8 mb-40 relative group">
             <div className="bg-neutral-900 rounded-[100px] p-12 lg:p-32 border border-white/5 shadow-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 p-32 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                   <ShieldCheck className="w-64 h-64 text-brand-lime" />
                </div>
                <div className="relative z-10 max-w-[800px] space-y-12">
                   <div className="flex items-center gap-4 text-brand-lime font-bold uppercase tracking-widest text-[10px]">
                      <Zap className="w-4 h-4 fill-brand-lime" />
                      Featured Masterclass
                   </div>
                   <h2 className="text-5xl lg:text-9xl font-bold uppercase leading-none italic text-white tracking-tighter italic">{featuredGuide.title}</h2>
                   <p className="text-xl lg:text-2xl text-white/50 leading-relaxed font-inter italic">{featuredGuide.summary}</p>
                   <div className="flex flex-col sm:row gap-8 items-start sm:items-center">
                      <div className="flex items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                         <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredGuide.readTime}</span>
                         <span className="px-3 py-1 bg-white/5 rounded-full">{featuredGuide.category}</span>
                      </div>
                      <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all flex items-center gap-3">
                         Read Guide <ArrowRight className="w-6 h-6" />
                      </button>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* 3. 📚 LIST */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <h3 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope italic underline decoration-zinc-100 decoration-8 underline-offset-16 italic text-neutral-900">The Library.</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {remainingGuides.map((guide, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all h-full flex flex-col justify-between border-b-4 border-b-transparent hover:border-b-brand-lime">
                      <div className="space-y-8">
                         <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                            <span className="px-3 py-1 bg-zinc-50 rounded-full text-neutral-900">{guide.category}</span>
                            <span className="flex items-center gap-2 text-zinc-300"><Clock className="w-4 h-4" /> {guide.readTime}</span>
                         </div>
                         <h4 className="text-3xl font-bold italic uppercase tracking-tight text-neutral-900 leading-tight italic group-hover:text-brand-lime transition-colors">{guide.title}</h4>
                         <p className="text-base text-zinc-400 font-inter leading-relaxed italic">{guide.summary}</p>
                      </div>
                      <div className="pt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-900 opacity-30 group-hover:opacity-100 transition-all group-hover:translate-x-3 italic">
                         Enter Guide <ArrowRight className="w-4 h-4 text-brand-lime" />
                      </div>
                   </div>
                </div>
              ))}
              {/* Extra placeholder for future growth */}
              <div className="p-12 bg-zinc-50 border border-zinc-100/50 rounded-[72px] flex items-center justify-center text-zinc-300 border-dashed border-2 group hover:border-brand-lime/20 cursor-default">
                 <div className="text-center italic group-hover:scale-105 transition-transform">
                    <Globe className="w-12 h-12 mx-auto mb-6 opacity-20" />
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Expanding Monthly</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center italic">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Stop Fraud <br /><span className="text-white/20">Now.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white italic">Leverage our expertise to build more resilient fraud prevention pipelines.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl font-manrope">
                      Explore Platform
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
