"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Loader2, RefreshCw, ShieldOff } from "lucide-react";

import {
  CaseNarrativePanel,
  CaseRecommendationsPanel,
  DecisionLinks,
  DecisionTimeline,
  EngineContributions,
  EvidenceList,
  InterventionState,
  RiskDecisionHeader,
} from "@/components/investigations/RiskDecisionView";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type NormalizedRiskDecision,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Unified Risk is disabled for this organization."
      : "Your role cannot view this investigation.";
  }
  if (error instanceof ApiError && error.statusCode === 404) {
    return "This decision does not exist in your organization.";
  }
  return error instanceof Error ? error.message : "The investigation API is unavailable.";
}

export default function InvestigationDetailPage() {
  const params = useParams<{ decisionId: string }>();
  const decisionId = params.decisionId;
  const [decision, setDecision] = useState<NormalizedRiskDecision | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setDecision(await riskDecisionsService.get(decisionId));
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsLoading(false);
    }
  }, [decisionId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const execute = useCallback(async () => {
    if (!decision) return;
    setIsExecuting(true);
    setError(null);
    try {
      setDecision(
        await riskDecisionsService.execute(
          decision.decision_id,
          decision.recommended_action,
        ),
      );
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsExecuting(false);
    }
  }, [decision]);

  const cancel = useCallback(async () => {
    if (!decision) return;
    const reason = window.prompt("Reason for cancelling this intervention");
    if (!reason || reason.trim().length < 3) return;
    setIsCancelling(true);
    setError(null);
    try {
      setDecision(
        await riskDecisionsService.cancel(decision.decision_id, reason.trim()),
      );
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsCancelling(false);
    }
  }, [decision]);

  if (isLoading && !decision) {
    return (
      <div className="mx-auto flex min-h-96 max-w-7xl items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error && !decision) {
    return (
      <div className="mx-auto max-w-3xl py-10">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6 text-red-800">
            <ShieldOff className="h-6 w-6" />
            <p className="mt-3 font-bold">Investigation cannot be loaded</p>
            <p className="mt-1 text-sm">{error}</p>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" onClick={() => void load()}>
                <RefreshCw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button asChild variant="ghost">
                <Link href="/dashboard/investigations">Back to investigations</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!decision) return null;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5 pb-16">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations">
            <ArrowLeft className="mr-2 h-4 w-4" /> All investigations
          </Link>
        </Button>
        <Button variant="outline" onClick={() => void load()} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      <RiskDecisionHeader decision={decision} />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <div className="space-y-5">
          {decision.case_id ? <CaseNarrativePanel caseId={decision.case_id} /> : null}
          {decision.case_id ? <CaseRecommendationsPanel caseId={decision.case_id} /> : null}
          <EngineContributions decision={decision} />
          <EvidenceList decision={decision} />
          <DecisionTimeline decision={decision} />
        </div>
        <aside className="space-y-5">
          <InterventionState
            decision={decision}
            onExecute={() => void execute()}
            onCancel={() => void cancel()}
            isExecuting={isExecuting}
            isCancelling={isCancelling}
          />
          <DecisionLinks decision={decision} />
          <Card className="border-slate-200">
            <CardContent className="space-y-3 p-5 text-sm">
              <div>
                <p className="text-slate-500">Policy version</p>
                <p className="font-semibold text-slate-900">
                  {decision.policy_version || "Safe default"}
                </p>
              </div>
              <div>
                <p className="text-slate-500">Customer risk profile</p>
                <p className="break-all font-mono text-xs text-slate-700">
                  {decision.customer_risk_profile_id || "Not applicable"}
                </p>
              </div>
              <div>
                <p className="text-slate-500">Unified risk profile</p>
                <p className="break-all font-mono text-xs text-slate-700">
                  {decision.unified_risk_profile_id || "Not applicable"}
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
