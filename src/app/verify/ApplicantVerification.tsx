"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Circle, Clock, Loader2, Plus, Trash2, XCircle } from "lucide-react";
import type { ApplicantInquiryView, ApplicantStepView, ApplicantVideoSessionView } from "@/lib/api-client/api";
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
// Last status seen, so a reload after the session ends (DeepSense revokes it once the
// inquiry is decided) shows the outcome instead of "session expired". No PII is stored.
const OUTCOME_KEY = "deepsense_verify_outcome";
type Outcome = { status: string; level_display_name: string };
const readOutcome = (): Outcome | null => {
  try {
    const raw = sessionStorage.getItem(OUTCOME_KEY);
    return raw ? (JSON.parse(raw) as Outcome) : null;
  } catch {
    return null;
  }
};
const writeOutcome = (outcome: Outcome | null) => {
  try {
    if (outcome) sessionStorage.setItem(OUTCOME_KEY, JSON.stringify(outcome));
    else sessionStorage.removeItem(OUTCOME_KEY);
  } catch {
    // Storage unavailable: a reload simply asks for the link again.
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
  | { kind: "finished"; outcome: Outcome }
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

const CAPTURE_COPY: Record<string, { prompt: string; facing: "user" | "environment"; pdf: boolean }> = {
  document: { prompt: "Take a clear photo of your ID document: all four corners visible, no glare.", facing: "environment", pdf: true },
  selfie: { prompt: "Take a selfie in good light, facing the camera, without a hat or sunglasses.", facing: "user", pdf: false },
  liveness: { prompt: "Take a live selfie now (not a photo of a photo).", facing: "user", pdf: false },
  proof_of_address: {
    prompt: "Upload a recent utility bill, bank statement or tax letter showing your name and address.",
    facing: "environment",
    pdf: true,
  },
};
const MAX_EDGE = 2400;

/**
 * Re-encode photos as JPEG at most MAX_EDGE px: keeps uploads well under the 20 MB limit and
 * turns formats the server doesn't accept (e.g. iPhone HEIC) into JPEG. PDFs pass through.
 */
async function prepareUpload(file: File): Promise<{ blob: Blob; name: string }> {
  if (file.type === "application/pdf" || !file.type.startsWith("image/")) return { blob: file, name: file.name };
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.9));
    if (blob) return { blob, name: file.name.replace(/\.[^.]+$/, "") + ".jpg" };
  } catch {
    // The browser can't decode it; send the original and let the server validate it.
  }
  return { blob: file, name: file.name };
}

