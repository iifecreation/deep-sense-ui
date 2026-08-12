"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FolderSearch, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  UserCircle,
  FileCheck2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_CASES = [
  {
    id: "CASE-1092",
    entity: "Alexandro M. (usr_99812)",
    type: "Account Takeover",
    status: "Open",
    priority: "Critical",
    assignedTo: "Unassigned",
    openedAt: "2 hours ago",
    sla: "Breach in 4h"
  },
  {
    id: "CASE-1091",
    entity: "Global Trade LLC",
    type: "AML / Money Laundering",
    status: "Investigating",
    priority: "High",
    assignedTo: "Sarah Jenkins",
    openedAt: "1 day ago",
    sla: "Breach in 2d"
  },
  {
    id: "CASE-1090",
    entity: "Acme Corp (usr_55112)",
    type: "Sanctions Match",
    status: "Pending Docs",
    priority: "High",
    assignedTo: "David Chen",
    openedAt: "3 days ago",
    sla: "Paused (Docs)"
  },
  {
    id: "CASE-1089",
    entity: "Jessica L.",
    type: "Friendly Fraud",
    status: "Open",
    priority: "Medium",
    assignedTo: "Unassigned",
    openedAt: "5 hours ago",
    sla: "Breach in 12h"
  },
  {
    id: "CASE-1088",
    entity: "Tech Solutions Inc",
    type: "Velocity Fraud",
    status: "Investigating",
    priority: "Medium",
    assignedTo: "Sarah Jenkins",
    openedAt: "2 days ago",
    sla: "Breach in 5d"
  }
];

export default function CasesQueue() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredCases = MOCK_CASES.filter(c => {
    const matchesSearch = c.entity.toLowerCase().includes(searchQuery.toLowerCase()) || c.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? c.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "Critical": return "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400";
      case "High": return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400";
      default: return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Open": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Investigating": return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
      case "Pending Docs": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Closed": return "bg-slate-500/10 text-slate-600 border-slate-500/20";
      default: return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Case Management
          </h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <FolderSearch className="h-4 w-4 text-indigo-500" />
            Deep investigations and compliance workflows.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full shadow-sm">
            My Cases
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
            Create Manual Case
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
              <AlertCircle className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Unassigned (Open)</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">24</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Search className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Under Investigation</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">12</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">
              <FileCheck2 className="text-purple-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Pending Docs</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">8</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-red-50/60 dark:bg-red-950/20 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="text-red-600 dark:text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">SLA Breach Warning</p>
              <div className="text-2xl font-black text-red-700 dark:text-red-300 mt-1">3</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Layout */}
      <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden">
        <div className="p-5 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search by case ID or entity name..." 
              className="pl-9 bg-white/50 dark:bg-slate-900/50 rounded-full text-sm border-slate-200/60 dark:border-slate-800/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Button 
              variant={filterStatus === null ? 'default' : 'outline'} 
              size="sm" 
              className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 ${filterStatus === null ? 'bg-indigo-600 text-white border-indigo-600' : ''}`}
              onClick={() => setFilterStatus(null)}
            >
              All Cases
            </Button>
            <Button 
              variant={filterStatus === 'Open' ? 'default' : 'outline'} 
              size="sm" 
              className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 ${filterStatus === 'Open' ? 'bg-amber-500 text-white border-amber-500' : ''}`}
              onClick={() => setFilterStatus('Open')}
            >
              Open
            </Button>
            <Button 
              variant={filterStatus === 'Investigating' ? 'default' : 'outline'} 
              size="sm" 
              className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 ${filterStatus === 'Investigating' ? 'bg-indigo-600 text-white border-indigo-600' : ''}`}
              onClick={() => setFilterStatus('Investigating')}
            >
              Investigating
            </Button>
            <Button 
              variant={filterStatus === 'Pending Docs' ? 'default' : 'outline'} 
              size="sm" 
              className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 ${filterStatus === 'Pending Docs' ? 'bg-purple-600 text-white border-purple-600' : ''}`}
              onClick={() => setFilterStatus('Pending Docs')}
            >
              Pending Docs
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
              <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Case Details</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Priority</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Assignee</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">SLA Status</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCases.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 mb-3" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">All caught up!</p>
                    <p className="text-xs text-slate-500 mt-1">No cases match your filters.</p>
                  </TableCell>
                </TableRow>
              ) : filteredCases.map((c) => (
                <TableRow key={c.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                  <TableCell className="pl-6 py-4">
                    <div className="flex flex-col gap-1">
                      <Link href={`/dashboard/cases/${c.id}`} className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition-colors">
                        {c.entity}
                      </Link>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                        {c.id} <span className="text-slate-300 dark:text-slate-700">•</span> <span className="uppercase text-slate-500 font-sans font-bold">{c.type}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border ${getStatusColor(c.status)}`}>
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${getPriorityColor(c.priority)}`}>
                      {c.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${c.assignedTo === 'Unassigned' ? 'bg-slate-100 dark:bg-slate-800' : 'bg-indigo-100 dark:bg-indigo-900/30'}`}>
                        <UserCircle className={`w-4 h-4 ${c.assignedTo === 'Unassigned' ? 'text-slate-400' : 'text-indigo-600 dark:text-indigo-400'}`} />
                      </div>
                      <span className={`text-xs font-semibold ${c.assignedTo === 'Unassigned' ? 'text-slate-400 italic' : 'text-slate-700 dark:text-slate-300'}`}>
                        {c.assignedTo}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-xs font-bold ${c.sla.includes('Breach in') && parseInt(c.sla.match(/(\d+)/)?.[0] || '0') < 5 && c.sla.includes('h') ? 'text-red-600 flex items-center gap-1' : 'text-slate-600 dark:text-slate-400'}`}>
                        {c.sla.includes('Breach in') && parseInt(c.sla.match(/(\d+)/)?.[0] || '0') < 5 && c.sla.includes('h') && <Clock className="w-3 h-3" />}
                        {c.sla}
                      </span>
                      <span className="text-[10px] text-slate-400">Opened {c.openedAt}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {c.assignedTo === 'Unassigned' ? (
                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800">
                          Assign to Me
                        </Button>
                      ) : (
                        <Link href={`/dashboard/cases/${c.id}`}>
                          <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full">
                            Open Workspace
                          </Button>
                        </Link>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl shadow-xl">
                          <DropdownMenuLabel className="text-xs">Case Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-xs cursor-pointer">
                            Re-assign Case
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-xs cursor-pointer">
                            Mark as Priority
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
