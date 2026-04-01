"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Lock, 
  Activity, 
  Database, 
  Users, 
  Share2, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  BarChart2, 
  History, 
  Globe, 
  MousePointer2,
  Cpu,
  Network
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const bankingUseCases = [
  {
    title: "Account Takeover (ATO)",
    icon: <Smartphone />,
    features: [
      "Detect unusual login behavior signatures.",
      "Identify new or suspicious device footprints.",
      "Flag abnormal transaction or update activity."
    ]
  },
  {
    title: "Transaction Fraud",
    icon: <Activity />,
    features: [
      "Identify suspicious high-value transfers.",
      "Monitor for rapid fund out-movements.",
      "Prevent unauthorized payment executions."
    ]
  },
  {
    title: "Card Fraud",
    icon: <CreditCard />,
    features: [
      "Monitor card swipe and CNP events in real-time.",
      "Detect abnormal card spending patterns.",
      "Drastically reduce automated chargebacks."
    ]
  },
  {
    title: "Internal & Insider Fraud",
    icon: <Users />,
    features: [
      "Track unusual employee system access.",
      "Identify suspicious data export patterns.",
      "Unified audit logging for internal review."
    ]
  }
];

const bankingComparison = [
  { capability: "Real-time detection", deepSense: "Yes", legacy: "Often delayed" },
  { capability: "AI + rules", deepSense: "Yes", legacy: "Limited" },
  { capability: "Graph detection", deepSense: "Yes", legacy: "No" },
  { capability: "Case management", deepSense: "Built-in", legacy: "External / Separated" },
  { capability: "Flexibility", deepSense: "High", legacy: "Low / Hard-coded" }
];

