"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  FileImage,
  Fingerprint,
  Loader2,
  ScanFace,
  ShieldAlert,
  UploadCloud,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApiError } from "@/lib/api/client";
import {
  documentsService,
  type PortraitDocumentType,
} from "@/services/documents.service";
import type { BiometricCheckRead, IdentityDocumentRead } from "@/types";

type StepStatus = "pending" | "running" | "done" | "error";

interface StepState {
  status: StepStatus;
  error?: string;
}

const PORTRAIT_TYPES: { value: PortraitDocumentType; label: string }[] = [
  { value: "passport", label: "Passport" },
  { value: "national_id", label: "National ID" },
  { value: "drivers_license", label: "Driver's license" },
];

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Document intelligence is not enabled for this organization."
      : "Your role cannot run biometric checks.";
  }
  if (error instanceof ApiError && error.statusCode === 503) {
    return "No biometric provider is configured for this organization yet.";
  }
  if (error instanceof ApiError && error.statusCode === 402) {
    return "This check requires a plan that includes document liveness / deepfake detection.";
  }
  return error instanceof Error ? error.message : "The check could not be run.";
}

function CheckResultCard({ check }: { check: BiometricCheckRead }) {
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
            <span className="text-sm font-bold capitalize text-slate-950">
              {check.check_type.replace("_", " ")}
            </span>
            <Badge variant={passed ? "default" : "destructive"}>{check.status}</Badge>
          </div>
          <p className="text-xs text-slate-500">
            Provider: {check.provider} &middot; Score: {check.score.toFixed(2)} &middot;
            Confidence: {check.confidence.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LivenessFaceMatchCheckPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionStep, setSessionStep] = useState<StepState>({ status: "pending" });

  const [portraitType, setPortraitType] = useState<PortraitDocumentType>("passport");
  const [portraitFile, setPortraitFile] = useState<File | null>(null);
  const [portraitStep, setPortraitStep] = useState<StepState>({ status: "pending" });
  const [portraitDoc, setPortraitDoc] = useState<IdentityDocumentRead | null>(null);

  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [selfieStep, setSelfieStep] = useState<StepState>({ status: "pending" });

  const [checks, setChecks] = useState<BiometricCheckRead[]>([]);
  const [checksStep, setChecksStep] = useState<StepState>({ status: "pending" });

  const canUploadPortrait = Boolean(sessionId) && sessionStep.status === "done";
  const canUploadSelfie = Boolean(sessionId) && sessionStep.status === "done";
  const canRunChecks =
    Boolean(sessionId) &&
    portraitStep.status === "done" &&
    selfieStep.status === "done";

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

  const uploadPortrait = async () => {
    if (!sessionId || !portraitFile) return;
    setPortraitStep({ status: "running" });
    try {
      const doc = await documentsService.uploadSessionDocument(sessionId, portraitFile, portraitType);
      setPortraitDoc(doc);
      setPortraitStep({ status: "done" });
    } catch (cause) {
      setPortraitStep({ status: "error", error: describeError(cause) });
    }
  };

  const uploadSelfie = async () => {
    if (!sessionId || !selfieFile) return;
    setSelfieStep({ status: "running" });
    try {
      await documentsService.uploadSessionSelfie(sessionId, selfieFile);
      setSelfieStep({ status: "done" });
    } catch (cause) {
      setSelfieStep({ status: "error", error: describeError(cause) });
    }
  };

  const runChecks = async () => {
    if (!sessionId) return;
    setChecksStep({ status: "running" });
    try {
      // No document_id/selfie_document_id needed - the backend resolves the
      // most recently uploaded portrait and selfie for this session.
      const faceMatch = await documentsService.runSessionFaceMatch(sessionId, {});
      const liveness = await documentsService.runSessionLiveness(sessionId, {});
      const history = await documentsService.listSessionBiometrics(sessionId);
      setChecks([faceMatch, liveness, ...history.filter(
        (h) => h.id !== faceMatch.id && h.id !== liveness.id,
      )]);
      setChecksStep({ status: "done" });
    } catch (cause) {
      setChecksStep({ status: "error", error: describeError(cause) });
    }
  };

  const reset = () => {
    setSessionId(null);
    setSessionStep({ status: "pending" });
    setPortraitFile(null);
    setPortraitDoc(null);
    setPortraitStep({ status: "pending" });
    setSelfieFile(null);
    setSelfieStep({ status: "pending" });
    setChecks([]);
    setChecksStep({ status: "pending" });
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
          <ScanFace className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">
            Liveness &amp; face match check
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Upload an identity document and a selfie to run a face-match comparison and a
            liveness check against your organization&apos;s configured biometric provider.
            This creates a real identity verification session and biometric checks.
          </p>
        </div>
      </div>

      {/* Step 1: session */}
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

      {/* Step 2: portrait + selfie upload */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                2
              </span>
              Identity document
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Document type
              </Label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={portraitType}
                onChange={(e) => setPortraitType(e.target.value as PortraitDocumentType)}
                disabled={!canUploadPortrait || portraitStep.status === "done"}
              >
                {PORTRAIT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Document photo
              </Label>
              <Input
                type="file"
                accept="image/*"
                className="mt-1"
                disabled={!canUploadPortrait || portraitStep.status === "done"}
                onChange={(e) => setPortraitFile(e.target.files?.[0] ?? null)}
              />
            </div>
            {portraitDoc ? (
              <p className="flex items-center gap-2 text-sm text-emerald-700">
                <FileImage className="h-4 w-4" /> Uploaded: {portraitDoc.file_name}
              </p>
            ) : (
              <Button
                variant="outline"
                onClick={() => void uploadPortrait()}
                disabled={!canUploadPortrait || !portraitFile || portraitStep.status === "running"}
              >
                {portraitStep.status === "running" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <UploadCloud className="mr-2 h-4 w-4" />
                )}
                Upload document
              </Button>
            )}
            {portraitStep.status === "error" ? (
              <p className="text-xs text-red-700">{portraitStep.error}</p>
            ) : null}
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                3
              </span>
              Selfie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Selfie photo
              </Label>
              <Input
                type="file"
                accept="image/*"
                className="mt-1"
                disabled={!canUploadSelfie || selfieStep.status === "done"}
                onChange={(e) => setSelfieFile(e.target.files?.[0] ?? null)}
              />
            </div>
            {selfieStep.status === "done" ? (
              <p className="flex items-center gap-2 text-sm text-emerald-700">
                <Camera className="h-4 w-4" /> Selfie uploaded
              </p>
            ) : (
              <Button
                variant="outline"
                onClick={() => void uploadSelfie()}
                disabled={!canUploadSelfie || !selfieFile || selfieStep.status === "running"}
              >
                {selfieStep.status === "running" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <UploadCloud className="mr-2 h-4 w-4" />
                )}
                Upload selfie
              </Button>
            )}
            {selfieStep.status === "error" ? (
              <p className="text-xs text-red-700">{selfieStep.error}</p>
            ) : null}
          </CardContent>
        </Card>
      </div>

      {/* Step 3: run checks */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
              4
            </span>
            Run face match &amp; liveness
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => void runChecks()} disabled={!canRunChecks || checksStep.status === "running"}>
            {checksStep.status === "running" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ScanFace className="mr-2 h-4 w-4" />
            )}
            Run checks
          </Button>
          {checksStep.status === "error" ? (
            <p className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" /> {checksStep.error}
            </p>
          ) : null}
          {checks.length > 0 ? (
            <div className="space-y-3">
              {checks.map((check) => (
                <CheckResultCard key={check.id} check={check} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Upload a document and a selfie above, then run the checks to see results here.
            </p>
          )}
        </CardContent>
      </Card>

      {sessionId ? (
        <Button variant="ghost" className="self-start text-slate-500" onClick={reset}>
          Start a new session
        </Button>
      ) : null}
    </div>
  );
}
