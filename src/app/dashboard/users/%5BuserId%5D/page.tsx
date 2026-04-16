"use client";

import { 
  ArrowLeft, 
  User, 
  ShieldCheck, 
  ShieldAlert,
  Clock, 
  MapPin, 
  Activity,
  Smartphone,
  CreditCard,
  History,
  Mail,
  Phone,
  Calendar,
  MoreHorizontal,
  ChevronRight,
  Share2,
  Lock,
  Zap,
  Fingerprint,
  Users,
  Globe,
  Briefcase,
  AlertTriangle,
  FileText,
  BadgeCheck,
  CheckCircle2,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CustomerDetailView() {
  const params = useParams();
  const userId = params.userId as string;

  // Mock data for high-fidelity view
  const customer = {
    id: userId,
    name: "Sarah Jenkins",
    status: "Active",
    segment: "Premium Institutional",
    riskProfile: "Low",
    joined: "Feb 14, 2024",
    profile: {
      email: "sarah.j@enterprise.co",
      phone: "+44 7700 900341",
      location: "London, United Kingdom",
      dob: "July 12, 1988",
      kyc: "Verified (Level 3)"
    },
    accounts: [
      { id: "ACC-9921-X", type: "Settlement", balance: "$4.2M", status: "Active" },
      { id: "ACC-8812-Y", type: "Operational", balance: "$150k", status: "Active" }
    ],
    devices: [
      { id: "DEV-1122", name: "iPhone 15 Pro", lastUsed: "now" },
      { id: "DEV-4491", name: "MacBook Pro M3", lastUsed: "2h ago" }
    ],
    transactions: [
      { id: "TXN-88219", amount: "$42,250.00", status: "Approved", date: "Oct 15, 2026" },
      { id: "TXN-88102", amount: "$8,150.00", status: "Approved", date: "Oct 12, 2026" }
    ],
    alerts: [
      { id: "ALT-4421", type: "Login Anomaly", status: "Resolved", severity: "Low" }
    ],
    timeline: [
      { event: "Account Login", time: "19:32:11", detail: "Session initiated from London, UK" },
      { event: "Compliance Review", time: "Oct 12", detail: "Annual KYC refresh completed" },
      { event: "Limit Increase", time: "Sep 22", detail: "Daily threshold raised to $10M" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/users" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Entity Directory
          </Link>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-slate-200">
               <AvatarFallback className="bg-slate-900 text-white font-bold text-xs">SJ</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{customer.name}</h1>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              {customer.segment}
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-emerald-500 text-white border-none">
              {customer.status}
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{customer.id} • Registered {customer.joined}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Share2 className="w-4 h-4 mr-2" /> Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Account Management <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem>Create Case</DropdownMenuItem>
              <DropdownMenuItem className="text-rose-600">Flag Segment</DropdownMenuItem>
              <DropdownMenuItem>Add Note</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Identity Trust Score", value: "98.2", subtext: "Confidence: Peak", icon: <ShieldCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
          { label: "Total Assets", value: "$4.35M", subtext: "Premium Settlement", icon: <CreditCard className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Compliance Tier", value: "Level 3", subtext: "Full KYC Verified", icon: <BadgeCheck className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
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
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="profile" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Profile Details</TabsTrigger>
              <TabsTrigger value="accounts" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Financial Nodes</TabsTrigger>
              <TabsTrigger value="history" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Entity Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                  <h4 className="text-sm font-bold text-slate-900 mb-6">Identity Intelligence</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Email Node", value: customer.profile.email, icon: <Mail className="w-3.5 h-3.5" /> },
                      { label: "Mobile Node", value: customer.profile.phone, icon: <Phone className="w-3.5 h-3.5" /> },
                      { label: "DOB Index", value: customer.profile.dob, icon: <Calendar className="w-3.5 h-3.5" /> },
                      { label: "Location Node", value: customer.profile.location, icon: <MapPin className="w-3.5 h-3.5" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-2">{item.icon} {item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                   <h4 className="text-sm font-bold text-slate-900 mb-6">KYC Verification</h4>
                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 mb-6">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</span>
                         <Badge variant="outline" className="text-[8px] font-bold bg-emerald-100 text-emerald-700 border-none px-1 py-0 uppercase">COMPLETE</Badge>
                      </div>
                      <h5 className="text-lg font-bold text-slate-900">{customer.profile.kyc}</h5>
                      <p className="text-[10px] font-medium text-slate-400 mt-1">Biometrics and ID registry verified via DeepSense AI Hub.</p>
                   </div>
                   <div className="space-y-3">
                      {[
                        { label: "OFAC Screening", status: "Clear" },
                        { label: "PEP List Status", status: "Clear" },
                      ].map((check, i) => (
                        <div key={i} className="flex justify-between items-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{check.label}</span>
                           <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{check.status}</span>
                        </div>
                      ))}
                   </div>
                </Card>
              </div>
              
              {/* Transactions in Profile View */}
              <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
                   <h4 className="text-sm font-bold text-slate-900">Recent Activity Ingress</h4>
                   <Button variant="ghost" size="sm" className="text-[10px] font-bold text-blue-600 hover:bg-blue-50">Full Archive</Button>
                </div>
                <Table>
                  <TableBody>
                    {customer.transactions.map((txn, i) => (
                      <TableRow key={i} className="h-14">
                        <TableCell className="pl-6 text-xs font-bold text-slate-900 uppercase tracking-wider">{txn.id}</TableCell>
                        <TableCell className="text-[11px] font-medium text-slate-400">{txn.date}</TableCell>
                        <TableCell className="text-center text-xs font-bold text-slate-900">{txn.amount}</TableCell>
                        <TableCell className="text-right pr-6">
                           <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold bg-slate-50 border-none text-slate-500 uppercase">{txn.status}</Badge>
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
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4 leading-none">
            <h4 className="text-sm font-bold text-slate-900">Verified Devices</h4>
            <div className="space-y-3">
              {customer.devices.map((dev, i) => (
                <Link key={i} href={`/dashboard/devices/${dev.id}`} className="block p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{dev.name}</span>
                    <Badge variant="outline" className="text-[8px] font-bold bg-blue-100 text-blue-700 border-none">TRUSTED</Badge>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase">Seen {dev.lastUsed}</p>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Admin Control</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-none">Administrative override for entity state.</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold shadow-sm">
                <Lock className="w-4 h-4 mr-2" /> Force Global Reset
              </Button>
              <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-white">
                <AlertTriangle className="w-4 h-4 mr-2" /> Suspend Entity
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