export default function BankingSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute -top-40 -left-64 w-[800px] h-[800px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="max-w-[750px] relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full text-brand-lime text-xs font-bold uppercase tracking-widest mb-10 shadow-2xl">
                <Building2 className="w-4 h-4" />
                Enterprise Banking Solution
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
                Fraud Detection Built for <br />
                <span className="text-zinc-300">Modern Banking.</span>
              </h1>
              <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
                Deep Sense helps banks detect, prevent, and investigate fraud in real time — across accounts, transactions, and digital channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-start">
                <button className="px-12 py-6 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-xl">
                  Request Demo
                </button>
                <button className="px-12 py-6 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-xl">
                  Talk to Sales
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] rounded-full" />
               <div className="relative bg-neutral-900 aspect-video rounded-[64px] border border-white/10 shadow-3xl flex flex-col justify-center p-12 text-white group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                     <ShieldCheck className="w-24 h-24 text-brand-lime opacity-10 group-hover:rotate-12 transition-transform duration-1000" />
                  </div>
                  <div className="space-y-10 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                           <Activity className="text-brand-lime w-6 h-6" />
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block">Live Monitoring</span>
                           <h4 className="text-xl font-bold">Transaction Protection active</h4>
                        </div>
                     </div>
                     <div className="h-px w-full bg-white/10" />
                     <div className="grid grid-cols-2 gap-8">
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Throughput</span>
                           <span className="text-3xl font-bold italic">50k <span className="text-white/20 text-sm">TPS</span></span>
                        </div>
                        <div>
                           <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Latency</span>
                           <span className="text-3xl font-bold italic">45 <span className="text-white/20 text-sm">ms</span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 🚨 BANKING CHALLENGES */}
        <section className="py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-24 max-w-[900px] mx-auto">
                 <h2 className="text-4xl lg:text-6xl font-bold mb-8 uppercase italic tracking-tight underline decoration-brand-lime/20 decoration-8 underline-offset-16">The Complexity of Banking Fraud</h2>
                 <p className="text-xl text-zinc-500 font-inter">As banking channels digitalize, the surface area for coordinated attacks expands exponentially. Legacy systems cannot keep up.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { t: "Account Takeover", d: "Sophisticated credential stuffing and session hijacking are increasing daily.", i: <Lock /> },
                   { t: "Cofordinated Transfers", d: "Fraudsters use complex money mule networks to dilute fund tracing.", i: <Share2 /> },
                   { t: "Identify Farming", d: "Synthetic identities are being created at scale for credit exploitation.", i: <Users /> },
                   { t: "Device Reuse", d: "Hardware fingerprints are reused across thousands of fake identities.", i: <Smartphone /> },
                   { t: "Regulatory Pressure", d: "AML and KYC requirements are more stringent than ever before.", i: <CheckCircle2 /> },
                   { t: "Legacy Latency", d: "Reactive detection means alerts trigger hours after the loss occurred.", i: <History /> }
                 ].map((p, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[48px] shadow-sm hover:shadow-xl transition-all group">
                      <div className="text-neutral-900 group-hover:text-brand-lime transition-colors mb-8">
                         {React.cloneElement(p.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-xl font-bold mb-4 font-manrope">{p.t}</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">{p.d}</p>
                   </div>
                 ))}
              </div>
              
              <div className="mt-24 text-center">
                 <p className="text-3xl font-bold text-neutral-900 italic tracking-tight">Banks need real-time intelligence, <br /><span className="text-zinc-300">not delayed alerts.</span></p>
              </div>
           </div>
        </section>

        {/* 💡 THE DEEP SENSE APPROACH */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold leading-tight uppercase italic tracking-tight">A Smarter Way <br />to Detect Fraud.</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed font-inter italic max-w-[550px]">&quot;Deep Sense provides a unified platform to monitor transactions, detect fraud patterns, and enable rapid response across your entire entity lifecycle.&quot;</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Real-time Monitoring", i: <Zap /> },
                      { t: "AI driven scoring", i: <BarChart2 /> },
                      { t: "Rule-based controls", i: <Lock /> },
                      { t: "Graph detection", i: <Network /> }
                    ].map((cap, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime transition-all duration-300">
                            {React.cloneElement(cap.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5 text-neutral-900" })}
                         </div>
                         <span className="font-bold text-neutral-900 font-manrope">{cap.t}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-neutral-900 p-12 lg:p-20 rounded-[80px] text-white shadow-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-brand-lime)_0%,transparent_50%)] opacity-10" />
                 <Database className="w-32 h-32 absolute bottom-0 left-0 p-8 text-white opacity-5 group-hover:translate-y-4 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-10">
                    <h3 className="text-3xl font-bold tracking-tight italic uppercase">Multi-Layer <br />Detection Pillar</h3>
                    <p className="text-white/40 text-lg font-inter leading-relaxed italic">Deep Sense combines multiple intelligence layers including machine learning models, anomaly detection, rule engines, device fingerprints, and graph-based linkage analysis.</p>
                    <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5">
                        {["ML Models", "Anomalies", "Rules", "Device", "Graph"].map((layer, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-brand-lime tracking-widest uppercase">{layer}</span>
                        ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🛡️ KEY BANKING USE CASES */}
        <section className="py-24 bg-zinc-50 rounded-[120px] mx-4 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-5xl font-bold uppercase italic tracking-tight">Fraud Use Cases We Cover.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {bankingUseCases.map((uc, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm transform hover:-translate-y-2 transition-all">
                      <div className="w-16 h-16 bg-zinc-900 rounded-[28px] flex items-center justify-center text-brand-lime mb-8 shadow-xl">
                         {React.cloneElement(uc.icon as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-8 font-manrope">{uc.title}</h4>
                      <div className="space-y-4">
                         {uc.features.map((feat, j) => (
                           <div key={j} className="flex gap-4">
                              <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2 shrink-0" />
                              <p className="text-sm text-zinc-500 leading-relaxed font-inter">{feat}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ⚙️ HOW IT WORKS ARCHITECTURE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight uppercase italic leading-tight">Architecture & Flow <br />in Banking Systems.</h2>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                 {[
                   { t: "Banking Event", d: "Payload sent from core systems.", i: <Globe /> },
                   { t: "Deep Sense Analysis", d: "Real-time intelligence check.", i: <Cpu /> },
                   { t: "Instant Scoring", d: "Risk generation within 50ms.", i: <BarChart2 /> },
                   { t: "Policy Execution", d: "Action determined by rules.", i: <ShieldCheck /> },
                   { t: "Alert & Case", d: "Operations feedback loop.", i: <MousePointer2 /> }
                 ].map((step, i) => (
                   <div key={i} className="w-[200px] text-center space-y-8 relative">
                      {i < 4 && (
                        <div className="hidden lg:block absolute top-10 -right-16 w-12 h-0.5 bg-zinc-100" />
                      )}
                      <div className="w-20 h-20 mx-auto bg-gray-50 border border-gray-100 rounded-[32px] flex items-center justify-center text-neutral-900 shadow-sm group hover:bg-neutral-900 hover:text-brand-lime transition-all duration-500">
                        {step.i}
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold tracking-tight text-neutral-900">{step.t}</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed font-inter">{step.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📊 FRAUD OPERATIONS & SECURITY */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight italic uppercase">Enterprise Core: <br />Security & Compliance.</h2>
                 <p className="text-lg text-white/40 leading-relaxed font-inter max-w-[500px] italic">Designed from the ground up for Tier-1 financial institutions with strict regulatory and security requirements.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Multi-Tenant Architecture", d: "Secure, isolated data structures for institutional safety." },
                      { t: "Role-Based Access (RBAC)", d: "Granular control over who can view or action fraud events." },
                      { t: "Compliance Ready", d: "Supports GDPR, SOC2, and specific regional banking laws." },
                      { t: "Full Audit Trail", d: "Immutable logs for every decision and system change." }
                    ].map((f, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
                        <h4 className="font-bold text-brand-lime mb-3 uppercase tracking-widest text-xs italic">{f.t}</h4>
                        <p className="text-xs text-white/40 leading-relaxed font-inter">{f.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="p-12 lg:p-24 bg-white/5 border border-white/10 rounded-[80px] shadow-3xl text-center group">
                 <div className="mb-10 flex justify-center">
                    <div className="w-24 h-24 bg-brand-lime rounded-full flex items-center justify-center font-bold text-neutral-900 text-3xl shadow-2xl group-hover:scale-110 transition-transform">99.9</div>
                 </div>
                 <h4 className="text-2xl font-bold italic tracking-tight uppercase mb-4">Availability & Scale</h4>
                 <p className="text-sm text-white/30 max-w-[350px] mx-auto leading-relaxed">Built to handle thousands of requests per second with mission-critical reliability and sub-100ms latency.</p>
              </div>
           </div>
        </section>

        {/* 🔌 INTEGRATION & PERFORMANCE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight uppercase italic leading-tight mb-8">Integrate with Your <br />Core Systems.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[500px] mb-12 italic">Deep Sense integrates seamlessly via REST APIs and webhooks, ensuring minimal disruption to your existing banking platform while providing immediate intelligence uplift.</p>
                 <div className="space-y-6">
                    {[
                      "Standard REST API ingestions for events.",
                      "Real-time webhook triggers for blocks.",
                      "Cloud or Hybrid deployment models available.",
                      "Flexible integration with core banking software."
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-4 items-center font-bold text-neutral-900 font-manrope">
                         <div className="w-5 h-5 bg-brand-lime rounded-full flex items-center justify-center text-[10px] font-bold">✓</div>
                         {feat}
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-gray-50 p-12 rounded-[64px] border border-gray-100 relative">
                 <div className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-10 block italic underline">Processing Performance</div>
                 <div className="space-y-12">
                    {[
                      { l: "Transaction Latency", v: "45ms", w: "95%" },
                      { l: "Throughput (TPS)", v: "150k+", w: "92%" },
                      { l: "Signal Enrichment", v: "12ms", w: "88%" }
                    ].map((bar, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end text-sm font-bold">
                            <span className="text-zinc-400 font-manrope uppercase tracking-widest text-[10px]">{bar.l}</span>
                            <span className="text-neutral-900">{bar.v}</span>
                         </div>
                         <div className="h-1 w-full bg-white rounded-full overflow-hidden">
                            <div className="h-full bg-neutral-900" style={{ width: bar.w }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold uppercase italic tracking-tight">Why Banks Choose Deep Sense.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 uppercase font-bold text-[10px] tracking-widest italic">
               <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-neutral-900 text-white">
                           <th className="p-8 tracking-widest opacity-40">Capability</th>
                           <th className="p-8 text-brand-lime border-l border-white/5 opacity-100">Deep Sense</th>
                           <th className="p-8 tracking-widest opacity-40 hidden md:table-cell">Legacy Systems</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900">
                        {bankingComparison.map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                             <td className="p-8 text-zinc-500">{row.capability}</td>
                             <td className="p-8 border-l border-gray-50 text-neutral-900">{row.deepSense}</td>
                             <td className="p-8 text-zinc-300 hidden md:table-cell">{row.legacy}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 💬 TRUST STATEMENT (PLACEHOLDER) */}
        <section className="py-40 text-center">
           <div className="max-w-[1200px] mx-auto px-8 space-y-12 relative overflow-hidden">
              <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight italic opacity-10 leading-none">Built for Banking Environments.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="p-10 border border-gray-100 rounded-[56px] space-y-8 italic">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;We improved our transaction fraud detection speed significantly after switching from a batch-processed legacy systems.&quot;</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-zinc-300">— Chief Risk Officer, Top 5 Institutional Bank</p>
                 </div>
                 <div className="p-10 border border-gray-100 rounded-[56px] space-y-8 italic">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;Deep Sense helped us uncover complex multi-account fraud rings that were previously invisible to our operations teams.&quot;</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-zinc-300">— Head of Fraud Detection, Global Neo-bank</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 opacity-20 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight italic uppercase mb-24">Business Impact at Scale.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { l: "Avg. Loss Reduction", v: "65%" },
                   { l: "False Positive Reduction", v: "40%" },
                   { l: "Detection Speed", v: "<50ms" },
                   { l: "ROI within year", v: "3.5x" }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <span className="text-6xl font-bold text-brand-lime italic tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-700">{stat.v}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.l}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-700">
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br />Banking Platform.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">See how Deep Sense can strengthen your fraud detection strategy and build technical trust with every transaction.</p>
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
