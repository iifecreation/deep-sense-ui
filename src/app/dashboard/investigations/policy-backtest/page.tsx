"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GitCompareArrows, Loader2, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type PolicyBacktestResult,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

interface ServiceOption {
  key: string;
  label: string;
}

// Every normalized-decision domain with threshold-based (review/deny) policy —
// customer_risk and unified_risk use non-threshold configuration and aren't
// backtestable this way.
const SERVICES: ServiceOption[] = [
  { key: "cnp_advanced", label: "CNP Fraud" },
  { key: "app_scams", label: "APP Scams" },
  { key: "ato", label: "Account Takeover" },
  { key: "interventions", label: "Interventions" },
  { key: "promo", label: "Promo & Bonus Abuse" },
  { key: "procurement", label: "Procurement Fraud" },
  { key: "document_intelligence", label: "Document Intelligence" },
  { key: "deepfake", label: "Deepfake & Biometrics" },
  { key: "dispute_intelligence", label: "Dispute Intelligence" },
  { key: "nfc", label: "NFC / Contactless" },
  { key: "voice_auth", label: "Voice Authentication" },
];

const OUTCOME_STYLE: Record<string, string> = {
  allow: "border-emerald-200 bg-emerald-50 text-emerald-700",
  review: "border-amber-200 bg-amber-50 text-amber-800",
  deny: "border-red-200 bg-red-50 text-red-800",
};

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "That service is not enabled for this organization."
      : "Your role cannot run policy backtests.";
  }
  if (error instanceof ApiError && error.statusCode === 422) {
    const details = error.details as { code?: string; message?: string } | undefined;
    return details?.message || "The candidate configuration was rejected.";
  }
  return error instanceof Error ? error.message : "The backtest could not be run.";
}

function OutcomeBar({ distribution, total }: { distribution: Record<string, number>; total: number }) {
  const order = ["allow", "review", "deny"];
  return (
    <div className="flex flex-wrap gap-2">
      {order
        .filter((key) => distribution[key])
        .map((key) => (
          <Badge key={key} variant="outline" className={OUTCOME_STYLE[key] ?? ""}>
            {label(key)} · {distribution[key]}
            {total ? ` (${Math.round((distribution[key] / total) * 100)}%)` : ""}
          </Badge>
        ))}
    </div>
  );
}

export default function PolicyBacktestPage() {
  const [serviceKey, setServiceKey] = useState(SERVICES[0].key);
  const [reviewThreshold, setReviewThreshold] = useState("0.55");
  const [denyThreshold, setDenyThreshold] = useState("0.90");
  const [lookbackDays, setLookbackDays] = useState("30");
  const [result, setResult] = useState<PolicyBacktestResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceLabel = useMemo(
    () => SERVICES.find((s) => s.key === serviceKey)?.label ?? serviceKey,
    [serviceKey],
  );

  const run = async () => {
    setError(null);
    const review = Number(reviewThreshold);
    const deny = Number(denyThreshold);
    const lookback = Number(lookbackDays);
    if (!Number.isFinite(review) || !Number.isFinite(deny) || review < 0 || deny > 1 || review > deny) {
      setError("Thresholds must satisfy 0 ≤ review threshold ≤ deny threshold ≤ 1.");
      return;
    }
    setIsRunning(true);
    try {
      const response = await riskDecisionsService.backtestPolicy(
        serviceKey,
        { review_threshold: review, deny_threshold: deny },
        Number.isFinite(lookback) && lookback > 0 ? lookback : 30,
      );
      setResult(response);
    } catch (cause) {
      setError(describeError(cause));
      setResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5 pb-16">
      <div>
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations">
            <ArrowLeft className="mr-2 h-4 w-4" /> All investigations
          </Link>
        </Button>
      </div>

      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-indigo-50 p-3">
          <GitCompareArrows className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">
            Policy backtest — champion vs. challenger
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Re-classify recent, already-scored decisions under a candidate threshold
            configuration. See exactly how many decisions would flip before you activate
            a new policy version — nothing here is persisted or changes production traffic.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">Candidate configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Service
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={serviceKey}
                onChange={(e) => setServiceKey(e.target.value)}
              >
                {SERVICES.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Review threshold
                </label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.01}
                  value={reviewThreshold}
                  onChange={(e) => setReviewThreshold(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Deny threshold
                </label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.01}
                  value={denyThreshold}
                  onChange={(e) => setDenyThreshold(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Lookback window (days)
              </label>
              <input
                type="number"
                min={1}
                max={365}
                value={lookbackDays}
                onChange={(e) => setLookbackDays(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
            {error ? (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</div>
            ) : null}
            <Button onClick={() => void run()} disabled={isRunning}>
              {isRunning ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              Run backtest
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-5">
          {result ? (
            <>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">
                    {serviceLabel} · {result.decisions_evaluated} decision
                    {result.decisions_evaluated === 1 ? "" : "s"} in last {result.lookback_days} days
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Current outcomes (active policy v{result.current_policy_version})
                    </p>
                    <div className="mt-2">
                      <OutcomeBar
                        distribution={result.outcome_distribution_current}
                        total={result.decisions_evaluated}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Candidate outcomes
                    </p>
                    <div className="mt-2">
                      <OutcomeBar
                        distribution={result.outcome_distribution_candidate}
                        total={result.decisions_evaluated}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-sm font-semibold text-indigo-800">
                    <GitCompareArrows className="h-4 w-4" />
                    {result.changed_count} of {result.decisions_evaluated} decision
                    {result.decisions_evaluated === 1 ? "" : "s"} would flip outcome
                  </div>
                </CardContent>
              </Card>

              {result.changed_examples.length ? (
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-base">Decisions that would flip</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 p-0">
                    {result.changed_examples.map((t) => (
                      <div
                        key={t.decision_id}
                        className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-5 py-3 text-sm last:border-0"
                      >
                        <span className="font-mono text-xs text-slate-400">
                          {t.subject_type} {t.subject_id.slice(0, 8)}
                        </span>
                        <span className="text-xs text-slate-500">score {t.score.toFixed(2)}</span>
                        <Badge variant="outline" className={OUTCOME_STYLE[t.current_decision] ?? ""}>
                          {label(t.current_decision)}
                        </Badge>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                        <Badge variant="outline" className={OUTCOME_STYLE[t.candidate_decision] ?? ""}>
                          {label(t.candidate_decision)}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ) : null}
            </>
          ) : (
            <Card className="border-dashed border-slate-300">
              <CardContent className="flex min-h-64 flex-col items-center justify-center gap-2 p-8 text-center text-sm text-slate-500">
                <GitCompareArrows className="h-8 w-8 text-slate-300" />
                Pick a service and candidate thresholds, then run a backtest to see the
                impact here.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
