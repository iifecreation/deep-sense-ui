"use client";

import React from "react";
import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowDownLeft, 
  MoreHorizontal, 
  ChevronRight,
  Download,
  AlertCircle
} from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Transactions.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Audit Trail • Real-time Processing Engine</p>
        </div>
        <div className="flex gap-4 font-bold">
           <button className="px-10 py-4 bg-zinc-100 text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-sm italic">
              Export CSV <Download className="w-4 h-4 ml-2 inline" />
           </button>
           <button className="px-10 py-4 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 italic">
              New Inspection +
           </button>
        </div>
      </div>

      {/* 2. FILTERS */}
      <div className="p-8 bg-white rounded-[40px] border border-neutral-100 flex items-center justify-between shadow-xl">
         <div className="flex items-center gap-8 flex-1">
            <div className="relative group flex-1 max-w-md">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
               <input 
                  type="text" 
                  placeholder="Search by ID, User, or Amount..."
                  className="w-full pl-14 pr-4 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-[13px] font-bold text-neutral-900 focus:border-brand-lime transition-all italic"
               />
            </div>
            <div className="flex items-center gap-4">
               {["High Risk", "Verified", "Pending"].map((f, i) => (
                 <button key={i} className="px-6 py-3 rounded-xl border border-neutral-100 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 transition-all text-neutral-400 hover:text-neutral-900 italic font-black">
                    {f}
                 </button>
               ))}
            </div>
         </div>
         <button className="flex items-center gap-2 p-4 bg-neutral-900 text-white rounded-2xl shadow-xl hover:scale-110 transition-all italic font-bold">
            <Filter className="w-4 h-4" />
         </button>
      </div>

      {/* 3. TABLE */}
      <div className="bg-white rounded-[56px] border border-neutral-200 overflow-hidden shadow-2xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left font-manrope">
               <thead>
                  <tr className="border-b border-neutral-100">
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Reference / Entity</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Method</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Value</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">PTS Score</th>
                     <th className="p-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 italic">Status</th>
                     <th className="p-10"></th>
                  </tr>
               </thead>
               <tbody className="text-neutral-900">
                  {[
                    { id: "tx_9921_0x1", u: "alex_reed", m: "VISA • 4281", v: "$14,281.00", s: 12, st: "Authorized" },
                    { id: "tx_1102_88a", u: "unknown_8102", m: "CRYPTO • BTC", v: "$42.1M", s: 92, st: "Flagged" },
                    { id: "tx_452b_ck9", u: "mike.jones", m: "ACH • CHASE", v: "$840.42", s: 22, st: "Verified" },
                    { id: "tx_7721_pr2", u: "user_4910", m: "APPLE PAY", v: "$1,200.00", s: 64, st: "In Review" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-neutral-50 last:border-0 hover:bg-zinc-50 transition-all group/row cursor-pointer font-bold italic">
                       <td className="p-10">
                          <div className="flex items-center gap-4">
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${row.s > 80 ? 'bg-red-500/10 text-red-500' : 'bg-neutral-100 text-neutral-400 group-hover/row:text-neutral-900'} transition-all shadow-sm`}>
                                {row.s > 80 ? <AlertCircle className="w-5 h-5 shadow-sm" /> : <ArrowUpRight className="w-5 h-5" />}
                             </div>
                             <div>
                                <div className="text-[14px] font-black italic tracking-tight italic">{row.id}</div>
                                <div className="text-[10px] text-neutral-300 font-black uppercase tracking-widest italic drop-shadow-sm">{row.u}</div>
                             </div>
                          </div>
                       </td>
                       <td className="p-10 text-[11px] font-black uppercase tracking-widest text-neutral-400 italic">{row.m}</td>
                       <td className="p-10 text-[14px] font-black italic tracking-tighter text-neutral-900 italic">{row.v}</td>
                       <td className="p-10">
                          <div className={`text-2xl font-black italic tracking-tighter ${row.s > 80 ? "text-red-500" : row.s > 40 ? "text-orange-400" : "text-brand-lime"}`}>
                             {row.s}
                          </div>
                       </td>
                       <td className="p-10">
                          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${
                            row.st === 'Authorized' ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-600' : 
                            row.st === 'Flagged' ? 'bg-red-500/5 border-red-500/10 text-red-600' : 
                            'bg-neutral-100 border-neutral-200 text-neutral-400'
                          }`}>
                             {row.st}
                          </div>
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
