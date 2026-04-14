"use client";

import React from "react";
import { 
  Binary, 
  Activity, 
  TrendingUp, 
  ArrowRight,
  Cpu, 
  RotateCcw
} from "lucide-react";

export default function ModelsPage() {
  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Models.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Core ML Intelligence • 12 Active Variants</p>
        </div>
        <div className="flex gap-4">
           <button className="px-10 py-4 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3 italic">
              Train New Variant <Cpu className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* 2. MODEL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {[
           { n: "DeepSense-v4-Core", t: "Neural Ensemble", s: "Active", p: "99.2%", a: "98.4%", r: "2.1ms", d: "Production Standard" },
           { n: "AnomNet-Edge", t: "Anomaly Detection", s: "Active", p: "94.6%", a: "92.1%", r: "0.8ms", d: "High Throughput" },
           { n: "GraphRel-B", t: "Relational Mapping", s: "Testing", p: "88.2%", a: "90.5%", r: "15.4ms", d: "Deep Forensics" }
         ].map((m, i) => (
           <div key={i} className="group p-10 bg-white rounded-[56px] border border-neutral-100 hover:shadow-2xl transition-all shadow-xl cursor-pointer relative overflow-hidden flex flex-col justify-between font-bold italic">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                 <Binary className="w-32 h-32 text-neutral-900" />
              </div>
              <div className="relative z-10 space-y-10">
                 <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-brand-lime transition-all">
                       <Cpu className="w-6 h-6 flex-shrink-0Shadow" />
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                       m.s === "Active" ? "bg-brand-lime/10 border-brand-lime/20 text-neutral-900 shadow-sm" : "bg-neutral-50 border-neutral-100 text-neutral-300"
                    }`}>
                       {m.s}
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <h4 className="text-3xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none group-hover:text-brand-lime transition-all">{m.n}</h4>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold italic leading-none">{m.t} • {m.d}</p>
                 </div>

                 <div className="grid grid-cols-2 gap-8 pt-10 border-t border-neutral-100">
                    <div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-neutral-300 mb-2 italic">Precision</p>
                       <div className="text-2xl font-black italic text-neutral-900 italic leading-none">{m.p}</div>
                    </div>
                    <div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-neutral-300 mb-2 italic">Latency</p>
                       <div className="text-2xl font-black italic text-emerald-600 italic leading-none">{m.r}</div>
                    </div>
                 </div>
              </div>

              <div className="relative z-10 mt-12 flex items-center justify-between pt-8 border-t border-neutral-100 italic">
                 <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all group/btn">
                    Details <ArrowRight className="w-4 h-4 text-brand-lime group-hover/btn:translate-x-2 transition-all" />
                 </button>
                 <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-[0_0_8px_#D1F701]" />
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* 3. PERFORMANCE MATRIX (VISUAL) */}
         <div className="lg:col-span-8 bg-black rounded-[56px] p-12 lg:p-20 space-y-16 relative overflow-hidden group shadow-3xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <div className="flex items-center justify-between relative z-10 font-bold italic">
               <h3 className="text-2xl lg:text-5xl font-black italic uppercase italic tracking-tighter text-white opacity-10 leading-none">Telemetry Core.</h3>
               <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-[10px] font-black text-brand-lime uppercase tracking-widest"><TrendingUp className="w-3.5 h-3.5 shadow-[0_0_8px_#D1F701]" /> +1.2% AUC</span>
               </div>
            </div>

            <div className="relative z-10 space-y-12 h-[300px] flex items-end gap-1 px-4">
               {Array.from({ length: 48 }).map((_, i) => (
                 <div key={i} className="flex-1 space-y-1 group/tick flex flex-col items-center">
                    <div 
                      style={{ height: `${Math.random() * 80 + 20}%` }} 
                      className="w-full bg-white/5 rounded-full group-hover/tick:bg-brand-lime transition-all cursor-crosshair shadow-sm" 
                    />
                    {i % 12 === 0 && <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mt-4 italic">Epoch {i/12}</span>}
                 </div>
               ))}
            </div>
         </div>

         {/* 4. RETRAIN & EXPERIMENT DOCK */}
         <div className="lg:col-span-4 bg-white rounded-[56px] border border-neutral-100 p-12 space-y-12 shadow-xl overflow-hidden group relative italic font-bold">
            <div className="relative z-10 space-y-12">
               <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 italic">Training Pipeline</h5>
                  <h3 className="text-3xl font-black italic tracking-tighter text-neutral-900 leading-tight uppercase italic group-hover:text-brand-lime transition-all">Rapid <br />Iterative <br />Learning.</h3>
               </div>
               
               <div className="p-8 bg-zinc-50 rounded-[40px] border border-neutral-100 space-y-8 italic">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-neutral-300">
                     <span>Last Trained</span>
                     <span>2d 14h ago</span>
                  </div>
                  <button className="w-full py-5 bg-neutral-900 text-white rounded-[32px] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all italic shadow-xl">
                     Initiate Retrain <RotateCcw className="w-4 h-4 transition-transform group-hover:rotate-180 duration-1000Shadow" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
