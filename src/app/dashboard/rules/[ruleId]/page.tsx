"use client";

import React from "react";
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

export default function RuleDetailPage() {
  const params = useParams();
  const ruleId = params.ruleId as string;

  // Mock data for high-fidelity view
  const rule = {
    id: ruleId,
    name: "High-Opacity Velocity Breach",
    status: "Active",
    severity: "High",
    description: "Detects rapid transaction sequences in high-risk jurisdictions exceeding 30-day baseline.",
    logic: {
      dsl: "IF transaction.amount > 5000 AND origin.risk_score > 70 AND account.velocity_1h > 3 THEN FLAG_FOR_REVIEW",
      conditions: [
        { parameter: "transaction.amount", operator: ">", value: "5000" },
        { parameter: "origin.risk_score", operator: ">", value: "70" },
        { parameter: "account.velocity_1h", operator: ">", value: "3" }
      ]
    },
    metrics: {
      totalHits: 1242,
      precision: "94.2%",
      recall: "88.1%",
      falsePositiveRate: "2.4%",
      avgExecutionTime: "1.2ms"
    },
    lastTriggered: "2 mins ago",
    author: "Sarah Jenkins",
    version: "v1.4.2",
    history: [
      { version: "v1.4.2", date: "Oct 12, 2026", author: "Sarah Jenkins", change: "Updated threshold delta from 5 to 3" },
      { version: "v1.4.1", date: "Sep 28, 2026", author: "Marcus Reed", change: "Added origin.risk_score parameter" },
      { version: "v1.4.0", date: "Aug 15, 2026", author: "Sarah Jenkins", change: "Initial rule deployment" }
    ],
    linkedAlerts: [
      { id: "ALT-9921", date: "Oct 15, 2026", status: "Active", severity: "High" },
      { id: "ALT-9871", date: "Oct 14, 2026", status: "Resolved", severity: "Medium" }
    ]
  };

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
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
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
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Edit Definition
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Disable Rule
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Run Diagnostic Test
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: "Execution Precision", value: rule.metrics.precision, delta: "Stable", icon: <ShieldCheck className="text-brand-lime" />, color: "text-brand-lime" },
           { label: "Rule Hits (30d)", value: rule.metrics.totalHits, delta: "+12.4%", icon: <Zap className="text-orange-500" /> },
           { label: "Compute Impact", value: rule.metrics.avgExecutionTime, delta: "High Perf", icon: <Activity className="text-indigo-500" /> },
           { label: "Linked Alerts", value: rule.linkedAlerts.length, delta: "02 Active", icon: <AlertTriangle className="text-muted-foreground" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0">{kpi.delta}</Badge>
              </div>
              <div>
                 <div className={`text-2xl font-black italic tracking-tighter leading-none ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
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
                        <div className="bg-black/40 p-10 rounded-[32px] border border-white/5 font-mono text-[14px] leading-relaxed text-white/80 italic">
                           {rule.logic.dsl}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                           {rule.logic.conditions.map((cond, i) => (
                             <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                                <div className="text-[9px] font-black uppercase text-white/30 italic mb-1">Parameter</div>
                                <div className="text-[12px] font-black text-white italic">{cond.parameter}</div>
                                <div className="flex gap-2 items-baseline mt-2">
                                   <span className="text-brand-lime font-black underline">{cond.operator}</span>
                                   <span className="text-white font-black">{cond.value}</span>
                                </div>
                             </div>
                           ))}
                        </div>
                     </CardContent>
                  </Card>

                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                     <CardHeader className="p-0 mb-10">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Trigger Logic Summary</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0 space-y-4">
                        <p className="text-[13px] text-muted-foreground leading-relaxed italic font-medium">
                           This rule evaluates the cumulative transaction volume for an account within a 1-hour window. 
                           It specifically filters for origins with a high-risk jurisdiction score derived from the Institutional Geo-Risk model. 
                           A positive match triggers an immediate <span className="text-rose-500 font-black italic underline underline-offset-4 decoration-rose-500/30">FLAG_FOR_REVIEW</span> action, 
                           placing the transaction in the Level 2 manual review queue.
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
                           {[
                             { label: "Precision Rate", value: rule.metrics.precision, icon: <ShieldCheck className="w-4 h-4" /> },
                             { label: "Recall Rate", value: rule.metrics.recall, icon: <Activity className="w-4 h-4" /> },
                             { label: "False Positive Ratio", value: rule.metrics.falsePositiveRate, icon: <Zap className="text-indigo-500 w-4 h-4" /> },
                           ].map((score, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between items-baseline mb-1">
                                   <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground flex items-center gap-2">
                                      {score.icon} {score.label}
                                   </span>
                                   <span className="text-lg font-black italic text-neutral-900">{score.value}</span>
                                </div>
                                <Progress value={parseFloat(score.value)} className="h-1 bg-muted" indicatorClassName="bg-brand-lime shadow-[0_0_8px_currentColor]" />
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Hits Over Time</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-48 bg-zinc-50 rounded-[32px] border border-dashed border-neutral-100 flex items-center justify-center">
                           <BarChart3 className="w-10 h-10 text-neutral-200" />
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="alerts" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Triggered Alert Registry</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Alert Node</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Timestamp</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center text-neutral-400">Severity</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Resolution</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {rule.linkedAlerts.map((alert, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 h-20 cursor-pointer" onClick={() => window.location.href=`/dashboard/alerts/${alert.id}`}>
                                   <TableCell className="px-10 py-5">
                                      <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{alert.id}</span>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{alert.date}</TableCell>
                                   <TableCell className="text-center font-black italic text-rose-500 uppercase text-[10px] tracking-widest">{alert.severity}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none ${
                                        alert.status === 'Active' ? 'text-orange-500' : 'text-brand-lime'
                                      }`}>
                                         {alert.status}
                                      </Badge>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
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
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <Play className="w-4 h-4 mr-2" />
                     Test Against Baseline
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <ToggleLeft className="w-4 h-4 mr-2" />
                     Toggle Rule State
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <History className="w-4 h-4 mr-2" />
                     Rollback Version
                  </Button>
               </div>
            </Card>

            {/* PERFORMANCE INFO */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Diagnostics</CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {[
                    { l: "Last Triggered", v: rule.lastTriggered },
                    { l: "Author Node", v: rule.author },
                    { l: "Version Ingress", v: rule.version },
                    { l: "Policy ID", v: "POL-88219-X" }
                  ].map((it, i) => (
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
