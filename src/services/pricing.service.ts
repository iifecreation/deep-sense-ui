import { get } from '@/lib/api/client';

/** GET /pricing/plans returns `{ plans: [...] }` (the API declares it as a free-form object). */
export interface PricingPlansResponse {
  plans?: Record<string, unknown>[];
}

export const pricingService = {
  async getPlans(): Promise<PricingPlansResponse> {
    return await get<PricingPlansResponse>('/pricing/plans');
  }
};
