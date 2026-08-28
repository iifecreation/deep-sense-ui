"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, RefreshCw, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type TeamWorkloadReport,
  analystWorkloadService,
} from "@/services/analyst-workload.service";

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return "Your role cannot view team workload.";
  }
  return error instanceof Error ? error.message : "The workload report could not be loaded.";
}

export default function AnalystWorkloadPage() {
  const [report, setReport] = useState<TeamWorkloadReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setError(null);
    setIsLoading(true);
    try {
      setReport(await analystWorkloadService.getTeamWorkload());
    } catch (cause) {
      setError(describeError(cause));
      setReport(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 pb-16">
      <div>
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations">
            <ArrowLeft className="mr-2 h-4 w-4" /> All investigations
          </Link>
        </Button>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-indigo-50 p-3">
            <Users className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-950">Analyst workload</h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Open-case count and a priority-weighted workload score per analyst, lightest load
              first — inferred from real case assignments in this organization. Use this to
              balance new case assignments fairly.
            </p>
          </div>
        </div>
        <Button variant="outline" onClick={() => void load()} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Refresh
        </Button>
      </div>

      {error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-5 text-sm text-red-800">{error}</CardContent>
        </Card>
      ) : null}

      {isLoading && !report ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
      ) : null}

      {!isLoading && report && report.entries.length === 0 ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="flex flex-col items-center px-6 py-16 text-center text-sm text-slate-500">
            <Users className="h-10 w-10 text-slate-300" />
            <p className="mt-4 font-bold text-slate-900">No known analysts yet</p>
            <p className="mt-2 max-w-md">
              No case in this organization has ever been assigned to anyone. Assign a case to
              start tracking workload.
            </p>
          </CardContent>
        </Card>
      ) : null}

      {report && report.entries.length ? (
        <Card className="overflow-hidden border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">{report.entries.length} analyst(s)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {report.entries.map((entry) => (
              <div
                key={entry.user_id}
                className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 text-sm last:border-0"
              >
                <span className="font-mono text-xs text-slate-500">{entry.user_id}</span>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className={
                      entry.open_case_count === 0
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                    }
                  >
                    {entry.open_case_count} open
                  </Badge>
                  {entry.high_priority_open_count > 0 ? (
                    <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-800">
                      {entry.high_priority_open_count} high-priority
                    </Badge>
                  ) : null}
                  <Badge variant="outline" className="border-indigo-200 bg-indigo-50 text-indigo-700">
                    score {entry.workload_score.toFixed(2)}
                  </Badge>
                  {entry.oldest_open_case_age_days !== null ? (
                    <span className="text-xs text-slate-400">
                      oldest {entry.oldest_open_case_age_days.toFixed(1)}d
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
