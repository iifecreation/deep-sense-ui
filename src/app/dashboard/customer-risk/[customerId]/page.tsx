"use client";

import { 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Clock, 
  User, 
  Zap, 
  MoreHorizontal, 
  ChevronRight, 
  Download, 
  Briefcase, 
  MessageSquare,
  FileText,
  Activity,
  Plus,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Info,
  History,
  TrendingUp,
  Link as LinkIcon,
  Fingerprint,
  Globe,
  MoreVertical,
  CheckSquare,
  Flag,
  Calendar,
  Layers,
  Archive,
  Star,
  Lock,
  MessageCircle,
  Network,
  Users,
  MapPin,
  Laptop,
  AlertCircle
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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export default function CustomerRiskProfile() {
  const params = useParams();
  const customerId = params.customerId as string;

  // Mock data for the customer
  const customer = {
    id: customerId,
    name: "Elena Volkov",
    riskScore: 78,
    riskTier: "High",
    status: "Under Review",
    analyst: "Marcus Aurelius",
    joined: "Jan 12, 2024",
    email: "elena.volkov@globalsecure.io",
    location: "Larnaca, Cyprus",
    type: "Institutional Admin",
    drivers: [
      { label: "Jurisdiction Opacity", value: 84, color: "bg-red-500" },
      { label: "Transaction Velocity", value: 72, color: "bg-amber-500" },
      { label: "Entity Linkage Depth", value: 45, color: "bg-blue-500" },
      { label: "Behavioral Deviation", value: 88, color: "bg-red-600" }
    ],
    screening: {
      sanctions: "Clear",
      pep: "Match Detected (L1)",
      watchlist: "Clear"
    },
    stats: {
      alerts: 3,
      cases: 1,
      trending: "+12%"
    }
  };

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/customer-risk" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Back to Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{customer.name}</h1>
            <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
              customer.riskTier === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {customer.riskTier} Risk
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              {customer.status}
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{customer.id} • {customer.type}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <ShieldAlert className="w-4 h-4 mr-2" /> Start EDD
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Perform Action <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem className="text-rose-600">Restrict Account</DropdownMenuItem>
              <DropdownMenuItem className="text-emerald-600">Clear Risk</DropdownMenuItem>
              <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Entity Risk Index", value: customer.riskScore, subtext: "Historical high: 82", icon: <Zap className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Active Alerts", value: customer.stats.alerts, subtext: "1 critical signal", icon: <AlertCircle className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
          { label: "Screening Status", value: "Flagged", subtext: "PEP Match Detected", icon: <ShieldAlert className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
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
          <Tabs defaultValue="risk" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="risk" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Risk Engineering</TabsTrigger>
              <TabsTrigger value="screening" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">AML Screening</TabsTrigger>
              <TabsTrigger value="timeline" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Activity Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="risk" className="mt-6 space-y-6">
              {/* Risk Explanation Card */}
              <Card className="rounded-xl shadow-sm border bg-blue-600 text-white p-6 relative overflow-hidden group">
                <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-white/5 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <Info className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Decision Logic</p>
                      <h4 className="text-lg font-bold">Why is this customer flagged?</h4>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-blue-50">
                    Calculated score of {customer.riskScore} is primarily driven by <span className="font-bold underline decoration-blue-300">Jurisdiction Opacity</span> (Cyprus) 
                    and highly anomalous transaction velocity. ML models have identified structural 
                    similarities to known high-risk institutional nodes in the last 24 hours.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {customer.drivers.map((driver, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-blue-100">
                          <span>{driver.label}</span>
                          <span>{driver.value}</span>
                        </div>
                        <Progress value={driver.value} className="h-1 bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Profile & Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-xl shadow-sm border bg-white p-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Core Metadata</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Entity Name", value: customer.name, icon: <User className="w-4 h-4" /> },
                      { label: "Email Address", value: customer.email, icon: <Globe className="w-4 h-4" /> },
                      { label: "Location", value: customer.location, icon: <MapPin className="w-4 h-4" /> },
                      { label: "Joined", value: customer.joined, icon: <Calendar className="w-4 h-4" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-2">{item.icon} {item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-xl shadow-sm border bg-white p-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Device Profile</h4>
                  <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-4 border border-slate-100 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <Laptop className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">MacBook Pro (M3 Max)</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase">IP: 185.112.42.9 • Verified</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <span>Trust Signals</span>
                      <span className="text-slate-900">3/4 Nodes Verified</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[1,2,3].map(i => <div key={i} className="flex-1 h-1 bg-blue-500 rounded-full" />)}
                      <div className="flex-1 h-1 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Actions & Compliance */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-6">
            <h4 className="text-sm font-bold text-slate-900">AML Screening Perimeter</h4>
            <div className="space-y-2">
              {[
                { label: "Sanctions", status: "Clear", icon: <ShieldCheck className="text-emerald-500" /> },
                { label: "PEP List", status: "Match (L1)", icon: <ShieldAlert className="text-amber-500" /> },
                { label: "Watchlist", status: "Clear", icon: <Globe className="text-emerald-500" /> },
              ].map((check, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    {check.icon}
                    <span className="text-[11px] font-semibold text-slate-600">{check.label}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">{check.status}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-xs font-bold border-slate-200">
              Manual Screening Hub
            </Button>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Institutional Control</h4>
              <p className="text-[11px] text-slate-400 font-medium">Governance override for high-exposure entities.</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                <Lock className="w-4 h-4 mr-2" /> Freeze Assets
              </Button>
              <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold">
                <MessageSquare className="w-4 h-4 mr-2" /> Add Forensic Note
              </Button>
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Related Alerts</h4>
            <div className="space-y-3">
              {[
                { id: "ALT-9921", type: "Velocity Breach", score: 84 },
                { id: "ALT-8812", type: "Multiple IP Ingress", score: 62 },
              ].map((alt, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-900">{alt.id}</p>
                    <p className="text-[10px] font-medium text-slate-400 uppercase">{alt.type}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] font-bold text-red-600 bg-red-50 border-none">{alt.score}</Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full text-[11px] font-bold text-blue-600">Full Incident Archive</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
