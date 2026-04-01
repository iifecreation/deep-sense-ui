import React from "react";
import { Landmark, CreditCard, ShoppingCart, Send } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      title: "Banking",
      description: "Prevent account takeovers and card fraud with behavioral biometrics and transaction monitoring.",
      icon: <Landmark className="w-8 h-8" />,
    },
    {
      title: "Fintech",
      description: "Secure payments and onboarding with AI-driven risk scoring and real-time identity verification.",
      icon: <Send className="w-8 h-8" />,
    },
    {
      title: "E-commerce",
      description: "Detect payment abuse, promo abuse, and sophisticated bots trying to clear your checkout.",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      title: "Payments",
      description: "Stop high-velocity transaction fraud and suspicious clearing patterns in real-time.",
      icon: <CreditCard className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 mb-20 max-w-[800px]">
          <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Industry Solutions</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
            Built for <span className="text-neutral-900/40">High-Risk Industries</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="group flex flex-col gap-8 p-10 rounded-[48px] bg-zinc-50 border border-transparent hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-700">
               <div className="w-20 h-20 bg-white shadow-xl rounded-[28px] flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform duration-700 group-hover:bg-indigo-600 group-hover:text-white">
                  {useCase.icon}
               </div>
               <div className="flex flex-col gap-4">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900 group-hover:text-indigo-600 transition-colors">
                    {useCase.title}
                  </h4>
                  <p className="text-base text-zinc-600 font-inter leading-relaxed">
                    {useCase.description}
                  </p>
               </div>
               <div className="mt-4 pt-6 border-t border-zinc-200 group-hover:border-indigo-200 transition-colors">
                  <span className="text-sm font-bold font-manrope uppercase tracking-widest text-neutral-900 group-hover:text-indigo-600">Explore Solution</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
