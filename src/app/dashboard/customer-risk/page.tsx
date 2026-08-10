'use client';

import { 
  ShieldAlert, 
  Search, 
  Filter, 
  Download,
  Plus,
  RefreshCcw,
  Users,
  AlertTriangle,
  TrendingUp,
  UserPlus,
  ShieldCheck,
  MoreVertical,
  PieChart,
  ArrowRight,
  ChevronRight,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useCustomers } from "@/hooks/use-customers";
import { useState } from "react";

export default function CustomerRiskRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const [riskTierFilter, setRiskTierFilter] = useState<string | null>(null);
  const { data: customers, isLoading, isError, error, refetch } = useCustomers({ 
    query: { page: 1, page_size: 50 },
    filters: riskTierFilter ? { risk_tier: riskTierFilter } : {}
  });

  const getRiskTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'critical': return 'bg-red-900 text-white';
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-amber-500 text-white';
      case 'low': return 'bg-emerald-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const filteredCustomers = customers?.filter((c: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      c.id?.toLowerCase().includes(query) ||
      c.name?.toLowerCase().includes(query) ||
      c.type?.toLowerCase().includes(query)
    );
  }) || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Risk Registry</h1>
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
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Risk Registry</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load customers</p>
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
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Customer Risk Registry.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Institutional-wide risk profiling and lifecycle monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Add Customer
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
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">High-Risk Portfolio</p>
              <div className="text-xl font-bold text-slate-900">
                {customers?.filter((c: any) => c.risk_tier === 'high' || c.risk_tier === 'critical').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Total customers</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-blue-100 bg-blue-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <TrendingUp className="text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Critical Risk</p>
              <div className="text-xl font-bold text-slate-900">
                {customers?.filter((c: any) => c.risk_tier === 'critical').length || 0}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Immediate attention</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-amber-100 bg-amber-50/20">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <Users className="text-amber-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Customers</p>
              <div className="text-xl font-bold text-slate-900">{customers?.length || 0}</div>
              <p className="text-[10px] text-slate-400 font-medium">All tiers</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Registry Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search customers, entities..." 
              className="pl-9 bg-white text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button 
              variant={riskTierFilter === 'critical' ? 'default' : 'outline'} 
              size="sm" 
              className="h-9 px-3 text-xs font-semibold"
              onClick={() => setRiskTierFilter(riskTierFilter === 'critical' ? null : 'critical')}
            >
              <Filter className="w-4 h-4 mr-2" /> Critical
            </Button>
            <Button 
              variant={riskTierFilter === 'high' ? 'default' : 'outline'} 
              size="sm" 
              className="h-9 px-3 text-xs font-semibold"
              onClick={() => setRiskTierFilter(riskTierFilter === 'high' ? null : 'high')}
            >
              <Filter className="w-4 h-4 mr-2" /> High
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
               <RefreshCcw className="w-4 h-4 mr-2" onClick={() => refetch()} /> Refresh
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Customer / Entity</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Tier</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Type</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  <p className="text-sm text-slate-500">No customers found</p>
                </TableCell>
              </TableRow>
            ) : filteredCustomers.map((customer: any, i: number) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{customer.name || 'Unknown'}</span>
                    <div className="flex gap-2 text-[10px] font-medium text-slate-400 uppercase">
                      <span>{customer.id}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${getRiskTierColor(customer.risk_tier || 'unknown')}`}>
                    {customer.risk_tier || 'Unknown'}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-bold text-slate-900">{customer.risk_score || 0}</TableCell>
                <TableCell className="text-[11px] font-semibold text-slate-500">{customer.type || 'Unknown'}</TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/customer-risk/${customer.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Analytics Recap */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-sm border bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Portfolio Distribution</CardTitle>
              <CardDescription className="text-xs">Risk segmentation across customer layers.</CardDescription>
            </div>
            <PieChart className="w-5 h-5 text-slate-200" />
          </div>
          <div className="space-y-3">
            {([] as any[]).map((segment, i) => {
              const total = customers?.length || 1;
              const percentage = ((segment.value / total) * 100).toFixed(0);
              return (
                <div key={i} className="flex justify-between items-center text-[11px] font-medium">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${segment.color}`} />
                    <span className="text-slate-500">{segment.label}</span>
                  </div>
                  <span className="text-slate-900 font-bold">{segment.value} ({percentage}%)</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="rounded-xl shadow-sm border bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Quick Actions</CardTitle>
              <CardDescription className="text-xs">Common customer management tasks.</CardDescription>
            </div>
            <TrendingUp className="w-5 h-5 text-slate-200" />
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full text-xs font-bold border-slate-200 justify-start">
              <Filter className="w-4 h-4 mr-2" /> Bulk Risk Assessment
            </Button>
            <Button variant="outline" className="w-full text-xs font-bold border-slate-200 justify-start">
              <Download className="w-4 h-4 mr-2" /> Export Customer List
            </Button>
            <Button variant="outline" className="w-full text-xs font-bold border-slate-200 justify-start">
              <RefreshCcw className="w-4 h-4 mr-2" /> Refresh Screening Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

