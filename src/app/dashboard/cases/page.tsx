"use client";

import { 
  FolderSearch, 
  Search, 
  ChevronRight, 
  Clock, 
  User, 
  FileText,
  ShieldAlert,
  MoreVertical,
  Activity,
  CheckCircle2,
  Plus,
  Filter,
  Briefcase,
  AlertTriangle,
  History,
  Download,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useCases } from "@/hooks/use-cases";
import { useState } from "react";

export default function CaseManagementCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const { data: cases, isLoading, isError, error, refetch } = useCases({ 
    query: { page: 1, page_size: 50 },
    filters: statusFilter ? { status: statusFilter } : {}
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'in_review': return 'bg-amber-100 text-amber-700';
      case 'closed': return 'bg-slate-100 text-slate-500';
      case 'resolved': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-900 text-white';
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-amber-500 text-white';
      case 'low': return 'bg-emerald-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const filteredCases = cases?.filter((c: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      c.id?.toLowerCase().includes(query) ||
      c.title?.toLowerCase().includes(query) ||
      c.assigned_to?.toLowerCase().includes(query)
    );
  }) || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Case Management</h1>
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
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Case Management</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load cases</p>
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
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Case Management.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Forensic workflow and institutional triage hub</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export Log
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Initialize Case
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm border border-blue-100 bg-blue-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <Briefcase className="text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Open Investigations</p>
              <div className="text-xl font-bold text-slate-900">
                {cases?.filter((c: any) => c.status === 'active').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Total cases</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-red-100 bg-red-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <AlertTriangle className="text-red-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Critical</p>
              <div className="text-xl font-bold text-slate-900">
                {cases?.filter((c: any) => c.priority === 'critical').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">High priority</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-emerald-100 bg-emerald-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <History className="text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">In Review</p>
              <div className="text-xl font-bold text-slate-900">
                {cases?.filter((c: any) => c.status === 'in_review').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Pending action</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Search cases..." 
            className="pl-9 bg-white text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button 
            variant={statusFilter === 'active' ? 'default' : 'outline'} 
            size="sm" 
            className="h-9 px-3 text-xs font-semibold"
            onClick={() => setStatusFilter(statusFilter === 'active' ? null : 'active')}
          >
            <Filter className="w-4 h-4 mr-2" /> Active
          </Button>
          <Button 
            variant={statusFilter === 'in_review' ? 'default' : 'outline'} 
            size="sm" 
            className="h-9 px-3 text-xs font-semibold"
            onClick={() => setStatusFilter(statusFilter === 'in_review' ? null : 'in_review')}
          >
            <Filter className="w-4 h-4 mr-2" /> In Review
          </Button>
        </div>
      </div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCases.length === 0 ? (
          <Card className="col-span-full rounded-xl shadow-sm border bg-white">
            <CardContent className="p-12 text-center">
              <p className="text-sm text-slate-500">No cases found</p>
            </CardContent>
          </Card>
        ) : filteredCases.map((c: any, i: number) => (
          <Card key={i} className="rounded-xl shadow-sm border bg-white group hover:border-blue-200 transition-all cursor-pointer">
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={`rounded-full px-2 py-0 border-none text-[10px] font-bold uppercase ${getStatusColor(c.status || 'unknown')}`}>
                  {c.status || 'Unknown'}
                </Badge>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.id}</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {c.title || 'Untitled Case'}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  <User className="w-3.5 h-3.5" /> {c.assigned_to || 'Unassigned'}
                </div>
              </div>
              <Separator className="bg-slate-50" />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-300" /> {c.created_at ? formatTimeAgo(c.created_at) : 'N/A'}
                </div>
                <Link href={`/dashboard/cases/${c.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600">
                    View Case <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Footer */}
      <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/5">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Active Surveillance Mode</h4>
              <p className="text-[11px] text-slate-400 font-medium">Monitoring 14 sensitive clusters across EU-WEST relays.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="h-10 border-white/10 text-white bg-white/5 hover:bg-white/10 text-xs font-bold shadow-sm">
              Generate Global Report
            </Button>
            <Button size="icon" variant="outline" className="h-10 w-10 border-white/10 bg-white/5 text-white hover:bg-white/10">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
