import {
  LoginRequest,
  TokenResponse,
  SignupRequest,
  SignupResponse,
  UserPublic,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  VerifyEmailRequest,
  ResendVerifyEmailRequest,
  AvailableService,
  AvailableCountry,
} from '@/types';
import { post, get, setToken, clearTokens, getToken, silentRefresh } from '@/lib/api/client';
import axios from 'axios';
import { getControlApiUrl, getRuntimeEnvironment, setRuntimeEnvironment } from '@/lib/runtime-environment';

export const authService = {
  /**
   * Login with email and password
   */
  async login(data: LoginRequest): Promise<TokenResponse & { challenge?: string }> {
    try {
      const response = await axios.post<TokenResponse>(
        `${getControlApiUrl()}/api/v1/identity/login`,
        { ...data, environment: getRuntimeEnvironment() },
        { withCredentials: true },
      );

      // The refresh token is never handled here — the API set it as an
      // httpOnly cookie on its own response. Only the access token (needed
      // to call the separate runtime API host) is kept, and only in memory.
      if (!response.data.requires_2fa) {
        setToken(response.data.access_token);
      }

      return {
        ...response.data,
        challenge: response.headers['x-2fa-challenge']
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        const errorData = error.response.data as { message?: string };
        if (errorData.message === "No active production workspace membership" && getRuntimeEnvironment() === "production") {
          // Fallback to sandbox if user doesn't have a production workspace yet
          setRuntimeEnvironment("sandbox");
          return this.login(data);
        }
      }
      throw error;
    }
  },

  /**
   * Verify 2FA code
   */
  async verify2fa(code: string, challenge?: string): Promise<TokenResponse> {
    const headers = challenge ? { 'X-2FA-Challenge': challenge } : {};
    const response = await post<TokenResponse>('/auth/verify-2fa', { code }, { headers, withCredentials: true });

    if (response.access_token) {
      setToken(response.access_token);
    }

    return response;
  },

  /**
   * Silently mint a fresh access token from the httpOnly refresh cookie.
   * Used on app load to restore a session without ever touching localStorage.
   */
  async refreshToken(): Promise<string | null> {
    return silentRefresh();
  },

  /**
   * Sign up new organization and admin user
   */
  async signup(data: SignupRequest): Promise<SignupResponse> {
    const response = (
      await axios.post<SignupResponse>(
        `${getControlApiUrl()}/api/v1/identity/signup`,
        data,
      )
    ).data;
    
    return response;
  },

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<UserPublic> {
    return await get<UserPublic>('/auth/me');
  },

  /**
   * Get user profile with permissions
   */
  async getProfile(): Promise<UserPublic> {
    return await get<UserPublic>('/auth/profile');
  },

  /**
   * Request password reset
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<{ message: string }> {
    return await post<{ message: string }>('/auth/forgot-password', data);
  },

  /**
   * Reset password with token
   */
  async resetPassword(data: ResetPasswordRequest): Promise<{ message: string }> {
    return await post<{ message: string }>('/auth/reset-password', data);
  },

  /**
   * Verify email with token
   */
  async verifyEmail(data: VerifyEmailRequest): Promise<{ message: string }> {
    const response = await axios.post<{ message: string }>(
      `${getControlApiUrl()}/api/v1/identity/verify-email`,
      data,
    );
    return response.data;
  },

  /**
   * Resend email verification
   */
  async resendVerifyEmail(data: ResendVerifyEmailRequest): Promise<{ message: string }> {
    const response = await axios.post<{ message: string }>(
      `${getControlApiUrl()}/api/v1/identity/resend-verify-email`,
      data,
    );
    return response.data;
  },

  /**
   * Get available services for signup
   */
  async getAvailableServices(): Promise<AvailableService[]> {
    return await get<AvailableService[]>('/auth/available-services');
  },

  /**
   * Get available countries for signup
   */
  async getAvailableCountries(): Promise<AvailableCountry[]> {
    return await get<AvailableCountry[]>('/auth/available-countries');
  },

  /**
   * Logout - revoke the session server-side and clear the in-memory token
   */
  async logout(): Promise<void> {
    try {
      // Empty body — the refresh token cookie is sent automatically.
      await axios.post(`${getControlApiUrl()}/api/v1/identity/logout`, {}, { withCredentials: true });
    } catch {
      // Best-effort: still clear local state even if the network call fails.
    }
    clearTokens();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  },

  /**
   * Check if user is authenticated. Falls back to a silent refresh (via the
   * httpOnly cookie) when there's no in-memory access token yet, e.g. right
   * after a page reload.
   */
  async isAuthenticated(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    if (getToken()) return true;
    return Boolean(await silentRefresh());
  },
};
