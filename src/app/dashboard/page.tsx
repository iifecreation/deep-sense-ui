"use client";

import React from "react";
import MarketplaceCards from "@/components/dashboard/MarketplaceCards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import EarningChart from "@/components/dashboard/EarningChart";
import StatsOverview from "@/components/dashboard/StatsOverview";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col gap-12 min-w-0">
       {/* 1. Tactical Metric Layer */}
       <div className="space-y-4">
          <div className="flex items-center justify-between px-6">
             <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-neutral-300 italic">Tactical Intelligence Layer.</h2>
             <span className="text-[10px] font-bold text-brand-lime animate-pulse italic">Live Engine Stream Active</span>
          </div>
          <MarketplaceCards />
       </div>

       {/* 2. Analytical Distribution Layer */}
       <div className="flex flex-col xl:flex-row gap-12">
          {/* Real-time Alert Matrix */}
          <div className="w-full xl:w-[500px] flex flex-col">
             <div className="px-6 mb-4">
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 italic">Prioritized Risk Signal.</h2>
             </div>
             <RecentActivity />
          </div>

          {/* Performance & Health Core */}
          <div className="flex-1 flex flex-col gap-12">
             <div className="w-full h-full flex flex-col">
                <div className="px-6 mb-4">
                   <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 italic">Anomaly Distribution.</h2>
                </div>
                <EarningChart />
             </div>
             <div className="w-full h-full flex flex-col">
                <div className="px-6 mb-4 text-right">
                   <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 italic">Engine Diagnostics.</h2>
                </div>
                <StatsOverview />
             </div>
          </div>
       </div>
    </div>
  );
}
