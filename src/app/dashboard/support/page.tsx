"use client";

import React, { useState, useEffect } from "react";
import { 
  HelpCircle, AlertCircle, Plus, Send, Clock, User, ShieldAlert,
  Loader2, CheckCircle2, MessageSquare, ChevronRight, Inbox, HelpCircle as HelpIcon 
} from "lucide-react";
import { supportService, SupportTicket, SupportMessage } from "@/services/support.service";
import { toast } from "sonner";

export default function SupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [isSubmittingReply, setIsSubmittingReply] = useState(false);
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  
  // Create ticket form states
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("technical");
  const [priority, setPriority] = useState("medium");
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTickets();
  }, []);

  async function loadTickets() {
    setIsLoadingTickets(true);
    try {
      const list = await supportService.list();
      setTickets(list);
      // Auto-select the first ticket if available and none selected
      if (list.length > 0 && !selectedTicket) {
        handleSelectTicket(list[0].id);
      }
    } catch (err) {
      console.error("Failed to load tickets:", err);
    } finally {
      setIsLoadingTickets(false);
    }
  }

  async function handleSelectTicket(ticketId: string) {
    setIsLoadingDetails(true);
    try {
      const details = await supportService.get(ticketId);
      setSelectedTicket(details);
    } catch (err) {
      console.error("Failed to load ticket details:", err);
    } finally {
      setIsLoadingDetails(false);
    }
  }

  async function handleSendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTicket || !replyMessage.trim()) return;
    setIsSubmittingReply(true);
    try {
      const newMsg = await supportService.reply(selectedTicket.id, replyMessage.trim());
      setSelectedTicket(prev => {
        if (!prev) return null;
        return {
          ...prev,
          messages: [...(prev.messages || []), newMsg],
          status: "open"
        };
      });
      setReplyMessage("");
      // Refresh tickets list in background
      const list = await supportService.list();
      setTickets(list);
    } catch (err) {
      console.error(err);
      toast.error("Could not send reply. Please try again.");
    } finally {
      setIsSubmittingReply(false);
    }
  }

  async function handleCreateTicket(e: React.FormEvent) {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      setError("Please fill out both the subject and the message description.");
      return;
    }
    setIsSubmittingTicket(true);
    setError(null);
    try {
      const newTicket = await supportService.create({
        subject: subject.trim(),
        message: message.trim(),
        category,
        priority
      });
      setSubject("");
      setMessage("");
      setCategory("technical");
      setPriority("medium");
      setIsCreatingTicket(false);
      
      // Select new ticket and reload list
      await handleSelectTicket(newTicket.id);
      const list = await supportService.list();
      setTickets(list);
    } catch (err) {
      console.error("Failed to create ticket:", err);
      setError("Failed to submit support ticket. Please try again.");
    } finally {
      setIsSubmittingTicket(false);
    }
  }

  const getPriorityBadge = (prio: string) => {
    switch (prio.toLowerCase()) {
      case "urgent":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-red-500/10 border border-red-500/20 text-red-500 shadow-sm animate-pulse">Urgent</span>;
      case "high":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500 shadow-sm">High</span>;
      case "medium":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 text-blue-500 shadow-sm">Medium</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-slate-500/10 border border-slate-500/20 text-slate-500 shadow-sm">Low</span>;
    }
  };

  const getStatusBadge = (statusStr: string) => {
    switch (statusStr.toLowerCase()) {
      case "open":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">Open</span>;
      case "in_progress":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">In Progress</span>;
      case "resolved":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-500">Resolved</span>;
      case "closed":
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-neutral-500/10 border border-neutral-500/20 text-neutral-400">Closed</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500">Waiting</span>;
    }
  };

  return (
    <div className="max-w-6xl space-y-12 pb-20 font-manrope">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Support Center.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">24/7 Enterprise Assistance</p>
        </div>
        <button 
          id="new-ticket-btn"
          onClick={() => setIsCreatingTicket(true)} 
          className="px-8 py-4 bg-neutral-900 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-[#D1F701] hover:text-neutral-900 hover:scale-105 transition-all shadow-xl flex items-center gap-2.5 italic"
        >
          Create Support Ticket <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Ticket List (Left Panel) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-white rounded-3xl border border-neutral-100 shadow-xl space-y-6">
            <h2 className="text-lg font-black uppercase tracking-tight text-neutral-900 italic flex items-center gap-2">
              <MessageSquare className="w-5 h-5 opacity-40" /> Active Tickets
            </h2>
            
            {isLoadingTickets ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-neutral-300 animate-spin" />
              </div>
            ) : tickets.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <Inbox className="w-12 h-12 text-neutral-200 mx-auto" />
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">No tickets recorded</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
                {tickets.map((t) => {
                  const isActive = selectedTicket?.id === t.id;
                  return (
                    <div 
                      key={t.id} 
                      onClick={() => handleSelectTicket(t.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-lg scale-[1.01]" 
                          : "bg-zinc-50 border-neutral-100 text-neutral-600 hover:bg-white hover:border-neutral-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3 gap-2">
                        <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? "text-[#D1F701]" : "text-neutral-400"}`}>
                          {t.category}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {getPriorityBadge(t.priority)}
                          {getStatusBadge(t.status)}
                        </div>
                      </div>
                      <h3 className={`text-xs font-black uppercase tracking-tight line-clamp-1 mb-2 ${isActive ? "text-white" : "text-neutral-900"}`}>
                        {t.subject}
                      </h3>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-neutral-400">
                        <Clock className="w-3.5 h-3.5" />
                        {new Date(t.created_at).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Conversation Thread / Ticket Details (Right Panel) */}
        <div className="lg:col-span-7">
          {isLoadingDetails ? (
            <div className="h-full min-h-[400px] bg-white rounded-[40px] border border-neutral-100 shadow-xl flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-neutral-300 animate-spin" />
            </div>
          ) : selectedTicket ? (
            <div className="bg-white rounded-[40px] border border-neutral-100 shadow-xl p-8 space-y-8 flex flex-col min-h-[500px]">
              
              {/* Ticket Top details */}
              <div className="border-b border-zinc-100 pb-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {getPriorityBadge(selectedTicket.priority)}
                  {getStatusBadge(selectedTicket.status)}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Category: {selectedTicket.category}
                  </span>
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-neutral-900 italic">
                  {selectedTicket.subject}
                </h2>
              </div>

              {/* Message List */}
              <div className="flex-1 space-y-6 overflow-y-auto max-h-[350px] pr-2 no-scrollbar">
                {selectedTicket.messages && selectedTicket.messages.map((m) => {
                  const isAgent = m.sender_type !== "user";
                  return (
                    <div 
                      key={m.id} 
                      className={`flex gap-4 ${isAgent ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                        isAgent ? "bg-[#D1F701] text-neutral-900" : "bg-neutral-100 text-neutral-500"
                      }`}>
                        <User className="w-4 h-4" />
                      </div>
                      <div className={`p-5 rounded-2xl text-xs space-y-2 max-w-[80%] ${
                        isAgent 
                          ? "bg-neutral-900 text-white font-bold rounded-tr-none" 
                          : "bg-zinc-50 border border-neutral-100 text-neutral-700 font-semibold rounded-tl-none"
                      }`}>
                        <div className="flex justify-between items-center gap-4 text-[9px] font-black uppercase tracking-wider text-neutral-400">
                          <span>{isAgent ? "Support Agent" : "You"}</span>
                          <span>
                            {new Date(m.created_at).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </span>
                        </div>
                        <p className="leading-relaxed whitespace-pre-wrap">{m.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reply Input Form */}
              {selectedTicket.status !== "closed" ? (
                <form onSubmit={handleSendReply} className="border-t border-zinc-100 pt-6 flex gap-3 items-center">
                  <input 
                    type="text" 
                    placeholder="Write a message..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="flex-1 px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm font-semibold focus:outline-none focus:border-brand-lime transition-all"
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmittingReply || !replyMessage.trim()}
                    className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center hover:bg-[#D1F701] hover:text-neutral-900 transition-all shadow-md disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                  >
                    {isSubmittingReply ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
              ) : (
                <div className="border-t border-zinc-100 pt-6 text-center text-xs font-bold text-neutral-400 uppercase tracking-wide">
                  This ticket has been marked Closed.
                </div>
              )}
            </div>
          ) : (
            <div className="h-full min-h-[500px] bg-white rounded-[40px] border border-neutral-100 shadow-xl flex flex-col items-center justify-center p-8 text-center space-y-6">
              <Inbox className="w-16 h-16 text-neutral-200" />
              <div className="space-y-2">
                <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900 italic">No Ticket Selected</h3>
                <p className="text-xs text-neutral-400 font-bold max-w-sm leading-relaxed">
                  Select an active conversation on the left panel or click Create Support Ticket to start a new chat with our agent.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CREATE TICKET MODAL */}
      {isCreatingTicket && (
        <div className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[48px] border border-neutral-100 shadow-2xl p-8 max-w-lg w-full space-y-8 animate-in zoom-in-95 duration-300 font-bold italic">
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">New Support Request.</h3>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Submit ticket details to start technical review</p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-xs text-red-600 font-bold shrink-0">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleCreateTicket} className="space-y-5 text-left">
              <div className="space-y-2">
                <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Subject</label>
                <input 
                  type="text" 
                  placeholder="Describe your issue briefly..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm font-bold text-neutral-900 focus:outline-none focus:border-brand-lime transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm font-bold text-neutral-900 focus:outline-none focus:border-brand-lime transition-all outline-none"
                  >
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="feature_request">Feature Request</option>
                    <option value="bug_report">Bug Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Priority</label>
                  <select 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm font-bold text-neutral-900 focus:outline-none focus:border-brand-lime transition-all outline-none"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Message / Description</label>
                <textarea 
                  rows={4}
                  placeholder="Provide all context so our staff can resolve this quickly..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm font-bold text-neutral-900 focus:outline-none focus:border-brand-lime transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsCreatingTicket(false)}
                  className="flex-1 py-4 border border-zinc-200 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all text-neutral-500"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmittingTicket}
                  className="flex-1 py-4 bg-neutral-900 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-[#D1F701] hover:text-neutral-900 transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmittingTicket ? "Submitting..." : "Submit Ticket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
