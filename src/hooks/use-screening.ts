import { screeningService } from '@/services/screening.service';
import { ScreeningMatchRead, ScreeningMatchFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseScreeningOptions {
  query?: ListQueryParams;
  filters?: ScreeningMatchFilters;
  enabled?: boolean;
}

export function useScreeningMatches(options: UseScreeningOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource<ScreeningMatchRead[]>(
    async () => (await screeningService.listMatches(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'screening matches' },
  );
}

export function useScreeningMatch(matchId: string, enabled: boolean = true) {
  return useAsyncResource(
    () => screeningService.getMatch(matchId),
    JSON.stringify([matchId]),
    { enabled: enabled && !!matchId, label: 'screening match' },
  );
}

export function useWatchlists(enabled: boolean = true) {
  return useAsyncResource(
    () => screeningService.listWatchlists(),
    JSON.stringify([]),
    { enabled, label: 'watchlists' },
  );
}

export interface UseScreeningJobsOptions {
  query?: Parameters<typeof screeningService.listScreeningJobs>[0];
  filters?: Parameters<typeof screeningService.listScreeningJobs>[1];
  enabled?: boolean;
}

export function useScreeningJobs(options: UseScreeningJobsOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource(
    async () => (await screeningService.listScreeningJobs(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'screening jobs' },
  );
}
