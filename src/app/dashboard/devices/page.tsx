import { 
  Smartphone, 
  Search, 
  Filter, 
  Download,
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  Zap,
  RefreshCcw,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function DevicesRegistry() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Device Registry</h1>
          <p className="text-sm text-slate-500 mt-1">Managed device fingerprints and forensic signals.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Register Device
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "High-Risk Devices", value: "842", subtext: "Active threat fingerprints", icon: <ShieldAlert className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Emulator Detection", value: "1,241", subtext: "Blocked simulation nodes", icon: <Zap className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
          { label: "Trusted Mobile Fleet", value: "642K", subtext: "Whitelisted institutional devices", icon: <ShieldCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
        ].map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex items-center gap-4">
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

      {/* Device Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search Device ID, Model, OS..." className="pl-9 bg-white text-sm" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Filter className="w-4 h-4 mr-2" /> All Platforms
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
               <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Fingerprint / ID</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Model / Platform</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Risk Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Accounts</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Last Seen</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "dv_981a_8820", m: "iPhone 15 Pro", p: "iOS 17.4", s: 12, a: 1, t: "Just now", r: "Low" },
              { id: "dv_223b_1102", m: "Simulator.x86", p: "Android 12", s: 92, a: 42, t: "2m ago", r: "Critical" },
              { id: "dv_451c_6625", m: "MacBook Pro M3", p: "macOS 14.2", s: 22, a: 2, t: "14m ago", r: "Low" },
              { id: "dv_779d_4921", m: "Galaxy S24 Ultra", p: "Android 14", s: 64, a: 8, t: "1h ago", r: "Medium" },
              { id: "dv_3311_9901", m: "Pixel 8 Pro", p: "Android 14", s: 14, a: 1, t: "3h ago", r: "Low" },
            ].map((device, i) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6 py-4">
                  <code className="text-[10px] font-mono font-bold text-slate-900">{device.id}</code>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{device.m}</div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase">{device.p}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-bold text-slate-900">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 border-none ${
                    device.s > 80 ? 'bg-red-500 text-white' : device.s > 40 ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                  }`}>
                    {device.s}
                  </Badge>
                </TableCell>
                <TableCell className="text-center text-xs font-bold text-slate-900">{device.a}</TableCell>
                <TableCell className="text-xs font-medium text-slate-500">{device.t}</TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/devices/${device.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
