"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  AlertTriangle, 
  Search, 
  Users, 
  RefreshCw, 
  Layers, 
  MessageSquare, 
  Activity, 
  Clock, 
  Shield, 
  Database, 
  Zap, 
  Terminal,
  Layout,
  Eye,
  Bell
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const investigationTools = [
  { t: "Transaction History", i: <Database />, d: "Full timeline of events for every user and account." },
  { t: "Linked Entities", i: <Layers />, d: "Visualize connections between devices, IPs, and accounts." },
  { t: "Risk Score Breakdown", i: <Activity />, d: "Deep dive into exactly why a score was generated." },
  { t: "Rule Explanations", i: <Terminal />, d: "See which specific rules and conditions were met." },
  { t: "Timeline of Events", i: <Clock />, d: "Chronological view of all related activities and signals." }
];

const dashboardStats = [
  { l: "Alert Queue", v: "142", c: "text-amber-500" },
  { l: "Open Cases", v: "28", c: "text-red-500" },
  { l: "Avg Resolution", v: "12m", c: "text-emerald-500" },
  { l: "Analyst Load", v: "84%", c: "text-blue-500" }
];

export default function CaseManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="max-w-[900px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-neutral-900 text-xs font-bold uppercase tracking-widest mb-8">
              <BookOpen className="w-4 h-4" />
              Fraud Operations
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tight text-neutral-900">
              From Detection to <br />
              <span className="text-zinc-300">Action — Instantly.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-12 max-w-[650px]">
              Deep Sense turns fraud signals into actionable alerts and structured cases, enabling your team to investigate and respond efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg">
                Request Demo
              </button>
              <Link href="/dashboard" className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg">
                <Layout className="w-5 h-5" />
                View Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl font-bold font-manrope">Too Many Alerts. <br />Not Enough Insight.</h2>
                <div className="space-y-6">
                   {[
                     "Fraud teams are overwhelmed with unorganized alerts.",
                     "High false positives waste critical analyst time.",
                     "No clear investigation workflow leading to missed fraud.",
                     "Fragmented tools slow down response and resolution."
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 items-start text-lg text-zinc-600 font-medium font-inter">
                        <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                        {item}
                     </div>
                   ))}
                </div>
                <div className="pt-8 border-t border-gray-200">
                   <p className="text-2xl font-bold font-manrope text-neutral-900 italic">Detection without action <span className="text-red-500 underline decoration-red-200">is not protection.</span></p>
                </div>
             </div>
             
             <div className="bg-white p-10 rounded-[64px] border border-gray-100 shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <Bell className="w-12 h-12 text-zinc-100 animate-pulse" />
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Live Alert Stream</span>
                      <span className="text-red-500 font-bold text-xs uppercase tracking-widest">+12 New</span>
                   </div>
                   {[1, 2, 3].map(i => (
                     <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-100 blur-[1px] group-hover:blur-0 transition-all opacity-40 group-hover:opacity-100">
                        <div className="h-2 w-24 bg-gray-200 rounded-full mb-4" />
                        <div className="h-4 w-full bg-gray-100 rounded-full" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* 💡 THE SOLUTION */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-20 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8 tracking-tight">A Unified Fraud Operations Platform</h2>
                 <p className="text-xl text-zinc-500 font-inter leading-relaxed">
                   Deep Sense brings alerts, cases, and investigators into one seamless ecosystem designed for speed and precision.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { t: "Alert Management", d: "Centralized queue for all suspicious activity alerts.", i: <Bell /> },
                   { t: "Structured Cases", d: "Create, assign, and track investigative workflows.", i: <BookOpen /> },
                   { t: "Full Visibility", d: "Complete 360° view of transactions and entities.", i: <Eye /> },
                   { t: "Fast Resolution", d: "Reduce MTTR with streamlined analyst tools.", i: <RefreshCw /> }
                 ].map((feat, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                      <div className="w-12 h-12 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-8">
                         {feat.i}
                      </div>
                      <h4 className="text-xl font-bold font-manrope mb-4">{feat.t}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{feat.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📂 CASE & ALERT MANAGEMENT */}
        <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
           <div className="absolute inset-0 bg-linear-to-br from-brand-lime/10 to-transparent opacity-50" />
           
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <h2 className="text-4xl lg:text-6xl font-bold font-manrope mb-12 tracking-tight">Structured <br />Case Workflows</h2>
                    <div className="space-y-12">
                       <div className="flex gap-6 group">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <RefreshCw className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold mb-3">Automatic Case Creation</h4>
                             <p className="text-white/40 leading-relaxed max-w-[450px]">Deep Sense can automatically group related alerts into a single case based on shared entities or behavior patterns.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 group">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold mb-3">Team Assignments</h4>
                             <p className="text-white/40 leading-relaxed max-w-[450px]">Assign cases to specific analysts or teams. Track status from &quot;Open&quot; to &quot;Under Review&quot; to &quot;Resolved.&quot;</p>
                          </div>
                       </div>
                       <div className="flex gap-6 group">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <Search className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-xl font-bold mb-3">Entity Linking</h4>
                             <p className="text-white/40 leading-relaxed max-w-[450px]">Link multiple suspicious alerts to one centralized case for a unified view of complex fraud rings.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[64px] shadow-3xl">
                    <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                       <div>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Investigation #8292</p>
                          <h3 className="text-2xl font-bold font-manrope">Potential Account Takeover</h3>
                       </div>
                       <span className="px-4 py-1.5 bg-red-500/20 text-red-500 rounded-full text-xs font-bold ring-1 ring-red-500/50">OPEN</span>
                    </div>
                    
                    <div className="space-y-8">
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-bold opacity-60">Priority Status</span>
                             <span className="text-red-400 font-bold">Urgent</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-bold opacity-60">Linked Entities</span>
                             <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-neutral-900" />)}
                             </div>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Active Analysts</p>
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-neutral-900 font-bold text-xs shadow-lg shadow-brand-lime/20">JD</div>
                             <span className="font-bold">John Doe</span>
                             <span className="ml-auto text-white/20 text-xs italic">Assigned 2m ago</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔍 INVESTIGATION TOOLS */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-24">
                 <h2 className="text-4xl font-bold font-manrope mb-4">Everything Analysts Need, in One Place</h2>
                 <p className="text-zinc-500 max-w-[600px] mx-auto">No more tab-switching. Deep Sense consolidates all investigation data into a single, high-performance interface.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                 {investigationTools.map((tool, i) => (
                   <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[40px] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col text-center items-center">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-lime group-hover:text-neutral-900 transition-colors">
                        {React.cloneElement(tool.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="font-bold font-manrope mb-4 h-12 flex items-center leading-tight">{tool.t}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed font-inter">{tool.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 AI INVESTIGATION ASSISTANT */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-neutral-900 text-[10px] font-bold uppercase tracking-widest mb-8">
                    <Zap className="w-3 h-3" />
                    Deep Sense Intelligence
                 </div>
                 <h2 className="text-4xl font-bold font-manrope mb-8 leading-tight">Investigate Faster <br />with AI Assistance</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed mb-10 font-inter">Deep Sense AI analyst assistant helps your team understand complex fraud patterns by summarizing detections and suggesting next steps in seconds.</p>
                 <ul className="space-y-6">
                    {[
                      "Summarize why a transaction was flagged.",
                      "Highlight suspicious behavior patterns automatically.",
                      "Identify hidden links across accounts and devices.",
                      "Suggest immediate next-best steps for resolution."
                    ].map((li, i) => (
                      <li key={i} className="flex gap-4 items-center font-bold text-neutral-800">
                         <div className="w-2 h-2 bg-brand-lime rounded-full" />
                         {li}
                      </li>
                    ))}
                 </ul>
              </div>
              
              <div className="bg-neutral-900 rounded-[48px] p-10 text-white relative shadow-3xl overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8">
                    <Shield className="w-24 h-24 text-white opacity-5 group-hover:opacity-10 transition-opacity" />
                 </div>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center font-bold text-neutral-900 text-xs shadow-lg shadow-brand-lime/20">DS</div>
                    <span className="font-bold text-sm">Deep Sense Assistant</span>
                 </div>
                 <div className="bg-white/5 rounded-3xl p-6 space-y-4 border border-white/10 backdrop-blur-md">
                    <p className="text-sm font-medium leading-relaxed italic">&quot;This alert was triggered because the user attempted three high-value transfers within 2 minutes from a new IP in a flagged region. Behavioral patterns mimic known account takeover sequences. Recommend immediate block and MFA reset.&quot;</p>
                    <div className="flex gap-4">
                       <button className="px-4 py-2 bg-brand-lime text-neutral-900 text-[11px] font-bold rounded-lg hover:scale-105 transition-transform">Block Account</button>
                       <button className="px-4 py-2 bg-white/10 text-white text-[11px] font-bold rounded-lg border border-white/10">Approve Trace</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 📝 COLLABORATION & AUTOMATION */}
        <section className="py-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { t: "Collaborate Seamlessly", d: "Analyst notes and activity logs keep your team in sync.", i: <MessageSquare /> },
                { t: "Audit Trail", d: "Full history of every analyst action for compliance and reviews.", i: <Shield /> },
                { t: "Workflow Automation", d: "Auto-create cases based on custom risk criteria.", i: <Zap /> },
                { t: "Smart Routing", d: "Alerts are automatically routed to the right teams.", i: <RefreshCw /> }
              ].map((feat, i) => (
                <div key={i} className="space-y-6 flex flex-col items-center">
                   <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm border border-gray-100">
                      {feat.i}
                   </div>
                   <h4 className="text-lg font-bold font-manrope">{feat.t}</h4>
                   <p className="text-sm text-zinc-500 font-inter leading-relaxed">{feat.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 📊 ANALYST DASHBOARD */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                 <div className="max-w-[600px]">
                    <h2 className="text-4xl font-bold font-manrope mb-6 leading-tight">Full Operational Visibility</h2>
                    <p className="text-lg text-zinc-500 font-inter leading-relaxed">
                       Managers can track team performance and fraud trends with an integrated analyst dashboard that updates in real time.
                    </p>
                 </div>
                 <div className="flex gap-4">
                    {dashboardStats.map((stat, i) => (
                      <div key={i} className="text-right">
                         <span className={`block text-3xl font-bold font-manrope ${stat.c}`}>{stat.v}</span>
                         <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{stat.l}</span>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="bg-neutral-900 rounded-[56px] p-12 lg:p-24 relative overflow-hidden group shadow-3xl">
                 <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                 <div className="relative border border-white/5 rounded-[40px] aspect-video bg-neutral-800/50 backdrop-blur-2xl flex items-center justify-center">
                    <div className="flex flex-col items-center text-white/20 gap-4 group-hover:text-brand-lime/20 transition-colors">
                       <Layout className="w-24 h-24" />
                       <span className="font-bold uppercase tracking-widest text-xs">Interactive Workspace Preview</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ⚡ PERFORMANCE */}
        <section className="py-32">
           <div className="max-w-[1440px] mx-auto px-8 text-center flex flex-col items-center">
              <Activity className="w-12 h-12 text-brand-lime mb-8" />
              <h2 className="text-4xl font-bold font-manrope mb-8 leading-tight">Built for High-Volume Operations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 mt-12 w-full max-w-[1000px]">
                 <div>
                    <span className="block text-4xl font-bold text-neutral-900 mb-2">1M+</span>
                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Alerts Per Hour Capacity</p>
                 </div>
                 <div>
                    <span className="block text-4xl font-bold text-neutral-900 mb-2">{"< 100ms"}</span>
                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Search Index Latency</p>
                 </div>
                 <div>
                    <span className="block text-4xl font-bold text-neutral-900 mb-2">Real-Time</span>
                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Websocket Updates</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 WHY DEEP SENSE */}
        <section className="py-32 bg-gray-50">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-16">
              <h2 className="text-4xl font-bold font-manrope mb-4 text-neutral-900">More Than Just Alerts</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8">
               <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-gray-100">
                           <th className="p-8 text-sm font-bold text-zinc-400 uppercase tracking-widest font-manrope">Capability</th>
                           <th className="p-8 text-sm font-bold text-brand-lime uppercase tracking-widest font-manrope bg-neutral-900">Deep Sense</th>
                           <th className="p-8 text-sm font-bold text-zinc-400 uppercase tracking-widest font-manrope bg-gray-50">Traditional</th>
                        </tr>
                     </thead>
                     <tbody className="text-neutral-900">
                        {[
                          { c: "Real-time alerts", d: "Yes", t: "Limited" },
                          { c: "Case management", d: "Built-in", t: "External" },
                          { c: "Investigation tools", d: "Advanced", t: "Basic" },
                          { c: "AI assistance", d: "Yes", t: "No" },
                          { c: "Workflow automation", d: "Yes", t: "Limited" },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                             <td className="p-8 font-bold text-sm">{row.c}</td>
                             <td className="p-8 font-extrabold text-neutral-900">{row.d}</td>
                             <td className="p-8 font-medium text-zinc-400 text-sm">{row.t}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-32 bg-neutral-900 text-white">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                 {[
                   { l: "Investigation Time", v: "-60%", d: "Faster resolution cycles." },
                   { l: "Response Speed", v: "Instant", d: "Alerts fire without delay." },
                   { l: "False Positives", v: "-45%", d: "Better context for tools." },
                   { l: "Team Efficiency", v: "+2x", d: "Analysts can handle more." }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col gap-4">
                      <span className="text-brand-lime text-5xl font-bold font-manrope">{stat.v}</span>
                      <span className="text-sm font-bold uppercase tracking-widest">{stat.l}</span>
                      <p className="text-white/40 text-xs">{stat.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24">
           <div className="bg-brand-lime rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              <div className="relative z-10 transition-colors group-hover:text-white duration-700">
                 <h2 className="text-4xl md:text-6xl font-bold font-manrope mb-8">Empower Your <br />Fraud Team</h2>
                 <p className="text-xl mb-12 max-w-[600px] mx-auto opacity-70">Experience the future of fraud operations today. Streamline your workflow and stop fraud faster.</p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope text-lg hover:scale-105 transition-all shadow-xl group-hover:bg-brand-lime group-hover:text-neutral-900">
                      Request Demo
                    </button>
                    <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold font-manrope text-lg hover:bg-gray-50 transition-all shadow-lg active:scale-95 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10">
                      See It in Action
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
