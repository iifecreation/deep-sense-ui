"use client";

import React from "react";
import { 
  ArrowLeft, 
  Binary, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Lock, 
  ChevronRight,
  MoreHorizontal,
  Workflow,
  History,
  Cpu,
  BarChart3,
  LineChart,
  PieChart,
  Network,
  Database,
  RefreshCw,
  Zap,
  TrendingDown,
  TrendingUp,
  BrainCircuit,
  Target
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useModelDetail, useModelMetrics } from "@/hooks/use-models";
import { modelsService } from "@/services/models.service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

function formatDate(value?: string | null): string {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value));
}

export default function ModelDetailPage() {
  const params = useParams();
  const modelId = params.modelId as string;

  const { data: model, isLoading, refetch: refetchDetail } = useModelDetail(modelId);
  const { data: metrics } = useModelMetrics(modelId);
  const [retraining, setRetraining] = useState(false);
  const [retrainMessage, setRetrainMessage] = useState<string | null>(null);

  const handleRetrain = async () => {
    setRetraining(true);
    setRetrainMessage(null);
    try {
      await modelsService.requestRetrain(modelId);
      setRetrainMessage("Retraining job queued.");
      await refetchDetail();
    } catch (err) {
      setRetrainMessage(err instanceof Error ? err.message : "Failed to queue retraining job.");
    } finally {
      setRetraining(false);
    }
  };

  const efficacyScores = metrics
    ? [
        { label: "Precision", value: metrics.precision, icon: <Target className="w-3.5 h-3.5" /> },
        { label: "Recall", value: metrics.recall, icon: <Activity className="w-3.5 h-3.5" /> },
        { label: "F1 Score", value: metrics.f1_score, icon: <Zap className="w-3.5 h-3.5" /> },
        { label: "AUC-ROC", value: metrics.auc_roc, icon: <TrendingUp className="w-3.5 h-3.5" /> },
      ].filter((s) => typeof s.value === "number")
    : [];

  const lineage = model
    ? [
        { l: "Slug", v: model.slug },
        { l: "Model Type", v: model.model_type },
        { l: "Active Version", v: model.active_version_label || "None" },
        { l: "Total Versions", v: String(model.total_versions) },
        { l: "Created", v: formatDate(model.created_at) },
        { l: "Last Trained", v: formatDate(model.last_trained_at) },
      ]
    : [];

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center pt-48 pb-24">
        <Activity className="w-10 h-10 animate-pulse text-neutral-300" />
      </div>
    );
  }

  if (!model) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center pt-48 pb-24 text-center">
        <h2 className="text-2xl font-black italic tracking-tighter uppercase text-neutral-900">Model not found</h2>
        <Link href="/dashboard/models" className="mt-4 text-sm text-brand-lime font-bold uppercase">Back to Models</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/models" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Intelligence Model Library
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{model.name}</h1>
              <Badge className="bg-brand-lime text-black border-none h-6 px-4 text-[9px] font-black uppercase italic tracking-widest">
                {model.id}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className={`w-1.5 h-1.5 rounded-full ${model.status.toLowerCase() === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{model.active_version_label || "No version"} • {model.status}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
               <Button variant="outline" disabled={retraining} onClick={() => void handleRetrain()} className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                  <RefreshCw className={`w-3.5 h-3.5 mr-2 text-muted-foreground ${retraining ? 'animate-spin' : ''}`} />
                  {retraining ? "Queuing..." : "Retrain"}
               </Button>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                        Model Actions
                        <ChevronRight className="w-4 h-4 ml-2" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                     <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                        Compare Versions (not yet available)
                     </DropdownMenuItem>
                     <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500 opacity-40">
                        Deactivate Inference (not yet available)
                     </DropdownMenuItem>
                     <DropdownMenuItem disabled className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 opacity-40">
                        Export Weights (not yet available)
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
            {retrainMessage && <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 italic">{retrainMessage}</p>}
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><Binary className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{model.model_type}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Model Type</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><History className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{model.total_versions}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Total Versions</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><Target className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">
                 {model.primary_metric_value != null ? `${(model.primary_metric_value * 100).toFixed(1)}%` : "N/A"}
               </div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{model.primary_metric_name || "Primary Metric"}</div>
            </div>
         </div>
         <div className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5" /></div>
            <div>
               <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white">{formatDate(model.last_trained_at)}</div>
               <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">Last Trained</div>
            </div>
         </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="performance" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="performance" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Performance</TabsTrigger>
                  <TabsTrigger value="features" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Feature Importance</TabsTrigger>
                  <TabsTrigger value="distribution" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Distribution</TabsTrigger>
                  <TabsTrigger value="drift" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Drift Radar</TabsTrigger>
               </TabsList>

               <TabsContent value="performance" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Model Efficacy Matrix</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-8">
                           {efficacyScores.length > 0 ? efficacyScores.map((score, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between items-baseline mb-1">
                                   <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground flex items-center gap-2">
                                      {score.icon} {score.label}
                                   </span>
                                   <span className="text-lg font-black italic text-neutral-900">{((score.value as number) * 100).toFixed(1)}%</span>
                                </div>
                                <Progress value={(score.value as number) * 100} className="h-1 bg-muted" indicatorClassName="bg-brand-lime shadow-[0_0_8px_currentColor]" />
                             </div>
                           )) : (
                             <p className="text-sm text-neutral-400 italic">No recorded metrics yet. Train this model to populate efficacy scores.</p>
                           )}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">PR Curve Insight</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-48 bg-zinc-50 rounded-[32px] border border-dashed border-neutral-100 flex items-center justify-center">
                           <LineChart className="w-10 h-10 text-neutral-200" />
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="features" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Neural Feature Ranking</CardTitle>
                     </CardHeader>
                     <CardContent className="p-12 flex flex-col items-center text-center gap-4">
                        <BarChart3 className="w-10 h-10 text-neutral-200" />
                        <p className="text-neutral-400 text-sm italic max-w-sm">Feature importance is not yet computed for this model. This requires a trained version with SHAP or equivalent attribution data.</p>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="distribution" className="m-0 space-y-8">
                  <div className="bg-white rounded-[40px] border border-border/50 p-24 shadow-inner flex flex-col items-center justify-center text-center gap-8 min-h-[500px]">
                     <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center text-neutral-200 border-2 border-dashed border-neutral-100">
                        <PieChart className="w-10 h-10" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Prediction Distribution</h3>
                        <p className="text-neutral-400 text-sm max-w-sm italic mx-auto">No prediction score distribution recorded yet for this model.</p>
                     </div>
                  </div>
               </TabsContent>

               <TabsContent value="drift" className="m-0">
                  <div className="p-12 bg-neutral-900 rounded-[40px] text-white">
                     <div className="flex justify-between items-start mb-12">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-black italic uppercase tracking-tighter text-brand-lime">Drift Radar Core</h3>
                           <p className="text-white/30 text-[11px] uppercase italic tracking-widest uppercase">Monitoring statistical divergence between training and inference.</p>
                        </div>
                        <Badge className="bg-white/10 text-white/50 border-none text-[8px] font-black uppercase italic">NOT YET MONITORED</Badge>
                     </div>
                     <div className="flex flex-col items-center text-center gap-4 py-12">
                        <TrendingDown className="w-10 h-10 text-white/10" />
                        <p className="text-white/40 text-sm italic max-w-sm">Drift monitoring is not yet configured for this model. No statistical divergence data has been recorded.</p>
                     </div>
                  </div>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* TRAINING CONTEXT */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Lineage Core</CardTitle>
                     <Database className="w-6 h-6 text-muted-foreground/20" />
                  </div>
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {lineage.map((it, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest italic border-b border-border/50 pb-4 last:border-0">
                       <span className="text-muted-foreground">{it.l}</span>
                       <span className="text-neutral-900 text-right">{it.v}</span>
                    </div>
                  ))}
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Engine Control</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Low-level management of the ML inference lifecycle.</p>
               </div>
               <div className="space-y-3">
                  <Button disabled={retraining} onClick={() => void handleRetrain()} className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10 disabled:opacity-50">
                     <BrainCircuit className="w-4 h-4 mr-2" />
                     {retraining ? "Queuing..." : "Retrain Baseline"}
                  </Button>
                  <Button disabled variant="outline" className="w-full h-14 border-white/10 text-white/40 rounded-3xl text-[10px] font-black uppercase italic opacity-50">
                     <Workflow className="w-4 h-4 mr-2" />
                     Shadow Mode (not yet available)
                  </Button>
                  <Button disabled variant="outline" className="w-full h-14 border-rose-500/30 text-rose-500/40 rounded-3xl text-[10px] font-black uppercase italic opacity-50">
                     <History className="w-4 h-4 mr-2" />
                     Rollback (not yet available)
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
