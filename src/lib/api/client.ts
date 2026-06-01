/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Environment configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production' ? 'https://api.deepsense.ai' : 'http://localhost:8000');
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

// Auth token management
const TOKEN_KEY = 'deep_sense_access_token';
const REFRESH_TOKEN_KEY = 'deep_sense_refresh_token';

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
};

export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setRefreshToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const clearTokens = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// Create axios instance
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: `${API_URL}/api/v1`,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor - add auth token
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
        throw new Error('NEXT_PUBLIC_API_URL environment variable is required in production');
      }
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

      // Handle 401 errors - try to refresh token
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = getRefreshToken();
          if (refreshToken) {
            const response = await axios.post(`${API_URL}/api/v1/auth/refresh`, {
              refresh_token: refreshToken,
            });

            const { access_token, refresh_token: newRefreshToken } = response.data;
            setToken(access_token);
            if (newRefreshToken) {
              setRefreshToken(newRefreshToken);
            }

            // Retry original request with new token
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
            }
            return client(originalRequest);
          }
        } catch (refreshError) {
          // Refresh failed - clear tokens and redirect to login
          clearTokens();
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          return Promise.reject(refreshError);
        }
      }

      // Normalize error to ApiError
      const errorMessage = (error.response?.data as any)?.detail || error.message || 'An error occurred';
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

export { API_URL, APP_URL };
