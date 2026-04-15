"use client";

import React from "react";
import { 
  Users, 
  Shield, 
  BarChart3, 
  UserCheck, 
  Activity, 
  Zap, 
  Database, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Search,
  LayoutDashboard,
  Brain,
  History,
  Target,
  Network,
  Lock,
  RefreshCw,
  FileSearch,
  Layers
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function RiskProfilingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Risk Management Layer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-4xl">
              Understand <span className="text-indigo-600 italic">Customer Risk</span> in Real Time.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense continuously evaluates customer behavior, transactions, and relationships to assign dynamic risk profiles and identify high-risk entities.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full font-bold font-manrope hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                Explore Platform
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <History className="w-24 h-24 text-zinc-100 group-hover:text-brand-lime/20 transition-colors" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8">The Erosion of Validity</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic">"A low-risk customer today can become high-risk tomorrow."</p>
                     <ul className="space-y-6">
                        {[
                          "Customer risk changes over time as financial behaviors shift.",
                          "Manual risk classification becomes outdated within weeks of onboarding.",
                          "Hidden behavior patterns go unnoticed in massive transaction datasets.",
                          "Lack of visibility leads to missed threats and regulatory exposure."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">Customer Risk Is Not Static</h2>
                  <p className="text-zinc-500 text-lg mb-12 leading-relaxed">Most institutions treat risk profiling as a static event—identifying a customer once at onboarding. But true risk is a moving target that requires continuous evaluation across the entire lifecycle.</p>
                  <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime">
                     <p className="text-sm font-bold text-neutral-800 leading-relaxed italic">Deep Sense fills the gap between static KYC and real-time transaction monitoring with an intelligence layer that evolves with your customers.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & 5. Risk Scoring Model */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">Dynamic Customer Risk Profiling</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20">Deep Sense assigns and updates customer risk levels automatically based on multi-factor signals and real-time activity.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Automated Risk Scoring", desc: "Instantly calculate risk scores during onboarding and activity.", icon: <Zap /> },
                { title: "Continuous Monitoring", desc: "Re-evaluate profiles as behavior and external data shifts.", icon: <RefreshCw /> },
                { title: "Behavioral Analysis", desc: "Identify intent through transaction size, frequency, and source.", icon: <Brain /> },
                { title: "Lifecycle Tracking", desc: "Maintain a full history of a customer's risk evolution over years.", icon: <History /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 p-12 bg-zinc-50 rounded-[56px] border border-zinc-100 text-left">
               <h3 className="text-3xl font-bold mb-10 tracking-tight">Multi-Factor Risk Assessment</h3>
               <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                 {[
                   "Transaction Behavior",
                   "Device Activity",
                   "Linked Entities",
                   "Historical Indicators",
                   "Anomaly Detection"
                 ].map((signal, i) => (
                   <div key={i} className="p-6 bg-white rounded-3xl shadow-sm border border-zinc-200 flex flex-col items-center text-center gap-4 group hover:bg-indigo-600 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-white transition-colors">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-neutral-800 group-hover:text-white transition-colors uppercase tracking-widest">{signal}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-zinc-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10 text-center">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">From Data to Risk Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative text-center">
                 {[
                   { step: 1, label: "Data Ingestion", sub: "KYC & Identity Ingest", icon: <Database /> },
                   { step: 2, label: "Analysis", sub: "Transactions monitored", icon: <Search /> },
                   { step: 3, label: "Risk Signals", sub: "Pattern identification", icon: <Activity /> },
                   { step: 4, label: "Scoring", sub: "Unified risk rating", icon: <Scale /> },
                   { step: 5, label: "Adaptation", sub: "Updates over time", icon: <RefreshCw /> }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-8 relative group-hover:bg-brand-lime group-hover:text-black transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed px-4">{item.sub}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-6 h-6 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. Risk Level Classification & 7. Updates */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope tracking-tight leading-[1.1]">Clear Risk Segmentation</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense segments your entire customer base into actionable risk levels, aligned with regulatory identification mandates.</p>
                 
                 <div className="grid grid-cols-1 gap-4">
                    {[
                      { level: "High Risk", color: "bg-red-500", text: "Requires Enhanced Due Diligence and active monitoring triggers." },
                      { level: "Medium Risk", color: "bg-orange-500", text: "Standard monitoring with monthly behavioral re-evaluation." },
                      { level: "Low Risk", color: "bg-green-500", text: "Baseline screening with anomaly-only prioritization." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all">
                         <div className={`w-3 h-20 ${item.color} rounded-full shrink-0`} />
                         <div>
                            <h4 className="font-bold text-neutral-900 text-xl mb-1">{item.level}</h4>
                            <p className="text-zinc-500 text-sm italic">{item.text}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-16 pt-16 border-t border-zinc-100">
                    <h3 className="text-2xl font-bold mb-8">Track Risk Changes Over Time</h3>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         "Sudden Tx Volume Spike",
                         "New Device Usage",
                         "Suspicious Patterns",
                         "High-Risk Links"
                       ].map((ex, i) => (
                         <div key={i} className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 font-bold text-xs text-indigo-600">
                            <RefreshCw className="w-3.5 h-3.5" />
                            {ex}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full" />
                 <div className="relative z-10 bg-neutral-900 p-12 rounded-[56px] shadow-2xl text-white">
                    <div className="flex justify-between items-center mb-12">
                       <span className="text-xs font-black italic tracking-[0.3em] uppercase text-brand-lime">Live Risk Graph</span>
                       <Activity className="text-red-500 animate-pulse" />
                    </div>
                    <div className="aspect-[4/3] flex items-end gap-1.5 h-64 border-b border-white/10 pb-2">
                       {[40, 35, 60, 45, 80, 50, 95, 85, 90, 80].map((h, i) => (
                         <div key={i} className="flex-1 bg-white/10 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                            <div className={`absolute bottom-0 left-0 w-full transition-all duration-1000 group-hover:h-full ${i >= 6 ? "bg-red-500" : "bg-indigo-600"}`} style={{ height: `${h-15}%` }} />
                         </div>
                       ))}
                    </div>
                    <div className="mt-10 flex flex-col gap-4">
                       <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl border border-white/10">
                          <span className="text-xs font-bold text-zinc-400">Alert Priority</span>
                          <span className="text-red-500 text-xs font-black">P0 - IMMEDIATE</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 8. Linked Entity Risk & 9. Real-Time Decisioning */}
        <section className="py-32 px-8 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Risk Beyond the Individual</h2>
                 <p className="text-zinc-500 text-lg leading-relaxed mb-12">Customer risk is heavily influenced by connected entities, uncovering networks that individual profiling often misses.</p>
                 
                 <div className="space-y-8">
                    {[
                      { title: "Shared Devices", desc: "Identify multiple high-risk accounts originating from the same physical infrastructure.", icon: <Database /> },
                      { title: "Linked Accounts", desc: "Uncover shared beneficiaries, phone numbers, or residential addresses.", icon: <Users /> },
                      { title: "Transaction Networks", desc: "Map flows between counterparties to detect layering and circular movement.", icon: <Network /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                           {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                        </div>
                        <div>
                           <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col gap-8">
                  <div className="p-12 bg-indigo-600 rounded-[56px] text-white shadow-xl group">
                     <h3 className="text-3xl font-bold mb-8 italic">Use Risk Scores in Real Time</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         "Approval Decisions",
                         "Alert Prioritization",
                         "Case Creation",
                         "Enhanced Monitoring"
                       ].map((uc, i) => (
                         <div key={i} className="p-4 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-between group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <span className="font-bold text-xs uppercase tracking-widest">{uc}</span>
                            <Zap className="w-4 h-4" />
                         </div>
                       ))}
                     </div>
                  </div>
                  <div className="p-12 bg-zinc-900 rounded-[56px] text-white">
                    <div className="flex items-center gap-4 mb-8">
                       <Shield className="w-8 h-8 text-brand-lime" />
                       <h3 className="text-3xl font-bold">Act on High-Risk Profiles</h3>
                    </div>
                    <ul className="space-y-4">
                       {[
                         "Trigger Immediate Alerts",
                         "Initiate Enhanced Due Diligence (EDD)",
                         "Scale Monitoring Frequencies",
                         "Escalate directly to Case Management"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-sm font-bold border-b border-white/5 pb-4 last:border-0">
                           <CheckCircle2 className="text-brand-lime w-4 h-4 shrink-0" />
                           {item}
                         </li>
                       ))}
                    </ul>
                  </div>
              </div>
           </div>
        </section>

        {/* 11. Integration & 12. Governance */}
        <section className="py-32 px-8 bg-zinc-50">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Built for Compliance Operations</h2>
              <p className="text-zinc-500 text-lg mb-20 max-w-3xl">Deep Sense provides the transparency needed for institutional risk administration and regulatory supervision.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
                 {[
                   { title: "Governance-Ready", desc: "Audit logs, historical risk tracking, and decision traceability for every profile state.", icon: <Lock /> },
                   { title: "Explainable Decisions", desc: "Clearly attribute risk score movements to specific signals and triggers.", icon: <FileSearch /> },
                   { title: "SDR/AML Integration", desc: "Push risk profiles directly into alerts, cases, and investigative workflows.", icon: <Layers /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-white border border-zinc-200 rounded-[40px] shadow-sm">
                      <div className="w-12 h-12 mb-8 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                         {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 text-center mb-20 tracking-tight">Smarter Customer Risk Management</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 shadow-xl overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600">
                       {[
                         "Dynamic risk scoring",
                         "Continuous updates",
                         "Multi-factor analysis",
                         "Network-based risk",
                         "Explainable Scores"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Static / Basic
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Impact & 15. CTA Section */}
        <section className="py-24 px-8 mb-48">
          <div className="max-w-[1440px] mx-auto text-center bg-neutral-900 rounded-[64px] p-24 text-white relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-5xl md:text-7xl font-bold font-manrope mb-10 tracking-tight max-w-5xl mx-auto leading-[1.1]">
                  Build Smarter <span className="text-brand-lime italic">Customer Risk</span> Profiles.
                </h2>
                <p className="text-zinc-400 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
                  Identify high-risk customers early, reduce compliance risk, and support risk-based AML frameworks with industrial-grade dynamic intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg shadow-xl shadow-brand-lime/10">
                     Request Demo
                   </button>
                   <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-bold font-manrope hover:bg-white hover:text-neutral-900 transition-all text-lg">
                     Talk to Sales
                   </button>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
