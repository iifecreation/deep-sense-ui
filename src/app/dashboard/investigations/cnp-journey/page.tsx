"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Loader2,
  RefreshCw,
  RotateCcw,
  ShoppingCart,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type CNPJourney,
  type MerchantPolicy,
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
      ? "CNP Fraud is disabled for this organization."
      : "Permission denied for this CNP workflow.";
  }
  if (error instanceof ApiError && error.statusCode === 404) {
    return "No tenant-scoped checkout journey exists for this identifier.";
  }
  return error instanceof Error ? error.message : "CNP investigation data is unavailable.";
}

export default function CNPJourneyPage() {
  const [checkoutId, setCheckoutId] = useState("");
  const [merchantKey, setMerchantKey] = useState("");
  const [journey, setJourney] = useState<CNPJourney | null>(null);
  const [policies, setPolicies] = useState<MerchantPolicy[]>([]);
  const [businessUnit, setBusinessUnit] = useState("");
  const [reviewThreshold, setReviewThreshold] = useState("0.55");
  const [denyThreshold, setDenyThreshold] = useState("0.90");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const loadJourney = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!checkoutId.trim()) return;
    setLoading(true);
    setError(null);
    try {
      setJourney(await riskDecisionsService.cnpJourney(checkoutId.trim()));
    } catch (cause) {
      setError(describeError(cause));
      setJourney(null);
    } finally {
      setLoading(false);
    }
  };

  const loadPolicies = async () => {
    setLoading(true);
    setError(null);
    try {
      setPolicies(await riskDecisionsService.merchantPolicies(merchantKey.trim() || undefined));
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setLoading(false);
    }
  };

  const createPolicy = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      await riskDecisionsService.createMerchantPolicy(
        merchantKey.trim(),
        businessUnit.trim(),
        {
          review_threshold: Number(reviewThreshold),
          deny_threshold: Number(denyThreshold),
        },
        reason.trim(),
      );
      await loadPolicies();
      setReason("");
      setSuccess("Merchant policy version activated and audited.");
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setSaving(false);
    }
  };

  const rollback = async (policy: MerchantPolicy) => {
    const rollbackReason = window.prompt(`Reason for rolling back to version ${policy.version}`);
    if (!rollbackReason || rollbackReason.trim().length < 3) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      await riskDecisionsService.rollbackMerchantPolicy(
        policy.merchant_key,
        policy.version,
        rollbackReason.trim(),
      );
      await loadPolicies();
      setSuccess(`Rollback created a new active version from v${policy.version}.`);
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Card-not-present investigation
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Checkout journey and merchant policy</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Chronological checkout, payment, signal, decision, intervention, alert, case,
          and merchant-outcome evidence with versioned tenant policy controls.
        </p>
      </header>

      {error ? (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" /> {error}
        </div>
      ) : null}
      {success ? (
        <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" /> {success}
        </div>
      ) : null}

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ShoppingCart className="h-4 w-4 text-blue-600" /> Joined checkout journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={loadJourney} className="flex flex-col gap-3 sm:flex-row">
              <input
                value={checkoutId}
                onChange={(event) => setCheckoutId(event.target.value)}
                placeholder="External checkout ID"
                className="h-10 min-w-0 flex-1 rounded-md border border-slate-200 px-3 text-sm"
              />
              <Button type="submit" disabled={loading || !checkoutId.trim()}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
                Load journey
              </Button>
            </form>

            {journey ? (
              <div className="mt-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  <Badge variant="outline">{journey.timeline.length} events</Badge>
                  <Badge variant="outline">{journey.decision_ids.length} decisions</Badge>
                  {journey.customer_id ? <Badge variant="secondary">customer linked</Badge> : null}
                  {journey.device_id ? <Badge variant="secondary">device linked</Badge> : null}
                </div>
                {journey.timeline.length ? (
                  <ol className="relative ml-2 border-l border-slate-200">
                    {journey.timeline.map((item) => (
                      <li key={`${item.type}-${item.record_id}`} className="pb-6 pl-6 last:pb-0">
                        <span className="absolute -left-2 rounded-full bg-white">
                          <Clock3 className="h-4 w-4 text-blue-600" />
                        </span>
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                          <p className="font-semibold text-slate-900">{item.summary}</p>
                          <time className="text-xs text-slate-400">{formatDate(item.occurred_at)}</time>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">{item.type.replaceAll("_", " ")}</p>
                        {item.type === "normalized_decision" ? (
                          <Link
                            href={`/dashboard/investigations/${item.record_id}`}
                            className="mt-2 inline-block text-xs font-bold text-blue-600"
                          >
                            Open decision, alert, case and intervention
                          </Link>
                        ) : null}
                        {Object.keys(item.details).length ? (
                          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-[10px] leading-5 text-slate-600">
                            {JSON.stringify(item.details, null, 2)}
                          </pre>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm text-slate-500">Checkout exists but has no timeline events.</p>
                )}
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-500">
                Enter a checkout ID to load authoritative tenant evidence.
              </p>
            )}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="border-slate-200">
            <CardHeader><CardTitle className="text-base">Activate merchant policy version</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={createPolicy} className="space-y-3">
                <label className="space-y-1 text-xs font-semibold text-slate-600">
                  Merchant key
                  <input
                    value={merchantKey}
                    onChange={(event) => setMerchantKey(event.target.value)}
                    required
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                  />
                </label>
                <label className="space-y-1 text-xs font-semibold text-slate-600">
                  Business unit
                  <input
                    value={businessUnit}
                    onChange={(event) => setBusinessUnit(event.target.value)}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="space-y-1 text-xs font-semibold text-slate-600">
                    Review threshold
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.01"
                      value={reviewThreshold}
                      onChange={(event) => setReviewThreshold(event.target.value)}
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                    />
                  </label>
                  <label className="space-y-1 text-xs font-semibold text-slate-600">
                    Deny threshold
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.01"
                      value={denyThreshold}
                      onChange={(event) => setDenyThreshold(event.target.value)}
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                    />
                  </label>
                </div>
                <textarea
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  required
                  minLength={3}
                  placeholder="Change reason"
                  className="min-h-20 w-full rounded-md border border-slate-200 p-3 text-sm"
                />
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="submit"
                    disabled={saving || !merchantKey.trim() || reason.trim().length < 3}
                  >
                    {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Activate version
                  </Button>
                  <Button type="button" variant="outline" onClick={() => void loadPolicies()}>
                    Load versions
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader><CardTitle className="text-base">Version and rollback history</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {policies.length ? policies.map((policy) => (
                <div key={policy.id} className="rounded-lg border border-slate-200 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-bold text-slate-900">
                      {policy.merchant_key} · v{policy.version}
                    </p>
                    <Badge variant={policy.is_active ? "default" : "outline"}>
                      {policy.is_active ? "active" : "superseded"}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{policy.change_reason}</p>
                  <pre className="mt-2 overflow-x-auto rounded bg-slate-50 p-2 text-[10px]">
                    {JSON.stringify(policy.configuration, null, 2)}
                  </pre>
                  {!policy.is_active ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-3"
                      disabled={saving}
                      onClick={() => void rollback(policy)}
                    >
                      <RotateCcw className="mr-2 h-3.5 w-3.5" /> Roll back to this version
                    </Button>
                  ) : null}
                </div>
              )) : (
                <p className="text-sm text-slate-500">
                  Load a merchant&apos;s policy versions. No placeholder policy is shown.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
