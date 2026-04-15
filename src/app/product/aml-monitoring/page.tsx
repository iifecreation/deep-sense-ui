"use client";

import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Search, 
  BarChart3, 
  Clock, 
  AlertTriangle, 
  UserCheck, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Lock, 
  Users, 
  Database,
  Layers,
  FileText,
  Zap,
  LayoutDashboard
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export default function AMLMonitoringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <Shield className="w-3.5 h-3.5" />
              <span>Compliance Infrastructure</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-4xl">
              Real-Time <span className="text-indigo-600 italic">AML Monitoring</span> for Modern systems.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense helps regulated institutions monitor transactions, detect suspicious activity, generate alerts, and support AML investigations in real time.
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

        {/* 2. The Challenge */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Manual AML Controls Can’t Keep Up</h2>
                <p className="text-zinc-500 text-lg mb-8 leading-relaxed max-w-xl italic">
                  "Modern AML requires automated, real-time intelligence."
                </p>
                <ul className="space-y-6">
                  {[
                    "Transaction volumes keep rising, outstripping human capacity.",
                    "Suspicious activity is harder to detect manually across fragmented data.",
                    "Isolated, manual tools slow down compliance teams.",
                    "Delayed monitoring increases risk and regulatory exposure."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-zinc-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-12 rounded-[48px] border border-zinc-200 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                        <Activity className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-xl">The Visibility Gap</h4>
                   </div>
                   <div className="space-y-6">
                      <div className="h-4 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-red-500 animate-pulse" />
                      </div>
                      <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <span>Risk exposure</span>
                        <span className="text-red-600">68% Increase</span>
                      </div>
                   </div>
                   <p className="mt-8 text-zinc-500 text-sm leading-relaxed">Institutions relying on batch processing or manual reviews are facing unprecedented regulatory pressure and fines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Deep Sense Approach */}
        <section className="py-32 px-8 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight">Automated AML Monitoring Built for Scale</h2>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-4xl mx-auto mb-20">
              Deep Sense combines real-time transaction monitoring, behavioral analytics, alert generation, and investigation workflows to help institutions detect suspicious activity earlier and respond faster.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Real-Time Transaction Monitoring", desc: "Monitor transactions as they happen, detecting unusual size, timing, and flow patterns instantly.", icon: <Clock /> },
                { title: "Behavioural Analytics", desc: "Identify suspicious changes in customer behavior, detecting structuring and rapid movement of funds.", icon: <BrainCircuit /> },
                { title: "Risk-Based Detection", desc: "Score activity based on customer, device, pattern, and network risk profiles.", icon: <UserCheck /> },
                { title: "Automated Alert Generation", desc: "Create alerts automatically when suspicious thresholds are met, reducing operational noise.", icon: <Zap /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-zinc-50 rounded-[40px] border border-zinc-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. How it Works (Flow) */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-40" />
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-bold font-manrope mb-6">From Transaction to Investigation</h2>
              <p className="text-zinc-400 text-lg">A seamless digital path for AML intelligence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center relative">
              {[
                { step: 1, label: "Ingestion", sub: "Transaction enters platform", icon: <Database /> },
                { step: 2, label: "Evaluation", sub: "Rules and risk models evaluate", icon: <Cpu /> },
                { step: 3, label: "Identification", sub: "Patterns identified", icon: <Search /> },
                { step: 4, label: "Alert", sub: "Generated automatically", icon: <AlertTriangle /> },
                { step: 5, label: "Review", sub: "Case opened for review", icon: <Users /> },
                { step: 6, label: "Documentation", sub: "Findings documented", icon: <FileText /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-black transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-lime text-black rounded-full flex items-center justify-center text-xs font-black italic">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">{item.label}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">{item.sub}</p>
                  {i < 5 && <ArrowRight className="hidden lg:block absolute top-[40px] w-5 h-5 text-white/20" style={{ left: `${(i + 1) * 16.66}%`, transform: 'translateX(-50%)' }} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Suspicious Activity Patterns */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Detect the Patterns That Matter</h2>
                <p className="text-zinc-500 text-lg mb-12 max-w-xl">Deep Sense uses multi-dimensional analysis to flag complex laundering techniques mapped directly to regulatory requirements.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Structuring / Smurfing",
                    "Rapid Movement of Funds",
                    "Unusual Transaction Size",
                    "Suspicious Cross-Border Transfers",
                    "High-Risk Account Activity",
                    "Money Mule Detection"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 font-bold text-sm">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-5/12 aspect-[5/4] bg-zinc-900 rounded-[48px] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-brand-lime/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
                 <div className="flex justify-between items-center relative z-10">
                    <span className="text-brand-lime text-xs font-black italic uppercase tracking-widest">Live Detection Engine</span>
                    <Activity className="text-red-500 animate-pulse" />
                 </div>
                 <div className="space-y-4 relative z-10">
                    {[
                      { label: "Alert #8821", status: "Critical", icon: <AlertTriangle /> },
                      { label: "Structing Pattern", status: "Confimed", icon: <Shield /> }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="text-brand-lime">{item.icon}</div>
                           <span className="font-bold text-xs">{item.label}</span>
                        </div>
                        <span className="text-[10px] p-1.5 px-3 bg-red-500/20 text-red-500 rounded-full font-bold uppercase">{item.status}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Alerts and Case Workflows */}
        <section className="py-32 bg-indigo-600 px-8 text-white relative">
          <div className="max-w-[1440px] mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold font-manrope mb-6">Operational Workflows for Compliance Teams</h2>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto italic">Deep Sense supports investigator productivity with integrated case management.</p>
          </div>
          
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { label: "Alert Reviews", sub: "Intuitive queue management", icon: <LayoutDashboard /> },
              { label: "Case Escalation", sub: "Streamlined handovers", icon: <ArrowRight /> },
              { label: "Investigator Notes", sub: "Collaborative insights", icon: <FileText /> },
              { label: "Audit Trails", sub: "Full activity attribution", icon: <CheckCircle2 /> },
              { label: "Outcome Tracking", sub: "ROI and efficiency reporting", icon: <BarChart3 /> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/10 border border-white/20 rounded-[32px] backdrop-blur-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-xl">
                   {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="font-bold mb-2">{item.label}</h4>
                <p className="text-xs text-indigo-200 uppercase tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Explainability & 10. Security (Combined for space) */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h3 className="text-3xl font-bold font-manrope mb-8">Maintain Full Control & Governance</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">Deep Sense provides the transparency needed for regulated environments, ensuring every decision is explainable and every action is recorded.</p>
              
              <div className="space-y-8">
                {[
                  { title: "Explainable Findings", desc: "Clearly show triggered rules and mathematical signals behind every flag.", icon: <Search /> },
                  { title: "Role-Based Access Control", desc: "Granular permissions ensure the right investigators see the right data.", icon: <Lock /> },
                  { title: "Military-Grade Encryption", desc: "Data at rest and in transit protected by institutional-grade PII encryption.", icon: <Shield /> },
                  { title: "Compliance-Ready Logs", desc: "Maintain immutable configuration and user activity logs for regulatory review.", icon: <BarChart3 /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600" })}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-12">
               {/* 9. Integrations */}
               <div className="p-12 bg-zinc-900 rounded-[48px] text-white">
                  <h3 className="text-3xl font-bold mb-8">Ecosystem Connectivity</h3>
                  <p className="text-zinc-400 mb-10">Designed to integrate seamlessly with your core financial stack.</p>
                  <div className="flex flex-wrap gap-4">
                    {["Core Banking", "Payment Hubs", "Onboarding Systems", "Internal CRM", "Cloud ERP"].map((tag, i) => (
                      <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-brand-lime">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>

               {/* 12. Impact */}
               <div className="p-12 bg-indigo-50 rounded-[48px]">
                  <h3 className="text-3xl font-bold mb-8 text-neutral-900">Compliance Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="text-center p-6 bg-white rounded-3xl shadow-sm border border-indigo-100">
                        <div className="text-3xl font-black text-indigo-600 mb-1">45%</div>
                        <div className="text-[10px] font-bold uppercase text-zinc-400">Faster Review</div>
                     </div>
                     <div className="text-center p-6 bg-white rounded-3xl shadow-sm border border-indigo-100">
                        <div className="text-3xl font-black text-indigo-600 mb-1">0.05ms</div>
                        <div className="text-[10px] font-bold uppercase text-zinc-400">Latency</div>
                     </div>
                  </div>
                  <p className="mt-8 text-zinc-500 text-sm leading-relaxed">Strengthen your risk-based AML operations without increasing manual review burden.</p>
               </div>
            </div>
          </div>
        </section>

        {/* 11. Comparison Table */}
        <section className="py-32 bg-zinc-50 px-8">
          <div className="max-w-[1000px] mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold font-manrope mb-6">More Than Traditional Monitoring</h2>
          </div>
          <div className="max-w-[1000px] mx-auto bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-xl">
             <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="p-8 text-left uppercase tracking-widest text-[10px] font-black italic">Capability</th>
                    <th className="p-8 text-center uppercase tracking-widest text-[10px] font-black italic border-l border-white/10 bg-indigo-600">Deep Sense</th>
                    <th className="p-8 text-center uppercase tracking-widest text-[10px] font-black italic border-l border-white/10">Legacy Tools</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  {[
                    "Real-time monitoring",
                    "Behavioral analytics",
                    "Automated alerts",
                    "Case workflows",
                    "Full Audit trail"
                  ].map((feat, i) => (
                    <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                      <td className="p-8 text-neutral-600">{feat}</td>
                      <td className="p-8 text-center border-l border-zinc-50">
                        <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                      </td>
                      <td className="p-8 text-center border-l border-zinc-50 text-zinc-300 italic">
                         Limited / Partial
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        </section>

        {/* 13. CTA Section */}
        <section className="py-24 px-8 mb-24">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-neutral-900 rounded-[64px] p-24 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-indigo-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
               <div className="relative z-10">
                  <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight max-w-4xl mx-auto">
                    Modernize Your <span className="text-brand-lime italic">AML Monitoring</span> Today.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg">
                      Request Demo
                    </button>
                    <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-bold font-manrope hover:bg-white hover:text-neutral-900 transition-all text-lg">
                      Talk to Sales
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BrainCircuitIcon({ className }: { className?: string }) {
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
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.13 5.003 5.003 0 0 0 9.965-1.025" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 1 1 12 5" />
      <path d="M15.003 16.895A5 5 0 1 1 12 17.025" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
