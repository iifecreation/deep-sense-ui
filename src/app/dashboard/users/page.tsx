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

export default function CustomerRegistry() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Registry</h1>
          <p className="text-sm text-slate-500 mt-1">Managed entities, identity trust scores, and risk profiles.</p>
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
        {[
          { label: "Total Entities", value: "14.2M", subtext: "Verified identities", icon: <Users className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "High-Risk Segment", value: "1,842", subtext: "Requires manual review", icon: <UserMinus className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Identity Trust Avg", value: "98.4%", subtext: "Confidence interval", icon: <UserCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
        ].map((kpi, i) => (
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
            <Input placeholder="Search Customer ID, Email, Name..." className="pl-9 bg-white text-sm" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Filter className="w-4 h-4 mr-2" /> All Risk Tiers
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
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
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 h-12">Last Activity</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-right h-12">Volume (30d)</TableHead>
              <TableHead className="text-right pr-6 h-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "alex_reed", e: "alex@deepsense.ai", s: 12, st: "Trusted", t: "2m ago", v: "$42,800.00", initial: "AR" },
              { id: "unknown_8102", e: "risk_shadow@tor.io", s: 94, st: "Flagged", t: "14m ago", v: "$1,200,000.00", initial: "US" },
              { id: "mike.jones", e: "mike.jones@gmail.com", s: 22, st: "Trusted", t: "1h ago", v: "$150.00", initial: "MJ" },
              { id: "user_49201", e: "cluster_seed@net.io", s: 82, st: "Suspended", t: "3h ago", v: "$542,200.00", initial: "U4" },
              { id: "e_volkov", e: "elena.v@globalsecure.io", s: 64, st: "Review", t: "5h ago", v: "$8,450.00", initial: "EV" },
            ].map((row, i) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-100">
                      <AvatarFallback className="text-[11px] font-bold bg-slate-50 text-slate-500">{row.initial}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{row.id}</span>
                      <span className="text-[10px] font-medium text-slate-400 lowercase">{row.e}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 border-none uppercase text-[10px] font-bold ${
                    row.s > 80 ? 'bg-red-500 text-white' : row.s > 40 ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                  }`}>
                    {row.s}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 border-none uppercase text-[10px] font-bold ${
                    row.st === 'Trusted' ? 'bg-emerald-100 text-emerald-700' : 
                    row.st === 'Flagged' ? 'bg-amber-100 text-amber-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {row.st}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs font-medium text-slate-500">{row.t}</TableCell>
                <TableCell className="text-right text-xs font-bold text-slate-900 pr-10">{row.v}</TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/users/${row.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Showing 5 of 14.2M Entities</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-400">Previous</Button>
            <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-400">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
