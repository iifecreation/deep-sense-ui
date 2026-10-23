import { fraudRulesService } from '@/services/fraud-rules.service';
import { FraudRuleListFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseFraudRulesOptions {
  query?: ListQueryParams;
  filters?: FraudRuleListFilters;
  enabled?: boolean;
}

export function useFraudRules(options: UseFraudRulesOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  const { data: page, ...rest } = useAsyncResource(
    async () => {
      const response = await fraudRulesService.listRules(query, filters);
      return { items: response.items || [], total: response.total || 0 };
    },
    JSON.stringify([query, filters]),
    { enabled, label: 'fraud rules' },
  );

  return { data: page?.items ?? null, total: page?.total ?? 0, ...rest };
}

export function useFraudRule(ruleId: string, enabled: boolean = true) {
  return useAsyncResource(
    () => fraudRulesService.getRule(ruleId),
    JSON.stringify([ruleId]),
    { enabled: enabled && !!ruleId, label: 'fraud rule' },
  );
}

export function useFraudRuleMetrics(days: number = 30, enabled: boolean = true) {
  return useAsyncResource(
    () => fraudRulesService.getMetricsSummary(days),
    JSON.stringify([days]),
    { enabled, label: 'fraud rule metrics' },
  );
}
