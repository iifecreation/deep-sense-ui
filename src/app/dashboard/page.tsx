'use client';

import { 
  AlertCircle, 
  CheckCircle2, 
  Users, 
  ArrowUpRight, 
  ArrowRight,
  Plus,
  RefreshCw,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useDashboardMetrics } from "@/hooks/use-analytics";
import { useAlerts } from "@/hooks/use-alerts";
import { useEffect, useState } from "react";

export default function DashboardOverview() {
  const { data: metrics, isLoading: metricsLoading, isError: metricsError, refetch: refetchMetrics } = useDashboardMetrics();
  const { data: alerts, isLoading: alertsLoading, isError: alertsError, refetch: refetchAlerts } = useAlerts({ query: { page: 1, page_size: 5 }, filters: { severity: 'high' } });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const handleRefresh = () => {
    refetchMetrics();
    refetchAlerts();
    setLastUpdated(new Date());
  };

  useEffect(() => {
    setLastUpdated(new Date());
  }, [metrics, alerts]);

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
      case 'critical': return 'bg-red-900 text-white';
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-amber-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  if (metricsLoading && alertsLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border">
              <CardContent className="p-6">
                <div className="h-20 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (metricsError || alertsError) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load dashboard data</p>
                <p className="text-sm text-red-700">Please check your connection and try again.</p>
              </div>
            </div>
            <Button onClick={handleRefresh} className="mt-4" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time risk monitoring and operational control.
            {lastUpdated && <span className="ml-2">Last updated: {lastUpdated.toLocaleTimeString()}</span>}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-sm font-semibold" onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </Button>
          <Button variant="outline" className="text-sm font-semibold">Generate Report</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
            <Plus className="w-4 h-4 mr-2" /> Create Case
          </Button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm border border-red-100 bg-red-50/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Open Alerts</CardTitle>
            <AlertCircle className="text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{(metrics as any)?.total_alerts || 0}</div>
            <p className="text-xs text-slate-500 mt-1">Requires immediate review</p>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-blue-100 bg-blue-50/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Cases</CardTitle>
            <CheckCircle2 className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{(metrics as any)?.active_cases || 0}</div>
            <p className="text-xs text-slate-500 mt-1">{(metrics as any)?.unresolved_cases || 0} unresolved</p>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-amber-100 bg-amber-50/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">High-Risk Alerts</CardTitle>
            <Users className="text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{(metrics as any)?.high_risk_alerts || 0}</div>
            <p className="text-xs text-slate-500 mt-1">Critical attention needed</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Table Section */}
        <Card className="xl:col-span-2 rounded-xl shadow-sm border bg-white">
          <CardHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-slate-100">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Priority Alerts</CardTitle>
              <CardDescription className="text-xs">Highest risk signals requiring analyst review.</CardDescription>
            </div>
            <Link href="/dashboard/alerts" className="text-blue-600 text-xs font-semibold flex items-center hover:underline">
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Alert ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Description</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Level</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</TableHead>
                <TableHead className="text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alertsLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div className="flex items-center justify-center">
                      <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                      Loading alerts...
                    </div>
                  </TableCell>
                </TableRow>
              ) : alerts && alerts.length > 0 ? (
                alerts.map((alert: any) => (
                  <TableRow key={alert.id} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                    <TableCell className="text-xs font-semibold text-slate-400 pl-6">{alert.id}</TableCell>
                    <TableCell className="text-xs font-bold text-slate-900 max-w-[200px] truncate">{alert.description || 'No description'}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${getRiskColor(alert.severity || 'low')}`}>
                        {alert.severity || 'low'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500 font-medium">{alert.created_at ? formatTimeAgo(alert.created_at) : 'N/A'}</TableCell>
                    <TableCell className="text-right pr-6">
                      <Link href={`/dashboard/alerts/${alert.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <p className="text-sm text-slate-500">No high-priority alerts found</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>

        {/* Intelligence Activity */}
        <Card className="rounded-xl shadow-sm border bg-white flex flex-col">
          <CardHeader className="px-6 py-4 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900">System Activity</CardTitle>
            <CardDescription className="text-xs">Operational ledger and audit stream.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[400px]">
            <div className="text-sm text-slate-500 text-center py-8">
              Activity feed coming soon
            </div>
          </CardContent>
          <div className="p-4 border-t border-slate-100 mt-auto">
            <Link href="/dashboard/audit">
              <Button variant="outline" className="w-full text-xs font-bold h-9 bg-slate-50 hover:bg-slate-100 border-slate-200">
                Full System Trace
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
