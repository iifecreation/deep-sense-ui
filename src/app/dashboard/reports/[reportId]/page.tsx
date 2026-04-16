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
  Send,
  Printer,
  Copy,
  Trash2,
  CreditCard,
  MapPin,
  FileSearch,
  Terminal,
  Cpu
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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function RegulatoryReportDetailPage() {
  const params = useParams();
  const reportId = params.reportId as string;

  // Mock data for the specific report
  const report = {
    id: reportId,
    type: "Suspicious Transaction Report (STR)",
    status: "Draft",
    caseId: "CASE-0992-B",
    owner: "Marcus Aurelius",
    classification: "Modern Slavery / Human Trafficking",
    subject: "Elena Volkov (CUST-9921)",
    description: "Detailed investigation into high-velocity institutional gateway ingress from Cyprus-based nodes matching high-risk patterns.",
    suspicionReason: "Customer exhibited structure activity ($9,900 fragments) immediately following onboarding, combined with a high-opacity jurisdiction hit and known PEP-SDN collision (98% confidence).",
    amount: "42,500.00",
    currency: "USD",
    transactions: [
      { id: "TX-4281", date: "Oct 15", amount: "4,250", status: "Flagged" },
      { id: "TX-4282", date: "Oct 15", amount: "1,150", status: "Approved" }
    ],
    timeline: [
      { event: "Report Initialized", time: "Oct 15, 2026 • 20:02:44", actor: "Marcus Aurelius" },
      { event: "Subject Data Sync", time: "Oct 15, 2026 • 20:05:12", actor: "System" },
      { event: "Narrative Authored", time: "Oct 15, 2026 • 20:44:11", actor: "Marcus Aurelius" }
    ]
  };

  return (
    <div className="flex flex-col gap-8 pb-20 font-black italic">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all font-black italic">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-black italic">
          <div className="space-y-1 font-black italic">
            <Link href="/dashboard/reports" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2 font-bold italic font-black">
               <ArrowLeft className="w-3 h-3" /> Regulatory Document Vault
            </Link>
            <div className="flex items-center gap-4 font-black italic">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{report.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none bg-indigo-500 text-white`}>
                {report.type.split('(')[0]}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border italic font-black">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900 h-4 leading-none">{report.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 font-black italic">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800 font-bold font-black">
                <Printer className="w-3.5 h-3.5 mr-2" />
                Print Dossier
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-10 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Report Ops
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 bg-white rounded-2xl border-border shadow-2xl font-bold italic font-black">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-emerald-500 font-black italic font-bold">
                      Submit to Regulator (FINCEN)
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 font-black italic font-bold">
                      Assign for Peer Review
                   </DropdownMenuItem>
                   <Separator className="bg-border/50 my-1 h-px" />
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500 font-black italic font-bold">
                      Discard Report Draft
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 font-black italic leading-none">
         {[
           { label: "Report Value", value: `$${report.amount}`, delta: "USD MAGNITUDE", icon: <CreditCard className="text-muted-foreground" />, color: "text-neutral-900" },
           { label: "Subject Risk", value: "High", delta: "CUST-9921", icon: <User className="text-rose-500" /> },
           { label: "Evidence Nodes", value: "14", delta: "Verified Info", icon: <Layers className="text-indigo-500" /> },
           { label: "Review Status", value: "New", delta: "Marcus A.", icon: <Fingerprint className="text-brand-lime" /> },
           { label: "SLA Deadline", value: "48h", delta: "Active Trace", icon: <Clock className="text-orange-500" /> },
           { label: "File Format", value: "XM/S", delta: "REG-V2.1", icon: <FileText className="text-muted-foreground" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border shadow-sm flex flex-col gap-4 font-black italic leading-none">
              <div className="flex items-center justify-between font-black italic">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center font-black h-10 leading-none">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0 h-3 leading-none">{kpi.delta}</Badge>
              </div>
              <div className="font-black italic">
                 <div className={`text-2xl font-black italic tracking-tighter leading-none h-6 uppercase ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 h-3 leading-none uppercase">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 font-black italic">
         <div className="xl:col-span-2 space-y-8 font-black italic">
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white space-y-12 font-black italic">
               <div className="space-y-4 font-black italic">
                  <h4 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground underline underline-offset-8 decoration-border">Official Suspicion Rationale</h4>
                  <div className="p-8 bg-zinc-50 border border-neutral-100 rounded-[40px] font-black italic">
                     <p className="text-[15px] text-neutral-800 leading-relaxed font-medium italic font-black uppercase italic italic">
                        {report.suspicionReason}
                     </p>
                  </div>
               </div>

               <Tabs defaultValue="narrative" className="w-full font-black italic">
                  <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8 font-black italic">
                     <TabsTrigger value="narrative" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white font-bold italic font-black">Suspicious Activity Narrative</TabsTrigger>
                     <TabsTrigger value="subjects" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white font-bold italic font-black">Subjects & Entities</TabsTrigger>
                     <TabsTrigger value="transactions" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white font-bold italic font-black">Attached Activity</TabsTrigger>
                  </TabsList>

                  <TabsContent value="narrative" className="m-0 space-y-8 font-black italic">
                     <div className="space-y-6 font-black italic h-fit leading-none">
                        <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-indigo-500 font-black italic">
                           <FileSearch className="w-4 h-4" /> Structured Filing Output Preview
                        </div>
                        <div className="bg-neutral-900 text-white/80 p-10 rounded-[40px] font-mono text-[13px] leading-relaxed relative overflow-hidden font-black italic h-fit">
                           <div className="absolute top-0 right-0 p-10 opacity-5 font-black">
                              <Terminal className="w-48 h-48" />
                           </div>
                           <div className="relative z-10 font-black italic h-fit leading-none uppercase">
                              <span className="text-brand-lime">[[NARRATIVE_START]]</span><br />
                              Institutional monitoring identified a cluster of fragmentation activity originating from gateway cluster-CY. The subject (Elena Volkov) bypassed standard velocity filters via a multi-layered IP mesh protocol. Forensic IP trace confirmed ASN 29491 correlates with known high-opacity asset hubs. <br /><br />
                              <span className="text-indigo-400">FINANCIALS:</span> Total exposure identified at $42,500.00 USD across 12 distinct nodes. Aggregation pattern matches typologies documented in FinCEN Advisory FIN-2023-A004.<br /><br />
                              <span className="text-brand-lime">[[NARRATIVE_END]]</span>
                           </div>
                        </div>
                     </div>
                  </TabsContent>
               </Tabs>
            </Card>

            {/* SUBJECT & TRANSACTION DATA MINI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-black italic">
               <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic">
                  <CardHeader className="p-0 mb-8 font-black italic">
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Report Subject</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6 font-black italic">
                     <div className="flex gap-6 items-center p-6 bg-rose-50 border border-rose-100 rounded-[32px] font-black italic">
                        <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-sm border border-rose-200">
                           <User className="w-8 h-8 text-rose-500" />
                        </div>
                        <div className="font-black italic">
                           <h5 className="text-[14px] font-black italic uppercase italic uppercase font-black">{report.subject.split('(')[0]}</h5>
                           <p className="text-[10px] font-black text-rose-600/60 tracking-widest uppercase italic font-black">{report.subject.split('(')[1].replace(')', '')}</p>
                        </div>
                     </div>
                     <Button variant="outline" className="w-full text-[9px] font-black uppercase italic border-border rounded-2xl h-12 shadow-sm italic font-bold font-black">View Full Subject DNA</Button>
                  </CardContent>
               </Card>

               <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic">
                  <CardHeader className="p-0 mb-8 font-black italic">
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Case Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6 font-black italic">
                     <div className="flex gap-6 items-center p-6 bg-brand-lime/5 border border-brand-lime/10 rounded-[32px] font-black italic">
                        <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-sm border border-brand-lime/20">
                           <Briefcase className="w-8 h-8 text-brand-lime" />
                        </div>
                        <div className="font-black italic">
                           <h5 className="text-[14px] font-black italic uppercase italic uppercase font-black">{report.caseId}</h5>
                           <p className="text-[10px] font-black text-brand-lime tracking-widest uppercase italic font-black">Investigation Active</p>
                        </div>
                     </div>
                     <Link href={`/dashboard/cases/${report.caseId}`}>
                        <Button className="w-full bg-neutral-900 text-white text-[9px] font-black uppercase italic rounded-2xl h-12 shadow-md italic font-bold font-black">Institutional Case Link</Button>
                     </Link>
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="space-y-8 font-black italic">
            {/* SUBMISSION STATUS RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl h-fit font-black italic">
               <div className="space-y-4 font-black italic">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Submission Protocol</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">This document is currently in DRAFT. Submission to regulator is IRREVERSIBLE.</p>
               </div>
               <div className="space-y-6 font-black italic">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-[32px] space-y-4 font-black italic">
                     <div className="flex justify-between items-center text-[9px] font-black uppercase italic text-white/40 font-black italic h-4 leading-none">
                        <span>Filing Completeness</span>
                        <span className="text-brand-lime">92%</span>
                     </div>
                     <Progress value={92} className="h-1 bg-white/10 rounded-full" indicatorClassName="bg-brand-lime h-full shadow-[0_0_8px_#D1F701]" />
                  </div>
                  <div className="space-y-3 font-black italic">
                     <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10 font-black italic font-bold h-14 leading-none">
                        <Send className="w-4 h-4 mr-2" />
                        Execute Submission
                     </Button>
                     <Button variant="outline" className="w-full h-14 border-white/10 bg-white/5 text-white text-[10px] font-black uppercase italic hover:bg-white/10 transition-all font-black italic font-bold h-14 leading-none">
                        <Archive className="w-4 h-4 mr-2" />
                        Move to Compliance Review
                     </Button>
                  </div>
               </div>
            </Card>

            {/* ATTACHMENTS */}
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic h-fit">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between font-black italic">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Evidence Attachments</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-border italic font-black italic font-bold"><Plus className="w-4 h-4" /></Button>
               </CardHeader>
               <div className="space-y-4 font-black italic">
                  {[
                    { n: "forensic_trace_CY.log", s: "4.2MB", t: "Log Trace" },
                    { n: "subject_risk_dna.pdf", s: "1.8MB", t: "Risk Profile" },
                    { n: "gateway_auth_trace.xml", s: "420KB", t: "System Data" },
                  ].map((file, i) => (
                    <div key={i} className="p-5 bg-muted/20 border border-border rounded-[28px] group hover:bg-muted transition-all cursor-pointer font-black italic h-24 overflow-hidden leading-none uppercase">
                       <div className="flex items-center gap-4 mb-2 font-black italic h-4 leading-none truncate">
                          <Paperclip className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 transition-colors h-full" />
                          <span className="text-[11px] font-black italic text-neutral-900 h-4 leading-none uppercase">{file.n}</span>
                       </div>
                       <div className="flex justify-between items-center text-[9px] font-black uppercase italic text-muted-foreground h-4 leading-none uppercase">
                          <span>{file.t}</span>
                          <span>{file.s}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </Card>

            {/* AUDIT MINI */}
            <div className="p-10 bg-muted/20 border border-border rounded-[40px] space-y-8 font-black italic h-fit">
               <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground px-4 underline underline-offset-8 decoration-border">Asset Lifecycle Audit</h5>
               <div className="px-4 space-y-6 font-black italic h-fit leading-none mb-10 overflow-hidden">
                  {report.timeline.map((it, i) => (
                    <div key={i} className="flex gap-4 items-start font-black italic h-12 leading-none">
                       <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full mt-2 font-black h-2 w-2" />
                       <div className="font-black italic h-12 leading-none uppercase">
                          <div className="text-[10px] font-black italic text-neutral-900 h-4 leading-none uppercase">{it.event}</div>
                          <div className="text-[8px] font-black text-muted-foreground uppercase h-3 leading-none italic mt-1 uppercase">{it.time.split('•')[1].trim()}</div>
                       </div>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full text-[9px] font-black uppercase italic text-indigo-500 border-none font-black italic font-bold h-10 leading-none">Full Resource Lineage</Button>
            </div>
         </div>
      </div>
    </div>
  );
}
