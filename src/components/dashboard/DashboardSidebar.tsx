"use client";

import React from "react";
import Image from "next/image";
import { LayoutDashboard, MessageSquare, PieChart, Settings, Crown } from "lucide-react";

export default function DashboardSidebar() {
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { label: "Message", icon: <MessageSquare size={20} />, active: false },
    { label: "Analytics", icon: <PieChart size={20} />, active: false },
    { label: "Settings", icon: <Settings size={20} />, active: false },
  ];

  return (
    <aside className="w-80 h-full p-8 bg-white rounded-[40px] flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 shrink-0">
      <div className="flex flex-col gap-12">
        {/* Welcome Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-800 text-3xl font-normal font-manrope">
            Welcome Back, <span className="font-bold">Sajibur</span>
          </h2>
          <span className="text-gray-400 text-sm font-medium opacity-80">Friday, 3 March 2025</span>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300 font-medium ${
                item.active 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Subscription CTA Card */}
      <div className="bg-[#F8F9FB] p-6 rounded-[32px] flex flex-col items-center gap-6 border border-gray-100/50">
        <div className="flex flex-col items-center text-center">
            <span className="text-gray-800 text-3xl font-extrabold mb-1 tracking-tight">17<span className="text-base text-gray-400 font-normal ml-1">/30 days</span></span>
           <p className="text-gray-500 text-sm leading-relaxed max-w-[140px]">
             Subscribe to unlock all features
           </p>
        </div>
        
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 group">
           <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Crown className="w-4 h-4 text-yellow-400 fill-yellow-400" />
           </div>
           Get Premium
        </button>
      </div>
    </aside>
  );
}
