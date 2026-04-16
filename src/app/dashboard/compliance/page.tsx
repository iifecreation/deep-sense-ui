"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Target, 
  Activity, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Filter,
  Download,
  Plus,
  RefreshCcw,
  Search,
  MoreVertical,
  ExternalLink,
  Users,
  FileText,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Calendar,
  UserPlus,
  Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function ComplianceWorkspacePage() {
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
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic group">
              <Download className="w-3.5 h-3.5 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Export Summary
            </Button>
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Create Case
            </Button>
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <FileText className="w-3.5 h-3.5 mr-2" />
              Generate Report
            </Button>
            <Button className="h-10 px-6 bg-brand-lime text-black hover:bg-brand-lime/90 font-bold text-xs uppercase tracking-widest italic shadow-lg shadow-brand-lime/20">
              <RefreshCcw className="w-3.5 h-3.5 mr-2" />
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-[10px] font-black uppercase tracking-widest italic">Date Range</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-black uppercase tracking-widest italic text-neutral-900 dark:text-white">Last 30 Days</span>
          </div>
          
          {[
            { label: "Priority", value: "All" },
            { label: "Status", value: "Pending" },
            { label: "Case Owner", value: "Me" },
            { label: "Risk Level", value: "High/Critical" },
            { label: "Alert Type", value: "All" },
            { label: "Entity Type", value: "Corporate" },
          ].map((filter, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 hover:bg-background rounded-xl transition-colors cursor-pointer group">
              <span className="text-[10px] font-black uppercase tracking-widest italic text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {filter.label}: {filter.value}
              </span>
            </div>
          ))}
          
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
        {[
          { 
            label: "Open AML Alerts", 
            value: "142", 
            delta: "+12%", 
            trend: "up", 
            icon: <AlertCircle className="text-red-500" />,
            subtext: "vs yesterday",
            href: "/dashboard/alerts"
          },
          { 
            label: "High-Risk Customers", 
            value: "842", 
            delta: "+5", 
            trend: "up", 
            icon: <Users className="text-orange-500" />,
            subtext: "new today",
            href: "/dashboard/customer-risk"
          },
          { 
            label: "Pending Screening", 
            value: "28", 
            delta: "-4", 
            trend: "down", 
            icon: <ShieldCheck className="text-indigo-500" />,
            subtext: "reviews awaiting",
            href: "/dashboard/screening"
          },
          { 
            label: "Open Investigations", 
            value: "56", 
            delta: "0", 
            trend: "neutral", 
            icon: <Activity className="text-brand-lime" />,
            subtext: "active cases",
            href: "/dashboard/cases"
          },
          { 
            label: "Reports Pending", 
            value: "14", 
            delta: "-2", 
            trend: "down", 
            icon: <FileText className="text-emerald-500" />,
            subtext: "awaiting submission",
            href: "/dashboard/reports"
          },
          { 
            label: "SLA Breaches", 
            value: "3", 
            delta: "+1", 
            trend: "up", 
            icon: <Clock className="text-rose-600 animate-pulse" />,
            subtext: "overdue items",
            href: "/dashboard/alerts?status=overdue"
          },
        ].map((kpi, i) => (
          <Link 
            key={i} 
            href={kpi.href}
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
              <Badge variant="outline" className={`text-[9px] font-black italic tracking-widest uppercase border-none px-0 ${
                kpi.trend === 'up' ? 'text-rose-500' : kpi.trend === 'down' ? 'text-emerald-500' : 'text-muted-foreground'
              }`}>
                {kpi.delta}
              </Badge>
            </div>
            <div>
              <div className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none">
                {kpi.value}
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 leading-tight">
                {kpi.label}
              </div>
              <div className="text-[8px] font-medium text-muted-foreground uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view details →
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
                <Flag className="w-5 h-5 text-brand-lime" />
                Priority Queue
              </CardTitle>
              <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                Most urgent items requiring investigative action
              </CardDescription>
            </div>
            <Button variant="ghost" className="text-white border-white/20 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest italic h-8">
              View All Tasks
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/50 pointer-events-none">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8">Item Type</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">ID</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Entity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Reason</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Risk</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Due By</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: "AML Alert", id: "AL-8821", entity: "Global Trade Solutions", reason: "Structuring threshold exceeded", risk: "High", due: "2h 15m", color: "text-orange-500" },
                  { type: "Screening", id: "SC-1042", entity: "Vladislav Orlov", reason: "Sanctions list match (SDN)", risk: "Critical", due: "45m", color: "text-red-500" },
                  { type: "Investigation", id: "CS-4029", entity: "Nexus Crypto OTC", reason: "High-volume cross-border flow", risk: "Medium", due: "1d 4h", color: "text-amber-500" },
                  { type: "Report Draft", id: "RP-0091", entity: "SAR #44921", reason: "Filing deadline tomorrow", risk: "High", due: "5h 20m", color: "text-orange-500" },
                  { type: "Onboarding", id: "OB-5510", entity: "Silk Road Logistics", reason: "UBO verification failed", risk: "High", due: "8h 10m", color: "text-orange-500" },
                ].map((row, i) => (
                  <TableRow key={i} className="group hover:bg-muted/30 transition-colors border-b border-border/50 cursor-pointer">
                    <TableCell className="px-8 py-5">
                      <Badge variant="outline" className="text-[9px] font-bold uppercase italic tracking-widest px-2 py-0.5 rounded-md">
                        {row.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs font-black italic text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      {row.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-xs font-black italic tracking-tight">{row.entity}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate text-[10px] font-bold text-muted-foreground italic">
                      {row.reason}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${row.risk === 'Critical' ? 'bg-red-500 animate-pulse' : row.risk === 'High' ? 'bg-orange-500' : 'bg-amber-500'}`} />
                        <span className={`text-[10px] font-black uppercase italic tracking-widest ${row.color}`}>
                          {row.risk}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black italic tracking-tight text-rose-500">{row.due}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-8 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" className="h-7 text-[9px] font-black uppercase italic tracking-widest px-3 bg-neutral-900 text-white rounded-lg">
                          Open
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-7 w-7 rounded-lg">
                              <MoreVertical className="w-3.5 h-3.5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Assign</DropdownMenuItem>
                            <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Escalate</DropdownMenuItem>
                            <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Create Case</DropdownMenuItem>
                            <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Mark Reviewed</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* 4. AML ALERTS PANEL & 5. SCREENING MATCHES PANEL (Using Tabs for better space management) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full">
            <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">AML Alerts</CardTitle>
                <div className="flex gap-4 mt-4">
                  {["All", "Suspicious", "Structuring", "Risk"].map((t) => (
                    <button key={t} className="text-[9px] font-black uppercase tracking-widest italic text-muted-foreground hover:text-neutral-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-brand-lime pb-1">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <Activity className="w-10 h-10 text-brand-lime/30" />
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8">Alert ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Entity</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Risk Score</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "AL-7741", entity: "Dmitry Volkov", score: "92/100", type: "Structuring" },
                    { id: "AL-7742", entity: "Green Oasis Inc", score: "78/100", type: "SAR Trigger" },
                    { id: "AL-7743", entity: "Sarah O'Connell", score: "85/100", type: "Cross-Border" },
                  ].map((alert, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4 text-xs font-black italic text-neutral-400">{alert.id}</TableCell>
                      <TableCell>
                        <div className="text-[11px] font-black italic tracking-tight">{alert.entity}</div>
                        <div className="text-[8px] font-bold text-muted-foreground uppercase">{alert.type}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full" style={{ width: alert.score.split('/')[0] + '%' }} />
                          </div>
                          <span className="text-[10px] font-black italic tracking-tighter">{alert.score}</span>
                        </div>
                      </TableCell>
                      <TableCell className="px-8 text-right">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border border-border/50 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
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
                <div className="flex gap-4 mt-4">
                  {["Sanctions", "PEP", "Watchlist", "Media"].map((t) => (
                    <button key={t} className="text-[9px] font-black uppercase tracking-widest italic text-muted-foreground hover:text-neutral-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-brand-lime pb-1">
                      {t}
                    </button>
                  ))}
                </div>
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
                  {[
                    { name: "Al-Bashir Logistics", type: "Sanctions", conf: "98%", list: "OFAC SDN" },
                    { name: "Chen Wei", type: "PEP", conf: "84%", list: "World-Check" },
                    { name: "Z-Group Holdings", type: "Watchlist", conf: "91%", list: "EU Freeze" },
                  ].map((match, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4">
                        <div className="text-[11px] font-black italic tracking-tight">{match.name}</div>
                        <div className="text-[8px] font-bold text-muted-foreground uppercase">{match.list}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[8px] font-black uppercase italic tracking-widest border-indigo-500/20 text-indigo-500">
                          {match.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[11px] font-black italic text-neutral-900 dark:text-white">{match.conf}</TableCell>
                      <TableCell className="px-8 text-right">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full border border-border/50 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </Button>
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
                  {[
                    { name: "Ouroboros Trading", tier: "Critical", score: 94, alert: true, trend: "up" },
                    { name: "Atlas Global Services", tier: "High", score: 82, alert: false, trend: "down" },
                    { name: "Mirage Assets Ltd", tier: "High", score: 85, alert: true, trend: "up" },
                    { name: "Quantum Horizon", tier: "Critical", score: 91, alert: true, trend: "up" },
                    { name: "Silverado Partners", tier: "High", score: 79, alert: false, trend: "stable" },
                    { name: "Elysium Wealth", tier: "High", score: 88, alert: true, trend: "up" },
                  ].map((cust, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-3xl hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center font-black italic text-sm group-hover:bg-brand-lime group-hover:text-black transition-colors">
                          {cust.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-black italic tracking-tight text-[14px]">{cust.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={`text-[8px] font-black italic tracking-widest uppercase h-4 leading-none ${
                               cust.tier === 'Critical' ? 'bg-rose-500' : 'bg-orange-500'
                            }`}>
                              {cust.tier}
                            </Badge>
                            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest italic">PEP: Yes</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-black italic tracking-tighter leading-none">{cust.score}</span>
                          <span className="text-[8px] font-black text-muted-foreground uppercase mt-1">Risk Score</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
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
                  {[
                    { id: "CS-4011", type: "SAR Investigation", subject: "Crypto-Fiat Off-ramp Flow", owner: "James Wilson", progress: 65, priority: "High" },
                    { id: "CS-4015", type: "EDD Review", subject: "Shell Corp Verification - BVI", owner: "Sarah Jenkins", progress: 20, priority: "Critical" },
                    { id: "CS-4018", type: "Fraud Alert", subject: "Card Not Present Spike", owner: "Unassigned", progress: 0, priority: "High" },
                    { id: "CS-4022", type: "Periodic Review", subject: "Annual Institutional Tier 1", owner: "James Wilson", progress: 85, priority: "Medium" },
                  ].map((caseItem, i) => (
                    <div key={i} className="p-6 rounded-3xl border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-[10px] font-black italic text-brand-lime/80">{caseItem.id}</span>
                          <h4 className="text-[14px] font-black italic uppercase tracking-tighter mt-1">{caseItem.subject}</h4>
                          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-1 italic">{caseItem.type}</p>
                        </div>
                        <Badge className={`text-[9px] font-black italic tracking-widest uppercase ${
                          caseItem.priority === 'Critical' ? 'bg-rose-500' : caseItem.priority === 'High' ? 'bg-orange-500' : 'bg-brand-lime text-black'
                        }`}>
                          {caseItem.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-6">
                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full bg-neutral-900 dark:bg-white rounded-full transition-all duration-1000`} style={{ width: `${caseItem.progress}%` }} />
                        </div>
                        <span className="text-[10px] font-black italic">{caseItem.progress}%</span>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-[8px] font-black uppercase italic">
                            {caseItem.owner.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-[10px] font-bold text-muted-foreground italic">{caseItem.owner}</span>
                        </div>
                        <Button variant="ghost" className="h-7 text-[9px] font-black uppercase italic tracking-widest border border-border/50 rounded-lg">
                          Manage Case
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 8. REPORTING QUEUE & 9. ACTIVITY FEED */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <section className="xl:col-span-2">
          <Card className="rounded-[40px] border-border/50 shadow-2xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-8 border-b border-border/50 bg-neutral-900 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Regulatory Reporting Queue</CardTitle>
                  <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                    Scheduled and ad-hoc regulatory submissions
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                   {["Drafts", "Pending", "Ready"].map(s => (
                     <Badge key={s} variant="outline" className="bg-white/5 border-white/10 text-[8px] font-black uppercase italic tracking-widest text-white/60">
                       {s} (2)
                     </Badge>
                   ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Type</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Subject</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10">Deadline</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                   {[
                     { id: "SAR-2026-004", type: "Suspicious Activity", sub: "Bitcoin OTC Wash Trading", due: "Today, 5PM", status: "Ready" },
                     { id: "CTR-2026-081", type: "Currency Transaction", sub: "Retail Branch #44 - Cash", due: "In 2 days", status: "Draft" },
                     { id: "AML-2026-Q1", type: "Periodic Q-Report", sub: "Institutional Annual Alpha", due: "In 4 days", status: "Pending" },
                     { id: "SAR-2026-005", type: "Structuring Alert", sub: "Structuring - Account _8810", due: "Tomorrow, 9AM", status: "Ready" },
                   ].map((report, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-5 text-xs font-black italic text-neutral-400">{report.id}</TableCell>
                      <TableCell>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase italic">{report.type}</span>
                      </TableCell>
                      <TableCell className="text-[11px] font-black italic tracking-tight">{report.sub}</TableCell>
                      <TableCell>
                        <span className={`text-[10px] font-black italic ${report.due.includes('Today') ? 'text-rose-500' : 'text-neutral-900 dark:text-white'}`}>
                          {report.due}
                        </span>
                      </TableCell>
                      <TableCell className="px-8 text-right">
                        <Button className="h-7 text-[9px] font-black uppercase italic tracking-widest px-4 bg-brand-lime text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          Submit
                        </Button>
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
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Activity Feed</CardTitle>
               <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic">Real-time operational stream</CardDescription>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden">
               <ScrollArea className="h-[400px]">
                  <div className="p-8 space-y-8">
                     {[
                       { type: "Case Escalated", user: "James Wilson", time: "2m ago", detail: "Escalated SAR-2026-004 to Lead Reviewer", icon: <TrendingUp className="text-orange-500" /> },
                       { type: "Match Confirmed", user: "Sarah Jenkins", time: "14m ago", detail: "Confirmed Sanctions match for 'Al-Bashir'", icon: <Flag className="text-rose-500" /> },
                       { type: "Report Submitted", user: "System", time: "1h ago", detail: "CTR-2026-080 auto-submitted to FINTRAC", icon: <CheckCircle2 className="text-brand-lime" /> },
                       { type: "EDD Initiated", user: "James Wilson", time: "2h ago", detail: "Deep sense audit triggered for 'Nexus OTC'", icon: <Search className="text-indigo-500" /> },
                       { type: "Audit Recorded", user: "Admin", time: "4h ago", detail: "Full system state audit snapshot captured", icon: <Activity className="text-neutral-400" /> },
                     ].map((activity, i) => (
                       <div key={i} className="flex gap-4 relative">
                          {i !== 4 && <div className="absolute left-[13px] top-8 bottom-[-32px] w-[2px] bg-border/50" />}
                          <div className="w-7 h-7 rounded-full bg-background border border-border/50 flex items-center justify-center shrink-0 z-10 shadow-sm">
                             {React.cloneElement(activity.icon as React.elements, { className: "w-3 h-3 " + (activity.icon as React.elements).props.className })}
                          </div>
                          <div className="space-y-1">
                             <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black uppercase tracking-tighter italic">{activity.type}</span>
                                <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">{activity.time}</span>
                             </div>
                             <p className="text-[10px] text-muted-foreground italic leading-relaxed">{activity.detail}</p>
                             <div className="text-[8px] font-black text-neutral-400 italic">By: {activity.user}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </ScrollArea>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 10. SLA & WORKLOAD */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-[32px] border-border/50 p-6 bg-rose-500 text-white">
          <h4 className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Critical Overdue</h4>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-4xl font-black italic tracking-tighter">03</span>
            <div className="text-right">
              <div className="text-[8px] font-black uppercase italic leading-none">Items Breached</div>
              <div className="text-[8px] font-bold uppercase mt-1 opacity-60">Goal: &lt; 2h Response</div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
             <div className="flex justify-between text-[8px] font-black uppercase italic">
                <span>Alerts</span>
                <span>01</span>
             </div>
             <div className="w-full h-1 bg-white/20 rounded-full">
                <div className="w-1/3 h-full bg-white opacity-40 rounded-full" />
             </div>
          </div>
        </Card>

        <Card className="rounded-[32px] border-border/50 p-6 bg-neutral-900 text-white">
          <h4 className="text-[10px] font-black uppercase tracking-widest italic opacity-60">Avg. Resolution</h4>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-4xl font-black italic tracking-tighter">4.2h</span>
            <div className="text-right">
              <div className="text-[8px] font-black uppercase italic text-brand-lime leading-none">-12% vs LY</div>
              <div className="text-[8px] font-bold uppercase mt-1 opacity-60">Global Benchmark</div>
            </div>
          </div>
          <div className="mt-6 flex gap-1 h-8 items-end">
             {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
               <div key={i} className="flex-1 bg-white/10 rounded-sm hover:bg-brand-lime transition-colors" style={{ height: `${h}%` }} />
             ))}
          </div>
        </Card>

        <Card className="rounded-[32px] border-border/50 p-6 bg-white dark:bg-neutral-900 xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
             <h4 className="text-[10px] font-black uppercase tracking-widest italic">Team Workload Distribution</h4>
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[
               { name: "J. Wilson", cases: 14, status: "Overloaded" },
               { name: "S. Jenkins", cases: 8, status: "Optimal" },
               { name: "M. Chen", cases: 22, status: "Critical" },
               { name: "Unassigned", cases: 6, status: "Pending" },
             ].map((analyst, i) => (
               <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[8px] font-black uppercase italic">
                     <span className="truncate">{analyst.name}</span>
                     <span>{analyst.cases}</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                     <div className={`h-full ${
                       analyst.status === 'Critical' ? 'bg-rose-500' : analyst.status === 'Overloaded' ? 'bg-orange-500' : 'bg-brand-lime'
                     }`} style={{ width: `${(analyst.cases / 25) * 100}%` }} />
                  </div>
                  <div className={`text-[7px] font-black uppercase italic text-center ${
                       analyst.status === 'Critical' ? 'text-rose-500' : 'text-muted-foreground'
                  }`}>
                    {analyst.status}
                  </div>
               </div>
             ))}
          </div>
        </Card>
      </section>

      {/* 11. COMPLIANCE TRENDS & 12. QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-3">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full relative overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl">
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex items-center justify-between mb-12">
               <div>
                  <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Operational Compliance Trends</CardTitle>
                  <CardDescription className="text-[10px] font-black uppercase tracking-widest italic mt-2">Historical AML exposure and resolution health</CardDescription>
               </div>
               <div className="flex gap-4">
                  <Badge variant="outline" className="text-[9px] font-black uppercase italic tracking-widest bg-muted border-none rounded-xl px-4 py-2">
                    Alert Volume (MA)
                  </Badge>
                  <Badge variant="outline" className="text-[9px] font-black uppercase italic tracking-widest bg-brand-lime/10 text-brand-lime border-none rounded-xl px-4 py-2">
                    Risk Index
                  </Badge>
               </div>
            </div>
            
            <div className="h-64 flex items-end gap-3 pb-4">
               {/* Mock Visualization */}
               {Array.from({ length: 24 }).map((_, i) => {
                 const h1 = 20 + Math.random() * 60;
                 const h2 = 30 + Math.random() * 40;
                 return (
                   <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div className="w-full flex-1 flex items-end justify-center relative cursor-help">
                         <div className="absolute inset-x-0 bottom-0 bg-neutral-900 dark:bg-white rounded-t-sm opacity-10 group-hover:opacity-100 transition-opacity" style={{ height: `${h1}%` }} />
                         <div className="w-1.5 bg-brand-lime rounded-t-sm z-10 transition-all duration-700 shadow-[0_0_15px_rgba(209,247,1,0.2)]" style={{ height: `${h2}%` }} />
                      </div>
                      <div className="h-4 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[7px] font-black uppercase italic text-muted-foreground whitespace-nowrap">Q{Math.ceil((i+1)/6)}</span>
                      </div>
                   </div>
                 );
               })}
            </div>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 bg-neutral-900 text-white p-8 h-full shadow-3xl">
             <h4 className="text-xl font-black italic uppercase tracking-tighter mb-10">Quick Actions</h4>
             <div className="space-y-3">
                {[
                  { label: "Create AI Case", icon: <Activity />, color: "bg-white/10 hover:bg-brand-lime hover:text-black" },
                  { label: "Start EDD Review", icon: <UserPlus />, color: "bg-white/10 hover:bg-indigo-500" },
                  { label: "Review Matches", icon: <ShieldCheck />, color: "bg-white/10 hover:bg-emerald-500" },
                  { label: "Generate STR", icon: <FileText />, color: "bg-white/10 hover:bg-rose-500" },
                  { label: "Export Audit", icon: <Download />, color: "bg-white/10 hover:bg-neutral-700" },
                  { label: "Onboarding Queue", icon: <ExternalLink />, color: "bg-white/10 hover:bg-orange-500" },
                ].map((action, i) => (
                  <button key={i} className={`w-full p-4 rounded-2xl flex items-center gap-4 text-left transition-all group ${action.color}`}>
                     <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        {React.cloneElement(action.icon as React.elements, { className: "w-4 h-4" })}
                     </div>
                     <span className="text-[10px] font-black uppercase italic tracking-widest">{action.label}</span>
                  </button>
                ))}
             </div>
             
             <div className="mt-12 p-6 rounded-3xl bg-brand-lime/5 border border-brand-lime/20 border-dashed">
                <p className="text-[10px] italic text-brand-lime/80 font-medium leading-relaxed">
                  "Deep Sense AI identified a high-risk structuring pattern in 'Ouroboros Trading' minutes ago. It's recommended to initiate an EDD review immediately."
                </p>
                <Button className="w-full mt-6 h-10 bg-brand-lime text-black hover:bg-brand-lime/90 font-black text-[9px] uppercase tracking-widest italic rounded-xl">
                  AI Recommendation
                </Button>
             </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

