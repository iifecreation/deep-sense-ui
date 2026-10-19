"use client";

import { 
  Users, 
  Search, 
  ChevronRight,
  Filter,
  Plus,
  RefreshCcw,
  Download,
  UserCheck,
  UserMinus,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useCustomers } from "@/hooks/use-customers";
import { useState } from "react";

const RISK_TIERS = ["critical", "high", "medium", "low"] as const;

export default function CustomerRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const [riskTierFilter, setRiskTierFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 25;
  const { data: customers, isLoading, isError, refetch } = useCustomers({
    query: { search: searchQuery, page, page_size: pageSize },
    filters: riskTierFilter ? { risk_tier: riskTierFilter } : {},
  });

  const allCustomers = customers || [];
  const highRiskCount = allCustomers.filter((c: any) => c.risk_tier === "high" || c.risk_tier === "critical").length;
  const flaggedCount = allCustomers.filter((c: any) => ["under_review", "watchlisted", "restricted"].includes((c.status || "").toLowerCase())).length;

  const kpis = [
    { label: "Total Customers", value: allCustomers.length, subtext: "Managed entities", icon: <UserCheck className="w-5 h-5 text-blue-500" />, color: "border-slate-100" },
    { label: "High Risk", value: highRiskCount, subtext: "Risk tier high/critical", icon: <AlertCircle className="w-5 h-5 text-red-500" />, color: "border-red-100" },
    { label: "Flagged / Review", value: flaggedCount, subtext: "Requires attention", icon: <UserMinus className="w-5 h-5 text-amber-500" />, color: "border-amber-100" },
  ];

  const getStatusColor = (status: string) => {
    switch ((status || '').toLowerCase()) {
      case 'active':
        return 'bg-emerald-100 text-emerald-700 border-none';
      case 'under_review':
      case 'watchlisted':
        return 'bg-amber-100 text-amber-700 border-none';
      case 'restricted':
      case 'blocked':
        return 'bg-red-100 text-red-700 border-none';
      default:
        return 'bg-slate-100 text-slate-700 border-none';
    }
  };

  // risk_score is a 0-1 float; convert to a percentage for display/thresholds.
  const getRiskColor = (score: number) => {
    if (score > 0.8) return 'bg-red-500 text-white border-none';
    if (score > 0.4) return 'bg-amber-500 text-white border-none';
    return 'bg-emerald-500 text-white border-none';
  };

  if (isLoading) {
    return (
      <div className="space-y-6 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Customer Registry.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border bg-white h-24 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Customer Registry.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Managed entities, identity trust scores, and risk profiles</p>
        </div>
        <div className="flex gap-2">
          <Button disabled variant="outline" size="sm" className="font-semibold opacity-50">
            <Download className="w-4 h-4 mr-2" /> Export (not yet available)
          </Button>
          <Button disabled size="sm" className="font-semibold shadow-sm opacity-50">
            <Plus className="w-4 h-4 mr-2" /> Add Customer (not yet available)
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex items-center gap-4">
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

      {/* Customer Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search Customer ID, Email, Name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white text-sm" 
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2 h-9 px-3 text-xs font-semibold border rounded-md">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={riskTierFilter || ''}
                onChange={(e) => { setRiskTierFilter(e.target.value || null); setPage(1); }}
                className="bg-transparent outline-none text-xs font-semibold capitalize"
              >
                <option value="">All Risk Tiers</option>
                {RISK_TIERS.map((tier) => (
                  <option key={tier} value={tier}>{tier}</option>
                ))}
              </select>
            </div>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold" onClick={refetch}>
               <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6 h-12">Customer / Entity</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center h-12">Risk Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center h-12">Status</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 h-12">Created At</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-right h-12">Email</TableHead>
              <TableHead className="text-right pr-6 h-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers && customers.length > 0 ? customers.map((row: any) => (
              <TableRow key={row.id} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-100">
                      <AvatarFallback className="text-[11px] font-bold bg-slate-50 text-slate-500">
                        {row.first_name ? row.first_name.charAt(0) : 'U'}
                        {row.last_name ? row.last_name.charAt(0) : ''}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">
                        {row.first_name || row.last_name ? `${row.first_name || ''} ${row.last_name || ''}`.trim() : (row.label || 'Unknown')}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 lowercase">{row.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 uppercase text-[10px] font-bold ${getRiskColor(row.risk_score || 0)}`}>
                    {row.risk_score != null ? `${Math.round(row.risk_score * 100)}%` : 'N/A'}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 uppercase text-[10px] font-bold ${getStatusColor(row.status)}`}>
                    {row.status || 'Active'}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs font-medium text-slate-500">{row.created_at ? new Date(row.created_at).toLocaleDateString() : 'Unknown'}</TableCell>
                <TableCell className="text-right text-xs font-medium text-slate-500 pr-10">{row.email || 'N/A'}</TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/users/${row.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-slate-500">No customers found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Showing {customers?.length || 0} Entities &middot; Page {page}</p>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-400 disabled:opacity-30"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
            >
              Previous
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-400 disabled:opacity-30"
              onClick={() => setPage((p) => p + 1)}
              disabled={(customers?.length || 0) < pageSize}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
