"use client";

import React, { useState, useEffect } from "react";
import { 
  Bell, Mail, BookOpen, Clock, Loader2, CheckSquare, 
  Eye, EyeOff, Inbox, AlertCircle 
} from "lucide-react";
import { notificationsService, UserNotification } from "@/services/notifications.service";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [filterUnreadOnly, setFilterUnreadOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    loadNotifications();
    loadUnreadCount();
  }, [filterUnreadOnly, currentPage]);

  async function loadNotifications() {
    setIsLoading(true);
    try {
      const response = await notificationsService.list({
        unread_only: filterUnreadOnly,
        page: currentPage,
        page_size: pageSize
      });
      // Handle either paginated response or raw array
      if (response && Array.isArray(response.items)) {
        setNotifications(response.items);
        setTotalCount(response.total || response.items.length);
      } else if (Array.isArray(response)) {
        setNotifications(response);
        setTotalCount(response.length);
      } else {
        setNotifications([]);
        setTotalCount(0);
      }
    } catch (err) {
      console.error("Failed to load notifications:", err);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadUnreadCount() {
    try {
      const res = await notificationsService.getUnreadCount();
      setUnreadCount(res.unread_count);
    } catch (err) {
      console.error("Failed to fetch unread notification count:", err);
    }
  }

  async function handleMarkRead(deliveryId: string, currentReadState: boolean) {
    setIsActionLoading(true);
    try {
      if (currentReadState) {
        await notificationsService.markAsUnread(deliveryId);
      } else {
        await notificationsService.markAsRead(deliveryId);
      }
      // Update local state
      setNotifications(prev => prev.map(n => {
        if (n.id === deliveryId) {
          return { ...n, is_read: !currentReadState };
        }
        return n;
      }));
      await loadUnreadCount();
    } catch (err) {
      console.error("Failed to toggle read state:", err);
    } finally {
      setIsActionLoading(false);
    }
  }

  async function handleMarkAllRead() {
    setIsActionLoading(true);
    try {
      await notificationsService.markAllAsRead();
      // Update local state
      setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error("Failed to mark all as read:", err);
    } finally {
      setIsActionLoading(false);
    }
  }

  return (
    <div className="max-w-4xl space-y-12 pb-20 font-manrope">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Inbox.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">System Logs & Broadcasts</p>
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={handleMarkAllRead}
            disabled={isActionLoading}
            className="px-8 py-4 bg-zinc-50 border border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-3xl font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2.5 italic disabled:opacity-50"
          >
            Mark All As Read <CheckSquare className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-4 border-b border-zinc-100 pb-2">
        <button 
          onClick={() => { setFilterUnreadOnly(false); setCurrentPage(1); }}
          className={`pb-3 text-xs font-black uppercase tracking-wider italic transition-all relative ${
            !filterUnreadOnly ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          All Notifications ({totalCount})
          {!filterUnreadOnly && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />}
        </button>
        <button 
          onClick={() => { setFilterUnreadOnly(true); setCurrentPage(1); }}
          className={`pb-3 text-xs font-black uppercase tracking-wider italic transition-all relative ${
            filterUnreadOnly ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          Unread ({unreadCount})
          {filterUnreadOnly && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />}
        </button>
      </div>

      {/* NOTIFICATIONS LIST */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 text-neutral-300 animate-spin" />
        </div>
      ) : notifications.length === 0 ? (
        <div className="p-20 bg-white border border-neutral-100 shadow-xl rounded-[48px] text-center space-y-6 flex flex-col items-center justify-center">
          <Inbox className="w-16 h-16 text-neutral-200" />
          <div className="space-y-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900 italic">No Notifications</h3>
            <p className="text-xs text-neutral-400 font-bold max-w-sm leading-relaxed uppercase">
              You are completely caught up! No active events or operational logs recorded.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-neutral-100 shadow-2xl rounded-[48px] overflow-hidden divide-y divide-zinc-100">
          {notifications.map((n) => (
            <div 
              key={n.id}
              className={`p-8 transition-all flex gap-6 items-start relative group ${
                n.is_read ? "opacity-60 hover:opacity-100" : "bg-zinc-50/50"
              }`}
            >
              {/* Unread indicator dot */}
              {!n.is_read && (
                <div className="absolute top-10 left-3.5 w-2.5 h-2.5 rounded-full bg-brand-lime shadow-[0_0_8px_#D1F701]" />
              )}

              {/* Icon Container */}
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm ${
                n.is_read 
                  ? "bg-zinc-50 border-neutral-100 text-neutral-400" 
                  : "bg-neutral-900 border-neutral-900 text-[#D1F701]"
              }`}>
                <Bell className="w-5 h-5" />
              </div>

              {/* Text Body */}
              <div className="flex-1 space-y-2 text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                    Channel: {n.channel}
                  </span>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-neutral-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {new Date(n.created_at).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-black uppercase tracking-tight text-neutral-900">
                  {n.subject}
                </h3>
                <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-2xl">
                  {n.message}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="opacity-0 group-hover:opacity-100 transition-all flex gap-2 self-center shrink-0 ml-4">
                <button
                  onClick={() => handleMarkRead(n.id, n.is_read)}
                  disabled={isActionLoading}
                  className="p-3 bg-zinc-50 border border-neutral-100 hover:border-neutral-200 rounded-xl text-neutral-500 hover:text-neutral-900 transition-all shadow-sm"
                  title={n.is_read ? "Mark as unread" : "Mark as read"}
                >
                  {n.is_read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
