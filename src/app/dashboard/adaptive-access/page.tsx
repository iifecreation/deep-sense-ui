"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ShieldAlert,
  Siren,
  AlertTriangle,
  Key,
  Plus,
  Activity,
  User,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  adaptiveAccessService,
  type AccessDecision,
  type HoneytokenAlert,
  type HoneytokenAsset,
} from "@/services/adaptive-access.service";

const TOKEN_TYPES = [
  { value: "api_key", label: "API Key" },
  { value: "db_record", label: "DB Record" },
  { value: "file", label: "File" },
  { value: "url", label: "URL" },
  { value: "email_address", label: "Email Address" },
  { value: "credential", label: "Credential" },
];

function formatAgo(value: string | null): string {
  if (!value) return "—";
  const diffMs = Date.now() - new Date(value).getTime();
  const sec = Math.max(0, Math.floor(diffMs / 1000));
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  return `${Math.floor(hr / 24)}d ago`;
}

function DecisionBadge({ decision }: { decision: string }) {
  const map: Record<string, string> = {
    allow: "bg-emerald-50 border-emerald-200 text-emerald-700",
    challenge: "bg-amber-50 border-amber-200 text-amber-700",
    deny: "bg-red-50 border-red-200 text-red-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${map[decision] || "bg-slate-50 border-slate-200 text-slate-600"}`}>
      {decision}
    </span>
  );
}

