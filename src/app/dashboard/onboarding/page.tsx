"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  Search, 
  Filter, 
  ChevronRight,
  UserCheck,
  MoreHorizontal,
  Clock,
  Briefcase,
  AlertTriangle,
  Users,
  XCircle,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  MoreVertical,
  Download,
  Settings,
  RefreshCcw,
  Zap,
  LayoutGrid,
  FileText,
  Fingerprint,
  Activity,
  BarChart3,
  Calendar,
  Globe,
  Plus,
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  AlertCircle
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useOnboardingReviews } from "@/hooks";

export default function OnboardingReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: reviewsData, isLoading, isError, refetch } = useOnboardingReviews({ search: searchQuery });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase">Onboarding Reviews<span className="text-brand-lime">.</span></h1>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border bg-white h-24 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase">Onboarding Reviews<span className="text-brand-lime">.</span></h1>
            </div>
          </div>
        </section>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load reviews</p>
                <p className="text-sm text-red-700">Please check your connection and try again.</p>
              </div>
            </div>
            <Button onClick={refetch} className="mt-4" variant="outline">
              <RefreshCcw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const items = reviewsData?.items || [];

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-neutral-900 dark:text-white font-black italic">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase">
              Onboarding Reviews<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest italic leading-none">
              Verify identity, screen risks, and manage the full customer onboarding lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
               <Settings className="w-3.5 h-3.5 mr-2" />
               Onboarding Rules
            </Button>
            <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
               <Plus className="w-3.5 h-3.5 mr-2" />
               New Review
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10" onClick={refetch}>
               <RefreshCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <Input 
              placeholder="Filter by ID, Name, or Reviewer..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 w-64 text-[11px] font-bold border-none shadow-none focus-visible:ring-0 italic"
            />
          </div>
          
          {([] as any[]).map((filter, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 hover:bg-background rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border">
              <span className="text-[10px] font-black uppercase tracking-widest italic text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {filter.label}: {filter.value}
              </span>
              <ChevronDown className="w-2.5 h-2.5 text-muted-foreground/50" />
            </div>
          ))}
          
          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg ml-auto mr-2">
            <Filter className="w-3.5 h-3.5" />
          </Button>
        </div>
      </section>

      {/* 2. KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {([] as any[]).map((kpi, i) => (
          <div 
            key={i} 
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:translate-y-[-4px] transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors">
                {kpi.icon}
              </div>
              <Badge variant="outline" className="text-[9px] font-black italic tracking-widest uppercase border-none px-0 text-emerald-500 font-bold">
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
          </div>
        ))}
      </section>

      {/* 3. PRIORITY ONBOARDING QUEUE */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl border-rose-500/10 transition-all font-bold italic">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Priority Onboarding Queue</CardTitle>
              <CardDescription className="text-rose-500/60 text-[10px] font-black uppercase tracking-widest mt-1 italic">High-risk or time-sensitive applications requiring immediate oversight</CardDescription>
            </div>
            <Button variant="outline" className="h-8 text-[9px] font-black uppercase italic border-border shadow-sm">View SLA Matrix</Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted px-8 capitalize">
                <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8 text-neutral-400">Application</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Risk Level</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 text-center">Screening</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 text-center">Identity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Submitted At</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8 text-neutral-400">Assignment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.filter((i: any) => i.risk_level === 'CRITICAL' || i.risk_level === 'HIGH' || i.status === 'ESCALATED').slice(0,4).map((row: any, i: number) => (
                  <TableRow key={row.id} className="group hover:bg-muted border-b border-border/50 transition-colors cursor-pointer">
                    <TableCell className="px-8 py-5">
                       <Link href={`/dashboard/onboarding/${row.id}`} className="flex flex-col">
                          <span className="text-[13px] font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none">{row.applicant_name}</span>
                          <span className="text-[10px] font-black text-muted-foreground uppercase mt-1 italic opacity-40">{row.id.split('-')[0]} • {row.customer_type}</span>
                       </Link>
                    </TableCell>
                    <TableCell>
                       <div className={`p-1 pl-3 rounded-full border ${
                         row.risk_level === 'CRITICAL' ? 'bg-rose-500/10 border-rose-500/20 text-rose-600' : 'bg-orange-500/10 border-orange-500/20 text-orange-600'
                       } text-[9px] font-black uppercase italic tracking-widest flex items-center gap-2 w-fit`}>
                         {row.risk_level || 'HIGH'}
                         <div className={`w-1 h-1 rounded-full ${row.risk_level === 'CRITICAL' ? 'bg-rose-500 animate-pulse' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]'}`} />
                       </div>
                    </TableCell>
                    <TableCell className="text-center">
                       <Badge variant="outline" className={`text-[9px] font-black uppercase italic tracking-widest ${
                         row.screening_status === 'MATCH' ? 'border-rose-500/20 text-rose-500 bg-rose-500/5' : 'border-orange-500/20 text-orange-500 bg-orange-500/5'
                       }`}>
                         {row.screening_status || 'Pending'}
                       </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                       <Badge className={`text-[9px] font-black uppercase italic tracking-widest ${
                         row.kyc_status === 'VERIFIED' ? 'bg-brand-lime text-black shadow-[0_0_12px_rgba(209,247,1,0.3)] font-bold' : row.kyc_status === 'FAILED' ? 'bg-rose-500 text-white' : 'bg-muted text-muted-foreground'
                       }`}>
                         {row.kyc_status || 'Pending'}
                       </Badge>
                    </TableCell>
                    <TableCell className="text-[11px] font-black italic text-rose-500">
                      {new Date(row.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="px-8 text-right">
                       <div className="flex items-center justify-end gap-3 group/actor font-bold italic">
                          <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground group-hover/actor:text-neutral-900 dark:group-hover/actor:text-white transition-colors">{row.assigned_user_id ? 'Assigned' : 'Unassigned'}</span>
                          <div className="w-8 h-8 rounded-full bg-muted border border-border border-dashed flex items-center justify-center">
                             <Users className="w-3.5 h-3.5 text-muted-foreground/40 group-hover/actor:text-brand-lime" />
                          </div>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
                {items.filter((i: any) => i.risk_level === 'CRITICAL' || i.risk_level === 'HIGH' || i.status === 'ESCALATED').length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-slate-500">
                      No priority reviews in queue.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 4. ALL APPLICATIONS & 5/6/7. TABS */}
        <section className="xl:col-span-2">
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col font-bold italic">
            <Tabs defaultValue="all" className="w-full flex-1 flex flex-col font-black italic">
              <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
                <div className="flex items-center justify-between gap-8 flex-wrap">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Application Registry</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic text-muted-foreground">Universal feed of all customer onboarding cycles</CardDescription>
                  </div>
                  <TabsList className="bg-muted/50 p-1 rounded-2xl border border-border/50 h-10 overflow-x-auto">
                    {["All", "Pending", "Approved", "Rejected", "Escalated"].map(tab => (
                      <TabsTrigger 
                        key={tab} 
                        value={tab.toLowerCase()}
                        className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-neutral-900"
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-auto max-h-[600px] font-bold italic">
                <Table>
                  <TableHeader className="bg-muted sticky top-0 z-10 font-black italic">
                    <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                      <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8 text-neutral-400">Customer</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Risk Tier</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">KYC</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Decision</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8 text-neutral-400 h-10">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((row: any) => (
                      <TableRow key={row.id} className="group hover:bg-muted/30 border-b border-border/50 transition-colors cursor-pointer">
                        <TableCell className="px-8 py-5">
                           <div className="flex flex-col">
                              <span className="text-[11px] font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none whitespace-nowrap">{row.applicant_name}</span>
                              <span className="text-[8px] font-bold text-muted-foreground uppercase mt-1 opacity-40">{row.id.split('-')[0]} • {new Date(row.created_at).toLocaleDateString()}</span>
                           </div>
                        </TableCell>
                        <TableCell>
                           <div className={`text-[10px] font-black uppercase italic tracking-widest ${
                             row.risk_level === 'HIGH' || row.risk_level === 'CRITICAL' ? 'text-rose-500' : row.risk_level === 'MEDIUM' ? 'text-orange-500' : 'text-emerald-500'
                           }`}>
                             {row.risk_level || 'LOW'}
                           </div>
                        </TableCell>
                        <TableCell>
                           <Badge variant="outline" className={`text-[8px] font-black tracking-widest uppercase italic px-2 border-border/50 ${
                             row.kyc_status === 'VERIFIED' ? 'text-emerald-500' : row.kyc_status === 'FAILED' ? 'text-rose-500' : 'text-muted-foreground'
                           }`}>
                             {row.kyc_status}
                           </Badge>
                        </TableCell>
                        <TableCell>
                           <div className="flex items-center gap-2">
                              {row.status === 'APPROVED' ? <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" /> : row.status === 'REJECTED' ? <XCircle className="w-3.5 h-3.5 text-rose-500" /> : <Clock className="w-3.5 h-3.5 text-muted-foreground" />}
                              <span className="text-[10px] font-black uppercase italic tracking-widest">{row.status}</span>
                           </div>
                        </TableCell>
                        <TableCell className="px-8 text-right">
                           <Link href={`/dashboard/onboarding/${row.id}`}>
                             <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg group-hover:bg-background shadow-none border-none">
                                <ArrowRight className="w-3.5 h-3.5" />
                             </Button>
                           </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                    {items.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-10 text-slate-500">
                          No applications found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Tabs>
          </Card>
        </section>

        {/* 10. ONBOARDING ANALYTICS */}
        <section className="xl:col-span-1">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full flex flex-col bg-white">
            <CardHeader className="p-0 mb-10 font-black italic">
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Verification Throughput</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic text-muted-foreground">Lifecycle efficiency and match rates</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-12 flex-1 font-bold italic">
               <div className="space-y-6">
                  {([] as any[]).map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between items-baseline">
                          <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">{stat.label}</span>
                          <span className="text-[13px] font-black italic tracking-tighter">{stat.value}{stat.label.includes('Rate') ? '%' : 'min'}</span>
                       </div>
                       <Progress value={stat.value} className="h-1 bg-muted rounded-full" indicatorClassName={stat.color} />
                    </div>
                  ))}
               </div>

               <div className="bg-muted/30 p-8 rounded-3xl border border-border/50 font-bold italic font-black">
                  <div className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground mb-4">Onboarding Funnel (24h)</div>
                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between items-center text-[11px] font-black italic">
                        <span>Submitted Applications</span>
                        <span className="text-neutral-900">{items.length}</span>
                     </div>
                     <div className="flex justify-between items-center text-[11px] font-black italic">
                        <span>Auto-Approved (Low)</span>
                        <span className="text-brand-lime">{items.filter((i:any) => i.status === 'APPROVED').length}</span>
                     </div>
                     <div className="flex justify-between items-center text-[11px] font-black italic">
                        <span>Manual Review Queue</span>
                        <span className="text-rose-500">{items.filter((i:any) => i.status === 'PENDING' || i.status === 'IN_REVIEW').length}</span>
                     </div>
                  </div>
               </div>
               
               <Button className="w-full h-11 bg-neutral-900 text-white rounded-2xl text-[10px] font-black uppercase italic tracking-widest mt-auto hover:scale-[1.02] transition-all shadow-xl font-bold font-black">Full Funnel Analysis</Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 11. ACTIVITY FEED */}
        <section className="lg:col-span-2">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full flex flex-col bg-white overflow-hidden relative">
             <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[120%] bg-brand-lime/5 blur-[100px] rounded-full pointer-events-none" />
             <div className="flex items-center justify-between mb-12 relative z-10 font-black italic font-bold">
                <div>
                   <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Recent Reviews Activity</CardTitle>
                   <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground">Live stream of vetting decisions and matching engine results</CardDescription>
                </div>
                <Activity className="w-10 h-10 text-brand-lime" />
             </div>
             
             <div className="space-y-0 relative z-10 font-bold italic font-black">
                {items.slice(0, 4).map((act: any, i: number) => {
                  const statusColor = act.status === 'APPROVED' ? 'success' : act.status === 'REJECTED' ? 'danger' : act.status === 'ESCALATED' ? 'info' : 'warning';
                  const actionMap: any = {
                    APPROVED: "Approved Application",
                    REJECTED: "Rejected Application",
                    ESCALATED: "Escalated to EDD",
                    PENDING: "Submitted Application",
                    IN_REVIEW: "Review Started"
                  };
                  return (
                  <div key={i} className="flex gap-6 py-6 border-b border-border/50 last:border-0 hover:bg-muted/10 transition-colors group px-4 -mx-4 rounded-2xl">
                     <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                       statusColor === 'success' ? 'bg-brand-lime' : statusColor === 'warning' ? 'bg-orange-500' : statusColor === 'danger' ? 'bg-rose-500' : 'bg-indigo-500'
                     } shadow-[0_0_8px_currentColor]`} />
                     <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-baseline font-bold italic">
                           <span className="text-[13px] font-black italic">{actionMap[act.status] || act.status}</span>
                           <span className="text-[8px] font-black text-muted-foreground uppercase opacity-40">{new Date(act.updated_at || act.created_at).toLocaleDateString()}</span>
                        </div>
                        <div className="text-[11px] font-black italic tracking-tighter text-muted-foreground group-hover:text-neutral-900 transition-colors">
                           {act.assigned_user_id || "System"} <span className="mx-2 opacity-20">•</span> {act.applicant_name}
                        </div>
                     </div>
                  </div>
                )})}
             </div>
          </Card>
        </section>

        {/* 12. QUICK ACTIONS */}
        <section className="lg:col-span-1 h-full">
           <div className="flex flex-col gap-4 h-full font-black italic font-bold">
              {([] as any[]).map((action, i) => (
                <button key={i} className={`flex-1 p-6 rounded-3xl font-black text-[10px] uppercase tracking-widest italic hover:scale-[1.03] active:scale-95 transition-all group flex items-center justify-between min-h-[80px] ${action.color}`}>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                         {React.cloneElement(action.icon as any, { className: "w-5 h-5 shadow-sm" })}
                      </div>
                      {action.label}
                   </div>
                   <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}

