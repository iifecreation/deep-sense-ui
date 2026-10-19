"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Circle, Clock, Loader2, Plus, Trash2, XCircle } from "lucide-react";
import type { ApplicantInquiryView, ApplicantStepView } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApplicantApiError, applicantVerificationService } from "@/services/applicant-verification.service";
import { humanize, type StepType } from "@/services/verification-flows.service";

const SESSION_KEY = "deepsense_verify_session";

// Codes are single-use. Dedupe exchanges per code so a React StrictMode
// double-effect (or a fast remount) cannot burn the code on a second request.
const exchanges = new Map<string, ReturnType<typeof applicantVerificationService.exchangeLink>>();
const exchangeOnce = (code: string) => {
  let pending = exchanges.get(code);
  if (!pending) {
    pending = applicantVerificationService.exchangeLink(code);
    exchanges.set(code, pending);
  }
  return pending;
};

const readSession = (): string | null => {
  try {
    return sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
};
const writeSession = (token: string | null) => {
  try {
    if (token) sessionStorage.setItem(SESSION_KEY, token);
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Storage unavailable (private mode): the session just won't survive a reload.
  }
};

const SELF_SERVICE: readonly string[] = ["consent", "questionnaire", "ubo_declaration"];
const EVIDENCE_STEPS: readonly string[] = ["document", "selfie", "liveness", "proof_of_address"];
const CONTACT_STEPS: readonly string[] = ["phone", "email"];
const OPEN: readonly string[] = ["created", "pending", "resubmission_requested"];

const DEFAULT_CONSENT_TEXT =
  "I consent to the processing of my personal data, including identity documents and biometric data, for the purpose of verifying my identity.";

const DONE_COPY: Record<string, { title: string; body: string }> = {
  completed: { title: "Thank you", body: "Your verification has been submitted and is being reviewed." },
  needs_review: { title: "Thank you", body: "Your verification has been submitted and is being reviewed." },
  approved: { title: "You're verified", body: "Your identity has been verified. You can close this page." },
  declined: { title: "Verification unsuccessful", body: "We were unable to complete your verification." },
  expired: { title: "This verification has expired", body: "Please request a new verification link." },
};

type Phase =
  | { kind: "loading" }
  | { kind: "enter-code"; error?: string }
  | { kind: "ready"; session: string; inquiry: ApplicantInquiryView };

function StepIcon({ status }: { status: string }) {
  if (status === "passed") return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
  if (status === "failed") return <XCircle className="w-5 h-5 text-rose-600" />;
  if (status === "submitted") return <Clock className="w-5 h-5 text-blue-600" />;
  return <Circle className="w-5 h-5 text-slate-300" />;
}

function stepStatusLabel(step: ApplicantStepView) {
  if (step.status === "passed") return "Completed";
  if (step.status === "failed") return "Needs attention";
  if (step.status === "submitted") return "Submitted — being checked";
  if (step.status === "skipped") return "Skipped";
  return step.required ? "To do" : "Optional";
}

// --- Step forms ----------------------------------------------------------------

type Submit = (body: { data?: Record<string, unknown>; evidence_ref?: string | null }) => Promise<void>;

function ConsentForm({ consentText, onSubmit, busy }: { consentText: string; onSubmit: Submit; busy: boolean }) {
  const [accepted, setAccepted] = useState(false);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ data: { accepted: true, consent_text: consentText, accepted_at: new Date().toISOString() } });
      }}
    >
      <p className="text-sm text-slate-600 rounded-xl bg-slate-50 border p-3" data-testid="consent-text">{consentText}</p>
      <label className="flex items-start gap-2 text-sm">
        <Checkbox checked={accepted} onCheckedChange={(checked) => setAccepted(checked === true)} aria-label="I agree" />
        I have read and agree to the statement above.
      </label>
      <Button type="submit" disabled={!accepted || busy}>Give consent</Button>
    </form>
  );
}

const DEFAULT_QUESTIONS = [
  { key: "occupation", label: "Occupation" },
  { key: "source_of_funds", label: "Source of funds" },
  { key: "purpose_of_account", label: "Purpose of the account" },
];

