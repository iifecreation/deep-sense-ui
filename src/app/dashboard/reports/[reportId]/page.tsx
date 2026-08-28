"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  User,
  ChevronRight,
  Briefcase,
  FileSearch,
  Send,
  Archive,
  Plus,
  Printer,
  Terminal,
  Loader2,
  RefreshCw,
  ShieldOff,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ApiError } from "@/lib/api/client";
import { reportsService } from "@/services/reports.service";
import type { ReportDetail } from "@/types";

function describeError(error: unknown): string {
  if (error instanceof ApiError && error.statusCode === 403) {
    return error.code === "service_not_enabled"
      ? "Regulatory reporting is disabled for this organization."
      : "Your role cannot view this report.";
  }
  if (error instanceof ApiError && error.statusCode === 404) {
    return "This report does not exist in your organization.";
  }
  return error instanceof Error ? error.message : "The reports API is unavailable.";
}

function formatDateTime(value: string | null | undefined): string {
  if (!value) return "Unknown";
  return new Date(value).toLocaleString();
}

const FILING_COMPLETENESS_STATUSES = new Set([
  "ready_for_submission",
  "submitted",
  "accepted",
  "approved",
  "amended",
  "closed",
  "archived",
]);

export default function RegulatoryReportDetailPage() {
  const params = useParams<{ reportId: string }>();
  const reportId = params.reportId;

  const [detail, setDetail] = useState<ReportDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setDetail(await reportsService.getReport(reportId));
    } catch (cause) {
      setError(describeError(cause));
    } finally {
      setIsLoading(false);
    }
  }, [reportId]);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  if (isLoading && !detail) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-lime" />
      </div>
    );
  }

  if (error && !detail) {
    return (
      <div className="mx-auto max-w-3xl py-10">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6 text-red-800">
            <ShieldOff className="h-6 w-6" />
            <p className="mt-3 font-bold">Report cannot be loaded</p>
            <p className="mt-1 text-sm">{error}</p>
            <div className="mt-5 flex gap-2">
              <Button variant="outline" onClick={() => void load()}>
                <RefreshCw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button asChild variant="ghost">
                <Link href="/dashboard/reports">Back to reports</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!detail) return null;

  const { report, narrative, linked_case_summary, metadata, reviews, submissions, attachments } = detail;

  const subjectNames: string[] = Array.isArray(metadata?.subjects) ? metadata.subjects : [];
  const subjectLabel = subjectNames.length ? subjectNames.join(", ") : "Unknown Entity";
  const suspicionReason =
    report.summary || "Suspicion details not recorded.";

  const timeline = [
    { event: "Report Created", time: report.created_at, actor: "System" },
    ...reviews
      .slice()
      .reverse()
      .map((r) => ({
        event: `Review: ${r.action.replaceAll("_", " ")}`,
        time: r.created_at,
        actor: r.reviewer_user_id,
      })),
    ...submissions
      .slice()
      .reverse()
      .map((s) => ({
        event: `Submitted to ${s.destination}`,
        time: s.submitted_at,
        actor: s.submitted_by_user_id,
      })),
  ].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

  const completeness = FILING_COMPLETENESS_STATUSES.has(report.status) ? 100 : narrative ? 65 : 25;

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
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{report.title || report.id}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none bg-indigo-500 text-white`}>
                {report.report_type}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border italic font-black">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900 h-4 leading-none">{report.status.replaceAll("_", " ")}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 font-black italic">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800 font-bold font-black" onClick={() => window.print()}>
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

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 not-italic font-normal">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 font-black italic">
         <div className="xl:col-span-2 space-y-8 font-black italic">
            <Card className="rounded-[40px] border-border shadow-md p-10 bg-white space-y-12 font-black italic">
               <div className="space-y-4 font-black italic">
                  <h4 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground underline underline-offset-8 decoration-border">Official Suspicion Rationale</h4>
                  <div className="p-8 bg-zinc-50 border border-neutral-100 rounded-[40px] font-black italic">
                     <p className="text-[15px] text-neutral-800 leading-relaxed font-medium italic font-black uppercase italic italic">
                        {suspicionReason}
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
                           <div className="relative z-10 font-black italic h-fit leading-none uppercase whitespace-pre-wrap">
                              <span className="text-brand-lime">[[NARRATIVE_START]]</span><br />
                              {narrative || "No narrative has been composed for this report yet."}<br /><br />
                              <span className="text-brand-lime">[[NARRATIVE_END]]</span>
                           </div>
                        </div>
                     </div>
                  </TabsContent>

                  <TabsContent value="subjects" className="m-0 space-y-4 font-black italic">
                     {subjectNames.length ? (
                        <div className="flex flex-wrap gap-3 font-black italic">
                           {subjectNames.map((subject) => (
                              <Badge key={subject} variant="outline" className="h-8 px-4 text-[10px] font-black uppercase italic tracking-widest border-border">{subject}</Badge>
                           ))}
                        </div>
                     ) : (
                        <p className="text-sm font-medium text-slate-500 not-italic">No subjects recorded on this report.</p>
                     )}
                     {metadata?.domains_involved?.length ? (
                        <div className="pt-4 font-black italic">
                           <h5 className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground mb-3">Domains Involved</h5>
                           <div className="flex flex-wrap gap-2 font-black italic">
                              {(metadata.domains_involved as string[]).map((d) => (
                                 <Badge key={d} variant="secondary" className="h-7 px-3 text-[9px] font-black uppercase italic tracking-widest">{d.replaceAll("_", " ")}</Badge>
                              ))}
                           </div>
                        </div>
                     ) : null}
                  </TabsContent>

                  <TabsContent value="transactions" className="m-0 space-y-4 font-black italic">
                     {detail.linked_transaction_ids?.length ? (
                        <div className="space-y-2 font-black italic">
                           {detail.linked_transaction_ids.map((txId) => (
                              <div key={txId} className="p-4 bg-zinc-50 border border-neutral-100 rounded-2xl font-mono text-[12px] not-italic font-medium text-neutral-700">{txId}</div>
                           ))}
                        </div>
                     ) : (
                        <p className="text-sm font-medium text-slate-500 not-italic">No transactions attached to this report.</p>
                     )}
                     {metadata?.total_amount ? (
                        <p className="text-[11px] font-black uppercase italic tracking-widest text-neutral-600 pt-2">
                           Aggregate value: {Number(metadata.total_amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {metadata.currency || ""}
                        </p>
                     ) : null}
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
                           <h5 className="text-[14px] font-black italic uppercase italic uppercase font-black">{subjectLabel}</h5>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <Card className="rounded-[40px] border-border shadow-md p-10 bg-white font-black italic">
                  <CardHeader className="p-0 mb-8 font-black italic">
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Case Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6 font-black italic">
                     {linked_case_summary ? (
                        <>
                           <div className="flex gap-6 items-center p-6 bg-brand-lime/5 border border-brand-lime/10 rounded-[32px] font-black italic">
                              <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center shadow-sm border border-brand-lime/20">
                                 <Briefcase className="w-8 h-8 text-brand-lime" />
                              </div>
                              <div className="font-black italic">
                                 <h5 className="text-[14px] font-black italic uppercase italic uppercase font-black">{linked_case_summary.title || linked_case_summary.id}</h5>
                                 <p className="text-[10px] font-black text-brand-lime tracking-widest uppercase italic font-black">{linked_case_summary.status.replaceAll("_", " ")}</p>
                              </div>
                           </div>
                           <Link href={`/dashboard/cases/${linked_case_summary.id}`}>
                              <Button className="w-full bg-neutral-900 text-white text-[9px] font-black uppercase italic rounded-2xl h-12 shadow-md italic font-bold font-black">Institutional Case Link</Button>
                           </Link>
                        </>
                     ) : (
                        <p className="text-sm font-medium text-slate-500 not-italic">No case is linked to this report.</p>
                     )}
                  </CardContent>
               </Card>
            </div>
         </div>

         <div className="space-y-8 font-black italic">
            {/* SUBMISSION STATUS RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl h-fit font-black italic">
               <div className="space-y-4 font-black italic">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Submission Protocol</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">This document is currently {report.status.replaceAll("_", " ").toUpperCase()}. Submission to regulator is IRREVERSIBLE.</p>
               </div>
               <div className="space-y-6 font-black italic">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-[32px] space-y-4 font-black italic">
                     <div className="flex justify-between items-center text-[9px] font-black uppercase italic text-white/40 font-black italic h-4 leading-none">
                        <span>Filing Completeness</span>
                        <span className="text-brand-lime">{completeness}%</span>
                     </div>
                     <Progress value={completeness} className="h-1 bg-white/10 rounded-full" indicatorClassName="bg-brand-lime h-full shadow-[0_0_8px_#D1F701]" />
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
                  {attachments.length ? (
                     attachments.map((a) => (
                        <div key={a.id} className="flex items-center justify-between p-4 bg-zinc-50 border border-neutral-100 rounded-2xl font-black italic">
                           <span className="text-[12px] not-italic font-semibold text-neutral-800 truncate">{a.filename}</span>
                           <span className="text-[9px] not-italic font-medium text-muted-foreground uppercase">{a.content_type || "file"}</span>
                        </div>
                     ))
                  ) : (
                     <p className="text-sm font-medium text-slate-500 not-italic">No attachments provided.</p>
                  )}
               </div>
            </Card>

            {/* AUDIT MINI */}
            <div className="p-10 bg-muted/20 border border-border rounded-[40px] space-y-8 font-black italic h-fit">
               <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground px-4 underline underline-offset-8 decoration-border">Asset Lifecycle Audit</h5>
               <div className="px-4 space-y-6 font-black italic h-fit leading-none mb-10 overflow-hidden">
                  {timeline.map((it, i) => (
                    <div key={i} className="flex gap-4 items-start font-black italic h-12 leading-none">
                       <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full mt-2 font-black h-2 w-2" />
                       <div className="font-black italic h-12 leading-none uppercase">
                          <div className="text-[10px] font-black italic text-neutral-900 h-4 leading-none uppercase">{it.event}</div>
                          <div className="text-[8px] font-black text-muted-foreground uppercase h-3 leading-none italic mt-1 uppercase">{formatDateTime(it.time)}</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
