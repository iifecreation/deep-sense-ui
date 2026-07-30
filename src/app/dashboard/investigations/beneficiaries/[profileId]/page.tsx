"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AlertTriangle, ArrowLeft, CheckCircle2, Loader2, RefreshCw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type BeneficiaryDetail,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function BeneficiaryProfilePage() {
  const { profileId } = useParams<{ profileId: string }>();
  const [profile, setProfile] = useState<BeneficiaryDetail | null>(null);
  const [disposition, setDisposition] = useState("unreviewed");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const value = await riskDecisionsService.beneficiary(profileId);
      setProfile(value);
      setDisposition(value.disposition);
    } catch (cause) {
      if (cause instanceof ApiError && cause.statusCode === 403) {
        setError("Permission denied or APP Scams is disabled for this organization.");
      } else if (cause instanceof ApiError && cause.statusCode === 404) {
        setError("This beneficiary does not exist in your organization.");
      } else {
        setError(cause instanceof Error ? cause.message : "Beneficiary profile unavailable.");
      }
    } finally {
      setLoading(false);
    }
  }, [profileId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  const save = async (event: FormEvent) => {
    event.preventDefault();
    if (!profile) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await riskDecisionsService.setBeneficiaryDisposition(
        profile.id,
        disposition,
        note,
      );
      setSuccess(`Disposition confirmed as ${result.disposition.replaceAll("_", " ")}.`);
      setNote("");
      await load();
    } catch (cause) {
      setError(
        cause instanceof ApiError && cause.statusCode === 403
          ? "Permission denied. Case write access is required."
          : cause instanceof Error
            ? cause.message
            : "Disposition update failed.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!profile) {
    return (
      <Card className="mx-auto max-w-3xl border-red-200 bg-red-50">
        <CardContent className="p-6 text-red-800">
          <AlertTriangle className="h-6 w-6" />
          <p className="mt-3 font-bold">Beneficiary profile unavailable</p>
          <p className="mt-1 text-sm">{error}</p>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/dashboard/investigations/beneficiaries">Back to beneficiaries</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5 pb-16">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations/beneficiaries">
            <ArrowLeft className="mr-2 h-4 w-4" /> Beneficiaries
          </Link>
        </Button>
        <Button variant="outline" onClick={() => void load()} disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      <Card className="border-slate-200">
        <CardContent className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{profile.disposition.replaceAll("_", " ")}</Badge>
              {profile.suspected_mule ? <Badge className="bg-amber-100 text-amber-800">suspected mule</Badge> : null}
              {profile.confirmed_mule ? <Badge className="bg-red-100 text-red-800">confirmed mule</Badge> : null}
            </div>
            <h1 className="mt-3 text-3xl font-black text-slate-950">
              {profile.masked_identifier}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              {profile.institution_code || "Unknown institution"} ·{" "}
              {profile.destination_country || "Unknown destination"} · scoring{" "}
              {profile.scoring_version}
            </p>
            <p className="mt-3 break-all font-mono text-[10px] text-slate-400">
              Secure identifier: {profile.identifier_hash}
            </p>
          </div>
          <div className="rounded-xl bg-slate-950 px-6 py-4 text-white">
            <p className="text-xs uppercase tracking-wider text-slate-300">Risk score</p>
            <p className="mt-1 text-4xl font-black">{Math.round(profile.risk_score * 100)}</p>
          </div>
        </CardContent>
      </Card>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5" /> {success} Audit evidence was recorded.
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="border-slate-200 lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Payment and relationship summary</CardTitle></CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Payments", profile.payment_count],
              ["Payment volume", profile.payment_volume.toLocaleString()],
              ["Challenges", profile.challenge_count],
              ["Confirmations", profile.confirmation_count],
              ["Confirmed scams", profile.confirmed_scam_count],
              ["Cleared", profile.cleared_count],
              ["Graph score", Math.round(profile.graph_score * 100)],
              ["Relationships", profile.relationships.length],
            ].map(([name, value]) => (
              <div key={String(name)} className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">{name}</p>
                <p className="mt-1 text-xl font-black text-slate-950">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardHeader><CardTitle className="text-base">Analyst disposition</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={save} className="space-y-3">
              <select
                value={disposition}
                onChange={(event) => setDisposition(event.target.value)}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
              >
                {["unreviewed", "suspected", "confirmed_scam", "confirmed_mule", "cleared", "false_positive"].map(
                  (value) => <option key={value} value={value}>{value.replaceAll("_", " ")}</option>,
                )}
              </select>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                required
                minLength={3}
                placeholder="Evidence-based reason"
                className="min-h-24 w-full rounded-md border border-slate-200 p-3 text-sm"
              />
              <Button type="submit" disabled={saving || note.trim().length < 3} className="w-full">
                {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Confirm disposition
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="border-slate-200">
          <CardHeader><CardTitle className="text-base">Relationship timeline</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {profile.relationships.length ? profile.relationships.map((item) => (
              <div key={item.id} className="rounded-lg border border-slate-200 p-3">
                <p className="break-all font-mono text-xs text-slate-700">{item.payer_subject_id}</p>
                <p className="mt-2 text-sm text-slate-600">
                  {item.payment_count} payments · {item.payment_volume.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {formatDate(item.first_seen_at)} → {formatDate(item.last_seen_at)}
                </p>
              </div>
            )) : <p className="text-sm text-slate-500">No payer relationship history.</p>}
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardHeader><CardTitle className="text-base">Risk and challenge history</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {profile.history.length ? profile.history.map((item) => (
              <div key={item.id} className="rounded-lg border border-slate-200 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-slate-900">{item.event_type.replaceAll("_", " ")}</p>
                  <time className="text-xs text-slate-400">{formatDate(item.occurred_at)}</time>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  {Math.round(item.previous_risk_score * 100)} → {Math.round(item.new_risk_score * 100)}
                  {item.outcome ? ` · ${item.outcome.replaceAll("_", " ")}` : ""}
                </p>
                {item.normalized_decision_id ? (
                  <Link
                    className="mt-2 inline-block text-xs font-semibold text-blue-600"
                    href={`/dashboard/investigations/${item.normalized_decision_id}`}
                  >
                    Open linked APP decision
                  </Link>
                ) : null}
              </div>
            )) : <p className="text-sm text-slate-500">No lifecycle events recorded.</p>}
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200">
        <CardHeader><CardTitle className="text-base">Linked APP decisions, alerts and cases</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {profile.decisions.length ? profile.decisions.map((item) => (
            <div key={item.decision_id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex flex-wrap gap-2">
                <Badge>{item.decision}</Badge>
                <Badge variant="outline">{item.risk_level}</Badge>
                <span className="font-bold">{Math.round(item.score * 100)}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-blue-600">
                <Link href={`/dashboard/investigations/${item.decision_id}`}>Decision</Link>
                {item.alert_id ? <Link href={`/dashboard/alerts/${item.alert_id}`}>Alert</Link> : null}
                {item.case_id ? <Link href={`/dashboard/cases/${item.case_id}`}>Case</Link> : null}
              </div>
            </div>
          )) : <p className="text-sm text-slate-500">No linked decisions yet.</p>}
        </CardContent>
      </Card>
    </div>
  );
}
