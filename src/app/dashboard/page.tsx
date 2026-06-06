'use client';

import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CreditCard,
  FileSearch,
  Gauge,
  RefreshCw,
  SearchCheck,
  ShieldAlert,
  WalletCards,
} from 'lucide-react';
import Link from 'next/link';
import { useDashboard } from '@/hooks/use-dashboard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type ScreeningActivity = {
  id: string;
  entity_name?: string;
  name?: string;
  status?: string;
  created_at?: string;
};

const formatNumber = (value: number | null) => {
  if (value === null) return 'Not configured';
  return new Intl.NumberFormat().format(value);
};

const formatPercent = (value: number) => `${(value * 100).toFixed(2)}%`;

const formatTimeAgo = (dateString?: string) => {
  if (!dateString) return 'No timestamp';
  const date = new Date(dateString);
  const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));

  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
};

const riskBadgeClass = (risk?: string) => {
  switch (risk?.toLowerCase()) {
    case 'critical':
      return 'bg-red-900 text-white';
    case 'high':
      return 'bg-red-600 text-white';
    case 'medium':
      return 'bg-amber-500 text-white';
    case 'low':
      return 'bg-emerald-500 text-white';
    default:
      return 'bg-slate-500 text-white';
  }
};

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-64 rounded bg-slate-100" />
          <div className="h-4 w-96 rounded bg-slate-100" />
        </div>
        <div className="h-10 w-28 rounded bg-slate-100" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="rounded-lg">
            <CardContent className="p-5">
              <div className="h-20 animate-pulse rounded bg-slate-100" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function EmptyDashboard({ onRefresh }: { onRefresh: () => void }) {
  return (
    <Card className="rounded-lg border-dashed">
      <CardContent className="flex flex-col items-center justify-center gap-3 py-14 text-center">
        <ShieldAlert className="h-9 w-9 text-slate-400" />
        <div>
          <p className="font-semibold text-slate-900">No tenant activity yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Dashboard metrics will appear after transactions, alerts, cases, or screenings are recorded.
          </p>
        </div>
        <Button variant="outline" onClick={onRefresh}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </CardContent>
    </Card>
  );
}

