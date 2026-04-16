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

export default function ModelDetailPage() {
  const params = useParams();
  const modelId = params.modelId as string;

  // Mock data for high-fidelity view
  const model = {
    id: modelId,
    name: "DeepSense Ensemble XL",
    version: "v4.2.0-beta",
    status: "Active",
    type: "Ensemble XGBoost + LSTM",
    trainingData: {
      records: "14.2M",
      features: 842,
      lastTrained: "Oct 1, 2026",
      coverage: "99.8%"
    },
    performance: {
      accuracy: "98.4%",
      precision: "97.1%",
      recall: "96.5%",
      auc: "0.992"
    },
    features: [
      { name: "Velocity_24h", importance: 88, correlation: "High" },
      { name: "Device_Fingerprint_Age", importance: 74, correlation: "Medium" },
      { name: "Geo_Inconsistency_Score", importance: 62, correlation: "High" },
      { name: "IP_Reputation_Index", importance: 45, correlation: "Low" }
    ],
    drift: {
      score: "0.04",
      status: "Stable",
      trend: "Neutral"
    },
    distribution: [
      { bucket: "0.0-0.2", count: "85%" },
      { bucket: "0.2-0.5", count: "10%" },
      { bucket: "0.5-0.8", count: "3%" },
      { bucket: "0.8-1.0", count: "2%" }
    ]
  };

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
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{model.version} • {model.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <RefreshCw className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Retrain
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Model Actions
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Compare Versions
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Deactivate Inference
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Export Weights
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: "Model Accuracy", value: model.performance.accuracy, delta: "+0.2%", icon: <ShieldCheck className="text-brand-lime" />, color: "text-brand-lime" },
           { label: "Precision Rate", value: model.performance.precision, delta: "Stable", icon: <Target className="text-orange-500" /> },
           { label: "AUC-ROC Score", value: model.performance.auc, delta: "Optimal", icon: <Activity className="text-indigo-500" /> },
           { label: "Concept Drift", value: model.drift.score, delta: "None", icon: <Zap className="text-muted-foreground" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0">{kpi.delta}</Badge>
              </div>
              <div>
                 <div className={`text-2xl font-black italic tracking-tighter leading-none ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{kpi.label}</div>
              </div>
           </div>
         ))}
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
                           {[
                             { label: "Accuracy Index", value: parseInt(model.performance.accuracy), icon: <ShieldCheck className="w-4 h-4" /> },
                             { label: "Precision Delta", value: parseInt(model.performance.precision), icon: <Target className="w-4 h-4" /> },
                             { label: "Recall Rate", value: parseInt(model.performance.recall), icon: <Activity className="w-4 h-4" /> },
                           ].map((score, i) => (
                             <div key={i} className="space-y-2">
                                <div className="flex justify-between items-baseline mb-1">
                                   <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground flex items-center gap-2">
                                      {score.icon} {score.label}
                                   </span>
                                   <span className="text-lg font-black italic text-neutral-900">{score.value}%</span>
                                </div>
                                <Progress value={score.value} className="h-1 bg-muted" indicatorClassName="bg-brand-lime shadow-[0_0_8px_currentColor]" />
                             </div>
                           ))}
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
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Feature Identity</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Correlation</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Importance Weight</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {model.features.map((feature, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 h-20">
                                   <TableCell className="px-10 py-5">
                                      <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{feature.name}</span>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{feature.correlation}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <div className="flex items-center justify-end gap-3">
                                         <span className="text-[13px] font-black italic text-neutral-900">{feature.importance}%</span>
                                         <div className="w-24 h-1.5 bg-muted rounded-full">
                                            <div className="h-full bg-neutral-900 rounded-full" style={{ width: `${feature.importance}%` }} />
                                         </div>
                                      </div>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="distribution" className="m-0 space-y-8">
                  <div className="bg-white rounded-[40px] border border-border/50 p-24 shadow-inner flex flex-col items-center justify-center text-center gap-8 min-h-[500px]">
                     <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center text-neutral-200 border-2 border-dashed border-neutral-100 animate-pulse">
                        <PieChart className="w-10 h-10" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Prediction Distribution</h3>
                        <div className="flex gap-4 items-center">
                           {model.distribution.map((d, i) => (
                              <div key={i} className="px-6 py-4 bg-muted rounded-2xl border border-border">
                                 <div className="text-[10px] font-black uppercase text-neutral-400 italic">{d.bucket}</div>
                                 <div className="text-xl font-black italic text-neutral-900">{d.count}</div>
                              </div>
                           ))}
                        </div>
                        <p className="text-neutral-400 text-sm max-w-sm italic mt-8 mx-auto">Concentration in low-risk buckets matches standard institutional policy expectations for this model tier.</p>
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
                        <Badge className="bg-brand-lime text-black border-none text-[8px] font-black uppercase italic">STATUS: STABLE</Badge>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                           <div className="text-[10px] font-black uppercase text-white/20 italic mb-2">Kolmogorov-Smirnov</div>
                           <div className="text-3xl font-black italic text-brand-lime">0.024</div>
                           <div className="text-[9px] text-white/40 font-black italic mt-2 uppercase">Optimal Range</div>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                           <div className="text-[10px] font-black uppercase text-white/20 italic mb-2">Population Stability Index</div>
                           <div className="text-3xl font-black italic text-brand-lime">0.081</div>
                           <div className="text-[9px] text-white/40 font-black italic mt-2 uppercase">&lt; 0.1 Green Zone</div>
                        </div>
                        <div className="p-8 bg-white/5 border border-white/5 rounded-3xl text-center flex flex-col items-center justify-center">
                           <TrendingUp className="w-8 h-8 text-white/10 mb-2" />
                           <span className="text-[10px] font-black uppercase text-white/20 italic">Last Scan</span>
                           <span className="text-[12px] font-black text-white italic">14 mins ago</span>
                        </div>
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
                  {[
                    { l: "Primary Type", v: model.type },
                    { l: "Training Set", v: model.trainingData.records },
                    { l: "Feature Pool", v: model.trainingData.features },
                    { l: "Last Retrain", v: model.trainingData.lastTrained },
                    { l: "Validation Coverage", v: model.trainingData.coverage }
                  ].map((it, i) => (
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
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <BrainCircuit className="w-4 h-4 mr-2" />
                     Retrain Baseline
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <Workflow className="w-4 h-4 mr-2" />
                     Shadow Mode Toggle
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <History className="w-4 h-4 mr-2" />
                     Model Rollback
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
