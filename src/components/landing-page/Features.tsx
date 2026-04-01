import React from "react";
import { Zap, Activity, Share2, Smartphone, FolderSearch, BrainCircuit } from "lucide-react";

const features = [
  {
    title: "Real-Time Fraud Scoring",
    description: "Score every transaction instantly using ML and pre-defined rules to stop threats before they clear.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Rule Engine",
    description: "Create and manage complex fraud rules without any engineering effort using our no-code platform.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Graph Intelligence",
    description: "Detect fraud rings and hidden connections across accounts using advanced linked-entity analysis.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    title: "Device Intelligence",
    description: "Identify suspicious devices and repeated abuse patterns using unique hardware fingerprinting.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Case Management",
    description: "Investigate, track, and resolve fraud cases in one place with built-in collaboration tools.",
    icon: <FolderSearch className="w-6 h-6" />,
  },
  {
    title: "AI Investigation Assistant",
    description: "Understand why transactions are flagged and get immediate recommendations on what to do next.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-24 bg-zinc-50/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 mb-16 max-w-[800px]">
          <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Platform Core</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
            Built for Modern <br /> <span className="text-neutral-900/40">Fraud Detection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 flex flex-col gap-6 group hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 transition-all duration-500">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-brand-lime transition-colors duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl md:text-2xl font-bold font-manrope text-neutral-900">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
