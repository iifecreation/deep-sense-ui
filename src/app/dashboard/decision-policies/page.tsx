"use client";

import React, { useState } from "react";
import {
  Scale,
  Plus,
  CheckCircle2,
  FlaskConical,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDecisionPolicies, useDecisionPolicyVersions } from "@/hooks";
import { decisionPoliciesService, DecisionPolicy, DecisionSimulateResponse } from "@/services/decision-policies.service";
import { LoadErrorCard } from "@/components/common/LoadErrorCard";

function formatDate(value?: string | null): string {
  if (!value) return "Never";
  return new Date(value).toLocaleString();
}

function getStatusColor(status: string) {
  switch (status) {
    case 'active': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
    case 'draft': return 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
    case 'retired': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
    default: return 'bg-slate-400/10 text-slate-400 border border-slate-400/20';
  }
}

function PolicyVersionsCard({ policy }: { policy: DecisionPolicy }) {
  const { data: versions, isLoading, isError, refetch } = useDecisionPolicyVersions(policy.id);

  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ block_threshold: "0.65", review_threshold: "0.30", notes: "" });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [activatingId, setActivatingId] = useState<string | null>(null);

  const handleCreate = async () => {
    const block = parseFloat(form.block_threshold);
    const review = parseFloat(form.review_threshold);
    if (Number.isNaN(block) || Number.isNaN(review)) {
      setSaveError("Thresholds must be numbers between 0 and 1.");
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      await decisionPoliciesService.createVersion(policy.id, {
        block_threshold: block,
        review_threshold: review,
        notes: form.notes || undefined,
      });
      setShowCreate(false);
      setForm({ block_threshold: "0.65", review_threshold: "0.30", notes: "" });
      await refetch();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to create version.");
    } finally {
      setSaving(false);
    }
  };

  const handleActivate = async (versionId: string) => {
    setActivatingId(versionId);
    try {
      await decisionPoliciesService.activateVersion(versionId);
      await refetch();
    } finally {
      setActivatingId(null);
    }
  };

  return (
    <Card className="rounded-2xl border">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-bold italic text-neutral-900 dark:text-white">
              {policy.name}
            </CardTitle>
            <CardDescription className="text-sm">
              Slug: {policy.slug} · Updated {formatDate(policy.updated_at)}
            </CardDescription>
          </div>
          <Button size="sm" onClick={() => setShowCreate(true)} className="bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic">
            <Plus className="w-3.5 h-3.5 mr-2" />
            New Version
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-24 bg-slate-100 animate-pulse rounded" />
        ) : isError ? (
          <div className="text-center text-red-600 py-6 text-sm">Failed to load versions.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Version</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Status</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Block ≥</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Review ≥</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Notes</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Activated</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(versions || []).map((v) => (
                <TableRow key={v.id}>
                  <TableCell className="font-bold text-sm">v{v.version_number}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(v.status)}>{v.status}</Badge>
                  </TableCell>
                  <TableCell className="font-bold text-sm">{v.block_threshold.toFixed(2)}</TableCell>
                  <TableCell className="font-bold text-sm">{v.review_threshold.toFixed(2)}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-xs truncate">{v.notes || "—"}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{formatDate(v.activated_at)}</TableCell>
                  <TableCell className="text-right">
                    {v.status === "draft" ? (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={activatingId === v.id}
                        onClick={() => void handleActivate(v.id)}
                      >
                        {activatingId === v.id ? "Activating..." : "Activate"}
                      </Button>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
              {(versions || []).length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No versions yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <Dialog open={showCreate} onOpenChange={(open) => { if (!open) { setShowCreate(false); setSaveError(null); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New version for {policy.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Block Threshold (0–1)</label>
              <Input
                type="number" step="0.01" min="0" max="1"
                value={form.block_threshold}
                onChange={(e) => setForm((f) => ({ ...f, block_threshold: e.target.value }))}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Review Threshold (0–1, must be ≤ block)</label>
              <Input
                type="number" step="0.01" min="0" max="1"
                value={form.review_threshold}
                onChange={(e) => setForm((f) => ({ ...f, review_threshold: e.target.value }))}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Notes</label>
              <Textarea
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              />
            </div>
          </div>
          {saveError ? <p className="text-xs text-red-600">{saveError}</p> : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreate(false)}>Cancel</Button>
            <Button onClick={() => void handleCreate()} disabled={saving} className="bg-neutral-900 hover:bg-neutral-800">
              {saving ? "Creating..." : "Create Draft Version"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

function SimulateCard() {
  const [score, setScore] = useState("0.5");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<DecisionSimulateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSimulate = async () => {
    const final_score = parseFloat(score);
    if (Number.isNaN(final_score) || final_score < 0 || final_score > 1) {
      setError("Score must be a number between 0 and 1.");
      return;
    }
    setRunning(true);
    setError(null);
    setResult(null);
    try {
      const res = await decisionPoliciesService.simulate({ final_score, dry_run: true });
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Simulation failed.");
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-2xl border">
      <CardHeader>
        <CardTitle className="text-lg font-bold italic text-neutral-900 dark:text-white flex items-center gap-2">
          <FlaskConical className="w-4 h-4" />
          Simulate Against Active Policy
        </CardTitle>
        <CardDescription className="text-sm">
          Preview the allow/review/block outcome for a fused risk score under the active thresholds.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3 items-end">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Final Score (0–1)</label>
            <Input
              type="number" step="0.01" min="0" max="1"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="w-40"
            />
          </div>
          <Button onClick={() => void handleSimulate()} disabled={running}>
            {running ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            {running ? "Running..." : "Run Simulation"}
          </Button>
        </div>
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
        {result ? (
          <div className="p-4 bg-muted/30 border border-border/50 rounded-xl flex items-center gap-4">
            <Badge className={result.outcome === 'block' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : result.outcome === 'review' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}>
              {result.outcome.toUpperCase()}
            </Badge>
            <span className="text-sm text-muted-foreground">
              score {result.final_score.toFixed(2)} vs. review ≥ {result.review_threshold.toFixed(2)}, block ≥ {result.block_threshold.toFixed(2)}
            </span>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function DecisionPoliciesPage() {
  const { data: policies, isLoading, isError, error, refetch } = useDecisionPolicies();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Decision Policies<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="p-6">
                <div className="h-32 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Decision Policies<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <LoadErrorCard error={error} what="decision policies" onRetry={() => refetch()} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Page Header */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Decision Policies<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">
              Versioned allow/review/block thresholds applied after fusion scoring
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Total Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {policies?.length || 0}
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              How thresholds apply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground leading-relaxed">
              score ≥ block → BLOCK · score ≥ review → REVIEW · else ALLOW
            </p>
          </CardContent>
        </Card>
      </div>

      {(policies || []).map((policy) => (
        <PolicyVersionsCard key={policy.id} policy={policy} />
      ))}
      {(policies || []).length === 0 && (
        <Card className="rounded-2xl border">
          <CardContent className="text-center text-muted-foreground py-12">
            No decision policies configured for this organization.
          </CardContent>
        </Card>
      )}

      <SimulateCard />
    </div>
  );
}
