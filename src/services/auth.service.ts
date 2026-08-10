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
import { post, get, setToken, setRefreshToken, clearTokens, getToken } from '@/lib/api/client';
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
      );
      
      // Store tokens only if 2FA is not required
      if (!response.data.requires_2fa) {
        setToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);
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
    const response = await post<TokenResponse>('/auth/verify-2fa', { code }, { headers });
    
    // Store tokens
    if (response.access_token) {
      setToken(response.access_token);
      if (response.refresh_token) {
        setRefreshToken(response.refresh_token);
      }
    }
    
    return response;
  },

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    const response = await post<TokenResponse>(
      `${getControlApiUrl()}/api/v1/identity/refresh`,
      { refresh_token: refreshToken },
    );
    
    // Update tokens
    setToken(response.access_token);
    setRefreshToken(response.refresh_token);
    
    return response;
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
   * Logout - clear tokens
   */
  logout(): void {
    clearTokens();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return Boolean(getToken());
  },
};
