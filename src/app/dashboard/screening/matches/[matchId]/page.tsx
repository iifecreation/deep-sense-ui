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
  Hash,
  Database,
  ExternalLink,
  ShieldQuestion,
  UserPlus
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

export default function ScreeningMatchDetailPage() {
  const params = useParams();
  const matchId = params.matchId as string;

  // Mock data for the screening match
  const match = {
    id: matchId,
    entityName: "Elena V. Volkov",
    type: "Sanctions / PEP Cluster",
    confidence: "94.2%",
    riskLevel: "Critical",
    status: "Review Required",
    source: "OFAC SDN / EU Consolidated",
    matchedFields: [
      { field: "Full Name", score: 98, detail: "Elena Victorovna Volkov" },
      { field: "DOB", score: 100, detail: "1982-04-12" },
      { field: "Nationality", score: 100, detail: "Cyprus / Russia" },
      { field: "Address", score: 82, detail: "Larnaca, CY" }
    ],
    customer: {
      name: "Elena Volkov",
      id: "CUST-9921",
      riskTier: "High"
    },
    rationale: "Automated engine detected a 98% name similarity index combined with a 100% DOB match from the OFAC Specially Designated Nationals (SDN) list. The entity is linked to institutional flow gateways in high-opacity jurisdictions.",
    lastScreened: "Oct 15, 2026 • 19:32:11"
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/screening" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Global Screening Hub
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{match.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                match.riskLevel === 'Critical' ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : 'bg-orange-500 text-white'
              }`}>
                {match.riskLevel} Alert
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{match.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <AlertTriangle className="w-3.5 h-3.5 mr-2" />
                Escalate Match
             </Button>
             <div className="flex gap-2">
                <Button className="h-10 px-10 bg-rose-600 text-white hover:bg-rose-700 transition-all font-black uppercase tracking-widest italic shadow-xl">
                   Confirm Match
                </Button>
                <Button variant="outline" className="h-10 px-10 border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 transition-all font-black uppercase tracking-widest italic">
                   Dismiss FP
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
         {[
           { label: "Confidence Index", value: match.confidence, delta: "High Probability", icon: <ShieldCheck className="text-emerald-500" /> },
           { label: "Alert Severity", value: match.riskLevel, delta: "SDN Hit", icon: <Zap className="text-rose-500" />, color: "text-rose-500" },
           { label: "Match Type", value: "PEP/SDN", delta: "Dual Hit", icon: <Layers className="text-indigo-500" /> },
           { label: "Matched Fields", value: match.matchedFields.length, delta: "Forensic Data", icon: <Database className="text-muted-foreground" /> },
           { label: "Population Hits", value: "02", delta: "Global Range", icon: <Users className="text-muted-foreground" /> },
           { label: "Due Date", value: "14m", delta: "SLA Tracker", icon: <Clock className="text-orange-500" /> },
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            {/* MATCH RATIONALE HEADER */}
            <div className="p-10 bg-neutral-900 text-white rounded-[48px] shadow-2xl relative overflow-hidden group font-black italic">
               <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-rose-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-rose-500/20 transition-all duration-700" />
               <div className="space-y-8 relative z-10 font-black italic">
                  <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-white/5 rounded-[28px] flex items-center justify-center shrink-0 border border-white/20 shadow-lg shadow-black/20">
                        <ShieldQuestion className="w-8 h-8 text-brand-lime" />
                     </div>
                     <div className="space-y-1">
                        <h3 className="text-[10px] font-black uppercase italic tracking-widest opacity-40">Forensic Identity Resolution</h3>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter">SDN Entity Collision: {match.entityName}</h4>
                     </div>
                  </div>
                  <p className="text-[14px] text-white/70 italic leading-relaxed font-medium">
                     {match.rationale}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {match.matchedFields.map((field, i) => (
                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-[32px] font-black italic">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-[9px] font-black uppercase text-white/40 italic">{field.field} Resolution</span>
                              <span className="text-[11px] font-black text-brand-lime italic">{field.score}%</span>
                           </div>
                           <div className="text-sm font-black italic text-white uppercase truncate">{field.detail}</div>
                           <Progress value={field.score} className="h-1 bg-white/10 mt-3 rounded-full" indicatorClassName="bg-brand-lime h-full" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <Tabs defaultValue="forensics" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="forensics" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white uppercase">Profile Forensic</TabsTrigger>
                  <TabsTrigger value="sources" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white uppercase">Source Data</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white uppercase">Screening Trail</TabsTrigger>
               </TabsList>

               <TabsContent value="forensics" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-8">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Matched Entity Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                           {[
                             { l: "Primary Alias", v: match.entityName, icon: <User className="w-4 h-4" /> },
                             { l: "Match Protocol", v: match.type, icon: <Settings className="w-4 h-4" /> },
                             { l: "Collision Source", v: match.source, icon: <Database className="w-4 h-4 text-indigo-500" /> },
                             { l: "Confidence Level", v: match.confidence, icon: <BarChart3 className="w-4 h-4 text-brand-lime" /> },
                           ].map((it, i) => (
                             <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic group h-10 border-b border-border last:border-0 font-black">
                                <span className="text-muted-foreground flex items-center gap-2">{it.icon} {it.l}</span>
                                <span className="text-neutral-900 group-hover:text-brand-lime transition-colors cursor-pointer">{it.v}</span>
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-8">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Linked System User</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex flex-col items-center gap-6">
                           <div className="w-20 h-20 rounded-[28px] bg-zinc-50 border border-border flex items-center justify-center relative shadow-inner group cursor-pointer overflow-hidden">
                              <UserPlus className="w-8 h-8 text-neutral-300 transition-transform group-hover:scale-110" />
                           </div>
                           <div className="text-center font-black italic">
                              <h4 className="text-xl font-black italic tracking-tighter text-neutral-900">{match.customer.name}</h4>
                              <p className="text-[10px] font-black uppercase text-muted-foreground italic mt-1">{match.customer.id} • {match.customer.riskTier} Risk Profile</p>
                           </div>
                           <Button variant="outline" className="w-full text-[9px] font-black uppercase italic border-border rounded-2xl h-11 italic shadow-sm">View Risk DNA Profile</Button>
                        </CardContent>
                     </Card>
                  </div>

                  {/* ALIAS LIST */}
                  <Card className="rounded-[40px] border-border shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Entity Aliases & Variations</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10 border-b border-border/50 h-10">
                              <TableRow className="hover:bg-transparent border-none font-black italic">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Alias Designation</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Transcription Type</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Similarity Index</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody className="font-black italic">
                              {[
                                { n: "E.V. Volkov", t: "Initials Override", s: "100%" },
                                { n: "Елена Волкова", t: "Original Script (Cyrillic)", s: "94%" },
                                { n: "Elena Viktorovna", t: "Partial Name Match", s: "82%" },
                              ].map((alias, i) => (
                                <TableRow key={i} className="group hover:bg-muted/30 border-b border-border/50 transition-colors h-16">
                                 <TableCell className="px-10 py-5 font-black italic">{alias.n}</TableCell>
                                 <TableCell className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">{alias.t}</TableCell>
                                 <TableCell className="px-10 text-right font-black italic text-brand-lime">{alias.s}</TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="history" className="m-0">
                  <Card className="rounded-[40px] border-border shadow-md p-12 bg-white font-black italic">
                     <div className="space-y-12">
                        {[
                          { event: "Periodic Re-Screening Hit", time: "Oct 15, 2026", detail: "OFAC list update triggered new collision index.", type: "system" },
                          { event: "Onboarding Match Dismissed", time: "Jan 12, 2024", detail: "Investigated by Admin #42. Resulted in False Positive.", type: "manual" },
                          { event: "PEP Registry Sync", time: "Jan 10, 2024", detail: "Initial entity ingress to risk perimeter.", type: "system" }
                        ].map((step, i) => (
                           <div key={i} className="flex gap-10 items-start relative group">
                              {i !== 2 && (
                                <div className="absolute left-[31px] top-10 bottom-[-48px] w-px bg-neutral-100 group-hover:bg-rose-500 transition-colors" />
                              )}
                              <div className={`w-16 h-16 rounded-[24px] bg-zinc-50 border border-neutral-100 flex flex-col items-center justify-center shrink-0 shadow-sm transition-all group-hover:bg-neutral-900 group-hover:text-white`}>
                                 <span className="text-[11px] font-black italic">OCT</span>
                                 <span className="text-[7px] font-black uppercase text-muted-foreground tracking-widest mt-0.5 group-hover:text-white/40">15</span>
                              </div>
                              <div className="flex-1 pt-2 space-y-1">
                                 <div className="flex items-center gap-3">
                                    <h5 className="text-xl font-black italic uppercase tracking-tighter text-neutral-900">{step.event}</h5>
                                    <span className="text-[9px] font-black uppercase text-muted-foreground italic underline underline-offset-4 decoration-border">{step.type}</span>
                                 </div>
                                 <p className="text-[12px] text-muted-foreground italic font-medium">{step.detail}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>

         <div className="space-y-8 font-black italic">
            {/* SOURCE INTELLIGENCE */}
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic h-fit">
               <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Source Metadata</CardTitle>
               </CardHeader>
               <div className="space-y-6">
                  <div className="p-6 bg-zinc-50 border border-border rounded-[32px] space-y-3 font-black">
                     <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic opacity-40">OFAC Official Entry ID</span>
                     <div className="text-[13px] font-black italic tracking-widest text-neutral-900">SDN_0x9921_VOLKOV</div>
                     <Link href="#" className="flex items-center gap-2 text-[9px] font-black uppercase text-indigo-500 italic mt-2 hover:underline">
                        View Official Registry <ExternalLink className="w-3 h-3" />
                     </Link>
                  </div>
                  <div className="space-y-4 font-black italic">
                     {[
                       { label: "List Version", value: "2026.Q4" },
                       { label: "Update Frequency", value: "Real-time Sync" },
                       { label: "Registry Owner", value: "US Dept of Treasury" },
                     ].map((it, i) => (
                       <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic border-b border-neutral-50 pb-4 last:border-0 font-black">
                          <span className="text-muted-foreground">{it.label}</span>
                          <span className="text-neutral-900 font-black italic uppercase">{it.value}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl h-fit font-black italic">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Identity Resolution</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Decision will be audited and broadcasted to institutional gateways.</p>
               </div>
               <div className="space-y-3 font-black italic">
                  <Button className="w-full h-14 bg-rose-600 text-white rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-rose-600/20">
                     <XCircle className="w-4 h-4 mr-2" />
                     Confirm & Restrict
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 bg-white/5 text-white text-[11px] font-black uppercase italic hover:bg-white/10 transition-all font-bold">
                     <CheckCircle2 className="w-4 h-4 mr-2" />
                     Dismiss False Positive
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-indigo-500/50 text-indigo-400 rounded-3xl text-[10px] font-black uppercase italic hover:bg-indigo-500/5 transition-all font-bold">
                     <History className="w-4 h-4 mr-2" />
                     Request Senior Review
                  </Button>
               </div>
            </Card>

            {/* SCREENING METRICS MINI */}
            <div className="p-10 bg-muted/20 border border-border rounded-[40px] space-y-8 font-black italic h-fit">
               <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground px-4 underline underline-offset-8 decoration-border">Detection Velocity</h5>
               <Card className="p-8 bg-white border border-border rounded-[32px] space-y-6 shadow-sm font-black italic">
                  <div className="flex justify-between items-center mb-2 font-black italic h-4 leading-none">
                     <span className="text-[10px] font-black uppercase italic text-muted-foreground">Detection Lag</span>
                     <span className="text-[10px] font-black text-brand-lime italic">0.42s</span>
                  </div>
                  <div className="space-y-2 h-1 leading-none uppercase">
                     <Progress value={92} className="h-1 bg-muted rounded-full" indicatorClassName="bg-brand-lime h-full" />
                  </div>
                  <p className="text-[9px] text-muted-foreground/60 italic leading-relaxed uppercase">Collision occurred immediately following OFAC delta update at 19:32 GMT.</p>
               </Card>
            </div>
         </div>
      </div>
    </div>
  );
}
