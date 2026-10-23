"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldAlert,
  AlertTriangle,
  User,
  Globe,
  ChevronRight,
  Briefcase,
  MessageSquare,
  FileText,
  Activity,
  Info,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useTransaction } from "@/hooks/use-transactions";
import { transactionsService } from "@/services/transactions.service";
import type { TransactionScoreBreakdown } from "@/lib/api-client/api";

export default function TransactionDetailPage() {
  const params = useParams();
  const transactionId = params.transactionId as string;

  const { data, isLoading, isError, refetch } = useTransaction(transactionId);
  const [breakdown, setBreakdown] = useState<TransactionScoreBreakdown | null>(null);

  useEffect(() => {
    if (!transactionId) return;
    transactionsService.getTransactionScoreBreakdown(transactionId).then(setBreakdown).catch(() => setBreakdown(null));
  }, [transactionId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-lime"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load transaction</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const txnData = data;

  const txn = {
    id: txnData.id,
    decision: (txnData.decision || "pending").toLowerCase(),
    status: txnData.status || "unknown",
    riskScore: txnData.final_score ?? null,
    amount: txnData.amount,
    currency: txnData.currency,
    timestamp: new Date(txnData.occurred_at || txnData.created_at).toLocaleString(),
    customer: {
      id: txnData.account_id || "Unknown",
    },
    merchant: {
      id: txnData.merchant_id || null,
    },
    timeline: [
      { event: "Transaction Received", time: new Date(txnData.created_at).toLocaleTimeString(), detail: `Channel: ${txnData.transaction_type}/${txnData.channel}` }
    ]
  };

  const ruleEvaluations = breakdown?.rule_evaluations || [];
  const compositeScores: Record<string, unknown> = breakdown?.composite || {};
  const anomalyScores: Record<string, unknown> = breakdown?.anomaly || {};
  const graphSummary = breakdown?.graph_link_summary;

  const fusedScores = [
    ...(txn.riskScore != null ? [{ label: "Final Score", value: (txn.riskScore * 100).toFixed(1) }] : []),
    ...Object.entries(compositeScores).filter(([, v]) => typeof v === 'number').map(([k, v]) => ({ label: k.replace(/_/g, ' '), value: ((v as number) * 100).toFixed(1) })),
    ...Object.entries(anomalyScores).filter(([, v]) => typeof v === 'number').map(([k, v]) => ({ label: k.replace(/_/g, ' '), value: ((v as number) * 100).toFixed(1) })),
  ];

  const kpis = [
    { label: "Final Score", value: txn.riskScore != null ? txn.riskScore.toFixed(2) : "N/A" },
    { label: "Amount", value: `${txn.currency} ${txn.amount}` },
    { label: "Rules Triggered", value: ruleEvaluations.filter((r) => r.triggered).length },
    { label: "Transaction Type", value: txnData.transaction_type },
  ];

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/transactions" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Flow Intelligence Registry
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{txn.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                txn.decision === 'block' ? 'bg-rose-500 text-white' : txn.decision === 'allow' ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'
              }`}>
                {txn.decision}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{txn.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <FileText className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Raw Payload
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Decision Action
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                      Approve & Release (not yet available)
                   </DropdownMenuItem>
                   <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                      Block & Terminate (not yet available)
                   </DropdownMenuItem>
                   <DropdownMenuItem asChild className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      <Link href="/dashboard/cases">Create Investigation</Link>
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {kpis.map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div>
                 <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="risk" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="overview" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Overview</TabsTrigger>
                  <TabsTrigger value="risk" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Risk Engineering</TabsTrigger>
                  <TabsTrigger value="relationships" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Node Graph</TabsTrigger>
                  <TabsTrigger value="timeline" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Timeline</TabsTrigger>
               </TabsList>

               <TabsContent value="risk" className="m-0 space-y-8">
                  {/* DECISION EXPLANATION */}
                  <div className="p-8 bg-rose-500 rounded-[40px] text-white relative shadow-2xl overflow-hidden group">
                     <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-all duration-700" />
                     <div className="flex gap-8 items-start relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-[28px] flex items-center justify-center shrink-0 border border-white/20 shadow-lg shadow-black/20">
                           <Info className="w-8 h-8 text-white" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-black italic uppercase tracking-tighter">Decision Logic Resolution</h3>
                           <p className="text-[13px] text-white/80 leading-relaxed font-medium italic italic">
                              This transaction scored <span className="text-white font-black underline underline-offset-4 decoration-white/30">{txn.riskScore != null ? txn.riskScore.toFixed(2) : "N/A"}</span>, resulting in decision <span className="text-white font-black underline underline-offset-4 decoration-white/30">{txn.decision}</span>.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Fused Risk Vector</CardTitle>
                              <Activity className="w-8 h-8 text-muted-foreground/10" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-8">
                           {fusedScores.length === 0 ? (
                             <p className="text-sm text-muted-foreground italic">No score breakdown available.</p>
                           ) : fusedScores.map((score, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between items-baseline mb-1">
                                   <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground capitalize">
                                      {score.label}
                                   </span>
                                   <span className="text-lg font-black italic text-neutral-900">{score.value}</span>
                                </div>
                                <Progress value={parseFloat(score.value)} className="h-1 bg-muted" indicatorClassName="bg-rose-500 shadow-[0_0_8px_currentColor]" />
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Entity Context</CardTitle>
                              <User className="w-8 h-8 text-muted-foreground/10" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 flex flex-col items-center gap-8">
                           <div className="w-24 h-24 rounded-[32px] bg-zinc-50 border border-border flex items-center justify-center relative shadow-inner overflow-hidden">
                              <User className="w-10 h-10 text-muted-foreground" />
                           </div>
                           <div className="text-center">
                              <p className="text-[10px] font-black uppercase text-muted-foreground italic mt-1">Account {txn.customer.id}</p>
                           </div>
                           {graphSummary && (
                             <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-border">
                                {Object.entries(graphSummary).filter(([, v]) => typeof v !== 'object').map(([k, v]) => (
                                  <div key={k} className="text-center">
                                     <div className="text-[9px] font-black uppercase text-muted-foreground italic mb-1">{k.replace(/_/g, ' ')}</div>
                                     <div className="text-[13px] font-black italic text-neutral-900">{String(v)}</div>
                                  </div>
                                ))}
                             </div>
                           )}
                           <Link href={`/dashboard/users/${txn.customer.id}`} className="w-full">
                             <Button variant="outline" className="w-full text-[9px] font-black uppercase italic tracking-widest border-border rounded-2xl h-12 shadow-sm">View Entity Profile</Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </div>

                  {/* TRIGGERED RULES TABLE */}
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50 flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Triggered Logic Nodes</CardTitle>
                        <Badge className="bg-muted text-muted-foreground border-none text-[8px] font-black italic">{ruleEvaluations.length}</Badge>
                     </CardHeader>
                     <CardContent className="p-0">
                        {ruleEvaluations.length === 0 ? (
                          <p className="p-10 text-center text-muted-foreground italic text-sm font-bold">No rule evaluations recorded.</p>
                        ) : (
                          <div className="divide-y divide-border/50">
                            {ruleEvaluations.map((r, i) => (
                              <div key={i} className="p-6 flex justify-between items-center">
                                 <span className="text-xs font-black italic">{String(r.rule_name || r.rule_slug || `Rule ${i + 1}`)}</span>
                                 <Badge className={r.triggered ? "bg-rose-500 text-white" : "bg-muted text-muted-foreground"}>{r.triggered ? "Triggered" : "Not Triggered"}</Badge>
                              </div>
                            ))}
                          </div>
                        )}
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="timeline" className="m-0">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-12 bg-white">
                     <div className="space-y-12">
                        {txn.timeline.map((step, i) => (
                           <div key={i} className="flex gap-10 items-start relative group">
                              {i !== txn.timeline.length - 1 && (
                                <div className="absolute left-[31px] top-10 bottom-[-48px] w-px bg-neutral-100 group-hover:bg-brand-lime transition-colors" />
                              )}
                              <div className={`w-16 h-16 rounded-[24px] bg-zinc-50 border border-neutral-100 flex flex-col items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-neutral-900 group-hover:text-white`}>
                                 <span className="text-[11px] font-black italic">{step.time.split(':')[0]}:{step.time.split(':')[1]}</span>
                                 <span className="text-[7px] font-black uppercase text-muted-foreground tracking-widest mt-0.5 group-hover:text-white/40">PM</span>
                              </div>
                              <div className="flex-1 space-y-2 pt-2">
                                 <h5 className="text-xl font-black italic uppercase tracking-tighter text-neutral-900">{step.event}</h5>
                                 <p className="text-[12px] text-muted-foreground italic font-medium">{step.detail}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* NETWORK CONTEXT */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Network Protocol</CardTitle>
                     <Globe className="w-6 h-6 text-muted-foreground/20" />
                  </div>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                     <span className="text-neutral-400">Channel</span>
                     <span className="text-neutral-900">{txnData.channel}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                     <span className="text-neutral-400">External Reference</span>
                     <span className="text-neutral-900">{txnData.external_reference || "None"}</span>
                  </div>
                  {txn.merchant.id && (
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                       <span className="text-neutral-400">Merchant</span>
                       <span className="text-neutral-900">{txn.merchant.id}</span>
                    </div>
                  )}
                  <p className="text-[9px] text-muted-foreground italic">Network/device enrichment not available for this transaction.</p>
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Investigation Ops</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">System-wide command over transaction lifecycle state.</p>
               </div>
               <div className="space-y-3">
                  <Link href="/dashboard/cases" className="block">
                    <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                       <Briefcase className="w-4 h-4 mr-2" />
                       Escalate to Case
                    </Button>
                  </Link>
                  <Button disabled variant="outline" className="w-full h-14 border-white/10 text-white/50 rounded-3xl text-[10px] font-black uppercase italic opacity-60">
                     <MessageSquare className="w-4 h-4 mr-2" />
                     Add Analyst Note (not yet available)
                  </Button>
                  <Button disabled variant="outline" className="w-full h-14 border-rose-500/30 text-rose-500/50 rounded-3xl text-[10px] font-black uppercase italic opacity-60">
                     <ShieldAlert className="w-4 h-4 mr-2" />
                     Force Block Root (not yet available)
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
