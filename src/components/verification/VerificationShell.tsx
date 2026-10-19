"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { applicantProfileHref, describeError, humanize } from "@/services/verification-flows.service";

const TABS = [
  { href: "/dashboard/verification", label: "Inquiries" },
  { href: "/dashboard/verification/levels", label: "Levels" },
  { href: "/dashboard/verification/lists", label: "Risk lists" },
];

export function VerificationShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/dashboard/verification"
      ? pathname === href ||
        pathname.startsWith("/dashboard/verification/inquiries") ||
        pathname.startsWith("/dashboard/verification/applicants")
      : pathname.startsWith(href);

  return (
    <div className="flex flex-col gap-8 pb-20">
      <section className="sticky top-0 z-40 -mx-6 px-6 pt-6 pb-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase">
              {title}
              <span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest italic leading-none">
              {description}
            </p>
          </div>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
        <nav className="mt-6 flex gap-1" aria-label="Verification sections">
          {TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest italic border-b-2 transition-colors ${
                active(tab.href)
                  ? "border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
                  : "border-transparent text-muted-foreground hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </section>
      {children}
    </div>
  );
}

export function ErrorCard({ error, onRetry, what }: { error: unknown; onRetry?: () => void; what: string }) {
  return (
    <Card className="rounded-3xl border border-red-200 bg-red-50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-red-600 h-5 w-5" />
          <div>
            <p className="font-semibold text-red-900">Failed to load {what}</p>
            <p className="text-sm text-red-700">{describeError(error)}</p>
          </div>
        </div>
        {onRetry && (
          <Button onClick={onRetry} className="mt-4" variant="outline">
            <RefreshCcw className="w-4 h-4 mr-2" /> Retry
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

const STATUS_STYLES: Record<string, string> = {
  created: "border-slate-300 text-slate-600 bg-slate-50",
  pending: "border-blue-300 text-blue-700 bg-blue-50",
  completed: "border-indigo-300 text-indigo-700 bg-indigo-50",
  needs_review: "border-amber-300 text-amber-800 bg-amber-50",
  resubmission_requested: "border-orange-300 text-orange-700 bg-orange-50",
  approved: "border-emerald-300 text-emerald-700 bg-emerald-50",
  declined: "border-rose-300 text-rose-700 bg-rose-50",
  expired: "border-neutral-300 text-neutral-500 bg-neutral-100",
  // step statuses
  not_started: "border-slate-300 text-slate-500 bg-white",
  submitted: "border-blue-300 text-blue-700 bg-blue-50",
  passed: "border-emerald-300 text-emerald-700 bg-emerald-50",
  failed: "border-rose-300 text-rose-700 bg-rose-50",
  skipped: "border-neutral-300 text-neutral-500 bg-neutral-100",
  // list actions
  deny: "border-rose-300 text-rose-700 bg-rose-50",
  review: "border-amber-300 text-amber-800 bg-amber-50",
  allow: "border-emerald-300 text-emerald-700 bg-emerald-50",
  none: "border-slate-300 text-slate-600 bg-slate-50",
  // applicant profile statuses
  verified: "border-emerald-300 text-emerald-700 bg-emerald-50",
  reverification_due: "border-orange-300 text-orange-700 bg-orange-50",
  in_progress: "border-blue-300 text-blue-700 bg-blue-50",
  unverified: "border-slate-300 text-slate-600 bg-slate-50",
  monitoring_hit: "border-rose-600 text-white bg-rose-600",
  // ongoing monitoring statuses
  clear: "border-emerald-300 text-emerald-700 bg-emerald-50",
  hit: "border-rose-600 text-white bg-rose-600",
  confirmed: "border-rose-300 text-rose-700 bg-rose-50",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      data-status={status}
      className={`text-[9px] font-black uppercase italic tracking-widest ${STATUS_STYLES[status] ?? ""}`}
    >
      {humanize(status)}
    </Badge>
  );
}

/** "Overdue" when a review deadline has passed, nothing otherwise. */
export function OverdueBadge({ dueAt }: { dueAt: string | null | undefined }) {
  // Read the clock once per mount: a re-render shouldn't flip the badge mid-session.
  const [now] = useState(() => Date.now());
  if (!dueAt || new Date(dueAt).getTime() > now) return null;
  return (
    <Badge variant="outline" data-testid="overdue-badge" className="text-[9px] font-black uppercase italic tracking-widest border-rose-300 text-rose-700 bg-rose-50">
      Overdue
    </Badge>
  );
}

/** Display name of an org user, falling back to a short ID when the user isn't listed. */
export const userLabel = (
  userId: string | null | undefined,
  members: { user_id: string; full_name: string | null; email: string }[] | undefined,
): string => {
  if (!userId) return "—";
  const member = members?.find((m) => m.user_id === userId);
  return member ? member.full_name || member.email : userId.split("-")[0];
};

export const formatDate = (value: string | null | undefined): string =>
  value ? new Date(value).toLocaleString() : "—";

export const formatScore = (value: number | null | undefined): string =>
  value === null || value === undefined ? "—" : value.toFixed(2);

/** An applicant's reference ID, linking to their profile. */
export function ReferenceLink({ referenceId, className }: { referenceId: string; className?: string }) {
  return (
    <Link
      href={applicantProfileHref(referenceId)}
      className={className ?? "font-bold hover:underline"}
      onClick={(event) => event.stopPropagation()}
      title="Open applicant profile"
    >
      {referenceId}
    </Link>
  );
}

export function KindBadge({ kind }: { kind: string }) {
  return (
    <Badge
      variant="outline"
      data-kind={kind}
      className={`text-[9px] font-black uppercase italic tracking-widest ${
        kind === "action" ? "border-violet-300 text-violet-700 bg-violet-50" : "border-slate-300 text-slate-600 bg-white"
      }`}
    >
      {humanize(kind)}
    </Badge>
  );
}
