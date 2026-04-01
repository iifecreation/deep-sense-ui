import React from "react";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full rounded-[48px] bg-neutral-900 overflow-hidden py-20 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
           
           <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
              <span className="text-brand-lime font-inter text-sm font-bold uppercase tracking-[0.2em]">Ready to Secure Your Future?</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-white leading-tight">
                Stop fraud before <br /> <span className="text-white/40">it costs you.</span>
              </h2>
           </div>

           <div className="relative z-10 w-full md:w-auto">
              <button className="w-full md:w-auto px-12 py-6 bg-brand-lime text-neutral-900 rounded-full text-xl font-bold font-manrope hover:bg-brand-lime/90 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group/btn">
                Request Demo <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
