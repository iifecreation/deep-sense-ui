"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Zap,
  BarChart3,
  ArrowRight,
  Download,
  Server,
  Loader2
} from "lucide-react";
import { useBillingUsage, useCurrentPlan } from "@/hooks";
import { billingService } from "@/services/billing.service";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CurrentPlanRead } from "@/lib/api-client/api";

export default function UsagePage() {
  const { data: planData, isLoading: planLoading, refetch: refetchPlan } = useCurrentPlan();
  const { data: usageData, isLoading: usageLoading } = useBillingUsage();

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [cancelError, setCancelError] = useState<string | null>(null);

  if (planLoading || usageLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase animate-pulse">Usage & Billing</h1>
        </section>
      </div>
    );
  }

  // /billing/current-plan returns {plan, plan_name, status, billing_cycle,
  // current_period_start, current_period_end, stripe_customer_id, ...} - not
  // a dollar amount or payment-method detail, which only exist in Stripe's
  // own portal (reached via "Manage in Stripe" below).
  const plan: Partial<CurrentPlanRead> = planData ?? {};
  const hasSubscription = plan.status && plan.status !== "none";

  // /billing/usage returns a list of per-feature counters.
  const usage = Array.isArray(usageData) ? usageData : [];

  const handleManageBilling = async () => {
    setIsRedirecting(true);
    try {
      const res = await billingService.createPortalSession({ return_url: window.location.href });
      if (res.url) window.location.href = res.url;
    } catch (err) {
      console.error("Failed to create portal session:", err);
    } finally {
      setIsRedirecting(false);
    }
  };

  const handleUpgradePlan = async () => {
    setIsRedirecting(true);
    try {
      const res = await billingService.createCheckoutSession({
        plan_slug: "enterprise",
        success_url: window.location.href,
        cancel_url: window.location.href,
      });
      if (res.url) window.location.href = res.url;
    } catch (err) {
      console.error("Failed to create checkout session:", err);
    } finally {
      setIsRedirecting(false);
    }
  };

  const handleCancelSubscription = async () => {
    setCancelling(true);
    setCancelError(null);
    try {
      await billingService.cancelSubscription({ at_period_end: true });
      setShowCancel(false);
      await refetchPlan();
    } catch (err) {
      setCancelError(err instanceof Error ? err.message : "Failed to cancel subscription.");
    } finally {
      setCancelling(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 pb-20">
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900">
              Usage & Billing<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-[11px] font-bold uppercase tracking-widest italic text-muted-foreground leading-none">
              Monitor your infrastructure utilization and manage subscription
            </p>
          </div>
          <div className="flex gap-3">
             <Button disabled variant="outline" className="h-10 text-xs font-black uppercase tracking-widest italic opacity-50">
                <Download className="w-3.5 h-3.5 mr-2" /> Export Invoice (use Stripe portal)
             </Button>
             <Button
               onClick={() => void handleUpgradePlan()}
               disabled={isRedirecting}
               className="h-10 bg-neutral-900 text-white font-black uppercase tracking-widest italic hover:scale-[1.03] transition-all"
             >
                <CreditCard className="w-3.5 h-3.5 mr-2" /> {isRedirecting ? "Redirecting..." : "Upgrade Plan"}
             </Button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 bg-white">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase text-neutral-900">Current Cycle Usage</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black italic mt-1">
                    {plan.current_period_end ? `Resets on ${new Date(plan.current_period_end).toLocaleDateString()}` : "No active billing cycle"}
                  </p>
               </div>
               <BarChart3 className="w-8 h-8 text-neutral-200" />
            </div>

            <div className="space-y-8">
               {usage.length === 0 ? (
                 <p className="text-sm text-muted-foreground italic text-center py-6">No usage counters recorded yet.</p>
               ) : usage.map((item, i) => {
                 const percent = item.limit ? Math.min(100, Math.round((item.used / item.limit) * 100)) : 0;
                 return (
                   <div key={i} className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[12px] font-black uppercase tracking-widest italic text-neutral-900">
                         {(item.feature_key || "feature").replace(/_/g, ' ')}
                       </span>
                       <span className="text-[14px] font-black italic text-neutral-900">
                         {(item.used ?? 0).toLocaleString()} <span className="text-[10px] text-muted-foreground">/ {item.limit != null ? item.limit.toLocaleString() : "∞"}</span>
                       </span>
                     </div>
                     <Progress value={percent} className="h-3" />
                     <div className="text-[10px] font-bold italic text-muted-foreground text-right">
                       {item.limit ? `${percent}% Utilized` : "Unmetered"}
                     </div>
                   </div>
                 );
               })}
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl" />
                <Server className="w-8 h-8 text-brand-lime mb-6" />
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50 italic mb-2">Billing Cycle</div>
                <div className="text-2xl font-black italic tracking-tighter text-white uppercase">{plan.billing_cycle || "N/A"}</div>
             </Card>

             <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                <Zap className="w-8 h-8 text-indigo-400 mb-6" />
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50 italic mb-2">Auto-Renew</div>
                <div className="text-2xl font-black italic tracking-tighter text-white uppercase">{plan.cancel_at_period_end ? "Off" : hasSubscription ? "On" : "N/A"}</div>
             </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-white h-full flex flex-col">
            <h3 className="text-xl font-black italic tracking-tighter uppercase text-neutral-900 mb-6">Subscription Plan</h3>
            <div className="p-6 bg-muted/30 border border-border/50 rounded-3xl mb-8 flex-1">
               <div className={`text-[10px] font-black uppercase tracking-widest italic mb-2 ${hasSubscription ? "text-emerald-500" : "text-muted-foreground"}`}>
                 {plan.status || "None"}
               </div>
               <div className="text-3xl font-black italic tracking-tighter text-neutral-900 mb-2">{plan.plan_name || "Free"}</div>
               <div className="text-[12px] font-bold text-muted-foreground italic">
                 {plan.current_period_end ? `Renews ${new Date(plan.current_period_end).toLocaleDateString()}` : "No active subscription"}
               </div>
            </div>

            <div className="space-y-4 font-bold italic mb-8 text-[12px] text-neutral-600">
               <div className="flex justify-between border-b border-border/50 pb-3"><span>Stripe Customer</span><span className="text-neutral-900">{plan.stripe_customer_id ? plan.stripe_customer_id.slice(0, 14) : "Not connected"}</span></div>
               <div className="flex justify-between pb-3"><span>Billing Cycle</span><span className="text-neutral-900 uppercase">{plan.billing_cycle || "N/A"}</span></div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
               <Button
                 onClick={() => void handleManageBilling()}
                 disabled={isRedirecting}
                 className="w-full rounded-2xl h-12 bg-neutral-900 text-white font-black uppercase tracking-widest italic text-[10px] hover:bg-neutral-800 transition-all"
               >
                  {isRedirecting ? "Redirecting..." : "Manage in Stripe"} <ArrowRight className="w-3 h-3 ml-2" />
               </Button>
               <Button
                 variant="ghost"
                 disabled={!hasSubscription}
                 onClick={() => setShowCancel(true)}
                 className="w-full rounded-2xl h-12 text-rose-500 font-black uppercase tracking-widest italic text-[10px] hover:bg-rose-50 hover:text-rose-600 disabled:opacity-40"
               >
                  Cancel Subscription
               </Button>
            </div>
          </Card>
        </div>
      </div>

      <Dialog open={showCancel} onOpenChange={(open) => { if (!open) { setShowCancel(false); setCancelError(null); } }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel subscription?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-slate-600">
            Your subscription will remain active until the end of the current billing period, then it will not renew.
          </p>
          {cancelError ? <p className="text-xs text-red-600">{cancelError}</p> : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCancel(false)}>
              Keep Subscription
            </Button>
            <Button variant="destructive" onClick={() => void handleCancelSubscription()} disabled={cancelling}>
              {cancelling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Cancel at Period End
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
