"use client";

import { useState } from "react";
import { Archive, Plus, RefreshCcw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { RiskListMatchResponse, RiskListRead } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ErrorCard, StatusBadge, VerificationShell, formatDate } from "@/components/verification/VerificationShell";
import { useRiskListItems, useRiskLists } from "@/hooks/use-verification-flows";
import {
  LIST_ACTIONS,
  LIST_TYPES,
  describeError,
  humanize,
  verificationFlowsService,
  type ListAction,
  type ListType,
} from "@/services/verification-flows.service";

function ListItemsPanel({ list, onArchived }: { list: RiskListRead; onArchived: () => void }) {
  const items = useRiskListItems(list.id);
  const [values, setValues] = useState("");
  const [note, setNote] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [adding, setAdding] = useState(false);
  const archived = list.archived_at !== null;

  const add = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = values.split(/[\n,]/).map((v) => v.trim()).filter(Boolean);
    if (!parsed.length) return;
    setAdding(true);
    try {
      const result = await verificationFlowsService.addRiskListItems(list.id, {
        values: parsed,
        note: note.trim() || null,
        expires_at: expiresAt ? new Date(expiresAt).toISOString() : null,
      });
      toast.success(`${result.created.length} added${result.duplicates ? `, ${result.duplicates} duplicate(s) skipped` : ""}`);
      setValues("");
      setNote("");
      await items.refetch();
    } catch (cause) {
      toast.error(describeError(cause, "Failed to add items"));
    } finally {
      setAdding(false);
    }
  };

  const archiveItem = async (itemId: string) => {
    try {
      await verificationFlowsService.archiveRiskListItem(list.id, itemId);
      await items.refetch();
    } catch (cause) {
      toast.error(describeError(cause));
    }
  };

  const archiveList = async () => {
    try {
      await verificationFlowsService.archiveRiskList(list.id);
      toast.success(`${list.name} archived`);
      onArchived();
    } catch (cause) {
      toast.error(describeError(cause));
    }
  };

  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-base font-black uppercase italic tracking-tight flex items-center gap-2">
            {list.name} <StatusBadge status={list.action} />
          </CardTitle>
          <CardDescription>
            {humanize(list.list_type)} list{list.description ? ` · ${list.description}` : ""}
            {archived && ` · archived ${formatDate(list.archived_at)}`}
          </CardDescription>
        </div>
        {!archived && (
          <Button size="sm" variant="outline" onClick={archiveList}>
            <Archive className="w-3.5 h-3.5 mr-1" /> Archive list
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {!archived && (
          <form onSubmit={add} className="space-y-3" aria-label="Add list items">
            <div className="space-y-1.5">
              <Label htmlFor="list-values">Values (one per line or comma separated)</Label>
              <Textarea id="list-values" rows={3} value={values} onChange={(e) => setValues(e.target.value)} placeholder={list.list_type === "country" ? "RU, KP" : "value"} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="list-note">Note</Label>
                <Input id="list-note" value={note} onChange={(e) => setNote(e.target.value)} maxLength={1000} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="list-expires">Expires at (optional)</Label>
                <Input id="list-expires" type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
              </div>
            </div>
            <Button type="submit" disabled={adding || !values.trim()}>
              <Plus className="w-3.5 h-3.5 mr-1" /> {adding ? "Adding…" : "Add items"}
            </Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground">Values are stored as keyed hashes; only masked previews are shown.</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Value</TableHead>
              <TableHead>Note</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Added</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.isLoading && (
              <TableRow><TableCell colSpan={5} className="text-center text-slate-500">Loading…</TableCell></TableRow>
            )}
            {!items.isLoading && (items.data ?? []).length === 0 && (
              <TableRow><TableCell colSpan={5} className="text-center text-slate-500">No active items.</TableCell></TableRow>
            )}
            {(items.data ?? []).map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs">{item.value_masked}</TableCell>
                <TableCell className="text-xs">{item.note ?? "—"}</TableCell>
                <TableCell className="text-xs">{formatDate(item.expires_at)}</TableCell>
                <TableCell className="text-xs">{formatDate(item.created_at)}</TableCell>
                <TableCell className="text-right">
                  {!archived && (
                    <Button size="icon" variant="ghost" onClick={() => archiveItem(item.id)} aria-label={`Archive ${item.value_masked}`}>
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function MatchTester() {
  const [values, setValues] = useState<Partial<Record<ListType, string>>>({});
  const [result, setResult] = useState<RiskListMatchResponse | null>(null);
  const [running, setRunning] = useState(false);

  const run = async (event: React.FormEvent) => {
    event.preventDefault();
    const filled = Object.fromEntries(Object.entries(values).filter(([, v]) => v?.trim()));
    if (!Object.keys(filled).length) return;
    setRunning(true);
    try {
      setResult(await verificationFlowsService.matchRiskLists({ values: filled }));
    } catch (cause) {
      toast.error(describeError(cause, "Match failed"));
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle className="text-base font-black uppercase italic tracking-tight">Match tester</CardTitle>
        <CardDescription>Check values against all active lists. Deny beats review beats allow.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={run} className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Match tester">
          {LIST_TYPES.map((type) => (
            <div key={type} className="space-y-1">
              <Label htmlFor={`match-${type}`} className="text-xs">{humanize(type)}</Label>
              <Input id={`match-${type}`} value={values[type] ?? ""} onChange={(e) => setValues({ ...values, [type]: e.target.value })} />
            </div>
          ))}
          <div className="sm:col-span-2">
            <Button type="submit" disabled={running}>{running ? "Matching…" : "Run match"}</Button>
          </div>
        </form>
        {result && (
          <div className="space-y-2" data-testid="match-result">
            <div className="flex items-center gap-2 text-sm">Decision: <StatusBadge status={result.decision} /></div>
            {result.hits.length === 0 ? (
              <p className="text-sm text-muted-foreground">No hits.</p>
            ) : (
              <ul className="space-y-1">
                {result.hits.map((hit) => (
                  <li key={hit.item_id} className="text-xs flex items-center gap-2">
                    <StatusBadge status={hit.action} /> {hit.list_name} · {humanize(hit.list_type)} · <span className="font-mono">{hit.value_masked}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function RiskListsPage() {
  const [includeArchived, setIncludeArchived] = useState(false);
  const lists = useRiskLists(includeArchived);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [form, setForm] = useState<{ name: string; list_type: ListType; action: ListAction; description: string }>({
    name: "",
    list_type: "email",
    action: "deny",
    description: "",
  });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const rows = lists.data ?? [];
  const selected = rows.find((list) => list.id === selectedId) ?? rows[0] ?? null;

  const create = async (event: React.FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setCreateError(null);
    try {
      const created = await verificationFlowsService.createRiskList({
        name: form.name.trim(),
        list_type: form.list_type,
        action: form.action,
        description: form.description.trim() || null,
      });
      setCreateOpen(false);
      setForm({ name: "", list_type: "email", action: "deny", description: "" });
      await lists.refetch();
      setSelectedId(created.id);
    } catch (cause) {
      setCreateError(describeError(cause, "Failed to create list"));
    } finally {
      setCreating(false);
    }
  };

  return (
    <VerificationShell
      title="Risk Lists"
      description="Allow, deny and review lists evaluated when an inquiry completes."
      actions={
        <>
          <Button onClick={() => { setCreateError(null); setCreateOpen(true); }}>
            <Plus className="w-3.5 h-3.5 mr-2" /> New list
          </Button>
          <Button size="icon" variant="ghost" onClick={lists.refetch} aria-label="Refresh lists">
            <RefreshCcw className="w-3.5 h-3.5" />
          </Button>
        </>
      }
    >
      <label className="flex items-center gap-2 text-sm self-end">
        <Switch checked={includeArchived} onCheckedChange={setIncludeArchived} aria-label="Show archived lists" />
        Show archived lists
      </label>

      {lists.isError && !lists.data ? (
        <ErrorCard error={lists.error} onRetry={lists.refetch} what="risk lists" />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-6">List</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lists.isLoading && (
                    <TableRow><TableCell colSpan={3} className="text-center py-8 text-slate-500">Loading…</TableCell></TableRow>
                  )}
                  {!lists.isLoading && rows.length === 0 && (
                    <TableRow><TableCell colSpan={3} className="text-center py-8 text-slate-500">No lists yet.</TableCell></TableRow>
                  )}
                  {rows.map((list) => (
                    <TableRow
                      key={list.id}
                      className={`cursor-pointer ${selected?.id === list.id ? "bg-muted" : ""}`}
                      onClick={() => setSelectedId(list.id)}
                      aria-selected={selected?.id === list.id}
                    >
                      <TableCell className="px-6 font-bold">
                        {list.name}
                        {list.archived_at && <span className="text-xs text-muted-foreground"> (archived)</span>}
                      </TableCell>
                      <TableCell className="text-xs">{humanize(list.list_type)}</TableCell>
                      <TableCell><StatusBadge status={list.action} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="xl:col-span-2 space-y-6">
            {selected && <ListItemsPanel key={selected.id} list={selected} onArchived={lists.refetch} />}
            <MatchTester />
          </div>
        </div>
      )}

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New risk list</DialogTitle>
            <DialogDescription>Lists are matched by keyed hash of the normalized value.</DialogDescription>
          </DialogHeader>
          <form id="create-list" onSubmit={create} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="rl-name">Name</Label>
              <Input id="rl-name" required maxLength={128} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Value type</Label>
                <Select value={form.list_type} onValueChange={(v) => setForm({ ...form, list_type: v as ListType })}>
                  <SelectTrigger aria-label="Value type"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {LIST_TYPES.map((type) => <SelectItem key={type} value={type}>{humanize(type)}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Action</Label>
                <Select value={form.action} onValueChange={(v) => setForm({ ...form, action: v as ListAction })}>
                  <SelectTrigger aria-label="Action"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {LIST_ACTIONS.map((action) => <SelectItem key={action} value={action}>{humanize(action)}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rl-description">Description</Label>
              <Textarea id="rl-description" rows={2} maxLength={2000} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            {createError && <p className="text-sm text-rose-600" role="alert">{createError}</p>}
          </form>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button type="submit" form="create-list" disabled={creating}>{creating ? "Creating…" : "Create list"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </VerificationShell>
  );
}
