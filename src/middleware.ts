import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  // Add Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Strict CSP for production
  if (process.env.NODE_ENV === 'production') {
    const apiDomains = [
      process.env.NEXT_PUBLIC_CONTROL_API_URL,
      process.env.NEXT_PUBLIC_SANDBOX_API_URL,
      process.env.NEXT_PUBLIC_PRODUCTION_API_URL,
    ].filter(Boolean).map((value) => new URL(value as string).origin).join(' ');
    response.headers.set(
      'Content-Security-Policy',
      `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' ${apiDomains}; frame-ancestors 'self';`
    );
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
