import { expect, request, type FullConfig } from '@playwright/test';

export default async function globalSetup(config: FullConfig): Promise<void> {
  const baseURL = config.projects[0]?.use?.baseURL;
  if (typeof baseURL !== 'string') throw new Error('P1.8A requires an explicit baseURL');
  const context = await request.newContext({ baseURL });
  try {
    const response = await context.get('/login');
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    for (const identity of [
      'name="deepsense-application" content="tenant-ui"',
      'name="deepsense-build" content="p1.8a-browser"',
      'name="deepsense-route-family" content="/dashboard"',
      'name="deepsense-api-base" content="http://127.0.0.1:18000"',
      'name="deepsense-environment" content="browser-test"',
    ]) expect(html).toContain(identity);
  } finally {
    await context.dispose();
  }
}
