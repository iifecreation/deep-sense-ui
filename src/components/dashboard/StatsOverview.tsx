"use client";

import React from "react";
import { ShieldCheck, Activity, Cpu, Zap, BarChart3, Database, Globe, History, TrendingUp } from "lucide-react";

export default function StatsOverview() {
  const metrics = [
    { label: "Engine Confidence", value: "98.4%", stat: "Stable", icon: <ShieldCheck />, color: "text-neutral-900", bg: "bg-brand-lime" },
    { label: "Active Connections", value: "841/s", stat: "Elevated", icon: <Activity />, color: "text-emerald-600", bg: "bg-emerald-500/5" },
    { label: "Compute Utilization", value: "42.1%", stat: "Optimized", icon: <Cpu />, color: "text-blue-600", bg: "bg-blue-500/5" },
    { label: "Network Propagation", value: "12ms", stat: "Synced", icon: <Globe />, color: "text-brand-lime", bg: "bg-zinc-50" }
  ];

  return (
    <div className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl flex flex-col h-full group hover:shadow-2xl transition-all cursor-default overflow-hidden relative">
       <div className="flex items-center justify-between mb-10 italic">
          <h3 className="text-xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none">System Vital Status.</h3>
          <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 flex items-center gap-2 italic font-black">
             <Zap className="w-3.5 h-3.5 text-[#D1F701]" /> 100.0% Uptime
          </div>
       </div>

       <div className="flex-1 grid grid-cols-2 gap-8 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="p-6 bg-zinc-50 rounded-[32px] border border-neutral-100 flex flex-col justify-between hover:border-neutral-200 cursor-pointer shadow-sm group/item">
               <div className="flex items-center justify-between mb-6 italic">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${m.bg} ${m.color} shadow-sm group-hover/item:scale-110 transition-transform`}>
                     {React.cloneElement(m.icon as React.ReactElement<{ className: string }>, { className: "w-4 h-4" })}
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${m.stat === 'Elevated' ? 'text-emerald-600 animate-pulse' : 'text-neutral-300'}`}>
                     {m.stat}
                  </span>
               </div>
               <div className="italic">
                  <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mb-1 italic">{m.label}</p>
                  <div className="text-2xl font-black italic tracking-tighter text-neutral-900 italic leading-none">{m.value}</div>
               </div>
            </div>
          ))}
       </div>

       <div className="mt-auto pt-10 border-t border-neutral-100 space-y-4 font-bold">
          <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-neutral-300 italic">
             <span>Regional Engine Load (EU-1)</span>
             <span className="text-neutral-900">72%</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner">
             <div className="h-full bg-brand-lime w-[72%] transition-all duration-1000 group-hover:w-full shadow-sm" />
          </div>
          <div className="flex items-center gap-3 pt-4 text-[9px] font-black text-neutral-300 uppercase tracking-widest italic group-hover:text-neutral-900 transition-all italic">
             <History className="w-3.5 h-3.5" />
             Last sync with global relay: 14s ago
          </div>
       </div>
    </div>
  );
}
