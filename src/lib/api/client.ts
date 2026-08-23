/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getControlApiUrl, getRuntimeApiUrl } from '@/lib/runtime-environment';

// Environment configuration
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || (process.env.NODE_ENV === 'production' ? 'https://app.deepsense.ai' : 'http://localhost:3000');


// API Error types
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Auth token management.
//
// The refresh token never touches JS: it lives only in the httpOnly cookie
// the control-plane identity issuer sets on its own origin, and is used
// automatically (via `withCredentials`) whenever we call `/identity/refresh`
// there. The access token DOES need to be readable by this app, because it
// has to be forwarded as an `Authorization` header to a *different* host
// (the sandbox/production runtime API) — so instead of persisting it to
// localStorage (readable by any XSS on the page, forever), it's kept only in
// this in-memory variable, which is wiped on tab close / full reload.
let accessTokenMemory: string | null = null;

export const getToken = (): string | null => accessTokenMemory;

export const setToken = (token: string): void => {
  accessTokenMemory = token;
};

export const clearTokens = (): void => {
  accessTokenMemory = null;
};

// Silently mint a fresh access token from the httpOnly refresh-token cookie.
// Returns null (without throwing) if there's no valid session.
export const silentRefresh = async (): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${getControlApiUrl()}/api/v1/identity/refresh`,
      {},
      { withCredentials: true },
    );
    const token = response.data?.access_token as string | undefined;
    if (token) {
      setToken(token);
      return token;
    }
    return null;
  } catch {
    return null;
  }
};

// Create axios instance
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: '/api/v1',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor - add auth token
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.baseURL = `${getRuntimeApiUrl()}/api/v1`;
      if (!process.env.NEXT_PUBLIC_APP_URL && process.env.NODE_ENV === 'production') {
        throw new Error('NEXT_PUBLIC_APP_URL environment variable is required in production');
      }
      const token = getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - handle errors and token refresh
  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

      // Handle 401 errors - try to silently refresh via the httpOnly cookie
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const freshToken = await silentRefresh();
        if (freshToken) {
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${freshToken}`;
          }
          return client(originalRequest);
        }

        // Refresh failed - clear the in-memory token and redirect to login
        clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }

      // Normalize error to ApiError
      const errorMessage = (error.response?.data as any)?.message || (error.response?.data as any)?.detail || error.message || 'An error occurred';
      const statusCode = error.response?.status;
      const code = (error.response?.data as any)?.code;
      const details = error.response?.data;

      return Promise.reject(
        new ApiError(errorMessage, statusCode, code, details)
      );
    }
  );

  return client;
};

export const apiClient = createApiClient();

// Retry configuration for safe GET requests
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const shouldRetry = (error: ApiError): boolean => {
  // Retry on network errors or 5xx errors
  return !error.statusCode || error.statusCode >= 500;
};

export const fetchWithRetry = async <T>(
  fn: () => Promise<AxiosResponse<T>>,
  retries = MAX_RETRIES
): Promise<T> => {
  try {
    const response = await fn();
    return response.data;
  } catch (error) {
    const apiError = error instanceof ApiError ? error : new ApiError('An error occurred');
    
    if (retries > 0 && shouldRetry(apiError)) {
      await sleep(RETRY_DELAY);
      return fetchWithRetry(fn, retries - 1);
    }
    
    throw apiError;
  }
};

// Helper methods for common HTTP operations
export const get = async <T>(url: string, config?: AxiosRequestConfig, retry = true): Promise<T> => {
  const fn = () => apiClient.get<T>(url, config);
  return retry ? fetchWithRetry(fn) : fn().then(res => res.data);
};

export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config);
  return response.data;
};

export const put = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config);
  return response.data;
};

export const patch = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.patch<T>(url, data, config);
  return response.data;
};

export const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.delete<T>(url, config);
  return response.data;
};

export { APP_URL };
