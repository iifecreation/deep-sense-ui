"use client";

import React from "react";
import { TrendingUp, BarChart3, Activity, Download, ChevronRight, Zap } from "lucide-react";

export default function EarningChart() {
  return (
    <div className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl group relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all cursor-default">
       <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
       
       {/* Control Slot */}
       <div className="flex items-center justify-between mb-10 relative z-10 italic font-bold">
          <div className="space-y-1">
             <h3 className="text-xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none">Aggregated Risk Velocity.</h3>
             <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest leading-none">Attack Vectors by Time Interval</p>
          </div>
          <div className="flex items-center gap-4 italic font-black">
             <div className="flex bg-zinc-50 border border-neutral-200 rounded-2xl p-1 shadow-sm">
                {["D", "W", "M"].map((t, i) => (
                  <button key={i} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${t === "W" ? "bg-white text-neutral-900 shadow-sm border border-neutral-200" : "text-neutral-400 hover:text-neutral-900"}`}>
                     {t}
                  </button>
                ))}
             </div>
             <button className="p-3 bg-zinc-50 border border-neutral-200 rounded-2xl text-neutral-400 hover:text-neutral-900 transition-all shadow-sm">
                <Download className="w-4 h-4 shadow-sm" />
             </button>
          </div>
       </div>

       {/* Bars Visualization - Simulated High Fidelity Light */}
       <div className="h-64 flex items-end justify-between gap-3 relative px-10 group/grid mb-6">
          {[40, 65, 30, 85, 55, 95, 75, 50, 82, 60, 45, 100].map((h, i) => (
            <div key={i} className="flex-1 space-y-4 group/bar flex flex-col items-center">
               <div className="w-full flex flex-col gap-1.5 items-center justify-end h-full">
                  <div 
                    style={{ height: `${h}%` }} 
                    className="w-full bg-neutral-100 rounded-t-xl group-hover/bar:bg-brand-lime transition-all duration-700 border-x border-t border-transparent group-hover/bar:border-neutral-200 shadow-sm" 
                  />
                  <div 
                    style={{ height: `${h * 0.4}%` }} 
                    className="w-2 bg-neutral-50 rounded-t-lg group-hover/bar:bg-neutral-900/20 transition-all duration-1000 animate-pulse" 
                  />
               </div>
               <span className="text-[8px] font-black text-neutral-300 uppercase tracking-widest italic group-hover/bar:text-neutral-900 transition-all">0{i+1}:00</span>
            </div>
          ))}
          <div className="absolute top-0 right-0 p-10 flex flex-col items-end gap-2 text-[9px] font-black uppercase tracking-widest text-neutral-300 pointer-events-none italic">
             <span>Engine Limit: 1.2M events</span>
             <span>Current: 842.1K</span>
             <div className="flex items-center gap-2 text-[#D1F701] drop-shadow-sm">
                <Zap className="w-3.5 h-3.5 shadow-[0_0_8px_#D1F701]" /> 98.4% Confidence
             </div>
          </div>
       </div>

       {/* Footer Overlay Summary */}
       <div className="pt-10 border-t border-neutral-100 mt-auto flex items-center justify-between relative z-10 italic italic">
          <div className="flex items-center gap-10 font-bold italic">
             <div>
                <p className="text-[8px] font-black uppercase text-neutral-400 mb-1">Max Amplitude</p>
                <div className="text-2xl font-black italic text-neutral-900 italic leading-none">841 Events / s</div>
             </div>
             <div>
                <p className="text-[8px] font-black uppercase text-neutral-400 mb-1">Drift Rate</p>
                <div className="text-2xl font-black italic text-emerald-600 italic leading-none">-2.4%</div>
             </div>
          </div>
          <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 group/btn transition-all italic">
             Full Analysis <ChevronRight className="w-4 h-4 text-[#D1F701] group-hover/btn:translate-x-2 transition-all" />
          </button>
       </div>
    </div>
  );
}
