"use client";

import React from "react";
import { 
  FolderSearch, 
  Search, 
  ChevronRight, 
  Clock, 
  User, 
  FileText,
  ShieldAlert,
  MoreVertical,
  Activity,
  CheckCircle2
} from "lucide-react";

export default function CasesPage() {
  const cases = [
    { id: "cs_4821", t: "Alex Reed Cluster Investigation", a: "Sarah Chen", d: "2h ago", s: "Active", p: "High" },
    { id: "cs_1102", t: "Multiple Account Bridge (Crypto)", a: "Mike Ross", d: "5h ago", s: "In Review", p: "Critical" },
    { id: "cs_6625", t: "Device ID Fingerprint Mismatch", a: "Automated", d: "1d ago", s: "Closed", p: "Low" }
  ];

  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Cases.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Forensic Workflow • Institutional Triage Hub</p>
        </div>
        <div className="flex gap-4 font-bold">
           <div className="relative group w-80">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
              <input 
                 type="text" 
                 placeholder="Locate Forensic Vault..."
                 className="w-full pl-14 pr-4 py-4 bg-white border border-neutral-100 rounded-2xl text-[13px] font-bold text-neutral-900 placeholder:text-neutral-300 focus:border-brand-lime shadow-xl italic"
              />
           </div>
           <button className="px-10 py-4 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95 italic font-black">
              Start Forensic Map +
           </button>
        </div>
      </div>

      {/* 2. CASE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
         {cases.map((cs, i) => (
           <div key={i} className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden font-bold italic">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <FolderSearch className="w-24 h-24 text-neutral-900" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between gap-12 font-bold italic">
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                         cs.s === "Active" ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-600 shadow-sm" : 
                         cs.s === "In Review" ? "bg-orange-500/5 border-orange-500/10 text-orange-600 shadow-sm" : 
                         "bg-neutral-100 border-neutral-200 text-neutral-400"
                       }`}>
                          {cs.s}
                       </span>
                       <span className="text-[10px] font-bold text-neutral-300">ID: {cs.id}</span>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-black italic tracking-tight text-neutral-900 group-hover:text-brand-lime transition-all mb-1 italic leading-tight">{cs.t}</h4>
                       <div className="flex items-center gap-2 text-[10px] text-neutral-400 uppercase font-black tracking-widest leading-none">
                          <User className="w-3.5 h-3.5" /> {cs.a}
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-neutral-100 flex items-center justify-between font-bold italic">
                    <div className="flex items-center gap-2 text-[10px] text-neutral-300">
                       <Clock className="w-4 h-4" /> {cs.d}
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-all italic drop-shadow-sm">
                       Audit Log <ChevronRight className="w-4 h-4 shadow-[0_0_8px_#D1F701]" />
                    </button>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* 3. CASE ACTION FOOTER */}
      <div className="p-10 bg-neutral-900 rounded-[56px] border border-white/5 flex flex-col md:row items-center justify-between gap-8 shadow-3xl group font-bold">
         <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-brand-lime/10 rounded-3xl flex items-center justify-center text-brand-lime shadow-lg">
               <Activity className="w-8 h-8" />
            </div>
            <div>
               <h5 className="text-xl font-black italic text-white uppercase italic tracking-tight">Active Surveillance Mode.</h5>
               <p className="text-[11px] text-white/30 font-inter italic leading-relaxed italic">Monitoring 14 sensitive clusters across EU-WEST relays.</p>
            </div>
         </div>
         <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-[28px] font-black text-[10px] uppercase tracking-widest hover:bg-brand-lime transition-all italic">
               Generate Global Report
            </button>
            <button className="w-14 h-14 bg-white/5 border border-white/10 text-white flex items-center justify-center rounded-2xl hover:bg-white/10 transition-all italic">
               <MoreVertical className="w-5 h-5" />
            </button>
         </div>
      </div>
    </div>
  );
}
