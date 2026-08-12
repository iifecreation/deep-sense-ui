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
  FileText,
  RefreshCcw
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
import { useDevice } from "@/hooks";

export default function DeviceDetailView() {
  // Fallback: No specific hook generated, using generic state
  const apiData: any[] = [];

  const params = useParams();
  const deviceId = params.deviceId as string;

  const { data: device, isLoading, isError, refetch } = useDevice(deviceId);

  if (isLoading) {
    return (
      <div className="space-y-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="h-4 w-32 bg-slate-100 animate-pulse rounded mb-1" />
            <div className="h-8 w-64 bg-slate-100 animate-pulse rounded" />
            <div className="h-4 w-48 bg-slate-100 animate-pulse rounded mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border bg-white h-24 animate-pulse" />
          ))}
        </div>
        <div className="h-96 bg-slate-100 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (isError || !device) {
    return (
      <div className="space-y-6 pb-20">
        <Link href="/dashboard/devices" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
          <ArrowLeft className="w-3 h-3" /> Hardware Registry
        </Link>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load device details</p>
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

  const riskScore = device.risk_score || device.riskScore || 0;
  const status = device.status || 'Unknown';
  const info = device.info || {};
  const signals = device.signals || [];
  const customers = device.customers || [];
  const transactions = device.transactions || [];
  const timeline = device.timeline || [];

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
              status === 'Blocked' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'
            }`}>
              {status}
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              Active Node
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{info.os || 'Unknown OS'} • {info.geo || 'Unknown Location'}</p>
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
        {(apiData || []).map((kpi, i) => (
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
                    {(apiData || []).map((item, i) => (
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
                    {(apiData || []).map((item, i) => (
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
                    {signals.map((signal: any, i: number) => (
                      <TableRow key={i} className="h-16">
                        <TableCell className="pl-6 text-xs font-bold text-slate-900">{signal.name}</TableCell>
                        <TableCell className="text-[11px] font-medium text-slate-500 italic">{signal.detail || signal.description}</TableCell>
                        <TableCell className="text-right pr-6">
                           <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold border-none ${
                             (signal.status === 'Clean' || signal.status === 'ok') ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                           }`}>
                             {signal.status}
                           </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    {signals.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center py-8 text-slate-500 text-sm">
                          No signals found for this device.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card className="rounded-xl shadow-sm border bg-white p-6">
                <div className="space-y-6">
                  {timeline.map((event: any, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">{event.event || event.action}</div>
                        <div className="text-xs text-slate-500 mt-1">{event.detail || event.description}</div>
                        <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{event.time || (event.timestamp && new Date(event.timestamp).toLocaleString())}</div>
                      </div>
                    </div>
                  ))}
                  {timeline.length === 0 && (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      No timeline events recorded.
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Linked Customers</h4>
            <div className="space-y-3">
              {customers.map((cust: any, i: number) => (
                <Link key={i} href={`/dashboard/customer-risk/${cust.id || cust.customer_id}`} className="block p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{cust.name || cust.customer_id}</span>
                    <Badge variant="outline" className="text-[8px] font-bold bg-emerald-100 text-emerald-700 border-none">{cust.risk || 'Low'}</Badge>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase">{cust.id || cust.customer_id} • Seen {cust.lastUsed || 'recently'}</p>
                </Link>
              ))}
              {customers.length === 0 && (
                <div className="text-center py-4 text-slate-500 text-xs">
                  No linked customers.
                </div>
              )}
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
