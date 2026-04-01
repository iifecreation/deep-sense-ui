import React from "react";
import { Brain, Activity, Globe, Send, ShieldCheck } from "lucide-react";

export default function Solution() {
  const points = [
    {
      title: "Real-time Monitoring",
      description: "Continuously analyze every transaction as it happens, not after the money has left.",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      title: "AI-Powered Scoring",
      description: "Advanced machine learning models that learn from your platform's specific data trends.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "Adaptive Rule Engine",
      description: "A hybrid approach that combines ML accuracy with human-driven rules and heuristics.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Entity & Ring Detection",
      description: "Graph intelligence that spots coordinated fraud networks and linked accounts instantly.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Self-Learning Intelligence",
      description: "Patterns are automatically updated to detect new, emerging fraud signatures.",
      icon: <Send className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        <div className="flex-1 flex flex-col gap-10 max-w-[540px]">
          <div className="flex flex-col gap-6">
            <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">The Solution</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
              Meet <span className="text-neutral-900/40">Deep Sense</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-600 font-inter leading-relaxed">
              Deep Sense combines machine learning, behavioral analysis, and graph intelligence to detect fraud in real time and give your team the tools to act instantly.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 group p-4 border border-transparent hover:border-gray-100 hover:bg-zinc-50/50 rounded-2xl transition-all">
                <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {point.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{point.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-none mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full bg-zinc-100 rounded-[48px] p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/80 to-transparent z-10" />
           <div className="relative z-20 flex flex-col gap-8 w-full">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-white/50 animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Transaction Score</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[10px] font-bold">HIGH RISK</span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-bold text-neutral-900 font-manrope">98</span>
                  <span className="text-zinc-400 mb-1 font-inter">/ 100</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-white/50 translate-x-12 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-sm font-bold font-manrope">Fraud Ring Detected</span>
                 </div>
                 <div className="flex -space-x-2">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white" />
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
