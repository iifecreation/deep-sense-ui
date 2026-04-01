import React from "react";
import { Zap, Share2, Layers, Cpu } from "lucide-react";

export default function Performance() {
  const diffs = [
    {
      title: "Millisecond-level scoring",
      description: "Get decisions in under 100ms, even with complex rules and ML scoring.",
      icon: <Zap className="w-6 h-6 text-brand-lime" />,
    },
    {
      title: "Hybrid AI + rules approach",
      description: "Combines the accuracy of ML with the explainability of rules for perfect control.",
      icon: <Cpu className="w-6 h-6 text-brand-lime" />,
    },
    {
      title: "Graph-based detection",
      description: "Find coordinated fraud networks that look like normal behavior to traditional systems.",
      icon: <Share2 className="w-6 h-6 text-brand-lime" />,
    },
    {
      title: "Scalable architecture",
      description: "Process billions of monthly transactions without latency or compromise.",
      icon: <Layers className="w-6 h-6 text-brand-lime" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
        <div className="flex flex-col gap-6 mb-20 max-w-[800px]">
          <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Why Deep Sense</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
            Designed for <span className="text-neutral-900/40">Real-Time Decisioning</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
           {diffs.map((diff, idx) => (
             <div key={idx} className="flex flex-col gap-6 items-center text-center group">
               <div className="w-20 h-20 bg-neutral-900 rounded-[32px] flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-lime/10 group-hover:text-brand-lime transition-all duration-700 shadow-xl group-hover:shadow-brand-lime/20">
                 {diff.icon}
               </div>
               <div className="flex flex-col gap-3">
                 <h4 className="text-xl font-bold font-manrope tracking-tight leading-none text-neutral-900 group-hover:text-indigo-600 transition-colors">
                   {diff.title}
                 </h4>
                 <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed max-w-[280px] mx-auto">
                   {diff.description}
                 </p>
               </div>
               <div className="mt-4 pt-6 border-t border-zinc-100 flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                  <div className="w-2 h-2 rounded-full bg-brand-lime" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
