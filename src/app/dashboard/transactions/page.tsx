'use client';

import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  Download,
  AlertCircle,
  FileText,
  Activity,
  History,
  ArrowDownLeft,
  Calendar,
  Layers,
  MoreVertical,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useTransactions } from "@/hooks/use-transactions";
import { useState } from "react";
import Link from "next/link";

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const { data: transactions, isLoading, isError, error, refetch } = useTransactions({ 
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

  const formatAmount = (amount: string, currency: string = 'USD') => {
    const num = parseFloat(amount);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
  };

  const getScoreColor = (score: number) => {
    if (score > 80) return 'text-red-600';
    if (score > 40) return 'text-amber-500';
    return 'text-emerald-500';
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-emerald-100 text-emerald-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'pending': return 'bg-blue-100 text-blue-700';
      case 'under_review': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const filteredTransactions = transactions?.filter((t: any) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      t.id?.toLowerCase().includes(query) ||
      t.customer_id?.toLowerCase().includes(query)
    );
  }) || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Transactions</h1>
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
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Transactions</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load transactions</p>
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
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Transactions.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Real-time inspection of institutional value flows</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold">
            Run Analysis
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm border bg-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <Activity className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Transactions</p>
              <div className="text-xl font-bold text-slate-900">{transactions?.length || 0}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border bg-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <AlertCircle className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">High Risk</p>
              <div className="text-xl font-bold text-slate-900">
                {transactions?.filter((t: any) => t.final_score > 80).length || 0}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border bg-white">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
              <Layers className="text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pending Review</p>
              <div className="text-xl font-bold text-slate-900">
                {transactions?.filter((t: any) => t.decision === 'review').length || 0}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table Section */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        {/* Table Filters */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search reference, customer..." 
              className="pl-9 bg-white text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button 
              variant={statusFilter === 'approved' ? 'default' : 'outline'} 
              size="sm" 
              className="h-9 px-3 text-xs font-semibold"
              onClick={() => setStatusFilter(statusFilter === 'approved' ? null : 'approved')}
            >
              <Filter className="w-4 h-4 mr-2" /> Approved
            </Button>
            <Button 
              variant={statusFilter === 'rejected' ? 'default' : 'outline'} 
              size="sm" 
              className="h-9 px-3 text-xs font-semibold"
              onClick={() => setStatusFilter(statusFilter === 'rejected' ? null : 'rejected')}
            >
              <Filter className="w-4 h-4 mr-2" /> Rejected
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Reference / Customer</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Amount</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Decision</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <p className="text-sm text-slate-500">No transactions found</p>
                </TableCell>
              </TableRow>
            ) : filteredTransactions.map((tx: any, i: number) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-slate-400">{tx.id}</span>
                    <span className="text-xs font-bold text-slate-900">{tx.customer_id || 'Unknown'}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-bold text-slate-900">
                  {formatAmount(tx.amount || '0', tx.currency || 'USD')}
                </TableCell>
                <TableCell>
                  <span className={`text-sm font-bold ${getScoreColor(tx.final_score || 0)}`}>
                    {tx.final_score || 0}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${getStatusColor(tx.decision || 'unknown')}`}>
                    {tx.decision || 'Unknown'}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-slate-500 font-medium">
                  {tx.created_at ? formatTimeAgo(tx.created_at) : 'N/A'}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/transactions/${tx.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
