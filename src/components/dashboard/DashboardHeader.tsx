"use client";

import React from "react";
import Image from "next/image";
import { Search, Bell, Settings, LayoutDashboard, MessageSquare, PieChart, ChevronRight } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="w-full h-20 px-8 bg-white rounded-[40px] flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 mb-8">
      <div className="flex items-center gap-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
             <div className="w-2.5 h-3 bg-brand-lime rounded-full scale-105" />
             <div className="w-4 h-5 bg-[#001D3D] rounded-sm transform -rotate-12" />
          </div>
          <span className="text-gray-800 text-2xl font-bold font-manrope">FiscalFit</span>
        </div>

        {/* Global Nav */}
        <nav className="hidden lg:flex items-center bg-gray-50 rounded-full p-1.5 gap-1">
          {["Overview", "Wallet", "Payment", "Activity"].map((item, i) => (
            <button
              key={item}
              className={`px-6 py-2.5 rounded-full text-base font-medium transition-all ${
                i === 0 ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-6 py-3 bg-gray-50 rounded-full border border-transparent focus:border-indigo-600/20 focus:bg-white outline-none w-64 transition-all font-inter"
          />
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 px-4">
           <button className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5" />
           </button>
           <button className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 overflow-hidden relative border border-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
                alt="Profile" 
                fill 
                className="object-cover" 
              />
           </button>
        </div>
      </div>
    </header>
  );
}
