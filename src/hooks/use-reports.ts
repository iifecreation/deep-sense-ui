import { useState, useEffect } from 'react';
import { reportsService } from '@/services/reports.service';
import { ReportListFilters } from '@/types';

export interface UseReportsOptions {
  query?: any;
  filters?: ReportListFilters;
  enabled?: boolean;
}

export function useReports(options: UseReportsOptions = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchReports = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await reportsService.listReports(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch reports:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchReports,
  };
}

export function useReport(reportId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchReport = async () => {
    if (!enabled || !reportId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await reportsService.getReport(reportId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch report:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReport();
  }, [reportId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchReport,
  };
}
