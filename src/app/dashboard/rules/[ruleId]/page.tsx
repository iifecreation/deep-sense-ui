"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Settings, 
  Activity, 
  ShieldCheck, 
  ShieldAlert,
  Clock, 
  Lock, 
  ChevronRight,
  MoreHorizontal,
  Workflow,
  History,
  Code2,
  FileSearch,
  Zap,
  Play,
  Copy,
  ToggleLeft,
  BarChart3,
  Terminal,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useFraudRule } from "@/hooks/use-fraud-rules";
import { fraudRulesService } from "@/services/fraud-rules.service";

function formatDate(value?: string | null): string {
  if (!value) return "Unknown";
  return new Date(value).toLocaleString();
}

export default function RuleDetailPage() {
  const params = useParams();
  const ruleId = params.ruleId as string;

  const { data: ruleData, isLoading, isError, refetch } = useFraudRule(ruleId);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [actionBusy, setActionBusy] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!ruleId) return;
    fraudRulesService.getRuleMetrics(ruleId, 30).then(setMetrics).catch(() => setMetrics([]));
  }, [ruleId]);

  const handleDuplicate = async () => {
    setActionBusy(true);
    try {
      await fraudRulesService.duplicateRule(ruleId);
      setActionMessage("Rule duplicated successfully.");
    } catch (err) {
      setActionMessage(err instanceof Error ? err.message : "Failed to duplicate rule.");
    } finally {
      setActionBusy(false);
    }
  };

  const handleToggle = async () => {
    if (!ruleData) return;
    setActionBusy(true);
    try {
      if (ruleData.enabled) {
        await fraudRulesService.disableRule(ruleId);
      } else {
        await fraudRulesService.enableRule(ruleId);
      }
      await refetch();
    } catch (err) {
      setActionMessage(err instanceof Error ? err.message : "Failed to toggle rule.");
    } finally {
      setActionBusy(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-lime"></div>
      </div>
    );
  }

  if (isError || !ruleData) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load rule</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const rule = {
    id: ruleData.id,
    name: ruleData.name || "Unnamed Rule",
    status: ruleData.enabled ? "Active" : "Disabled",
    severity: ruleData.severity || "medium",
    description: ruleData.description || "No description provided.",
    logic: {
      dsl: JSON.stringify(ruleData.conditions_json, null, 2),
    },
    version: `v${ruleData.version || 1}`,
    history: [
      { version: `v${ruleData.version || 1}`, date: formatDate(ruleData.updated_at), author: "System", change: "Latest rule deployment" }
    ],
  };

  const kpis = [
    { label: "Trigger Count", value: ruleData.trigger_count ?? 0, icon: <Activity className="w-5 h-5" /> },
    { label: "Weight", value: ruleData.weight?.toFixed(2) ?? "N/A", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Priority", value: ruleData.priority ?? 0, icon: <ShieldAlert className="w-5 h-5" /> },
    { label: "Last Triggered", value: ruleData.last_triggered_at ? formatDate(ruleData.last_triggered_at).split(",")[0] : "Never", icon: <Clock className="w-5 h-5" /> },
  ];

  const diagnostics = [
    { l: "Category", v: ruleData.category || "Uncategorized" },
    { l: "Dry Run Only", v: ruleData.dry_run_only ? "Yes" : "No" },
    { l: "Built-in", v: ruleData.is_builtin ? "Yes" : "No" },
    { l: "Version", v: ruleData.version ?? 1 },
    { l: "Created", v: formatDate(ruleData.created_at) },
  ];

  const totalTriggersFromMetrics = metrics.reduce((sum, m) => sum + (m.trigger_count || 0), 0);

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/rules" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Logic Orchestrator
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{rule.name}</h1>
              <Badge className="bg-brand-lime text-black border-none h-6 px-4 text-[9px] font-black uppercase italic tracking-widest">
                {rule.status}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{rule.severity} Severity</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
               <Button disabled={actionBusy} onClick={() => void handleDuplicate()} variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                  <Copy className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                  Duplicate
               </Button>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                        Rule Actions
                        <ChevronRight className="w-4 h-4 ml-2" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                     <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                        Edit Definition (not yet available)
                     </DropdownMenuItem>
                     <DropdownMenuItem onClick={() => void handleToggle()} className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                        {ruleData.enabled ? "Disable Rule" : "Enable Rule"}
                     </DropdownMenuItem>
                     <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                        Run Diagnostic Test (not yet available)
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
            {actionMessage && <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 italic">{actionMessage}</p>}
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {kpis.map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
              </div>
              <div>
                 <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="definition" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="definition" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Definition</TabsTrigger>
                  <TabsTrigger value="metrics" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Impact Metrics</TabsTrigger>
                  <TabsTrigger value="alerts" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Linked Alerts</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">History</TabsTrigger>
               </TabsList>

               <TabsContent value="definition" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-neutral-900 text-white overflow-hidden relative group">
                     <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-brand-lime/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-lime/10 transition-all duration-700" />
                     <CardHeader className="p-0 mb-10 relative z-10">
                        <div className="flex items-center justify-between">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter text-brand-lime">Logic DSL Core</CardTitle>
                           <Terminal className="w-8 h-8 text-white/10" />
                        </div>
                     </CardHeader>
                     <CardContent className="p-0 relative z-10">
                        <div className="bg-black/40 p-10 rounded-[32px] border border-white/5 font-mono text-[14px] leading-relaxed text-white/80 italic whitespace-pre">
                           {rule.logic.dsl}
                        </div>
                     </CardContent>
                  </Card>

                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                     <CardHeader className="p-0 mb-10">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Trigger Logic Summary</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0 space-y-4">
                        <p className="text-[13px] text-muted-foreground leading-relaxed italic font-medium">
                           {rule.description}
                        </p>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="metrics" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Statistical Efficacy</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-8">
                           <div className="flex justify-between items-baseline mb-1">
                              <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Triggers (30d)</span>
                              <span className="text-lg font-black italic text-neutral-900">{totalTriggersFromMetrics}</span>
                           </div>
                           <div className="flex justify-between items-baseline mb-1">
                              <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Weight</span>
                              <span className="text-lg font-black italic text-neutral-900">{ruleData.weight?.toFixed(2) ?? "N/A"}</span>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Hits Over Time (30d)</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-48 bg-zinc-50 rounded-[32px] border border-dashed border-neutral-100 flex items-end gap-1 p-4">
                           {metrics.length === 0 ? (
                             <p className="w-full text-center text-xs text-neutral-400 italic self-center">No metrics recorded yet.</p>
                           ) : metrics.map((m, i) => {
                             const max = Math.max(...metrics.map((x) => x.trigger_count || 0), 1);
                             return (
                               <div key={i} className="flex-1 bg-brand-lime/10 rounded-full relative group h-full">
                                  <div className="absolute bottom-0 inset-x-0 bg-brand-lime rounded-full" style={{ height: `${Math.max(4, ((m.trigger_count || 0) / max) * 100)}%` }} />
                               </div>
                             );
                           })}
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="alerts" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Triggered Alert Registry</CardTitle>
                     </CardHeader>
                     <CardContent className="p-10 text-center text-muted-foreground italic text-sm font-bold">
                        No alerts linked to this rule.
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="history" className="m-0">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-12 bg-white">
                     <div className="space-y-12">
                        {rule.history.map((step, i) => (
                           <div key={i} className="flex gap-10 items-start relative group">
                              {i !== rule.history.length - 1 && (
                                <div className="absolute left-[31px] top-10 bottom-[-48px] w-px bg-neutral-100 group-hover:bg-brand-lime transition-colors" />
                              )}
                              <div className={`w-16 h-16 rounded-[24px] bg-zinc-50 border border-neutral-100 flex flex-col items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-neutral-900 group-hover:text-white`}>
                                 <span className="text-[11px] font-black italic">{step.version}</span>
                              </div>
                              <div className="flex-1 space-y-2 pt-2">
                                 <div className="flex justify-between items-center">
                                    <h5 className="text-xl font-black italic uppercase tracking-tighter text-neutral-900">{step.change}</h5>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase italic px-4 py-1.5 bg-muted rounded-xl">{step.date}</span>
                                 </div>
                                 <p className="text-[12px] text-muted-foreground italic font-medium">Author: {step.author}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Rule Governance</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">System-wide command over business logic lifecycle.</p>
               </div>
               <div className="space-y-3">
                  <Button disabled className="w-full h-14 bg-brand-lime/40 text-black rounded-3xl text-[10px] font-black uppercase italic opacity-60">
                     <Play className="w-4 h-4 mr-2" />
                     Test Against Baseline (not yet available)
                  </Button>
                  <Button disabled={actionBusy} onClick={() => void handleToggle()} variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all disabled:opacity-50">
                     <ToggleLeft className="w-4 h-4 mr-2" />
                     {ruleData.enabled ? "Disable Rule" : "Enable Rule"}
                  </Button>
                  <Button disabled variant="outline" className="w-full h-14 border-rose-500/30 text-rose-500/50 rounded-3xl text-[10px] font-black uppercase italic opacity-60">
                     <History className="w-4 h-4 mr-2" />
                     Rollback Version (not yet available)
                  </Button>
               </div>
            </Card>

            {/* PERFORMANCE INFO */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Diagnostics</CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {diagnostics.map((it, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest italic border-b border-border/50 pb-4 last:border-0">
                       <span className="text-muted-foreground">{it.l}</span>
                       <span className="text-neutral-900">{it.v}</span>
                    </div>
                  ))}
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
