"use client";

import React from "react";
import { 
  ArrowLeft, 
  Settings, 
  Activity, 
  ShieldCheck, 
  ShieldAlert,
  Clock, 
  Lock, 
  ChevronRight,
  MoreHorizontal,
  Workflow,
  History,
  Code2,
  FileSearch,
  Zap,
  Globe,
  Database,
  RefreshCw,
  Terminal,
  Webhook,
  Key,
  DatabaseZap,
  Network,
  Cloud,
  Server,
  ExternalLink,
  Table as TableIcon,
  AlertTriangle
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
import { useIntegration } from "@/hooks/use-integrations";

export default function IntegrationDetailPage() {
  const params = useParams();
  const integrationId = params.integrationId as string;

  const { data: integrationData, isLoading, isError, refetch } = useIntegration(integrationId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-lime"></div>
      </div>
    );
  }

  if (isError || !integrationData) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load integration</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const integration = {
    id: integrationData.id,
    name: integrationData.name || "Unnamed Integration",
    status: integrationData.status || "Active",
    environment: "Production",
    type: integrationData.type || "Generic Webhook",
    endpoint: integrationData.endpoint_url || "N/A",
    description: "Core payment processing mesh for institutional settlements and multi-currency clearing.",
    health: {
      uptime: "N/A",
      lastSync: "N/A",
      errorRate: "N/A",
      latency: "N/A"
    },
    usage: {
      requests24h: "0",
      rateLimit: "N/A",
      consumption: 0
    },
    webhooks: [],
    logs: []
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/integrations" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Connectivity Mesh
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{integration.name}</h1>
              <Badge className="bg-brand-lime text-black border-none h-6 px-4 text-[9px] font-black uppercase italic tracking-widest">
                {integration.status}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{integration.environment}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <RefreshCw className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Test Connection
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Integration Ops
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Edit Configuration
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-orange-500">
                      Rotate API Keys
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Disable Integration
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {([] as any[]).map((kpi, i) => (
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
            <Tabs defaultValue="overview" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="overview" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Overview</TabsTrigger>
                  <TabsTrigger value="usage" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">API Usage</TabsTrigger>
                  <TabsTrigger value="webhooks" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Webhooks</TabsTrigger>
                  <TabsTrigger value="logs" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Request logs</TabsTrigger>
               </TabsList>

               <TabsContent value="overview" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                     <CardHeader className="p-0 mb-10">
                        <div className="flex items-center justify-between">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Integration Topology</CardTitle>
                           <Cloud className="w-8 h-8 text-muted-foreground/10" />
                        </div>
                     </CardHeader>
                     <CardContent className="p-0 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-6">
                              {([] as any[]).map((it, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                   <span className="text-[10px] font-black uppercase text-muted-foreground italic">{it.label}</span>
                                   <span className="text-[13px] font-black italic text-neutral-900 truncate">{it.value}</span>
                                </div>
                              ))}
                           </div>
                           <div className="p-8 bg-zinc-50 rounded-[32px] border border-border/50">
                              <h5 className="text-[10px] font-black uppercase text-neutral-400 italic mb-4">Functional Intent</h5>
                              <p className="text-[13px] text-neutral-600 leading-relaxed italic font-medium">
                                 {integration.description}
                              </p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10 flex flex-row items-center justify-between">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Health Matrix</CardTitle>
                           <Activity className="w-6 h-6 text-brand-lime" />
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                           {([] as any[]).map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase italic tracking-widest border-b border-border/50 pb-4 last:border-0">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className="text-neutral-900">{item.value}</span>
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Traffic Pulse</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-40 bg-zinc-50 rounded-[32px] border border-dashed border-neutral-100 flex items-center justify-center">
                           <Zap className="w-8 h-8 text-neutral-200 animate-pulse" />
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="usage" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                     <CardHeader className="p-0 mb-10 flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">API Quota Core</CardTitle>
                        <Badge className="bg-brand-lime text-black border-none text-[8px] font-black uppercase italic">NORMAL OPS</Badge>
                     </CardHeader>
                     <CardContent className="p-0 space-y-12">
                        <div className="space-y-4">
                           <div className="flex justify-between items-baseline">
                              <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Rate Limit Consumption</span>
                              <span className="text-2xl font-black italic text-neutral-900">{integration.usage.consumption}%</span>
                           </div>
                           <Progress value={integration.usage.consumption} className="h-2 bg-muted" indicatorClassName="bg-indigo-500" />
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                           <div className="space-y-2">
                              <span className="text-[10px] font-black uppercase text-neutral-400 italic">Global Limit</span>
                              <div className="text-lg font-black italic text-neutral-900">{integration.usage.rateLimit}</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-black uppercase text-neutral-400 italic">Avg Peak</span>
                              <div className="text-lg font-black italic text-neutral-900">4.2k/min</div>
                           </div>
                           <div className="space-y-2">
                              <span className="text-[10px] font-black uppercase text-neutral-400 italic">Burst Ceiling</span>
                              <div className="text-lg font-black italic text-neutral-900">12k/min</div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="webhooks" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Inbound Delivery Registry</CardTitle>
                     </CardHeader>
                     <CardContent className="p-10 text-center text-muted-foreground italic text-sm font-bold">
                        No webhooks delivered recently.
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="logs" className="m-0 space-y-8">
                  <div className="bg-neutral-900 rounded-[40px] p-10 font-mono text-[12px] text-white/80 border border-white/5 shadow-2xl space-y-4 overflow-hidden relative group">
                     <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                        <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Terminal Trace Trace</h4>
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-rose-500" />
                           <div className="w-3 h-3 rounded-full bg-orange-500" />
                           <div className="w-3 h-3 rounded-full bg-brand-lime" />
                        </div>
                     </div>
                     <div className="py-10 text-center text-white/50 italic text-sm font-bold">
                        No recent logs available.
                     </div>
                     <div className="pt-8 flex justify-center">
                        <Button variant="outline" className="border-white/10 text-white rounded-2xl text-[9px] font-black uppercase italic h-10 px-8 hover:bg-white/5">Load Historical Logs</Button>
                     </div>
                  </div>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* CONFIGURATION PANEL */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Security Mesh</CardTitle>
                  <Key className="w-5 h-5 text-muted-foreground/20" />
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  <div className="p-6 bg-zinc-900 rounded-3xl space-y-3">
                     <div className="text-[9px] font-black uppercase text-white/30 italic">Active API Key Alias</div>
                     <div className="text-[13px] font-black text-white italic truncate">PROD_STRIPE_••••9921</div>
                     <Button className="w-full h-8 bg-white/10 text-white border-white/10 rounded-xl text-[8px] font-black uppercase italic mt-4 hover:bg-white/20 transition-all">Rotate Mesh Key</Button>
                  </div>
                  <div className="space-y-4 pt-4">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase text-neutral-400 italic font-black uppercase">Webhook Secret</span>
                        <span className="text-[12px] font-black italic text-neutral-900 truncate">whsec_••••4421</span>
                     </div>
                     <Separator className="bg-border/50" />
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase text-neutral-400 italic">IP Whitelist Status</span>
                        <span className="text-[12px] font-black italic text-brand-lime">Enforced (12 Nodes)</span>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Protocol Ops</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Administrative command over connectivity mesh lifecycle.</p>
               </div>
               <div className="space-y-3">
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <RefreshCw className="w-4 h-4 mr-2" />
                     Sync Mesh State
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <Settings className="w-4 h-4 mr-2" />
                     Configure Params
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <ShieldAlert className="w-4 h-4 mr-2" />
                     Kill Connection
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
