"use client";

import React from "react";
import Image from "next/image";

const activities = [
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 1200, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Sajibur Rahman", date: "12 Oct, 2022", amount: 2450, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 1200, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1531746020798-e795c5399c47?w=100&h=100&fit=crop" },
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 1200, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { name: "Jane Cooper", date: "08 Sep, 2022", amount: 1200, currency: "US Dollar", avatar: "https://images.unsplash.com/photo-1531746020798-e795c5399c47?w=100&h=100&fit=crop" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-8 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
           <h3 className="text-gray-800 text-xl font-bold font-manrope">Recent Activity</h3>
           <p className="text-gray-400 text-xs font-medium">Recent Payment Activity</p>
        </div>
        <button className="text-gray-500 text-sm font-bold hover:text-gray-800 transition-colors">See All</button>
      </div>

      <div className="flex flex-col gap-3">
        {activities.map((item, i) => (
          <div key={i} className={`flex items-center justify-between p-4 rounded-3xl transition-all duration-300 hover:bg-gray-50/80 group ${i % 2 !== 0 ? "" : "bg-gray-50/50 border border-gray-50/20"}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-sm transition-transform group-hover:scale-105">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-800 text-base md:text-lg font-bold font-manrope leading-none tracking-tight">{item.name}</span>
                <span className="text-gray-400 text-xs font-semibold">{item.date}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
               <span className="text-gray-800 text-base md:text-lg font-bold font-manrope leading-none">{item.amount}</span>
               <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">{item.currency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
