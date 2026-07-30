"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Loader2, RefreshCw, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type BeneficiarySummary,
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
      ? "APP Scams is disabled for this organization."
      : "Permission denied. Transactions read access is required.";
  }
  return error instanceof Error ? error.message : "Beneficiary intelligence is unavailable.";
}

export default function BeneficiaryIntelligencePage() {
  const [items, setItems] = useState<BeneficiarySummary[]>([]);
  const [hash, setHash] = useState("");
  const [disposition, setDisposition] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setItems(
        await riskDecisionsService.beneficiaries(
          hash.trim() || undefined,
          disposition || undefined,
        ),
      );
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setLoading(false);
    }
  }, [disposition, hash]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    void load();
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            APP beneficiary lifecycle
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Beneficiary intelligence
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Search tenant-scoped, masked beneficiary profiles and inspect payment,
            relationship, challenge, disposition, alert, and case history.
          </p>
        </div>
        <Button variant="outline" onClick={() => void load()} disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </header>

      <Card className="border-slate-200">
        <CardContent className="p-4">
          <form
            onSubmit={submit}
            className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.45fr)_auto]"
          >
            <label className="space-y-1 text-xs font-semibold text-slate-600">
              Exact secure identifier hash
              <input
                value={hash}
                onChange={(event) => setHash(event.target.value)}
                placeholder="SHA-256/HMAC hash, never a raw account number"
                className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold text-slate-600">
              Disposition
              <select
                value={disposition}
                onChange={(event) => setDisposition(event.target.value)}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
              >
                <option value="">All dispositions</option>
                {[
                  "unreviewed",
                  "suspected",
                  "confirmed_scam",
                  "confirmed_mule",
                  "cleared",
                  "false_positive",
                ].map((value) => (
                  <option key={value} value={value}>
                    {value.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </label>
            <Button type="submit" className="self-end" disabled={loading}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
        </CardContent>
      </Card>

      {error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="flex gap-3 p-5 text-sm text-red-800">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-bold">Beneficiary workflow unavailable</p>
              <p className="mt-1">{error}</p>
            </div>
          </CardContent>
        </Card>
      ) : null}

      {loading && !items.length ? (
        <div className="flex min-h-48 items-center justify-center">
          <Loader2 className="h-7 w-7 animate-spin text-blue-600" />
        </div>
      ) : null}

      {!loading && !error && !items.length ? (
        <Card className="border-dashed border-slate-300">
          <CardContent className="p-10 text-center">
            <p className="font-bold text-slate-900">No beneficiary profiles found</p>
            <p className="mt-2 text-sm text-slate-500">
              Profiles appear after APP payment assessments; no synthetic records are shown.
            </p>
          </CardContent>
        </Card>
      ) : null}

      {items.length ? (
        <Card className="overflow-hidden border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">{items.length} beneficiary profiles</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/investigations/beneficiaries/${item.id}`}
                className="group grid gap-4 border-t border-slate-100 p-4 hover:bg-slate-50 sm:p-5 lg:grid-cols-[1.1fr_0.7fr_0.7fr_auto] lg:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold text-slate-950">{item.masked_identifier}</p>
                    <Badge variant="outline">{item.disposition.replaceAll("_", " ")}</Badge>
                    {item.risk_score >= 0.7 ? (
                      <Badge className="bg-red-100 text-red-800">high risk</Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.institution_code || "Unknown institution"} ·{" "}
                    {item.destination_country || "Unknown destination"}
                  </p>
                  <p className="mt-2 break-all font-mono text-[10px] text-slate-400">
                    {item.identifier_hash}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Payments</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {item.payment_count.toLocaleString()} ·{" "}
                    {item.payment_volume.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Last seen</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {formatDate(item.last_seen_at)}
                  </p>
                </div>
                <ArrowRight className="hidden h-5 w-5 text-slate-300 group-hover:text-blue-600 lg:block" />
              </Link>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
