"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Building2,
  FileCheck,
  Send,
  Hash,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  Lock,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { reportsService } from "@/services/reports.service";
import { cryptographicService, type ZkProofRecord } from "@/services/cryptographic.service";
import type { ReportRead } from "@/types";

interface SubmissionRecord {
  id: string;
  report_id: string;
  destination: string;
  status: string;
  submitted_at: string;
  response_json: Record<string, unknown> | null;
  external_reference: string | null;
  request_id: string | null;
  created_at: string;
}

const DESTINATIONS = ["fincen", "fca", "pra", "esma", "bafin"];
const PROOF_TYPES = [
  { value: "aml_pass", label: "AML Pass Proof", desc: "Proves AML score < threshold without revealing the score" },
  { value: "sanctions_clear", label: "Sanctions Clear", desc: "Proves no sanctions match without revealing entity identity" },
  { value: "kyc_complete", label: "KYC Complete", desc: "Proves KYC process completed to required level" },
  { value: "risk_score_threshold", label: "Score Threshold", desc: "Proves risk score within regulatory threshold band" },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "accepted" || status === "acknowledged") return <CheckCircle className="w-4 h-4 text-emerald-500" />;
  if (status === "submitted" || status === "pending") return <Clock className="w-4 h-4 text-blue-500" />;
  if (status === "rejected" || status === "failed") return <XCircle className="w-4 h-4 text-red-500" />;
  return <Clock className="w-4 h-4 text-slate-400" />;
}

function formatDate(value?: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleString();
}

