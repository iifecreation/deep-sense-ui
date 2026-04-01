"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  ShieldCheck, 
  Activity, 
  Network, 
  BarChart3, 
  ArrowRight,
  Database,
  Users,
  CheckCircle2,
  Zap,
  Share2,
  Lock,
  Eye,
  Gavel,
  History,
  FileSearch,
  MessageSquareQuote,
  Layers
} from "lucide-react";

export default function AMLPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Gavel className="w-3.5 h-3.5" />
               Financial Intelligence Layer
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Detect Financial <br />
               <span className="text-zinc-300 italic">Activity Risks.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
               Deep Sense helps organizations identify suspicious transactions, detect hidden patterns, and support compliance workflows in real time.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3">
                  Request Demo
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. 🚨 THE PROBLEM & 3. 💡 THE SOLUTION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Financial Crime.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Money laundering involves complex networks and accounts. Traditional static rules fail to detect hidden patterns across segmented systems.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Complex Networks", d: "Crime involves multiple obscured accounts." },
                      { l: "Hidden Patterns", d: "Activity is often buried across systems." },
                      { l: "Static Dependency", d: "Traditional rules miss evolving threats." },
                      { l: "Compliance Burden", d: "High workloads for manual audit teams." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1 font-manrope italic">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 font-manrope">
                    <p className="text-xl font-bold italic text-white">“Financial crime is not always obvious — it requires deeper intelligence.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <ShieldCheck className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">Activity Detection.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense analyzes transaction patterns, relationships, and behavior to identify potential financial crime risks.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Pattern Analysis", i: <Zap /> },
                      { l: "Anomaly Detection", i: <Activity /> },
                      { l: "Graph Intelligence", i: <Network /> },
                      { l: "Investigation Support", i: <FileSearch /> }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-brand-lime/20 transition-all group/it">
                         <div className="text-brand-lime mb-4 group-hover/it:scale-110 transition-transform">{it.i}</div>
                         <h6 className="text-[10px] font-bold uppercase tracking-widest text-white">{it.l}</h6>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. ⚙️ HOW IT WORKS (FLOW) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Intelligence Path.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Transforming transactions into structured insights for risk and compliance operations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
                 {[
                   { l: "Monitor", d: "Transaction activity tracking." },
                   { l: "Detect", d: "Pattern & anomaly identification." },
                   { l: "Analyze", d: "Linked entity cross-check." },
                   { l: "Identify", d: "Suspicious activity scoring." },
                   { l: "Alert", d: "Case & workflow generation." }
                 ].map((step, i) => (
                   <React.Fragment key={i}>
                    <div className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center">
                       <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-transform">
                          <span className="font-bold text-sm italic">0{i+1}</span>
                       </div>
                       <h4 className="text-lg font-bold italic uppercase tracking-tight mb-2 font-manrope">{step.l}</h4>
                       <p className="text-[10px] text-zinc-400 font-inter uppercase tracking-widest leading-relaxed font-manrope">{step.d}</p>
                    </div>
                    {i < 4 && <div className="hidden lg:flex justify-center"><ArrowRight className="w-6 h-6 text-zinc-100" /></div>}
                   </React.Fragment>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. 🧠 PATTERN & 6. 🕸️ NETWORK DETECTION */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">Behavior Patterns.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Identify sophisticated money movement patterns using advanced signal logic.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Structuring (Smurfing)", d: "Small deposits to avoid threshold alerts.", i: <Zap /> },
                      { l: "Rapid fund movement", d: "Detect funds moving through account layers.", i: <Activity /> },
                      { l: "Unusual flows", d: "Identify non-standard transaction volumes.", i: <History /> },
                      { l: "Historical Analysis", d: "Compare current activity to base patterns.", i: <Database /> }
                    ].map((sig, i) => (
                      <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-[44px] hover:shadow-xl transition-all group">
                         <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all">{React.cloneElement(sig.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic font-manrope">{sig.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{sig.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <Share2 className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Hidden Relationships.</h3>
                 <div className="space-y-10">
                    {[
                      { l: "Linked Accounts", d: "Identify accounts sharing PII or device footprints." },
                      { l: "Shared Indicators", d: "Discover commonalities across obscured entities." },
                      { l: "Network Coordination", d: "Detect simultaneous flows across clusters." },
                      { l: "Infrastructure Mapping", d: "Map the relationships between high-risk actors." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-1.5 h-12 bg-brand-lime/10 group-hover/item:bg-brand-lime transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{it.l}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px] italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 7. 📊 SCORING & 8. 🚨 ALERTS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-center lg:text-left">
              <div className="p-12 lg:p-24 bg-white border border-gray-100 rounded-[80px] hover:shadow-2xl transition-all group overflow-hidden relative">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Activity Scoring.</h3>
                <p className="text-zinc-500 text-lg font-inter italic mb-10 leading-relaxed">Risk scores are assigned to every activity sequence, allowing for aggregated risk assessment across the entire user lifecycle.</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-50 rounded-[32px] text-center">
                       <div className="text-3xl font-black text-neutral-900 italic tracking-tighter">High</div>
                       <div className="text-[10px] font-bold uppercase text-zinc-300">Confidence</div>
                    </div>
                    <div className="p-6 bg-neutral-900 rounded-[32px] text-center">
                       <div className="text-3xl font-black text-brand-lime italic tracking-tighter">Instant</div>
                       <div className="text-[10px] font-bold uppercase text-white/30">Alerts</div>
                    </div>
                 </div>
              </div>

              <div className="p-12 lg:p-24 bg-neutral-900 text-white rounded-[80px] shadow-3xl group overflow-hidden relative border border-white/5">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 font-manrope">Case Management.</h3>
                 <p className="text-white/40 text-lg font-inter italic mb-10 leading-relaxed">Structured investigation workflows with automatic alert creation and full auditability.</p>
                 <ul className="space-y-4">
                    {[
                      "Automatic alert creation",
                      "Case management tools",
                      "Investigation timelines",
                      "Full audit logs"
                    ].map((it, i) => (
                      <li key={i} className="flex gap-4 items-center">
                         <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                         <span className="text-[10px] uppercase font-bold tracking-widest">{it}</span>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* 9. 🧑💻 COMPLIANCE & 10. 🔍 TRANSPARENCY */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12 text-center lg:text-left">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Explainable Detection.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Understand every decision with clear contributing signals and investigation context.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                       { t: "Audit Trails", i: <History /> },
                       { t: "Logic Explainability", i: <Eye /> },
                       { t: "Structured Workflows", i: <Layers /> },
                       { t: "Investigation Support", i: <Users /> }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center justify-center lg:justify-start">
                         <div className="text-neutral-900">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs uppercase italic tracking-tighter font-manrope">{it.t}</h5>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-[72px] p-12 lg:p-24 border border-gray-100 shadow-sm relative overflow-hidden group">
                 <Lock className="w-40 h-40 absolute bottom-0 right-0 p-8 text-neutral-900 opacity-5 group-hover:scale-110 transition-transform font-manrope" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12 font-manrope">Designed for Risk Teams.</h3>
                 <p className="text-zinc-500 font-inter italic mb-10 leading-relaxed">By combining real-time alerts with deep historical analysis, compliance teams can pinpoint risks long before external audits occur.</p>
                 <div className="space-y-6">
                    {[
                      { l: "Signal Breakdown", d: "Detailed visibility into score drivers." },
                      { l: "Contextual Evidence", d: "Visual mapping of suspicious signals." },
                      { l: "Historical Context", d: "Compare currents to life-to-date behavior." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-center group/item">
                         <div className="w-1.5 h-12 bg-zinc-100 group-hover/item:bg-neutral-900 transition-all duration-500" />
                         <div>
                            <h5 className="text-[11px] font-bold uppercase tracking-widest text-neutral-900 italic font-manrope">{it.l}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter uppercase tracking-tight">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 12. 🆚 COMPARISON & 13. 📈 BUSINESS IMPACT */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Beyond Rules.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See how Deep Sense intelligence enhances traditional compliance and AML systems.</p>
              </div>

              <div className="overflow-x-auto text-left mb-40">
                 <table className="w-full border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic text-left">Security Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic text-left">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-200 italic text-left">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Real-Time Detection", d: "Yes (Instant)", s: "Delayed (Batch)" },
                         { c: "Graph Analysis", d: "Yes (Advanced)", s: "Limited / Manual" },
                         { c: "Pattern Intelligence", d: "Yes (Evolving)", s: "Rule-Based (Static)" },
                         { c: "Decision Explainability", d: "Yes (Comprehensive)", s: "Partial / Hidden" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-neutral-100 transition-all font-manrope">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900 font-manrope">{row.c}</td>
                            <td className="py-10 px-8 text-neutral-900 font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-200 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Detect Earlier", d: "Identify crime as it attempts to move." },
                   { l: "Reduce Compliance Risk", d: "Minimize exposure across your systems." },
                   { l: "Improve Efficiency", d: "Automate routine detection signals." },
                   { l: "Support Regulations", d: "Build robust audit-ready evidence pools." }
                 ].map((it, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center">
                      <div className="text-neutral-900 mb-6 group-hover:text-brand-lime transition-all font-manrope"><BarChart3 className="w-8 h-8" /></div>
                      <h5 className="font-bold text-neutral-900 text-[10px] uppercase tracking-widest italic font-manrope">{it.l}</h5>
                      <p className="text-[10px] text-zinc-400 font-inter mt-2 font-manrope uppercase tracking-widest">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 14. ⚠️ IMPORTANT POSITIONING NOTE */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-zinc-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-2xl md:text-5xl font-bold tracking-tighter leading-none italic uppercase text-white mb-8">Complementary Intelligence.</h2>
                 <p className="text-lg md:text-xl text-white/40 max-w-[800px] mx-auto italic leading-relaxed font-manrope">Deep Sense enhances fraud and suspicious activity detection but should be integrated into your broader compliance and AML processes. We position ourselves as the intelligence layer that powers your existing regulatory framework.</p>
                 <div className="flex justify-center flex-wrap gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-lime">
                    <span>Audit Ready</span>
                    <span>Explainable ML</span>
                    <span>Pattern Recognition</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 15. 💬 TRUST & 16. 📣 CTA SECTION */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden group border border-white/5 shadow-3xl">
                 <MessageSquareQuote className="w-24 h-24 text-brand-lime opacity-10 absolute bottom-0 right-0 p-8" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Compliance Impact.</h3>
                 <ul className="space-y-12 font-manrope italic">
                    {[
                      "We uncovered suspicious activity patterns we previously missed with legacy tools.",
                      "Deep Sense has significantly improved our investigation workflows and clarity.",
                      "The level of transparency in every decision is unmatched by traditional systems."
                    ].map((quote, i) => (
                      <li key={i} className="flex gap-8 group/quote">
                         <div className="w-1.5 h-12 bg-brand-lime group-hover/quote:h-16 transition-all duration-500" />
                         <p className="text-xl font-manrope italic text-white/60 group-hover/quote:text-white transition-colors">“{quote}”</p>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="text-center lg:text-left space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Detect with <br /><span className="text-zinc-300">Confidence.</span></h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Empower your compliance teams with the intelligence they need to stay ahead of financial crime.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl font-manrope">
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
