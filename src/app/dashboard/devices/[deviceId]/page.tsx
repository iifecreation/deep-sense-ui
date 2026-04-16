"use client";

import { 
  ArrowLeft, 
  Smartphone, 
  ShieldCheck, 
  ShieldAlert,
  Clock, 
  MapPin, 
  Cpu, 
  Activity,
  User,
  MoreHorizontal,
  ChevronRight,
  Share2,
  Lock,
  Globe,
  Zap,
  Fingerprint,
  Users,
  CreditCard,
  Network,
  History,
  ExternalLink,
  Table as TableIcon,
  AlertCircle,
  FileText
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function DeviceDetailView() {
  const params = useParams();
  const deviceId = params.deviceId as string;

  // Mock data for high-fidelity view
  const device = {
    id: deviceId,
    riskScore: 32,
    status: "Trusted",
    info: {
      browser: "Chrome 122.0.0",
      os: "macOS 14.4",
      ip: "185.112.42.9",
      isp: "MTN Cyprus",
      geo: "Larnaca, Cyprus",
      lastSeen: "Oct 15, 2026 • 19:32:11"
    },
    signals: [
      { name: "Velocity Breach (1h)", status: "Clean", detail: "0 txns in last 60m" },
      { name: "Geolocation Anomaly", status: "Clean", detail: "Matches primary residence" },
      { name: "VPN Ingress", status: "Detected", detail: "Active ProtonVPN Node", risk: "Amber" },
      { name: "Hardware Emulation", status: "Clean", detail: "Genuine Secure Enclave" }
    ],
    customers: [
      { id: "CUST-9921", name: "Elena Volkov", risk: "Low", lastUsed: "2 mins ago" },
      { id: "CUST-4412", name: "Marcus Reed", risk: "Low", lastUsed: "14 days ago" }
    ],
    transactions: [
      { id: "TXN-88219", amount: "$4,250.00", status: "Review", date: "Oct 15, 2026" },
      { id: "TXN-88102", amount: "$150.00", status: "Approved", date: "Oct 12, 2026" },
      { id: "TXN-87991", amount: "$1,200.00", status: "Approved", date: "Oct 10, 2026" }
    ],
    timeline: [
      { event: "Device Fingerprinted", time: "19:32:11", detail: "Hardware ID indexed via WebSDK" },
      { event: "Integrity Check", time: "19:32:11", detail: "Secure Enclave signature verified" },
      { event: "Customer Sync", time: "19:32:12", detail: "Linked to Elena Volkov (CUST-9921)" },
      { event: "Risk Scan", time: "19:32:14", detail: "No anomalies detected in last 30 days" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/devices" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Hardware Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{device.id}</h1>
            <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
              device.status === 'Blocked' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'
            }`}>
              {device.status}
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              Active Node
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{device.info.os} • {device.info.geo}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Share2 className="w-4 h-4 mr-2" /> Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Management <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem className="text-emerald-600">Trust Hardware</DropdownMenuItem>
              <DropdownMenuItem className="text-rose-600">Block ID</DropdownMenuItem>
              <DropdownMenuItem>Investigate Hub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Trust Score", value: 100 - device.riskScore, subtext: "Integrity: High", icon: <ShieldCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
          { label: "Linked Accounts", value: device.customers.length, subtext: "1 primary owner", icon: <Users className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Network Integrity", value: "Verified", subtext: "Residential IP", icon: <Globe className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
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
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="info" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Technical Specs</TabsTrigger>
              <TabsTrigger value="signals" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Risk Signals</TabsTrigger>
              <TabsTrigger value="history" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Device Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                  <h4 className="text-sm font-bold text-slate-900 mb-6">Hardware & OS</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Platform", value: device.info.os },
                      { label: "Browser Engine", value: device.info.browser },
                      { label: "Resolution", value: "2560 x 1440" },
                      { label: "CPU Architecture", value: "ARM64 (M3)" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                  <h4 className="text-sm font-bold text-slate-900 mb-6">Network Context</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Public IP", value: device.info.ip },
                      { label: "ISP / Provider", value: device.info.isp },
                      { label: "Geo City", value: device.info.geo },
                      { label: "ASN Number", value: "AS37518" },
                      { label: "Last Sync", value: device.info.lastSeen },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="signals" className="mt-6">
              <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50/50">
                    <TableRow>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6 h-10">Forensic Signal</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 h-10">Resolution</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-right pr-6 h-10">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {device.signals.map((signal, i) => (
                      <TableRow key={i} className="h-16">
                        <TableCell className="pl-6 text-xs font-bold text-slate-900">{signal.name}</TableCell>
                        <TableCell className="text-[11px] font-medium text-slate-500 italic">{signal.detail}</TableCell>
                        <TableCell className="text-right pr-6">
                           <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold border-none ${
                             signal.status === 'Clean' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                           }`}>
                             {signal.status}
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
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Linked Customers</h4>
            <div className="space-y-3">
              {device.customers.map((cust, i) => (
                <Link key={i} href={`/dashboard/customer-risk/${cust.id}`} className="block p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{cust.name}</span>
                    <Badge variant="outline" className="text-[8px] font-bold bg-emerald-100 text-emerald-700 border-none">{cust.risk}</Badge>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase">{cust.id} • Seen {cust.lastUsed}</p>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Device Control</h4>
              <p className="text-[11px] text-slate-400 font-medium">Executive commands for hardware identity.</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 mr-2" /> Trust Hardware
              </Button>
              <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-white">
                <Lock className="w-4 h-4 mr-2" /> Block ID
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
