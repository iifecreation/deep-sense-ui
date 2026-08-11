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
