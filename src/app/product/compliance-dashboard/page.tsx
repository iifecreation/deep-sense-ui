"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Shield, 
  Zap, 
  Search, 
  Activity, 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Layers, 
  Bell,
  PieChart,
  LineChart,
  Target,
  Users,
  Briefcase,
  History,
  Lock,
  Globe,
  Network,
  Settings,
  Smartphone,
  Send,
  Eye,
  Monitor
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function ComplianceDashboardPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Institutional Command Center</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl">
              A Unified <span className="text-indigo-600 italic">Dashboard</span> for Fraud and AML.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense provides a centralized workspace where compliance teams monitor alerts, investigate cases, and manage risk in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                See It in Action
              </button>
            </div>
          </div>
        </section>

        {/* 2. Overview: Your Compliance Command Center */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Your Compliance Command Center</h2>
             <p className="text-zinc-500 text-lg mb-20 max-w-3xl font-inter italic leading-relaxed">The Deep Sense dashboard brings together real-time alerts, case management, transaction monitoring, customer risk profiles, and investigation tools—all in one unified interface.</p>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                {[
                  { icon: <Bell />, label: "Real-time Alerts" },
                  { icon: <Briefcase />, label: "Case Management" },
                  { icon: <Activity />, label: "Tx Monitoring" },
                  { icon: <Layers />, label: "Risk Profiles" },
                  { icon: <Search />, label: "Investigation Tools" }
                ].map((it, i) => (
                  <div key={i} className="p-8 bg-white rounded-[32px] border border-zinc-100 shadow-sm flex flex-col items-center gap-4 group hover:bg-neutral-900 transition-all">
                     <div className="text-indigo-600 group-hover:text-brand-lime transition-colors">{it.icon}</div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{it.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. Dashboard Overview (Visual Section) */}
        <section className="py-32 px-8 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full" />
                 <div className="relative z-10 bg-neutral-900 p-8 md:p-12 rounded-[56px] shadow-3xl text-white border border-white/5 overflow-hidden group">
                    <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-10">
                       <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-lime italic">Real-Time Risk Landscape</span>
                       <Monitor className="text-zinc-400" />
                    </div>
                    <div className="space-y-8">
                       <div className="grid grid-cols-3 gap-4">
                          {[
                            { l: "TX VOL", v: "$1.4M", c: "text-white" },
                            { l: "FLAGGED", v: "128", c: "text-red-500" },
                            { l: "ACCURACY", v: "99.8%", c: "text-brand-lime" }
                          ].map((s, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                               <span className="text-[8px] font-black text-zinc-500 mb-1">{s.l}</span>
                               <span className={`text-sm font-bold italic ${s.c}`}>{s.v}</span>
                            </div>
                          ))}
                       </div>
                       <div className="h-48 bg-white/5 rounded-3xl border border-white/5 p-6 flex items-end gap-1 overflow-hidden relative">
                         <div className="absolute top-4 left-4 text-[9px] font-bold text-zinc-500 italic uppercase italic">Fraud Trends Analyics</div>
                         {[40, 25, 60, 45, 90, 70, 80, 50, 95, 85].map((h, i) => (
                           <div key={i} className="flex-1 bg-brand-lime/20 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                              <div className="absolute inset-0 bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                           </div>
                         ))}
                       </div>
                    </div>
                 </div>
              </div>
              <div className="text-center lg:text-left">
                 <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1]">A Single View of Your Risk Landscape</h2>
                 <p className="text-zinc-500 text-lg mb-10 italic">Our dashboard is architected for maximum operational visibility, providing clear summary metrics, high-risk activity highlights, and current analyst workload in one screen.</p>
                 <div className="space-y-4 max-w-lg mx-auto lg:mx-0 font-bold text-sm text-neutral-800 italic">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transform hover:translate-x-4 transition-transform">
                       <PieChart className="w-5 h-5 text-indigo-600" />
                       Summary Metrics (TX, Alerts, Risk)
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transform hover:translate-x-4 transition-transform delay-75">
                       <Activity className="w-5 h-5 text-indigo-600" />
                       Fraud Trends and Live Analytics
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transform hover:translate-x-4 transition-transform delay-150">
                       <Target className="w-5 h-5 text-indigo-600" />
                       High-Risk Activity and Entity Highlights
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Key Metrics & 5. Alerts Panel */}
        <section className="py-24 px-8 bg-zinc-50">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="p-12 bg-white rounded-[56px] border border-zinc-200">
                 <h3 className="text-3xl font-bold mb-10 italic underline decoration-zinc-100 decoration-8 underline-offset-12">Monitor What Matters</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { l: "Total Transactions", v: "2,482,901", s: "+12%" },
                      { l: "Flagged Transactions", v: "1,248", s: "-2%", sc: "text-red-500" },
                      { l: "Fraud Rate", v: "0.04%", s: "Stable" },
                      { l: "High-Risk Customers", v: "482", s: "+4%" }
                    ].map((m, i) => (
                      <div key={i} className="flex flex-col gap-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{m.l}</span>
                         <div className="flex items-baseline gap-4">
                            <span className={`text-4xl font-bold tracking-tighter italic ${m.sc || "text-neutral-900"}`}>{m.v}</span>
                            <span className="text-[10px] font-bold text-zinc-400 italic">{m.s}</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-neutral-900 rounded-[56px] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8">
                    <Bell className="w-24 h-24 text-white/5 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold mb-10 italic uppercase border-b border-white/10 pb-10">Real-Time Alert Feed</h3>
                  <div className="space-y-4">
                     {[
                       { l: "High risk tx detected", status: "Critical", time: "2s ago" },
                       { l: "Geographic anomaly", status: "Warning", time: "14s ago" },
                       { l: "Multiple accounts - same device", status: "Critical", time: "1m ago" }
                     ].map((al, i) => (
                       <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group-hover:bg-brand-lime group-hover:text-black transition-all">
                          <div>
                             <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-neutral-900 mb-1">{al.time}</div>
                             <div className="text-sm font-bold italic">{al.l}</div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter ${al.status === "Critical" ? "bg-red-500/20 text-red-500" : "bg-orange-500/20 text-orange-500"}`}>
                             {al.status}
                          </div>
                       </div>
                     ))}
                  </div>
              </div>
           </div>
        </section>

        {/* 6. Case Mgmt & 7. Investigation Workspace */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto text-center mb-24">
              <h2 className="text-5xl font-bold mb-10 tracking-tight">Manage Investigations Efficiently</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Take deep dives into transaction history, risk scores, and device connections without leaving your workflow.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Open Cases", desc: "Track assigned and unassigned investigation queues.", icon: <Briefcase /> },
                { title: "Network Graph", desc: "Visualize hidden connections and fraud ring relationships.", icon: <Network /> },
                { title: "Triggered Rules", desc: "Inspect specific logic signals that caused the alert.", icon: <Cpu /> },
                { title: "Timeline View", desc: "Full history of customer and account behavior over time.", icon: <History /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative group overflow-hidden">
                   <div className="w-14 h-14 bg-indigo-600 text-white rounded-[24px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-7 h-7" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight">{it.title}</h4>
                   <p className="text-zinc-500 font-inter italic leading-relaxed text-sm">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 8. Customer Risk View & 9. Graph View */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-10 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center text-left">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight italic leading-tight">Visualize Fraud Networks</h2>
                 <p className="text-zinc-400 text-lg mb-12 italic leading-relaxed">Uncover hidden relationships by seeing connections between accounts, devices, and transactions in a unified graph intelligence view.</p>
                 <div className="space-y-6">
                    {[
                      "Uncover Hidden Fraud Rings",
                      "Analyze Shared Device Identities",
                      "Track Related Entities Instantly",
                      "Visual Activity Time-travel"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <Network className="w-6 h-6 border-white/20" />
                         </div>
                         <span className="font-bold text-white uppercase italic text-sm tracking-tight">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-white rounded-[64px] shadow-3xl text-neutral-900 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8">
                    <Layers className="w-32 h-32 text-zinc-100 group-hover:text-brand-lime/20 transition-all" />
                 </div>
                 <h3 className="text-2xl font-bold mb-10 italic uppercase border-b border-zinc-100 pb-10">Customer Risk Profile</h3>
                 <div className="space-y-8">
                    <div className="flex justify-between items-center bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
                       <span className="text-xs font-black uppercase tracking-widest text-zinc-400 italic font-inter font-bold">Dynamic Score</span>
                       <span className="text-3xl font-black text-indigo-600 italic">84 / 100</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { l: "TRUST LEVEL", v: "SUSPICIOUS" },
                         { l: "NETWORK RISK", v: "HIGH" }
                       ].map((r, i) => (
                         <div key={i} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                            <span className="text-[8px] font-black text-zinc-400 uppercase italic">{r.l}</span>
                            <div className="text-xs font-black italic text-red-500 mt-1">{r.v}</div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 10. Real-Time, 11. Reporting, 12. Workspace, 13. Customization, 14. Responsive */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Stay Ahead of Risk", desc: "The dashboard updates in real-time with instant alert generation and visibility.", icon: <Zap /> },
                { title: "Reporting Access", desc: "Generate compliance reports and track submissions directly from the workspace.", icon: <Send /> },
                { title: "Built for Collaboration", desc: "Assign cases, add analyst notes, and manage role-based team permissions.", icon: <Users /> },
                { title: "Adapt to Your Needs", desc: "Customizable views, configurable widgets, and organization-specific security settings.", icon: <Settings /> },
                { title: "Access Anywhere", desc: "Responsive design optimized for high performance across all institutional environments.", icon: <Smartphone /> },
                { title: "Decision Transparency", desc: "Full audit trails of user activity and decision rationale for every outcome.", icon: <Shield /> }
              ].map((it, i) => (
                <div key={i} className="flex gap-6 items-start group">
                   <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6 border-indigo-100" })}
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter">{it.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed italic">{it.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 15. Comparison Table */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-200 mt-24">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-10 italic uppercase">More Than Just a Dashboard</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Unified workspace (Fraud/AML)",
                         "Real-time event updates",
                         "Integrated alert-to-report workflow",
                         "Native network visualization",
                         "Role-based collaborative tools"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Limited / Separate
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 16. Impact & 17. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1] uppercase italic">
                   Operate with <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none">Clarity and Speed.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Faster investigations, better decision-making, and improved team efficiency. See how the Deep Sense dashboard can transform your institutional risk monitoring.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl">
                     Request Live Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-neutral-900 transition-all text-xl">
                     Book a Walkthrough
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

function SendIcon({ className }: { className?: string }) {
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
