# P1.8A browser contract inventory

The legacy auth/dashboard suites are retained but skipped because they depend on
ambient users, obsolete selectors, mutation-heavy shared data, or optional 2FA.
`api-contracts.spec.ts` remains valid source-contract coverage. The canonical
full-stack workflows are in `certification/tenant-workflows.spec.ts` and use the
current `/login` and `/dashboard` route families with deterministic fixtures.

| Suite | Previous assumption | Current authoritative contract | Change |
| --- | --- | --- | --- |
| auth | ambient `test@example.com`, CSS/name selectors | seeded owner, accessible labels, tenant identity | superseded and skipped |
| dashboard mutations | shared mutable records and provider availability | disposable records, bounded safe states | superseded and skipped |
| API contracts | registered source route families | unchanged | retained |
| certification | none | canonical login plus current dashboard routes | added |
