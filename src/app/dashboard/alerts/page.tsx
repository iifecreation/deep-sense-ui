'use client';

import { 
  AlertCircle, 
  Search, 
  ArrowRight,
  ShieldAlert,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  UserCheck,
  ChevronRight,
  RefreshCw,
  AlertTriangle,
  MoreHorizontal,
  ShieldCheck,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useAlerts } from "@/hooks/use-alerts";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function AlertsCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState<string | null>(null);
  const { data: alerts, isLoading, isError, error, refetch } = useAlerts({ 
    query: { page: 1, page_size: 50 },
    filters: severityFilter ? { severity: severityFilter } : {}
  });

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'critical': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'high': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'low': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  const filteredAlerts = alerts?.filter((alert: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      alert.id?.toLowerCase().includes(query) ||
      alert.title?.toLowerCase().includes(query) ||
      alert.description?.toLowerCase().includes(query) ||
      alert.customer_id?.toLowerCase().includes(query)
    );
  }) || [];

  // Derived Analytics Data
  const criticalCount = alerts?.filter((a: any) => a.severity === 'critical').length || 0;
  const highCount = alerts?.filter((a: any) => a.severity === 'high').length || 0;
  const mediumCount = alerts?.filter((a: any) => a.severity === 'medium').length || 0;
  const totalCount = alerts?.length || 1;

  const severityData = [
    { label: 'Critical', value: criticalCount, color: 'bg-red-500' },
    { label: 'High', value: highCount, color: 'bg-orange-500' },
    { label: 'Medium', value: mediumCount, color: 'bg-amber-500' },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Alerts Queue</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
              <CardContent className="p-4">
                <div className="h-20 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Alerts Queue</h1>
        </div>
        <Card className="rounded-2xl shadow-sm border border-red-200 bg-red-50/50 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load alerts</p>
                <p className="text-sm text-red-700">{error?.message || 'Please check your connection and try again.'}</p>
              </div>
            </div>
            <Button onClick={() => refetch()} className="mt-4" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Alerts Queue
          </h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-blue-500" />
            Situational risk feed requiring analyst triage.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full shadow-sm">
            Batch Acknowledge
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm rounded-full text-white">
            <UserCheck className="w-4 h-4 mr-2" /> Start Triage
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
              <AlertCircle className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Alerts</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{alerts?.length || 0}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
              <Clock className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Critical Priority</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{criticalCount}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
              <ShieldAlert className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">High Risk</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{highCount}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Alerts Table */}
        <Card className="xl:col-span-3 rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden">
          <div className="p-5 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search alert title or ID..." 
                className="pl-9 bg-white/50 dark:bg-slate-900/50 rounded-full text-sm border-slate-200/60 dark:border-slate-800/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button 
                variant={severityFilter === 'critical' ? 'default' : 'outline'} 
                size="sm" 
                className={`h-9 px-4 text-xs font-semibold rounded-full ${severityFilter === 'critical' ? 'bg-red-600 hover:bg-red-700 text-white border-red-600' : ''}`}
                onClick={() => setSeverityFilter(severityFilter === 'critical' ? null : 'critical')}
              >
                <Filter className="w-3.5 h-3.5 mr-2" /> Critical
              </Button>
              <Button 
                variant={severityFilter === 'high' ? 'default' : 'outline'} 
                size="sm" 
                className={`h-9 px-4 text-xs font-semibold rounded-full ${severityFilter === 'high' ? 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500' : ''}`}
                onClick={() => setSeverityFilter(severityFilter === 'high' ? null : 'high')}
              >
                <Filter className="w-3.5 h-3.5 mr-2" /> High
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                  <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6 w-[300px]">Alert Title</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Risk Score</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Severity</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Time</TableHead>
                  <TableHead className="text-right pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <ShieldCheck className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
                      <p className="text-sm font-medium text-slate-500">No alerts found</p>
                    </TableCell>
                  </TableRow>
                ) : filteredAlerts.map((alert: any) => (
                  <TableRow key={alert.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                    <TableCell className="pl-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-blue-600 transition-colors">{alert.title}</span>
                        <span className="text-[10px] font-mono text-slate-400">{alert.id}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded w-fit">
                        0.{(Math.random() * 99).toFixed(0)} {/* Mocking risk score for UI density */}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border ${getRiskColor(alert.severity || 'low')}`}>
                        {alert.severity || 'low'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500 font-medium">
                      {alert.created_at ? formatTimeAgo(alert.created_at) : 'N/A'}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                          Approve
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-xl shadow-xl">
                            <DropdownMenuLabel className="text-xs">Alert Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-xs cursor-pointer">
                              <Link href={`/dashboard/alerts/${alert.id}`} className="flex w-full">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50">Decline Event</DropdownMenuItem>
                            <DropdownMenuItem className="text-xs cursor-pointer">Escalate to Case</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl p-6 space-y-5">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              Severity Distribution
            </h4>
            <div className="space-y-4">
              {severityData.map((sev, i) => {
                const percentage = totalCount > 0 ? (sev.value / totalCount) * 100 : 0;
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      <span>{sev.label}</span>
                      <span className="text-slate-900 dark:text-slate-100">{sev.value}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${sev.color}`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Quick Actions</h4>
            </div>
            <div className="space-y-3">
              <Button size="sm" variant="outline" className="w-full text-xs font-bold border-slate-200/60 dark:border-slate-800/60 rounded-xl justify-start shadow-sm bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Filter className="w-4 h-4 mr-3 text-slate-400" /> Create Suppression Rule
              </Button>
              <Button size="sm" variant="outline" className="w-full text-xs font-bold border-slate-200/60 dark:border-slate-800/60 rounded-xl justify-start shadow-sm bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Download className="w-4 h-4 mr-3 text-slate-400" /> Export Alerts CSV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
