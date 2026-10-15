"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Network,
  ShieldCheck,
  Key,
  Clock,
  Layers,
  Loader2,
  AlertTriangle,
  Send,
  Info,
} from "lucide-react";
import {
  cryptographicService,
  type SmpcMatchRecord,
  type ZkProofRecord,
} from "@/services/cryptographic.service";

const HASH_TYPES = ["email", "phone", "pan", "device", "ip", "wallet"];

function formatDate(value?: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString();
}

export default function ConsortiumNetworkPage() {
  const [activeTab, setActiveTab] = useState<"consortium" | "smpc" | "zkproof">("smpc");

  const [smpcMatches, setSmpcMatches] = useState<SmpcMatchRecord[]>([]);
  const [smpcTotal, setSmpcTotal] = useState(0);
  const [smpcLoading, setSmpcLoading] = useState(true);
  const [smpcError, setSmpcError] = useState<string | null>(null);

  const [hashType, setHashType] = useState(HASH_TYPES[0]);
  const [identifiersInput, setIdentifiersInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [zkProofs, setZkProofs] = useState<ZkProofRecord[]>([]);
  const [zkTotal, setZkTotal] = useState(0);
  const [zkLoading, setZkLoading] = useState(true);
  const [zkError, setZkError] = useState<string | null>(null);

  const loadSmpc = useCallback(async () => {
    setSmpcLoading(true);
    setSmpcError(null);
    try {
      const res = await cryptographicService.listSmpcMatches({ limit: 50 });
      setSmpcMatches(res.items);
      setSmpcTotal(res.total);
    } catch (cause) {
      setSmpcError(cause instanceof Error ? cause.message : "Unable to load SMPC match requests.");
    } finally {
      setSmpcLoading(false);
    }
  }, []);

  const loadZk = useCallback(async () => {
    setZkLoading(true);
    setZkError(null);
    try {
      const res = await cryptographicService.listZkProofs({ limit: 50 });
      setZkProofs(res.items);
      setZkTotal(res.total);
    } catch (cause) {
      setZkError(cause instanceof Error ? cause.message : "Unable to load ZK proof records.");
    } finally {
      setZkLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadSmpc();
    void loadZk();
  }, [loadSmpc, loadZk]);

  const handleInitiateMatch = async () => {
    const identifiers = identifiersInput
      .split(/[\n,]/)
      .map((id) => id.trim())
      .filter(Boolean);
    if (identifiers.length === 0) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await cryptographicService.initiateSmpcMatch(hashType, identifiers);
      setIdentifiersInput("");
      await loadSmpc();
    } catch (cause) {
      setSubmitError(cause instanceof Error ? cause.message : "SMPC match request failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const completedMatches = smpcMatches.filter((m) => m.computation_status === "completed").length;
  const auditorAccessibleProofs = zkProofs.filter((p) => p.auditor_accessible).length;

  const tabs = [
    { id: "smpc", label: "SMPC Matches", icon: Layers },
    { id: "zkproof", label: "ZK Proof Audit", icon: Key },
    { id: "consortium", label: "Consortium Network", icon: Network },
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
          { label: "SMPC Match Requests", value: smpcLoading ? "…" : String(smpcTotal), sub: "total submitted" },
          { label: "Completed Matches", value: smpcLoading ? "…" : String(completedMatches), sub: "in current page" },
          { label: "ZK Proofs Issued", value: zkLoading ? "…" : String(zkTotal), sub: "total generated" },
          { label: "Auditor Accessible", value: zkLoading ? "…" : String(auditorAccessibleProofs), sub: "ZK proofs, current page" },
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

      {activeTab === "smpc" && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Initiate SMPC-PSI Consortium Match</h3>
            <p className="text-xs text-slate-500 mb-6">
              Run a private set intersection match against the consortium blocklist. Identifiers are blinded
              immediately — only the match count is returned, never per-entity disclosure.
            </p>
            {submitError ? (
              <div className="mb-4 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                <AlertTriangle className="h-4 w-4 shrink-0" /> {submitError}
              </div>
            ) : null}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Hash Type</label>
                <select
                  value={hashType}
                  onChange={(e) => setHashType(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                >
                  {HASH_TYPES.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Identifiers (comma or newline separated)</label>
                <textarea
                  value={identifiersInput}
                  onChange={(e) => setIdentifiersInput(e.target.value)}
                  placeholder="alice@example.com, bob@example.com"
                  rows={2}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
            <button
              onClick={() => void handleInitiateMatch()}
              disabled={submitting || !identifiersInput.trim()}
              className="px-5 py-2.5 bg-teal-600 text-white text-xs font-bold rounded-xl hover:bg-teal-700 transition-colors disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin inline mr-2" />
              ) : (
                <Send className="w-3.5 h-3.5 inline mr-2" />
              )}
              {submitting ? "Submitting..." : "Run Match"}
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">SMPC-PSI Consortium Match Requests</h3>
            </div>
            {smpcError ? (
              <div className="m-5 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                <AlertTriangle className="h-4 w-4 shrink-0" /> {smpcError}
              </div>
            ) : null}
            {smpcLoading ? (
              <div className="flex items-center justify-center p-10 text-slate-400">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            ) : smpcMatches.length === 0 ? (
              <p className="p-6 text-sm text-slate-500">No SMPC match requests have been submitted yet.</p>
            ) : (
              <div className="divide-y divide-slate-50">
                {smpcMatches.map((req) => (
                  <div key={req.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                    <div
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase ${
                        req.computation_status === "completed"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {req.hash_type}
                    </div>
                    <div className="flex-1 text-xs text-slate-500">
                      {req.query_entity_count} identifiers queried · {req.psi_protocol}
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {req.revealed_match_count !== null ? `${req.revealed_match_count} matches` : "—"}
                    </div>
                    <div className="text-xs text-slate-400">
                      {req.computation_latency_ms ? `${req.computation_latency_ms}ms` : "pending"}
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                        req.computation_status === "completed"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-blue-50 border-blue-200 text-blue-700"
                      }`}
                    >
                      {req.computation_status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "zkproof" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">ZK Proof Records</h3>
          </div>
          {zkError ? (
            <div className="m-5 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
              <AlertTriangle className="h-4 w-4 shrink-0" /> {zkError}
            </div>
          ) : null}
          {zkLoading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : zkProofs.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No ZK proofs have been generated yet.</p>
          ) : (
            <div className="divide-y divide-slate-50">
              {zkProofs.map((proof) => (
                <div key={proof.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    {proof.proof_valid ? (
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-slate-900">
                        {proof.proof_type.replace("_", " ").toUpperCase()}
                      </span>
                      <span className="text-[10px] text-slate-400">{proof.decision_id || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-slate-400 uppercase tracking-wide">{proof.zk_protocol}</span>
                      {proof.auditor_accessible && (
                        <span className="text-[9px] text-teal-600 font-bold">auditor accessible</span>
                      )}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400">{formatDate(proof.created_at)}</div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                      proof.proof_valid
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}
                  >
                    {proof.proof_valid === null ? "unverified" : proof.proof_valid ? "valid" : "invalid"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "consortium" && (
        <div className="bg-white border border-slate-200 rounded-xl p-10 flex flex-col items-center text-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-slate-400" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Member directory not yet available</h3>
          <p className="text-xs text-slate-500 max-w-md italic">
            The API exposes only your organization&apos;s own consortium participation (opt-in status, sharing
            policy, and anonymized match results against other members) — there is no endpoint to list other
            institutions, their matching protocol, or their differential-privacy budget. Surfacing that here would
            require a new backend capability, and by design the consortium does not disclose one member&apos;s
            privacy budget or sharing stats to another.
          </p>
        </div>
      )}
    </div>
  );
}
