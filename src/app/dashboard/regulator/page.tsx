"use client";

import React, { useState } from "react";
import {
  Building2,
  FileCheck,
  Send,
  Hash,
  ChevronRight,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  Lock,
} from "lucide-react";

const submissions = [
  { id: "sub1", type: "SAR", ref: "SAR-2026-4412", regulator: "FinCEN", jurisdiction: "US", status: "acknowledged", submittedAt: "Sep 2", ackRef: "FCN-89221", hash: "3f8a2c..." },
  { id: "sub2", type: "CTR", ref: "CTR-2026-0891", regulator: "FinCEN", jurisdiction: "US", status: "submitted", submittedAt: "Sep 3", ackRef: null, hash: "7d1e4b..." },
  { id: "sub3", type: "model_risk_report", ref: "MRR-Q3-2026", regulator: "PRA", jurisdiction: "UK", status: "pending", submittedAt: null, ackRef: null, hash: null },
];

const submissionTypeColors: Record<string, string> = {
  SAR: "bg-red-50 border-red-200 text-red-700",
  CTR: "bg-orange-50 border-orange-200 text-orange-700",
  model_risk_report: "bg-violet-50 border-violet-200 text-violet-700",
  AML_report: "bg-blue-50 border-blue-200 text-blue-700",
};

function StatusIcon({ status }: { status: string }) {
  if (status === "acknowledged") return <CheckCircle className="w-4 h-4 text-emerald-500" />;
  if (status === "submitted") return <Clock className="w-4 h-4 text-blue-500" />;
  if (status === "rejected") return <XCircle className="w-4 h-4 text-red-500" />;
  return <Clock className="w-4 h-4 text-slate-400" />;
}

export default function RegulatorPage() {
  const [activeTab, setActiveTab] = useState<"submissions" | "export" | "zkproof">("submissions");
  const [submissionType, setSubmissionType] = useState("SAR");
  const [regulator, setRegulator] = useState("FinCEN");
  const [submitted, setSubmitted] = useState(false);

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
          <p className="text-sm text-slate-500">SAR/CTR submissions · Model risk reports · ZK compliance attestation</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Submissions This Month", value: "14", sub: "across all types" },
          { label: "Acknowledged", value: "12", sub: "by regulators" },
          { label: "Avg Submission Latency", value: "2.3h", sub: "from trigger to file" },
          { label: "Integrity Checks Passed", value: "100%", sub: "cryptographic hashes" },
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
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700 transition-colors">
              <Send className="w-3 h-3" /> New Submission
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {submissions.map((sub) => (
              <div key={sub.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                <StatusIcon status={sub.status} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border ${submissionTypeColors[sub.type] || "bg-slate-50 border-slate-200 text-slate-600"}`}>
                      {sub.type.replace("_", " ")}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{sub.ref}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span>{sub.regulator} · {sub.jurisdiction}</span>
                    {sub.submittedAt && <span>Submitted {sub.submittedAt}</span>}
                    {sub.ackRef && <span>ACK: {sub.ackRef}</span>}
                  </div>
                </div>
                {sub.hash && (
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Hash className="w-3 h-3" />
                    <span className="font-mono">{sub.hash}</span>
                  </div>
                )}
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wide ${
                  sub.status === "acknowledged" ? "bg-emerald-50 border-emerald-200 text-emerald-700" :
                  sub.status === "submitted" ? "bg-blue-50 border-blue-200 text-blue-700" :
                  "bg-slate-50 border-slate-200 text-slate-500"
                }`}>
                  {sub.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "export" && (
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-6">Compliance Report Submission Pipeline</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 block">Submission Type</label>
              <select
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                {["SAR", "CTR", "model_risk_report", "AML_report", "KYC_attestation"].map((t) => (
                  <option key={t} value={t}>{t.replace("_", " ")}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1.5 block">Regulator</label>
              <select
                value={regulator}
                onChange={(e) => setRegulator(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
              >
                {["FinCEN", "FCA", "PRA", "ESMA", "BaFin"].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 mb-2">
              <Hash className="w-4 h-4 text-slate-400" />
              <span className="font-bold">Cryptographic Hash</span>
            </div>
            Submission payload will be SHA256-hashed at submission time. This hash is immutable — any post-hoc modification to the underlying report is immediately detectable.
          </div>
          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-3 bg-rose-600 text-white text-sm font-bold rounded-xl hover:bg-rose-700 transition-colors"
          >
            {submitted ? "✓ Submitted" : `Submit to ${regulator}`}
          </button>
        </div>
      )}

      {activeTab === "zkproof" && (
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">ZK Compliance Attestation</h3>
          <p className="text-xs text-slate-500 mb-6">Generate a zero-knowledge proof for any decision — regulators can verify compliance without seeing underlying transaction data.</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { type: "aml_pass", label: "AML Pass Proof", desc: "Proves AML score < threshold without revealing the score" },
              { type: "sanctions_clear", label: "Sanctions Clear", desc: "Proves no sanctions match without revealing entity identity" },
              { type: "kyc_complete", label: "KYC Complete", desc: "Proves KYC process completed to required level" },
              { type: "risk_score_threshold", label: "Score Threshold", desc: "Proves risk score within regulatory threshold band" },
            ].map((proof) => (
              <div key={proof.type} className="border border-slate-200 rounded-xl p-4 hover:border-rose-300 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors">{proof.label}</span>
                  <Lock className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500 transition-colors" />
                </div>
                <p className="text-[10px] text-slate-500">{proof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
