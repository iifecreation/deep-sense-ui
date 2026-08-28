"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileSearch,
  Fingerprint,
  Gauge,
  Layers3,
  Link2,
  ListChecks,
  Loader2,
  NotebookText,
  Play,
  ShieldAlert,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import { type CaseNarrative, type CaseRecommendations, casesService } from "@/services/cases.service";
import type { NormalizedRiskDecision } from "@/services/risk-decisions.service";

const RISK_STYLE: Record<NormalizedRiskDecision["risk_level"], string> = {
  minimal: "border-slate-200 bg-slate-50 text-slate-700",
  low: "border-emerald-200 bg-emerald-50 text-emerald-700",
  medium: "border-amber-200 bg-amber-50 text-amber-800",
  high: "border-orange-200 bg-orange-50 text-orange-800",
  critical: "border-red-200 bg-red-50 text-red-800",
};

function label(value: string): string {
  return value.replaceAll("_", " ");
}

function formatDate(value: string | null): string {
  if (!value) return "Pending";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function RiskDecisionHeader({ decision }: { decision: NormalizedRiskDecision }) {
  const outcomeIcon =
    decision.decision === "allow" ? (
      <ShieldCheck className="h-6 w-6 text-emerald-600" />
    ) : decision.decision === "deny" ? (
      <ShieldAlert className="h-6 w-6 text-red-600" />
    ) : (
      <FileSearch className="h-6 w-6 text-amber-600" />
    );

  return (
    <Card className="overflow-hidden border-slate-200">
      <CardContent className="p-0">
        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex min-w-0 items-start gap-4">
            <div className="rounded-xl bg-slate-100 p-3">{outcomeIcon}</div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={RISK_STYLE[decision.risk_level]}>
                  {decision.risk_level} risk
                </Badge>
                <Badge variant="secondary">{label(decision.service_key)}</Badge>
                <Badge variant="outline">{label(decision.processing_status)}</Badge>
              </div>
              <h1 className="mt-3 break-words text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                {label(decision.decision)} · {label(decision.recommended_action)}
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                {decision.explanation}
              </p>
              <p className="mt-3 break-all font-mono text-[11px] text-slate-400">
                {decision.decision_id} · correlation {decision.correlation_id}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <Gauge className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Risk score</p>
              <p className="text-3xl font-black text-slate-950">{Math.round(decision.score * 100)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DecisionLinks({ decision }: { decision: NormalizedRiskDecision }) {
  const links = [
    decision.alert_id
      ? { href: `/dashboard/alerts/${decision.alert_id}`, label: "Open alert" }
      : null,
    decision.case_id ? { href: `/dashboard/cases/${decision.case_id}`, label: "Open case" } : null,
    decision.customer_risk_profile_id
      ? {
          href: `/dashboard/customer-risk/${decision.subject_id}`,
          label: "Customer risk",
        }
      : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Link2 className="h-4 w-4 text-blue-600" /> Investigation links
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {links.length ? (
          links.map((item) => (
            <Button key={item.href} asChild variant="outline" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))
        ) : (
          <p className="text-sm text-slate-500">No alert, case, or customer-risk link was created.</p>
        )}
      </CardContent>
    </Card>
  );
}

export function CaseNarrativePanel({ caseId }: { caseId: string }) {
  const [narrative, setNarrative] = useState<CaseNarrative | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setNarrative(await casesService.getCaseNarrative(caseId));
    } catch (cause) {
      setError(
        cause instanceof ApiError && cause.statusCode === 403
          ? "Your role cannot view this case."
          : cause instanceof Error
            ? cause.message
            : "The case narrative could not be generated.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [caseId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <NotebookText className="h-4 w-4 text-indigo-600" /> Case narrative
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading && !narrative ? (
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Summarizing this case&apos;s decision history…
          </div>
        ) : error ? (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
          </div>
        ) : narrative ? (
          <>
            <p className="font-semibold text-slate-900">{narrative.headline}</p>
            {narrative.decision_count > 0 ? (
              <>
                <div className="flex flex-wrap gap-2">
                  {narrative.domains_involved.map((domain) => (
                    <Badge key={domain} variant="secondary">
                      {label(domain)}
                    </Badge>
                  ))}
                  <Badge variant="outline">
                    {narrative.decision_count} linked decision{narrative.decision_count === 1 ? "" : "s"}
                  </Badge>
                </div>
                {expanded ? (
                  <div className="space-y-3">
                    {narrative.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-sm leading-6 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                    {narrative.key_reason_codes.length ? (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Key risk drivers
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {narrative.key_reason_codes.map((reason) => (
                            <Badge key={reason.code} variant="outline">
                              {reason.label} · {reason.occurrences}x
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <Button variant="outline" size="sm" onClick={() => setExpanded((v) => !v)}>
                  {expanded ? "Show less" : "Read full summary"}
                </Button>
              </>
            ) : (
              <p className="text-sm text-slate-500">{narrative.paragraphs[0]}</p>
            )}
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

const CATEGORY_STYLE: Record<string, string> = {
  escalation: "border-red-200 bg-red-50 text-red-800",
  customer_facing: "border-amber-200 bg-amber-50 text-amber-800",
  investigative: "border-blue-200 bg-blue-50 text-blue-800",
  compliance: "border-purple-200 bg-purple-50 text-purple-800",
  disposition: "border-emerald-200 bg-emerald-50 text-emerald-700",
  monitoring: "border-slate-200 bg-slate-50 text-slate-700",
};

export function CaseRecommendationsPanel({ caseId }: { caseId: string }) {
  const [data, setData] = useState<CaseRecommendations | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setData(await casesService.getCaseRecommendations(caseId));
    } catch (cause) {
      setError(
        cause instanceof ApiError && cause.statusCode === 403
          ? "Your role cannot view this case."
          : cause instanceof Error
            ? cause.message
            : "Recommendations could not be generated.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [caseId]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <ListChecks className="h-4 w-4 text-indigo-600" /> Recommended next actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading && !data ? (
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Ranking next-best actions…
          </div>
        ) : error ? (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
          </div>
        ) : data ? (
          <div className="space-y-3">
            {data.recommendations.map((rec) => (
              <div
                key={rec.action_type}
                className="rounded-lg border border-slate-200 p-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={CATEGORY_STYLE[rec.category] ?? CATEGORY_STYLE.monitoring}>
                    {label(rec.category)}
                  </Badge>
                  <p className="font-semibold text-slate-900">{rec.label}</p>
                  {rec.already_taken ? (
                    <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="mr-1 h-3 w-3" /> Already recorded
                    </Badge>
                  ) : null}
                </div>
                {rec.rationale.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-500">
                    {rec.rationale.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function EngineContributions({ decision }: { decision: NormalizedRiskDecision }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Layers3 className="h-4 w-4 text-violet-600" /> Engine contributions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {decision.engine_contributions.length ? (
          decision.engine_contributions.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="font-bold text-slate-900">{label(item.engine_key)}</p>
                  <p className="mt-1 font-mono text-[11px] text-slate-400">
                    {item.source_record_type} · {item.source_record_id}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{label(item.outcome)}</Badge>
                  <span className="text-lg font-black text-slate-950">
                    {Math.round(item.score * 100)}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.reason_codes.map((reason) => (
                  <Badge key={reason} variant="secondary">
                    {label(reason)}
                  </Badge>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">No engine contributions were persisted.</p>
        )}
      </CardContent>
    </Card>
  );
}

export function EvidenceList({ decision }: { decision: NormalizedRiskDecision }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Fingerprint className="h-4 w-4 text-cyan-600" /> Evidence
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {decision.evidence_references.length ? (
          decision.evidence_references.map((item) => (
            <div key={item.id} className="rounded-xl bg-slate-50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-slate-900">{item.label}</p>
                <Badge variant="outline">{label(item.evidence_type)}</Badge>
              </div>
              <p className="mt-2 break-all font-mono text-[11px] text-slate-500">
                {item.source_record_type} · {item.source_record_id}
              </p>
              {item.metadata ? (
                <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 text-[11px] leading-5 text-slate-600">
                  {JSON.stringify(item.metadata, null, 2)}
                </pre>
              ) : null}
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">No evidence references were persisted.</p>
        )}
      </CardContent>
    </Card>
  );
}

export function InterventionState({
  decision,
  onExecute,
  onCancel,
  isExecuting,
  isCancelling,
}: {
  decision: NormalizedRiskDecision;
  onExecute: () => void;
  onCancel: () => void;
  isExecuting: boolean;
  isCancelling: boolean;
}) {
  const failed = ["failed", "timed_out", "cancelled"].includes(decision.execution_status);
  const pending = ["execution_requested", "provider_accepted", "customer_pending"].includes(
    decision.execution_status,
  );
  const completed = ["completed", "customer_completed"].includes(
    decision.execution_status,
  );
  return (
    <Card
      className={
        failed
          ? "border-red-200"
          : pending
            ? "border-amber-200"
            : completed
              ? "border-emerald-200"
              : "border-slate-200"
      }
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          {failed ? (
            <XCircle className="h-4 w-4 text-red-600" />
          ) : pending ? (
            <Clock3 className="h-4 w-4 text-amber-600" />
          ) : (
            <Activity className="h-4 w-4 text-blue-600" />
          )}
          Intervention
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Recommended</dt>
            <dd className="font-semibold text-slate-900">{label(decision.recommended_action)}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Executed</dt>
            <dd className="font-semibold text-slate-900">
              {decision.executed_action ? label(decision.executed_action) : "Not executed"}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Execution state</dt>
            <dd className="font-semibold text-slate-900">{label(decision.execution_status)}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Provider</dt>
            <dd className="font-semibold text-slate-900">{label(decision.provider_status)}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          {decision.execution_status === "recommended" ||
          decision.execution_status === "failed" ||
          decision.execution_status === "timed_out" ? (
            <Button onClick={onExecute} disabled={isExecuting || isCancelling}>
              {isExecuting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
              {decision.execution_status === "recommended" ? "Request execution" : "Retry safely"}
            </Button>
          ) : null}
          {["recommended", "execution_requested", "provider_accepted", "customer_pending"].includes(
            decision.execution_status,
          ) ? (
            <Button
              variant="outline"
              onClick={onCancel}
              disabled={isExecuting || isCancelling}
            >
              {isCancelling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Cancel intervention
            </Button>
          ) : null}
        </div>
        {decision.provider_status === "not_configured" ? (
          <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            Provider is not configured. Execution was not claimed; configure an adapter, then retry safely.
          </div>
        ) : null}
        {decision.processing_status === "partial" ? (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
            The risk decision is authoritative, but a downstream retry is pending or
            exhausted. Refresh to confirm its latest state.
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function DecisionTimeline({ decision }: { decision: NormalizedRiskDecision }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Clock3 className="h-4 w-4 text-slate-600" /> Investigation timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        {decision.timeline.length ? (
          <ol className="relative ml-2 border-l border-slate-200">
            {decision.timeline.map((item) => (
              <li key={item.id} className="pb-6 pl-6 last:pb-0">
                <span className="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </span>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <p className="font-semibold text-slate-900">{item.summary}</p>
                  <time className="text-xs text-slate-400">{formatDate(item.created_at)}</time>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {label(item.event_type)} · {label(item.status)}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-slate-500">No timeline events were returned.</p>
        )}
      </CardContent>
    </Card>
  );
}
