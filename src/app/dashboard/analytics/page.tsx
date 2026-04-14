"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Download,
  Activity,
  History
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Analytics.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">System Performance & Fraud Trends • Period: 7d</p>
        </div>
        <div className="flex gap-4">
           <button className="px-10 py-4 bg-zinc-100 text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-sm italic font-black">
              Export PDF Report <Download className="w-4 h-4 ml-2 inline group-hover:translate-y-1 transition-all" />
           </button>
           <div className="flex bg-white rounded-2xl p-1 border border-neutral-100 shadow-xl font-bold">
              {["Today", "7d", "30d", "90d"].map((t, i) => (
                <button 
                  key={i} 
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    t === "7d" ? "bg-zinc-50 text-neutral-900 shadow-sm border border-neutral-100" : "text-neutral-300 hover:text-neutral-900"
                  }`}
                >
                  {t}
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* 2. STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { l: "Fraud Savings (Est)", v: "$428,210", d: "+12.4%", i: <Zap className="w-8 h-8" />, c: "text-brand-lime" },
           { l: "False Positive Rate", v: "0.12%", d: "-0.04%", i: <Activity className="w-8 h-8" />, c: "text-emerald-600" },
           { l: "Analyst Efficiency", v: "14.2s", d: "-2.1s", i: <BarChart3 className="w-8 h-8" />, c: "text-blue-600" }
         ].map((stat, i) => (
           <div key={i} className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl flex items-center justify-between group overflow-hidden relative transition-all hover:shadow-2xl font-bold italic">
              <div className="space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic leading-none">{stat.l}</p>
                 <div className={`text-4xl font-black italic tracking-tighter ${stat.c} leading-none`}>{stat.v}</div>
              </div>
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-200 border border-neutral-100 group-hover:scale-110 group-hover:border-brand-lime/20 transition-transform group-hover:text-neutral-900 shadow-sm">
                 {stat.i}
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-manrope">
         {/* 3. TREND CHART (VISUAL) */}
         <div className="lg:col-span-8 bg-white rounded-[56px] border border-neutral-100 p-12 lg:p-20 space-y-16 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <h3 className="text-2xl lg:text-4xl font-black italic uppercase italic tracking-tighter text-neutral-900 opacity-10 leading-none">Fraud Distribution.</h3>

            <div className="relative z-10 h-[350px] w-full flex items-end justify-between gap-6 px-10 border-b border-neutral-100 pb-10">
               {[40, 75, 45, 90, 65, 80, 55, 100, 75, 50, 85, 60].map((h, i) => (
                 <div key={i} className="flex-1 space-y-4 group/bar flex flex-col items-center">
                    <div className="w-full flex gap-2 items-end h-full">
                       <div 
                         style={{ height: `${h}%` }} 
                         className="flex-1 bg-zinc-100 rounded-t-xl group-hover:bg-brand-lime transition-all duration-700 shadow-sm" 
                       />
                    </div>
                    <span className="text-[8px] font-black text-neutral-200 uppercase tracking-widest italic group-hover:text-neutral-900 transition-all font-black">{12+i}:00</span>
                 </div>
               ))}
            </div>
         </div>

         {/* 4. DONUT BREAKDOWN (VISUAL) */}
         <div className="lg:col-span-4 bg-white rounded-[100px] border border-neutral-100 p-12 lg:p-20 space-y-12 shadow-2xl text-center group font-bold italic">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic">Risk Vectors</h5>
            <div className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-[24px] border-zinc-50 rotate-12 shadow-inner" />
               <div className="absolute inset-0 rounded-full border-[24px] border-brand-lime border-r-transparent border-b-transparent animate-spin-slow transition-all shadow-md" />
               <div className="relative text-center">
                  <div className="text-6xl font-black italic text-neutral-900 italic leading-none">84%</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">BOT-DRIVEN</div>
               </div>
            </div>
            <p className="text-[10px] text-neutral-300 font-inter italic leading-relaxed italic px-4">Automated pattern detection confirms botnet propagation across 12 sectors.</p>
         </div>
      </div>
    </div>
  );
}
