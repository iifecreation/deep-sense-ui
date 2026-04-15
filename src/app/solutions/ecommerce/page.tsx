"use client";

import React from "react";
import { 
  Zap, 
  ShoppingBag, 
  ShoppingCart, 
  Globe, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Cpu, 
  Network, 
  Users, 
  BarChart3,
  MousePointer2,
  Tag,
  CreditCard,
  Lock
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function EcommerceSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-rose-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Retail Intelligence Unit</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Stop Fraud, <br /><span className="text-rose-600">Protect</span> Growth.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               Deep Sense protects e-commerce platforms and marketplaces from transaction fraud, promo abuse, and account takeover without adding friction to the checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase">
                 Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter uppercase font-manrope">
                 Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10">Frictionless Shopping vs. Rising Fraud.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-inter pr-6 pr-12">The modern e-commerce challenge is identifying professional fraudsters among millions of legitimate shoppers without killing your conversion rate.</p>
                 <div className="space-y-4 font-manrope">
                    {[
                       "Professional fraud rings use sophisticated device masking.",
                       "Account Takeover (ATO) targets loyalty points and cards.",
                       "Promo abuse and policy violations drain marketing budgets.",
                       "High chargeback rates threaten payment processor relationships."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-rose-500 transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-6">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <MousePointer2 className="w-64 h-64 absolute top-0 right-0 p-12 text-white/5 animate-pulse opacity-20" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10">Conversion Impact</h3>
                 <div className="space-y-8 relative z-10">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-inter font-manrope">"Every extra second at checkout can lead to a 7% drop in conversion."</p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Decision Speed</span>
                          <span className="block text-2xl font-black italic">Instant</span>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                          <span className="text-[9px] font-black uppercase text-brand-lime tracking-widest italic font-manrope">Friction Index</span>
                          <span className="block text-2xl font-black italic">&lt; 0.1%</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. The Solution & 4-6. Use Cases */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-rose-100 decoration-8 underline-offset-16 font-manrope italic pr-12 pr-12">Invisible Protection for Modern Retail</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10">Deep Sense operates in the background, evaluating risk from login to checkout with total precision.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope">
                 {[
                   { t: "Transaction Fraud", d: "Detect stolen credit cards and professional carding sessions in real-time.", c: "Identify Velocity Surges", i: <CreditCard /> },
                   { t: "Account Takeover", d: "Stop hackers from accessing user accounts through behavioral and device biometrics.", c: "Prevent Account Draining", i: <Lock /> },
                   { t: "Promo & Policy Abuse", d: "Detect multi-accounting and bot-driven promo abuse at the source.", c: "Protect Marketing Spend", i: <Tag /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-6 group">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-zinc-100" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8 italic">{it.d}</p>
                      <div className="flex items-center gap-3 text-rose-600 font-black uppercase text-[10px] tracking-widest font-manrope italic">
                         <CheckCircle2 className="w-4 h-4" />
                         {it.c}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. Behavioral Intelligence & 8. Device Intelligence */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div className="order-2 lg:order-1 flex flex-col gap-12 font-manrope italic">
                  {[
                    { t: "Device Fingerprinting", d: "Uniquely identify devices despite clearing cookies, using VPNs, or private browsing.", i: <Smartphone /> },
                    { t: "Behavioral Biometrics", d: "Analyze keystroke dynamics, mouse movements, and navigation patterns to spot bots.", i: <MousePointer2 /> },
                    { t: "Social Graphing", d: "Identify clusters of related accounts created by the same fraud ring.", i: <Network /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-sm">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-white/10" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic pr-16 leading-tight">Identify <br />The Invisible.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12">Fraudsters look like good users on the surface. Deep Sense looks underneath to catch the anomalies in behavior and technical signals.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10">
                    "During peak flash sales, Deep Sense maintains real-time decisioning accuracy at 100k+ transactions per second — ensuring zero revenue loss."
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Comparison Table */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Built for Modern Commerce</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left font-manrope italic pr-6 group overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left font-black tracking-widest text-[10px]">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">E-commerce Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-rose-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Standard Tools</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Zero-friction silent biometrics",
                         "Marketplace seller risk monitoring",
                         "Real-time promo abuse detection",
                         "Automatic policy override blocks",
                         "Scalable flash-sale architecture"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto font-manrope" strokeWidth={3} />
                               <span className="text-[9px] font-black uppercase text-zinc-400 mt-1 block">Institutional Ready</span>
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope leading-tight pr-6">
                               High Friction / Limited
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 12. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Secure E-commerce Operations</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10">
                   Grow Your Sales, <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Not Your Fraud.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-10">
                    Protect your retail ecosystem, reduce chargebacks, and provide a frictionless experience for your legitimate customers.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-rose-600 transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic">
                     Request Commerce Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12">
                     Contact Risk Advisory
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
