import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Strict CSP for production
  if (process.env.NODE_ENV === 'production') {
    let apiDomain = process.env.NEXT_PUBLIC_API_URL || 'https://api.deepsense.ai';
    if (apiDomain.includes('localhost') || apiDomain.includes('127.0.0.1')) {
      apiDomain = 'https://api.deepsense.ai';
    }
    const appDomain = process.env.NEXT_PUBLIC_APP_URL || 'https://app.deepsense.ai';
    response.headers.set(
      'Content-Security-Policy',
      `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' ${apiDomain}; frame-ancestors 'self';`
    );
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
