"use client";

import React from "react";
import { 
  Cpu, 
  ArrowRight, 
  Shield, 
  Search, 
  Activity, 
  Zap, 
  Smartphone, 
  Monitor, 
  Globe, 
  Fingerprint, 
  Users, 
  History, 
  Lock,
  Share2,
  RefreshCw,
  Clock
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const fingerprintSignals = [
  { name: "Browser & OS", desc: "Detailed versioning and engine attributes." },
  { name: "IP Address", desc: "Geographic and proxy metadata analysis." },
  { name: "Session Data", desc: "Interaction characteristics and timing." },
  { name: "Behavior Patterns", desc: "Keystroke and navigation signatures." },
  { name: "Network Attributes", desc: "Connection type and latency profiles." }
];

const deviceComparison = [
  { capability: "Device tracking", deepSense: "Yes", traditional: "Limited" },
  { capability: "Cross-account detection", deepSense: "Yes", traditional: "No" },
  { capability: "Device risk scoring", deepSense: "Yes", traditional: "No" },
  { capability: "Integration with graph", deepSense: "Yes", traditional: "No" },
  { capability: "Historical profiling", deepSense: "Full", traditional: "Basic" }
];

export default function DeviceIntelligencePage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-xs font-bold uppercase tracking-widest mb-8">
                <Cpu className="w-4 h-4" />
                Device Intelligence
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight text-neutral-900">
                Detect Fraud Through <br />
                <span className="text-zinc-300">Device Intelligence.</span>
              </h1>
              <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[600px]">
                Deep Sense identifies suspicious devices, tracks behavior across accounts, and detects repeat fraud patterns in real time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                  Explore Features
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
               <div className="relative bg-neutral-900 rounded-[64px] p-12 text-white border border-white/10 shadow-3xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                     <Fingerprint className="w-24 h-24 text-brand-lime opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="space-y-10 relative z-10">
                     <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Device Hash: DS_8292_X9</span>
                        <span className="px-3 py-1 bg-red-500 text-xs font-bold rounded-full">FLAGGED</span>
                     </div>
                     <div className="h-px w-full bg-white/5" />
                     <div className="grid grid-cols-2 gap-10">
                        <div>
                           <span className="block text-[10px] text-white/40 uppercase font-bold mb-2">Linked Accounts</span>
                           <span className="text-2xl font-bold">12 Active</span>
                        </div>
                        <div>
                           <span className="block text-[10px] text-white/40 uppercase font-bold mb-2">Risk Score</span>
                           <span className="text-2xl font-bold text-red-500">0.94</span>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-brand-lime w-[94%]" />
                        </div>
                        <span className="text-[10px] text-white/30 font-bold uppercase">Confidence Level: High</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8">Fraudsters Don&apos;t Use Just One Account</h2>
              <p className="text-xl text-zinc-500 font-inter max-w-[700px] mx-auto mb-20 leading-relaxed text-center">
                Fraudsters create multiple accounts, reuse devices, and switch identities to avoid detection. If you only track accounts, you miss the person behind the fraud attempt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Account Influx", d: "Creating accounts to farm bonuses or test credit cards.", i: <Users /> },
                   { t: "Device Reuse", d: "Using the same hardware serials across distinct identities.", i: <Monitor /> },
                   { t: "Identity Switching", d: "Rapidly changing names and emails to bypass blacklists.", i: <RefreshCw /> },
                   { t: "Security Bypass", d: "Exploiting traditional gaps in account-level tracking.", i: <Lock /> }
                 ].map((p, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-200 rounded-[40px] text-left hover:shadow-xl transition-all">
                      <div className="text-red-500 mb-6">{p.i}</div>
                      <h4 className="text-lg font-bold font-manrope mb-4">{p.t}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{p.d}</p>
                   </div>
                 ))}
              </div>
              
              <div className="mt-20">
                 <p className="text-3xl font-bold font-manrope text-neutral-900 border-l-4 border-brand-lime pl-8 inline-block italic">If you only track accounts, <br /><span className="text-zinc-300">you miss the fraudster.</span></p>
              </div>
           </div>
        </section>

        {/* 💡 THE SOLUTION */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-center">
              <div className="text-center mb-24 max-w-[800px]">
                 <h2 className="text-4xl lg:text-6xl font-bold font-manrope mb-8 tracking-tight">Device-Based Detection</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed font-inter italic">
                   &quot;Devices reveal patterns that accounts alone cannot. Deep Sense analyzes device behavior to identify suspicious activity across users and transactions.&quot;
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                 {[
                   { t: "Capture Signals", d: "Securely ingest thousands of hardware and system signals.", i: <Zap /> },
                   { t: "Generate Fingerprint", d: "Construct a persistent identity hash for every device.", i: <Fingerprint /> },
                   { t: "Link Associations", d: "Automatically map accounts to their device history.", i: <Share2 /> },
                   { t: "Track Behavior", d: "Monitor how the device behaves across your entire platform.", i: <Activity /> },
                   { t: "Apply Risk Score", d: "Assign a granular score to the device itself.", i: <Shield /> },
                   { t: "Real-Time Action", d: "Trigger alerts or blocks based on device reputation.", i: <Search /> }
                 ].map((s, i) => (
                   <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[48px] hover:bg-white hover:shadow-2xl transition-all group overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        {s.i}
                      </div>
                      <h4 className="text-xl font-bold font-manrope mb-4">{s.t}</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">{s.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 DEVICE FINGERPRINTING */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 via-transparent to-transparent opacity-50" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-10">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8 leading-tight">Identify Devices <br />with Absolute Clarity</h2>
                 <p className="text-lg text-white/40 leading-relaxed">Deep Sense creates a unique, persistent fingerprint for each device by analyzing thousands of distinct data points from the transaction payload.</p>
                 <div className="space-y-6">
                    {fingerprintSignals.map((sig, i) => (
                      <div key={i} className="flex gap-6 items-center group">
                         <div className="w-2 h-2 bg-brand-lime rounded-full group-hover:scale-150 transition-transform" />
                         <div>
                            <h4 className="font-bold text-white mb-1">{sig.name}</h4>
                            <p className="text-xs text-white/40">{sig.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="p-12 lg:p-20 bg-white/5 border border-white/10 rounded-[80px] shadow-3xl text-center relative pointer-events-none group">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                 <Fingerprint className="w-32 h-32 text-brand-lime mx-auto mb-10 group-hover:rotate-12 transition-transform duration-1000" />
                 <h4 className="text-2xl font-bold font-manrope mb-4">Persistent Identity</h4>
                 <p className="text-sm text-white/40 max-w-[300px] mx-auto leading-relaxed italic">Deep Sense identifiers remain stable even across session clearances and browser updates.</p>
              </div>
           </div>
        </section>

        {/* 🔗 CROSS-ACCOUNT DETECTION & SHARED DEVICE ABUSE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-red-500/5 blur-[120px] pointer-events-none" />
                    <div className="relative bg-white border border-gray-100 shadow-2xl p-12 lg:p-20 rounded-[80px] h-full flex flex-col justify-center">
                       <div className="flex items-center gap-4 mb-20">
                          <Users className="w-12 h-12 text-red-500" />
                          <h3 className="text-3xl font-bold font-manrope">Cross-Account <br />Abuse Patterns</h3>
                       </div>
                       <div className="space-y-12">
                          {[
                            { l: "Fake Account Clusters", d: "Instantly link 100+ accounts to one device." },
                            { l: "Bonus Abuse Detection", d: "Stop repeat promo code uses on one hardware set." },
                            { l: "Ring Coordination", d: "Detect when devices are shared across distinct fraud rings." }
                          ].map((item, i) => (
                            <div key={i} className="flex gap-10 items-start">
                               <div className="w-1 h-12 bg-red-500 shrink-0" />
                               <div>
                                  <h4 className="font-bold text-neutral-900 mb-2">{item.l}</h4>
                                  <p className="text-sm text-zinc-500 font-inter">{item.d}</p>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">Detect Shared <br />Device Abuse</h2>
                    <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[500px]">
                       Deep Sense identifies when a single device is used across multiple accounts, detecting fake account farms and coordinated fraud activity before losses occur.
                    </p>
                    <div className="pt-12 border-t border-gray-100 flex gap-20">
                       <div>
                          <span className="block text-4xl font-bold text-neutral-900 mb-1">0.1ms</span>
                          <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest italic">Association Time</span>
                       </div>
                       <div>
                          <span className="block text-4xl font-bold text-neutral-900 mb-1">99.9%</span>
                          <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest italic">Stable Identity</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔄 DEVICE HISTORY & GRAPH INTELLIGENCE */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl font-bold font-manrope mb-8 leading-tight tracking-tight italic uppercase">Stronger Together: <br />Device + Graph</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed mb-12 font-inter max-w-[500px]">Device intelligence feeds directly into our graph engine. When one device connects multiple accounts and those accounts share IPs, a high-density fraud network is revealed.</p>
                 <button className="flex items-center gap-4 text-neutral-900 font-bold hover:gap-6 transition-all">
                    Learn about Graph Analysis
                    <ArrowRight className="w-5 h-5 text-brand-lime" />
                 </button>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { t: "Usage History", i: <History /> },
                   { t: "Associated Flows", i: <Activity /> },
                   { t: "Risk Propagation", i: <Share2 /> },
                   { t: "Timeline Analysis", i: <Clock /> }
                 ].map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-200 rounded-[48px] shadow-sm flex flex-col items-center text-center group cursor-pointer hover:border-brand-lime transition-colors">
                      <div className="text-neutral-900 group-hover:text-brand-lime transition-colors mb-6">{it.i}</div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">{it.t}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🆚 WHY DEVICE INTELLIGENCE MATTERS - COMPARISON */}
        <section className="py-32">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold font-manrope mb-4 text-neutral-900">Beyond Account-Based Detection</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 uppercase italic font-bold">
               <div className="bg-neutral-900 rounded-[40px] border border-white/10 overflow-hidden shadow-2xl text-white">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-8 text-[10px] text-white/40 tracking-widest">Capability</th>
                           <th className="p-8 text-xs text-brand-lime border-l border-white/10 tracking-widest">Deep Sense</th>
                           <th className="p-8 text-[10px] text-white/40 hidden md:table-cell tracking-widest">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-xs">
                        {deviceComparison.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-8 text-white/60">{row.capability}</td>
                             <td className="p-8 text-white border-l border-white/5">{row.deepSense}</td>
                             <td className="p-8 text-white/20 hidden md:table-cell">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 🏭 USE CASES */}
        <section className="py-32 bg-gray-50">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-20 max-w-[800px] mx-auto">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Where Device Intelligence Helps</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Account takeover detection", d: "Detect when a known account is accessed from a never-before-seen device hash.", i: <Smartphone /> },
                   { t: "Fake account detection", d: "Flag large clusters of accounts created from the same hardware hardware fingerprint.", i: <Users /> },
                   { t: "Bonus abuse prevention", d: "Ensure promo codes are only used once per hardware entity, regardless of account switching.", i: <Zap /> },
                   { t: "Payment fraud", d: "Identify devices associated with previous high-risk chargeback events.", i: <Shield /> },
                   { t: "Bot activity detection", d: "Spot non-human interaction patterns coming from generic or spoofed device profiles.", i: <RefreshCw /> },
                   { t: "Merchant risk", d: "Monitor for merchants operating multiple storefronts from identical hardware signatures.", i: <Globe /> }
                 ].map((uc, i) => (
                   <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] hover:-translate-y-2 transition-all group">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-neutral-900 group-hover:bg-brand-lime transition-all mb-8">
                         {React.cloneElement(uc.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                      </div>
                      <h3 className="font-bold text-neutral-900 mb-4">{uc.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-inter">{uc.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8 leading-tight tracking-tight">Stop Repeat Fraud at the Source</h2>
              <p className="text-xl text-white/40 max-w-[700px] mx-auto mb-20 leading-relaxed">By tracking devices directly, Deep Sense reduces the success rate of coordinated fraud strategies by effectively removing the anonymity of account-switching.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[64px] flex flex-col items-center">
                    <span className="text-6xl font-bold text-brand-lime mb-4 tracking-tighter italic">95%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/30">Detection Rate of Repeat Offenders</span>
                 </div>
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[64px] flex flex-col items-center">
                    <span className="text-6xl font-bold text-brand-lime mb-4 tracking-tighter italic">-40%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/30">Reduction in Coordinated Account Creation</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] translate-y-full group-hover:translate-y-0 transition-transform duration-1000 origin-bottom" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000 group-hover:mix-blend-difference">
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase">Track Fraud <br />Beyond Accounts.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Start identifying fraudsters through their hardware, not just their identity switching strategies.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-white text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white/10 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-xl active:scale-95">
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
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
