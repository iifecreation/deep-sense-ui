"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Shield, 
  Activity, 
  ArrowRight,
  TrendingUp,
  History,
  Lock,
  Layers,
  CheckCircle2,
  Users,
  Compass,
  Cpu,
  Mail
} from "lucide-react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Users className="w-3.5 h-3.5" />
               Join the Mission
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Build the Future <br />
               <span className="text-zinc-300 italic">of Intelligence.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                We are creating technology that protects businesses and users in real-time. Join us in the fight against sophisticated financial crime.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  View Culture
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Follow Our Journey
                </button>
             </div>
          </div>
        </section>

        {/* 2. 💡 WHY WORK WITH US */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Why Deep Sense.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">We solve mission-critical problems with high-performance code, providing our team with the autonomy and ownership to drive real impact.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Real-World Problems", d: "Stop coordinated fraud rings and protect billions in transactions." },
                      { l: "Impactful Systems", d: "Build low-latency architecture that moves at the speed of finance." },
                      { l: "Modern Tech Stack", d: "Leverage Next.js, Rust, and advanced ML to solve risk challenges." },
                      { l: "Autonomy & Ownership", d: "High trust environment where you own your vertical from end-to-end." }
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
                    <p className="text-xl font-bold italic text-white leading-relaxed">“Engineering excellence is the foundation of institutional trust.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute top-0 right-0 p-12">
                    <Cpu className="w-40 h-40 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">The Stack.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed text-white">We use cutting-edge technologies to build resilient, distributed systems.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Rust Engine", i: <Zap /> },
                      { l: "ML Ops", i: <TrendingUp /> },
                      { l: "Dist Systems", i: <Layers /> },
                      { l: "Sec by Design", i: <Lock /> }
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

        {/* 3. 🧠 WHAT WE VALUE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center italic">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16 max-w-[800px] mx-auto text-neutral-900 text-center">Core Valuations.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Problem-Solving", d: "A mindset focused on finding elegant solutions to complex risks.", i: <Compass /> },
                   { l: "Ownership", d: "End-to-end accountability for the systems you build.", i: <Shield /> },
                   { l: "Curiosity", d: "A drive for continuous learning and technical expansion.", i: <Activity /> },
                   { l: "Quality & Impact", d: "Build code that matters and stands the test of production.", i: <CheckCircle2 /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group">
                      <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform mx-auto">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.l}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. ⚠️ CURRENT STATUS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 text-center italic">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/5 rounded-full text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-10">
                 <History className="w-3.5 h-3.5" />
                 Current Enrollment
              </div>
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto text-center">We&apos;re Not Hiring <br /> Right Now.</h2>
              <p className="text-xl text-zinc-500 font-inter max-w-[600px] mx-auto mb-16 italic text-center">Deep Sense is currently not hiring, but we’re always looking to connect with exceptional talent for future expansion.</p>
              
              <div className="bg-white p-12 rounded-[56px] border border-gray-100 max-w-[500px] mx-auto shadow-sm group hover:shadow-xl transition-all">
                 <h5 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 mb-6 italic">Stay in Touch</h5>
                 <div className="flex items-center justify-center gap-3 text-2xl font-bold text-neutral-900 italic tracking-tight">
                    <Mail className="w-6 h-6 text-brand-lime" />
                    careers@deepsense.ai
                 </div>
              </div>
           </div>
        </section>

        {/* 6. 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center italic">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Join the <br /><span className="text-white/20">Movement.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Interested in working with us? Let&apos;s build the future of financial integrity together.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope">
                      Contact Us
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope flex items-center gap-3 justify-center">
                      <LinkedinIcon className="w-6 h-6 text-brand-lime fill-brand-lime/10" />
                      Follow Us
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

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export {};
