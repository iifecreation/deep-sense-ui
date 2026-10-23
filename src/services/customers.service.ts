import {
  CustomerListItem,
  CustomerDetail,
  CustomerTimelineEvent,
  CustomerNoteCreateRequest,
  CustomerNoteRead,
  CustomerStatusPatchRequest,
  CustomerWatchRequest,
  CustomerOwnerPatchRequest,
  CustomerMutationResponse,
  CustomerFilters,
  PaginatedResponse,
  ListQueryParams,
} from '@/types';
import { get, post, patch } from '@/lib/api/client';
import type {
  AppSchemasCustomerCustomerRiskDetail,
  CustomerOnboardingSummary,
  CustomerScreeningDetail,
  PaginatedAuditEventRead,
  PaginatedLinkedCustomerAlert,
  PaginatedLinkedCustomerCase,
  PaginatedLinkedCustomerDevice,
  PaginatedLinkedCustomerReport,
  PaginatedLinkedCustomerTransaction,
} from '@/lib/api-client/api';

export const customersService = {
  /**
   * List customers with pagination and filters
   */
  async listCustomers(
    query: ListQueryParams = {},
    filters: CustomerFilters = {}
  ): Promise<PaginatedResponse<CustomerListItem>> {
    const params = { ...query, ...filters };
    return await get<PaginatedResponse<CustomerListItem>>('/customers', { params });
  },

  /**
   * Get customer detail by ID
   */
  async getCustomer(customerId: string): Promise<CustomerDetail> {
    return await get<CustomerDetail>(`/customers/${customerId}`);
  },

  /**
   * Get customer timeline
   */
  async getCustomerTimeline(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedResponse<CustomerTimelineEvent>> {
    return await get<PaginatedResponse<CustomerTimelineEvent>>(
      `/customers/${customerId}/timeline`,
      { params: query }
    );
  },

  /**
   * Get linked transactions for customer
   */
  async getCustomerTransactions(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedLinkedCustomerTransaction> {
    return await get<PaginatedLinkedCustomerTransaction>(
      `/customers/${customerId}/transactions`,
      { params: query }
    );
  },

  /**
   * Get linked devices for customer
   */
  async getCustomerDevices(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedLinkedCustomerDevice> {
    return await get<PaginatedLinkedCustomerDevice>(
      `/customers/${customerId}/devices`,
      { params: query }
    );
  },

  /**
   * Get linked alerts for customer
   */
  async getCustomerAlerts(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedLinkedCustomerAlert> {
    return await get<PaginatedLinkedCustomerAlert>(
      `/customers/${customerId}/alerts`,
      { params: query }
    );
  },

  /**
   * Get linked cases for customer
   */
  async getCustomerCases(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedLinkedCustomerCase> {
    return await get<PaginatedLinkedCustomerCase>(
      `/customers/${customerId}/cases`,
      { params: query }
    );
  },

  /**
   * Get linked reports for customer
   */
  async getCustomerReports(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedLinkedCustomerReport> {
    return await get<PaginatedLinkedCustomerReport>(
      `/customers/${customerId}/reports`,
      { params: query }
    );
  },

  /**
   * Update customer status
   */
  async updateCustomerStatus(
    customerId: string,
    data: CustomerStatusPatchRequest
  ): Promise<CustomerMutationResponse> {
    return await patch<CustomerMutationResponse>(
      `/customers/${customerId}/status`,
      data
    );
  },

  /**
   * Add note to customer
   */
  async addCustomerNote(
    customerId: string,
    data: CustomerNoteCreateRequest
  ): Promise<CustomerNoteRead> {
    return await post<CustomerNoteRead>(`/customers/${customerId}/notes`, data);
  },

  /**
   * Add customer to watchlist
   */
  async watchCustomer(
    customerId: string,
    data: CustomerWatchRequest
  ): Promise<CustomerMutationResponse> {
    return await post<CustomerMutationResponse>(`/customers/${customerId}/watch`, data);
  },

  /**
   * Remove customer from watchlist
   */
  async unwatchCustomer(
    customerId: string,
    data: CustomerWatchRequest
  ): Promise<CustomerMutationResponse> {
    return await post<CustomerMutationResponse>(`/customers/${customerId}/unwatch`, data);
  },

  /**
   * Update customer owner
   */
  async updateCustomerOwner(
    customerId: string,
    data: CustomerOwnerPatchRequest
  ): Promise<CustomerMutationResponse> {
    return await patch<CustomerMutationResponse>(
      `/customers/${customerId}/owner`,
      data
    );
  },

  /**
   * Get customer risk detail
   */
  async getCustomerRisk(customerId: string): Promise<AppSchemasCustomerCustomerRiskDetail> {
    return await get<AppSchemasCustomerCustomerRiskDetail>(`/customers/${customerId}/risk`);
  },

  /**
   * Get customer screening detail
   */
  async getCustomerScreening(customerId: string): Promise<CustomerScreeningDetail> {
    return await get<CustomerScreeningDetail>(`/customers/${customerId}/screening`);
  },

  /**
   * Get customer onboarding summary
   */
  async getCustomerOnboarding(customerId: string): Promise<CustomerOnboardingSummary> {
    return await get<CustomerOnboardingSummary>(`/customers/${customerId}/onboarding`);
  },

  /**
   * Get customer audit trail
   */
  async getCustomerAudit(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedAuditEventRead> {
    return await get<PaginatedAuditEventRead>(
      `/customers/${customerId}/audit`,
      { params: query }
    );
  },
};
