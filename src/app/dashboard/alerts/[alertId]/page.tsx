"use client";

import { 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Clock, 
  User, 
  Zap, 
  MoreHorizontal, 
  ChevronRight, 
  Download, 
  Briefcase, 
  MessageSquare,
  FileText,
  Activity,
  Plus,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Eye,
  Info,
  History,
  TrendingUp,
  Link as LinkIcon,
  Fingerprint,
  Globe,
  MoreVertical,
  CheckSquare,
  Terminal,
  Calendar,
  CreditCard,
  AlertCircle,
  Smartphone,
  BadgeCheck
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useAlert } from "@/hooks/use-alerts";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AlertDetailView() {
  const params = useParams();
  const alertId = params.alertId as string;

  const { data, isLoading, isError, refetch } = useAlert(alertId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load alert</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const { alert } = data;

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/alerts" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Operational Alert Feed
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{alert.id}</h1>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-700 border-none">
              {alert.severity} Severity
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              {alert.status}
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{alert.alert_type} • Assigned to {alert.assigned_user_name || "Unassigned"}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Plus className="w-4 h-4 mr-2" /> Convert to Case
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Resolution <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem className="text-emerald-600">Mark False Positive</DropdownMenuItem>
              <DropdownMenuItem className="text-rose-600">Confirm Suspicious</DropdownMenuItem>
              <DropdownMenuItem>Escalate to Compliance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {([] as any[]).map((kpi, i) => (
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
          {/* Rationale Card */}
          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                   <Info className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">System Rationale</p>
                   <h4 className="text-lg font-bold">Why was this alert triggered?</h4>
                </div>
             </div>
             <p className="text-sm font-medium leading-relaxed text-slate-300">
                {alert.title}
             </p>
             <div className="bg-black/40 p-4 rounded-lg font-mono text-[11px] text-emerald-400 leading-relaxed border border-white/5">
                <span className="text-white/40 block mb-1 uppercase text-[9px]">Execution Trace</span>
                {alert.description}
             </div>
          </Card>

          <Tabs defaultValue="investigation" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="investigation" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Investigation Hub</TabsTrigger>
              <TabsTrigger value="evidence" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Linked Evidence</TabsTrigger>
              <TabsTrigger value="timeline" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Activity Log</TabsTrigger>
            </TabsList>

            <TabsContent value="investigation" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                    <h4 className="text-sm font-bold text-slate-900 mb-6">Subject Identity</h4>
                    <div className="space-y-4">
                       {([] as any[]).map((item, i) => (
                         <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                           <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-2">{item.icon} {item.label}</span>
                           <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </Card>

                 <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                    <h4 className="text-sm font-bold text-slate-900 mb-6">Object Details</h4>
                    <div className="space-y-4">
                       {([] as any[]).map((item, i) => (
                         <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                           <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-2">{item.icon} {item.label}</span>
                           <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </Card>
              </div>

              {/* Note Section */}
              <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
                 <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-slate-900">Analyst Observation Thread</h4>
                    <Badge variant="outline" className="text-[9px] font-bold bg-slate-50 border-none">0 Notes</Badge>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs text-slate-500 italic">No notes found.</p>
                 </div>
                 <div className="flex gap-2">
                    <input placeholder="Add observation to thread..." className="flex-1 text-xs border border-slate-200 rounded-md px-3 h-9 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    <Button size="sm" className="bg-blue-600 h-9 font-bold px-4">Submit</Button>
                 </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
             <div className="space-y-1">
                <h4 className="text-sm font-bold">Investigation Control</h4>
                <p className="text-[11px] text-slate-400 font-medium">Lifecycle management for this alert node.</p>
             </div>
             <div className="space-y-3">
                <Button className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-xs font-bold shadow-sm">
                   <ShieldCheck className="w-4 h-4 mr-2" /> Mark False Positive
                </Button>
                <Button variant="outline" className="w-full h-10 border-red-500/30 text-red-500 hover:bg-red-500/5 text-xs font-bold">
                   <ShieldAlert className="w-4 h-4 mr-2" /> Confirm Risk
                </Button>
                <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 text-white hover:bg-white/10 text-xs font-bold">
                   <History className="w-4 h-4 mr-2" /> Assign Analyst
                </Button>
             </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
             <h4 className="text-sm font-bold text-slate-900 mb-6">Linked Intelligence</h4>
             <div className="space-y-3">
                {([] as any[]).map((link, i) => (
                  <Link key={i} href={link.href} className="flex justify-between items-center p-3 rounded-lg border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                     <span className="text-[11px] font-bold text-slate-600 flex items-center gap-2">{link.icon} {link.label}</span>
                     <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </Link>
                ))}
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
