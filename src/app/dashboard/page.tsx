"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MarketplaceCards from "@/components/dashboard/MarketplaceCards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import EarningChart from "@/components/dashboard/EarningChart";
import StatsOverview from "@/components/dashboard/StatsOverview";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] p-8 font-manrope">
      <div className="max-w-[1680px] mx-auto flex flex-col gap-8 h-full">
        {/* Top Header */}
        <DashboardHeader />

        <div className="flex gap-8 h-full min-h-[1100px]">
          {/* Main Sidebar Section */}
          <DashboardSidebar />

          {/* Right Content Section */}
          <main className="flex-1 flex flex-col gap-8">
            {/* Marketplace Card Section */}
            <MarketplaceCards />

            <div className="flex flex-col lg:flex-row gap-8 w-full">
              {/* Recent Activity Card */}
              <div className="w-full lg:w-[480px]">
                <RecentActivity />
              </div>

              {/* Chart and Overview Section */}
              <div className="flex-1 flex flex-col gap-8">
                <EarningChart />
                <StatsOverview />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
