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
import { post, get, setToken, setRefreshToken, clearTokens } from '@/lib/api/client';

export const authService = {
  /**
   * Login with email and password
   */
  async login(data: LoginRequest): Promise<TokenResponse> {
    const response = await post<TokenResponse>('/auth/login', data);
    
    // Store tokens
    setToken(response.access_token);
    setRefreshToken(response.refresh_token);
    
    return response;
  },

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<TokenResponse> {
    const response = await post<TokenResponse>('/auth/refresh', { refresh_token: refreshToken });
    
    // Update tokens
    setToken(response.access_token);
    setRefreshToken(response.refresh_token);
    
    return response;
  },

  /**
   * Sign up new organization and admin user
   */
  async signup(data: SignupRequest): Promise<SignupResponse> {
    const response = await post<SignupResponse>('/auth/signup', data);
    
    // Store tokens
    setToken(response.access_token);
    setRefreshToken(response.refresh_token);
    
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
    return await post<{ message: string }>('/auth/verify-email', data);
  },

  /**
   * Resend email verification
   */
  async resendVerifyEmail(data: ResendVerifyEmailRequest): Promise<{ message: string }> {
    return await post<{ message: string }>('/auth/resend-verify-email', data);
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
    return !!localStorage.getItem('deep_sense_access_token');
  },
};
