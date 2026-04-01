"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Terminal, 
  Database, 
  ArrowUpRight,
  Copy,
  CheckCircle2,
  Shield,
  Layers,
  History,
  FileCode,
  ArrowDownRight
} from "lucide-react";

export default function APIOverview() {
  const [copying, setCopying] = React.useState(false);

  const copyToClipboard = () => {
    setCopying(true);
    setTimeout(() => setCopying(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Terminal className="w-3.5 h-3.5" />
               Developer First API
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Build with <br />
               <span className="text-zinc-300 italic">Fraud Intelligence.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Integrate Deep Sense into your stack with a powerful, developer-centric REST API. Millisecond latency, robust SDKs, and comprehensive documentation.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Explore Docs
                  <ArrowUpRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Get API Key
                </button>
             </div>
          </div>
        </section>

        {/* 2. API PHILOSOPHY (VISUAL) */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
                 <div className="space-y-12">
                    <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">API-First Core.</h2>
                    <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Deep Sense was built as an API from day one. Every feature in our dashboard is powered by the same public endpoints you use.</p>
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { l: "RESTful JSON", d: "Standard patterns for fast integration." },
                         { l: "Sub-50ms Response", d: "Built for high-performance fintech stacks." },
                         { l: "Idempotency", d: "Safe retries for mission-critical events." },
                         { l: "Type Safety", d: "Rich SDKs and OpenAPI specifications." }
                       ].map((it, i) => (
                         <div key={i} className="space-y-2">
                            <div className="text-brand-lime font-black italic text-lg uppercase tracking-tight">{it.l}</div>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-black/50 border border-white/10 p-12 rounded-[56px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                    <div className="flex justify-between items-center mb-8">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                       </div>
                       <button onClick={copyToClipboard} className="text-white/20 hover:text-brand-lime transition-colors">
                          {copying ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                       </button>
                    </div>
                    <div className="font-mono text-[11px] space-y-4">
                       <div className="text-zinc-500"># Ingest and score a transaction</div>
                       <div className="text-brand-lime">curl -X POST https://api.deepsense.com/v1/score \</div>
                       <div className="text-white/80 ml-4">-H <span className="text-brand-lime">&quot;Authorization: Bearer ds_live_...&quot;</span> \</div>
                       <div className="text-white/80 ml-4">-d &apos;{"{"}</div>
                       <div className="text-white/80 ml-8">&quot;amount&quot;: 250.00,</div>
                       <div className="text-white/80 ml-8">&quot;user_id&quot;: &quot;user_49201&quot;,</div>
                       <div className="text-white/80 ml-8">&quot;device_id&quot;: &quot;dv_88102&quot;</div>
                       <div className="text-white/80 ml-4">{"}"}&apos;</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. BASE URL & ENVIRONMENTS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1">
                 <div className="bg-zinc-50 border border-gray-100 p-12 lg:p-24 rounded-[80px] shadow-sm relative overflow-hidden group">
                    <Database className="w-16 h-16 text-neutral-900 mb-8" />
                    <h3 className="text-4xl font-bold italic uppercase tracking-tighter mb-8">Environments.</h3>
                    <div className="space-y-6">
                       {[
                         { l: "Production", u: "https://api.deepsense.com/v1", d: "Live transaction monitoring and scoring." },
                         { l: "Sandbox", u: "https://api-sandbox.deepsense.com/v1", d: "Testing and validation without affecting data." }
                       ].map((it, i) => (
                         <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] hover:shadow-xl transition-all group/env">
                            <h6 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 mb-2 italic">{it.l}</h6>
                            <code className="block text-[10px] text-brand-lime font-mono mb-2">{it.u}</code>
                            <p className="text-[10px] text-zinc-400 font-inter font-manrope">{it.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 order-1 lg:order-2 text-center lg:text-left">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Standard Responses.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Deep Sense uses standard HTTP response codes and consistent JSON structures across all resources.</p>
                 <div className="grid grid-cols-2 gap-6 max-w-[400px] mx-auto lg:mx-0">
                    {[
                      { c: "200", l: "Success" },
                      { c: "201", l: "Created" },
                      { c: "400", l: "Bad Request" },
                      { c: "401", l: "Unauthorized" }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <div className="text-neutral-900 font-black italic text-lg">{it.c}</div>
                         <div className="text-[10px] uppercase font-bold text-zinc-300 tracking-widest">{it.l}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. CORE RESOURCES */}
        <section className="py-40 bg-zinc-900 text-white mx-4 rounded-[100px] border border-white/5 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-brand-lime/10 decoration-8 underline-offset-16">Key Ednpoints.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[600px] mx-auto">Absolute speed without compromising on detection fidelity.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {[
                   { l: "Ingestion API", d: "Send events for detection and learning.", r: "/v1/ingest", i: <Database /> },
                   { l: "Scoring Engine", d: "Real-time risk evaluation.", r: "/v1/score", i: <Zap /> },
                   { l: "Device Intel", d: "Fetch device profile data.", r: "/v1/device", i: <Layers /> },
                   { l: "Rule Management", d: "Manage logic via API.", r: "/v1/rules", i: <Shield /> },
                   { l: "Alerts & Cases", d: "Retrieve audit and risk cards.", r: "/v1/alerts", i: <History /> },
                   { l: "Webhooks", d: "Configure real-time event sync.", r: "/v1/webhooks", i: <Terminal /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white/5 rounded-[72px] border border-white/10 hover:bg-white/10 transition-all group">
                      <div className="text-brand-lime mb-8 group-hover:scale-110 transition-transform">{it.i}</div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-2">{it.l}</h4>
                      <code className="block text-[9px] text-brand-lime font-mono mb-4">{it.r}</code>
                      <p className="text-[10px] text-white/30 font-inter leading-relaxed italic">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. DEVELOPER TOOLS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Built for Speed.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Use our official SDKs to integrate Deep Sense into your application with just a few lines of code.</p>
                 <div className="flex flex-wrap gap-4">
                    {["Node.js", "Python", "Go", "Java", "Ruby", "PHP"].map((lang, i) => (
                      <div key={i} className="px-6 py-3 bg-zinc-50 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 border border-gray-100 hover:bg-neutral-900 hover:text-brand-lime transition-all cursor-default italic">
                        {lang}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-zinc-50 rounded-[88px] p-12 lg:p-24 border border-gray-100 relative overflow-hidden group">
                 <FileCode className="w-40 h-40 absolute top-0 right-0 p-12 text-neutral-900 opacity-5 group-hover:scale-110 transition-transform italic" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">OpenAPI Spec.</h3>
                 <p className="text-zinc-500 font-inter italic mb-10 leading-relaxed">Download our full OpenAPI specification to generate clients or test in Postman.</p>
                 <div className="space-y-4">
                    <button className="w-full py-6 bg-neutral-900 text-white rounded-[32px] font-bold italic uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                       Download Swagger JSON
                       <ArrowDownRight className="w-4 h-4 text-brand-lime" />
                    </button>
                    <button className="w-full py-6 bg-white border border-gray-100 text-neutral-900 rounded-[32px] font-bold italic uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                       import to Postman
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Start Building <br /><span className="text-white/20">Now.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Get your API keys and start protecting your system in minutes.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      Get Started
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
                      View full docs
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

// Minimal missing component definitions
export {};
