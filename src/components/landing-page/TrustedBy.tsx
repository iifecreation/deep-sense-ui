import React from "react";
import { Quote } from "lucide-react";

export default function TrustedBy() {
  const testimonials = [
    {
      quote: "Deep Sense reduced our fraud losses significantly within the first month of deployment.",
      author: "VP of Risk, Digital Bank",
    },
    {
      quote: "We finally understand fraud patterns across accounts. The graph intelligence is a game changer.",
      author: "Fraud Lead, Global Payments",
    }
  ];

  const partners = [
    "Google", "SIEMENS", "Microsoft", "slack", "TESLA", 
    "Walmart", "Adobe", "Evernote", "OpenAI"
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-6 mb-16 text-center max-w-[800px]">
          <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 tracking-tight">
            Trusted by Modern <span className="text-neutral-900/40">Fraud Teams</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-full max-w-[1100px]">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 flex flex-col gap-6 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group">
               <Quote className="w-10 h-10 text-brand-lime group-hover:scale-110 transition-transform" />
               <div className="flex flex-col gap-4">
                  <p className="text-lg md:text-xl font-manrope font-semibold text-neutral-800 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <span className="text-sm font-bold font-inter text-zinc-400 uppercase tracking-widest">{t.author}</span>
               </div>
            </div>
          ))}
        </div>
        
        <div className="w-full h-px bg-gray-100 mb-16" />

        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-12">
          {partners.map((partner) => (
            <span 
              key={partner} 
              className="text-zinc-400 text-2xl md:text-3xl font-black font-manrope tracking-tighter opacity-20 grayscale transition-all hover:opacity-60 hover:grayscale-0 hover:text-neutral-900 cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
