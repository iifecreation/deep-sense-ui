"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Loader2, Play, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type FeedbackConfusionMatrix,
  type ThresholdTuningRecommendation,
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

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "That service is not enabled for this organization."
      : "Your role cannot view tuning recommendations.";
  }
  return error instanceof Error ? error.message : "The recommendation could not be generated.";
}

function MatrixRow({ label, matrix }: { label: string; matrix: FeedbackConfusionMatrix }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <Badge variant="outline" className="border-red-200 bg-red-50 text-red-800">
          {matrix.false_negatives} missed fraud
        </Badge>
        <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-800">
          {matrix.false_positives} false alarms
        </Badge>
        <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">
          {matrix.true_positives} caught
        </Badge>
        <Badge variant="outline" className="border-slate-200 bg-slate-50 text-slate-600">
          {matrix.true_negatives} correctly allowed
        </Badge>
      </div>
      {matrix.precision !== null || matrix.recall !== null ? (
        <p className="text-xs text-slate-500">
          {matrix.precision !== null ? `Precision ${(matrix.precision * 100).toFixed(0)}%` : ""}
          {matrix.precision !== null && matrix.recall !== null ? " · " : ""}
          {matrix.recall !== null ? `Recall ${(matrix.recall * 100).toFixed(0)}%` : ""}
        </p>
      ) : null}
    </div>
  );
}

export default function ThresholdTuningPage() {
  const [serviceKey, setServiceKey] = useState(SERVICES[0].key);
  const [lookbackDays, setLookbackDays] = useState("90");
  const [fnWeight, setFnWeight] = useState("5");
  const [fpWeight, setFpWeight] = useState("1");
  const [result, setResult] = useState<ThresholdTuningRecommendation | null>(null);
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
      const response = await riskDecisionsService.getThresholdTuningRecommendation(
        serviceKey,
        Number(lookbackDays) || 90,
        Number(fnWeight) || 5,
        Number(fpWeight) || 1,
      );
      setResult(response);
    } catch (cause) {
      setError(describeError(cause));
      setResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  const changed = result && result.recommended_review_threshold !== result.current_review_threshold;

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
          <SlidersHorizontal className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">Threshold tuning</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Recommend a review threshold from analyst-labeled ground truth (confirmed fraud vs.
            false positive) instead of a hand-picked guess — sweeps every score seen in labeled
            decisions and picks the value that minimizes weighted false positives and false
            negatives. Validate any recommendation with a policy backtest before activating it.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">Inputs</CardTitle>
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
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Lookback (days)
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
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Missed-fraud cost
                </label>
                <input
                  type="number"
                  min={0.01}
                  step={0.5}
                  value={fnWeight}
                  onChange={(e) => setFnWeight(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  False-alarm cost
                </label>
                <input
                  type="number"
                  min={0.01}
                  step={0.5}
                  value={fpWeight}
                  onChange={(e) => setFpWeight(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
            {error ? <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
            <Button onClick={() => void run()} disabled={isRunning}>
              {isRunning ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
              Get recommendation
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-5">
          {result ? (
            <>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">
                    {serviceLabel} · {result.feedback_count} labeled decision
                    {result.feedback_count === 1 ? "" : "s"} in last {result.lookback_days} days
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-sm">
                    <span className="font-bold text-slate-900">{result.current_review_threshold.toFixed(2)}</span>
                    {changed ? (
                      <>
                        <ArrowRight className="h-4 w-4 text-indigo-500" />
                        <span className="font-bold text-indigo-700">
                          {result.recommended_review_threshold.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-slate-500">no change recommended</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{result.note}</p>
                  <MatrixRow label="Current threshold" matrix={result.current_confusion_matrix} />
                  {changed ? <MatrixRow label="Recommended threshold" matrix={result.recommended_confusion_matrix} /> : null}
                  {changed ? (
                    <Button asChild variant="outline">
                      <Link href="/dashboard/investigations/policy-backtest">
                        Validate with a policy backtest <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="border-dashed border-slate-300">
              <CardContent className="flex min-h-64 flex-col items-center justify-center gap-2 p-8 text-center text-sm text-slate-500">
                <SlidersHorizontal className="h-8 w-8 text-slate-300" />
                Pick a service and cost weights, then get a recommendation to see it here.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
