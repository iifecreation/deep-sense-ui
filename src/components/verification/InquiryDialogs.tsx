"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Copy } from "lucide-react";
import type {
  InquiryRead,
  OneTimeLinkRead,
  RejectLabelRead,
  ShareTokenRead,
  VerificationLevelRead,
} from "@/lib/api-client/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  conflictingInquiryId,
  describeError,
  errorStatus,
  hostedVerifyUrl,
  humanize,
  verificationFlowsService,
  type StepType,
} from "@/services/verification-flows.service";

function CopyField({ label, value, testId }: { label: string; value: string; testId?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input readOnly value={value} className="font-mono text-xs" data-testid={testId} aria-label={label} />
        <Button
          type="button"
          size="icon"
          variant="outline"
          aria-label={`Copy ${label}`}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(value);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            } catch {
              // Clipboard can be unavailable (permissions / insecure context); the value stays selectable.
            }
          }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiry: InquiryRead;
  onDone: () => void | Promise<void>;
}

// --- Review -----------------------------------------------------------------

export function ReviewDialog({
  open,
  onOpenChange,
  inquiry,
  onDone,
  labels,
}: DialogProps & { labels: RejectLabelRead[] }) {
  const [decision, setDecision] = useState<"approve" | "decline" | "needs_review">("approve");
  const [selected, setSelected] = useState<string[]>([]);
  const [rejectType, setRejectType] = useState<"retry" | "final">("retry");
  const [resetOverride, setResetOverride] = useState<string[] | null>(null);
  const [clientComment, setClientComment] = useState("");
  const [internalComment, setInternalComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const byCode = useMemo(() => new Map(labels.map((label) => [label.code, label])), [labels]);
  const hasFinal = selected.some((code) => byCode.get(code)?.reject_type === "final");
  const effectiveType = hasFinal ? "final" : rejectType;
  const inquirySteps = inquiry.steps.map((step) => step.step_type);
  const derivedReset = useMemo(() => {
    const steps: string[] = [];
    for (const code of selected) {
      for (const step of byCode.get(code)?.steps ?? []) {
        if (!steps.includes(step) && inquirySteps.includes(step)) steps.push(step);
      }
    }
    return steps;
  }, [selected, byCode, inquirySteps]);
  const resetSteps = resetOverride ?? derivedReset;

  const grouped = useMemo(() => {
    const groups = new Map<string, RejectLabelRead[]>();
    for (const label of labels) groups.set(label.category, [...(groups.get(label.category) ?? []), label]);
    return [...groups.entries()];
  }, [labels]);

  const toggleLabel = (code: string, checked: boolean) => {
    setResetOverride(null);
    setSelected((prev) => (checked ? [...prev, code] : prev.filter((c) => c !== code)));
  };

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await verificationFlowsService.reviewInquiry(inquiry.id, {
        decision,
        reject_labels: decision === "decline" ? selected : null,
        reject_type: decision === "decline" ? effectiveType : null,
        reset_steps: decision === "decline" && effectiveType === "retry" && resetSteps.length ? (resetSteps as StepType[]) : null,
        client_comment: clientComment.trim() || null,
        internal_comment: internalComment.trim() || null,
      });
      onOpenChange(false);
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Review failed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Review inquiry</DialogTitle>
          <DialogDescription>
            Declines need at least one reject label. Retry resets the affected steps so the applicant can resubmit
            (attempt {inquiry.attempt_count}); final declines are terminal.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <RadioGroup value={decision} onValueChange={(v) => setDecision(v as typeof decision)} className="flex gap-6" aria-label="Decision">
            {(["approve", "decline", "needs_review"] as const).map((value) => (
              <label key={value} className="flex items-center gap-2 text-sm">
                <RadioGroupItem value={value} aria-label={humanize(value)} />
                {humanize(value)}
              </label>
            ))}
          </RadioGroup>

          {decision === "decline" && (
            <>
              <div className="space-y-3">
                <Label>Reject labels</Label>
                {grouped.map(([category, items]) => (
                  <div key={category}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{category}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {items.map((label) => (
                        <label key={label.code} className="flex items-start gap-2 text-xs" title={label.applicant_message}>
                          <Checkbox
                            checked={selected.includes(label.code)}
                            onCheckedChange={(checked) => toggleLabel(label.code, checked === true)}
                            aria-label={label.code}
                          />
                          <span>
                            <span className="font-mono">{label.code}</span>{" "}
                            <Badge variant="outline" className={`text-[8px] ${label.reject_type === "final" ? "text-rose-600 border-rose-300" : "text-amber-700 border-amber-300"}`}>
                              {label.reject_type}
                            </Badge>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Label>Reject type</Label>
                <RadioGroup value={effectiveType} onValueChange={(v) => setRejectType(v as "retry" | "final")} className="flex gap-6" aria-label="Reject type">
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="retry" disabled={hasFinal} aria-label="Retry" /> Retry (applicant can resubmit)
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="final" aria-label="Final" /> Final
                  </label>
                </RadioGroup>
                {hasFinal && <p className="text-xs text-muted-foreground">A final-only label is selected, so this decline cannot be downgraded to retry.</p>}
              </div>

              {effectiveType === "retry" && (
                <div className="space-y-2">
                  <Label>Steps reset for resubmission</Label>
                  <div className="flex flex-wrap gap-3">
                    {inquirySteps.map((step) => (
                      <label key={step} className="flex items-center gap-2 text-xs">
                        <Checkbox
                          checked={resetSteps.includes(step)}
                          onCheckedChange={(checked) =>
                            setResetOverride(checked ? [...resetSteps, step] : resetSteps.filter((s) => s !== step))
                          }
                        />
                        {humanize(step)}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="review-client-comment">Comment to applicant</Label>
            <Textarea id="review-client-comment" rows={2} maxLength={2000} value={clientComment} onChange={(e) => setClientComment(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="review-internal-comment">Internal note (never shown to applicant)</Label>
            <Textarea id="review-internal-comment" rows={2} maxLength={4000} value={internalComment} onChange={(e) => setInternalComment(e.target.value)} />
          </div>
          {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={submit} disabled={submitting || (decision === "decline" && selected.length === 0)}>
            {submitting ? "Submitting…" : `Submit ${humanize(decision).toLowerCase()}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- One-time link ----------------------------------------------------------

export function OneTimeLinkDialog({ open, onOpenChange, inquiry, onDone }: DialogProps) {
  const [ttlMinutes, setTtlMinutes] = useState("");
  const [link, setLink] = useState<OneTimeLinkRead | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const close = (next: boolean) => {
    if (!next) {
      setLink(null);
      setError(null);
    }
    onOpenChange(next);
  };

  const generate = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const minutes = ttlMinutes.trim() ? Number(ttlMinutes) : null;
      setLink(await verificationFlowsService.createOneTimeLink(inquiry.id, { ttl_seconds: minutes ? minutes * 60 : null }));
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Failed to generate link"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>One-time applicant link</DialogTitle>
          <DialogDescription>
            Generating a link revokes any earlier unused code. The code is shown once — DeepSense stores only its hash.
          </DialogDescription>
        </DialogHeader>
        {link ? (
          <div className="space-y-4">
            <CopyField label="Hosted verification URL" value={hostedVerifyUrl(link.code)} testId="one-time-link-url" />
            <CopyField label="Code" value={link.code} testId="one-time-link-code" />
            <p className="text-xs text-muted-foreground">Expires {new Date(link.expires_at).toLocaleString()}.</p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <Label htmlFor="otl-ttl">Valid for (minutes, empty = level default)</Label>
            <Input id="otl-ttl" type="number" min={1} max={10080} value={ttlMinutes} onChange={(e) => setTtlMinutes(e.target.value)} />
          </div>
        )}
        {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        <DialogFooter>
          {link ? (
            <Button onClick={() => close(false)}>Done</Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => close(false)}>Cancel</Button>
              <Button onClick={generate} disabled={submitting}>{submitting ? "Generating…" : "Generate link"}</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Reusable KYC share token -----------------------------------------------

const nowLocal = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
};

export function ShareTokenDialog({ open, onOpenChange, inquiry, onDone }: DialogProps) {
  const passedSteps = inquiry.steps.filter((step) => step.status === "passed").map((step) => step.step_type);
  const [recipient, setRecipient] = useState("");
  const [consentText, setConsentText] = useState("");
  const [capturedAt, setCapturedAt] = useState(nowLocal);
  const [consentIp, setConsentIp] = useState("");
  const [ttlHours, setTtlHours] = useState("");
  const [steps, setSteps] = useState<string[]>(passedSteps);
  const [token, setToken] = useState<ShareTokenRead | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const close = (next: boolean) => {
    if (!next) {
      setToken(null);
      setError(null);
    }
    onOpenChange(next);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const hours = ttlHours.trim() ? Number(ttlHours) : null;
      setToken(
        await verificationFlowsService.createShareToken(inquiry.id, {
          recipient_organization_id: recipient.trim(),
          consent_text: consentText.trim(),
          consent_captured_at: new Date(capturedAt).toISOString(),
          consent_ip_address: consentIp.trim() || null,
          ttl_seconds: hours ? hours * 3600 : null,
          steps: steps.length ? (steps as StepType[]) : null,
        }),
      );
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Failed to create share token"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Share verification (reusable KYC)</DialogTitle>
          <DialogDescription>
            Single-use token scoped to one recipient organization. Requires the applicant&apos;s recorded consent.
          </DialogDescription>
        </DialogHeader>
        {token ? (
          <div className="space-y-4">
            <CopyField label="Share token" value={token.token} testId="share-token" />
            <p className="text-xs text-muted-foreground">
              Shares {token.shared_steps.map(humanize).join(", ")}. Expires {new Date(token.expires_at).toLocaleString()}.
              Token ID <span className="font-mono">{token.share_token_id}</span>.
            </p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={async () => {
                  try {
                    await verificationFlowsService.revokeShareToken(token.share_token_id);
                    close(false);
                    await onDone();
                  } catch (cause) {
                    setError(describeError(cause, "Failed to revoke"));
                  }
                }}
              >
                Revoke token
              </Button>
              <Button onClick={() => close(false)}>Done</Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4" id="share-token-form">
            <div className="space-y-1.5">
              <Label htmlFor="st-recipient">Recipient organization ID</Label>
              <Input id="st-recipient" required value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="UUID" pattern="[0-9a-fA-F-]{36}" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="st-consent">Exact consent wording the applicant accepted</Label>
              <Textarea id="st-consent" required minLength={10} maxLength={4000} rows={3} value={consentText} onChange={(e) => setConsentText(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="st-captured">Consent captured at</Label>
                <Input id="st-captured" type="datetime-local" required value={capturedAt} onChange={(e) => setCapturedAt(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="st-ip">Consent IP address</Label>
                <Input id="st-ip" value={consentIp} onChange={(e) => setConsentIp(e.target.value)} maxLength={64} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="st-ttl">Valid for (hours, empty = default)</Label>
                <Input id="st-ttl" type="number" min={1} max={168} value={ttlHours} onChange={(e) => setTtlHours(e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Steps to share (passed steps only)</Label>
              {passedSteps.length === 0 && <p className="text-xs text-muted-foreground">No passed steps yet.</p>}
              <div className="flex flex-wrap gap-3">
                {passedSteps.map((step) => (
                  <label key={step} className="flex items-center gap-2 text-xs">
                    <Checkbox
                      checked={steps.includes(step)}
                      onCheckedChange={(checked) => setSteps((prev) => (checked ? [...prev, step] : prev.filter((s) => s !== step)))}
                    />
                    {humanize(step)}
                  </label>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => close(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting}>{submitting ? "Creating…" : "Create share token"}</Button>
            </DialogFooter>
          </form>
        )}
        {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
      </DialogContent>
    </Dialog>
  );
}

// --- Server-side step result ------------------------------------------------

export function StepResultDialog({
  open,
  onOpenChange,
  inquiry,
  onDone,
  stepType,
  labels,
}: DialogProps & { stepType: string | null; labels: RejectLabelRead[] }) {
  const [status, setStatus] = useState<"passed" | "failed" | "skipped">("passed");
  const [riskScore, setRiskScore] = useState("");
  const [evidenceRef, setEvidenceRef] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const relevant = labels.filter((label) => stepType && label.steps.includes(stepType));

  const submit = async () => {
    if (!stepType) return;
    setSubmitting(true);
    setError(null);
    try {
      await verificationFlowsService.recordStepResult(inquiry.id, stepType as StepType, {
        status,
        risk_score: riskScore.trim() ? Number(riskScore) : null,
        evidence_ref: evidenceRef.trim() || null,
        reject_labels: status === "failed" && selected.length ? selected : null,
      });
      onOpenChange(false);
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Failed to record result"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record {humanize(stepType)} result</DialogTitle>
          <DialogDescription>Server-side result from a document, biometric, registry or screening check.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Result</Label>
            <Select value={status} onValueChange={(v) => setStatus(v as typeof status)}>
              <SelectTrigger aria-label="Step result"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="passed">Passed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="skipped">Skipped</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="sr-risk">Risk score (0–1)</Label>
              <Input id="sr-risk" type="number" step="0.01" min={0} max={1} value={riskScore} onChange={(e) => setRiskScore(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sr-evidence">Evidence reference</Label>
              <Input id="sr-evidence" maxLength={255} value={evidenceRef} onChange={(e) => setEvidenceRef(e.target.value)} placeholder="document / check ID" />
            </div>
          </div>
          {status === "failed" && relevant.length > 0 && (
            <div className="space-y-1.5">
              <Label>Reject labels</Label>
              <div className="flex flex-wrap gap-3">
                {relevant.map((label) => (
                  <label key={label.code} className="flex items-center gap-2 text-xs">
                    <Checkbox
                      checked={selected.includes(label.code)}
                      onCheckedChange={(checked) => setSelected((prev) => (checked ? [...prev, label.code] : prev.filter((c) => c !== label.code)))}
                    />
                    <span className="font-mono">{label.code}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={submit} disabled={submitting}>{submitting ? "Saving…" : "Record result"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Step-up action -----------------------------------------------------------

export function StartActionDialog({
  open,
  onOpenChange,
  inquiry,
  actionLevels,
  onCreated,
}: Omit<DialogProps, "onDone"> & {
  actionLevels: VerificationLevelRead[];
  onCreated: (action: InquiryRead) => void | Promise<void>;
}) {
  const [levelName, setLevelName] = useState(actionLevels[0]?.name ?? "");
  const [externalId, setExternalId] = useState("");
  const [metadataJson, setMetadataJson] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [existingId, setExistingId] = useState<string | null>(null);
  const router = useRouter();

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setExistingId(null);
    let metadata: Record<string, unknown> | null = null;
    if (metadataJson.trim()) {
      try {
        metadata = JSON.parse(metadataJson) as Record<string, unknown>;
      } catch (cause) {
        setError(`Invalid metadata JSON: ${(cause as Error).message}`);
        return;
      }
      if (typeof metadata !== "object" || metadata === null || Array.isArray(metadata)) {
        setError("Metadata must be a JSON object");
        return;
      }
    }
    setSubmitting(true);
    try {
      const action = await verificationFlowsService.createAction(inquiry.id, {
        level_name: levelName,
        external_action_id: externalId.trim(),
        metadata,
      });
      onOpenChange(false);
      await onCreated(action);
    } catch (cause) {
      setError(describeError(cause, "Failed to start action"));
      if (errorStatus(cause) === 409) setExistingId(conflictingInquiryId(cause) ?? null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start step-up action</DialogTitle>
          <DialogDescription>
            Re-checks this approved applicant before a sensitive operation (withdrawal, payout, limit change). The action
            reuses their data and passed evidence from this inquiry.
          </DialogDescription>
        </DialogHeader>
        {actionLevels.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No active action levels. <Link className="underline" href="/dashboard/verification/levels">Create a level</Link> with
            kind &ldquo;Action&rdquo; first.
          </p>
        ) : (
          <form id="start-action" onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label>Action level</Label>
              <Select value={levelName} onValueChange={setLevelName}>
                <SelectTrigger aria-label="Action level">
                  <SelectValue placeholder="Choose an action level" />
                </SelectTrigger>
                <SelectContent>
                  {actionLevels.map((level) => (
                    <SelectItem key={level.name} value={level.name}>
                      {level.display_name} (v{level.version})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="action-external-id">External action ID</Label>
              <Input
                id="action-external-id"
                required
                maxLength={255}
                value={externalId}
                onChange={(e) => setExternalId(e.target.value)}
                placeholder="withdrawal-1234"
              />
              <p className="text-xs text-muted-foreground">Your ID for the operation. Unique across your organization.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="action-metadata">Metadata (JSON, optional)</Label>
              <Textarea
                id="action-metadata"
                rows={3}
                className="font-mono text-xs"
                value={metadataJson}
                onChange={(e) => setMetadataJson(e.target.value)}
                placeholder='{"amount": 2500, "currency": "EUR"}'
              />
            </div>
            {error && (
              <p className="text-sm text-rose-600" role="alert">
                {error}
                {existingId && (
                  <>
                    {" "}
                    <Link
                      className="underline"
                      href={`/dashboard/verification/inquiries/${existingId}`}
                      onClick={(event) => {
                        // Closing remounts this dialog, which would cancel the Link's own navigation.
                        event.preventDefault();
                        router.push(`/dashboard/verification/inquiries/${existingId}`);
                        onOpenChange(false);
                      }}
                    >
                      Open existing action
                    </Link>
                  </>
                )}
              </p>
            )}
          </form>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" form="start-action" disabled={submitting || !levelName || !externalId.trim()}>
            {submitting ? "Starting…" : "Start action"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Sandbox review simulation -------------------------------------------------

export function SimulateReviewDialog({
  open,
  onOpenChange,
  inquiry,
  onDone,
  labels,
  onForbidden,
}: DialogProps & { labels: RejectLabelRead[]; onForbidden: () => void }) {
  const [decision, setDecision] = useState<"approve" | "decline" | "needs_review">("approve");
  const [selected, setSelected] = useState<string[]>([]);
  const [rejectType, setRejectType] = useState<"retry" | "final">("retry");
  const [clientComment, setClientComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await verificationFlowsService.simulateReview(inquiry.id, {
        decision,
        reject_labels: decision === "decline" && selected.length ? selected : null,
        reject_type: decision === "decline" ? rejectType : null,
        client_comment: clientComment.trim() || null,
      });
      onOpenChange(false);
      await onDone();
    } catch (cause) {
      if (errorStatus(cause) === 403) {
        onOpenChange(false);
        onForbidden();
        return;
      }
      setError(describeError(cause, "Simulation failed"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Simulate review (sandbox)</DialogTitle>
          <DialogDescription>
            Passes every unevaluated step and applies the chosen outcome, emitting the same events and webhooks as a real
            review. Lists, duplicate checks and auto-approve are bypassed. Not available in production.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <RadioGroup value={decision} onValueChange={(v) => setDecision(v as typeof decision)} className="flex gap-6" aria-label="Simulated decision">
            {(["approve", "decline", "needs_review"] as const).map((value) => (
              <label key={value} className="flex items-center gap-2 text-sm">
                <RadioGroupItem value={value} aria-label={humanize(value)} />
                {humanize(value)}
              </label>
            ))}
          </RadioGroup>
          {decision === "decline" && (
            <>
              <div className="space-y-2">
                <Label>Reject labels (empty = FORGERY)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-48 overflow-y-auto">
                  {labels.map((label) => (
                    <label key={label.code} className="flex items-center gap-2 text-xs">
                      <Checkbox
                        checked={selected.includes(label.code)}
                        onCheckedChange={(checked) =>
                          setSelected((prev) => (checked ? [...prev, label.code] : prev.filter((c) => c !== label.code)))
                        }
                        aria-label={label.code}
                      />
                      <span className="font-mono">{label.code}</span>
                    </label>
                  ))}
                </div>
              </div>
              <RadioGroup value={rejectType} onValueChange={(v) => setRejectType(v as "retry" | "final")} className="flex gap-6" aria-label="Simulated reject type">
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="retry" aria-label="Retry" /> Retry
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="final" aria-label="Final" /> Final
                </label>
              </RadioGroup>
            </>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="simulate-client-comment">Comment to applicant</Label>
            <Textarea id="simulate-client-comment" rows={2} maxLength={2000} value={clientComment} onChange={(e) => setClientComment(e.target.value)} />
          </div>
          {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={submit} disabled={submitting}>
            {submitting ? "Simulating…" : `Simulate ${humanize(decision).toLowerCase()}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
