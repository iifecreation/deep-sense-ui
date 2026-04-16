"use client";

import React from "react";
import { 
  Plug, 
  Search, 
  Filter, 
  ChevronRight,
  Terminal,
  MoreHorizontal,
  Activity,
  Zap,
  Cpu,
  Globe,
  Database,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  RefreshCcw,
  Settings,
  Plus,
  Key,
  Webhook,
  Server,
  Cloud,
  Network,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  TerminalSquare,
  LayoutGrid,
  ChevronDown,
  ArrowUpRight,
  ExternalLink
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

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PAGE HEADER */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-neutral-900 dark:text-white font-black italic">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase font-black">
              Integrations<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest italic leading-none font-black font-bold">
              Manage system connections, APIs, webhooks, and data ingestion across your platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 font-black">
            <Button variant="outline" className="h-10 px-4 text-xs font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
               <Key className="w-3.5 h-3.5 mr-2" />
               Generate API Key
            </Button>
            <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
               <Plus className="w-3.5 h-3.5 mr-2" />
               Add Integration
            </Button>
            <Button size="icon" variant="ghost" className="h-10 w-10">
               <RefreshCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="mt-6 flex flex-wrap gap-2 items-center bg-muted/30 p-2 rounded-2xl border border-border/50 font-black">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-xl border border-border shadow-sm">
            <Search className="w-3.5 h-3.5 text-muted-foreground shadow-sm" />
            <Input 
              placeholder="Search by ID, name, or endpoint..." 
              className="h-8 w-64 text-[11px] font-bold border-none shadow-none focus-visible:ring-0 italic"
            />
          </div>
          
          {[
            { label: "Type", value: "All Systems" },
            { label: "Status", value: "Active" },
            { label: "Environment", value: "Production" },
          ].map((filter, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 hover:bg-background rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border font-black shadow-sm font-bold h-10">
              <span className="text-[10px] font-black uppercase tracking-widest italic text-muted-foreground group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {filter.label}: {filter.value}
              </span>
              <ChevronDown className="w-2.5 h-2.5 text-muted-foreground/50 shadow-sm" />
            </div>
          ))}
          
          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg ml-auto mr-2">
            <Filter className="w-3.5 h-3.5 shadow-sm" />
          </Button>
        </div>
      </section>

      {/* 2. KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 font-black">
        {[
          { label: "Active Connections", value: "18", delta: "Normal", icon: <Server className="text-neutral-400" /> },
          { label: "Critical Failures", value: "01", delta: "+1", icon: <AlertTriangle className="text-rose-500 animate-pulse h-5 w-5 font-black uppercase leading-tight italic" /> },
          { label: "Webhook Success", value: "99.2%", delta: "-0.4%", icon: <Webhook className="text-brand-lime shadow-lg shadow-brand-lime/10" /> },
          { label: "API Requests", value: "4.2M", delta: "+15%", icon: <Zap className="text-indigo-500 font-black h-5 w-5 uppercase leading-tight italic" /> },
          { label: "Ingestion Rate", value: "842e/s", delta: "Peak", icon: <Database className="text-orange-500 font-black h-5 w-5 uppercase leading-tight italic" /> },
          { label: "Avg Latency", value: "12ms", delta: "-2ms", icon: <Cpu className="text-emerald-500 font-black h-5 w-5 uppercase leading-tight italic" /> },
        ].map((kpi, i) => (
          <div 
            key={i} 
            className="flex flex-col gap-4 p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-xl shadow-black/5 hover:border-brand-lime hover:translate-y-[-4px] transition-all group cursor-pointer font-black"
          >
            <div className="flex items-center justify-between font-black">
              <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors shadow-sm font-black">
                {kpi.icon}
              </div>
              <Badge variant="outline" className={`text-[9px] font-black italic tracking-widest uppercase border-none px-0 ${kpi.delta.includes('+') ? 'text-rose-500' : 'text-emerald-500'}`}>
                {kpi.delta}
              </Badge>
            </div>
            <div>
              <div className="text-2xl font-black italic tracking-tighter text-neutral-900 dark:text-white leading-none font-black uppercase">
                {kpi.value}
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 leading-tight font-black uppercase">
                {kpi.label}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. INTEGRATIONS LIST */}
      <section className="font-black italic font-bold">
        <Card className="rounded-[40px] border-border/50 shadow-3xl overflow-hidden font-black italic font-bold">
          <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 font-black italic font-bold">
            <div>
              <CardTitle className="text-xl font-black italic uppercase tracking-tighter shadow-sm font-black italic">Connected Systems</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic text-muted-foreground shadow-sm">Master registry of institutional and internal endpoints</CardDescription>
            </div>
            <div className="flex gap-2">
               <Button variant="outline" className="h-8 text-[9px] font-black uppercase italic border-border shadow-sm font-black italic font-bold">Test All Connections</Button>
               <Button variant="outline" className="h-8 text-[9px] font-black uppercase italic border-border shadow-sm font-black italic font-bold">Health Matrix</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 font-black italic font-bold">
            <Table>
              <TableHeader className="bg-muted px-8 font-black italic font-bold">
                <TableRow className="hover:bg-transparent border-b border-border/50 font-black uppercase italic font-bold">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-8 text-neutral-400 font-black italic font-bold h-10">System Component</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10 text-center">Uptime</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Last Sync</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Environment</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-8 text-neutral-400 font-black italic font-bold h-10">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="font-black italic font-bold text-neutral-900">
                {[
                  { name: "Fintech Core Gateway", id: "INT-880", type: "Core Banking", status: "HEALTHY", uptime: "99.98%", sync: "12s ago", env: "Production" },
                  { name: "Stripe Connect Hub", id: "INT-442", type: "Payments", status: "DEGRADED", uptime: "98.42%", sync: "1m ago", env: "Production" },
                  { name: "Global KYC Provider", id: "INT-112", type: "Identity", status: "HEALTHY", uptime: "100%", sync: "4s ago", env: "Production" },
                  { name: "Internal Data Pipeline", id: "INT-001", type: "Analytics", status: "HEALTHY", uptime: "99.99%", sync: "Now", env: "Sandbox" },
                  { name: "Twilio Auth Node", id: "INT-552", type: "Security", status: "DISABLED", uptime: "0.00%", sync: "2d ago", env: "Production" },
                ].map((row, i) => (
                  <TableRow key={i} className="group hover:bg-muted border-b border-border/50 transition-colors cursor-pointer font-black italic font-bold text-neutral-900 shadow-sm leading-none h-20">
                    <TableCell className="px-8 py-5">
                       <Link href={`/dashboard/integrations/${row.id}`} className="flex flex-col font-black italic font-bold text-neutral-900 shadow-sm leading-none">
                          <span className="text-[13px] font-black italic tracking-tighter leading-none h-4 uppercase">{row.name}</span>
                          <span className="text-[9px] font-black text-muted-foreground uppercase mt-1 italic opacity-40 leading-none h-4">{row.id} • {row.type}</span>
                       </Link>
                    </TableCell>
                    <TableCell>
                       <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic ${
                         row.status === 'HEALTHY' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : row.status === 'DEGRADED' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 'bg-muted text-muted-foreground border border-border'
                       }`}>
                         <div className={`w-1 h-1 rounded-full ${row.status === 'HEALTHY' ? 'bg-emerald-500 shadow-[0_0_8px_currentColor]' : row.status === 'DEGRADED' ? 'bg-orange-500 animate-pulse' : 'bg-muted-foreground'}`} />
                         {row.status}
                       </div>
                    </TableCell>
                    <TableCell className="text-center font-black italic font-bold text-neutral-900 shadow-sm leading-none h-4">
                       <span className="text-[12px] font-black italic tracking-tighter h-4 leading-none uppercase">{row.uptime}</span>
                    </TableCell>
                    <TableCell className="text-[10px] font-black text-muted-foreground uppercase italic h-4 leading-none h-full">{row.sync}</TableCell>
                    <TableCell>
                       <Badge variant="outline" className={`text-[9px] font-black uppercase italic tracking-widest border-border/50 font-black italic font-bold text-neutral-900 h-4 leading-none h-full shadow-sm`}>
                         {row.env}
                       </Badge>
                    </TableCell>
                    <TableCell className="px-8 text-right font-black italic font-bold text-neutral-900 shadow-sm leading-none h-4">
                       <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                             <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg shadow-sm font-black italic font-bold text-neutral-900">
                                <MoreHorizontal className="w-4 h-4 shadow-sm" />
                             </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-white rounded-2xl border-border shadow-2xl font-black italic font-bold text-neutral-900">
                             <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-10 px-4 font-black italic font-bold text-neutral-900">Test Connection</DropdownMenuItem>
                             <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-10 px-4 font-black italic font-bold text-neutral-900">View Logs</DropdownMenuItem>
                             <Separator className="my-1 bg-border/50 h-px font-black italic font-bold text-neutral-900" />
                             <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-10 px-4 text-rose-500 font-black italic font-bold">Disable Integration</DropdownMenuItem>
                          </DropdownMenuContent>
                       </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 font-black italic font-bold">
        {/* 4. WEBHOOKS PANEL */}
        <section className="font-black italic font-bold">
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden font-black italic font-bold">
            <CardHeader className="p-10 border-b border-border/50 bg-white font-black italic font-bold">
               <div className="flex items-center justify-between font-black italic font-bold">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter shadow-sm font-black italic font-bold">Live Webhooks</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic text-muted-foreground shadow-sm font-black italic font-bold">Inbound event delivery pipelines and response monitoring</CardDescription>
                  </div>
                  <Webhook className="w-8 h-8 text-brand-lime shadow-sm font-black" />
               </div>
            </CardHeader>
            <CardContent className="p-0 font-black italic font-bold">
              <Table>
                <TableHeader className="bg-muted px-8 capitalize h-10 font-black italic font-bold">
                  <TableRow className="hover:bg-transparent border-b border-border/50 font-black italic font-bold">
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400 font-black italic font-bold h-10">Endpoint / Event</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Status</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400 font-black italic font-bold h-10">Code</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-black italic font-bold text-neutral-900">
                  {[
                    { url: "https://api.deepsense.ai/hooks/payments", event: "transaction.created", status: "SUCCESS", code: "200 OK", time: "2m ago" },
                    { url: "https://api.deepsense.ai/hooks/kyc", event: "identity.verified", status: "FAILED", code: "502 BAD", time: "12m ago" },
                    { url: "https://api.deepsense.ai/hooks/auth", event: "session.started", status: "SUCCESS", code: "200 OK", time: "1h ago" },
                    { url: "https://api.deepsense.ai/hooks/alerts", event: "risk.detected", status: "SUCCESS", code: "201 CRE", time: "4h ago" },
                  ].map((hook, i) => (
                    <TableRow key={i} className="group hover:bg-muted border-b border-border/50 transition-colors cursor-pointer font-black italic font-bold text-neutral-900 shadow-sm leading-none h-20 h-full"> 
                      <TableCell className="px-10 py-5 font-black italic font-bold text-neutral-900 shadow-sm leading-none h-4">
                         <div className="flex flex-col font-black italic font-bold text-neutral-900 shadow-sm leading-none">
                            <span className="text-[11px] font-black italic tracking-tighter truncate max-w-[200px] h-4 leading-none uppercase">{hook.url}</span>
                            <span className="text-[8px] font-black text-muted-foreground uppercase mt-1 italic opacity-40 h-4 leading-none">{hook.event} • {hook.time}</span>
                         </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest h-4 leading-none ${
                           hook.status === 'SUCCESS' ? 'text-brand-lime border-brand-lime/20' : 'text-rose-500 border-rose-500/20'
                         }`}>
                           {hook.status}
                         </Badge>
                      </TableCell>
                      <TableCell className="px-10 text-right font-black italic font-bold text-neutral-900 shadow-sm leading-none h-4">
                         <span className={`text-[11px] font-black italic tracking-tighter h-4 leading-none uppercase ${hook.status === 'FAILED' ? 'text-rose-500' : 'text-muted-foreground'}`}>{hook.code}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-8 border-t border-border/50 flex justify-center font-black italic font-bold">
                 <Button variant="ghost" className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground hover:text-neutral-900 font-black italic font-bold">View Global Delivery Log</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. API KEYS PANEL */}
        <section className="font-black italic font-bold">
          <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden font-black italic font-bold bg-neutral-900 text-white relative h-full">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <CardHeader className="p-10 border-b border-white/5 relative z-10 font-black italic font-bold">
               <div className="flex items-center justify-between font-black italic font-bold">
                  <div>
                    <CardTitle className="text-xl font-black italic uppercase tracking-tighter shadow-sm font-black italic font-bold">Authentication Keys</CardTitle>
                    <CardDescription className="text-white/30 text-[10px] font-black uppercase tracking-widest mt-1 italic shadow-sm font-black italic font-bold">Secure tokens for external and server-side resource access</CardDescription>
                  </div>
                  <Key className="w-8 h-8 text-indigo-400 animate-pulse font-black italic font-bold" />
               </div>
            </CardHeader>
            <CardContent className="p-0 relative z-10 font-black italic font-bold h-full">
              <Table className="h-full">
                <TableHeader className="bg-white/5 px-10 border-b border-white/10 h-10 font-black italic font-bold">
                  <TableRow className="hover:bg-transparent border-none font-black italic font-bold text-white">
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-white/40 font-black italic font-bold h-10">Key Designation</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-white/40 font-black italic font-bold h-10">Last Used</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-white/40 font-black italic font-bold h-10">Grant</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="font-black italic font-bold text-white">
                  {[
                    { name: "PROD-WRITE-MAIN", key: "•••• •••• •••• 9921", used: "4m ago", status: "Active", perms: "Admin" },
                    { name: "SANDBOX-READ-DEMO", key: "•••• •••• •••• 1102", used: "1d ago", status: "Active", perms: "Read" },
                    { name: "API-GATEWAY-TLS", key: "•••• •••• •••• 4421", used: "In Use", status: "Active", perms: "Gateway" },
                  ].map((key, i) => (
                    <TableRow key={i} className="group hover:bg-white/5 border-b border-white/5 transition-colors cursor-pointer font-black italic font-bold h-20 h-full"> 
                      <TableCell className="px-10 py-5 font-black italic font-bold text-white leading-none h-4">
                         <div className="flex flex-col font-black italic font-bold text-white leading-none h-12">
                            <span className="text-[11px] font-black italic tracking-tighter uppercase leading-none h-4">{key.name}</span>
                            <span className="text-[9px] font-bold text-white/20 uppercase mt-1 italic h-4 leading-none">{key.key}</span>
                         </div>
                      </TableCell>
                      <TableCell className="text-[10px] font-black uppercase italic tracking-widest text-white/40 h-4 leading-none h-full">{key.used}</TableCell>
                      <TableCell className="px-10 text-right h-4 leading-none h-full">
                         <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-[8px] font-black uppercase tracking-widest h-4 leading-none h-full">
                           {key.perms}
                         </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-10 flex gap-4 mt-auto font-black italic font-bold bg-white/5 border-t border-white/10 h-24">
                 <Button className="flex-1 bg-white text-black text-[9px] font-black uppercase italic tracking-widest rounded-2xl h-12 shadow-sm font-black italic font-bold">Generate New Token</Button>
                 <Button variant="outline" className="flex-1 border-white/10 text-white text-[9px] font-black uppercase italic tracking-widest rounded-2xl h-12 shadow-sm font-black italic font-bold">Manage Rotations</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 font-black italic font-bold">
         {/* 6. DATA INGESTION PANEL */}
         <section className="xl:col-span-1 h-full font-black italic font-bold">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 h-full overflow-hidden flex flex-col bg-white font-black italic font-bold">
               <div className="flex items-start justify-between mb-12 font-black italic font-bold">
                  <div>
                     <CardTitle className="text-xl font-black italic uppercase tracking-tighter shadow-sm font-black italic font-bold">Ingestion Analytics</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground shadow-sm font-black italic font-bold">Real-time data stream velocity and queue depth</CardDescription>
                  </div>
                  <Database className="w-8 h-8 text-orange-500/20 shadow-sm font-black" />
               </div>
               
               <div className="space-y-10 flex-1 font-black italic font-bold">
                  {[
                    { label: "Transaction Core Feed", value: 842, limit: 1000, color: "bg-orange-500", unit: "e/s" },
                    { label: "Identity Sync Stream", value: 44, limit: 100, color: "bg-indigo-500", unit: "e/s" },
                    { label: "Ingestion Backlog Area", value: 12, limit: 100, color: "bg-neutral-900", unit: "%" },
                  ].map((stream, i) => (
                    <div key={i} className="space-y-3 font-black italic font-bold">
                       <div className="flex justify-between items-baseline font-black italic font-bold">
                          <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground font-black italic font-bold h-4 leading-none uppercase">{stream.label}</span>
                          <span className="text-[13px] font-black italic tracking-tighter font-black italic font-bold h-4 leading-none uppercase">{stream.value}<span className="text-[9px] opacity-40 ml-1">{stream.unit}</span></span>
                       </div>
                       <Progress value={(stream.value / stream.limit) * 100} className="h-1 bg-muted rounded-full" indicatorClassName={stream.color + " shadow-[0_0_8px_currentColor]"} />
                    </div>
                  ))}
               </div>
               
               <div className="mt-12 bg-muted/30 p-8 rounded-3xl border border-border/50 font-black italic font-bold h-32 leading-none whitespace-nowrap">
                  <div className="flex justify-between items-center h-4 leading-none">
                     <span className="text-[9px] font-black uppercase italic tracking-widest text-muted-foreground font-black italic font-bold h-4 leading-none uppercase">Queue Status</span>
                     <Badge className="bg-emerald-500/10 text-emerald-500 border-none text-[8px] font-black uppercase h-4 leading-none">OPTIMIZED</Badge>
                  </div>
                  <div className="text-3xl font-black italic tracking-tighter mt-4 h-8 leading-none uppercase">0.02<span className="text-sm opacity-20 ml-2">Latency-ms</span></div>
               </div>
            </Card>
         </section>

         {/* 3. SYNC & JOBS & ERROR LOGS */}
         <section className="xl:col-span-2 font-black italic font-bold h-full">
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden h-full flex flex-col font-black italic font-bold bg-white">
               <Tabs defaultValue="errors" className="w-full flex-1 flex flex-col font-black italic font-bold px-1 h-full">
                  <CardHeader className="p-10 border-b border-border/50 bg-white font-black italic font-bold h-32">
                     <div className="flex items-center justify-between font-black italic font-bold">
                        <div>
                           <CardTitle className="text-xl font-black italic uppercase tracking-tighter shadow-sm font-black italic font-bold">Pipeline Diagnostics</CardTitle>
                           <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-1 italic text-muted-foreground shadow-sm font-black italic font-bold">Job lifecycle and error escalation management</CardDescription>
                        </div>
                        <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-10 font-black italic font-bold">
                           <TabsTrigger value="jobs" className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white font-black italic font-bold">Scheduled Jobs</TabsTrigger>
                           <TabsTrigger value="errors" className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white font-black italic font-bold">Sync Errors</TabsTrigger>
                        </TabsList>
                     </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 font-black italic font-bold h-full">
                     <TabsContent value="errors" className="m-0 h-full font-black italic font-bold">
                        <Table className="h-full">
                           <TableHeader className="bg-muted px-10 border-b border-border/50 h-10 capitalize font-black italic font-bold">
                              <TableRow className="hover:bg-transparent border-none font-black italic font-bold">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400 font-black italic font-bold h-10">Diagnostic ID</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Component</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400 font-black italic font-bold h-10">Error Message</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400 font-black italic font-bold h-10">Trace</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody className="font-black italic font-bold text-neutral-900">
                              {[
                                { id: "ERR-9912", component: "Stripe Connect", msg: "TLS Handshake Timeout", time: "2m ago", risk: "CRITICAL" },
                                { id: "ERR-4401", component: "Global KYC", msg: "Rate Limit Exceeded (Tier 2)", time: "12m ago", risk: "WARNING" },
                                { id: "ERR-0012", component: "Auth Node B", msg: "Missing X-API-Signature Header", time: "1h ago", risk: "MINOR" },
                                { id: "ERR-7721", component: "Ingestion Hub", msg: "Malformed Payload Schema", time: "4h ago", risk: "WARNING" },
                              ].map((err, i) => (
                                <TableRow key={i} className="group hover:bg-rose-500/5 border-b border-border/50 transition-colors cursor-pointer font-black italic font-bold h-20 h-full"> 
                                 <TableCell className="px-10 py-5 font-black italic font-bold text-neutral-900 leading-none h-4">
                                    <div className="flex flex-col font-black italic font-bold text-neutral-900 leading-none h-12">
                                       <span className={`text-[11px] font-black italic tracking-tighter leading-none h-4 uppercase ${err.risk === 'CRITICAL' ? 'text-rose-500' : ''}`}>{err.id}</span>
                                       <span className="text-[8px] font-black text-muted-foreground uppercase mt-1 italic opacity-40 h-4 leading-none uppercase">{err.time}</span>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[10px] font-black uppercase italic tracking-widest h-4 leading-none h-full uppercase">{err.component}</TableCell>
                                 <TableCell className="text-[11px] font-black italic h-4 leading-none h-full uppercase">{err.msg}</TableCell>
                                 <TableCell className="px-10 text-right h-4 leading-none h-full">
                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg font-black italic font-bold">
                                       <TerminalSquare className="w-4 h-4 shadow-sm" />
                                    </Button>
                                 </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </TabsContent>
                     <TabsContent value="jobs" className="m-0 h-full font-black italic font-bold">
                        <div className="p-20 flex flex-col items-center justify-center text-center gap-6 h-full font-black italic font-bold">
                            <RefreshCcw className="w-12 h-12 text-muted-foreground/20 animate-spin-slow font-black" />
                            <div className="space-y-2 font-black italic font-bold">
                               <h6 className="text-[13px] font-black italic uppercase tracking-tighter font-black italic font-bold uppercase">Resolving Task Schedule...</h6>
                               <p className="text-[10px] text-muted-foreground uppercase italic tracking-widest font-black italic font-bold uppercase">Institutional sync jobs are currently undergoing state verification.</p>
                            </div>
                        </div>
                     </TabsContent>
                  </CardContent>
               </Tabs>
            </Card>
         </section>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 font-black italic font-bold">
         {/* 9. INTEGRATION ANALYTICS */}
         <section className="xl:col-span-3 font-black italic font-bold h-full">
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 overflow-hidden flex flex-col bg-white font-black italic font-bold">
               <div className="flex items-center justify-between mb-12 italic font-black font-black italic font-bold">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter shadow-sm font-black italic font-bold">Throughput Topology</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground shadow-sm font-black italic font-bold">API request density and webhook delivery success trends</CardDescription>
                  </div>
                  <BarChart3 className="w-10 h-10 text-brand-lime shadow-sm font-black" />
               </div>
               
               <div className="flex-1 min-h-[240px] flex items-end gap-1 px-4 mb-8 font-black italic font-bold">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-muted/30 rounded-full relative group font-black italic font-bold">
                       <div className="absolute bottom-0 inset-x-0 bg-neutral-900 transition-all group-hover:bg-brand-lime rounded-full h-full" style={{ height: `${20 + Math.random() * 80}%` }} />
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black italic font-bold">{Math.floor(Math.random() * 50)}k Req</div>
                    </div>
                  ))}
               </div>
               
               <div className="grid grid-cols-4 gap-8 border-t border-border/50 pt-8 italic font-black font-black italic font-bold">
                  {[
                    { l: "Success Rate", v: "99.98%" },
                    { l: "Delivery Success", v: "99.2%" },
                    { l: "Ingestion Peak", v: "1.2k/s" },
                    { l: "Avg Latency", v: "12ms" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1 font-black italic font-bold">
                       <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic leading-none font-black italic font-bold uppercase h-3 leading-none h-full">{stat.l}</div>
                       <div className="text-xl font-black italic font-black italic font-bold h-5 leading-none h-full uppercase">{stat.v}</div>
                    </div>
                  ))}
               </div>
            </Card>
         </section>

         {/* 11. QUICK ACTIONS & ACTIVITY */}
         <section className="xl:col-span-1 h-full font-black italic font-bold">
            <div className="flex flex-col gap-4 h-full font-black italic font-bold h-full">
               {[
                 { label: "Initialize Integration", icon: <Plug />, color: "bg-neutral-900 text-white shadow-2xl shadow-black/20" },
                 { label: "New API Gateway Key", icon: <Key />, color: "bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20" },
                 { label: "Retry Failed Hooks", icon: <Webhook />, color: "bg-white border border-border shadow-sm text-neutral-900 h-14" },
                 { label: "Diagnostic Health Check", icon: <ShieldCheck />, color: "bg-white border border-border shadow-sm text-neutral-900 h-14" },
                 { label: "Emergency Flush", icon: <Zap />, color: "bg-brand-lime text-black font-black" },
               ].map((action, i) => (
                 <button key={i} className={`flex-1 p-6 rounded-3xl font-black text-[10px] uppercase tracking-widest italic hover:scale-[1.03] active:scale-95 transition-all group flex items-center justify-between min-h-[80px] h-20 ${action.color}`}>
                    <div className="flex items-center gap-4 font-black italic font-bold">
                       <div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all font-black italic font-bold">
                          {React.cloneElement(action.icon as React.elements, { className: "w-5 h-5 shadow-sm" })}
                       </div>
                       {action.label}
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all h-full" />
                 </button>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
}