const questionLabel = (key: string) => DEFAULT_QUESTIONS.find((question) => question.key === key)?.label ?? humanize(key);

function QuestionnaireForm({ requiredFields, onSubmit, busy }: { requiredFields: string[]; onSubmit: Submit; busy: boolean }) {
  const questions = requiredFields.length
    ? requiredFields.map((key) => ({ key, label: questionLabel(key), required: true }))
    : DEFAULT_QUESTIONS.map((question) => ({ ...question, required: false }));
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [extra, setExtra] = useState<{ key: string; value: string }[]>([]);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const all: Record<string, string> = {};
        for (const [key, value] of Object.entries(answers)) if (value.trim()) all[key] = value.trim();
        for (const { key, value } of extra) if (key.trim() && value.trim()) all[key.trim()] = value.trim();
        onSubmit({ data: { answers: all } });
      }}
    >
      {questions.map((question) => (
        <div key={question.key} className="space-y-1.5">
          <Label htmlFor={`q-${question.key}`}>{question.label}</Label>
          <Input id={`q-${question.key}`} required={question.required} value={answers[question.key] ?? ""} onChange={(e) => setAnswers({ ...answers, [question.key]: e.target.value })} />
        </div>
      ))}
      {extra.map((row, index) => (
        <div key={index} className="flex gap-2">
          <Input placeholder="Question" aria-label="Question" value={row.key} onChange={(e) => setExtra(extra.map((r, i) => (i === index ? { ...r, key: e.target.value } : r)))} />
          <Input placeholder="Answer" aria-label="Answer" value={row.value} onChange={(e) => setExtra(extra.map((r, i) => (i === index ? { ...r, value: e.target.value } : r)))} />
          <Button type="button" size="icon" variant="ghost" aria-label="Remove answer" onClick={() => setExtra(extra.filter((_, i) => i !== index))}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={() => setExtra([...extra, { key: "", value: "" }])}>
          <Plus className="w-4 h-4 mr-1" /> Add answer
        </Button>
        <Button type="submit" disabled={busy}>Submit answers</Button>
      </div>
    </form>
  );
}

function UboForm({ thresholdPct, onSubmit, busy }: { thresholdPct: number; onSubmit: Submit; busy: boolean }) {
  const [owners, setOwners] = useState([{ full_name: "", ownership_pct: "" }]);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          data: {
            owners: owners
              .filter((owner) => owner.full_name.trim())
              .map((owner) => ({ full_name: owner.full_name.trim(), ownership_pct: Number(owner.ownership_pct) })),
          },
        });
      }}
    >
      <p className="text-sm text-slate-600">Declare every person who owns or controls {thresholdPct}% or more of the business.</p>
      {owners.map((owner, index) => (
        <div key={index} className="flex gap-2">
          <Input placeholder="Full name" aria-label="Owner full name" value={owner.full_name} onChange={(e) => setOwners(owners.map((o, i) => (i === index ? { ...o, full_name: e.target.value } : o)))} />
          <Input className="w-28" type="number" min={0.01} max={100} step="0.01" placeholder="%" aria-label="Ownership percent" value={owner.ownership_pct} onChange={(e) => setOwners(owners.map((o, i) => (i === index ? { ...o, ownership_pct: e.target.value } : o)))} />
          <Button type="button" size="icon" variant="ghost" aria-label="Remove owner" disabled={owners.length === 1} onClick={() => setOwners(owners.filter((_, i) => i !== index))}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
      <div className="flex gap-2">
        <Button type="button" variant="outline" onClick={() => setOwners([...owners, { full_name: "", ownership_pct: "" }])}>
          <Plus className="w-4 h-4 mr-1" /> Add owner
        </Button>
        <Button type="submit" disabled={busy}>Submit declaration</Button>
      </div>
    </form>
  );
}

function EvidenceForm({ stepType, onSubmit, busy }: { stepType: string; onSubmit: Submit; busy: boolean }) {
  const [ref, setRef] = useState("");
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ evidence_ref: ref.trim() });
      }}
    >
      <p className="text-sm text-slate-600">
        Capture your {humanize(stepType).toLowerCase()} with the DeepSense capture SDK, then enter the reference it returns.
      </p>
      <div className="space-y-1.5">
        <Label htmlFor={`evidence-${stepType}`}>{humanize(stepType)} reference</Label>
        <Input id={`evidence-${stepType}`} required maxLength={255} value={ref} onChange={(e) => setRef(e.target.value)} />
      </div>
      <Button type="submit" disabled={busy || !ref.trim()}>Submit</Button>
    </form>
  );
}

