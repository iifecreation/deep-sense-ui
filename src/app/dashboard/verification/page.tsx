"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Clock, Plus, RefreshCcw, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ErrorCard,
  KindBadge,
  ReferenceLink,
  StatusBadge,
  VerificationShell,
  formatDate,
  formatScore,
} from "@/components/verification/VerificationShell";
import { useInquiries, useVerificationLevels } from "@/hooks/use-verification-flows";
import {
  INQUIRY_KINDS,
  INQUIRY_STATUSES,
  describeError,
  humanize,
  verificationFlowsService,
  type InquiryKind,
  type InquiryStatus,
} from "@/services/verification-flows.service";

const PAGE_SIZE = 25;
const ALL = "all";

export default function InquiriesQueuePage() {
  const router = useRouter();
  const [status, setStatus] = useState<InquiryStatus | typeof ALL>(ALL);
  const [levelName, setLevelName] = useState<string>(ALL);
  const [kind, setKind] = useState<InquiryKind | typeof ALL>(ALL);
  const [referenceInput, setReferenceInput] = useState("");
  const [reference, setReference] = useState("");
  const [offset, setOffset] = useState(0);

  const inquiries = useInquiries({
    status: status === ALL ? undefined : status,
    kind: kind === ALL ? undefined : kind,
    level_name: levelName === ALL ? undefined : levelName,
    reference_id: reference || undefined,
    limit: PAGE_SIZE,
    offset,
  });
  const levels = useVerificationLevels();

  const [createOpen, setCreateOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [form, setForm] = useState({ level_name: "", reference_id: "", first_name: "", last_name: "", email: "", country_code: "" });

  const setFilter = <T,>(setter: (value: T) => void) => (value: T) => {
    setter(value);
    setOffset(0);
  };

  const create = async (event: React.FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setCreateError(null);
    try {
      const fields = Object.fromEntries(
        (["first_name", "last_name", "email", "country_code"] as const)
          .map((key) => [key, form[key].trim()])
          .filter(([, value]) => value),
      );
      const inquiry = await verificationFlowsService.createInquiry({
        level_name: form.level_name,
        reference_id: form.reference_id.trim(),
        fields: Object.keys(fields).length ? fields : null,
      });
      toast.success("Inquiry created");
      setCreateOpen(false);
      router.push(`/dashboard/verification/inquiries/${inquiry.id}`);
    } catch (cause) {
      setCreateError(describeError(cause, "Failed to create inquiry"));
    } finally {
      setCreating(false);
    }
  };

  const expireStale = async () => {
    try {
      const { expired } = await verificationFlowsService.expireStale();
      toast.success(`${expired} stale inquir${expired === 1 ? "y" : "ies"} expired`);
      await inquiries.refetch();
    } catch (cause) {
      toast.error(describeError(cause));
    }
  };

  const page = inquiries.data;
  const rows = page?.items ?? [];
  const total = page?.total ?? 0;
  const activeLevels = levels.data ?? [];
  // Actions are started from an approved onboarding inquiry, never created directly.
  const onboardingLevels = activeLevels.filter((level) => level.kind !== "action");

  return (
    <VerificationShell
      title="Verification Inquiries"
      description="Applicant verification sessions, their step progress and review decisions."
      actions={
        <>
          <Button variant="outline" onClick={expireStale}>
            <Clock className="w-3.5 h-3.5 mr-2" /> Expire stale
          </Button>
          <Button
            onClick={() => {
              setCreateError(null);
              setForm((prev) => ({ ...prev, level_name: prev.level_name || onboardingLevels[0]?.name || "" }));
              setCreateOpen(true);
            }}
          >
            <Plus className="w-3.5 h-3.5 mr-2" /> New inquiry
          </Button>
          <Button size="icon" variant="ghost" onClick={inquiries.refetch} aria-label="Refresh inquiries">
            <RefreshCcw className="w-3.5 h-3.5" />
          </Button>
        </>
      }
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Status filter">
        {[ALL, ...INQUIRY_STATUSES].map((value) => (
          <Button
            key={value}
            role="tab"
            aria-selected={status === value}
            size="sm"
            variant={status === value ? "default" : "outline"}
            className="text-[10px] font-black uppercase tracking-widest"
            onClick={() => setFilter(setStatus)(value as InquiryStatus | typeof ALL)}
          >
            {humanize(value)}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setFilter(setReference)(referenceInput.trim());
          }}
        >
          <Input
            placeholder="Reference ID"
            value={referenceInput}
            onChange={(e) => setReferenceInput(e.target.value)}
            className="w-64"
            aria-label="Filter by reference ID"
          />
          <Button type="submit" size="icon" variant="outline" aria-label="Search">
            <Search className="w-4 h-4" />
          </Button>
        </form>
        <Select value={levelName} onValueChange={setFilter(setLevelName)}>
          <SelectTrigger className="w-56" aria-label="Filter by level">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All levels</SelectItem>
            {activeLevels.map((level) => (
              <SelectItem key={level.name} value={level.name}>
                {level.display_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={kind} onValueChange={(v) => setFilter(setKind)(v as InquiryKind | typeof ALL)}>
          <SelectTrigger className="w-44" aria-label="Filter by kind">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All kinds</SelectItem>
            {INQUIRY_KINDS.map((value) => (
              <SelectItem key={value} value={value}>
                {value === "action" ? "Step-up actions" : "Onboarding"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {inquiries.isError && !inquiries.data ? (
        <ErrorCard error={inquiries.error} onRetry={inquiries.refetch} what="inquiries" />
      ) : (
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">Reference</TableHead>
                  <TableHead>Kind</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Expires</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.isLoading && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-10 text-slate-500">Loading inquiries…</TableCell>
                  </TableRow>
                )}
                {!inquiries.isLoading && rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-10 text-slate-500">No inquiries match these filters.</TableCell>
                  </TableRow>
                )}
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="cursor-pointer"
                    data-testid={`inquiry-row-${row.id}`}
                    onClick={() => router.push(`/dashboard/verification/inquiries/${row.id}`)}
                  >
                    <TableCell className="px-6">
                      <ReferenceLink referenceId={row.reference_id} />
                      <Link
                        href={`/dashboard/verification/inquiries/${row.id}`}
                        className="block text-[10px] text-muted-foreground font-mono hover:underline"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open inquiry ${row.id}`}
                      >
                        {row.id.split("-")[0]}
                        {row.external_action_id && ` · ${row.external_action_id}`}
                      </Link>
                    </TableCell>
                    <TableCell><KindBadge kind={row.kind} /></TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} />
                      {row.reject_type && <div className="text-[10px] text-muted-foreground mt-1">{row.reject_type}</div>}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{formatScore(row.risk_score)}</TableCell>
                    <TableCell className="text-xs">{row.attempt_count}</TableCell>
                    <TableCell className="text-xs">{humanize(row.source)}</TableCell>
                    <TableCell className="text-xs">{row.country_code ?? "—"}</TableCell>
                    <TableCell className="text-xs">{formatDate(row.created_at)}</TableCell>
                    <TableCell className="text-xs">{formatDate(row.expires_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {total > PAGE_SIZE && (
        <div className="flex items-center justify-end gap-3 text-sm">
          <span className="text-muted-foreground">
            {offset + 1}–{Math.min(offset + PAGE_SIZE, total)} of {total}
          </span>
          <Button size="icon" variant="outline" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))} aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" disabled={offset + PAGE_SIZE >= total} onClick={() => setOffset(offset + PAGE_SIZE)} aria-label="Next page">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New inquiry</DialogTitle>
            <DialogDescription>Start a verification for one applicant on an active level.</DialogDescription>
          </DialogHeader>
          {onboardingLevels.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No active onboarding levels. <Link className="underline" href="/dashboard/verification/levels">Create a level</Link> first.
            </p>
          ) : (
            <form id="create-inquiry" onSubmit={create} className="space-y-4">
              <div className="space-y-1.5">
                <Label>Level</Label>
                <Select value={form.level_name} onValueChange={(v) => setForm({ ...form, level_name: v })}>
                  <SelectTrigger aria-label="Level">
                    <SelectValue placeholder="Choose a level" />
                  </SelectTrigger>
                  <SelectContent>
                    {onboardingLevels.map((level) => (
                      <SelectItem key={level.name} value={level.name}>
                        {level.display_name} (v{level.version})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="inq-ref">Reference ID</Label>
                <Input id="inq-ref" required maxLength={255} value={form.reference_id} onChange={(e) => setForm({ ...form, reference_id: e.target.value })} placeholder="Your user ID" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="inq-first">First name</Label>
                  <Input id="inq-first" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-last">Last name</Label>
                  <Input id="inq-last" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-email">Email</Label>
                  <Input id="inq-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-country">Country (ISO-2)</Label>
                  <Input id="inq-country" maxLength={2} value={form.country_code} onChange={(e) => setForm({ ...form, country_code: e.target.value.toUpperCase() })} />
                </div>
              </div>
              {createError && <p className="text-sm text-rose-600" role="alert">{createError}</p>}
            </form>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button type="submit" form="create-inquiry" disabled={creating || !form.level_name || onboardingLevels.length === 0}>
              {creating ? "Creating…" : "Create inquiry"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </VerificationShell>
  );
}
