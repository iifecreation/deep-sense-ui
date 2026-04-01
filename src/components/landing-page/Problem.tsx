import React from "react";
import { AlertCircle, TrendingUp, Clock, Users } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      title: "Fraudsters operate in networks",
      description: "Traditional systems look at isolated transactions and miss large-scale coordinated attacks.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Rule-based systems are fragile",
      description: "Static rules are too slow to adapt to new, evolving fraud patterns in modern finance.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Delayed detection costs millions",
      description: "By the time you identify a fraudulent transaction, the funds have already left your platform.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "Analysts are overwhelmed",
      description: "High false-positive rates waste resources and lead to burnout for security teams.",
      icon: <AlertCircle className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-neutral-900 text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col gap-6 mb-20 max-w-[700px]">
          <span className="text-brand-lime font-inter text-[13px] font-bold uppercase tracking-[0.2em]">The Challenge</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope leading-tight">
            Fraud Is Getting Smarter — <span className="text-white/40">Most Systems Aren’t</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-lime/30 transition-all group">
              <div className="text-brand-lime group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold font-manrope">{problem.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xl md:text-2xl font-manrope font-semibold text-white/90 italic">
            "You need intelligence — not just alerts."
          </p>
        </div>
      </div>
    </section>
  );
}
