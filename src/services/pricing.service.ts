import { get } from '@/lib/api/client';
import type { PublicPricingPlans } from '@/lib/api-client/api';

export const pricingService = {
  async getPlans(): Promise<PublicPricingPlans> {
    return await get<PublicPricingPlans>('/pricing/plans');
  }
};
