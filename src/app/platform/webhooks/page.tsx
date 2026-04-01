"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Bell, 
  Lock, 
  Eye, 
  Settings,
  Share2
} from "lucide-react";

const platformEvents = [
  { t: "Fraud Alert Created", d: "Instantly notify your SOC or risk team.", i: <Bell /> },
  { t: "Transaction Flagged", d: "Automatic flagging for local system audits.", i: <Zap /> },
  { t: "High-Risk Decision", d: "Immediate trigger for blocking workflows.", i: <ShieldCheck /> },
  { t: "Case Updated", d: "Sync case status with internal CRM or admin tools.", i: <Activity /> }
];

export default function PlatformWebhooksPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Share2 className="w-3.5 h-3.5" />
               Automated Webhook Intelligence
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Real-Time Fraud <br />
               <span className="text-zinc-300 italic">Delivered Instantly.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
               Deep Sense sends real-time fraud signals directly to your systems, enabling immediate action and seamless automation across your entire stack.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Get Started
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  View API Docs
                </button>
             </div>
          </div>
        </section>

        {/* 🧠 FROM DETECTION TO ACTION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Detection to Action.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense webhooks allow your systems to react instantly when fraud is detected. Detection is only valuable if your system can act on it immediately.</p>
                 <div className="space-y-8">
                    {[
                      "Real-time processing for instant response",
                      "Scalable event-driven workflows",
                      "Decoupled components for reliability",
                      "Simpler system evolution and integration"
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-0.5" />
                         <span className="font-bold text-white text-[10px] uppercase tracking-widest">{p}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <Activity className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-12">The Event Flow.</h3>
                 <div className="space-y-10">
                    {[
                      { l: "Analyze", d: "Transaction enters Intelligence Layer" },
                      { l: "Generate", d: "Fraud signal or alert is created" },
                      { l: "Trigger", d: "Webhook event is fired instantly" },
                      { l: "Deliver", d: "Event sent to your secure endpoint" },
                      { l: "Act", d: "Your system blocks or alerts" }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-8 group/step">
                         <div className="text-brand-lime font-black italic text-xl group-hover/step:scale-125 transition-transform">0{i+1}</div>
                         <div>
                            <h5 className="font-bold text-white uppercase text-xs mb-1 tracking-tight">{step.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter uppercase tracking-widest">{step.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🚨 REAL-TIME EVENTS & 🔄 AUTOMATED WORKFLOWS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Trigger Actions Instantly.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">From detection to response, Deep Sense webhooks enable comprehensive automation across your core business logic.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
                 {platformEvents.map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.t}</h4>
                      <p className="text-[10px] text-zinc-400 font-inter leading-relaxed uppercase tracking-widest">{it.d}</p>
                   </div>
                 ))}
              </div>

              <div className="bg-zinc-50 p-12 lg:p-24 rounded-[80px] border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-tight font-manrope">Automate Your Response.</h2>
                    <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Link Deep Sense to your payment authorization, notification, and CRM systems for absolute operational efficiency.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {[
                         { l: "Block Triggers", d: "Stop fraud in its tracks." },
                         { l: "Notification Hooks", d: "Alert Slack or PagerDuty." },
                         { l: "User Risk Sync", d: "Update risk tiers instantly." },
                         { l: "Case Initiation", d: "Open reviews automatically." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-4">
                            <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                            <div>
                               <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{it.l}</h5>
                               <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-neutral-900 rounded-[72px] p-12 lg:p-20 text-white relative overflow-hidden group">
                    <Activity className="w-32 h-32 absolute top-0 right-0 p-8 text-brand-lime opacity-5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-8">Reliable Fulfillment</h3>
                    <ul className="space-y-8">
                       {[
                         { s: "Retry Mechanisms", d: "Automatic handling of network flakiness." },
                         { s: "Delivery Tracking", d: "Full history of event success rates." },
                         { s: "Failure Handling", d: "Graceful error hooks and notifications." }
                       ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                           <div className="w-5 h-5 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mt-0.5">
                              <CheckCircle2 className="w-3 h-3 text-brand-lime" />
                           </div>
                           <div>
                              <h6 className="text-[11px] font-bold uppercase tracking-widest text-white">{step.s}</h6>
                              <p className="text-[10px] text-white/30 font-inter">{step.d}</p>
                           </div>
                        </div>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚡ RELIABILITY & 🔐 SECURITY */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
              {[
                { 
                  t: "Secure Event Delivery", 
                  d: "All webhook payloads are cryptographically signed with HMAC SHA-256 for absolute verification.", 
                  i: <Lock />,
                  l: ["Signed payloads", "Replay protection", "HTTPS Delivery"]
                },
                { 
                  t: "Visibility & Control", 
                  d: "Full event logs and delivery status tracking give you absolute command over your signals.", 
                  i: <Eye />,
                  l: ["Delivery Logs", "Retry history", "Debug consoles"]
                },
                { 
                  t: "Flexible Event System", 
                  d: "Configure which events trigger webhooks and customize endpoints to suit your workflow.", 
                  i: <Settings />,
                  l: ["Custom triggers", "Multiple endpoints", "Scale-ready intake"]
                }
              ].map((b, i) => (
                <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                   <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(b.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                   </div>
                   <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-8">{b.t}</h3>
                   <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">{b.d}</p>
                   <div className="mt-auto pt-8 border-t border-gray-50 flex flex-wrap justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                      {b.l.map((tag, j) => (
                        <span key={j}>{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">The Webhook Advantage.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Deep Sense webhooks eliminate the need for inefficient polling, enabling truly reactive fraud systems.</p>
              </div>

              <div className="overflow-x-auto text-left">
                 <table className="w-full border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Webhook Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-200 italic">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Real-Time Event Delivery", d: "Yes (Instant)", s: "Polling / Delayed" },
                         { c: "Automated Workflows", d: "Yes (Full support)", s: "Manual / Restricted" },
                         { c: "Event Reliability", d: "99.9% (Retries)", s: "Variable" },
                         { c: "Integration Flexibility", d: "High (Any Tech Stack)", s: "Limited SDK Support" },
                         { c: "Secure Verification", d: "Yes (HMAC SHA-256)", s: "Insecure IP blocks" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-neutral-50 transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-200 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 🏭 USE CASES */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Strategic Utility.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Webhooks add value wherever immediate signal-to-action orchestration is required.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Payment Auth", d: "Block or review in the flow." },
                      { l: "SOC Automation", d: "Alert teams in Slack/Discord." },
                      { l: "Internal Risk", d: "Sync engines instantly." },
                      { l: "Orchestration", d: "Link multiple third-party tools." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[40px] hover:bg-white/10 transition-all">
                         <h5 className="font-bold text-brand-lime text-xs mb-1 uppercase tracking-tight italic font-manrope">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl relative overflow-hidden backdrop-blur-xl group">
                 <Activity className="w-40 h-40 absolute bottom-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Business Impact.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">By reducing response time from minutes to milliseconds, Deep Sense webhooks significantly reduce operational risk and fraud loss exposure.</p>
                 <div className="space-y-6">
                    {["Reduce response window", "Automate fraud handling", "Improve ops efficiency", "Enable real-time logic"].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                         <span className="text-[11px] font-bold uppercase tracking-widest text-white">{it}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Connect Your <br /><span className="opacity-30">Infrastructure.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Enable real-time reactions and absolute automation in minutes.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900 font-manrope">
                      Get Started
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10 font-manrope">
                      Explore Integrations
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
