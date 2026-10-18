"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  FlaskConical,
  Gavel,
  Link2,
  RefreshCcw,
  Repeat,
  Share2,
  ShieldCheck,
  ShieldOff,
  TimerOff,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  OneTimeLinkDialog,
  ReviewDialog,
  ShareTokenDialog,
  SimulateReviewDialog,
  StartActionDialog,
  StepResultDialog,
} from "@/components/verification/InquiryDialogs";
import {
  ErrorCard,
  KindBadge,
  ReferenceLink,
  StatusBadge,
  VerificationShell,
  formatDate,
  formatScore,
} from "@/components/verification/VerificationShell";
import {
  useInquiry,
  useInquiryActions,
  useInquiryEvents,
  useRejectLabels,
  useVerificationLevels,
} from "@/hooks/use-verification-flows";
import { useRuntimeEnvironment } from "@/hooks/use-runtime-environment";
import {
  OPEN_STATUSES,
  REVIEWABLE_STATUSES,
  TERMINAL_STATUSES,
  applicantProfileHref,
  describeError,
  describeReviewReason,
  humanize,
  parseDuplicateMatches,
  verificationFlowsService,
} from "@/services/verification-flows.service";

type Confirm = "redact" | "expire" | "reverify" | null;

const CONFIRM_COPY: Record<Exclude<Confirm, null>, { title: string; body: string; action: string }> = {
  redact: {
    title: "Redact applicant PII?",
    body: "Encrypted applicant fields, step data and hashes are erased permanently. Decisions and the event timeline are kept.",
    action: "Redact",
  },
  expire: { title: "Expire this inquiry?", body: "The applicant will no longer be able to continue.", action: "Expire" },
  reverify: {
    title: "Start re-verification?",
    body: "Creates a new inquiry on the level's active version, linked to this one.",
    action: "Start re-verification",
  },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-sm mt-0.5 break-words">{children}</div>
    </div>
  );
}

