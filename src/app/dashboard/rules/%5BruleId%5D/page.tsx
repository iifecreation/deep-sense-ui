"use client";

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
  AlertTriangle,
  PlayCircle,
  FileText
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

export default function RuleDetailView() {
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
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/rules" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Logic Orchestrator
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{rule.name}</h1>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-emerald-500 text-white border-none">
              {rule.status}
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-700 border-none">
              {rule.severity} Severity
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{rule.id} • Last modified by {rule.author}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Copy className="w-4 h-4 mr-2" /> Duplicate
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Rule Actions <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem>Edit Definition</DropdownMenuItem>
              <DropdownMenuItem className="text-rose-600">Disable Rule</DropdownMenuItem>
              <DropdownMenuItem>Run Diagnostic</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Precision Rate", value: rule.metrics.precision, subtext: "Historical stability", icon: <ShieldCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
          { label: "Rule Hits (30d)", value: rule.metrics.totalHits, subtext: "+12.4% trend", icon: <Zap className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Execution Time", value: rule.metrics.avgExecutionTime, subtext: "High perf engine", icon: <Activity className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
        ].map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex gap-4 items-center">
              <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
                {kpi.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{kpi.label}</p>
                <div className="text-xl font-bold text-slate-900">{kpi.value}</div>
                <p className="text-[10px] text-slate-400 font-medium">{kpi.subtext}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="logic" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="logic" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Logic Definition</TabsTrigger>
              <TabsTrigger value="alerts" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Matched Alerts</TabsTrigger>
              <TabsTrigger value="history" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Version History</TabsTrigger>
            </TabsList>

            <TabsContent value="logic" className="mt-6 space-y-6">
              {/* DSL Card */}
              <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                   <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">Logic DSL Core</span>
                   </div>
                   <Badge variant="outline" className="text-[10px] font-bold border-white/10 text-slate-400">v1.4.2</Badge>
                </div>
                <div className="bg-black/40 p-6 rounded-lg font-mono text-sm leading-relaxed text-emerald-400 italic">
                  {rule.logic.dsl}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                   {rule.logic.conditions.map((cond, i) => (
                     <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-lg leading-tight">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Parameter</p>
                        <p className="text-xs font-bold text-slate-200 mb-2">{cond.parameter}</p>
                        <div className="flex gap-2 text-xs font-bold">
                           <span className="text-emerald-400">{cond.operator}</span>
                           <span>{cond.value}</span>
                        </div>
                     </div>
                   ))}
                </div>
              </Card>

              {/* Description Card */}
              <Card className="rounded-xl shadow-sm border bg-white p-6">
                <h4 className="text-sm font-bold text-slate-900 mb-4">Functional Summary</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {rule.description} It specifically filters for origins with a high-risk jurisdiction score 
                  derived from the Institutional Geo-Risk model. A positive match triggers an immediate 
                  <span className="text-red-600 font-bold mx-1">FLAG_FOR_REVIEW</span> action, placing 
                  the transaction in the Level 2 manual review queue.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="alerts" className="mt-6">
              <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
                 <Table>
                    <TableHeader className="bg-slate-50/50 font-bold uppercase tracking-wider">
                       <TableRow>
                          <TableHead className="pl-6 h-10 text-[10px] text-slate-400">Alert Node</TableHead>
                          <TableHead className="h-10 text-[10px] text-slate-400">Timestamp</TableHead>
                          <TableHead className="h-10 text-[10px] text-slate-400 text-center">Severity</TableHead>
                          <TableHead className="h-10 text-[10px] text-slate-400 text-right pr-6">Status</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                       {rule.linkedAlerts.map((alert, i) => (
                         <TableRow key={i} className="h-16 group hover:bg-slate-50 cursor-pointer" onClick={() => window.location.href=`/dashboard/alerts/${alert.id}`}>
                            <TableCell className="pl-6 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase">{alert.id}</TableCell>
                            <TableCell className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{alert.date}</TableCell>
                            <TableCell className="text-center font-bold text-red-600 text-[10px] uppercase tracking-wider">{alert.severity}</TableCell>
                            <TableCell className="text-right pr-6">
                               <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold border-none ${
                                 alert.status === 'Active' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                               }`}>
                                 {alert.status}
                               </Badge>
                            </TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                 </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
             <div className="space-y-1">
                <h4 className="text-sm font-bold">Rule Governance</h4>
                <p className="text-[11px] text-slate-400 font-medium leading-none">System-wide command over business logic.</p>
             </div>
             <div className="space-y-3">
                <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                   <PlayCircle className="w-4 h-4 mr-2" /> Simulate Test
                </Button>
                <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-bold">
                   <ToggleLeft className="w-4 h-4 mr-2" /> Toggle State
                </Button>
                <Button variant="outline" className="w-full h-10 border-red-500/30 text-red-500 hover:bg-red-500/5 text-xs font-bold">
                   <History className="w-4 h-4 mr-2" /> Rollback
                </Button>
             </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
             <h4 className="text-sm font-bold text-slate-900 mb-6">Execution Diagnostics</h4>
             <div className="space-y-4">
                {[
                  { label: "Last Triggered", value: rule.lastTriggered },
                  { label: "Author Node", value: rule.author },
                  { label: "Version Index", value: rule.version },
                  { label: "Internal ID", value: "POL-001" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{item.label}</span>
                    <span className="text-[11px] font-bold text-slate-900 leading-none">{item.value}</span>
                  </div>
                ))}
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
