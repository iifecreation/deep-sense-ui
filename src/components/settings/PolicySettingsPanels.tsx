"use client";

import React, { useState } from "react";
import { Loader2, Save } from "lucide-react";
import { toast } from "sonner";
import { LoadErrorCard } from "@/components/common/LoadErrorCard";
import {
  useNotificationSettings,
  useReportingSettings,
  useRetentionSettings,
  useScreeningSettings,
  useSecuritySettings,
} from "@/hooks/use-settings";
import { settingsService } from "@/services/settings.service";
import type {
  ReportingSettingsRead,
  RetentionSettingsRead,
  ScreeningSettingsRead,
  SecuritySettingsRead,
} from "@/lib/api-client/api";

// Each panel loads its settings, edits them in controlled inputs and saves through its own PATCH
// endpoint. The form is keyed on the loaded data so it re-initialises after a save, instead of
// copying props into state from an effect.

const INPUT =
  "w-full px-5 py-4 bg-zinc-50 border border-neutral-100 rounded-2xl text-sm text-neutral-900 font-bold focus:outline-none focus:border-brand-lime transition-all";
const LABEL = "text-[10px] text-neutral-400 uppercase tracking-widest font-black";

function Panel({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="p-12 bg-white rounded-[64px] border border-neutral-100 shadow-2xl space-y-12 transition-all font-bold italic">
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 uppercase leading-none">{title}</h3>
        <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function Loading() {
  return (
    <div className="text-center p-8 text-neutral-400">
      <Loader2 className="w-6 h-6 animate-spin mx-auto" />
    </div>
  );
}

function SwitchRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 p-6 bg-zinc-50 border border-neutral-100 rounded-3xl">
      <div>
        <div className="text-sm font-black text-neutral-900 uppercase">{label}</div>
        <div className="text-xs text-neutral-400 font-medium">{description}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative inline-block w-12 h-6 shrink-0 rounded-full transition-colors ${checked ? "bg-emerald-500" : "bg-neutral-200"}`}
      >
        <span className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${checked ? "left-7" : "left-1"}`} />
      </button>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}) {
  const id = `setting-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div className="space-y-3">
      <label htmlFor={id} className={LABEL}>{label}</label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        value={Number.isFinite(value) ? value : ""}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className={INPUT}
      />
    </div>
  );
}

function SaveButton({ saving, onClick, disabled }: { saving: boolean; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={saving || disabled}
      className="px-10 py-4 bg-neutral-900 text-white rounded-[32px] font-black text-xs uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all flex items-center gap-3 italic disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {saving ? "Saving..." : "Save Changes"} <Save className="w-4 h-4" />
    </button>
  );
}

function useSave(label: string, refetch: () => Promise<void>) {
  const [saving, setSaving] = useState(false);
  const save = async (request: () => Promise<unknown>) => {
    setSaving(true);
    try {
      await request();
      toast.success(`${label} saved.`);
      await refetch();
    } catch (err) {
      toast.error(err instanceof Error && err.message ? err.message : `Failed to save ${label.toLowerCase()}.`);
    } finally {
      setSaving(false);
    }
  };
  return { saving, save };
}

/* ------------------------------------------------------------------ Security */

function SecurityForm({ initial, refetch }: { initial: SecuritySettingsRead; refetch: () => Promise<void> }) {
  const [form, setForm] = useState({
    enforce_2fa: initial.enforce_2fa ?? false,
    session_timeout_minutes: initial.session_timeout_minutes ?? 60,
    max_sessions_per_user: initial.max_sessions_per_user ?? 5,
    password_min_length: initial.password_min_length ?? 12,
    password_require_special: initial.password_require_special ?? true,
    ip_allowlist_enabled: initial.ip_allowlist_enabled ?? false,
    ip_allowlist: (initial.ip_allowlist ?? []).join("\n"),
  });
  const { saving, save } = useSave("Security policies", refetch);
  const allowlist = form.ip_allowlist.split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <div className="space-y-8">
      <SwitchRow
        label="Require Multi-Factor Auth (MFA)"
        description="Force all institution users to configure MFA."
        checked={form.enforce_2fa}
        onChange={(v) => setForm({ ...form, enforce_2fa: v })}
      />
      <SwitchRow
        label="Require Special Characters"
        description="Passwords must contain at least one special character."
        checked={form.password_require_special}
        onChange={(v) => setForm({ ...form, password_require_special: v })}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NumberField label="Session Timeout (Minutes)" min={5} max={1440} value={form.session_timeout_minutes} onChange={(v) => setForm({ ...form, session_timeout_minutes: v })} />
        <NumberField label="Max Sessions Per User" min={1} max={50} value={form.max_sessions_per_user} onChange={(v) => setForm({ ...form, max_sessions_per_user: v })} />
        <NumberField label="Minimum Password Length" min={8} max={128} value={form.password_min_length} onChange={(v) => setForm({ ...form, password_min_length: v })} />
      </div>
      <SwitchRow
        label="Enforce IP Allowlist"
        description="Only allow dashboard access from the addresses below."
        checked={form.ip_allowlist_enabled}
        onChange={(v) => setForm({ ...form, ip_allowlist_enabled: v })}
      />
      <div className="space-y-3">
        <label htmlFor="setting-ip-allowlist" className={LABEL}>IP Allowlist</label>
        <textarea
          id="setting-ip-allowlist"
          value={form.ip_allowlist}
          onChange={(e) => setForm({ ...form, ip_allowlist: e.target.value })}
          placeholder={"192.168.1.1\n10.0.0.0/24"}
          className={`${INPUT} h-32`}
        />
        <p className="text-[10px] text-neutral-400 font-medium italic mt-2">One IP or CIDR per line.</p>
      </div>
      <SaveButton
        saving={saving}
        // Enabling an empty allowlist would lock everyone out.
        disabled={form.ip_allowlist_enabled && allowlist.length === 0}
        onClick={() =>
          save(() =>
            settingsService.updateSecuritySettings({
              enforce_2fa: form.enforce_2fa,
              session_timeout_minutes: form.session_timeout_minutes,
              max_sessions_per_user: form.max_sessions_per_user,
              password_min_length: form.password_min_length,
              password_require_special: form.password_require_special,
              ip_allowlist_enabled: form.ip_allowlist_enabled,
              ip_allowlist: allowlist,
            }),
          )
        }
      />
    </div>
  );
}

export function SecuritySettingsPanel() {
  const { data, isLoading, error, refetch } = useSecuritySettings();
  return (
    <Panel title="Security Policies." subtitle="Enforce institution-wide protection">
      {error ? <LoadErrorCard error={error} what="security settings" onRetry={() => refetch()} /> : isLoading || !data ? <Loading /> : (
        <SecurityForm key={JSON.stringify(data)} initial={data} refetch={refetch} />
      )}
    </Panel>
  );
}

/* ----------------------------------------------------------------- Retention */

const RETENTION_FIELDS: Array<[keyof RetentionSettingsRead, string]> = [
  ["audit_retention_days", "Audit Log Retention (Days)"],
  ["case_retention_days", "Case Retention (Days)"],
  ["alert_retention_days", "Alert Retention (Days)"],
  ["report_retention_days", "Regulatory Report Retention (Days)"],
  ["log_retention_days", "System Log Retention (Days)"],
];

function RetentionForm({ initial, refetch }: { initial: RetentionSettingsRead; refetch: () => Promise<void> }) {
  const [form, setForm] = useState<Record<string, number>>(() =>
    Object.fromEntries(RETENTION_FIELDS.map(([key]) => [key, initial[key] ?? 365])),
  );
  const { saving, save } = useSave("Retention policies", refetch);
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RETENTION_FIELDS.map(([key, label]) => (
          <NumberField key={key} label={label} min={1} max={3650} value={form[key]} onChange={(v) => setForm({ ...form, [key]: v })} />
        ))}
      </div>
      <SaveButton saving={saving} onClick={() => save(() => settingsService.updateRetentionSettings(form))} />
    </div>
  );
}

export function RetentionSettingsPanel() {
  const { data, isLoading, error, refetch } = useRetentionSettings();
  return (
    <Panel title="Data Retention." subtitle="Configure automated data purging">
      {error ? <LoadErrorCard error={error} what="retention settings" onRetry={() => refetch()} /> : isLoading || !data ? <Loading /> : (
        <RetentionForm key={JSON.stringify(data)} initial={data} refetch={refetch} />
      )}
    </Panel>
  );
}

/* ----------------------------------------------------------------- Screening */

const RESCREEN_OPTIONS = ["daily", "weekly", "monthly", "quarterly", "annually", "manual"];

function threshold(value: unknown, fallback: number): number {
  return typeof value === "number" ? value : fallback;
}

function ScreeningForm({ initial, refetch }: { initial: ScreeningSettingsRead; refetch: () => Promise<void> }) {
  const thresholds = initial.confidence_thresholds ?? {};
  const [form, setForm] = useState({
    sanctions_enabled: initial.sanctions_enabled ?? true,
    pep_enabled: initial.pep_enabled ?? true,
    watchlist_enabled: initial.watchlist_enabled ?? true,
    auto_case_creation_enabled: initial.auto_case_creation_enabled ?? true,
    auto_edd_on_confirmed_match: initial.auto_edd_on_confirmed_match ?? false,
    rescreen_frequency: initial.rescreen_frequency ?? "monthly",
    exact_match: threshold(thresholds.exact_match, 95),
    fuzzy_match: threshold(thresholds.fuzzy_match, 75),
    low_confidence: threshold(thresholds.low_confidence, 50),
  });
  const { saving, save } = useSave("Screening settings", refetch);
  const ordered = form.low_confidence <= form.fuzzy_match && form.fuzzy_match <= form.exact_match;

  return (
    <div className="space-y-8">
      <SwitchRow label="Sanctions Screening" description="Screen against OFAC, UN, EU, UK and other sanctions lists." checked={form.sanctions_enabled} onChange={(v) => setForm({ ...form, sanctions_enabled: v })} />
      <SwitchRow label="PEP Screening" description="Screen for politically exposed persons." checked={form.pep_enabled} onChange={(v) => setForm({ ...form, pep_enabled: v })} />
      <SwitchRow label="Watchlist Screening" description="Screen against your internal and custom watchlists." checked={form.watchlist_enabled} onChange={(v) => setForm({ ...form, watchlist_enabled: v })} />
      <SwitchRow label="Auto-Create Cases" description="Open a case automatically for a confirmed match." checked={form.auto_case_creation_enabled} onChange={(v) => setForm({ ...form, auto_case_creation_enabled: v })} />
      <SwitchRow label="Enhanced Due Diligence on Match" description="Start EDD when a match is confirmed." checked={form.auto_edd_on_confirmed_match} onChange={(v) => setForm({ ...form, auto_edd_on_confirmed_match: v })} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NumberField label="Exact Match Threshold (%)" min={50} max={100} value={form.exact_match} onChange={(v) => setForm({ ...form, exact_match: v })} />
        <NumberField label="Fuzzy Match Threshold (%)" min={30} max={100} value={form.fuzzy_match} onChange={(v) => setForm({ ...form, fuzzy_match: v })} />
        <NumberField label="Low Confidence Threshold (%)" min={0} max={100} value={form.low_confidence} onChange={(v) => setForm({ ...form, low_confidence: v })} />
      </div>
      {!ordered && <p className="text-xs text-red-600 not-italic">Thresholds must satisfy low ≤ fuzzy ≤ exact.</p>}
      <div className="space-y-3 max-w-md">
        <label htmlFor="setting-rescreen" className={LABEL}>Continuous Rescreening Cadence</label>
        <select id="setting-rescreen" value={form.rescreen_frequency} onChange={(e) => setForm({ ...form, rescreen_frequency: e.target.value })} className={INPUT}>
          {RESCREEN_OPTIONS.map((option) => (
            <option key={option} value={option}>{option[0].toUpperCase() + option.slice(1)}</option>
          ))}
        </select>
      </div>
      <SaveButton
        saving={saving}
        disabled={!ordered}
        onClick={() =>
          save(() =>
            settingsService.updateScreeningSettings({
              sanctions_enabled: form.sanctions_enabled,
              pep_enabled: form.pep_enabled,
              watchlist_enabled: form.watchlist_enabled,
              auto_case_creation_enabled: form.auto_case_creation_enabled,
              auto_edd_on_confirmed_match: form.auto_edd_on_confirmed_match,
              rescreen_frequency: form.rescreen_frequency,
              confidence_thresholds: {
                exact_match: form.exact_match,
                fuzzy_match: form.fuzzy_match,
                low_confidence: form.low_confidence,
              },
            }),
          )
        }
      />
    </div>
  );
}

export function ScreeningSettingsPanel() {
  const { data, isLoading, error, refetch } = useScreeningSettings();
  return (
    <Panel title="Compliance Controls." subtitle="AML / KYC Screening thresholds">
      {error ? <LoadErrorCard error={error} what="screening settings" onRetry={() => refetch()} /> : isLoading || !data ? <Loading /> : (
        <ScreeningForm key={JSON.stringify(data)} initial={data} refetch={refetch} />
      )}
    </Panel>
  );
}

/* ----------------------------------------------------------------- Reporting */

function ReportingForm({ initial, refetch }: { initial: ReportingSettingsRead; refetch: () => Promise<void> }) {
  const [form, setForm] = useState({
    approval_required: initial.approval_required ?? true,
    auto_create_str_from_case: initial.auto_create_str_from_case ?? false,
    default_reviewer_role: initial.default_reviewer_role ?? "compliance_officer",
    submission_sla_hours: initial.submission_sla_hours ?? 24,
    report_numbering_prefix: initial.report_numbering_prefix ?? "",
    draft_retention_days: initial.draft_retention_days ?? 90,
  });
  const { saving, save } = useSave("Reporting settings", refetch);
  return (
    <div className="space-y-8">
      <SwitchRow label="Maker-Checker Workflow" description="Require secondary review before electronic submission to the FIU." checked={form.approval_required} onChange={(v) => setForm({ ...form, approval_required: v })} />
      <SwitchRow label="Auto-Draft STR from Case" description="Draft a suspicious transaction report when a case is confirmed." checked={form.auto_create_str_from_case} onChange={(v) => setForm({ ...form, auto_create_str_from_case: v })} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NumberField label="Submission SLA (Hours)" min={1} max={720} value={form.submission_sla_hours} onChange={(v) => setForm({ ...form, submission_sla_hours: v })} />
        <NumberField label="Draft Retention (Days)" min={1} max={3650} value={form.draft_retention_days} onChange={(v) => setForm({ ...form, draft_retention_days: v })} />
        <div className="space-y-3">
          <label htmlFor="setting-reviewer-role" className={LABEL}>Default Reviewer Role</label>
          <input id="setting-reviewer-role" value={form.default_reviewer_role} onChange={(e) => setForm({ ...form, default_reviewer_role: e.target.value })} className={INPUT} />
        </div>
        <div className="space-y-3">
          <label htmlFor="setting-report-prefix" className={LABEL}>Report Numbering Prefix</label>
          <input id="setting-report-prefix" value={form.report_numbering_prefix} onChange={(e) => setForm({ ...form, report_numbering_prefix: e.target.value })} className={INPUT} />
        </div>
      </div>
      <SaveButton
        saving={saving}
        onClick={() =>
          save(() =>
            settingsService.updateReportingSettings({
              ...form,
              report_numbering_prefix: form.report_numbering_prefix.trim() || null,
            }),
          )
        }
      />
    </div>
  );
}

export function ReportingSettingsPanel() {
  const { data, isLoading, error, refetch } = useReportingSettings();
  return (
    <Panel title="Regulatory Reporting." subtitle="Configure STR / SAR automation">
      {error ? <LoadErrorCard error={error} what="reporting settings" onRetry={() => refetch()} /> : isLoading || !data ? <Loading /> : (
        <ReportingForm key={JSON.stringify(data)} initial={data} refetch={refetch} />
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------- Notifications */

// The notifications settings object is free-form on the API; these are the keys this UI manages.
const NOTIFICATION_FIELDS: Array<[string, string, string, boolean]> = [
  ["critical_alert_emails", "Critical Fraud Alerts", "Send immediate emails for high-severity rule triggers.", true],
  ["compliance_digest", "Compliance Digests", "Weekly summary of screening hits and case volumes.", true],
  ["webhook_failure_alerts", "Webhook Error Alerts", "Notify technical contacts if webhooks fail delivery.", false],
];

function NotificationsForm({ initial, refetch }: { initial: Record<string, unknown>; refetch: () => Promise<void> }) {
  const [form, setForm] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      NOTIFICATION_FIELDS.map(([key, , , fallback]) => [key, typeof initial[key] === "boolean" ? (initial[key] as boolean) : fallback]),
    ),
  );
  const { saving, save } = useSave("Notification preferences", refetch);
  return (
    <div className="space-y-8">
      {NOTIFICATION_FIELDS.map(([key, label, description]) => (
        <SwitchRow key={key} label={label} description={description} checked={form[key]} onChange={(v) => setForm({ ...form, [key]: v })} />
      ))}
      <SaveButton saving={saving} onClick={() => save(() => settingsService.updateNotificationSettings(form))} />
    </div>
  );
}

export function NotificationSettingsPanel() {
  const { data, isLoading, error, refetch } = useNotificationSettings();
  return (
    <Panel title="Notification Preferences." subtitle="Manage alerts and digests">
      {error ? <LoadErrorCard error={error} what="notification settings" onRetry={() => refetch()} /> : isLoading || !data ? <Loading /> : (
        <NotificationsForm key={JSON.stringify(data)} initial={data} refetch={refetch} />
      )}
    </Panel>
  );
}
