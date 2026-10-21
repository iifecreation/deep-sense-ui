"use client";

import { useState } from "react";
import Link from "next/link";
import { Link2, Play, Plus, Trash2, Users } from "lucide-react";
import { toast } from "sonner";
import type { BeneficiaryRead, InquiryRead } from "@/lib/api-client/api";
import { BeneficiaryCreateRole } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ErrorCard, StatusBadge } from "@/components/verification/VerificationShell";
import { describeError, humanize, verificationFlowsService } from "@/services/verification-flows.service";

const CARD_TITLE = "text-base font-black uppercase italic tracking-tight";
const ROLES = Object.values(BeneficiaryCreateRole);
const TERMINAL = ["approved", "declined", "expired"];

const beneficiaryName = (beneficiary: BeneficiaryRead, showPii: boolean): string => {
  if (beneficiary.redacted_at) return "[redacted]";
  if (!showPii || !beneficiary.details) return "Hidden";
  const { first_name, last_name } = beneficiary.details as { first_name?: string; last_name?: string };
  return [first_name, last_name].filter(Boolean).join(" ") || "—";
};

/**
 * The people behind a business applicant. The business can't be approved until every
 * beneficiary in the level's required roles has passed their own KYC.
 */
export function BeneficiariesCard({
  inquiry,
  beneficiaries,
  error,
  onRetry,
  showPii,
  beneficiaryLevelName,
  requiredRoles,
  onChanged,
}: {
  inquiry: InquiryRead;
  beneficiaries: BeneficiaryRead[] | undefined;
  error: unknown;
  onRetry: () => void;
  showPii: boolean;
  beneficiaryLevelName: string | null | undefined;
  requiredRoles: string[];
  onChanged: () => void | Promise<void>;
}) {
  const [addOpen, setAddOpen] = useState(false);
  const [linkFor, setLinkFor] = useState<BeneficiaryRead | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const open = !TERMINAL.includes(inquiry.status) && inquiry.redacted_at === null;
  const relevant = (beneficiaries ?? []).filter((b) => requiredRoles.includes(b.role));
  const unverified = relevant.filter((b) => b.status !== "verified");
  const blocked = requiredRoles.length > 0 && (relevant.length === 0 || unverified.length > 0);

  const run = async (id: string, action: () => Promise<unknown>, success: string, failure: string) => {
    setBusyId(id);
    try {
      await action();
      toast.success(success);
      await onChanged();
    } catch (cause) {
      toast.error(describeError(cause, failure));
    } finally {
      setBusyId(null);
    }
  };

  return (
    <Card className="rounded-3xl" data-testid="beneficiaries-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className={CARD_TITLE}>
          <Users className="inline w-4 h-4 mr-2 -mt-1" />
          Beneficiaries
        </CardTitle>
        {open && (
          <Button size="sm" variant="outline" onClick={() => setAddOpen(true)}>
            <Plus className="w-3.5 h-3.5 mr-1" /> Add
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {error !== undefined && !beneficiaries && <ErrorCard error={error} onRetry={onRetry} what="beneficiaries" />}
        {blocked && inquiry.status !== "approved" && (
          <p className="text-sm rounded-xl border border-amber-200 bg-amber-50 text-amber-900 p-3" data-testid="beneficiaries-blocking">
            {relevant.length === 0
              ? `This business can't be approved until at least one ${requiredRoles.map(humanize).join(" or ")} is added and verified.`
              : `This business can't be approved until ${unverified.length} required beneficiar${unverified.length === 1 ? "y has" : "ies have"} passed their own verification.`}
          </p>
        )}
        {beneficiaries?.length === 0 && <p className="text-sm text-muted-foreground">No beneficiaries yet.</p>}
        {beneficiaries && beneficiaries.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Ownership</TableHead>
                <TableHead>KYC</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {beneficiaries.map((beneficiary) => {
                const busy = busyId === beneficiary.id;
                const canStart =
                  open && (!beneficiary.person_inquiry_id || beneficiary.status === "expired") && !!beneficiaryLevelName;
                return (
                  <TableRow key={beneficiary.id} data-testid={`beneficiary-${beneficiary.id}`}>
                    <TableCell className="text-sm">
                      {beneficiaryName(beneficiary, showPii)}
                      {beneficiary.source === "ubo_declaration" && (
                        <span className="ml-2 text-[10px] uppercase tracking-widest text-muted-foreground">declared</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm">
                      {humanize(beneficiary.role)}
                      {requiredRoles.includes(beneficiary.role) && (
                        <span className="ml-1 text-[10px] uppercase tracking-widest text-amber-700">required</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm">
                      {beneficiary.ownership_pct !== null ? `${beneficiary.ownership_pct}%` : "—"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StatusBadge status={beneficiary.status} />
                        {beneficiary.person_inquiry_id && (
                          <Link
                            className="underline font-mono text-xs"
                            href={`/dashboard/verification/inquiries/${beneficiary.person_inquiry_id}`}
                          >
                            Open
                          </Link>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right space-x-1 whitespace-nowrap">
                      {canStart && (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={busy}
                          onClick={() =>
                            run(
                              beneficiary.id,
                              () => verificationFlowsService.startBeneficiaryKyc(inquiry.id, beneficiary.id),
                              "KYC inquiry created. Send the person a one-time link from it.",
                              "Could not start KYC",
                            )
                          }
                        >
                          <Play className="w-3.5 h-3.5 mr-1" /> Start KYC
                        </Button>
                      )}
                      {open && !beneficiary.person_inquiry_id && (
                        <Button size="sm" variant="outline" disabled={busy} onClick={() => setLinkFor(beneficiary)}>
                          <Link2 className="w-3.5 h-3.5 mr-1" /> Link
                        </Button>
                      )}
                      {open && (
                        <Button
                          size="sm"
                          variant="ghost"
                          aria-label="Remove beneficiary"
                          disabled={busy}
                          onClick={() =>
                            run(
                              beneficiary.id,
                              () => verificationFlowsService.removeBeneficiary(inquiry.id, beneficiary.id),
                              "Beneficiary removed",
                              "Could not remove beneficiary",
                            )
                          }
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
        {open && !beneficiaryLevelName && (
          <p className="text-xs text-muted-foreground">
            Set a beneficiary level on this business level to start KYC for beneficiaries from here.
          </p>
        )}
      </CardContent>
      <AddBeneficiaryDialog inquiryId={inquiry.id} open={addOpen} onOpenChange={setAddOpen} onAdded={onChanged} />
      <LinkBeneficiaryDialog
        inquiryId={inquiry.id}
        beneficiary={linkFor}
        onClose={() => setLinkFor(null)}
        onLinked={onChanged}
      />
    </Card>
  );
}

function AddBeneficiaryDialog({
  inquiryId,
  open,
  onOpenChange,
  onAdded,
}: {
  inquiryId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdded: () => void | Promise<void>;
}) {
  const [role, setRole] = useState<BeneficiaryCreateRole>("ubo");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ownership, setOwnership] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      await verificationFlowsService.addBeneficiary(inquiryId, {
        role,
        first_name: firstName.trim(),
        last_name: lastName.trim() || null,
        email: email.trim() || null,
        ownership_pct: ownership ? Number(ownership) : null,
      });
      toast.success("Beneficiary added");
      setFirstName("");
      setLastName("");
      setEmail("");
      setOwnership("");
      onOpenChange(false);
      await onAdded();
    } catch (cause) {
      toast.error(describeError(cause, "Could not add beneficiary"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={submit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Add beneficiary</DialogTitle>
            <DialogDescription>
              A beneficial owner, director, shareholder or representative of this business.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="beneficiary-role">Role</Label>
            <Select value={role} onValueChange={(value) => setRole(value as BeneficiaryCreateRole)}>
              <SelectTrigger id="beneficiary-role" aria-label="Role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((value) => (
                  <SelectItem key={value} value={value}>
                    {humanize(value)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="beneficiary-first-name">First name</Label>
              <Input id="beneficiary-first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="beneficiary-last-name">Last name</Label>
              <Input id="beneficiary-last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="beneficiary-email">Email</Label>
              <Input id="beneficiary-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="beneficiary-ownership">Ownership %</Label>
              <Input
                id="beneficiary-ownership"
                type="number"
                min={0.01}
                max={100}
                step="0.01"
                value={ownership}
                onChange={(e) => setOwnership(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={busy || !firstName.trim()}>
              Add beneficiary
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function LinkBeneficiaryDialog({
  inquiryId,
  beneficiary,
  onClose,
  onLinked,
}: {
  inquiryId: string;
  beneficiary: BeneficiaryRead | null;
  onClose: () => void;
  onLinked: () => void | Promise<void>;
}) {
  const [personInquiryId, setPersonInquiryId] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!beneficiary) return;
    setBusy(true);
    try {
      await verificationFlowsService.linkBeneficiary(inquiryId, beneficiary.id, personInquiryId.trim());
      toast.success("KYC inquiry linked");
      setPersonInquiryId("");
      onClose();
      await onLinked();
    } catch (cause) {
      toast.error(describeError(cause, "Could not link inquiry"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={beneficiary !== null} onOpenChange={(next) => !next && onClose()}>
      <DialogContent>
        <form onSubmit={submit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Link an existing KYC inquiry</DialogTitle>
            <DialogDescription>
              Use the ID of an individual onboarding inquiry this person has already started or passed.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label htmlFor="person-inquiry-id">Inquiry ID</Label>
            <Input
              id="person-inquiry-id"
              value={personInquiryId}
              onChange={(e) => setPersonInquiryId(e.target.value)}
              placeholder="00000000-0000-0000-0000-000000000000"
              required
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={busy || !personInquiryId.trim()}>
              Link
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
