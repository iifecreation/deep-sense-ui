import { casesService } from '@/services/cases.service';
import { FraudCaseRead, FraudCaseDetail, CaseListFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseCasesOptions {
  query?: ListQueryParams;
  filters?: CaseListFilters;
  enabled?: boolean;
}

export function useCases(options: UseCasesOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource<FraudCaseRead[]>(
    async () => (await casesService.listCases(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'cases' },
  );
}

export function useCase(caseId: string, enabled: boolean = true) {
  return useAsyncResource<FraudCaseDetail>(
    () => casesService.getCase(caseId),
    JSON.stringify([caseId]),
    { enabled: enabled && !!caseId, label: 'case' },
  );
}
