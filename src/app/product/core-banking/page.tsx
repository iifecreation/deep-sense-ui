"use client";

import React from "react";
import { 
  Database, 
  Shield, 
  Zap, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Lock,
  Cpu,
  Globe,
  Network,
  Settings,
  Terminal,
  Server,
  Cloud,
  Workflow,
  Code,
  Box,
  Monitor,
  Activity,
  BarChart3,
  Plug
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CoreBankingIntegrationPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/5 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Plug className="w-3.5 h-3.5" />
              <span>Institutional Connectivity</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl">
              Seamless Integration with <span className="text-indigo-600 italic">Core Banking</span> Systems.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12">
              Deep Sense connects with your core banking and financial systems to enable real-time fraud detection and AML monitoring without disrupting your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Talk to Sales
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                View API Docs
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <ZapOff className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Legacy Systems Are Hard to Integrate</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic">"Modern fraud and AML systems must work with existing infrastructure, not replace it."</p>
                     <ul className="space-y-6">
                        {[
                          "Core banking systems are inherently complex and rigid.",
                          "Integrations are traditionally slow, risky, and expensive.",
                          "Siloed financial systems limit visibility across products.",
                          "Real-time processing is difficult within legacy architectures."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm italic">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Friction of Migration</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic">Replacing a core banking system just to upgrade compliance is impossible. Deep Sense is designed to wrap around your existing stack, providing modern intelligence to legacy infrastructure.</p>
                  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime">
                     <Settings className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 leading-relaxed italic pr-6 italic">Integrate Deep Sense without disrupting your core transaction processing capability.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">API-First Integration for Financial Systems</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense is designed to integrate seamlessly with core banking platforms, enabling real-time data exchange and intelligent risk analysis.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "API-based Integration", desc: "Modern REST endpoints for core connectivity.", icon: <Code /> },
                { title: "Real-time Ingestion", desc: "Data processed the moment an event originates.", icon: <Zap /> },
                { title: "Event-driven Workflows", desc: "Triggers that react to every ledger change.", icon: <Workflow /> },
                { title: "Flexible Deployment", desc: "Cloud, On-Premise, or Hybrid availability.", icon: <Cloud /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">Integrating with Your Core Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                 {[
                   { l: "Action", s: "Event originates from core", i: <Database /> },
                   { l: "Ingest", s: "Data sent to Deep Sense", i: <RefreshCw /> },
                   { l: "Analyze", s: "Fraud and AML processing", i: <Search /> },
                   { l: "Decision", s: "Risk result returned", i: <Target /> },
                   { l: "Enforce", s: "System acts on decision", i: <Shield /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed px-4">{it.s}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Integration Methods & 6. Real-time Flow */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Flexible Integration Options</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Deep Sense supports multiple integration patterns to fit your specific technical constraints and institutional requirements.</p>
                 <div className="space-y-8">
                    {[
                      { l: "REST APIs", d: "Send transactions and events instantly and receive synchronous responses.", icon: <Code /> },
                      { l: "Webhooks", d: "Receive async alerts and events to trigger downstream operational workflows.", icon: <Zap /> },
                      { l: "Batch Processing", d: "Process large legacy datasets to support periodic review and remediation history.", icon: <Server /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                         <div className="w-1.5 h-16 bg-indigo-50 group-hover:bg-brand-lime transition-all rounded-full shrink-0 mt-1" />
                         <div>
                            <div className="flex items-center gap-3 mb-2 text-neutral-900 group-hover:text-indigo-600 transition-colors">
                               {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                               <h4 className="font-bold uppercase italic tracking-tighter leading-none">{item.l}</h4>
                            </div>
                            <p className="text-sm text-zinc-400 italic font-inter italic leading-relaxed pr-12">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mt-20 mb-8 tracking-tight">Enable Instant Decisioning</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic text-left">Our low-latency processing ensures real-time fraud scoring and immediate alert generation without slowing down the customer experience.</p>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { l: "LATENCY", v: "< 10ms" },
                      { l: "THROUGHPUT", v: "Unlimited" },
                      { l: "UPTIME", v: "99.99%" },
                      { l: "SECURITY", v: "E2E Encrypted" }
                    ].map((st, i) => (
                      <div key={i} className="p-6 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col gap-1 items-center">
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{st.l}</span>
                         <span className="text-2xl font-black italic text-indigo-600">{st.v}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 rounded-[64px] text-white shadow-3xl border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Network className="w-48 h-48 text-white/5 animate-spin-slow" />
                 </div>
                 <h3 className="text-3xl font-bold mb-10 italic uppercase border-b border-white/10 pb-10">Works Across Your Stack</h3>
                 <div className="space-y-6 relative z-10">
                    <p className="text-zinc-500 text-sm italic mb-10">Deep Sense directly integrates with every critical component of your institutional technology stack.</p>
                    {[
                      "Core Banking Platforms (T24, Flexcube)",
                      "Payment Processors & Gateways",
                      "Customer Onboarding Platforms",
                      "Internal Risk & Compliance Systems"
                    ].map((sys, i) => (
                      <div key={i} className="flex gap-4 items-center group/sy text-white/40 hover:text-brand-lime transition-all">
                         <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover/sy:bg-brand-lime transition-colors" />
                         <span className="text-sm font-bold uppercase tracking-tight italic">{sys}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 8. Event-Driven & 9. Performance & 10. Security */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto text-center mb-24">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Modern Integration for Modern Systems</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">High throughput, low latency architecture designed for high-volume financial institutions.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Event-Driven Logic", desc: "Support for real-time asynchronous processing across all integration patterns.", icon: <Workflow /> },
                { title: "Secure Data Exchange", desc: "API authentication with encryption in transit and granular access controls.", icon: <Lock /> },
                { title: "Scalable Infrastructure", desc: "Industrial-grade reliability for handling millions of daily transitions.", icon: <Layers /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 uppercase italic tracking-tighter">{it.title}</h4>
                   <p className="text-zinc-500 text-sm italic leading-relaxed">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 11. Testing & 12. Monitoring */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Test Before Deployment</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Our dedicated sandbox environment allows your teams to simulate transactions and validate workflows safely before going live.</p>
                 <div className="space-y-6">
                    <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[40px] flex items-center gap-8 group hover:bg-white hover:shadow-2xl transition-all">
                       <Box className="w-12 h-12 text-indigo-600 mb-0 group-hover:scale-110 transition-transform shrink-0" strokeWidth={1.5} />
                       <div>
                          <h4 className="font-bold text-neutral-900 uppercase italic text-sm tracking-tight mb-1 font-manrope">Sandbox Sandbox Simulation</h4>
                          <p className="text-xs text-zinc-400 italic">Test every rule trigger and decision flow with non-production data.</p>
                       </div>
                    </div>
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mt-20 mb-8 tracking-tight">Track Integration Performance</h2>
                 <p className="text-zinc-500 text-sm mb-12 italic">Deep Sense provides comprehensive monitoring with API usage tracking, webhook delivery logs, and full system health visibility.</p>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold uppercase italic text-[10px] tracking-widest text-zinc-500">
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                       API Health
                    </div>
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                       Webhook Logs
                    </div>
                    <div className="flex items-center gap-3">
                       <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                       Error Analytics
                    </div>
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[64px] shadow-3xl text-neutral-900 group relative">
                 <Monitor className="w-32 h-32 absolute top-0 right-0 p-12 text-zinc-100" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 leading-tight">Institutional <br />Stability.</h3>
                 <div className="space-y-6">
                    {[
                      { l: "Latency Monitoring", v: "Real-time tracking of every API call." },
                      { l: "Redundancy Architecture", d: "Zero downtime during system updates or maintenance." },
                      { l: "Detailed Logs", d: "Trace any integration error back to its payload source." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="w-2 h-10 bg-indigo-600 rounded-full" />
                         <div>
                            <span className="block font-bold text-sm tracking-tight italic uppercase">{it.l}</span>
                            <span className="text-[10px] text-zinc-400 italic italic">{it.v || it.d}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-10 italic uppercase">Designed for Financial Infrastructure</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "API-first architecture",
                         "Real-time integration & responses",
                         "Flexible data flow architecture",
                         "Seamless legacy connectivity",
                         "Cloud & On-Prem availability"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Limited / Delayed
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 15. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1] uppercase italic">
                   Integrate Without <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Disruption.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Connect Deep Sense to your core systems today. Faster deployment, lower integration cost, and real-time fraud and AML detection from your very first transaction.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Connect Your Core
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     View API Docs
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function ZapOff({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="12.41 6.75 13 2 10.57 4.92" />
      <polyline points="18.57 12.91 21 10 15.66 10" />
      <polyline points="8 8 3 14 12 14 11 22 16 15" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}