export default function RegulatorPage() {
  const [activeTab, setActiveTab] = useState<"submissions" | "export" | "zkproof">("submissions");

  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [reports, setReports] = useState<ReportRead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedReportId, setSelectedReportId] = useState("");
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const [decisionId, setDecisionId] = useState("");
  const [proofType, setProofType] = useState(PROOF_TYPES[0].value);
  const [generating, setGenerating] = useState(false);
  const [proofError, setProofError] = useState<string | null>(null);
  const [proofs, setProofs] = useState<ZkProofRecord[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [subs, reportList] = await Promise.all([
        reportsService.listSubmissions() as Promise<SubmissionRecord[]>,
        reportsService.listReports(),
      ]);
      setSubmissions(subs);
      setReports(reportList.items);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to load regulator submission data.");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadProofs = useCallback(async () => {
    try {
      const res = await cryptographicService.listZkProofs({ limit: 20 });
      setProofs(res.items);
    } catch {
      // ZK proof history is a secondary panel; a load failure there shouldn't block the page.
    }
  }, []);

  useEffect(() => {
    void load();
    void loadProofs();
  }, [load, loadProofs]);

  const submittableReports = reports.filter((r) =>
    r.status === "approved" || r.status === "ready_for_submission",
  );

  const acknowledgedCount = submissions.filter((s) => s.status === "accepted" || s.status === "acknowledged").length;
  const pendingCount = submissions.filter((s) => s.status === "submitted" || s.status === "pending").length;

  const handleSubmit = async () => {
    if (!selectedReportId) return;
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      await reportsService.submitReport(selectedReportId, destination);
      setSubmitSuccess(`Report submitted to ${destination.toUpperCase()}.`);
      setSelectedReportId("");
      await load();
    } catch (cause) {
      setSubmitError(cause instanceof Error ? cause.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGenerateProof = async () => {
    if (!decisionId.trim()) return;
    setGenerating(true);
    setProofError(null);
    try {
      await cryptographicService.generateZkProof(decisionId.trim(), proofType);
      await loadProofs();
    } catch (cause) {
      setProofError(cause instanceof Error ? cause.message : "Proof generation failed.");
    } finally {
      setGenerating(false);
    }
  };

  const tabs = [
    { id: "submissions", label: "Submissions", icon: FileCheck },
    { id: "export", label: "Export Pipeline", icon: Download },
    { id: "zkproof", label: "ZK Attestation", icon: Lock },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Regulator Tooling</h1>
          </div>
          <p className="text-sm text-slate-500">STR/CTR submissions · Report filing · ZK compliance attestation</p>
        </div>
      </div>

      {error ? (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertTriangle className="h-5 w-5 shrink-0" /> {error}
        </div>
      ) : null}

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Submissions", value: loading ? "…" : String(submissions.length), sub: "tracked filings" },
          { label: "Acknowledged", value: loading ? "…" : String(acknowledgedCount), sub: "by regulators" },
          { label: "Pending", value: loading ? "…" : String(pendingCount), sub: "awaiting response" },
          { label: "Submittable Reports", value: loading ? "…" : String(submittableReports.length), sub: "approved, ready to file" },
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
              activeTab === tab.id ? "bg-white text-rose-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "submissions" && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Regulatory Submissions</h3>
          </div>
          {loading ? (
            <div className="flex items-center justify-center p-10 text-slate-400">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : submissions.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No submissions have been filed yet.</p>
          ) : (
            <div className="divide-y divide-slate-50">
              {submissions.map((sub) => {
                const report = reports.find((r) => r.id === sub.report_id);
                return (
                  <div key={sub.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                    <StatusIcon status={sub.status} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border bg-slate-50 border-slate-200 text-slate-600">
                          {report?.report_type || "report"}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{report?.title || sub.report_id}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400">
                        <span>{sub.destination.toUpperCase()}</span>
                        <span>Submitted {formatDate(sub.submitted_at)}</span>
                        {sub.external_reference && <span>Ref: {sub.external_reference}</span>}
                      </div>
                    </div>
                    {sub.external_reference && (
                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Hash className="w-3 h-3" />
                        <span className="font-mono">{sub.external_reference}</span>
                      </div>
                    )}
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                        sub.status === "accepted" || sub.status === "acknowledged"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : sub.status === "submitted" || sub.status === "pending"
                            ? "bg-blue-50 border-blue-200 text-blue-700"
                            : "bg-slate-50 border-slate-200 text-slate-500"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === "export" && (
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-6">Submit a Report for Filing</h3>
          {submitError ? (
            <div className="mb-4 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
              <AlertTriangle className="h-4 w-4 shrink-0" /> {submitError}
            </div>
          ) : null}
          {submitSuccess ? (
            <div className="mb-4 flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">
              <CheckCircle className="h-4 w-4 shrink-0" /> {submitSuccess}
            </div>
          ) : null}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 block">Report</label>
              <select
                value={selectedReportId}
                onChange={(e) => setSelectedReportId(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                <option value="">Select a report ready for submission…</option>
                {submittableReports.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.report_type} · {r.title}
                  </option>
                ))}
              </select>
              {!loading && submittableReports.length === 0 ? (
                <p className="mt-1.5 text-[10px] text-slate-400">
                  No reports are currently approved or ready for submission.
                </p>
              ) : null}
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 block">Regulator</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>{d.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-slate-400" />
              <span className="font-bold">Provider Filing</span>
            </div>
            Submitting routes through the real provider gateway for the selected regulator and persists the
            provider&apos;s response, including its external reference, once filed.
          </div>
          <button
            onClick={() => void handleSubmit()}
            disabled={submitting || !selectedReportId}
            className="w-full py-3 bg-rose-600 text-white text-sm font-bold rounded-xl hover:bg-rose-700 transition-colors disabled:opacity-50"
          >
            {submitting ? (
              <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
            ) : (
              <Send className="w-4 h-4 inline mr-2" />
            )}
            {submitting ? "Submitting..." : `Submit to ${destination.toUpperCase()}`}
          </button>
        </div>
      )}

      {activeTab === "zkproof" && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Generate ZK Compliance Attestation</h3>
            <p className="text-xs text-slate-500 mb-6">
              Generate a zero-knowledge proof for a risk decision — regulators can verify compliance without
              seeing underlying transaction data.
            </p>
            {proofError ? (
              <div className="mb-4 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-800">
                <AlertTriangle className="h-4 w-4 shrink-0" /> {proofError}
              </div>
            ) : null}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Decision ID</label>
                <input
                  value={decisionId}
                  onChange={(e) => setDecisionId(e.target.value)}
                  placeholder="Risk decision UUID"
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block">Proof Type</label>
                <select
                  value={proofType}
                  onChange={(e) => setProofType(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                  {PROOF_TYPES.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={() => void handleGenerateProof()}
              disabled={generating || !decisionId.trim()}
              className="px-5 py-2.5 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 transition-colors disabled:opacity-50"
            >
              {generating ? <Loader2 className="w-3.5 h-3.5 animate-spin inline mr-2" /> : null}
              {generating ? "Generating..." : "Generate Proof"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {PROOF_TYPES.map((proof) => (
              <div key={proof.value} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900">{proof.label}</span>
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-[10px] text-slate-500">{proof.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Generated Proofs</h3>
            </div>
            {proofs.length === 0 ? (
              <p className="p-6 text-sm text-slate-500">No ZK proofs have been generated yet.</p>
            ) : (
              <div className="divide-y divide-slate-50">
                {proofs.map((p) => (
                  <div key={p.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                    <Lock className="w-4 h-4 text-slate-400" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900">
                        {PROOF_TYPES.find((t) => t.value === p.proof_type)?.label || p.proof_type}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400">
                        <span>protocol: {p.zk_protocol}</span>
                        <span className="font-mono truncate max-w-[180px]">{p.proof_commitment}</span>
                        <span>{formatDate(p.created_at)}</span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                        p.proof_valid
                          ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                          : "bg-slate-50 border-slate-200 text-slate-500"
                      }`}
                    >
                      {p.proof_valid === null ? "unverified" : p.proof_valid ? "valid" : "invalid"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
