"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Save,
  Plus,
  Trash2,
  AlertCircle,
  Copy,
  GitBranch,
  Zap,
  Activity,
  CheckCircle2,
  PenTool,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fraudRulesService } from "@/services/fraud-rules.service";

type Condition = {
  id: string;
  field: string;
  operator: string;
  value: string;
};

// A practical subset of the backend's field whitelist (app/services/rules/conditions.py
// ALLOWED_FIELDS) — the full list has 80+ entries, this covers the common ones.
const FIELD_OPTIONS = [
  "amount", "currency", "transaction_type", "channel", "account_id", "merchant_id", "device_id",
  "enrichment.is_new_device", "enrichment.velocity_1h", "enrichment.velocity_24h",
  "enrichment.ip_blacklisted", "enrichment.country_code", "enrichment.unusual_country",
  "enrichment.impossible_travel", "enrichment.graph_risk_score", "enrichment.ml_score",
  "enrichment.anomaly_score", "enrichment.device_risk_score", "enrichment.sanctions_match",
  "enrichment.pep_match", "enrichment.watchlist_match", "enrichment.is_high_risk_country",
];

// Backend-supported leaf operators (app/services/rules/conditions.py ALLOWED_OPERATORS).
const OPERATORS: { value: string; label: string; valueKind: "number" | "text" | "list" | "none" }[] = [
  { value: "eq", label: "Equals (==)", valueKind: "text" },
  { value: "ne", label: "Not Equals (!=)", valueKind: "text" },
  { value: "gt", label: "Greater Than (>)", valueKind: "number" },
  { value: "gte", label: "Greater Than or Equal (>=)", valueKind: "number" },
  { value: "lt", label: "Less Than (<)", valueKind: "number" },
  { value: "lte", label: "Less Than or Equal (<=)", valueKind: "number" },
  { value: "in", label: "In List", valueKind: "list" },
  { value: "not_in", label: "Not In List", valueKind: "list" },
  { value: "contains", label: "Contains", valueKind: "text" },
  { value: "exists", label: "Exists", valueKind: "none" },
  { value: "not_exists", label: "Does Not Exist", valueKind: "none" },
];

const SEVERITIES = ["low", "medium", "high", "critical"];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 128) || "untitled_rule";
}

function parseConditionValue(raw: string, kind: string): unknown {
  if (kind === "none") return true;
  if (kind === "list") {
    return raw.split(",").map((s) => s.trim()).filter(Boolean).map((s) => (Number.isNaN(Number(s)) ? s : Number(s)));
  }
  if (kind === "number") {
    const n = Number(raw);
    return Number.isNaN(n) ? raw : n;
  }
  // text: still coerce to number if it looks numeric, since "eq"/"ne"/"contains" are used for
  // both strings and numeric fields in this DSL.
  if (raw !== "" && !Number.isNaN(Number(raw))) return Number(raw);
  return raw;
}

function buildConditionsJson(conditions: Condition[]): Record<string, unknown> {
  const leaves = conditions
    .filter((c) => c.field && c.operator)
    .map((c) => {
      const opDef = OPERATORS.find((o) => o.value === c.operator);
      const kind = opDef?.valueKind || "text";
      return { field: c.field, [c.operator]: parseConditionValue(c.value, kind) };
    });
  if (leaves.length === 0) return { all: [] };
  if (leaves.length === 1) return leaves[0];
  return { all: leaves };
}

