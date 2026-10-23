import { ApiError } from './client';

export type ApiErrorKind = 'service_not_enabled' | 'forbidden' | 'unavailable';

export interface ApiErrorDescription {
  kind: ApiErrorKind;
  title: string;
  detail: string;
  /** Retrying only helps for transient failures, not for configuration or permission. */
  retryable: boolean;
}

/**
 * Turn a failed request into a message that tells the user what is actually wrong.
 * `what` is a lowercase noun phrase, e.g. "devices" or "audit trails".
 */
export function describeApiError(error: unknown, what: string): ApiErrorDescription {
  if (error instanceof ApiError && error.statusCode === 403) {
    if (error.code === 'service_not_enabled') {
      return {
        kind: 'service_not_enabled',
        title: 'This service is not enabled',
        detail: 'This service is not enabled for your organization. An administrator can enable it in the control plane.',
        retryable: false,
      };
    }
    return {
      kind: 'forbidden',
      title: `You don't have access to ${what}`,
      detail: 'Your role does not include this permission. Ask an administrator if you need it.',
      retryable: false,
    };
  }
  return {
    kind: 'unavailable',
    title: `Failed to load ${what}`,
    detail: 'Please check your connection and try again.',
    retryable: true,
  };
}
