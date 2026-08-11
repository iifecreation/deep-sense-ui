import { AxiosRequestConfig } from 'axios';
import { getRuntimeApiUrl } from '@/lib/runtime-environment';
import axios from 'axios';

// Ensure the token function gets pulled correctly
const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(`deep_sense_${localStorage.getItem('deep_sense_runtime_environment') || 'sandbox'}_access_token`);
};

export const customInstance = <T>(
  config: AxiosRequestConfig | string,
  options?: AxiosRequestConfig & { body?: any }
): Promise<T> => {
  const source = axios.CancelToken.source();
  const token = getAuthToken();
  const baseUrl = getRuntimeApiUrl();

  const isString = typeof config === 'string';
  const url = isString ? config : config.url;
  const method = isString ? options?.method || 'GET' : config.method || 'GET';
  const data = isString ? options?.data || (options as any)?.body : config.data;
  const mergedOptions = isString ? options : { ...config, ...options };

  const promise = axios({
    ...mergedOptions,
    url,
    method,
    data,
    baseURL: `${baseUrl}/api/v1`,
    cancelToken: source.token,
    headers: {
      ...(isString ? undefined : config.headers),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise as Promise<T>;
};
