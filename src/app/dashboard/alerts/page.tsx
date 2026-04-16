import { 
  AlertCircle, 
  Search, 
  ArrowRight,
  ShieldAlert,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  UserCheck,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function AlertsCenter() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Alerts Center</h1>
          <p className="text-sm text-slate-500 mt-1">Situational risk feed and incident response gateway.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            Batch Acknowledge
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <UserCheck className="w-4 h-4 mr-2" /> Start Triage
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Alerts", value: "1,284", subtext: "12 critical signals", icon: <ShieldAlert className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Triage SLA", value: "98.2%", subtext: "Meeting target", icon: <Clock className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Resolved Today", value: "412", subtext: "+15% vs yesterday", icon: <CheckCircle2 className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
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

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Alerts Table */}
        <Card className="xl:col-span-3 rounded-xl shadow-sm border bg-white overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search alerts, customers..." className="pl-9 bg-white text-sm" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
                <Filter className="w-4 h-4 mr-2" /> Filter By Severity
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Alert ID / Signal</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Customer</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Severity</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</TableHead>
                <TableHead className="text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "alt_842a", title: "High Velocity Transaction", entity: "user_9102", risk: "Critical", score: 94, time: "2m ago" },
                { id: "alt_110b", title: "Multiple IP Ingress", entity: "anon_shadow", risk: "High", score: 82, time: "14m ago" },
                { id: "alt_452c", title: "New Device Profiling", entity: "mike.jones", risk: "Medium", score: 56, time: "1h ago" },
                { id: "alt_772d", title: "Geographic Drift", entity: "alex_reed", risk: "Low", score: 42, time: "3h ago" },
                { id: "alt_991e", title: "Large OTC Value Transfer", entity: "nexus_otc", risk: "High", score: 88, time: "5h ago" },
              ].map((alt, i) => (
                <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                  <TableCell className="pl-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-900 line-clamp-1">{alt.title}</span>
                      <span className="text-[10px] font-medium text-slate-400">{alt.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs font-bold text-slate-900">{alt.entity}</TableCell>
                  <TableCell>
                    <Badge className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
                        alt.risk === 'Critical' ? 'bg-red-900 text-white' : 
                        alt.risk === 'High' ? 'bg-red-100 text-red-600' : 
                        alt.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                      {alt.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-bold text-slate-900">{alt.score}</TableCell>
                  <TableCell className="text-xs text-slate-500 font-medium">{alt.time}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Severity Distribution</h4>
            <div className="space-y-4">
              {[
                { label: "Critical", value: 12, percentage: 12, color: "bg-red-500" },
                { label: "High", value: 42, percentage: 42, color: "bg-red-400" },
                { label: "Medium", value: 841, percentage: 84, color: "bg-amber-400" },
              ].map((sev, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{sev.label}</span>
                    <span className="text-slate-900">{sev.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${sev.color}`} style={{ width: `${sev.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">Active Analysts</h4>
              <Badge variant="outline" className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border-none">Live</Badge>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((a) => (
                <div key={a} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                  <img src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=Analyst${a}`} alt="Analyst" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm">+</div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">12 high-priority alerts are currently unassigned.</p>
            <Button size="sm" variant="outline" className="w-full text-xs font-bold border-slate-200">View Workforce</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
