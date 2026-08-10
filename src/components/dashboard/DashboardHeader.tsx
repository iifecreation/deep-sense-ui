"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Bell, HelpCircle, LogOut, Menu, Inbox } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Logo } from "@/components/ui/logo";
import EnvironmentSwitcher from "@/components/dashboard/EnvironmentSwitcher";
import { logout, useCurrentUser } from "@/lib/auth";
import { notificationsService, UserNotification } from "@/services/notifications.service";
import { formatDistanceToNow } from "date-fns";

export default function DashboardHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const { user } = useCurrentUser();
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const [listRes, countRes] = await Promise.all([
          notificationsService.list({ page_size: 5 }),
          notificationsService.getUnreadCount()
        ]);
        setNotifications(listRes.items || []);
        setUnreadCount(countRes.unread_count || 0);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    }
    fetchNotifications();
  }, []);

  return (
    <header className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm relative">
       <div className="flex items-center gap-4 lg:gap-8">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Dashboard Logo */}
          <Link href="/dashboard" className="group flex items-center">
             <Logo variant="primary" className="h-8 lg:h-10" iconClassName="h-8 w-8 lg:h-10 lg:w-10" nameClassName="h-4 lg:h-5" />
          </Link>

          <div className="h-6 w-px bg-slate-200 hidden lg:block" />

          {/* Quick Search */}
          <div className="hidden lg:block">
             <div className="relative group w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-all" />
                <input 
                   type="text" 
                   placeholder="Search anything... (⌘K)"
                   className="w-full pl-11 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
                />
             </div>
          </div>
       </div>

       <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <EnvironmentSwitcher />
          </div>
          {/* Notifications & Help */}
          <div className="flex items-center gap-1">
             <Popover>
                <PopoverTrigger asChild>
                   <button className="w-10 h-10 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all relative flex items-center justify-center">
                      {unreadCount > 0 && (
                        <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                      )}
                      <Bell className="w-5 h-5" />
                   </button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                   <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-900">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{unreadCount} New</span>
                      )}
                   </div>
                   <div className="max-h-80 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-slate-500 text-sm">
                          No notifications yet.
                        </div>
                      ) : (
                        notifications.map((notif) => (
                          <div key={notif.id} className={`flex gap-3 p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${notif.is_read ? 'opacity-75' : 'bg-blue-50/30'}`}>
                             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                <Inbox className="w-4 h-4" />
                             </div>
                             <div>
                                <p className={`text-sm text-slate-900 ${notif.is_read ? 'font-medium' : 'font-semibold'}`}>{notif.subject}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{notif.message}</p>
                                <p className="text-[10px] text-slate-400 mt-1">{formatDistanceToNow(new Date(notif.created_at))} ago</p>
                             </div>
                          </div>
                        ))
                      )}
                   </div>
                   <div className="p-2 border-t border-slate-100">
                     <Link href="/dashboard/notifications" className="block w-full text-center text-sm font-medium text-primary hover:text-primary/80 py-1.5 transition-colors rounded-md hover:bg-slate-50">
                       View all notifications
                     </Link>
                   </div>
                </PopoverContent>
             </Popover>
             <Link href="/dashboard/support" className="w-10 h-10 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
             </Link>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block" />

          {/* Identity */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-1.5 rounded-lg shadow-sm">
             <div className="w-8 h-8 rounded-md bg-slate-200 overflow-hidden shadow-sm">
                <img 
                   src="https://api.dicebear.com/7.x/pixel-art/svg?seed=FraudAgent" 
                   alt="Agent" 
                   className="w-full h-full bg-white" 
                />
             </div>
             <div className="hidden sm:block">
                <p className="text-slate-900 text-xs font-bold leading-none">{user?.full_name || "Loading identity"}</p>
                <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-tight">
                  {user?.organization_name || user?.role || "DeepSense tenant"}
                </p>
             </div>
             <button
               type="button"
               onClick={logout}
               aria-label="Sign out"
               data-testid="logout-button"
               className="ml-1 flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-200 hover:text-slate-900"
             >
               <LogOut className="h-4 w-4" />
             </button>
          </div>
       </div>
    </header>
  );
}
