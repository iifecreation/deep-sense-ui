"use client";

import React from "react";
import { 
  Search, 
  ArrowRight, 
  ShieldAlert, 
  Plus, 
  Minus, 
  Maximize2, 
  ChevronRight,
  Globe,
  Database,
  Smartphone
} from "lucide-react";

export default function GraphIntelPage() {
  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-8">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Graph Intel.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Mapping Relational Risk Dynamics</p>
        </div>
        <div className="flex gap-4">
           <div className="flex bg-white rounded-2xl p-1 border border-neutral-100 shadow-xl">
              {["Entities", "Clusters", "Bridges", "Flows"].map((v, i) => (
                <button 
                  key={i} 
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    v === "Clusters" ? "bg-zinc-50 text-neutral-900 shadow-sm border border-neutral-100" : "text-neutral-300 hover:text-neutral-900"
                  }`}
                >
                  {v}
                </button>
              ))}
           </div>
           <button className="px-8 py-3 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-2 italic">
              Expand Network <Plus className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="flex-1 flex gap-8 min-h-0">
        {/* 2. MAIN GRAPH VIEW (CANVAS) */}
        <div className="flex-1 bg-white rounded-[64px] border border-neutral-100 relative overflow-hidden group shadow-2xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
           
           <svg className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
              <defs>
                 <radialGradient id="nodeGradLight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#D1F701" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D1F701" stopOpacity="0" />
                 </radialGradient>
                 <radialGradient id="redGradLight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                 </radialGradient>
              </defs>
              
              <g stroke="#000" strokeWidth="0.5" strokeOpacity="0.05" strokeDasharray="4 4" className="animate-pulse">
                <line x1="20%" y1="30%" x2="40%" y2="50%" />
                <line x1="40%" y1="50%" x2="60%" y2="20%" />
                <line x1="60%" y1="20%" x2="80%" y2="40%" />
                <line x1="40%" y1="50%" x2="20%" y2="70%" />
                <line x1="20%" y1="70%" x2="50%" y2="80%" />
                <line x1="50%" y1="80%" x2="80%" y2="60%" />
              </g>

              {[
                { x: "20%", y: "30%", s: 40, c: "fill-brand-lime" },
                { x: "40%", y: "50%", s: 60, c: "fill-red-500", p: true },
                { x: "60%", y: "20%", s: 30, c: "fill-neutral-200" },
                { x: "80%", y: "40%", s: 50, c: "fill-brand-lime" },
                { x: "20%", y: "70%", s: 35, c: "fill-neutral-200" },
                { x: "50%", y: "80%", s: 45, c: "fill-orange-400" },
                { x: "80%", y: "60%", s: 55, c: "fill-brand-lime" }
              ].map((node, i) => (
                <g key={i} className="cursor-pointer group/node">
                   <circle 
                     cx={node.x} cy={node.y} r={node.s} 
                     fill={`url(${node.c.includes('red') ? '#redGradLight' : '#nodeGradLight'})`} 
                     className="animate-pulse" 
                   />
                   <circle 
                     cx={node.x} cy={node.y} r="6" 
                     className={`${node.c} group-hover/node:scale-150 transition-transform stroke-white stroke-2`} 
                   />
                   {node.p && (
                     <circle 
                       cx={node.x} cy={node.y} r="10" 
                       fill="none" stroke="#EF4444" strokeWidth="2" 
                       className="animate-ping" 
                     />
                   )}
                </g>
              ))}
           </svg>

           {/* CONTROLS */}
           <div className="absolute top-10 left-10 flex flex-col gap-3 font-bold">
            {[Plus, Minus, Maximize2].map((Icon, i) => (
              <button key={i} className="w-12 h-12 bg-white/90 backdrop-blur-xl border border-neutral-100 rounded-2xl flex items-center justify-center text-neutral-300 hover:text-neutral-900 hover:shadow-xl transition-all scale-95 hover:scale-110 shadow-md">
                 <Icon className="w-5 h-5" />
              </button>
            ))}
           </div>

           {/* SEARCH */}
           <div className="absolute top-10 right-10 group w-80">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
              <input 
                 type="text" 
                 placeholder="Locate Node ID..."
                 className="w-full pl-14 pr-8 py-4 bg-white/80 backdrop-blur-3xl border border-neutral-100 rounded-2xl text-xs font-bold text-neutral-900 focus:outline-none focus:border-brand-lime shadow-xl italic"
              />
           </div>

           <div className="absolute bottom-10 left-10 flex items-center gap-4 text-neutral-200 pointer-events-none select-none italic text-right font-bold">
              <div className="text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em]">DEEPSENSE GRAPH v4.1</p>
                 <p className="text-[8px] font-black italic">14,281 NODES RENDERED @ 60FPS</p>
              </div>
           </div>
        </div>

        {/* 3. SIDE PANEL */}
        <div className="w-96 bg-white rounded-[64px] border border-neutral-100 p-10 flex flex-col justify-between shadow-2xl overflow-y-auto scrollbar-hide italic font-bold">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h3 className="text-xl font-black italic uppercase italic tracking-tighter text-neutral-900 italic leading-none">Node Inspector.</h3>
                 
                 <div className="p-8 bg-zinc-50 rounded-[48px] border border-red-500/10 relative overflow-hidden group shadow-sm transition-all hover:bg-white hover:border-red-500/20">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <ShieldAlert className="w-16 h-16 text-red-500" />
                    </div>
                    <div className="relative z-10 space-y-6">
                       <div>
                          <p className="text-[8px] font-black uppercase tracking-widest text-red-500 mb-1">Entity ID: user_49201</p>
                          <h4 className="text-2xl font-black italic tracking-tighter text-neutral-900 italic leading-none">CRITICAL CLUSTER SEED</h4>
                       </div>
                       <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                          <div>
                             <p className="text-[8px] font-bold uppercase text-neutral-300 mb-1 italic">Risk Points</p>
                             <div className="text-3xl font-black italic text-red-600 italic leading-none">94.2</div>
                          </div>
                          <div className="px-3 py-1 bg-red-500/10 rounded-full text-[8px] text-red-500 font-black uppercase shadow-sm">Flagged</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 <h5 className="text-[9px] font-black uppercase tracking-widest text-neutral-400 italic">Relational Affiliations</h5>
                 <div className="space-y-4">
                    {[
                      { l: "Primary IP Bridge", v: "192.168.1.1", i: <Globe />, r: "RED" },
                      { l: "Device Hardlink", v: "APPLE_M2_3910", i: <Smartphone />, r: "LIME" },
                      { l: "Common Bank Route", v: "CHASE-INGRESS-02", i: <Database />, r: "WHITE" }
                    ].map((link, j) => (
                      <div key={j} className="p-6 bg-zinc-50 rounded-3xl border border-neutral-100 flex items-center justify-between group/link hover:bg-white hover:shadow-xl transition-all cursor-pointer">
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm ${link.r === 'RED' ? 'text-red-500' : link.r === 'LIME' ? 'text-brand-lime shadow-md' : 'text-neutral-300'}`}>
                               {React.cloneElement(link.i as React.ReactElement<{ className: string }>, { className: "w-4.5 h-4.5" })}
                            </div>
                            <div>
                               <p className="text-[8px] font-black uppercase tracking-widest text-neutral-300 italic">{link.l}</p>
                               <p className="text-[11px] font-bold italic text-neutral-900 lowercase">{link.v}</p>
                            </div>
                         </div>
                         <ChevronRight className="w-4 h-4 text-neutral-200 group-hover/link:text-neutral-900 transition-all italicShadow" />
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <button className="w-full mt-12 py-5 bg-neutral-900 text-white rounded-[32px] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all shadow-xl italic">
              Generate Link Map <ArrowRight className="w-4 h-4 shadow-[0_0_8px_#D1F701]" />
           </button>
        </div>
      </div>
    </div>
  );
}
