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
  ShieldAlert,
  Search,
  FileText,
  History,
  CheckCircle2,
  Plug,
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
    name: "Monitoring",
    items: [
      { name: "Transactions", icon: <Activity />, href: "/dashboard/transactions" },
      { name: "Alerts", icon: <AlertCircle />, href: "/dashboard/alerts" },
      { name: "Cases", icon: <FolderSearch />, href: "/dashboard/cases" }
    ]
  },
  {
    name: "Compliance",
    items: [
      { name: "Compliance Workspace", icon: <ShieldCheck />, href: "/dashboard/compliance" },
      { name: "Customer Risk", icon: <ShieldAlert />, href: "/dashboard/customer-risk" },
      { name: "Screening Center", icon: <Search />, href: "/dashboard/screening" },
      { name: "Regulatory Reports", icon: <FileText />, href: "/dashboard/reports" },
      { name: "Audit Trails", icon: <History />, href: "/dashboard/audit" }
    ]
  },
  {
    name: "Intelligence",
    items: [
      { name: "Rules Engine", icon: <BrainCircuit />, href: "/dashboard/rules" },
      { name: "Models", icon: <Binary />, href: "/dashboard/models" },
      { name: "Graph Intelligence", icon: <Share2 />, href: "/dashboard/graph" },
      { name: "Devices", icon: <Smartphone />, href: "/dashboard/devices" },
      { name: "Users", icon: <Users />, href: "/dashboard/users" }
    ]
  },
  {
    name: "Operations",
    items: [
      { name: "Onboarding Reviews", icon: <CheckCircle2 />, href: "/dashboard/onboarding" },
      { name: "Integrations", icon: <Plug />, href: "/dashboard/integrations" },
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
    <aside className="w-full h-full flex flex-col font-sans max-h-screen overflow-y-auto no-scrollbar py-4">
      {/* Navigation */}
      <nav className="flex-1 space-y-8 pb-8">
        {navigation.map((group, i) => (
          <div key={i} className="space-y-2">
            <h5 className="px-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {group.name}
            </h5>
            <div className="space-y-0.5 px-2">
              {group.items.map((item, j) => {
                const isActive = pathname === item.href;
                const itemName = item.name === "Users" ? "Customers" : item.name;
                return (
                  <Link 
                    key={j} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
                      isActive 
                        ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-sm" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <div className={`shrink-0 ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                      {React.cloneElement(item.icon as React.ReactElement<{ size: number; className: string }>, { size: 18 })}
                    </div>
                    <span>{itemName}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer Info */}
      <div className="mt-auto px-4 pt-6 border-t border-slate-100">
         <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Operational</span>
         </div>
         <p className="text-[10px] text-slate-400 font-medium">Node: DS-4281-PROD</p>
      </div>
    </aside>
  );
}