/** Camera / file capture for document, selfie, liveness and proof-of-address steps. */
function CaptureForm({
  session,
  stepType,
  onUploaded,
}: {
  session: string;
  stepType: StepType;
  onUploaded: (inquiry: ApplicantInquiryView) => void;
}) {
  const copy = CAPTURE_COPY[stepType] ?? CAPTURE_COPY.document;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview);
  }, [preview]);

  const choose = (next: File | null) => {
    setError(null);
    setFile(next);
    setPreview(next && next.type.startsWith("image/") ? URL.createObjectURL(next) : null);
  };

  const upload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const { blob, name } = await prepareUpload(file);
      onUploaded(await applicantVerificationService.uploadEvidence(session, stepType, blob, name));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Upload failed. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="space-y-3" onSubmit={upload} data-testid={`capture-${stepType}`}>
      <p className="text-sm text-slate-600">{copy.prompt}</p>
      <div className="space-y-1.5">
        <Label htmlFor={`capture-input-${stepType}`}>{copy.facing === "user" ? "Take or choose a photo" : "Take a photo or choose a file"}</Label>
        <Input
          id={`capture-input-${stepType}`}
          type="file"
          accept={copy.pdf ? "image/*,application/pdf" : "image/*"}
          capture={copy.facing}
          onChange={(e) => choose(e.target.files?.[0] ?? null)}
        />
      </div>
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element -- local object URL preview, not an optimizable asset
        <img src={preview} alt="Preview of your photo" className="max-h-64 rounded-xl border" data-testid={`capture-preview-${stepType}`} />
      )}
      {file && !preview && <p className="text-sm text-slate-600">{file.name}</p>}
      <Button type="submit" disabled={busy || !file}>
        {busy ? "Uploading…" : "Upload"}
      </Button>
      {error && (
        <p className="text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
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
  if (CONTACT_STEPS.includes(step.step_type)) {
    return <ContactForm stepType={step.step_type as "phone" | "email"} onSubmit={onSubmit} busy={busy} />;
  }
  return <p className="text-sm text-slate-500">This check runs automatically — nothing to do here.</p>;
}

const isActionable = (step: ApplicantStepView) =>
  step.status !== "passed" &&
  step.status !== "skipped" &&
  (SELF_SERVICE.includes(step.step_type) ||
    EVIDENCE_STEPS.includes(step.step_type) ||
    CONTACT_STEPS.includes(step.step_type) ||
    step.step_type === "video_ident");

const toLocalInput = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

/** Book, cancel and join a live video identification call with an agent. */
function VideoStep({ session, onChanged }: { session: string; onChanged: () => void | Promise<void> }) {
  const [video, setVideo] = useState<ApplicantVideoSessionView | null | undefined>(undefined);
  const [slot, setSlot] = useState(() => toLocalInput(new Date(Date.now() + 30 * 60_000)));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setVideo(await applicantVerificationService.getVideo(session));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not load your call");
    }
  }, [session]);

  useEffect(() => {
    load();
    // Pick up the agent starting the call without a manual refresh.
    const timer = setInterval(load, 15_000);
    return () => clearInterval(timer);
  }, [load]);

  const book = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      setVideo(await applicantVerificationService.bookVideo(session, new Date(slot).toISOString()));
      await onChanged();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not book the call");
    } finally {
      setBusy(false);
    }
  };

  const cancel = async () => {
    setBusy(true);
    setError(null);
    try {
      await applicantVerificationService.cancelVideo(session);
      setVideo(null);
      await onChanged();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not cancel the call");
    } finally {
      setBusy(false);
    }
  };

  if (video === undefined) return <p className="text-sm text-slate-500">Loading…</p>;
  return (
    <div className="space-y-3" data-testid="applicant-video">
      {video?.status === "in_progress" && video.join_url && (
        <div className="space-y-2">
          <p className="text-sm">Your agent is ready. Have your ID document with you.</p>
          <Button asChild>
            <a href={video.join_url} target="_blank" rel="noopener noreferrer" data-testid="applicant-video-join">
              Join video call
            </a>
          </Button>
        </div>
      )}
      {video?.status === "scheduled" && (
        <div className="space-y-2">
          <p className="text-sm" data-testid="applicant-video-booked">
            Your call is booked for {new Date(video.scheduled_at).toLocaleString()}. Come back to this page at that time.
          </p>
          <Button variant="outline" onClick={cancel} disabled={busy}>
            Cancel and pick another time
          </Button>
        </div>
      )}
      {!video && (
        <form onSubmit={book} className="space-y-2">
          <p className="text-sm text-slate-600">
            An agent will verify your identity on a short video call. Pick a time and have your ID document ready.
          </p>
          <div className="flex gap-2">
            <Input
              type="datetime-local"
              aria-label="Call time"
              value={slot}
              min={toLocalInput(new Date(Date.now() + 10 * 60_000))}
              onChange={(e) => setSlot(e.target.value)}
              required
            />
            <Button type="submit" disabled={busy}>
              Book call
            </Button>
          </div>
        </form>
      )}
      {error && (
        <p className="text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

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
    if (phase.kind !== "ready") return;
    const { status, level_display_name } = phase.inquiry;
    writeOutcome(OPEN.includes(status) ? null : { status, level_display_name });
  }, [phase]);

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
        const outcome = readOutcome();
        if (!code && outcome && DONE_COPY[outcome.status] && error instanceof ApplicantApiError && error.statusCode === 401) {
          if (!cancelled) setPhase({ kind: "finished", outcome });
          return;
        }
        if (code) writeOutcome(null);
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

  if (phase.kind === "finished") {
    const copy = DONE_COPY[phase.outcome.status];
    return (
      <Card className="rounded-3xl" data-testid="applicant-finished">
        <CardHeader>
          <CardTitle>{phase.outcome.level_display_name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-center p-8">
          <h2 className="text-xl font-bold">{copy.title}</h2>
          <p className="text-sm text-slate-600">{copy.body}</p>
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

  const reload = async () => {
    try {
      setPhase({ kind: "ready", session, inquiry: await applicantVerificationService.getSession(session) });
    } catch {
      // The step view is refreshed on the next submission or reload.
    }
  };

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
                    {step.step_type === "video_ident" ? (
                      <VideoStep key={`video-${step.attempt}`} session={session} onChanged={reload} />
                    ) : EVIDENCE_STEPS.includes(step.step_type) ? (
                      <CaptureForm
                        key={`${step.step_type}-${step.attempt}`}
                        session={session}
                        stepType={step.step_type as StepType}
                        onUploaded={(next) => {
                          setPhase({ kind: "ready", session, inquiry: next });
                          setActiveStep(null);
                        }}
                      />
                    ) : (
                      <StepForm key={`${step.step_type}-${step.attempt}`} step={step} onSubmit={submit(step.step_type)} busy={busy} />
                    )}
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
