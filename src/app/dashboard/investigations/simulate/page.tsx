"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, FlaskConical, Loader2, Play } from "lucide-react";

import {
  EngineContributions,
  EvidenceList,
  RiskDecisionHeader,
} from "@/components/investigations/RiskDecisionView";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError } from "@/lib/api/client";
import {
  type NormalizedRiskDecision,
  riskDecisionsService,
} from "@/services/risk-decisions.service";

interface EngineOption {
  key: string;
  label: string;
  /** True when the payload is a real hypothetical event; false when the
   * engine previews an already-existing record (needs a real id). */
  hypothetical: boolean;
  example: Record<string, unknown>;
}

const ENGINES: EngineOption[] = [
  {
    key: "cnp_advanced",
    label: "CNP transaction",
    hypothetical: true,
    example: {
      checkout_id: "sim-checkout-1",
      transaction_reference: "sim-ref-1",
      amount: 500,
      currency: "USD",
      card_fingerprint: "0123456789abcdef",
      prior_declines_5m: 3,
      transaction_velocity_5m: 2,
      billing_shipping_match: true,
    },
  },
  {
    key: "app_scams",
    label: "APP payment (authorized push payment)",
    hypothetical: true,
    example: {
      payer_id: "sim-payer-1",
      beneficiary_id: "sim-beneficiary-hash-1",
      new_beneficiary: true,
      beneficiary_reputation_score: 0.4,
      amount: 5000,
      currency: "USD",
      payment_velocity_1h: 3,
      account_age_days: 30,
      device_risk_score: 0.3,
      ato_risk_score: 0.2,
      graph_risk_score: 0.5,
      mule_indicator: false,
      narrative: "Payment to a new supplier",
    },
  },
  {
    key: "ato_login",
    label: "ATO login event",
    hypothetical: true,
    example: {
      account_id: "00000000-0000-0000-0000-000000000000",
      session_id: "sim-session-1",
      outcome: "success",
      ip_country: "NG",
      is_vpn: true,
      is_known_device: false,
      mfa_required: true,
      mfa_completed: false,
    },
  },
  {
    key: "ato_session",
    label: "ATO session signal",
    hypothetical: true,
    example: {
      account_id: "00000000-0000-0000-0000-000000000000",
      session_id: "sim-session-1",
      signal_type: "impossible_travel",
      current_ip: "203.0.113.5",
      previous_ip: "198.51.100.7",
      elapsed_seconds: 120,
    },
  },
  {
    key: "promo",
    label: "Promo / bonus abuse",
    hypothetical: true,
    example: { user_id: "00000000-0000-0000-0000-000000000000", trigger: "enrollment" },
  },
  {
    key: "dispute_intelligence",
    label: "Dispute / chargeback fraud",
    hypothetical: true,
    example: { customer_id: "00000000-0000-0000-0000-000000000000" },
  },
  {
    key: "nfc",
    label: "NFC / contactless transaction",
    hypothetical: false,
    example: {
      transaction_id: "00000000-0000-0000-0000-000000000000",
      terminal_identifier: "TERM-1",
      terminal_country: "US",
      pos_entry_mode: "contactless",
      network: "visa",
      issuer_authorization_response: "approved",
      emv_cryptogram: "abcd1234",
      emv_atc: 1,
      cryptogram_validated: true,
    },
  },
  {
    key: "procurement",
    label: "Procurement invoice",
    hypothetical: false,
    example: { invoice_id: "00000000-0000-0000-0000-000000000000" },
  },
  {
    key: "document_intelligence",
    label: "Document verification run",
    hypothetical: false,
    example: { run_id: "00000000-0000-0000-0000-000000000000" },
  },
  {
    key: "deepfake",
    label: "Deepfake / biometric check",
    hypothetical: false,
    example: { check_id: "00000000-0000-0000-0000-000000000000" },
  },
  {
    key: "voice_auth",
    label: "Voice authentication / confirmation",
    hypothetical: true,
    example: {
      session_id: "sim-voice-session-1",
      event_type: "voice_confirmation",
      liveness_score: 0.92,
      voiceprint_match_confidence: 0.88,
      is_replay_suspected: false,
      is_injection_suspected: false,
      device_mic_fingerprint_consistent: true,
      challenge_response_passed: true,
      is_reenrollment_or_new_voice_permission: false,
      sim_recently_swapped: false,
      confirmation_step_anomaly_detected: false,
      second_voice_detected: false,
      intent_slot_confidence: 0.9,
    },
  },
];

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "That engine's underlying service is not enabled for this organization."
      : "Your role cannot run simulations.";
  }
  if (error instanceof ApiError && error.statusCode === 422) {
    const details = error.details as { code?: string; message?: string } | undefined;
    return details?.message || "The simulation payload was rejected.";
  }
  return error instanceof Error ? error.message : "The simulation could not be run.";
}

