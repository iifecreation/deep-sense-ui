"use client";

import React from "react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  ShieldAlert, 
  FileText, 
  MoreHorizontal, 
  Workflow, 
  ChevronRight, 
  ArrowRight, 
  Download, 
  Users, 
  Settings, 
  Briefcase, 
  MessageSquare,
  Zap,
  ExternalLink,
  Search,
  Fingerprint,
  Calendar,
  Globe,
  Upload,
  MoreVertical,
  Check
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

export default function OnboardingReviewDetailPage() {
  const params = useParams();
  const reviewId = params.reviewId as string;

  // Mock data for the specific onboarding review
  const review = {
    id: reviewId,
    name: "Global Trade Solutions Ltd",
    type: "Institutional (KYB)",
    status: "Pending Review",
    riskLevel: "HIGH",
    riskScore: 78,
    submittedAt: "Oct 15, 2026 • 09:22 AM",
    assignedTo: "Sarah Jenkins",
    customerDetails: {
      registration: "BVI-99021-X",
      jurisdiction: "British Virgin Islands",
      industry: "Import/Export Logistics",
      website: "globaltrade.bvi",
      email: "compliance@globaltrade.bvi"
    },
    kycStatus: "Partial Mismatch",
    screeningStatus: "Action Required"
  };

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
                  <h1 className="text-4xl font-black italic tracking-tighter uppercase">{review.name}</h1>
                  <Badge className="bg-neutral-900 text-white dark:bg-white dark:text-black border-none text-[10px] font-black uppercase italic tracking-widest px-4 h-6">
                     {review.id}
                  </Badge>
               </div>
               <div className="flex flex-wrap gap-6 text-muted-foreground text-[10px] font-black uppercase tracking-widest italic leading-none font-bold">
                  <div className="flex items-center gap-2"><Briefcase className="w-3.5 h-3.5" /> {review.type}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Submitted: {review.submittedAt}</div>
                  <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> {review.customerDetails.jurisdiction}</div>
               </div>
               <div className="flex items-center gap-3">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase italic tracking-widest ${
                    review.status === 'Approved' ? 'bg-brand-lime/10 border-brand-lime/20 text-brand-lime' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'
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
                     <span className="text-[17px] font-black italic">{review.assignedTo}</span>
                     <div className="w-10 h-10 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center font-bold">SJ</div>
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
                           {[
                             { name: "Certificate of Incorporation", status: "Verified", id: "BVI-DOC-882", size: "2.4 MB" },
                             { name: "Articles of Association", status: "Review", id: "BVI-DOC-110", size: "4.1 MB" },
                             { name: "Register of Directors", status: "Mismatch", id: "BVI-DOC-442", size: "0.8 MB" },
                             { name: "Proof of Address (Utility)", status: "Verified", id: "POA-9921", size: "1.2 MB" },
                           ].map((doc, i) => (
                             <div key={i} className="p-6 bg-muted/20 border border-border/50 rounded-3xl group hover:border-brand-lime transition-all cursor-pointer font-bold italic">
                                <div className="flex items-center justify-between mb-4">
                                   <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center border border-border shadow-sm text-neutral-400 group-hover:text-brand-lime transition-colors">
                                      <FileText className="w-5 h-5 shadow-sm" />
                                   </div>
                                   <Badge variant="outline" className={`text-[8px] font-black uppercase italic tracking-widest ${
                                     doc.status === 'Verified' ? 'text-brand-lime border-brand-lime/20' : doc.status === 'Mismatch' ? 'text-rose-500 border-rose-500/20' : 'text-orange-500 border-orange-500/20'
                                   }`}>
                                      {doc.status}
                                   </Badge>
                                </div>
                                <div>
                                   <div className="text-[14px] font-black italic tracking-tighter text-neutral-900 dark:text-white">{doc.name}</div>
                                   <div className="flex justify-between items-center mt-2 text-[9px] font-black uppercase italic text-muted-foreground whitespace-nowrap">
                                      <span>{doc.id}</span>
                                      <span>{doc.size}</span>
                                   </div>
                                </div>
                             </div>
                           ))}
                        </div>
                        <div className="p-6 bg-rose-500/5 border border-rose-500/10 rounded-3xl flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <AlertTriangle className="w-5 h-5 text-rose-500" />
                              <div>
                                 <div className="text-[11px] font-black text-rose-500 italic uppercase">Partial Mismatch Detected</div>
                                 <div className="text-[9px] text-rose-500/60 font-black italic mt-1 leading-none uppercase">Director "John Sterling" does not match BVI business registry for ID-9982.</div>
                              </div>
                           </div>
                           <Button className="h-8 bg-rose-500 text-white rounded-xl text-[9px] font-black italic uppercase italic">Request Re-Upload</Button>
                        </div>
                     </TabsContent>
                     <TabsContent value="screening" className="m-0 p-10 space-y-10 leading-none">
                        {[
                          { category: "Sanctions", result: "Clear", score: 0, details: "No matches found across global lists." },
                          { category: "PEP", result: "Match Detected", score: 94, details: "UBO 'Elena Volkov' matches Level 1 PEP (Political Entity Russian Federation)." },
                          { category: "Adverse Media", result: "Warning", score: 42, details: "Minor mention in BVI financial journal regarding late tax filings (2022)." },
                        ].map((scr, i) => (
                           <div key={i} className="flex gap-8 items-start last:mb-0 group font-bold italic font-black">
                              <div className={`w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 border ${
                                scr.result === 'Match Detected' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' : scr.result === 'Warning' ? 'bg-orange-500/10 border-orange-500/20 text-orange-500' : 'bg-brand-lime/10 border-brand-lime/20 text-brand-lime'
                              }`}>
                                 {scr.result === 'Match Detected' ? <ShieldAlert className="w-6 h-6" /> : scr.result === 'Warning' ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                              </div>
                              <div className="flex-1 space-y-2">
                                 <div className="flex justify-between items-baseline">
                                    <div className="text-[15px] font-black italic tracking-tighter uppercase">{scr.category}</div>
                                    <Badge className={`${
                                      scr.result === 'Match Detected' ? 'bg-rose-500' : scr.result === 'Warning' ? 'bg-orange-500' : 'bg-brand-lime text-black shadow-[0_0_8px_#D1F701]'
                                    } text-white text-[9px] font-black uppercase italic tracking-widest`}>
                                       {scr.result === 'Match Detected' ? `${scr.score}% Confidence` : scr.result}
                                    </Badge>
                                 </div>
                                 <p className="text-[11px] text-muted-foreground leading-relaxed italic uppercase font-black">{scr.details}</p>
                                 {scr.result !== 'Clear' && (
                                   <div className="flex gap-3 pt-2">
                                      <Link href="#" className="text-[9px] font-black uppercase italic tracking-widest text-indigo-500 hover:underline">Open Match Detail</Link>
                                      <span className="text-muted-foreground/20 italic">|</span>
                                      <Link href="#" className="text-[9px] font-black uppercase italic tracking-widest text-muted-foreground hover:text-neutral-900">Dismiss as False Positive</Link>
                                   </div>
                                 )}
                              </div>
                           </div>
                        ))}
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
                     <div className="text-5xl font-black italic tracking-tighter text-rose-500 leading-none">{review.riskScore}<span className="text-lg text-muted-foreground/30">/100</span></div>
                     <Badge className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest mt-2 italic shadow-lg shadow-rose-500/20">HIGH RISK</Badge>
                  </div>
               </div>

               <div className="space-y-6 leading-none">
                  <h5 className="text-[11px] font-black uppercase italic tracking-widest text-muted-foreground leading-none">Primary Risk Factors</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                       { f: "Jurisdiction: BVI (High Opacity)", s: "Critical", icon: <Globe className="text-rose-500" /> },
                       { f: "UBO: PEP Match (Level 1)", s: "Critical", icon: <Fingerprint className="text-rose-500" /> },
                       { f: "Identity: Document Mismatch", s: "Warning", icon: <AlertTriangle className="text-orange-500" /> },
                       { f: "Industry: High-Cash Potential", s: "Notice", icon: <Zap className="text-indigo-500" /> },
                     ].map((factor, i) => (
                       <div key={i} className="flex items-center gap-4 p-5 bg-muted/20 border border-border/50 rounded-3xl group hover:bg-muted font-bold italic h-16 leading-none whitespace-nowrap">
                          <div className="w-8 h-8 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center shrink-0">
                             {React.cloneElement(factor.icon as React.elements, { className: "w-3.5 h-3.5" })}
                          </div>
                          <div className="flex-1">
                             <div className="text-[12px] font-black italic uppercase tracking-tighter">{factor.f}</div>
                             <div className="text-[8px] font-black uppercase italic text-muted-foreground mt-1 opacity-40">{factor.s} Severity Influence</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-neutral-900 rounded-[32px] p-8 text-white relative overflow-hidden font-bold italic leading-none whitespace-nowrap">
                  <div className="absolute right-[-5%] top-[-10%] w-[30%] h-[120%] bg-brand-lime/10 blur-[60px] rounded-full pointer-events-none" />
                  <div className="flex items-center justify-between relative z-10 leading-none h-10">
                     <div className="flex items-center gap-4">
                        <Settings className="w-6 h-6 text-brand-lime animate-spin-slow" />
                        <div>
                           <div className="text-[11px] font-black italic uppercase tracking-widest">Automation Policy Check</div>
                           <div className="text-[9px] text-white/40 italic mt-1 leading-none">Policy ID: ONB-AUTO-ALPHA-01</div>
                        </div>
                     </div>
                     <Badge className="bg-white/10 text-white border-white/20 text-[9px] font-black italic">AUTO-REJECT OVERRIDDEN</Badge>
                  </div>
               </div>
            </Card>

            {/* 6. DECISION WORKFLOW / REVIEWS */}
            <div className="space-y-6 font-bold italic font-black uppercase leading-none">
               <h4 className="text-[11px] font-black uppercase tracking-widest px-4 italic underline underline-offset-8 decoration-border">Collaboration & Decision History</h4>
               <div className="space-y-4 font-bold italic font-black uppercase leading-none">
                  {[
                    { u: "Sarah Jenkins", a: "Added internal note", d: "Escalating for EDD due to PEP Russian Federation match. Need to verify source of wealth artifacts.", t: "2h ago" },
                    { u: "System Security", a: "Automated Check Triggered", d: "Sanctions list sync complete. No hits found on company entity name.", t: "5h ago" },
                    { u: "John Doe (Customer)", a: "Application Modified", d: "Customer updated UBO list and uploaded Proof of Address documents.", t: "Yesterday" },
                  ].map((note, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 bg-white dark:bg-neutral-900 border border-border/50 rounded-[32px] hover:shadow-xl transition-all font-bold italic leading-none h-32 uppercase font-black whitespace-nowrap">
                       <div className="w-12 h-12 rounded-[20px] bg-muted flex items-center justify-center shrink-0 border border-border h-12 font-bold font-black">
                          {note.u[0]}
                       </div>
                       <div className="flex-1 space-y-2 font-bold italic leading-none h-20 h-full font-black uppercase">
                          <div className="flex justify-between items-baseline font-black leading-none h-5">
                             <div className="text-[13px] font-bold italic tracking-tighter uppercase whitespace-nowrap h-4 font-black">{note.u} <span className="text-[9px] text-muted-foreground/40 normal-case ml-2">{note.a}</span></div>
                             <span className="text-[8px] font-black italic text-muted-foreground uppercase opacity-40">{note.t}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed italic uppercase font-black whitespace-normal line-clamp-2 h-10">{note.d}</p>
                       </div>
                    </div>
                  ))}
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
                       { l: "Jurisdiction", v: review.customerDetails.jurisdiction },
                       { l: "Registration #", v: review.customerDetails.registration },
                       { l: "Primary Industry", v: review.customerDetails.industry },
                       { l: "Domain", v: review.customerDetails.website },
                       { l: "Compliance Contact", v: review.customerDetails.email },
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
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] hover:bg-brand-lime/90 active:scale-95 transition-all shadow-xl shadow-brand-lime/10 font-bold font-black">
                     <ShieldCheck className="w-4 h-4 mr-2" />
                     Approve Onboarding
                  </Button>
                  <Button className="w-full h-14 bg-rose-500 text-white rounded-3xl text-[11px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-rose-500/20 font-bold font-black">
                     <XCircle className="w-4 h-4 mr-2" />
                     Reject Application
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-3xl border-white/10 bg-white/5 text-white text-[11px] font-black uppercase italic hover:bg-white/10 transition-all font-bold font-black h-14 font-bold">
                     <AlertTriangle className="w-4 h-4 mr-2 text-indigo-400" />
                     Escalate to EDD
                  </Button>
               </div>
               
               <Separator className="bg-white/5 h-1 font-bold" />
               
               <div className="flex flex-col gap-3 font-bold italic font-black">
                  <button className="flex items-center justify-between text-[10px] uppercase italic tracking-widest text-white/40 hover:text-white transition-colors h-10 px-4 rounded-xl hover:bg-white/5">
                     Request Document Refresh <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="flex items-center justify-between text-[10px] uppercase italic tracking-widest text-white/40 hover:text-white transition-colors h-10 px-4 rounded-xl hover:bg-white/5">
                     Assign to New Reviewer <Users className="w-3.5 h-3.5" />
                  </button>
               </div>
            </Card>

            {/* 8. AUDIT LOG MINI */}
            <div className="p-8 bg-muted/20 border border-border/50 rounded-[40px] space-y-6 font-bold italic font-black uppercase">
               <div className="flex items-center justify-between h-5">
                  <span className="text-[10px] font-black uppercase italic tracking-widest whitespace-nowrap">Audit Trail</span>
                  <Link href="/dashboard/audit" className="text-[9px] font-black italic text-indigo-500 underline underline-offset-4">Full History</Link>
               </div>
               <div className="space-y-4 font-bold italic font-black uppercase">
                  {[
                    { e: "Application Ingested", t: "Oct 15, 09:22" },
                    { e: "Auto-Screening Run", t: "Oct 15, 09:23" },
                    { e: "Assignment to SJ", t: "Oct 15, 10:44" },
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-black italic h-4 leading-none whitespace-nowrap">
                       <span className="text-neutral-900 group-hover:text-brand-lime transition-all h-3 leading-none h-full">{log.e}</span>
                       <span className="text-muted-foreground/40 text-[8px] h-3 leading-none h-full">{log.t}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

