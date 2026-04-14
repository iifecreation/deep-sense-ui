"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Activity, 
  AlertCircle, 
  FolderSearch, 
  BrainCircuit, 
  Binary, 
  Share2, 
  Smartphone, 
  Users, 
  BarChart3, 
  Settings, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    items: [
      { name: "Dashboard", icon: <LayoutDashboard />, href: "/dashboard" }
    ]
  },
  {
    name: "Fraud Monitoring",
    items: [
      { name: "Transactions", icon: <Activity />, href: "/dashboard/transactions" },
      { name: "Alerts", icon: <AlertCircle />, href: "/dashboard/alerts" }
    ]
  },
  {
    name: "Investigations",
    items: [
      { name: "Cases", icon: <FolderSearch />, href: "/dashboard/cases" }
    ]
  },
  {
    name: "Intelligence",
    items: [
      { name: "Rules Engine", icon: <BrainCircuit />, href: "/dashboard/rules" },
      { name: "Models", icon: <Binary />, href: "/dashboard/models" },
      { name: "Graph Intel", icon: <Share2 />, href: "/dashboard/graph" }
    ]
  },
  {
    name: "Entities",
    items: [
      { name: "Users", icon: <Users />, href: "/dashboard/users" },
      { name: "Devices", icon: <Smartphone />, href: "/dashboard/devices" }
    ]
  },
  {
    name: "Reports",
    items: [
      { name: "Analytics", icon: <BarChart3 />, href: "/dashboard/analytics" }
    ]
  },
  {
    name: "Admin",
    items: [
      { name: "Settings", icon: <Settings />, href: "/dashboard/settings" }
    ]
  }
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 flex flex-col font-manrope">
      {/* Search Bar inside Sidebar Case - High Fidelity Light */}
      <div className="mb-10 px-4">
        <div className="relative group">
           <LayoutDashboard className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-all font-bold" />
           <input 
             type="text" 
             placeholder="Jump to..."
             className="w-full pl-14 pr-4 py-3.5 bg-white border border-neutral-200 rounded-2xl text-[12px] font-bold text-neutral-900 focus:outline-none focus:border-brand-lime transition-all italic shadow-sm"
           />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-10">
        {navigation.map((group, i) => (
          <div key={i} className="space-y-4">
            <h5 className="px-6 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 italic">
              {group.name}
            </h5>
            <div className="space-y-1 px-2">
              {group.items.map((item, j) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={j} 
                    href={item.href}
                    className={`flex items-center justify-between px-6 py-4 rounded-[24px] transition-all group relative ${
                      isActive ? "bg-white text-neutral-900 border border-neutral-200 shadow-md" : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`transition-transform duration-500 ${isActive ? "scale-110 text-neutral-900" : "group-hover:scale-110 opacity-30 group-hover:opacity-100"}`}>
                        {React.cloneElement(item.icon as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                      </div>
                      <span className={`text-[13px] font-bold tracking-tight italic ${isActive ? "text-neutral-900" : ""}`}>
                        {item.name}
                      </span>
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-1.5 bg-brand-lime rounded-full shadow-[0_0_8px_#D1F701]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Engine Status Placeholder - Portfolio Light Style */}
      <div className="mt-12 p-6 bg-white rounded-[32px] border border-neutral-100 shadow-sm">
         <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-[0_0_8px_#D1F701]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 italic">CORE-NODE-ACTIVE</span>
         </div>
         <p className="text-[10px] text-neutral-400 italic font-inter leading-relaxed italic">v4.2.0-Production Online.</p>
      </div>
    </aside>
  );
}
