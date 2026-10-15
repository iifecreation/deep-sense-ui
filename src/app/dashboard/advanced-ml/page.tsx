"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Brain,
  Network,
  GitBranch,
  Activity,
  Target,
  RefreshCw,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Info,
  Loader2,
  TrendingDown,
  Gauge,
} from "lucide-react";
import { gnnService, type GnnRingResult } from "@/services/gnn.service";
import { graphRingsService } from "@/services/graph-rings.service";
import { federatedLearningService, type FederatedLearningRound } from "@/services/federated-learning.service";
import { counterfactualService, type Counterfactual } from "@/services/counterfactual.service";
import { riskDecisionsService, type NormalizedRiskDecision } from "@/services/risk-decisions.service";

function classificationColor(cls: string) {
  switch (cls) {
    case "fraud_ring": return "bg-red-50 border-red-200 text-red-700";
    case "mule_network": return "bg-orange-50 border-orange-200 text-orange-700";
    case "uncertain": return "bg-yellow-50 border-yellow-200 text-yellow-700";
    default: return "bg-emerald-50 border-emerald-200 text-emerald-700";
  }
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
      <div className={`h-1.5 rounded-full transition-all ${color}`} style={{ width: `${Math.min(Math.max(score, 0), 1) * 100}%` }} />
    </div>
  );
}

