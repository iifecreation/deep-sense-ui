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
    <div className="min-h-screen bg-zinc-50 text-neutral-900 selection:bg-brand-lime selection:text-neutral-900 overflow-x-hidden font-manrope">
      {/* GLOBAL LIGHT GLOWS - SUBTLE TINTS */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[600px] bg-brand-lime/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1720px] mx-auto p-8 lg:p-12 flex flex-col gap-12">
        {/* Global Dashboard Header */}
        <DashboardHeader />

        <div className="flex flex-col lg:flex-row gap-12 min-h-screen">
          {/* Global Dashboard Sidebar */}
          <DashboardSidebar />

          {/* Page-Specific Content Slot */}
          <main className="flex-1 flex flex-col gap-12 min-w-0">
             {children}
          </main>
        </div>
      </div>

       {/* FOOTER WATERMARK */}
       <footer className="p-12 text-center opacity-30">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] italic text-neutral-400">Deep Sense Integrated Security Suite v4.2.0-Production</p>
      </footer>
    </div>
  );
}
