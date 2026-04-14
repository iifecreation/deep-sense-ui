"use client";

import React from "react";
import { ShieldAlert, Zap, History, ChevronRight, UserPlus, Fingerprint, Activity, Clock } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    { type: "Critical", title: "Large Transaction Velocity", entity: "user_4910", time: "2m ago", score: 94 },
    { type: "High", title: "Multiple IPs Detected", entity: "anon_8102", time: "14m ago", score: 82 },
    { type: "Medium", title: "Atypical Withdrawal", entity: "user_6625", time: "1h ago", score: 56 },
    { type: "Low", title: "New Device Login", entity: "dev_agent", time: "5h ago", score: 24 }
  ];

  return (
    <div className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl flex flex-col h-full group transition-all hover:shadow-2xl">
      <div className="flex items-center justify-between mb-10 italic">
        <h3 className="text-xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none">Live Alert Stream.</h3>
        <button className="text-[10px] font-black uppercase tracking-widest text-brand-lime hover:gap-6 flex items-center gap-4 transition-all drop-shadow-sm">
          View All <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 space-y-4">
        {activities.map((act, i) => (
          <div key={i} className="p-6 bg-zinc-50 border border-neutral-100 rounded-[32px] hover:border-brand-lime transition-all cursor-pointer group/item flex items-center justify-between shadow-sm relative overflow-hidden">
             <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-4">
                   <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                     act.type === "Critical" ? "bg-red-500/5 border-red-500/10 text-red-600" :
                     act.type === "High" ? "bg-orange-500/5 border-orange-500/10 text-orange-600" :
                     "bg-neutral-100 border-neutral-200 text-neutral-400"
                   }`}>
                     {act.type}
                   </span>
                   <span className="text-[10px] font-bold text-neutral-300 italic group-hover/item:text-neutral-400">PTS: {act.score}</span>
                </div>
                <div>
                   <h5 className="text-[13px] font-black italic tracking-tight text-neutral-900 group-hover/item:text-brand-lime transition-all mb-1 italic">{act.title}</h5>
                   <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest italic leading-none">{act.entity} • {act.time}</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-300 group-hover/item:text-neutral-900 transition-all shadow-sm">
                   <Clock className="w-4.5 h-4.5" />
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-10 border-t border-neutral-100 flex items-center gap-4 italic italic">
         <div className="w-10 h-10 bg-brand-lime rounded-xl flex items-center justify-center text-neutral-900 shadow-md">
            <Activity className="w-5 h-5 flex-shrink-0Shadow" />
         </div>
         <p className="text-[10px] text-neutral-400 font-inter italic leading-relaxed italic">Engine Active. Processed 142.1K events in last hour.</p>
      </div>
    </div>
  );
}
