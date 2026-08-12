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
  Terminal,
  Cpu,
  MapPin,
  Laptop,
  Box,
  Key,
  Database,
  SearchCode,
  AlertCircle
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
import { useAuditEvent } from "@/hooks";

export default function AuditEventDetailPage() {
  // Fallback: No specific hook generated, using generic state
  const apiData: any[] = [];

  const params = useParams();
  const eventId = params.eventId as string;

  const { data: event, isLoading, isError, refetch } = useAuditEvent(eventId);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8 pb-20 font-black italic">
        <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-black italic">
            <div className="space-y-1 font-black italic">
              <Link href="/dashboard/audit" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2 font-bold italic font-black">
                 <ArrowLeft className="w-3 h-3" /> System Trace Archive
              </Link>
            </div>
          </div>
        </section>
        <Card className="rounded-[48px] h-64 animate-pulse bg-muted" />
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="flex flex-col gap-8 pb-20 font-black italic">
        <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-black italic">
            <div className="space-y-1 font-black italic">
              <Link href="/dashboard/audit" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2 font-bold italic font-black">
                 <ArrowLeft className="w-3 h-3" /> System Trace Archive
              </Link>
            </div>
          </div>
        </section>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load audit event</p>
                <p className="text-sm text-red-700">Please check your connection and try again.</p>
              </div>
            </div>
            <Button onClick={refetch} className="mt-4" variant="outline">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-20 font-black italic">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-black italic">
          <div className="space-y-1 font-black italic">
            <Link href="/dashboard/audit" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2 font-bold italic font-black">
               <ArrowLeft className="w-3 h-3" /> System Trace Archive
            </Link>
            <div className="flex items-center gap-4 font-black italic">
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{event.id.split('-')[0]}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                event.severity === 'CRITICAL' ? 'bg-rose-500 text-white' : event.severity === 'HIGH' ? 'bg-orange-500 text-white' : 'bg-brand-lime text-black'
              }`}>
                {event.severity} Event
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border italic font-black">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900 h-4 leading-none truncate">Integrity Verified</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 font-black italic">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800 font-bold font-black">
                <Download className="w-3.5 h-3.5 mr-2" />
                Raw Trace
             </Button>
             <Button className="h-10 px-10 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl h-10 leading-none">
                Export Audit Link
                <ChevronRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 font-black italic leading-none">
         {(apiData || []).map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border shadow-sm flex flex-col gap-4 font-black italic leading-none h-fit">
              <div className="flex items-center justify-between font-black italic">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center font-black h-10 leading-none">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0 h-3 leading-none">{kpi.delta}</Badge>
              </div>
              <div className="font-black italic">
                 <div className={`text-xl font-black italic tracking-tighter leading-none h-6 uppercase ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1 h-3 leading-none uppercase">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 font-black italic">
         <div className="xl:col-span-2 space-y-8 font-black italic">
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic space-y-10">
               <div className="flex items-center justify-between font-black italic h-10 leading-none">
                  <h4 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground underline underline-offset-8 decoration-border">Event Descriptive Narrative</h4>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase text-brand-lime italic font-black h-4 leading-none"><Activity className="w-3 h-3" /> Live Telemetry Trace</div>
               </div>
               <div className="p-10 bg-zinc-50 border border-neutral-100 rounded-[40px] font-black italic">
                  <p className="text-[16px] text-neutral-800 leading-relaxed font-medium italic font-black uppercase italic italic">
                     {event.details?.description || `Action ${event.action} performed by ${event.actor_id} on ${event.entity_type} ${event.entity_id}.`}
                  </p>
               </div>

               {event.details?.changes && event.details.changes.length > 0 && (
                 <div className="space-y-6 font-black italic">
                    <h4 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground px-4 italic h-4 leading-none">System State Delta (Before/After)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-black italic">
                       {event.details.changes.map((change: any, i: number) => (
                          <div key={i} className="p-8 bg-white border border-border rounded-[32px] shadow-sm space-y-4 font-black italic h-32 overflow-hidden leading-none uppercase">
                             <div className="text-[9px] font-black uppercase text-muted-foreground italic h-4 leading-none uppercase">{change.field || 'Field'} Evolution</div>
                             <div className="flex flex-col gap-1 font-black italic h-12 leading-none uppercase">
                                <span className="text-[10px] font-black text-rose-500 line-through h-4 leading-none uppercase truncate">{JSON.stringify(change.before)}</span>
                                <ChevronRight className="w-3 h-3 text-neutral-300 rotate-90 h-10 leading-none font-black" />
                                <span className="text-[13px] font-black text-neutral-900 h-4 leading-none uppercase truncate">{JSON.stringify(change.after)}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
               )}
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-black italic">
               <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic">
                  <CardHeader className="p-0 mb-8 font-black italic">
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter italic">Entity Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6 font-black italic">
                     <div className="flex gap-6 items-center p-6 bg-muted/20 border border-border rounded-[32px] font-black italic">
                        <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-sm border border-border">
                           <Box className="w-8 h-8 text-neutral-400 font-black h-8 leading-none italic font-bold" />
                        </div>
                        <div className="font-black italic leading-none h-12 overflow-hidden">
                           <h5 className="text-[14px] font-black italic uppercase italic h-4 leading-none uppercase">{event.entity_id}</h5>
                           <p className="text-[10px] font-black text-muted-foreground tracking-widest uppercase italic mt-1 h-4 leading-none uppercase">{event.entity_type} Node</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic">
                  <CardHeader className="p-0 mb-8 font-black italic">
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter italic">Execution Context</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6 font-black italic">
                     <div className="flex gap-4 items-center font-black italic h-12 leading-none">
                        <MapPin className="w-4 h-4 text-rose-500 font-black h-4 leading-none italic" />
                        <span className="text-[11px] font-black italic uppercase tracking-tighter h-4 leading-none uppercase">{event.ip_address}</span>
                     </div>
                     <div className="p-6 bg-neutral-900 text-white rounded-[32px] font-black italic h-24 overflow-hidden leading-none uppercase">
                        <div className="text-[8px] font-black uppercase italic tracking-widest text-white/30 h-3 leading-none italic uppercase">Haggis-Signature Trace</div>
                        <div className="text-[12px] font-black italic tracking-widest text-brand-lime mt-1 h-8 leading-none uppercase truncate">{event.id}</div>
                        <div className="text-[8px] font-black uppercase text-indigo-400 mt-2 h-3 leading-none uppercase italic">Integrity Verification: PASS</div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="space-y-8 font-black italic">
            {/* USER PROFILE MINI */}
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white space-y-8 h-fit font-black italic">
               <div className="flex flex-col items-center text-center gap-6 font-black italic">
                  <div className="w-24 h-24 rounded-[32px] bg-zinc-50 border border-border shadow-inner flex items-center justify-center font-black italic">
                     <Fingerprint className="w-12 h-12 text-neutral-300 font-black h-12 leading-none italic font-bold" />
                  </div>
                  <div className="space-y-1 font-black italic leading-none h-12 overflow-hidden">
                     <h4 className="text-xl font-black italic uppercase tracking-tighter h-6 leading-none uppercase truncate">{event.actor_id}</h4>
                  </div>
               </div>
               <div className="pt-6 border-t border-border space-y-4 font-black italic">
                  {(apiData || []).map((it, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic font-black h-4 leading-none truncate">
                       <span className="text-muted-foreground mr-2">{it.l}</span>
                       <span className="text-neutral-900 font-black italic uppercase truncate">{it.v}</span>
                    </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full text-[9px] font-black uppercase italic text-indigo-500 border-none font-bold h-10 italic uppercase font-black">Audit All User Decisions</Button>
            </Card>

            {/* RAW DATA TRACE (TERMINAL) */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-8 shadow-3xl h-fit font-black italic">
               <div className="flex items-center justify-between font-black italic">
                  <h4 className="text-lg font-black italic uppercase tracking-tighter text-brand-lime font-black h-6 leading-none">Raw Log Ingress</h4>
                  <Terminal className="w-5 h-5 text-white/20 font-black" />
               </div>
               <div className="bg-black/40 p-8 rounded-[32px] font-mono text-[11px] leading-relaxed text-slate-400 font-black italic h-48 overflow-y-auto uppercase break-all">
                  {JSON.stringify(event, null, 2)}
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
