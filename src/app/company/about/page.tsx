"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  Globe, 
  Users, 
  Building, 
  Lock, 
  Award, 
  History, 
  Heart,
  Scale,
  Search,
  Activity,
  Briefcase
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/5 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Building className="w-3.5 h-3.5" />
              <span>Institutional Mission Control</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Securing The <br />Future of <span className="text-zinc-400">Finance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense is the intelligence engine built to protect the global financial ecosystem from the rising complexity of institutional fraud and money laundering.
            </p>
          </div>
        </section>

        {/* 2. Mission Statement */}
        <section className="py-24 bg-neutral-900 text-white px-8 rounded-[64px] mx-4 border border-white/5 font-manrope italic pr-12 pr-12 relative overflow-hidden group">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center font-manrope italic relative z-10">
              <div>
                 <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest mb-4 block italic">Our Mission</span>
                 <h2 className="text-4xl md:text-6xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-[1.1]">To Build a <br />Frictionless, Fraud-Free World.</h2>
              </div>
              <div className="flex flex-col gap-8 font-manrope italic pr-12">
                 <p className="text-zinc-400 text-lg italic leading-relaxed font-manrope pr-12">We believe that institutional compliance should be an enabler of growth, not a bottleneck for innovation. Our platform unifies intelligence and technology to help organizations scale with absolute integrity.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-12 group hover:border-brand-lime transition-all">
                    "Integrity is the bedrock of every successful transaction. We provide the technical infrastructure to protect that bedrock."
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Problem & 4. Our Approach */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center pr-10">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  <h2 className="text-5xl font-bold font-manrope mb-12 tracking-tight italic uppercase italic">Our Core Approach.</h2>
                  <p className="text-xl text-zinc-500 mb-16 italic font-manrope pr-12">We combine three intelligence layers to provide a 360-degree view of institutional risk.</p>
                  {[
                    { t: "Objectivity-First", d: "Data-driven decisioning that removes human bias and manual error from the compliance cycle.", i: <Target /> },
                    { t: "Intelligence-Led", d: "Integrating ML models with global network signals to stay ahead of professional fraud rings.", i: <Zap /> },
                    { t: "Institutional Grade", d: "Providing the governance, security, and auditability required by the world's strictest regulators.", i: <ShieldCheck /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic mb-10 last:mb-0">
                       <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all font-manrope">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 font-manrope" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <div className="aspect-square bg-zinc-50 rounded-[80px] overflow-hidden relative group border border-zinc-100 shadow-2xl">
                    <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center p-24 text-center">
                       <p className="text-white text-2xl font-black italic uppercase leading-tight">Built For <br />The Next <br />Economy.</p>
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-zinc-200">
                       <Lock className="w-48 h-48 opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. Core Values */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase italic underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope italic pr-12">The Values That Drive Us.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full font-manrope italic pr-12 group">
                 {[
                   { t: "Radical Integrity", d: "We act with total transparency in everything we build and every relationship we hold.", i: <ShieldCheck /> },
                   { t: "Continuous Innovation", d: "We never stop evolving our intelligence to stay ahead of global bad actors.", i: <RefreshCw className="text-red-600" /> },
                   { t: "Objective Data", d: "We prioritize hard signals over assumptions to return definitive risk scores.", i: <Target className="text-indigo-600" /> },
                   { t: "Unwavering Privacy", d: "We protect the privacy of legitimate users with the same intensity we use to catch fraud.", i: <Lock className="text-brand-lime" /> }
                 ].map((v, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-12 pr-6">
                      <div className="w-14 h-14 bg-neutral-900 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-lg shadow-black/10">
                        {React.cloneElement(v.i as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic pr-4">{v.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-xs mb-10 italic pr-8 italic pr-6 group-hover:text-neutral-900 transition-colors">{v.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Institutional Trust & Security */}
        <section className="py-32 px-8 font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center pr-10">
              <div className="flex flex-col gap-12 font-manrope italic pr-12">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight">Institutional Trust is Native.</h2>
                 <div className="grid grid-cols-2 gap-8 font-manrope italic">
                    {[
                      { t: "SOC2 Type II", l: "Certified Protection" },
                      { t: "ISO 27001", l: "Global Standard" },
                      { t: "GDPR Ready", l: "Privacy Sovereign" },
                      { t: "NDPR Compliant", l: "Regional Governance" }
                    ].map((st, i) => (
                      <div key={i} className="flex flex-col gap-1 border-l border-zinc-100 pl-6 group">
                         <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest italic group-hover:text-brand-lime transition-colors">{st.l}</span>
                         <span className="text-2xl font-black tracking-tight italic">{st.t}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Institutional Reach</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-400 text-sm italic pr-12 italic font-manrope italic pr-24 leading-relaxed">Deep Sense operates across major financial hubs, securing billions in institutional liquidity for some of the world's most innovative fintechs and banks.</p>
                    <div className="grid grid-cols-2 gap-6 italic">
                       {[
                         { l: "Global Networks", v: "150+ Hubs" },
                         { l: "Entity Records", v: "4B+ Cross-Ref" }
                       ].map((it, i) => (
                         <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-lime transition-all">
                            <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">{it.l}</span>
                            <span className="block text-2xl font-black italic">{it.v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">The Deep Sense Vision</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight">
                   Ready to Join Our <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Global Mission?</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Whether you're looking to protect your institution or build the next generation of financial security, we invite you to be part of the future of trust.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Request System Overview
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     Explore Careers
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
