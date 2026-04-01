"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  ShoppingBag, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle2,
  Tag,
  BarChart3,
  Users,
  Search
} from "lucide-react";

export default function EcommerceSolution() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <ShoppingBag className="w-3.5 h-3.5" />
               E-commerce Fraud Defense
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Maximize Revenue, <br />
               <span className="text-zinc-300 italic">Minimize Friction.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense protects your checkout flow from fraudulent transactions and promo abuse, ensuring genuine customers enjoy a seamless experience.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Explore Solutions
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. THE PROBLEM (ECOMMERCE CHALLENGES) */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">The Cart Gap.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">E-commerce platforms lose billions to professional fraud rings and deceptive customers who exploit loyalty programs and shipping policies.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Promo Abuse", d: "Coordinated exploitation of generic discount codes." },
                      { l: "Friendly Fraud", d: "Legitimate customers filing false chargebacks." },
                      { l: "Account Takeover", d: "Hijacking loyalty points and saved payment methods." },
                      { l: "Resale Bots", d: "Automated scraping and hoarding of limited inventory." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1 italic">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                    <p className="text-xl font-bold italic text-white leading-relaxed">“Differentiating between a loyal customer and a sophisticated bot is the true challenge of e-commerce.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <Tag className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">The Commerce Layer.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense analyzes behavioral signals to ensure every discount goes to a real person.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Behavior Intel", i: <Users /> },
                      { l: "Device Scoring", i: <Zap /> },
                      { l: "Pattern Match", i: <Search /> },
                      { l: "Risk Signals", i: <BarChart3 /> }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-brand-lime/20 transition-all group/it">
                         <div className="text-brand-lime mb-4 group-hover/it:scale-110 transition-transform">{it.i}</div>
                         <h6 className="text-[10px] font-bold uppercase tracking-widest text-white italic">{it.l}</h6>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. KEY CAPABILITIES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16 text-center mx-auto">E-commerce Intel.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Specific solutions designed to protect the retail and marketplace ecosystem.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Promo Protection", d: "Block multi-accounting and recycled device abuse.", i: <Tag /> },
                   { l: "Friendly Fraud Defense", d: "Analyze buyer history and behavioral markers.", i: <Shield /> },
                   { l: "Checkout Shield", d: "Prevent card testing and automated purchases.", i: <CheckCircle2 /> },
                   { l: "Resell Bot Block", d: "Stop automated scripts from draining inventory.", i: <ShoppingBag /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.l}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. PERFORMANCE METRICS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 text-center text-neutral-900">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto">Commerce Results.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { v: "25%", l: "Increase in Approval Rate", i: <TrendingUp /> },
                   { v: "85%", l: "Reduction in Promo Abuse", i: <Tag /> },
                   { v: "<40ms", l: "Average Decision Time", i: <Zap /> }
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
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope text-center">Protect Your <br /><span className="text-white/20">Storefront.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Experience the full power of Deep Sense for your e-commerce ecosystem.</p>
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
