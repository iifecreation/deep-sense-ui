/* eslint-disable @typescript-eslint/no-explicit-any */
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
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
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
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
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
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
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
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
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
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
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
  async getCustomerRisk(customerId: string): Promise<any> {
    return await get<any>(`/customers/${customerId}/risk`);
  },

  /**
   * Get customer screening detail
   */
  async getCustomerScreening(customerId: string): Promise<any> {
    return await get<any>(`/customers/${customerId}/screening`);
  },

  /**
   * Get customer onboarding summary
   */
  async getCustomerOnboarding(customerId: string): Promise<any> {
    return await get<any>(`/customers/${customerId}/onboarding`);
  },

  /**
   * Get customer audit trail
   */
  async getCustomerAudit(
    customerId: string,
    query: ListQueryParams = {}
  ): Promise<PaginatedResponse<any>> {
    return await get<PaginatedResponse<any>>(
      `/customers/${customerId}/audit`,
      { params: query }
    );
  },
};
