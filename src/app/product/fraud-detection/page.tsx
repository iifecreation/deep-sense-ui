"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Clock, 
  Activity, 
  Layers, 
  Cpu, 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingDown, 
  Users, 
  CreditCard,
  LogIn,
  ShoppingCart,
  Send,
  Code,
  Globe
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const useCases = [
  { icon: <CreditCard className="w-5 h-5 text-brand-lime" />, title: "Payment Processing", desc: "Instantly approve or decline transactions based on risk." },
  { icon: <Globe className="w-5 h-5 text-brand-lime" />, title: "Card Transactions", desc: "Stop card-not-present fraud before it hits your ledger." },
  { icon: <LogIn className="w-5 h-5 text-brand-lime" />, title: "Account Takeover", desc: "Detect suspicious logins and MFA bypass attempts." },
  { icon: <ShoppingCart className="w-5 h-5 text-brand-lime" />, title: "E-commerce Checkout", desc: "Minimize manual review while stopping chargebacks." },
  { icon: <Send className="w-5 h-5 text-brand-lime" />, title: "Fintech Transfers", desc: "Secure P2P and cross-border transfers in real-time." }
];

const comparisonData = [
  { feature: "Detection speed", deepSense: "Real-time", traditional: "Delayed / batch" },
  { feature: "Decisioning", deepSense: "Instant", traditional: "Manual / delayed" },
  { feature: "Fraud prevention", deepSense: "Proactive", traditional: "Reactive" },
  { feature: "Accuracy", deepSense: "High (multi-layer)", traditional: "Limited" },
  { feature: "Scalability", deepSense: "High", traditional: "Often limited" }
];

