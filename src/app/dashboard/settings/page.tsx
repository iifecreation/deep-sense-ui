"use client";

import React, { useState } from "react";
import { 
  Users, 
  Key, 
  Globe, 
  ShieldCheck, 
  Bell, 
  Save, 
  Copy, 
  CheckCircle2,
  Trash2,
  Plus
} from "lucide-react";

export default function SettingsPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="max-w-6xl space-y-16 pb-20">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Institutional Settings.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Organization Profile & API Infrastructure</p>
        </div>
        <button className="px-12 py-5 bg-neutral-900 text-white rounded-[32px] font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 italic">
           Save All Changes <Save className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar (Local) */}
        <div className="lg:col-span-3 space-y-4">
           {[
             { n: "Profile", i: <Globe /> },
             { n: "API Keys", i: <Key /> },
             { n: "Team & Roles", i: <Users /> },
             { n: "Security", i: <ShieldCheck /> },
             { n: "Alert Hooks", i: <Bell /> }
           ].map((nav, i) => (
             <button key={i} className={`w-full flex items-center justify-between px-8 py-4 rounded-3xl transition-all font-bold italic ${
               nav.n === "API Keys" ? "bg-white text-neutral-900 shadow-xl border border-neutral-100" : "text-neutral-400 hover:text-neutral-900"
             }`}>
                <div className="flex items-center gap-4">
                   <div className="opacity-40">{nav.i}</div>
                   <span className="text-[13px] tracking-tight">{nav.n}</span>
                </div>
                {nav.n === "API Keys" && <div className="w-1.5 h-1.5 bg-brand-lime rounded-full shadow-[0_0_8px_#D1F701]" />}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-16">
           {/* Section 1: API Discovery */}
           <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 group transition-all font-bold italic">
              <div className="flex items-center justify-between italic">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none">Global API Tokens.</h3>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black italic">Manage infrastructure access keys</p>
                 </div>
                 <button className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
                    <Plus className="w-5 h-5" />
                 </button>
              </div>

              <div className="space-y-6">
                 {[
                   { n: "Production Core", k: "ds_live_842109x...", d: "Oct 12, 2024", p: "Full Content Access" },
                   { n: "Testing / Sandbox", k: "ds_test_110292y...", d: "Oct 14, 2024", p: "Restricted Scopes" }
                 ].map((key, i) => (
                   <div key={i} className="p-8 bg-zinc-50 border border-neutral-100 rounded-[40px] flex items-center justify-between group/key hover:bg-white hover:border-neutral-200 transition-all font-bold shadow-sm">
                      <div className="space-y-4">
                         <div className="flex items-center gap-4">
                            <span className="text-[14px] font-black italic tracking-tight text-neutral-900 italic">{key.n}</span>
                            <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white border border-neutral-100 rounded-full text-neutral-300 italic">{key.p}</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <code className="text-xl font-mono text-neutral-300 transition-all group-hover/key:text-neutral-900">{key.k}</code>
                            <button 
                              onClick={() => copyToClipboard(key.k)}
                              className="p-2 text-neutral-200 hover:text-brand-lime transition-all"
                            >
                               {copiedKey === key.k ? <CheckCircle2 className="w-4 h-4 shadow-[0_0_8px_#D1F701]" /> : <Copy className="w-4 h-4" />}
                            </button>
                         </div>
                      </div>
                      <button className="p-4 bg-white border border-neutral-100 rounded-2xl text-neutral-200 hover:text-red-500 hover:border-red-500/20 transition-all shadow-sm">
                         <Trash2 className="w-5 h-5" />
                      </button>
                   </div>
                 ))}
              </div>
           </div>

           {/* Section 2: Team Audit */}
           <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
              <h3 className="text-2xl font-black italic tracking-tighter text-neutral-900 uppercase italic leading-none">Resource Access Control.</h3>
              
              <div className="space-y-6">
                 {[
                   { n: "Sarah Chen", r: "Lead Investigator", s: "Online", a: "SC" },
                   { n: "Mike Ross", r: "Security Engineer", s: "Manual Triage", a: "MR" },
                   { n: "System Automata", r: "Kernel Node", s: "Active Loop", a: "CPU" }
                 ].map((tm, i) => (
                   <tr key={i} className="flex items-center justify-between p-6 hover:bg-zinc-50 rounded-3xl transition-all cursor-crosshair">
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-neutral-100 flex items-center justify-center font-black italic text-neutral-400 group-hover:bg-white transition-all shadow-sm">
                            {tm.a}
                         </div>
                         <div>
                            <div className="text-[14px] font-black italic tracking-tight text-neutral-900 italic leading-none">{tm.n}</div>
                            <div className="text-[10px] text-neutral-300 uppercase tracking-widest italic">{tm.r}</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-[8px] text-emerald-600 font-black uppercase shadow-sm">{tm.s}</div>
                         <button className="w-10 h-10 bg-zinc-50 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-300 hover:text-neutral-900 transition-all shadow-sm italic font-bold">
                            <Plus className="w-4 h-4" />
                         </button>
                      </div>
                   </tr>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
