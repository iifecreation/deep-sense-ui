"use client";

import React from "react";
import Link from "next/link";
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  CreditCard, 
  Smartphone, 
  History, 
  Lock, 
  Workflow,
  Cpu,
  Network,
  CheckCircle2,
  AlertOctagon,
  RefreshCw,
  Gauge,
  Layers,
  ArrowUpRight,
  TrendingDown
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const paymentUseCases = [
  { t: "Card-Not-Present Fraud", d: "Block fraudulent cards before authorization occurs.", i: <CreditCard /> },
  { t: "Unauthorized Payments", d: "Detect suspicious fund movements in real-time.", i: <AlertOctagon /> },
  { t: "Merchant Exploitation", d: "Identify high-risk patterns in merchant setups.", i: <Network /> },
  { t: "Transaction Abuse", d: "Prevent automated bot-driven card testing.", i: <Smartphone /> }
];

const paymentComparison = [
  { capability: "Real-time scoring", deepSense: "Yes", traditional: "Often delayed" },
  { capability: "Low latency (P99)", deepSense: "< 35ms", traditional: "Variable / High" },
  { capability: "High throughput", deepSense: "100k+ TPS", traditional: "Limited" },
  { capability: "Fraud prevention", deepSense: "Proactive", traditional: "Reactive" },
  { capability: "Chargeback reduction", deepSense: "70%+", traditional: "Limited" }
];

