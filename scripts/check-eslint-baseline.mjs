import { readFileSync, writeFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const baselinePath = resolve(root, 'P1_3_ESLINT_BASELINE.json');
const eslintBin = resolve(root, 'node_modules/eslint/bin/eslint.js');

function category(rule) {
  if (rule?.startsWith('jsx-a11y/')) return 'accessibility';
  if (
    rule === 'react-hooks/set-state-in-effect'
    || rule === 'react-hooks/rules-of-hooks'
    || rule === '@typescript-eslint/no-unsafe-call'
    || rule === '@typescript-eslint/no-unsafe-member-access'
  ) return 'correctness';
  if (
    rule === '@typescript-eslint/no-explicit-any'
    || rule === '@typescript-eslint/no-unused-vars'
    || rule?.startsWith('react-hooks/')
  ) return 'maintainability';
  return 'style';
}

function currentCounts() {
  const result = spawnSync(process.execPath, [eslintBin, '.', '--format', 'json'], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  if (!result.stdout) {
    throw new Error(result.stderr || 'ESLint did not produce JSON output');
  }
  const reports = JSON.parse(result.stdout);
  const counts = new Map();
  for (const report of reports) {
    const file = relative(root, report.filePath);
    for (const message of report.messages) {
      const rule = message.ruleId || 'fatal-parser-error';
      const severity = message.severity === 2 ? 'error' : 'warning';
      const key = JSON.stringify([file, rule, severity]);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }
  return counts;
}

function rows(counts) {
  return [...counts.entries()]
    .map(([key, count]) => {
      const [file, rule, severity] = JSON.parse(key);
      return {
        file,
        rule,
        count,
        severity,
        category: category(rule),
        owner: 'tenant-ui',
      };
    })
    .sort((a, b) => (
      a.file.localeCompare(b.file)
      || a.rule.localeCompare(b.rule)
      || a.severity.localeCompare(b.severity)
    ));
}

const current = currentCounts();
if (process.argv.includes('--write-baseline')) {
  writeFileSync(baselinePath, `${JSON.stringify(rows(current), null, 2)}\n`);
  console.log(`Wrote ${[...current.values()].reduce((a, b) => a + b, 0)} findings across ${current.size} file/rule/severity groups.`);
  process.exit(0);
}

const baselineRows = JSON.parse(readFileSync(baselinePath, 'utf8'));
const baseline = new Map(
  baselineRows.map((row) => [
    JSON.stringify([row.file, row.rule, row.severity]),
    row.count,
  ]),
);
const regressions = [...current.entries()]
  .filter(([key, count]) => count > (baseline.get(key) || 0))
  .map(([key, count]) => ({ key, delta: count - (baseline.get(key) || 0) }));

if (regressions.length) {
  for (const { key, delta } of regressions.sort((a, b) => a.key.localeCompare(b.key))) {
    const [file, rule, severity] = JSON.parse(key);
    console.error(`FAIL ${file} ${rule} ${severity} +${delta}`);
  }
  process.exit(1);
}

const currentTotal = [...current.values()].reduce((a, b) => a + b, 0);
const baselineTotal = [...baseline.values()].reduce((a, b) => a + b, 0);
console.log(`PASS repository ESLint baseline: ${currentTotal} current findings; ${baselineTotal} maximum reviewed findings.`);
