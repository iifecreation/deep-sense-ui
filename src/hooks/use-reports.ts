import { reportsService } from '@/services/reports.service';
import { ReportListFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseReportsOptions {
  query?: ListQueryParams;
  filters?: ReportListFilters;
  enabled?: boolean;
}

export function useReports(options: UseReportsOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource(
    async () => (await reportsService.listReports(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'reports' },
  );
}

export function useReport(reportId: string, enabled: boolean = true) {
  return useAsyncResource(
    () => reportsService.getReport(reportId),
    JSON.stringify([reportId]),
    { enabled: enabled && !!reportId, label: 'report' },
  );
}
