"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Activity, 
  GitMerge, 
  Plus, 
  Search, 
  Shield, 
  ShieldAlert, 
  ToggleLeft, 
  ToggleRight, 
  Zap,
  MoreHorizontal,
  PenTool,
  Copy,
  Trash2,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

// Mock Rules Data
const MOCK_RULES = [
  {
    id: "RULE-8901",
    name: "High Velocity Cross-Border",
    description: "Triggers when 3+ cross-border payments occur within 1 hour.",
    domain: "Payment Fraud",
    status: "active",
    action: "Block",
    hitRate: "2.4%",
    lastTriggered: "10m ago"
  },
  {
    id: "RULE-8902",
    name: "VPN + New Device Login",
    description: "Flags logins from known VPN IPs on previously unseen devices.",
    domain: "Account Takeover",
    status: "active",
    action: "Challenge (MFA)",
    hitRate: "12.1%",
    lastTriggered: "2m ago"
  },
  {
    id: "RULE-8903",
    name: "Sanctions Country IP Match",
    description: "Strict block for any traffic originating from OFAC sanctioned IPs.",
    domain: "AML / Compliance",
    status: "active",
    action: "Hard Block",
    hitRate: "0.1%",
    lastTriggered: "1d ago"
  },
  {
    id: "RULE-8904",
    name: "Velocity: Same Card, Diff Accounts",
    description: "Same PAN used across 3+ distinct user accounts in 24 hours.",
    domain: "Payment Fraud",
    status: "inactive",
    action: "+40 Risk Score",
    hitRate: "N/A",
    lastTriggered: "Never"
  },
  {
    id: "RULE-8905",
    name: "Age < 18 High Value TX",
    description: "Transactions > $5000 from users under 18 years old.",
    domain: "Policy Violation",
    status: "active",
    action: "Manual Review",
    hitRate: "0.8%",
    lastTriggered: "4h ago"
  }
];

export default function RulesEngineOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [rules, setRules] = useState(MOCK_RULES);

  const toggleRuleStatus = (id: string) => {
    setRules(rules.map(rule => 
      rule.id === id 
        ? { ...rule, status: rule.status === "active" ? "inactive" : "active" } 
        : rule
    ));
  };

  const filteredRules = rules.filter(rule => 
    rule.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    rule.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeRulesCount = rules.filter(r => r.status === 'active').length;

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Rules Engine
          </h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <GitMerge className="h-4 w-4 text-indigo-500" />
            Design, deploy, and monitor detection logic.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full shadow-sm">
            Import Rules
          </Button>
          <Link href="/dashboard/rules/create">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
              <Plus className="w-4 h-4 mr-1" /> Create Rule
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <GitMerge className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Rules Configured</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{rules.length}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <Activity className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Policies</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{activeRulesCount}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
              <ShieldAlert className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Rule Intervention Rate</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">4.2%</div>
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
              placeholder="Search by rule name or domain..." 
              className="pl-9 bg-white/50 dark:bg-slate-900/50 rounded-full text-sm border-slate-200/60 dark:border-slate-800/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-4 text-xs font-semibold rounded-full">
              <Filter className="w-3.5 h-3.5 mr-2" /> Domain Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
              <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6 w-[60px]">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 w-[300px]">Rule Details</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Domain</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Outcome Action</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Hit Rate</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRules.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <Shield className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
                    <p className="text-sm font-medium text-slate-500">No rules configured yet</p>
                  </TableCell>
                </TableRow>
              ) : filteredRules.map((rule) => (
                <TableRow key={rule.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                  <TableCell className="pl-6 py-4">
                    <button 
                      onClick={() => toggleRuleStatus(rule.id)}
                      className={`transition-colors ${rule.status === 'active' ? 'text-emerald-500 hover:text-emerald-600' : 'text-slate-300 hover:text-slate-400 dark:text-slate-700'}`}
                    >
                      {rule.status === 'active' ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{rule.name}</span>
                      <span className="text-xs text-slate-500 line-clamp-1">{rule.description}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                      {rule.domain}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border ${
                      rule.action.includes('Block') ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400' : 
                      rule.action.includes('Challenge') ? 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400' :
                      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400'
                    }`}>
                      {rule.action}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-slate-500 font-medium">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-slate-900 dark:text-slate-100">{rule.hitRate}</span>
                      <span className="text-[10px]">Last: {rule.lastTriggered}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/dashboard/rules/create?clone=${rule.id}`}>
                        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700">
                          Edit
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-xl shadow-xl">
                          <DropdownMenuLabel className="text-xs">Rule Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-xs cursor-pointer">
                            <PenTool className="w-3.5 h-3.5 mr-2" /> Edit Logic
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-xs cursor-pointer">
                            <Copy className="w-3.5 h-3.5 mr-2" /> Duplicate Rule
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-xs cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50">
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete Rule
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