function ContactForm({ stepType, onSubmit, busy }: { stepType: "phone" | "email"; onSubmit: Submit; busy: boolean }) {
  const [value, setValue] = useState("");
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ data: { [stepType]: value.trim() } });
      }}
    >
      <div className="space-y-1.5">
        <Label htmlFor={`contact-${stepType}`}>{stepType === "email" ? "Email address" : "Phone number"}</Label>
        <Input id={`contact-${stepType}`} type={stepType === "email" ? "email" : "tel"} required value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <Button type="submit" disabled={busy || !value.trim()}>Submit</Button>
    </form>
  );
}

function StepForm({ step, onSubmit, busy }: { step: ApplicantStepView; onSubmit: Submit; busy: boolean }) {
  const config = step.config;
  if (step.step_type === "consent") {
    return <ConsentForm consentText={config?.consent_text?.trim() || DEFAULT_CONSENT_TEXT} onSubmit={onSubmit} busy={busy} />;
  }
  if (step.step_type === "questionnaire") {
    return <QuestionnaireForm requiredFields={config?.required_fields ?? []} onSubmit={onSubmit} busy={busy} />;
  }
  if (step.step_type === "ubo_declaration") {
    return <UboForm thresholdPct={config?.ownership_threshold_pct ?? 25} onSubmit={onSubmit} busy={busy} />;
  }
  if (EVIDENCE_STEPS.includes(step.step_type)) return <EvidenceForm stepType={step.step_type} onSubmit={onSubmit} busy={busy} />;
  if (CONTACT_STEPS.includes(step.step_type)) {
    return <ContactForm stepType={step.step_type as "phone" | "email"} onSubmit={onSubmit} busy={busy} />;
  }
  return <p className="text-sm text-slate-500">This check runs automatically — nothing to do here.</p>;
}

const isActionable = (step: ApplicantStepView) =>
  step.status !== "passed" &&
  step.status !== "skipped" &&
  (SELF_SERVICE.includes(step.step_type) || EVIDENCE_STEPS.includes(step.step_type) || CONTACT_STEPS.includes(step.step_type));

// --- Page ----------------------------------------------------------------------

