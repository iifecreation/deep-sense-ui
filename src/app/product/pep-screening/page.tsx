"use client";

import React from "react";
import { 
  Users, 
  Shield, 
  Search, 
  Globe, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  Database, 
  Layers, 
  UserCheck, 
  Fingerprint, 
  FileSearch,
  BookOpen,
  Network,
  Activity,
  Lock,
  RefreshCw,
  Scale
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function PEPScreeningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 -translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <Users className="w-3.5 h-3.5" />
              <span>Enhanced Due Diligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl text-center">
              Identify Politically <span className="text-indigo-600 italic">Exposed Persons</span> in Real Time.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense detects PEPs and their associates automatically, enabling enhanced due diligence and stronger AML compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full font-bold font-manrope hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <AlertTriangle className="w-24 h-24 text-red-50/50" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8">The High-Risk Exposure</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10">"Missing a PEP can expose your institution to serious regulatory consequences."</p>
                     <ul className="space-y-6">
                        {[
                          "PEPs represent elevated risk due to potential misuse of power.",
                          "Manual identification is unreliable and prone to human oversight.",
                          "Hidden relationships with associates make detection extremely difficult.",
                          "Failure to identify PEPs leads to critical compliance risk and fines."
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
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">PEPs Represent Elevated Risk</h2>
                  <p className="text-zinc-500 text-lg mb-12">Detecting high-risk individuals requires more than a simple database check—it requires deep network intelligence.</p>
                  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-red-500">
                     <Shield className="w-10 h-10 text-red-500 shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 italic">Failure to identify PEPs properly can lead to multi-million dollar regulatory penalties.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">Automated PEP Detection and Monitoring</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20">Deep Sense identifies politically exposed persons and their associates during onboarding and throughout the customer lifecycle.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Automated Screening", desc: "Instantly check every customer against verified global PEP lists.", icon: <UserCheck /> },
                { title: "Continuous Monitoring", desc: "Track status changes and list updates in real-time.", icon: <RefreshCw /> },
                { title: "EDD Triggers", desc: "Automatically trigger Enhanced Due Diligence when a PEP is found.", icon: <Zap /> },
                { title: "AML Integration", desc: "Seamlessly push matches into your core compliance workflows.", icon: <Layers /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-indigo-500/10 blur-[150px] opacity-40 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto text-center relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-6">From Onboarding to Continuous Monitoring</h2>
              <p className="text-zinc-400 text-lg mb-20 italic">"Ensuring compliance at every step of the customer journey."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative text-center">
                 {[
                   { label: "Onboarding", sub: "Customer joins platform", icon: <Users /> },
                   { label: "Screening", sub: "Identity checked against PEP lists", icon: <Database /> },
                   { label: "Risk Level", sub: "Automated risk level assigned", icon: <Scale /> },
                   { label: "Trigger EDD", sub: "Enhanced Due Diligence triggered", icon: <Zap /> },
                   { label: "Monitoring", sub: "Ongoing monitoring continues", icon: <Activity /> }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-lime group-hover:text-black transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed px-4">{item.sub}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-6 h-6 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. PEP Types & 6. Matching (Combined) */}
        <section className="py-32 px-8 bg-zinc-50 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Comprehensive PEP Coverage</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense detects all forms of political exposure, ensuring no high-risk entity remains hidden.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Globe color="indigo" />, label: "Foreign PEPs" },
                      { icon: <Users color="indigo" />, label: "Domestic PEPs" },
                      { icon: <Network color="indigo" />, label: "Close Associates" },
                      { icon: <UserCheck color="indigo" />, label: "Related Individuals" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 font-bold text-sm shadow-sm group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        {item.label}
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl font-bold font-manrope mt-20 mb-8 tracking-tight">Accurate Identification</h2>
                 <div className="space-y-4">
                    {[
                      "Linguistic Name Matching (Including Variations)",
                      "Advanced Alias & Pseudonym Detection",
                      "Multi-Source Entity Resolution",
                      "Visual Relationship Mapping"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-bold text-sm text-zinc-600">
                         <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="aspect-square bg-white rounded-[56px] shadow-2xl p-16 relative overflow-hidden flex flex-col items-center justify-center">
                 <div className="absolute top-0 right-0 p-8">
                    <History className="w-32 h-32 text-indigo-50 opacity-50" />
                 </div>
                 <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center mb-10 mx-auto">
                       <Fingerprint className="w-16 h-16 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-black italic text-neutral-900 mb-2">99.2%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Match Precision</div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Risk-Based & 8. EDD Triggers */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Assign Risk Levels Automatically</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense assigns risk ratings based on political role, influence level, and associated entity behavior.</p>
                 <div className="space-y-8">
                    {[
                      { title: "PEP Classification", desc: "Tiered scoring based on specific political roles and impact.", icon: <Layers /> },
                      { title: "Influence Analysis", desc: "Quantifying the individual's level of influence and financial control.", icon: <Activity /> },
                      { title: "Transaction Behavior", desc: "Monitor activity shifts that suggest misuse of political exposure.", icon: <Database /> },
                      { title: "EDD Triggers", desc: "Automatically trigger enhanced due diligence for high-risk flags.", icon: <Shield /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100">
                           {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600" })}
                        </div>
                        <div>
                           <h4 className="font-bold text-neutral-900 mb-1">{item.title}</h4>
                           <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-indigo-600 rounded-[56px] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl" />
                 <h3 className="text-3xl font-bold mb-10 italic">Trigger Deeper Investigation Automatically</h3>
                 <div className="space-y-6 relative z-10">
                    <div className="p-6 bg-white/10 border border-white/20 rounded-3xl">
                       <div className="text-brand-lime text-xs font-black uppercase tracking-widest mb-2 italic">Alert #PEP-992</div>
                       <p className="text-xl font-bold mb-1">Foreign PEP Detected</p>
                       <p className="text-xs text-indigo-200 font-medium">Role: Cabinet Minister | Region: High Risk</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                          <Zap className="w-6 h-6 text-brand-lime mx-auto mb-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">EDD Status</span>
                          <div className="font-black text-white mt-1">ACTIVE</div>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                          <Activity className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Monitoring</span>
                          <div className="font-black text-white mt-1 italic">ENHANCED</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 11. Network & 12. Governance */}
        <section className="py-32 bg-zinc-900 px-8 text-white rounded-[64px] mx-4 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="order-2 lg:order-1">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Detect Hidden Connections</h2>
                 <p className="text-zinc-400 text-lg mb-12">Deep Sense uses graph intelligence to uncover indirect associations and shared infrastructure.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Linked Accounts", icon: <Database /> },
                      { title: "Shared Devices", icon: <Fingerprint /> },
                      { icon: <Network />, title: "Indirect Associates" },
                      { icon: <Users />, title: "Shell Entities" }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] group hover:bg-white hover:text-neutral-900 transition-all cursor-default">
                         <div className="text-brand-lime mb-6 group-hover:text-indigo-600 transition-colors">{item.icon}</div>
                         <h4 className="font-bold">{item.title}</h4>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="p-12 bg-white/5 border border-white/10 rounded-[56px] backdrop-blur-xl">
                    <h2 className="text-3xl font-bold mb-10 italic">Built for Compliance Oversight</h2>
                    <div className="space-y-10">
                       {[
                         { title: "Decision Traceability", desc: "Maintain an immutable record of why every PEP match was accepted or dismissed.", icon: <BookOpen /> },
                         { title: "Regulatory Readiness", desc: "Full audit logs ready for any internal or regulatory review session.", icon: <Shield /> },
                         { title: "Data Access Controls", desc: "Granular permissions ensure sensitive PEP data is only seen by authorized investigators.", icon: <Lock /> }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                               {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-brand-lime" })}
                            </div>
                            <div>
                               <h4 className="font-bold mb-1">{item.title}</h4>
                               <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 text-center mb-20 tracking-tight">Beyond Basic PEP Screening</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Legacy Tools</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600">
                       {[
                         "Real-time PEP detection",
                         "Continuous monitoring",
                         "EDD automation",
                         "Network & Relationship analysis",
                         "Linguistic Name Matching"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Partial / Expensive
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 14. Business Impact & 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1]">
                   Enhance Your <br />
                   <span className="text-brand-lime italic font-black">PEP Screening</span> Today.
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                   Deep Sense enhances PEP detection and monitoring as part of a broader AML and compliance strategy. Strengthen your risk management and stay regulatory-ready.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg shadow-2xl shadow-brand-lime/10">
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

function RefreshCwIcon({ className, color }: { className?: string, color?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color === "indigo" ? "#4f46e5" : "currentColor"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}
