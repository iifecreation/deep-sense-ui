"use client";

import React from "react";
import Image from "next/image";
import { Database, Zap, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "1. Ingest Transactions",
    description: "Send transaction data via API or stream in real time. We support multiple ingestion formats for instant processing.",
    icon: <Database className="w-6 h-6 text-neutral-900" />,
  },
  {
    title: "2. Analyze & Score",
    description: "AI models + rules + behavioral signals evaluate risk instantly. Our hybrid approach ensures both accuracy and speed.",
    icon: <Zap className="w-6 h-6 text-neutral-900" />,
  },
  {
    title: "3. Detect Patterns",
    description: "Identify anomalies, linked accounts, and fraud rings. We look beyond single transactions to find larger threats.",
    icon: <Search className="w-6 h-6 text-neutral-900" />,
  },
  {
    title: "4. Take Action",
    description: "Trigger alerts, block transactions, or escalate cases. Decisive real-time orchestration for your platform's safety.",
    icon: <ShieldCheck className="w-6 h-6 text-neutral-900" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-5 max-w-[540px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-[1.08] tracking-tight">
              How <span className="text-neutral-900/40">Deep Sense</span> Works
            </h2>
            <p className="text-base md:text-lg text-zinc-500 font-inter leading-relaxed max-w-[520px]">
              Our multi-layered intelligence engine analyzes every transaction as it happens, ensuring total protection without adding friction.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <div className="text-neutral-900 group-hover:scale-95 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-2 max-w-[440px]">
                  <h4 className="text-xl md:text-2xl font-bold font-manrope text-neutral-900 leading-none group-hover:text-brand-lime transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image Area */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative min-h-[600px] md:min-h-[850px] items-center">
            {/* Background Shape */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[120%] bg-[#F7F9FB] rounded-[60px] md:rounded-[100px] z-0 transform translate-x-0 lg:translate-x-12" />
           
            {/* Mobile Mockup */}
            <div className="relative z-10 w-[300px] md:w-[480px] hover:scale-[1.02] transition-transform duration-700">
              <Image
                 src="/assets/images/home/iPhone.svg"
                 alt="Transfer Money Mobile Screen"
                 width={480}
                 height={960}
                 className="w-full h-auto drop-shadow-[0_45px_70px_rgba(0,0,0,0.2)]"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
