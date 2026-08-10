"use client";

import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useAuth } from "@/lib/auth";
import { useRuntimeEnvironment } from "@/hooks/use-runtime-environment";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const isSandbox = useRuntimeEnvironment() === "sandbox";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="h-screen bg-zinc-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useAuth hook
  }

  return (
    <div className="h-screen bg-zinc-50 text-slate-900 overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="h-full flex flex-col p-6 gap-6">
        {isSandbox && (
          <div className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-amber-950">
            Sandbox environment — synthetic test data only
          </div>
        )}
        {/* Global Dashboard Header */}
        <DashboardHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-hidden">
          {/* Global Dashboard Sidebar - Desktop */}
          <div className="hidden lg:block w-72 shrink-0 h-full overflow-hidden">
            <DashboardSidebar />
          </div>

          {/* Global Dashboard Sidebar - Mobile */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetContent side="left" className="p-0 w-72 bg-white border-none">
              <DashboardSidebar />
            </SheetContent>
          </Sheet>

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
