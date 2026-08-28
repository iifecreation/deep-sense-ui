"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Loader2, Play, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type DriftLevel,
  type DriftReport,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

interface ServiceOption {
  key: string;
  label: string;
}

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

const DRIFT_STYLE: Record<DriftLevel, string> = {
  insufficient_data: "border-slate-200 bg-slate-50 text-slate-600",
  none: "border-emerald-200 bg-emerald-50 text-emerald-700",
  watch: "border-amber-200 bg-amber-50 text-amber-800",
  alert: "border-red-200 bg-red-50 text-red-800",
};

const DRIFT_COPY: Record<DriftLevel, string> = {
  insufficient_data: "Not enough decisions in one or both windows to measure drift reliably.",
  none: "The risk-level distribution is stable — no material shift versus the baseline.",
  watch: "A moderate shift was detected — worth keeping an eye on.",
  alert: "A significant shift was detected — consider a policy backtest or analyst review.",
};

const RISK_LEVEL_STYLE: Record<string, string> = {
  minimal: "bg-slate-100 text-slate-600",
  low: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-800",
  high: "bg-orange-100 text-orange-800",
  critical: "bg-red-100 text-red-800",
};

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "That service is not enabled for this organization."
      : "Your role cannot view drift reports.";
  }
  return error instanceof Error ? error.message : "The drift report could not be generated.";
}

function ReasonCodeList({ title, items, tone }: { title: string; items: DriftReport["emerging_reason_codes"]; tone: "up" | "down" }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
      <div className="mt-2 space-y-1.5">
        {items.map((item) => (
          <div key={item.code} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
            <span className="font-mono text-xs text-slate-700">{item.code}</span>
            <span className={tone === "up" ? "font-semibold text-red-700" : "font-semibold text-slate-500"}>
              {(item.baseline_rate * 100).toFixed(0)}% → {(item.current_rate * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DriftDetectionPage() {
  const [serviceKey, setServiceKey] = useState(SERVICES[0].key);
  const [baselineDays, setBaselineDays] = useState("60");
  const [currentDays, setCurrentDays] = useState("14");
  const [report, setReport] = useState<DriftReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceLabel = useMemo(
    () => SERVICES.find((s) => s.key === serviceKey)?.label ?? serviceKey,
    [serviceKey],
  );

  const run = async () => {
    setError(null);
    setIsRunning(true);
    try {
      const response = await riskDecisionsService.getDriftReport(
        serviceKey,
        Number(baselineDays) || 60,
        Number(currentDays) || 14,
      );
      setReport(response);
    } catch (cause) {
      setError(describeError(cause));
      setReport(null);
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
          <TrendingUp className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">Drift detection</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Compare a recent window of decisions against an earlier baseline to see whether a
            domain&apos;s risk profile has shifted — using the population stability index (PSI)
            over the risk-level distribution, plus which reason codes are newly emerging or
            fading out.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">Windows</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service</label>
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
                  Baseline (days)
                </label>
                <input
                  type="number"
                  min={1}
                  max={365}
                  value={baselineDays}
                  onChange={(e) => setBaselineDays(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Current (days)
                </label>
                <input
                  type="number"
                  min={1}
                  max={180}
                  value={currentDays}
                  onChange={(e) => setCurrentDays(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
            {error ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
            <Button onClick={() => void run()} disabled={isRunning}>
              {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
              Check drift
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-5">
          {report ? (
            <>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">
                    {serviceLabel} · {report.baseline_decision_count} baseline vs.{" "}
                    {report.current_decision_count} current decision
                    {report.current_decision_count === 1 ? "" : "s"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`flex items-start gap-2 rounded-lg border p-3 text-sm ${DRIFT_STYLE[report.drift_level]}`}>
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p className="font-bold">
                        {label(report.drift_level)}
                        {report.psi !== null ? ` · PSI ${report.psi.toFixed(3)}` : ""}
                      </p>
                      <p className="mt-0.5">{DRIFT_COPY[report.drift_level]}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Risk-level distribution shift
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {report.risk_level_buckets.map((b) => (
                        <div key={b.risk_level} className="flex items-center gap-2 text-sm">
                          <Badge variant="outline" className={RISK_LEVEL_STYLE[b.risk_level] ?? ""}>
                            {b.risk_level}
                          </Badge>
                          <span className="text-slate-600">
                            {(b.baseline_share * 100).toFixed(0)}% → {(b.current_share * 100).toFixed(0)}%
                          </span>
                          <span
                            className={
                              b.share_delta > 0.02
                                ? "font-semibold text-red-600"
                                : b.share_delta < -0.02
                                  ? "font-semibold text-emerald-600"
                                  : "text-slate-400"
                            }
                          >
                            {b.share_delta >= 0 ? "+" : ""}
                            {(b.share_delta * 100).toFixed(1)} pts
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {report.emerging_reason_codes.length || report.fading_reason_codes.length ? (
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-base">Reason code shifts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ReasonCodeList title="Emerging" items={report.emerging_reason_codes} tone="up" />
                    <ReasonCodeList title="Fading" items={report.fading_reason_codes} tone="down" />
                  </CardContent>
                </Card>
              ) : null}
            </>
          ) : (
            <Card className="border-dashed border-slate-300">
              <CardContent className="flex min-h-64 flex-col items-center justify-center gap-2 p-8 text-center text-sm text-slate-500">
                <TrendingUp className="h-8 w-8 text-slate-300" />
                Pick a service and window sizes, then check for drift to see the comparison
                here.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
