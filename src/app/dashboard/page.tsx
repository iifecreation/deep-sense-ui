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
  TrendingUp,
  Shield,
  Activity,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { useDashboard } from '@/hooks/use-dashboard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ScreeningActivity = {
  id: string;
  entity_name?: string;
  name?: string;
  status?: string;
  created_at?: string;
};

// Generate some mock chart data for the last 7 days of transactions
const chartData = [
  { name: 'Mon', approved: 4000, declined: 240 },
  { name: 'Tue', approved: 3000, declined: 139 },
  { name: 'Wed', approved: 2000, declined: 980 },
  { name: 'Thu', approved: 2780, declined: 390 },
  { name: 'Fri', approved: 1890, declined: 480 },
  { name: 'Sat', approved: 2390, declined: 380 },
  { name: 'Sun', approved: 3490, declined: 430 },
];

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
      return 'bg-red-500/10 text-red-500 border border-red-500/20';
    case 'high':
      return 'bg-orange-500/10 text-orange-500 border border-orange-500/20';
    case 'medium':
      return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
    case 'low':
      return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
    default:
      return 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
  }
};

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-64 rounded bg-slate-100 dark:bg-slate-800 animate-pulse" />
          <div className="h-4 w-96 rounded bg-slate-100 dark:bg-slate-800 animate-pulse" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="rounded-xl border-slate-200/60 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="h-16 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function DashboardOverview() {
  const { data, isLoading, isError, error, refetch } = useDashboard();

  if (isLoading && !data) return <DashboardSkeleton />;

  if (isError && !data) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
        <Card className="rounded-xl border-red-200 bg-red-50/50 backdrop-blur-xl">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-900">Failed to load command center data</p>
                <p className="text-sm text-red-700">{error?.message ?? 'Please check your connection and try again.'}</p>
              </div>
            </div>
            <Button onClick={refetch} variant="outline" className="w-fit">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry Connection
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Command Center
          </h1>
          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
            Live tenant activity stream. Last synced: {new Date(data.fetchedAt).toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={refetch} disabled={isLoading} className="rounded-full shadow-sm">
            <RefreshCw className={`mr-2 h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            Sync
          </Button>
          <Button size="sm" className="rounded-full shadow-sm bg-blue-600 hover:bg-blue-700 text-white">
            Generate Report
          </Button>
        </div>
      </div>

      {data.sourceErrors.length > 0 && (
        <Card className="rounded-xl border-amber-200/50 bg-amber-50/50 backdrop-blur-xl dark:bg-amber-950/10 dark:border-amber-900/30">
          <CardContent className="flex gap-3 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-500">Partial System Degradation</p>
              <p className="text-sm text-amber-800 dark:text-amber-400/80 mt-1">
                {data.sourceErrors.map((item) => `${item.source}: ${item.message}`).join(' | ')}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-24 h-24 text-blue-500" />
          </div>
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-slate-500 uppercase tracking-wider text-xs">Total Monitored Value</CardDescription>
            <CardTitle className="text-4xl font-black text-slate-900 dark:text-white mt-2">$24.8M</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 w-fit px-2 py-1 rounded-full font-semibold">
              <TrendingUp className="w-3 h-3 mr-1" /> +12.5% this week
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield className="w-24 h-24 text-rose-500" />
          </div>
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-slate-500 uppercase tracking-wider text-xs">Blocked Fraud</CardDescription>
            <CardTitle className="text-4xl font-black text-slate-900 dark:text-white mt-2">$1.2M</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 w-fit px-2 py-1 rounded-full font-semibold">
              <TrendingUp className="w-3 h-3 mr-1" /> {formatNumber(data.metrics.highRiskTransactions)} high-risk events
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertCircle className="w-24 h-24 text-amber-500" />
          </div>
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-slate-500 uppercase tracking-wider text-xs">Open Cases</CardDescription>
            <CardTitle className="text-4xl font-black text-slate-900 dark:text-white mt-2">{formatNumber(data.metrics.openCases)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 w-fit px-2 py-1 rounded-full font-semibold">
              Requires analyst review
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <SearchCheck className="w-24 h-24 text-blue-500" />
          </div>
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-slate-500 uppercase tracking-wider text-xs">Watchlist Matches</CardDescription>
            <CardTitle className="text-4xl font-black text-slate-900 dark:text-white mt-2">{formatNumber(data.metrics.screeningMatches)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400 w-fit px-2 py-1 rounded-full font-semibold">
              Pending compliance check
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Chart Area */}
        <Card className="rounded-2xl xl:col-span-2 border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100/50 dark:border-slate-800/50 px-6 py-5">
            <div>
              <CardTitle className="text-lg font-bold">Transaction Volume & Fraud Interventions</CardTitle>
              <CardDescription className="text-sm mt-1">Daily approved vs declined events across all engines</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-full px-3 py-1">Last 7 Days</Badge>
          </CardHeader>
          <CardContent className="p-6 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorDeclined" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="approved" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorApproved)" />
                <Area type="monotone" dataKey="declined" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorDeclined)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Real-time feed */}
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl flex flex-col h-full">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100/50 dark:border-slate-800/50 px-6 py-5">
            <div>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Live Alerts Feed
              </CardTitle>
            </div>
            <Link href="/dashboard/alerts" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Triage All
            </Link>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto">
            {data.recent.alerts.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-500">
                <ShieldCheck className="w-12 h-12 mx-auto text-emerald-500 opacity-20 mb-3" />
                No active threats detected.
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {data.recent.alerts.map((alert) => (
                  <Link 
                    key={alert.id} 
                    href={`/dashboard/alerts/${alert.id}`}
                    className="flex flex-col p-5 hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${riskBadgeClass(alert.severity)}`}>
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium">{formatTimeAgo(alert.created_at)}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {alert.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 font-mono truncate">{alert.id}</p>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