export default function InquiryDetailPage() {
  const params = useParams<{ inquiryId: string }>();
  const inquiryId = params.inquiryId;
  const router = useRouter();
  const [showPii, setShowPii] = useState(false);
  const inquiry = useInquiry(inquiryId, showPii);
  const events = useInquiryEvents(inquiryId);
  const labels = useRejectLabels();
  const environment = useRuntimeEnvironment();
  const isOnboarding = inquiry.data?.kind === "onboarding";
  const actions = useInquiryActions(inquiryId, isOnboarding);
  const levels = useVerificationLevels();

  const [reviewOpen, setReviewOpen] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [stepType, setStepType] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<Confirm>(null);
  const [actionOpen, setActionOpen] = useState(false);
  const [simulateOpen, setSimulateOpen] = useState(false);
  // The backend refuses simulation in production (403); hide the control once it says so.
  const [simulateForbidden, setSimulateForbidden] = useState(false);

  const refresh = async () => {
    await Promise.all([inquiry.refetch(), events.refetch(), actions.refetch()]);
  };

  const runConfirm = async () => {
    const action = confirm;
    setConfirm(null);
    if (!action) return;
    try {
      if (action === "redact") await verificationFlowsService.redactInquiry(inquiryId);
      if (action === "expire") await verificationFlowsService.expireInquiry(inquiryId);
      if (action === "reverify") {
        const next = await verificationFlowsService.reverifyInquiry(inquiryId);
        toast.success("Re-verification inquiry created");
        router.push(`/dashboard/verification/inquiries/${next.id}`);
        return;
      }
      toast.success(`Inquiry ${action === "redact" ? "redacted" : "expired"}`);
      if (action === "redact") setShowPii(false);
      await refresh();
    } catch (cause) {
      toast.error(describeError(cause));
    }
  };

  const data = inquiry.data;

  if (!data) {
    return (
      <VerificationShell title="Inquiry" description="Loading inquiry…">
        {inquiry.isError ? (
          <ErrorCard error={inquiry.error} onRetry={inquiry.refetch} what="inquiry" />
        ) : (
          <div className="h-40 rounded-3xl bg-muted animate-pulse" />
        )}
      </VerificationShell>
    );
  }

  const isOpen = OPEN_STATUSES.includes(data.status);
  const isTerminal = TERMINAL_STATUSES.includes(data.status);
  const canReview = REVIEWABLE_STATUSES.includes(data.status);
  const redacted = data.redacted_at !== null;
  const isAction = data.kind === "action";
  const approvedOnboarding = !isAction && data.status === "approved" && !redacted;
  const canSimulate = environment !== "production" && !simulateForbidden && (isOpen || canReview);
  const duplicates = parseDuplicateMatches(data.duplicate_matches);
  const actionLevels = (levels.data ?? []).filter((level) => level.kind === "action");

  return (
    <VerificationShell
      title={data.reference_id}
      description={`${isAction ? "Step-up action" : "Inquiry"} ${data.id}`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/dashboard/verification"><ArrowLeft className="w-3.5 h-3.5 mr-2" /> Queue</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={applicantProfileHref(data.reference_id)}><UserRound className="w-3.5 h-3.5 mr-2" /> Applicant</Link>
          </Button>
          {isOpen && (
            <Button onClick={() => setLinkOpen(true)}>
              <Link2 className="w-3.5 h-3.5 mr-2" /> One-time link
            </Button>
          )}
          {canReview && (
            <Button onClick={() => setReviewOpen(true)}>
              <Gavel className="w-3.5 h-3.5 mr-2" /> Review
            </Button>
          )}
          {canSimulate && (
            <Button variant="outline" onClick={() => setSimulateOpen(true)}>
              <FlaskConical className="w-3.5 h-3.5 mr-2" /> Simulate review
            </Button>
          )}
          {approvedOnboarding && (
            <Button onClick={() => setActionOpen(true)}>
              <ShieldCheck className="w-3.5 h-3.5 mr-2" /> Start action
            </Button>
          )}
          {approvedOnboarding && (
            <Button variant="outline" onClick={() => setShareOpen(true)}>
              <Share2 className="w-3.5 h-3.5 mr-2" /> Share token
            </Button>
          )}
          {approvedOnboarding && (
            <Button variant="outline" onClick={() => setConfirm("reverify")}>
              <Repeat className="w-3.5 h-3.5 mr-2" /> Reverify
            </Button>
          )}
          {!isTerminal && (
            <Button variant="outline" onClick={() => setConfirm("expire")}>
              <TimerOff className="w-3.5 h-3.5 mr-2" /> Expire
            </Button>
          )}
          {isTerminal && !redacted && (
            <Button variant="outline" className="text-rose-600" onClick={() => setConfirm("redact")}>
              <ShieldOff className="w-3.5 h-3.5 mr-2" /> Redact
            </Button>
          )}
          <Button size="icon" variant="ghost" onClick={refresh} aria-label="Refresh inquiry">
            <RefreshCcw className="w-3.5 h-3.5" />
          </Button>
        </>
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="rounded-3xl xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Summary</CardTitle>
            <div data-testid="inquiry-status"><StatusBadge status={data.status} /></div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Field label="Applicant">
              <ReferenceLink referenceId={data.reference_id} className="underline font-bold" />
            </Field>
            <Field label="Kind">
              <span data-testid="inquiry-kind"><KindBadge kind={data.kind} /></span>
            </Field>
            {data.parent_inquiry_id && (
              <Field label="Parent inquiry">
                <Link
                  className="underline font-mono text-xs"
                  href={`/dashboard/verification/inquiries/${data.parent_inquiry_id}`}
                  data-testid="parent-inquiry-link"
                >
                  {data.parent_inquiry_id.split("-")[0]}
                </Link>
              </Field>
            )}
            {data.external_action_id && (
              <Field label="External action ID">
                <span className="font-mono text-xs" data-testid="external-action-id">{data.external_action_id}</span>
              </Field>
            )}
            <Field label="Risk score">{formatScore(data.risk_score)}</Field>
            <Field label="Attempts">{data.attempt_count}</Field>
            <Field label="Source">{humanize(data.source)}</Field>
            <Field label="Country">{data.country_code ?? "—"}</Field>
            <Field label="Review answer">{data.review_answer ? humanize(data.review_answer) : "—"}</Field>
            <Field label="Reject type">{data.reject_type ?? "—"}</Field>
            <Field label="Created">{formatDate(data.created_at)}</Field>
            <Field label="Expires">{formatDate(data.expires_at)}</Field>
            <Field label="Started">{formatDate(data.started_at)}</Field>
            <Field label="Completed">{formatDate(data.completed_at)}</Field>
            <Field label="Decided">{formatDate(data.decided_at)}</Field>
            <Field label="Next re-verification">{formatDate(data.next_reverification_at)}</Field>
            {data.previous_inquiry_id && (
              <Field label="Previous inquiry">
                <Link className="underline font-mono text-xs" href={`/dashboard/verification/inquiries/${data.previous_inquiry_id}`}>
                  {data.previous_inquiry_id.split("-")[0]}
                </Link>
              </Field>
            )}
            {data.reused_from_inquiry_id && <Field label="Reused from">{data.reused_from_organization_id}</Field>}
            {data.redacted_at && <Field label="Redacted">{formatDate(data.redacted_at)}</Field>}
            {data.applicant_message && (
              <div className="col-span-2 md:col-span-4">
                <Field label="Message shown to applicant">{data.applicant_message}</Field>
              </div>
            )}
            {!!data.reject_labels?.length && (
              <div className="col-span-2 md:col-span-4">
                <Field label="Reject labels">
                  <div className="flex flex-wrap gap-1">
                    {data.reject_labels.map((code) => <Badge key={code} variant="outline" className="font-mono text-[10px]">{code}</Badge>)}
                  </div>
                </Field>
              </div>
            )}
            {!!data.review_reasons?.length && (
              <div className="col-span-2 md:col-span-4">
                <Field label="Routed to review because">{data.review_reasons.map(describeReviewReason).join(", ")}</Field>
              </div>
            )}
            {!!data.list_hits?.length && (
              <div className="col-span-2 md:col-span-4">
                <Field label="Risk list hits">
                  <ul className="space-y-1">
                    {data.list_hits.map((hit, index) => (
                      <li key={index} className="text-xs flex gap-2 items-center">
                        <StatusBadge status={String(hit.action)} /> {String(hit.list_name)} · {humanize(String(hit.list_type))} ·{" "}
                        <span className="font-mono">{String(hit.value_masked)}</span>
                      </li>
                    ))}
                  </ul>
                </Field>
              </div>
            )}
            {!!data.tags?.length && <Field label="Tags">{data.tags.join(", ")}</Field>}
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Applicant data</CardTitle>
            {!redacted && (
              <Button size="sm" variant="ghost" onClick={() => setShowPii((v) => !v)}>
                {showPii ? <EyeOff className="w-3.5 h-3.5 mr-1" /> : <Eye className="w-3.5 h-3.5 mr-1" />}
                {showPii ? "Hide" : "Reveal (audited)"}
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            {redacted && <p className="text-sm text-muted-foreground">PII was redacted on {formatDate(data.redacted_at)}.</p>}
            {!redacted && !showPii && <p className="text-sm text-muted-foreground">Applicant fields are encrypted. Revealing them is recorded in the audit trail.</p>}
            {!redacted && showPii && (
              data.fields && Object.keys(data.fields).length ? (
                Object.entries(data.fields).map(([key, value]) => <Field key={key} label={humanize(key)}>{String(value)}</Field>)
              ) : (
                <p className="text-sm text-muted-foreground">No applicant fields captured (or you lack onboarding:write).</p>
              )
            )}
            {data.metadata && Object.keys(data.metadata).length > 0 && (
              <Field label="Metadata">
                <pre className="text-[11px] bg-muted rounded-lg p-2 overflow-x-auto">{JSON.stringify(data.metadata, null, 2)}</pre>
              </Field>
            )}
          </CardContent>
        </Card>
      </div>

      {duplicates.length > 0 && (
        <Card className="rounded-3xl border-amber-200" data-testid="duplicate-matches">
          <CardHeader>
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Possible duplicate applicants</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">Applicant</TableHead>
                  <TableHead>Inquiry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Matched on</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {duplicates.map((match) => (
                  <TableRow key={match.inquiry_id}>
                    <TableCell className="px-6"><ReferenceLink referenceId={match.reference_id} /></TableCell>
                    <TableCell>
                      <Link className="underline font-mono text-xs" href={`/dashboard/verification/inquiries/${match.inquiry_id}`}>
                        {match.inquiry_id.split("-")[0]}
                      </Link>
                    </TableCell>
                    <TableCell>{match.status ? <StatusBadge status={match.status} /> : "—"}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {match.matched_on.map((key) => (
                          <Badge key={key} variant="outline" className="text-[10px]">{humanize(key)}</Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {isOnboarding && (
        <Card className="rounded-3xl overflow-hidden" data-testid="inquiry-actions">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Step-up actions</CardTitle>
            {approvedOnboarding && (
              <Button size="sm" variant="outline" onClick={() => setActionOpen(true)}>Start action</Button>
            )}
          </CardHeader>
          <CardContent className="p-0">
            {actions.isError && !actions.data ? (
              <div className="p-6"><ErrorCard error={actions.error} onRetry={actions.refetch} what="actions" /></div>
            ) : (actions.data ?? []).length === 0 ? (
              <p className="text-sm text-muted-foreground px-6 pb-6">
                {actions.isLoading
                  ? "Loading actions…"
                  : approvedOnboarding
                    ? "No actions yet. Start one before a sensitive operation such as a withdrawal."
                    : "Actions can be started once this inquiry is approved."}
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-6">External action ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Decided</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(actions.data ?? []).map((action) => (
                    <TableRow key={action.id} data-testid={`action-row-${action.external_action_id}`}>
                      <TableCell className="px-6">
                        <Link className="font-mono text-xs font-bold hover:underline" href={`/dashboard/verification/inquiries/${action.id}`}>
                          {action.external_action_id ?? action.id.split("-")[0]}
                        </Link>
                      </TableCell>
                      <TableCell><StatusBadge status={action.status} /></TableCell>
                      <TableCell className="font-mono text-xs">{formatScore(action.risk_score)}</TableCell>
                      <TableCell className="text-xs">{formatDate(action.created_at)}</TableCell>
                      <TableCell className="text-xs">{formatDate(action.decided_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      )}

      <Card className="rounded-3xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-black uppercase italic tracking-tight">Steps</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6">Step</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attempt</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead>Evidence</TableHead>
                <TableHead>Reject labels</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Evaluated</TableHead>
                <TableHead className="text-right px-6" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.steps.map((step) => (
                <TableRow key={step.step_type} data-testid={`inquiry-step-${step.step_type}`}>
                  <TableCell className="px-6">
                    <span className="font-bold">{step.position + 1}. {humanize(step.step_type)}</span>
                    {!step.required && <span className="text-xs text-muted-foreground"> (optional)</span>}
                  </TableCell>
                  <TableCell><StatusBadge status={step.status} /></TableCell>
                  <TableCell className="text-xs">{step.attempt}</TableCell>
                  <TableCell className="font-mono text-xs">{formatScore(step.risk_score)}</TableCell>
                  <TableCell className="font-mono text-xs max-w-[10rem] truncate" title={step.evidence_ref ?? undefined}>{step.evidence_ref ?? "—"}</TableCell>
                  <TableCell className="text-[10px] font-mono">{step.reject_labels?.join(", ") || "—"}</TableCell>
                  <TableCell className="text-xs">{formatDate(step.submitted_at)}</TableCell>
                  <TableCell className="text-xs">{formatDate(step.evaluated_at)}</TableCell>
                  <TableCell className="text-right px-6">
                    {isOpen && step.status !== "passed" && (
                      <Button size="sm" variant="outline" onClick={() => setStepType(step.step_type)}>Record result</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Review history</CardTitle>
          </CardHeader>
          <CardContent>
            {data.reviews.length === 0 ? (
              <p className="text-sm text-muted-foreground">No review decisions yet.</p>
            ) : (
              <ol className="space-y-4">
                {data.reviews.map((review) => (
                  <li key={review.id} className="border-l-2 border-border pl-4">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-bold">{humanize(review.decision)}</span>
                      {review.reject_type && <Badge variant="outline" className="text-[9px]">{review.reject_type}</Badge>}
                      <span className="text-xs text-muted-foreground">
                        {humanize(review.previous_status)} → {humanize(review.new_status)} · {review.automated ? "automated" : "manual"} ·{" "}
                        {formatDate(review.created_at)}
                      </span>
                    </div>
                    {!!review.reject_labels?.length && <div className="text-[11px] font-mono mt-1">{review.reject_labels.join(", ")}</div>}
                    {!!review.reset_steps?.length && <div className="text-xs mt-1">Reset: {review.reset_steps.map(humanize).join(", ")}</div>}
                    {review.client_comment && <div className="text-xs mt-1">To applicant: {review.client_comment}</div>}
                    {review.internal_comment && <div className="text-xs mt-1 text-muted-foreground">Internal: {review.internal_comment}</div>}
                  </li>
                ))}
              </ol>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-base font-black uppercase italic tracking-tight">Event timeline</CardTitle>
          </CardHeader>
          <CardContent>
            {events.isError && !events.data && <ErrorCard error={events.error} onRetry={events.refetch} what="events" />}
            {events.data?.length === 0 && <p className="text-sm text-muted-foreground">No events.</p>}
            <ol className="space-y-3" data-testid="inquiry-events">
              {(events.data ?? []).map((event) => (
                <li key={event.id} className="flex gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <div>
                    <div className="font-mono text-xs font-bold">{event.event_type}</div>
                    <div className="text-xs text-muted-foreground">
                      {humanize(event.actor_type)} · {formatDate(event.created_at)}
                    </div>
                    {event.payload && Object.keys(event.payload).length > 0 && (
                      <div className="text-[11px] text-muted-foreground font-mono">
                        {Object.entries(event.payload)
                          .filter(([, value]) => value !== null && typeof value !== "object")
                          .map(([key, value]) => `${key}=${String(value)}`)
                          .join(" · ")}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      <ReviewDialog key={`review-${reviewOpen}`} open={reviewOpen} onOpenChange={setReviewOpen} inquiry={data} onDone={refresh} labels={labels.data ?? []} />
      <OneTimeLinkDialog open={linkOpen} onOpenChange={setLinkOpen} inquiry={data} onDone={events.refetch} />
      <ShareTokenDialog key={`share-${shareOpen}`} open={shareOpen} onOpenChange={setShareOpen} inquiry={data} onDone={events.refetch} />
      <SimulateReviewDialog
        key={`simulate-${simulateOpen}`}
        open={simulateOpen}
        onOpenChange={setSimulateOpen}
        inquiry={data}
        onDone={refresh}
        labels={labels.data ?? []}
        onForbidden={() => {
          setSimulateForbidden(true);
          toast.error("Review simulation is only available in sandbox");
        }}
      />
      {approvedOnboarding && (
        <StartActionDialog
          key={`action-${actionOpen}-${actionLevels.length}`}
          open={actionOpen}
          onOpenChange={setActionOpen}
          inquiry={data}
          actionLevels={actionLevels}
          onCreated={(action) => {
            toast.success("Step-up action started");
            router.push(`/dashboard/verification/inquiries/${action.id}`);
          }}
        />
      )}
      <StepResultDialog
        key={`step-${stepType}`}
        open={stepType !== null}
        onOpenChange={(open) => !open && setStepType(null)}
        stepType={stepType}
        inquiry={data}
        onDone={refresh}
        labels={labels.data ?? []}
      />

      <AlertDialog open={confirm !== null} onOpenChange={(open) => !open && setConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirm && CONFIRM_COPY[confirm].title}</AlertDialogTitle>
            <AlertDialogDescription>{confirm && CONFIRM_COPY[confirm].body}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={runConfirm}>{confirm && CONFIRM_COPY[confirm].action}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </VerificationShell>
  );
}
