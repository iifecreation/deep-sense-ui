import React from "react";
import { ArrowRight, Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full lg:w-[120%] bg-[#F7F9FB] rounded-[60px] md:rounded-[100px] z-0 transform translate-x-0 lg:-translate-x-12" />
      
      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="flex-1 flex flex-col gap-10 max-w-[540px]">
          <div className="flex flex-col gap-6">
            <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Protect Your Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight">
              Start Detecting <span className="text-neutral-900/40">Fraud Today</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-600 font-inter leading-relaxed max-w-[480px]">
              See how Deep Sense can protect your platform in real time. Request a demo or get started for free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="flex-1 px-10 py-5 bg-neutral-900 text-white rounded-3xl shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group font-bold font-manrope text-lg flex items-center justify-center gap-2">
              Request Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex-1 px-10 py-5 bg-brand-lime text-neutral-900 rounded-3xl shadow-xl hover:bg-brand-lime/90 transition-all hover:scale-105 active:scale-95 font-bold font-manrope text-lg flex items-center justify-center gap-2">
              Get Started <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col gap-8">
           <div className="flex items-center gap-5 p-8 bg-white rounded-3xl shadow-2xl border border-white/50 animate-in fade-in slide-in-from-right-10 duration-700">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <span className="text-xl font-bold font-manrope">1</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-manrope text-neutral-900 leading-none">Schedule Demo</span>
                <span className="text-zinc-400 text-sm font-inter leading-none mt-2">Connect with our product expert</span>
              </div>
           </div>
           <div className="flex items-center gap-5 p-8 bg-white rounded-3xl shadow-2xl border border-white/50 translate-x-12 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400">
                <span className="text-xl font-bold font-manrope">2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-manrope text-neutral-900 leading-none">Setup Core UI</span>
                <span className="text-zinc-400 text-sm font-inter leading-none mt-2">Integrated within 15 minutes</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
