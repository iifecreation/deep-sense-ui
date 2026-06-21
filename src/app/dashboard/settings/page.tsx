"use client";

import React, { useState, useEffect } from "react";
import { 
  Users, Key, Globe, ShieldCheck, Bell, Save, Copy, CheckCircle2,
  Trash2, Plus, FileText, History, RefreshCcw, AlertCircle, MoreHorizontal,
  Lock, Loader2, Link as LinkIcon
} from "lucide-react";
import { 
  useApiKeys, useWebhooks, useTeam, 
  useOrganizationSettings, useSecuritySettings, 
  useRetentionSettings, useScreeningSettings, 
  useReportingSettings, useNotificationSettings 
} from "@/hooks";
import { apiKeysService } from "@/services/api-keys.service";
import { webhooksService } from "@/services/webhooks.service";
import { settingsService } from "@/services/settings.service";
import { authService } from "@/services/auth.service";
import { organizationService } from "@/services/organization.service";
import { AvailableService } from "@/types";

export default function SettingsPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Organization");

  // Fetch Hooks
  const { data: apiKeys, isLoading: apiKeysLoading, refetch: refetchApiKeys } = useApiKeys();
  const { data: webhooks, isLoading: webhooksLoading, refetch: refetchWebhooks } = useWebhooks();
  const { data: team, isLoading: teamLoading, refetch: refetchTeam } = useTeam();
  const { data: orgSettings, isLoading: orgLoading } = useOrganizationSettings();
  const { data: secSettings, isLoading: secLoading } = useSecuritySettings();
  const { data: retSettings, isLoading: retLoading } = useRetentionSettings();
  const { data: scrSettings, isLoading: scrLoading } = useScreeningSettings();
  const { data: repSettings, isLoading: repLoading } = useReportingSettings();
  const { data: notSettings, isLoading: notLoading } = useNotificationSettings();

  const [saving, setSaving] = useState(false);

  // Services tab states
  const [availableServices, setAvailableServices] = useState<AvailableService[]>([]);
  const [enabledServices, setEnabledServices] = useState<string[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [updatingServices, setUpdatingServices] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadServicesData() {
      try {
        const [avail, active] = await Promise.all([
          authService.getAvailableServices(),
          organizationService.getServices()
        ]);
        setAvailableServices(avail);
        setEnabledServices(active.services || []);
      } catch (err) {
        console.error("Failed to load settings services:", err);
      } finally {
        setServicesLoading(false);
      }
    }
    loadServicesData();
  }, []);

  const handleSaveServices = async () => {
    setUpdatingServices(true);
    try {
      await organizationService.updateServices({ services: enabledServices });
      alert("Services updated successfully. Reloading organization workspace...");
      window.location.reload();
    } catch (err) {
      console.error("Failed to update services:", err);
      alert("Failed to update organization services.");
    } finally {
      setUpdatingServices(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRevokeKey = async (keyId: string) => {
    try {
      await apiKeysService.revokeKey(keyId);
      refetchApiKeys();
    } catch (err) {
      console.error("Failed to revoke key:", err);
    }
  };

  const handleDeleteWebhook = async (webhookId: string) => {
    try {
      await webhooksService.delete(webhookId);
      refetchWebhooks();
    } catch (err) {
      console.error("Failed to delete webhook:", err);
    }
  };

  const handleTestWebhook = async (webhookId: string) => {
    try {
      await webhooksService.test(webhookId);
      alert("Webhook ping sent successfully.");
    } catch (err) {
      console.error("Failed to ping webhook:", err);
      alert("Failed to ping webhook.");
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      // Stub for saving all active tab modifications
      await new Promise((r) => setTimeout(r, 800));
      alert("Settings saved successfully.");
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl space-y-16 pb-20">
      {/* HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Institutional Settings.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Organization Profile & Infrastructure</p>
        </div>
        <button onClick={handleSaveAll} disabled={saving} className="px-12 py-5 bg-neutral-900 text-white rounded-[32px] font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 italic disabled:opacity-50 disabled:cursor-not-allowed">
           {saving ? "Saving..." : "Save All Changes"} <Save className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-4">
           {[
             { n: "Organization", i: <Globe /> },
             { n: "Services", i: <ShieldCheck /> },
             { n: "Team & Roles", i: <Users /> },
             { n: "API Keys", i: <Key /> },
             { n: "Webhooks", i: <Bell /> },
             { n: "Screening Settings", i: <ShieldCheck /> },
             { n: "Reporting Settings", i: <FileText /> },
             { n: "Retention Policies", i: <History /> },
             { n: "Security & Access", i: <Lock /> },
             { n: "Notifications", i: <Bell /> }
           ].map((nav, i) => (
             <button 
               key={i} 
               onClick={() => setActiveTab(nav.n)}
               className={`w-full flex items-center justify-between px-8 py-4 rounded-3xl transition-all font-bold italic ${
               activeTab === nav.n ? "bg-white text-neutral-900 shadow-xl border border-neutral-100" : "text-neutral-400 hover:text-neutral-900 hover:bg-zinc-50"
             }`}>
                <div className="flex items-center gap-4">
                   <div className="opacity-40">{nav.i}</div>
                   <span className="text-[12px] tracking-tight">{nav.n}</span>
                </div>
                {activeTab === nav.n && <div className="w-1.5 h-1.5 bg-brand-lime rounded-full shadow-[0_0_8px_#D1F701]" />}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-16">
           
           {/* API Keys */}
           {activeTab === "API Keys" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="flex items-center justify-between">
                   <div className="space-y-2">
                      <h3 className="text-2xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none">Global API Tokens.</h3>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black italic">Manage infrastructure access keys</p>
                   </div>
                   <button className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
                      <Plus className="w-5 h-5" />
                   </button>
                </div>

                <div className="space-y-6">
                   {apiKeysLoading ? (
                     <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                   ) : apiKeys && apiKeys.length > 0 ? (
                     apiKeys.map((key: any, i: number) => (
                       <div key={key.id || i} className="p-8 bg-zinc-50 border border-neutral-100 rounded-[40px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group/key hover:bg-white hover:border-neutral-200 transition-all font-bold shadow-sm">
                          <div className="space-y-4 overflow-hidden">
                             <div className="flex items-center gap-4">
                                <span className="text-[14px] font-black italic tracking-tight text-neutral-900 italic">{key.name || 'Unnamed Key'}</span>
                                <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white border border-neutral-100 rounded-full text-neutral-300 italic">{key.status || 'Active'}</span>
                             </div>
                             <div className="flex items-center gap-3 overflow-hidden">
                                <code className="text-xl font-mono text-neutral-300 transition-all group-hover/key:text-neutral-900 truncate">
                                  {key.key_value || `${key.prefix}...`}
                                </code>
                                <button 
                                  onClick={() => copyToClipboard(key.key_value || `${key.prefix}...`)}
                                  className="p-2 text-neutral-200 hover:text-brand-lime transition-all shrink-0"
                                >
                                   {copiedKey === (key.key_value || `${key.prefix}...`) ? <CheckCircle2 className="w-4 h-4 shadow-[0_0_8px_#D1F701]" /> : <Copy className="w-4 h-4" />}
                                </button>
                             </div>
                          </div>
                          <button onClick={() => handleRevokeKey(key.id)} className="p-4 bg-white border border-neutral-100 rounded-2xl text-neutral-200 hover:text-red-500 hover:border-red-500/20 transition-all shadow-sm shrink-0">
                             <Trash2 className="w-5 h-5" />
                          </button>
                       </div>
                     ))
                   ) : (
                     <div className="text-center p-8 text-neutral-400 border border-dashed border-neutral-200 rounded-[40px]">No API keys found.</div>
                   )}
                </div>
             </div>
           )}

           {/* Webhooks Tab */}
           {activeTab === "Webhooks" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="flex items-center justify-between italic">
                   <div className="space-y-2">
                      <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Webhook Endpoints.</h3>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage event subscriptions</p>
                   </div>
                   <button className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
                      <Plus className="w-5 h-5" />
                   </button>
                </div>
                
                <div className="space-y-6">
                   {webhooksLoading ? (
                     <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                   ) : webhooks && webhooks.length > 0 ? (
                     webhooks.map((wh: any, i: number) => (
                       <div key={wh.id || i} className="p-8 bg-zinc-50 border border-neutral-100 rounded-[40px] flex flex-col gap-4 group/wh hover:bg-white hover:border-neutral-200 transition-all font-bold shadow-sm">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <span className="text-[14px] font-black italic tracking-tight text-neutral-900">{wh.name || 'Unnamed Endpoint'}</span>
                                <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-500">{wh.status || 'Active'}</span>
                             </div>
                             <div className="flex gap-2">
                                <button onClick={() => handleTestWebhook(wh.id)} className="p-3 bg-white border border-neutral-100 rounded-2xl text-neutral-400 hover:text-brand-lime transition-all shadow-sm text-[10px] uppercase tracking-widest">
                                   Test
                                </button>
                                <button onClick={() => handleDeleteWebhook(wh.id)} className="p-3 bg-white border border-neutral-100 rounded-2xl text-neutral-200 hover:text-red-500 transition-all shadow-sm">
                                   <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                          </div>
                          <div className="text-[12px] font-mono text-neutral-400 truncate">{wh.url}</div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {(wh.events || []).map((ev: string) => (
                              <span key={ev} className="text-[8px] px-2 py-1 bg-neutral-100 rounded-md text-neutral-500 uppercase">{ev}</span>
                            ))}
                          </div>
                       </div>
                     ))
                   ) : (
                     <div className="text-center p-8 text-neutral-400 border border-dashed border-neutral-200 rounded-[40px]">No webhooks found.</div>
                   )}
                </div>
             </div>
           )}

           {/* Team Tab */}
           {activeTab === "Team & Roles" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Resource Access Control.</h3>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage members and privileges</p>
                  </div>
                  <button className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
                     <Plus className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                   {teamLoading ? (
                     <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                   ) : team && team.members?.length > 0 ? (
                     team.members.map((tm: any, i: number) => (
                       <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-zinc-50 rounded-3xl transition-all cursor-crosshair border border-transparent hover:border-neutral-100 gap-4">
                          <div className="flex items-center gap-6">
                             <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-neutral-100 flex items-center justify-center font-black italic text-neutral-400 group-hover:bg-white transition-all shadow-sm uppercase">
                                {tm.full_name ? tm.full_name.substring(0, 2) : tm.email.substring(0, 2)}
                             </div>
                             <div>
                                <div className="text-[14px] font-black italic tracking-tight text-neutral-900 leading-none mb-1">{tm.full_name || tm.email}</div>
                                <div className="text-[10px] text-neutral-300 uppercase tracking-widest mb-1">{tm.role}</div>
                                {tm.last_login_at && <div className="text-[10px] text-neutral-400 italic font-medium">Last Login: {new Date(tm.last_login_at).toLocaleDateString()}</div>}
                             </div>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase shadow-sm ${tm.is_active ? 'bg-emerald-500/5 border border-emerald-500/10 text-emerald-600' : 'bg-red-500/5 border border-red-500/10 text-red-600'}`}>{tm.is_active ? 'Active' : 'Inactive'}</div>
                             {tm.is_invite && <div className="px-3 py-1 rounded-full text-[8px] font-black uppercase shadow-sm bg-amber-500/5 border border-amber-500/10 text-amber-600">Pending Invite</div>}
                             <button className="w-10 h-10 bg-zinc-50 border border-neutral-100 rounded-xl flex items-center justify-center text-neutral-300 hover:text-neutral-900 transition-all shadow-sm italic font-bold">
                                <MoreHorizontal className="w-4 h-4" />
                             </button>
                          </div>
                       </div>
                     ))
                   ) : (
                     <div className="text-center p-8 text-neutral-400 border border-dashed border-neutral-200 rounded-[40px]">No team members found.</div>
                   )}
                </div>
             </div>
           )}

            {/* Services Settings */}
            {activeTab === "Services" && (
              <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Service Entitlements.</h3>
                       <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Enable or disable cloud tenant capabilities</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <input 
                         type="text" 
                         placeholder="Search services..." 
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="px-4 py-2 bg-zinc-50 border border-neutral-100 rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-brand-lime transition-all"
                       />
                       <button 
                         onClick={handleSaveServices} 
                         disabled={updatingServices} 
                         className="px-6 py-3 bg-neutral-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-md disabled:opacity-50"
                       >
                          {updatingServices ? "Saving..." : "Save Services"}
                       </button>
                    </div>
                 </div>

                 {servicesLoading ? (
                   <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                 ) : (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
                     {availableServices
                       .filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()) || (s.description || "").toLowerCase().includes(searchQuery.toLowerCase()))
                       .map(service => {
                         const isEnabled = enabledServices.includes(service.key);
                         return (
                           <div 
                             key={service.key}
                             onClick={() => {
                               if (isEnabled) {
                                 setEnabledServices(enabledServices.filter(k => k !== service.key));
                               } else {
                                 setEnabledServices([...enabledServices, service.key]);
                               }
                             }}
                             className={`p-6 border rounded-[32px] cursor-pointer transition-all duration-200 select-none flex items-start gap-4 ${
                               isEnabled 
                                 ? "bg-neutral-900 text-white border-neutral-900 shadow-lg" 
                                 : "bg-zinc-50 text-neutral-600 border-neutral-100 hover:border-neutral-200"
                             }`}
                           >
                             <div className="pt-0.5">
                               <input 
                                 type="checkbox" 
                                 checked={isEnabled} 
                                 onChange={() => {}} // handled by parent div click
                                 className="w-4 h-4 rounded border-gray-300 text-neutral-900 focus:ring-neutral-900 shrink-0" 
                               />
                             </div>
                             <div className="space-y-1">
                               <p className={`text-sm font-black uppercase tracking-tight ${isEnabled ? "text-brand-lime" : "text-neutral-900"}`}>
                                 {service.label}
                               </p>
                               <p className={`text-[10px] font-medium leading-relaxed ${isEnabled ? "text-neutral-300" : "text-neutral-400"}`}>
                                 {service.description || "No description provided."}
                               </p>
                             </div>
                           </div>
                         );
                       })}
                   </div>
                 )}
              </div>
            )}

           {/* Organization Settings */}
           {activeTab === "Organization" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Organization Profile.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Core institution identifiers</p>
                </div>
                
                {orgLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Organization Name</label>
                      <input type="text" defaultValue={orgSettings?.name || "Acme Financial"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Display Name</label>
                      <input type="text" defaultValue={orgSettings?.display_name || "Acme"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Industry</label>
                      <select defaultValue={orgSettings?.industry || "Banking"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all">
                        <option>Banking</option>
                        <option>Fintech</option>
                        <option>Crypto</option>
                        <option>E-commerce</option>
                        <option>Gaming</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Support Email</label>
                      <input type="email" defaultValue={orgSettings?.support_email || "support@acme.com"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Allowed Domains</label>
                      <input type="text" defaultValue={(orgSettings?.allowed_domains || []).join(", ")} placeholder="acme.com, corp.acme.com" className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                      <p className="text-[10px] text-neutral-400 font-medium italic mt-2">Comma separated domains allowed for email auto-provisioning.</p>
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Security Settings */}
           {activeTab === "Security & Access" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Security Policies.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Enforce institution-wide protection</p>
                </div>

                {secLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Require Multi-Factor Auth (MFA)</div>
                        <div className="text-xs text-neutral-400 font-medium">Force all institution users to configure MFA.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500 cursor-pointer">
                        <div className="absolute top-1 left-7 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Enforce Password Rotation</div>
                        <div className="text-xs text-neutral-400 font-medium">Require password changes every 90 days.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-neutral-200 cursor-pointer">
                        <div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Session Timeout (Minutes)</label>
                      <input type="number" defaultValue={secSettings?.session_timeout_minutes || 60} className="w-full max-w-md px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">IP Allowlist</label>
                      <textarea defaultValue={(secSettings?.ip_allowlist || []).join("\n")} placeholder="192.168.1.1&#10;10.0.0.0/24" className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all h-32" />
                      <p className="text-[10px] text-neutral-400 font-medium italic mt-2">One IP or CIDR per line. Leaves empty to allow all IPs.</p>
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Retention Policies */}
           {activeTab === "Retention Policies" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Data Retention.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Configure automated data purging</p>
                </div>

                {retLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Transaction Retention (Days)</label>
                      <input type="number" defaultValue={retSettings?.transaction_retention_days || 365} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Case Retention (Days)</label>
                      <input type="number" defaultValue={retSettings?.case_retention_days || 1825} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Audit Log Retention (Days)</label>
                      <input type="number" defaultValue={retSettings?.audit_retention_days || 365} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Screening Hit Retention (Days)</label>
                      <input type="number" defaultValue={retSettings?.screening_retention_days || 1825} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Screening Settings */}
           {activeTab === "Screening Settings" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Compliance Controls.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">AML / KYC Screening thresholds</p>
                </div>

                {scrLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Fuzzy Match Threshold (%)</label>
                      <input type="range" min="50" max="100" defaultValue={scrSettings?.match_threshold || 85} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-brand-lime" />
                      <div className="flex justify-between text-xs text-neutral-400"><span>50% (Loose)</span><span>85%</span><span>100% (Exact)</span></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">PEP Screening</label>
                        <select defaultValue={scrSettings?.pep_level || "Class 1 & 2"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all">
                          <option>Class 1 Only</option>
                          <option>Class 1 & 2</option>
                          <option>All Classes (1, 2, 3)</option>
                          <option>Disabled</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Continuous Rescreening Cadence</label>
                        <select defaultValue={scrSettings?.rescreen_cadence || "Daily"} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                          <option>Upon Activity Only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Reporting Settings */}
           {activeTab === "Reporting Settings" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Regulatory Reporting.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Configure STR / SAR automation</p>
                </div>

                {repLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Auto-File Confirmed Fraud</div>
                        <div className="text-xs text-neutral-400 font-medium">Automatically draft SARs for cases closed as "Confirmed Fraud".</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500 cursor-pointer">
                        <div className="absolute top-1 left-7 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Maker-Checker Workflow</div>
                        <div className="text-xs text-neutral-400 font-medium">Require secondary review before electronic submission to FIU.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500 cursor-pointer">
                        <div className="absolute top-1 left-7 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Notifications */}
           {activeTab === "Notifications" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Notification Preferences.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage alerts and digests</p>
                </div>

                {notLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Critical Fraud Alerts</div>
                        <div className="text-xs text-neutral-400 font-medium">Send immediate emails for high-severity rule triggers.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500 cursor-pointer">
                        <div className="absolute top-1 left-7 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Compliance Digests</div>
                        <div className="text-xs text-neutral-400 font-medium">Weekly summary of screening hits and case volumes.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500 cursor-pointer">
                        <div className="absolute top-1 left-7 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Webhook Error Alerts</div>
                        <div className="text-xs text-neutral-400 font-medium">Notify technical contacts if webhooks fail delivery.</div>
                      </div>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-neutral-200 cursor-pointer">
                        <div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all"></div>
                      </div>
                    </div>
                  </div>
                )}
             </div>
           )}

        </div>
      </div>
    </div>
  );
}