export function ApplicantVerification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");
  const [phase, setPhase] = useState<Phase>({ kind: "loading" });
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [stepError, setStepError] = useState<string | null>(null);
  const [codeInput, setCodeInput] = useState("");

  useEffect(() => {
    let cancelled = false;
    const start = async () => {
      try {
        if (code) {
          const result = await exchangeOnce(code);
          writeSession(result.session_token);
          if (!cancelled) setPhase({ kind: "ready", session: result.session_token, inquiry: result.inquiry });
          // Drop the spent code from the address bar and history.
          router.replace("/verify");
          return;
        }
        const session = readSession();
        if (!session) {
          if (!cancelled) setPhase({ kind: "enter-code" });
          return;
        }
        const inquiry = await applicantVerificationService.getSession(session);
        if (!cancelled) setPhase({ kind: "ready", session, inquiry });
      } catch (error) {
        if (!code) writeSession(null);
        if (!cancelled) {
          setPhase({
            kind: "enter-code",
            error:
              error instanceof ApplicantApiError && error.statusCode === 401
                ? code
                  ? "This verification link is invalid, already used or expired. Please request a new one."
                  : "Your session has expired. Open your verification link again."
                : "We could not load your verification. Please try again.",
          });
        }
      }
    };
    start();
    return () => {
      cancelled = true;
    };
  }, [code, router]);

  if (phase.kind === "loading") {
    return (
      <Card className="rounded-3xl">
        <CardContent className="p-10 flex items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-5 h-5 animate-spin" /> Loading your verification…
        </CardContent>
      </Card>
    );
  }

  if (phase.kind === "enter-code") {
    return (
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle>Verify your identity</CardTitle>
          <CardDescription>Open the link you received, or paste the verification code below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {phase.error && (
            <p className="flex items-start gap-2 text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl p-3" role="alert">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" /> {phase.error}
            </p>
          )}
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (codeInput.trim()) router.replace(`/verify?code=${encodeURIComponent(codeInput.trim())}`);
            }}
          >
            <Input value={codeInput} onChange={(e) => setCodeInput(e.target.value)} placeholder="otl_…" aria-label="Verification code" />
            <Button type="submit">Continue</Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  const { inquiry, session } = phase;
  const open = OPEN.includes(inquiry.status);
  const done = DONE_COPY[inquiry.status];
  const required = inquiry.steps.filter((step) => step.required);
  const passed = required.filter((step) => step.status === "passed").length;
  const current = activeStep ?? inquiry.steps.find(isActionable)?.step_type ?? null;

  const submit = (stepType: string): Submit => async (body) => {
    setBusy(true);
    setStepError(null);
    try {
      const next = await applicantVerificationService.submitStep(session, stepType as StepType, body);
      setPhase({ kind: "ready", session, inquiry: next });
      setActiveStep(null);
    } catch (error) {
      if (error instanceof ApplicantApiError && error.statusCode === 401) {
        writeSession(null);
        setPhase({ kind: "enter-code", error: "Your session has expired. Open your verification link again." });
        return;
      }
      setStepError(error instanceof Error ? error.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle data-testid="applicant-level-name">{inquiry.level_display_name}</CardTitle>
          <CardDescription>
            {passed} of {required.length} required steps complete · expires {new Date(inquiry.expires_at).toLocaleString()}
          </CardDescription>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden mt-2" aria-hidden>
            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${required.length ? (passed / required.length) * 100 : 0}%` }} />
          </div>
        </CardHeader>
        {open && (inquiry.applicant_message || inquiry.status === "resubmission_requested") && (
          <CardContent>
            <p className="text-sm bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-3" role="status" data-testid="applicant-message">
              {inquiry.applicant_message ?? "Some steps need to be redone. Please review the items marked below."}
            </p>
          </CardContent>
        )}
      </Card>

      {done && !open && (
        <Card className="rounded-3xl" data-testid="applicant-done">
          <CardContent className="p-8 text-center space-y-2">
            <h2 className="text-xl font-bold">{done.title}</h2>
            <p className="text-sm text-slate-600">{done.body}</p>
          </CardContent>
        </Card>
      )}

      <ol className="space-y-3" aria-label="Verification steps">
        {inquiry.steps.map((step) => {
          const actionable = open && isActionable(step);
          const expanded = actionable && current === step.step_type;
          return (
            <li key={step.step_type} data-testid={`applicant-step-${step.step_type}`} data-status={step.status}>
              <Card className={`rounded-2xl ${expanded ? "ring-2 ring-blue-200" : ""}`}>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-4 text-left disabled:cursor-default"
                  onClick={() => actionable && setActiveStep(step.step_type)}
                  disabled={!actionable}
                >
                  <StepIcon status={step.status} />
                  <span className="font-semibold flex-1">{humanize(step.step_type)}</span>
                  <span className="text-xs text-slate-500">{stepStatusLabel(step)}</span>
                </button>
                {step.applicant_messages.length > 0 && step.status !== "passed" && (
                  <ul className="px-4 pb-3 -mt-1 space-y-1">
                    {step.applicant_messages.map((message) => (
                      <li key={message} className="text-xs text-rose-700">{message}</li>
                    ))}
                  </ul>
                )}
                {expanded && (
                  <CardContent className="pt-0 space-y-3">
                    <StepForm key={`${step.step_type}-${step.attempt}`} step={step} onSubmit={submit(step.step_type)} busy={busy} />
                    {stepError && <p className="text-sm text-rose-600" role="alert">{stepError}</p>}
                  </CardContent>
                )}
              </Card>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
