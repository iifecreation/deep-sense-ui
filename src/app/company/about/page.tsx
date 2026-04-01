"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Target, 
  Eye, 
  TrendingUp, 
  Globe, 
  Lock, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle,
  Heart,
  Lightbulb,
  Building2,
  Workflow
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[950px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Users className="w-3.5 h-3.5" />
               Our Story & Vision
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Building the Future of <br />
               <span className="text-zinc-300 italic">Fraud Intelligence.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
               Deep Sense is on a mission to help businesses detect, understand, and prevent fraud in real time using intelligent, scalable technology that doesn&apos;t slow down innovation.
             </p>
          </div>
        </section>

        {/* 💡 MISSION & 👁️ VISION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,247,1,0.03)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div className="p-12 lg:p-24 bg-white/5 border border-white/10 rounded-[80px] group hover:bg-white/10 transition-all text-center">
                 <Target className="w-16 h-16 text-brand-lime mx-auto mb-10 group-hover:scale-110 transition-transform" />
                 <h2 className="text-4xl font-bold uppercase italic tracking-tight mb-8">Our Mission</h2>
                 <p className="text-lg text-white/40 font-inter italic max-w-[400px] mx-auto leading-relaxed">To empower organizations with real-time fraud intelligence that protects their systems, users, and revenue.</p>
              </div>
              <div className="p-12 lg:p-24 bg-white/5 border border-white/10 rounded-[80px] group hover:bg-white/10 transition-all text-center">
                 <Eye className="w-16 h-16 text-emerald-400 mx-auto mb-10 group-hover:scale-110 transition-transform" />
                 <h2 className="text-4xl font-bold uppercase italic tracking-tight mb-8">Our Vision</h2>
                 <p className="text-lg text-white/40 font-inter italic max-w-[400px] mx-auto leading-relaxed">We believe fraud detection should be real-time, intelligent, scalable, and accessible to every modern business.</p>
              </div>
           </div>
        </section>

        {/* 🚨 WHY WE BUILT DEEP SENSE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tight uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16">Why Deep Sense <br />Exists.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Fraud systems today are often slow, reactive, and difficult to integrate. Deep Sense was built to change that by combining AI, real-time processing, and graph intelligence into one unified platform.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Reactive Systems", d: "Legacy tools only see after the fact." },
                      { l: "Integration Friction", d: "Months of dev work just to go live." },
                      { l: "Static Rules", d: "Easy for modern fraudsters to bypass." },
                      { l: "Disconnected patterns", d: "Inability to see network-based fraud." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <AlertTriangle className="w-4 h-4 text-brand-lime mt-1" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-zinc-50 p-12 lg:p-24 rounded-[80px] border border-gray-100 relative group overflow-hidden">
                 <TrendingUp className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-200 opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:rotate-12 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight">Changing the Paradigm.</h3>
                    <p className="text-zinc-400 text-lg italic pr-12 font-inter leading-relaxed">We focus on building a future where fraud detection is pro-active, learning from every signal to stay ahead of coordinated attacks.</p>
                    <div className="flex gap-4 p-4 bg-white rounded-full border border-gray-100 shadow-sm w-fit">
                       <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Real-time Core Active</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧠 WHAT MAKES US DIFFERENT & 🛠️ OUR APPROACH */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                 <div className="p-12 lg:p-16 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group col-span-1 md:col-span-2">
                    <h2 className="text-4xl lg:text-5xl font-bold uppercase italic tracking-tighter mb-12">The Deep Sense Edge.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 font-bold uppercase tracking-widest text-xs">
                       {[
                         "Real-time fraud detection at scale",
                         "Hybrid AI + Rules engine approach",
                         "Graph-based connection intelligence",
                         "Developer-first REST architecture",
                         "Built for Modern Fintech compliance"
                       ].map((p, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <Zap className="w-4 h-4 text-brand-lime" />
                            {p}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="p-12 lg:p-16 bg-neutral-900 border border-white/5 rounded-[56px] shadow-3xl group text-white relative overflow-hidden">
                    <Workflow className="w-40 h-40 absolute top-0 right-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <h2 className="text-3xl font-bold uppercase italic tracking-tight mb-10">How We Build.</h2>
                    <ul className="space-y-6 text-white/40 text-[11px] font-bold uppercase tracking-widest italic">
                       <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime" /> Simplicity in integration</li>
                       <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime" /> Scalability in architecture</li>
                       <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime" /> Clarity in decision-making</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* 🌍 WHO WE SERVE */}
        <section className="py-40">
           <div className="max-w-[800px] mx-auto text-center mb-32">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope">Who We Serve.</h2>
              <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Deep Sense is built to support the systems that move the global economy, providing mission-critical fraud intelligence at scale.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Banks", d: "Legacy institution modernization.", i: <Building2 /> },
                { t: "Fintech Platforms", d: "Growth without compromise.", i: <Lightbulb /> },
                { t: "Payment Providers", d: "High-volume secure delivery.", i: <Globe /> },
                { t: "E-commerce", d: "Conversion-first protection.", i: <Zap /> }
              ].map((s, i) => (
                <div key={i} className="p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-neutral-900 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(s.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-xl font-bold italic uppercase tracking-tight mb-2 font-manrope">{s.t}</h4>
                   <p className="text-[11px] text-zinc-400 font-inter uppercase tracking-widest">{s.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 🔐 TRUST & SECURITY */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16">Built with <br />Trust in Mind.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Every byte of information we process is handled with enterprise rigor and absolute transparency.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Secure Architecture", d: "Engineered for 99.99% reliability." },
                      { l: "Data Protection", d: "Encryption at rest and in transit." },
                      { l: "Full Auditability", d: "Trace every action in your tenant." },
                      { l: "Enterprise Design", d: "Built for complex multi-tenant orgs." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <ShieldCheck className="w-4 h-4 text-brand-lime mt-1" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-12 lg:p-24 rounded-[80px] shadow-3xl text-center group relative overflow-hidden backdrop-blur-xl">
                 <Lock className="w-40 h-40 absolute top-0 left-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Secure by Default</h3>
                 <p className="text-white/40 text-sm italic max-w-[350px] mx-auto mb-10 leading-relaxed">Deep Sense is built to the highest security standards, ensuring your data isolated and protected across every layer of the platform.</p>
                 <div className="flex gap-4 justify-center">
                    <div className="px-6 py-3 bg-white/5 rounded-2xl text-[9px] font-bold uppercase tracking-widest border border-white/5 hover:bg-brand-lime/10 hover:text-brand-lime transition-all cursor-default">SOC2 Ready</div>
                    <div className="px-6 py-3 bg-white/5 rounded-2xl text-[9px] font-bold uppercase tracking-widest border border-white/5 hover:bg-brand-lime/10 hover:text-brand-lime transition-all cursor-default">PCI Compliant</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🚀 OUR JOURNEY */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope">Our Journey.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">From a simple technical idea to a complete fraud intelligence platform.</p>
              </div>

              <div className="relative">
                 <div className="absolute top-0 bottom-0 left-[21px] md:left-1/2 w-px bg-gray-100" />
                 
                 {[
                   { y: "2024", t: "The Thesis", d: "Identifying the gap between legacy rules and modern AI fraud detection.", i: <Lightbulb /> },
                   { y: "2025", t: "Real-time Core", d: "Engineering the infrastructure capable of scoring thousands of transactions in < 35ms.", i: <Zap /> },
                   { y: "2026", t: "Deep Sense Launch", d: "Unifying AI, Graph, and Rules engine into a single intelligent platform.", i: <Globe /> }
                 ].map((step, i) => (
                   <div key={i} className={`flex mb-24 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="flex-1 md:w-1/2" />
                      <div className="z-10 absolute left-0 md:left-1/2 -translate-x-[22px] md:-translate-x-1/2 w-11 h-11 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-neutral-900 shadow-xl group hover:bg-neutral-900 hover:text-brand-lime transition-all duration-500 hover:scale-110">
                         {React.cloneElement(step.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                      </div>
                      <div className="flex-1 md:w-1/2 px-10 md:px-20 text-left">
                         <span className="text-3xl font-black italic tracking-tighter text-brand-lime drop-shadow-xl">{step.y}</span>
                         <h4 className="text-2xl font-bold uppercase italic tracking-tight mb-4">{step.t}</h4>
                         <p className="text-lg text-zinc-400 font-inter leading-relaxed max-w-[400px] italic">{step.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📈 VALUES */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                { t: "Trust & Transparency", d: "Clear communication, clear data, clear decisions.", i: <ShieldCheck /> },
                { t: "Innovation Through Intelligence", d: "Pushing the boundaries of what's possible with AI.", i: <Cpu /> },
                { t: "Speed & Reliability", d: "Always fast, always available, always accurate.", i: <Zap /> },
                { t: "Customer-First Thinking", d: "Solving real fraud problems for real teams.", i: <Heart /> }
              ].map((v, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[48px] hover:shadow-xl transition-all group flex flex-col items-start gap-8">
                   <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                      {React.cloneElement(v.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                   </div>
                   <div>
                      <h4 className="text-lg font-bold uppercase italic tracking-tight mb-2">{v.t}</h4>
                      <p className="text-[10px] text-zinc-400 font-inter leading-relaxed max-w-[180px]">{v.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-40">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-bottom pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-black duration-1000">
                 <h2 className="text-4xl md:text-9xl font-bold tracking-tighter leading-none italic uppercase">Join the Future.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-inter italic">Help us build the smartest fraud detection platform in the world.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-neutral-900 group-hover:text-white">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white/10 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:border-transparent">
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