export default function RuleBuilder() {
  const router = useRouter();

  const [ruleName, setRuleName] = useState("");
  const [ruleDescription, setRuleDescription] = useState("");
  const [severity, setSeverity] = useState("medium");
  const [weight, setWeight] = useState("1.0");
  const [conditions, setConditions] = useState<Condition[]>([
    { id: "1", field: "amount", operator: "gte", value: "1000" }
  ]);
  const [action, setAction] = useState("block");

  const [testPayload, setTestPayload] = useState('{\n  "amount": 1500,\n  "currency": "USD",\n  "transaction_type": "card_not_present",\n  "enrichment": {\n    "is_new_device": true,\n    "velocity_1h": 6,\n    "ip_blacklisted": false\n  }\n}');
  const [testResult, setTestResult] = useState<null | { matched: boolean; message: string }>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simError, setSimError] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const addCondition = () => {
    setConditions([
      ...conditions,
      { id: Date.now().toString(), field: FIELD_OPTIONS[0], operator: "eq", value: "" }
    ]);
  };

  const updateCondition = (id: string, field: keyof Condition, value: string) => {
    setConditions(conditions.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const removeCondition = (id: string) => {
    setConditions(conditions.filter(c => c.id !== id));
  };

  const runSimulation = async () => {
    setIsSimulating(true);
    setTestResult(null);
    setSimError(null);
    try {
      const sample_context = JSON.parse(testPayload);
      const conditions_json = buildConditionsJson(conditions);
      const res = await fraudRulesService.validateConditions({ conditions_json, sample_context });
      if (!res.valid) {
        setSimError((res.errors || []).join("; ") || "Conditions are invalid.");
      } else if (res.test_result) {
        setTestResult({
          matched: res.test_result.matched,
          message: res.test_result.matched
            ? "Rule conditions matched the test payload."
            : "Rule conditions did not match the test payload.",
        });
      }
    } catch (e) {
      setSimError(e instanceof Error ? e.message : "Invalid JSON payload provided for test.");
    } finally {
      setIsSimulating(false);
    }
  };

  const handleSave = async () => {
    if (!ruleName.trim()) {
      setSaveError("Rule name is required.");
      return;
    }
    const weightNum = parseFloat(weight);
    if (Number.isNaN(weightNum) || weightNum < 0 || weightNum > 10) {
      setSaveError("Weight must be a number between 0 and 10.");
      return;
    }
    setSaving(true);
    setSaveError(null);
    try {
      const rule = await fraudRulesService.createRule({
        name: ruleName.trim(),
        slug: slugify(ruleName),
        severity,
        weight: weightNum,
        conditions_json: buildConditionsJson(conditions),
        enabled: true,
        dry_run_only: false,
        version: 1,
        description: ruleDescription.trim() || undefined,
        action_json: { action },
      });
      router.push(`/dashboard/rules/${rule.id}`);
    } catch (e) {
      setSaveError(e instanceof Error ? e.message : "Failed to create rule.");
    } finally {
      setSaving(false);
    }
  };

  const copyPayload = () => {
    void navigator.clipboard.writeText(testPayload);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/rules" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Rules Engine
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Rule Builder
            </h1>
            <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide border-indigo-200 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
              Draft
            </Badge>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button
            size="sm"
            disabled={saving}
            onClick={() => void handleSave()}
            className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white"
          >
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            {saving ? "Saving..." : "Save & Deploy"}
          </Button>
          {saveError ? <p className="text-xs text-red-600 max-w-xs text-right">{saveError}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Main Canvas */}
        <div className="xl:col-span-2 space-y-6">

          {/* Metadata Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <PenTool className="w-4 h-4 text-indigo-500" /> Rule Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rule Name</label>
                <Input
                  value={ruleName}
                  onChange={(e) => setRuleName(e.target.value)}
                  className="font-bold text-lg bg-white/50 dark:bg-slate-900/50"
                  placeholder="e.g. Velocity Check - High Value"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <Input
                  value={ruleDescription}
                  onChange={(e) => setRuleDescription(e.target.value)}
                  className="bg-white/50 dark:bg-slate-900/50"
                  placeholder="Describe what this rule is intended to catch..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Severity</label>
                  <Select value={severity} onValueChange={setSeverity}>
                    <SelectTrigger className="h-10 font-bold bg-white dark:bg-slate-900 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl">
                      {SEVERITIES.map((s) => (
                        <SelectItem key={s} value={s} className="capitalize">{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Weight (0–10)</label>
                  <Input
                    type="number" min="0" max="10" step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-10 font-mono font-bold bg-white dark:bg-slate-900 rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Logic Builder Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-visible relative">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-500" /> Logic Conditions (IF)
                </CardTitle>
                <Badge variant="outline" className="font-mono text-xs bg-slate-50 dark:bg-slate-800">Match ALL conditions (AND)</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4 bg-slate-50/30 dark:bg-slate-900/20">

              <div className="space-y-3">
                {conditions.map((condition, index) => {
                  const opDef = OPERATORS.find((o) => o.value === condition.operator);
                  return (
                  <div key={condition.id} className="relative flex flex-col sm:flex-row items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 group">
                    {index > 0 && (
                      <div className="absolute -top-3 left-6 px-2 bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 rounded border border-slate-200 dark:border-slate-700 z-10 uppercase">
                        AND
                      </div>
                    )}

                    <div className="w-full sm:w-1/3">
                      <Select value={condition.field} onValueChange={(val) => updateCondition(condition.id, "field", val)}>
                        <SelectTrigger className="h-9 font-mono text-xs bg-slate-50 dark:bg-slate-950 border-0 focus:ring-1">
                          <SelectValue placeholder="Field" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl shadow-xl max-h-72">
                          {FIELD_OPTIONS.map((f) => (
                            <SelectItem key={f} value={f} className="font-mono text-xs">{f}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full sm:w-1/4">
                      <Select value={condition.operator} onValueChange={(val) => updateCondition(condition.id, "operator", val)}>
                        <SelectTrigger className="h-9 text-xs font-semibold bg-slate-50 dark:bg-slate-950 border-0 focus:ring-1">
                          <SelectValue placeholder="Operator" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl shadow-xl">
                          {OPERATORS.map((o) => (
                            <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="w-full sm:w-1/3">
                      <Input
                        placeholder={opDef?.valueKind === "list" ? "comma, separated, values" : opDef?.valueKind === "none" ? "n/a" : "Value"}
                        value={condition.value}
                        disabled={opDef?.valueKind === "none"}
                        onChange={(e) => updateCondition(condition.id, "value", e.target.value)}
                        className="h-9 font-mono text-xs bg-slate-50 dark:bg-slate-950 border-0 focus-visible:ring-1"
                      />
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 shrink-0"
                      onClick={() => removeCondition(condition.id)}
                      disabled={conditions.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Button
                  onClick={addCondition}
                  variant="outline"
                  size="sm"
                  className="w-full border-dashed border-slate-300 dark:border-slate-700 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Condition
                </Button>
              </div>

            </CardContent>
          </Card>

          {/* Outcome Action Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-500" /> Outcomes & Actions (THEN)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended Action</label>
                <Select value={action} onValueChange={setAction}>
                  <SelectTrigger className="h-10 font-bold bg-white dark:bg-slate-900 rounded-xl">
                    <SelectValue placeholder="Select outcome action" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl shadow-xl">
                    <SelectItem value="block" className="text-red-600 font-semibold focus:text-red-700">Hard Block</SelectItem>
                    <SelectItem value="challenge" className="text-orange-600 font-semibold focus:text-orange-700">Challenge (MFA/3DS)</SelectItem>
                    <SelectItem value="review" className="text-amber-600 font-semibold focus:text-amber-700">Send to Manual Review</SelectItem>
                    <SelectItem value="monitor" className="text-blue-600 font-semibold focus:text-blue-700">Monitor Only (Silent)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Stored as metadata on the rule. Live scoring is driven by severity and weight above —
                  the fraud engine combines triggered rules&apos; weights into the overall risk score.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Simulator */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-lg bg-indigo-950 text-white overflow-hidden relative sticky top-6">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Activity className="w-24 h-24" />
            </div>

            <CardHeader className="border-b border-white/10 pb-4 relative z-10">
              <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-50">
                <Play className="w-4 h-4 text-indigo-400" /> Simulation Sandbox
              </CardTitle>
              <CardDescription className="text-indigo-200/60 text-xs">Test your logic against a mock JSON payload using the real condition evaluator.</CardDescription>
            </CardHeader>

            <CardContent className="p-0 relative z-10 flex flex-col h-[500px]">
              <div className="p-4 bg-black/40 border-b border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Test Payload (JSON)</span>
                <Button variant="ghost" size="icon" onClick={copyPayload} className="h-6 w-6 text-indigo-300 hover:text-white hover:bg-white/10">
                  <Copy className="w-3.5 h-3.5" />
                </Button>
              </div>

              <textarea
                value={testPayload}
                onChange={(e) => setTestPayload(e.target.value)}
                className="flex-1 w-full bg-black/20 text-indigo-100 font-mono text-xs p-4 resize-none focus:outline-none focus:ring-inset focus:ring-1 focus:ring-indigo-500/50 selection:bg-indigo-500/30"
                spellCheck={false}
              />

              <div className="p-4 bg-indigo-900/50 border-t border-white/10 space-y-4">
                {simError && (
                  <div className="p-3 rounded-xl border bg-red-500/20 border-red-500/30 text-red-100 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-xs opacity-80 leading-relaxed">{simError}</p>
                  </div>
                )}
                {testResult && (
                  <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                    testResult.matched
                      ? 'bg-red-500/20 border-red-500/30 text-red-100'
                      : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-100'
                  }`}>
                    {testResult.matched ? (
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider">{testResult.matched ? 'Rule Triggered' : 'Rule Bypassed'}</p>
                      <p className="text-xs opacity-80 leading-relaxed">{testResult.message}</p>
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => void runSimulation()}
                  disabled={isSimulating}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl shadow-lg border border-indigo-400"
                >
                  {isSimulating ? (
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  {isSimulating ? 'Running...' : 'Run Simulation'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
