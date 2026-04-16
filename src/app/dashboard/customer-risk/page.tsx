import { 
  ShieldAlert, 
  Search, 
  Filter, 
  Download,
  Plus,
  RefreshCcw,
  Users,
  AlertTriangle,
  TrendingUp,
  UserPlus,
  ShieldCheck,
  MoreVertical,
  PieChart,
  ArrowRight,
  ChevronRight,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CustomerRiskRegistry() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Risk Registry</h1>
          <p className="text-sm text-slate-500 mt-1">Institutional-wide risk profiling and lifecycle monitoring.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Add Customer
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "High-Risk Portfolio", value: "1,240", subtext: "+4.2% increased exposure", icon: <ShieldAlert className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "New Escalations", value: "42", subtext: "Within 24h review SLA", icon: <TrendingUp className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Screening Matches", value: "156", subtext: "Pending PEP/Sanctions review", icon: <Users className="text-amber-500" />, color: "border-amber-100 bg-amber-50/20" },
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

      {/* Main Registry Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search customers, entities..." className="pl-9 bg-white text-sm" />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Filter className="w-4 h-4 mr-2" /> All Risk Tiers
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
               <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Customer / Entity</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Tier</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Trend</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Flags</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "C-9921", name: "Ouroboros Trading", type: "Corporate", tier: "Critical", score: 94, trend: "+12", flags: ["Sanctions", "PEP"] },
              { id: "C-4402", name: "Sarah Jenkins", type: "Retail", tier: "High", score: 82, trend: "+5", flags: ["PEP"] },
              { id: "C-8812", name: "Atlas Global Ltd", type: "Merchant", tier: "Low", score: 25, trend: "-2", flags: ["Watchlist"] },
              { id: "C-1049", name: "Dmitry Volkov", type: "Retail", tier: "High", score: 91, trend: "+18", flags: ["Sanctions"] },
              { id: "C-5521", name: "Nexus Assets", type: "Financial", tier: "Medium", score: 79, trend: "0", flags: [] },
            ].map((customer, i) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{customer.name}</span>
                    <div className="flex gap-2 text-[10px] font-medium text-slate-400 uppercase">
                      <span>{customer.id}</span>
                      <span>•</span>
                      <span>{customer.type}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
                    customer.tier === 'Critical' ? 'bg-red-900 text-white' : 
                    customer.tier === 'High' ? 'bg-red-500 text-white' : 
                    customer.tier === 'Medium' ? 'bg-amber-500 text-white' : 
                    'bg-emerald-500 text-white'
                  }`}>
                    {customer.tier}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm font-bold text-slate-900">{customer.score}</TableCell>
                <TableCell>
                  <span className={`text-[10px] font-bold ${customer.trend.startsWith('+') ? 'text-red-500' : customer.trend === '0' ? 'text-slate-400' : 'text-emerald-500'}`}>
                    {customer.trend}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {customer.flags.map(f => (
                      <Badge key={f} variant="outline" className="text-[8px] font-bold uppercase border-slate-200 text-slate-500">{f}</Badge>
                    ))}
                    {customer.flags.length === 0 && <span className="text-[10px] text-slate-300 italic">None</span>}
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/customer-risk/${customer.id}`}>
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

      {/* Analytics Recap */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-sm border bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Portfolio Distribution</CardTitle>
              <CardDescription className="text-xs">Risk segmentation across customer layers.</CardDescription>
            </div>
            <PieChart className="w-5 h-5 text-slate-200" />
          </div>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              {[
                { label: "Critical Risk", value: "12%", color: "bg-red-800" },
                { label: "High Risk", value: "28%", color: "bg-red-500" },
                { label: "Medium Risk", value: "40%", color: "bg-amber-500" },
                { label: "Low Risk", value: "20%", color: "bg-emerald-500" },
              ].map((segment, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] font-medium">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${segment.color}`} />
                    <span className="text-slate-500">{segment.label}</span>
                  </div>
                  <span className="text-slate-900 font-bold">{segment.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-full aspect-square border-4 border-white shadow-inner">
              <span className="text-2xl font-bold text-slate-900">1,240</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">High Risk</span>
            </div>
          </div>
        </Card>

        <Card className="rounded-xl shadow-sm border bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Recent Risk Evolution</CardTitle>
              <CardDescription className="text-xs">Timeline of high-velocity profile changes.</CardDescription>
            </div>
            <TrendingUp className="w-5 h-5 text-slate-200" />
          </div>
          <div className="space-y-4">
            {[
              { type: "Critical", name: "Ouroboros Trading", reason: "Sudden velocity shift", time: "5m ago" },
              { type: "High", name: "Chen Wei", reason: "PEP status confirmed", time: "1h ago" },
              { type: "High", name: "Global Trade Solutions", reason: "New high-risk device link", time: "3h ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                <div className={`mt-1 h-2 w-2 rounded-full ${item.type === 'Critical' ? 'bg-red-800' : 'bg-red-500'}`} />
                <div className="flex-1 space-y-0.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-slate-900">{item.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{item.reason}</p>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-200 group-hover:text-blue-600 transition-colors" />
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4 text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            View Risk Audit Trail
          </Button>
        </Card>
      </div>
    </div>
  );
}

