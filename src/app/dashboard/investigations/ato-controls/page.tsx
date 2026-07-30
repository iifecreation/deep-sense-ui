"use client";

import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Laptop,
  Loader2,
  LogOut,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type ATOSession,
  type TrustedDevice,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

function formatDate(value: string | null): string {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Account Takeover protection is disabled for this organization."
      : "Permission denied. ATO operator access is required.";
  }
  return error instanceof Error ? error.message : "ATO controls are unavailable.";
}

export default function ATOControlsPage() {
  const [accountId, setAccountId] = useState("");
  const [devices, setDevices] = useState<TrustedDevice[]>([]);
  const [sessions, setSessions] = useState<ATOSession[]>([]);
  const [fingerprint, setFingerprint] = useState("");
  const [reason, setReason] = useState("");
  const [trustDays, setTrustDays] = useState(90);
  const [provider, setProvider] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionKey, setActionKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = async () => {
    if (!accountId.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const [deviceRows, sessionRows] = await Promise.all([
        riskDecisionsService.trustedDevices(accountId.trim()),
        riskDecisionsService.sessions(accountId.trim()),
      ]);
      setDevices(deviceRows);
      setSessions(sessionRows);
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setLoading(false);
    }
  };

  const trust = async (event: FormEvent) => {
    event.preventDefault();
    setActionKey("trust");
    setError(null);
    setSuccess(null);
    try {
      await riskDecisionsService.trustDevice(
        accountId.trim(),
        fingerprint.trim(),
        trustDays,
        reason.trim(),
      );
      setFingerprint("");
      setReason("");
      await load();
      setSuccess("Device trust is active and the operator action was audited.");
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setActionKey(null);
    }
  };

  const revokeDevice = async (deviceId: string) => {
    const actionReason = window.prompt("Reason for revoking device trust");
    if (!actionReason || actionReason.trim().length < 3) return;
    setActionKey(`device-${deviceId}`);
    setError(null);
    setSuccess(null);
    try {
      await riskDecisionsService.revokeDevice(deviceId, actionReason.trim());
      await load();
      setSuccess("Device trust revocation confirmed by the backend and audited.");
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setActionKey(null);
    }
  };

  const revokeSession = async (sessionId: string) => {
    const actionReason = window.prompt("Reason for revoking this active session");
    if (!actionReason || actionReason.trim().length < 3) return;
    setActionKey(`session-${sessionId}`);
    setError(null);
    setSuccess(null);
    try {
      const result = await riskDecisionsService.revokeSession(
        sessionId,
        accountId.trim(),
        actionReason.trim(),
        provider.trim() || undefined,
      );
      await load();
      if (result.status === "completed") {
        setSuccess("Local session revocation completed and was audited.");
      } else if (result.status === "provider_not_configured") {
        setError(
          "Provider not configured. The external identity-provider session was not claimed as revoked.",
        );
      } else {
        setSuccess(`Revocation is ${result.status.replaceAll("_", " ")}; refresh for authoritative state.`);
      }
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setActionKey(null);
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 pb-16">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Account Takeover operator workflow
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Trusted devices and sessions</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Inspect tenant-scoped device trust and login sessions. External revocation remains
          recommended or provider-not-configured until a real adapter acknowledges it.
        </p>
      </header>

      <Card className="border-slate-200">
        <CardContent className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)_auto]">
          <label className="space-y-1 text-xs font-semibold text-slate-600">
            Account UUID
            <input
              value={accountId}
              onChange={(event) => setAccountId(event.target.value)}
              placeholder="Tenant account identifier"
              className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
            />
          </label>
          <label className="space-y-1 text-xs font-semibold text-slate-600">
            Session-revocation provider (optional)
            <input
              value={provider}
              onChange={(event) => setProvider(event.target.value)}
              placeholder="Configured adapter name"
              className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
            />
          </label>
          <Button className="self-end" onClick={() => void load()} disabled={loading || !accountId.trim()}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RefreshCw className="mr-2 h-4 w-4" />}
            Load controls
          </Button>
        </CardContent>
      </Card>

      {error ? (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" /> {error}
        </div>
      ) : null}
      {success ? (
        <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" /> {success}
        </div>
      ) : null}

      {accountId && !loading ? (
        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> Trust a device
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={trust} className="space-y-3">
                  <label className="space-y-1 text-xs font-semibold text-slate-600">
                    Device fingerprint
                    <input
                      value={fingerprint}
                      onChange={(event) => setFingerprint(event.target.value)}
                      required
                      minLength={16}
                      placeholder="Opaque provider/client fingerprint"
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                    />
                  </label>
                  <label className="space-y-1 text-xs font-semibold text-slate-600">
                    Trust duration (days)
                    <input
                      type="number"
                      value={trustDays}
                      min={1}
                      max={365}
                      onChange={(event) => setTrustDays(Number(event.target.value))}
                      className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                    />
                  </label>
                  <label className="space-y-1 text-xs font-semibold text-slate-600">
                    Operator reason
                    <textarea
                      value={reason}
                      onChange={(event) => setReason(event.target.value)}
                      required
                      minLength={3}
                      className="min-h-20 w-full rounded-md border border-slate-200 p-3 text-sm"
                    />
                  </label>
                  <Button
                    type="submit"
                    disabled={actionKey === "trust" || fingerprint.trim().length < 16 || reason.trim().length < 3}
                  >
                    {actionKey === "trust" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Confirm device trust
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Laptop className="h-4 w-4 text-violet-600" /> Trusted devices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {devices.length ? devices.map((device) => (
                  <div key={device.id} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-xs font-bold text-slate-900">
                          {device.fingerprint_display}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Expires {formatDate(device.expires_at)}
                        </p>
                      </div>
                      <Badge variant={device.is_active ? "default" : "outline"}>
                        {device.is_active ? "active" : "revoked or expired"}
                      </Badge>
                    </div>
                    {device.is_active ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        onClick={() => void revokeDevice(device.id)}
                        disabled={actionKey === `device-${device.id}`}
                      >
                        Revoke trust
                      </Button>
                    ) : (
                      <p className="mt-3 text-xs text-slate-500">
                        {device.revocation_reason || "Trust is no longer active."}
                      </p>
                    )}
                  </div>
                )) : (
                  <p className="text-sm text-slate-500">No trusted devices for this account.</p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <LogOut className="h-4 w-4 text-red-600" /> Login and session timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessions.length ? sessions.map((session) => (
                <div key={session.session_id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <p className="break-all font-mono text-xs font-bold text-slate-900">
                        {session.session_id}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        {formatDate(session.login_at)} · {session.ip_country || "country unknown"} ·
                        score {Math.round(session.risk_score * 100)}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Device {session.device_fingerprint_display || "not supplied"} ·{" "}
                        {session.outcome.replaceAll("_", " ")}
                      </p>
                    </div>
                    <Badge variant={session.revocation_status === "completed" ? "outline" : "default"}>
                      {session.revocation_status}
                    </Badge>
                  </div>
                  {session.revocation_status === "active" ? (
                    <Button
                      variant="destructive"
                      size="sm"
                      className="mt-4"
                      onClick={() => void revokeSession(session.session_id)}
                      disabled={actionKey === `session-${session.session_id}`}
                    >
                      {actionKey === `session-${session.session_id}` ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Request revocation
                    </Button>
                  ) : (
                    <p className="mt-3 text-xs text-slate-500">
                      Authoritative revocation recorded {formatDate(session.revoked_at)}.
                    </p>
                  )}
                </div>
              )) : (
                <p className="text-sm text-slate-500">
                  No persisted login sessions found. Challenge and alert history remains on linked investigations.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  );
}
