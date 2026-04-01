"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Plug, 
  Workflow, 
  Zap, 
  Terminal, 
  Activity, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  Share2, 
  Server,
  RefreshCw,
  LayoutGrid,
  Laptop,
  Code2
} from "lucide-react";

const integrationOptions = [
  { 
    title: "REST APIs", 
    description: "Send transactions for analysis and receive real-time scoring via standard JSON APIs.", 
    icon: <Terminal />, 
    tags: ["POST /transactions", "JSON", "Sub-50ms"] 
  },
  { 
    title: "Webhooks", 
    description: "Receive real-time alerts and trigger event-driven workflows in your backend systems.", 
    icon: <Workflow />, 
    tags: ["HMAC Verifiable", "Async", "Retries"] 
  },
  { 
    title: "Event Streaming", 
    description: "Integrate with high-volume streaming systems like Kafka for large-scale data ingestion.", 
    icon: <Share2 />, 
    tags: ["Enterprise Only", "Kafka", "Pulsar"] 
  }
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Plug className="w-3.5 h-3.5" />
               Developer-First Connectivity
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Seamless Integration <br />
               <span className="text-zinc-300 italic">With Your Systems.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[700px] mb-14">
               Deep Sense integrates easily with your existing infrastructure — from payment gateways to fintech platforms — using simple APIs and real-time event processing.
             </p>
             <div className="flex flex-wrap gap-8">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3">
                  View API Docs
                  <Code2 className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Get Started
                </button>
             </div>
          </div>
        </section>

        {/* 🧠 INTEGRATION OVERVIEW */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Built for <br />Easy Integration.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense is designed to plug into your system with minimal effort, enabling real-time fraud detection without disrupting your core workflows.</p>
                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { l: "API-First", d: "Developer-centric design." },
                      { l: "Flexible Patterns", d: "Supports any architecture." },
                      { l: "Minimal Setup", d: "Live in minutes, not weeks." },
                      { l: "Fast Value", d: "Instant ROI after launch." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group">
                 <Server className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">System Connectivity.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Whether you are building on a modern microservices architecture or a robust legacy monolith, our language-agnostic APIs ensure a friction-free connection.</p>
                 <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-full w-full justify-center">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-lime">Compatible with any tech stack</span>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ INTEGRATION OPTIONS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase tracking-tighter italic mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Multiple Ways to Connect.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Choose the integration pattern that best fits your infrastructure requirements and data volume.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {integrationOptions.map((opt, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[64px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-neutral-900 rounded-3xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(opt.icon as React.ReactElement<{ className: string }>, { className: "w-7 h-7" })}
                      </div>
                      <h3 className="text-2xl font-bold italic uppercase tracking-tight mb-6">{opt.title}</h3>
                      <p className="text-sm text-zinc-400 font-inter italic mb-10 leading-relaxed">{opt.description}</p>
                      <div className="mt-auto flex flex-wrap justify-center gap-3">
                         {opt.tags.map((tag, j) => (
                           <span key={j} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-colors">{tag}</span>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📥 INGESTION & 📤 RESPONSES */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Real-Time Data Ingestion.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Send payment transactions, login events, or account activity data to Deep Sense via our secure API endpoint for instant evaluation.</p>
                 <div className="space-y-6">
                    {[
                      { l: "Payment Transactions", d: "Instantly score transactions before authorization." },
                      { l: "Session & Logins", d: "Detect account takeover and bot activity." },
                      { l: "Account Events", d: "Monitor high-risk changes to user profiles." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-center group">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <Zap className="w-5 h-5" />
                         </div>
                         <div>
                            <h5 className="font-bold text-white uppercase text-xs tracking-tight">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl text-center group overflow-hidden relative backdrop-blur-xl">
                 <Cpu className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Instant Response.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense returns a risk score and clear decision (Approve / Review / Block) within milliseconds, ensuring no latency impact on user experience.</p>
                 <div className="flex flex-wrap gap-4 justify-center">
                    <div className="px-8 py-4 bg-brand-lime/10 text-brand-lime rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-lime/20">Risk Score: 12</div>
                    <div className="px-8 py-4 bg-emerald-400/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-400/20">Action: APPROVE</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📡 EVENT-DRIVEN WORKFLOWS & 🔌 SCENARIOS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative group lg:order-last">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-lime/20 transition-all" />
                 <div className="bg-white p-12 lg:p-24 rounded-[88px] border border-gray-100 shadow-3xl relative z-10">
                    <Workflow className="w-16 h-16 text-neutral-900 mb-10" />
                    <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-8">Event-Driven Workflows</h3>
                    <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">React to fraud signals in real-time by linking Deep Sense events to your critical internal actions.</p>
                    <div className="space-y-6">
                       {[
                         { s: "Automated Blocking", d: "Instantly halt transactions or sessions." },
                         { s: "System Notifications", d: "Alert internal Slack or PagerDuty." },
                         { s: "Risk Profile Updates", d: "Update user risk tiers in real-time." },
                         { s: "Case Initiation", d: "Trigger manual review in the Dashboard." }
                       ].map((it, i) => (
                         <div key={i} className="flex gap-4 items-start">
                            <div className="w-5 h-5 bg-neutral-900 rounded-lg flex items-center justify-center mt-0.5 text-brand-lime">
                               <RefreshCw className="w-3 h-3" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{it.s}: <span className="text-neutral-900">{it.d}</span></span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope">Where Deep Sense Fits.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Flexible integration scenarios tailored for every financial and e-commerce vertical.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Payment Systems", d: "Fraud checks before approval.", i: <Zap /> },
                      { l: "Fintech Platforms", d: "Account action monitoring.", i: <Globe /> },
                      { l: "E-commerce Stores", d: "Checkout & Promo abuse.", i: <Laptop /> },
                      { l: "Banking Core", d: "Transaction alerts & review.", i: <LayoutGrid /> }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
                         <div className="text-neutral-900 mb-4">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ⚡ PERFORMANCE & 🧪 TESTING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 lg:p-24 bg-neutral-900 text-white rounded-[80px] shadow-3xl group overflow-hidden relative border border-white/5">
                 <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope">Low Latency, High Throughput.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense is built on a high-concurrency architecture that supports massive transaction volumes with sub-millisecond response stability.</p>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <div className="text-4xl font-black text-brand-lime italic mb-1 tracking-tighter">&lt;35ms</div>
                       <div className="text-[9px] font-bold uppercase tracking-widest text-white/20">Average Latency</div>
                    </div>
                    <div>
                       <div className="text-4xl font-black text-white italic mb-1 tracking-tighter">10k+</div>
                       <div className="text-[9px] font-bold uppercase tracking-widest text-white/20">Requests / Sec</div>
                    </div>
                 </div>
              </div>

              <div className="p-12 lg:p-24 bg-white border border-gray-100 rounded-[80px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope text-neutral-900">Sandbox Environment.</h3>
                 <p className="text-zinc-500 text-sm font-inter italic mb-10 leading-relaxed">Test before you go live. Every organization gets access to a full-featured sandbox environment to simulate transactions and validate integration logic safely.</p>
                 <button className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase hover:bg-brand-lime hover:text-neutral-900 transition-all">
                    Access Sandbox
                 </button>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Built for Modern Systems.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See how our API-first approach compares to traditional, legacy fraud detection systems.</p>
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Integration Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-300 italic">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "API-First Architecture", d: "Yes", s: "Limited / SOAP" },
                         { c: "Real-Time Scoring", d: "Yes (Sub-50ms)", s: "Often Batch / Delayed" },
                         { c: "Webhooks Support", d: "Yes (HMAC-Verified)", s: "Limited / None" },
                         { c: "Tech Stack Agnostic", d: "High", s: "Low (Specific SDKs)" },
                         { c: "Time to Integration", d: "Minutes", s: "Weeks / Months" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-white transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-300 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 📊 MONITORING & VISIBILITY */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center text-center lg:text-left">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope">Full Monitoring.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px] leading-relaxed">Track integration performance and system health with built-in observability tools designed for technical operators.</p>
                 <div className="flex flex-wrap gap-4">
                    {["API Usage Logs", "Webhook Delivery Status", "System Health Hooks", "Debug Console"].map((tag, i) => (
                      <span key={i} className="px-6 py-3 bg-neutral-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                    ))}
                 </div>
              </div>
              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 relative overflow-hidden group">
                 <Activity className="w-32 h-32 absolute bottom-0 right-0 p-8 text-brand-lime opacity-5 group-hover:scale-110 transition-transform" />
                 <div className="text-brand-lime text-[13px] font-bold uppercase tracking-[0.2em] mb-8">System Metrics</div>
                 <div className="text-6xl font-black text-white italic tracking-tighter mb-4 uppercase">100%</div>
                 <div className="text-[11px] font-bold uppercase tracking-widest text-white/30">Webhook Delivery Success</div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-bottom pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Start Integrating <br />Today.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Zero friction. Real-time intelligence. Infinite scalability.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      View API Docs
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
                      Get API Key
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
