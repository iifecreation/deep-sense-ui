"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Bot,
  FileText,
  CheckCircle,
  XCircle,
  Sliders,
  MessageSquare,
  ChevronRight,
  Send,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Search,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  agentInvestigationService,
  type AgentInvestigationSession,
  type AgentPolicyProposal,
  type NLQueryResultEntity,
} from "@/services/agent-investigation.service";
import { casesService } from "@/services/cases.service";
import type { FraudCaseRead } from "@/types";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-amber-50 border-amber-200 text-amber-700",
    approved: "bg-emerald-50 border-emerald-200 text-emerald-700",
    rejected: "bg-red-50 border-red-200 text-red-700",
    running: "bg-blue-50 border-blue-200 text-blue-700",
    completed: "bg-blue-50 border-blue-200 text-blue-700",
    proposed: "bg-violet-50 border-violet-200 text-violet-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wide ${map[status] || "bg-slate-50 border-slate-200 text-slate-500"}`}>
      {status}
    </span>
  );
}

function formatAge(value: string | null): string {
  if (!value) return "—";
  const diffMs = Date.now() - new Date(value).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function AgentCopilotPage() {
  const [activeTab, setActiveTab] = useState<"sessions" | "proposals" | "nlquery">("sessions");

  // Investigation sessions (case-scoped — the backend exposes sessions per case,
  // not a single cross-case feed, so the analyst picks a case first).
  const [cases, setCases] = useState<FraudCaseRead[]>([]);
  const [casesLoading, setCasesLoading] = useState(true);
  const [selectedCaseId, setSelectedCaseId] = useState("");
  const [sessions, setSessions] = useState<AgentInvestigationSession[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(false);
  const [sessionsError, setSessionsError] = useState<string | null>(null);
  const [starting, setStarting] = useState(false);
  const [actioningId, setActioningId] = useState<string | null>(null);

  // Policy proposals (org-wide, no case scoping needed)
  const [proposals, setProposals] = useState<AgentPolicyProposal[]>([]);
  const [proposalsLoading, setProposalsLoading] = useState(true);
  const [proposalsError, setProposalsError] = useState<string | null>(null);
  const [proposalActioningId, setProposalActioningId] = useState<string | null>(null);

  // NL query
  const [nlQuery, setNlQuery] = useState("");
  const [nlLoading, setNlLoading] = useState(false);
  const [nlError, setNlError] = useState<string | null>(null);
  const [nlResults, setNlResults] = useState<NLQueryResultEntity[]>([]);
  const [nlLatencyMs, setNlLatencyMs] = useState<number | null>(null);
  const [nlRanQuery, setNlRanQuery] = useState("");

  const loadCases = useCallback(async () => {
    setCasesLoading(true);
    try {
      const res = await casesService.listCases({ page: 1, page_size: 50, sort_by: "created_at", sort_order: "desc" });
      setCases(res.items);
      if (res.items.length > 0) setSelectedCaseId((prev) => prev || res.items[0].id);
    } catch {
      // handled by the empty-state below
    } finally {
      setCasesLoading(false);
    }
  }, []);

  const loadSessions = useCallback(async (caseId: string) => {
    if (!caseId) {
      setSessions([]);
      return;
    }
    setSessionsLoading(true);
    setSessionsError(null);
    try {
      const res = await agentInvestigationService.listCaseSessions(caseId, { limit: 20 });
      setSessions(res.items);
    } catch (cause) {
      setSessionsError(cause instanceof Error ? cause.message : "Unable to load investigation sessions.");
    } finally {
      setSessionsLoading(false);
    }
  }, []);

  const loadProposals = useCallback(async () => {
    setProposalsLoading(true);
    setProposalsError(null);
    try {
      const res = await agentInvestigationService.listPolicyProposals({ limit: 50 });
      setProposals(res.items);
    } catch (cause) {
      setProposalsError(cause instanceof Error ? cause.message : "Unable to load policy proposals.");
    } finally {
      setProposalsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadCases();
    void loadProposals();
  }, [loadCases, loadProposals]);

  useEffect(() => {
    if (selectedCaseId) void loadSessions(selectedCaseId);
  }, [selectedCaseId, loadSessions]);

  const handleStartInvestigation = async () => {
    if (!selectedCaseId) return;
    setStarting(true);
    setSessionsError(null);
    try {
      await agentInvestigationService.startInvestigation(selectedCaseId);
      await loadSessions(selectedCaseId);
    } catch (cause) {
      setSessionsError(cause instanceof Error ? cause.message : "Failed to start investigation.");
    } finally {
      setStarting(false);
    }
  };

  const handleSessionAction = async (sessionId: string, action: "approve" | "reject") => {
    setActioningId(sessionId);
    try {
      if (action === "approve") {
        await agentInvestigationService.approveSession(sessionId);
      } else {
        await agentInvestigationService.rejectSession(sessionId);
      }
      await loadSessions(selectedCaseId);
    } catch (cause) {
      setSessionsError(cause instanceof Error ? cause.message : "Failed to update session.");
    } finally {
      setActioningId(null);
    }
  };

  const handleProposalAction = async (proposalId: string, action: "approve" | "reject") => {
    setProposalActioningId(proposalId);
    try {
      if (action === "approve") {
        await agentInvestigationService.approvePolicyProposal(proposalId);
      } else {
        await agentInvestigationService.rejectPolicyProposal(proposalId);
      }
      await loadProposals();
    } catch (cause) {
      setProposalsError(cause instanceof Error ? cause.message : "Failed to update proposal.");
    } finally {
      setProposalActioningId(null);
    }
  };

  const runNlQuery = async (text: string) => {
    if (!text.trim()) return;
    setNlLoading(true);
    setNlError(null);
    try {
      const res = await agentInvestigationService.runNLQuery(text);
      setNlResults(res.results);
      setNlLatencyMs(res.execution_latency_ms);
      setNlRanQuery(text);
      if (!res.parse_success && res.parse_error) setNlError(res.parse_error);
    } catch (cause) {
      setNlError(cause instanceof Error ? cause.message : "Query failed.");
      setNlResults([]);
    } finally {
      setNlLoading(false);
    }
  };

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
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Case</label>
                <select
                  value={selectedCaseId}
                  onChange={(e) => setSelectedCaseId(e.target.value)}
                  disabled={casesLoading || cases.length === 0}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-50"
                >
                  {cases.length === 0 ? (
                    <option value="">{casesLoading ? "Loading cases…" : "No cases available"}</option>
                  ) : (
                    cases.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title || c.id} · {c.status}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <button
                onClick={() => void handleStartInvestigation()}
                disabled={starting || !selectedCaseId}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 self-end"
              >
                {starting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Bot className="w-3.5 h-3.5" />}
                {starting ? "Starting…" : "Start Investigation"}
              </button>
            </div>
          </div>

          {sessionsError ? (
            <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertTriangle className="h-5 w-5 shrink-0" /> {sessionsError}
            </div>
          ) : null}

          {sessionsLoading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : !selectedCaseId ? (
            <p className="p-6 text-sm text-slate-500 bg-white border border-slate-200 rounded-xl">
              Select a case to view or start agent investigation sessions.
            </p>
          ) : sessions.length === 0 ? (
            <p className="p-6 text-sm text-slate-500 bg-white border border-slate-200 rounded-xl">
              No investigation sessions for this case yet.
            </p>
          ) : (
            sessions.map((session) => (
              <div key={session.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4 border-b border-slate-100">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-900">
                        {session.case_id ? `CASE-${session.case_id.slice(0, 8)}` : "Unlinked"}
                      </span>
                      <StatusBadge status={session.analyst_review_status} />
                      <span className="text-[10px] text-slate-400">{formatAge(session.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                      <span>{session.steps_completed}/5 steps completed</span>
                      <span>{session.total_evidence_items} evidence items</span>
                      <span>confidence {session.confidence_score != null ? `${(session.confidence_score * 100).toFixed(0)}%` : "—"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {session.analyst_review_status === "pending" && (
                      <>
                        <button
                          onClick={() => void handleSessionAction(session.id, "approve")}
                          disabled={actioningId === session.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                        >
                          <CheckCircle className="w-3 h-3" /> Approve SAR
                        </button>
                        <button
                          onClick={() => void handleSessionAction(session.id, "reject")}
                          disabled={actioningId === session.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors disabled:opacity-50"
                        >
                          <XCircle className="w-3 h-3" /> Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="px-5 py-4 bg-slate-50/50">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {session.draft_narrative || "No draft narrative generated for this session."}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Policy Proposals */}
      {activeTab === "proposals" && (
        <div className="space-y-4">
          {proposalsError ? (
            <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertTriangle className="h-5 w-5 shrink-0" /> {proposalsError}
            </div>
          ) : null}

          {proposalsLoading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : proposals.length === 0 ? (
            <p className="p-6 text-sm text-slate-500 bg-white border border-slate-200 rounded-xl">
              No autonomous policy proposals yet. The policy-tuning agent proposes threshold or weight
              adjustments here after it detects FP/FN drift during backtesting.
            </p>
          ) : (
            proposals.map((proposal) => (
              <div key={proposal.id} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-slate-900">{proposal.service_key}</span>
                      <StatusBadge status={proposal.status} />
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">{proposal.proposal_type.replace(/_/g, " ")}</div>
                  </div>
                  {proposal.status === "proposed" && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => void handleProposalAction(proposal.id, "approve")}
                        disabled={proposalActioningId === proposal.id}
                        className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => void handleProposalAction(proposal.id, "reject")}
                        disabled={proposalActioningId === proposal.id}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors disabled:opacity-50"
                      >
                        Reject
                      </button>
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
                    <div className="text-xl font-black text-emerald-700">
                      {proposal.fp_reduction_estimate != null ? `-${proposal.fp_reduction_estimate}%` : "—"}
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-[10px] text-amber-700 font-bold uppercase tracking-wide">FN Increase</span>
                    </div>
                    <div className="text-xl font-black text-amber-700">
                      {proposal.fn_increase_estimate != null ? `+${proposal.fn_increase_estimate}%` : "—"}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
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
                  onKeyDown={(e) => { if (e.key === "Enter") void runNlQuery(nlQuery); }}
                  placeholder='e.g. "Show high-risk accounts linked by shared device in last 7 days"'
                  className="flex-1 bg-transparent text-xs text-slate-700 placeholder:text-slate-400 outline-none"
                />
              </div>
              <button
                onClick={() => void runNlQuery(nlQuery)}
                disabled={nlLoading || !nlQuery.trim()}
                className="px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
              >
                {nlLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Show mule-pattern accounts",
                "High-risk devices shared by more than 3 accounts",
                "High-risk accounts in last 7 days",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => { setNlQuery(q); void runNlQuery(q); }}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {nlError ? (
            <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              <AlertTriangle className="h-5 w-5 shrink-0" /> {nlError}
            </div>
          ) : null}

          {nlLoading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : nlRanQuery && !nlError ? (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900">Results — {nlRanQuery}</div>
                <span className="text-xs text-slate-500">{nlResults.length} entities · {nlLatencyMs}ms</span>
              </div>
              {nlResults.length === 0 ? (
                <p className="p-6 text-sm text-slate-500">No entities matched this query.</p>
              ) : (
                <div className="divide-y divide-slate-50">
                  {nlResults.map((result) => (
                    <div key={result.id} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition-colors">
                      <div className="flex-1">
                        <div className="text-xs font-bold text-slate-900">{result.display_label || result.entity_key}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wide">{result.entity_type}</div>
                      </div>
                      <div className="text-xs text-slate-500">{result.linked_alert_count} alerts</div>
                      <div className="text-xs font-bold text-red-600">Score {result.risk_score.toFixed(2)}</div>
                      <div className="text-xs text-violet-600 font-medium">
                        GNN {result.gnn_mule_network_score != null ? result.gnn_mule_network_score.toFixed(2) : "—"}
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
