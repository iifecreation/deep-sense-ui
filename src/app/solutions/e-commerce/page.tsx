"use client";

import React from "react";
import { 
  Zap, 
  ArrowRight, 
  ShoppingCart, 
  Users, 
  Tag, 
  Bot, 
  MousePointer2, 
  LayoutDashboard, 
  Activity, 
  Lock, 
  CheckCircle2, 
  Settings,
  Database,
  Search,
  Sparkles,
  RefreshCw
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const ecommerceUseCases = [
  {
    title: "Checkout Fraud",
    icon: <ShoppingCart />,
    desc: "Detect high-risk transactions and prevent unauthorized payments before they complete.",
    items: ["High-risk payments", "Unauthorized cards", "Chargeback reduction"]
  },
  {
    title: "Account Takeover",
    icon: <Lock />,
    desc: "Protect customer accounts from hijacking and credential stuffing attacks.",
    items: ["Unusual login", "Device fingerprinting", "Account protection"]
  },
  {
    title: "Bot & Fake Accounts",
    icon: <Bot />,
    desc: "Identify automated behavior and prevent mass account creation and bot-driven abuse.",
    items: ["Automated behavior", "Mass signups", "In-app bot detection"]
  },
  {
    title: "Promo & Discount Abuse",
    icon: <Tag />,
    desc: "Detect multi-account exploitation and coordinated usage patterns to prevent revenue leakage.",
    items: ["Multi-account usage", "Suspicious patterns", "Referral fraud"]
  }
];

const ecommerceComparison = [
  { capability: "Real-time detection", deepSense: "Yes", traditional: "Often delayed" },
  { capability: "Checkout integration", deepSense: "Yes", traditional: "Limited" },
  { capability: "Abuse detection", deepSense: "Advanced", traditional: "Basic" },
  { capability: "False positive control", deepSense: "High", traditional: "Low" },
  { capability: "Integration effort", deepSense: "Minimal", traditional: "High" }
];

export default function EcommerceSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1000px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <ShoppingCart className="w-3.5 h-3.5" />
               E-commerce Growth Protection
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Scale Sales, <br />
               <span className="text-zinc-300">Stop Abuse.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
               Deep Sense detects fraudulent transactions, prevents multi-account abuse, and protects your checkout — without hurting conversion rates or customer experience.
             </p>
             <div className="flex flex-col sm:row gap-6">
               <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg group">
                 Get Started
                 <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-lg">
                 Request Demo
               </button>
             </div>
          </div>
        </section>

        {/* 🚨 E-COMMERCE CHALLENGES */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8 uppercase italic tracking-tight">Fraud and Abuse Hurt Growth.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Checkout Conversion", d: "High false positives block legitimate buyers, leading to lost revenue.", i: <MousePointer2 /> },
                   { t: "Promo Exploitation", d: "Coordinated accounts draining marketing budgets and discount codes.", i: <Tag /> },
                   { t: "Bot-Injected Orders", d: "Inventory exhaustion and shipping fraud driven by automated bot scripts.", i: <Bot /> },
                   { t: "Account Safety", d: "Compromised customer accounts leading to identity theft and refund abuse.", i: <Lock /> }
                 ].map((p, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all">
                      <div className="w-16 h-16 bg-neutral-900 rounded-3xl flex items-center justify-center text-brand-lime shadow-xl mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(p.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-lg font-bold font-manrope mb-4 uppercase">{p.t}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-inter">{p.d}</p>
                   </div>
                 ))}
              </div>
              <div className="mt-20 text-center italic">
                 <p className="text-xl text-zinc-500 max-w-[700px] mx-auto leading-relaxed underline decoration-brand-lime/20 decoration-8 underline-offset-16">
                    &quot;Every blocked customer is lost revenue — every missed fraud is a loss. We provide the intelligence to handle both.&quot;
                 </p>
              </div>
           </div>
        </section>

        {/* 💡 THE APPROACH & ⚙️ HOW IT WORKS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold italic tracking-tighter uppercase leading-tight">Balance Security <br /><span className="text-zinc-200">and Conversion.</span></h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[500px]">
                    Deep Sense helps e-commerce platforms detect fraud while ensuring legitimate customers can complete transactions smoothly.
                 </p>
                 <div className="space-y-8">
                    {[
                      { t: "Real-time Checkout Scoring", d: "Risk evaluation during the millisecond transition to payment.", i: <Zap /> },
                      { t: "Reduced False Positives", d: "Smarter models prevent your core audience from being declined.", i: <CheckCircle2 /> },
                      { t: "Adaptive Protection", d: "Rules and ML that adjust to seasonal traffic spikes and new habits.", i: <Sparkles /> }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 items-center group">
                         <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime transition-all duration-300 text-neutral-900 shadow-sm border border-gray-100">
                            {React.cloneElement(feat.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                         </div>
                         <div>
                            <h4 className="font-bold text-neutral-900 mb-1 uppercase text-sm tracking-tight">{feat.t}</h4>
                            <p className="text-xs text-zinc-400 font-inter">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/5 blur-[120px] pointer-events-none rounded-full" />
                 <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <Activity className="w-32 h-32 absolute top-0 right-0 p-8 text-brand-lime opacity-10 active:opacity-20 animate-pulse" />
                    <div className="relative z-10 space-y-12 h-full flex flex-col justify-center">
                       <h3 className="text-3xl font-bold italic tracking-tight uppercase">Conversion Balance Tracker</h3>
                       <div className="space-y-10">
                          {[
                            { l: "Approved Transactions", v: "99.2%", c: "text-emerald-400" },
                            { l: "Fraud Detection Rate", v: "98.5%", c: "text-brand-lime" },
                            { l: "Legitimate Approval Uplift", v: "+14.2%", c: "text-white" }
                          ].map((stat, i) => (
                            <div key={i} className="space-y-3">
                               <div className="flex justify-between items-end">
                                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.l}</span>
                                  <span className={`text-2xl font-bold italic ${stat.c}`}>{stat.v}</span>
                               </div>
                               <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                  <div className={`h-full bg-current ${stat.c}`} style={{ width: stat.v.replace('%', '').replace('+', '') + '%' }} />
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🛡️ KEY E-COMMERCE USE CASES */}
        <section className="py-40 bg-neutral-900 text-white rounded-[120px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(209,247,1,0.05)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic mb-8 underline decoration-brand-lime/20 decoration-8 underline-offset-16">Protect every Part.</h2>
              <p className="text-xl text-white/40 font-inter italic mb-32">From onboarding to loyalty, we ensure your platform remains safe for everyone.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {ecommerceUseCases.map((uc, i) => (
                   <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[56px] text-left hover:bg-white/10 transition-all group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                         {React.cloneElement(uc.icon as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight mb-4">{uc.title}</h4>
                      <p className="text-sm text-white/30 leading-relaxed font-inter mb-10 h-[60px]">{uc.desc}</p>
                      <div className="space-y-4 pt-10 border-t border-white/5">
                         {uc.items.map((it, j) => (
                           <div key={j} className="flex gap-4 items-center font-bold text-[10px] uppercase tracking-widest text-white/20">
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

        {/* ⚡ REAL-TIME DECISIONING & 🧠 SMART FRAUD DETECTION */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="relative aspect-square">
                 <div className="absolute inset-0 bg-brand-lime/5 blur-[120px] pointer-events-none rounded-full" />
                 <div className="relative h-full bg-gray-50 rounded-[80px] p-12 lg:p-20 overflow-hidden shadow-sm border border-gray-100 group flex flex-col justify-center">
                    <Sparkles className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-200 opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="relative z-10 space-y-12">
                       <h3 className="text-4xl font-bold tracking-tighter uppercase italic leading-none text-neutral-900">Adaptive <br />Intelligence.</h3>
                       <p className="text-zinc-500 text-lg font-inter italic leading-relaxed">By combining millisecond-level scoring with behavioral anomaly detection, we stop coordinated fraud before it touches your inventory.</p>
                       <div className="space-y-6">
                          {[
                            "Machine Learning Core",
                            "Behavioral Anomaly Detection",
                            "Rules Engine (Dynamic)",
                            "Device Intelligence",
                            "Graph-based Rings"
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                               <span className="font-bold text-xs uppercase tracking-widest text-neutral-900">{item}</span>
                               <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Instant Decisions <br />at Checkout.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed italic max-w-[500px]">Millisecond-level risk updates ensure your customer journey is never interrupted by security delays.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Zero Checkout Friction", d: "Legit customers never see a delay or an extra verification box." },
                      { t: "Scalability for Sales", d: "Handle 10x traffic during Black Friday without performance lag." },
                      { t: "Instant Alerts", d: "Identify high-risk orders the second they are placed." },
                      { t: "Custom thresholds", d: "Tweak risk levels for different product categories easily." }
                    ].map((feat, i) => (
                      <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-8 h-8 bg-neutral-900 rounded-xl flex items-center justify-center text-brand-lime shadow-lg mb-4">
                            <Zap className="w-4 h-4" />
                         </div>
                         <h4 className="font-bold text-neutral-900 mb-2 uppercase text-xs tracking-tight">{feat.t}</h4>
                         <p className="text-[11px] text-zinc-400 font-inter leading-relaxed">{feat.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📉 FALSE POSITIVES & 🕸️ ABUSE PATTERNS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic mb-8">Reduce False Positives.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[700px] mx-auto">Smarter scoring reduces unnecessary declines, ensuring a seamless experience for your best customers.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { t: "Stop Abuse Rings", d: "Identify clusters of linked accounts sharing hardware and behavioral signatures.", i: <Users /> },
                   { t: "Identify Multi-Accounts", d: "Find users bypassing promo limits with synthetic identities.", i: <RefreshCw /> },
                   { t: "Uncover Hidden Patterns", d: "Detect suspicious behavior across sessions that traditional tools miss.", i: <Search /> }
                 ].map((it, i) => (
                   <div key={i} className="text-center group p-10 bg-white rounded-[56px] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all">
                      <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold italic tracking-tight uppercase mb-4 text-neutral-900">{it.t}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-inter px-4">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter">Built for High-Growth E-commerce.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 font-bold italic uppercase tracking-widest text-[10px]">
               <div className="bg-neutral-900 text-white rounded-[50px] border border-white/10 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-10 opacity-30 tracking-widest">Capability</th>
                           <th className="p-10 text-brand-lime border-l border-white/10">Deep Sense</th>
                           <th className="p-10 opacity-30 hidden md:table-cell tracking-widest">Traditional Systems</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80">
                        {ecommerceComparison.map((row, i) => (
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

        {/* 🛡️ SECURITY & TRUST */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic leading-tight">Secure & Trust-Built.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic underline decoration-neutral-100 decoration-8 underline-offset-16">Protect your customers and data with enterprise-grade security architecture.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {[
                      { t: "Secure Architecture", d: "Multi-tenant design built with data separation at the core." },
                      { t: "Data Protection", d: "End-to-end encryption for all sensitive PII and payment data." },
                      { t: "Audit Logs", d: "Full visibility into every system decision and user action." },
                      { t: "Role-Based Access", d: "Granular control for who can manage rules and alerts." }
                    ].map((f, i) => (
                      <div key={i} className="space-y-4 p-8 bg-white rounded-3xl border border-gray-200">
                         <div className="w-8 h-8 bg-brand-lime rounded-lg flex items-center justify-center text-neutral-900 shadow-sm">
                            <Lock className="w-4 h-4" />
                         </div>
                         <h4 className="font-bold text-neutral-900 uppercase text-xs tracking-tight">{f.t}</h4>
                         <p className="text-[11px] text-zinc-400 font-inter leading-relaxed">{f.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] pointer-events-none rounded-full" />
                 <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white text-center shadow-3xl relative overflow-hidden group">
                    <Database className="w-32 h-32 absolute top-0 left-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                    <Sparkles className="w-16 h-16 mx-auto text-brand-lime mb-8" />
                    <h3 className="text-3xl font-bold italic tracking-tight uppercase mb-8">Integrated Platform</h3>
                    <p className="text-white/40 text-sm max-w-[350px] mx-auto italic leading-relaxed mb-12">Deep Sense provides a single source of truth for alerts, cases, and automated investigations for your e-commerce operations team.</p>
                    <div className="flex gap-4 justify-center">
                       <LayoutDashboard className="w-6 h-6 text-brand-lime opacity-50" />
                       <Activity className="w-6 h-6 text-brand-lime opacity-50" />
                       <Settings className="w-6 h-6 text-brand-lime opacity-50" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1200px] mx-auto px-8 relative z-10">
              <h2 className="text-5xl lg:text-9xl font-bold tracking-tighter uppercase italic opacity-10 mb-20 leading-none">Scale Sales.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 italic">
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;We reduced fraud without hurting conversions. Deep Sense helped us stop promo abuse instantly while increasing our checkout success rate.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— Head of Growth, Global Fashion Store</span>
                 </div>
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;Deep Sense gives us the confidence to launch massive sales events without worrying about bots draining our inventory or exploiting our loyal customers.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CEO, Multi-Brand Marketplace</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-bottom" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br />Checkout Experience.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Secure your e-commerce growth with fraud detection that works at the speed of your customers.</p>
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
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
