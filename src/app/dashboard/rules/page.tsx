import { 
  Zap, 
  Search, 
  ChevronRight, 
  Terminal, 
  RotateCcw,
  Play,
  Settings,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Filter,
  Plus,
  RefreshCcw,
  PlayCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RulesManagement() {
  const rules = [
    { id: "rl_9912", n: "High Velocity Check", s: "Active", l: "L2", p: "Engine Core" },
    { id: "rl_4421", n: "IP Geofence (EU/US)", s: "Testing", l: "L3", p: "Network Edge" },
    { id: "rl_1102", n: "Device Fingerprint Match", s: "Active", l: "L1", p: "Entity Profile" },
    { id: "rl_5528", n: "BIN Country Mismatch", s: "Disabled", l: "L2", p: "Payment Intel" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rules Engine</h1>
          <p className="text-sm text-slate-500 mt-1">Institutional heuristic logic designer and deployment.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <PlayCircle className="w-4 h-4 mr-2" /> Global Simulation
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Deploy Rule
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Rules", value: "24", subtext: "Live in production", icon: <ShieldCheck className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
          { label: "Rules in Testing", value: "12", subtext: "Shadow mode simulation", icon: <Zap className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Logic AlertsToday", value: "156", subtext: "Heuristic trigger volume", icon: <Cpu className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Rules Registry */}
        <Card className="xl:col-span-2 rounded-xl shadow-sm border bg-white overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search Rule ID, Name, Logic..." className="pl-9 bg-white text-sm" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
                <Filter className="w-4 h-4 mr-2" /> All Clusters
              </Button>
              <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
                 <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6 h-12">Rule Name / ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 h-12">Logic Cluster</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center h-12">Status</TableHead>
                <TableHead className="text-right pr-6 h-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule, i) => (
                <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                  <TableCell className="pl-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{rule.n}</span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase">{rule.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold bg-slate-50 border-slate-200 text-slate-500 uppercase">
                      {rule.p}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold border-none uppercase ${
                      rule.s === 'Active' ? 'bg-emerald-500 text-white' : 
                      rule.s === 'Testing' ? 'bg-blue-500 text-white' : 
                      'bg-slate-400 text-white'
                    }`}>
                      {rule.s}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Link href={`/dashboard/rules/${rule.id}`}>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Logic Architect Sidebar */}
        <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 relative overflow-hidden flex flex-col h-fit space-y-6">
          <div className="flex items-center justify-between relative z-10 font-bold">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm">Logic Architect</h3>
            </div>
            <button className="text-[10px] uppercase text-blue-400 hover:text-blue-300">Dry Run</button>
          </div>
          
          <div className="bg-black/40 rounded-lg p-4 font-mono text-emerald-400 text-[11px] leading-relaxed relative z-10 border border-white/5 space-y-1">
            <p className="opacity-40 italic">// DSL v4.2</p>
            <p><span className="text-blue-400">define</span> Rule_HighVelocity &#123;</p>
            <p className="pl-4"><span className="text-slate-500">condition:</span> txn.amt &gt; <span className="text-amber-500">10k</span></p>
            <p className="pl-4"><span className="text-slate-500">context:</span> velocity_30d &gt; <span className="text-amber-500">0.85</span></p>
            <p className="pl-4"><span className="text-slate-500">action:</span> <span className="text-red-500 font-bold">FLAG_URGENT</span></p>
            <p>&#125;</p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <div>
                <p className="text-[8px] uppercase text-slate-500 font-bold tracking-wider">Last Deployed</p>
                <p className="text-[10px] font-bold text-slate-200 italic">v4.02 by Sarah C.</p>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-white/5 h-8 px-2 text-[10px] font-bold">
              Update Cluster <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
