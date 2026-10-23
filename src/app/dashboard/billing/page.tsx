"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Settings,
  Plus,
  Calendar,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useCurrentPlan, useBillingUsage } from "@/hooks";
import { billingService } from "@/services/billing.service";
import { LoadErrorCard } from "@/components/common/LoadErrorCard";

export default function BillingPage() {
  const { data: subscription, isLoading: subscriptionLoading, isError: subscriptionError, refetch: refetchSubscription } = useCurrentPlan();
  const { data: usage, isLoading: usageLoading, isError: usageError, refetch: refetchUsage } = useBillingUsage();

  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleManageBilling = async () => {
    try {
      setIsRedirecting(true);
      const res = await billingService.createPortalSession({ return_url: window.location.href });
      if (res.url) {
        window.location.href = res.url;
      }
    } catch (err) {
      console.error('Failed to create portal session:', err);
    } finally {
      setIsRedirecting(false);
    }
  };

  const handleUpgradePlan = async () => {
    try {
      setIsRedirecting(true);
      const res = await billingService.createCheckoutSession({ plan_id: "premium", success_url: window.location.href, cancel_url: window.location.href });
      if (res.url) {
        window.location.href = res.url;
      }
    } catch (err) {
      console.error('Failed to create checkout session:', err);
    } finally {
      setIsRedirecting(false);
    }
  };

  // /billing/usage returns a list of per-feature counters (feature_key, used,
  // limit, remaining, exceeded) - there is no single aggregate object, so the
  // "total requests" figure is derived from a representative counter.
  const usageList = Array.isArray(usage) ? usage : [];
  const requestCounter = usageList.find((u) => u.feature_key === 'api_requests') || usageList[0];
  const totalUsed = usageList.reduce((sum, u) => sum + (u.used || 0), 0);
  const requestPct = requestCounter?.limit ? Math.min(100, Math.round((requestCounter.used / requestCounter.limit) * 100)) : 0;

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
        <LoadErrorCard error={subscriptionError ?? usageError} what="billing data" onRetry={() => { refetchSubscription(); refetchUsage(); }} />
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
            <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest italic leading-none">
              Manage your subscription, invoices, and usage.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              onClick={handleManageBilling}
              disabled={isRedirecting}
              className="h-10 px-4 text-xs font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800"
            >
              <Settings className="w-3.5 h-3.5 mr-2" />
              {isRedirecting ? 'Redirecting...' : 'Manage Payment Method'}
            </Button>
            <Button 
              onClick={handleUpgradePlan}
              disabled={isRedirecting}
              className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-black text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20"
            >
              <Plus className="w-3.5 h-3.5 mr-2" />
              Upgrade Plan
            </Button>
          </div>
        </div>
      </section>

      {/* Subscription Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 bg-white">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
              <Package className="w-5 h-5 text-indigo-500" />
              Current Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              <div className="text-4xl font-black italic text-neutral-900 tracking-tighter uppercase">
                {subscription?.plan_name || (subscription?.status === 'none' ? 'No active plan' : subscription?.plan || '—')}
              </div>
              <Badge className={`text-[10px] font-black uppercase italic tracking-widest ${getStatusColor(subscription?.status || 'none')}`}>
                {subscription?.status === 'none' || !subscription ? 'No subscription' : subscription.status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 bg-white">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-black uppercase tracking-tighter flex items-center gap-2 italic">
              <TrendingUp className="w-5 h-5 text-brand-lime" />
              Monthly Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              <div className="text-4xl font-black italic text-neutral-900 tracking-tighter uppercase">
                {totalUsed.toLocaleString()}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">
                {requestCounter?.feature_key ? `${requestCounter.feature_key.replace(/_/g, ' ')} this period` : 'Usage across all metered features'}
              </div>
              <Progress value={requestPct} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 bg-white">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-xl font-black uppercase tracking-tighter flex items-center gap-2 italic">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              Current Billing Period
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              <div className="text-2xl font-black italic text-neutral-900 tracking-tighter uppercase">
                {subscription?.billing_cycle || 'N/A'}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2 italic">
                <Calendar className="w-3.5 h-3.5" />
                Renews {subscription?.current_period_end ? new Date(subscription.current_period_end).toLocaleDateString() : 'N/A'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Details */}
      <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 bg-white">
        <CardHeader className="p-0 mb-10">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
            Usage Details
          </CardTitle>
          <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground">
            Monitor your API usage and quotas
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6">
            {usageList.length > 0 ? usageList.map((item, index) => {
              const pct = item.limit ? Math.min(100, Math.round((item.used / item.limit) * 100)) : 0;
              return (
              <div key={index} className="flex items-center justify-between p-6 bg-muted/20 border border-border/50 rounded-3xl group hover:border-brand-lime transition-all">
                <div className="space-y-1">
                  <div className="text-[13px] font-black italic uppercase">{(item.feature_key || 'Feature').replace(/_/g, ' ')}</div>
                  {item.exceeded ? (
                    <div className="text-[9px] font-black uppercase tracking-widest text-rose-500 italic">Quota exceeded</div>
                  ) : null}
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-black uppercase italic tracking-tighter">{item.used || 0} / {item.limit ?? '∞'}</div>
                  <Progress value={pct} className="h-2 w-32 mt-2 bg-neutral-200 [&>div]:bg-brand-lime" />
                </div>
              </div>
            );}) : (
              <div className="text-center text-slate-500 p-8 font-black italic">
                No usage data available
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
