import { 
  AlertCircle, 
  CheckCircle2, 
  Users, 
  ArrowUpRight, 
  ArrowRight,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time risk monitoring and operational control.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-sm font-semibold">Generate Report</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
            <Plus className="w-4 h-4 mr-2" /> Create Case
          </Button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Open Alerts", value: "142", subtext: "Requires immediate review", icon: <AlertCircle className="text-red-500" />, color: "border-red-100 bg-red-50/30" },
          { title: "Pending Reviews", value: "28", subtext: "Within 24h SLA", icon: <CheckCircle2 className="text-blue-500" />, color: "border-blue-100 bg-blue-50/30" },
          { title: "High-Risk Customers", value: "842", subtext: "+5 since last sync", icon: <Users className="text-amber-500" />, color: "border-amber-100 bg-amber-50/30" },
        ].map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">{kpi.title}</CardTitle>
              {kpi.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{kpi.value}</div>
              <p className="text-xs text-slate-500 mt-1">{kpi.subtext}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Table Section */}
        <Card className="xl:col-span-2 rounded-xl shadow-sm border bg-white">
          <CardHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-slate-100">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">Priority Alerts</CardTitle>
              <CardDescription className="text-xs">Highest risk signals requiring analyst review.</CardDescription>
            </div>
            <Link href="/dashboard/alerts" className="text-blue-600 text-xs font-semibold flex items-center hover:underline">
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </CardHeader>
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Alert ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Customer</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Level</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Time</TableHead>
                <TableHead className="text-right pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: "AL-8821", name: "Global Trade Solutions", risk: "Critical", time: "2m ago" },
                { id: "AL-8822", name: "Elena Volkov", risk: "High", time: "14m ago" },
                { id: "AL-8823", name: "Nexus Crypto OTC", risk: "Medium", time: "1h ago" },
                { id: "AL-8824", name: "Sarah O'Connell", risk: "High", time: "3h ago" },
                { id: "AL-8825", name: "Silk Road Logistics", risk: "Medium", time: "5h ago" },
              ].map((alert, i) => (
                <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                  <TableCell className="text-xs font-semibold text-slate-400 pl-6">{alert.id}</TableCell>
                  <TableCell className="text-xs font-bold text-slate-900">{alert.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
                      alert.risk === 'Critical' ? 'bg-red-900 text-white' : alert.risk === 'High' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'
                    }`}>
                      {alert.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 font-medium">{alert.time}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-blue-600">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Intelligence Activity */}
        <Card className="rounded-xl shadow-sm border bg-white flex flex-col">
          <CardHeader className="px-6 py-4 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900">System Activity</CardTitle>
            <CardDescription className="text-xs">Operational ledger and audit stream.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[400px]">
            {[
              { event: "Case Escalated", time: "12m ago", detail: "Alert AL-8821 assigned to senior analyst.", icon: <ArrowUpRight className="text-blue-500" /> },
              { event: "Screening Match", time: "44m ago", detail: "Customer 'Elena Volkov' flagged for PEP match.", icon: <Users className="text-amber-500" /> },
              { event: "Report Filed", time: "1h ago", detail: "SAR #449 submitted for CTR compliance.", icon: <CheckCircle2 className="text-emerald-500" /> },
              { event: "New Customer", time: "3h ago", detail: "Atlas Logistics onboarding initiated.", icon: <Plus className="text-slate-400" /> },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== 3 && <div className="absolute left-[13px] top-8 bottom-[-24px] w-[1px] bg-slate-100" />}
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 z-10">
                  {activity.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{activity.event}</span>
                    <span className="text-[10px] font-medium text-slate-400">{activity.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{activity.detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t border-slate-100 mt-auto">
            <Button variant="outline" className="w-full text-xs font-bold h-9 bg-slate-50 hover:bg-slate-100 border-slate-200">
              Full System Trace
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
