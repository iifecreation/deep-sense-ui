import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';

import { normalizeApiOrigin } from '../src/lib/runtime-environment';

test('runtime API origins normalize /api/v1 exactly once', () => {
  expect(normalizeApiOrigin('https://sandbox.example.com/api/v1/', 'TEST_URL'))
    .toBe('https://sandbox.example.com');
  expect(() => normalizeApiOrigin('http://0.0.0.0:8000', 'TEST_URL'))
    .toThrow('cannot use 0.0.0.0');
  expect(() => normalizeApiOrigin('https://example.com/private', 'TEST_URL'))
    .toThrow('must be an API origin or end with /api/v1');
});

test('nine advanced fraud clients use registered route families', () => {
  const advanced = readFileSync(
    join(process.cwd(), 'src/services/advanced-fraud.service.ts'),
    'utf8',
  );
  const interventions = readFileSync(
    join(process.cwd(), 'src/services/interventions.service.ts'),
    'utf8',
  );
  for (const path of [
    '/app-scams/score-payment',
    '/ato/login-event',
    '/bot/events',
    '/cnp/transactions',
    '/biometrics/deepfake-check',
    '/friendly-fraud/disputes',
    '/identity-risk/check',
    '/ueba/anomalies',
  ]) {
    expect(advanced).toContain(path);
  }
  expect(interventions).toContain('/interventions/evaluate');
  for (const removedPrefix of [
    '/deepfake/',
    '/synthetic-advanced/',
    '/friendly-fraud-advanced/',
    '/cnp-advanced/',
    '/app-scams/sessions',
  ]) {
    expect(advanced).not.toContain(removedPrefix);
  }
});

test('priority operations uses the tenant endpoint and no fabricated node health', () => {
  const service = readFileSync(
    join(process.cwd(), 'src/services/risk-operations.service.ts'),
    'utf8',
  );
  const sidebar = readFileSync(
    join(process.cwd(), 'src/components/dashboard/DashboardSidebar.tsx'),
    'utf8',
  );
  expect(service).toContain('/risk-operations/priority-services');
  expect(service).not.toContain('/platform-admin/');
  expect(sidebar).not.toContain('DS-4281-PROD');
  expect(sidebar).not.toContain('>Operational<');
});