function timeAgo(iso: string | null): string {
  if (!iso) return "—";
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function EmptyState({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-10 flex flex-col items-center text-center gap-3">
      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
        <Info className="w-5 h-5 text-slate-400" />
      </div>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-500 max-w-md italic">{children}</p>
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
      {message}
    </div>
  );
}

export default function AdvancedMLPage() {
  const [activeTab, setActiveTab] = useState<"gnn" | "federated" | "online" | "counterfactual">("gnn");

  // ── GNN Ring Detection ──────────────────────────────────────────────────
  const [gnnResults, setGnnResults] = useState<GnnRingResult[]>([]);
  const [gnnLoading, setGnnLoading] = useState(true);
  const [gnnError, setGnnError] = useState<string | null>(null);
  const [sweeping, setSweeping] = useState(false);
  const [sweepError, setSweepError] = useState<string | null>(null);

  const loadGnnResults = useCallback(() => {
    setGnnLoading(true);
    setGnnError(null);
    gnnService
      .listResults(50)
      .then((res) => setGnnResults(res.items))
      .catch(() => setGnnError("Failed to load GNN ring detection results."))
      .finally(() => setGnnLoading(false));
  }, []);

  useEffect(() => {
    loadGnnResults();
  }, [loadGnnResults]);

  const triggerGnnSweep = async () => {
    setSweeping(true);
    setSweepError(null);
    try {
      const rings = await graphRingsService.listActiveRings(5);
      const ring = rings.items.find((r) => r.members_json && r.members_json.length > 0);
      if (!ring) {
        setSweepError("No active fraud ring with graph members available to score.");
        return;
      }
      await gnnService.scoreEntitySet(ring.members_json, ring.id);
      loadGnnResults();
    } catch {
      setSweepError("GNN sweep failed to run. Try again.");
    } finally {
      setSweeping(false);
    }
  };

  const gnnRingsDetected = gnnResults.filter(
    (r) => r.ring_classification === "fraud_ring" || r.ring_classification === "mule_network",
  ).length;
  const gnnAvgScore = gnnResults.length
    ? gnnResults.reduce((sum, r) => sum + r.ring_gnn_score, 0) / gnnResults.length
    : 0;
  const gnnMuleNetworks = gnnResults.filter((r) => r.ring_classification === "mule_network").length;
  const gnnAvgConfidence = gnnResults.length
    ? gnnResults.reduce((sum, r) => sum + r.confidence, 0) / gnnResults.length
    : 0;

  // ── Federated Learning ──────────────────────────────────────────────────
  const [flRounds, setFlRounds] = useState<FederatedLearningRound[]>([]);
  const [flLoading, setFlLoading] = useState(true);
  const [flError, setFlError] = useState<string | null>(null);
  const [minContributions, setMinContributions] = useState(3);

  useEffect(() => {
    setFlLoading(true);
    federatedLearningService
      .listRounds(100)
      .then((res) => {
        setFlRounds(res.items);
        setMinContributions(res.min_contributions_for_aggregation);
      })
      .catch(() => setFlError("Failed to load federated learning rounds."))
      .finally(() => setFlLoading(false));
  }, []);

  const latestRoundNumber = flRounds.length ? Math.max(...flRounds.map((r) => r.round_number)) : null;
  const roundNumbers = Array.from(new Set(flRounds.map((r) => r.round_number))).sort((a, b) => b - a);
  const roundGroups = roundNumbers.slice(0, 6).map((num) => {
    const rows = flRounds.filter((r) => r.round_number === num);
    const contributions = rows.filter((r) => r.status === "submitted" || r.status === "aggregated").length;
    return {
      round: num,
      contributions,
      status: rows.length > 0 && rows.every((r) => r.status === "aggregated") ? "aggregated" : "collecting",
      epsilonUsed: rows.reduce((sum, r) => sum + r.differential_privacy_epsilon, 0),
    };
  });
  const latestGroup = roundGroups.find((g) => g.round === latestRoundNumber) || null;

  // ── Counterfactual Explorer ────────────────────────────────────────────
  const [decisions, setDecisions] = useState<NormalizedRiskDecision[]>([]);
  const [decisionsLoading, setDecisionsLoading] = useState(true);
  const [decisionsError, setDecisionsError] = useState<string | null>(null);
  const [selectedDecisionId, setSelectedDecisionId] = useState<string>("");
  const [interventions, setInterventions] = useState({
    email_age_days: 730,
    ip_proxy: false,
    device_seen_before: true,
    velocity_1h_count: 2,
  });
  const [cfResult, setCfResult] = useState<Counterfactual | null>(null);
  const [cfLoading, setCfLoading] = useState(false);
  const [cfError, setCfError] = useState<string | null>(null);

  useEffect(() => {
    riskDecisionsService
      .list({ limit: 25 })
      .then((rows) => {
        setDecisions(rows);
        const preferred = rows.find((d) => d.decision !== "allow") || rows[0];
        if (preferred) setSelectedDecisionId(preferred.decision_id);
      })
      .catch(() => setDecisionsError("Failed to load risk decisions."))
      .finally(() => setDecisionsLoading(false));
  }, []);

  const selectedDecision = decisions.find((d) => d.decision_id === selectedDecisionId) || null;

  const applyCounterfactual = () => {
    if (!selectedDecisionId) return;
    setCfLoading(true);
    setCfError(null);
    counterfactualService
      .generate(selectedDecisionId, interventions)
      .then((res) => setCfResult(res))
      .catch(() => setCfError("Failed to generate counterfactual."))
      .finally(() => setCfLoading(false));
  };

  const tabs = [
    { id: "gnn", label: "GNN Ring Detection", icon: Network },
    { id: "federated", label: "Federated Learning", icon: Users },
    { id: "online", label: "Online Learning", icon: Activity },
    { id: "counterfactual", label: "Counterfactual Explorer", icon: GitBranch },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Advanced ML Intelligence</h1>
          </div>
          <p className="text-sm text-slate-500">GNN fraud rings · Federated learning · Online updates · Causal counterfactuals</p>
        </div>
        {activeTab === "gnn" && (
          <button
            onClick={triggerGnnSweep}
            disabled={sweeping}
            className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {sweeping ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            {sweeping ? "Scoring…" : "Trigger GNN Sweep"}
          </button>
        )}
      </div>

      {/* Tab Nav */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* GNN Tab */}
      {activeTab === "gnn" && (
        <div className="space-y-4">
          {sweepError && <ErrorBanner message={sweepError} />}
          {gnnError && <ErrorBanner message={gnnError} />}

          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Rings Detected", value: String(gnnRingsDetected), sub: `of ${gnnResults.length} scored`, icon: Network, color: "text-red-600" },
              { label: "Avg Ring Score", value: gnnResults.length ? gnnAvgScore.toFixed(2) : "—", sub: "above 0.7 = fraud ring", icon: Target, color: "text-orange-600" },
              { label: "Mule Networks", value: String(gnnMuleNetworks), sub: "classified", icon: Users, color: "text-amber-600" },
              { label: "Avg Confidence", value: gnnResults.length ? `${(gnnAvgConfidence * 100).toFixed(0)}%` : "—", sub: "model confidence", icon: Gauge, color: "text-violet-600" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                </div>
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Recent GNN Ring Detections</h3>
            </div>
            {gnnLoading ? (
              <div className="px-5 py-10 text-center text-xs text-slate-400">Loading…</div>
            ) : gnnResults.length === 0 ? (
              <div className="px-5 py-10 text-center text-xs text-slate-400">
                No GNN scoring runs yet. Trigger a sweep to score the highest-risk active fraud ring.
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                {gnnResults.map((ring) => (
                  <div key={ring.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${classificationColor(ring.ring_classification)}`}>
                          {ring.ring_classification.replace("_", " ")}
                        </span>
                        <span className="text-[10px] text-slate-400">{timeAgo(ring.created_at)}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>{ring.node_count} nodes</span>
                        <span>{ring.edge_count} edges</span>
                        <span>confidence {(ring.confidence * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                    <div className="w-32">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] text-slate-500">GNN Score</span>
                        <span className="text-xs font-black text-slate-900">{ring.ring_gnn_score.toFixed(2)}</span>
                      </div>
                      <ScoreBar score={ring.ring_gnn_score} color={ring.ring_gnn_score > 0.7 ? "bg-red-500" : ring.ring_gnn_score > 0.4 ? "bg-amber-400" : "bg-emerald-500"} />
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Federated Learning Tab */}
      {activeTab === "federated" && (
        <div className="space-y-4">
          {flError && <ErrorBanner message={flError} />}

          {flLoading ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-xs text-slate-400">Loading…</div>
          ) : flRounds.length === 0 ? (
            <EmptyState title="No federated learning rounds yet">
              No tenant has submitted a local gradient update for this organization&apos;s models yet. Rounds appear
              here once a local_update_hash is submitted via the federated learning protocol.
            </EmptyState>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-xs text-slate-500 font-medium mb-2">Current Round</div>
                  <div className="text-2xl font-black text-slate-900">{latestRoundNumber}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{latestGroup?.status === "aggregated" ? "aggregated" : "collecting contributions"}</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-xs text-slate-500 font-medium mb-2">Tenants Contributing</div>
                  <div className="text-2xl font-black text-slate-900">
                    {latestGroup?.contributions ?? 0} / {minContributions}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {Math.max(minContributions - (latestGroup?.contributions ?? 0), 0)} more needed to aggregate
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-xs text-slate-500 font-medium mb-2">DP Budget Used</div>
                  <div className="text-2xl font-black text-slate-900">ε {latestGroup?.epsilonUsed.toFixed(1) ?? "0.0"}</div>
                  <div className="text-[10px] text-slate-400 mt-1">this round</div>
                </div>
              </div>

              {roundGroups.map((round) => (
                <div key={round.round} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Round {round.round}</div>
                      <div className="text-xs text-slate-500">{round.status === "aggregated" ? "Global model version aggregated" : "Aggregation pending"}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                      round.status === "aggregated" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-blue-50 border-blue-200 text-blue-700"
                    }`}>
                      {round.status}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span>Tenant contributions</span>
                      <span className="font-bold text-slate-900">{round.contributions} / {minContributions}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-violet-500 transition-all"
                        style={{ width: `${Math.min((round.contributions / minContributions) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Online Learning Tab */}
      {activeTab === "online" && (
        <div className="space-y-4">
          <EmptyState title="Online learning feed not yet available">
            The <code>online_model_updates</code> table exists in the schema to record analyst-labeled decisions
            that trigger a model weight update, but no service or API endpoint writes or reads it yet — the
            analyst feedback currently flowing through the platform is captured as case-resolution{" "}
            <code>DetectionFeedback</code> records instead, which don&apos;t carry the prior/posterior score deltas
            this feed is meant to show. Surfacing this tab for real needs that backend wiring first.
          </EmptyState>
        </div>
      )}

      {/* Counterfactual Tab */}
      {activeTab === "counterfactual" && (
        <div className="space-y-4">
          {decisionsError && <ErrorBanner message={decisionsError} />}
          {cfError && <ErrorBanner message={cfError} />}

          {decisionsLoading ? (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-xs text-slate-400">Loading recent decisions…</div>
          ) : decisions.length === 0 ? (
            <EmptyState title="No risk decisions to analyze">
              No normalized risk decisions exist for this organization yet. Counterfactuals are generated against a
              real decision&apos;s stored feature vector, so at least one decision is required first.
            </EmptyState>
          ) : (
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-3 bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900">Feature Interventions</h3>
                  <select
                    value={selectedDecisionId}
                    onChange={(e) => { setSelectedDecisionId(e.target.value); setCfResult(null); }}
                    className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 font-medium text-slate-700 max-w-[220px]"
                  >
                    {decisions.map((d) => (
                      <option key={d.decision_id} value={d.decision_id}>
                        {d.subject_type} {d.subject_id.slice(0, 8)} · {d.decision} · {d.score.toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-44 text-xs font-medium text-slate-700">email_age_days</div>
                    <input
                      type="number"
                      value={interventions.email_age_days}
                      onChange={(e) => setInterventions((prev) => ({ ...prev, email_age_days: Number(e.target.value) }))}
                      className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-1.5"
                    />
                    <TrendingDown className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-44 text-xs font-medium text-slate-700">ip_proxy</div>
                    <select
                      value={String(interventions.ip_proxy)}
                      onChange={(e) => setInterventions((prev) => ({ ...prev, ip_proxy: e.target.value === "true" }))}
                      className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-1.5"
                    >
                      <option value="false">false</option>
                      <option value="true">true</option>
                    </select>
                    <TrendingDown className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-44 text-xs font-medium text-slate-700">device_seen_before</div>
                    <select
                      value={String(interventions.device_seen_before)}
                      onChange={(e) => setInterventions((prev) => ({ ...prev, device_seen_before: e.target.value === "true" }))}
                      className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-1.5"
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                    <TrendingDown className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-44 text-xs font-medium text-slate-700">velocity_1h_count</div>
                    <input
                      type="number"
                      value={interventions.velocity_1h_count}
                      onChange={(e) => setInterventions((prev) => ({ ...prev, velocity_1h_count: Number(e.target.value) }))}
                      className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-1.5"
                    />
                    <TrendingDown className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  </div>
                </div>

                <button
                  onClick={applyCounterfactual}
                  disabled={cfLoading || !selectedDecisionId}
                  className="mt-6 w-full py-2.5 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {cfLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  Apply Counterfactual
                </button>
              </div>

              <div className="col-span-2 space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="text-xs text-slate-500 mb-1">Original Score</div>
                  <div className="text-3xl font-black text-red-600">
                    {cfResult ? cfResult.original_score.toFixed(2) : selectedDecision ? selectedDecision.score.toFixed(2) : "—"}
                  </div>
                  <div className="text-xs font-bold text-red-600 mt-1 uppercase tracking-wide">
                    {cfResult ? cfResult.original_decision : selectedDecision?.decision ?? "—"}
                  </div>
                  <ScoreBar score={cfResult ? cfResult.original_score : selectedDecision?.score ?? 0} color="bg-red-500" />
                </div>
                {cfResult && (
                  <>
                    <div className={`bg-white border-2 rounded-xl p-5 transition-all ${cfResult.counterfactual_score < 0.5 ? "border-emerald-300" : "border-slate-200"}`}>
                      <div className="text-xs text-slate-500 mb-1">Counterfactual Score</div>
                      <div className={`text-3xl font-black ${cfResult.counterfactual_score < 0.5 ? "text-emerald-600" : "text-red-600"}`}>
                        {cfResult.counterfactual_score.toFixed(2)}
                      </div>
                      <div className={`text-xs font-bold mt-1 uppercase tracking-wide ${cfResult.counterfactual_score < 0.5 ? "text-emerald-600" : "text-red-600"}`}>
                        {cfResult.counterfactual_decision}
                      </div>
                      <ScoreBar score={cfResult.counterfactual_score} color={cfResult.counterfactual_score < 0.5 ? "bg-emerald-500" : "bg-red-500"} />
                    </div>
                    <div className={`rounded-xl p-4 text-xs border ${
                      cfResult.counterfactual_decision !== cfResult.original_decision
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}>
                      {cfResult.counterfactual_decision !== cfResult.original_decision ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 mb-1" />
                      ) : (
                        <Info className="w-4 h-4 text-slate-400 mb-1" />
                      )}
                      {cfResult.narrative}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
