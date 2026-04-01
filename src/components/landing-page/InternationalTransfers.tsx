import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function InternationalTransfers() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-[453px]">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-manrope text-neutral-900 leading-[1.2]">
              Smooth and Easy International Transfers.
            </h2>
            <div className="flex flex-col gap-5">
               <p className="text-sm md:text-base text-zinc-600 font-inter leading-relaxed">
                 With user-friendly features, competitive exchange rates, and robust security measures, our platform simplifies international transactions.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 group">
                     <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <CheckCircle2 size={16} className="text-green-600" />
                     </div>
                     <span className="text-zinc-700 text-lg font-inter">Seamless international money transfers.</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                     <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <CheckCircle2 size={16} className="text-green-600" />
                     </div>
                     <span className="text-zinc-700 text-lg font-inter">Competitive exchange rates offered daily.</span>
                  </div>
               </div>
            </div>
          </div>
          
          <button className="w-fit px-10 py-4 bg-neutral-900 text-white rounded-full font-medium font-manrope hover:bg-neutral-800 transition-all shadow-lg hover:scale-105 active:scale-95">
             Get Started
          </button>
        </div>

        {/* Right Side Map Illustration */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
           <div className="relative w-full max-w-[633px] bg-zinc-50 rounded-[40px] p-6 md:p-12 overflow-hidden shadow-sm border border-zinc-100">
             <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
               <Image 
                 src="/assets/images/home/World Map.png" 
                 alt="World Map Distribution" 
                 fill
                 className="object-contain"
               />
             </div>
             
             {/* Main Exchange Card Mockup (Asset) */}
             <div className="relative z-10 w-full flex justify-center py-4">
                <div className="relative flex items-center gap-6">
                  {/* The Principal Money Card */}
                  <div className="w-[300px] md:w-[380px] transition-all hover:scale-105 duration-500">
                    <Image 
                      src="/assets/images/home/Money Transform Card.svg" 
                      alt="International Transfer Card" 
                      width={380}
                      height={280}
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>

                  {/* One Large Flag Card Beside it */}
                  <div className="hidden md:flex flex-col items-center gap-4 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
                    <div className="w-56 h-56 relative overflow-hidden group">
                       <Image 
                          src="/assets/images/home/Country-Flags.svg" 
                          alt="Primary Flag" 
                          fill 
                          className="object-contain p-1 group-hover:scale-110 transition-transform" 
                       />
                    </div>
                  </div>
                </div>
             </div>

             {/* Small Accent Dots for the Map background */}
             <div className="absolute top-[30%] right-[10%] w-3 h-3 bg-red-400 rounded-full opacity-20 animate-pulse" />
             <div className="absolute bottom-[20%] left-[15%] w-2 h-2 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-500" />
           </div>
        </div>
      </div>
    </section>
  );
}
