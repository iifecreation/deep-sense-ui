"use client";

import React, { useState } from "react";
import {
  Brain,
  Network,
  GitBranch,
  Sliders,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Zap,
  Shield,
  BarChart3,
  RefreshCw,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Users,
  ArrowUpDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ── Static demo data ──────────────────────────────────────────────────────────

const gnnRingResults = [
  { id: "r1", classification: "fraud_ring", score: 0.92, confidence: 0.88, nodeCount: 14, edgeCount: 31, age: "3m ago" },
  { id: "r2", classification: "mule_network", score: 0.78, confidence: 0.74, nodeCount: 7, edgeCount: 12, age: "18m ago" },
  { id: "r3", classification: "uncertain", score: 0.51, confidence: 0.56, nodeCount: 5, edgeCount: 8, age: "1h ago" },
  { id: "r4", classification: "benign", score: 0.12, confidence: 0.94, nodeCount: 3, edgeCount: 4, age: "2h ago" },
];

const flRounds = [
  { round: 12, contributions: 8, targetContributions: 10, status: "aggregated", epsilonUsed: 1.2, modelVersion: "federated-r12" },
  { round: 13, contributions: 3, targetContributions: 10, status: "collecting", epsilonUsed: 0.4, modelVersion: null },
];

const onlineUpdates = [
  { label: "FP → analyst marked benign", delta: -0.031, time: "5m ago" },
  { label: "TP confirmed → ring member", delta: +0.045, time: "12m ago" },
  { label: "FN escalated by analyst", delta: +0.062, time: "28m ago" },
  { label: "TN auto-confirmed", delta: -0.008, time: "45m ago" },
];

const counterfactualFeatures = [
  { name: "email_age_days", current: 3, hypothetical: 730, direction: "down" },
  { name: "ip_proxy", current: true, hypothetical: false, direction: "down" },
  { name: "device_seen_before", current: false, hypothetical: true, direction: "down" },
  { name: "velocity_1h_count", current: 8, hypothetical: 2, direction: "down" },
];

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
      <div className={`h-1.5 rounded-full transition-all ${color}`} style={{ width: `${score * 100}%` }} />
    </div>
  );
}

export default function AdvancedMLPage() {
  const [activeTab, setActiveTab] = useState<"gnn" | "federated" | "online" | "counterfactual">("gnn");
  const [cfScore, setCfScore] = useState(0.83);
  const [cfDecision, setCfDecision] = useState("block");

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
        <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700 transition-colors">
          <RefreshCw className="w-3.5 h-3.5" />
          Trigger GNN Sweep
        </button>
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
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Rings Detected", value: "3", sub: "last 24h", icon: Network, color: "text-red-600" },
              { label: "Avg Ring Score", value: "0.78", sub: "above 0.7 threshold", icon: Target, color: "text-orange-600" },
              { label: "Mule Networks", value: "1", sub: "active", icon: Users, color: "text-amber-600" },
              { label: "Avg Latency", value: "48ms", sub: "GNN inference", icon: Zap, color: "text-violet-600" },
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
            <div className="divide-y divide-slate-50">
              {gnnRingResults.map((ring) => (
                <div key={ring.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${classificationColor(ring.classification)}`}>
                        {ring.classification.replace("_", " ")}
                      </span>
                      <span className="text-[10px] text-slate-400">{ring.age}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{ring.nodeCount} nodes</span>
                      <span>{ring.edgeCount} edges</span>
                      <span>confidence {(ring.confidence * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] text-slate-500">GNN Score</span>
                      <span className="text-xs font-black text-slate-900">{ring.score.toFixed(2)}</span>
                    </div>
                    <ScoreBar score={ring.score} color={ring.score > 0.7 ? "bg-red-500" : ring.score > 0.4 ? "bg-amber-400" : "bg-emerald-500"} />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Federated Learning Tab */}
      {activeTab === "federated" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Current Round", value: "13", sub: "collecting contributions" },
              { label: "Tenants Contributing", value: "3 / 10", sub: "need 3 more to aggregate" },
              { label: "DP Budget Used", value: "εₘ 0.4 / 10.0", sub: "monthly remaining" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-xs text-slate-500 font-medium mb-2">{stat.label}</div>
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-[10px] text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          {flRounds.map((round) => (
            <div key={round.round} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">Round {round.round}</div>
                  <div className="text-xs text-slate-500">{round.modelVersion || "Aggregation pending"}</div>
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
                  <span className="font-bold text-slate-900">{round.contributions} / {round.targetContributions}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-violet-500 transition-all"
                    style={{ width: `${(round.contributions / round.targetContributions) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Online Learning Tab */}
      {activeTab === "online" && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Analyst Decision → Model Update Feed</h3>
              <span className="text-[10px] text-slate-400 uppercase tracking-wide">Live</span>
            </div>
            <div className="divide-y divide-slate-50">
              {onlineUpdates.map((update, idx) => (
                <div key={idx} className="flex items-center gap-4 px-5 py-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${update.delta < 0 ? "bg-emerald-50" : "bg-red-50"}`}>
                    {update.delta < 0 ? (
                      <TrendingDown className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-slate-800">{update.label}</div>
                    <div className="text-[10px] text-slate-400">{update.time}</div>
                  </div>
                  <div className={`text-sm font-black ${update.delta < 0 ? "text-emerald-600" : "text-red-500"}`}>
                    {update.delta > 0 ? "+" : ""}{(update.delta * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Counterfactual Tab */}
      {activeTab === "counterfactual" && (
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Feature Interventions</h3>
            <div className="space-y-4">
              {counterfactualFeatures.map((f) => (
                <div key={f.name} className="flex items-center gap-4">
                  <div className="w-44 text-xs font-medium text-slate-700">{f.name}</div>
                  <div className="text-xs text-slate-400 w-16 text-right">{String(f.current)}</div>
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-400 text-center mb-0.5">→ hypothetical</div>
                  </div>
                  <div className="text-xs font-bold text-violet-700 w-16">{String(f.hypothetical)}</div>
                  <TrendingDown className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>
            <button
              onClick={() => { setCfScore(0.24); setCfDecision("approve"); }}
              className="mt-6 w-full py-2.5 bg-violet-600 text-white text-xs font-bold rounded-lg hover:bg-violet-700 transition-colors"
            >
              Apply Counterfactual
            </button>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-1">Original Score</div>
              <div className="text-3xl font-black text-red-600">0.83</div>
              <div className="text-xs font-bold text-red-600 mt-1 uppercase tracking-wide">Block</div>
              <ScoreBar score={0.83} color="bg-red-500" />
            </div>
            <div className={`bg-white border-2 rounded-xl p-5 transition-all ${cfScore < 0.5 ? "border-emerald-300" : "border-slate-200"}`}>
              <div className="text-xs text-slate-500 mb-1">Counterfactual Score</div>
              <div className={`text-3xl font-black ${cfScore < 0.5 ? "text-emerald-600" : "text-red-600"}`}>{cfScore.toFixed(2)}</div>
              <div className={`text-xs font-bold mt-1 uppercase tracking-wide ${cfScore < 0.5 ? "text-emerald-600" : "text-red-600"}`}>{cfDecision}</div>
              <ScoreBar score={cfScore} color={cfScore < 0.5 ? "bg-emerald-500" : "bg-red-500"} />
            </div>
            {cfScore < 0.5 && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 mb-1" />
                Score drops by <strong>{((0.83 - cfScore) * 100).toFixed(0)}%</strong> — these feature changes would have prevented a block decision.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
