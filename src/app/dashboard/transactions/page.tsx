import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  Download,
  AlertCircle,
  FileText,
  Activity,
  History,
  ArrowDownLeft,
  Calendar,
  Layers,
  MoreVertical
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Transactions</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time inspection of institutional value flows.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold">
            Run Analysis
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Volume", value: "$182.4M", trend: "+12.5%", icon: <Activity className="text-blue-600" /> },
          { label: "Flagged Value", value: "$4.1M", trend: "+2.1%", icon: <AlertCircle className="text-red-500" /> },
          { label: "Processing Avg", value: "42ms", trend: "-4ms", icon: <Layers className="text-slate-400" /> },
        ].map((stat, i) => (
          <Card key={i} className="rounded-xl shadow-sm border bg-white">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-900">{stat.value}</span>
                  <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>{stat.trend}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        {/* Table Filters */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search reference, customer..." 
              className="pl-9 bg-white text-sm"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Calendar className="w-4 h-4 mr-2" /> Last 24h
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Filter className="w-4 h-4 mr-2" /> All Filters
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Reference / Customer</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Method</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Value</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: "tx_9921_0x1", name: "Global Trade Solutions", method: "VISA • 4281", value: "$14,281.00", score: 12, status: "Active" },
              { id: "tx_1102_88a", name: "Elena Volkov", method: "CRYPTO • BTC", value: "$4.2M", score: 92, status: "Under Review" },
              { id: "tx_452b_ck9", name: "Mike Jones", method: "ACH • CHASE", value: "$840.42", score: 22, status: "Active" },
              { id: "tx_7721_pr2", name: "Nexus OTC", method: "APAY", value: "$1,200.00", score: 64, status: "Pending" },
              { id: "tx_0012_qw4", name: "Sarah O'Connell", method: "VISA • 8820", value: "$9,102.50", score: 8, status: "Active" },
            ].map((tx, i) => (
              <TableRow key={i} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">{tx.name}</span>
                    <span className="text-[10px] font-medium text-slate-400">{tx.id}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[11px] font-semibold text-slate-500">{tx.method}</TableCell>
                <TableCell className="text-xs font-bold text-slate-900">{tx.value}</TableCell>
                <TableCell>
                  <span className={`text-sm font-bold ${tx.score > 80 ? 'text-red-600' : tx.score > 40 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {tx.score}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
                    tx.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                    tx.status === 'Under Review' ? 'bg-amber-100 text-amber-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
