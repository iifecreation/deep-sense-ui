import React from "react";

export default function TrustedBy() {
  const partners = [
    "Google", "SIEMENS", "Microsoft", "slack", "TESLA", 
    "Walmart", "Adobe", "Evernote", "OpenAI"
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white border-y border-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-center text-zinc-400 text-base md:text-lg font-medium font-manrope mb-12 tracking-wide uppercase">
          Trusted by Over <span className="text-neutral-900 font-extrabold">5,500+</span> Industry Leaders
        </h3>
        
        <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-12">
          {partners.map((partner) => (
            <span 
              key={partner} 
              className="text-zinc-400 text-2xl md:text-3xl font-black font-manrope tracking-tighter opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 hover:text-neutral-900 cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
