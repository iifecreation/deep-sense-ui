"use client";

import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-zinc-50 text-slate-900 overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="h-full flex flex-col p-6 gap-6">
        {/* Global Dashboard Header */}
        <DashboardHeader />

        <div className="flex-1 flex flex-row gap-6 overflow-hidden">
          {/* Global Dashboard Sidebar */}
          <div className="w-72 shrink-0 h-full overflow-hidden">
            <DashboardSidebar />
          </div>

          {/* Independent Content Scroll */}
          <main className="flex-1 overflow-y-auto no-scrollbar bg-white rounded-xl border border-slate-200 shadow-sm">
             <div className="p-6">
               {children}
               
               <footer className="py-12 mt-12 text-center opacity-40 border-t border-slate-100">
                 <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">Deep Sense Security v4.2.0 • Enterprise Edition</p>
               </footer>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}
