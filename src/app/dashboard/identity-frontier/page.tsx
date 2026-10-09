"use client";

import React, { useState } from "react";
import {
  Fingerprint,
  Eye,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  ChevronRight,
  Scan,
  Link2,
  Activity,
  User,
} from "lucide-react";

const deepfakeChecks = [
  { id: "d1", context: "onboarding", liveness: true, challengeType: "blink", result: "passed", score: 0.04, age: "2m ago" },
  { id: "d2", context: "step_up_auth", liveness: true, challengeType: "head_turn", result: "passed", score: 0.09, age: "15m ago" },
  { id: "d3", context: "onboarding", liveness: false, challengeType: "passive", result: "failed", score: 0.87, age: "1h ago" },
  { id: "d4", context: "detection_only", liveness: null, challengeType: null, result: "passed", score: 0.11, age: "2h ago" },
];

const biometricProfiles = [
  { userId: "USR-4421", confidence: 0.91, sessions: 84, anomalyScore: 0.12, lastUpdated: "3m ago" },
  { userId: "USR-2201", confidence: 0.76, sessions: 34, anomalyScore: 0.31, lastUpdated: "45m ago" },
  { userId: "USR-8812", confidence: 0.62, sessions: 12, anomalyScore: 0.54, lastUpdated: "2h ago" },
];

const vcCredentials = [
  { id: "vc1", holderDid: "did:web:kyc-provider.example.com", type: "KYCCredential", issuerTrusted: true, status: "active", trust: "high", verifiedAt: "10m ago" },
  { id: "vc2", holderDid: "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK", type: "AgeVerification", issuerTrusted: false, status: "pending_verification", trust: "low", verifiedAt: "30m ago" },
  { id: "vc3", holderDid: "did:ion:EiAnKD8-jfdd0MDcZ", type: "AMLClearanceCredential", issuerTrusted: true, status: "active", trust: "high", verifiedAt: "1h ago" },
];

function ContextBadge({ ctx }: { ctx: string }) {
  const map: Record<string, string> = {
    onboarding: "bg-blue-50 border-blue-200 text-blue-700",
    step_up_auth: "bg-violet-50 border-violet-200 text-violet-700",
    detection_only: "bg-slate-50 border-slate-200 text-slate-600",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${map[ctx] || "bg-slate-50 border-slate-200 text-slate-600"}`}>
      {ctx.replace("_", " ")}
    </span>
  );
}

export default function IdentityFrontierPage() {
  const [activeTab, setActiveTab] = useState<"deepfake" | "biometrics" | "vc">("deepfake");

  const tabs = [
    { id: "deepfake", label: "Liveness & Deepfake", icon: Eye },
    { id: "biometrics", label: "Passive Biometrics", icon: Activity },
    { id: "vc", label: "Verifiable Credentials", icon: Link2 },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center">
              <Fingerprint className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Identity Frontier</h1>
          </div>
          <p className="text-sm text-slate-500">Deepfake detection · Liveness challenges · Passive biometrics · W3C DID/VC</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Deepfake Pass Rate", value: "97.2%", sub: "last 30 days", color: "text-emerald-600" },
          { label: "Liveness Challenges", value: "341", sub: "this week", color: "text-blue-600" },
          { label: "Biometric Profiles", value: "1,284", sub: "high-confidence", color: "text-violet-600" },
          { label: "Active VCs", value: "89", sub: "trusted credentials", color: "text-sky-600" },
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
              activeTab === tab.id ? "bg-white text-sky-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "deepfake" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Recent Deepfake & Liveness Checks</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {deepfakeChecks.map((check) => (
              <div key={check.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${check.result === "passed" ? "bg-emerald-50" : "bg-red-50"}`}>
                  {check.result === "passed" ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-red-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <ContextBadge ctx={check.context} />
                    {check.challengeType && (
                      <span className="text-[9px] text-slate-400 uppercase tracking-wide">challenge: {check.challengeType}</span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400">{check.age}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-slate-900">{check.score.toFixed(2)}</div>
                  <div className="text-[10px] text-slate-400">deepfake score</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "biometrics" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Passive Biometric Profiles</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {biometricProfiles.map((profile) => (
              <div key={profile.userId} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                  <User className="w-4 h-4 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900">{profile.userId}</div>
                  <div className="text-[10px] text-slate-400">{profile.sessions} sessions sampled · updated {profile.lastUpdated}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 mb-0.5">Confidence</div>
                  <div className="text-xs font-black text-slate-900">{(profile.confidence * 100).toFixed(0)}%</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 mb-0.5">Anomaly</div>
                  <div className={`text-xs font-black ${profile.anomalyScore > 0.4 ? "text-red-600" : profile.anomalyScore > 0.2 ? "text-amber-600" : "text-emerald-600"}`}>
                    {profile.anomalyScore.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "vc" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">Verifiable Credential Verification Log</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {vcCredentials.map((vc) => (
              <div key={vc.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${vc.issuerTrusted ? "bg-emerald-50" : "bg-amber-50"}`}>
                  {vc.issuerTrusted ? <Shield className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-amber-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{vc.holderDid}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-slate-500">{vc.type}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-wide ${vc.issuerTrusted ? "text-emerald-600" : "text-amber-600"}`}>
                      {vc.issuerTrusted ? "trusted issuer" : "untrusted issuer"}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                    vc.status === "active" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"
                  }`}>
                    {vc.status.replace("_", " ")}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">{vc.verifiedAt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
