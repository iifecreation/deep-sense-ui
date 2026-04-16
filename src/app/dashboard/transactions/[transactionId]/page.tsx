"use client";

import React from "react";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  User, 
  Globe, 
  Cpu, 
  Zap, 
  MoreHorizontal, 
  ChevronRight, 
  ArrowRight, 
  Download, 
  Terminal, 
  Settings, 
  Briefcase, 
  MessageSquare,
  Network,
  Fingerprint,
  Calendar,
  ExternalLink,
  Search,
  Plus,
  ArrowUpRight,
  LayoutGrid,
  FileText,
  Activity,
  BarChart3,
  MapPin,
  Laptop,
  CheckCircle2,
  XCircle,
  Eye,
  Info,
  History,
  TrendingUp,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

export default function TransactionDetailPage() {
  const params = useParams();
  const transactionId = params.transactionId as string;

  // Full detail mock data
  const txn = {
    id: transactionId,
    decision: "REVIEW",
    status: "Flagged",
    riskScore: 84,
    amount: "4,250.00",
    currency: "USD",
    timestamp: "Oct 15, 2026 • 19:32:11",
    customer: {
      name: "Elena Volkov",
      id: "CUST-9921",
      risk: "Medium",
      joined: "Jan 2024"
    },
    merchant: {
      name: "Z-Crypt Solutions Hub",
      id: "MERCH-4421",
      location: "Larnaca, Cyprus"
    },
    network: {
      ip: "185.112.42.9",
      isp: "MTN Cyprus",
      proxy: false,
      vpn: true,
      tor: false
    },
    device: {
      name: "MacBook Pro (macOS 14.2)",
      id: "DEV-7721-BC",
      integrity: "Trusted",
      browser: "Chrome 122.0.0"
    },
    scores: {
      ml: 78,
      rules: 92,
      anomaly: 81,
      device: 44,
      graph: 65,
      behavioral: 88,
      final: 84
    },
    rules: [
      { name: "High-Opacity Jurisdiction", type: "Geography", match: "Origin in CY (Tier 3)", severity: "Critical", weight: "+42" },
      { name: "Velocity Breach (1h)", type: "Behavior", match: "3 txns > $1k in 60m", severity: "High", weight: "+28" },
      { name: "VPN Ingress Detected", type: "Network", match: "IP flags active VPN", severity: "Medium", weight: "+12" },
      { name: "Unusual Merchant Category", type: "Model", match: "Cross-border crypto", severity: "Medium", weight: "+15" }
    ],
    alerts: [
      { id: "ALT-9921", type: "Velocity Breach", status: "Active", severity: "High" }
    ],
    timeline: [
      { event: "Transaction Received", time: "19:32:11", detail: "Payload validated via REST API" },
      { event: "Risk Scoring Initialized", time: "19:32:11", detail: "Orchestrator v4.2 engaged" },
      { event: "Rule Threshold Breach", time: "19:32:12", detail: "Score exceeded review threshold (75+)" },
      { event: "Alert [ALT-9921] Created", time: "19:32:14", detail: "Assigned to auto-queue" },
      { event: "Analyst Assigned", time: "19:44:02", detail: "Reviewer: Marcus Aurelius" }
    ]
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/transactions" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Flow Intelligence Registry
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{txn.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                txn.decision === 'BLOCK' ? 'bg-rose-500 text-white' : 'bg-orange-500 text-white'
              }`}>
                {txn.decision}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{txn.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <FileText className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Raw Payload
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Decision Action
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-emerald-500">
                      Approve & Release
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Block & Terminate
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Create Investigation
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
         {[
           { label: "Final Risk Score", value: txn.scores.final, delta: "75+ Review", icon: <Zap className="text-rose-500" />, color: "text-rose-500" },
           { label: "Transaction Amount", value: `$${txn.amount}`, delta: txn.currency, icon: <CreditCard className="text-muted-foreground" /> },
           { label: "Rule Violations", value: txn.rules.length, delta: "Critical: 01", icon: <ShieldAlert className="text-orange-500" /> },
           { label: "Network Risk", value: txn.network.vpn ? "High" : "Low", delta: "VPN Active", icon: <Globe className="text-indigo-500" /> },
           { label: "Confidence", value: "92%", delta: "Model 4.2", icon: <ShieldCheck className="text-brand-lime" /> },
           { label: "Decision SLA", value: "14m", delta: "Normal", icon: <Clock className="text-muted-foreground" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0">{kpi.delta}</Badge>
              </div>
              <div>
                 <div className={`text-2xl font-black italic tracking-tighter leading-none ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="risk" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="overview" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Overview</TabsTrigger>
                  <TabsTrigger value="risk" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Risk Engineering</TabsTrigger>
                  <TabsTrigger value="relationships" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Node Graph</TabsTrigger>
                  <TabsTrigger value="timeline" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Timeline</TabsTrigger>
               </TabsList>

               <TabsContent value="risk" className="m-0 space-y-8">
                  {/* DECISION EXPLANATION */}
                  <div className="p-8 bg-rose-500 rounded-[40px] text-white relative shadow-2xl overflow-hidden group">
                     <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-all duration-700" />
                     <div className="flex gap-8 items-start relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-[28px] flex items-center justify-center shrink-0 border border-white/20 shadow-lg shadow-black/20">
                           <Info className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-black italic uppercase tracking-tighter">Decision Logic Resolution</h3>
                           <p className="text-[13px] text-white/80 leading-relaxed font-medium italic italic">
                              This transaction scored <span className="text-white font-black underline underline-offset-4 decoration-white/30">{txn.scores.final}</span> due to a high-opacity jurisdiction hit combined with a behavior velocity breach. 
                              The ML pattern matches a known cash-out vector observed in similar institutional gateways where magnitude exceeds the 30-day baseline by 4x.
                           </p>
                           <div className="flex gap-4 pt-2">
                              <Badge className="bg-white/10 text-white border-white/10 text-[8px] font-black uppercase italic h-6 px-3">VPN INGRESS DETECTED</Badge>
                              <Badge className="bg-white/10 text-white border-white/10 text-[8px] font-black uppercase italic h-6 px-3">TIER 3 ORIGIN</Badge>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Fused Risk Vector</CardTitle>
                              <Activity className="w-8 h-8 text-muted-foreground/10" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-8">
                           {[
                             { label: "ML Inference Score", value: txn.scores.ml, icon: <Cpu className="w-4 h-4" /> },
                             { label: "Deterministic Rules", value: txn.scores.rules, icon: <ShieldAlert className="w-4 h-4" /> },
                             { label: "Behavioral Anomaly", value: txn.scores.anomaly, icon: <Zap className="text-indigo-500 w-4 h-4" /> },
                             { label: "Device Integrity", value: txn.scores.device, icon: <Fingerprint className="w-4 h-4" /> },
                           ].map((score, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between items-baseline mb-1">
                                   <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground flex items-center gap-2">
                                      {score.icon} {score.label}
                                   </span>
                                   <span className="text-lg font-black italic text-neutral-900">{score.value}</span>
                                </div>
                                <Progress value={score.value} className="h-1 bg-muted" indicatorClassName="bg-rose-500 shadow-[0_0_8px_currentColor]" />
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Entity Context</CardTitle>
                              <User className="w-8 h-8 text-muted-foreground/10" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 flex flex-col items-center gap-8">
                           <div className="w-24 h-24 rounded-[32px] bg-zinc-50 border border-border flex items-center justify-center relative shadow-inner overflow-hidden group cursor-pointer">
                              <User className="w-10 h-10 text-muted-foreground transition-transform group-hover:scale-110" />
                              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                 <Plus className="w-8 h-8 text-white" />
                              </div>
                           </div>
                           <div className="text-center">
                              <h4 className="text-xl font-black italic tracking-tighter text-neutral-900">{txn.customer.name}</h4>
                              <p className="text-[10px] font-black uppercase text-muted-foreground italic mt-1">{txn.customer.id} • {txn.customer.risk} Risk</p>
                           </div>
                           <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-border">
                              <div className="text-center">
                                 <div className="text-[9px] font-black uppercase text-muted-foreground italic mb-1">Last Match</div>
                                 <div className="text-[13px] font-black italic text-neutral-900">None</div>
                              </div>
                              <div className="text-center">
                                 <div className="text-[9px] font-black uppercase text-muted-foreground italic mb-1">Linked Devices</div>
                                 <div className="text-[13px] font-black italic text-neutral-900">03 Verified</div>
                              </div>
                           </div>
                           <Button variant="outline" className="w-full text-[9px] font-black uppercase italic tracking-widest border-border rounded-2xl h-12 shadow-sm">Audit Entity Profile</Button>
                        </CardContent>
                     </Card>
                  </div>

                  {/* TRIGGERED RULES TABLE */}
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Triggered Logic Nodes</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Rule Identification</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Match Detail</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center text-neutral-400">Impulse</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Severity</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {txn.rules.map((rule, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 cursor-pointer h-20">
                                   <TableCell className="px-10 py-5">
                                      <div className="flex flex-col">
                                         <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{rule.name}</span>
                                         <span className="text-[9px] font-black uppercase text-muted-foreground italic mt-1">{rule.type}</span>
                                      </div>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{rule.match}</TableCell>
                                   <TableCell className="text-center font-black italic text-rose-500">{rule.weight}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none ${
                                        rule.severity === 'Critical' ? 'text-rose-500' : 'text-orange-500'
                                      }`}>
                                         {rule.severity} Result
                                      </Badge>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="timeline" className="m-0">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-12 bg-white">
                     <div className="space-y-12">
                        {txn.timeline.map((step, i) => (
                           <div key={i} className="flex gap-10 items-start relative group">
                              {i !== txn.timeline.length - 1 && (
                                <div className="absolute left-[31px] top-10 bottom-[-48px] w-px bg-neutral-100 group-hover:bg-brand-lime transition-colors" />
                              )}
                              <div className={`w-16 h-16 rounded-[24px] bg-zinc-50 border border-neutral-100 flex flex-col items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-neutral-900 group-hover:text-white`}>
                                 <span className="text-[11px] font-black italic">{step.time.split(':')[0]}:{step.time.split(':')[1]}</span>
                                 <span className="text-[7px] font-black uppercase text-muted-foreground tracking-widest mt-0.5 group-hover:text-white/40">PM</span>
                              </div>
                              <div className="flex-1 space-y-2 pt-2">
                                 <h5 className="text-xl font-black italic uppercase tracking-tighter text-neutral-900">{step.event}</h5>
                                 <p className="text-[12px] text-muted-foreground italic font-medium">{step.detail}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* NETWORK CONTEXT */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Network Protocol</CardTitle>
                     <Globe className="w-6 h-6 text-muted-foreground/20" />
                  </div>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {[
                    { l: "IP Address", v: txn.network.ip },
                    { l: "ISP Context", v: txn.network.isp },
                    { l: "VPN Ingress", v: txn.network.vpn ? "Detected" : "Clear", c: txn.network.vpn ? "text-rose-500" : "text-brand-lime" },
                    { l: "Device OS", v: txn.device.name },
                    { l: "Device Integrity", v: txn.device.integrity, c: "text-brand-lime" }
                  ].map((it, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                       <span className="text-neutral-400">{it.l}</span>
                       <span className={it.c || "text-neutral-900"}>{it.v}</span>
                    </div>
                  ))}
                  <Separator className="bg-border/50" />
                  <div className="flex justify-between items-center p-4 bg-muted/20 border border-border rounded-2xl">
                     <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-[10px] font-black uppercase italic italic">{txn.merchant.location}</span>
                     </div>
                     <LinkIcon className="w-3 h-3 text-muted-foreground" />
                  </div>
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Investigation Ops</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">System-wide command over transaction lifecycle state.</p>
               </div>
               <div className="space-y-3">
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <Briefcase className="w-4 h-4 mr-2" />
                     Escalate to Case
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <MessageSquare className="w-4 h-4 mr-2" />
                     Add Analyst Note
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <ShieldAlert className="w-4 h-4 mr-2" />
                     Force Block Root
                  </Button>
               </div>
            </Card>

            {/* LINKED OBJECT FEED */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Linked Objects</CardTitle>
                  <Badge className="bg-muted text-muted-foreground border-none text-[8px] font-black uppercase italic">01 Total</Badge>
               </CardHeader>
               <CardContent className="p-0 space-y-4">
                  {txn.alerts.map((alert, i) => (
                    <Link key={i} href={`/dashboard/alerts/${alert.id}`} className="block p-5 bg-muted/20 border border-border rounded-[28px] group hover:bg-muted transition-all">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black italic text-neutral-900">{alert.id}</span>
                          <Badge className="bg-rose-500 text-white border-none text-[7px] font-black uppercase italic">{alert.severity}</Badge>
                       </div>
                       <div className="text-[11px] font-black uppercase tracking-widest text-muted-foreground italic h-4 overflow-hidden mb-3">{alert.type}</div>
                       <div className="flex justify-between items-center pt-2 border-t border-border/50">
                          <span className="text-[9px] font-black uppercase italic text-muted-foreground">{alert.status}</span>
                          <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                       </div>
                    </Link>
                  ))}
                  <Button variant="ghost" className="w-full text-[9px] font-black uppercase italic tracking-widest text-muted-foreground hover:text-neutral-900 border-none">Search Related Nodes</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
