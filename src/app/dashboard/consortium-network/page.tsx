"use client";

import React, { useState } from "react";
import {
  Lock,
  Network,
  ShieldCheck,
  Key,
  BarChart3,
  CheckCircle,
  Clock,
  ChevronRight,
  Hash,
  Layers,
} from "lucide-react";

const zkProofs = [
  { id: "zk1", type: "aml_pass", decision: "APPR-8812", protocol: "commitment_only", valid: true, age: "5m ago", auditorAccessible: true },
  { id: "zk2", type: "sanctions_clear", decision: "APPR-8799", protocol: "commitment_only", valid: true, age: "22m ago", auditorAccessible: true },
  { id: "zk3", type: "kyc_complete", decision: "APPR-8773", protocol: "commitment_only", valid: true, age: "1h ago", auditorAccessible: false },
];

const smpcRequests = [
  { id: "s1", hashType: "email", queryCount: 234, matchCount: 3, protocol: "bloom_filter_psi", status: "completed", latency: 48 },
  { id: "s2", hashType: "phone", queryCount: 88, matchCount: 0, protocol: "bloom_filter_psi", status: "completed", latency: 31 },
  { id: "s3", hashType: "pan", queryCount: 12, matchCount: null, protocol: "bloom_filter_psi", status: "processing", latency: null },
];

const consortiumMembers = [
  { name: "Institution A", protocol: "smpc_psi", epsilonUsed: 2.4, epsilonLimit: 10, signalsShared: 1240, matchRate: 3.1 },
  { name: "Institution B", protocol: "hash_sha256", epsilonUsed: 0, epsilonLimit: 10, signalsShared: 882, matchRate: 1.8 },
  { name: "Institution C", protocol: "smpc_psi", epsilonUsed: 4.1, epsilonLimit: 10, signalsShared: 2100, matchRate: 5.2 },
];

export default function ConsortiumNetworkPage() {
  const [activeTab, setActiveTab] = useState<"consortium" | "smpc" | "zkproof">("consortium");

  const tabs = [
    { id: "consortium", label: "Consortium Network", icon: Network },
    { id: "smpc", label: "SMPC Matches", icon: Layers },
    { id: "zkproof", label: "ZK Proof Audit", icon: Key },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Consortium Network</h1>
          </div>
          <p className="text-sm text-slate-500">Privacy-preserving signals · SMPC-PSI matching · ZK compliance proofs</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Active Members", value: "3", sub: "institutions" },
          { label: "Signals Shared Today", value: "4,222", sub: "across network" },
          { label: "SMPC Matches", value: "3", sub: "last 24h" },
          { label: "ZK Proofs Issued", value: "812", sub: "this month" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-xs text-slate-500 font-medium mb-2">{stat.label}</div>
            <div className="text-2xl font-black text-slate-900">{stat.value}</div>
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
              activeTab === tab.id ? "bg-white text-teal-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "consortium" && (
        <div className="space-y-3">
          {consortiumMembers.map((member) => (
            <div key={member.name} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">{member.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                      member.protocol === "smpc_psi"
                        ? "bg-teal-50 border-teal-200 text-teal-700"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}>
                      {member.protocol.replace("_", " ")}
                    </span>
                    <span className="text-[10px] text-slate-400">{member.signalsShared.toLocaleString()} signals shared</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Match Rate</div>
                  <div className="text-lg font-black text-slate-900">{member.matchRate}%</div>
                </div>
              </div>
              {member.protocol === "smpc_psi" && (
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span>DP Budget (ε)</span>
                    <span className="font-bold">{member.epsilonUsed} / {member.epsilonLimit}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${member.epsilonUsed / member.epsilonLimit > 0.7 ? "bg-amber-500" : "bg-teal-500"}`}
                      style={{ width: `${(member.epsilonUsed / member.epsilonLimit) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === "smpc" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">SMPC-PSI Consortium Match Requests</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {smpcRequests.map((req) => (
              <div key={req.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase ${
                  req.status === "completed" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
                }`}>
                  {req.hashType}
                </div>
                <div className="flex-1 text-xs text-slate-500">{req.queryCount} identifiers queried</div>
                <div className="text-xs font-bold text-slate-900">
                  {req.matchCount !== null ? `${req.matchCount} matches` : "—"}
                </div>
                <div className="text-xs text-slate-400">
                  {req.latency ? `${req.latency}ms` : "pending"}
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                  req.status === "completed" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-blue-50 border-blue-200 text-blue-700"
                }`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "zkproof" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">ZK Proof Records</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {zkProofs.map((proof) => (
              <div key={proof.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                  {proof.valid ? <ShieldCheck className="w-4 h-4 text-teal-600" /> : <Clock className="w-4 h-4 text-amber-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-slate-900">{proof.type.replace("_", " ").toUpperCase()}</span>
                    <span className="text-[10px] text-slate-400">{proof.decision}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-slate-400 uppercase tracking-wide">{proof.protocol}</span>
                    {proof.auditorAccessible && (
                      <span className="text-[9px] text-teal-600 font-bold">auditor accessible</span>
                    )}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400">{proof.age}</div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-emerald-50 border-emerald-200 text-emerald-700">
                  VALID
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
