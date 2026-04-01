"use client";

import React from "react";
import { 
  ArrowRight, 
  Code2, 
  Key, 
  Send, 
  Terminal, 
  Activity, 
  Lock, 
  Globe, 
  Layers, 
  BookOpen, 
  LifeBuoy, 
  Cpu, 
  ShieldCheck,
  Webhook
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const apiComparison = [
  { feature: "Simplicity and Integration", deepSense: "Yes", typical: "Limited" },
  { feature: "Real-time Fraud Scoring", deepSense: "Yes", typical: "Variable" },
  { feature: "Decision Logic Control", deepSense: "High", typical: "Low" },
  { feature: "Webhook Support", deepSense: "Yes", typical: "Limited" },
  { feature: "Scalable Infrastructure", deepSense: "Yes", typical: "Sometimes" }
];

export default function ApiOverviewPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[900px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Terminal className="w-3.5 h-3.5" />
               Developer First Interface
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Integrate in <br />
               <span className="text-zinc-300">Minutes.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
               Deep Sense provides simple, powerful APIs to ingest transactions, score risk, and receive fraud alerts in real time — built directly for your production systems.
             </p>
             <div className="flex flex-col sm:row gap-6">
               <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg group">
                 View API Docs
                 <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-lg">
                 Get API Key
               </button>
             </div>
          </div>
        </section>

        {/* 🚀 QUICK START */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold uppercase italic tracking-tight mb-20 text-neutral-900">Get Started in Minutes.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                 {[
                   { t: "Create Account", d: "Join the platform in seconds and set up your tenant.", i: <Globe /> },
                   { t: "Get API Key", d: "Generate your secure Bearer token for authentication.", i: <Key /> },
                   { t: "Ingest Data", d: "Send your first transaction event to our ingest pipeline.", i: <Send /> },
                   { t: "Score Risk", d: "Receive an instant fraud score and detailed breakdown.", i: <Activity /> }
                 ].map((step, i) => (
                   <div key={i} className="relative group">
                      <div className="text-8xl font-black text-black/5 absolute -top-10 -left-4 group-hover:text-brand-lime/10 transition-colors pointer-events-none italic">{i+1}</div>
                      <div className="relative pt-6">
                         <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime shadow-xl mb-6 group-hover:scale-110 transition-transform">
                            {React.cloneElement(step.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                         </div>
                         <h4 className="text-xl font-bold font-manrope mb-4 uppercase tracking-tight italic">{step.t}</h4>
                         <p className="text-sm text-zinc-400 font-inter leading-relaxed">{step.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ⚙️ CORE API CAPABILITIES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold italic tracking-tighter uppercase leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">What You Can Do <br />with the API.</h2>
                    <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense isn&apos;t just about scores. It&apos;s a full-lifecycle fraud operation engine accessible via a single set of RESTful endpoints.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                       {[
                         { t: "Transaction Ingestion", d: "Send every session and transaction for analysis." },
                         { t: "Fraud Scoring", d: "Get live multi-layer breakdown scores in &lt; 50ms." },
                         { t: "Actionable Decisioning", d: "Direct approve / review / block signals for your logic." },
                         { t: "Webhook Pipelines", d: "Automate alerts to Slack, Discord, or internal bots." }
                       ].map((cap, i) => (
                         <div key={i} className="flex gap-4">
                            <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                            <div>
                               <h4 className="font-bold text-neutral-900 mb-1">{cap.t}</h4>
                               <p className="text-xs text-zinc-400 leading-relaxed font-inter">{cap.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full" />
                    <div className="bg-neutral-900 rounded-[64px] p-12 lg:p-20 text-white relative overflow-hidden shadow-3xl text-center group">
                       <Code2 className="w-32 h-32 absolute top-0 right-0 p-8 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                       <div className="relative z-10 space-y-12 h-full flex flex-col justify-center">
                          <h3 className="text-3xl font-bold italic tracking-tight uppercase">High Availability Core</h3>
                          <p className="text-white/40 text-sm italic max-w-[350px] mx-auto mb-10 leading-relaxed">Built for production with 99.99% uptime and globally distributed ingestion edge points.</p>
                          <div className="flex gap-4 justify-center">
                             <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-brand-lime group-hover:bg-brand-lime/10 transition-all cursor-default">
                               Latency: &lt; 35ms
                             </div>
                             <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-brand-lime group-hover:bg-brand-lime/10 transition-all cursor-default">
                               SLA: 99.99%
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📥 INGESTION & 📤 RESPONSE EXAMPLE */}
        <section className="py-40 bg-neutral-900 relative overflow-hidden rounded-[100px] mx-4">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                 <div className="flex items-center gap-4 text-brand-lime mb-8">
                    <div className="w-10 h-10 bg-brand-lime/20 rounded-xl flex items-center justify-center">
                       <Send className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold italic uppercase tracking-tight">INGESTION Example</h3>
                 </div>
                 <div className="bg-black/50 border border-white/10 rounded-[40px] p-10 font-mono text-sm overflow-x-auto shadow-2xl relative group">
                    <div className="absolute top-6 right-8 text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-brand-lime transition-colors">POST /api/v1/transactions</div>
                    <pre className="text-white/60">
{`{
  "user_id": "user_123",
  "amount": 250.00,
  "currency": "USD",
  "device_id": "device_456",
  "ip_address": "192.168.1.1",
  "timestamp": "2026-01-01T12:00:00Z"
}`}
                    </pre>
                 </div>
                 <p className="text-white/30 text-xs italic font-inter px-8">Minimal schema requirements. Flexible metadata fields supported for custom logic.</p>
              </div>

              <div className="space-y-12">
                 <div className="flex items-center gap-4 text-brand-lime mb-8">
                    <div className="w-10 h-10 bg-brand-lime/20 rounded-xl flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold italic uppercase tracking-tight text-emerald-400">Response Example</h3>
                 </div>
                 <div className="bg-black/50 border border-white/10 rounded-[40px] p-10 font-mono text-sm overflow-x-auto shadow-2xl relative group">
                    <div className="absolute top-6 right-8 text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">RESPONSE 200 OK</div>
                    <pre className="text-white/60">
{`{
  "transaction_id": "txn_789",
  "risk_score": 0.87,
  "decision": "block",
  "breakdown": {
    "ml_score": 0.82,
    "rules_score": 0.90,
    "device_risk": 0.75,
    "graph_risk": 0.88,
    "anomaly_score": 0.80
  }
}`}
                    </pre>
                 </div>
                 <p className="text-white/30 text-xs italic font-inter px-8">Every response includes the full synthesis of all active fraud layers.</p>
              </div>
           </div>
        </section>

        {/* 🔐 AUTH & 📡 WEBHOOKS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16">Secure API Access.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">We use standard Bearer token authentication scoped to your tenant, ensuring your data remains isolated and secure.</p>
                 <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 font-mono text-xs text-zinc-400">
                    <div className="font-bold text-neutral-900 mb-2">{"// Auth Header"}</div>
                    Authorization: Bearer YOUR_API_KEY
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Tenant Scoping", d: "Total data isolation." },
                      { t: "Rotatable Keys", d: "Revoke and refresh anytime." },
                      { t: "HMAC Security", d: "Verified request integrity." }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <Lock className="w-5 h-5 text-brand-lime" />
                         <div className="font-bold text-xs uppercase tracking-tight">{f.t}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-zinc-50 p-12 lg:p-24 rounded-[80px] border border-gray-100 relative group overflow-hidden">
                 <Webhook className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-200 opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:rotate-45 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-3xl font-bold italic uppercase tracking-tight">Real-Time Alerts</h3>
                    <div className="space-y-10">
                       <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                          <div className="flex justify-between items-center mb-6">
                             <div className="font-mono text-[10px] text-zinc-400">WEBHOOK PAYLOAD</div>
                             <div className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded text-[9px] font-bold uppercase tracking-widest">event.created</div>
                          </div>
                          <pre className="font-mono text-xs text-zinc-500 overflow-x-auto">
{`{
  "event": "alert.created",
  "transaction_id": "txn_789",
  "risk_score": 0.87,
  "severity": "high"
}`}
                          </pre>
                       </div>
                       <p className="text-zinc-400 text-sm italic pr-12 font-inter leading-relaxed">Deep Sense notifies your backend via webhooks the instant an alert or case is created, allowing for automated operational responses.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧪 SANDBOX & 🧠 ANY STACK */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 rounded-[100px] mx-4 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {[
                   { t: "Sandbox Mode", d: "Simulate fraud scenarios and validate integrations in our risk-free testing environment.", i: <Activity /> },
                   { t: "Language Agnostic", d: "RESTful architecture means you can use us with Node, Python, Java, Go, or any stack.", i: <Layers /> },
                   { t: "Microservices Ready", d: "Lightweight and modular. Plug into complex distributed systems effortlessly.", i: <Cpu /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white rounded-[56px] shadow-sm hover:shadow-2xl transition-all border border-zinc-200 group translate-y-0 hover:-translate-y-4">
                      <div className="w-16 h-16 bg-neutral-900 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight mb-4">{it.t}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-inter">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📚 DOCS & 🆘 SUPPORT */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Built for Production.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">We provide everything you need to go from integration to production-ready fraud operations in record time.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 group hover:bg-neutral-900 transition-colors">
                       <BookOpen className="w-12 h-12 text-neutral-900 mb-8 group-hover:text-brand-lime transition-colors" />
                       <h4 className="text-xl font-bold uppercase italic tracking-tight group-hover:text-white transition-colors mb-4">API Documentation</h4>
                       <p className="text-xs text-zinc-400 font-inter">Step-by-step guides for every endpoint and flow.</p>
                    </div>
                    <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 group hover:bg-neutral-900 transition-colors">
                       <LifeBuoy className="w-12 h-12 text-neutral-900 mb-8 group-hover:text-brand-lime transition-colors" />
                       <h4 className="text-xl font-bold uppercase italic tracking-tight group-hover:text-white transition-colors mb-4">Dedicated Support</h4>
                       <p className="text-xs text-zinc-400 font-inter">Direct access to fraud engineering experts.</p>
                    </div>
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl text-center group">
                 <div className="absolute top-0 right-0 p-8 scale-x-[-1] opacity-5">
                    <Terminal className="w-40 h-40" />
                 </div>
                 <h3 className="text-3xl font-bold italic tracking-tight uppercase mb-12">Built for Simplicity and Power</h3>
                 <div className="space-y-6">
                    {apiComparison.map((item, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 border border-white/5 p-6 rounded-2xl">
                         <span className="font-bold text-xs uppercase tracking-widest text-white/40">{item.feature}</span>
                         <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest italic">
                            <span className="text-brand-lime">{item.deepSense}</span>
                            <span className="text-white/10">{item.typical}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-black duration-1000">
                 <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none italic uppercase">Start Building <br /><span className="opacity-30">Today.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-inter italic">Secure your platform for the real world with the developer-first fraud API.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-neutral-900 group-hover:text-white">
                      Get API Key
                    </button>
                    <button className="px-14 py-7 bg-white/10 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:border-transparent">
                      View API Docs
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
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
