"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Webhook,
  Clock,
  Plus,
  RefreshCw,
  Trash2,
  Code2,
  Loader2,
  Zap,
  Ban,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWebhooks, useWebhookDeliveries } from "@/hooks";
import { useIntegrations } from "@/hooks/use-integrations";
import { webhooksService } from "@/services/webhooks.service";

const ENDPOINT_STATUS_STYLES: Record<string, string> = {
  active: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  disabled: "border-slate-200 bg-slate-50 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400",
  error: "border-red-200 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

const DELIVERY_STATUS_STYLES: Record<string, string> = {
  delivered: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400",
  failed: "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400",
  dead_letter: "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400",
  pending: "bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
  retrying: "bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
};

const RETRYABLE_STATUSES = ["failed", "dead_letter", "retrying"];

function formatTime(value: string | null | undefined) {
  if (!value) return "—";
  return new Date(value).toLocaleString();
}

export default function WebhooksDashboard() {
  const { data: endpoints, isLoading: endpointsLoading, isError: endpointsError, refetch: refetchEndpoints } = useWebhooks();
  const { data: deliveries, isLoading: logsLoading, isError: logsError, refetch: refetchDeliveries } = useWebhookDeliveries();
  const { data: integrations } = useIntegrations();

  const [selectedLogId, setSelectedLogId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [testingId, setTestingId] = useState<string | null>(null);
  const [disableTarget, setDisableTarget] = useState<any>(null);
  const [disabling, setDisabling] = useState(false);
  const [disableError, setDisableError] = useState<string | null>(null);

  const [retryingLogId, setRetryingLogId] = useState<string | null>(null);
  const [retryingAll, setRetryingAll] = useState(false);

  const [showAddEndpoint, setShowAddEndpoint] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [newEventTypes, setNewEventTypes] = useState("");
  const [newEnvironment, setNewEnvironment] = useState("test");
  const [newSigningEnabled, setNewSigningEnabled] = useState(true);
  const [newIntegrationId, setNewIntegrationId] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [createdSecret, setCreatedSecret] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedLogId && deliveries && deliveries.length > 0) {
      setSelectedLogId(deliveries[0].id);
    }
  }, [deliveries, selectedLogId]);

  const failingDeliveries = (deliveries || []).filter((d: any) => RETRYABLE_STATUSES.includes(d.status));
  const selectedLog = (deliveries || []).find((d: any) => d.id === selectedLogId) || null;

  const endpointUrlFor = (endpointId: string) =>
    (endpoints || []).find((e: any) => e.id === endpointId)?.url || endpointId;

  const resetAddEndpointForm = () => {
    setNewUrl("");
    setNewEventTypes("");
    setNewEnvironment("test");
    setNewSigningEnabled(true);
    setNewIntegrationId("");
    setCreateError(null);
    setCreatedSecret(null);
  };

  const handleCreateEndpoint = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventTypes = newEventTypes
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    if (!newUrl.trim() || eventTypes.length === 0) return;

    setCreating(true);
    setCreateError(null);
    try {
      const res = await webhooksService.create({
        url: newUrl.trim(),
        event_types: eventTypes,
        environment: newEnvironment,
        signing_enabled: newSigningEnabled,
        integration_id: newIntegrationId || null,
      });
      await refetchEndpoints();
      if (res?.signing_secret) {
        setCreatedSecret(res.signing_secret);
      } else {
        setShowAddEndpoint(false);
        resetAddEndpointForm();
      }
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Failed to create webhook endpoint.");
    } finally {
      setCreating(false);
    }
  };

  const handleTest = async (endpoint: any) => {
    setTestingId(endpoint.id);
    setActionMessage(null);
    try {
      const result = await webhooksService.test(endpoint.id);
      setActionMessage({
        type: result?.success ? "success" : "error",
        text: result?.summary || (result?.success ? "Test delivery succeeded." : "Test delivery failed."),
      });
      await Promise.all([refetchEndpoints(), refetchDeliveries()]);
    } catch (err) {
      setActionMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to send test event." });
    } finally {
      setTestingId(null);
    }
  };

  const handleDisableConfirm = async () => {
    if (!disableTarget) return;
    setDisabling(true);
    setDisableError(null);
    try {
      await webhooksService.disable(disableTarget.id);
      await refetchEndpoints();
      setDisableTarget(null);
    } catch (err) {
      setDisableError(err instanceof Error ? err.message : "Failed to disable webhook endpoint.");
    } finally {
      setDisabling(false);
    }
  };

  const handleRetry = async (delivery: any) => {
    setRetryingLogId(delivery.id);
    setActionMessage(null);
    try {
      await webhooksService.replayDelivery(delivery.id);
      setActionMessage({ type: "success", text: "Delivery queued for replay." });
      await refetchDeliveries();
    } catch (err) {
      setActionMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to replay delivery." });
    } finally {
      setRetryingLogId(null);
    }
  };

  const handleRetryAllFailed = async () => {
    if (failingDeliveries.length === 0) return;
    setRetryingAll(true);
    setActionMessage(null);
    try {
      await Promise.all(failingDeliveries.map((d: any) => webhooksService.replayDelivery(d.id)));
      setActionMessage({ type: "success", text: `Queued ${failingDeliveries.length} failed event(s) for replay.` });
      await refetchDeliveries();
    } catch (err) {
      setActionMessage({ type: "error", text: err instanceof Error ? err.message : "Failed to replay some deliveries." });
    } finally {
      setRetryingAll(false);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/integrations" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Developer Hub
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Webhooks & Events
            </h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Configure endpoints to receive real-time intelligence events.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="font-semibold rounded-full shadow-sm"
            onClick={handleRetryAllFailed}
            disabled={retryingAll || failingDeliveries.length === 0}
          >
            {retryingAll ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-2" />}
            Retry Failed Events
          </Button>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white"
            onClick={() => { resetAddEndpointForm(); setShowAddEndpoint(true); }}
          >
            <Plus className="w-4 h-4 mr-2" /> Add Endpoint
          </Button>
        </div>
      </div>

      {actionMessage && (
        <div
          className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
            actionMessage.type === "success"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {actionMessage.text}
          <button onClick={() => setActionMessage(null)} className="ml-4 opacity-60 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <Tabs defaultValue="logs" className="w-full space-y-6">
        <TabsList className="bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-full justify-start h-auto overflow-x-auto">
          <TabsTrigger value="endpoints" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0">Configured Endpoints</TabsTrigger>
          <TabsTrigger value="logs" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0 flex items-center gap-2">
            Delivery Logs
            {failingDeliveries.length > 0 && (
              <Badge variant="destructive" className="px-1.5 py-0 text-[9px] rounded-full">{failingDeliveries.length} Failing</Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="mt-0 space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardContent className="p-0">
              {endpointsLoading ? (
                <div className="p-10 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-300" /></div>
              ) : endpointsError ? (
                <div className="p-10 text-center text-red-500 text-sm">Failed to load webhook endpoints.</div>
              ) : (
                <Table>
                  <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                    <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Endpoint URL</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Subscribed Events</TableHead>
                      <TableHead className="text-right pr-6">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(endpoints || []).length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-10 text-slate-400">No webhook endpoints configured yet.</TableCell>
                      </TableRow>
                    ) : (endpoints || []).map((endpoint: any) => (
                      <TableRow key={endpoint.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                        <TableCell className="pl-6 py-4">
                          <div className="flex flex-col gap-1">
                            <code className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100">{endpoint.url}</code>
                            <span className="text-[10px] text-slate-500">ID: {endpoint.id}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${ENDPOINT_STATUS_STYLES[endpoint.status] || ENDPOINT_STATUS_STYLES.disabled}`}>
                            {endpoint.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {(endpoint.event_types || []).map((ev: string) => (
                              <Badge key={ev} variant="secondary" className="text-[9px] px-1.5 py-0 rounded font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                {ev}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-400 hover:text-indigo-600"
                              onClick={() => handleTest(endpoint)}
                              disabled={testingId === endpoint.id}
                              title="Send test event"
                            >
                              {testingId === endpoint.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50"
                              onClick={() => { setDisableError(null); setDisableTarget(endpoint); }}
                              disabled={endpoint.status === "disabled"}
                              title="Disable endpoint"
                            >
                              <Ban className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-0">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Logs Table */}
            <div className="xl:col-span-2">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden h-full">
                <CardContent className="p-0">
                  {logsLoading ? (
                    <div className="p-10 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-300" /></div>
                  ) : logsError ? (
                    <div className="p-10 text-center text-red-500 text-sm">Failed to load delivery logs.</div>
                  ) : (
                    <Table>
                      <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                        <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                          <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Status</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Event</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Time</TableHead>
                          <TableHead className="text-right pr-6">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {(deliveries || []).length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-10 text-slate-400">No delivery events yet.</TableCell>
                          </TableRow>
                        ) : (deliveries || []).map((log: any) => (
                          <TableRow
                            key={log.id}
                            onClick={() => setSelectedLogId(log.id)}
                            className={`cursor-pointer transition-colors border-slate-100/50 dark:border-slate-800/50 ${selectedLogId === log.id ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'hover:bg-slate-50/80 dark:hover:bg-slate-900/50'}`}
                          >
                            <TableCell className="pl-6 py-4">
                              <Badge className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${DELIVERY_STATUS_STYLES[log.status] || DELIVERY_STATUS_STYLES.pending}`}>
                                {log.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{log.event_type}</span>
                                <span className="text-[10px] text-slate-500 truncate max-w-[200px]">{endpointUrlFor(log.endpoint_id)}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-xs text-slate-500 font-medium">
                              <div className="flex flex-col gap-0.5">
                                <span>{formatTime(log.created_at)}</span>
                                <span className="text-[10px] flex items-center gap-1"><Clock className="w-3 h-3" /> {log.attempt_count} attempt{log.attempt_count === 1 ? '' : 's'}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right pr-6">
                              {RETRYABLE_STATUSES.includes(log.status) ? (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 text-xs font-semibold text-indigo-600"
                                  disabled={retryingLogId === log.id}
                                  onClick={(e) => { e.stopPropagation(); handleRetry(log); }}
                                >
                                  {retryingLogId === log.id ? <Loader2 className="w-3.5 h-3.5 mr-1 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5 mr-1" />}
                                  Retry
                                </Button>
                              ) : (
                                <Button variant="ghost" size="sm" className="h-8 text-xs font-semibold text-indigo-600" onClick={(e) => { e.stopPropagation(); setSelectedLogId(log.id); }}>
                                  View Payload
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Payload Inspector Sidebar */}
            <div className="space-y-6 h-full">
              {selectedLog ? (
                <Card className="rounded-2xl border-slate-200/60 shadow-lg bg-indigo-950 text-white overflow-hidden h-full min-h-[500px] flex flex-col">
                  <CardHeader className="border-b border-white/10 pb-4 shrink-0">
                    <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-50">
                      <Code2 className="w-4 h-4 text-indigo-400" /> Payload Inspector
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={`${DELIVERY_STATUS_STYLES[selectedLog.status] || DELIVERY_STATUS_STYLES.pending} text-[10px] font-mono`}>
                        {selectedLog.response_status ? `${selectedLog.response_status} ` : ""}{selectedLog.status}
                      </Badge>
                      <span className="text-xs font-mono text-indigo-300">{selectedLog.id}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="p-3 bg-black/40 border-b border-white/10 flex justify-between items-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Request Payload</span>
                    </div>
                    <div className="flex-1 p-4 bg-black/20 overflow-y-auto">
                      <pre className="text-[11px] font-mono text-indigo-200 leading-relaxed whitespace-pre-wrap break-all">
                        {selectedLog.payload_json ? JSON.stringify(selectedLog.payload_json, null, 2) : "No payload recorded."}
                      </pre>
                    </div>

                    <div className="p-3 bg-black/40 border-y border-white/10 flex justify-between items-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Response from Server</span>
                    </div>
                    <div className="h-32 p-4 bg-black/20 overflow-y-auto shrink-0">
                      <pre className="text-[11px] font-mono text-emerald-300/80 leading-relaxed whitespace-pre-wrap break-all">
                        {selectedLog.response_body || "No response received yet."}
                      </pre>
                    </div>

                    {RETRYABLE_STATUSES.includes(selectedLog.status) && (
                      <div className="p-3 border-t border-white/10 shrink-0">
                        <Button
                          size="sm"
                          className="w-full bg-indigo-600 hover:bg-indigo-700"
                          disabled={retryingLogId === selectedLog.id}
                          onClick={() => handleRetry(selectedLog)}
                        >
                          {retryingLogId === selectedLog.id ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-2" />}
                          Retry Delivery
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl h-full flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Code2 className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                    <p className="text-sm font-bold text-slate-500">Select a log to view payload</p>
                  </div>
                </Card>
              )}
            </div>

          </div>
        </TabsContent>

      </Tabs>

      {/* Add Endpoint Dialog */}
      <Dialog open={showAddEndpoint} onOpenChange={(open) => { setShowAddEndpoint(open); if (!open) resetAddEndpointForm(); }}>
        <DialogContent className="sm:max-w-md">
          {createdSecret ? (
            <>
              <DialogHeader>
                <DialogTitle>Webhook endpoint created</DialogTitle>
                <DialogDescription>
                  Save this signing secret now — it will not be shown again.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="rounded-xl bg-indigo-950 text-indigo-100 p-4 font-mono text-xs break-all">
                  {createdSecret}
                </div>
              </div>
              <DialogFooter>
                <button
                  type="button"
                  onClick={() => { setShowAddEndpoint(false); resetAddEndpointForm(); }}
                  className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg"
                >
                  Done
                </button>
              </DialogFooter>
            </>
          ) : (
            <form onSubmit={handleCreateEndpoint}>
              <DialogHeader>
                <DialogTitle>Add Webhook Endpoint</DialogTitle>
                <DialogDescription>Receive real-time intelligence events at your own HTTPS endpoint.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                  Endpoint URL
                  <input
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    required
                    placeholder="https://api.yourcompany.com/webhooks/deepsense"
                    className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                  />
                </label>
                <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                  Event Types (comma separated)
                  <input
                    value={newEventTypes}
                    onChange={(e) => setNewEventTypes(e.target.value)}
                    required
                    placeholder="transaction.blocked, case.escalated"
                    className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                  />
                </label>
                <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                  Environment
                  <select
                    value={newEnvironment}
                    onChange={(e) => setNewEnvironment(e.target.value)}
                    className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                  >
                    <option value="test">Test</option>
                    <option value="live">Live</option>
                  </select>
                </label>
                {integrations && integrations.length > 0 && (
                  <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                    Link to Integration (optional)
                    <select
                      value={newIntegrationId}
                      onChange={(e) => setNewIntegrationId(e.target.value)}
                      className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                    >
                      <option value="">None</option>
                      {integrations.map((i: any) => (
                        <option key={i.id} value={i.id}>{i.name}</option>
                      ))}
                    </select>
                  </label>
                )}
                <label className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                  <input
                    type="checkbox"
                    checked={newSigningEnabled}
                    onChange={(e) => setNewSigningEnabled(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300"
                  />
                  Enable HMAC signing
                </label>
                {createError && <p className="text-xs text-red-600">{createError}</p>}
              </div>
              <DialogFooter>
                <button type="button" onClick={() => setShowAddEndpoint(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
                <button type="submit" disabled={creating || !newUrl.trim() || !newEventTypes.trim()} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg disabled:opacity-50">
                  {creating ? "Creating..." : "Create Endpoint"}
                </button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Disable Endpoint Confirmation Dialog */}
      <Dialog open={!!disableTarget} onOpenChange={(open) => { if (!open) setDisableTarget(null); }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-red-600" /> Disable webhook endpoint?
            </DialogTitle>
            <DialogDescription>
              {disableTarget?.url} will stop receiving events. This cannot be undone from this page.
            </DialogDescription>
          </DialogHeader>
          {disableError && <p className="text-xs text-red-600">{disableError}</p>}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDisableTarget(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={disabling}
              onClick={() => void handleDisableConfirm()}
            >
              {disabling ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Ban className="w-4 h-4 mr-2" />}
              Disable Endpoint
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