export default function RiskSimulatorPage() {
  const [engineKey, setEngineKey] = useState(ENGINES[0].key);
  const engine = useMemo(() => ENGINES.find((e) => e.key === engineKey) ?? ENGINES[0], [engineKey]);
  const [payloadText, setPayloadText] = useState(() => JSON.stringify(ENGINES[0].example, null, 2));
  const [result, setResult] = useState<NormalizedRiskDecision | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectEngine = (key: string) => {
    setEngineKey(key);
    const next = ENGINES.find((e) => e.key === key);
    setPayloadText(JSON.stringify(next?.example ?? {}, null, 2));
    setResult(null);
    setError(null);
  };

  const run = async () => {
    setError(null);
    let payload: Record<string, unknown>;
    try {
      payload = JSON.parse(payloadText);
    } catch {
      setError("The payload is not valid JSON.");
      return;
    }
    setIsRunning(true);
    try {
      const response = await riskDecisionsService.simulate(engineKey, payload);
      setResult(response.decision);
    } catch (cause) {
      setError(describeError(cause));
      setResult(null);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-5 pb-16">
      <div>
        <Button asChild variant="ghost" className="self-start">
          <Link href="/dashboard/investigations">
            <ArrowLeft className="mr-2 h-4 w-4" /> All investigations
          </Link>
        </Button>
      </div>

      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-indigo-50 p-3">
          <FlaskConical className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950">Risk simulator</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Run any wired scoring engine against a hypothetical payload. Nothing is saved —
            no event, decision, alert, case, or risk-profile update is created. Useful for
            policy design (&quot;what would this score if the amount were higher?&quot;) and
            reconstructing what a past transaction would score under today&apos;s policy.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-base">Engine &amp; payload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Engine
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                value={engineKey}
                onChange={(e) => selectEngine(e.target.value)}
              >
                {ENGINES.map((e) => (
                  <option key={e.key} value={e.key}>
                    {e.label}
                  </option>
                ))}
              </select>
              {!engine.hypothetical ? (
                <p className="mt-2 text-xs text-amber-700">
                  This engine previews an already-processed record rather than scoring a raw
                  hypothetical event — the id in the payload must reference a real row in your
                  organization.
                </p>
              ) : null}
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Payload (JSON)
              </label>
              <textarea
                className="mt-1 h-72 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs"
                value={payloadText}
                onChange={(e) => setPayloadText(e.target.value)}
                spellCheck={false}
              />
            </div>
            {error ? (
              <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-800">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
              </div>
            ) : null}
            <Button onClick={() => void run()} disabled={isRunning}>
              {isRunning ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              Run simulation
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-5">
          {result ? (
            <>
              <div className="flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm font-semibold text-indigo-800">
                <FlaskConical className="h-4 w-4" /> Simulated result — nothing was saved.
              </div>
              <RiskDecisionHeader decision={result} />
              <EngineContributions decision={result} />
              <EvidenceList decision={result} />
            </>
          ) : (
            <Card className="border-dashed border-slate-300">
              <CardContent className="flex min-h-64 flex-col items-center justify-center gap-2 p-8 text-center text-sm text-slate-500">
                <FlaskConical className="h-8 w-8 text-slate-300" />
                Choose an engine, adjust the payload, and run a simulation to see the
                projected decision here.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
