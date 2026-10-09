"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Eye,
  Siren,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronRight,
  Key,
  Plus,
  Activity,
  User,
} from "lucide-react";

const accessDecisions = [
  { id: "ad1", userId: "USR-4421", resource: "admin_panel", action: "write", staticAllowed: true, uebaScore: 0.73, override: true, decision: "challenge", challenge: "mfa_totp", ago: "30s ago" },
  { id: "ad2", userId: "USR-2201", resource: "report", action: "export", staticAllowed: true, uebaScore: 0.31, override: false, decision: "allow", challenge: null, ago: "2m ago" },
  { id: "ad3", userId: "USR-8812", resource: "case", action: "delete", staticAllowed: false, uebaScore: 0.89, override: true, decision: "deny", challenge: null, ago: "5m ago" },
  { id: "ad4", userId: "USR-1122", resource: "config", action: "write", staticAllowed: true, uebaScore: 0.62, override: true, decision: "challenge", challenge: "biometric_step_up", ago: "11m ago" },
];

const honeytokenAlerts = [
  { id: "ht1", label: "API Key / Prod Infra", type: "api_key", entityType: "user", entityId: "USR-8812", severity: "critical", threat: "insider_threat", uebaElevated: true, ago: "8m ago" },
  { id: "ht2", label: "DB Record / CRM Export", type: "db_record", entityType: "api_key", entityId: null, severity: "high", threat: "credential_stuffing", uebaElevated: false, ago: "2h ago" },
];

const honeytokenAssets = [
  { id: "ht1", type: "api_key", label: "AWS Prod Key (canary)", accesses: 1, active: true, deployedIn: "S3 bucket config" },
  { id: "ht2", type: "db_record", label: "CRM VIP Record", accesses: 1, active: true, deployedIn: "CRM export table" },
  { id: "ht3", type: "credential", label: "Admin Password (fake)", accesses: 0, active: true, deployedIn: "Internal wiki" },
];

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

  const tabs = [
    { id: "decisions", label: "Access Decisions", icon: ShieldAlert },
    { id: "honeytokens", label: "Honeytoken Alerts", icon: Siren },
    { id: "assets", label: "Active Tokens", icon: Key },
  ] as const;

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
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors">
          <Plus className="w-3.5 h-3.5" />
          Deploy Honeytoken
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "UEBA Overrides", value: "12", sub: "last hour", color: "text-amber-600" },
          { label: "Challenges Issued", value: "8", sub: "MFA + biometric", color: "text-blue-600" },
          { label: "Denies (UEBA)", value: "3", sub: "blocked by risk score", color: "text-red-600" },
          { label: "Honeytoken Alerts", value: "2", sub: "active incidents", color: "text-orange-600" },
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
          <div className="divide-y divide-slate-50">
            {accessDecisions.map((dec) => (
              <div key={dec.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-slate-900">{dec.userId}</span>
                    <span className="text-[10px] text-slate-400">{dec.resource} · {dec.action}</span>
                    {dec.override && <span className="text-[9px] font-bold text-orange-600 uppercase tracking-wide">UEBA override</span>}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span>UEBA {dec.uebaScore.toFixed(2)}</span>
                    {dec.challenge && <span>challenge: {dec.challenge.replace("_", " ")}</span>}
                    <span>{dec.ago}</span>
                  </div>
                </div>
                <DecisionBadge decision={dec.decision} />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "honeytokens" && (
        <div className="space-y-3">
          {honeytokenAlerts.map((alert) => (
            <div key={alert.id} className={`border rounded-xl p-5 ${alert.severity === "critical" ? "border-red-300 bg-red-50/30" : "border-orange-200 bg-orange-50/20"}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${alert.severity === "critical" ? "bg-red-100" : "bg-orange-100"}`}>
                    <Siren className={`w-4 h-4 ${alert.severity === "critical" ? "text-red-600" : "text-orange-600"}`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{alert.label}</div>
                    <div className="text-[10px] text-slate-500">{alert.ago}</div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                  alert.severity === "critical" ? "bg-red-100 border-red-200 text-red-700" : "bg-orange-100 border-orange-200 text-orange-700"
                }`}>
                  {alert.severity}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <span>Threat: <strong>{alert.threat.replace("_", " ")}</strong></span>
                {alert.entityId && <span>Entity: <strong>{alert.entityId}</strong></span>}
                {alert.uebaElevated && (
                  <span className="flex items-center gap-1 text-orange-600 font-bold">
                    <Activity className="w-3 h-3" /> UEBA risk elevated
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "assets" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Active Honeytoken Assets</h3>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="w-3 h-3" /> New Token
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {honeytokenAssets.map((asset) => (
              <div key={asset.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Key className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900">{asset.label}</div>
                  <div className="text-[10px] text-slate-400">{asset.type} · {asset.deployedIn}</div>
                </div>
                <div className={`text-xs font-black ${asset.accesses > 0 ? "text-red-600" : "text-slate-300"}`}>
                  {asset.accesses} access{asset.accesses !== 1 ? "es" : ""}
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-emerald-50 border-emerald-200 text-emerald-700">
                  ACTIVE
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
