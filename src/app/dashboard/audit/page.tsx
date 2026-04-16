"use client";

import React from "react";
import { 
  History, 
  Search, 
  Filter, 
  ChevronRight,
  Database,
  Lock,
  Clock,
  ArrowRight,
  Download,
  ShieldCheck,
  ShieldAlert,
  Users,
  Settings,
  MoreVertical,
  Activity,
  BarChart3,
  SearchCode,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Key,
  Globe,
  Plus,
  RefreshCcw,
  Zap,
  MoreHorizontal,
  ChevronDown,
  LayoutGrid
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

export default function AuditTrailsPage() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-neutral-900 dark:text-white font-black italic">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase">
              Audit Trails<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest italic leading-none">
              Track all user actions, system events, and compliance decisions across the platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
               <Download className="w-3.5 h-3.5 mr-2" />
               Download Report
            </Button>
            <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
               <Database className="w-3.5 h-3.5 mr-2" />
               Export Logs
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
              placeholder="Filter by ID, User, Action..." 
              className="h-8 w-64 text-[11px] font-bold border-none shadow-none focus-visible:ring-0 italic"
            />
          </div>
          
          {[
            { label: "Date Range", value: "Last 24h" },
            { label: "Action Type", value: "All Events" },
            { label: "User", value: "Everyone" },
            { label: "Severity", value: "Critical Only" },
          ].map((filter, i) => (
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
        {[
          { label: "Total Events", value: "48,291", delta: "+1.2k", icon: <Database className="text-neutral-400 font-bold" /> },
          { label: "User Actions", value: "842", delta: "+12", icon: <Users className="text-brand-lime" /> },
          { label: "Critical Events", value: "14", delta: "+2", icon: <AlertTriangle className="text-rose-500 animate-pulse" /> },
          { label: "Config Changes", value: "08", delta: "+1", icon: <Settings className="text-orange-500 font-bold" /> },
          { label: "Report Actions", value: "112", delta: "-5", icon: <FileText className="text-indigo-500 font-bold" /> },
          { label: "Security Events", value: "42", delta: "+4", icon: <ShieldAlert className="text-rose-600 font-bold" /> },
        ].map((kpi, i) => (
          <div 
            key={i} 
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:translate-y-[-4px] transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors">
                {kpi.icon}
              </div>
              <Badge variant="outline" className="text-[9px] font-black italic tracking-widest uppercase border-none px-0 text-emerald-500">
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

      {/* 3. CRITICAL EVENTS PANEL */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/20 backdrop-blur-xl">
          <CardHeader className="p-8 border-b border-rose-500/10 flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2 text-rose-500">
                 <AlertTriangle className="w-5 h-5 animate-pulse" />
                 Critical & High-Risk Events
              </CardTitle>
              <CardDescription className="text-rose-500/60 text-[10px] font-black uppercase tracking-widest mt-1 italic">
                 Security-sensitive occurrences requiring immediate oversight
              </CardDescription>
            </div>
            <Button variant="outline" className="h-8 text-[9px] font-black uppercase italic border-rose-500/20 text-rose-500 hover:bg-rose-500/10">Full Lockdown Export</Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-rose-500/5 px-8">
                <TableRow className="hover:bg-transparent border-b border-rose-500/10 font-bold">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8 text-rose-500">Event ID</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-rose-500">Entity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-rose-500">Action</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-rose-500">Actor</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-rose-500 text-right px-8">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "EVT-CC-091", entity: "Rule Logic: HIGH_VELOCITY_BVI", action: "Deleted", user: "John Carter (Admin)", time: "12m ago" },
                  { id: "EVT-SE-112", entity: "API Secret Key: #4491", action: "Revoked", user: "Security Engine", time: "44m ago" },
                  { id: "EVT-RE-004", entity: "STR-4491 (Rejected)", action: "Force Submit", user: "Vlad Orlov", time: "1h ago" },
                  { id: "EVT-UA-882", entity: "Root Permissions", action: "Grant Upgrade", user: "Michael Chen", time: "2h ago" },
                ].map((row, i) => (
                  <TableRow key={i} className="group hover:bg-rose-500/10 border-b border-rose-500/10 transition-colors cursor-pointer">
                    <TableCell className="px-8 py-5 font-black italic text-xs text-rose-500">{row.id}</TableCell>
                    <TableCell className="text-[11px] font-black italic">{row.entity}</TableCell>
                    <TableCell>
                       <Badge className="bg-rose-500 text-white text-[9px] font-black uppercase italic tracking-widest">
                         {row.action}
                       </Badge>
                    </TableCell>
                    <TableCell className="text-[10px] font-bold text-muted-foreground italic uppercase">{row.user}</TableCell>
                    <TableCell className="px-8 text-right text-[10px] font-black text-rose-500 italic">{row.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* 4. FULL AUDIT LOG TABLE & 5. CATEGORIZATION TABS */}
      <section>
        <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden">
          <Tabs defaultValue="all" className="w-full">
            <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
              <div className="flex items-center justify-between gap-8 flex-wrap">
                <div>
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Unified Audit Log</CardTitle>
                  <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground whitespace-nowrap">Global event feed with immutable trace points</CardDescription>
                </div>
                <TabsList className="bg-muted/50 p-1 rounded-2xl border border-border/50 h-10 overflow-x-auto">
                  {["All", "User Activity", "Compliance", "System", "Security", "Config"].map(tab => (
                    <TabsTrigger 
                      key={tab} 
                      value={tab.toLowerCase().replace(/ /g, '-')}
                      className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-neutral-900"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted px-8">
                  <TableRow className="hover:bg-transparent border-b border-border/50 font-black">
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8 text-neutral-400">Timestamp</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Actor</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 text-center">Action</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Entity Context</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">IP / Location</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8 text-neutral-400">Integrity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { time: "2026-04-15 11:22:01", actor: "jwilson_adm", action: "Submit Report", entity: "STR-44021", ip: "192.168.1.12", loc: "London, UK", integrity: "Verified" },
                    { time: "2026-04-15 11:15:33", actor: "smiller_cpl", action: "Approve Case", entity: "CASE-9912", ip: "192.168.1.44", loc: "London, UK", integrity: "Verified" },
                    { time: "2026-04-15 10:44:12", actor: "System_Core", action: "Run Screening", entity: "Batch_Q3", ip: "Internal", loc: "Cloud-US-East", integrity: "Verified" },
                    { time: "2026-04-15 10:12:00", actor: "root_adm", action: "Update Model", entity: "ML-Graph-v2", ip: "Auth-Proxy", loc: "Remote", integrity: "Verified" },
                    { time: "2026-04-15 09:55:21", actor: "jwilson_adm", action: "Export Data", entity: "Compliance_Feed", ip: "192.168.1.12", loc: "London, UK", integrity: "Verified" },
                  ].map((row, i) => (
                    <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors cursor-pointer">
                      <TableCell className="px-8 py-5">
                         <div className="flex flex-col">
                            <span className="text-[11px] font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none">{row.time.split(' ')[1]}</span>
                            <span className="text-[8px] font-bold text-muted-foreground uppercase opacity-40">{row.time.split(' ')[0]}</span>
                         </div>
                      </TableCell>
                      <TableCell>
                         <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[9px] font-black italic border border-border/50">JW</div>
                            <span className="text-[10px] font-black italic uppercase tracking-widest">{row.actor}</span>
                         </div>
                      </TableCell>
                      <TableCell className="text-center">
                         <Badge variant="outline" className="text-[9px] font-black uppercase italic tracking-widest border-border/50 group-hover:border-brand-lime transition-colors">
                            {row.action}
                         </Badge>
                      </TableCell>
                      <TableCell>
                         <Link href={`/dashboard/audit/${row.entity}`} className="text-[11px] font-black italic underline underline-offset-4 decoration-border/50 group-hover:decoration-neutral-900 transition-all">{row.entity}</Link>
                      </TableCell>
                      <TableCell>
                         <div className="flex flex-col">
                            <span className="text-[10px] font-black italic tracking-tight uppercase leading-none">{row.ip}</span>
                            <span className="text-[8px] font-bold text-muted-foreground uppercase mt-1 opacity-40 italic">{row.loc}</span>
                         </div>
                      </TableCell>
                      <TableCell className="px-8 text-right">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 text-emerald-500 border border-emerald-500/10 shadow-sm shadow-emerald-500/5">
                            <Lock className="w-2.5 h-2.5" />
                            <span className="text-[8px] font-black uppercase tracking-[0.2em] italic">{row.integrity}</span>
                         </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Tabs>
        </Card>
      </section>

      {/* 6. CONFIG CHANGES & 7. SECURITY EVENTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <section>
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col bg-white/50 dark:bg-neutral-900/50 backdrop-blur-3xl">
              <div className="flex items-start justify-between mb-12">
                 <div>
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Configuration Ledger</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Differential tracking of system and compliance rules</CardDescription>
                 </div>
                 <Settings className="w-10 h-10 text-orange-500/20" />
              </div>
              
              <div className="space-y-6 flex-1">
                 {[
                   { type: "Threshold Adjustment", entity: "Rule: KYC_001", user: "jwilson_adm", change: { from: "10,000", to: "7,500" }, time: "1h ago" },
                   { type: "Permission Change", entity: "Group: Compliance_Lead", user: "root_adm", change: { from: "Read-Only", to: "Read-Write" }, time: "4h ago" },
                   { type: "Webhook Update", entity: "Relay: Payout_API", user: "system_eng", change: { from: "Disabled", to: "Active" }, time: "12h ago" },
                 ].map((change, i) => (
                   <div key={i} className="p-6 bg-muted/20 border border-border/50 rounded-3xl space-y-4 hover:border-orange-500/30 transition-all group">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase italic tracking-widest text-orange-500 leading-none">{change.type}</div>
                            <div className="text-[13px] font-black italic">{change.entity}</div>
                         </div>
                         <span className="text-[9px] font-black text-muted-foreground/40 italic uppercase">{change.time}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-8 relative font-bold italic">
                         <div className="space-y-1">
                            <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/40 italic">Previous Value</div>
                            <div className="text-[11px] text-muted-foreground line-through opacity-40">{change.change.from}</div>
                         </div>
                         <div className="space-y-1">
                            <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/40 italic">Proposed Value</div>
                            <div className="text-[11px] text-orange-500">{change.change.to}</div>
                         </div>
                         <ArrowRight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-orange-500/20" />
                      </div>
                   </div>
                 ))}
              </div>
              <Button variant="outline" className="w-full h-10 mt-8 rounded-2xl border-orange-500/20 text-orange-500 hover:bg-orange-500/5 transition-all text-[10px] font-black uppercase italic tracking-widest">Full Rule History Trace</Button>
          </Card>
        </section>

        <section>
           <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col bg-neutral-900 text-white relative">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="flex items-start justify-between mb-12 relative z-10 font-black italic">
                 <div>
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Security & Access Events</CardTitle>
                    <CardDescription className="text-white/30 text-[10px] font-black uppercase tracking-widest mt-2 italic">Perimeter defense and identity access monitoring</CardDescription>
                 </div>
                 <ShieldAlert className="w-10 h-10 text-rose-500 animate-pulse" />
              </div>
              
              <div className="space-y-6 flex-1 relative z-10">
                 {[
                   { event: "Login Attempt Failure", user: "anon_88b (Unknown)", ip: "45.2.112.9", loc: "St. Petersburg, RU", time: "2m ago", risk: "HIGH" },
                   { event: "MFA Authentication Success", user: "smiller_cpl", ip: "Auth-Vault-B", loc: "Internal Proxy", time: "28m ago", risk: "LOW" },
                   { event: "Sensitive Query Detected", user: "jwilson_adm", ip: "192.168.1.12", loc: "London, UK", time: "52m ago", risk: "MEDIUM" },
                   { event: "Direct Token Exchange", user: "API-M2M-Gateway", ip: "Cloud-Relay-X", loc: "Intra-VPC", time: "1h ago", risk: "LOW" },
                 ].map((ev, i) => (
                   <div key={i} className="flex gap-6 items-center border-b border-white/5 pb-6 last:border-0 last:pb-0 font-bold italic">
                      <div className={`w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 border ${
                        ev.risk === 'HIGH' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-white/5 border-white/10 text-white/40'
                      }`}>
                         {ev.risk === 'HIGH' ? <ShieldAlert className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 space-y-1">
                         <div className="flex justify-between items-baseline">
                            <span className="text-[13px] font-black italic">{ev.event}</span>
                            <span className="text-[8px] font-black uppercase italic text-white/40">{ev.time}</span>
                         </div>
                         <div className="flex items-center gap-4 text-[9px] font-bold text-white/40 uppercase italic tracking-widest">
                            <span className="text-white/60">{ev.user}</span>
                            <span>{ev.ip}</span>
                            <span>{ev.loc}</span>
                         </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/5 group-hover:text-white transition-colors" />
                   </div>
                 ))}
              </div>
              <div className="mt-auto grid grid-cols-2 gap-4 relative z-10 font-black italic">
                 <div className="p-5 bg-white/5 border border-white/10 rounded-3xl text-center">
                    <div className="text-[8px] font-black uppercase text-white/40 italic mb-1">Failures (24h)</div>
                    <div className="text-2xl font-black italic text-rose-500">242</div>
                 </div>
                 <div className="p-5 bg-white/5 border border-white/10 rounded-3xl text-center">
                    <div className="text-[8px] font-black uppercase text-white/40 italic mb-1">MFA Bypass Traces</div>
                    <div className="text-2xl font-black italic">00</div>
                 </div>
              </div>
           </Card>
        </section>
      </div>

      {/* 8. INVESTIGATION TRACE & 9. REPORT ACTIVITY */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <section className="xl:col-span-2">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col bg-white">
               <div className="flex items-center justify-between mb-12">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Case & Investigation Trace</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Historical reconstruction of compliance decision chains</CardDescription>
                  </div>
                  <SearchCode className="w-10 h-10 text-indigo-500/20" />
               </div>
               
               <div className="flex-1 space-y-1 relative">
                  <div className="absolute left-[39px] top-4 bottom-4 w-px bg-muted/60 z-0" />
                  {[
                    { e: "Investigation Escalated", d: "Senior Lead required due to PEP match complexity.", u: "smiller_cpl", t: "Oct 15, 12:44" },
                    { e: "Evidence Bundle Added", d: "Attached 14.2MB of transaction forensics from Oct 1-7.", u: "jwilson_adm", t: "Oct 15, 10:15" },
                    { e: "Risk Tier Re-classification", d: "Shifted from MEDIUM to HIGH based on velocity sig.", u: "system_eng", t: "Oct 14, 16:22" },
                    { e: "Case Node Initialized", d: "Batch detection triggered from Rule #882b.", u: "system_eng", t: "Oct 14, 09:00" },
                  ].map((trace, i) => (
                    <div key={i} className="flex gap-8 relative z-10 pb-10 last:pb-0 group font-bold italic">
                       <div className="w-20 text-[9px] font-black uppercase text-muted-foreground italic pt-2 shrink-0">{trace.t.split(',')[1]}</div>
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-3.5 shrink-0 shadow-[0_0_8px_#6366f1] group-hover:scale-150 transition-transform" />
                       <div className="flex-1 p-6 bg-muted/20 border border-border/50 rounded-3xl group-hover:border-indigo-500/30 transition-all transition-transform hover:scale-[1.01]">
                          <div className="flex justify-between items-baseline mb-2">
                             <h6 className="text-[13px] font-black italic underline underline-offset-4 decoration-border/50">{trace.e}</h6>
                             <span className="text-[10px] font-black uppercase italic text-muted-foreground">{trace.u}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-bold italic">{trace.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>
         </section>

         <section>
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col">
               <CardHeader className="p-8 border-b border-border/50 bg-white dark:bg-neutral-950">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Report Activity Logs</CardTitle>
                  <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic italic text-muted-foreground">Disclosure submission and regulator lifecycle trace</CardDescription>
               </CardHeader>
               <CardContent className="p-10 space-y-12 flex-1 italic font-bold">
                  {[
                    { r: "STR-4491", event: "Submitted to FinCEN", t: "2m ago", status: "Success" },
                    { r: "STR-8822", event: "Review Rejected", t: "1h ago", status: "Rejected" },
                    { r: "CTR-0012", event: "Draft v2 Created", t: "4h ago", status: "Draft" },
                    { r: "STR-1102", event: "Batch Export Complete", t: "1d ago", status: "Success" },
                  ].map((rep, i) => (
                    <div key={i} className="flex gap-4 items-center group">
                       <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center shrink-0 border border-border/50 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                          <FileText className="w-5 h-5 text-muted-foreground group-hover:text-indigo-500" />
                       </div>
                       <div className="flex-1">
                          <div className="text-[11px] font-black italic tracking-tight">{rep.event} <span className="text-muted-foreground ml-2 text-[9px] uppercase tracking-widest italic">{rep.r}</span></div>
                          <div className="flex justify-between mt-1 items-baseline">
                             <span className="text-[8px] font-black text-muted-foreground/40 uppercase">{rep.t}</span>
                             <span className={`text-[8px] font-black uppercase italic ${rep.status === 'Success' ? 'text-brand-lime' : 'text-rose-500'}`}>{rep.status}</span>
                          </div>
                       </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full h-10 mt-auto rounded-2xl text-[10px] font-black uppercase italic tracking-widest">Gateway Response Archives</Button>
               </CardContent>
            </Card>
         </section>
      </div>

      {/* 11. AUDIT ANALYTICS & 12. QUICK ACTIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
         <section className="xl:col-span-3">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 overflow-hidden flex flex-col bg-white">
               <div className="flex items-center justify-between mb-12 italic font-black">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Event Pulse Analytics</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic">Institutional logging density and user activity trends</CardDescription>
                  </div>
                  <BarChart3 className="w-10 h-10 text-brand-lime" />
               </div>
               
               <div className="flex-1 min-h-[240px] flex items-end gap-1 px-4 mb-8">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-muted/30 rounded-full relative group">
                       <div className="absolute bottom-0 inset-x-0 bg-neutral-900 dark:bg-white transition-all group-hover:bg-brand-lime rounded-full" style={{ height: `${20 + Math.random() * 80}%` }} />
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{Math.floor(Math.random() * 5000)} Logs</div>
                    </div>
                  ))}
               </div>
               
               <div className="grid grid-cols-4 gap-8 border-t border-border/50 pt-8 italic font-black">
                  {[
                    { l: "Avg Daily Volume", v: "142k" },
                    { l: "Security Flags", v: "0.2%" },
                    { l: "Integrity Verified", v: "100%" },
                    { l: "Peak Load (MT)", v: "1,2k/s" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                       <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic leading-none">{stat.l}</div>
                       <div className="text-xl font-black italic">{stat.v}</div>
                    </div>
                  ))}
               </div>
            </Card>
         </section>

         <section className="xl:col-span-1 h-full">
            <div className="flex flex-col gap-4 h-full">
               {[
                 { label: "Export Global Ledger", icon: <Database />, color: "bg-neutral-900 text-white shadow-2xl shadow-black/20" },
                 { label: "Compliance Report", icon: <ShieldCheck />, color: "bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20" },
                 { label: "Verify All Hashes", icon: <Lock />, color: "bg-white border border-border/50 shadow-sm" },
                 { label: "Anomalous Traces", icon: <Activity />, color: "bg-white border border-border/50 shadow-sm" },
                 { label: "Snapshot State", icon: <LayoutGrid />, color: "bg-brand-lime text-black font-black" },
               ].map((action, i) => (
                 <button key={i} className={`flex-1 p-6 rounded-3xl font-black text-[10px] uppercase tracking-widest italic hover:scale-[1.03] active:scale-95 transition-all group flex items-center justify-between min-h-[80px] ${action.color}`}>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all">
                          {React.cloneElement(action.icon as React.elements, { className: "w-5 h-5" })}
                       </div>
                       {action.label}
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                 </button>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
}

}
