"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

const days = [
  { day: "Fri", height: 80 },
  { day: "Sat", height: 60 },
  { day: "Sun", height: 75 },
  { day: "Mon", height: 95, active: true },
  { day: "Tue", height: 70 },
  { day: "Wed", height: 85 },
  { day: "Thu", height: 65 }
];

export default function EarningChart() {
  return (
    <div className="bg-white p-8 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col gap-8 flex-1">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
           <h3 className="text-gray-400 text-base font-bold font-manrope">Earning in The Last Week</h3>
           <div className="flex items-center gap-2">
             <span className="text-gray-800 text-3xl font-bold font-manrope tracking-tight">$678,897</span>
             <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500 rounded-full border border-green-400/20 text-white shadow-sm shadow-green-500/20 active:scale-95 transition-all">
                <ArrowUp size={12} className="rotate-45" />
                <span className="text-[10px] font-bold">+10%</span>
             </div>
           </div>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-indigo-600 font-bold transition-all hover:bg-gray-100 group shadow-sm active:scale-95">
          <span className="text-xs">US Dollar</span>
          <div className="w-1 h-1 rounded-full bg-indigo-600" />
        </button>
      </div>

      <div className="flex-1 flex items-end gap-10 min-h-[300px]">
         <div className="flex flex-col justify-between h-[300px] text-gray-400 text-sm font-bold opacity-60">
            <span>40k</span>
            <span>30k</span>
            <span>20k</span>
            <span>10k</span>
            <span>0k</span>
         </div>

         <div className="flex-1 flex justify-between h-[300px]">
            {days.map((item) => (
              <div key={item.day} className="flex flex-col items-center gap-4 h-full group">
                <div className="relative w-12 flex-1 flex flex-col justify-end">
                   {/* Full height background track */}
                   <div className="absolute inset-0 bg-gray-50 rounded-2xl w-full translate-y-[-40px]" />
                   {/* Progress bar */}
                   <div 
                     className={`relative w-full rounded-2xl transition-all duration-700 ease-out group-hover:opacity-100 opacity-90 ${item.active ? "bg-indigo-600 shadow-xl shadow-indigo-600/30" : "bg-gray-100 group-hover:bg-indigo-100"}`}
                     style={{ height: `${item.height}%` }}
                   >
                     {/* Value indicator on hover */}
                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-gray-800 text-white rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.height}k
                     </div>
                   </div>
                </div>
                <span className={`text-sm font-bold transition-colors ${item.active ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-800"}`}>
                   {item.day}
                </span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
