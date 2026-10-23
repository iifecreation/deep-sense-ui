"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Activity,
  BookOpen,
  AlertTriangle,
  Info,
  Loader2,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  explainabilityService,
  DecisionExplanation,
  ModelDriftSnapshot,
  ModelCard,
} from "@/services/explainability.service";

function SHAPBar({ name, value }: { name: string; value: number }) {
  const isPositive = value >= 0;
  const width = Math.min(Math.abs(value) * 300, 48);
  return (
    <div className="flex items-center gap-4">
      <div className="w-44 text-xs text-slate-700 font-medium truncate">{name}</div>
      <div className="flex items-center gap-2 flex-1">
        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden flex">
          {isPositive ? (
            <><div className="w-12 h-2" /><div className="h-2 rounded-full bg-red-400" style={{ width }} /></>
          ) : (
            <><div className="h-2 rounded-full bg-emerald-400 ml-auto" style={{ width }} /><div className="w-12 h-2" /></>
          )}
        </div>
        <span className={`text-xs font-bold tabular-nums ${isPositive ? "text-red-600" : "text-emerald-600"}`}>
          {isPositive ? "+" : ""}{value.toFixed(3)}
        </span>
      </div>
    </div>
  );
}

function ExplanationTab() {
  const [decisionId, setDecisionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<DecisionExplanation | null>(null);

  const load = async () => {
    if (!decisionId.trim()) return;
    setLoading(true);
    setError(null);
    setExplanation(null);
    try {
      setExplanation(await explainabilityService.getDecisionExplanation(decisionId.trim()));
    } catch (e) {
      setError(e instanceof Error ? e.message : "No explanation record for this transaction.");
    } finally {
      setLoading(false);
    }
  };

  const shapEntries = explanation?.shap_values ? Object.entries(explanation.shap_values) : [];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Input
          placeholder="Transaction ID (UUID)"
          value={decisionId}
          onChange={(e) => setDecisionId(e.target.value)}
          className="max-w-md"
        />
        <Button onClick={() => void load()} disabled={loading || !decisionId.trim()}>
          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
          Look Up
        </Button>
      </div>
      {error ? <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div> : null}
      {explanation ? (
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">SHAP Feature Importance</h3>
              <span className="text-xs text-slate-500">Score {explanation.final_score.toFixed(3)}</span>
            </div>
            {shapEntries.length > 0 ? (
              <div className="space-y-3">
                {shapEntries.map(([name, value]) => <SHAPBar key={name} name={name} value={value} />)}
              </div>
            ) : (
              <p className="text-sm text-slate-500 italic">No SHAP values recorded for this decision.</p>
            )}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-[10px] text-slate-500">
              <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              Positive SHAP values (red) increase risk score. Negative values (green) reduce it.
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-xs text-slate-500 mb-1">Risk Score</div>
              <div className="text-3xl font-black text-slate-900">{explanation.final_score.toFixed(3)}</div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-1">{explanation.decision}</div>
            </div>
            {explanation.human_summary ? (
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-xs font-bold text-slate-900 mb-2">Summary</div>
                <p className="text-xs text-slate-600 leading-relaxed">{explanation.human_summary}</p>
              </div>
            ) : null}
            {explanation.top_reasons && explanation.top_reasons.length > 0 ? (
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="text-xs font-bold text-slate-900 mb-3">Top Reasons</div>
                {explanation.top_reasons.map((r, i) => (
                  <div key={i} className="flex items-center justify-between text-xs text-slate-600 py-1">
                    <span>
                      <span className="font-semibold text-slate-800">{r.component}</span>: {r.reason}
                    </span>
                    {r.score != null ? <span className="font-mono text-[10px] text-slate-400 ml-2">{r.score.toFixed(3)}</span> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : !loading && !error ? (
        <p className="text-sm text-slate-400 italic py-8 text-center">Enter a transaction ID to inspect its SHAP/LIME explanation.</p>
      ) : null}
    </div>
  );
}

function DriftTab() {
  const [modelId, setModelId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [snapshots, setSnapshots] = useState<ModelDriftSnapshot[] | null>(null);

  const load = async () => {
    if (!modelId.trim()) return;
    setLoading(true);
    setError(null);
    setSnapshots(null);
    try {
      const res = await explainabilityService.listModelDrift(modelId.trim());
      setSnapshots(res.items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load drift snapshots.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Input
          placeholder="Model ID (UUID)"
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
          className="max-w-md"
        />
        <Button onClick={() => void load()} disabled={loading || !modelId.trim()}>
          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
          Look Up
        </Button>
      </div>
      {error ? <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div> : null}
      {snapshots ? (
        snapshots.length === 0 ? (
          <p className="text-sm text-slate-400 italic py-8 text-center">No drift snapshots recorded for this model yet.</p>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Drift History ({snapshots.length})</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {snapshots.map((snap) => (
                <div key={snap.id} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50">
                  <div className="w-40 text-xs font-medium text-slate-500">{new Date(snap.snapshot_at).toLocaleDateString()}</div>
                  <div className="flex-1">
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${snap.psi_score > 0.1 ? "bg-amber-400" : "bg-emerald-400"}`}
                        style={{ width: `${Math.min(snap.psi_score * 400, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-16 text-right text-xs font-bold text-slate-900">{snap.psi_score.toFixed(3)}</div>
                  <div className="w-24 text-right">
                    {snap.alert_triggered ? (
                      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wide flex items-center gap-1 justify-end">
                        <AlertTriangle className="w-3 h-3" />{snap.alert_severity || "alert"}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wide">stable</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : !loading && !error ? (
        <p className="text-sm text-slate-400 italic py-8 text-center">Enter a model ID to see its drift monitoring history.</p>
      ) : null}
    </div>
  );
}

function ModelCardsTab() {
  const [versionId, setVersionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [card, setCard] = useState<ModelCard | null>(null);
  const [notFound, setNotFound] = useState(false);

  const [intendedUse, setIntendedUse] = useState("");
  const [trainingData, setTrainingData] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!versionId.trim()) return;
    setLoading(true);
    setError(null);
    setCard(null);
    setNotFound(false);
    try {
      setCard(await explainabilityService.getModelCard(versionId.trim()));
    } catch {
      setNotFound(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const create = async () => {
    if (!intendedUse.trim() || !trainingData.trim()) return;
    setSaving(true);
    setError(null);
    try {
      const created = await explainabilityService.createModelCard({
        model_version_id: versionId.trim(),
        intended_use: intendedUse.trim(),
        training_data_description: trainingData.trim(),
        evaluation_metrics: {},
      });
      setCard(created);
      setNotFound(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create model card.");
    } finally {
      setSaving(false);
    }
  };

  const publish = async () => {
    if (!card) return;
    setSaving(true);
    setError(null);
    try {
      setCard(await explainabilityService.publishModelCard(card.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to publish model card.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Input
          placeholder="Model Version ID (UUID)"
          value={versionId}
          onChange={(e) => setVersionId(e.target.value)}
          className="max-w-md"
        />
        <Button onClick={() => void load()} disabled={loading || !versionId.trim()}>
          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
          Look Up
        </Button>
      </div>
      {error ? <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div> : null}

      {card ? (
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold text-slate-900">{card.version_label || card.model_version_id}</span>
                {card.is_published ? (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-emerald-50 border-emerald-200 text-emerald-700">
                    Published {card.published_at ? new Date(card.published_at).toLocaleDateString() : ""}
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border bg-slate-50 border-slate-200 text-slate-500">Draft</span>
                )}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wide">{card.intended_use}</div>
            </div>
            {!card.is_published ? (
              <Button size="sm" onClick={() => void publish()} disabled={saving}>
                {saving ? <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" /> : null}
                Publish
              </Button>
            ) : null}
          </div>
          <p className="text-xs text-slate-600 mb-3">{card.training_data_description}</p>
          {card.known_limitations ? (
            <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-3">{card.known_limitations}</p>
          ) : null}
        </div>
      ) : notFound ? (
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
          <p className="text-sm text-slate-600">No model card exists yet for this version. Create one:</p>
          <Input placeholder="Intended use" value={intendedUse} onChange={(e) => setIntendedUse(e.target.value)} />
          <Textarea placeholder="Training data description" value={trainingData} onChange={(e) => setTrainingData(e.target.value)} />
          <Button onClick={() => void create()} disabled={saving || !intendedUse.trim() || !trainingData.trim()}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Create Model Card
          </Button>
        </div>
      ) : !loading ? (
        <p className="text-sm text-slate-400 italic py-8 text-center">Enter a model version ID to view or create its governance model card.</p>
      ) : null}
    </div>
  );
}

export default function ExplainabilityPage() {
  const [activeTab, setActiveTab] = useState<"shap" | "drift" | "cards">("shap");

  const tabs = [
    { id: "shap", label: "Decision Explanation", icon: BarChart3 },
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
          <p className="text-sm text-slate-500">SHAP/LIME explanations · Drift monitoring · Model cards</p>
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

      {activeTab === "shap" && <ExplanationTab />}
      {activeTab === "drift" && <DriftTab />}
      {activeTab === "cards" && <ModelCardsTab />}
    </div>
  );
}
