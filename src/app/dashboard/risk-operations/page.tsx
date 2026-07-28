"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Database,
  RefreshCw,
  ShieldOff,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  PriorityServiceOperational,
  PriorityServiceOperationsResponse,
  riskOperationsService,
} from "@/services/risk-operations.service";

type HealthState =
  | "operational"
  | "degraded"
  | "provider_not_configured"
  | "no_data"
  | "service_disabled"
  | "health_unknown";

const STATE_STYLE: Record<HealthState, string> = {
  operational: "border-emerald-200 bg-emerald-50 text-emerald-700",
  degraded: "border-amber-200 bg-amber-50 text-amber-700",
  provider_not_configured: "border-orange-200 bg-orange-50 text-orange-700",
  no_data: "border-slate-200 bg-slate-50 text-slate-600",
  service_disabled: "border-slate-200 bg-slate-100 text-slate-500",
  health_unknown: "border-blue-200 bg-blue-50 text-blue-700",
};

function healthState(service: PriorityServiceOperational): HealthState {
  if (service.enabled === false) return "service_disabled";
  if (service.provider_readiness === "provider_not_configured") {
    return "provider_not_configured";
  }
  if (
    (service.failed_events ?? 0) > 0 ||
    (service.error_rate !== null && service.error_rate > 0)
  ) {
    return "degraded";
  }
  if (service.events_processed === 0) return "no_data";
  if (service.latest_successful_processing_at) return "operational";
  return "health_unknown";
}

function formatDate(value: string | null): string {
  if (!value) return "No successful processing recorded";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function RiskOperationsPage() {
  const [data, setData] = useState<PriorityServiceOperationsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setData(await riskOperationsService.getPriorityServices());
    } catch (cause) {
      if (cause instanceof ApiError && cause.statusCode === 403) {
        setError(
          cause.code === "service_not_enabled"
            ? "Unified Risk is disabled for this organization."
            : "You do not have permission to view operational evidence.",
        );
      } else {
        setError(cause instanceof Error ? cause.message : "Operational evidence is unavailable.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Tenant operational evidence
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Priority risk services
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Processing, failure, queue, provider, and configuration evidence from
            authoritative tenant-scoped records. A registered route alone is not
            treated as service health.
          </p>
        </div>
        <Button variant="outline" onClick={() => void load()} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Refresh evidence
        </Button>
      </div>

      {error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="flex items-start gap-3 p-5 text-sm text-red-800">
            <ShieldOff className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-bold">Operational evidence cannot be loaded</p>
              <p className="mt-1">{error}</p>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {isLoading && !data ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
      ) : null}

      {data ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.services.map((service) => {
              const state = healthState(service);
              return (
                <Card key={service.key} className="overflow-hidden border-slate-200">
                  <CardHeader className="border-b border-slate-100 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-base text-slate-950">
                          {service.service}
                        </CardTitle>
                        <CardDescription className="mt-1 font-mono text-[11px]">
                          {service.key} · v{service.service_version}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className={STATE_STYLE[state]}>
                        {state.replaceAll("_", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Database className="h-3.5 w-3.5" /> Processed
                        </div>
                        <p className="mt-1 text-xl font-black text-slate-950">
                          {service.events_processed.toLocaleString()}
                        </p>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <AlertTriangle className="h-3.5 w-3.5" /> Failed
                        </div>
                        <p className="mt-1 text-xl font-black text-slate-950">
                          {service.failed_events === null
                            ? "Unknown"
                            : service.failed_events.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <dl className="space-y-2 text-xs">
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Queue depth</dt>
                        <dd className="font-semibold text-slate-800">
                          {service.queue_depth ?? "Not applicable"}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Error rate</dt>
                        <dd className="font-semibold text-slate-800">
                          {service.error_rate === null
                            ? "Unknown"
                            : `${(service.error_rate * 100).toFixed(2)}%`}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-500">Provider</dt>
                        <dd className="font-semibold text-slate-800">
                          {service.provider_readiness?.replaceAll("_", " ") ??
                            "Not provider-dependent"}
                        </dd>
                      </div>
                    </dl>

                    <div className="flex items-start gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                      <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{formatDate(service.latest_successful_processing_at)}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-blue-100 bg-blue-50/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="h-4 w-4 text-blue-600" />
                Investigation workflows
              </CardTitle>
              <CardDescription>
                Review tenant-scoped evidence and outcomes in the existing operational workspaces.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/dashboard/alerts">Review alerts</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/cases">Investigate cases</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/customer-risk">Customer risk</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dashboard/advanced-fraud">Integration routes</Link>
              </Button>
            </CardContent>
          </Card>

          <p className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Evidence generated {formatDate(data.generated_at)}.
          </p>
        </>
      ) : null}
    </div>
  );
}
