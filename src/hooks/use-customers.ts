import { useState, useEffect } from 'react';
import { customersService } from '@/services/customers.service';
import { CustomerListItem, CustomerDetail, CustomerFilters } from '@/types';

export interface UseCustomersOptions {
  query?: any;
  filters?: CustomerFilters;
  enabled?: boolean;
}

export function useCustomers(options: UseCustomersOptions = {}) {
  const [data, setData] = useState<CustomerListItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { query = {}, filters = {}, enabled = true } = options;

  const fetchCustomers = async () => {
    if (!enabled) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await customersService.listCustomers(query, filters);
      setData(response.items || []);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch customers:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [enabled, JSON.stringify(query), JSON.stringify(filters)]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCustomers,
  };
}

export function useCustomer(customerId: string, enabled: boolean = true) {
  const [data, setData] = useState<CustomerDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCustomer = async () => {
    if (!enabled || !customerId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await customersService.getCustomer(customerId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch customer:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [customerId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCustomer,
  };
}

export function useCustomerRisk(customerId: string, enabled: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchCustomerRisk = async () => {
    if (!enabled || !customerId) return;
    
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await customersService.getCustomerRisk(customerId);
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err as Error);
      console.error('Failed to fetch customer risk:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerRisk();
  }, [customerId, enabled]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: fetchCustomerRisk,
  };
}
