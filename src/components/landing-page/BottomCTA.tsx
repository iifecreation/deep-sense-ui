import Image from "next/image";

export default function BottomCTA() {
  return (
    <section className="py-24 px-4 md:px-24 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24">
        {/* Simple Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10 border-y border-gray-100">
           <div className="flex flex-col items-center gap-3 text-center group">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                 <span className="text-lg">👥</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-3xl md:text-[32px] font-bold font-manrope text-neutral-900 leading-none">120K+</span>
                 <span className="text-neutral-500 font-inter text-sm max-w-[200px]">Users and trusted by over industries.</span>
              </div>
           </div>

           <div className="flex flex-col items-center gap-3 text-center group">
              <div className="w-10 h-10 bg-lime-50 rounded-full flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                 <span className="text-lg">⭐</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-3xl md:text-[32px] font-bold font-manrope text-neutral-900 leading-none">4.9</span>
                 <span className="text-neutral-500 font-inter text-sm max-w-[200px]">Rating and positive from our platforms.</span>
              </div>
           </div>

           <div className="flex flex-col items-center gap-3 text-center group">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                 <span className="text-lg">🌐</span>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-3xl md:text-[32px] font-bold font-manrope text-neutral-900 leading-none">89+</span>
                 <span className="text-neutral-500 font-inter text-sm max-w-[200px]">Let Global and trusted by over different.</span>
              </div>
           </div>
        </div>

        {/* CTA Banner */}
        <div className="relative w-full rounded-[40px] bg-neutral-900 overflow-hidden py-16 md:py-20 px-6 md:px-12 flex flex-col items-center gap-10">
           <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <Image 
                src="/assets/images/home/BG.svg" 
                alt="Background Decoration" 
                fill 
                className="object-cover opacity-80"
              />
           </div>
           
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-brand-lime via-transparent to-transparent pointer-events-none" />
           
           <div className="relative z-10 flex flex-col gap-5 items-center max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-manrope text-white leading-[1.2]">
                Download Our App Free and Enjoy Exclusive Features!
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-lg leading-relaxed">
                Fintech services leverage technology to enhance financial processes, offering innovative solutions for banking, payments, and investment management.
              </p>
           </div>

           <div className="relative z-10 flex flex-col sm:flex-row gap-6 mt-4">
              <button className="flex items-center gap-4 bg-white rounded-2xl px-6 py-3 hover:bg-gray-100 transition-all border border-gray-200 shadow-md transform hover:scale-105 active:scale-95 group">
                 <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M12 18L12 6L7 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M17 11L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                 <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase font-inter text-zinc-500 font-bold">Get it on</span>
                    <span className="text-lg font-bold font-manrope text-neutral-900">Google Play</span>
                 </div>
              </button>

              <button className="flex items-center gap-4 bg-neutral-900 rounded-2xl px-6 py-3 hover:bg-neutral-800 transition-all border border-white/20 shadow-md transform hover:scale-105 active:scale-95 group">
                 <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.29-.02 2.5.87 3.29.87.79 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82zM13 3.5c.73-.83 1.22-1.99 1.08-3.14-1 .04-2.21.67-2.92 1.5-.64.73-1.2 1.93-1.05 3.06 1.11.09 2.15-.59 2.89-1.42z"/>
                    </svg>
                 </div>
                 <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase font-inter text-white/50 font-bold">Download on the</span>
                    <span className="text-lg font-bold font-manrope text-white">App Store</span>
                 </div>
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
