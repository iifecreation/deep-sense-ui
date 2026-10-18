"use client";

import { useState } from "react";
import { GitBranchPlus, Plus, Power, RefreshCcw } from "lucide-react";
import { toast } from "sonner";
import type { VerificationLevelRead } from "@/lib/api-client/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LevelForm, type LevelFormValue } from "@/components/verification/LevelForm";
import { ErrorCard, KindBadge, VerificationShell, formatDate } from "@/components/verification/VerificationShell";
import { useRiskLists, useVerificationLevels } from "@/hooks/use-verification-flows";
import { describeError, humanize, verificationFlowsService } from "@/services/verification-flows.service";

type DialogState = { mode: "create" } | { mode: "version"; level: VerificationLevelRead } | null;

export default function VerificationLevelsPage() {
  const [includeInactive, setIncludeInactive] = useState(false);
  const levels = useVerificationLevels(includeInactive);
  const riskLists = useRiskLists();
  const [dialog, setDialog] = useState<DialogState>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const openDialog = (state: DialogState) => {
    setSubmitError(null);
    setDialog(state);
  };

  const handleSubmit = async ({ name, kind, body }: LevelFormValue) => {
    if (!dialog) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const level =
        dialog.mode === "create"
          ? await verificationFlowsService.createLevel({ ...body, name, kind })
          : await verificationFlowsService.publishLevelVersion(dialog.level.name, body);
      toast.success(`${level.display_name} v${level.version} is active`);
      setDialog(null);
      await levels.refetch();
    } catch (cause) {
      setSubmitError(describeError(cause, "Failed to save level"));
    } finally {
      setSubmitting(false);
    }
  };

  const deactivate = async (level: VerificationLevelRead) => {
    try {
      await verificationFlowsService.deactivateLevel(level.id);
      toast.success(`${level.name} v${level.version} deactivated`);
      await levels.refetch();
    } catch (cause) {
      toast.error(describeError(cause, "Failed to deactivate level"));
    }
  };

  const rows = levels.data ?? [];

  return (
    <VerificationShell
      title="Verification Levels"
      description="Versioned step recipes. Inquiries stay pinned to the version they started on."
      actions={
        <>
          <Button onClick={() => openDialog({ mode: "create" })}>
            <Plus className="w-3.5 h-3.5 mr-2" /> New level
          </Button>
          <Button size="icon" variant="ghost" onClick={levels.refetch} aria-label="Refresh levels">
            <RefreshCcw className="w-3.5 h-3.5" />
          </Button>
        </>
      }
    >
      <label className="flex items-center gap-2 text-sm self-end">
        <Switch checked={includeInactive} onCheckedChange={setIncludeInactive} aria-label="Show inactive versions" />
        Show inactive versions
      </label>

      {levels.isError && !levels.data ? (
        <ErrorCard error={levels.error} onRetry={levels.refetch} what="levels" />
      ) : (
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">Level</TableHead>
                  <TableHead>Kind</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Steps</TableHead>
                  <TableHead>Auto-approve</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {levels.isLoading && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-10 text-slate-500">Loading levels…</TableCell>
                  </TableRow>
                )}
                {!levels.isLoading && rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-10 text-slate-500">
                      No verification levels yet. Create one to start issuing inquiries.
                    </TableCell>
                  </TableRow>
                )}
                {rows.map((level) => (
                  <TableRow key={level.id} data-testid={`level-row-${level.name}`}>
                    <TableCell className="px-6">
                      <div className="font-bold">{level.display_name}</div>
                      <div className="text-xs text-muted-foreground font-mono">{level.name}</div>
                    </TableCell>
                    <TableCell><KindBadge kind={level.kind} /></TableCell>
                    <TableCell>
                      <span className="font-mono">v{level.version}</span>{" "}
                      {level.is_active ? (
                        <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50 text-[9px] uppercase">Active</Badge>
                      ) : (
                        <Badge variant="outline" className="text-[9px] uppercase">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>{humanize(level.applicant_type)}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-sm">
                        {level.steps.map((step) => (
                          <Badge key={String(step.type)} variant={step.required === false ? "outline" : "secondary"} className="text-[10px]">
                            {humanize(String(step.type))}
                            {step.required === false ? " (optional)" : ""}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      {level.auto_approve_enabled ? `≤ ${level.auto_approve_max_risk_score}` : "Off"}
                      {!level.duplicate_check_enabled && <div className="text-muted-foreground">No duplicate check</div>}
                    </TableCell>
                    <TableCell className="text-xs">{formatDate(level.created_at)}</TableCell>
                    <TableCell className="text-right px-6">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={() => openDialog({ mode: "version", level })}>
                          <GitBranchPlus className="w-3.5 h-3.5 mr-1" /> New version
                        </Button>
                        {level.is_active && (
                          <Button size="sm" variant="ghost" onClick={() => deactivate(level)} aria-label={`Deactivate ${level.name}`}>
                            <Power className="w-3.5 h-3.5" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <Dialog open={dialog !== null} onOpenChange={(open) => !open && setDialog(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {dialog?.mode === "version" ? `Publish new version of ${dialog.level.name}` : "Create verification level"}
            </DialogTitle>
            <DialogDescription>
              {dialog?.mode === "version"
                ? `Starts from v${dialog.level.version}. The new version becomes active immediately; in-flight inquiries keep their version.`
                : "Define the ordered steps an applicant must complete."}
            </DialogDescription>
          </DialogHeader>
          {dialog && (
            <LevelForm
              key={dialog.mode === "version" ? dialog.level.id : "create"}
              mode={dialog.mode}
              initial={dialog.mode === "version" ? dialog.level : undefined}
              riskLists={riskLists.data ?? []}
              submitting={submitting}
              onSubmit={handleSubmit}
              onCancel={() => setDialog(null)}
            />
          )}
          {submitError && <p className="text-sm text-rose-600" role="alert">{submitError}</p>}
        </DialogContent>
      </Dialog>
    </VerificationShell>
  );
}
