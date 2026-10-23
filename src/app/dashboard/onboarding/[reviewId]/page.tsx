"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  XCircle,
  AlertTriangle,
  Clock,
  ShieldCheck,
  ShieldAlert,
  FileText,
  Download,
  Briefcase,
  ExternalLink,
  Calendar,
  Globe,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useOnboardingReview } from "@/hooks";
import { onboardingService } from "@/services/onboarding.service";
import { LoadErrorCard } from "@/components/common/LoadErrorCard";

export default function OnboardingReviewDetailPage() {
  const params = useParams();
  const reviewId = params.reviewId as string;
  const { data: reviewData, isLoading, isError, error, refetch } = useOnboardingReview(reviewId);

  const [pendingAction, setPendingAction] = useState<"approve" | "reject" | "escalate" | null>(null);
  const [actionReason, setActionReason] = useState("");
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const handleConfirmAction = async () => {
    if (!pendingAction) return;
    if ((pendingAction === "reject" || pendingAction === "escalate") && !actionReason.trim()) return;
    setActionBusy(true);
    setActionError(null);
    try {
      if (pendingAction === "approve") {
        await onboardingService.approveReview(reviewId, { reason: actionReason.trim() || undefined });
      } else if (pendingAction === "reject") {
        await onboardingService.rejectReview(reviewId, { reason: actionReason.trim() });
      } else {
        await onboardingService.escalateReview(reviewId, { reason: actionReason.trim() });
      }
      setPendingAction(null);
      setActionReason("");
      await refetch();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setActionBusy(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8 pb-20 font-black italic">
        <div className="flex items-center justify-between font-bold italic">
           <Link href="/dashboard/onboarding" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-brand-lime transition-all italic group font-bold font-black">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
              Back to Application Queue
           </Link>
        </div>
        <Card className="rounded-[48px] h-64 animate-pulse bg-muted" />
      </div>
    );
  }

  if (isError || !reviewData) {
    return (
      <div className="flex flex-col gap-8 pb-20 font-black italic">
        <div className="flex items-center justify-between font-bold italic">
           <Link href="/dashboard/onboarding" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-brand-lime transition-all italic group font-bold font-black">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
              Back to Application Queue
           </Link>
        </div>
        <LoadErrorCard error={error} what="review details" onRetry={refetch} />
      </div>
    );
  }

  const review = reviewData;
  const kycDocs = reviewData.documents || [];
  const notes = reviewData.notes || [];
  // risk_summary is a free-form object on the API, so narrow each field before use.
  const riskTier = typeof review.risk_summary?.risk_tier === "string" ? review.risk_summary.risk_tier : "low";
  const riskScore = typeof review.risk_summary?.risk_score === "number" ? review.risk_summary.risk_score : null;
  const screening = review.screening_summary || {};
  const availableActions: string[] = review.available_actions || [];
  const canApprove = availableActions.includes("approve");
  const canReject = availableActions.includes("reject");
  const canEscalate = availableActions.includes("escalate");
  const screeningItems = [
    { category: "Sanctions", result: screening.sanctions_status },
    { category: "PEP", result: screening.pep_status },
    { category: "Watchlist", result: screening.watchlist_status },
  ].filter((s) => s.result && s.result !== "unknown");

  return (
    <div className="flex flex-col gap-8 pb-20 font-black italic">
      {/* BREADCRUMBS & TOP ACTIONS */}
      <div className="flex items-center justify-between font-bold italic">
         <Link href="/dashboard/onboarding" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-brand-lime transition-all italic group font-bold font-black">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
            Back to Application Queue
         </Link>
         <div className="flex gap-3">
            <Button variant="outline" className="h-9 px-4 text-[9px] font-black uppercase tracking-widest italic rounded-xl border-neutral-200 dark:border-neutral-800">
               <Download className="w-3.5 h-3.5 mr-2" />
               Export Package
            </Button>
            <Button variant="outline" className="h-9 px-4 text-[9px] font-black uppercase tracking-widest italic rounded-xl border-neutral-200 dark:border-neutral-800">
               <Upload className="w-3.5 h-3.5 mr-2" />
               Add Documentation
            </Button>
         </div>
      </div>

      {/* 1. REVIEW HEADER */}
      <section className="bg-white dark:bg-neutral-900 rounded-[48px] p-10 border border-border shadow-3xl relative overflow-hidden group">
         <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[140%] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-orange-500/10 transition-all duration-1000" />
         
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10 leading-none">
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <h1 className="text-4xl font-black italic tracking-tighter uppercase">{review.applicant_name}</h1>
                  <Badge className="bg-neutral-900 text-white dark:bg-white dark:text-black border-none text-[10px] font-black uppercase italic tracking-widest px-4 h-6">
                     {review.id.split('-')[0]}
                  </Badge>
               </div>
               <div className="flex flex-wrap gap-6 text-muted-foreground text-[10px] font-black uppercase tracking-widest italic leading-none font-bold">
                  <div className="flex items-center gap-2"><Briefcase className="w-3.5 h-3.5" /> {review.customer_type}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Submitted: {new Date(review.created_at).toLocaleDateString()}</div>
                  <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> {review.application_reference || 'No reference'}</div>
               </div>
               <div className="flex items-center gap-3">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase italic tracking-widest ${
                    review.status === 'approved' ? 'bg-brand-lime/10 border-brand-lime/20 text-brand-lime' : review.status === 'rejected' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'
                  }`}>
                     <Clock className="w-3.5 h-3.5" /> {review.status}
                  </div>
                  <span className="text-muted-foreground/40 text-[10px] font-black uppercase italic tracking-[0.3em]">Lifecycle Step: Initial Vetting</span>
               </div>
            </div>
            
            <div className="flex flex-col lg:items-end gap-3 font-bold italic font-black">
               <div className="px-8 py-5 bg-muted/30 border border-border/50 rounded-3xl text-right">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground italic mb-2">Assigned Reviewer</div>
                  <div className="flex items-center gap-3 justify-end leading-none">
                     <span className="text-[17px] font-black italic">{review.assigned_to_user_id || "Unassigned"}</span>
                     <div className="w-10 h-10 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center font-bold">
                       {review.assigned_to_user_id ? review.assigned_to_user_id.substring(0, 2).toUpperCase() : "?"}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 italic font-black">
         <div className="xl:col-span-2 space-y-8 font-bold italic font-black uppercase leading-none">
            {/* 3. KYC DOCUMENTS & 4. SCREENING RESULTS TABS */}
            <Card className="rounded-[40px] border-border/50 shadow-2xl overflow-hidden font-bold italic">
               <Tabs defaultValue="kyc" className="w-full font-black italic">
                  <CardHeader className="p-10 border-b border-border/50 bg-white dark:bg-neutral-950 font-bold italic font-black h-32 leading-none flex items-center justify-center">
                     <div className="flex items-center justify-between w-full h-full">
                        <div>
                           <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Verification Matrix</CardTitle>
                           <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground">Aggregated identity and screening signals</CardDescription>
                        </div>
                        <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-10">
                           <TabsTrigger value="kyc" className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">KYC Documents</TabsTrigger>
                           <TabsTrigger value="screening" className="rounded-xl px-5 text-[9px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Screening Matches</TabsTrigger>
                        </TabsList>
                     </div>
                  </CardHeader>
                  <CardContent className="p-0">
                     <TabsContent value="kyc" className="m-0 p-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-none">
                           {kycDocs.map((doc, i) => (
                             <div key={doc.id || i} className="p-6 bg-muted/20 border border-border/50 rounded-3xl group hover:border-brand-lime transition-all cursor-pointer font-bold italic">
                                <div className="flex items-center justify-between mb-4">
                                   <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center border border-border shadow-sm text-neutral-400 group-hover:text-brand-lime transition-colors">
                                      <FileText className="w-5 h-5 shadow-sm" />
                                   </div>
                                   <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest ${
                                     doc.verification_status === 'verified' ? 'text-brand-lime border-brand-lime/20' : doc.verification_status === 'rejected' || doc.verification_status === 'failed' ? 'text-rose-500 border-rose-500/20' : 'text-orange-500 border-orange-500/20'
                                   }`}>
                                      {doc.verification_status || "Pending"}
                                   </Badge>
                                </div>
                                <div>
                                   <div className="text-[14px] font-black italic tracking-tighter text-neutral-900 dark:text-white">{doc.document_type || "Document"}</div>
                                   <div className="flex justify-between items-center mt-2 text-[9px] font-black uppercase italic text-muted-foreground whitespace-nowrap">
                                      <span>{(doc.id || "").split("-")[0]}</span>
                                      <span>N/A</span>
                                   </div>
                                </div>
                             </div>
                           ))}
                           {kycDocs.length === 0 && (
                             <div className="col-span-2 text-center text-slate-500 p-8">No documents uploaded.</div>
                           )}
                        </div>
                     </TabsContent>
                     <TabsContent value="screening" className="m-0 p-10 space-y-10 leading-none">
                        {screeningItems.length === 0 ? (
                          <p className="text-center text-slate-500">No screening results recorded.</p>
                        ) : screeningItems.map((scr, i) => {
                          const isClear = scr.result === 'clear';
                          const isMatch = scr.result === 'hit' || scr.result === 'match';
                          return (
                           <div key={i} className="flex gap-8 items-start last:mb-0 group font-bold italic font-black">
                              <div className={`w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 border ${
                                isMatch ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : isClear ? 'bg-brand-lime/10 border-brand-lime/20 text-brand-lime' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'
                              }`}>
                                 {isMatch ? <ShieldAlert className="w-6 h-6" /> : isClear ? <ShieldCheck className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                              </div>
                              <div className="flex-1 space-y-2">
                                 <div className="flex justify-between items-baseline">
                                    <div className="text-[15px] font-black italic tracking-tighter uppercase">{scr.category}</div>
                                    <Badge className={`${
                                      isMatch ? 'bg-rose-500' : isClear ? 'bg-brand-lime text-black shadow-[0_0_8px_#D1F701]' : 'bg-orange-500'
                                    } text-white text-[9px] font-black uppercase italic tracking-widest`}>
                                       {scr.result}
                                    </Badge>
                                 </div>
                              </div>
                           </div>
                          );
                        })}
                     </TabsContent>
                  </CardContent>
               </Tabs>
            </Card>

            {/* 5. RISK ASSESSMENT */}
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 space-y-12 bg-white font-bold italic font-black">
               <div className="flex items-start justify-between leading-none">
                  <div>
                     <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Initial Risk Evaluation</CardTitle>
                     <CardDescription className="text-[10px] font-black uppercase tracking-widest mt-2 italic text-muted-foreground leading-none">Dynamic scoring engine result based on ingestion pattern</CardDescription>
                  </div>
                  <div className="text-right">
                     <div className={`text-5xl font-black italic tracking-tighter leading-none ${riskTier === 'critical' || riskTier === 'high' ? 'text-rose-500' : 'text-emerald-500'}`}>
                       {riskScore != null ? Math.round(riskScore * 100) : "N/A"}<span className="text-lg text-muted-foreground/30">/100</span>
                     </div>
                     <Badge className={`${riskTier === 'critical' || riskTier === 'high' ? 'bg-rose-500' : 'bg-emerald-500'} text-white text-[10px] font-black uppercase tracking-widest mt-2 italic shadow-lg`}>{riskTier} RISK</Badge>
                  </div>
               </div>

               {(() => {
                 const factors = (reviewData.risk_results || []).flatMap((r) => r.risk_factors_json || []);
                 return factors.length > 0 && (
                   <div className="space-y-6 leading-none">
                      <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground leading-none">Primary Risk Factors</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {factors.map((factor, i) => (
                           <div key={i} className="flex items-center gap-4 p-5 bg-muted/20 border border-border/50 rounded-3xl group hover:bg-muted font-bold italic h-16 leading-none whitespace-nowrap">
                              <div className="w-8 h-8 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0">
                                 <ShieldAlert className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex-1">
                                 <div className="text-[12px] font-black italic uppercase tracking-tighter">{typeof factor === 'string' ? factor : JSON.stringify(factor)}</div>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                 );
               })()}
            </Card>

            {/* 6. DECISION WORKFLOW / REVIEWS */}
            <div className="space-y-6 font-bold italic font-black uppercase leading-none">
               <h4 className="text-[11px] font-black uppercase tracking-widest px-4 italic underline underline-offset-8 decoration-border">Collaboration & Decision History</h4>
               <div className="space-y-4 font-bold italic font-black uppercase leading-none">
                  {notes.map((note, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 bg-white dark:bg-neutral-900 border border-border/50 rounded-[32px] hover:shadow-xl transition-all font-bold italic leading-none h-32 uppercase font-black whitespace-nowrap">
                       <div className="w-12 h-12 rounded-[20px] bg-muted flex items-center justify-center shrink-0 border border-border h-12 font-bold font-black">
                          {note.author_user_id ? note.author_user_id.substring(0, 1).toUpperCase() : "S"}
                       </div>
                       <div className="flex-1 space-y-2 font-bold italic leading-none h-20 h-full font-black uppercase">
                          <div className="flex justify-between items-baseline font-black leading-none h-5">
                             <div className="text-[13px] font-bold italic tracking-tighter uppercase whitespace-nowrap h-4 font-black">{note.author_user_id || 'System'}</div>
                             <span className="text-[8px] font-black italic text-muted-foreground uppercase opacity-40">{new Date(note.created_at).toLocaleString()}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed italic uppercase font-black whitespace-normal line-clamp-2 h-10">{note.body}</p>
                       </div>
                    </div>
                  ))}
                  {notes.length === 0 && (
                    <div className="text-center p-8 text-slate-500">No notes or collaboration history.</div>
                  )}
               </div>
            </div>
         </div>

         <div className="space-y-8 font-bold italic font-black">
            {/* 2. CUSTOMER INFO SIDEBAR */}
            <Card className="rounded-[40px] border-border/50 shadow-2xl p-10 font-bold italic font-black">
               <CardHeader className="p-0 mb-10">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Operational Profile</CardTitle>
               </CardHeader>
               <CardContent className="p-0 space-y-8">
                  <div className="space-y-6">
                     {[
                       { l: "Email", v: review.applicant_email || "Not provided" },
                       { l: "Phone", v: review.applicant_phone || "Not provided" },
                       { l: "Onboarding Channel", v: review.onboarding_channel || "Unknown" },
                       { l: "KYC Status", v: review.kyc_status },
                       { l: "Auto-Review", v: review.auto_review ? "Yes" : "No" },
                     ].map((info, i) => (
                       <div key={i} className="space-y-1">
                          <div className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground italic mb-1 h-3">{info.l}</div>
                          <div className="text-[13px] font-black italic tracking-tighter h-5">{info.v}</div>
                       </div>
                     ))}
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="flex flex-col gap-3">
                     <Button className="w-full h-11 bg-neutral-900 text-white rounded-2xl text-[10px] font-black uppercase italic tracking-widest hover:scale-[1.03] transition-all font-bold font-black">
                        View Full Entity Profile <ExternalLink className="w-3.5 h-3.5 ml-2" />
                     </Button>
                     <Button variant="outline" className="w-full h-11 rounded-2xl text-[10px] font-black uppercase italic tracking-widest border-border italic font-bold">
                        Linked Account Graph
                     </Button>
                  </div>
               </CardContent>
            </Card>

            {/* 7. ACTIONS PANEL */}
            <Card className="rounded-[40px] border-border shadow-3xl p-10 space-y-8 bg-neutral-900 text-white font-bold italic font-black">
               <div className="space-y-2">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Final Resolution</h4>
                  <p className="text-white/30 text-[9px] font-black uppercase italic tracking-widest leading-relaxed">Decision cycle remains open. Authorization required for state commit.</p>
               </div>
               
               <div className="space-y-3 font-bold italic font-black uppercase">
                  <Button disabled={actionBusy || !canApprove} onClick={() => setPendingAction("approve")} className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] hover:bg-brand-lime/90 active:scale-95 transition-all shadow-xl shadow-brand-lime/10 font-bold font-black disabled:opacity-50">
                     <ShieldCheck className="w-4 h-4 mr-2" />
                     Approve Onboarding
                  </Button>
                  <Button disabled={actionBusy || !canReject} onClick={() => setPendingAction("reject")} className="w-full h-14 bg-rose-500 text-white rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-rose-500/20 font-bold font-black disabled:opacity-50">
                     <XCircle className="w-4 h-4 mr-2" />
                     Reject Application
                  </Button>
                  <Button disabled={actionBusy || !canEscalate} onClick={() => setPendingAction("escalate")} variant="outline" className="w-full h-14 rounded-3xl border-white/10 bg-white/5 text-white text-[11px] font-black uppercase italic hover:bg-white/10 transition-all font-bold font-black disabled:opacity-50">
                     <AlertTriangle className="w-4 h-4 mr-2 text-indigo-400" />
                     Escalate to EDD
                  </Button>
                  {actionError && <p className="text-[10px] text-rose-400 uppercase tracking-widest italic">{actionError}</p>}
               </div>
            </Card>

            {/* 8. AUDIT LOG MINI */}
            <div className="p-8 bg-muted/20 border border-border/50 rounded-[40px] space-y-6 font-bold italic font-black uppercase">
               <div className="flex items-center justify-between h-5">
                  <span className="text-[10px] font-black uppercase italic tracking-widest whitespace-nowrap">Audit Trail</span>
                  <Link href="/dashboard/audit" className="text-[9px] font-black italic text-indigo-500 underline underline-offset-4">Full History</Link>
               </div>
               <div className="space-y-4 font-bold italic font-black uppercase">
                  <div className="flex justify-between items-center text-[10px] font-black italic h-4 leading-none whitespace-nowrap">
                     <span className="text-neutral-900 group-hover:text-brand-lime transition-all h-3 leading-none h-full">Application Created</span>
                     <span className="text-muted-foreground/40 text-[8px] h-3 leading-none h-full">{new Date(review.created_at).toLocaleDateString()}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <Dialog open={pendingAction !== null} onOpenChange={(open) => { if (!open) { setPendingAction(null); setActionReason(""); setActionError(null); } }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {pendingAction === "approve" ? "Approve Onboarding" : pendingAction === "reject" ? "Reject Application" : "Escalate to EDD"}
            </DialogTitle>
            <DialogDescription>
              This decision is audited.{(pendingAction === "reject" || pendingAction === "escalate") ? " A reason is required." : " Reason is optional."}
            </DialogDescription>
          </DialogHeader>
          <textarea
            value={actionReason}
            onChange={(e) => setActionReason(e.target.value)}
            placeholder="Reason"
            className="w-full min-h-20 rounded-md border border-slate-200 p-3 text-sm"
          />
          {actionError && <p className="text-xs text-red-600">{actionError}</p>}
          <DialogFooter>
            <Button variant="outline" onClick={() => { setPendingAction(null); setActionReason(""); }}>Cancel</Button>
            <Button
              disabled={actionBusy || ((pendingAction === "reject" || pendingAction === "escalate") && !actionReason.trim())}
              onClick={() => void handleConfirmAction()}
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              {actionBusy ? "Submitting..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
