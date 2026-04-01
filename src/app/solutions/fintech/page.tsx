"use client";

import React from "react";
import Link from "next/link";
import { 
  Zap, 
  ArrowRight, 
  Shield, 
  Code2, 
  Search, 
  Activity, 
  Database, 
  Users, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  Terminal, 
  Cpu, 
  Network, 
  Globe, 
  Lock, 
  Workflow,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Fingerprint,
  Share2
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const fintechUseCases = [
  {
    title: "User Onboarding",
    icon: <Users />,
    desc: "Detect fake accounts and prevent signup abuse with real-time identity analysis.",
    items: ["Fake accounts", "Synthetic identities", "Signup abuse"]
  },
  {
    title: "Account Takeover",
    icon: <Lock />,
    desc: "Stop hijacked sessions and credential stuffing through device-level tracking.",
    items: ["Unusual login", "Suspicious devices", "Account changes"]
  },
  {
    title: "Payment Fraud",
    icon: <Activity />,
    desc: "Real-time transaction scoring to identify unauthorized fund movements.",
    items: ["High-risk payments", "Unauthorized transfers", "Chargeback reduction"]
  },
  {
    title: "Abuse & Exploitation",
    icon: <Sparkles />,
    desc: "Detect coordinated bonus farms and referral fraud networks.",
    items: ["Bonus abuse", "Referral fraud", "Multi-account abuse"]
  }
];

const fintechComparison = [
  { capability: "API-first architecture", deepSense: "Yes", traditional: "Limited" },
  { capability: "Real-time decisioning", deepSense: "Yes", traditional: "Often delayed" },
  { capability: "Strategy customization", deepSense: "High", traditional: "Hard-coded" },
  { capability: "AI + Graph intelligence", deepSense: "Yes", traditional: "Rarely" },
  { capability: "Integration Speed", deepSense: "Days", traditional: "Months" }
];

export default function FintechSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1000px] relative z-10 flex flex-col md:flex-row items-center gap-20">
             <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
                  <Zap className="w-3.5 h-3.5" />
                  API-First Fintech Core
                </div>
                <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
                  Fraud Detection <br />
                  <span className="text-zinc-300">Built for Fintech.</span>
                </h1>
                <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[600px]">
                  Scale your fintech platform with real-time fraud detection, intelligent risk scoring, and flexible APIs — without slowing down your product.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg group">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-lg">
                    Request Demo
                  </button>
                </div>
             </div>
             
             <div className="shrink-0 w-full md:w-[450px] relative">
                <div className="absolute inset-0 bg-brand-lime/5 rounded-[40px] blur-[80px]" />
                <div className="bg-neutral-900 rounded-[50px] p-10 text-white shadow-3xl font-mono text-xs relative overflow-hidden group">
                   <div className="flex gap-2 mb-8">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                   </div>
                   <div className="space-y-4 text-white/60">
                      <p className="text-brand-lime">// Initialize Deep Sense</p>
                      <p><span className="text-purple-400">const</span> ds = <span className="text-purple-400">new</span> <span className="text-amber-400">DeepSense</span>(<span className="text-blue-300">&quot;apiKey_9182&quot;</span>);</p>
                      <p><span className="text-purple-400">const</span> risk = <span className="text-purple-400">await</span> ds.<span className="text-amber-400">score</span>({"{"}</p>
                      <p className="pl-6">&quot;userId&quot;: <span className="text-blue-300">&quot;fin_9011&quot;</span>,</p>
                      <p className="pl-6">&quot;amount&quot;: <span className="text-blue-300">1254.00</span>,</p>
                      <p className="pl-6">&quot;metadata&quot;: {"{...}"}</p>
                      <p>{"}"});</p>
                      <p className="text-zinc-500">// Result in &lt; 50ms</p>
                      <p className="text-emerald-400">console.log(risk.score); // 0.12 (SAFE)</p>
                   </div>
                   <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Terminal className="w-24 h-24" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 🚨 FINTECH CHALLENGES */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-12 uppercase italic tracking-tight">Fast Growth Comes with Fraud Risk</h2>
              <p className="text-xl text-zinc-500 font-inter max-w-[700px] mx-auto mb-20 leading-relaxed italic">
                 &quot;You can&apos;t scale fintech without controlling fraud. Rapid user growth attracts organized fraudsters through accounts, payments, and system exploits.&quot;
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Rapid User Onboarding", d: "Scaling fake accounts faster than your ops team can review.", i: <Users /> },
                   { t: "Payment Velocity", d: "High-throughput transaction strings hiding coordinated fraud.", i: <Activity /> },
                   { t: "Bonus & Referral Farms", d: "Automated scripts draining marketing budgets via multi-accounts.", i: <Sparkles /> },
                   { t: "Zero Latency Expectation", d: "Users expect instant approval, leaving no time for manual checks.", i: <Zap /> }
                 ].map((p, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm flex flex-col items-center text-center hover:shadow-2xl transition-all">
                      <div className="w-16 h-16 bg-zinc-900 rounded-3xl flex items-center justify-center text-brand-lime shadow-xl mb-8">
                         {React.cloneElement(p.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-lg font-bold font-manrope mb-4 uppercase">{p.t}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-inter">{p.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 💡 THE APPROACH & ⚙️ BUILT FOR DEVELOPERS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold leading-tight italic uppercase tracking-tighter">API-First <br /><span className="text-zinc-300 underline decoration-brand-lime/20 decoration-8 underline-offset-16">Fraud Core.</span></h2>
                 <p className="text-xl text-zinc-500 leading-relaxed font-inter italic max-w-[500px]">
                    Deep Sense is a flexible, API-driven platform that integrates into your fintech logic seamlessly. Integrate in days, not months.
                 </p>
                 <div className="space-y-8">
                    {[
                      { t: "REST APIs", d: "High-performance ingestion for transactions and users.", i: <Globe /> },
                      { t: "Real-time Scoring", d: "Score transactions at the edge with sub-50ms latency.", i: <Search /> },
                      { t: "Webhooks", d: "Asynchronous alerts for low-priority operation events.", i: <Workflow /> },
                      { t: "Secure Auth", d: "Enterprise-grade HMAC and API key security layers.", i: <Lock /> }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-6 items-center group">
                         <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime transition-all duration-300 text-neutral-900">
                            {React.cloneElement(f.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                         </div>
                         <div>
                            <h4 className="font-bold text-neutral-900 mb-1">{f.t}</h4>
                            <p className="text-xs text-zinc-400">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                 <Code2 className="w-32 h-32 absolute top-0 right-0 p-8 text-white opacity-5 animate-pulse" />
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-3xl font-bold tracking-tight italic uppercase">Fintech Scale Engine</h3>
                    <div className="space-y-10">
                       {[
                         { l: "Req / Sec", v: "250,000+", p: "95%" },
                         { l: "Uptime SLA", v: "99.99%", p: "100%" },
                         { l: "P99 Latency", v: "< 35ms", p: "90%" }
                       ].map((stat, i) => (
                         <div key={i} className="space-y-4">
                            <div className="flex justify-between items-end">
                               <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.l}</span>
                               <span className="text-2xl font-bold text-brand-lime italic">{stat.v}</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-brand-lime" style={{ width: stat.p }} />
                            </div>
                         </div>
                       ))}
                    </div>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest pt-10 border-t border-white/5">Supports Global Deployment Regions</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 🛡️ KEY FINTECH USE CASES */}
        <section className="py-40 bg-zinc-50 rounded-[120px] mx-4 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic mb-8">Protect every Stage.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic">From first signup to high-value transaction, we cover the full product lifecycle.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {fintechUseCases.map((uc, i) => (
                   <div key={i} className="p-12 bg-white rounded-[56px] shadow-sm hover:shadow-3xl transition-all border border-gray-100 group translate-y-0 hover:-translate-y-4">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-brand-lime transition-all mb-8 shadow-sm">
                         {React.cloneElement(uc.icon as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold font-manrope mb-4">{uc.title}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed mb-10 h-[60px]">{uc.desc}</p>
                      <div className="space-y-4 pt-10 border-t border-gray-50">
                         {uc.items.map((it, j) => (
                           <div key={j} className="flex gap-4 items-center font-bold text-[10px] uppercase tracking-widest text-zinc-300">
                              <div className="w-1 h-1 bg-brand-lime rounded-full" />
                              {it}
                           </div>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ⚡ REAL-TIME DETECTION & 🧠 INTELLIGENT SCORING */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-brand-lime/5 blur-[120px] pointer-events-none" />
                 <div className="relative h-full bg-neutral-900 rounded-[80px] p-12 lg:p-20 overflow-hidden shadow-3xl text-white group">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                    <Sparkles className="w-40 h-40 absolute top-0 right-0 p-12 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="relative z-10 space-y-12">
                       <h3 className="text-4xl font-bold tracking-tighter uppercase italic leading-none">Intelligent <br />Scoring Layer.</h3>
                       <p className="text-white/40 text-lg font-inter italic leading-relaxed">By combining millisecond-level scoring with deep graph intelligence, we uncover high-density fraud rings that legacy systems miss entirely.</p>
                       <div className="space-y-6">
                          {[
                            { t: "Machine Learning", s: "Live" },
                            { t: "Anomaly Detection", s: "Active" },
                            { t: "Rules Engine", s: "On" },
                            { t: "Device Intelligence", s: "99.9%" },
                            { t: "Graph Analysis", s: "Linked" }
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center bg-white/5 border border-white/5 p-4 rounded-2xl">
                               <span className="font-bold text-xs uppercase tracking-widest">{item.t}</span>
                               <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest bg-brand-lime/10 px-2 py-1 rounded">{item.s}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Stop Fraud <br />as It Happens.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed italic max-w-[500px]">Millisecond-level risk updates ensure your customer journey is never interrupted by security delays.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "No Batching", d: "Events are processed event-by-event as they arrive." },
                      { t: "Instant Decisions", d: "Block or review based on real-time risk scores." },
                      { t: "Threshold Control", d: "Adjust rules and limits on the fly via UI or API." },
                      { t: "Scale without Delay", d: "Our architecture handles massive concurrency." }
                    ].map((feat, i) => (
                      <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:bg-white hover:shadow-xl transition-all">
                         <TrendingUp className="w-6 h-6 text-neutral-900 mb-4" />
                         <h4 className="font-bold text-neutral-900 mb-2 uppercase text-sm tracking-tight">{feat.t}</h4>
                         <p className="text-xs text-zinc-400 font-inter leading-relaxed">{feat.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🕸️ COMPLEX FRAUD & 🧪 FLEXIBILITY */}
        <section className="py-40 bg-neutral-900 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,247,1,0.05)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[850px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic mb-8">Go Beyond Basic Detection.</h2>
                 <p className="text-xl text-white/40 font-inter italic">Traditional tools flag isolated events. Deep Sense uncovers the organized hidden patterns that define professional fraud rings.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { t: "Detect Fraud Rings", d: "Find clusters of actors sharing device and IP signatures.", i: <Network /> },
                   { t: "Identify Linked Entities", d: "Map out historical relationships across distinct accounts.", i: <Share2 /> },
                   { t: "Track Device Abuse", d: "Uncover persistent hardware fingerprints reused for theft.", i: <Fingerprint /> }
                 ].map((it, i) => (
                   <div key={i} className="text-center group">
                      <div className="w-20 h-20 mx-auto bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:bg-brand-lime group-hover:text-black transition-all duration-500">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold italic tracking-tight uppercase mb-4">{it.t}</h4>
                      <p className="text-sm text-white/30 leading-relaxed font-inter px-6">{it.d}</p>
                   </div>
                 ))}
              </div>

              <div className="mt-32 p-12 lg:p-24 bg-white/5 border border-white/10 rounded-[80px] shadow-3xl text-center group">
                 <h3 className="text-3xl font-bold italic uppercase mb-8 opacity-60">Flexibility & Control</h3>
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      "Define custom rules",
                      "Adjust thresholds",
                      "Tune scoring logic",
                      "Dynamic features"
                    ].map((it, i) => (
                      <div key={i} className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-[10px] uppercase tracking-widest text-brand-lime">
                        {it}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter">Built for Speed and Flexibility.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 font-bold italic uppercase tracking-widest text-[10px]">
               <div className="bg-neutral-900 text-white rounded-[50px] border border-white/10 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-10 opacity-30">Capability</th>
                           <th className="p-10 text-brand-lime border-l border-white/10">Deep Sense</th>
                           <th className="p-10 opacity-30 hidden md:table-cell">Traditional Systems</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80">
                        {fintechComparison.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-10">{row.capability}</td>
                             <td className="p-10 border-l border-white/5 text-white">{row.deepSense}</td>
                             <td className="p-10 opacity-10 hidden md:table-cell">{row.traditional}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT & TRUST */}
        <section className="py-40 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32">
                 <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase italic opacity-10 leading-none">Scale Safely.</h2>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto italic mt-12">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;We integrated Deep Sense in days, not months. It scaled directly with our massive user growth without any performance degradation.&quot;</p>
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;The API-first approach allowed us to customize our fraud strategy as our product evolved from cards to domestic transfers.&quot;</p>
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { l: "Integration Time", v: "48 hours" },
                   { l: "False Positive Reduction", v: "55%" },
                   { l: "Annual Fraud Loss Reduction", v: "72%" },
                   { l: "Ops Capacity", v: "4x increase" }
                 ].map((st, i) => (
                   <div key={i} className="flex flex-col items-center">
                      <span className="text-6xl font-black italic tracking-tighter text-neutral-900 mb-4">{st.v}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">{st.l}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-0 group-hover:scale-100 transition-transform duration-1000 origin-center" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Build & Scale <br />with Confidence.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Secure your fintech future with fraud detection that works at the speed of your code.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      Get Started
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
                      Request Demo
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
