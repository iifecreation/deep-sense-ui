"use client";

import React, { useState } from "react";
import { 
  Zap, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Copy, 
  Key, 
  Layers, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Cpu, 
  Search, 
  AlertTriangle,
  Code2,
  Lock,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function QuickstartPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Create API Key", desc: "Generate your unique institutional access key from the dashboard." },
    { id: 2, title: "Ingest Event", desc: "Send a transaction or identity event to our ingestion engine." },
    { id: 3, title: "Handle Response", desc: "Receive and process the real-time risk decision." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-manrope text-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/10 rounded-full blur-[140px] opacity-40 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-[0.2em] mb-8 shadow-2xl">
                  <Zap className="w-3.5 h-3.5" />
                  <span>5 Minute Integration</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8 tracking-tighter uppercase italic">
                  Quickstart <br />
                  <span className="text-zinc-600">Guide.</span>
                </h1>
                <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 italic pr-12">
                   This guide will walk you through integrating Deep Sense into your application to start blocking fraud and managing AML risk in real-time.
                </p>
                
                {/* Step Indicators */}
                <div className="space-y-4 mb-12">
                   {steps.map((step) => (
                     <div 
                        key={step.id} 
                        onClick={() => setActiveStep(step.id)}
                        className={`p-6 border rounded-3xl cursor-pointer transition-all flex gap-6 items-center ${activeStep === step.id ? 'bg-white/5 border-brand-lime' : 'border-white/5 hover:border-white/20'}`}
                     >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black italic ${activeStep === step.id ? 'bg-brand-lime text-black' : 'bg-white/5 text-zinc-500'}`}>
                           {step.id}
                        </div>
                        <div>
                           <h4 className="text-lg font-black uppercase italic italic">{step.title}</h4>
                           <p className="text-xs text-zinc-500 italic">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 relative group">
                 <div className="absolute inset-0 bg-brand-lime/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />
                 <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-3xl">
                    <div className="bg-white/5 border-b border-white/10 px-8 py-4 flex items-center justify-between">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                       </div>
                       <span className="font-mono text-[10px] text-zinc-500 uppercase italic">integration_step_{activeStep}.json</span>
                    </div>
                    <div className="p-10 font-mono text-sm leading-relaxed min-h-[400px]">
                       {activeStep === 1 && (
                         <div className="animate-in fade-in duration-500">
                            <span className="text-zinc-600 italic"># Initialize with your institutional key</span>
                            <div className="text-brand-lime mt-4">import <span className="text-white">DeepSense</span> from <span className="text-white">'@deepsense/sdk'</span>;</div>
                            <div className="mt-4">
                               const ds = <span className="text-brand-lime">new</span> DeepSense(<span className="text-emerald-400">"ds_live_0x8f2..."</span>);
                            </div>
                            <div className="mt-12 p-6 bg-brand-lime/5 border border-brand-lime/20 rounded-2xl flex justify-between items-center group">
                               <span className="text-xs text-zinc-400">DS_LIVE_KEY_PROVISIONED</span>
                               <Copy className="w-4 h-4 text-brand-lime cursor-pointer" />
                            </div>
                         </div>
                       )}
                       {activeStep === 2 && (
                         <div className="animate-in fade-in duration-500">
                            <span className="text-zinc-600 italic"># Ingest a transaction event</span>
                            <div className="mt-4">
                               await ds.ingest(<span className="text-emerald-400">"payment.authorized"</span>, {"{"}
                            </div>
                            <div className="pl-6 text-zinc-400">
                               amount: <span className="text-brand-lime">250000</span>, <span className="text-zinc-600"># in cents</span>
                            </div>
                            <div className="pl-6 text-zinc-400">
                               currency: <span className="text-emerald-400">"NGN"</span>,
                            </div>
                            <div className="pl-6 text-zinc-400">
                               user_id: <span className="text-emerald-400">"user_882j9"</span>,
                            </div>
                            <div className="pl-6 text-zinc-400 italic">
                               ip_address: <span className="text-emerald-400">"197.210.64.120"</span>
                            </div>
                            <div>{"}"});</div>
                         </div>
                       )}
                       {activeStep === 3 && (
                         <div className="animate-in fade-in duration-500">
                            <span className="text-zinc-600 italic"># Response Handling</span>
                            <div className="mt-4 text-brand-lime">{"{"}</div>
                            <div className="pl-6">
                               <span className="text-white font-bold italic">"decision":</span> <span className="text-emerald-400">"APPROVED"</span>,
                            </div>
                            <div className="pl-6">
                               <span className="text-white font-bold italic">"score":</span> <span className="text-brand-lime">0.04</span>,
                            </div>
                            <div className="pl-6">
                               <span className="text-white font-bold italic">"tags":</span> [<span className="text-emerald-400">"trusted_device"</span>, <span className="text-emerald-400">"low_velocity"</span>],
                            </div>
                            <div className="pl-6 text-zinc-500 italic pb-8">
                               "reason": "Entity resolution matched verified user profile."
                            </div>
                            <div className="text-brand-lime">{"}"}</div>
                         </div>
                       )}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Guide Content */}
        <section className="py-24 px-8 border-t border-white/5 relative bg-neutral-900/10">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div className="space-y-24 italic font-manrope">
                 {/* Step 1 Details */}
                 <div>
                    <h3 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-brand-lime pl-8 italic">01. Setup Authentication.</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 italic pr-12 pr-12">Deep Sense uses Bearer token authentication. Every request must include your institutional API key in the header to ensure cross-entity integrity.</p>
                    <div className="flex gap-4 items-center p-6 bg-white/5 border border-white/10 rounded-3xl font-bold text-xs uppercase italic tracking-widest text-zinc-400 shadow-3xl">
                       <Lock className="w-5 h-5 text-brand-lime" />
                       <span>Header: Authorization: Bearer {`<API_KEY>`}</span>
                    </div>
                 </div>

                 {/* Step 2 Details */}
                 <div>
                    <h3 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-brand-lime pl-8 italic">02. Push Live Events.</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 italic pr-12 pr-12">Events are the lifeblood of our intelligence engine. Ingest identity, transaction, or behavioral events as they happen to maintain an accurate risk graph.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         { t: "Identity Events", d: "Onboarding, KYC, CDD" },
                         { t: "Payment Events", d: "Auth, Capture, Refund" },
                         { t: "Session Events", d: "Login, Settings Change" },
                         { t: "Web3 Events", d: "Wallet Connect, Swap" }
                       ].map((e, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                            <div className="w-2 h-2 rounded-full bg-brand-lime group-hover:scale-150 transition-transform" />
                            <div className="flex flex-col">
                               <span className="text-[10px] font-black uppercase tracking-widest italic">{e.t}</span>
                               <span className="text-[9px] text-zinc-600 font-mono italic">{e.d}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Step 3 Details */}
                 <div>
                    <h3 className="text-3xl font-black uppercase italic mb-8 border-l-4 border-brand-lime pl-8 italic">03. Listen to Decision Fusion.</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 italic pr-12 pr-12">Every event returns an immediate decision (APPROVED, REJECTED, CHALLENGE) powered by our neural-rules engine. Use these to automate your workflows.</p>
                    <div className="p-8 bg-brand-lime/10 border border-brand-lime/20 rounded-[40px] text-brand-lime font-black text-xs uppercase tracking-widest animate-pulse font-manrope">
                       Institutional Verdict Delivery: 150ms Average
                    </div>
                 </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:border-l lg:border-white/5 lg:pl-32 italic font-manrope">
                 <div className="sticky top-48 space-y-16">
                    <div>
                       <h4 className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mb-4 italic pr-12">Recommended Stack</h4>
                       <div className="flex gap-4 mb-10">
                          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase italic tracking-widest hover:bg-white/10 transition-all font-manrope">Node Link</button>
                          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase italic tracking-widest hover:bg-white/10 transition-all font-manrope">Go Link</button>
                       </div>
                    </div>

                    <div className="p-10 bg-[#0A0A0A] border border-white/10 rounded-[48px] shadow-3xl transform hover:scale-105 transition-transform">
                       <h5 className="text-xl font-black uppercase italic italic mb-6">Need Assistance?</h5>
                       <p className="text-zinc-500 text-xs italic mb-10 leading-relaxed pr-12 pr-12">Our institutional engineering team is available 24/7 for white-glove integration support.</p>
                       <div className="flex flex-col gap-4">
                          <button className="p-5 bg-white text-neutral-900 rounded-2xl flex justify-between items-center group font-manrope">
                             <div className="flex items-center gap-4">
                                <MessageSquare className="w-5 h-5 text-indigo-600" />
                                <span className="text-xs font-black uppercase tracking-widest px-2 font-manrope italic">Team Slack Hub</span>
                             </div>
                             <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </button>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <h4 className="text-[10px] font-black uppercase text-zinc-500 tracking-widest italic pr-12 italic pr-6 italic underline underline-offset-8">Common Issues</h4>
                       {[
                         "Invalid API Key signatures",
                         "Rate limiting during bulk batching",
                         "Schema validation mismatches",
                         "Webhook destination unreachable"
                       ].map((txt, i) => (
                         <div key={i} className="flex gap-3 items-center text-[10px] text-zinc-600 font-bold uppercase tracking-tight italic">
                            <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                            <span>{txt}</span>
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
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 font-manrope italic" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic italic pr-12 font-manrope">Take The Leap</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight pr-6">
                   Ready For <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic leading-none italic pr-12">The Sandbox?</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Integration takes minutes. The protection lasts a lifetime. Start your free trial of the Deep Sense sandbox environment today.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     Deploy Sandbox Agent
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     Ask Engineering Team
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
