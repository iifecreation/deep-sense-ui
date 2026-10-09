"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Fingerprint,
  Loader2,
  ShieldAlert,
  UserCheck,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApiError } from "@/lib/api/client";
import { documentsService } from "@/services/documents.service";
import type { KYBCheckRead, KYCCheckRead } from "@/types";

type StepStatus = "pending" | "running" | "done" | "error";

interface StepState {
  status: StepStatus;
  error?: string;
}

// Country display names for the countries a provider is actually registered
// for (see app/services/documents/kyc_kyb_providers.py). The backend is the
// source of truth for *which* countries are supported - this is display only.
const COUNTRY_NAMES: Record<string, string> = {
  NG: "Nigeria",
};

const NIGERIA_ID_TYPES = [
  { value: "nin", label: "NIN (National Identification Number)" },
  { value: "bvn", label: "BVN (Bank Verification Number)" },
];

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Document intelligence is not enabled for this organization."
      : "Your role cannot run KYC/KYB checks.";
  }
  if (error instanceof ApiError && error.statusCode === 503) {
    return "No KYC/KYB provider is configured for this country yet.";
  }
  if (error instanceof ApiError && error.statusCode === 402) {
    return "This check requires a plan that includes document KYC/KYB.";
  }
  return error instanceof Error ? error.message : "The check could not be run.";
}

