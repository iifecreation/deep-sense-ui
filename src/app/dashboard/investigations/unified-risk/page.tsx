"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  GitMerge,
  Loader2,
  RefreshCw,
  RotateCw,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type UnifiedRiskReevaluation,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Unified Risk is disabled for this organization."
      : "Permission denied. Unified Risk access is required.";
  }
  if (error instanceof ApiError && error.code === "insufficient_evidence") {
    return "Insufficient tenant-scoped evidence was discovered for this subject and time window.";
  }
  return error instanceof Error ? error.message : "Unified-risk history is unavailable.";
}

export default function UnifiedRiskConflictPage() {
  const [subjectType, setSubjectType] = useState("account");
  const [subjectId, setSubjectId] = useState("");
  const [windowHours, setWindowHours] = useState(720);
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState<UnifiedRiskReevaluation[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reevaluating, setReevaluating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!subjectId.trim()) return;
    setLoading(true);
    setError(null);
    try {
      setHistory(
        await riskDecisionsService.unifiedRiskHistory(subjectType, subjectId.trim()),
      );
      setLoaded(true);
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setLoading(false);
    }
  };

  const reevaluate = async (event: FormEvent) => {
    event.preventDefault();
    setReevaluating(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await riskDecisionsService.reevaluateUnifiedRisk(
        subjectType,
        subjectId.trim(),
        reason.trim(),
        Math.max(60, Math.round(windowHours * 3600)),
      );
      await load();
      setReason("");
      setSuccess(
        `Re-evaluation completed as ${result.decision.replaceAll("_", " ")} at score ${Math.round(
          result.score * 100,
        )}.`,
      );
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setReevaluating(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Unified Risk resolution
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Discovery, conflicts and lineage</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          See every discovered and excluded raw decision, source freshness and version,
          disagreement, selected conflict policy, final explanation, and re-evaluation lineage.
        </p>
      </header>

      <Card className="border-slate-200">
        <CardContent className="p-4">
          <form onSubmit={load} className="grid gap-3 sm:grid-cols-[0.4fr_1fr_0.35fr_auto]">
            <label className="space-y-1 text-xs font-semibold text-slate-600">
              Subject type
              <select
                value={subjectType}
                onChange={(event) => setSubjectType(event.target.value)}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
              >
                {["customer", "account", "device", "session", "transaction", "beneficiary", "card", "email", "phone", "address", "merchant"].map(
                  (value) => <option key={value} value={value}>{value}</option>,
                )}
              </select>
            </label>
            <label className="space-y-1 text-xs font-semibold text-slate-600">
              Subject ID
              <input
                value={subjectId}
                onChange={(event) => setSubjectId(event.target.value)}
                className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold text-slate-600">
              Window hours
              <input
                type="number"
                min={1}
                max={8760}
                value={windowHours}
                onChange={(event) => setWindowHours(Number(event.target.value))}
                className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
              />
            </label>
            <Button type="submit" className="self-end" disabled={loading || !subjectId.trim()}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
              Load history
            </Button>
          </form>
        </CardContent>
      </Card>

      {error ? (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" /> {error}
        </div>
      ) : null}
      {success ? (
        <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" /> {success} Audit evidence was recorded.
        </div>
      ) : null}

      {subjectId.trim() ? (
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <RotateCw className="h-4 w-4 text-blue-600" /> Safe manual re-evaluation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={reevaluate} className="flex flex-col gap-3 sm:flex-row">
              <input
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                required
                minLength={3}
                placeholder="Reason for re-evaluation"
                className="h-10 min-w-0 flex-1 rounded-md border border-slate-200 px-3 text-sm"
              />
              <Button type="submit" disabled={reevaluating || reason.trim().length < 3}>
                {reevaluating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Re-evaluate
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : null}

      {history.length ? history.map((item) => {
        const included = item.discovered_decisions.filter((decision) => decision.included);
        const excluded = item.discovered_decisions.filter((decision) => !decision.included);
        const outcomes = new Set(included.map((decision) => decision.reason));
        const conflict = outcomes.size > 1 || item.explanation.toLowerCase().includes("conflict");
        return (
          <Card key={item.id} className={conflict ? "border-amber-200" : "border-slate-200"}>
            <CardHeader>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <GitMerge className="h-4 w-4 text-violet-600" />
                    {item.policy_name.replaceAll("_", " ")}
                  </CardTitle>
                  <p className="mt-2 text-xs text-slate-500">
                    {formatDate(item.created_at)} · {item.time_window_seconds}s window
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {conflict ? <Badge className="bg-amber-100 text-amber-800">conflict retained</Badge> : null}
                  <Badge variant="outline">{included.length} included</Badge>
                  <Badge variant="outline">{excluded.length} excluded</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Final outcome explanation</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.explanation}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Policy version {item.policy_version_id || "default versioned policy"} · reason {item.reason}
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Discovered and included</p>
                  <div className="space-y-2">
                    {included.map((decision) => (
                      <div key={decision.raw_decision_id} className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <Link
                            href={`/dashboard/investigations/${decision.raw_decision_id}`}
                            className="font-semibold text-blue-700"
                          >
                            {decision.source_service.replaceAll("_", " ")}
                          </Link>
                          <Badge variant="outline">{decision.freshness_status}</Badge>
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          version {decision.source_version} · {decision.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Excluded with reason</p>
                  <div className="space-y-2">
                    {excluded.length ? excluded.map((decision) => (
                      <div key={decision.raw_decision_id} className="rounded-lg border border-slate-200 p-3">
                        <p className="font-semibold text-slate-900">{decision.source_service.replaceAll("_", " ")}</p>
                        <p className="mt-1 text-xs text-slate-600">
                          {decision.reason} · {decision.freshness_status} · version {decision.source_version}
                        </p>
                      </div>
                    )) : <p className="text-sm text-slate-500">No silently excluded decisions.</p>}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-4 text-xs font-semibold">
                {item.prior_decision_id ? (
                  <Link className="text-blue-600" href={`/dashboard/investigations/${item.prior_decision_id}`}>
                    Prior unified decision
                  </Link>
                ) : <span className="text-slate-500">Initial evaluation</span>}
                {item.result_decision_id ? (
                  <Link className="text-blue-600" href={`/dashboard/investigations/${item.result_decision_id}`}>
                    Result decision
                  </Link>
                ) : null}
              </div>
            </CardContent>
          </Card>
        );
      }) : loaded && !loading && !error ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="p-10 text-center text-sm text-slate-500">
            No re-evaluation lineage exists for this tenant subject.
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
