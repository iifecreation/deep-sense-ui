/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertRead,
  AnalyticsOverview,
  FraudCaseRead,
  TransactionRead,
} from '@/types';
import { alertsService } from './alerts.service';
import { analyticsService } from './analytics.service';
import { billingService } from './billing.service';
import { casesService } from './cases.service';
import { screeningService } from './screening.service';
import { transactionsService } from './transactions.service';

type SourceError = {
  source: string;
  message: string;
};

export type TenantDashboardOverview = {
  metrics: {
    riskScore: number;
    totalTransactions: number;
    highRiskTransactions: number;
    openAlerts: number;
    highRiskAlerts: number;
    openCases: number;
    screeningMatches: number;
    documentReviews: number | null;
    fraudRate: number;
    apiUsage: number | null;
    billingUsage: number | null;
  };
  recent: {
    alerts: AlertRead[];
    cases: FraudCaseRead[];
    transactions: TransactionRead[];
    documents: any[];
    screening: any[];
  };
  notConfigured: string[];
  sourceErrors: SourceError[];
  fetchedAt: string;
};

const metricValue = (overview: AnalyticsOverview | null, key: string): number => {
  const metric = overview?.metrics?.find((item) => item.key === key);
  return Number(metric?.value ?? 0);
};

const sourceError = (source: string, reason: unknown): SourceError => ({
  source,
  message: reason instanceof Error ? reason.message : 'Request failed',
});

const fulfilledValue = <T>(result: PromiseSettledResult<T>): T | null =>
  result.status === 'fulfilled' ? result.value : null;

const billingUsageCount = (usage: any[] | null, needles: string[]): number | null => {
  if (!usage || usage.length === 0) return null;

  const rows = usage.filter((item) => {
    const key = String(item.feature_key ?? item.key ?? item.name ?? '').toLowerCase();
    return needles.some((needle) => key.includes(needle));
  });

  if (rows.length === 0) return null;

  return rows.reduce((total, item) => {
    const value = Number(item.used ?? item.usage ?? item.current_usage ?? item.count ?? 0);
    return total + (Number.isFinite(value) ? value : 0);
  }, 0);
};

export const dashboardService = {
  async getOverview(): Promise<TenantDashboardOverview> {
    const [analytics, alerts, cases, transactions, screening, billingUsage] = await Promise.allSettled([
      analyticsService.getOverview(),
      alertsService.listAlerts({ page: 1, page_size: 5 }),
      casesService.listCases({ page: 1, page_size: 5 }, { status: 'open' }),
      transactionsService.listTransactions({ page: 1, page_size: 5 }),
      screeningService.listMatches({ page: 1, page_size: 5 }, { status: 'pending' }),
      billingService.getUsage(),
    ]);

    const sourceErrors = [
      analytics.status === 'rejected' ? sourceError('analytics', analytics.reason) : null,
      alerts.status === 'rejected' ? sourceError('alerts', alerts.reason) : null,
      cases.status === 'rejected' ? sourceError('cases', cases.reason) : null,
      transactions.status === 'rejected' ? sourceError('transactions', transactions.reason) : null,
      screening.status === 'rejected' ? sourceError('screening', screening.reason) : null,
      billingUsage.status === 'rejected' ? sourceError('billing usage', billingUsage.reason) : null,
    ].filter(Boolean) as SourceError[];

    if (sourceErrors.length === 6) {
      throw new Error('Dashboard data sources are unavailable');
    }

    const analyticsData = fulfilledValue(analytics);
    const alertData = fulfilledValue(alerts);
    const caseData = fulfilledValue(cases);
    const transactionData = fulfilledValue(transactions);
    const screeningData = fulfilledValue(screening);
    const billingUsageData = fulfilledValue(billingUsage);

    return {
      metrics: {
        riskScore: metricValue(analyticsData, 'avg_risk_score'),
        totalTransactions: metricValue(analyticsData, 'total_transactions'),
        highRiskTransactions: metricValue(analyticsData, 'high_risk_transactions'),
        openAlerts: metricValue(analyticsData, 'open_alerts') || alertData?.total || 0,
        highRiskAlerts: metricValue(analyticsData, 'high_risk_alerts'),
        openCases: metricValue(analyticsData, 'open_cases') || caseData?.total || 0,
        screeningMatches: metricValue(analyticsData, 'screening_matches') || screeningData?.total || 0,
        documentReviews: null,
        fraudRate: metricValue(analyticsData, 'fraud_rate'),
        apiUsage: billingUsageCount(billingUsageData, ['api']),
        billingUsage: billingUsageCount(billingUsageData, ['transaction', 'screening', 'document', 'case', 'alert']),
      },
      recent: {
        alerts: alertData?.items ?? [],
        cases: caseData?.items ?? [],
        transactions: transactionData?.items ?? [],
        documents: [],
        screening: screeningData?.items ?? [],
      },
      notConfigured: ['document_reviews'],
      sourceErrors,
      fetchedAt: new Date().toISOString(),
    };
  },
};
