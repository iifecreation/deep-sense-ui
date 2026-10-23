"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  FileText,
  History,
  Search,
  Download,
  Send,
  Plus,
  RefreshCcw,
  Clock,
  XCircle,
  AlertTriangle,
  FileCheck,
  FileX,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReports } from "@/hooks";
import { useAuditEvents } from "@/hooks/use-audit";
import { reportsService } from "@/services/reports.service";
import { ReportSubmissionRead } from "@/types";
import { LoadErrorCard } from "@/components/common/LoadErrorCard";

const REPORT_TYPES = ["CTR", "STR", "INTERNAL"];

function daysBetween(a: string, b: string): number {
  return (new Date(b).getTime() - new Date(a).getTime()) / (1000 * 60 * 60 * 24);
}

function formatDeadline(dueAt?: string): string {
  if (!dueAt) return "No deadline";
  const diffDays = Math.ceil(daysBetween(new Date().toISOString(), dueAt));
  if (diffDays < 0) return "EXPIRED";
  if (diffDays === 0) return "Due today";
  return `${diffDays}d left`;
}

const REGISTRY_TABS = ["all", "draft", "in_review", "ready_for_submission", "submitted", "rejected"] as const;

export default function RegulatoryReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [registryTab, setRegistryTab] = useState<(typeof REGISTRY_TABS)[number]>("all");
  // Regulatory report actions are written to the audit log as `regulatory_report` events.
  const { data: reportAudit } = useAuditEvents({ entity_type: "regulatory_report", page_size: 6 });
  const reportAuditEvents = reportAudit?.items ?? [];
  const { data: reports, isLoading, isError, error, refetch } = useReports({
    query: { page: 1, page_size: 50 }
  });

  const [showCreate, setShowCreate] = useState(false);
  const [newReportType, setNewReportType] = useState(REPORT_TYPES[0]);
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const [submissions, setSubmissions] = useState<ReportSubmissionRead[]>([]);
  useEffect(() => {
    reportsService.listSubmissions().then(setSubmissions).catch(() => setSubmissions([]));
  }, []);

  const handleCreateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setCreating(true);
    setCreateError(null);
    try {
      await reportsService.createReport({ report_type: newReportType, title: newTitle.trim(), summary: newSummary.trim() || undefined });
      setShowCreate(false);
      setNewTitle("");
      setNewSummary("");
      await refetch();
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Failed to create report.");
    } finally {
      setCreating(false);
    }
  };

  const filteredReports = reports?.filter((r) => {
    if (registryTab !== "all" && r.status?.toLowerCase() !== registryTab) return false;
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      r.id?.toLowerCase().includes(query) ||
      r.report_type?.toLowerCase().includes(query) ||
      r.linked_case_id?.toLowerCase().includes(query)
    );
  }) || [];

  const allReports = useMemo(() => reports || [], [reports]);

  const kpiCards = useMemo(() => {
    const total = allReports.length;
    const byStatus = (s: string) => allReports.filter((r) => r.status?.toLowerCase() === s).length;
    const overdue = allReports.filter((r) => r.due_at && !r.submitted_at && new Date(r.due_at) < new Date()).length;
    return [
      { label: "Total Reports", value: String(total), icon: <FileText className="w-4 h-4" /> },
      { label: "Draft", value: String(byStatus("draft")), icon: <FileX className="w-4 h-4 text-slate-400" /> },
      { label: "In Review", value: String(byStatus("in_review")), icon: <Clock className="w-4 h-4 text-amber-500" /> },
      { label: "Submitted", value: String(byStatus("submitted")), icon: <Send className="w-4 h-4 text-indigo-500" /> },
      { label: "Rejected", value: String(byStatus("rejected")), icon: <XCircle className="w-4 h-4 text-rose-500" /> },
      { label: "Overdue", value: String(overdue), icon: <AlertTriangle className="w-4 h-4 text-rose-500" /> },
    ];
  }, [allReports]);

  const immediateActionQueue = useMemo(() => {
    return allReports
      .filter((r) => r.due_at && !r.submitted_at)
      .sort((a, b) => new Date(a.due_at ?? 0).getTime() - new Date(b.due_at ?? 0).getTime())
      .slice(0, 8);
  }, [allReports]);

  const reviewAnalytics = useMemo(() => {
    const submitted = allReports.filter((r) => r.submitted_at);
    const leadTimes = submitted.map((r) => daysBetween(r.created_at, r.submitted_at ?? r.created_at));
    const avgLeadTime = leadTimes.length > 0 ? (leadTimes.reduce((a, b) => a + b, 0) / leadTimes.length) : null;
    const rejected = allReports.filter((r) => r.status?.toLowerCase() === "rejected").length;
    const reworkRatio = allReports.length > 0 ? (rejected / allReports.length) * 100 : null;
    const pendingReview = allReports.filter((r) => r.status?.toLowerCase() === "under_review");
    return { avgLeadTime, reworkRatio, pendingReview };
  }, [allReports]);

  const filingTrend = useMemo(() => {
    const buckets = new Array(12).fill(0);
    const now = new Date();
    for (const r of allReports) {
      if (!r.created_at) continue;
      const days = Math.floor(daysBetween(r.created_at, now.toISOString()));
      const bucket = 11 - Math.min(11, Math.floor(days / 7));
      if (bucket >= 0) buckets[bucket]++;
    }
    return buckets;
  }, [allReports]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Regulatory Reports<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="p-6">
                <div className="h-24 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Regulatory Reports<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <LoadErrorCard error={error} what="reports" onRetry={() => refetch()} />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Regulatory Reports<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Create, manage, review, and track AML reports for regulatory compliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button disabled variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic group border-neutral-200 dark:border-neutral-800 opacity-50">
               <Download className="w-3.5 h-3.5 mr-2" />
               Export Reports (not yet available)
            </Button>
            <Button onClick={() => setShowCreate(true)} className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
               <Plus className="w-3.5 h-3.5 mr-2" />
               Create Report
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10" onClick={() => refetch()}>
               <RefreshCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="Search by ID, type, case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-48 text-[10px] font-bold uppercase tracking-widest border-none shadow-none focus-visible:ring-0"
            />
          </div>
        </div>
      </section>

      {/* 2. KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiCards.map((kpi, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-xl shadow-black/5 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">
                {kpi.icon}
              </div>
            </div>
            <div>
              <div className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none">
                {kpi.value}
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 leading-tight">
                {kpi.label}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. PRIORITY REPORTING QUEUE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-neutral-900 text-white">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2 text-white">
                <AlertTriangle className="w-5 h-5 text-brand-lime font-black" />
                Reports Requiring Immediate Action
              </CardTitle>
              <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                Regulatory filings with approaching submission deadlines
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted px-8">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8">Report ID</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Type</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Linked Case</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Subject</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Deadline</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {immediateActionQueue.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-slate-500">No reports with an approaching deadline.</TableCell>
                  </TableRow>
                ) : immediateActionQueue.map((row) => {
                  const dead = formatDeadline(row.due_at);
                  return (
                  <TableRow key={row.id} className="group hover:bg-muted/30 transition-colors border-b border-border/50 cursor-pointer">
                    <TableCell className="px-8 py-5">
                      <Link href={`/dashboard/reports/${row.id}`} className="font-black italic text-xs underline underline-offset-4 decoration-border group-hover:decoration-neutral-900 transition-all">{row.id}</Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[9px] font-black italic tracking-widest uppercase">{row.report_type}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-[10px] font-medium text-muted-foreground italic">{row.linked_case_id || "—"}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-[11px] font-black italic">{row.title}</span>
                    </TableCell>
                    <TableCell className="text-center">
                       <Badge className={`text-[9px] font-black italic tracking-widest uppercase ${
                         row.status === 'ready_for_submission' ? 'bg-brand-lime text-black' :
                         row.status === 'in_review' ? 'bg-indigo-500 text-white' :
                         'bg-neutral-100 text-neutral-400'
                       }`}>
                         {row.status}
                       </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                       <span className={`text-[10px] font-black uppercase italic ${dead.includes('left') ? 'text-orange-500' : dead === 'EXPIRED' ? 'text-rose-500 animate-pulse' : 'text-muted-foreground'}`}>
                         {dead}
                       </span>
                    </TableCell>
                    <TableCell className="px-8 text-right">
                       <Link href={`/dashboard/reports/${row.id}`}>
                         <Button size="sm" className="h-7 text-[8px] font-black uppercase italic tracking-widest px-4 bg-neutral-900 dark:bg-white dark:text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Open Report</Button>
                       </Link>
                    </TableCell>
                  </TableRow>
                );})}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* 4. ALL REPORTS TABLE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Report Registry</CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground">Historical and active disclosure archive</CardDescription>
              </div>
              <div className="flex gap-2">
                 <Button disabled variant="outline" className="h-8 text-[9px] font-black uppercase italic border-neutral-200 dark:border-neutral-800 opacity-50">Assign Bulk (not yet available)</Button>
                 <Button disabled className="h-8 text-[9px] font-black uppercase italic bg-indigo-600 text-white opacity-50">Submit Selection (not yet available)</Button>
              </div>
            </div>
          </CardHeader>
          <Tabs value={registryTab} onValueChange={(v) => setRegistryTab(v as typeof registryTab)} className="w-full">
            <TabsList className="bg-muted/30 rounded-none border-b border-border/50 w-full justify-start px-8 h-12">
              {REGISTRY_TABS.map(tab => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-lime data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white text-[10px] font-black uppercase italic tracking-widest px-8"
                >
                  {tab.replace(/_/g, " ")}
                </TabsTrigger>
              ))}
            </TabsList>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-neutral-400">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Type</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Entity</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Created By</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-neutral-400">Submission Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10 text-slate-500">No reports found.</TableCell>
                    </TableRow>
                  ) : filteredReports.map((row) => (
                    <TableRow key={row.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4 font-black italic text-[11px] text-muted-foreground">{row.id}</TableCell>
                      <TableCell className="text-[10px] font-black italic">{row.report_type || 'Unknown'}</TableCell>
                      <TableCell className="text-[11px] font-black italic">{row.title || (row.linked_case_id ? row.linked_case_id.slice(0, 8) : 'Unknown')}</TableCell>
                      <TableCell className="text-[10px] font-medium text-muted-foreground italic">{row.assigned_to_user_id ? row.assigned_to_user_id.slice(0, 8) : 'Unassigned'}</TableCell>
                      <TableCell className="text-center font-black italic text-[11px]">
                         <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest ${
                           row.status === 'submitted' ? 'border-indigo-500 text-indigo-500' : 
                           row.status === 'rejected' ? 'border-rose-500 text-rose-500' : 
                           'border-slate-500 text-slate-500'
                         }`}>
                           {row.status}
                         </Badge>
                      </TableCell>
                      <TableCell className="px-8 text-right text-[10px] font-bold text-muted-foreground uppercase">{row.created_at ? new Date(row.created_at).toLocaleDateString() : 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Tabs>
        </Card>
      </section>

      {/* 5. NEW REPORT & 6. REVIEW WORKFLOW */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full relative overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl">
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="flex items-start justify-between mb-12">
                 <div>
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Generate Report Intelligence</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Automated and manual disclosure initialization</CardDescription>
                 </div>
                 <Zap className="w-10 h-10 text-brand-lime animate-pulse" />
              </div>
              
              <div className="space-y-8">
                 <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => setShowCreate(true)} className="h-24 rounded-3xl border-dashed flex flex-col items-center justify-center border-border hover:border-brand-lime hover:bg-brand-lime/5 transition-all group">
                       <Plus className="w-6 h-6 text-muted-foreground group-hover:text-brand-lime mb-2" />
                       <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white">Create Manually</span>
                    </Button>
                    <Button asChild variant="outline" className="h-24 rounded-3xl border-dashed flex flex-col items-center justify-center border-border hover:border-indigo-500 hover:bg-indigo-500/5 transition-all group">
                       <Link href="/dashboard/cases">
                         <FileCheck className="w-6 h-6 text-muted-foreground group-hover:text-indigo-500 mb-2" />
                         <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white">Pull from Case</span>
                       </Link>
                    </Button>
                 </div>
              </div>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-muted/20">
            <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
               <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Review Process Analytics</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground">Reporting quality and throughput tracking</CardDescription>
                  </div>
                  <Users className="w-8 h-8 text-indigo-500/30" />
               </div>
            </CardHeader>
            <CardContent className="p-10 space-y-10 flex-1">
               <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2">
                     <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Lead Time to Submit</span>
                        <span className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white">
                          {reviewAnalytics.avgLeadTime != null ? `${reviewAnalytics.avgLeadTime.toFixed(1)}d` : "N/A"}
                        </span>
                     </div>
                     <Progress value={reviewAnalytics.avgLeadTime != null ? Math.min(100, (reviewAnalytics.avgLeadTime / 14) * 100) : 0} className="h-1 bg-muted" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Rejection Ratio</span>
                        <span className="text-2xl font-black italic tracking-tighter text-rose-500">
                          {reviewAnalytics.reworkRatio != null ? `${reviewAnalytics.reworkRatio.toFixed(0)}%` : "N/A"}
                        </span>
                     </div>
                     <Progress value={reviewAnalytics.reworkRatio ?? 0} className="h-1 bg-muted" />
                  </div>
               </div>

               <div className="p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 space-y-4">
                  <h6 className="text-[9px] font-black uppercase tracking-widest italic text-muted-foreground">Pending Approval Workload</h6>
                  {reviewAnalytics.pendingReview.length > 0 ? (
                    <div className="text-xl font-black italic text-neutral-900 dark:text-white">{reviewAnalytics.pendingReview.length} report{reviewAnalytics.pendingReview.length === 1 ? "" : "s"} awaiting review</div>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">No reports pending review.</p>
                  )}
               </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 7. SUBMISSION TRACKING */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-border/50 bg-indigo-600 text-white">
             <div className="flex items-center justify-between">
                <div>
                   <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Filing Gateway Status</CardTitle>
                   <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Submission acknowledgment and regulator responses</CardDescription>
                </div>
                <Send className="w-8 h-8 text-white/30" />
             </div>
          </CardHeader>
          <CardContent className="p-0">
             <Table>
                <TableHeader className="bg-white/5 pointer-events-none border-b border-white/5">
                  <TableRow className="hover:bg-transparent border-0 font-black">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-neutral-400">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Regulator</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Filing Ref</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-neutral-400">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                   {submissions.length === 0 ? (
                     <TableRow>
                       <TableCell colSpan={5} className="text-center py-10 text-white/40">No submissions recorded yet.</TableCell>
                     </TableRow>
                   ) : submissions.map((sub) => (
                     <TableRow key={sub.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                        <TableCell className="px-8 py-5 font-black italic text-[11px]">
                          <Link href={`/dashboard/reports/${sub.report_id}`} className="underline underline-offset-4 decoration-white/20">{sub.report_id}</Link>
                        </TableCell>
                        <TableCell className="text-[10px] font-bold italic text-muted-foreground">{sub.destination}</TableCell>
                        <TableCell className="text-center">
                           <Badge variant="outline" className={`text-[8px] font-black italic tracking-widest uppercase border-none px-0 ${
                             sub.status === 'acknowledged' ? 'text-emerald-500' : sub.status === 'failed' ? 'text-rose-500' : 'text-indigo-500'
                           }`}>
                             {sub.status}
                           </Badge>
                        </TableCell>
                        <TableCell className="text-center text-[10px] font-black text-muted-foreground uppercase">{sub.external_reference || "—"}</TableCell>
                        <TableCell className="px-8 text-right text-[9px] font-bold text-muted-foreground uppercase">
                          {new Date(sub.submitted_at).toLocaleDateString()}
                        </TableCell>
                     </TableRow>
                   ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
      </section>

      {/* 8. REPORTING ANALYTICS & 9. COMPLIANCE LOGS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <section className="xl:col-span-2">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col">
               <div className="flex items-center justify-between mb-12">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Reporting Insights</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Institutional filing trends and success analytics</CardDescription>
                  </div>
                  <BarChart3 className="w-10 h-10 text-indigo-500/20" />
               </div>
               
               <div className="flex-1 min-h-[300px] flex items-end gap-1 px-4">
                  {filingTrend.every((c) => c === 0) ? (
                    <p className="w-full text-center text-sm text-neutral-400 italic self-center">No report history yet to chart.</p>
                  ) : filingTrend.map((count, i) => {
                    const max = Math.max(...filingTrend, 1);
                    return (
                    <div key={i} className="flex-1 bg-indigo-500/10 rounded-full relative group">
                       <div className="absolute bottom-0 inset-x-0 bg-brand-lime transition-all rounded-full" style={{ height: `${Math.max(4, (count / max) * 100)}%` }} />
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{count} Reports</div>
                    </div>
                  );})}
               </div>

               <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="space-y-1">
                     <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic">Total Reports</div>
                     <div className="text-xl font-black italic">{allReports.length}</div>
                  </div>
                  <div className="space-y-1">
                     <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic">Submitted</div>
                     <div className="text-xl font-black italic">{allReports.filter((r) => r.submitted_at).length}</div>
                  </div>
                  <div className="space-y-1">
                     <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic">Submissions Logged</div>
                     <div className="text-xl font-black italic">{submissions.length}</div>
                  </div>
               </div>
            </Card>
         </section>

         <section>
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-neutral-900 text-white">
               <CardHeader className="p-8 border-b border-white/10">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Reporting Audit Trail</CardTitle>
                  <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Disclosure lifecycle integrity logging</CardDescription>
               </CardHeader>
               <CardContent className="p-10 space-y-8 flex-1">
                  {reportAuditEvents.length === 0 ? (
                    <p className="text-[10px] font-bold text-white/40 uppercase">No report activity recorded yet.</p>
                  ) : (
                    reportAuditEvents.map((event) => (
                      <div key={event.id} className="flex gap-4 group">
                         <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-all">
                            <History className="w-3.5 h-3.5" />
                         </div>
                         <div>
                            <div className="text-[11px] font-black italic tracking-tight">{event.description || event.action}</div>
                            <div className="text-[8px] font-bold text-white/40 uppercase mt-0.5">
                              {new Date(event.created_at).toLocaleString()} • {event.actor_role || "system"}
                            </div>
                         </div>
                      </div>
                    ))
                  )}
                  <Link href="/dashboard/audit" className="w-full h-8 flex items-center justify-center rounded-md border text-[9px] font-black uppercase italic bg-white/5 border-white/10 mt-auto hover:bg-white/10">Open Full Audit Trail</Link>
               </CardContent>
            </Card>
         </section>
      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleCreateReport}>
            <DialogHeader>
              <DialogTitle>Create Report</DialogTitle>
              <DialogDescription>Start a new regulatory disclosure report.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Report Type
                <select
                  value={newReportType}
                  onChange={(e) => setNewReportType(e.target.value)}
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                >
                  {REPORT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Title
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  placeholder="e.g. Suspicious wire pattern — Acme Corp"
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                />
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Summary (optional)
                <textarea
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  className="w-full min-h-16 rounded-md border border-neutral-200 p-3 text-sm"
                />
              </label>
              {createError && <p className="text-xs text-red-600">{createError}</p>}
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowCreate(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={creating || !newTitle.trim()} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {creating ? "Creating..." : "Create"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
