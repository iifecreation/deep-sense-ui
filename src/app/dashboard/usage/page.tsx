"use client";

import React, { useState } from "react";
import { 
  Activity, 
  CreditCard, 
  Zap, 
  BarChart3, 
  Clock, 
  AlertCircle, 
  ArrowRight,
  TrendingUp,
  Download,
  Server
} from "lucide-react";
import { useBillingUsage, useCurrentPlan } from "@/hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function UsagePage() {
  const { data: planData, isLoading: planLoading } = useCurrentPlan();
  const { data: usageData, isLoading: usageLoading } = useBillingUsage();

  if (planLoading || usageLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase animate-pulse">Usage & Billing</h1>
        </section>
      </div>
    );
  }

  const plan = planData || {
    name: 'Enterprise Plus',
    price: 4999,
    status: 'Active',
    next_billing: '2026-07-01'
  };

  const usage = usageData || [
    { feature_key: 'api_requests', used: 1250000, limit: 5000000 },
    { feature_key: 'screening_searches', used: 45000, limit: 100000 },
    { feature_key: 'active_users', used: 24, limit: 50 },
    { feature_key: 'custom_models', used: 2, limit: 5 }
  ];

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
             <Button variant="outline" className="h-10 text-xs font-black uppercase tracking-widest italic">
                <Download className="w-3.5 h-3.5 mr-2" /> Export Invoice
             </Button>
             <Button className="h-10 bg-neutral-900 text-white font-black uppercase tracking-widest italic hover:scale-[1.03] transition-all">
                <CreditCard className="w-3.5 h-3.5 mr-2" /> Upgrade Plan
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
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black italic mt-1">Resets on {new Date(plan.next_billing).toLocaleDateString()}</p>
               </div>
               <BarChart3 className="w-8 h-8 text-neutral-200" />
            </div>

            <div className="space-y-8">
               {usage.map((item: any, i: number) => {
                 const percent = Math.min(100, Math.round((item.used / item.limit) * 100)) || 0;
                 return (
                   <div key={i} className="space-y-3">
                     <div className="flex justify-between items-end">
                       <span className="text-[12px] font-black uppercase tracking-widest italic text-neutral-900">
                         {item.feature_key.replace(/_/g, ' ')}
                       </span>
                       <span className="text-[14px] font-black italic text-neutral-900">
                         {item.used.toLocaleString()} <span className="text-[10px] text-muted-foreground">/ {item.limit.toLocaleString()}</span>
                       </span>
                     </div>
                     <Progress value={percent} className="h-3" />
                     <div className="text-[10px] font-bold italic text-muted-foreground text-right">{percent}% Utilized</div>
                   </div>
                 );
               })}
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl" />
                <Server className="w-8 h-8 text-brand-lime mb-6" />
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50 italic mb-2">Infrastructure Cost</div>
                <div className="text-4xl font-black italic tracking-tighter text-white">$4,999<span className="text-lg text-white/30">.00</span></div>
             </Card>

             <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
                <Zap className="w-8 h-8 text-indigo-400 mb-6" />
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50 italic mb-2">Overage Fees</div>
                <div className="text-4xl font-black italic tracking-tighter text-white">$0<span className="text-lg text-white/30">.00</span></div>
             </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="rounded-[40px] border-border/50 shadow-2xl p-8 bg-white h-full flex flex-col">
            <h3 className="text-xl font-black italic tracking-tighter uppercase text-neutral-900 mb-6">Subscription Plan</h3>
            <div className="p-6 bg-muted/30 border border-border/50 rounded-3xl mb-8 flex-1">
               <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 italic mb-2">Active</div>
               <div className="text-3xl font-black italic tracking-tighter text-neutral-900 mb-2">{plan.name}</div>
               <div className="text-[12px] font-bold text-muted-foreground italic">Renews {new Date(plan.next_billing).toLocaleDateString()}</div>
            </div>

            <div className="space-y-4 font-bold italic mb-8 text-[12px] text-neutral-600">
               <div className="flex justify-between border-b border-border/50 pb-3"><span>Payment Method</span><span className="text-neutral-900">Visa ending 4242</span></div>
               <div className="flex justify-between border-b border-border/50 pb-3"><span>Billing Email</span><span className="text-neutral-900">finance@acme.com</span></div>
               <div className="flex justify-between pb-3"><span>Currency</span><span className="text-neutral-900">USD</span></div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
               <Button className="w-full rounded-2xl h-12 bg-neutral-900 text-white font-black uppercase tracking-widest italic text-[10px] hover:bg-neutral-800 transition-all">
                  Manage in Stripe <ArrowRight className="w-3 h-3 ml-2" />
               </Button>
               <Button variant="ghost" className="w-full rounded-2xl h-12 text-rose-500 font-black uppercase tracking-widest italic text-[10px] hover:bg-rose-50 hover:text-rose-600">
                  Cancel Subscription
               </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
