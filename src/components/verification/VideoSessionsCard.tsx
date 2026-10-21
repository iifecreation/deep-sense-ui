"use client";

import { useState } from "react";
import { Video } from "lucide-react";
import { toast } from "sonner";
import type { InquiryRead, VideoChecklist, VideoSessionRead } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorCard, StatusBadge, formatDate } from "@/components/verification/VerificationShell";
import { describeError, humanize, verificationFlowsService } from "@/services/verification-flows.service";

const CARD_TITLE = "text-base font-black uppercase italic tracking-tight";
const OPEN = ["created", "pending", "resubmission_requested"];

const CHECKLIST: { key: keyof VideoChecklist; label: string }[] = [
  { key: "identity_document_shown", label: "Applicant showed their identity document on camera" },
  { key: "document_security_features_checked", label: "Document security features checked (hologram, tilt, fonts)" },
  { key: "face_matches_document", label: "Applicant's face matches the document photo" },
  { key: "liveness_confirmed", label: "Liveness confirmed (live responses to prompts)" },
  { key: "recording_consent_given", label: "Applicant consented to the call being recorded" },
  { key: "no_third_party_present", label: "No third party present or coaching the applicant" },
];
const EMPTY_CHECKLIST = Object.fromEntries(CHECKLIST.map(({ key }) => [key, false])) as unknown as VideoChecklist;

const toLocalInput = (date: Date) => {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

/** Live video identification calls for an inquiry with a video_ident step (agent view). */
export function VideoSessionsCard({
  inquiry,
  sessions,
  error,
  onRetry,
  currentUserId,
  onChanged,
}: {
  inquiry: InquiryRead;
  sessions: VideoSessionRead[] | undefined;
  error: unknown;
  onRetry: () => void;
  currentUserId: string | undefined;
  onChanged: () => void | Promise<void>;
}) {
  const [slot, setSlot] = useState(() => toLocalInput(new Date(Date.now() + 30 * 60_000)));
  const [busy, setBusy] = useState(false);
  const [completing, setCompleting] = useState<VideoSessionRead | null>(null);
  const step = inquiry.steps.find((item) => item.step_type === "video_ident");
  const active = (sessions ?? []).find((session) => session.status === "scheduled" || session.status === "in_progress");
  const canBook = OPEN.includes(inquiry.status) && step?.status !== "passed" && !active;

  const run = async (action: () => Promise<unknown>, success: string, failure: string) => {
    setBusy(true);
    try {
      await action();
      toast.success(success);
      await onChanged();
    } catch (cause) {
      toast.error(describeError(cause, failure));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="video-sessions-card">
      <CardHeader>
        <CardTitle className={CARD_TITLE}>
          <Video className="inline w-4 h-4 mr-2 -mt-1" />
          Video identification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error !== undefined && !sessions && <ErrorCard error={error} onRetry={onRetry} what="video calls" />}
        {sessions?.length === 0 && <p className="text-sm text-muted-foreground">No call booked yet.</p>}
        {(sessions ?? []).map((session) => (
          <div key={session.id} className="rounded-2xl border p-3 space-y-2" data-testid={`video-session-${session.id}`}>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <StatusBadge status={session.status} />
              <span>{formatDate(session.scheduled_at)}</span>
              <span className="text-muted-foreground">booked by {humanize(session.booked_by)}</span>
              {session.outcome && <StatusBadge status={session.outcome === "pass" ? "passed" : "failed"} />}
            </div>
            {session.status === "scheduled" && (
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  disabled={busy}
                  onClick={() =>
                    run(() => verificationFlowsService.startVideoSession(session.id), "Call started", "Could not start the call")
                  }
                >
                  Start call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={busy}
                  onClick={() =>
                    run(() => verificationFlowsService.cancelVideoSession(session.id), "Call cancelled", "Could not cancel")
                  }
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={busy}
                  onClick={() =>
                    run(() => verificationFlowsService.noShowVideoSession(session.id), "Marked as no-show", "Could not update")
                  }
                >
                  No-show
                </Button>
              </div>
            )}
            {session.status === "in_progress" && (
              <div className="flex flex-wrap items-center gap-2">
                {session.agent_join_url && (
                  <Button size="sm" asChild>
                    <a href={session.agent_join_url} target="_blank" rel="noopener noreferrer" data-testid="agent-join-url">
                      Join as agent
                    </a>
                  </Button>
                )}
                {session.agent_user_id === currentUserId ? (
                  <Button size="sm" variant="outline" onClick={() => setCompleting(session)}>
                    Record outcome
                  </Button>
                ) : (
                  <span className="text-xs text-muted-foreground">Only the agent who started the call can record it.</span>
                )}
              </div>
            )}
            {session.checklist && (
              <ul className="text-xs space-y-0.5">
                {CHECKLIST.map(({ key, label }) => (
                  <li key={key} className={(session.checklist as Record<string, boolean>)[key] ? "" : "text-rose-700 font-semibold"}>
                    {(session.checklist as Record<string, boolean>)[key] ? "✓" : "✗"} {label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {canBook && (
          <form
            className="flex flex-wrap items-end gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              run(
                () => verificationFlowsService.bookVideoSession(inquiry.id, new Date(slot).toISOString()),
                "Call booked",
                "Could not book the call",
              );
            }}
          >
            <div className="space-y-1.5">
              <Label htmlFor="video-slot">Book a call for the applicant</Label>
              <Input id="video-slot" type="datetime-local" value={slot} onChange={(e) => setSlot(e.target.value)} required />
            </div>
            <Button type="submit" variant="outline" disabled={busy}>
              Book call
            </Button>
          </form>
        )}
      </CardContent>
      <CompleteVideoDialog session={completing} onClose={() => setCompleting(null)} onDone={onChanged} />
    </Card>
  );
}

function CompleteVideoDialog({
  session,
  onClose,
  onDone,
}: {
  session: VideoSessionRead | null;
  onClose: () => void;
  onDone: () => void | Promise<void>;
}) {
  const [checklist, setChecklist] = useState<VideoChecklist>(EMPTY_CHECKLIST);
  const [recordingRef, setRecordingRef] = useState("");
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);
  const allClear = CHECKLIST.every(({ key }) => checklist[key]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!session) return;
    setBusy(true);
    try {
      const result = await verificationFlowsService.completeVideoSession(session.id, {
        checklist,
        recording_ref: recordingRef.trim() || null,
        notes: notes.trim() || null,
      });
      toast.success(result.outcome === "pass" ? "Video identification passed" : "Video identification failed");
      setChecklist(EMPTY_CHECKLIST);
      setRecordingRef("");
      setNotes("");
      onClose();
      await onDone();
    } catch (cause) {
      toast.error(describeError(cause, "Could not record the outcome"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={session !== null} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <form onSubmit={submit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Record call outcome</DialogTitle>
            <DialogDescription>
              Tick only what you confirmed on the call. Any unticked item fails the video identification step.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            {CHECKLIST.map(({ key, label }) => (
              <label key={key} className="flex items-start gap-2 text-sm">
                <Checkbox
                  checked={checklist[key]}
                  onCheckedChange={(checked) => setChecklist((prev) => ({ ...prev, [key]: checked === true }))}
                  aria-label={label}
                />
                {label}
              </label>
            ))}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="video-recording-ref">Recording ID</Label>
            <Input id="video-recording-ref" value={recordingRef} onChange={(e) => setRecordingRef(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="video-notes">Notes (saved to the inquiry)</Label>
            <Textarea id="video-notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant={allClear ? "default" : "destructive"} disabled={busy}>
              {allClear ? "Pass video identification" : "Fail video identification"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