export default function RealTimeFraudDetectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute -top-40 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--color-brand-lime)_0%,transparent_70%)] blur-3xl animate-pulse" />
          </div>
          
          <div className="max-w-[900px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-brand-lime rounded-full animate-ping" />
              Real-Time Engine
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tight text-neutral-900">
              Detect Fraud in <br />
              <span className="text-brand-lime bg-neutral-900 px-4 inline-block transform -skew-x-6">Milliseconds</span> — Not Minutes
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[650px]">
              Deep Sense analyzes transactions as they happen, enabling instant fraud detection and decisioning before damage occurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                Request Demo
              </button>
              <Link href="/developers/api-overview" className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                <Code className="w-5 h-5" />
                View API Docs
              </Link>
            </div>
          </div>
        </section>

        {/* 🚨 WHY REAL-TIME MATTERS */}
        <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-lime to-transparent animate-scan" style={{top: '10%'}} />
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-lime to-transparent animate-scan-reverse" style={{top: '80%'}} />
           </div>

           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div>
                   <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8 leading-tight">Fraud Happens Fast — <br />Your System Should Too</h2>
                   <div className="space-y-12">
                      {[
                        { title: "Fraudsters exploit delays", desc: "Legacy systems with batch processing give fraudsters a window of opportunity to complete multiple attacks." },
                        { title: "Stop the transaction, not the chargeback", desc: "Batch processing allows fraudulent transactions to complete. Late alerts mean irreversible losses." },
                        { title: "Proactive vs. Reactive", desc: "Real-time detection stops fraud before it succeeds. If you detect it after, it’s already too late." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-12 h-12 shrink-0 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                              <Zap className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                              <p className="text-white/50 leading-relaxed font-inter">{item.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                 </div>
                 
                 <div className="bg-white/5 p-12 rounded-[64px] border border-white/10 text-center flex flex-col justify-center items-center backdrop-blur-xl">
                    <div className="relative w-48 h-48 mb-8">
                       <div className="absolute inset-0 border-8 border-brand-lime rounded-full opacity-20" />
                       <div className="absolute inset-0 border-8 border-brand-lime border-t-transparent rounded-full animate-spin-slow" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Clock className="w-16 h-16 text-brand-lime" />
                       </div>
                    </div>
                    <p className="text-2xl font-bold font-manrope text-brand-lime mb-4">50ms Average Latency</p>
                    <p className="text-white/60 max-w-[300px]">From API call to final decision. Faster than a human eye blink (100ms).</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ HOW REAL-TIME DETECTION WORKS */}
        <section className="py-32 bg-white">
           <div className="max-w-[1440px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl font-bold font-manrope mb-4">Real-Time Detection Pipeline</h2>
              <p className="text-zinc-500 max-w-[600px] mx-auto">Our architecture is built for speed without compromising analytical depth.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative">
                 <div className="absolute top-16 left-0 right-0 h-px bg-gray-100 hidden lg:block -z-10" />
                 
                 {[
                   { step: "01", icon: <Database />, title: "Ingestion", content: "Transaction received instantly via secure API." },
                   { step: "02", icon: <Cpu />, title: "Feature Gen", content: "Enrichment and signals generated in milliseconds." },
                   { step: "03", icon: <Activity />, title: "Scoring", content: "ML, rules, and intelligence evaluators fire in parallel." },
                   { step: "04", icon: <RefreshCw />, title: "Decisioning", content: "Engine returns action: Approve, Review, or Block." },
                   { step: "05", icon: <AlertTriangle />, title: "Alerting", content: "Webhooks and workflows trigger immediately." }
                 ].map((item, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center group">
                      <div className="w-16 h-16 bg-white border border-gray-100 shadow-xl rounded-2xl flex items-center justify-center mb-8 relative group-hover:border-brand-lime transition-all">
                        <span className="absolute -top-3 -left-3 w-8 h-8 bg-neutral-900 text-brand-lime text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                          {item.step}
                        </span>
                        {React.cloneElement(item.icon as React.ReactElement<{ className: string }>, { className: "w-7 h-7 text-neutral-900" })}
                      </div>
                      <h3 className="text-lg font-bold mb-3 font-manrope">{item.title}</h3>
                      <p className="text-sm text-zinc-500 px-4 text-center leading-relaxed">{item.content}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ⚡ LOW LATENCY ENGINE */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-12">
                   <div>
                     <h2 className="text-4xl font-bold font-manrope mb-6">Built for Speed and Scale</h2>
                     <p className="text-lg text-zinc-500 max-w-[500px]">Our engine is optimized for high-throughput financial systems that cannot afford a millisecond of delay.</p>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {[
                        { title: "In-memory caching", desc: "Powered by Redis for instant feature retrieval." },
                        { title: "Async background", desc: "Heavy analytics run in non-blocking streams." },
                        { title: "Event-driven", desc: "Reacts to signals instantly using high-perf buses." },
                        { title: "Optimized pipelines", desc: "Zero-copy data transfer for maximum efficiency." }
                      ].map((tech, i) => (
                        <div key={i} className="space-y-3">
                           <div className="w-2 h-10 bg-brand-lime rounded-full" />
                           <h4 className="font-bold text-neutral-900">{tech.title}</h4>
                           <p className="text-sm text-zinc-500 leading-relaxed">{tech.desc}</p>
                        </div>
                      ))}
                   </div>
                 </div>
                 
                 <div className="bg-neutral-900 rounded-[56px] p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
                    <div className="relative z-10">
                       <div className="flex items-center justify-between mb-12">
                          <span className="text-xs font-bold text-white/40 uppercase tracking-widest">LIVE SCALE STATUS</span>
                          <span className="px-3 py-1 bg-brand-lime/20 text-brand-lime text-[10px] font-bold rounded-full border border-brand-lime/30 uppercase animate-pulse">System Healthy</span>
                       </div>
                       
                       <div className="space-y-10">
                          <div>
                             <div className="flex justify-between items-end mb-3">
                                <span className="text-3xl font-bold font-manrope">100k+</span>
                                <span className="text-white/40 text-sm">TPS Capacity</span>
                             </div>
                             <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-lime w-4/5 group-hover:w-full transition-all duration-1000" />
                             </div>
                          </div>
                          
                          <div>
                             <div className="flex justify-between items-end mb-3">
                                <span className="text-3xl font-bold font-manrope">{"< 5ms"}</span>
                                <span className="text-white/40 text-sm">Cache Latency</span>
                             </div>
                             <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-400 w-1/3 group-hover:w-1/4 transition-all duration-1000" />
                             </div>
                          </div>

                          <div className="pt-10 border-t border-white/10 flex gap-12">
                             <div>
                                <span className="block text-white/40 text-[10px] font-bold uppercase mb-1">Architecture</span>
                                <span className="text-sm font-bold">K8s Native</span>
                             </div>
                             <div>
                                <span className="block text-white/40 text-[10px] font-bold uppercase mb-1">Compute</span>
                                <span className="text-sm font-bold">GPU Accelerated</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧠 MULTI-LAYER SCORING */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Every Signal, One Instant Decision</h2>
                 <p className="text-zinc-500 max-w-[600px] mx-auto">Each transaction passes through five specialized detection layers in parallel.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                 {[
                   { title: "Machine Learning", icon: <Cpu />, desc: "Proprietary models trained on billions of events." },
                   { title: "Anomaly Detection", icon: <Activity />, desc: "Finds patterns that don't match standard behavior." },
                   { title: "Rules Engine", desc: "Custom business logic that triggers without latency." },
                   { title: "Device Intelligence", icon: <SmartphoneIcon />, desc: "Detects emulators, VPNs, and risky device fingerprints." },
                   { title: "Graph Intelligence", icon: <Database />, desc: "Identifies links to known fraud rings and entities." }
                 ].map((layer, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-lime transition-colors">
                        {layer.icon ? React.cloneElement(layer.icon as React.ReactElement<{ className: string }>, { className: "w-6 h-6 text-neutral-900" }) : <Layers className="w-6 h-6 text-neutral-900" />}
                     </div>
                     <h3 className="font-bold font-manrope text-lg mb-4">{layer.title}</h3>
                     <p className="text-sm text-zinc-500 leading-relaxed font-inter">{layer.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔄 REAL-TIME DECISIONING */}
        <section className="py-32 bg-neutral-900 text-white relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8">From Detection to Action</h2>
              <p className="text-xl text-white/50 mb-20 max-w-[700px] mx-auto">Deep Sense doesn&apos;t just detect fraud — it enables immediate programmatic responses before the transaction completes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: "Block Instantly", val: "High-risk transactions are declined automatically via API response.", icon: <Shield className="text-red-400" /> },
                   { title: "Flag for Review", val: "Medium-risk cases are sent to case management with all context.", icon: <AlertTriangle className="text-yellow-400" /> },
                   { title: "Trigger Alerts", val: "Critical events fire SMS, Email, or Slack notifications immediately.", icon: <Zap className="text-brand-lime" /> },
                   { title: "Notify Webhooks", val: "Sync decisions to your custom internal systems via secure webhooks.", icon: <Send className="text-blue-400" /> }
                 ].map((action, i) => (
                   <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] text-left hover:bg-white/10 transition-all">
                      <div className="mb-6">{action.icon}</div>
                      <h3 className="text-lg font-bold mb-3">{action.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{action.val}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📡 STREAMING & EVENT PROCESSING */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-24">
              <div className="flex-1">
                 <h2 className="text-4xl font-bold font-manrope mb-8">Designed for High-Volume Systems</h2>
                 <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                   Whether you&apos;re processing 10 transactions or 10,000 per second, Deep Sense scales horizontally to meet your demand.
                 </p>
                 <ul className="space-y-6">
                    {[
                      "Supports real-time streaming pipelines (Kafka, Kinesis)",
                      "Event-driven architecture for low-coupling",
                      "Horizontal scalability across multiple regions",
                      "Guaranteed delivery with retry persistence"
                    ].map((li, i) => (
                      <li key={i} className="flex gap-4 items-center font-semibold text-neutral-800">
                         <div className="w-5 h-5 bg-brand-lime rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-neutral-900" />
                         </div>
                         {li}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="flex-1 w-full bg-gray-50 rounded-[40px] aspect-video border border-gray-100 flex items-center justify-center p-12 overflow-hidden relative">
                 <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                 <div className="flex gap-4 items-end">
                    {[0.2, 0.5, 0.8, 0.3, 0.6, 1.0, 0.4, 0.7].map((h, i) => (
                      <div key={i} className="w-8 bg-neutral-900 rounded-t-lg animate-bar-height" style={{ height: `${h * 100}%`, animationDelay: `${i * 100}ms` }} />
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📊 USE CASES FOR REAL-TIME DETECTION */}
        <section className="py-32 bg-neutral-900 text-white">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                 <div className="max-w-[600px]">
                    <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-6">Built for High-Stakes Environments</h2>
                    <p className="text-white/50 text-lg">Real-time fraud detection is critical for any system that interacts with value.</p>
                 </div>
                 <Link href="/solutions/overview" className="text-brand-lime font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                   Explore all solutions <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                 {useCases.map((uc, i) => (
                   <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all flex flex-col justify-between group h-full">
                      <div>
                        <div className="w-10 h-10 bg-brand-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-lime transition-colors group-hover:text-neutral-900">
                          {uc.icon}
                        </div>
                        <h3 className="font-bold mb-4 text-lg">{uc.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed">{uc.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔐 RELIABILITY & RESILIENCE */}
        <section className="py-32 relative">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-brand-lime/5 rounded-[64px] -rotate-3" />
                    <div className="relative bg-white border border-gray-100 p-12 rounded-[64px] shadow-2xl">
                       <Shield className="w-16 h-16 text-neutral-900 mb-8" />
                       <h3 className="text-2xl font-bold mb-6 font-manrope">Reliable Under Pressure</h3>
                       <div className="space-y-6">
                          {[
                            { l: "Fault-tolerance", v: "Automatic node failover" },
                            { l: "Persistence", v: "No data loss guarantees" },
                            { l: "Integrity", v: "Retry mechanisms included" },
                            { l: "Safe Mode", v: "Fail-open config supported" }
                          ].map((stat, i) => (
                            <div key={i} className="flex justify-between border-b border-gray-50 pb-4">
                               <span className="text-zinc-400 font-medium">{stat.l}</span>
                               <span className="font-bold text-neutral-900">{stat.v}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
                 
                 <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-bold font-manrope mb-8 leading-tight">Uptime for Mission-Critical Finance</h2>
                    <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                      Our system is designed with a &quot;never failure&quot; mindset. We use multi-region redundancy and safe-mode configurations to ensure you are always protected.
                    </p>
                    <div className="flex gap-12">
                       <div>
                          <span className="block text-[40px] font-bold text-neutral-900">99.99<span className="text-zinc-300">9</span>%</span>
                          <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Global Uptime</span>
                       </div>
                       <div>
                          <span className="block text-[40px] font-bold text-neutral-900">24/7</span>
                          <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">SRE Coverage</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON SECTION */}
        <section className="py-32 bg-gray-50">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-20">
              <h2 className="text-4xl font-bold font-manrope mb-6 text-neutral-900">Deep Sense vs Traditional Systems</h2>
              <p className="text-zinc-500">Why enterprise teams are switching to real-time infrastructure.</p>
           </div>
           
           <div className="max-w-[1000px] mx-auto px-8">
              <div className="bg-white rounded-[48px] border border-gray-100 shadow-2xl overflow-hidden">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-10 font-bold font-manrope text-lg uppercase tracking-widest">Feature</th>
                          <th className="p-10 font-bold font-manrope text-lg uppercase tracking-widest bg-brand-lime text-neutral-900">Deep Sense</th>
                          <th className="p-10 font-bold font-manrope text-lg uppercase tracking-widest bg-zinc-800">Traditional</th>
                       </tr>
                    </thead>
                    <tbody className="text-lg font-manrope">
                       {comparisonData.map((row, i) => (
                         <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                            <td className="p-10 font-bold text-zinc-400">{row.feature}</td>
                            <td className="p-10 font-extrabold text-neutral-900">{row.deepSense}</td>
                            <td className="p-10 font-medium text-zinc-400">{row.traditional}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="bg-brand-lime rounded-[64px] p-12 md:p-24 text-neutral-900 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <h2 className="text-4xl lg:text-6xl font-bold font-manrope mb-12 tracking-tight">Real-Time. <br />Real Impact.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {[
                         { title: "Reduce Losses", desc: "Block fraudulent funds before they exit your system." },
                         { title: "Customer Trust", desc: "Show your users your platform is the safest in the market." },
                         { title: "Efficiency", desc: "Automate decisions and reduce manual analyst overhead." },
                         { title: "Lower False Positives", desc: "Better data means fewer good customers are blocked." }
                       ].map((impact, i) => (
                         <div key={i} className="p-6 bg-white/40 rounded-3xl border border-white/50 space-y-3">
                            <h4 className="text-xl font-bold font-manrope">{impact.title}</h4>
                            <p className="text-sm font-medium text-neutral-700 leading-relaxed">{impact.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col gap-10">
                    <div className="text-center p-12 bg-neutral-900 text-white rounded-[56px] relative overflow-hidden group">
                       <div className="absolute top-0 left-0 w-2 h-full bg-brand-lime" />
                       <TrendingDown className="w-16 h-16 text-brand-lime mx-auto mb-6 opacity-40" />
                       <span className="block text-6xl font-bold font-manrope mb-2">-85%</span>
                       <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Average reduction in fraud losses</span>
                    </div>
                    <div className="p-10 bg-white rounded-[40px] shadow-xl border border-white flex gap-6 items-center">
                       <Users className="w-12 h-12 text-zinc-300" />
                       <div>
                          <p className="text-zinc-500 italic mb-2">&quot;Latency dropped significantly after switching to Deep Sense. We stopped fraud before transactions completed.&quot;</p>
                          <span className="font-bold text-neutral-900">— CTO, Enterprise Fintech</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24">
           <div className="bg-neutral-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-brand-lime opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-brand-lime/10 via-transparent to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-bold font-manrope text-white mb-8 relative z-10">Stop Fraud Before <br /> It Happens</h2>
              <p className="text-xl text-white/50 mb-12 max-w-[600px] mx-auto relative z-10">See how real-time detection can transform your fraud strategy and protect your bottom line.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <button className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full font-bold font-manrope text-lg hover:scale-105 transition-all shadow-xl shadow-brand-lime/10">
                   Request Demo
                 </button>
                 <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold font-manrope text-lg hover:bg-gray-50 transition-all shadow-lg active:scale-95">
                   Get Started
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes scan-reverse {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bar-height {
          0% { height: 10%; }
          50% { height: 80%; }
          100% { height: 10%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-scan-reverse {
          animation: scan-reverse 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-bar-height {
          animation: bar-height 2s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, black 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}

function SmartphoneIcon() {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <div className="w-4 h-6 border-2 border-neutral-900 rounded-[4px]" />
      <div className="absolute top-1 w-1.5 h-0.5 bg-neutral-900 rounded-full" />
      <div className="absolute bottom-1 w-1 h-1 bg-neutral-900 rounded-full" />
    </div>
  );
}
