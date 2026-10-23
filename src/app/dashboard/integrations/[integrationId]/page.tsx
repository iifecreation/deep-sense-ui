"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Settings,
  Activity,
  ShieldAlert,
  ChevronRight,
  Zap,
  Cloud,
  RefreshCw,
  Key,
  Network,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIntegration } from "@/hooks/use-integrations";
import { integrationsService } from "@/services/integrations.service";
import type { HealthEventRead } from "@/lib/api-client/api";

function formatDate(value?: string | null): string {
  if (!value) return "Never";
  return new Date(value).toLocaleString();
}

export default function IntegrationDetailPage() {
  const params = useParams();
  const integrationId = params.integrationId as string;

  const { data: integration, isLoading, isError, refetch } = useIntegration(integrationId);

  const [testing, setTesting] = useState(false);
  const [testMessage, setTestMessage] = useState<string | null>(null);
  const [toggling, setToggling] = useState(false);

  const [logs, setLogs] = useState<HealthEventRead[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [editForm, setEditForm] = useState({ base_url: "", auth_type: "", description: "" });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    if (!integrationId) return;
    setLogsLoading(true);
    integrationsService.getLogs(integrationId)
      .then((res) => setLogs(res.items || []))
      .catch(() => setLogs([]))
      .finally(() => setLogsLoading(false));
  }, [integrationId]);

  const handleTest = async () => {
    setTesting(true);
    setTestMessage(null);
    try {
      const result = await integrationsService.test(integrationId);
      setTestMessage(result.summary || "Test completed.");
      await refetch();
    } catch (err) {
      setTestMessage(err instanceof Error ? err.message : "Test failed.");
    } finally {
      setTesting(false);
    }
  };

  const openEdit = () => {
    if (!integration) return;
    setEditForm({
      base_url: integration.base_url || "",
      auth_type: integration.auth_type || "",
      description: integration.description || "",
    });
    setSaveError(null);
    setShowEdit(true);
  };

  const handleSaveEdit = async () => {
    setSaving(true);
    setSaveError(null);
    try {
      await integrationsService.update(integrationId, {
        base_url: editForm.base_url || undefined,
        auth_type: editForm.auth_type || undefined,
        description: editForm.description || undefined,
      });
      setShowEdit(false);
      await refetch();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to update integration.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async () => {
    if (!integration) return;
    setToggling(true);
    try {
      if (integration.status === "disabled") {
        await integrationsService.enable(integrationId);
      } else {
        await integrationsService.disable(integrationId);
      }
      await refetch();
    } catch (err) {
      setTestMessage(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setToggling(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-brand-lime" />
      </div>
    );
  }

  if (isError || !integration) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load integration</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const canUpdate = !!integration.available_actions?.includes("update");

  const topology = [
    { label: "Type", value: integration.integration_type },
    { label: "Environment", value: integration.environment || "Not set" },
    { label: "Base URL", value: integration.base_url || "Not set" },
    { label: "Auth Type", value: integration.auth_type || "Not set" },
    { label: "Created", value: formatDate(integration.created_at) },
    { label: "Updated", value: formatDate(integration.updated_at) },
  ];

  const healthMatrix = [
    { label: "Last Tested", value: formatDate(integration.health?.last_tested_at) },
    { label: "Last Test Status", value: integration.health?.last_test_status || "Never tested" },
    { label: "Last Success", value: formatDate(integration.health?.last_success_at) },
    { label: "Last Error", value: formatDate(integration.health?.last_error_at) },
    { label: "Error Count", value: String(integration.health?.error_count ?? 0) },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/integrations" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Integration Registry
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{integration.name}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${integration.status === 'active' ? 'bg-brand-lime text-black' : integration.status === 'error' ? 'bg-rose-500 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                {integration.status}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className={`w-1.5 h-1.5 rounded-full ${integration.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{integration.environment || "unset"}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
               <Button disabled={testing} onClick={() => void handleTest()} variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                  <RefreshCw className={`w-3.5 h-3.5 mr-2 text-muted-foreground ${testing ? 'animate-spin' : ''}`} />
                  {testing ? "Testing..." : "Test Connection"}
               </Button>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                        Integration Ops
                        <ChevronRight className="w-4 h-4 ml-2" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                     <DropdownMenuItem
                        disabled={!canUpdate}
                        onClick={() => canUpdate && openEdit()}
                        className={`text-[10px] font-black uppercase italic tracking-widest h-11 px-4 ${!canUpdate ? "opacity-40" : ""}`}
                     >
                        Edit Configuration{!canUpdate ? " (not yet available)" : ""}
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => void handleToggle()} className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                        {integration.status === "disabled" ? "Enable Integration" : "Disable Integration"}
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
            {testMessage && <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 italic max-w-xs text-right">{testMessage}</p>}
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><Network className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{integration.integration_type}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Type</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><Activity className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{integration.health?.last_test_status || "N/A"}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Last Test Status</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-rose-500" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{integration.health?.error_count ?? 0}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Error Count</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><RefreshCw className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{formatDate(integration.health?.last_sync_at)}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Last Sync</div>
            </div>
         </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="overview" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Overview</TabsTrigger>
                  <TabsTrigger value="logs" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Health Log</TabsTrigger>
               </TabsList>

               <TabsContent value="overview" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                     <CardHeader className="p-0 mb-10">
                        <div className="flex items-center justify-between">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Integration Topology</CardTitle>
                           <Cloud className="w-8 h-8 text-muted-foreground/10" />
                        </div>
                     </CardHeader>
                     <CardContent className="p-0 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-6">
                              {topology.map((it, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                   <span className="text-[10px] font-black uppercase text-muted-foreground italic">{it.label}</span>
                                   <span className="text-[13px] font-black italic text-neutral-900 truncate">{it.value}</span>
                                </div>
                              ))}
                           </div>
                           <div className="p-8 bg-zinc-50 rounded-[32px] border border-border/50">
                              <h5 className="text-[10px] font-black uppercase text-neutral-400 italic mb-4">Description</h5>
                              <p className="text-[13px] text-neutral-600 leading-relaxed italic font-medium">
                                 {integration.description || "No description provided."}
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10 flex flex-row items-center justify-between">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Health Matrix</CardTitle>
                           <Activity className="w-6 h-6 text-brand-lime" />
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                           {healthMatrix.map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase italic tracking-widest border-b border-border/50 pb-4 last:border-0">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className="text-neutral-900">{item.value}</span>
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Traffic Pulse</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-40 bg-zinc-50 rounded-[32px] border border-dashed border-neutral-100 flex flex-col items-center justify-center gap-2">
                           <Zap className="w-8 h-8 text-neutral-200" />
                           <p className="text-xs text-neutral-400 italic">Traffic metrics not yet available.</p>
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="logs" className="m-0 space-y-8">
                  <div className="bg-neutral-900 rounded-[40px] p-10 font-mono text-[12px] text-white/80 border border-white/5 shadow-2xl space-y-4 overflow-hidden relative group">
                     <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                        <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Health Event Log</h4>
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-rose-500" />
                           <div className="w-3 h-3 rounded-full bg-orange-500" />
                           <div className="w-3 h-3 rounded-full bg-brand-lime" />
                        </div>
                     </div>
                     {logsLoading ? (
                       <div className="py-10 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-white/40" /></div>
                     ) : logs.length === 0 ? (
                       <div className="py-10 text-center text-white/50 italic text-sm font-bold">
                          No recent logs available.
                       </div>
                     ) : (
                       <div className="space-y-3 max-h-80 overflow-y-auto">
                         {logs.map((log) => (
                           <div key={log.id} className="flex justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                             <span className="text-white/70">{log.summary || log.event_type}</span>
                             <span className="text-white/30 shrink-0">{formatDate(log.created_at)}</span>
                           </div>
                         ))}
                       </div>
                     )}
                  </div>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* CONFIGURATION PANEL */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Configuration</CardTitle>
                  <Key className="w-5 h-5 text-muted-foreground/20" />
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  <div className="space-y-4">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase text-neutral-400 italic">Auth Type</span>
                        <span className="text-[12px] font-black italic text-neutral-900 truncate">{integration.auth_type || "Not configured"}</span>
                     </div>
                     <Separator className="bg-border/50" />
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase text-neutral-400 italic">Base URL</span>
                        <span className="text-[12px] font-black italic text-neutral-900 truncate">{integration.base_url || "Not configured"}</span>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Protocol Ops</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Administrative command over connectivity lifecycle.</p>
               </div>
               <div className="space-y-3">
                  <Button disabled={testing} onClick={() => void handleTest()} className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10 disabled:opacity-50">
                     <RefreshCw className="w-4 h-4 mr-2" />
                     {testing ? "Testing..." : "Test Connection"}
                  </Button>
                  <Button
                     disabled={!canUpdate}
                     onClick={openEdit}
                     variant="outline"
                     className={`w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all ${!canUpdate ? "text-white/40 opacity-50" : ""}`}
                  >
                     <Settings className="w-4 h-4 mr-2" />
                     Configure Params{!canUpdate ? " (not yet available)" : ""}
                  </Button>
                  <Button disabled={toggling} onClick={() => void handleToggle()} variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all disabled:opacity-50">
                     <ShieldAlert className="w-4 h-4 mr-2" />
                     {integration.status === "disabled" ? "Enable Integration" : "Disable Integration"}
                  </Button>
               </div>
            </Card>
         </div>
      </div>

      <Dialog open={showEdit} onOpenChange={(open) => { if (!open) { setShowEdit(false); setSaveError(null); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit {integration.name} configuration</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Base URL</label>
              <Input
                value={editForm.base_url}
                onChange={(e) => setEditForm((f) => ({ ...f, base_url: e.target.value }))}
                placeholder="https://api.example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Auth Type</label>
              <Input
                value={editForm.auth_type}
                onChange={(e) => setEditForm((f) => ({ ...f, auth_type: e.target.value }))}
                placeholder="oauth2, api_key, basic..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Description</label>
              <Textarea
                value={editForm.description}
                onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
          </div>
          {saveError ? <p className="text-xs text-red-600">{saveError}</p> : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEdit(false)}>Cancel</Button>
            <Button onClick={() => void handleSaveEdit()} disabled={saving} className="bg-neutral-900 hover:bg-neutral-800">
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