export default function DashboardOverview() {
  const { data, isLoading, isError, error, refetch } = useDashboard();

  if (isLoading && !data) return <DashboardSkeleton />;

  if (isError && !data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        <Card className="rounded-lg border-red-200 bg-red-50">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-900">Failed to load dashboard data</p>
                <p className="text-sm text-red-700">{error?.message ?? 'Please try again.'}</p>
              </div>
            </div>
            <Button onClick={refetch} variant="outline" className="w-fit">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) return null;

  const hasActivity =
    data.metrics.totalTransactions > 0 ||
    data.metrics.openAlerts > 0 ||
    data.metrics.openCases > 0 ||
    data.metrics.screeningMatches > 0 ||
    data.recent.transactions.length > 0 ||
    data.recent.alerts.length > 0 ||
    data.recent.cases.length > 0;

  const metricCards = [
    { label: 'Risk Score Summary', value: data.metrics.riskScore.toFixed(3), icon: Gauge, helper: 'Average transaction risk score' },
    { label: 'Total Transactions', value: formatNumber(data.metrics.totalTransactions), icon: CreditCard, helper: 'Recorded by the transaction API' },
    { label: 'High-Risk Transactions', value: formatNumber(data.metrics.highRiskTransactions), icon: AlertCircle, helper: 'Transactions scoring 0.8 or higher' },
    { label: 'Open Alerts', value: formatNumber(data.metrics.openAlerts), icon: ShieldAlert, helper: 'Tenant alert records' },
    { label: 'Open Cases', value: formatNumber(data.metrics.openCases), icon: BriefcaseBusiness, helper: 'Cases in open review states' },
    { label: 'Screening Matches', value: formatNumber(data.metrics.screeningMatches), icon: SearchCheck, helper: 'Screening match records' },
    { label: 'Document Reviews', value: formatNumber(data.metrics.documentReviews), icon: FileSearch, helper: 'Document list endpoint is not configured' },
    { label: 'Fraud Rate', value: formatPercent(data.metrics.fraudRate), icon: AlertTriangle, helper: 'Blocked transactions divided by total transactions' },
    { label: 'API Usage', value: formatNumber(data.metrics.apiUsage), icon: WalletCards, helper: 'Reported by billing usage when available' },
    { label: 'Billing Usage', value: formatNumber(data.metrics.billingUsage), icon: WalletCards, helper: 'Usage counters from billing service' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-slate-500">
            Real tenant data from analytics, alerts, cases, transactions, screening, and billing.
            <span className="ml-2">Last updated: {new Date(data.fetchedAt).toLocaleTimeString()}</span>
          </p>
        </div>
        <Button variant="outline" onClick={refetch} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {data.sourceErrors.length > 0 && (
        <Card className="rounded-lg border-amber-200 bg-amber-50">
          <CardContent className="flex gap-3 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <p className="font-semibold text-amber-950">Some dashboard sources did not load</p>
              <p className="text-sm text-amber-800">
                {data.sourceErrors.map((item) => `${item.source}: ${item.message}`).join(' | ')}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {!hasActivity ? (
        <EmptyDashboard onRefresh={refetch} />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {metricCards.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="rounded-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-slate-600">{item.label}</CardTitle>
                    <Icon className="h-4 w-4 text-slate-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                    <p className="mt-1 text-xs text-slate-500">{item.helper}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Card className="rounded-lg xl:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <CardTitle className="text-base font-bold text-slate-900">Recent Alerts</CardTitle>
                  <CardDescription className="text-xs">Latest alert records from the tenant alert API.</CardDescription>
                </div>
                <Link href="/dashboard/alerts" className="flex items-center text-xs font-semibold text-blue-600 hover:underline">
                  View all
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardHeader>
              <Table>
                <TableHeader className="bg-slate-50/60">
                  <TableRow>
                    <TableHead className="pl-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">Alert</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Severity</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Created</TableHead>
                    <TableHead className="pr-6 text-right" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.recent.alerts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="py-8 text-center text-sm text-slate-500">
                        No recent alerts.
                      </TableCell>
                    </TableRow>
                  ) : (
                    data.recent.alerts.map((alert) => (
                      <TableRow key={alert.id} className="hover:bg-slate-50">
                        <TableCell className="pl-6">
                          <p className="max-w-md truncate text-sm font-semibold text-slate-900">{alert.title}</p>
                          <p className="text-xs text-slate-500">{alert.id}</p>
                        </TableCell>
                        <TableCell>
                          <Badge className={`rounded-full border-none px-2 py-0 text-[10px] font-bold uppercase ${riskBadgeClass(alert.severity)}`}>
                            {alert.severity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-xs text-slate-500">{formatTimeAgo(alert.created_at)}</TableCell>
                        <TableCell className="pr-6 text-right">
                          <Link href={`/dashboard/alerts/${alert.id}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Card>

            <Card className="rounded-lg">
              <CardHeader className="border-b border-slate-100 px-6 py-4">
                <CardTitle className="text-base font-bold text-slate-900">Recent Operations</CardTitle>
                <CardDescription className="text-xs">Cases, transactions, and screening activity.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <section className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Cases</p>
                    <Link href="/dashboard/cases" className="text-xs font-semibold text-blue-600">Open</Link>
                  </div>
                  {data.recent.cases.length === 0 ? (
                    <p className="text-sm text-slate-500">No recent cases.</p>
                  ) : (
                    data.recent.cases.slice(0, 3).map((item) => (
                      <Link key={item.id} href={`/dashboard/cases/${item.id}`} className="block rounded-md border border-slate-100 p-3 hover:bg-slate-50">
                        <p className="truncate text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.status} | {formatTimeAgo(item.created_at)}</p>
                      </Link>
                    ))
                  )}
                </section>

                <section className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Transactions</p>
                    <Link href="/dashboard/transactions" className="text-xs font-semibold text-blue-600">Open</Link>
                  </div>
                  {data.recent.transactions.length === 0 ? (
                    <p className="text-sm text-slate-500">No recent transactions.</p>
                  ) : (
                    data.recent.transactions.slice(0, 3).map((item) => (
                      <Link key={item.id} href={`/dashboard/transactions/${item.id}`} className="block rounded-md border border-slate-100 p-3 hover:bg-slate-50">
                        <p className="truncate text-sm font-semibold text-slate-900">{item.external_reference ?? item.id}</p>
                        <p className="text-xs text-slate-500">{item.currency} {item.amount} | {item.decision ?? 'undecided'}</p>
                      </Link>
                    ))
                  )}
                </section>

                <section className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Screening</p>
                    <Link href="/dashboard/screening" className="text-xs font-semibold text-blue-600">Open</Link>
                  </div>
                  {data.recent.screening.length === 0 ? (
                    <p className="text-sm text-slate-500">No recent screening activity.</p>
                  ) : (
                    data.recent.screening.slice(0, 3).map((item: ScreeningActivity) => (
                      <Link key={item.id} href={`/dashboard/screening/matches/${item.id}`} className="block rounded-md border border-slate-100 p-3 hover:bg-slate-50">
                        <p className="truncate text-sm font-semibold text-slate-900">{item.entity_name ?? item.name ?? item.id}</p>
                        <p className="text-xs text-slate-500">{item.status ?? 'pending'} | {formatTimeAgo(item.created_at)}</p>
                      </Link>
                    ))
                  )}
                </section>

                <section className="rounded-md border border-dashed border-slate-200 p-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Documents</p>
                  <p className="mt-1 text-sm text-slate-500">Feature not configured. Configure the document list endpoint to show reviews here.</p>
                </section>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
