"use client";

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
  MapPin,
  Laptop,
  CheckCircle2,
  XCircle,
  Eye,
  Info,
  History,
  TrendingUp,
  Link as LinkIcon,
  Smartphone
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

export default function TransactionDetailView() {
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
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/transactions" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Flow Intelligence Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{txn.id}</h1>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-amber-500 text-white border-none">
              {txn.decision}
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              {txn.status}
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{txn.timestamp} • Origin: {txn.merchant.location}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <FileText className="w-4 h-4 mr-2" /> Raw Payload
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Decision Action <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem className="text-emerald-600">Approve & Release</DropdownMenuItem>
              <DropdownMenuItem className="text-rose-600">Block & Terminate</DropdownMenuItem>
              <DropdownMenuItem>Escalate to Compliance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Fused Risk Score", value: txn.scores.final, subtext: "Critical threshold: 75", icon: <Zap className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Settlement Quantity", value: `$${txn.amount}`, subtext: txn.currency, icon: <CreditCard className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Rule Violations", value: txn.rules.length, subtext: "01 Critical breach", icon: <ShieldAlert className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
        ].map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex gap-4 items-center">
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

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Rationale Card */}
          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                   <Info className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Decision Rationale</p>
                   <h4 className="text-lg font-bold">Risk Factor Analysis</h4>
                </div>
             </div>
             <p className="text-sm font-medium leading-relaxed text-slate-300">
                This transaction scored <span className="text-white font-bold underline underline-offset-4 decoration-white/30">{txn.scores.final}</span> due to a high-opacity jurisdiction hit combined with a behavior velocity breach. 
                The ML pattern matches a known cash-out vector observed in similar institutional gateways where magnitude exceeds the 30-day baseline by 4x.
             </p>
             <div className="flex gap-2">
                <Badge variant="outline" className="text-[9px] font-bold border-white/10 text-slate-400 uppercase">VPN INGRESS DETECTED</Badge>
                <Badge variant="outline" className="text-[9px] font-bold border-white/10 text-slate-400 uppercase">TIER 3 ORIGIN</Badge>
             </div>
          </Card>

          <Tabs defaultValue="risk" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="risk" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Risk Engineering</TabsTrigger>
              <TabsTrigger value="timeline" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Lifecycle Timeline</TabsTrigger>
              <TabsTrigger value="graph" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Node Relationships</TabsTrigger>
            </TabsList>

            <TabsContent value="risk" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                    <h4 className="text-sm font-bold text-slate-900 mb-6">Vector Distribution</h4>
                    <div className="space-y-6">
                       {[
                         { label: "ML Inference", value: txn.scores.ml, icon: <Cpu className="w-3.5 h-3.5" /> },
                         { label: "Deterministic Rules", value: txn.scores.rules, icon: <ShieldAlert className="w-3.5 h-3.5" /> },
                         { label: "Behavioral Context", value: txn.scores.anomaly, icon: <Activity className="w-3.5 h-3.5" /> },
                         { label: "Device Trust", value: txn.scores.device, icon: <Smartphone className="w-3.5 h-3.5" /> },
                       ].map((item, i) => (
                         <div key={i} className="space-y-2">
                           <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                              <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                              <span className="text-slate-900">{item.value}</span>
                           </div>
                           <Progress value={item.value} className="h-1 bg-slate-50" indicatorClassName="bg-blue-600" />
                         </div>
                       ))}
                    </div>
                 </Card>

                 <Card className="rounded-xl shadow-sm border bg-white p-6 flex flex-col items-center text-center">
                    <h4 className="text-sm font-bold text-slate-900 mb-4 w-full text-left">Subject Node</h4>
                    <Avatar className="h-16 w-16 border border-slate-100 mb-4">
                       <AvatarFallback className="bg-slate-50 text-slate-400 font-bold text-lg">EV</AvatarFallback>
                    </Avatar>
                    <h5 className="text-lg font-bold text-slate-900">{txn.customer.name}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{txn.customer.id} • {txn.customer.risk} Risk</p>
                    <Separator className="my-6 bg-slate-50" />
                    <div className="grid grid-cols-2 gap-4 w-full">
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Match</p>
                          <p className="text-xs font-bold text-slate-900">None</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Devices</p>
                          <p className="text-xs font-bold text-slate-900">03 Verified</p>
                       </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6 h-10 text-[10px] font-bold uppercase tracking-widest">Audit Profile</Button>
                 </Card>
              </div>

              {/* Rules Table */}
              <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30">
                   <h4 className="text-sm font-bold text-slate-900">Triggered Logic Nodes</h4>
                </div>
                <Table>
                   <TableHeader className="bg-slate-50/50">
                      <TableRow>
                         <TableHead className="pl-6 h-10 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rule Engine</TableHead>
                         <TableHead className="h-10 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Match Condition</TableHead>
                         <TableHead className="h-10 text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center">Impact</TableHead>
                         <TableHead className="pr-6 h-10 text-[10px] text-slate-400 font-bold uppercase tracking-wider text-right">Severity</TableHead>
                      </TableRow>
                   </TableHeader>
                   <TableBody>
                     {txn.rules.map((rule, i) => (
                       <TableRow key={i} className="h-14">
                          <TableCell className="pl-6 text-xs font-bold text-slate-900">{rule.name}</TableCell>
                          <TableCell className="text-[11px] font-medium text-slate-500 uppercase">{rule.match}</TableCell>
                          <TableCell className="text-center text-xs font-bold text-red-600">{rule.weight}</TableCell>
                          <TableCell className="text-right pr-6">
                             <Badge variant="outline" className={`rounded-full px-2 py-0 border-none text-[10px] font-bold uppercase ${
                               rule.severity === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                             }`}>
                                {rule.severity}
                             </Badge>
                          </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
             <h4 className="text-sm font-bold text-slate-900 mb-6">Network Protocol</h4>
             <div className="space-y-4">
                {[
                  { label: "IP Origin", value: txn.network.ip },
                  { label: "VPN Ingress", value: txn.network.vpn ? "Detected" : "Clear", color: txn.network.vpn ? "text-red-500" : "text-emerald-500" },
                  { label: "Device Specs", value: txn.device.name },
                  { label: "ISP Hosting", value: txn.network.isp },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{item.label}</span>
                    <span className={`text-[11px] font-bold ${item.color || "text-slate-900"} leading-none`}>{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 mt-2">
                   <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                   <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider truncate">{txn.merchant.location}</span>
                </div>
             </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
             <div className="space-y-1">
                <h4 className="text-sm font-bold">Investigation Lifecycle</h4>
                <p className="text-[11px] text-slate-400 font-medium leading-tight">Administrative actions for this transaction.</p>
             </div>
             <div className="space-y-3">
                <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold shadow-sm">
                   <Briefcase className="w-4 h-4 mr-2" /> Initialize Case
                </Button>
                <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-white">
                   <MessageSquare className="w-4 h-4 mr-2" /> Add Note
                </Button>
                <Button variant="outline" className="w-full h-10 border-red-500/30 text-rose-500 hover:bg-red-500/5 text-xs font-bold">
                   <ShieldAlert className="w-4 h-4 mr-2" /> Force Global Block
                </Button>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
