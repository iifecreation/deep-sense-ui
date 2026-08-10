import { get, post, patch } from '@/lib/api/client';

export interface GoLiveRequestCreate {
  notes?: string;
  security_contact_email?: string;
  requested_scopes?: string[];
  requested_allowed_ips?: string[];
}

export interface ChecklistUpdateRequest {
  item: string;
  value: boolean;
}

export interface GoLiveRequestRead {
  id: string;
  organization_id: string;
  submitted_by_user_id?: string;
  reviewed_by_user_id?: string;
  status: string;
  sandbox_tests_passed: boolean;
  webhook_test_passed: boolean;
  scopes_approved: boolean;
  allowed_ips_configured: boolean;
  security_contact_added: boolean;
  billing_plan_active: boolean;
  agreement_accepted: boolean;
  mfa_enabled: boolean;
  notes?: string;
  rejection_reason?: string;
  security_contact_email?: string;
  requested_scopes?: string[];
  requested_allowed_ips?: string[];
  submitted_at?: string;
  reviewed_at?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
  checklist_complete: boolean;
}

export const promotionService = {
  /**
   * Get the organization's active go-live request
   */
  async getGoLiveRequest(): Promise<GoLiveRequestRead | null> {
    try {
      return await get<GoLiveRequestRead>('/sandbox/promotion/request');
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  },

  /**
   * Submit a go-live request
   */
  async submitGoLiveRequest(data: GoLiveRequestCreate): Promise<GoLiveRequestRead> {
    return await post<GoLiveRequestRead>('/sandbox/promotion/request', data);
  },

  /**
   * Update a checklist item
   */
  async updateChecklist(requestId: string, data: ChecklistUpdateRequest): Promise<GoLiveRequestRead> {
    return await patch<GoLiveRequestRead>(`/sandbox/promotion/request/${requestId}/checklist`, data);
  }
};
