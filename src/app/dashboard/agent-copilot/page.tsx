"use client";

import React, { useState } from "react";
import {
  Bot,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Sliders,
  MessageSquare,
  ChevronRight,
  Send,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Search,
  Sparkles,
} from "lucide-react";

// ── Demo data ─────────────────────────────────────────────────────────────────

const investigationSessions = [
  {
    id: "s1",
    caseRef: "CASE-2847",
    status: "pending",
    confidence: 0.85,
    steps: 5,
    evidence: 12,
    draftNarrative: "Subject account exhibits coordinated behavior consistent with account takeover followed by mule-network transfer pattern. Linked to 3 consortium-matched entities across 2 institutions. Recommended: file SAR.",
    age: "4m ago",
  },
  {
    id: "s2",
    caseRef: "CASE-2839",
    status: "approved",
    confidence: 0.91,
    steps: 5,
    evidence: 18,
    draftNarrative: "Layering pattern detected across 7 accounts. All accounts linked by shared device fingerprint. Prior SAR filed in March 2026.",
    age: "2h ago",
  },
  {
    id: "s3",
    caseRef: "CASE-2831",
    status: "rejected",
    confidence: 0.62,
    steps: 3,
    evidence: 6,
    draftNarrative: "Insufficient evidence to support SAR filing. Recommend further monitoring.",
    age: "6h ago",
  },
];

const policyProposals = [
  {
    id: "pp1",
    service: "synthetic_identity",
    type: "threshold_adjustment",
    rationale: "Backtesting shows 22% FP reduction with minimal FN increase over 30-day window",
    fpReduction: 22,
    fnIncrease: 1.2,
    status: "proposed",
  },
  {
    id: "pp2",
    service: "cnp_fraud",
    type: "weight_rebalance",
    rationale: "BIN velocity signal underweighted. Rebalancing improves AUC-PR by 0.04.",
    fpReduction: 8,
    fnIncrease: 0.3,
    status: "approved",
  },
];

const nlQueryResults = [
  { id: "e1", entityType: "account", label: "ACC-882847", riskScore: 0.91, gnnScore: 0.88, alerts: 4 },
  { id: "e2", entityType: "account", label: "ACC-119234", riskScore: 0.78, gnnScore: 0.72, alerts: 2 },
  { id: "e3", entityType: "device", label: "DEV-mobile-4421", riskScore: 0.65, gnnScore: 0.58, alerts: 3 },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-amber-50 border-amber-200 text-amber-700",
    approved: "bg-emerald-50 border-emerald-200 text-emerald-700",
    rejected: "bg-red-50 border-red-200 text-red-700",
    running: "bg-blue-50 border-blue-200 text-blue-700",
    proposed: "bg-violet-50 border-violet-200 text-violet-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${map[status] || "bg-slate-50 border-slate-200 text-slate-500"}`}>
      {status}
    </span>
  );
}

export default function AgentCopilotPage() {
  const [activeTab, setActiveTab] = useState<"sessions" | "proposals" | "nlquery">("sessions");
  const [nlQuery, setNlQuery] = useState("");
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const tabs = [
    { id: "sessions", label: "Investigation Sessions", icon: Bot },
    { id: "proposals", label: "Policy Proposals", icon: Sliders },
    { id: "nlquery", label: "NL Graph Query", icon: MessageSquare },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Agent Co-Pilot</h1>
          </div>
          <p className="text-sm text-slate-500">Autonomous investigation · Policy tuning · Natural language risk queries</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg">
          <Sparkles className="w-3.5 h-3.5" />
          All actions require analyst approval
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Investigation Sessions */}
      {activeTab === "sessions" && (
        <div className="space-y-4">
          {investigationSessions.map((session) => (
            <div key={session.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-4 px-5 py-4 border-b border-slate-100">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">{session.caseRef}</span>
                    <StatusBadge status={session.status} />
                    <span className="text-[10px] text-slate-400">{session.age}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span>{session.steps}/5 steps completed</span>
                    <span>{session.evidence} evidence items</span>
                    <span>confidence {(session.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {session.status === "pending" && (
                    <>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                        <CheckCircle className="w-3 h-3" /> Approve SAR
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                        <XCircle className="w-3 h-3" /> Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="px-5 py-4 bg-slate-50/50">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-600 leading-relaxed">{session.draftNarrative}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Policy Proposals */}
      {activeTab === "proposals" && (
        <div className="space-y-4">
          {policyProposals.map((proposal) => (
            <div key={proposal.id} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900">{proposal.service}</span>
                    <StatusBadge status={proposal.status} />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide">{proposal.type.replace("_", " ")}</div>
                </div>
                {proposal.status === "proposed" && (
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors">Approve</button>
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">Reject</button>
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-600 mb-4">{proposal.rationale}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wide">FP Reduction</span>
                  </div>
                  <div className="text-xl font-black text-emerald-700">-{proposal.fpReduction}%</div>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-[10px] text-amber-700 font-bold uppercase tracking-wide">FN Increase</span>
                  </div>
                  <div className="text-xl font-black text-amber-700">+{proposal.fnIncrease}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* NL Query */}
      {activeTab === "nlquery" && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Query the Risk Graph in Natural Language</h3>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  value={nlQuery}
                  onChange={(e) => setNlQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") setNlSubmitted(true); }}
                  placeholder='e.g. "Show high-risk accounts linked by shared device in last 7 days"'
                  className="flex-1 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 outline-none"
                />
              </div>
              <button
                onClick={() => setNlSubmitted(true)}
                className="px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Show mule-pattern accounts",
                "High-risk devices shared by 3+ accounts",
                "Consortium matches in last week",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => { setNlQuery(q); setNlSubmitted(true); }}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {nlSubmitted && (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900">Results — {nlQuery || "mule-pattern accounts"}</div>
                <span className="text-xs text-slate-500">{nlQueryResults.length} entities · 12ms</span>
              </div>
              <div className="divide-y divide-slate-50">
                {nlQueryResults.map((result) => (
                  <div key={result.id} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition-colors">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-900">{result.label}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide">{result.entityType}</div>
                    </div>
                    <div className="text-xs text-slate-500">{result.alerts} alerts</div>
                    <div className="text-xs font-bold text-red-600">Score {result.riskScore.toFixed(2)}</div>
                    <div className="text-xs text-violet-600 font-medium">GNN {result.gnnScore.toFixed(2)}</div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
