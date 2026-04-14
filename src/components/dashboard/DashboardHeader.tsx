"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, HelpCircle, ShieldCheck, Zap, MoreVertical } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="w-full flex items-center justify-between p-10 bg-white/80 backdrop-blur-3xl rounded-[40px] border border-neutral-200/50 relative shadow-xl">
       <div className="flex items-center gap-12">
          {/* Dashboard Logo/Indicator */}
          <Link href="/" className="group flex items-center gap-4">
             <div className="w-10 h-10 bg-brand-lime rounded-xl flex items-center justify-center text-neutral-900 group-hover:rotate-12 transition-transform shadow-lg">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <div className="hidden md:block">
                <h5 className="text-neutral-900 font-black italic tracking-tighter text-2xl leading-none italic">DEEP SENSE</h5>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#D1F701] mt-1 italic drop-shadow-sm">Enterprise Gateway</p>
             </div>
          </Link>

          <div className="h-10 w-px bg-neutral-200 hidden lg:block" />

          {/* Quick Search */}
          <div className="hidden lg:block">
             <div className="relative group w-96">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-focus-within:text-neutral-900 transition-all font-bold" />
                <input 
                   type="text" 
                   placeholder="Global Intelligence Search... (⌘K)"
                   className="w-full pl-14 pr-4 py-4 bg-zinc-50 border border-neutral-200 rounded-2xl text-[13px] font-bold text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-lime transition-all font-manrope italic"
                />
             </div>
          </div>
       </div>

       <div className="flex items-center gap-6 font-bold">
          {/* Notification Gateway */}
          <div className="flex items-center gap-2">
             <button className="w-12 h-12 rounded-2xl bg-zinc-50 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all relative group">
                <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:scale-125 transition-transform animate-pulse" />
                <Bell className="w-5 h-5" />
             </button>
             <button className="w-12 h-12 rounded-2xl bg-zinc-50 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all italic">
                <HelpCircle className="w-5 h-5" />
             </button>
          </div>

          <div className="h-10 w-px bg-neutral-200 mx-2 hidden md:block" />

          {/* Identity Mock */}
          <div className="flex items-center gap-4 bg-zinc-50 border border-neutral-200 p-2 pr-6 rounded-[24px] group cursor-pointer hover:bg-white hover:border-brand-lime/20 transition-all shadow-sm">
             <div className="w-10 h-10 rounded-xl bg-neutral-100 p-0.5 shadow-md">
                <img 
                   src="https://api.dicebear.com/7.x/pixel-art/svg?seed=FraudAgent" 
                   alt="Agent" 
                   className="w-full h-full rounded-[10px] bg-white border border-neutral-100" 
                />
             </div>
             <div className="hidden sm:block">
                <p className="text-neutral-900 text-xs font-black italic tracking-tight italic">ALEX REED</p>
                <p className="text-[8px] font-bold uppercase tracking-widest text-[#D1F701] italic drop-shadow-sm">ID: NODE-8820</p>
             </div>
             <MoreVertical className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-all ml-2" />
          </div>
       </div>
    </header>
  );
}
