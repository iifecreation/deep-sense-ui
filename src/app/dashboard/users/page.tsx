"use client";

import React from "react";
import { 
  Users, 
  Search, 
  ChevronRight
} from "lucide-react";

export default function UsersPage() {
  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Users.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">14.2M Active Entities • 98.4% Confidence</p>
        </div>
        <div className="flex gap-4">
           <div className="relative group w-96 font-bold">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
              <input 
                 type="text" 
                 placeholder="Search UserID, Email, or Hash..."
                 className="w-full pl-14 pr-8 py-4 bg-white border border-neutral-200 rounded-2xl text-[13px] font-bold text-neutral-900 placeholder:text-neutral-300 focus:border-brand-lime shadow-xl italic"
              />
           </div>
        </div>
      </div>

      {/* 2. TABLE */}
      <div className="bg-white rounded-[56px] border border-neutral-200 overflow-hidden shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left font-manrope">
               <thead>
                  <tr className="border-b border-neutral-100">
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">User / Entity</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic text-center">Risk Score</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic text-center">Status</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Last Activity</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic text-right">Volume (30d)</th>
                     <th className="p-10"></th>
                  </tr>
               </thead>
               <tbody className="text-neutral-900">
                  {[
                    { id: "alex_reed", e: "alex@deepsense.ai", s: 12, st: "Trusted", t: "2m ago", v: "$42.8K", avatar: "AR" },
                    { id: "unknown_8102", e: "risk_shadow@tor.io", s: 94, st: "Flagged", t: "14m ago", v: "$1.2M", avatar: "?" },
                    { id: "mike.jones", e: "mike.jones@gmail.com", s: 22, st: "Trusted", t: "1h ago", v: "$150.00", avatar: "MJ" },
                    { id: "user_49201", e: "cluster_seed@net.io", s: 82, st: "Suspended", t: "3h ago", v: "$542.2K", avatar: "U4" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-neutral-50 last:border-0 hover:bg-zinc-50 transition-all group/row cursor-pointer font-bold italic">
                       <td className="p-10">
                          <div className="flex items-center gap-6">
                             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black italic border transition-all ${
                                row.s > 80 ? "bg-red-500/10 border-red-500/20 text-red-500 shadow-md" : "bg-zinc-50 border-neutral-100 text-neutral-400 group-hover/row:border-brand-lime/20 group-hover/row:text-neutral-900"
                             }`}>
                                {row.avatar}
                             </div>
                             <div>
                                <div className="text-[14px] font-black italic tracking-tight text-neutral-900 group-hover/row:text-brand-lime transition-colors italic leading-none">{row.id}</div>
                                <div className="text-[10px] text-neutral-300 italic lowercase drop-shadow-sm">{row.e}</div>
                             </div>
                          </div>
                      </td>
                      <td className="p-10 text-center">
                          <div className={`text-3xl font-black italic tracking-tighter ${row.s > 80 ? "text-red-500 scale-110" : row.s > 40 ? "text-orange-400" : "text-brand-lime"}`}>
                             {row.s}
                          </div>
                      </td>
                      <td className="p-10 text-center">
                          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${
                            row.st === "Trusted" ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-600 shadow-sm" : 
                            row.st === "Flagged" ? "bg-orange-500/5 border-orange-500/10 text-orange-600 shadow-sm" : 
                            "bg-red-500/5 border-red-500/10 text-red-500 shadow-sm"
                          }`}>
                             <span className="text-[9px] font-black uppercase tracking-widest">{row.st}</span>
                          </div>
                      </td>
                      <td className="p-10">
                          <div className="text-[11px] font-bold text-neutral-300 lowercase">{row.t}</div>
                      </td>
                      <td className="p-10 text-right font-black italic text-neutral-900 text-[14px] italic leading-none">
                          {row.v}
                      </td>
                      <td className="p-10 text-right">
                          <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-300 group-hover/row:text-neutral-900 transition-all ml-auto drop-shadow-sm">
                              Details <ChevronRight className="w-4 h-4 shadow-[0_0_8px_#D1F701]" />
                          </button>
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-10 bg-zinc-50 border-t border-neutral-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-300 italic">
            <div>Showing 4 of 14,281,002 Entities</div>
            <div className="flex gap-4">
               <button className="hover:text-neutral-900 transition-colors">Previous</button>
               <button className="hover:text-neutral-900 transition-colors">Next</button>
            </div>
         </div>
      </div>
    </div>
  );
}