export default function AdaptiveAccessPage() {
  const [activeTab, setActiveTab] = useState<"decisions" | "honeytokens" | "assets">("decisions");

  const [decisions, setDecisions] = useState<AccessDecision[]>([]);
  const [alerts, setAlerts] = useState<HoneytokenAlert[]>([]);
  const [alertsTotal, setAlertsTotal] = useState(0);
  const [assets, setAssets] = useState<HoneytokenAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [deployOpen, setDeployOpen] = useState(false);
  const [tokenType, setTokenType] = useState(TOKEN_TYPES[0].value);
  const [tokenLabel, setTokenLabel] = useState("");
  const [deploymentContext, setDeploymentContext] = useState("");
  const [deploying, setDeploying] = useState(false);
  const [deployError, setDeployError] = useState<string | null>(null);
  const [deploySuccess, setDeploySuccess] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [decisionsRes, alertsRes, assetsRes] = await Promise.all([
        adaptiveAccessService.listDecisions({ limit: 100 }),
        adaptiveAccessService.listHoneytokenAlerts({ limit: 100 }),
        adaptiveAccessService.listHoneytokenAssets({ limit: 100 }),
      ]);
      setDecisions(decisionsRes.items);
      setAlerts(alertsRes.items);
      setAlertsTotal(alertsRes.total);
      setAssets(assetsRes.items);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to load adaptive access data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const overridesCount = decisions.filter((d) => d.ueba_override_applied).length;
  const challengesCount = decisions.filter((d) => d.final_decision === "challenge").length;
  const deniesCount = decisions.filter((d) => d.final_decision === "deny").length;

  const tabs = [
    { id: "decisions", label: "Access Decisions", icon: ShieldAlert },
    { id: "honeytokens", label: "Honeytoken Alerts", icon: Siren },
    { id: "assets", label: "Active Tokens", icon: Key },
  ] as const;

  const openDeployDialog = () => {
    setTokenType(TOKEN_TYPES[0].value);
    setTokenLabel("");
    setDeploymentContext("");
    setDeployError(null);
    setDeploySuccess(null);
    setDeployOpen(true);
  };

  const confirmDeploy = async () => {
    if (!tokenLabel.trim()) return;
    setDeploying(true);
    setDeployError(null);
    setDeploySuccess(null);
    try {
      const asset = await adaptiveAccessService.createHoneytoken({
        token_type: tokenType,
        label: tokenLabel.trim(),
        deployment_context: deploymentContext.trim() || undefined,
      });
      setDeploySuccess(`Honeytoken "${asset.label}" deployed. ${asset.warning}`);
      setTokenLabel("");
      setDeploymentContext("");
      await load();
    } catch (cause) {
      setDeployError(cause instanceof Error ? cause.message : "Failed to deploy honeytoken.");
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Adaptive Access & Deception</h1>
          </div>
          <p className="text-sm text-slate-500">Real-time RBAC × UEBA · Step-up challenges · Honeytoken monitoring</p>
        </div>
        <button
          onClick={openDeployDialog}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Deploy Honeytoken
        </button>
      </div>

      {error ? (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" /> {error}
        </div>
      ) : null}

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "UEBA Overrides", value: loading ? "…" : String(overridesCount), sub: "in recent decisions", color: "text-amber-600" },
          { label: "Challenges Issued", value: loading ? "…" : String(challengesCount), sub: "MFA + biometric", color: "text-blue-600" },
          { label: "Denies (UEBA)", value: loading ? "…" : String(deniesCount), sub: "blocked by risk score", color: "text-red-600" },
          { label: "Honeytoken Alerts", value: loading ? "…" : String(alertsTotal), sub: "active incidents", color: "text-orange-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-xs text-slate-500 font-medium mb-2">{stat.label}</div>
            <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-slate-400 mt-1">{stat.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id ? "bg-white text-orange-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "decisions" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Real-Time Access Decisions (RBAC × UEBA)</h3>
          </div>
          {loading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : decisions.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No access decisions have been recorded yet.</p>
          ) : (
            <div className="divide-y divide-slate-50">
              {decisions.map((dec) => (
                <div key={dec.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-slate-900">{dec.user_id}</span>
                      <span className="text-[10px] text-slate-400">{dec.resource_type} · {dec.action}</span>
                      {dec.ueba_override_applied && <span className="text-[9px] font-bold text-orange-600 uppercase tracking-wide">UEBA override</span>}
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400">
                      <span>UEBA {dec.ueba_score_at_decision != null ? dec.ueba_score_at_decision.toFixed(2) : "n/a"}</span>
                      {dec.challenge_type && <span>challenge: {dec.challenge_type.replace("_", " ")}</span>}
                      <span>{formatAgo(dec.decided_at)}</span>
                    </div>
                  </div>
                  <DecisionBadge decision={dec.final_decision} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "honeytokens" && (
        <div className="space-y-3">
          {loading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : alerts.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No honeytoken access alerts have been triggered yet.</p>
          ) : (
            alerts.map((alert) => {
              const asset = assets.find((a) => a.id === alert.asset_id);
              return (
                <div key={alert.id} className={`border rounded-xl p-5 ${alert.alert_severity === "critical" ? "border-red-300 bg-red-50/30" : "border-orange-200 bg-orange-50/20"}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${alert.alert_severity === "critical" ? "bg-red-100" : "bg-orange-100"}`}>
                        <Siren className={`w-4 h-4 ${alert.alert_severity === "critical" ? "text-red-600" : "text-orange-600"}`} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{asset?.label || alert.asset_id}</div>
                        <div className="text-[10px] text-slate-500">{formatAgo(alert.triggered_at)}</div>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                      alert.alert_severity === "critical" ? "bg-red-100 border-red-200 text-red-700" : "bg-orange-100 border-orange-200 text-orange-700"
                    }`}>
                      {alert.alert_severity}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-600">
                    {alert.threat_type && <span>Threat: <strong>{alert.threat_type.replace("_", " ")}</strong></span>}
                    {alert.accessing_entity_id && <span>Entity: <strong>{alert.accessing_entity_id}</strong></span>}
                    {alert.ueba_risk_elevated && (
                      <span className="flex items-center gap-1 text-orange-600 font-bold">
                        <Activity className="w-3 h-3" /> UEBA risk elevated
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === "assets" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Active Honeytoken Assets</h3>
            <button
              onClick={openDeployDialog}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Plus className="w-3 h-3" /> New Token
            </button>
          </div>
          {loading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : assets.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No honeytoken assets have been deployed yet.</p>
          ) : (
            <div className="divide-y divide-slate-50">
              {assets.map((asset) => (
                <div key={asset.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Key className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900">{asset.label}</div>
                    <div className="text-[10px] text-slate-400">{asset.token_type} · {asset.deployment_context || "no deployment context"}</div>
                  </div>
                  <div className={`text-xs font-black ${asset.total_access_count > 0 ? "text-red-600" : "text-slate-300"}`}>
                    {asset.total_access_count} access{asset.total_access_count !== 1 ? "es" : ""}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                    asset.is_active ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}>
                    {asset.is_active ? "ACTIVE" : "INACTIVE"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Dialog open={deployOpen} onOpenChange={setDeployOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deploy a honeytoken asset</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {deployError ? (
              <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                <AlertTriangle className="h-4 w-4 shrink-0" /> {deployError}
              </div>
            ) : null}
            {deploySuccess ? (
              <div className="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {deploySuccess}
              </div>
            ) : null}
            <div className="space-y-1.5">
              <Label>Token type</Label>
              <Select value={tokenType} onValueChange={setTokenType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TOKEN_TYPES.map((t) => (
                    <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Label</Label>
              <Input
                value={tokenLabel}
                onChange={(e) => setTokenLabel(e.target.value)}
                placeholder="e.g. AWS Prod Key (canary)"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Deployment context (optional)</Label>
              <Input
                value={deploymentContext}
                onChange={(e) => setDeploymentContext(e.target.value)}
                placeholder="e.g. S3 bucket config"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeployOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void confirmDeploy()} disabled={deploying || !tokenLabel.trim()}>
              {deploying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Deploy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
