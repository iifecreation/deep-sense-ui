"use client";

import React from "react";
import { 
  Smartphone, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  Zap
} from "lucide-react";

export default function DevicesPage() {
  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Devices.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">842.1K Known Fingerprints • Global Coverage</p>
        </div>
        <div className="flex gap-4">
           <div className="relative group w-96 font-bold">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
              <input 
                 type="text" 
                 placeholder="Search Device MD5, Label, or Model..."
                 className="w-full pl-14 pr-8 py-4 bg-white border border-neutral-200 rounded-2xl text-[13px] font-bold text-neutral-900 placeholder:text-neutral-300 focus:border-brand-lime shadow-xl italic"
              />
           </div>
        </div>
      </div>

      {/* 2. DEVICE STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
         {[
           { l: "High Risk Devices", v: "842", d: "Alert active", c: "text-red-500", i: <ShieldAlert className="w-5 h-5" /> },
           { l: "Known Emulators", v: "1,241", d: "Block active", c: "text-orange-500", i: <Zap className="w-5 h-5" /> },
           { l: "Trusted Mobile", v: "642K", d: "White-listed", c: "text-emerald-500", i: <ShieldCheck className="w-5 h-5" /> }
         ].map((stat, i) => (
           <div key={i} className="p-8 bg-white rounded-[40px] border border-neutral-100 shadow-xl hover:shadow-2xl transition-all group overflow-hidden font-bold italic">
              <div className="relative z-10 flex items-center justify-between mb-6">
                 <div className={`w-10 h-10 rounded-xl bg-zinc-50 border border-neutral-100 flex items-center justify-center ${stat.c} shadow-sm group-hover:scale-110 transition-transform`}>
                    {stat.i}
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-neutral-300 italic">{stat.d}</div>
              </div>
              <div className="relative z-10">
                 <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1 italic leading-none">{stat.l}</p>
                 <div className={`text-3xl font-black italic tracking-tighter ${stat.c} leading-none`}>{stat.v}</div>
              </div>
           </div>
         ))}
      </div>

      {/* 3. TABLE */}
      <div className="bg-white rounded-[56px] border border-neutral-200 overflow-hidden shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left font-manrope">
               <thead>
                  <tr className="border-b border-neutral-100">
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Fingerprint / ID</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Model / Platform</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic text-center">Risk Score</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic text-center">Accounts</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Last Seen</th>
                     <th className="p-10"></th>
                  </tr>
               </thead>
               <tbody className="text-neutral-900">
                  {[
                    { id: "dv_981a_8820", m: "iPhone 15 Pro", p: "iOS 17.4", s: 12, a: 1, t: "Now", r: "WHITE" },
                    { id: "dv_223b_1102", m: "Simulator.x86", p: "Android 12", s: 92, a: 42, t: "2m ago", r: "RED" },
                    { id: "dv_451c_6625", m: "MacBook Pro M3", p: "macOS 14.2", s: 22, a: 2, t: "14m ago", r: "WHITE" },
                    { id: "dv_779d_4921", m: "Galaxy S24 Ultra", p: "Android 14", s: 64, a: 8, t: "1h ago", r: "ORANGE" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-neutral-50 last:border-0 hover:bg-zinc-50 transition-all group/row cursor-pointer font-bold italic">
                       <td className="p-10">
                          <code className="text-[10px] font-mono text-neutral-900 group-hover/row:text-brand-lime transition-all">{row.id}</code>
                       </td>
                       <td className="p-10">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-neutral-300 border border-neutral-100 group-hover/row:border-brand-lime/20 group-hover/row:bg-white transition-all">
                                <Smartphone className="w-4.5 h-4.5" />
                             </div>
                             <div>
                                <div className="text-[12px] font-black italic tracking-tight text-neutral-900 italic leading-none">{row.m}</div>
                                <div className="text-[9px] text-neutral-300 uppercase tracking-widest font-black italic leading-none">{row.p}</div>
                             </div>
                          </div>
                       </td>
                       <td className="p-10 text-center">
                          <div className={`text-2xl font-black italic tracking-tighter ${row.s > 80 ? "text-red-500 scale-110" : row.s > 40 ? "text-orange-400" : "text-brand-lime"}`}>
                             {row.s}
                          </div>
                          <div className="text-[8px] font-black uppercase text-neutral-300">pts</div>
                       </td>
                       <td className="p-10 text-center font-black italic text-neutral-900 text-xl italic">{row.a}</td>
                       <td className="p-10">
                          <div className="text-[11px] font-bold text-neutral-400 lowercase">{row.t}</div>
                       </td>
                       <td className="p-10 text-right">
                          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-300 group-hover/row:text-neutral-900 transition-all ml-auto drop-shadow-sm">
                             Trace <ChevronRight className="w-4 h-4 shadow-[0_0_8px_#D1F701]" />
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
