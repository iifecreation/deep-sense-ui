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
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useAlerts } from "@/hooks/use-alerts";
import { useState } from "react";
import Link from "next/link";

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
      case 'critical': return 'bg-red-900 text-white';
      case 'high': return 'bg-red-100 text-red-600';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const filteredAlerts = alerts?.filter((alert: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      alert.id?.toLowerCase().includes(query) ||
      alert.description?.toLowerCase().includes(query) ||
      alert.customer_id?.toLowerCase().includes(query)
    );
  }) || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Alerts Center</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border">
              <CardContent className="p-4">
                <div className="h-20 bg-slate-100 animate-pulse rounded" />
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
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Alerts Center</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Alerts Center</h1>
          <p className="text-sm text-slate-500 mt-1">Situational risk feed and incident response gateway.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            Batch Acknowledge
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <UserCheck className="w-4 h-4 mr-2" /> Start Triage
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm border border-red-100 bg-red-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <ShieldAlert className="text-red-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Alerts</p>
              <div className="text-xl font-bold text-slate-900">{alerts?.length || 0}</div>
              <p className="text-[10px] text-slate-400 font-medium">Total alerts</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-blue-100 bg-blue-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <Clock className="text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Critical</p>
              <div className="text-xl font-bold text-slate-900">
                {alerts?.filter((a: any) => a.severity === 'critical').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">High priority</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-emerald-100 bg-emerald-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <CheckCircle2 className="text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">High Risk</p>
              <div className="text-xl font-bold text-slate-900">
                {alerts?.filter((a: any) => a.severity === 'high').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Requires attention</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Alerts Table */}
        <Card className="xl:col-span-3 rounded-xl shadow-sm border bg-white overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search alerts, customers..." 
                className="pl-9 bg-white text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button 
                variant={severityFilter === 'critical' ? 'default' : 'outline'} 
                size="sm" 
                className="h-9 px-3 text-xs font-semibold"
                onClick={() => setSeverityFilter(severityFilter === 'critical' ? null : 'critical')}
              >
                <Filter className="w-4 h-4 mr-2" /> Critical
              </Button>
              <Button 
                variant={severityFilter === 'high' ? 'default' : 'outline'} 
                size="sm" 
                className="h-9 px-3 text-xs font-semibold"
                onClick={() => setSeverityFilter(severityFilter === 'high' ? null : 'high')}
              >
                <Filter className="w-4 h-4 mr-2" /> High
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Alert ID / Signal</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Description</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Severity</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</TableHead>
                <TableHead className="text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAlerts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <p className="text-sm text-slate-500">No alerts found</p>
                  </TableCell>
                </TableRow>
              ) : filteredAlerts.map((alert: any) => (
                <TableRow key={alert.id} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                  <TableCell className="pl-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-medium text-slate-400">{alert.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-bold text-slate-900 max-w-[300px] truncate">
                    {alert.description || 'No description'}
                  </TableCell>
                  <TableCell>
                    <Badge className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${getRiskColor(alert.severity || 'low')}`}>
                      {alert.severity || 'low'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 font-medium">
                    {alert.created_at ? formatTimeAgo(alert.created_at) : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Link href={`/dashboard/alerts/${alert.id}`}>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Severity Distribution</h4>
            <div className="space-y-4">
              {[
                { label: "Critical", value: alerts?.filter((a: any) => a.severity === 'critical').length || 0, color: "bg-red-500" },
                { label: "High", value: alerts?.filter((a: any) => a.severity === 'high').length || 0, color: "bg-red-400" },
                { label: "Medium", value: alerts?.filter((a: any) => a.severity === 'medium').length || 0, color: "bg-amber-400" },
                { label: "Low", value: alerts?.filter((a: any) => a.severity === 'low').length || 0, color: "bg-emerald-400" },
              ].map((sev, i) => {
                const total = alerts?.length || 1;
                const percentage = (sev.value / total) * 100;
                return (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>{sev.label}</span>
                      <span className="text-slate-900">{sev.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${sev.color}`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">Quick Actions</h4>
            </div>
            <div className="space-y-2">
              <Button size="sm" variant="outline" className="w-full text-xs font-bold border-slate-200 justify-start">
                <Filter className="w-4 h-4 mr-2" /> Create Suppression Rule
              </Button>
              <Button size="sm" variant="outline" className="w-full text-xs font-bold border-slate-200 justify-start">
                <Download className="w-4 h-4 mr-2" /> Export Alerts
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
