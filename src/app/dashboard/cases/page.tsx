"use client";

import { 
  FolderSearch, 
  Search, 
  ChevronRight, 
  Clock, 
  User, 
  FileText,
  ShieldAlert,
  MoreVertical,
  Activity,
  CheckCircle2,
  Plus,
  Filter,
  Briefcase,
  AlertTriangle,
  History,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CaseManagementCenter() {
  const cases = [
    { id: "CS-4821", t: "Alex Reed Cluster Investigation", a: "Sarah Chen", d: "2h ago", s: "Active", p: "High" },
    { id: "CS-1102", t: "Multiple Account Bridge (Crypto)", a: "Mike Ross", d: "5h ago", s: "In Review", p: "Critical" },
    { id: "CS-6625", t: "Device ID Fingerprint Mismatch", a: "Automated", d: "1d ago", s: "Closed", p: "Low" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Case Management</h1>
          <p className="text-sm text-slate-500 mt-1">Forensic workflow and institutional triage hub.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export Log
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Initialize Case
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Open Investigations", value: "84", subtext: "12 active this hour", icon: <Briefcase className="text-blue-500" />, color: "border-blue-100 bg-blue-50/20" },
          { label: "Critical Escalations", value: "05", subtext: "Requires immediate peer-review", icon: <AlertTriangle className="text-red-500" />, color: "border-red-100 bg-red-50/20" },
          { label: "Avg Resolution Time", value: "4.2h", subtext: "Meeting SLA targets", icon: <History className="text-emerald-500" />, color: "border-emerald-100 bg-emerald-50/20" },
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

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cases.map((cs, i) => (
          <Card key={i} className="rounded-xl shadow-sm border bg-white group hover:border-blue-200 transition-all cursor-pointer">
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={`rounded-full px-2 py-0 border-none text-[10px] font-bold uppercase ${
                  cs.s === 'Active' ? 'bg-blue-100 text-blue-700' : 
                  cs.s === 'In Review' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cs.s}
                </Badge>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cs.id}</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{cs.t}</h4>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  <User className="w-3.5 h-3.5" /> {cs.a}
                </div>
              </div>
              <Separator className="bg-slate-50" />
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-300" /> {cs.d}
                </div>
                <Link href={`/dashboard/cases/${cs.id.toLowerCase()}`}>
                  <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600">
                    Audit Log <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Footer */}
      <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/5">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Active Surveillance Mode</h4>
              <p className="text-[11px] text-slate-400 font-medium">Monitoring 14 sensitive clusters across EU-WEST relays.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="h-10 border-white/10 text-white bg-white/5 hover:bg-white/10 text-xs font-bold shadow-sm">
              Generate Global Report
            </Button>
            <Button size="icon" variant="outline" className="h-10 w-10 border-white/10 bg-white/5 text-white hover:bg-white/10">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
