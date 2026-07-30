"use client";

import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  History,
  Loader2,
  RefreshCw,
  Scale,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type CustomerRiskHistory,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function formatDate(value: string | null): string {
  if (!value) return "No source received";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Customer Risk is disabled for this organization."
      : "Permission denied. Customer Risk access is required.";
  }
  if (error instanceof ApiError && error.statusCode === 404) {
    return "This customer-risk profile does not exist in your organization.";
  }
  return error instanceof Error ? error.message : "Customer-risk history is unavailable.";
}

export default function CustomerRiskContributionPage() {
  const [profileId, setProfileId] = useState("");
  const [history, setHistory] = useState<CustomerRiskHistory | null>(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [recalculating, setRecalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!profileId.trim()) return;
    setLoading(true);
    setError(null);
    try {
      setHistory(await riskDecisionsService.customerRiskHistory(profileId.trim()));
    } catch (cause) {
      setHistory(null);
      setError(describeError(cause));
    } finally {
      setLoading(false);
    }
  };

  const recalculate = async (event: FormEvent) => {
    event.preventDefault();
    setRecalculating(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await riskDecisionsService.recalculateCustomerRisk(
        profileId.trim(),
        reason.trim(),
      );
      await load();
      setReason("");
      setSuccess(
        `Recalculation confirmed: calculated ${Math.round(result.calculated_score * 100)}, ` +
          `effective ${Math.round(result.effective_score * 100)}, ${result.stale_count} stale, ` +
          `${result.unavailable_count} unavailable.`,
      );
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setRecalculating(false);
    }
  };

  const latest = history?.calculated_and_effective_history[0];

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Customer Risk aggregation
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Contribution history and freshness</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Inspect all source categories, scoring versions, historical/current weights,
          missing and unavailable sources, staleness, overrides, and score lineage.
        </p>
      </header>

      <Card className="border-slate-200">
        <CardContent className="p-4">
          <form onSubmit={load} className="flex flex-col gap-3 sm:flex-row">
            <input
              value={profileId}
              onChange={(event) => setProfileId(event.target.value)}
              placeholder="Customer-risk profile UUID"
              className="h-10 min-w-0 flex-1 rounded-md border border-slate-200 px-3 text-sm"
            />
            <Button type="submit" disabled={loading || !profileId.trim()}>
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

      {history ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Calculated score", latest ? Math.round(latest.calculated_score * 100) : "—"],
              ["Effective score", latest ? Math.round(latest.effective_score * 100) : "—"],
              ["Stale contributions", latest?.stale_count ?? 0],
              ["Unavailable sources", latest?.unavailable_count ?? 0],
            ].map(([label, value]) => (
              <Card key={String(label)} className="border-slate-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
            <Card className="border-slate-200">
              <CardHeader><CardTitle className="text-base">Source availability</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {history.source_statuses.map((source) => (
                  <div key={source.category} className="rounded-lg border border-slate-200 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-slate-900">{source.category.replaceAll("_", " ")}</p>
                      <Badge
                        variant="outline"
                        className={
                          source.availability_status === "available"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                            : source.availability_status === "unavailable"
                              ? "border-red-200 bg-red-50 text-red-800"
                              : "border-amber-200 bg-amber-50 text-amber-800"
                        }
                      >
                        {source.availability_status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Latest source: {formatDate(source.latest_source_at)}
                    </p>
                    {source.reason ? <p className="mt-1 text-xs text-slate-500">{source.reason}</p> : null}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Scale className="h-4 w-4 text-violet-600" /> Contribution categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {history.contributions.length ? history.contributions.map((item) => (
                  <div key={item.id} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <div>
                        <p className="font-bold text-slate-900">{item.category.replaceAll("_", " ")}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.source_type} · version {item.scoring_version}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{item.freshness_status}</Badge>
                        <Badge variant="outline">{item.availability_status}</Badge>
                        <span className="text-xl font-black">{Math.round(item.score * 100)}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{item.explanation}</p>
                    <p className="mt-2 text-xs text-slate-500">
                      Weight {item.historical_weight.toFixed(2)} → {item.current_weight.toFixed(2)}
                      {" · "}source {formatDate(item.source_occurred_at)}
                      {" · "}expires {formatDate(item.expires_at)}
                    </p>
                    <p className="mt-2 break-all font-mono text-[10px] text-slate-400">
                      {item.source_id}
                    </p>
                  </div>
                )) : <p className="text-sm text-slate-500">No source contributions persisted.</p>}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.6fr]">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <History className="h-4 w-4 text-blue-600" /> Calculated and effective score lineage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {history.calculated_and_effective_history.length ? history.calculated_and_effective_history.map((item) => (
                  <div key={item.id} className="rounded-lg border border-slate-200 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-slate-900">{item.reason}</p>
                      <time className="text-xs text-slate-400">{formatDate(item.created_at)}</time>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Calculated {Math.round(item.calculated_score * 100)} → effective{" "}
                      {Math.round(item.effective_score * 100)}
                      {item.active_override_id ? " · analyst override active" : ""}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.contribution_count} contributions · {item.stale_count} stale ·{" "}
                      {item.unavailable_count} unavailable
                    </p>
                  </div>
                )) : <p className="text-sm text-slate-500">No recalculation history.</p>}
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader><CardTitle className="text-base">Manual recalculation</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={recalculate} className="space-y-3">
                  <textarea
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                    required
                    minLength={3}
                    placeholder="Reason for safe re-aggregation"
                    className="min-h-24 w-full rounded-md border border-slate-200 p-3 text-sm"
                  />
                  <Button type="submit" disabled={recalculating || reason.trim().length < 3}>
                    {recalculating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Recalculate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </>
      ) : !loading && !error ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="p-10 text-center text-sm text-slate-500">
            Enter a profile UUID to inspect real aggregation evidence. No zero-risk value
            is inferred from a missing source.
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
