'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getToken, silentRefresh } from '@/lib/api/client';
import type { UserPublic } from '@/types';

/**
 * Hook to check if user is authenticated
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const checkAuth = async () => {
      // The access token lives only in memory, so a fresh page load starts
      // with none — fall back to the httpOnly refresh cookie before
      // deciding the user is logged out.
      let token = getToken();
      if (!token) {
        token = await silentRefresh();
      }
      if (cancelled) return;

      setIsAuthenticated(!!token);
      setIsLoading(false);

      // Redirect to login if not authenticated and trying to access dashboard
      if (!token && pathname?.startsWith('/dashboard')) {
        router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
      }
    };
    checkAuth();

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  return { isAuthenticated, isLoading };
}

/**
 * Hook to get current user data
 */
export function useCurrentUser() {
  const [user, setUser] = useState<UserPublic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let token = getToken();
        if (!token) {
          token = await silentRefresh();
        }
        if (!token) {
          router.push('/login');
          return;
        }

        // Import authService dynamically to avoid SSR issues
        const { authService } = await import('@/services/auth.service');
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (err: unknown) {
        const error = err as { message?: string; statusCode?: number };
        setError(error.message || 'Failed to fetch user');
        if (error.statusCode === 401) {
          router.push('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  return { user, isLoading, error };
}

/**
 * Logout function
 */
export function logout() {
  // Dynamic import to avoid circular dependencies
  import('@/services/auth.service').then(({ authService }) => {
    authService.logout();
  });
}
