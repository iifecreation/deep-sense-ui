"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Terminal,
  Plus,
  Minus
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Ideal for startups and small fintech teams looking to secure their first transactions.",
    price: "$99",
    period: "/mo",
    icon: <Zap />,
    color: "bg-emerald-50 text-emerald-600",
    features: [
      "Up to 5k transactions/mo",
      "Standard Fraud Scoring",
      "Basic Rules Engine (10 slots)",
      "Standard API Access",
      "Email Support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    description: "For scaling fintechs and e-commerce platforms requiring advanced real-time intelligence.",
    price: "$499",
    period: "/mo",
    icon: <TrendingUp />,
    color: "bg-neutral-900 text-brand-lime",
    features: [
      "Up to 50k transactions/mo",
      "Real-time Fraud Scoring",
      "Advanced Rules + Customization",
      "Device Intelligence",
      "Webhooks & Case Management",
      "Priority 24/7 Support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For banks and global payment systems requiring infinite scale and total compliance.",
    price: "Custom",
    period: "",
    icon: <Building2 />,
    color: "bg-gray-50 text-neutral-900 border border-gray-100 shadow-sm",
    features: [
      "Unlimited transactions",
      "Graph & Fraud Ring Detection",
      "AI Investigation Assistant",
      "Custom SLAs & Support",
      "Dedicated Infrastructure",
      "Full Compliance Reports"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqData = [
  { q: "How is pricing calculated?", a: "Pricing is based on your monthly transaction volume and the set of features enabled for your organization." },
  { q: "Is there a free tier?", a: "We offer a comprehensive free sandbox environment for all developers to test integrations before going live." },
  { q: "Can I upgrade anytime?", a: "Yes, you can upgrade or downgrade your plan at any time through your dashboard settings." },
  { q: "Do you support custom pricing?", a: "For high-volume partners, we provide custom pricing tiers and volume discounts tailored to your scale." },
  { q: "Is there a contract required?", a: "Starter and Growth plans are month-to-month. Enterprise plans may include annual commitments for better rates." }
];

const featureComparison = [
  { f: "Transaction limit", s: "5k /mo", g: "50k /mo", e: "Unlimited" },
  { f: "Real-time scoring", s: "Yes", g: "Yes", e: "Yes" },
  { f: "Rules engine", s: "Basic", g: "Advanced", e: "Advanced" },
  { f: "Device intelligence", s: "No", g: "Yes", e: "Yes" },
  { f: "Graph detection", s: "No", g: "Partial", e: "Full" },
  { f: "AI assistant", s: "No", g: "No", e: "Yes" },
  { f: "Alerts & cases", s: "Yes", g: "Yes", e: "Yes" },
  { f: "API access", s: "Standard", g: "Full", e: "Full" },
  { f: "Support", s: "Email", g: "Priority", e: "Dedicated" }
];

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 py-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-xl font-bold font-manrope group-hover:text-neutral-500 transition-colors">{q}</span>
        {isOpen ? <Minus className="w-5 h-5 text-zinc-300" /> : <Plus className="w-5 h-5 text-zinc-300" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-zinc-500 font-inter leading-relaxed max-w-[800px]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      
      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[850px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Activity className="w-3.5 h-3.5" />
               Value-Driven Pricing
             </div>
               <h1 className="text-5xl lg:text-[100px] font-bold leading-[0.9] mb-10 tracking-tight text-neutral-900 uppercase italic">
                 Flexible plans for <br />
                 <span className="text-zinc-300">every stage of growth</span>
               </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[650px]">
               Deep Sense pricing is designed to scale with your business — from early-stage startups to global enterprise fraud operations.
             </p>
          </div>
        </section>

        {/* 💡 PRICING PHILOSOPHY & ⚙️ USAGE-BASED */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative overflow-hidden">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime/20 decoration-8 underline-offset-16">Pay for What <br />You Use.</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[500px]">No hidden fees. No complex contracts for standard tiers. Just transparent pricing that aligns with your transaction throughput.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "Based on Volume", d: "Costs match your transactional scale." },
                      { t: "Flexible Stages", d: "Plans that evolve as you grow." },
                      { t: "Volume Discounts", d: "Significant savings for high-scale users." },
                      { t: "Predictable Tiers", d: "No surprises at the end of the month." }
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-xs uppercase mb-1">{p.t}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter">{p.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl text-center group">
                 <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                 <Cpu className="w-32 h-32 absolute top-0 left-0 p-8 text-brand-lime opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Usage-Based Scalability</h3>
                 <p className="text-white/40 text-sm italic max-w-[350px] mx-auto mb-10 leading-relaxed">As your transaction volume grows, your per-transaction cost automatically decreases across our premium tiers.</p>
                 <div className="inline-flex gap-4 p-4 bg-white/5 rounded-full border border-white/5">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">Volume Discount Logic Active</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 💳 PRICING PLANS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter">Plans for Every Stage.</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {pricingPlans.map((plan, i) => (
                   <div key={i} className={`p-12 lg:p-16 rounded-[72px] border transition-all duration-700 relative overflow-hidden flex flex-col ${plan.popular ? "bg-neutral-900 text-white border-white/5 scale-105 shadow-3xl" : "bg-white border-gray-100 text-neutral-900 hover:shadow-2xl"}`}>
                      {plan.popular && (
                         <div className="absolute top-0 right-0 p-12">
                            <Zap className="w-10 h-10 text-brand-lime opacity-20 animate-pulse" />
                         </div>
                      )}
                      
                      <div className="mb-14">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${plan.color}`}>
                            {React.cloneElement(plan.icon as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                         </div>
                         <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-6">{plan.name}</h3>
                         <p className={`text-sm leading-relaxed mb-12 h-14 italic font-inter ${plan.popular ? "text-white/40" : "text-zinc-400"}`}>{plan.description}</p>
                         
                         <div className="flex items-baseline gap-2 mb-10">
                            <span className="text-6xl font-black italic tracking-tighter">{plan.price}</span>
                            <span className={`text-sm font-bold uppercase tracking-widest ${plan.popular ? "text-white/20" : "text-zinc-300"}`}>{plan.period}</span>
                         </div>
                         
                         <button className={`w-full py-6 rounded-full font-bold text-lg transition-all active:scale-95 group ${plan.popular ? "bg-brand-lime text-neutral-900 hover:bg-white" : "bg-neutral-900 text-white hover:bg-neutral-800"}`}>
                            {plan.cta}
                            <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1" />
                         </button>
                      </div>

                      <div className="space-y-6 pt-12 border-t border-current/5 mt-auto">
                         <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block mb-4 ${plan.popular ? "text-white/10" : "text-zinc-300"}`}>What&apos;s Included</span>
                         {plan.features.map((feat, j) => (
                           <div key={j} className="flex gap-4 items-center">
                              <CheckCircle2 className={`w-4 h-4 ${plan.popular ? "text-brand-lime" : "text-zinc-200"}`} />
                              <span className={`text-[11px] font-bold uppercase tracking-wider ${plan.popular ? "text-white/60" : "text-zinc-500"}`}>{feat}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📊 FEATURE COMPARISON TABLE */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-32">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter font-manrope">Compare Features.</h2>
           </div>
           
           <div className="max-w-[1100px] mx-auto px-8 font-bold italic uppercase tracking-widest text-[10px]">
               <div className="bg-neutral-900 text-white rounded-[56px] border border-white/10 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-10 opacity-30 tracking-widest">Capability</th>
                           <th className="p-10 border-l border-white/5 opacity-50">Starter</th>
                           <th className="p-10 text-brand-lime border-l border-white/5 bg-white/5 font-black">Growth</th>
                           <th className="p-10 opacity-50 border-l border-white/5">Enterprise</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80">
                        {featureComparison.map((row, j) => (
                          <tr key={j} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-10 opacity-40">{row.f}</td>
                             <td className="p-10 border-l border-white/5">{row.s}</td>
                             <td className="p-10 border-l border-white/5 bg-white/5 text-white">{row.g}</td>
                             <td className="p-10 border-l border-white/5">{row.e}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 🧪 FREE TRIAL / SANDBOX & 🔐 ENTERPRISE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-[80px] font-bold tracking-tighter uppercase italic leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Try Before <br />You Commit.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[500px]">Every developer account starts with full access to our sandbox environment. Test, simulate, and validate safely.</p>
                 <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 group hover:shadow-xl transition-all">
                    <div className="flex gap-8 items-center mb-8">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm border border-gray-100">
                          <Terminal className="w-6 h-6" />
                       </div>
                       <h4 className="text-xl font-bold uppercase italic tracking-tight">Free Sandbox Access</h4>
                    </div>
                    <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                       <li className="flex gap-4">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Test all API endpoints
                       </li>
                       <li className="flex gap-4">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Simulate complex fraud rings
                       </li>
                       <li className="flex gap-4">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          No credit card required
                       </li>
                    </ul>
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl text-center group">
                 <ShieldCheck className="w-32 h-32 absolute top-0 right-0 p-8 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Enterprise-Grade Capabilities</h3>
                 <p className="text-white/40 text-sm max-w-[350px] mx-auto italic leading-relaxed mb-12">For large institutions requiring on-premise components, custom SLAs, and dedicated priority support pipelines.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {["Custom SLAs", "Dedicated IRT", "SOC2 Compliance", "RBAC v4"].map((tag, i) => (
                      <div key={i} className="px-5 py-3 bg-white/5 rounded-2xl border border-white/5 text-[9px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-all cursor-default">
                         {tag}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ❓ FAQ SECTION */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1000px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32">
                 <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter">FAQ.</h2>
              </div>
              <div className="space-y-0">
                 {faqData.map((faq, i) => (
                   <FaqItem key={i} q={faq.q} a={faq.a} />
                 ))}
              </div>
           </div>
        </section>

        {/* 💬 TRUST / VALUE STATEMENT */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/5 blur-[140px] rounded-full translate-y-1/2 pointer-events-none opacity-30" />
           <div className="max-w-[1200px] mx-auto px-8 space-y-24 relative z-10">
              <h2 className="text-4xl lg:text-9xl font-bold uppercase italic tracking-tight opacity-10 leading-none">Deliver Value.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 italic">
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;Deep Sense doesn&apos;t just stop fraud; it delivers a clear ROI by reducing operational fatigue and significantly lowering chargeback costs.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CFO, Multi-Store Marketplace</span>
                 </div>
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;The flexible plans allowed us to start small and scale seamlessly as our transaction volume exploded into the millions.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CEO, Stealth-Mode Fintech</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Start Protecting Your <br />Platform Today.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-inter italic">Choose the plan that fits your growth and join the future of fraud intelligence.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
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
