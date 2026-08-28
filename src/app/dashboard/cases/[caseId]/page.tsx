"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lock,
  MessageSquare,
  History,
  ShieldAlert,
  User,
  Paperclip,
  Share2,
  Plus,
  Loader2,
  RefreshCw,
  ShieldOff,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ApiError } from "@/lib/api/client";
import { casesService } from "@/services/cases.service";
import { reportsService } from "@/services/reports.service";
import { CaseNarrativePanel, CaseRecommendationsPanel } from "@/components/investigations/RiskDecisionView";
import type { FraudCaseDetail } from "@/types";

const TERMINAL_STATUSES = new Set(["closed", "confirmed_fraud", "false_positive"]);

const STATUS_STYLE: Record<string, string> = {
  open: "border-slate-200 bg-slate-50 text-slate-700",
  in_review: "border-indigo-200 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
  escalated: "border-orange-200 bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
  confirmed_fraud: "border-red-200 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20",
  false_positive: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  closed: "border-slate-200 bg-slate-100 text-slate-600",
};

function priorityLabel(priority: number): { label: string; style: string } {
  if (priority >= 750) return { label: "Critical Priority", style: "border-red-200 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20" };
  if (priority >= 500) return { label: "High Priority", style: "border-orange-200 bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20" };
  if (priority >= 250) return { label: "Medium Priority", style: "border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20" };
  return { label: "Low Priority", style: "border-slate-200 bg-slate-50 text-slate-600" };
}

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function formatRelative(value: string): string {
  const date = new Date(value);
  const diffMs = Date.now() - date.getTime();
  const diffMin = Math.round(diffMs / 60000);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin} min${diffMin === 1 ? "" : "s"} ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr} hour${diffHr === 1 ? "" : "s"} ago`;
  const diffDay = Math.round(diffHr / 24);
  if (diffDay < 30) return `${diffDay} day${diffDay === 1 ? "" : "s"} ago`;
  return date.toLocaleDateString();
}

function shortId(id: string | undefined | null): string {
  if (!id) return "Unassigned";
  return id.slice(0, 8);
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return "Your role cannot perform this action on this case.";
  }
  if (error instanceof ApiError && error.statusCode === 404) {
    return "This case does not exist in your organization.";
  }
  if (error instanceof ApiError && error.statusCode === 400) {
    return error.message || "That action is not valid for this case's current status.";
  }
  return error instanceof Error ? error.message : "The case API is unavailable.";
}

type AuditEntry = {
  id: string;
  time: string;
  user: string;
  action: string;
  details: string;
  type: "manual" | "system";
};

export default function CaseWorkspace() {
  const params = useParams<{ caseId: string }>();
  const router = useRouter();
  const caseId = params.caseId;

  const [detail, setDetail] = useState<FraudCaseDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [note, setNote] = useState("");
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [isFilingSar, setIsFilingSar] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setDetail(await casesService.getCase(caseId));
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsLoading(false);
    }
  }, [caseId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const saveNote = useCallback(async () => {
    if (!note.trim()) return;
    setIsSavingNote(true);
    setError(null);
    try {
      await casesService.addCaseNote(caseId, { body: note.trim() });
      setNote("");
      await load();
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsSavingNote(false);
    }
  }, [caseId, note, load]);

  const markSafe = useCallback(async () => {
    setIsResolving(true);
    setError(null);
    try {
      await casesService.transitionCaseStatus(caseId, { status: "false_positive" });
      await load();
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsResolving(false);
    }
  }, [caseId, load]);

  const fileSar = useCallback(async () => {
    setIsFilingSar(true);
    setError(null);
    try {
      const report = await reportsService.createReportFromCase(caseId);
      router.push(`/dashboard/reports/${report.id}`);
    } catch (cause) {
      setError(describeError(cause));
      setIsFilingSar(false);
    }
  }, [caseId, router]);

  if (isLoading && !detail) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error && !detail) {
    return (
      <div className="mx-auto max-w-3xl py-10">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6 text-red-800">
            <ShieldOff className="h-6 w-6" />
            <p className="mt-3 font-bold">Case cannot be loaded</p>
            <p className="mt-1 text-sm">{error}</p>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" onClick={() => void load()}>
                <RefreshCw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button asChild variant="ghost">
                <Link href="/dashboard/cases">Back to queue</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!detail) return null;

  const { case: fraudCase, notes, actions } = detail;
  const priority = priorityLabel(fraudCase.priority);
  const isTerminal = TERMINAL_STATUSES.has(fraudCase.status);

  const auditLog: AuditEntry[] = [
    ...actions.map((a) => ({
      id: a.id,
      time: a.created_at,
      user: shortId(a.actor_user_id),
      action: label(a.action_type),
      details: a.payload_json ? JSON.stringify(a.payload_json) : "No additional details recorded.",
      type: "manual" as const,
    })),
    ...notes.map((n) => ({
      id: n.id,
      time: n.created_at,
      user: shortId(n.created_by_user_id),
      action: "Note Added",
      details: n.body,
      type: "manual" as const,
    })),
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/cases" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Queue
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              {fraudCase.title || caseId}
            </h1>
            <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${STATUS_STYLE[fraudCase.status] || STATUS_STYLE.open}`}>
              {label(fraudCase.status)}
            </Badge>
            <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${priority.style}`}>
              {priority.label}
            </Badge>
          </div>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
            <User className="w-4 h-4" />
            {fraudCase.transaction_id ? `Linked transaction: ${fraudCase.transaction_id}` : `Case ${fraudCase.id}`}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
            <Share2 className="w-4 h-4 mr-2" /> Share Case
          </Button>
        </div>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Main Workspace (Tabs) */}
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-full justify-start h-auto overflow-x-auto">
              <TabsTrigger value="overview" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0">Case Overview</TabsTrigger>
              <TabsTrigger value="evidence" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0 flex items-center gap-2">
                Evidence Locker
              </TabsTrigger>
              <TabsTrigger value="audit" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0 flex items-center gap-2">
                Audit & Activity Log <Badge variant="secondary" className="px-1.5 py-0 text-[9px] rounded-full">{auditLog.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <CaseNarrativePanel caseId={caseId} />
              <CaseRecommendationsPanel caseId={caseId} />

              {/* Investigator Notes */}
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-500" /> Add Forensic Note
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <Textarea
                    placeholder="Document your findings, request more information, or summarize the investigation..."
                    className="min-h-[120px] bg-slate-50/50 dark:bg-slate-900/50 border-slate-200/60 dark:border-slate-800/60 resize-none"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    disabled={isSavingNote}
                  />
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full border-dashed">
                      <Paperclip className="w-3.5 h-3.5 mr-2" /> Attach File
                    </Button>
                    <Button
                      size="sm"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-8 px-4 rounded-full"
                      disabled={!note.trim() || isSavingNote}
                      onClick={() => void saveNote()}
                    >
                      {isSavingNote ? <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" /> : null}
                      Save Note to Audit Log
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evidence" className="mt-6 space-y-6">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-indigo-500" /> Evidence Locker
                  </CardTitle>
                  <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Upload Evidence
                  </Button>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-slate-500">No evidence has been attached to this case yet.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audit" className="mt-6 space-y-6">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <History className="w-4 h-4 text-indigo-500" /> Chronological Activity Log
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {auditLog.length ? (
                    <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-3 space-y-8">
                      {auditLog.map((log) => (
                        <div key={log.id} className="relative pl-6">
                          <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 ${log.type === 'system' ? 'bg-slate-300 dark:bg-slate-700' : 'bg-indigo-500'}`} />
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 dark:text-white">{log.action}</span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{formatRelative(log.time)}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-1 break-words">
                              {log.details}
                            </p>
                            <span className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-wider flex items-center gap-1">
                              <User className="w-3 h-3" /> By {log.user}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">No activity has been recorded for this case yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden sticky top-6">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100/50 dark:border-slate-800/50 py-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-slate-500" /> Resolution Panel
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-6">

              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Case Assignee</p>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{shortId(fraudCase.assignee_user_id)}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px] font-bold text-indigo-600">Reassign</Button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Button
                  className="w-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm h-10"
                  disabled={isTerminal || isResolving}
                  onClick={() => void markSafe()}
                >
                  {isResolving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
                  {isTerminal ? "Case Already Resolved" : "Mark as Safe (Close Case)"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-xs font-bold border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 rounded-xl h-10"
                  disabled={isFilingSar}
                  onClick={() => void fileSar()}
                >
                  {isFilingSar ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <AlertTriangle className="w-4 h-4 mr-2" />}
                  File Suspicious Activity Report (SAR)
                </Button>

                <Button variant="outline" className="w-full text-xs font-bold border-slate-200/60 dark:border-slate-800/60 rounded-xl h-10 shadow-sm bg-white dark:bg-slate-900 text-slate-600">
                  <Lock className="w-4 h-4 mr-2" /> Block Entity Globally
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
