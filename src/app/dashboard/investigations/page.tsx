"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  FileSearch,
  Filter,
  FlaskConical,
  GitCompareArrows,
  Loader2,
  RefreshCw,
  Router,
  ShieldOff,
  SlidersHorizontal,
  TrendingUp,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type NormalizedRiskDecision,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

const SERVICES = [
  ["", "All priority services"],
  ["app_scams", "APP Scams"],
  ["ato", "Account Takeover"],
  ["cnp_advanced", "CNP Fraud"],
  ["interventions", "Interventions"],
  ["customer_risk", "Customer Risk"],
  ["unified_risk", "Unified Risk"],
  ["promo", "Promo & Bonus Abuse"],
  ["procurement", "Procurement Fraud"],
  ["document_intelligence", "Document Intelligence"],
  ["deepfake", "Deepfake & Biometrics"],
  ["dispute_intelligence", "Dispute Intelligence"],
  ["nfc", "NFC / Contactless"],
  ["voice_auth", "Voice Authentication"],
] as const;

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function errorMessage(error: unknown): { title: string; detail: string } {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? {
          title: "Investigation workflow is disabled",
          detail: "Unified Risk is not enabled for this organization.",
        }
      : {
          title: "Permission denied",
          detail: "Your role cannot read tenant risk decisions.",
        };
  }
  return {
    title: "Investigation data is unavailable",
    detail: error instanceof Error ? error.message : "The API could not be reached.",
  };
}

function DecisionRow({ item }: { item: NormalizedRiskDecision }) {
  const critical = item.risk_level === "critical" || item.risk_level === "high";
  return (
    <Link
      href={`/dashboard/investigations/${item.decision_id}`}
      className="group grid gap-4 border-b border-slate-100 p-4 transition-colors last:border-0 hover:bg-slate-50 sm:p-5 lg:grid-cols-[1.3fr_0.7fr_0.6fr_auto] lg:items-center"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{label(item.service_key)}</Badge>
          <Badge
            variant="outline"
            className={
              critical
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-slate-200 bg-slate-50 text-slate-700"
            }
          >
            {item.risk_level}
          </Badge>
          {item.processing_status !== "completed" ? (
            <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-800">
              {label(item.processing_status)}
            </Badge>
          ) : null}
        </div>
        <p className="mt-2 truncate font-bold text-slate-950">
          {label(item.subject_type)} · {item.subject_id}
        </p>
        <p className="mt-1 truncate text-xs text-slate-500">{item.explanation}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">Decision</p>
        <p className="mt-1 font-semibold text-slate-900">{label(item.decision)}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">Score</p>
        <p className="mt-1 text-xl font-black text-slate-950">{Math.round(item.score * 100)}</p>
      </div>
      <ArrowRight className="hidden h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 lg:block" />
    </Link>
  );
}

export default function InvestigationsPage() {
  // Fallback: No specific hook generated, using generic state
  const apiData: any[] = [];

  const [items, setItems] = useState<NormalizedRiskDecision[]>([]);
  const [service, setService] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [failure, setFailure] = useState<{ title: string; detail: string } | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setFailure(null);
    try {
      setItems(
        await riskDecisionsService.list({
          service_key: service || undefined,
          subject_id: subjectId.trim() || undefined,
          limit: 100,
        }),
      );
    } catch (error) {
      setFailure(errorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, [service, subjectId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Tenant investigation workspace
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Real-time risk decisions
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            One persisted view of events, engine evidence, interventions, alerts, cases,
            customer risk, and unified risk. No dashboard-only synthetic facts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/simulate">
              <FlaskConical className="mr-2 h-4 w-4" /> Risk simulator
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/policy-backtest">
              <GitCompareArrows className="mr-2 h-4 w-4" /> Policy backtest
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/drift">
              <TrendingUp className="mr-2 h-4 w-4" /> Drift detection
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/provider-scorecard">
              <Router className="mr-2 h-4 w-4" /> Provider scorecard
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/threshold-tuning">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Threshold tuning
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/investigations/workload">
              <Users className="mr-2 h-4 w-4" /> Analyst workload
            </Link>
          </Button>
          <Button variant="outline" onClick={() => void load()} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {(apiData || []).map((workflow) => (
          <Link
            key={workflow.href}
            href={workflow.href}
            className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
          >
            <p className="font-bold text-slate-950">{workflow.title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{workflow.detail}</p>
          </Link>
        ))}
      </div>

      <Card className="border-slate-200">
        <CardContent className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
          <label className="space-y-1 text-xs font-semibold text-slate-600">
            Service
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900"
            >
              {SERVICES.map(([value, name]) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-xs font-semibold text-slate-600">
            Subject ID
            <input
              value={subjectId}
              onChange={(event) => setSubjectId(event.target.value)}
              placeholder="Account, customer, session, or checkout"
              className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm text-slate-900"
            />
          </label>
          <Button className="self-end" onClick={() => void load()}>
            <Filter className="mr-2 h-4 w-4" /> Apply
          </Button>
        </CardContent>
      </Card>

      {failure ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="flex items-start gap-3 p-5 text-red-800">
            <ShieldOff className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-bold">{failure.title}</p>
              <p className="mt-1 text-sm">{failure.detail}</p>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {isLoading && !items.length ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-28 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
      ) : null}

      {!isLoading && !failure && !items.length ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="flex flex-col items-center px-6 py-16 text-center">
            <FileSearch className="h-10 w-10 text-slate-300" />
            <p className="mt-4 font-bold text-slate-900">No persisted decisions found</p>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              Send an APP, ATO, or CNP integration event, or change the current filters.
            </p>
          </CardContent>
        </Card>
      ) : null}

      {items.length ? (
        <Card className="overflow-hidden border-slate-200">
          <CardContent className="p-0">
            {items.map((item) => (
              <DecisionRow key={item.decision_id} item={item} />
            ))}
          </CardContent>
        </Card>
      ) : null}

      {items.some((item) => item.processing_status === "partial") ? (
        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          A partial state preserves the valid fraud decision while a downstream alert,
          case, or intervention integration awaits retry.
        </div>
      ) : null}
    </div>
  );
}
