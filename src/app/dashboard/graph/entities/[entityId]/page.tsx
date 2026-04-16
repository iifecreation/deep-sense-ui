"use client";

import React from "react";
import { 
  ArrowLeft, 
  Share2, 
  Link2, 
  Users, 
  ShieldCheck, 
  ShieldAlert,
  Activity, 
  MoreHorizontal,
  ChevronRight,
  Globe,
  Database,
  Network,
  CreditCard,
  Zap,
  Fingerprint,
  Box,
  Layers,
  Search,
  Maximize2
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

export default function EntityDetailPage() {
  const params = useParams();
  const entityId = params.entityId as string;

  // Mock data for high-fidelity view
  const entity = {
    id: entityId,
    type: "Customer Node",
    riskScore: 84,
    status: "Suspicious",
    connectedEntities: [
      { id: "DEV-9921", type: "Device", strength: "98%", risk: "High" },
      { id: "CUST-4412", type: "Customer", strength: "82%", risk: "Medium" },
      { id: "IP-185.112", type: "IP Node", strength: "65%", risk: "Low" }
    ],
    sharedAttributes: [
      { key: "Hardware ID", value: "8AfX_9921_Lq", entities: 3 },
      { key: "Shipping Address", value: "144 Baker St, London", entities: 2 },
      { key: "Browser Fingerprint", value: "Chrome/122.0.0.0", entities: 12 }
    ],
    riskSignals: [
      { name: "Cluster Density", status: "Critical", value: "8.4x baseline" },
      { name: "Shared Device Collision", status: "High", value: "3 accounts" },
      { name: "Transitive Risk", status: "Medium", value: "Score: 72" }
    ],
    transactions: [
      { id: "TXN-88219", amount: "$4,250.00", date: "Oct 15, 2026", status: "Flagged" },
      { id: "TXN-88102", amount: "$150.00", date: "Oct 12, 2026", status: "Approved" }
    ]
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/graph" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Relational Graph Engine
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{entity.id}</h1>
              <Badge className="bg-rose-500 text-white border-none h-6 px-4 text-[9px] font-black uppercase italic tracking-widest">
                {entity.status}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{entity.type}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <Maximize2 className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Expand Graph
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Graph Actions
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Create Investigation
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Flag Entity Cluster
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Sunder All Links
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: "Relational Risk", value: entity.riskScore, delta: "High Cluster", icon: <ShieldAlert className="text-rose-500" />, color: "text-rose-500" },
           { label: "1st Degree Links", value: entity.connectedEntities.length, delta: "02 High Risk", icon: <Link2 className="text-muted-foreground" /> },
           { label: "Shared Attributes", value: entity.sharedAttributes.length, delta: "Collision Detected", icon: <Layers className="text-indigo-500" /> },
           { label: "Confidence", value: "94%", delta: "Graph v3", icon: <ShieldCheck className="text-brand-lime" /> },
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
            <Tabs defaultValue="graph" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="graph" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Graph View</TabsTrigger>
                  <TabsTrigger value="connections" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Connected Entities</TabsTrigger>
                  <TabsTrigger value="attributes" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Shared Attributes</TabsTrigger>
                  <TabsTrigger value="transactions" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Network Activity</TabsTrigger>
               </TabsList>

               <TabsContent value="graph" className="m-0">
                  <div className="bg-white rounded-[40px] border border-border/50 p-24 shadow-inner flex flex-col items-center justify-center text-center gap-8 min-h-[600px] relative overflow-hidden group">
                     {/* MOCK GRAPH BACKGROUND */}
                     <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#94a3b8_1px,_transparent_1px)] bg-[length:40px_40px]" />
                        <svg className="w-full h-full stroke-neutral-300 stroke-1" fill="none">
                           <line x1="20%" y1="30%" x2="50%" y2="50%" />
                           <line x1="80%" y1="20%" x2="50%" y2="50%" />
                           <line x1="40%" y1="80%" x2="50%" y2="50%" />
                           <circle cx="20%" cy="30%" r="4" className="fill-rose-500" />
                           <circle cx="80%" cy="20%" r="4" className="fill-orange-500" />
                           <circle cx="40%" cy="80%" r="4" className="fill-brand-lime" />
                           <circle cx="50%" cy="50%" r="8" className="fill-neutral-900 shadow-xl" />
                        </svg>
                     </div>

                     <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center text-neutral-200 border-2 border-dashed border-neutral-100 animate-spin-slow z-10">
                        <Network className="w-10 h-10" />
                     </div>
                     <div className="space-y-4 z-10">
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Graph Intel Resolution...</h3>
                        <p className="text-neutral-400 text-sm max-w-sm italic">Synthesizing cluster relationships and multi-hop connections for this entity node.</p>
                     </div>
                     <Button className="bg-neutral-900 text-white font-black uppercase italic tracking-widest text-[10px] px-8 h-12 rounded-2xl z-10">Launch Interactive Graph</Button>
                  </div>
               </TabsContent>

               <TabsContent value="connections" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">1st Degree Relation Node</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Entity Node</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Link Type</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center text-neutral-400">Strength</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Risk Profile</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {entity.connectedEntities.map((conn, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 h-20 cursor-pointer">
                                   <TableCell className="px-10 py-5">
                                      <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{conn.id}</span>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{conn.type}</TableCell>
                                   <TableCell className="text-center font-black italic text-neutral-900">{conn.strength}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none ${
                                        conn.risk === 'High' ? 'text-rose-500' : 'text-orange-500'
                                      }`}>
                                         {conn.risk} Entity
                                      </Badge>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="attributes" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {entity.sharedAttributes.map((attr, i) => (
                        <Card key={i} className="rounded-[40px] border-border/50 shadow-md p-10 bg-white group hover:border-neutral-900 transition-colors">
                           <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">{attr.key}</span>
                                 <CardTitle className="text-xl font-black italic uppercase tracking-tighter truncate max-w-[200px]">{attr.value}</CardTitle>
                              </div>
                              <Badge className="bg-muted text-muted-foreground border-none text-[8px] font-black uppercase italic">{attr.entities} Nodes</Badge>
                           </CardHeader>
                           <CardContent className="p-0">
                              <Button variant="outline" className="w-full rounded-2xl text-[9px] font-black uppercase italic border-border py-6 hover:bg-neutral-900 hover:text-white transition-all">
                                 Explore Collision Cluster
                              </Button>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </TabsContent>

               <TabsContent value="transactions" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Network Activity Feed</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Txn Node</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Date Segment</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center text-neutral-400">Magnitude</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Resolution</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {entity.transactions.map((txn, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 h-20 cursor-pointer" onClick={() => window.location.href=`/dashboard/transactions/${txn.id}`}>
                                   <TableCell className="px-10 py-5">
                                      <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{txn.id}</span>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{txn.date}</TableCell>
                                   <TableCell className="text-center text-[13px] font-black italic text-neutral-900">{txn.amount}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest border-none ${
                                        txn.status === 'Flagged' ? 'text-rose-500' : 'text-brand-lime'
                                      }`}>
                                         {txn.status}
                                      </Badge>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* RISK SIGNALS */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Graph Risk Core</CardTitle>
                  <Box className="w-5 h-5 text-muted-foreground/20" />
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {entity.riskSignals.map((signal, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest italic">
                          <span className="text-neutral-400">{signal.name}</span>
                          <span className="text-neutral-900">{signal.status}</span>
                       </div>
                       <div className="text-[13px] font-black italic text-neutral-900">{signal.value}</div>
                       <div className="w-full h-1 bg-muted rounded-full mt-1 overflow-hidden">
                          <div className={`h-full ${signal.status === 'Critical' ? 'bg-rose-500' : 'bg-orange-500'} rounded-full`} style={{ width: signal.status === 'Critical' ? '90%' : '60%' }} />
                       </div>
                    </div>
                  ))}
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Cluster Control</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">System-wide command over network entity relationships.</p>
               </div>
               <div className="space-y-3">
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <Search className="w-4 h-4 mr-2" />
                     Discover All Hops
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <ShieldAlert className="w-4 h-4 mr-2" />
                     Force Quarantine Node
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <Link2 className="w-4 h-4 mr-2" />
                     Sunder Linked Network
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
