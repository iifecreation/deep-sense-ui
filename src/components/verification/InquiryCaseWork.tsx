"use client";

import { useState } from "react";
import { Check, Lock, Radar, Unlock, UserCheck, X } from "lucide-react";
import { toast } from "sonner";
import type { InquiryNoteRead, InquiryRead, ReviewerRead } from "@/lib/api-client/api";
import type { TeamMember } from "@/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ErrorCard, OverdueBadge, StatusBadge, formatDate, formatScore, userLabel } from "@/components/verification/VerificationShell";
import {
  POA_DOCUMENT_TYPES,
  describeError,
  errorCode,
  humanize,
  parseMonitoringHits,
  parsePendingDecision,
  parseProofOfAddressResult,
  verificationFlowsService,
} from "@/services/verification-flows.service";

const CARD_TITLE = "text-base font-black uppercase italic tracking-tight";

interface CaseWorkProps {
  inquiry: InquiryRead;
  members: TeamMember[] | undefined;
  onDone: () => void | Promise<void>;
}

// --- Four-eyes proposal -------------------------------------------------------

/** A decision proposed by one reviewer, waiting for a different one to confirm it. */
export function PendingDecisionCard({
  inquiry,
  members,
  currentUserId,
  onDone,
}: CaseWorkProps & { currentUserId: string | undefined }) {
  const proposal = parsePendingDecision(inquiry.pending_decision);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [reason, setReason] = useState("");
  if (!proposal) return null;
  const ownProposal = !!currentUserId && proposal.proposed_by_user_id === currentUserId;

  const confirm = async () => {
    setBusy(true);
    setError(null);
    try {
      await verificationFlowsService.confirmProposal(inquiry.id);
      toast.success(`${humanize(proposal.decision)} confirmed`);
      await onDone();
    } catch (cause) {
      setError(
        errorCode(cause) === "four_eyes_same_reviewer"
          ? "You proposed this decision, so you can't confirm it. A different reviewer has to confirm it."
          : describeError(cause, "Confirm failed"),
      );
    } finally {
      setBusy(false);
    }
  };

  const reject = async () => {
    setBusy(true);
    setError(null);
    try {
      await verificationFlowsService.rejectProposal(inquiry.id, reason.trim());
      toast.success(ownProposal ? "Proposal withdrawn" : "Proposal rejected");
      setRejectOpen(false);
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Reject failed"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-3xl border-violet-300 bg-violet-50/40" data-testid="pending-decision">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle className={CARD_TITLE}>Decision waiting for a second reviewer</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">
            This level needs four-eyes review at this risk score. The decision takes effect once a different reviewer
            confirms it.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button onClick={confirm} disabled={busy}>
            <Check className="w-3.5 h-3.5 mr-2" /> Confirm
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setReason("");
              setRejectOpen(true);
            }}
            disabled={busy}
          >
            <X className="w-3.5 h-3.5 mr-2" /> {ownProposal ? "Withdraw proposal" : "Reject proposal"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Proposed decision</div>
          <div className="font-bold" data-testid="proposed-decision">
            {humanize(proposal.decision)}
            {proposal.reject_type && <span className="text-xs text-muted-foreground"> ({proposal.reject_type})</span>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Proposed by</div>
          <div data-testid="proposed-by">
            {userLabel(proposal.proposed_by_user_id, members)}
            {ownProposal && <span className="text-xs text-muted-foreground"> (you)</span>}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Proposed at</div>
          <div>{formatDate(proposal.proposed_at)}</div>
        </div>
        {proposal.reject_labels.length > 0 && (
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Reject labels</div>
            <div className="flex flex-wrap gap-1">
              {proposal.reject_labels.map((code) => (
                <Badge key={code} variant="outline" className="font-mono text-[10px]">{code}</Badge>
              ))}
            </div>
          </div>
        )}
        {proposal.client_comment && (
          <div className="col-span-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Comment to applicant</div>
            <div>{proposal.client_comment}</div>
          </div>
        )}
        {proposal.internal_comment && (
          <div className="col-span-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Internal comment</div>
            <div>{proposal.internal_comment}</div>
          </div>
        )}
        {ownProposal && !error && (
          <p className="col-span-2 md:col-span-4 text-xs text-muted-foreground">
            You proposed this decision. Another reviewer has to confirm it; you can withdraw it.
          </p>
        )}
        {error && (
          <p className="col-span-2 md:col-span-4 text-sm text-rose-600 font-semibold" role="alert" data-testid="pending-decision-error">
            {error}
          </p>
        )}
      </CardContent>

      <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{ownProposal ? "Withdraw proposal" : "Reject proposal"}</DialogTitle>
            <DialogDescription>
              The inquiry stays as it is and can be reviewed again. The reason is saved as a note.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="proposal-reason">Reason</Label>
            <Textarea id="proposal-reason" rows={3} minLength={3} maxLength={2000} value={reason} onChange={(e) => setReason(e.target.value)} />
          </div>
          {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectOpen(false)}>Cancel</Button>
            <Button onClick={reject} disabled={busy || reason.trim().length < 3}>
              {ownProposal ? "Withdraw" : "Reject proposal"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

// --- Legal hold ---------------------------------------------------------------

export function LegalHoldBanner({ inquiry, onDone }: Omit<CaseWorkProps, "members">) {
  const [busy, setBusy] = useState(false);
  if (!inquiry.legal_hold_at) return null;

  const release = async () => {
    setBusy(true);
    try {
      await verificationFlowsService.releaseLegalHold(inquiry.id);
      toast.success("Legal hold released");
      await onDone();
    } catch (cause) {
      toast.error(describeError(cause, "Failed to release the hold"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="rounded-3xl border border-amber-300 bg-amber-50 px-6 py-4 flex flex-wrap items-center gap-4 text-amber-900"
      role="status"
      data-testid="legal-hold-banner"
    >
      <Lock className="w-5 h-5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-bold">On legal hold since {formatDate(inquiry.legal_hold_at)}</p>
        <p className="text-sm">
          {inquiry.legal_hold_reason} · Redaction, manual or automatic, is blocked until the hold is released.
        </p>
      </div>
      <Button variant="outline" onClick={release} disabled={busy}>
        <Unlock className="w-3.5 h-3.5 mr-2" /> Release hold
      </Button>
    </div>
  );
}

export function LegalHoldDialog({
  open,
  onOpenChange,
  inquiry,
  onDone,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiry: InquiryRead;
  onDone: () => void | Promise<void>;
}) {
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await verificationFlowsService.placeLegalHold(inquiry.id, reason.trim());
      toast.success("Legal hold placed");
      onOpenChange(false);
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Failed to place the hold"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place legal hold</DialogTitle>
          <DialogDescription>
            Blocks every redaction of this inquiry{inquiry.kind === "onboarding" ? " and its step-up actions" : ""} until
            you release it, including automatic retention.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-1.5">
          <Label htmlFor="legal-hold-reason">Reason</Label>
          <Textarea
            id="legal-hold-reason"
            rows={3}
            minLength={5}
            maxLength={1000}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="SAR filed 2026-10"
          />
        </div>
        {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={submit} disabled={busy || reason.trim().length < 5}>Place hold</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Assignment, deadline and tags --------------------------------------------

const UNASSIGNED = "unassigned";

export function QueueCard({
  inquiry,
  members,
  currentUserId,
  onDone,
  reviewers,
}: CaseWorkProps & { currentUserId: string | undefined; reviewers: ReviewerRead[] | undefined }) {
  const [busy, setBusy] = useState(false);
  const [tagsInput, setTagsInput] = useState((inquiry.tags ?? []).join(", "));
  const [editingTags, setEditingTags] = useState(false);
  const redacted = inquiry.redacted_at !== null;
  const assignee = inquiry.assigned_to_user_id;
  const options = reviewers ?? [];
  const canSelfAssign = !!currentUserId && options.some((reviewer) => reviewer.id === currentUserId);

  const assign = async (userId: string | null) => {
    setBusy(true);
    try {
      await verificationFlowsService.assignInquiry(inquiry.id, userId);
      toast.success(userId ? `Assigned to ${userLabel(userId, members)}` : "Unassigned");
      await onDone();
    } catch (cause) {
      toast.error(describeError(cause, "Assignment failed"));
    } finally {
      setBusy(false);
    }
  };

  const saveTags = async () => {
    setBusy(true);
    try {
      const tags = tagsInput.split(",").map((tag) => tag.trim()).filter(Boolean);
      const next = await verificationFlowsService.setTags(inquiry.id, tags);
      setTagsInput((next.tags ?? []).join(", "));
      setEditingTags(false);
      toast.success("Tags saved");
      await onDone();
    } catch (cause) {
      toast.error(describeError(cause, "Failed to save tags"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="queue-card">
      <CardHeader>
        <CardTitle className={CARD_TITLE}>Queue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <Label>Assignee</Label>
          <div className="flex gap-2">
            <Select value={assignee ?? UNASSIGNED} onValueChange={(v) => assign(v === UNASSIGNED ? null : v)} disabled={busy}>
              <SelectTrigger aria-label="Assignee" className="flex-1">
                <SelectValue>{assignee ? userLabel(assignee, members) : "Unassigned"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={UNASSIGNED}>Unassigned</SelectItem>
                {assignee && !options.some((reviewer) => reviewer.id === assignee) && (
                  // Current assignee lost review access (or left): keep them visible, not selectable.
                  <SelectItem value={assignee} disabled>
                    {userLabel(assignee, members)} · no longer a reviewer
                  </SelectItem>
                )}
                {options.map((reviewer) => (
                  <SelectItem key={reviewer.id} value={reviewer.id}>
                    {reviewer.full_name || reviewer.email} · {humanize(reviewer.role)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {canSelfAssign && assignee !== currentUserId && (
              <Button variant="outline" onClick={() => assign(currentUserId)} disabled={busy}>
                <UserCheck className="w-3.5 h-3.5 mr-2" /> Assign to me
              </Button>
            )}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Review due</div>
          <div className="text-sm mt-0.5 flex items-center gap-2" data-testid="review-due">
            {inquiry.review_due_at ? formatDate(inquiry.review_due_at) : "No deadline"}
            <OverdueBadge dueAt={inquiry.review_due_at} />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="inquiry-tags">Tags</Label>
          {editingTags ? (
            <div className="flex gap-2">
              <Input
                id="inquiry-tags"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="vip, corporate"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    void saveTags();
                  }
                }}
              />
              <Button onClick={saveTags} disabled={busy}>Save tags</Button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-1" data-testid="inquiry-tags">
              {(inquiry.tags ?? []).length === 0 && <span className="text-sm text-muted-foreground">No tags</span>}
              {(inquiry.tags ?? []).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
              ))}
              {!redacted && (
                <Button size="sm" variant="ghost" onClick={() => setEditingTags(true)}>Edit tags</Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// --- Notes --------------------------------------------------------------------

export function NotesCard({
  inquiry,
  members,
  notes,
  notesError,
  onRetry,
  onAdded,
}: {
  inquiry: InquiryRead;
  members: TeamMember[] | undefined;
  notes: InquiryNoteRead[] | undefined;
  notesError: unknown;
  onRetry: () => void;
  onAdded: () => void | Promise<void>;
}) {
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const redacted = inquiry.redacted_at !== null;

  const add = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      await verificationFlowsService.addNote(inquiry.id, body.trim());
      setBody("");
      await onAdded();
    } catch (cause) {
      toast.error(describeError(cause, "Failed to add note"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="inquiry-notes">
      <CardHeader>
        <CardTitle className={CARD_TITLE}>Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notesError !== undefined && !notes && <ErrorCard error={notesError} onRetry={onRetry} what="notes" />}
        {notes?.length === 0 && <p className="text-sm text-muted-foreground">No notes yet.</p>}
        <ol className="space-y-3">
          {(notes ?? []).map((note) => (
            <li key={note.id} className="border-l-2 border-border pl-4" data-testid="inquiry-note">
              <div className="text-xs text-muted-foreground">
                {userLabel(note.author_user_id, members)} · {formatDate(note.created_at)}
              </div>
              <div className={`text-sm whitespace-pre-wrap ${note.redacted_at ? "italic text-muted-foreground" : ""}`}>
                {note.redacted_at ? "[redacted]" : note.body}
              </div>
            </li>
          ))}
        </ol>
        {redacted ? (
          <p className="text-xs text-muted-foreground">Notes can&apos;t be added to a redacted inquiry.</p>
        ) : (
          <form onSubmit={add} className="space-y-2">
            <Label htmlFor="new-note">Add note</Label>
            <Textarea
              id="new-note"
              rows={2}
              maxLength={5000}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Notes can contain personal data; redaction erases them."
            />
            <div className="flex justify-end">
              <Button type="submit" size="sm" disabled={busy || !body.trim()}>Add note</Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

// --- Proof of address -----------------------------------------------------------

const pct = (value: number | null) => (value === null ? "—" : `${Math.round(value * 100)}%`);

/** The proof-of-address step result: similarities, document age and failed checks. */
export function ProofOfAddressCard({
  inquiry,
  canEvaluate,
  onEvaluate,
}: {
  inquiry: InquiryRead;
  canEvaluate: boolean;
  onEvaluate: () => void;
}) {
  const step = inquiry.steps.find((s) => s.step_type === "proof_of_address");
  if (!step) return null;
  const result = parseProofOfAddressResult(step.result);

  return (
    <Card className="rounded-3xl" data-testid="poa-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className={CARD_TITLE}>Proof of address</CardTitle>
        <div className="flex items-center gap-2">
          <StatusBadge status={step.status} />
          {canEvaluate && (
            <Button size="sm" variant="outline" onClick={onEvaluate}>Evaluate document</Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!result ? (
          <p className="text-sm text-muted-foreground">
            {canEvaluate
              ? "Send the fields extracted from the applicant's proof-of-address document to check them."
              : "No proof-of-address document has been evaluated."}
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm" data-testid="poa-result">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Document</div>
              <div>
                {humanize(result.document_type)}{" "}
                {result.document_type_accepted === false && <span className="text-rose-600">(not accepted)</span>}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Document age</div>
              <div data-testid="poa-age">
                {result.document_age_days === null ? "—" : `${result.document_age_days} days`}
                {result.max_age_days !== null && <span className="text-xs text-muted-foreground"> (max {result.max_age_days})</span>}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Name similarity</div>
              <div data-testid="poa-name-similarity">{pct(result.name_similarity)}</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Address similarity</div>
              <div data-testid="poa-address-similarity">
                {result.address_compared ? pct(result.address_similarity) : "Not compared (no declared address)"}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Extraction confidence</div>
              <div>{pct(result.extraction_confidence)}</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Risk</div>
              <div className="font-mono">{formatScore(step.risk_score)}</div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Failed checks</div>
              {result.failures.length === 0 ? (
                <div className="text-emerald-700">None</div>
              ) : (
                <ul className="list-disc pl-4 text-rose-700" data-testid="poa-failures">
                  {result.failures.map((failure) => <li key={failure}>{humanize(failure)}</li>)}
                </ul>
              )}
            </div>
            {result.address_captured_from_document && (
              <p className="col-span-2 md:col-span-4 text-xs text-muted-foreground">
                The applicant had no declared address, so the document&apos;s address was saved as their address.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const todayIso = () => new Date().toISOString().slice(0, 10);

export function ProofOfAddressDialog({
  open,
  onOpenChange,
  inquiry,
  acceptedTypes,
  onDone,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  inquiry: InquiryRead;
  /** The level's accepted document types, when it overrides the defaults. */
  acceptedTypes: string[] | null;
  onDone: () => void | Promise<void>;
}) {
  const types = acceptedTypes?.length ? acceptedTypes : [...POA_DOCUMENT_TYPES];
  const [form, setForm] = useState({
    document_type: types[0],
    full_name: "",
    address: "",
    issue_date: todayIso(),
    extraction_confidence: "",
    evidence_ref: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const next = await verificationFlowsService.evaluateProofOfAddress(inquiry.id, {
        document_type: form.document_type,
        full_name: form.full_name.trim(),
        address: form.address.trim(),
        issue_date: form.issue_date,
        extraction_confidence: form.extraction_confidence.trim() ? Number(form.extraction_confidence) : null,
        evidence_ref: form.evidence_ref.trim() || null,
      });
      const status = next.steps.find((s) => s.step_type === "proof_of_address")?.status;
      if (status === "passed") toast.success("Proof of address passed");
      else toast.warning("Proof of address failed; see the failed checks");
      onOpenChange(false);
      await onDone();
    } catch (cause) {
      setError(describeError(cause, "Evaluation failed"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Evaluate proof of address</DialogTitle>
          <DialogDescription>
            Enter the fields extracted from the document. DeepSense checks its type and age and compares the name and
            address with the applicant&apos;s; the extracted values aren&apos;t stored.
          </DialogDescription>
        </DialogHeader>
        <form id="poa-form" onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label>Document type</Label>
            <Select value={form.document_type} onValueChange={(v) => setForm({ ...form, document_type: v })}>
              <SelectTrigger aria-label="Document type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>{humanize(type)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="poa-full-name">Name on document</Label>
            <Input id="poa-full-name" required maxLength={512} value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="poa-address">Address on document</Label>
            <Textarea id="poa-address" required minLength={3} maxLength={1000} rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="poa-issue-date">Issue date</Label>
              <Input id="poa-issue-date" type="date" required value={form.issue_date} onChange={(e) => setForm({ ...form, issue_date: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="poa-extraction-confidence">Extraction confidence (optional)</Label>
              <Input
                id="poa-extraction-confidence"
                type="number"
                step="0.01"
                min={0}
                max={1}
                value={form.extraction_confidence}
                onChange={(e) => setForm({ ...form, extraction_confidence: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="poa-evidence-ref">Evidence reference (optional)</Label>
            <Input id="poa-evidence-ref" maxLength={255} value={form.evidence_ref} onChange={(e) => setForm({ ...form, evidence_ref: e.target.value })} placeholder="Document ID" />
          </div>
          {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
        </form>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" form="poa-form" disabled={busy}>{busy ? "Checking…" : "Evaluate"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// --- Ongoing monitoring -----------------------------------------------------------

export function MonitoringCard({ inquiry, onDone }: Omit<CaseWorkProps, "members">) {
  const hits = parseMonitoringHits(inquiry.monitoring_hits);
  const [busy, setBusy] = useState(false);
  const [resolveOpen, setResolveOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [resolution, setResolution] = useState<"false_positive" | "confirmed">("false_positive");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const canScreen = inquiry.kind === "onboarding" && inquiry.status === "approved" && inquiry.redacted_at === null;
  const status = inquiry.monitoring_status;

  const screen = async () => {
    setBusy(true);
    try {
      const next = await verificationFlowsService.runInquiryMonitoring(inquiry.id);
      const found = parseMonitoringHits(next.monitoring_hits).length - hits.length;
      if (found > 0) toast.warning(`${found} new monitoring hit${found === 1 ? "" : "s"}`);
      else toast.success("No new matches");
      await onDone();
    } catch (cause) {
      toast.error(describeError(cause, "Screening failed"));
    } finally {
      setBusy(false);
    }
  };

  const resolve = async () => {
    setBusy(true);
    setError(null);
    try {
      await verificationFlowsService.resolveMonitoring(inquiry.id, { resolution, comment: comment.trim() });
      toast.success(resolution === "confirmed" ? "Hit confirmed; applicant declined" : "Dismissed as false positive");
      setResolveOpen(false);
      setConfirmOpen(false);
      await onDone();
    } catch (cause) {
      setConfirmOpen(false);
      setError(describeError(cause, "Resolve failed"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className={`rounded-3xl ${status === "hit" ? "border-rose-300" : ""}`} data-testid="monitoring-card">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle className={CARD_TITLE}>Ongoing monitoring</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">
            Last screened {formatDate(inquiry.last_monitored_at)} against sanctions/PEP lists and internal watchlists.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span data-testid="monitoring-status">
            {status ? <StatusBadge status={status} /> : <span className="text-xs text-muted-foreground">Not screened</span>}
          </span>
          {canScreen && (
            <Button size="sm" variant="outline" onClick={screen} disabled={busy}>
              <Radar className="w-3.5 h-3.5 mr-2" /> Screen now
            </Button>
          )}
          {status === "hit" && (
            <Button
              size="sm"
              onClick={() => {
                setResolution("false_positive");
                setComment("");
                setError(null);
                setResolveOpen(true);
              }}
              disabled={busy}
            >
              Resolve
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {hits.length === 0 ? (
          <p className="text-sm text-muted-foreground px-6 pb-6">
            {status === "confirmed" ? "A hit was confirmed and the applicant declined." : "No open matches."}
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6">Matched name</TableHead>
                <TableHead>List</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead>Detected</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hits.map((hit) => (
                <TableRow key={hit.fingerprint} data-testid="monitoring-hit">
                  <TableCell className="px-6 font-bold">{hit.matched_name}</TableCell>
                  <TableCell className="text-xs">
                    {hit.list_name}
                    {hit.list_issuer && <div className="text-muted-foreground">{hit.list_issuer}</div>}
                  </TableCell>
                  <TableCell className="text-xs">{humanize(hit.source)}</TableCell>
                  <TableCell className="font-mono text-xs">{formatScore(hit.score)}</TableCell>
                  <TableCell className="text-xs">{hit.risk_level ? humanize(hit.risk_level) : "—"}</TableCell>
                  <TableCell className="text-xs">{formatDate(hit.detected_at)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <Dialog open={resolveOpen} onOpenChange={setResolveOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resolve monitoring hit</DialogTitle>
            <DialogDescription>The comment is saved as a note either way.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <RadioGroup value={resolution} onValueChange={(v) => setResolution(v as typeof resolution)} aria-label="Resolution" className="space-y-2">
              <label className="flex items-start gap-2 text-sm">
                <RadioGroupItem value="false_positive" aria-label="False positive" className="mt-0.5" />
                <span><span className="font-bold">False positive</span> — dismiss these matches; they won&apos;t be raised again.</span>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <RadioGroupItem value="confirmed" aria-label="Confirmed match" className="mt-0.5" />
                <span><span className="font-bold">Confirmed match</span> — decline the applicant with a final SANCTIONS_MATCH.</span>
              </label>
            </RadioGroup>
            <div className="space-y-1.5">
              <Label htmlFor="monitoring-comment">Comment</Label>
              <Textarea id="monitoring-comment" rows={3} minLength={3} maxLength={2000} value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setResolveOpen(false)}>Cancel</Button>
            <Button
              onClick={() => (resolution === "confirmed" ? setConfirmOpen(true) : resolve())}
              disabled={busy || comment.trim().length < 3}
              className={resolution === "confirmed" ? "bg-rose-600 hover:bg-rose-700" : ""}
            >
              {resolution === "confirmed" ? "Confirm match" : "Dismiss as false positive"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Decline this applicant?</AlertDialogTitle>
            <AlertDialogDescription>
              Confirming the match declines the applicant with a final SANCTIONS_MATCH. This can&apos;t be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={resolve} className="bg-rose-600 hover:bg-rose-700">Decline applicant</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
