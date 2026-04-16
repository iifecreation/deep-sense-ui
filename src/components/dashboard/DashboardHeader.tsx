"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, HelpCircle, ShieldCheck, Zap, MoreVertical } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function DashboardHeader() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm relative">
       <div className="flex items-center gap-8">
          {/* Dashboard Logo */}
          <Link href="/dashboard" className="group flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">Deep Sense</span>
          </Link>

          <div className="h-6 w-px bg-slate-200 hidden lg:block" />

          {/* Quick Search */}
          <div className="hidden lg:block">
             <div className="relative group w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-all" />
                <input 
                   type="text" 
                   placeholder="Search anything... (⌘K)"
                   className="w-full pl-11 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-sans"
                />
             </div>
          </div>
       </div>

       <div className="flex items-center gap-4">
          {/* Notifications & Help */}
          <div className="flex items-center gap-1">
             <button className="w-10 h-10 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all relative flex items-center justify-center">
                <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                <Bell className="w-5 h-5" />
             </button>
             <button className="w-10 h-10 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
             </button>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block" />

          {/* Identity */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-1.5 pr-4 rounded-lg group cursor-pointer hover:bg-white hover:border-blue-200 transition-all transition-shadow shadow-sm">
             <div className="w-8 h-8 rounded-md bg-slate-200 overflow-hidden shadow-sm">
                <img 
                   src="https://api.dicebear.com/7.x/pixel-art/svg?seed=FraudAgent" 
                   alt="Agent" 
                   className="w-full h-full bg-white" 
                />
             </div>
             <div className="hidden sm:block">
                <p className="text-slate-900 text-xs font-bold leading-none">Alex Reed</p>
                <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-tight">Lead Analyst</p>
             </div>
             <MoreVertical className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-all ml-1" />
          </div>
       </div>
    </header>
  );
}
