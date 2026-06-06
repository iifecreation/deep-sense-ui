import { get } from '@/lib/api/client';

export const pricingService = {
  async getPlans(): Promise<any> {
    return await get<any>('/pricing/plans');
  }
};
