"use client";

import { useState } from "react";
import Link from "next/link";
import { Radar, ShieldOff } from "lucide-react";
import { toast } from "sonner";
import type { MonitoringRunResult, RetentionRunResult } from "@/lib/api-client/api";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { describeError, humanize, verificationFlowsService } from "@/services/verification-flows.service";

function InquiryLink({ id }: { id: string }) {
  return (
    <Link className="underline font-mono text-xs" href={`/dashboard/verification/inquiries/${id}`}>
      {id.split("-")[0]}
    </Link>
  );
}

/** Previews retention (dry run), then runs it after confirmation. */
export function RetentionPanel() {
  const [result, setResult] = useState<RetentionRunResult | null>(null);
  const [running, setRunning] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const run = async (dryRun: boolean) => {
    setRunning(true);
    try {
      const next = await verificationFlowsService.runRetention(dryRun);
      setResult(next);
      if (!dryRun) toast.success(`${next.redacted.length} inquir${next.redacted.length === 1 ? "y" : "ies"} redacted`);
    } catch (cause) {
      toast.error(describeError(cause, "Retention run failed"));
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="retention-panel">
      <CardHeader>
        <CardTitle className="text-base font-black uppercase italic tracking-tight">Retention</CardTitle>
        <p className="text-xs text-muted-foreground">
          Levels with auto-redaction redact old inquiries daily at 03:45 UTC. Inquiries on legal hold, and each
          applicant&apos;s current approval, are never redacted automatically.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => run(true)} disabled={running}>
            Preview (dry run)
          </Button>
          <Button
            variant="outline"
            className="text-rose-600"
            onClick={() => setConfirmOpen(true)}
            disabled={running || !result?.dry_run || result.redacted.length === 0}
          >
            <ShieldOff className="w-3.5 h-3.5 mr-2" /> Run retention now
          </Button>
        </div>
        {result && (
          <div className="space-y-3 text-sm" data-testid="retention-result">
            <p className="font-bold">
              {result.dry_run ? "Would redact" : "Redacted"} {result.redacted.length} inquir
              {result.redacted.length === 1 ? "y" : "ies"}
              {result.skipped.length > 0 && `, skipped ${result.skipped.length}`}
            </p>
            {result.redacted.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {result.redacted.map((id) => <InquiryLink key={id} id={id} />)}
              </div>
            )}
            {result.skipped.length > 0 && (
              <ul className="space-y-1">
                {result.skipped.map((skip) => (
                  <li key={skip.inquiry_id} className="text-xs">
                    <InquiryLink id={skip.inquiry_id} /> — {humanize(skip.reason)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </CardContent>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redact {result?.redacted.length ?? 0} inquiries now?</AlertDialogTitle>
            <AlertDialogDescription>
              Applicant PII is erased permanently from every inquiry that is past its level&apos;s retention period.
              Decisions and event timelines are kept.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => run(false)}>Redact</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

/** Runs ongoing monitoring for every monitored level now, instead of waiting for the daily job. */
export function MonitoringRunPanel() {
  const [result, setResult] = useState<MonitoringRunResult | null>(null);
  const [running, setRunning] = useState(false);

  const run = async () => {
    setRunning(true);
    try {
      setResult(await verificationFlowsService.runMonitoring());
    } catch (cause) {
      toast.error(describeError(cause, "Monitoring run failed"));
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="monitoring-panel">
      <CardHeader>
        <CardTitle className="text-base font-black uppercase italic tracking-tight">Ongoing monitoring</CardTitle>
        <p className="text-xs text-muted-foreground">
          Approved applicants on levels with monitoring are re-screened daily at 03:45 UTC. A run now screens those not
          screened in the last 20 hours.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" onClick={run} disabled={running}>
          <Radar className="w-3.5 h-3.5 mr-2" /> {running ? "Screening…" : "Run monitoring now"}
        </Button>
        {result && (
          <p className="text-sm" data-testid="monitoring-run-result">
            Screened {result.screened} applicant{result.screened === 1 ? "" : "s"};{" "}
            {result.applicants_with_new_hits} with new hits.
            {result.applicants_with_new_hits > 0 && " Their applicant profiles now show a monitoring hit."}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
