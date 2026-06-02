import { useState, useEffect } from 'react';
import { screeningService } from '@/services/screening.service';
import { ScreeningMatchRead, ScreeningMatchFilters, ScreeningJobFilters } from '@/types';

export interface UseScreeningOptions {
  query?: any;
  filters?: ScreeningMatchFilters;
  enabled?: boolean;
}

export function useScreeningMatches(options: UseScreeningOptions = {}) {
  const [data, setData] = useState<ScreeningMatchRead[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchMatches = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await screeningService.listMatches(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch screening matches:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchMatches,
  };
}

export function useScreeningMatch(matchId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchMatch = async () => {
    if (!enabled || !matchId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await screeningService.getMatch(matchId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch screening match:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMatch();
  }, [matchId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchMatch,
  };
}

export function useWatchlists(enabled: boolean = true) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWatchlists = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await screeningService.listWatchlists();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch watchlists:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWatchlists();
  }, [enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchWatchlists,
  };
}

export function useScreeningJobs(options: any = {}) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchJobs = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await screeningService.listScreeningJobs(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch screening jobs:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchJobs,
  };
}
