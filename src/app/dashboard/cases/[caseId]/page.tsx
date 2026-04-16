"use client";

import React from "react";
import { 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Clock, 
  User, 
  Zap, 
  MoreHorizontal, 
  ChevronRight, 
  Download, 
  Briefcase, 
  MessageSquare,
  FileText,
  Activity,
  BarChart3,
  Search,
  Plus,
  ArrowUpRight,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  Eye,
  Info,
  History,
  TrendingUp,
  Link as LinkIcon,
  Fingerprint,
  Globe,
  MoreVertical,
  CheckSquare,
  Slash,
  GanttChart,
  FileCheck,
  Flag,
  Calendar,
  Layers,
  Archive,
  Star,
  Paperclip,
  Share2,
  Lock,
  MessageCircle,
  Hash
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.caseId as string;

  // Mock data for the specific case
  const investigation = {
    id: caseId,
    title: "High-Opacity Node Velocity Breach",
    type: "AML / Transaction Monitoring",
    priority: "Critical",
    status: "Investigation",
    owner: "Marcus Aurelius",
    openedAt: "Oct 15, 2026 • 19:44:02",
    dueAt: "Oct 16, 2026 • 00:00:00",
    sla: "4h 12m left",
    description: "Deep dive into a cluster of high-velocity transactions matching cash-out patterns from Cyprus-based institutional nodes.",
    hypothesis: "The entity is utilizing a multi-layered IP mesh to bypass per-node velocity limits, likely testing institutional gateway resistance.",
    stats: {
      alerts: 3,
      transactions: 12,
      totalValue: "42,500.00",
      entities: 4
    },
    evidence: {
      alerts: [
        { id: "ALT-9921", type: "Velocity Breach", status: "Active", severity: "High" },
        { id: "ALT-8812", type: "Multiple IP Switch", status: "Closed", severity: "Medium" }
      ],
      transactions: [
        { id: "TX-4281-BC", amount: "4,250.00", currency: "USD", status: "Flagged" },
        { id: "TX-4282-BC", amount: "1,150.00", currency: "USD", status: "Approved" }
      ]
    },
    tasks: [
      { id: 1, text: "Perform institutional IP trace on ASN 29491", done: true },
      { id: 2, text: "Verify account beneficial ownership in CY registry", done: false },
      { id: 3, text: "Review related signals from cluster-7", done: false },
      { id: 4, text: "Finalize STR report recommendation", done: false }
    ],
    timeline: [
      { event: "Case Initialized", time: "19:44:02", actor: "Marcus Aurelius", type: "system" },
      { event: "Evidence Linked: ALT-9921", time: "19:44:05", actor: "System", type: "link" },
      { event: "Note Added: Hypothesis formulated", time: "19:48:12", actor: "Marcus Aurelius", type: "note" },
      { event: "Task Completed: IP Trace", time: "20:02:44", actor: "Marcus Aurelius", type: "task" }
    ]
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/cases" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Investigation Registry
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{investigation.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                investigation.priority === 'Critical' ? 'bg-neutral-900 text-white animate-pulse' : 'bg-orange-500 text-white'
              }`}>
                {investigation.priority} Priority
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{investigation.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <FileText className="w-3.5 h-3.5 mr-2" />
                Generate STR Report
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Workflow Ops
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Re-Assign Owner
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Escalate to Compliance Lead
                   </DropdownMenuItem>
                   <Separator className="bg-border/50 my-1 h-px" />
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-emerald-500">
                      Close Case: Resolved Clear
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Close Case: Confirm Suspicious
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
         {[
           { label: "SLA Deadline", value: investigation.sla, delta: "Case Due", icon: <Clock className="text-rose-500" />, color: "text-rose-500" },
           { label: "Investigation Age", value: "2h 12m", delta: "Normal", icon: <History className="text-muted-foreground" /> },
           { label: "Linked Evidence", value: investigation.stats.alerts + investigation.stats.transactions, delta: "Critical Cluster", icon: <Layers className="text-indigo-500" /> },
           { label: "Total Exposure", value: `$${investigation.stats.totalValue}`, delta: "USD MAGNITUDE", icon: <BarChart3 className="text-orange-500" /> },
           { label: "Analyst Owner", value: investigation.owner.split(' ')[0], delta: "Institutional", icon: <Fingerprint className="text-brand-lime" /> },
           { label: "Report Status", value: "Pending", delta: "STR Candidate", icon: <FileCheck className="text-muted-foreground" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border shadow-sm flex flex-col gap-4">
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

      <div className="grid grid-cols-1 xl:gap-8 xl:grid-cols-3">
         <div className="xl:col-span-2 space-y-8">
            {/* CASE SUMMARY CARD */}
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white space-y-10">
               <div className="flex items-start justify-between">
                  <div className="space-y-2">
                     <CardTitle className="text-3xl font-black italic uppercase tracking-tighter">{investigation.title}</CardTitle>
                     <p className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground">{investigation.type} • Source: Alert Cluster 091</p>
                  </div>
                  <div className="w-14 h-14 bg-zinc-50 rounded-[24px] border border-border flex items-center justify-center flex-shrink-0">
                     <Briefcase className="w-7 h-7 text-neutral-200" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <h5 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground underline underline-offset-8 decoration-border">Executive Summary</h5>
                     <p className="text-[14px] text-neutral-600 leading-relaxed italic font-medium">
                        {investigation.description}
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h5 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground underline underline-offset-8 decoration-border">Investigative Hypothesis</h5>
                     <p className="text-[14px] text-indigo-600/80 leading-relaxed italic font-medium bg-indigo-50/50 p-6 rounded-[32px] border border-indigo-100">
                        {investigation.hypothesis}
                     </p>
                  </div>
               </div>
            </Card>

            <Tabs defaultValue="evidence" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="evidence" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Evidence Matrix</TabsTrigger>
                  <TabsTrigger value="timeline" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Investigation Flow</TabsTrigger>
                  <TabsTrigger value="notes" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Collaboration</TabsTrigger>
                  <TabsTrigger value="documents" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Artifacts</TabsTrigger>
               </TabsList>

               <TabsContent value="evidence" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* EVIDENCE: ALERTS */}
                     <Card className="rounded-[40px] border-border shadow-md overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between">
                           <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Linked Alerts</CardTitle>
                           <Badge className="bg-muted text-muted-foreground border-none text-[8px] font-black italic">02</Badge>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Table>
                              <TableBody>
                                 {investigation.evidence.alerts.map((alert, i) => (
                                   <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 last:border-0 h-20">
                                      <TableCell className="px-8">
                                         <Link href={`/dashboard/alerts/${alert.id}`} className="block">
                                            <div className="text-[12px] font-black italic uppercase tracking-tighter text-neutral-900">{alert.id}</div>
                                            <div className="text-[9px] font-black uppercase text-muted-foreground italic mt-0.5">{alert.type}</div>
                                         </Link>
                                      </TableCell>
                                      <TableCell className="text-right px-8">
                                         <Badge variant="outline" className={`text-[7px] font-black uppercase italic border-none ${
                                           alert.severity === 'High' ? 'text-rose-500' : 'text-orange-500'
                                         }`}>
                                            {alert.severity} SEVERITY
                                         </Badge>
                                      </TableCell>
                                   </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </CardContent>
                     </Card>

                     {/* EVIDENCE: TXNS */}
                     <Card className="rounded-[40px] border-border shadow-md overflow-hidden bg-white">
                        <CardHeader className="p-8 border-b border-border/50 flex flex-row items-center justify-between">
                           <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Linked Activity</CardTitle>
                           <Badge className="bg-muted text-muted-foreground border-none text-[8px] font-black italic">12</Badge>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Table>
                              <TableBody>
                                 {investigation.evidence.transactions.map((txn, i) => (
                                   <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 last:border-0 h-20">
                                      <TableCell className="px-8">
                                         <Link href={`/dashboard/transactions/${txn.id}`} className="block">
                                            <div className="text-[12px] font-black italic uppercase tracking-tighter text-neutral-900">{txn.id}</div>
                                            <div className="text-[9px] font-black uppercase text-muted-foreground italic mt-0.5">${txn.amount} • {txn.currency}</div>
                                         </Link>
                                      </TableCell>
                                      <TableCell className="text-right px-8">
                                         <div className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{txn.status}</div>
                                      </TableCell>
                                   </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </CardContent>
                     </Card>
                  </div>

                  {/* GRAPH PREVIEW MOCK */}
                  <Card className="rounded-[40px] border-border shadow-md p-10 bg-neutral-900 text-white relative h-[400px] flex items-center justify-center overflow-hidden font-black italic">
                     <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-lime via-transparent to-transparent opacity-20 blur-3xl scale-150" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Network className="w-64 h-64 text-brand-lime/10" />
                        </div>
                     </div>
                     <div className="text-center space-y-4 relative z-10 font-black">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                           <TrendingUp className="w-8 h-8 text-brand-lime" />
                        </div>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter">Network Cluster Visualization</h4>
                        <p className="text-white/40 text-[11px] uppercase italic tracking-widest max-w-sm mx-auto">4 nodes linked via sub-second IP mesh topology detected in institution gateway-C.</p>
                        <Button className="mt-8 bg-white text-black text-[9px] font-black uppercase italic tracking-widest rounded-2xl h-12 shadow-sm font-black italic font-bold">Open Full Graph Analysis</Button>
                     </div>
                  </Card>
               </TabsContent>

               <TabsContent value="timeline" className="m-0">
                  <Card className="rounded-[40px] border-border shadow-md p-12 bg-white">
                     <div className="space-y-12">
                        {investigation.timeline.map((step, i) => (
                           <div key={i} className="flex gap-10 items-start relative group">
                              {i !== investigation.timeline.length - 1 && (
                                <div className="absolute left-[31px] top-10 bottom-[-48px] w-px bg-neutral-100 group-hover:bg-brand-lime transition-colors" />
                              )}
                              <div className={`w-16 h-16 rounded-[24px] bg-zinc-50 border border-neutral-100 flex flex-col items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-neutral-900 group-hover:text-white`}>
                                 <span className="text-[11px] font-black italic">{step.time.split(':')[0]}:{step.time.split(':')[1]}</span>
                                 <span className="text-[7px] font-black uppercase text-muted-foreground tracking-widest mt-0.5 group-hover:text-white/40">PM</span>
                              </div>
                              <div className="flex-1 pt-2 space-y-1">
                                 <div className="flex items-center gap-3">
                                    <h5 className="text-xl font-black italic uppercase tracking-tighter text-neutral-900">{step.event}</h5>
                                    <span className="text-[9px] font-black uppercase text-muted-foreground italic underline underline-offset-4 decoration-border">{step.actor}</span>
                                 </div>
                                 <p className="text-[12px] text-muted-foreground italic font-medium">Lifecycle checkpoint established via investigative protocol.</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR RAIL */}
         <div className="space-y-8">
            {/* TASKS CHECKLIST */}
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white space-y-8 h-fit">
               <CardHeader className="p-0">
                  <div className="flex items-center justify-between mb-2">
                     <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Case Tasks</CardTitle>
                     <CheckSquare className="w-6 h-6 text-muted-foreground/10" />
                  </div>
                  <Progress value={(investigation.tasks.filter(t => t.done).length / investigation.tasks.length) * 100} className="h-1 bg-muted" indicatorClassName="bg-brand-lime shadow-[0_0_8px_#D1F701]" />
               </CardHeader>
               <div className="space-y-4">
                  {investigation.tasks.map((task) => (
                    <div key={task.id} className="flex gap-4 items-center group cursor-pointer hover:bg-muted/30 p-4 rounded-2xl transition-all border border-transparent hover:border-border">
                       <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                         task.done ? 'bg-brand-lime border-brand-lime' : 'bg-white border-neutral-200'
                       }`}>
                          {task.done && <CheckCircle2 className="w-4 h-4 text-black" />}
                       </div>
                       <span className={`text-[12px] font-medium italic transition-all ${
                         task.done ? 'text-neutral-300 line-through' : 'text-neutral-900'
                       }`}>{task.text}</span>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full text-[9px] font-black uppercase italic tracking-widest text-muted-foreground hover:text-neutral-900 h-10 border-none font-black italic font-bold">Initialize New Workflow Stage</Button>
            </Card>

            {/* CLOSURE PANEL MINI */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-8 shadow-3xl h-fit">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Resolution Ready?</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Closing this case will ARCHIVE all linked evidence and signals.</p>
               </div>
               <div className="space-y-3 font-black italic">
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10 font-bold uppercase italic font-black h-14 leading-none">
                     <Archive className="w-4 h-4 mr-2" />
                     Final Resolution Hub
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 bg-white/5 text-white text-[10px] font-black uppercase italic hover:bg-white/10 transition-all font-bold uppercase italic font-black h-14 leading-none">
                     <Share2 className="w-4 h-4 mr-2" />
                     Share Case Artifact
                  </Button>
               </div>
            </Card>

            {/* CASE NOTES COMPACT */}
            <div className="p-10 bg-muted/20 border border-border rounded-[40px] space-y-8 font-black italic h-fit">
               <div className="flex items-center justify-between">
                  <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground px-4 italic underline underline-offset-8 decoration-border">Collaboration Stack</h5>
                  <MessageCircle className="w-4 h-4 text-muted-foreground/30 h-full" />
               </div>
               <div className="space-y-4 font-black italic">
                  <div className="p-5 bg-white border border-border shadow-sm rounded-3xl space-y-3 h-fit leading-none font-bold uppercase overflow-hidden">
                     <div className="flex justify-between items-center h-4 font-black italic">
                        <span className="text-[9px] font-black text-indigo-500 italic h-4 leading-none uppercase">Marcus A.</span>
                        <span className="text-[8px] font-black text-muted-foreground h-4 leading-none uppercase">12m ago</span>
                     </div>
                     <p className="text-[11px] text-neutral-500 italic leading-relaxed font-black uppercase italic">CY registry check incoming. ASN 29491 confirmed high-opacity.</p>
                  </div>
                  <div className="p-5 bg-white border border-border shadow-sm rounded-3xl space-y-3 h-fit leading-none font-bold uppercase overflow-hidden">
                     <div className="flex justify-between items-center h-4 font-black italic">
                        <span className="text-[9px] font-black text-brand-lime italic h-4 leading-none uppercase">System</span>
                        <span className="text-[8px] font-black text-muted-foreground h-4 leading-none uppercase">1h ago</span>
                     </div>
                     <p className="text-[11px] text-neutral-500 italic leading-relaxed font-black uppercase italic">Auto-discovery: Identified 4 similar signals in sub-cluster 091-B.</p>
                  </div>
               </div>
               <Button className="w-full h-12 bg-white text-neutral-900 border border-border rounded-2xl text-[9px] font-black uppercase italic shadow-sm hover:bg-zinc-50 transition-all h-12 leading-none uppercase">Quick Reply Thread</Button>
            </div>
         </div>
      </div>
    </div>
  );
}
