"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Activity,
  GitMerge,
  Plus,
  Search,
  Shield,
  ShieldAlert,
  ToggleLeft,
  ToggleRight,
  MoreHorizontal,
  Copy,
  Trash2,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFraudRules } from "@/hooks/use-fraud-rules";
import { fraudRulesService } from "@/services/fraud-rules.service";
import type { FraudRuleRead } from "@/types";

const severityColor: Record<string, string> = {
  critical: "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400",
  high: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400",
  medium: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400",
  low: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300",
};

export default function RulesEngineOverview() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: rules, isLoading, isError, refetch } = useFraudRules();
  const [togglingId, setTogglingId] = useState<string | null>(null);
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<FraudRuleRead | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [summary, setSummary] = useState<{
    trigger_count: number;
    block_count: number;
    review_count: number;
  } | null>(null);

  useEffect(() => {
    fraudRulesService
      .getMetricsSummary(30)
      .then(setSummary)
      .catch(() => setSummary(null));
  }, []);

  const rulesList: FraudRuleRead[] = useMemo(() => rules || [], [rules]);

  const filteredRules = useMemo(
    () =>
      rulesList.filter(
        (rule) =>
          rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (rule.category || "").toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [rulesList, searchQuery],
  );

  const activeRulesCount = rulesList.filter((r) => r.enabled).length;
  const interventionRate =
    summary && summary.trigger_count > 0
      ? `${(((summary.block_count + summary.review_count) / summary.trigger_count) * 100).toFixed(1)}%`
      : "N/A";

  const toggleRuleStatus = async (rule: FraudRuleRead) => {
    setTogglingId(rule.id);
    try {
      if (rule.enabled) {
        await fraudRulesService.disableRule(rule.id);
      } else {
        await fraudRulesService.enableRule(rule.id);
      }
      await refetch();
    } catch (err) {
      console.error("Failed to toggle rule status:", err);
    } finally {
      setTogglingId(null);
    }
  };

  const duplicateRule = async (ruleId: string) => {
    setDuplicatingId(ruleId);
    try {
      const copy = await fraudRulesService.duplicateRule(ruleId);
      await refetch();
      router.push(`/dashboard/rules/${copy.id}`);
    } catch (err) {
      console.error("Failed to duplicate rule:", err);
    } finally {
      setDuplicatingId(null);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await fraudRulesService.deleteRule(deleteTarget.id);
      setDeleteTarget(null);
      await refetch();
    } catch (err) {
      console.error("Failed to delete rule:", err);
    } finally {
      setDeleting(false);
    }
  };

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
          <Button variant="outline" size="sm" className="rounded-full shadow-sm" disabled title="Not yet available">
            Import Rules
          </Button>
          <Link href="/dashboard/rules/create">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
              <Plus className="w-4 h-4 mr-1" /> Create Rule
            </Button>
          </Link>
        </div>
      </div>

      {isError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Failed to load fraud rules. <button onClick={() => void refetch()} className="underline font-semibold">Retry</button>
        </div>
      ) : null}

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <GitMerge className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Rules Configured</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {isLoading ? "…" : rulesList.length}
              </div>
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
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {isLoading ? "…" : activeRulesCount}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
              <ShieldAlert className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Rule Intervention Rate (30d)</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{interventionRate}</div>
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
              placeholder="Search by rule name or category..."
              className="pl-9 bg-white/50 dark:bg-slate-900/50 rounded-full text-sm border-slate-200/60 dark:border-slate-800/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
              <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6 w-[60px]">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 w-[300px]">Rule Details</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Category</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Severity</TableHead>
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Priority / Version</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <Loader2 className="w-6 h-6 mx-auto animate-spin text-slate-300" />
                  </TableCell>
                </TableRow>
              ) : filteredRules.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <Shield className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700 mb-3" />
                    <p className="text-sm font-medium text-slate-500">No rules configured yet</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredRules.map((rule) => (
                  <TableRow key={rule.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                    <TableCell className="pl-6 py-4">
                      <button
                        onClick={() => void toggleRuleStatus(rule)}
                        disabled={togglingId === rule.id}
                        className={`transition-colors ${rule.enabled ? "text-emerald-500 hover:text-emerald-600" : "text-slate-300 hover:text-slate-400 dark:text-slate-700"}`}
                      >
                        {togglingId === rule.id ? (
                          <Loader2 className="w-8 h-8 animate-spin" />
                        ) : rule.enabled ? (
                          <ToggleRight className="w-8 h-8" />
                        ) : (
                          <ToggleLeft className="w-8 h-8" />
                        )}
                      </button>
                    </TableCell>
                    <TableCell>
                      <Link href={`/dashboard/rules/${rule.id}`} className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-1 hover:underline">{rule.name}</span>
                        <span className="text-xs text-slate-500 line-clamp-1">{rule.description || "No description"}</span>
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                        {rule.category || "uncategorized"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border ${severityColor[rule.severity] || severityColor.low}`}>
                        {rule.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500 font-medium">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-slate-900 dark:text-slate-100">Priority {rule.priority ?? 0}</span>
                        <span className="text-[10px]">v{rule.version}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={`/dashboard/rules/${rule.id}`}>
                          <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700">
                            View
                          </Button>
                        </Link>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" disabled={duplicatingId === rule.id}>
                              {duplicatingId === rule.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <MoreHorizontal className="h-4 w-4" />}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-xl shadow-xl">
                            <DropdownMenuLabel className="text-xs">Rule Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-xs cursor-pointer" onClick={() => void duplicateRule(rule.id)}>
                              <Copy className="w-3.5 h-3.5 mr-2" /> Duplicate Rule
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-xs cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50"
                              onClick={() => setDeleteTarget(rule)}
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete Rule
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={!!deleteTarget} onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete &quot;{deleteTarget?.name}&quot;?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-slate-600">
            This permanently removes the rule from the rules engine. This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => void confirmDelete()}
              disabled={deleting}
            >
              {deleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Delete Rule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
