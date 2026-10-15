"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  FolderSearch,
  Search,
  MoreHorizontal,
  CheckCircle2,
  UserCircle,
  AlertCircle,
  Loader2,
  ShieldAlert,
  Flag,
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
import { casesService } from "@/services/cases.service";
import { useCurrentUser } from "@/lib/auth";
import type { FraudCaseRead } from "@/types";

const STATUS_FILTERS = ["open", "in_review", "escalated", "confirmed_fraud", "false_positive", "closed"] as const;

const statusColor: Record<string, string> = {
  open: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  in_review: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
  escalated: "bg-red-500/10 text-red-600 border-red-500/20",
  confirmed_fraud: "bg-rose-600/10 text-rose-700 border-rose-600/20",
  false_positive: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  closed: "bg-slate-500/10 text-slate-600 border-slate-500/20",
};

function priorityBadge(priority: number): string {
  if (priority >= 700) return "bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400";
  if (priority >= 300) return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400";
  return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400";
}

function formatDate(value?: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString();
}

export default function CasesQueue() {
  const { user } = useCurrentUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [cases, setCases] = useState<FraudCaseRead[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusCounts, setStatusCounts] = useState<Record<string, number>>({});
  const [actioningId, setActioningId] = useState<string | null>(null);
  const [reassignTarget, setReassignTarget] = useState<FraudCaseRead | null>(null);
  const [reassignUserId, setReassignUserId] = useState("");

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const filters = filterStatus ? { status: filterStatus, search: searchQuery || undefined } : { search: searchQuery || undefined };
      const res = await casesService.listCases({ page_size: 50 }, filters);
      setCases(res.items);
      setTotal(res.total);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to load cases.");
    } finally {
      setIsLoading(false);
    }
  }, [filterStatus, searchQuery]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 200);
    return () => window.clearTimeout(timer);
  }, [load]);

  useEffect(() => {
    void Promise.all(
      STATUS_FILTERS.map(async (status) => {
        const res = await casesService.listCases({ page_size: 1 }, { status });
        return [status, res.total] as const;
      }),
    ).then((entries) => setStatusCounts(Object.fromEntries(entries)));
  }, []);

  const filteredCases = useMemo(
    () => cases.filter((c) => c.title?.toLowerCase().includes(searchQuery.toLowerCase()) || c.id.toLowerCase().includes(searchQuery.toLowerCase())),
    [cases, searchQuery],
  );

  const assignToMe = async (caseId: string) => {
    if (!user) return;
    setActioningId(caseId);
    try {
      await casesService.assignCase(caseId, { assignee_user_id: user.id });
      await load();
    } catch (cause) {
      console.error("Failed to assign case:", cause);
    } finally {
      setActioningId(null);
    }
  };

  const setPriority = async (caseId: string, priority: number) => {
    setActioningId(caseId);
    try {
      await casesService.updateCase(caseId, { priority });
      await load();
    } catch (cause) {
      console.error("Failed to update case priority:", cause);
    } finally {
      setActioningId(null);
    }
  };

  const confirmReassign = async () => {
    if (!reassignTarget || !reassignUserId.trim()) return;
    setActioningId(reassignTarget.id);
    try {
      await casesService.assignCase(reassignTarget.id, { assignee_user_id: reassignUserId.trim() });
      setReassignTarget(null);
      setReassignUserId("");
      await load();
    } catch (cause) {
      console.error("Failed to re-assign case:", cause);
    } finally {
      setActioningId(null);
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
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error} <button onClick={() => void load()} className="underline font-semibold">Retry</button>
        </div>
      ) : null}

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
              <AlertCircle className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Open</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{statusCounts.open ?? "…"}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Search className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">In Review</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{statusCounts.in_review ?? "…"}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center">
              <ShieldAlert className="text-rose-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Confirmed Fraud</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{statusCounts.confirmed_fraud ?? "…"}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-red-50/60 dark:bg-red-950/20 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <Flag className="text-red-600 dark:text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Escalated</p>
              <div className="text-2xl font-black text-red-700 dark:text-red-300 mt-1">{statusCounts.escalated ?? "…"}</div>
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
              placeholder="Search by case ID or title..."
              className="pl-9 bg-white/50 dark:bg-slate-900/50 rounded-full text-sm border-slate-200/60 dark:border-slate-800/60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Button
              variant={filterStatus === null ? "default" : "outline"}
              size="sm"
              className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 ${filterStatus === null ? "bg-indigo-600 text-white border-indigo-600" : ""}`}
              onClick={() => setFilterStatus(null)}
            >
              All Cases
            </Button>
            {STATUS_FILTERS.map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                size="sm"
                className={`h-9 px-4 text-xs font-semibold rounded-full shrink-0 capitalize ${filterStatus === status ? "bg-indigo-600 text-white border-indigo-600" : ""}`}
                onClick={() => setFilterStatus(status)}
              >
                {status.replace("_", " ")}
              </Button>
            ))}
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
                <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Opened</TableHead>
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
              ) : filteredCases.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 mb-3" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">All caught up!</p>
                    <p className="text-xs text-slate-500 mt-1">No cases match your filters.</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredCases.map((c) => (
                  <TableRow key={c.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                    <TableCell className="pl-6 py-4">
                      <div className="flex flex-col gap-1">
                        <Link href={`/dashboard/cases/${c.id}`} className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition-colors">
                          {c.title || "Untitled case"}
                        </Link>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          {c.id.split("-")[0]}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase border capitalize ${statusColor[c.status] || statusColor.open}`}>
                        {c.status.replace("_", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${priorityBadge(c.priority)}`}>
                        P{c.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${!c.assignee_user_id ? "bg-slate-100 dark:bg-slate-800" : "bg-indigo-100 dark:bg-indigo-900/30"}`}>
                          <UserCircle className={`w-4 h-4 ${!c.assignee_user_id ? "text-slate-400" : "text-indigo-600 dark:text-indigo-400"}`} />
                        </div>
                        <span className={`text-xs font-mono ${!c.assignee_user_id ? "text-slate-400 italic font-sans" : "text-slate-700 dark:text-slate-300"}`}>
                          {c.assignee_user_id ? c.assignee_user_id.split("-")[0] : "Unassigned"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-xs text-slate-500">{formatDate(c.created_at)}</span>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!c.assignee_user_id ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800"
                            disabled={actioningId === c.id}
                            onClick={() => void assignToMe(c.id)}
                          >
                            {actioningId === c.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Assign to Me"}
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
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" disabled={actioningId === c.id}>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-xl shadow-xl">
                            <DropdownMenuLabel className="text-xs">Case Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-xs cursor-pointer" onClick={() => { setReassignTarget(c); setReassignUserId(""); }}>
                              Re-assign Case
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs cursor-pointer" onClick={() => void setPriority(c.id, 700)}>
                              Mark as High Priority
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
          {!isLoading && total > filteredCases.length ? (
            <p className="px-6 py-4 text-xs text-slate-400">Showing {filteredCases.length} of {total} matching cases.</p>
          ) : null}
        </div>
      </Card>

      <Dialog open={!!reassignTarget} onOpenChange={(open) => { if (!open) setReassignTarget(null); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Re-assign &quot;{reassignTarget?.title || "Untitled case"}&quot;</DialogTitle>
          </DialogHeader>
          <input
            value={reassignUserId}
            onChange={(e) => setReassignUserId(e.target.value)}
            placeholder="Assignee user ID"
            className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setReassignTarget(null)}>
              Cancel
            </Button>
            <Button onClick={() => void confirmReassign()} disabled={!reassignUserId.trim() || actioningId === reassignTarget?.id}>
              {actioningId === reassignTarget?.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Re-assign
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
