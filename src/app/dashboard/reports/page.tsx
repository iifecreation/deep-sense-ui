"use client";

import React from "react";
import { 
  FileText, 
  Search, 
  Filter, 
  ChevronRight,
  Download,
  Send,
  MoreHorizontal,
  Plus,
  RefreshCcw,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileCheck,
  FileX,
  History,
  ArrowRight,
  BarChart3,
  Archive,
  Lock,
  MessageSquare,
  Paperclip,
  Share2,
  ExternalLink,
  MoreVertical,
  Activity,
  Calendar,
  Users,
  ShieldCheck,
  Zap
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

export default function RegulatoryReportsPage() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Regulatory Reports<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Create, manage, review, and track AML reports for regulatory compliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic group border-neutral-200 dark:border-neutral-800">
               <Download className="w-3.5 h-3.5 mr-2" />
               Export Reports
            </Button>
            <Button className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
               <Plus className="w-3.5 h-3.5 mr-2" />
               Create Report
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10">
               <RefreshCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <Input 
              placeholder="Search by ID, type, case..." 
              className="h-8 w-48 text-[10px] font-bold uppercase tracking-widest border-none shadow-none focus-visible:ring-0"
            />
          </div>
          
          {[
            { label: "Report Type", value: "STR / CTR" },
            { label: "Status", value: "All Active" },
            { label: "Reviewer", value: "Assigned" },
            { label: "Deadline", value: "This Week" },
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
          { label: "Draft Reports", value: "14", delta: "+3", trend: "up", icon: <FileText className="text-neutral-400" /> },
          { label: "Pending Review", value: "08", delta: "+2", trend: "up", icon: <Clock className="text-orange-500" /> },
          { label: "Ready to Submit", value: "05", delta: "+1", trend: "up", icon: <CheckCircle2 className="text-brand-lime" /> },
          { label: "Submitted", value: "242", delta: "+12", trend: "up", icon: <Send className="text-indigo-500" /> },
          { label: "Rejected/Returned", value: "02", delta: "-1", trend: "down", icon: <XCircle className="text-rose-500" /> },
          { label: "Overdue Reports", value: "03", delta: "+2", trend: "up", icon: <AlertTriangle className="text-rose-600 animate-pulse" /> },
        ].map((kpi, i) => (
          <Link 
            key={i} 
            href={`/dashboard/reports?status=${kpi.label.toLowerCase().replace(/ /g, '-')}`}
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:scale-[1.02] transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
              <Badge variant="outline" className={`text-[9px] font-black italic tracking-widest uppercase border-none px-0 ${
                kpi.trend === 'up' ? (kpi.label.includes('Rejected') || kpi.label.includes('Overdue') ? 'text-rose-500' : 'text-emerald-500 text-brand-lime') : 'text-emerald-500'
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

      {/* 3. PRIORITY REPORTING QUEUE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-neutral-900 text-white">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2 text-white">
                <AlertTriangle className="w-5 h-5 text-brand-lime font-black" />
                Reports Requiring Immediate Action
              </CardTitle>
              <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                Regulatory filings with approaching submission deadlines
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted px-8">
                <TableRow className="hover:bg-transparent border-b border-border/50">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8">Report ID</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Type</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Linked Case</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12">Subject</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center">Deadline</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "STR-4491", type: "STR", case: "CASE-9921", subject: "Vladislav Orlov", status: "Ready", dead: "2h left", color: "rose" },
                  { id: "CTR-1102", type: "CTR", case: "CASE-4402", subject: "Mercury Digital", status: "Draft", dead: "6h left", color: "orange" },
                  { id: "STR-8812", type: "STR", case: "CASE-7712", subject: "Chen Wei", status: "Review", dead: "1d left", color: "neutral" },
                  { id: "STR-5521", type: "STR", case: "CASE-5501", subject: "Global Assets BVI", status: "Rejected", dead: "EXPIRED", color: "rose" },
                ].map((row, i) => (
                  <TableRow key={i} className="group hover:bg-muted/30 transition-colors border-b border-border/50 cursor-pointer">
                    <TableCell className="px-8 py-5">
                      <Link href={`/dashboard/reports/${row.id}`} className="font-black italic text-xs underline underline-offset-4 decoration-border group-hover:decoration-neutral-900 transition-all">{row.id}</Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[9px] font-black italic tracking-widest uppercase">{row.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-[10px] font-medium text-muted-foreground italic">{row.case}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-[11px] font-black italic">{row.subject}</span>
                    </TableCell>
                    <TableCell className="text-center">
                       <Badge className={`text-[9px] font-black italic tracking-widest uppercase ${
                         row.status === 'Ready' ? 'bg-brand-lime text-black' : 
                         row.status === 'Review' ? 'bg-indigo-500 text-white' : 
                         'bg-neutral-100 text-neutral-400'
                       }`}>
                         {row.status}
                       </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                       <span className={`text-[10px] font-black uppercase italic ${row.dead.includes('left') ? 'text-orange-500' : row.dead === 'EXPIRED' ? 'text-rose-500 animate-pulse' : 'text-muted-foreground'}`}>
                         {row.dead}
                       </span>
                    </TableCell>
                    <TableCell className="px-8 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <Button size="sm" className="h-7 text-[8px] font-black uppercase italic tracking-widest px-4 bg-neutral-900 dark:bg-white dark:text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Open Report</Button>
                          <DropdownMenu>
                             <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost" className="h-7 w-7 rounded-lg">
                                   <MoreVertical className="w-3.5 h-3.5" />
                                </Button>
                             </DropdownMenuTrigger>
                             <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Review & Sign</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Submit to Regulator</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest">Assign Reviewer</DropdownMenuItem>
                                <DropdownMenuItem className="text-[10px] font-bold uppercase italic tracking-widest text-rose-500">Escalate Issue</DropdownMenuItem>
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

      {/* 4. ALL REPORTS TABLE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Report Registry</CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground">Historical and active disclosure archive</CardDescription>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="h-8 text-[9px] font-black uppercase italic border-neutral-200 dark:border-neutral-800">Assign Bulk</Button>
                 <Button className="h-8 text-[9px] font-black uppercase italic bg-indigo-600 text-white">Submit Selection</Button>
              </div>
            </div>
          </CardHeader>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-muted/30 rounded-none border-b border-border/50 w-full justify-start px-8 h-12">
              {["All", "Draft", "Review", "Ready", "Submitted", "Rejected"].map(tab => (
                <TabsTrigger 
                  key={tab} 
                  value={tab.toLowerCase()}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-lime data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white text-[10px] font-black uppercase italic tracking-widest px-8"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-neutral-400">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Type</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Entity</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Created By</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-neutral-400">Submission Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "STR-2291", type: "STR", entity: "Alex Reed", user: "J. Wilson", status: "Submitted", date: "Oct 12, 14:02" },
                    { id: "STR-1104", type: "STR", entity: "Sarah Jenkins", user: "S. Miller", status: "Submitted", date: "Oct 12, 09:15" },
                    { id: "CTR-4521", type: "CTR", entity: "Global Assets BVI", user: "J. Wilson", status: "Rejected", date: "Oct 11, 16:22" },
                    { id: "STR-7712", type: "STR", entity: "Jordan Peterson", user: "M. Chen", status: "Submitted", date: "Oct 10, 11:30" },
                    { id: "CTR-2201", type: "CTR", entity: "Atlas Trading", user: "S. Miller", status: "Submitted", date: "Oct 09, 15:45" },
                  ].map((row, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                      <TableCell className="px-8 py-4 font-black italic text-[11px] text-muted-foreground">{row.id}</TableCell>
                      <TableCell className="text-[10px] font-black italic">{row.type}</TableCell>
                      <TableCell className="text-[11px] font-black italic">{row.entity}</TableCell>
                      <TableCell className="text-[10px] font-medium text-muted-foreground italic">{row.user}</TableCell>
                      <TableCell className="text-center font-black italic text-[11px]">
                         <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest ${
                           row.status === 'Submitted' ? 'border-indigo-500 text-indigo-500' : 'border-rose-500 text-rose-500'
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

      {/* 5. NEW REPORT & 6. REVIEW WORKFLOW */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full relative overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl">
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="flex items-start justify-between mb-12">
                 <div>
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Generate Report Intelligence</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Automated and manual disclosure initialization</CardDescription>
                 </div>
                 <Zap className="w-10 h-10 text-brand-lime animate-pulse" />
              </div>
              
              <div className="space-y-8">
                 <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-24 rounded-3xl border-dashed flex flex-col items-center justify-center border-border hover:border-brand-lime hover:bg-brand-lime/5 transition-all group">
                       <Plus className="w-6 h-6 text-muted-foreground group-hover:text-brand-lime mb-2" />
                       <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white">Create Manually</span>
                    </Button>
                    <Button variant="outline" className="h-24 rounded-3xl border-dashed flex flex-col items-center justify-center border-border hover:border-indigo-500 hover:bg-indigo-500/5 transition-all group">
                       <FileCheck className="w-6 h-6 text-muted-foreground group-hover:text-indigo-500 mb-2" />
                       <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white">Pull from Case</span>
                    </Button>
                 </div>
                 
                 <div className="p-8 bg-neutral-900 text-white rounded-[32px] space-y-6 shadow-2xl">
                    <h5 className="text-[10px] font-black uppercase italic tracking-widest text-white/40">Suggested for Reporting</h5>
                    <div className="space-y-4">
                       {[
                         { case: "CASE-9921", subject: "Vladislav Orlov", reason: "Sudden account balance velocity shift" },
                         { case: "CASE-7712", subject: "Ouroboros Holdings", reason: "Multiple UBO sanctions matches" },
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4 last:border-0 hover:translate-x-1 transition-transform">
                            <div className="space-y-1">
                               <div className="text-[12px] font-black italic tracking-tight">{item.subject}</div>
                               <div className="text-[8px] font-bold text-white/40 uppercase">{item.case} • {item.reason}</div>
                            </div>
                            <Button size="icon" className="h-8 w-8 bg-white/5 border border-white/10 text-white group-hover:bg-brand-lime group-hover:text-black rounded-xl">
                               <Plus className="w-3.5 h-3.5" />
                            </Button>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
          </Card>
        </section>

        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-muted/20">
            <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
               <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Review Process Analytics</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground">Reporting quality and throughput tracking</CardDescription>
                  </div>
                  <Users className="w-8 h-8 text-indigo-500/30" />
               </div>
            </CardHeader>
            <CardContent className="p-10 space-y-10 flex-1">
               <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2">
                     <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Lead Time to Submit</span>
                        <span className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white">4.2d</span>
                     </div>
                     <Progress value={78} className="h-1 bg-muted" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between items-baseline">
                        <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Rework Ratio</span>
                        <span className="text-2xl font-black italic tracking-tighter text-rose-500">12%</span>
                     </div>
                     <Progress value={12} className="h-1 bg-muted" />
                  </div>
               </div>
               
               <div className="p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-border/50 space-y-4">
                  <h6 className="text-[9px] font-black uppercase tracking-widest italic text-muted-foreground">Pending Approval Workload</h6>
                  <div className="flex items-center -space-x-3">
                     {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-muted/20 flex items-center justify-center font-black italic text-[10px] bg-neutral-900 text-white">JW</div>
                     ))}
                     <div className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-muted flex items-center justify-center text-[10px] font-bold">+8</div>
                  </div>
                  <Button className="w-full h-8 text-[9px] font-black uppercase bg-neutral-900 dark:bg-white dark:text-black">Assign Next Review Packet</Button>
               </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 7. SUBMISSION TRACKING */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <CardHeader className="p-8 border-b border-border/50 bg-indigo-600 text-white">
             <div className="flex items-center justify-between">
                <div>
                   <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Filing Gateway Status</CardTitle>
                   <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Submission acknowledgment and regulator responses</CardDescription>
                </div>
                <Send className="w-8 h-8 text-white/30" />
             </div>
          </CardHeader>
          <CardContent className="p-0">
             <Table>
                <TableHeader className="bg-white/5 pointer-events-none border-b border-white/5">
                  <TableRow className="hover:bg-transparent border-0 font-black">
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 px-8 text-neutral-400">Report ID</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-neutral-400">Regulator</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Status</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-center text-neutral-400">Filing Ref</TableHead>
                    <TableHead className="text-[9px] font-black uppercase tracking-widest italic h-10 text-right px-8 text-neutral-400">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                   {[
                     { id: "STR-2291", reg: "FinCEN E-Filing", st: "Accepted", ref: "ACK-9921b", date: "12m ago" },
                     { id: "STR-1104", reg: "FinCEN E-Filing", st: "Processing", ref: "QUE-8812c", date: "4h ago" },
                     { id: "CTR-4521", reg: "goAML Center", st: "Rejected", ref: "ERR-403", date: "1d ago" },
                   ].map((sub, i) => (
                     <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors">
                        <TableCell className="px-8 py-5 font-black italic text-[11px]">{sub.id}</TableCell>
                        <TableCell className="text-[10px] font-bold italic text-muted-foreground">{sub.reg}</TableCell>
                        <TableCell className="text-center">
                           <Badge variant="outline" className={`text-[8px] font-black italic tracking-widest uppercase border-none px-0 ${
                             sub.st === 'Accepted' ? 'text-emerald-500' : sub.st === 'Rejected' ? 'text-rose-500' : 'text-indigo-500'
                           }`}>
                             {sub.st}
                           </Badge>
                        </TableCell>
                        <TableCell className="text-center text-[10px] font-black text-muted-foreground uppercase">{sub.ref}</TableCell>
                        <TableCell className="px-8 text-right">
                           <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              <Download className="w-3.5 h-3.5" />
                           </Button>
                        </TableCell>
                     </TableRow>
                   ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
      </section>

      {/* 8. REPORTING ANALYTICS & 9. COMPLIANCE LOGS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <section className="xl:col-span-2">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col">
               <div className="flex items-center justify-between mb-12">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Reporting Insights</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Institutional filing trends and success analytics</CardDescription>
                  </div>
                  <BarChart3 className="w-10 h-10 text-indigo-500/20" />
               </div>
               
               <div className="flex-1 min-h-[300px] flex items-end gap-1 px-4">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-indigo-500/10 rounded-full relative group">
                       <div className="absolute bottom-0 inset-x-0 bg-brand-lime transition-all group-hover:h-full rounded-full" style={{ height: `${30 + Math.random() * 70}%` }} />
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{Math.floor(Math.random() * 50)} Reports</div>
                    </div>
                  ))}
               </div>
               
               <div className="mt-12 grid grid-cols-3 gap-8">
                  {[
                    { l: "Avg Submission Time", v: "1.2h" },
                    { l: "Auto-Fill Accuracy", v: "94%" },
                    { l: "Regulator Acceptance", v: "98.8%" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic">{stat.l}</div>
                       <div className="text-xl font-black italic">{stat.v}</div>
                    </div>
                  ))}
               </div>
            </Card>
         </section>

         <section>
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col bg-neutral-900 text-white">
               <CardHeader className="p-8 border-b border-white/10">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Reporting Audit Trail</CardTitle>
                  <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1 italic">Disclosure lifecycle integrity logging</CardDescription>
               </CardHeader>
               <CardContent className="p-10 space-y-8 flex-1">
                  {[
                    { e: "STR-4401 Submitted", u: "J. Wilson", t: "12m ago", icon: <CheckCircle2 className="text-brand-lime" /> },
                    { e: "Version 4 Drafted", u: "Engine", t: "3h ago", icon: <FileText className="text-white/40" /> },
                    { e: "Review Assigned", u: "System", t: "1d ago", icon: <Users className="text-indigo-400" /> },
                    { e: "New STR Initialized", u: "J. Wilson", t: "2d ago", icon: <Plus className="text-white/40" /> },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-4 group">
                       <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-all">
                          {React.cloneElement(log.icon as React.elements, { className: "w-3.5 h-3.5" })}
                       </div>
                       <div>
                          <div className="text-[11px] font-black italic tracking-tight">{log.e}</div>
                          <div className="text-[8px] font-bold text-white/40 uppercase mt-0.5">{log.t} • {log.u}</div>
                       </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full h-8 text-[9px] font-black uppercase italic bg-white/5 border-white/10 mt-auto hover:bg-white/10 decoration-white/20">Full Integrity Export</Button>
               </CardContent>
            </Card>
         </section>
      </div>

      {/* 10. RECENT ACTIVITY & 11. QUICK ACTIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         <section className="xl:col-span-1">
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full bg-muted/20">
               <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
                  <CardTitle className="text-lg font-black italic uppercase tracking-tighter">Reporting Pulse</CardTitle>
               </CardHeader>
               <ScrollArea className="h-[300px]">
                  <div className="p-8 space-y-6">
                     {[
                       { l: "Report Created", t: "2m ago", c: "STR-9921" },
                       { l: "Report Updated", t: "1h ago", c: "CTR-8810" },
                       { l: "Review Passed", t: "3h ago", c: "STR-4522" },
                       { l: "Report Rejected", t: "1d ago", c: "STR-1102" },
                       { l: "Access Logged", t: "2d ago", c: "Audit Hub" },
                     ].map((ac, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black italic tracking-tight border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <span className="text-muted-foreground">{ac.l} <span className="text-neutral-900 dark:text-white ml-2 text-[9px] uppercase tracking-widest">{ac.c}</span></span>
                          <span className="text-muted-foreground/40">{ac.t}</span>
                       </div>
                     ))}
                  </div>
               </ScrollArea>
            </Card>
         </section>

         <section className="xl:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 h-full">
               {[
                 { label: "Create STR", icon: <Plus />, color: "bg-neutral-900 text-white shadow-xl shadow-black/20" },
                 { label: "Create CTR", icon: <Plus />, color: "bg-neutral-900 text-white shadow-xl shadow-black/20" },
                 { label: "Pending Workflow", icon: <Clock />, color: "bg-orange-500 text-white shadow-xl shadow-orange-500/20" },
                 { label: "Regulator Portal", icon: <ExternalLink />, color: "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20" },
                 { label: "Quick Submit", icon: <Zap />, color: "bg-brand-lime text-black shadow-xl shadow-brand-lime/20 font-black" },
                 { label: "Audit Trace", icon: <ShieldCheck />, color: "bg-white border border-border/50 shadow-sm" },
               ].map((action, i) => (
                 <button key={i} className={`flex flex-col items-center justify-center gap-3 p-6 rounded-3xl font-black text-[9px] uppercase tracking-widest italic hover:scale-105 active:scale-95 transition-all group ${action.color}`}>
                    <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                      {React.cloneElement(action.icon as React.elements, { className: "w-4 h-4" })}
                    </div>
                    {action.label}
                 </button>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
}

