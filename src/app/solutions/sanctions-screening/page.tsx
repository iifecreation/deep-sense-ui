"use client";

import React from "react";
import { 
  ShieldCheck, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Users, 
  Activity, 
  RefreshCw, 
  Bell, 
  Layers, 
  Scale, 
  FileText, 
  Lock, 
  Target, 
  Filter,
  Briefcase,
  History,
  ShieldAlert
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function SanctionsSolutionPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Watchlist Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              Automate <span className="text-indigo-600">Sanctions</span> Screening at Scale.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Screen customers and transactions against global sanctions and watchlists in real time — reducing compliance risk and manual effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter">
                Request Demo
              </button>
              <button className="px-12 py-6 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-zinc-50 transition-all text-lg tracking-tighter">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <ShieldAlert className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Sanctions Risk Is Constant and Evolving</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic font-manrope">"Missing a sanctioned entity can have serious consequences."</p>
                     <ul className="space-y-6 text-sm font-bold text-zinc-600 italic">
                        {[
                          "Global sanctions lists are frequently updated without warning.",
                          "Manual screening processes are slow and prone to human error.",
                          "Missed matches create immediate and severe regulatory exposure.",
                          "Screening must be continuous across the lifecycle, not just a one-time check."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span>{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Danger of Obsolete Lists.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic text-left">As geopolitical landscapes shift, staying compliant becomes a moving target. Relying on static internal lists or manual lookups is no longer an option for institutional finance.</p>
                  <div className="flex items-center gap-6 p-8 bg-neutral-900 rounded-3xl shadow-xl border border-white/5 text-white transform hover:translate-x-4 transition-transform">
                     <Globe className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-100 leading-relaxed italic pr-6 italic">Deep Sense provides the automated, real-time watchlist coverage required for global compliance.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">Real-Time Sanctions Screening</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense automates sanctions and watchlist screening across the entire customer lifecycle, from onboarding to transaction finality.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Onboarding Screening", desc: "Instantly check applicants against global lists during signup.", icon: <Users /> },
                { title: "Transaction Screening", desc: "Block illicit fund flows at the point of origin.", icon: <Zap /> },
                { title: "Continuous Re-screening", desc: "Stay compliant as global watchlists evolve.", icon: <RefreshCw /> },
                { title: "Automated Alerts", desc: "Turn high-confidence matches into operational cases.", icon: <Bell /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-indigo-500/10">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight italic">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center shadow-3xl">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase">Screening Across Every Touchpoint</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative w-full">
                 {[
                   { l: "Collect", s: "Customer data ingestion", i: <Database /> },
                   { l: "Screen", s: "Real-time watchlist matching", i: <Globe /> },
                   { l: "Score", s: "Entity resolution scoring", i: <Target /> },
                   { l: "Alert", s: "Immediate match generation", i: <Bell /> },
                   { l: "Action", s: "Investigation triggered", i: <Briefcase /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed px-4 italic">{it.s}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Watchlist Coverage & 6. Accurate Matching */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Comprehensive Watchlist Coverage</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Ensure total global compliance with coverage across every major oversight list and internal dataset.</p>
                 <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-20 font-bold text-sm text-neutral-900 italic font-manrope">
                    {[
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "UN Sanctions Lists" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Local Regulatory Lists" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Terrorism Watchlists" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Custom Bank Watchlists" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "OFAC & EU Data" },
                      { icon: <CheckCircle2 className="w-4 h-4 text-brand-lime" />, label: "Internal Restricted Lists" }
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         {it.icon}
                         <span className="opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all">{it.label}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Reduce False Positives</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">Don't let manual review slow you down. Our matching engine uses advanced entity resolution to distinguish real threats from noise.</p>
                 <div className="space-y-4 font-bold text-zinc-600 italic">
                    {[
                      "Advanced Fuzzy Name Matching",
                      "Sophisticated Alias & AKA Detection",
                      "Automated Entity Resolution scoring",
                      "Risk-Based Triage Logic"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-2 h-10 bg-indigo-100 group-hover:bg-brand-lime transition-all rounded-full" />
                         <span className="text-xs uppercase tracking-tight italic">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-white border border-zinc-200 rounded-[80px] text-neutral-900 shadow-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12">
                   <Filter className="w-48 h-48 text-zinc-100 animate-spin-slow" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-zinc-50 pb-10">Matching Engine</h3>
                 <div className="space-y-8 relative z-10 font-manrope">
                    <p className="text-zinc-500 text-sm italic">Our proprietary scoring system analyzes multiple data points beyond just name matches to ensure elite level precision.</p>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-black uppercase text-zinc-400">Match Confidence</span>
                          <span className="text-2xl font-black text-red-500 italic">98.4%</span>
                       </div>
                       <div className="flex items-center gap-4 text-[10px] font-black text-indigo-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>RESOLVED: ENTITY MATCH CONFIRMED</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7-12. Real-time, Monitoring, Alerts, Investigations, Risk, Compliance */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto text-center mb-24 flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Integrated Compliance Ecosystem</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Go beyond basic screening with a full operational workflow designed for compliance excellence.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {[
                { title: "Continuous Monitoring", desc: "Automatic re-screening when lists update to stay instantly compliant with geopolitical changes.", icon: <RefreshCw /> },
                { title: "Turn Matches into Action", desc: "Automatic case generation with integrated investigation workflows for your teams.", icon: <Briefcase /> },
                { title: "Efficient Review", desc: "Access match scores, detailed entity data, and audit-ready case documentation.", icon: <FileText /> },
                { title: "Risk Prioritization", desc: "Focus on high-confidence matches to reduce manual review fatigue and operational noise.", icon: <Filter /> },
                { title: "Institutional Oversight", desc: "Built with immutable audit trails and traceable decision rationale for regulatory audits.", icon: <History /> },
                { title: "Data Integrity", desc: "Secured with institutional-grade access controls and encrypted data storage.", icon: <Lock /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-16 h-16 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-8 h-8" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm italic pr-4">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">More Than Basic Screening</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Real-time transaction screening",
                         "Continuous background re-screening",
                         "Multi-list global coverage",
                         "Native investigation workflows",
                         "Risk-based match prioritization"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Limited / Partial
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 15. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Automate Your <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Compliance Monitoring.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Reduce compliance risk, avoid severe regulatory penalties, and automate your entire screening operation for maximum precision and efficiency.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Start Screening Now
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     Talk to Sales
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
