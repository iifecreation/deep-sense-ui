import { useState, useEffect, useCallback } from 'react';
import { onboardingService } from '@/services/onboarding.service';

export function useOnboardingReviews(params?: Record<string, any>) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await onboardingService.listReviews(params);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return { data, isLoading, isError, refetch: fetchReviews };
}

export function useOnboardingReview(reviewId: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchReview = useCallback(async () => {
    if (!reviewId) return;
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await onboardingService.getReviewDetail(reviewId);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch review details:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [reviewId]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);

  return { data, isLoading, isError, refetch: fetchReview };
}