function CheckResultCard({
  label,
  check,
}: {
  label: string;
  check: KYCCheckRead | KYBCheckRead;
}) {
  const passed = check.status === "success";
  return (
    <Card className={passed ? "border-emerald-200" : "border-red-200"}>
      <CardContent className="flex items-start gap-3 p-4">
        {passed ? (
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        ) : (
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
        )}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-950">{label}</span>
            <Badge variant={passed ? "default" : "destructive"}>{check.status}</Badge>
          </div>
          <p className="text-xs text-slate-500">
            Country: {check.country_code} &middot; Provider: {check.provider} &middot; Score:{" "}
            {check.score.toFixed(2)} &middot; Confidence: {check.confidence.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function KycKybCheckPage() {
  const [kycCountries, setKycCountries] = useState<string[] | null>(null);
  const [kybCountries, setKybCountries] = useState<string[] | null>(null);
  const [countriesError, setCountriesError] = useState<string | null>(null);

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionStep, setSessionStep] = useState<StepState>({ status: "pending" });

  const [kycCountry, setKycCountry] = useState("NG");
  const [idType, setIdType] = useState("nin");
  const [idNumber, setIdNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [kycStep, setKycStep] = useState<StepState>({ status: "pending" });
  const [kycCheck, setKycCheck] = useState<KYCCheckRead | null>(null);

  const [kybCountry, setKybCountry] = useState("NG");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [kybStep, setKybStep] = useState<StepState>({ status: "pending" });
  const [kybCheck, setKybCheck] = useState<KYBCheckRead | null>(null);

  useEffect(() => {
    Promise.all([
      documentsService.listKycSupportedCountries(),
      documentsService.listKybSupportedCountries(),
    ])
      .then(([kyc, kyb]) => {
        setKycCountries(kyc);
        setKybCountries(kyb);
        if (kyc.length > 0) setKycCountry(kyc[0]);
        if (kyb.length > 0) setKybCountry(kyb[0]);
      })
      .catch((cause) => setCountriesError(describeError(cause)));
  }, []);

  const kycSupported = kycCountries !== null && kycCountries.includes(kycCountry);
  const kybSupported = kybCountries !== null && kybCountries.includes(kybCountry);
  const canRun = Boolean(sessionId) && sessionStep.status === "done";

  const idTypeOptions = useMemo(() => (kycCountry === "NG" ? NIGERIA_ID_TYPES : []), [kycCountry]);

  const createSession = async () => {
    setSessionStep({ status: "running" });
    try {
      const session = await documentsService.createSession({});
      setSessionId(session.id);
      setSessionStep({ status: "done" });
    } catch (cause) {
      setSessionStep({ status: "error", error: describeError(cause) });
    }
  };

  const runKyc = async () => {
    if (!sessionId || !idNumber) return;
    setKycStep({ status: "running" });
    try {
      const check = await documentsService.runSessionKyc(sessionId, {
        country_code: kycCountry,
        id_type: idType,
        id_number: idNumber,
        full_name: fullName || undefined,
      });
      setKycCheck(check);
      setKycStep({ status: "done" });
    } catch (cause) {
      setKycStep({ status: "error", error: describeError(cause) });
    }
  };

  const runKyb = async () => {
    if (!sessionId || !registrationNumber) return;
    setKybStep({ status: "running" });
    try {
      const check = await documentsService.runSessionKyb(sessionId, {
        country_code: kybCountry,
        registration_number: registrationNumber,
        business_name: businessName || undefined,
      });
      setKybCheck(check);
      setKybStep({ status: "done" });
    } catch (cause) {
      setKybStep({ status: "error", error: describeError(cause) });
    }
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 pb-16">
      <div>
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Dashboard
          </Link>
        </Button>
      </div>

      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-indigo-50 p-3">
          <Fingerprint className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">KYC &amp; KYB check</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Verify an individual (KYC) against a country&apos;s ID registry, or a business (KYB)
            against its company registry. Verification is dispatched per country - Nigeria (NIN,
            BVN, and CAC business registration) is supported today, with more countries added over
            time without changing this page.
          </p>
        </div>
      </div>

      {countriesError ? (
        <p className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" /> {countriesError}
        </p>
      ) : null}

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
              1
            </span>
            Start a verification session
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {sessionId ? (
            <p className="flex items-center gap-2 text-sm text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> Session created:{" "}
              <span className="font-mono text-xs">{sessionId}</span>
            </p>
          ) : (
            <Button onClick={() => void createSession()} disabled={sessionStep.status === "running"}>
              {sessionStep.status === "running" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Fingerprint className="mr-2 h-4 w-4" />
              )}
              Create session
            </Button>
          )}
          {sessionStep.status === "error" ? (
            <p className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" /> {sessionStep.error}
            </p>
          ) : null}
        </CardContent>
      </Card>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* KYC - individual */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <UserCheck className="h-4 w-4 text-indigo-600" /> KYC - individual
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Country</Label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={kycCountry}
                onChange={(e) => setKycCountry(e.target.value)}
                disabled={!canRun}
              >
                {(kycCountries ?? [kycCountry]).map((code) => (
                  <option key={code} value={code}>
                    {COUNTRY_NAMES[code] ?? code} ({code})
                  </option>
                ))}
              </select>
              {kycCountries !== null && !kycSupported ? (
                <p className="mt-2 text-xs text-amber-700">
                  No KYC provider is registered for this country yet.
                </p>
              ) : null}
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">ID type</Label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                disabled={!canRun || idTypeOptions.length === 0}
              >
                {idTypeOptions.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">ID number</Label>
              <Input
                className="mt-1"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="e.g. 12345678901"
                disabled={!canRun}
              />
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Full name (optional)
              </Label>
              <Input
                className="mt-1"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={!canRun}
              />
            </div>
            <Button
              onClick={() => void runKyc()}
              disabled={!canRun || !idNumber || kycStep.status === "running"}
            >
              {kycStep.status === "running" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <UserCheck className="mr-2 h-4 w-4" />
              )}
              Run KYC check
            </Button>
            {kycStep.status === "error" ? (
              <p className="text-xs text-red-700">{kycStep.error}</p>
            ) : null}
            {kycCheck ? <CheckResultCard label="KYC" check={kycCheck} /> : null}
          </CardContent>
        </Card>

        {/* KYB - business */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Building2 className="h-4 w-4 text-indigo-600" /> KYB - business
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Country</Label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={kybCountry}
                onChange={(e) => setKybCountry(e.target.value)}
                disabled={!canRun}
              >
                {(kybCountries ?? [kybCountry]).map((code) => (
                  <option key={code} value={code}>
                    {COUNTRY_NAMES[code] ?? code} ({code})
                  </option>
                ))}
              </select>
              {kybCountries !== null && !kybSupported ? (
                <p className="mt-2 text-xs text-amber-700">
                  No KYB provider is registered for this country yet.
                </p>
              ) : null}
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Registration number
              </Label>
              <Input
                className="mt-1"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                placeholder={kybCountry === "NG" ? "e.g. RC1234567" : "Registration number"}
                disabled={!canRun}
              />
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Business name (optional)
              </Label>
              <Input
                className="mt-1"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                disabled={!canRun}
              />
            </div>
            <Button
              onClick={() => void runKyb()}
              disabled={!canRun || !registrationNumber || kybStep.status === "running"}
            >
              {kybStep.status === "running" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Building2 className="mr-2 h-4 w-4" />
              )}
              Run KYB check
            </Button>
            {kybStep.status === "error" ? (
              <p className="text-xs text-red-700">{kybStep.error}</p>
            ) : null}
            {kybCheck ? <CheckResultCard label="KYB" check={kybCheck} /> : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
