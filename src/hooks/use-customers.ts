import { customersService } from '@/services/customers.service';
import { CustomerListItem, CustomerDetail, CustomerFilters, ListQueryParams } from '@/types';
import { useAsyncResource } from './use-async-resource';

export interface UseCustomersOptions {
  query?: ListQueryParams;
  filters?: CustomerFilters;
  enabled?: boolean;
}

export function useCustomers(options: UseCustomersOptions = {}) {
  const { query = {}, filters = {}, enabled = true } = options;

  return useAsyncResource<CustomerListItem[]>(
    async () => (await customersService.listCustomers(query, filters)).items || [],
    JSON.stringify([query, filters]),
    { enabled, label: 'customers' },
  );
}

export function useCustomer(customerId: string, enabled: boolean = true) {
  return useAsyncResource<CustomerDetail>(
    () => customersService.getCustomer(customerId),
    JSON.stringify([customerId]),
    { enabled: enabled && !!customerId, label: 'customer' },
  );
}

export function useCustomerRisk(customerId: string, enabled: boolean = true) {
  return useAsyncResource(
    () => customersService.getCustomerRisk(customerId),
    JSON.stringify([customerId]),
    { enabled: enabled && !!customerId, label: 'customer risk' },
  );
}
