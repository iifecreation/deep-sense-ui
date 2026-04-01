"use client";

import React from "react";
import { 
  Webhook, 
  ArrowRight, 
  Zap, 
  Bell, 
  RefreshCw, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  Clock, 
  Network, 
  FileCode, 
  History, 
  Settings, 
  Database, 
  AlertOctagon,
  Lock,
  Workflow,
  Smartphone,
  Layers
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const webhookEvents = [
  "transaction.scored",
  "transaction.flagged",
  "alert.created",
  "case.created",
  "case.updated"
];

const webhookComparison = [
  { capability: "Real-time delivery", deepSense: "Yes", typical: "Yes" },
  { capability: "Retry mechanism", deepSense: "Yes", typical: "Sometimes" },
  { capability: "Signature verification", deepSense: "Yes", typical: "Not always" },
  { capability: "Monitoring tools", deepSense: "Yes", typical: "Limited" }
];

export default function WebhooksPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[900px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Webhook className="w-3.5 h-3.5" />
               Event-Driven Intelligence
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Fraud Alerts <br />
               <span className="text-zinc-300">In Real-Time.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
               Deep Sense Webhooks provide instant notifications when fraud is detected — allowing your backend systems to react, block, and mitigate in milliseconds.
             </p>
             <div className="flex flex-col sm:row gap-6">
               <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg group">
                 View Webhook Docs
                 <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-lg">
                 Get Started
               </button>
             </div>
          </div>
        </section>

        {/* 🧠 WHAT ARE WEBHOOKS & ⚙️ HOW THEY WORK */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope uppercase italic tracking-tight underline decoration-brand-lime/20 decoration-8 underline-offset-16">What Are Webhooks?</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[550px]">Instead of polling for updates, your system is notified instantly. Webhooks allow Deep Sense to push data to your servers the moment an event occurs.</p>
                 <div className="space-y-6">
                    {[
                      { l: "Instant Push", d: "Data arrives in milliseconds." },
                      { l: "Reduced Overhead", d: "No periodic polling requests needed." },
                      { l: "Real-time Operations", d: "Trigger workflows the second fraud is detected." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">{it.l}</h5>
                            <p className="text-xs text-zinc-400 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[130px] rounded-full" />
                 <div className="relative h-full bg-neutral-900 rounded-[80px] p-12 lg:p-24 flex flex-col justify-center text-white shadow-3xl">
                    <div className="absolute top-0 right-0 p-12">
                       <Zap className="w-20 h-20 text-brand-lime opacity-10 animate-pulse" />
                    </div>
                    <div className="space-y-12 relative z-10">
                       <h3 className="text-3xl font-bold italic uppercase tracking-tight text-center">Event Flow Loop</h3>
                       <div className="space-y-10">
                          {[
                            { s: "Fraud Detected", i: <AlertOctagon />, c: "text-brand-lime" },
                            { s: "Webhook Created", i: <FileCode />, c: "text-emerald-400" },
                            { s: "Payload Delivered", i: <Bell />, c: "text-white" }
                          ].map((step, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                               <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors ${step.c}`}>
                                  {React.cloneElement(step.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                               </div>
                               <span className="font-bold text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">{step.s}</span>
                               <ArrowRight className="w-4 h-4 ml-auto text-white/5 group-hover:text-brand-lime transition-all" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🚨 SUPPORTED EVENTS & 📦 PAYLOAD EXAMPLE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold tracking-tight uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16">Webhook Events.</h2>
                    <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">We provide coverage for every stage of the fraud detection and investigation lifecycle.</p>
                    <div className="flex flex-wrap gap-4">
                       {webhookEvents.map((evt, j) => (
                         <div key={j} className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-mono text-[10px] font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all cursor-default">
                           {evt}
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative group">
                    <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="bg-neutral-900 rounded-[64px] p-12 lg:p-20 text-white relative overflow-hidden shadow-3xl">
                       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                       <div className="relative z-10 space-y-12 h-full flex flex-col justify-center">
                          <h3 className="text-3xl font-bold italic uppercase tracking-tight">Example Payload</h3>
                          <div className="bg-black/50 border border-white/10 p-8 rounded-3xl font-mono text-[11px] text-white/60 shadow-2xl relative">
                             <div className="absolute top-6 right-8 text-[9px] font-bold text-white/20 uppercase tracking-widest">JSON PAYLOAD</div>
                             <pre>
{`{
  "event": "alert.created",
  "timestamp": "2026-01-01T12:00:00Z",
  "data": {
    "transaction_id": "txn_123",
    "risk_score": 0.91,
    "severity": "high",
    "decision": "block"
  }
}`}
                             </pre>
                          </div>
                          <p className="text-white/20 text-xs italic font-inter text-center px-12 leading-relaxed">Stable schemas designed for easy parsing and rapid decision-making.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔗 CONFIGURE & 🔐 SECURITY */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(209,247,1,0.05)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl relative group text-center lg:text-left">
                 <Settings className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:rotate-90 transition-transform duration-1000" />
                 <h3 className="text-4xl font-bold uppercase italic tracking-tighter mb-8">Set Up your Endpoint.</h3>
                 <p className="text-white/40 text-lg italic leading-relaxed mb-12">Provide a secure HTTPS endpoint where Deep Sense will send events. We handle the orchestration; you handle the response.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "HTTPS Only", d: "Strict SSL/TLS verification." },
                      { t: "POST Requests", d: "JSON body delivery." },
                      { t: "2xx Success", d: "Acknowledgment handled." },
                      { t: "Timeout Logic", d: "5-second response limit." }
                    ].map((req, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-xs uppercase mb-1">{req.t}</h5>
                            <p className="text-[10px] text-white/20 font-inter">{req.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold italic tracking-tighter uppercase leading-tight underline decoration-white/10 decoration-8 underline-offset-16">Secure Delivery.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense signs every webhook event using an HMAC-SHA256 signature, ensuring authenticity and preventing replay attacks.</p>
                 <div className="bg-black/50 border border-white/10 p-8 rounded-3xl font-mono text-xs text-white/40 group">
                    <div className="font-bold text-brand-lime/50 mb-4 uppercase text-[10px] tracking-widest">{"// Authentication Header"}</div>
                    X-Signature: &lt;hashed_signature&gt;
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {["Receive Payload", "Compute Signature", "Accept or Reject"].map((v, i) => (
                      <div key={i} className="px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-center text-white/30 group hover:text-brand-lime transition-all">
                        {v}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔁 RETRIES & ⚡ REAL-TIME PROCESSING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center text-center lg:text-left">
              <div className="space-y-12 text-left">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16">Reliable Delivery.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">If your endpoint fails to respond, Deep Sense automatically retries with exponential backoff to guarantee delivery.</p>
                 <div className="space-y-6">
                    <div className="flex gap-6 items-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                       <Clock className="w-10 h-10 text-neutral-900" />
                       <div>
                          <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">Exponential Backoff</h5>
                          <p className="text-[10px] text-zinc-400 font-inter leading-relaxed max-w-[300px]">Retry attempts increase in duration over 72 hours until success or dead-letter threshold.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                       <RefreshCw className="w-10 h-10 text-neutral-900" />
                       <div>
                          <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">Automatic Recovery</h5>
                          <p className="text-[10px] text-zinc-400 font-inter leading-relaxed max-w-[300px]">Once your system is back online, we clear the queue instantly.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-zinc-50 p-12 lg:p-24 rounded-[80px] border border-gray-100 relative group overflow-hidden">
                 <Network className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-200 opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-12 text-left">
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight italic">Act Instantly on Fraud Signals</h3>
                    <p className="text-zinc-400 text-lg italic pr-12 font-inter leading-relaxed">Configure your backend to respond the moment critical signals arrive.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {[
                         { t: "Block transactions", d: "Instantly halt fund movements." },
                         { t: "Trigger workflows", d: "Notify your ops team on Slack." },
                         { t: "Notify users", d: "Send SMS for suspicious logins." },
                         { t: "Update risk systems", d: "Sync your internal models." }
                       ].map((uc, i) => (
                         <div key={i} className="space-y-1">
                            <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest">{uc.t}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter">{uc.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧪 TESTING & 📊 MONITORING */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16">Test & Monitor.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense provides full visibility into every event delivered to your integration endpoint.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Sandbox Simulation", d: "Trigger test events to validate your handling logic.", i: <Smartphone /> },
                      { t: "Delivery Logs", d: "Detailed history of every success and failure.", i: <History /> },
                      { t: "Success Metrics", d: "Real-time stats on your webhook response rates.", i: <Activity /> },
                      { t: "Retry History", d: "Trace every individual retry attempt through the console.", i: <RefreshCw /> }
                    ].map((f, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:bg-white/10 transition-all">
                         <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-transform">
                            {React.cloneElement(f.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                         </div>
                         <h4 className="font-bold text-xs uppercase mb-2 italic tracking-tight">{f.t}</h4>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed">{f.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[80px] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl group">
                 <Terminal className="w-32 h-32 absolute top-0 left-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Webhook Console</h3>
                 <p className="text-white/40 text-sm max-w-[300px] mx-auto leading-relaxed mb-12 italic">Deep Sense provides a dedicated debugging console to simulate payloads and inspect integration headers in real-time.</p>
                 <div className="inline-flex gap-4 p-4 bg-white/5 rounded-full border border-white/5">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Listening for Test Events...</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧠 BEST PRACTICES */}
        <section className="py-40">
           <div className="max-w-[800px] mx-auto px-8 text-center mb-32">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic leading-none opacity-20 mb-8 font-manrope">Build Robustly.</h2>
              <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto leading-relaxed">Follow industry-standard best practices to ensure your webhook consumer is resilient to failure.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Async Processing", d: "Acknowledge the webhook quickly (2xx) and process the data later.", i: <Workflow /> },
                { t: "Idempotency", d: "Ensure your system can handle duplicate events safely without side effects.", i: <Layers /> },
                { t: "Validate Signatures", d: "Always verify the HMAC-SHA256 signature before processing.", i: <Lock /> },
                { t: "Log Incoming Events", d: "Maintain your own local logs for debugging and auditing audits.", i: <Database /> }
              ].map((bp, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all">
                   <div className="w-16 h-16 bg-neutral-900 rounded-[28px] flex items-center justify-center text-brand-lime mb-8 shadow-xl group-hover:scale-110 transition-transform">
                      {React.cloneElement(bp.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-xl font-bold italic tracking-tight uppercase mb-4 text-neutral-900">{bp.t}</h4>
                   <p className="text-xs text-zinc-400 font-inter leading-relaxed">{bp.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter">Designed for Real-Time.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 font-bold italic uppercase tracking-widest text-[10px]">
               <div className="bg-neutral-900 text-white rounded-[50px] border border-white/10 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-10 opacity-30 tracking-widest">Capability</th>
                           <th className="p-10 text-brand-lime border-l border-white/10">Deep Sense</th>
                           <th className="p-10 opacity-30 hidden md:table-cell tracking-widest">Typical Webhooks</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80">
                        {webhookComparison.map((row, j) => (
                          <tr key={j} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-10">{row.capability}</td>
                             <td className="p-10 border-l border-white/5 text-white">{row.deepSense}</td>
                             <td className="p-10 opacity-10 hidden md:table-cell">{row.typical}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[140px] translate-y-1/2 rounded-full opacity-30 pointer-events-none" />
           <div className="max-w-[1200px] mx-auto px-8 space-y-24 relative z-10">
              <h2 className="text-4xl lg:text-9xl font-bold font-manrope uppercase italic opacity-10 leading-none">Instant Response.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 italic">
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;The webhook integration allowed us to automate fund recovery within seconds of a fraud ring detection.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— Engineering Lead, Mobile Payments</span>
                 </div>
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;We reduced our fraud response time from hours to milliseconds. Deep Sense Webhooks changed our entire recovery model.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CEO, Digital Banking Core</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000 font-manrope">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">React Faster to Fraud.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed italic">Join the world&apos;s leading fraud teams in automating detection and response.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      View Docs
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
                      Configure Webhooks
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
