"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Filter,
  Plus,
  RefreshCcw,
  Search,
  ExternalLink,
  Users,
  FileText,
  Calendar,
  Loader2,
} from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAlerts } from "@/hooks/use-alerts";
import { useCases } from "@/hooks/use-cases";
import { useScreeningMatches } from "@/hooks/use-screening";
import { useCustomers } from "@/hooks/use-customers";
import { useReports } from "@/hooks";

function timeAgo(value?: string | null): string {
  if (!value) return "Unknown";
  const diffMs = Date.now() - new Date(value).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function ComplianceWorkspacePage() {
  const { data: alerts, isLoading: alertsLoading, refetch: refetchAlerts } = useAlerts({ query: { page: 1, page_size: 50 } });
  const { data: cases, isLoading: casesLoading, refetch: refetchCases } = useCases({ query: { page: 1, page_size: 50 } });
  const { data: matches, isLoading: matchesLoading, refetch: refetchMatches } = useScreeningMatches({ query: { page: 1, page_size: 50 } });
  const { data: customers, isLoading: customersLoading, refetch: refetchCustomers } = useCustomers({ query: { page: 1, page_size: 100 } });
  const { data: reports, isLoading: reportsLoading, refetch: refetchReports } = useReports({ query: { page: 1, page_size: 50 } });

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([refetchAlerts(), refetchCases(), refetchMatches(), refetchCustomers(), refetchReports()]);
    setIsRefreshing(false);
  };

  const allAlerts = alerts || [];
  const allCases = cases || [];
  const allMatches = matches || [];
  const allCustomers = customers || [];
  const allReports = reports || [];

  // Alert has no status/lifecycle field (see app/schemas/alert.py) - every
  // fetched alert is effectively "open" for this workspace's purposes.
  const openAlerts = allAlerts;
  const criticalAlerts = openAlerts.filter((a) => a.severity === "critical" || a.severity === "high");
  const openCases = allCases.filter((c) => c.status !== "closed" && c.status !== "resolved");
  const unresolvedMatches = allMatches.filter((m) => m.status === "pending" || m.status === "open" || m.status === "unresolved");
  const highRiskCustomers = allCustomers.filter((c) => c.risk_tier === "high" || c.risk_tier === "critical");
  const pendingReports = allReports.filter((r) => !r.submitted_at);

  const priorityQueue = [...criticalAlerts]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 8);

  const isLoading = alertsLoading || casesLoading || matchesLoading || customersLoading || reportsLoading;

  const kpis = [
    { label: "Open Alerts", value: openAlerts.length, icon: <Activity className="w-5 h-5" />, href: "/dashboard/alerts" },
    { label: "Open Cases", value: openCases.length, icon: <ShieldCheck className="w-5 h-5" />, href: "/dashboard/cases" },
    { label: "Unresolved Matches", value: unresolvedMatches.length, icon: <Search className="w-5 h-5" />, href: "/dashboard/screening" },
    { label: "High-Risk Customers", value: highRiskCustomers.length, icon: <Users className="w-5 h-5" />, href: "/dashboard/customer-risk" },
    { label: "Reports Pending", value: pendingReports.length, icon: <FileText className="w-5 h-5" />, href: "/dashboard/reports" },
    { label: "Critical Alerts", value: criticalAlerts.length, icon: <AlertTriangle className="w-5 h-5" />, href: "/dashboard/alerts" },
  ];

  const alertVolumeByDay = new Array(14).fill(0);
  const now = new Date();
  for (const a of allAlerts) {
    const days = Math.floor((now.getTime() - new Date(a.created_at).getTime()) / 86400000);
    const bucket = 13 - Math.min(13, days);
    if (bucket >= 0) alertVolumeByDay[bucket]++;
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Compliance Workspace<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Monitor AML operations, screening reviews, investigations, and reporting from one unified workspace.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard/cases">
              <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
                <Plus className="w-3.5 h-3.5 mr-2" />
                Create Case
              </Button>
            </Link>
            <Link href="/dashboard/reports">
              <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
                <FileText className="w-3.5 h-3.5 mr-2" />
                Go to Reports
              </Button>
            </Link>
            <Button
              className="h-10 px-6 bg-brand-lime text-black hover:bg-brand-lime/90 font-bold text-xs uppercase tracking-widest italic shadow-lg shadow-brand-lime/20"
              disabled={isRefreshing}
              onClick={() => void handleRefresh()}
            >
              {isRefreshing ? <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" /> : <RefreshCcw className="w-3.5 h-3.5 mr-2" />}
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">All Time</span>
          </div>
          <div className="ml-auto flex items-center gap-2 pr-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search entities, IDs..."
                className="h-8 w-48 pl-8 text-[10px] font-bold uppercase tracking-widest bg-background border-none shadow-none focus-visible:ring-1 focus-visible:ring-brand-lime"
              />
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg">
              <Filter className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi, i) => (
          <Link
            key={i}
            href={kpi.href}
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
            </div>
            <div>
              <div className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /> : kpi.value}
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 leading-tight">
                {kpi.label}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* 3. PRIORITY WORK QUEUE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-neutral-900 text-white">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-brand-lime" />
                Priority Queue
              </CardTitle>
              <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                Open critical/high severity alerts requiring investigative action
              </CardDescription>
            </div>
            <Link href="/dashboard/alerts">
              <Button variant="ghost" className="text-white border-white/20 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest italic h-8">
                View All Alerts
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/50 pointer-events-none">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8">Type</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">ID</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Entity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Title</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Severity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Created</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priorityQueue.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-slate-500">No critical or high-severity open alerts.</TableCell>
                  </TableRow>
                ) : priorityQueue.map((row) => (
                  <TableRow key={row.id} className="group hover:bg-muted/30 transition-colors border-b border-border/50">
                    <TableCell className="px-8 py-5">
                      <Badge variant="outline" className="text-[9px] font-bold uppercase italic tracking-widest px-2 py-0.5 rounded-md">
                        {row.channel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs font-black italic text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      {row.id.slice(0, 8)}
                    </TableCell>
                    <TableCell>
                      <span className="text-xs font-black italic tracking-tight">
                        {row.transaction_id ? row.transaction_id.slice(0, 8) : row.fraud_case_id ? row.fraud_case_id.slice(0, 8) : "—"}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-[10px] font-bold text-muted-foreground italic">
                      {row.title}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${row.severity === 'critical' ? 'bg-red-500 animate-pulse' : 'bg-orange-500'}`} />
                        <span className="text-[10px] font-black uppercase italic tracking-widest">{row.severity}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-[10px] font-black italic tracking-tight text-rose-500">{timeAgo(row.created_at)}</span>
                    </TableCell>
                    <TableCell className="px-8 text-right">
                      <Link href={`/dashboard/alerts/${row.id}`}>
                        <Button size="sm" className="h-7 text-[9px] font-black uppercase italic tracking-widest px-3 bg-neutral-900 text-white rounded-lg">
                          Open
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* 4. AML ALERTS PANEL & 5. SCREENING MATCHES PANEL */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full">
            <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">AML Alerts</CardTitle>
              </div>
              <Activity className="w-10 h-10 text-brand-lime/30" />
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8">Alert ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Entity</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Severity</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allAlerts.length === 0 ? (
                    <TableRow><TableCell colSpan={4} className="text-center py-10 text-slate-500">No alerts found.</TableCell></TableRow>
                  ) : allAlerts.slice(0, 8).map((alert) => (
                    <TableRow key={alert.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4 text-xs font-black italic text-neutral-400">{alert.id.slice(0, 8)}</TableCell>
                      <TableCell>
                        <div className="text-[11px] font-black italic tracking-tight">
                          {alert.transaction_id ? alert.transaction_id.slice(0, 8) : alert.fraud_case_id ? alert.fraud_case_id.slice(0, 8) : "—"}
                        </div>
                        <div className="text-[8px] font-bold text-muted-foreground uppercase">{alert.channel}</div>
                      </TableCell>
                      <TableCell>
                        <span className="text-[10px] font-black italic tracking-tighter uppercase">{alert.severity}</span>
                      </TableCell>
                      <TableCell className="px-8 text-right">
                        <Link href={`/dashboard/alerts/${alert.id}`}>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border border-border/50 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full">
            <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Screening Matches</CardTitle>
              </div>
              <ShieldCheck className="w-10 h-10 text-indigo-500/30" />
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8">Match Name</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Type</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Confidence</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allMatches.length === 0 ? (
                    <TableRow><TableCell colSpan={4} className="text-center py-10 text-slate-500">No screening matches found.</TableCell></TableRow>
                  ) : allMatches.slice(0, 8).map((match) => (
                    <TableRow key={match.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4">
                        <div className="text-[11px] font-black italic tracking-tight">{match.customer_id ? match.customer_id.slice(0, 8) : "Unknown"}</div>
                        <div className="text-[8px] font-bold text-muted-foreground uppercase">{match.source_list}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[8px] font-black uppercase italic tracking-widest border-indigo-500/20 text-indigo-500">
                          {match.match_type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[11px] font-black italic text-neutral-900 dark:text-white">{(match.confidence_score * 100).toFixed(0)}%</TableCell>
                      <TableCell className="px-8 text-right">
                        <Link href={`/dashboard/screening/matches/${match.id}`}>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border border-border/50 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 6. HIGH-RISK CUSTOMERS & 7. INVESTIGATIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[48px] border-border/50 shadow-2xl bg-white dark:bg-neutral-900 overflow-hidden">
            <CardHeader className="p-10 pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">High-Risk Customers</CardTitle>
                <Users className="w-8 h-8 text-orange-500/40" />
              </div>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest italic mt-2">Entities with elevated risk profiles</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ScrollArea className="h-[400px]">
                <div className="space-y-1 px-4 pb-4">
                  {highRiskCustomers.length === 0 ? (
                    <p className="text-center py-10 text-sm text-slate-400 italic">No high-risk customers found.</p>
                  ) : highRiskCustomers.slice(0, 10).map((cust) => {
                    const displayName = (cust.first_name || cust.last_name)
                      ? `${cust.first_name || ''} ${cust.last_name || ''}`.trim()
                      : (cust.label || cust.external_id || 'Unknown');
                    return (
                    <Link key={cust.id} href={`/dashboard/users/${cust.id}`} className="flex items-center justify-between p-5 rounded-3xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center font-black italic text-sm group-hover:bg-brand-lime group-hover:text-black transition-colors">
                          {displayName.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-black italic tracking-tight text-[14px]">{displayName}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={`text-[8px] font-black italic tracking-widest uppercase h-4 leading-none ${
                               cust.risk_tier === 'critical' ? 'bg-rose-500' : 'bg-orange-500'
                            }`}>
                              {cust.risk_tier}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-black italic tracking-tighter leading-none">{cust.open_alerts_count}</span>
                          <span className="text-[8px] font-black text-muted-foreground uppercase mt-1">Open Alerts</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  );})}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-[48px] border-border/50 shadow-2xl bg-white dark:bg-neutral-900 overflow-hidden">
            <CardHeader className="p-10 pb-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Open Investigations</CardTitle>
                <Activity className="w-8 h-8 text-brand-lime/40" />
              </div>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest italic mt-2">Active compliance development cases</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <ScrollArea className="h-[400px]">
                <div className="space-y-4 px-4 pb-4">
                  {openCases.length === 0 ? (
                    <p className="text-center py-10 text-sm text-slate-400 italic">No open investigations.</p>
                  ) : openCases.slice(0, 8).map((caseItem) => (
                    <Link key={caseItem.id} href={`/dashboard/cases/${caseItem.id}`} className="block p-6 rounded-3xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-[10px] font-black italic text-brand-lime/80">{caseItem.id.slice(0, 8)}</span>
                          <h4 className="text-[14px] font-black italic uppercase tracking-tighter mt-1">{caseItem.title || "Untitled Case"}</h4>
                        </div>
                        <Badge className={`text-[9px] font-black italic tracking-widest uppercase ${
                          caseItem.priority <= 1 ? 'bg-rose-500' : caseItem.priority === 2 ? 'bg-orange-500' : 'bg-brand-lime text-black'
                        }`}>
                          P{caseItem.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <span className="text-[10px] font-bold text-muted-foreground italic uppercase">{caseItem.status}</span>
                        <span className="text-[9px] text-muted-foreground italic">{timeAgo(caseItem.created_at)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 8. REPORTING QUEUE & 9. ALERT VOLUME */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <section className="xl:col-span-2">
          <Card className="rounded-[40px] border-border/50 shadow-2xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-8 border-b border-border/50 bg-neutral-900 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Regulatory Reporting Queue</CardTitle>
                  <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                    Reports not yet submitted
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-white/5 border-white/10 text-[8px] font-black uppercase italic tracking-widest text-white/60">
                  {pendingReports.length} Pending
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Type</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Created</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                   {pendingReports.length === 0 ? (
                     <TableRow><TableCell colSpan={5} className="text-center py-10 text-slate-500">No pending reports.</TableCell></TableRow>
                   ) : pendingReports.slice(0, 8).map((report) => (
                    <TableRow key={report.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-5 text-xs font-black italic text-neutral-400">{report.id.slice(0, 8)}</TableCell>
                      <TableCell>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase italic">{report.report_type}</span>
                      </TableCell>
                      <TableCell className="text-[11px] font-black italic tracking-tight">{report.status}</TableCell>
                      <TableCell>
                        <span className="text-[10px] font-black italic text-neutral-900 dark:text-white">{timeAgo(report.created_at)}</span>
                      </TableCell>
                      <TableCell className="px-8 text-right">
                        <Link href={`/dashboard/reports/${report.id}`}>
                          <Button className="h-7 text-[9px] font-black uppercase italic tracking-widest px-4 bg-brand-lime text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            Open
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                   ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl h-full flex flex-col bg-muted/20">
            <CardHeader className="p-8 border-b border-border/50">
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Alert Volume (14d)</CardTitle>
               <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic">Daily alert creation count</CardDescription>
            </CardHeader>
            <CardContent className="p-8 flex-1 flex items-end gap-1">
               {alertVolumeByDay.every((c) => c === 0) ? (
                 <p className="w-full text-center text-sm text-neutral-400 italic self-center">No alert history yet.</p>
               ) : alertVolumeByDay.map((count, i) => {
                 const max = Math.max(...alertVolumeByDay, 1);
                 return (
                   <div key={i} className="flex-1 bg-indigo-500/10 rounded-full relative group h-32">
                      <div className="absolute bottom-0 inset-x-0 bg-brand-lime rounded-full transition-all" style={{ height: `${Math.max(4, (count / max) * 100)}%` }} />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{count}</div>
                   </div>
                 );
               })}
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 10. SLA & WORKLOAD */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-[32px] border-border/50 p-6 bg-rose-500 text-white">
          <h4 className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Critical Alerts Open</h4>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-4xl font-black italic tracking-tighter">{criticalAlerts.length}</span>
            <div className="text-right">
              <div className="text-[8px] font-black uppercase italic leading-none">Open Alerts</div>
              <div className="text-[8px] font-bold uppercase mt-1 opacity-60">Severity: High/Critical</div>
            </div>
          </div>
        </Card>

        <Card className="rounded-[32px] border-border/50 p-6 bg-neutral-900 text-white">
          <h4 className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Total Alerts</h4>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-4xl font-black italic tracking-tighter">{allAlerts.length}</span>
            <div className="text-right">
              <div className="text-[8px] font-black uppercase italic text-brand-lime leading-none">{openAlerts.length} open</div>
              <div className="text-[8px] font-bold uppercase mt-1 opacity-60">All time</div>
            </div>
          </div>
        </Card>

        <Card className="rounded-[32px] border-border/50 p-6 bg-white dark:bg-neutral-900 xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
             <h4 className="text-[10px] font-black uppercase tracking-widest italic">Case Assignment</h4>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-2">
                <div className="text-3xl font-black italic">{openCases.filter((c) => c.assignee_user_id).length}</div>
                <div className="text-[9px] font-black uppercase italic text-muted-foreground">Assigned</div>
             </div>
             <div className="space-y-2">
                <div className="text-3xl font-black italic text-rose-500">{openCases.filter((c) => !c.assignee_user_id).length}</div>
                <div className="text-[9px] font-black uppercase italic text-muted-foreground">Unassigned</div>
             </div>
          </div>
        </Card>
      </section>

      {/* 11. QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-4">
          <Card className="rounded-[40px] border-border/50 bg-neutral-900 text-white p-8 shadow-3xl">
             <h4 className="text-xl font-black italic uppercase tracking-tighter mb-6">Quick Actions</h4>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "View Alerts", href: "/dashboard/alerts", color: "bg-rose-500/20 hover:bg-rose-500/30" },
                  { label: "View Cases", href: "/dashboard/cases", color: "bg-indigo-500/20 hover:bg-indigo-500/30" },
                  { label: "Screening Center", href: "/dashboard/screening", color: "bg-emerald-500/20 hover:bg-emerald-500/30" },
                  { label: "Regulatory Reports", href: "/dashboard/reports", color: "bg-brand-lime/20 hover:bg-brand-lime/30" },
                ].map((action, i) => (
                  <Link key={i} href={action.href} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-left transition-all ${action.color}`}>
                     <span className="text-[10px] font-black uppercase italic tracking-widest">{action.label}</span>
                  </Link>
                ))}
             </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