export default function PaymentsSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
                <CreditCard className="w-3.5 h-3.5" />
                High-Performance Payment Protection
              </div>
              <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
                Protect every <br />
                <span className="text-zinc-300">Transaction.</span>
              </h1>
              <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[600px]">
                Deep Sense protects payment systems with instant fraud scoring, intelligent decisioning, and scalable infrastructure built for high-volume environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-12 py-6 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-xl group">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-6 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-xl">
                  Talk to Sales
                </button>
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-brand-lime/5 blur-[100px] rounded-full" />
               <div className="bg-neutral-900 aspect-video rounded-[60px] p-12 text-white border border-white/10 shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                     <Gauge className="w-20 h-20 text-brand-lime opacity-10 group-hover:rotate-270 transition-transform duration-1000" />
                  </div>
                  <div className="relative z-10 space-y-8 h-full flex flex-col justify-center">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                           <Activity className="text-brand-lime w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block">Real-time Performance</span>
                           <h4 className="text-xl font-bold">Transaction scoring live</h4>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-10">
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-1">Latency (P99)</span>
                           <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold italic text-brand-lime">32</span>
                              <span className="text-white/20 text-sm">ms</span>
                           </div>
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-1">Throughput</span>
                           <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold italic">140</span>
                              <span className="text-white/20 text-sm">k+ TPS</span>
                           </div>
                        </div>
                     </div>
                     <div className="pt-6 border-t border-white/5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
                           <span>Secure Authorization Loop</span>
                           <span className="text-emerald-400">Stable</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 🛡️ KEY PAYMENT USE CASES */}
        <section className="py-24 bg-zinc-50 rounded-[120px] mx-4 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-5xl font-bold uppercase italic tracking-tight">Payment Fraud Scenarios.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {paymentUseCases.map((uc, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm transform hover:-translate-y-2 transition-all">
                      <div className="w-16 h-16 bg-zinc-900 rounded-[28px] flex items-center justify-center text-brand-lime mb-8 shadow-xl">
                         {React.cloneElement(uc.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-8 font-manrope">{uc.t}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed font-inter">{uc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📡 HIGH-THROUGHPUT & 🔄 REAL-TIME ALERTING */}

        {/* 💡 THE DEEP SENSE APPROACH & ⚙️ HOW IT WORKS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-center">
              <div className="text-center mb-32 max-w-[850px]">
                 <h2 className="text-4xl lg:text-6xl font-bold italic tracking-tighter uppercase mb-8">Integrated Protection.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed">Deep Sense integrates directly into your payment flow to detect and stop fraud before transactions are completed.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                 {[
                   { t: "Payment Request", i: <Smartphone /> },
                   { t: "Deep Sense Sync", i: <RefreshCw /> },
                   { t: "Risk In-Memory", i: <Cpu /> },
                   { t: "Instant Decision", i: <Zap /> },
                   { t: "Process / Block", i: <ShieldCheck /> }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center text-center space-y-6 relative group">
                      {i < 4 && (
                        <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-zinc-100 z-0" />
                      )}
                      <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl flex items-center justify-center text-neutral-900 shadow-lg relative z-10 group-hover:bg-brand-lime group-hover:text-black transition-all duration-500">
                         {item.i}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 group-hover:text-neutral-900 transition-colors">{item.t}</h4>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ⚡ LOW-LATENCY SCORING & 🧠 MULTI-LAYER */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic leading-none">Millisecond-Level <br /><span className="text-brand-lime underline decoration-brand-lime/20 decoration-8 underline-offset-16">Decisioning.</span></h2>
                 <p className="text-xl text-white/40 leading-relaxed font-inter italic max-w-[500px]">Optimized inference pipelines and in-memory scoring guarantee ultra-low latency, ensuring security never comes at the cost of conversion.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {[
                      { t: "Optimized Inference", d: "Machine learning models compiled for sub-10ms execution." },
                      { t: "In-Memory Caching", d: "Instant access to historical risk signals for every session." },
                      { t: "Minimal SDK Overhead", d: "Lightweight integration that doesn't bloat your application." },
                      { t: "Fault Tolerance", d: "Designed for 100% uptime with parallel fallback logic." }
                    ].map((f, i) => (
                      <div key={i} className="space-y-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                         <h4 className="font-bold text-lg">{f.t}</h4>
                         <p className="text-xs text-white/30 leading-relaxed font-inter">{f.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] pointer-events-none" />
                 <div className="bg-white/5 border border-white/10 rounded-[64px] p-12 lg:p-20 text-center shadow-3xl">
                    <Layers className="w-24 h-24 mx-auto text-brand-lime mb-10 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-3xl font-bold italic tracking-tight uppercase mb-8">Accurate Detection at Scale</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                       {["Machine Learning", "Anomalies", "Rule Engine", "Device", "Graph"].map((layer, j) => (
                         <div key={j} className="px-5 py-3 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-default">
                           {layer}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🛡️ REDUCE CHARGEBACKS & 🔍 FALSE POSITIVES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-gray-50 p-12 rounded-[64px] border border-gray-100 relative group">
                 <div className="absolute top-0 right-0 p-8 transform group-hover:translate-x-4 transition-transform">
                    <ArrowUpRight className="w-16 h-16 text-zinc-100" />
                 </div>
                 <div className="space-y-10">
                    <h2 className="text-4xl font-bold tracking-tight uppercase italic underline decoration-neutral-900/10 decoration-8 underline-offset-16">Stop Fraud Before <br />it Becomes a Loss.</h2>
                    <p className="text-lg text-zinc-500 leading-relaxed font-inter">Identify fraudulent transactions before approval to protect merchant revenue and improve network approval rates.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-gray-200">
                       <div className="space-y-2">
                          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Chargeback Reduction</span>
                          <span className="text-5xl font-black text-neutral-900 italic tracking-tighter">72%</span>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">Revenue Protection</span>
                          <span className="text-5xl font-black text-neutral-900 italic tracking-tighter">$14M+</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase italic leading-none">Approve More <br />Legit Transactions.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed italic max-w-[500px]">Advanced scoring reduces unnecessary declines, ensuring a seamless experience for your best customers.</p>
                 <div className="space-y-6">
                    {[
                      { t: "Frictionless Checkout", d: "Legitimate users proceed without extra verification steps." },
                      { t: "Higher Conversion Rates", d: "Smarter detection directly increases your checkout funnel success." },
                      { t: "Network Reputation", d: "Improve your standing with gateways and acquiring banks." }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-brand-lime transition-all duration-500">
                            <CheckCircle2 className="w-6 h-6" />
                         </div>
                         <div>
                            <h4 className="font-bold text-neutral-900 uppercase text-sm tracking-tight mb-1">{feat.t}</h4>
                            <p className="text-xs text-zinc-400 font-inter">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📡 HIGH-THROUGHPUT & 🔄 REAL-TIME ALERTING */}
        <section className="py-40 bg-zinc-50">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[850px] mx-auto">
                 <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase italic leading-none opacity-20 mb-8">Performance & Scale.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Built to handle thousands of transactions per second on a globally resilient architecture.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Scale on Demand", d: "Architecture automatically scales during high-volume events like Black Friday.", i: <Zap /> },
                   { t: "Event-Driven", d: "Every transaction triggers a dedicated intelligence pipeline.", i: <Network /> },
                   { t: "Resilient Core", d: "Fault-tolerant design ensures 100% availability for your payments.", i: <Workflow /> },
                   { t: "Webhook Triggers", d: "Notify your backend instantly about high-risk events.", i: <Activity /> }
                 ].map((sc, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-200 rounded-[48px] hover:scale-105 transition-all text-center">
                      <div className="w-16 h-16 bg-neutral-900 rounded-[32px] mx-auto flex items-center justify-center text-brand-lime mb-8 shadow-xl">
                         {React.cloneElement(sc.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-xl font-bold mb-4 font-manrope">{sc.t}</h4>
                      <p className="text-xs text-zinc-400 font-inter leading-relaxed">{sc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔐 SECURITY & RELIABILITY */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase italic leading-tight">Secure and Reliable <br />Infrastructure.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[500px]">Designed for high-availability systems with secure data handling and automatic retry mechanisms.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Data Encryption", d: "All transaction data is encrypted in transit and at rest." },
                      { t: "SLA Guarantees", d: "99.9% availability for enterprise payment partners." },
                      { t: "Secure HMAC Auth", d: "Enterprise-grade authentication for all API endpoints." },
                      { t: "Retry Logic", d: "Intelligent error handling for unstable network conditions." }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5" />
                         <div>
                            <h5 className="font-bold text-neutral-900 mb-1">{f.t}</h5>
                            <p className="text-xs text-zinc-400 leading-relaxed font-inter">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl text-center group">
                 <div className="absolute top-0 right-0 p-8 scale-0 group-hover:scale-100 transition-transform duration-700">
                    <ShieldCheck className="w-24 h-24 text-brand-lime opacity-10" />
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight italic uppercase mb-8">Fault-Tolerant Loops</h3>
                 <p className="text-white/40 text-sm max-w-[300px] mx-auto leading-relaxed mb-12 italic">If the primary intelligence layer takes longer than 40ms, the system automatically pivots to cached risk profiles to guarantee decision delivery.</p>
                 <div className="inline-flex gap-4 p-4 bg-white/5 rounded-full border border-white/5">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">System Reliability: 99.999%</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter">Designed for Payments.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 uppercase font-bold text-[10px] tracking-widest italic">
               <div className="bg-white rounded-[50px] border border-gray-200 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-neutral-900 text-white">
                           <th className="p-10 tracking-widest opacity-40">Capability</th>
                           <th className="p-10 text-brand-lime border-l border-white/10 opacity-100">Deep Sense</th>
                           <th className="p-10 tracking-widest opacity-40 hidden md:table-cell">Traditional Systems</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900">
                        {paymentComparison.map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                             <td className="p-10 text-zinc-500">{row.capability}</td>
                             <td className="p-10 border-l border-gray-50 text-neutral-900 opacity-100">{row.deepSense}</td>
                             <td className="p-10 text-zinc-300 hidden md:table-cell opacity-50">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT & TRUST */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[140px] translate-y-1/2 rounded-full opacity-30 pointer-events-none" />
           <div className="max-w-[1200px] mx-auto px-8 space-y-24 relative z-10">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tight italic leading-none opacity-20">Secure performance.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 italic">
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;We reduced fraud without increasing latency. Deep Sense is the only platform we tested that could handle our Black Friday volumes.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— VP Engineering, Global PSP</span>
                 </div>
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;Approval rates improved significantly while fraud dropped. Our merchants have never been more confident in our checkout flow.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CEO, Payment Gateway Partner</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Protect Every <br />Transaction.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Join the world&apos;s leading payment systems in stopping fraud at the edge.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
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
