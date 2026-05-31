/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CheckoutRequest,
  PortalRequest,
  CancelRequest,
  ChangePlanRequest,
  QuotaCheckRequest,
} from '@/types';
import { get, post } from '@/lib/api/client';

export const billingService = {
  /**
   * Create Stripe checkout session
   */
  async createCheckoutSession(data: CheckoutRequest): Promise<{ url: string }> {
    return await post<{ url: string }>('/billing/checkout', data);
  },

  /**
   * Create Stripe billing portal session
   */
  async createPortalSession(data: PortalRequest): Promise<{ url: string }> {
    return await post<{ url: string }>('/billing/portal', data);
  },

  /**
   * Cancel subscription
   */
  async cancelSubscription(data: CancelRequest): Promise<any> {
    return await post<any>('/billing/cancel', data);
  },

  /**
   * Change subscription plan
   */
  async changePlan(data: ChangePlanRequest): Promise<any> {
    return await post<any>('/billing/change-plan', data);
  },

  /**
   * Get current plan details
   */
  async getCurrentPlan(): Promise<any> {
    return await get<any>('/billing/current-plan');
  },

  /**
   * Get usage counters and quotas
   */
  async getUsage(): Promise<any[]> {
    return await get<any[]>('/billing/usage');
  },

  /**
   * Check if a feature quota allows increment
   */
  async checkQuota(data: QuotaCheckRequest): Promise<{ allowed: boolean; feature_key: string }> {
    return await post<{ allowed: boolean; feature_key: string }>('/billing/check-quota', data);
  },
};
