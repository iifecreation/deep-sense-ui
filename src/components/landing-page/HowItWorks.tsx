"use client";

import React from "react";
import Image from "next/image";
import { UserPlus, BarChart3, Headphones } from "lucide-react";

const steps = [
  {
    title: "First of all create an account",
    description: "Create an account using your email address or social media profile. Quick and straightforward registration process.",
    icon: <UserPlus className="w-6 h-6 text-neutral-900" />,
  },
  {
    title: "Track Transactions in Real-Time",
    description: "Monitor the status of your transactions with instant updates and notifications.",
    icon: <BarChart3 className="w-6 h-6 text-neutral-900" />,
  },
  {
    title: "Access 24/7 Customer Support",
    description: "Get assistance anytime with our dedicated support team ready to help with any issues or questions.",
    icon: <Headphones className="w-6 h-6 text-neutral-900" />,
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
              Let’s Start Sending <br /> <span className="text-neutral-900/40">Your Money</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-500 font-inter leading-relaxed max-w-[480px]">
              By integrating advanced technologies, fintech reshapes the financial landscape, making it more user-friendly and adaptive to modern needs.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="w-14 h-14 shrink-0 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center group-hover:bg-brand-lime transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <div className="text-neutral-900 group-hover:scale-95 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-3 max-w-[440px]">
                  <h4 className="text-xl md:text-2xl font-bold font-manrope text-neutral-900 leading-none">
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
