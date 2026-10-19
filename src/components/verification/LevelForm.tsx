"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import type { RiskListRead, VerificationLevelBody, VerificationLevelRead } from "@/lib/api-client/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  BUSINESS_ONLY_STEPS,
  POA_DOCUMENT_TYPES,
  STEP_TYPES,
  humanize,
  type InquiryKind,
  type StepType,
} from "@/services/verification-flows.service";

interface StepDraft {
  type: StepType;
  required: boolean;
  /** Raw config JSON for steps without a dedicated editor. */
  configJson: string;
  requiredFields: string;
  consentText: string;
  ownershipThreshold: string;
  poa: PoaDraft;
}

/** Proof-of-address thresholds; empty strings fall back to the backend defaults. */
interface PoaDraft {
  maxAgeDays: string;
  documentTypes: string;
  minNameSimilarity: string;
  minAddressSimilarity: string;
  minExtractionConfidence: string;
}

const POA_KEYS = {
  maxAgeDays: "max_age_days",
  minNameSimilarity: "min_name_similarity",
  minAddressSimilarity: "min_address_similarity",
  minExtractionConfidence: "min_extraction_confidence",
} as const;

export interface LevelFormValue {
  name: string;
  /** Only sent on create; fixed for later versions. */
  kind: InquiryKind;
  body: VerificationLevelBody;
}

const DEFAULT_CONSENT =
  "I agree that my personal data may be processed to verify my identity, as described in the privacy notice.";

const toDraft = (step: { type?: unknown; required?: unknown; config?: unknown }): StepDraft => {
  const config = (step.config && typeof step.config === "object" ? step.config : {}) as Record<string, unknown>;
  const type = step.type as StepType;
  const {
    required_fields,
    consent_text,
    ownership_threshold_pct,
    max_age_days,
    accepted_document_types,
    min_name_similarity,
    min_address_similarity,
    min_extraction_confidence,
    ...rest
  } = config;
  const poa = type === "proof_of_address";
  const special = poa || type === "questionnaire" || type === "consent" || type === "ubo_declaration";
  const text = (value: unknown) => (poa && value !== undefined && value !== null ? String(value) : "");
  return {
    type,
    required: step.required !== false,
    configJson: JSON.stringify(special ? rest : config, null, 2) === "{}" ? "" : JSON.stringify(special ? rest : config, null, 2),
    requiredFields: Array.isArray(required_fields) ? required_fields.join(", ") : "",
    consentText: typeof consent_text === "string" ? consent_text : type === "consent" ? DEFAULT_CONSENT : "",
    ownershipThreshold: ownership_threshold_pct !== undefined ? String(ownership_threshold_pct) : "25",
    poa: {
      maxAgeDays: text(max_age_days),
      documentTypes: poa && Array.isArray(accepted_document_types) ? accepted_document_types.join(", ") : "",
      minNameSimilarity: text(min_name_similarity),
      minAddressSimilarity: text(min_address_similarity),
      minExtractionConfidence: text(min_extraction_confidence),
    },
  };
};

const newStep = (type: StepType): StepDraft => toDraft({ type, required: true, config: {} });

function buildConfig(step: StepDraft): Record<string, unknown> {
  const extra = step.configJson.trim() ? (JSON.parse(step.configJson) as Record<string, unknown>) : {};
  if (typeof extra !== "object" || Array.isArray(extra) || extra === null) {
    throw new Error(`${humanize(step.type)} config must be a JSON object`);
  }
  if (step.type === "questionnaire") {
    const fields = step.requiredFields.split(",").map((f) => f.trim()).filter(Boolean);
    return { ...extra, ...(fields.length ? { required_fields: fields } : {}) };
  }
  if (step.type === "consent") {
    return { ...extra, ...(step.consentText.trim() ? { consent_text: step.consentText.trim() } : {}) };
  }
  if (step.type === "ubo_declaration") {
    return { ...extra, ownership_threshold_pct: Number(step.ownershipThreshold || 25) };
  }
  if (step.type === "proof_of_address") {
    const config: Record<string, unknown> = { ...extra };
    for (const [draftKey, configKey] of Object.entries(POA_KEYS)) {
      const value = step.poa[draftKey as keyof typeof POA_KEYS].trim();
      if (value) config[configKey] = Number(value);
    }
    const types = step.poa.documentTypes.split(",").map((t) => t.trim()).filter(Boolean);
    if (types.length) config.accepted_document_types = types;
    return config;
  }
  return extra;
}

