"use client";

import React from "react";
import { 
  Zap, 
  Search, 
  ChevronRight, 
  Terminal, 
  RotateCcw,
  Play,
  Settings,
  ShieldCheck,
  Cpu,
  ArrowRight
} from "lucide-react";

export default function RulesPage() {
  const rules = [
    { id: "rl_9912", n: "High Velocity Check", s: "Active", l: "L2", p: "Engine Core" },
    { id: "rl_4421", n: "IP Geofence (EU/US)", s: "Testing", l: "L3", p: "Network Edge" },
    { id: "rl_1102", n: "Device Fingerprint Match", s: "Active", l: "L1", p: "Entity Profile" },
    { id: "rl_5528", n: "BIN Country Mismatch", s: "Disabled", l: "L2", p: "Payment Intel" }
  ];

  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Rules Engine.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Heuristic Logic Designer • v4.2.0-Core</p>
        </div>
        <div className="flex gap-4 font-bold">
           <button className="px-10 py-4 bg-zinc-100 text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-sm italic">
              Simulate All <Play className="w-4 h-4 ml-2 inline" />
           </button>
           <button className="px-10 py-4 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 italic">
              Deploy New Rule +
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-manrope">
        {/* 2. RULE LIST */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
           {rules.map((rule, i) => (
             <div key={i} className="p-10 bg-white rounded-[56px] border border-neutral-100 flex flex-col sm:row items-center justify-between shadow-xl hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden font-bold italic">
                <div className="flex items-center gap-10 flex-1 w-full">
                   <div className={`w-16 h-16 rounded-3xl flex items-center justify-center border shadow-sm transition-all ${
                     rule.s === "Active" ? "bg-brand-lime/10 border-brand-lime/20 text-neutral-900 shadow-md scale-110" : 
                     rule.s === "Testing" ? "bg-blue-500/10 border-blue-500/20 text-blue-600" :
                     "bg-neutral-100 border-neutral-200 text-neutral-300"
                   }`}>
                      <Zap className="w-8 h-8" />
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                           rule.s === "Active" ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-600" :
                           rule.s === "Testing" ? "bg-blue-500/5 border-blue-500/10 text-blue-600" :
                           "bg-neutral-50 border-neutral-100 text-neutral-400"
                         }`}>
                           {rule.s}
                         </span>
                         <span className="text-[10px] font-bold text-neutral-300 italic">ID: {rule.id}</span>
                      </div>
                      <h4 className="text-2xl font-black italic tracking-tight text-neutral-900 group-hover:text-brand-lime transition-all leading-none uppercase italic">{rule.n}</h4>
                   </div>
                </div>

                <div className="flex items-center gap-12 pt-10 sm:pt-0 w-full sm:w-auto border-t sm:border-t-0 border-neutral-50">
                   <div className="text-right">
                      <p className="text-[8px] font-black uppercase text-neutral-300 mb-1 italic">Process Logic</p>
                      <div className="text-xl font-black italic text-neutral-900 italic tracking-tighter">{rule.p}</div>
                   </div>
                   <button className="w-12 h-12 bg-zinc-50 border border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-300 group-hover:text-neutral-900 transition-all shadow-sm">
                      <Settings className="w-5 h-5 shadow-[0_0_8px_#D1F701]" />
                   </button>
                </div>
             </div>
           ))}
        </div>

        {/* 3. DSL SIMULATOR (VISUAL) */}
        <div className="lg:col-span-12 xl:col-span-5 bg-neutral-900 rounded-[64px] shadow-3xl p-12 lg:p-16 space-y-12 relative overflow-hidden group font-bold">
           <div className="flex items-center justify-between relative z-10 italic">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-brand-lime/10 rounded-2xl flex items-center justify-center text-brand-lime ring-1 ring-brand-lime/20">
                    <Terminal className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-black italic tracking-tighter text-white uppercase italic leading-none">Logic Architect.</h3>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-[#D1F701] opacity-40 hover:opacity-100 transition-all">Dry Run (⌘R)</button>
           </div>
           
           <div className="bg-black/60 rounded-[40px] p-10 font-mono text-emerald-400 text-[11px] leading-loose relative z-10 border border-white/5 space-y-1 shadow-2xl">
              <p className="opacity-40 italic">// DeepSense DSL v4.2</p>
              <p><span className="text-brand-lime uppercase tracking-widest font-black">define</span> <span className="text-white italic">Rule_HighVelocity</span> &#123;</p>
              <p className="pl-6"><span className="text-blue-400">condition:</span> transaction.amount &gt; <span className="text-orange-400">10000.00</span></p>
              <p className="pl-6"><span className="text-blue-400">context:</span> entity.history.velocity_30d &gt; <span className="text-orange-400">0.85</span></p>
              <p className="pl-6"><span className="text-blue-400">action:</span> <span className="text-red-500 uppercase font-black">FLAG_URGENT</span></p>
              <p className="pl-6"><span className="text-blue-400">reason:</span> <span className="text-emerald-400 italic">"Suspended institutional volume drift"</span></p>
              <p>&#125;</p>
              <div className="absolute top-10 right-10 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-[0_0_8px_#D1F701]" />
                 <div className="w-2 h-2 rounded-full bg-white/10" />
                 <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
           </div>

           <div className="relative z-10 pt-10 border-t border-white/5 flex items-center justify-between italic">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-white/20">
                    <RotateCcw className="w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 italic font-black">Last Deployed</p>
                    <p className="text-[12px] font-bold text-white italic">v4.02-hotfix by Sarah C.</p>
                 </div>
              </div>
              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#D1F701] group-hover:gap-6 transition-all italic">
                 Update Cluster <ArrowRight className="w-4 h-4 shadow-[0_0_8px_#D1F701]" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
