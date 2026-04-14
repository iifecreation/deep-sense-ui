"use client";

import React from "react";
import { Coins, ShieldAlert, Flag, Activity, TrendingUp, TrendingDown, Zap, ShieldCheck } from "lucide-react";

export default function MarketplaceCards() {
  const stats = [
    { label: "Total Transactions", value: "$42.8M", trend: "+12.4%", icon: <Coins />, color: "text-neutral-900", bg: "bg-brand-lime", up: true },
    { label: "Flagged Events", value: "1,284", trend: "-3.2%", icon: <Flag />, color: "text-red-500", bg: "bg-red-500/5", up: false },
    { label: "Analyst Savings", value: "$1.4M", trend: "+8.1%", icon: <ShieldCheck />, color: "text-emerald-500", bg: "bg-emerald-500/5", up: true },
    { label: "Avg Latency", value: "1.2ms", trend: "-0.4ms", icon: <Zap />, color: "text-blue-500", bg: "bg-blue-500/5", up: false }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="p-10 bg-white rounded-[48px] border border-neutral-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden cursor-default">
           {/* SUBTLE INDICATOR TRACK */}
           <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform">
              {React.cloneElement(stat.icon as React.ReactElement<{ className: string }>, { className: "w-24 h-24 text-neutral-900" })}
           </div>
           
           <div className="relative z-10 space-y-8 font-bold italic">
              <div className="flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(stat.icon as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic font-black">{stat.label}</span>
              </div>
              <div className="flex items-end justify-between italic">
                 <div className="text-4xl lg:text-5xl font-black italic tracking-tighter text-neutral-900 italic">{stat.value}</div>
                 <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black italic ${stat.up ? "bg-emerald-500/5 text-emerald-600" : "bg-red-500/5 text-red-600"}`}>
                    {stat.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {stat.trend}
                 </div>
              </div>
           </div>
        </div>
      ))}
    </div>
  );
}
