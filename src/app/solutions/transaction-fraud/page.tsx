"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  ShieldAlert, 
  Activity, 
  TrendingUp, 
  Search, 
  Workflow, 
  LayoutGrid, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Database,
  Globe,
  Cpu,
  BarChart3
} from "lucide-react";

const detectionLayers = [
  { t: "Machine Learning", d: "Predictive scoring for new patterns.", i: <TrendingUp /> },
  { t: "Anomaly Detection", d: "Identify outliers in user behavior.", i: <Search /> },
  { t: "Rule Engine", d: "Precise control with customized logic.", i: <Settings /> },
  { t: "Device Intelligence", d: "Detect spoofing and account takeover.", i: <Globe /> },
  { t: "Graph Analysis", d: "Uncover hidden fraud networks.", i: <Workflow /> }
];

// Fixing Settings import because it was missing in my thought but requested in my draft
import { Settings } from "lucide-react";

export default function TransactionFraudPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <ShieldAlert className="w-3.5 h-3.5" />
               Transaction Guard Pro
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Prevent Fraud <br />
               <span className="text-zinc-300 italic">In Real Time.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
               Deep Sense analyzes every transaction instantly to identify suspicious activity and stop fraud before it impacts your assets.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Get Started
                </button>
             </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM & 💡 THE SOLUTION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">The Challenge.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Fraudulent transactions happen in seconds. Traditional systems react too late, leading to significant financial loss.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "High Speed", d: "Fraud happens in milliseconds." },
                      { l: "Delayed Response", d: "Detection after the damage is done." },
                      { l: "Volume Risk", d: "Millions of daily transactions." },
                      { l: "Reactive Static", d: "Static rules fail new patterns." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 group">
                    <p className="text-white italic text-lg leading-relaxed">“If fraud is detected after the transaction, the damage is already done.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <Activity className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">The Solution.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense monitors and evaluates every transaction as it happens, delivering absolute protection without latency.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Real-Time Scoring", i: <Zap /> },
                      { l: "Instant Decisioning", i: <CheckCircle2 /> },
                      { l: "Multi-Layer Detection", i: <LayoutGrid /> },
                      { l: "Scalable Processing", i: <Database /> }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-brand-lime/20 transition-all group/it">
                         <div className="text-brand-lime mb-4 group-hover/it:scale-110 transition-transform">{it.i}</div>
                         <h6 className="text-[10px] font-bold uppercase tracking-widest text-white">{it.l}</h6>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ HOW IT WORKS (FLOW) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Fraud Detection in Action.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">From initiation to final decision, our engine processes every signal in milliseconds.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                 {[
                   { l: "Initiation", d: "Transaction starts" },
                   { l: "Ingestion", d: "Data sent to Deep Sense" },
                   { l: "Analysis", d: "Risk signals generated" },
                   { l: "Calculation", d: "Fraud score computed" },
                   { l: "Decision", d: "Approve / Review / Block" }
                 ].map((step, i) => (
                   <React.Fragment key={i}>
                    <div className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                       <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-6 group-hover:rotate-12 transition-transform">
                          <span className="font-bold text-sm italic">0{i+1}</span>
                       </div>
                       <h4 className="text-lg font-bold italic uppercase tracking-tight mb-2">{step.l}</h4>
                       <p className="text-[10px] text-zinc-400 font-inter uppercase tracking-widest leading-relaxed">{step.d}</p>
                    </div>
                    {i < 4 && <div className="hidden lg:flex justify-center"><ArrowRight className="w-8 h-8 text-zinc-100" /></div>}
                   </React.Fragment>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 MULTI-LAYER DETECTION */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">Multi-Signal Intelligence.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px] leading-relaxed">Deep Sense uses a layered approach, combining advanced machine learning with traditional rule engines and graph intelligence.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {detectionLayers.map((layer, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-10 h-10 bg-white shadow-xl rounded-xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                            {React.cloneElement(layer.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{layer.t}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{layer.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <Cpu className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Real-Time Decisions.</h3>
                 <div className="space-y-8">
                    {[
                      { l: "Block High-Risk", d: "Instantly stop known fraud patterns.", c: "text-red-400" },
                      { l: "Flag Suspicious", d: "Trigger immediate manual review.", c: "text-amber-400" },
                      { l: "Allow Safe Transactions", d: "Zero impact on user experience.", c: "text-brand-lime" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group/item">
                         <div className="w-1.5 h-12 bg-white/10 group-hover/item:bg-white/20 transition-all" />
                         <div>
                            <h5 className={`font-bold uppercase text-xs mb-1 tracking-tight ${item.c}`}>{item.l}</h5>
                            <p className="text-[12px] text-white/30 font-inter leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔍 FALSE POSITIVES & 🏭 USE CASES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 lg:p-24 bg-white border border-gray-100 rounded-[80px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Revenue Protection.</h3>
                 <p className="text-zinc-500 text-lg font-inter italic mb-10 leading-relaxed">Smarter scoring reduces false positives, ensuring legitimate customers aren&apos;t blocked and your revenue keeps growing.</p>
                 <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                       <div className="text-3xl font-black text-neutral-900 italic tracking-tighter mb-1">-45%</div>
                       <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">False Positives</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-brand-lime italic tracking-tighter mb-1">+12%</div>
                       <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">Approval Rate</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-neutral-900 italic tracking-tighter mb-1">0ms</div>
                       <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">UX Latency</div>
                    </div>
                 </div>
              </div>

              <div className="p-12 lg:p-24 bg-neutral-900 text-white rounded-[80px] shadow-3xl group overflow-hidden relative border border-white/5">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope">Fraud Scenarios.</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                    {[
                      { l: "Unauthorized Transfers", d: "Block takeover attempts." },
                      { l: "Payment Patterns", d: "Detect suspicious velocity." },
                      { l: "High-Value Burst", d: "Identify high-risk spikes." },
                      { l: "Merchant Collusion", d: "Uncover coordinated fraud." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="absolute inset-0 bg-linear-to-br from-brand-lime/5 to-transparent pointer-events-none" />
              </div>
           </div>
        </section>

        {/* 📊 FRAUD OPERATIONS & 📈 BUSINESS IMPACT */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 relative overflow-hidden group">
                 <BarChart3 className="w-40 h-40 absolute bottom-0 right-0 p-8 text-brand-lime opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Fraud Operations.</h3>
                 <ul className="space-y-8 relative z-10">
                    {[
                      { s: "Case Management", d: "Streamlined manual reviews." },
                      { s: "Transaction History", d: "Full auditability of signals." },
                      { s: "Investigation Tools", d: "Visual graph & signal exploration." },
                      { s: "Response Automations", d: "Bulk actions for detected clusters." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-center">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime">
                            <Clock className="w-5 h-5" />
                         </div>
                         <div>
                            <h5 className="text-[11px] font-bold uppercase tracking-widest text-white">{it.s}</h5>
                            <p className="text-[10px] text-white/30 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </ul>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Scale Without Risk.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Strategic infrastructure for the world&apos;s most demanding financial environments.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Reduce Loss", d: "Direct impact on fraud exposure." },
                      { l: "Improve Accuracy", d: "Better signals, fewer declines." },
                      { l: "Operational Efficiency", d: "Automate 95% of routine checks." },
                      { l: "Protect Integrity", d: "Keep your ecosystem safe." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-bottom pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br /><span className="opacity-30">Transactions.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Stop transaction fraud today with real-time detection logic.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900 font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10 font-manrope">
                      Get Started
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
