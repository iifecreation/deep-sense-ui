"use client";

import React from "react";
import { 
  AlertCircle, 
  Search, 
  ChevronRight, 
  Clock, 
  User, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Filter
} from "lucide-react";

export default function AlertsPage() {
  const alerts = [
    { id: "alt_842a", t: "High Velocity Transaction", u: "user_9102", d: "2m ago", r: 94, s: "Critical" },
    { id: "alt_110b", t: "Multiple IP Ingress", u: "anon_shadow", d: "14m ago", r: 82, s: "High" },
    { id: "alt_452c", t: "New Device Profiling", u: "mike.jones", d: "1h ago", r: 56, s: "Medium" },
    { id: "alt_772d", t: "Geographic Drift", u: "alex_reed", d: "3h ago", r: 42, s: "Low" }
  ];

  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Alerts.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Situational Risk Feed • 1,284 Ongoing Signals</p>
        </div>
        <div className="flex gap-4 font-bold">
           <button className="px-10 py-4 bg-zinc-100 text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-sm italic">
              Batch Acknowledge
           </button>
           <button className="px-10 py-4 bg-neutral-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 italic">
              Signal Triage (Auto)
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 2. LIVE FEED */}
        <div className="lg:col-span-8 space-y-6">
           {alerts.map((alt, i) => (
             <div key={i} className="p-10 bg-white rounded-[56px] border border-neutral-100 flex items-center justify-between shadow-xl hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden font-bold">
                <div className="flex items-center gap-10 flex-1">
                   <div className={`w-16 h-16 rounded-3xl flex items-center justify-center border shadow-sm ${
                     alt.s === "Critical" ? "bg-red-500/10 border-red-500/20 text-red-500" :
                     alt.s === "High" ? "bg-orange-500/10 border-orange-500/20 text-orange-500" :
                     "bg-zinc-100 border-neutral-200 text-neutral-400"
                   }`}>
                      <ShieldAlert className="w-8 h-8" />
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-4">
                         <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                           alt.s === "Critical" ? "bg-red-500/10 border-red-500/20 text-red-500" :
                           alt.s === "High" ? "bg-orange-500/10 border-orange-500/20 text-orange-500" :
                           "bg-zinc-50 border-neutral-100 text-neutral-400"
                         }`}>
                           {alt.s}
                         </span>
                         <span className="text-[10px] font-bold text-neutral-300 italic">ID: {alt.id}</span>
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight text-neutral-900 group-hover:text-brand-lime transition-colors italic leading-none">{alt.t}</h4>
                      <p className="text-[10px] text-neutral-400 uppercase font-black italic tracking-widest leading-none">{alt.u} • {alt.d} • SCORED {alt.r} PTS</p>
                   </div>
                </div>

                <div className="flex items-center gap-8">
                   <div className="text-right hidden sm:block">
                      <div className={`text-3xl font-black italic tracking-tighter ${alt.r > 80 ? "text-red-500 scale-110" : "text-neutral-900"}`}>{alt.r}</div>
                      <p className="text-[8px] font-black uppercase text-neutral-300">PTS</p>
                   </div>
                   <button className="w-12 h-12 bg-zinc-50 border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-300 group-hover:text-neutral-900 transition-all shadow-sm">
                      <ChevronRight className="w-5 h-5 shadow-[0_0_8px_#D1F701]" />
                   </button>
                </div>
             </div>
           ))}
        </div>

        {/* 3. PRIORITIZATION ENGINE (METRICS) */}
        <div className="lg:col-span-4 space-y-12">
           <div className="p-12 bg-neutral-900 rounded-[64px] shadow-3xl space-y-12 group transition-all font-bold">
              <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase italic leading-none">Severity Distribution.</h3>
              <div className="space-y-8 italic">
                 {[
                   { l: "Critical Signals", v: "12", c: "bg-red-500", p: "12%" },
                   { l: "High Priority", v: "42", c: "bg-orange-500", p: "42%" },
                   { l: "Operational", v: "841", c: "bg-brand-lime", p: "84%" }
                 ].map((sev, j) => (
                   <div key={j} className="space-y-4">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40">
                         <span>{sev.l}</span>
                         <span className="text-white">{sev.v}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                         <div style={{ width: sev.p }} className={`h-full ${sev.c} shadow-sm transition-all duration-1000 group-hover:scale-x-110 origin-left`} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-8 group transition-all font-bold italic">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic">Analyst Assigned</h5>
              <div className="flex -space-x-4">
                 {[1,2,3,4].map((a) => (
                   <div key={a} className="w-12 h-12 rounded-2xl border-4 border-white bg-zinc-100 flex items-center justify-center text-neutral-400 font-bold text-xs shadow-sm overflow-hidden group-hover:translate-x-2 transition-transform">
                      <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=Analyst${a}`} alt="Analyst" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-2xl border-4 border-white bg-brand-lime flex items-center justify-center text-neutral-900 font-black text-xs shadow-sm italic shadow-md animate-pulse">+</div>
              </div>
              <p className="text-[10px] text-neutral-400 italic font-inter leading-relaxed italic">Engine running in high-alert mode. 12 critical signals pending triage.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
