"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Layers,
  BookOpen,
  Activity,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Info,
  Sliders,
} from "lucide-react";

const shapDecision = {
  id: "DEC-88432",
  score: 0.76,
  decision: "review",
  features: [
    { name: "velocity_1h_count", shap: 0.18, direction: "up" },
    { name: "ip_proxy", shap: 0.14, direction: "up" },
    { name: "is_new_device", shap: 0.09, direction: "up" },
    { name: "email_age_days", shap: -0.12, direction: "down" },
    { name: "device_seen_before", shap: -0.06, direction: "down" },
    { name: "kyc_level", shap: -0.05, direction: "down" },
    { name: "transaction_amount", shap: 0.04, direction: "up" },
  ],
};

const driftSnapshots = [
  { date: "Sep 3", psi: 0.08, severity: null, samples: 12400 },
  { date: "Sep 2", psi: 0.11, severity: "warning", samples: 11800 },
  { date: "Sep 1", psi: 0.07, severity: null, samples: 13200 },
  { date: "Aug 31", psi: 0.06, severity: null, samples: 14100 },
  { date: "Aug 30", psi: 0.19, severity: "warning", samples: 10200 },
];

const modelCards = [
  { id: "mc1", model: "SyntheticIdentity v2.4", published: true, publishedAt: "Aug 29", auc: 0.94, f1: 0.88, regulatory: "SR11-7 compliant" },
  { id: "mc2", model: "CNP Fraud v3.1", published: true, publishedAt: "Aug 15", auc: 0.91, f1: 0.85, regulatory: "pending" },
  { id: "mc3", model: "GNN FraudRing v1.0", published: false, publishedAt: null, auc: 0.89, f1: 0.82, regulatory: "draft" },
];

function SHAPBar({ value }: { value: number }) {
  const isPositive = value >= 0;
  const width = Math.abs(value) * 300;
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden flex">
        {isPositive ? (
          <><div className="w-12 h-2" /><div className="h-2 rounded-full bg-red-400" style={{ width: Math.min(width, 48) }} /></>
        ) : (
          <><div className="h-2 rounded-full bg-emerald-400 ml-auto" style={{ width: Math.min(Math.abs(width), 48) }} /><div className="w-12 h-2" /></>
        )}
      </div>
      <span className={`text-xs font-bold tabular-nums ${isPositive ? "text-red-600" : "text-emerald-600"}`}>
        {isPositive ? "+" : ""}{value.toFixed(3)}
      </span>
    </div>
  );
}

export default function ExplainabilityPage() {
  const [activeTab, setActiveTab] = useState<"shap" | "drift" | "cards">("shap");

  const tabs = [
    { id: "shap", label: "SHAP Decision Viewer", icon: BarChart3 },
    { id: "drift", label: "Model Drift", icon: Activity },
    { id: "cards", label: "Model Cards", icon: BookOpen },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Explainability & Governance</h1>
          </div>
          <p className="text-sm text-slate-500">SHAP/LIME explanations · Drift monitoring · Model cards · Regulator tooling</p>
        </div>
      </div>

      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id ? "bg-white text-amber-700 shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "shap" && (
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">SHAP Feature Importance</h3>
              <span className="text-xs text-slate-500">{shapDecision.id} · Score {shapDecision.score}</span>
            </div>
            <div className="space-y-3">
              {shapDecision.features.map((f) => (
                <div key={f.name} className="flex items-center gap-4">
                  <div className="w-44 text-xs text-slate-700 font-medium truncate">{f.name}</div>
                  <SHAPBar value={f.shap} />
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-[10px] text-slate-500">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              Positive SHAP values (red) increase risk score. Negative values (green) reduce it. Magnitude indicates feature impact.
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-1">Risk Score</div>
              <div className="text-3xl font-black text-slate-900">{shapDecision.score}</div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-1">{shapDecision.decision}</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs font-bold text-slate-900 mb-3">Top Risk Drivers</div>
              {shapDecision.features.filter(f => f.shap > 0).slice(0, 3).map((f) => (
                <div key={f.name} className="flex items-center justify-between py-1">
                  <span className="text-xs text-slate-600">{f.name}</span>
                  <span className="text-xs font-bold text-red-600">+{f.shap.toFixed(3)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "drift" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-2">Current PSI Score</div>
              <div className="text-2xl font-black text-amber-600">0.11</div>
              <div className="text-[10px] text-amber-600 mt-1 font-bold uppercase tracking-wide">Moderate Drift</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-2">Alert Threshold</div>
              <div className="text-2xl font-black text-slate-900">0.25</div>
              <div className="text-[10px] text-slate-400 mt-1">PSI severe drift level</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-2">Samples Analyzed</div>
              <div className="text-2xl font-black text-slate-900">12,400</div>
              <div className="text-[10px] text-slate-400 mt-1">current period</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Drift History</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {driftSnapshots.map((snap) => (
                <div key={snap.date} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50">
                  <div className="w-16 text-xs font-medium text-slate-500">{snap.date}</div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${snap.psi > 0.10 ? "bg-amber-400" : "bg-emerald-400"}`}
                        style={{ width: `${Math.min(snap.psi * 400, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right text-xs font-bold text-slate-900">{snap.psi.toFixed(3)}</div>
                  <div className="w-20 text-right">
                    {snap.severity ? (
                      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wide flex items-center gap-1 justify-end">
                        <AlertTriangle className="w-3 h-3" />{snap.severity}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wide">stable</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "cards" && (
        <div className="space-y-4">
          {modelCards.map((card) => (
            <div key={card.id} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900">{card.model}</span>
                    {card.published ? (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-emerald-50 border-emerald-200 text-emerald-700">Published {card.publishedAt}</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-slate-50 border-slate-200 text-slate-500">Draft</span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wide">{card.regulatory}</div>
                </div>
                <button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  {card.published ? "View Card" : "Edit & Publish"}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-[10px] text-slate-500 mb-0.5">AUC-ROC</div>
                  <div className="text-lg font-black text-slate-900">{card.auc}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="text-[10px] text-slate-500 mb-0.5">F1 Score</div>
                  <div className="text-lg font-black text-slate-900">{card.f1}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
