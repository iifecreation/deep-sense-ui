import type { ConsoleMessage, Page } from '@playwright/test';

// Console noise that is part of normal operation: the API client retries a
// request once after a 401 by refreshing the access token.
const IGNORED_CONSOLE = [/status of 401 \(Unauthorized\)/];

/** Collects console errors and uncaught page errors, minus `extraIgnored` and known noise. */
export function collectConsoleErrors(page: Page, extraIgnored: RegExp[] = []): string[] {
  const ignored = [...IGNORED_CONSOLE, ...extraIgnored];
  const errors: string[] = [];
  page.on('console', (message: ConsoleMessage) => {
    if (message.type() !== 'error') return;
    const text = message.text();
    if (!ignored.some((pattern) => pattern.test(text))) errors.push(text);
  });
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}
