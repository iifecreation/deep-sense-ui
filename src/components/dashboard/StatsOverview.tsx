"use client";

import React from "react";
import Image from "next/image";

const stats = [
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 4590, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 4590, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1531746020798-e795c5399c47?w=100&h=100&fit=crop" },
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 4590, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
];

export default function StatsOverview() {
  return (
    <div className="bg-white p-8 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-800 text-xl font-bold font-manrope">Overview</h3>
        <button className="text-gray-500 text-sm font-bold hover:text-gray-800 transition-colors underline-offset-4 hover:underline">See All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="flex-1 bg-gray-50/50 hover:bg-gray-50 p-5 rounded-[28px] border border-gray-100/50 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/5 group">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-sm transition-transform group-hover:rotate-12">
                   <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-0.5">
                   <span className="text-gray-800 text-sm font-bold font-manrope tracking-tight leading-none">{item.name}</span>
                   <span className="text-gray-400 text-[10px] font-bold opacity-60 uppercase">{item.date}</span>
                </div>
             </div>

             <div className="flex flex-col items-end gap-0.5 pr-2">
                <span className="text-indigo-600 text-lg font-black leading-none">{item.amount}</span>
                <span className="text-gray-400 text-[9px] font-bold opacity-50 uppercase tracking-tighter">US Dollar</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