const num = (value: string, fallback: number) => (value.trim() === "" ? fallback : Number(value));
const numOrNull = (value: string) => (value.trim() === "" ? null : Number(value));

export function LevelForm({
  mode,
  initial,
  riskLists,
  submitting,
  onSubmit,
  onCancel,
}: {
  mode: "create" | "version";
  initial?: VerificationLevelRead;
  riskLists: RiskListRead[];
  submitting: boolean;
  onSubmit: (value: LevelFormValue) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [kind, setKind] = useState<InquiryKind>(initial?.kind === "action" ? "action" : "onboarding");
  const [displayName, setDisplayName] = useState(initial?.display_name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [applicantType, setApplicantType] = useState<"individual" | "business">(
    (initial?.applicant_type as "individual" | "business") ?? "individual",
  );
  const [steps, setSteps] = useState<StepDraft[]>(
    initial ? initial.steps.map((step) => toDraft(step)) : [newStep("consent"), newStep("document"), newStep("selfie")],
  );
  const [countries, setCountries] = useState((initial?.allowed_countries ?? []).join(", "));
  const [documentTypes, setDocumentTypes] = useState((initial?.allowed_document_types ?? []).join(", "));
  const [inquiryTtl, setInquiryTtl] = useState(String(initial?.inquiry_ttl_seconds ?? 86400));
  const [linkTtl, setLinkTtl] = useState(String(initial?.link_ttl_seconds ?? 86400));
  const [sessionTtl, setSessionTtl] = useState(String(initial?.session_ttl_seconds ?? 1800));
  const [maxAttempts, setMaxAttempts] = useState(String(initial?.max_attempts ?? 3));
  const [autoApprove, setAutoApprove] = useState(initial?.auto_approve_enabled ?? false);
  const [autoApproveMax, setAutoApproveMax] = useState(String(initial?.auto_approve_max_risk_score ?? 0.3));
  const [reviewMin, setReviewMin] = useState(String(initial?.review_min_risk_score ?? 0.7));
  const [listIds, setListIds] = useState<string[]>(initial?.risk_list_ids ?? []);
  const [reverifyDays, setReverifyDays] = useState(
    initial?.reverification_interval_days ? String(initial.reverification_interval_days) : "",
  );
  const [reusableAge, setReusableAge] = useState(String(initial?.reusable_max_age_days ?? 365));
  const [duplicateCheck, setDuplicateCheck] = useState(initial?.duplicate_check_enabled ?? true);
  const [fourEyes, setFourEyes] = useState(
    initial?.four_eyes_min_risk_score != null ? String(initial.four_eyes_min_risk_score) : "",
  );
  const [reviewSla, setReviewSla] = useState(initial?.review_sla_hours ? String(initial.review_sla_hours) : "");
  const [retentionDays, setRetentionDays] = useState(initial?.retention_days ? String(initial.retention_days) : "");
  const [monitoring, setMonitoring] = useState(initial?.ongoing_monitoring_enabled ?? false);
  const [monitoringMin, setMonitoringMin] = useState(String(initial?.monitoring_min_score ?? 0.85));
  const [formError, setFormError] = useState<string | null>(null);

  const availableSteps = useMemo(
    () =>
      STEP_TYPES.filter(
        (type) =>
          !steps.some((step) => step.type === type) &&
          (applicantType === "business" || !BUSINESS_ONLY_STEPS.includes(type)),
      ),
    [steps, applicantType],
  );

  const updateStep = (index: number, patch: Partial<StepDraft>) =>
    setSteps((prev) => prev.map((step, i) => (i === index ? { ...step, ...patch } : step)));
  const updatePoa = (index: number, patch: Partial<PoaDraft>) =>
    setSteps((prev) => prev.map((step, i) => (i === index ? { ...step, poa: { ...step.poa, ...patch } } : step)));
  const moveStep = (index: number, delta: number) =>
    setSteps((prev) => {
      const next = [...prev];
      const target = index + delta;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormError(null);
    try {
      if (steps.length === 0) throw new Error("Add at least one step");
      if (!steps.some((step) => step.required)) throw new Error("At least one step must be required");
      if (applicantType === "individual" && steps.some((step) => BUSINESS_ONLY_STEPS.includes(step.type))) {
        throw new Error("KYB registry and UBO declaration steps require applicant type 'business'");
      }
      const split = (value: string) => value.split(",").map((v) => v.trim()).filter(Boolean);
      const body: VerificationLevelBody = {
        display_name: displayName.trim(),
        description: description.trim() || null,
        applicant_type: applicantType,
        steps: steps.map((step) => ({ type: step.type, required: step.required, config: buildConfig(step) })),
        allowed_countries: split(countries).length ? split(countries).map((c) => c.toUpperCase()) : null,
        allowed_document_types: split(documentTypes).length ? split(documentTypes) : null,
        inquiry_ttl_seconds: num(inquiryTtl, 86400),
        link_ttl_seconds: num(linkTtl, 86400),
        session_ttl_seconds: num(sessionTtl, 1800),
        max_attempts: num(maxAttempts, 3),
        auto_approve_enabled: autoApprove,
        auto_approve_max_risk_score: num(autoApproveMax, 0.3),
        review_min_risk_score: num(reviewMin, 0.7),
        risk_list_ids: listIds.length ? listIds : null,
        // Action levels can't re-verify; the backend rejects the field for them.
        reverification_interval_days: kind === "onboarding" && reverifyDays.trim() ? Number(reverifyDays) : null,
        reusable_max_age_days: num(reusableAge, 365),
        duplicate_check_enabled: duplicateCheck,
        four_eyes_min_risk_score: numOrNull(fourEyes),
        review_sla_hours: numOrNull(reviewSla),
        retention_days: numOrNull(retentionDays),
        // Monitoring re-screens approved onboarding applicants; actions have nothing to monitor.
        ongoing_monitoring_enabled: kind === "onboarding" && monitoring,
        monitoring_min_score: num(monitoringMin, 0.85),
      };
      onSubmit({ name: name.trim(), kind, body });
    } catch (cause) {
      setFormError(cause instanceof SyntaxError ? `Invalid step config JSON: ${cause.message}` : (cause as Error).message);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-6" aria-label={mode === "create" ? "Create level" : "Publish version"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="level-name">Level name (slug)</Label>
          <Input
            id="level-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="basic-kyc"
            pattern="^[a-z0-9][a-z0-9_\-]*$"
            minLength={2}
            maxLength={64}
            required
            disabled={mode === "version"}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="level-display-name">Display name</Label>
          <Input
            id="level-display-name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Basic identity check"
            required
            maxLength={255}
          />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <Label htmlFor="level-description">Description</Label>
          <Textarea id="level-description" value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
        </div>
        <div className="space-y-1.5">
          <Label>Applicant type</Label>
          <Select value={applicantType} onValueChange={(v) => setApplicantType(v as "individual" | "business")}>
            <SelectTrigger aria-label="Applicant type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual (KYC)</SelectItem>
              <SelectItem value="business">Business (KYB)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Kind</Label>
          <Select value={kind} onValueChange={(v) => setKind(v as InquiryKind)} disabled={mode === "version"}>
            <SelectTrigger aria-label="Level kind">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onboarding">Onboarding</SelectItem>
              <SelectItem value="action">Action (step-up)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {mode === "version"
              ? "Fixed when the level was created."
              : kind === "action"
                ? "Re-checks an approved applicant before a sensitive operation. Can't be changed later."
                : "Verifies a new applicant. Can't be changed later."}
          </p>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="level-max-attempts">Max attempts</Label>
          <Input id="level-max-attempts" type="number" min={1} max={10} value={maxAttempts} onChange={(e) => setMaxAttempts(e.target.value)} />
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-black uppercase italic tracking-widest">Steps</legend>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={step.type} className="rounded-2xl border border-border p-4 space-y-3" data-testid={`step-${step.type}`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-black text-muted-foreground w-6">{index + 1}.</span>
                <span className="font-bold">{humanize(step.type)}</span>
                <label className="flex items-center gap-2 text-xs ml-auto">
                  <Switch
                    checked={step.required}
                    onCheckedChange={(checked) => updateStep(index, { required: checked })}
                    aria-label={`${humanize(step.type)} required`}
                  />
                  Required
                </label>
                <Button type="button" size="icon" variant="ghost" onClick={() => moveStep(index, -1)} aria-label="Move up" disabled={index === 0}>
                  <ArrowUp className="w-4 h-4" />
                </Button>
                <Button type="button" size="icon" variant="ghost" onClick={() => moveStep(index, 1)} aria-label="Move down" disabled={index === steps.length - 1}>
                  <ArrowDown className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() => setSteps((prev) => prev.filter((_, i) => i !== index))}
                  aria-label={`Remove ${humanize(step.type)}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              {step.type === "questionnaire" && (
                <div className="space-y-1.5">
                  <Label htmlFor={`qf-${index}`}>Required answer fields (comma separated)</Label>
                  <Input
                    id={`qf-${index}`}
                    value={step.requiredFields}
                    onChange={(e) => updateStep(index, { requiredFields: e.target.value })}
                    placeholder="occupation, source_of_funds"
                  />
                </div>
              )}
              {step.type === "consent" && (
                <div className="space-y-1.5">
                  <Label htmlFor={`ct-${index}`}>Consent text shown to the applicant</Label>
                  <Textarea id={`ct-${index}`} rows={2} value={step.consentText} onChange={(e) => updateStep(index, { consentText: e.target.value })} />
                </div>
              )}
              {step.type === "ubo_declaration" && (
                <div className="space-y-1.5">
                  <Label htmlFor={`uo-${index}`}>Significant ownership threshold (%)</Label>
                  <Input id={`uo-${index}`} type="number" min={1} max={100} value={step.ownershipThreshold} onChange={(e) => updateStep(index, { ownershipThreshold: e.target.value })} />
                </div>
              )}
              {step.type === "proof_of_address" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3" data-testid="poa-config">
                  <div className="space-y-1.5">
                    <Label htmlFor={`poa-age-${index}`}>Max document age (days)</Label>
                    <Input id={`poa-age-${index}`} type="number" min={1} max={3650} placeholder="90" value={step.poa.maxAgeDays} onChange={(e) => updatePoa(index, { maxAgeDays: e.target.value })} />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <Label htmlFor={`poa-types-${index}`}>Accepted document types (comma separated; empty = defaults)</Label>
                    <Input id={`poa-types-${index}`} placeholder={POA_DOCUMENT_TYPES.join(", ")} value={step.poa.documentTypes} onChange={(e) => updatePoa(index, { documentTypes: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`poa-name-${index}`}>Min name similarity</Label>
                    <Input id={`poa-name-${index}`} type="number" step="0.01" min={0} max={1} placeholder="0.85" value={step.poa.minNameSimilarity} onChange={(e) => updatePoa(index, { minNameSimilarity: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`poa-address-${index}`}>Min address similarity</Label>
                    <Input id={`poa-address-${index}`} type="number" step="0.01" min={0} max={1} placeholder="0.7" value={step.poa.minAddressSimilarity} onChange={(e) => updatePoa(index, { minAddressSimilarity: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`poa-confidence-${index}`}>Min extraction confidence</Label>
                    <Input id={`poa-confidence-${index}`} type="number" step="0.01" min={0} max={1} placeholder="0.6" value={step.poa.minExtractionConfidence} onChange={(e) => updatePoa(index, { minExtractionConfidence: e.target.value })} />
                  </div>
                </div>
              )}
              <details>
                <summary className="text-xs text-muted-foreground cursor-pointer">Advanced config (JSON)</summary>
                <Textarea
                  className="mt-2 font-mono text-xs"
                  rows={3}
                  value={step.configJson}
                  onChange={(e) => updateStep(index, { configJson: e.target.value })}
                  placeholder="{}"
                  aria-label={`${humanize(step.type)} config JSON`}
                />
              </details>
            </li>
          ))}
        </ol>
        {availableSteps.length > 0 && (
          <Select value="" onValueChange={(v) => setSteps((prev) => [...prev, newStep(v as StepType)])}>
            <SelectTrigger className="w-64" aria-label="Add step">
              <Plus className="w-4 h-4" />
              <SelectValue placeholder="Add step" />
            </SelectTrigger>
            <SelectContent>
              {availableSteps.map((type) => (
                <SelectItem key={type} value={type}>
                  {humanize(type)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </fieldset>

      <details className="rounded-2xl border border-border p-4">
        <summary className="text-sm font-black uppercase italic tracking-widest cursor-pointer">Policy &amp; timing</summary>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="space-y-1.5 md:col-span-3">
            <Label htmlFor="level-countries">Allowed countries (ISO alpha-2, comma separated; empty = all)</Label>
            <Input id="level-countries" value={countries} onChange={(e) => setCountries(e.target.value)} placeholder="GB, DE, FR" />
          </div>
          <div className="space-y-1.5 md:col-span-3">
            <Label htmlFor="level-doc-types">Allowed document types (comma separated; empty = all)</Label>
            <Input id="level-doc-types" value={documentTypes} onChange={(e) => setDocumentTypes(e.target.value)} placeholder="passport, id_card" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-inquiry-ttl">Inquiry TTL (s)</Label>
            <Input id="level-inquiry-ttl" type="number" min={600} max={2592000} value={inquiryTtl} onChange={(e) => setInquiryTtl(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-link-ttl">Link TTL (s)</Label>
            <Input id="level-link-ttl" type="number" min={60} max={604800} value={linkTtl} onChange={(e) => setLinkTtl(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-session-ttl">Session TTL (s)</Label>
            <Input id="level-session-ttl" type="number" min={60} max={86400} value={sessionTtl} onChange={(e) => setSessionTtl(e.target.value)} />
          </div>
          <label className="flex items-center gap-2 text-sm md:col-span-3">
            <Switch checked={autoApprove} onCheckedChange={setAutoApprove} aria-label="Auto-approve" />
            Auto-approve low-risk completed inquiries
          </label>
          <div className="space-y-1.5">
            <Label htmlFor="level-auto-max">Auto-approve max risk</Label>
            <Input id="level-auto-max" type="number" step="0.01" min={0} max={1} value={autoApproveMax} onChange={(e) => setAutoApproveMax(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-review-min">Manual review min risk</Label>
            <Input id="level-review-min" type="number" step="0.01" min={0} max={1} value={reviewMin} onChange={(e) => setReviewMin(e.target.value)} />
          </div>
          {kind === "onboarding" && (
            <div className="space-y-1.5">
              <Label htmlFor="level-reverify">Re-verify every (days)</Label>
              <Input id="level-reverify" type="number" min={1} max={3650} value={reverifyDays} onChange={(e) => setReverifyDays(e.target.value)} placeholder="never" />
            </div>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="level-reusable-age">Reusable KYC max age (days)</Label>
            <Input id="level-reusable-age" type="number" min={1} max={3650} value={reusableAge} onChange={(e) => setReusableAge(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-four-eyes">Four-eyes from risk score</Label>
            <Input id="level-four-eyes" type="number" step="0.01" min={0} max={1} value={fourEyes} onChange={(e) => setFourEyes(e.target.value)} placeholder="off" />
            <p className="text-xs text-muted-foreground">Approvals and final declines at or above this score need a second reviewer. 0 = always.</p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-review-sla">Review deadline (hours)</Label>
            <Input id="level-review-sla" type="number" min={1} max={720} value={reviewSla} onChange={(e) => setReviewSla(e.target.value)} placeholder="none" />
            <p className="text-xs text-muted-foreground">Inquiries waiting longer for a reviewer are marked overdue.</p>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="level-retention">Auto-redact after (days)</Label>
            <Input id="level-retention" type="number" min={30} max={3650} value={retentionDays} onChange={(e) => setRetentionDays(e.target.value)} placeholder="keep" />
            <p className="text-xs text-muted-foreground">
              Declined, expired and superseded inquiries are redacted this long after they closed. The applicant&apos;s current
              approval is never auto-redacted; redact it yourself when the relationship ends.
            </p>
          </div>
          {kind === "onboarding" && (
            <>
              <label className="flex items-center gap-2 text-sm md:col-span-2">
                <Switch checked={monitoring} onCheckedChange={setMonitoring} aria-label="Ongoing monitoring" />
                Re-screen approved applicants daily against sanctions/PEP lists and internal watchlists
              </label>
              <div className="space-y-1.5">
                <Label htmlFor="level-monitoring-min">Monitoring min match score</Label>
                <Input id="level-monitoring-min" type="number" step="0.01" min={0.55} max={1} value={monitoringMin} onChange={(e) => setMonitoringMin(e.target.value)} disabled={!monitoring} />
              </div>
            </>
          )}
          <label className="flex items-center gap-2 text-sm md:col-span-3">
            <Switch checked={duplicateCheck} onCheckedChange={setDuplicateCheck} aria-label="Duplicate applicant check" />
            Route applicants sharing an ID number, email, phone or device with another applicant to review
          </label>
          <div className="space-y-2 md:col-span-3">
            <Label>Risk lists checked on completion</Label>
            {riskLists.length === 0 && <p className="text-xs text-muted-foreground">No active risk lists. All active lists are used when none are selected.</p>}
            <div className="flex flex-wrap gap-4">
              {riskLists.map((list) => (
                <label key={list.id} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={listIds.includes(list.id)}
                    onCheckedChange={(checked) =>
                      setListIds((prev) => (checked ? [...prev, list.id] : prev.filter((id) => id !== list.id)))
                    }
                  />
                  {list.name} <span className="text-xs text-muted-foreground">({list.action} · {humanize(list.list_type)})</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </details>

      {formError && <p className="text-sm text-rose-600" role="alert">{formError}</p>}
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving…" : mode === "create" ? "Create level" : "Publish version"}
        </Button>
      </div>
    </form>
  );
}
