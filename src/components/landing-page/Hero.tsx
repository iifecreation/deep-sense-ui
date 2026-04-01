"use client";

import React from "react";
import Image from "next/image";
import { ArrowBigUp, ArrowUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-48 pb-20 px-4 md:px-8 overflow-hidden bg-neutral-50/50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6 px-1.5 pr-4 py-1.5 bg-white border border-gray-100 rounded-[100px] flex items-center gap-2.5 shadow-sm">
          <div className="w-7 h-7 bg-brand-lime/10 rounded-full flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-neutral-900"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-neutral-900 text-[13px] md:text-sm font-medium font-manrope">
            Smart Finance, Smart Living
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-[900px] text-center text-4xl md:text-5xl lg:text-[72px] font-bold font-manrope leading-[1.05] mb-6 tracking-tight">
          Revolutionizing Finance for a <span className="text-neutral-900/40">Better Tomorrow</span>, Today
        </h1>

        {/* Subtitle */}
        <p className="max-w-[500px] text-center text-zinc-600 text-sm md:text-lg font-normal font-inter mb-10 leading-relaxed">
          Fintech services leverage technology to enhance financial processes, offering innovative solutions for banking
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 px-4 w-full justify-center">
          <button className="px-10 py-4 bg-brand-lime rounded-full shadow-[0_8px_20px_-6px_rgba(209,247,1,0.4)] text-neutral-900 text-lg font-bold font-manrope hover:opacity-95 transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="px-10 py-4 bg-indigo-600 rounded-full shadow-[0_8px_20px_-6px_rgba(79,70,229,0.4)] text-white text-lg font-bold font-manrope hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
            Sign Up Now
          </button>
        </div>

        {/* Phone Mockup Area */}
        <div className="relative w-full max-w-[1050px] flex justify-center mt-8">
          <div className="relative z-20 w-[280px] md:w-[380px]">
             <Image
              src="/assets/images/home/iPhone hero section.svg"
              alt="Investo Mobile App"
              width={380}
              height={770}
              className="w-full h-auto drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              priority
            />
          </div>

          {/* Floating Cards (Desktop/Tablet) */}
          
          {/* Card 1: Social Balance (Mid Left) */}
          <div className="hidden md:flex absolute top-[50%] left-[2%] lg:left-[16%] p-5 md:p-6 bg-white rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md flex-col gap-3 animate-in fade-in slide-in-from-left-10 duration-1000 z-50">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-lime" />
                </div>
                <span className="text-xs font-manrope uppercase tracking-wider opacity-40">Total Income</span>
              </div>
              <span className="text-2xl md:text-3xl font-bold font-manrope tracking-tight">$234.98K</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 bg-brand-lime rounded-full text-[10px] font-bold font-manrope">
                +12.5%
              </div>
            </div>
          </div>

          {/* Card 2: Total Balance (Top Right) */}
          <div className="hidden md:flex absolute top-[10%] right-[2%] lg:right-[10%] p-5 md:p-6 bg-white rounded-3xl shadow-2xl border border-white/40 backdrop-blur-md flex-col gap-3 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
             <div className="flex items-center gap-2 mb-1">
               <span className="text-xs font-manrope uppercase tracking-wider opacity-40">Total Income </span>
             </div>
             <span className="text-2xl md:text-3xl font-bold font-manrope tracking-tight">$567.34K</span>
             <div className="w-10 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-brand-lime rounded-full" />
             </div>
          </div>

          {/* Card 3: Total Profit (Small, Overlapping/Near Left Card) */}
          <div className="hidden lg:flex absolute bottom-[55%] left-[5%] lg:left-[12%] p-4 bg-white/90 rounded-2xl shadow-xl border border-white/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 flex-row gap-3">
             <span className="bg-brand-lime rounded-full">
              <ArrowUp />
             </span>
             <span className="text-base font-manrope">347.23%</span>
          </div>

          {/* Card 4: Users/Avatars Card (Bottom Right) */}
          <div className="hidden md:flex absolute bottom-[15%] right-[5%] lg:right-[12%] px-4 py-4 bg-white rounded-[28px] shadow-2xl border border-white/40 backdrop-blur-md items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700 z-50">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
              ].map((url, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                   <Image src={url} alt="User" fill className="object-cover" />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-2 border-white bg-brand-lime flex items-center justify-center font-bold text-xs shadow-sm z-10">
                <span className="text-neutral-900">+12k</span>
              </div>
            </div>
            <div className="flex flex-col pr-2">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter opacity-60">Global</span>
              <span className="text-sm font-bold font-manrope leading-none">Satisfied Users</span>
            </div>
          </div>

          {/* Arrow indicator indicator circle */}
          <div className="hidden lg:flex absolute bottom-[35%] -right-12 w-14 h-14 bg-white rounded-full shadow-2xl border border-white items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-bounce delay-1000">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
