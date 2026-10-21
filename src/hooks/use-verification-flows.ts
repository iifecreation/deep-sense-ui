import { useCallback, useEffect, useState } from 'react';
import { settingsService } from '@/services/settings.service';
import {
  verificationFlowsService,
  type InquiryListFilters,
} from '@/services/verification-flows.service';

interface ResourceState<T> {
  data: T | undefined;
  error: unknown;
  isLoading: boolean;
}

/**
 * Loads `loader` on mount and whenever its identity changes (memoize it with
 * useCallback). `refetch` reloads in place, keeping the previous data visible.
 */
export function useResource<T>(loader: () => Promise<T>) {
  const [state, setState] = useState<ResourceState<T>>({ data: undefined, error: undefined, isLoading: true });

  useEffect(() => {
    let cancelled = false;
    loader().then(
      (data) => !cancelled && setState({ data, error: undefined, isLoading: false }),
      (error) => !cancelled && setState((prev) => ({ data: prev.data, error, isLoading: false })),
    );
    return () => {
      cancelled = true;
    };
  }, [loader]);

  const refetch = useCallback(async () => {
    try {
      const data = await loader();
      setState({ data, error: undefined, isLoading: false });
    } catch (error) {
      setState((prev) => ({ data: prev.data, error, isLoading: false }));
    }
  }, [loader]);

  return { ...state, isError: state.error !== undefined, refetch };
}

export function useVerificationLevels(includeInactive = false) {
  const loader = useCallback(() => verificationFlowsService.listLevels(includeInactive), [includeInactive]);
  return useResource(loader);
}

export function useRejectLabels() {
  const loader = useCallback(() => verificationFlowsService.listRejectLabels(), []);
  return useResource(loader);
}

export function useInquiries(filters: InquiryListFilters) {
  const { status, kind, reference_id, level_name, assigned_to_me, unassigned, review_overdue, limit, offset } = filters;
  const loader = useCallback(
    () =>
      verificationFlowsService.listInquiries({
        status,
        kind,
        reference_id,
        level_name,
        // Only send the queue switches when on, so the URL stays short.
        assigned_to_me: assigned_to_me || undefined,
        unassigned: unassigned || undefined,
        review_overdue: review_overdue || undefined,
        limit,
        offset,
      }),
    [status, kind, reference_id, level_name, assigned_to_me, unassigned, review_overdue, limit, offset],
  );
  return useResource(loader);
}

export function useInquiry(inquiryId: string, includePii = false) {
  const loader = useCallback(
    () => verificationFlowsService.getInquiry(inquiryId, includePii),
    [inquiryId, includePii],
  );
  return useResource(loader);
}

export function useInquiryEvents(inquiryId: string) {
  const loader = useCallback(() => verificationFlowsService.listInquiryEvents(inquiryId), [inquiryId]);
  return useResource(loader);
}

/** Step-up actions started from an onboarding inquiry; skipped (empty) when `enabled` is false. */
export function useInquiryActions(inquiryId: string, enabled: boolean) {
  const loader = useCallback(
    () => (enabled ? verificationFlowsService.listActions(inquiryId) : Promise.resolve([])),
    [inquiryId, enabled],
  );
  return useResource(loader);
}

export function useInquiryNotes(inquiryId: string) {
  const loader = useCallback(() => verificationFlowsService.listNotes(inquiryId), [inquiryId]);
  return useResource(loader);
}

/** A business inquiry's beneficiaries; names only when includePii (audited server-side). */
export function useBeneficiaries(inquiryId: string, includePii: boolean, enabled: boolean) {
  const loader = useCallback(
    () => (enabled ? verificationFlowsService.listBeneficiaries(inquiryId, includePii) : Promise.resolve([])),
    [inquiryId, includePii, enabled],
  );
  return useResource(loader);
}

/** Video identification calls for an inquiry that has a video_ident step. */
export function useVideoSessions(inquiryId: string, enabled: boolean) {
  const loader = useCallback(
    () => (enabled ? verificationFlowsService.listVideoSessions(inquiryId) : Promise.resolve([])),
    [inquiryId, enabled],
  );
  return useResource(loader);
}

/** Users the backend accepts as assignees (active, with onboarding:write). */
export function useReviewers() {
  const loader = useCallback(() => verificationFlowsService.listReviewers(), []);
  return useResource(loader);
}

/** The organization's active users (not pending invites), for reviewer names. */
export function useTeamMembers() {
  const loader = useCallback(
    () => settingsService.listTeam().then((team) => team.members.filter((member) => !member.is_invite)),
    [],
  );
  return useResource(loader);
}

export function useApplicantProfile(referenceId: string) {
  const loader = useCallback(() => verificationFlowsService.getApplicantProfile(referenceId), [referenceId]);
  return useResource(loader);
}

export function useRiskLists(includeArchived = false) {
  const loader = useCallback(() => verificationFlowsService.listRiskLists(includeArchived), [includeArchived]);
  return useResource(loader);
}

export function useRiskListItems(listId: string | null) {
  const loader = useCallback(
    () => (listId ? verificationFlowsService.listRiskListItems(listId) : Promise.resolve([])),
    [listId],
  );
  return useResource(loader);
}

export function useVerificationLevel(levelId: string | undefined) {
  const loader = useCallback(
    () => (levelId ? verificationFlowsService.getLevel(levelId) : Promise.resolve(undefined)),
    [levelId],
  );
  return useResource(loader);
}
