"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  ShieldCheck, 
  Layers, 
  Activity, 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Rocket,
  Globe,
  Brain
} from "lucide-react";

const values = [
  { 
    t: "Intelligence Over Complexity", 
    d: "We build systems that are powerful but easy to understand and use.",
    i: <Brain />
  },
  { 
    t: "Real-Time by Default", 
    d: "Fraud detection should happen instantly, not after the fact.",
    i: <Zap />
  },
  { 
    t: "Trust and Transparency", 
    d: "Every decision should be explainable and auditable.",
    i: <ShieldCheck />
  },
  { 
    t: "Built for Scale", 
    d: "We design systems that grow with our customers.",
    i: <Layers />
  },
  { 
    t: "Customer-Centric Thinking", 
    d: "We solve real problems for real teams.",
    i: <Users />
  }
];

// Fixing Brain import

export default function MissionValuesPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Heart className="w-3.5 h-3.5" />
               Our Core Mission
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Driven to Stop <br />
               <span className="text-zinc-300 italic">Fraud at Scale.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14 underline decoration-zinc-100 decoration-4 underline-offset-8">
               We believe fraud detection should be intelligent, real-time, and accessible to every modern business.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 font-manrope italic">
                  Request Demo
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl font-manrope italic">
                  Contact Us
                </button>
             </div>
          </div>
        </section>

        {/* 2. 🎯 OUR MISSION & 3. 👁️ OUR VISION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl mt-24">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <div className="inline-flex items-center gap-4 text-brand-lime uppercase text-[12px] font-black tracking-[0.3em]">
                    <Target className="w-5 h-5" />
                    Our Purpose
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime/30 decoration-8 underline-offset-16 font-manrope">The Mission.</h2>
                 <p className="text-2xl text-white/60 font-manrope italic max-w-[600px] leading-relaxed">To empower organizations with real-time fraud intelligence that protects their systems, users, and revenue — without slowing innovation.</p>
                 <div className="flex gap-12">
                    <div>
                       <div className="text-4xl font-black text-brand-lime italic tracking-tighter mb-2">10B+</div>
                       <div className="text-[10px] font-bold uppercase text-white/30 tracking-widest italic">Transactions Monitored Yearly</div>
                    </div>
                    <div>
                       <div className="text-4xl font-black text-brand-lime italic tracking-tighter mb-2">99.9%</div>
                       <div className="text-[10px] font-bold uppercase text-white/30 tracking-widest italic font-manrope">Detection Accuracy Rate</div>
                    </div>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl text-center group overflow-hidden relative backdrop-blur-xl">
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
                 <Eye className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8 font-manrope">The Vision.</h3>
                 <p className="text-white/40 text-xl font-manrope italic mb-10 leading-relaxed">We envision a world where fraud is detected instantly, systems are resilient by design, and businesses can scale without fear of financial crime.</p>
              </div>
           </div>
        </section>

        {/* 4. 💡 WHY IT MATTERS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Why This Matters.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Modern businesses are built on trust. As fraud evolves, the systems protecting that trust must evolve faster.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { l: "Rapid Evolution", d: "Fraud is evolving faster than traditional systems.", i: <Zap /> },
                   { l: "Smarter Protection", d: "Businesses need intelligence, not just rules.", i: <Brain /> },
                   { l: "Critical Trust", d: "Trust is the foundational asset of digital systems.", i: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center">
                      <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4 font-manrope">{it.l}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed font-manrope">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. 🧠 OUR VALUES */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Core Values.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Our values define how we build, how we operate, and how we serve our customers every day.</p>
                 <div className="grid grid-cols-1 gap-6">
                    {values.map((v, i) => (
                      <div key={i} className="flex gap-6 items-center p-6 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                         <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime group-hover:scale-110 transition-transform">
                            {React.cloneElement(v.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 text-xs uppercase italic tracking-widest font-manrope">{v.t}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter font-manrope">{v.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <Rocket className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform font-manrope" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">How We Build.</h3>
                 <div className="space-y-12">
                    {[
                      { l: "Real-World Impact", d: "A focus on solved problems, not just cool tech." },
                      { l: "Continuous Iteration", d: "Shipping better fraud signals every single day." },
                      { l: "Strong Engineering", d: "Architecting for billion-request monthly scale." },
                      { l: "Pragmatic Innovation", d: "Using AI where it adds actual value, not hype." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-1 h-12 bg-brand-lime/10 group-hover/item:bg-brand-lime transition-all duration-500 font-manrope" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight italic font-manrope">{it.l}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px]">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 6. 🚀 HOW WE WORK (SUMMARY PILLS) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { l: "Global Impact", d: "Protecting ecosystems worldwide.", i: <Globe /> },
                { l: "Scalable Core", d: "Built for billion-transaction scale.", i: <Layers /> },
                { l: "Continuous Support", d: "Always-on fraud operations.", i: <Activity /> },
                { l: "Community First", d: "Growing together with our clients.", i: <Users /> }
              ].map((it, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center">
                   <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}</div>
                   <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest italic font-manrope">{it.l}</h5>
                   <p className="text-[10px] text-zinc-400 font-inter mt-2 text-center uppercase tracking-widest">{it.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 7. 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Join the <br /><span className="text-white/20">Mission.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Build the future of smarter, real-time fraud detection with us.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
                      Contact Us
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
