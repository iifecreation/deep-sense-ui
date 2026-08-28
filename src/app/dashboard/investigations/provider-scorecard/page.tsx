"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw, Router } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type ProviderScorecardEntry,
  type ProviderScorecardReport,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function pct(value: number): string {
  return `${(value * 100).toFixed(0)}%`;
}

function rateStyle(rate: number, goodBelow: boolean): string {
  if (goodBelow) {
    if (rate <= 0.02) return "border-emerald-200 bg-emerald-50 text-emerald-700";
    if (rate <= 0.1) return "border-amber-200 bg-amber-50 text-amber-800";
    return "border-red-200 bg-red-50 text-red-800";
  }
  if (rate >= 0.98) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (rate >= 0.9) return "border-amber-200 bg-amber-50 text-amber-800";
  return "border-red-200 bg-red-50 text-red-800";
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return "Your role cannot view the provider scorecard.";
  }
  return error instanceof Error ? error.message : "The provider scorecard could not be loaded.";
}

function ScorecardCard({ entry }: { entry: ProviderScorecardEntry }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2 text-base">
          <Router className="h-4 w-4 text-indigo-500" />
          {entry.provider}
          <Badge variant="secondary">{entry.action.replaceAll("_", " ")}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={rateStyle(entry.success_rate, false)}>
            success {pct(entry.success_rate)}
          </Badge>
          <Badge variant="outline" className={rateStyle(entry.failure_rate, true)}>
            failure {pct(entry.failure_rate)}
          </Badge>
          <Badge variant="outline" className={rateStyle(entry.timeout_rate, true)}>
            timeout {pct(entry.timeout_rate)}
          </Badge>
          {entry.pending_count > 0 ? (
            <Badge variant="outline" className="border-slate-200 bg-slate-50 text-slate-600">
              {entry.pending_count} pending
            </Badge>
          ) : null}
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">Avg latency</p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {entry.avg_latency_seconds !== null ? `${entry.avg_latency_seconds.toFixed(2)}s` : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">P50</p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {entry.p50_latency_seconds !== null ? `${entry.p50_latency_seconds.toFixed(2)}s` : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">P95</p>
            <p className="mt-1 text-lg font-black text-slate-950">
              {entry.p95_latency_seconds !== null ? `${entry.p95_latency_seconds.toFixed(2)}s` : "—"}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          {entry.total_executions} execution{entry.total_executions === 1 ? "" : "s"} · {entry.completed_count}{" "}
          completed · {entry.failed_count} failed{entry.cancelled_count ? ` · ${entry.cancelled_count} cancelled` : ""}
        </p>

        {entry.top_error_codes.length ? (
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Top error codes</p>
            <div className="mt-1.5 space-y-1">
              {entry.top_error_codes.map((e) => (
                <div key={e.error_code} className="flex items-center justify-between text-sm">
                  <span className="font-mono text-xs text-slate-700">{e.error_code}</span>
                  <span className="text-slate-500">{e.count}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function ProviderScorecardPage() {
  const [windowDays, setWindowDays] = useState("30");
  const [report, setReport] = useState<ProviderScorecardReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async (days: number) => {
    setIsLoading(true);
    setError(null);
    try {
      setReport(await riskDecisionsService.getProviderScorecard(days));
    } catch (cause) {
      setError(describeError(cause));
      setReport(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void load(30);
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5 pb-16">
      <div>
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations">
            <ArrowLeft className="mr-2 h-4 w-4" /> All investigations
          </Link>
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-indigo-50 p-3">
            <Router className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">Provider scorecard</h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Success, failure, and timeout rates plus latency percentiles per intervention
              provider — computed from your organization&apos;s own execution history.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={365}
            value={windowDays}
            onChange={(e) => setWindowDays(e.target.value)}
            className="h-10 w-20 rounded-md border border-slate-200 px-3 text-sm text-slate-900"
          />
          <span className="text-xs text-slate-500">days</span>
          <Button variant="outline" onClick={() => void load(Number(windowDays) || 30)} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            Refresh
          </Button>
        </div>
      </div>

      {error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-5 text-sm text-red-800">{error}</CardContent>
        </Card>
      ) : null}

      {isLoading && !report ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
      ) : null}

      {!isLoading && !error && report?.entries.length === 0 ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="flex flex-col items-center px-6 py-16 text-center">
            <Router className="h-10 w-10 text-slate-300" />
            <p className="mt-4 font-bold text-slate-900">No provider executions in this window</p>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              Once step-up or intervention actions run through a provider, their reliability
              stats will appear here.
            </p>
          </CardContent>
        </Card>
      ) : null}

      {report && report.entries.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {report.entries.map((entry) => (
            <ScorecardCard key={`${entry.provider}:${entry.action}`} entry={entry} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
