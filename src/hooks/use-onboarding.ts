import { useAsyncResource } from './use-async-resource';
import { onboardingService } from '@/services/onboarding.service';

export function useOnboardingReviews(params?: Record<string, unknown>) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => onboardingService.listReviews(params),
    JSON.stringify([params]),
    { label: 'reviews' },
  );
  return { data, isLoading, isError, error, refetch };
}

export function useOnboardingReview(reviewId: string) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => onboardingService.getReviewDetail(reviewId),
    JSON.stringify([reviewId]),
    { enabled: !!reviewId, label: 'review details' },
  );
  return { data, isLoading, isError, error, refetch };
}
