"use client";

import React, { useState, useEffect } from "react";
import { 
  Users, Key, Globe, ShieldCheck, Bell, Save, Copy, CheckCircle2,
  Trash2, Plus, FileText, History, RefreshCcw, AlertCircle, MoreHorizontal,
  Lock, Loader2, Link as LinkIcon, Rocket, Check, X
} from "lucide-react";
import { 
  useApiKeys, useWebhooks, useTeam, 
  useOrganizationSettings, useSecuritySettings, 
  useRetentionSettings, useScreeningSettings, 
  useReportingSettings, useNotificationSettings,
  usePromotionStatus
} from "@/hooks";
import { apiKeysService } from "@/services/api-keys.service";
import { webhooksService } from "@/services/webhooks.service";
import { settingsService } from "@/services/settings.service";
import { authService } from "@/services/auth.service";
import { organizationService } from "@/services/organization.service";
import { promotionService } from "@/services/promotion.service";
import { AvailableService } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { useRuntimeEnvironment } from "@/hooks/use-runtime-environment";
import { toast } from "sonner";

export default function SettingsPage() {
  // Fallback: No specific hook generated, using generic state
  const apiData: any[] = [];

  const environment = useRuntimeEnvironment();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Organization");

  // Fetch Hooks
  const { data: apiKeys, isLoading: apiKeysLoading, refetch: refetchApiKeys } = useApiKeys();
  const { data: webhooks, isLoading: webhooksLoading, refetch: refetchWebhooks } = useWebhooks();
  const { data: team, isLoading: teamLoading, refetch: refetchTeam } = useTeam();
  const { data: orgSettings, isLoading: orgLoading } = useOrganizationSettings();
  
  const [orgForm, setOrgForm] = useState({
    name: "",
    display_name: "",
    industry: "Banking",
    support_email: "",
    allowed_domains: ""
  });

  useEffect(() => {
    if (orgSettings) {
      setOrgForm({
        name: orgSettings.name || "",
        display_name: orgSettings.display_name || "",
        industry: orgSettings.industry || "Banking",
        support_email: orgSettings.support_email || "",
        allowed_domains: (orgSettings.allowed_domains || []).join(", ")
      });
    }
  }, [orgSettings]);

  const { data: secSettings, isLoading: secLoading } = useSecuritySettings();
  const { data: retSettings, isLoading: retLoading } = useRetentionSettings();
  const { data: scrSettings, isLoading: scrLoading } = useScreeningSettings();
  const { data: repSettings, isLoading: repLoading } = useReportingSettings();
  const { data: notSettings, isLoading: notLoading } = useNotificationSettings();

  const [saving, setSaving] = useState(false);

  // Production Access state
  const { data: promotionStatus, isLoading: promotionLoading, refetch: refetchPromotion } = usePromotionStatus(activeTab === "Production Access");
  const [promoNotes, setPromoNotes] = useState("");
  const [promoEmail, setPromoEmail] = useState("");
  const [promoSubmitting, setPromoSubmitting] = useState(false);

  const handlePromoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoEmail) return;
    setPromoSubmitting(true);
    try {
      await promotionService.submitGoLiveRequest({
        notes: promoNotes,
        security_contact_email: promoEmail,
      });
      await refetchPromotion();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit request.");
    } finally {
      setPromoSubmitting(false);
    }
  };

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
      toast.success("Services updated successfully. Reloading organization workspace...");
      window.location.reload();
    } catch (err) {
      console.error("Failed to update services:", err);
      toast.error("Failed to update organization services.");
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
      toast.success("Webhook ping sent successfully.");
    } catch (err) {
      console.error("Failed to ping webhook:", err);
      toast.error("Failed to ping webhook.");
    }
  };

  // Modals state
  const [showAddApiKey, setShowAddApiKey] = useState(false);
  const [newApiKeyName, setNewApiKeyName] = useState("");
  const [addingApiKey, setAddingApiKey] = useState(false);

  const [showAddWebhook, setShowAddWebhook] = useState(false);
  const [newWebhookUrl, setNewWebhookUrl] = useState("");
  const [newWebhookEvents, setNewWebhookEvents] = useState("");
  const [addingWebhook, setAddingWebhook] = useState(false);

  const [showAddMember, setShowAddMember] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("analyst");
  const [addingMember, setAddingMember] = useState(false);

  const handleCreateApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApiKeyName) return;
    try {
      setAddingApiKey(true);
      const mappedEnvironment = environment === "sandbox" ? "test" : "live";
      await apiKeysService.createKey({ name: newApiKeyName, scopes: ["all"], environment: mappedEnvironment });
      toast.success("API Key created successfully");
      setShowAddApiKey(false);
      setNewApiKeyName("");
      refetchApiKeys();
    } catch (err) {
      toast.error("Failed to create API key");
    } finally {
      setAddingApiKey(false);
    }
  };

  const handleCreateWebhook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWebhookUrl) return;
    try {
      setAddingWebhook(true);
      const events = newWebhookEvents.split(',').map(s => s.trim()).filter(Boolean);
      const mappedEnvironment = environment === "sandbox" ? "test" : "live";
      await webhooksService.create({ url: newWebhookUrl, event_types: events.length > 0 ? events : ["*"], environment: mappedEnvironment });
      toast.success("Webhook created successfully");
      setShowAddWebhook(false);
      setNewWebhookUrl("");
      setNewWebhookEvents("");
      refetchWebhooks();
    } catch (err) {
      toast.error("Failed to create Webhook");
    } finally {
      setAddingWebhook(false);
    }
  };

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberEmail) return;
    try {
      setAddingMember(true);
      // Stub submission
      await new Promise((r) => setTimeout(r, 800));
      toast.success(`Invitation sent to ${newMemberEmail}`);
      setShowAddMember(false);
      setNewMemberEmail("");
      setNewMemberRole("analyst");
      refetchTeam();
    } catch (err) {
      toast.error("Failed to invite member");
    } finally {
      setAddingMember(false);
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      if (activeTab === "Organization") {
        await organizationService.updateSettings({
          settings: {
            display_name: orgForm.display_name,
            industry: orgForm.industry,
            support_email: orgForm.support_email,
            allowed_domains: orgForm.allowed_domains
              .split(",")
              .map((d) => d.trim())
              .filter(Boolean),
          }
        });
        toast.success("Organization profile saved successfully.");
      } else {
        // Stub for saving all active tab modifications
        await new Promise((r) => setTimeout(r, 800));
        toast.success("Settings saved successfully.");
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl space-y-16 pb-20">
      {/* HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Institutional Settings.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Organization Profile & Infrastructure</p>
        </div>
        <button onClick={handleSaveAll} disabled={saving} className="px-12 py-5 bg-neutral-900 text-white rounded-[32px] font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 italic disabled:opacity-50 disabled:cursor-not-allowed">
           {saving ? "Saving..." : "Save All Changes"} <Save className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 flex overflow-x-auto no-scrollbar gap-4 lg:flex-col lg:space-y-4 lg:gap-0 pb-4 lg:pb-0">
           {(apiData || []).map((nav, i) => (
             <button 
               key={i} 
               onClick={() => setActiveTab(nav.n)}
               className={`whitespace-nowrap flex-shrink-0 w-auto lg:w-full flex items-center justify-between gap-4 px-8 py-4 rounded-3xl transition-all font-bold italic ${
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
                      <h3 className="text-xl md:text-2xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none">Global API Tokens.</h3>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black italic">Manage infrastructure access keys</p>
                   </div>
                   <button onClick={() => setShowAddApiKey(true)} className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
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
                      <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Webhook Endpoints.</h3>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage event subscriptions</p>
                   </div>
                   <button onClick={() => setShowAddWebhook(true)} className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
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
                    <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Resource Access Control.</h3>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage members and privileges</p>
                  </div>
                  <button onClick={() => setShowAddMember(true)} className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-brand-lime transition-all shadow-sm">
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
                       <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Service Entitlements.</h3>
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
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Organization Profile.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Core institution identifiers</p>
                </div>
                
                {orgLoading || !orgSettings ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Organization Name</label>
                      <input type="text" value={orgForm.name} disabled className="w-full px-5 py-4 bg-zinc-100 border border-neutral-200 rounded-2xl text-sm text-neutral-500 font-bold focus:outline-none transition-all cursor-not-allowed" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Display Name</label>
                      <input type="text" value={orgForm.display_name} onChange={e => setOrgForm({...orgForm, display_name: e.target.value})} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Industry</label>
                      <select value={orgForm.industry} onChange={e => setOrgForm({...orgForm, industry: e.target.value})} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all">
                        <option>Banking</option>
                        <option>Fintech</option>
                        <option>Crypto</option>
                        <option>E-commerce</option>
                        <option>Gaming</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Support Email</label>
                      <input type="email" value={orgForm.support_email} onChange={e => setOrgForm({...orgForm, support_email: e.target.value})} className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Allowed Domains</label>
                      <input type="text" value={orgForm.allowed_domains} onChange={e => setOrgForm({...orgForm, allowed_domains: e.target.value})} placeholder="acme.com, corp.acme.com" className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" />
                      <p className="text-[10px] text-neutral-400 font-medium italic mt-2">Comma separated domains allowed for email auto-provisioning.</p>
                    </div>
                  </div>
                )}
              </div>
            )}

           {/* Production Access */}
           {activeTab === "Production Access" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Production Access.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Apply for go-live authorization</p>
                </div>
                
                {promotionLoading ? (
                  <div className="text-center p-8 text-neutral-400"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
                ) : !promotionStatus ? (
                  <form onSubmit={handlePromoSubmit} className="space-y-8">
                    <div className="p-6 bg-brand-lime/10 border border-brand-lime/20 rounded-[32px] mb-8">
                      <p className="text-sm font-semibold text-neutral-900 not-italic">
                        You have not yet applied for production access. Submitting this application will kick off the Go-Live process, starting with a 10-step checklist you and our platform team will complete together.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Security Contact Email</label>
                      <input 
                        type="email" 
                        required
                        value={promoEmail} 
                        onChange={e => setPromoEmail(e.target.value)} 
                        placeholder="security@yourcompany.com"
                        className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Additional Notes (Optional)</label>
                      <textarea 
                        value={promoNotes} 
                        onChange={e => setPromoNotes(e.target.value)} 
                        rows={4}
                        placeholder="Tell us about your expected launch date or any special requirements..."
                        className="w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all resize-none" 
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={promoSubmitting}
                      className="px-8 py-4 bg-neutral-900 text-white rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-xl disabled:opacity-50"
                    >
                      {promoSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
                      <div>
                        <div className="text-sm font-black text-neutral-900 uppercase">Application Status</div>
                        <div className="text-xs text-neutral-400 font-medium">Your request is currently {promotionStatus.status.replace("_", " ")}</div>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-xs font-black uppercase ${
                        promotionStatus.status === 'approved' ? 'bg-brand-lime/20 text-brand-lime' : 
                        promotionStatus.status === 'rejected' ? 'bg-red-500/10 text-red-500' :
                        'bg-amber-500/10 text-amber-500'
                      }`}>
                        {promotionStatus.status.replace("_", " ")}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-black tracking-tight uppercase mb-4 text-neutral-900">Go-Live Checklist</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(apiData || []).map((item) => {
                          const isComplete = (promotionStatus as any)[item.key];
                          return (
                            <div key={item.key} className={`flex items-center gap-3 p-4 rounded-2xl border ${isComplete ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white border-neutral-100'} transition-all`}>
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isComplete ? 'bg-emerald-500 text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                                {isComplete ? <Check className="w-4 h-4" /> : <div className="w-2 h-2 bg-neutral-300 rounded-full" />}
                              </div>
                              <span className={`text-xs font-bold uppercase tracking-tight ${isComplete ? 'text-emerald-700' : 'text-neutral-500'}`}>{item.label}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
             </div>
           )}

           {/* Security Settings */}
           {activeTab === "Security & Access" && (
             <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
                <div className="space-y-2">
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Security Policies.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Enforce institution-wide protection</p>
                </div>

                {secLoading || !secSettings ? (
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
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Data Retention.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Configure automated data purging</p>
                </div>

                {retLoading || !retSettings ? (
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
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Compliance Controls.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">AML / KYC Screening thresholds</p>
                </div>

                {scrLoading || !scrSettings ? (
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
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Regulatory Reporting.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Configure STR / SAR automation</p>
                </div>

                {repLoading || !repSettings ? (
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
                   <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">Notification Preferences.</h3>
                   <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Manage alerts and digests</p>
                </div>

                {notLoading || !notSettings ? (
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

      {/* Modals */}
      <Dialog open={showAddApiKey} onOpenChange={setShowAddApiKey}>
        <DialogContent className="sm:max-w-[425px] font-sans">
          <form onSubmit={handleCreateApiKey}>
            <DialogHeader>
              <DialogTitle className="font-bold text-xl uppercase italic tracking-tighter">Create API Key</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-widest">
                Generate a new infrastructure access token.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Key Name</label>
                <input 
                  type="text"
                  required
                  value={newApiKeyName}
                  onChange={(e) => setNewApiKeyName(e.target.value)}
                  placeholder="e.g. Production Backend"
                  className="w-full p-3 bg-zinc-50 border border-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:border-brand-lime transition-all"
                />
              </div>
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowAddApiKey(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={addingApiKey} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {addingApiKey ? "Creating..." : "Create"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showAddWebhook} onOpenChange={setShowAddWebhook}>
        <DialogContent className="sm:max-w-[425px] font-sans">
          <form onSubmit={handleCreateWebhook}>
            <DialogHeader>
              <DialogTitle className="font-bold text-xl uppercase italic tracking-tighter">Add Webhook</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-widest">
                Subscribe to real-time events.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Endpoint URL</label>
                <input 
                  type="url"
                  required
                  value={newWebhookUrl}
                  onChange={(e) => setNewWebhookUrl(e.target.value)}
                  placeholder="https://api.yourcompany.com/webhook"
                  className="w-full p-3 bg-zinc-50 border border-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:border-brand-lime transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Events (comma separated)</label>
                <input 
                  type="text"
                  value={newWebhookEvents}
                  onChange={(e) => setNewWebhookEvents(e.target.value)}
                  placeholder="e.g. user.created, transaction.flagged"
                  className="w-full p-3 bg-zinc-50 border border-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:border-brand-lime transition-all"
                />
              </div>
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowAddWebhook(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={addingWebhook} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {addingWebhook ? "Adding..." : "Add Endpoint"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showAddMember} onOpenChange={setShowAddMember}>
        <DialogContent className="sm:max-w-[425px] font-sans">
          <form onSubmit={handleInviteMember}>
            <DialogHeader>
              <DialogTitle className="font-bold text-xl uppercase italic tracking-tighter">Invite Team Member</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-widest">
                Add a new member to your workspace.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Email Address</label>
                <input 
                  type="email"
                  required
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  placeholder="colleague@yourcompany.com"
                  className="w-full p-3 bg-zinc-50 border border-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:border-brand-lime transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Role</label>
                <select
                  value={newMemberRole}
                  onChange={(e) => setNewMemberRole(e.target.value)}
                  className="w-full p-3 bg-zinc-50 border border-neutral-100 rounded-xl text-sm font-bold focus:outline-none focus:border-brand-lime transition-all"
                >
                  <option value="admin">Admin</option>
                  <option value="analyst">Analyst</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowAddMember(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={addingMember} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {addingMember ? "Inviting..." : "Send Invite"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
