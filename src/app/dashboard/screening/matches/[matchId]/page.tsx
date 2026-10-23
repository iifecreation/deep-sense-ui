"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  History,
  ShieldQuestion,
  UserPlus,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScreeningMatch } from "@/hooks/use-screening";
import { screeningService } from "@/services/screening.service";

function formatDate(value?: string | null): string {
  if (!value) return "Unknown";
  return new Date(value).toLocaleString();
}

// linked_customer and prior_screenings are free-form objects on the API; read string fields safely.
function text(value: unknown): string | undefined {
  return typeof value === "string" && value ? value : undefined;
}

export default function ScreeningMatchDetailPage() {
  const params = useParams();
  const matchId = params.matchId as string;

  const { data: detail, isLoading, isError, refetch } = useScreeningMatch(matchId);

  const [pendingAction, setPendingAction] = useState<"confirm" | "dismiss" | "escalate" | null>(null);
  const [actionReason, setActionReason] = useState("");
  const [actionBusy, setActionBusy] = useState(false);

  const handleConfirmAction = async () => {
    if (!pendingAction) return;
    setActionBusy(true);
    try {
      const body = { reason: actionReason.trim() || undefined };
      if (pendingAction === "confirm") await screeningService.confirmMatch(matchId, body);
      else if (pendingAction === "dismiss") await screeningService.dismissMatch(matchId, body);
      else await screeningService.escalateMatch(matchId, body);
      setPendingAction(null);
      setActionReason("");
      await refetch();
    } finally {
      setActionBusy(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-brand-lime" />
      </div>
    );
  }

  if (isError || !detail) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg flex flex-col items-center">
        <AlertTriangle className="w-8 h-8 mb-2" />
        <h2 className="font-bold">Failed to load match</h2>
        <Button onClick={refetch} className="mt-4" variant="outline">Retry</Button>
      </div>
    );
  }

  const match = detail.match;
  const riskLevel = match.risk_level || "medium";
  const matchedFields: Record<string, unknown> = detail.matched_fields || {};
  const linkedCustomer = detail.linked_customer || {};

  const kpis = [
    { label: "Confidence", value: match.confidence_score != null ? `${(match.confidence_score * 100).toFixed(1)}%` : "N/A", icon: <ShieldQuestion className="w-5 h-5" /> },
    { label: "Risk Level", value: riskLevel, icon: <AlertTriangle className="w-5 h-5 text-rose-500" /> },
    { label: "Status", value: match.status, icon: <History className="w-5 h-5" /> },
    { label: "Created", value: formatDate(match.created_at).split(",")[0], icon: <History className="w-5 h-5" /> },
  ];

  const sourceInfo = [
    { label: "Match Type", value: match.match_type },
    { label: "Linked Case", value: match.linked_case_id || "None" },
    { label: "Assigned To", value: match.assigned_user_id || "Unassigned" },
    { label: "Last Updated", value: formatDate(match.updated_at) },
  ];

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
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{text(linkedCustomer.label) || "Unknown Entity"}</h1>
              <Badge className={`h-6 px-4 text-[9px] font-black uppercase italic tracking-widest border-none ${
                riskLevel === 'critical' ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20' : riskLevel === 'high' ? 'bg-orange-500 text-white' : 'bg-slate-400 text-white'
              }`}>
                {riskLevel} Risk
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{match.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("escalate")} variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <AlertTriangle className="w-3.5 h-3.5 mr-2" />
                Escalate Match
             </Button>
             <div className="flex gap-2">
                <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("confirm")} className="h-10 px-10 bg-rose-600 text-white hover:bg-rose-700 transition-all font-black uppercase tracking-widest italic shadow-xl disabled:opacity-50">
                   Confirm Match
                </Button>
                <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("dismiss")} variant="outline" className="h-10 px-10 border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 transition-all font-black uppercase tracking-widest italic disabled:opacity-50">
                   Dismiss FP
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {kpis.map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
              </div>
              <div>
                 <div className="text-2xl font-black italic tracking-tighter leading-none text-neutral-900 dark:text-white capitalize">{kpi.value}</div>
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
                        <h3 className="text-[10px] font-black uppercase italic tracking-widest opacity-40">Match Rationale</h3>
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter">Matched against {match.source_list}</h4>
                     </div>
                  </div>
                  <p className="text-[14px] text-white/70 italic leading-relaxed font-medium">
                     {detail.confidence_explanation || "No explanation provided by the matching engine."}
                  </p>
                  {Object.keys(matchedFields).length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {Object.entries(matchedFields).map(([field, value], i) => (
                          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-[32px] font-black italic">
                             <span className="text-[9px] font-black uppercase text-white/40 italic">{field}</span>
                             <div className="text-sm font-black italic text-white uppercase truncate mt-1">{String(value)}</div>
                          </div>
                       ))}
                    </div>
                  )}
               </div>
            </div>

            <Tabs defaultValue="forensics" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="forensics" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white uppercase">Profile Forensic</TabsTrigger>
                  <TabsTrigger value="history" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white uppercase">Prior Screenings</TabsTrigger>
               </TabsList>

               <TabsContent value="forensics" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-8">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Match Metadata</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                           {sourceInfo.map((it, i) => (
                             <div key={i} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic group h-10 border-b border-border last:border-0 font-black">
                                <span className="text-muted-foreground">{it.label}</span>
                                <span className="text-neutral-900">{it.value}</span>
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-8">
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Linked System User</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex flex-col items-center gap-6">
                           <div className="w-20 h-20 rounded-[28px] bg-zinc-50 border border-border flex items-center justify-center relative shadow-inner">
                              <UserPlus className="w-8 h-8 text-neutral-300" />
                           </div>
                           <div className="text-center font-black italic">
                              <h4 className="text-xl font-black italic tracking-tighter text-neutral-900">{text(linkedCustomer.label) || "Unlinked"}</h4>
                              <p className="text-[10px] font-black uppercase text-muted-foreground italic mt-1">{text(linkedCustomer.external_id) || match.customer_id || "No customer linked"}</p>
                           </div>
                           {match.customer_id && (
                             <Link href={`/dashboard/users/${match.customer_id}`} className="w-full">
                               <Button variant="outline" className="w-full text-[9px] font-black uppercase italic border-border rounded-2xl h-11 shadow-sm">View Customer Profile</Button>
                             </Link>
                           )}
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="history" className="m-0">
                  <Card className="rounded-[40px] border-border shadow-md p-12 bg-white font-black italic">
                     {(detail.prior_screenings || []).length === 0 ? (
                       <p className="text-center text-muted-foreground italic text-sm">No prior screening history for this entity.</p>
                     ) : (
                       <div className="space-y-8">
                         {detail.prior_screenings.map((ps, i) => (
                           <div key={i} className="flex gap-6 items-start border-b border-border/50 pb-6 last:border-0">
                              <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-neutral-100 flex items-center justify-center shrink-0">
                                 <History className="w-5 h-5 text-neutral-400" />
                              </div>
                              <div className="flex-1">
                                 <p className="text-sm font-black italic">{text(ps.summary) || JSON.stringify(ps)}</p>
                              </div>
                           </div>
                         ))}
                       </div>
                     )}
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
                     <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic opacity-40">Source List</span>
                     <div className="text-[13px] font-black italic tracking-widest text-neutral-900">{match.source_list}</div>
                  </div>
                  {match.assigned_user_id && (
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic border-b border-neutral-50 pb-4 last:border-0">
                       <span className="text-muted-foreground">Assigned To</span>
                       <span className="text-neutral-900">{match.assigned_user_id}</span>
                    </div>
                  )}
               </div>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl h-fit font-black italic">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Identity Resolution</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Decision will be audited.</p>
               </div>
               <div className="space-y-3 font-black italic">
                  <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("confirm")} className="w-full h-14 bg-rose-600 text-white rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-rose-600/20 disabled:opacity-50">
                     <XCircle className="w-4 h-4 mr-2" />
                     Confirm & Restrict
                  </Button>
                  <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("dismiss")} variant="outline" className="w-full h-14 border-white/10 bg-white/5 text-white text-[11px] font-black uppercase italic hover:bg-white/10 transition-all font-bold disabled:opacity-50">
                     <CheckCircle2 className="w-4 h-4 mr-2" />
                     Dismiss False Positive
                  </Button>
                  <Button disabled={actionBusy || match.status !== 'pending_review'} onClick={() => setPendingAction("escalate")} variant="outline" className="w-full h-14 border-indigo-500/50 text-indigo-400 rounded-3xl text-[10px] font-black uppercase italic hover:bg-indigo-500/5 transition-all font-bold disabled:opacity-50">
                     <History className="w-4 h-4 mr-2" />
                     Request Senior Review
                  </Button>
               </div>
            </Card>
         </div>
      </div>

      <Dialog open={pendingAction !== null} onOpenChange={(open) => { if (!open) { setPendingAction(null); setActionReason(""); } }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {pendingAction === "confirm" ? "Confirm Match" : pendingAction === "dismiss" ? "Dismiss False Positive" : "Escalate Match"}
            </DialogTitle>
            <DialogDescription>This decision is audited. Provide a reason (optional).</DialogDescription>
          </DialogHeader>
          <textarea
            value={actionReason}
            onChange={(e) => setActionReason(e.target.value)}
            placeholder="Reason for this decision"
            className="w-full min-h-20 rounded-md border border-slate-200 p-3 text-sm"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => { setPendingAction(null); setActionReason(""); }}>Cancel</Button>
            <Button disabled={actionBusy} onClick={() => void handleConfirmAction()} className="bg-neutral-900 hover:bg-neutral-800">
              {actionBusy ? "Submitting..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
