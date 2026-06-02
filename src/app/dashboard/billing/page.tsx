"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Download, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  RefreshCcw,
  Settings,
  Plus,
  ChevronRight,
  Calendar,
  User,
  Package,
  BarChart3,
  Activity,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { useCurrentPlan, useBillingUsage } from "@/hooks";

export default function BillingPage() {
  const { data: subscription, isLoading: subscriptionLoading, isError: subscriptionError, refetch: refetchSubscription } = useCurrentPlan();
  const { data: usage, isLoading: usageLoading, isError: usageError, refetch: refetchUsage } = useBillingUsage();

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
      case 'past_due': return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'pending': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      case 'cancelled': return 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
      default: return 'bg-slate-400/10 text-slate-400 border border-slate-400/20';
    }
  };

  if (subscriptionLoading || usageLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Billing<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="p-6">
                <div className="h-32 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (subscriptionError || usageError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Billing<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load billing data</p>
                <p className="text-sm text-red-700">Please check your connection and try again.</p>
              </div>
            </div>
            <Button onClick={() => { refetchSubscription(); refetchUsage(); }} className="mt-4" variant="outline">
              <RefreshCcw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Page Header */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Billing<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Manage your subscription, invoices, and usage.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <Settings className="w-3.5 h-3.5 mr-2" />
              Manage Payment Method
            </Button>
            <Button className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Upgrade Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Package className="w-4 h-4" />
              Current Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
                {subscription?.plan_name || 'Enterprise'}
              </div>
              <Badge className={getStatusColor(subscription?.status || 'active')}>
                {subscription?.status || 'Active'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Monthly Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
                {usage?.total_requests?.toLocaleString() || '0'}
              </div>
              <div className="text-xs text-muted-foreground">
                API requests this month
              </div>
              <Progress value={usage?.usage_percentage || 0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Next Billing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
                ${subscription?.next_billing_amount || '0.00'}
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {subscription?.next_billing_date || 'N/A'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Details */}
      <Card className="rounded-2xl border">
        <CardHeader>
          <CardTitle className="text-lg font-bold italic text-neutral-900 dark:text-white">
            Usage Details
          </CardTitle>
          <CardDescription className="text-sm">
            Monitor your API usage and quotas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {usage && Array.isArray(usage) ? usage.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div className="space-y-1">
                  <div className="font-bold text-sm">{item.feature_key || 'Feature'}</div>
                  <div className="text-xs text-muted-foreground">{item.description || ''}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{item.current || 0} / {item.limit || '∞'}</div>
                  <Progress value={item.percentage || 0} className="h-2 w-32 mt-1" />
                </div>
              </div>
            )) : (
              <div className="text-center text-muted-foreground py-8">
                No usage data available
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
