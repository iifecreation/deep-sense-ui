"use client";

import React from "react";
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Scan, 
  ChevronRight,
  MoreHorizontal,
  Upload,
  RefreshCcw,
  Download,
  PlayCircle,
  AlertTriangle,
  Users,
  Flag,
  CheckCircle2,
  XCircle,
  BarChart3,
  List,
  History,
  Clock,
  Settings,
  MoreVertical,
  ExternalLink,
  Target,
  ArrowRight,
  PieChart,
  Activity,
  Archive,
  Lock,
  Plus
} from "lucide-react";
import Link from "next/link";
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function ScreeningCenterPage() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Screening Center<span className="text-indigo-500">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Review sanctions, PEP, and watchlist matches across the customer lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic group border-indigo-200 dark:border-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              <Upload className="w-3.5 h-3.5 mr-2" />
              Upload Watchlist
            </Button>
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic group">
              <PlayCircle className="w-3.5 h-3.5 mr-2" />
              Run Re-screening
            </Button>
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <Download className="w-3.5 h-3.5 mr-2" />
              Export Matches
            </Button>
            <Button className="h-10 px-6 bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-xs uppercase tracking-widest italic shadow-lg shadow-indigo-600/20">
              <RefreshCcw className="w-3.5 h-3.5 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <Input 
              placeholder="Search by entity, ID, passport..." 
              className="h-8 w-48 text-[10px] font-bold uppercase tracking-widest border-none shadow-none focus-visible:ring-0"
            />
          </div>
          
          {[
            { label: "Match Type", value: "All Lists" },
            { label: "Confidence", value: "80%+" },
            { label: "Risk Level", value: "Critical" },
            { label: "Status", value: "Pending" },
            { label: "Analyst", value: "Me" },
          ].map((filter, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 hover:bg-background rounded-xl transition-colors cursor-pointer group">
              <span className="text-[10px] font-black uppercase tracking-widest italic text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {filter.label}: {filter.value}
              </span>
              <ChevronRight className="w-2.5 h-2.5 text-muted-foreground/50 rotate-90" />
            </div>
          ))}
          
          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg ml-auto mr-2">
            <Filter className="w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 2. KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: "Pending Matches", value: "28", delta: "+4", trend: "up", icon: <Clock className="text-orange-500" /> },
          { label: "High-Risk Matches", value: "12", delta: "+2", trend: "up", icon: <AlertTriangle className="text-rose-500 animate-pulse" /> },
          { label: "Confirmed Matches", value: "05", delta: "0", trend: "neutral", icon: <ShieldCheck className="text-indigo-500" /> },
          { label: "False Positives", value: "142", delta: "+22", trend: "up", icon: <CheckCircle2 className="text-emerald-500" /> },
          { label: "PEP Matches", value: "08", delta: "+1", trend: "up", icon: <Users className="text-amber-500" /> },
          { label: "Sanctions Matches", value: "04", delta: "-1", trend: "down", icon: <Flag className="text-rose-600" /> },
        ].map((kpi, i) => (
          <Link 
            key={i} 
            href={`/dashboard/screening?status=${kpi.label.toLowerCase().includes('pending') ? 'pending' : ''}`}
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-xl shadow-black/5 hover:border-indigo-500 hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
              <Badge variant="outline" className={`text-[9px] font-black italic tracking-widest uppercase border-none px-0 ${
                kpi.trend === 'up' ? (kpi.label.includes('False') ? 'text-emerald-500' : 'text-rose-500') : kpi.trend === 'down' ? 'text-emerald-500' : 'text-muted-foreground'
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
            </div>
          </Link>
        ))}
      </section>

      {/* 3. PRIORITY SCREENING QUEUE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-orange-500 text-white">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2">
                <Target className="w-5 h-5 text-white" />
                Matches Requiring Immediate Review
              </CardTitle>
              <CardDescription className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                High-confidence matches awaiting manual resolution
              </CardDescription>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" className="bg-white/10 border-white/20 text-white text-[9px] font-black uppercase italic h-8">Batch Actions</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted px-8">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8">Match Entity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Match Type</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Source List</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Confidence</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Risk</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "M-4401", name: "Vladimir Y. Potanin", type: "Sanctions", source: "OFAC SDN", confidence: 98, risk: "Critical", status: "Pending" },
                  { id: "M-1102", name: "Atlassian Energy Ltd", type: "Watchlist", source: "EU Freeze", confidence: 84, risk: "High", status: "Pending" },
                  { id: "M-8812", name: "Chen Wei", type: "PEP", source: "Global PEP Tier 1", confidence: 42, risk: "Medium", status: "Pending" },
                  { id: "M-5521", name: "Dmitry Volkov", type: "Sanctions", source: "UK HMT", confidence: 91, risk: "Critical", status: "Pending" },
                ].map((row, i) => (
                  <TableRow key={i} className="group hover:bg-orange-50/30 dark:hover:bg-orange-950/20 transition-colors border-b border-border/50 cursor-pointer">
                    <TableCell className="px-8 py-5">
                      <Link href={`/dashboard/screening/matches/${row.id}`} className="flex flex-col">
                        <span className="text-xs font-black italic tracking-tight">{row.name}</span>
                        <span className="text-[8px] font-black text-neutral-400 uppercase italic mt-1">{row.id}</span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[9px] font-black italic tracking-widest uppercase border-none px-0 ${
                        row.type === 'Sanctions' ? 'text-rose-500' : row.type === 'PEP' ? 'text-amber-500' : 'text-indigo-500'
                      }`}>
                        {row.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-[10px] font-medium text-muted-foreground italic">{row.source}</span>
                    </TableCell>
                    <TableCell className="text-center">
                       <div className="flex flex-col items-center gap-1">
                          <span className={`text-sm font-black italic ${row.confidence > 80 ? 'text-rose-500' : 'text-neutral-900 dark:text-white'}`}>
                            {row.confidence}%
                          </span>
                          <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                             <div className={`h-full ${row.confidence > 80 ? 'bg-rose-500' : 'bg-brand-lime'}`} style={{ width: `${row.confidence}%` }} />
                          </div>
                       </div>
                    </TableCell>
                    <TableCell className="text-center px-8">
                       <Badge className={`text-[9px] font-black italic tracking-widest uppercase ${
                         row.risk === 'Critical' ? 'bg-rose-600' : 'bg-orange-500'
                       }`}>
                         {row.risk}
                       </Badge>
                    </TableCell>
                    <TableCell className="px-8 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <Button size="sm" className="h-7 text-[8px] font-black uppercase italic tracking-widest px-4 bg-orange-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Review Match</Button>
                          <DropdownMenu>
                             <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost" className="h-7 w-7 rounded-lg">
                                   <MoreVertical className="w-3.5 h-3.5" />
                                </Button>
                             </DropdownMenuTrigger>
                             <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Confirm Match</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Dismiss False Positive</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Escalate to Case</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Start EDD</DropdownMenuItem>
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

      {/* 4. ALL SCREENING MATCHES TABLE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-border/50 bg-neutral-900 text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">All Screening Matches</CardTitle>
                <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Historical and active match registry</CardDescription>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="bg-white/5 border-white/10 text-white text-[9px] font-black uppercase italic h-8">Bulk Dismiss</Button>
                 <Button variant="outline" className="bg-white/5 border-white/10 text-white text-[9px] font-black uppercase italic h-8">Bulk Confirm</Button>
              </div>
            </div>
          </section>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-neutral-800 rounded-none border-b border-white/5 w-full justify-start px-8 h-12">
              {["All", "Sanctions", "PEP", "Watchlist", "Re-screening"].map(tab => (
                <TabsTrigger 
                  key={tab} 
                  value={tab.toLowerCase()}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent text-white/40 data-[state=active]:text-white text-[10px] font-black uppercase italic tracking-widest px-8"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-neutral-400">Match ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Customer</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">List Source</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Score</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-neutral-400">Last Resolution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "M-9921", customer: "Alex Reed", source: "Interpol Red Notice", score: 94, status: "Confirmed", date: "2m ago" },
                    { id: "M-1104", customer: "Sarah Jenkins", source: "World-Check PEP", score: 62, status: "Cleared", date: "1h ago" },
                    { id: "M-4521", customer: "Global Assets BVI", source: "OFAC SDN", score: 88, status: "Under Review", date: "3h ago" },
                    { id: "M-7712", customer: "Jordan B. Peterson", source: "UK SI Watchlist", score: 14, status: "False Positive", date: "1d ago" },
                    { id: "M-2201", customer: "Atlas Trading", source: "EU Freeze List", score: 99, status: "Confirmed", date: "2d ago" },
                  ].map((row, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4 font-black italic text-[11px] text-muted-foreground">{row.id}</TableCell>
                      <TableCell className="text-[11px] font-black italic">{row.customer}</TableCell>
                      <TableCell className="text-[10px] font-medium text-muted-foreground italic">{row.source}</TableCell>
                      <TableCell className="text-center font-black italic text-[13px]">{row.score}%</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none px-0 ${
                          row.status === 'Confirmed' ? 'text-rose-500' : row.status === 'Cleared' ? 'text-emerald-500' : 'text-neutral-400'
                        }`}>
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-8 text-right text-[10px] font-bold text-muted-foreground uppercase">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Tabs>
        </Card>
      </section>

      {/* 5. MATCH QUALITY INSIGHTS & 6. WATCHLIST MANAGEMENT */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col">
            <CardHeader className="p-8 border-b border-border/50">
               <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Match Accuracy & Trends</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic">Match quality and operational efficiency mapping</CardDescription>
                  </div>
                  <BarChart3 className="w-8 h-8 text-indigo-500/30" />
               </div>
            </CardHeader>
            <CardContent className="p-10 flex-1">
               <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-6">
                        {[
                          { label: "True Positive Rate", value: "14%", color: "bg-rose-500" },
                          { label: "False Positive Rate", value: "86%", color: "bg-emerald-500" },
                          { label: "High Confidence", value: "22%", color: "bg-indigo-500" },
                        ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">
                                 <span>{item.label}</span>
                                 <span className="text-neutral-900 dark:text-white">{item.value}</span>
                              </div>
                              <Progress value={parseInt(item.value)} className="h-1 bg-muted" />
                           </div>
                        ))}
                     </div>
                     <div className="relative aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 border-[16px] border-emerald-500/10 rounded-full" />
                        <div className="absolute inset-0 border-[16px] border-rose-500 rounded-full" style={{ clipPath: 'inset(0 86% 0 0)' }} />
                        <div className="z-10 text-center">
                           <div className="text-3xl font-black italic tracking-tighter">86%</div>
                           <div className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground italic">Efficiency Rate</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-muted/30 p-4 rounded-2xl border border-border/50">
                     <div className="flex items-center gap-3">
                        <PlayCircle className="w-4 h-4 text-indigo-500" />
                        <span className="text-[10px] font-black uppercase italic tracking-widest">Confidence Threshold: 65%</span>
                     </div>
                     <span className="text-[10px] font-black text-indigo-500 italic underline cursor-pointer">Optimize Tuning</span>
                  </div>
               </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-neutral-900 text-white">
            <CardHeader className="p-8 border-b border-white/10">
               <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Watchlist Management</CardTitle>
                    <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Active list sources and sync state</CardDescription>
                  </div>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white text-[9px] font-black uppercase italic h-8">
                    <Upload className="w-3.5 h-3.5 mr-2" /> Upload Custom
                  </Button>
               </div>
            </CardHeader>
            <CardContent className="p-0 flex-1">
               <Table>
                 <TableHeader className="bg-white/5 pointer-events-none border-b border-white/5">
                   <TableRow className="hover:bg-transparent border-0 font-black">
                     <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-white/40">List Source</TableHead>
                     <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-white/40">Status</TableHead>
                     <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-white/40">Last Sync</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   {[
                     { name: "OFAC SDN List", type: "Global Sanctions", status: "Active", date: "1h ago" },
                     { name: "EU Freeze List", type: "Regional Sanctions", status: "Active", date: "3h ago" },
                     { name: "World-Check PEP", type: "Premium PEP", status: "Synchronizing", date: "Now" },
                     { name: "Interpol Red", type: "Law Enforcement", status: "Critical", date: "5m ago" },
                     { name: "In-House Watchlist", type: "Custom List", status: "Active", date: "1d ago" },
                   ].map((list, i) => (
                     <TableRow key={i} className="group hover:bg-white/5 border-b border-white/5 transition-colors">
                       <TableCell className="px-8 py-4">
                          <div className="text-[11px] font-black italic tracking-tight">{list.name}</div>
                          <div className="text-[8px] font-bold text-white/40 uppercase mt-0.5">{list.type}</div>
                       </TableCell>
                       <TableCell>
                          <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none px-0 ${
                            list.status === 'Synchronizing' ? 'text-indigo-400' : 'text-emerald-500'
                          }`}>
                            {list.status}
                          </Badge>
                       </TableCell>
                       <TableCell className="px-8 text-right text-[10px] font-black italic text-white/40">
                          {list.date}
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 7. RE-SCREENING JOBS & 8. ACTIVITY FEED */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <section className="xl:col-span-1">
          <Card className="rounded-[40px] border-border/50 shadow-2xl h-full flex flex-col bg-muted/20 overflow-hidden">
            <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Re-Screening Engine</CardTitle>
               <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic">Active continuous monitoring cycles</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8 flex-1">
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic">Population Scan Status</div>
                        <div className="text-[13px] font-black italic">In Progress (Daily Cycle)</div>
                     </div>
                     <Progress value={42} className="w-24 h-1.5" />
                  </div>
                  <div className="p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group">
                     <div className="absolute right-[-10%] top-[-10%] w-24 h-24 bg-brand-lime/10 blur-xl rounded-full" />
                     <div className="flex flex-col gap-4 relative z-10 text-center">
                        <div className="flex items-baseline justify-center gap-1">
                           <span className="text-4xl font-black italic tracking-tighter leading-none">1.2M</span>
                           <span className="text-[10px] font-black uppercase italic text-muted-foreground">Entities</span>
                        </div>
                        <div className="text-[8px] font-black uppercase tracking-widest text-neutral-400 italic">Continuous coverage active</div>
                        <Button className="w-full h-8 text-[9px] font-black uppercase bg-neutral-900 dark:bg-white dark:text-black">Run Emergency Sweep</Button>
                     </div>
                  </div>
               </div>
               
               <div className="space-y-4">
                  {[
                    { label: "Daily Scan", status: "Success", time: "3h ago" },
                    { label: "PEP Update", status: "Running", time: "Now" },
                    { label: "OFAC Delta", status: "Success", time: "1h ago" },
                  ].map((job, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                       <span className="text-muted-foreground">{job.label}</span>
                       <span className={job.status === 'Running' ? 'text-indigo-500 animate-pulse' : 'text-emerald-500'}>{job.status} • {job.time}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </section>

        <section className="xl:col-span-2">
          <Card className="rounded-[40px] border-border/50 shadow-2xl h-full flex flex-col overflow-hidden">
            <CardHeader className="p-8 border-b border-border/50">
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Recent Screening Activity</CardTitle>
               <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic">Real-time match and resolution stream</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-1">
               <ScrollArea className="h-[400px]">
                  <div className="p-8 space-y-8">
                     {[
                       { type: "Match Detected", entity: "Vladislav Orlov", time: "5m ago", detail: "Institutional OFAC SDN match (Confidence 91%) detected in re-screening job #44.", icon: <Flag className="text-rose-500" /> },
                       { type: "False Positive", entity: "Jordan Peterson", time: "1h ago", detail: "Match M-7712 dismissed as False Positive by analyst J. Wilson.", icon: <CheckCircle2 className="text-emerald-500" /> },
                       { type: "Watchlist Update", entity: "EU Consolidated List", time: "3h ago", detail: "Delta update completed: 14 new entities added to monitoring.", icon: <RefreshCcw className="text-indigo-500" /> },
                       { type: "PEP Match", entity: "Chen Wei", time: "5h ago", detail: "Tier 1 PEP match confirmed for institutional UBO node.", icon: <Users className="text-amber-500" /> },
                       { type: "Re-screening", entity: "Full Population", time: "1d ago", detail: "Emergency re-screening completed successfully. No new high-confidence matches.", icon: <Activity className="text-brand-lime" /> },
                     ].map((change, i) => (
                       <div key={i} className="flex gap-4 relative">
                          {i !== 4 && <div className="absolute left-[13px] top-8 bottom-[-32px] w-[2px] bg-border/50" />}
                          <div className="w-7 h-7 rounded-full bg-background border border-border/50 flex items-center justify-center shrink-0 z-10 shadow-sm transition-transform hover:scale-125">
                             {React.cloneElement(change.icon as React.elements, { className: "w-3 h-3 " + (change.icon as React.elements).props.className })}
                          </div>
                          <div className="space-y-1">
                             <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black uppercase tracking-tighter italic">{change.entity}</span>
                                <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">{change.time}</span>
                             </div>
                             <div className="text-[9px] font-black uppercase italic tracking-widest text-indigo-500 mb-1 leading-none">{change.type}</div>
                             <p className="text-[10px] text-muted-foreground italic leading-relaxed">{change.detail}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </ScrollArea>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 9. ANALYTICS & 10. GOVERNANCE */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full relative overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl">
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Screening Analytics</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Institutional match performance metrics</CardDescription>
                 </div>
                 <PieChart className="w-8 h-8 text-indigo-500/30" />
              </div>
              
              <div className="grid grid-cols-2 gap-10">
                 <div className="space-y-6">
                    {[
                      { l: "Total Matches", v: "1,442" },
                      { l: "Sanctions Pop.", v: "14%" },
                      { l: "PEP Pop.", v: "22%" },
                      { l: "Watchlist Pop.", v: "64%" },
                    ].map((st, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                          <span className="text-muted-foreground">{st.l}</span>
                          <span className="text-xl font-black italic">{st.v}</span>
                       </div>
                    ))}
                 </div>
                 <div className="space-y-6">
                    {[
                      { l: "Avg Review Time", v: "8.4m" },
                      { l: "Manual Resolution", v: "92%" },
                      { l: "False Positive Ratio", v: "8.2:1" },
                      { l: "Rescreening Lead", v: "Optimal" },
                    ].map((st, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                          <span className="text-muted-foreground">{st.l}</span>
                          <span className="text-xl font-black italic">{st.v}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="mt-12 w-full h-12 flex gap-1">
                 {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-indigo-500/10 rounded-full relative group">
                       <div className="absolute bottom-0 inset-x-0 bg-indigo-500 rounded-full transition-all group-hover:h-full" style={{ height: `${20 + Math.random() * 80}%` }} />
                    </div>
                 ))}
              </div>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-neutral-900 text-white">
            <CardHeader className="p-8 border-b border-white/10">
               <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Governance & Controls</CardTitle>
               <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Audit trails and decision authority mappings</CardDescription>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-indigo-500 transition-colors cursor-pointer group">
                     <Lock className="w-5 h-5 text-indigo-400 mb-2 group-hover:rotate-12 transition-transform" />
                     <h5 className="text-[12px] font-black uppercase italic">Audit Integrity</h5>
                     <p className="text-[10px] text-white/40 italic leading-relaxed">Full decision traceability for 100% of screening outcomes.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 hover:border-brand-lime transition-colors cursor-pointer group">
                     <Users className="w-5 h-5 text-brand-lime mb-2 group-hover:scale-110 transition-transform" />
                     <h5 className="text-[12px] font-black uppercase italic">Review Authority</h5>
                     <p className="text-[10px] text-white/40 italic leading-relaxed">Role-based signoff required for critical sanctions hits.</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <h5 className="text-[10px] font-black uppercase italic tracking-widest text-white/40">Recent Governance Events</h5>
                  {[
                    { e: "Policy Update: Confidence Threshold moved to 65%", t: "1d ago" },
                    { e: "Quarterly Audit: No unaccounted dismissals found", t: "4d ago" },
                    { e: "Model Recalibration: NLP Matcher v2.4 initialized", t: "1w ago" },
                  ].map((ge, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-black italic tracking-tight border-b border-white/5 pb-3">
                       <span className="text-white/60">{ge.e}</span>
                       <span className="text-white/20">{ge.t}</span>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 11. QUICK ACTIONS PANEL */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
           {[
             { label: "Review Pending", icon: <Clock />, color: "bg-orange-600 text-white shadow-orange-600/20" },
             { label: "Open Sanctions Radar", icon: <Flag />, color: "bg-rose-600 text-white shadow-rose-600/20" },
             { label: "Open PEP Radar", icon: <Users />, color: "bg-indigo-600 text-white shadow-indigo-600/20" },
             { label: "Initialize Full Sweep", icon: <PlayCircle />, color: "bg-neutral-900 text-white" },
             { label: "Upload New Watchlist", icon: <Upload />, color: "bg-badge text-black border border-border/50" },
             { label: "Export Audit Trace", icon: <Archive />, color: "bg-emerald-600 text-white shadow-emerald-600/20" },
           ].map((action, i) => (
             <button key={i} className={`flex items-center gap-3 p-4 rounded-2xl font-black text-[9px] uppercase tracking-widest italic hover:scale-105 active:scale-95 transition-all group ${action.color}`}>
                <div className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center shrink-0">
                  {React.cloneElement(action.icon as React.elements, { className: "w-3 h-3" })}
                </div>
                {action.label}
             </button>
           ))}
        </div>
      </section>
    </div>
  );
}

