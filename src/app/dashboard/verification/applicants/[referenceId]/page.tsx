"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, RefreshCcw, UserX } from "lucide-react";
import type { InquiryListItem } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ErrorCard,
  KindBadge,
  StatusBadge,
  VerificationShell,
  formatDate,
  formatScore,
} from "@/components/verification/VerificationShell";
import { useApplicantProfile } from "@/hooks/use-verification-flows";
import { errorStatus } from "@/services/verification-flows.service";

const STATUS_COPY: Record<string, string> = {
  verified: "Approved onboarding inquiry on file.",
  reverification_due: "Approved, but the level's re-verification interval has passed.",
  in_progress: "An onboarding inquiry is still in progress.",
  needs_review: "An onboarding inquiry is waiting for a reviewer.",
  declined: "The latest onboarding inquiry was declined.",
  unverified: "No approved onboarding inquiry.",
};

const decodeSegment = (value: string): string => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-sm mt-0.5 break-words">{children}</div>
    </div>
  );
}

const inquiryHref = (id: string) => `/dashboard/verification/inquiries/${id}`;

function InquiryLink({ id }: { id: string | null }) {
  return id ? (
    <Link className="underline font-mono text-xs" href={inquiryHref(id)}>
      {id.split("-")[0]}
    </Link>
  ) : (
    <>—</>
  );
}

function InquiryTable({
  rows,
  empty,
  testId,
  actions,
}: {
  rows: InquiryListItem[];
  empty: string;
  testId: string;
  actions?: boolean;
}) {
  const router = useRouter();
  if (rows.length === 0) return <p className="text-sm text-muted-foreground px-6 pb-6">{empty}</p>;
  return (
    <Table data-testid={testId}>
      <TableHeader>
        <TableRow>
          <TableHead className="px-6">{actions ? "External action ID" : "Inquiry"}</TableHead>
          <TableHead>Kind</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Risk</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Decided</TableHead>
          {actions && <TableHead>Parent</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            className="cursor-pointer"
            data-testid={`profile-row-${row.id}`}
            onClick={() => router.push(inquiryHref(row.id))}
          >
            <TableCell className="px-6">
              <Link className="font-mono text-xs font-bold hover:underline" href={inquiryHref(row.id)} onClick={(e) => e.stopPropagation()}>
                {actions ? (row.external_action_id ?? row.id.split("-")[0]) : row.id.split("-")[0]}
              </Link>
            </TableCell>
            <TableCell><KindBadge kind={row.kind} /></TableCell>
            <TableCell>
              <StatusBadge status={row.status} />
              {row.reject_type && <div className="text-[10px] text-muted-foreground mt-1">{row.reject_type}</div>}
            </TableCell>
            <TableCell className="font-mono text-xs">{formatScore(row.risk_score)}</TableCell>
            <TableCell className="text-xs">{formatDate(row.created_at)}</TableCell>
            <TableCell className="text-xs">{formatDate(row.decided_at)}</TableCell>
            {actions && (
              <TableCell onClick={(e) => e.stopPropagation()}>
                <InquiryLink id={row.parent_inquiry_id} />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function ApplicantProfilePage() {
  const params = useParams<{ referenceId: string }>();
  const referenceId = decodeSegment(params.referenceId);
  const profile = useApplicantProfile(referenceId);
  const data = profile.data;

  const back = (
    <Button variant="outline" asChild>
      <Link href="/dashboard/verification"><ArrowLeft className="w-3.5 h-3.5 mr-2" /> Queue</Link>
    </Button>
  );

  if (!data) {
    const notFound = errorStatus(profile.error) === 404;
    return (
      <VerificationShell title={referenceId} description="Applicant profile" actions={back}>
        {notFound ? (
          <Card className="rounded-3xl" data-testid="applicant-not-found">
            <CardContent className="p-6 flex items-center gap-3">
              <UserX className="w-5 h-5 text-muted-foreground" />
              <p className="text-sm">No inquiries exist for reference ID <span className="font-mono">{referenceId}</span>.</p>
            </CardContent>
          </Card>
        ) : profile.isError ? (
          <ErrorCard error={profile.error} onRetry={profile.refetch} what="applicant profile" />
        ) : (
          <div className="h-40 rounded-3xl bg-muted animate-pulse" />
        )}
      </VerificationShell>
    );
  }

  return (
    <VerificationShell
      title={data.reference_id}
      description="Applicant profile — one verification status derived from all of this applicant's inquiries"
      actions={
        <>
          {back}
          <Button size="icon" variant="ghost" onClick={profile.refetch} aria-label="Refresh applicant">
            <RefreshCcw className="w-3.5 h-3.5" />
          </Button>
        </>
      }
    >
      <Card className="rounded-3xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base font-black uppercase italic tracking-tight">Verification status</CardTitle>
          <div data-testid="applicant-status"><StatusBadge status={data.verification_status} /></div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-4 text-sm text-muted-foreground">{STATUS_COPY[data.verification_status]}</div>
          <Field label="Current inquiry"><InquiryLink id={data.current_inquiry_id} /></Field>
          <Field label="Open inquiry"><InquiryLink id={data.open_inquiry_id} /></Field>
          <Field label="Verified">{formatDate(data.verified_at)}</Field>
          <Field label="Next re-verification">{formatDate(data.next_reverification_at)}</Field>
        </CardContent>
      </Card>

      <Card className="rounded-3xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-black uppercase italic tracking-tight">Onboarding inquiries</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <InquiryTable rows={data.inquiries} empty="No onboarding inquiries." testId="applicant-inquiries" />
        </CardContent>
      </Card>

      <Card className="rounded-3xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base font-black uppercase italic tracking-tight">Step-up actions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <InquiryTable rows={data.actions} empty="No step-up actions." testId="applicant-actions" actions />
        </CardContent>
      </Card>
    </VerificationShell>
  );
}
