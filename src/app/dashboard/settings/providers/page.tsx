'use client';

import { useCallback, useEffect, useState } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import {
  providerReadinessService,
  type ProviderCapabilityStatus,
  type ProviderOption,
  type ProviderPreference,
} from '@/services/provider-readiness.service';

function label(value: string) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function ProviderPreferencesPage() {
  const [items, setItems] = useState<ProviderCapabilityStatus[]>([]);
  const [options, setOptions] = useState<ProviderOption[]>([]);
  const [preferences, setPreferences] = useState<Record<string, ProviderPreference>>({});
  const [drafts, setDrafts] = useState<Record<string, ProviderPreference>>({});
  const [reasons, setReasons] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [status, preferenceResponse] = await Promise.all([
        providerReadinessService.getStatus(),
        providerReadinessService.getPreferences(),
      ]);
      setItems(status.capabilities);
      setOptions(preferenceResponse.approved_options);
      setPreferences(preferenceResponse.preferences);
      setDrafts(preferenceResponse.preferences);
    } catch {
      setError('Provider availability could not be loaded.');
    } finally {
      setLoading(false);
    }
  }, []);

  const updateDraft = (capability: string, patch: Partial<ProviderPreference>) => {
    const current = drafts[capability] ?? {
      provider_id: null,
      region: null,
      manual_review_on_failure: true,
      version: preferences[capability]?.version ?? 0,
    };
    setDrafts((value) => ({ ...value, [capability]: { ...current, ...patch } }));
  };

  const save = async (option: ProviderOption) => {
    const draft = drafts[option.capability] ?? {
      provider_id: null,
      region: null,
      manual_review_on_failure: true,
      version: 0,
    };
    const reason = reasons[option.capability]?.trim() ?? '';
    if (reason.length < 10) {
      toast.error('Enter a change reason of at least 10 characters.');
      return;
    }
    try {
      await providerReadinessService.updatePreference(option.capability, {
        provider_id: draft.provider_id,
        region: draft.region,
        manual_review_on_failure: draft.manual_review_on_failure,
        expected_version: preferences[option.capability]?.version ?? 0,
        change_reason: reason,
      });
      toast.success('Provider preference saved.');
      await load();
    } catch {
      toast.error('Preference update failed. Refresh to resolve a possible version conflict.');
    }
  };

  useEffect(() => {
    void load();
  }, [load]);

  if (loading) return <Skeleton className="h-80 w-full rounded-3xl" />;

  return (
    <div className="space-y-6 pb-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-black tracking-tight">
            <ShieldCheck className="h-7 w-7" /> Provider preferences
          </h1>
          <p className="text-muted-foreground">
            Capability availability for your workspace. Credentials, endpoints, and vendor infrastructure are platform-managed.
          </p>
        </div>
        <Button variant="outline" onClick={load}>
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      {error ? <p className="rounded-2xl border border-destructive p-4 text-destructive">{error}</p> : null}

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle>Available capabilities</CardTitle>
          <CardDescription>
            Only approved, safe options appear here. Provider names and sensitive configuration are intentionally hidden.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div className="flex items-center justify-between rounded-2xl border p-4" key={item.capability}>
              <span className="text-sm font-medium">{label(item.capability)}</span>
              <Badge variant={item.status === 'healthy' ? 'default' : 'secondary'}>{item.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle>Approved provider choices</CardTitle>
          <CardDescription>
            Choices are limited to options approved by the platform owner. Selecting automatic routing leaves the platform policy in control.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {options.length === 0 ? (
            <p className="text-sm text-muted-foreground">No tenant-selectable providers are currently approved.</p>
          ) : null}
          {options.map((option) => {
            const draft = drafts[option.capability] ?? {
              provider_id: null,
              region: null,
              manual_review_on_failure: true,
              version: 0,
            };
            return (
              <div className="grid gap-3 rounded-2xl border p-4 lg:grid-cols-[1fr_1fr_1fr_2fr_auto]" key={option.capability}>
                <div>
                  <p className="text-sm font-semibold">{label(option.capability)}</p>
                  <p className="text-xs text-muted-foreground">Version {preferences[option.capability]?.version ?? 0}</p>
                </div>
                <Select value={draft.provider_id ?? 'automatic'} onValueChange={(value) => updateDraft(option.capability, { provider_id: value === 'automatic' ? null : value })}>
                  <SelectTrigger className="w-full" aria-label={`${option.capability} provider`}><SelectValue placeholder="Provider" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic routing</SelectItem>
                    {option.providers.map((provider) => <SelectItem value={provider} key={provider}>{label(provider)}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={draft.region ?? 'automatic'} onValueChange={(value) => updateDraft(option.capability, { region: value === 'automatic' ? null : value })}>
                  <SelectTrigger className="w-full" aria-label={`${option.capability} region`}><SelectValue placeholder="Region" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic region</SelectItem>
                    {option.regions.map((region) => <SelectItem value={region} key={region}>{region}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Input aria-label={`${option.capability} change reason`} placeholder="Required change reason" value={reasons[option.capability] ?? ''} onChange={(event) => setReasons((value) => ({ ...value, [option.capability]: event.target.value }))} />
                <Button onClick={() => save(option)}>Save</Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
