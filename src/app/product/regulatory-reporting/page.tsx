"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Shield, 
  Zap, 
  Activity, 
  Cpu, 
  Database, 
  ArrowRight,
  TrendingUp,
  Lock,
  CheckCircle2,
  LineChart,
  BarChart3,
  Network,
  Fingerprint,
  AlertTriangle,
  Globe,
  FileCheck,
  Layers,
  Terminal,
  ChevronDown,
  ChevronUp,
  Server,
  HelpCircle,
  Send,
  Smartphone,
  Eye,
  Users,
  BookOpen,
  Briefcase,
  Building2,
  ShoppingBag,
  Wallet,
  History,
  TrendingDown,
  Clock,
  FileSpreadsheet,
  FileText,
  Search,
  RefreshCw,
  Scale
} from "lucide-react";

export default function RegulatoryReportingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Report Builder Simulator states
  const [validationRun, setValidationRun] = useState<boolean>(false);
  const [xmlRendered, setXmlRendered] = useState<boolean>(false);
  const [evidenceCount, setEvidenceCount] = useState<number>(2);
  const [reportStatus, setReportStatus] = useState<string>("DRAFT");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleTriggerValidation = () => {
    setValidationRun(true);
    setEvidenceCount(6);
    setReportStatus("READY_TO_EXPORT");
  };

  const handleExportXML = () => {
    setXmlRendered(true);
    setReportStatus("SUBMITTED_TO_REGULATOR (SFTP sync active)");
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <FileText className="w-3.5 h-3.5 text-lime-400" />
                Regulatory Reporting & Compliance Evidence
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Turn Investigations Into <br />
                <span className="text-zinc-400">Audit-Ready Regulatory Reports.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps compliance teams generate SAR, STR, CTR, AML reports, evidence packs, approval workflows, and regulator-ready exports directly from real cases, transactions, screening matches, and analyst notes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore AML Monitoring
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, payment companies, crypto platforms, lenders, telecom wallets, and regulated financial institutions.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Regulatory Reporting Workflow Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">DRAFT SAR BUILDER & EVIDENCE PACKAGER</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">STATUS: {reportStatus}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Draft checklist */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Report Draft Checklist</span>
                    
                    <div className="space-y-3 font-mono text-[10px] text-zinc-400">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span>Mandatory Onboarding Fields</span>
                        <span className="text-brand-lime font-bold">PASSED</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span>Transaction Ledger Match</span>
                        <span className="text-brand-lime font-bold">PASSED</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span>Evidence Bundle completeness</span>
                        <span className={validationRun ? "text-brand-lime font-bold" : "text-amber-400 font-bold"}>
                          {evidenceCount}/6 Attached
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button 
                        onClick={handleTriggerValidation}
                        className="w-full py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center"
                      >
                        Auto-Attach Evidence Checklist
                      </button>
                      <button 
                        onClick={handleExportXML}
                        disabled={!validationRun}
                        className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center ${
                          validationRun 
                            ? "bg-brand-lime text-neutral-900 hover:bg-brand-lime/90 cursor-pointer" 
                            : "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed"
                        }`}
                      >
                        Sign & Package XML Report
                      </button>
                    </div>
                  </div>

                  {/* Right Column: XML Preview log */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>XML / PDF GENERATOR PREVIEW</span>
                        <span>FORMAT: FinCEN_SAR_v2.1</span>
                      </div>

                      <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-[9px] text-zinc-400 space-y-2 max-h-[180px] overflow-y-auto">
                        {xmlRendered ? (
                          <>
                            <p className="text-brand-lime">{"<SuspiciousActivityReport xmlns=\"http://www.fincen.gov/sar\">"}</p>
                            <p className="pl-4 text-zinc-500">{"<FilingInstitutionId>DEEPSENSE_SYS_99182</FilingInstitutionId>"}</p>
                            <p className="pl-4 text-zinc-500">{"<Narrative>Subject Alexander Smirnov initiated multiple fast-paced smurfing transactions aggregate exceeding CTR limits...</Narrative>"}</p>
                            <p className="pl-4 text-zinc-500">{"<EvidenceHash>SHA256:d8a9e712c908f902b3...</EvidenceHash>"}</p>
                            <p className="text-brand-lime">{"</SuspiciousActivityReport>"}</p>
                          </>
                        ) : (
                          <p className="text-zinc-600 italic">{"[System idle - click 'Sign & Package XML Report' to render structured compliance outputs]"}</p>
                        )}
                      </div>
                    </div>

                    <div className="text-[10px] text-zinc-500 pt-6 border-t border-white/5 mt-6 flex justify-between">
                      <span>Audit: {xmlRendered ? "SFTP_SUBMITTED (Regulator code: 200)" : "WAITING_FOR_SIGNATURE"}</span>
                      <span>XML hash verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Filing Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Regulatory Reporting Is Too Manual, Slow, and Evidence-Heavy.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Suspicious activity reporting requires accurate narratives, transaction evidence, analyst notes, supporting documents, screening results, and audit history. When reporting is disconnected from investigations, compliance teams lose time and increase regulatory risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Manual Report Preparation", desc: "Compliance teams often copy information from cases, spreadsheets, transaction systems, and screening tools into report templates manually.", icon: <FileText /> },
                { title: "Missing Evidence", desc: "Reports may lack complete transaction history, graph context, screening evidence, analyst notes, or decision history.", icon: <AlertTriangle /> },
                { title: "Approval Bottlenecks", desc: "Internal review and approval workflows are often handled outside the reporting system.", icon: <Lock /> },
                { title: "Submission Risk", desc: "Inconsistent reporting formats, missing fields, and weak validation increase filing risk.", icon: <FileCheck /> },
                { title: "Weak Audit Trails", desc: "Organizations need to show who reviewed, approved, changed, exported, or submitted each report.", icon: <Scale /> },
                { title: "Regulatory Deadlines", desc: "Slow workflows make it harder to meet reporting timelines and internal compliance obligations.", icon: <Clock /> }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                    {prob.icon}
                  </div>
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE REPORTING SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Structured Reporting</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Generate Regulatory Reports From Real Investigation Evidence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense connects alerts, cases, transactions, graph evidence, AML screening, analyst notes, customer risk profiles, and supporting documents into structured regulatory reporting workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "SAR / STR Workflows", desc: "Create suspicious activity or suspicious transaction reports from AML and fraud investigations." },
                { title: "CTR Workflows", desc: "Support currency transaction report workflows where large cash or reportable activity thresholds apply." },
                { title: "Evidence Packaging", desc: "Automatically attach transactions, customer profiles, screening matches, graph relationships, notes, and documents." },
                { title: "Report Validation", desc: "Check required fields, missing evidence, narrative completeness, and workflow readiness before export or submission." },
                { title: "Approval Routing", desc: "Route reports through analyst, compliance officer, MLRO, or senior reviewer approval paths." },
                { title: "Export & Submission Tracking", desc: "Generate XML, PDF, JSON, or CSV exports and track manual or configured submission status." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: REPORT TYPES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Report Formats</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Support Key Financial Crime Reporting Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports the regulatory report workflows that financial crime teams rely on for suspicious activity, transaction thresholds, and compliance evidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Suspicious Activity Report", desc: "Generate SAR-style reports from fraud, AML, sanctions, PEP, mule, scam, or suspicious customer behavior cases." },
                { title: "Suspicious Transaction Report", desc: "Generate STR-style reports for suspicious payment patterns, transfers, wallet activity, or high-risk counterparties." },
                { title: "Currency Transaction Report", desc: "Support CTR-style reporting workflows for threshold-based cash or reportable transaction activity." },
                { title: "AML Investigation Summary", desc: "Create internal investigation summaries for compliance review, governance, and audit purposes." },
                { title: "Customer Risk Review Report", desc: "Generate periodic customer risk review reports with KYC, AML, PEP, adverse media, and transaction history." },
                { title: "Compliance Evidence Pack", desc: "Bundle case evidence, analyst decisions, audit logs, screening matches, and supporting documents." }
              ].map((rep, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">REPORT {idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{rep.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{rep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CASE-TO-REPORT WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Filing pipeline</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Move From Alert to Report Without Losing Context.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense keeps reporting connected to the investigation that created it, preserving evidence context and decision history.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "1. Alert or Case Created", desc: "Suspicious activity, AML signals, screening matches, fraud events, or graph intelligence create a case." },
                { title: "2. Evidence Collected", desc: "Transactions, customer profiles, graph relationships, documents, screening results, and analyst notes are attached." },
                { title: "3. Report Drafted", desc: "DeepSense creates a report draft populated with case details and supporting evidence." },
                { title: "4. Narrative Completed", desc: "Analysts add or refine suspicious activity descriptions, rationale, and summaries." },
                { title: "5. Validation Run", desc: "Required fields, missing evidence, date ranges, and export readiness are checked." },
                { title: "6. Approval Workflow", desc: "The report is routed to reviewers or compliance officers for approval." },
                { title: "7. Export or Submission", desc: "Reports can be exported or submitted through configured channels where available." },
                { title: "8. Audit Trail Stored", desc: "Every report action, edit, approval, export, and submission attempt is recorded." }
              ].map((step, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: EVIDENCE PACKAGING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Evidence packaging</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Attach the Evidence Regulators and Auditors Expect.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Strong regulatory reporting depends on complete, traceable, and defensible evidence. DeepSense packages the context behind every report.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Transaction Evidence", desc: "Include relevant payments, transfers, withdrawals, deposits, wallet movements, and suspicious transaction patterns." },
                { title: "Screening Evidence", desc: "Attach sanctions, PEP, adverse media, watchlist, and high-risk country findings." },
                { title: "Graph Evidence", desc: "Include mule networks, shared beneficiaries, linked accounts, fraud rings, and relationship paths." },
                { title: "Customer Evidence", desc: "Attach KYC records, risk profile history, onboarding data, documents, and customer risk tier changes." },
                { title: "Analyst Evidence", desc: "Preserve notes, review decisions, escalation history, case comments, and investigation outcomes." },
                { title: "System Evidence", desc: "Include triggered rules, risk scores, reason codes, audit logs, and decision history." }
              ].map((ev, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ev.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: NARRATIVE BUILDER ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Analyst Narratives</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Create Clear Suspicious Activity Narratives.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps analysts turn investigation evidence into clear narratives that explain why activity was suspicious and what action was taken.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Structured Templates", desc: "Use report templates tailored to suspicious activity, transaction monitoring, AML cases, scam activity, mule networks, and sanctions exposure." },
                { title: "Evidence References", desc: "Link narrative sections directly to transactions, cases, graph paths, screening hits, and analyst findings." },
                { title: "Timeline Reconstruction", desc: "Build narratives around chronological event sequences." },
                { title: "Reviewer Comments", desc: "Allow reviewers to comment, request changes, and approve final text." },
                { title: "Version History", desc: "Track edits and changes across report drafts." },
                { title: "Completeness Checks", desc: "Flag missing details, unclear descriptions, or incomplete evidence before approval." }
              ].map((narr, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{narr.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{narr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: XML, PDF & EXPORT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Structured Export</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Generate Structured Reports and Evidence Exports.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports structured report generation and export workflows so compliance teams can produce regulator-ready or audit-ready files.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "XML Format support", desc: "Generate structured XML exports where supported by the configured regulatory provider." },
                { title: "PDF Report summary", desc: "Generate human-readable regulatory reports, internal summaries, and evidence packets." },
                { title: "JSON Influx exports", desc: "Export structured report data for system-to-system integrations or internal archives." },
                { title: "CSV Data tables", desc: "Export transaction tables, match records, and evidence summaries." },
                { title: "Evidence Bundles", desc: "Package report files, supporting data, attachments, and audit records together." },
                { title: "Manual Filing mode", desc: "Support manual filing workflows when direct regulator submission is not configured." }
              ].map((exp, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{exp.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: SUBMISSION TRACKING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Tracking gateway</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Track Report Submission Status and Outcomes.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Where submission gateways are configured, DeepSense tracks submission attempts, responses, failures, references, and status changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Submission Attempts logs", desc: "Record every submission attempt with method, provider, status, timestamp, and response metadata." },
                { title: "Status Lifecycle tracker", desc: "Track draft, ready, submitted, accepted, rejected, failed, and manually filed statuses." },
                { title: "Provider Transport keys", desc: "Support configured HTTPS or SFTP transport where provider credentials and certificates are available." },
                { title: "Manual Submission Mode", desc: "If direct submission is unavailable, clearly mark reports as ready for manual submission." },
                { title: "Failure Handling logs", desc: "Record errors, retries, and failed submission details honestly without faking success." },
                { title: "External References storage", desc: "Store regulator reference tokens only when returned by real configured channels." }
              ].map((sub, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sub.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: APPROVAL & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Governance Controls</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Govern High-Stakes Reporting Workflows.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides controls for reviewing, approving, exporting, and submitting reports in regulated environments.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Role-Based Approvals", desc: "Control who can draft, edit, approve, export, or submit reports." },
                    { title: "Segregation of Duties", desc: "Enforce separate analyst drafting and officer signing phases." },
                    { title: "Version Control registries", desc: "Capture narrative iterations and edits before final submissions." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{feat.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Workflow Stage tracker */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">Filing Sign-Off Gate</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Compliance Officer Sign</span>
                      <span className="text-brand-lime font-bold">APPROVED</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Filing Hash Code</span>
                      <span className="text-white">SHA256: 9b2d83a1f7c...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: COMPLIANCE REPORTING PACKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Beyond SAR/STR</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Go Beyond SAR and STR With Enterprise Compliance Reports.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense can support broader compliance reporting workflows by connecting cases, controls, DLP findings, GRC frameworks, risk signals, and audit evidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AML Program Report", desc: "Summarize suspicious activity alerts, cases, typologies, customer risk, and reporting outcomes." },
                { title: "Fraud Risk Report", desc: "Track fraud trends, losses prevented, chargebacks, APP scams, ATO, and payment abuse." },
                { title: "GRC Control Report", desc: "Report control status, failed tests, evidence collection, attestations, and remediation plans." },
                { title: "DLP Incident Report", desc: "Summarize sensitive data exposure, exfiltration events, classifier findings, and resolution status." },
                { title: "Third-Party Risk Report", desc: "Report vendor risk, procurement findings, sanctions exposure, adverse media, and questionnaire status." },
                { title: "Executive Risk Summary", desc: "Provide leadership with cross-domain risk exposure, open issues, and emerging threat trends." }
              ].map((pack, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{pack.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{pack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Inbound</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Reporting Connected to AML, Fraud, KYC, Graph, and GRC.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense reporting is connected to the same data and evidence used across the platform, reducing manual work and improving accuracy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AML Monitoring links", desc: "Suspicious activity and transaction monitoring cases can generate reports automatically." },
                { title: "Fraud Detection details", desc: "Fraud cases can feed internal fraud reports, evidence packs, and escalation summaries." },
                { title: "KYC & Document Fraud context", desc: "Customer due diligence and document evidence can support regulatory reviews." },
                { title: "Graph Intelligence attachments", desc: "Fraud rings, mule networks, and relationship evidence can be attached to reports." },
                { title: "GRC & Controls data", desc: "Control findings, attestations, and compliance evidence can populate governance reports." },
                { title: "Case Management tracking", desc: "Reports remain linked to cases, analyst notes, evidence, and audit history." }
              ].map((int, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: COMPLIANCE OPERATIONS DASHBOARD ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Ready metrics</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Monitor Reporting Readiness and Compliance Workload.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Draft reports pending", count: "14 Drafts" },
                { title: "Reports awaiting approval", count: "3 Pending" },
                { title: "Submitted reports list", count: "48 Filed" },
                { title: "Overdue reports warning", count: "0 Overdue" }
              ].map((dash, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <span className="text-xs font-black text-brand-lime font-mono block">WIDGET {idx+1}</span>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dash.title}</h4>
                  <span className="text-2xl font-black italic text-neutral-900">{dash.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: SECURITY & AUDITABILITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Security</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Sensitive Regulatory Workflows.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that need defensible reporting workflows, strong evidence trails, and transparent compliance governance.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Report permissions", "Tenant isolation", "Audit logging",
                "Evidence retention", "Export controls", "Submission attempts", "Credential masking",
                "Approval workflows", "Private cloud support", "On-prem deployment"
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Filing FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What regulatory reports does DeepSense support?", 
                  a: "DeepSense supports SAR, STR, CTR-style workflows, AML investigation summaries, customer risk review reports, fraud risk reports, evidence packs, and broader compliance reporting workflows." 
                },
                { 
                  q: "Can reports be generated from cases?", 
                  a: "Yes. Reports can be drafted directly from AML, fraud, screening, document, or compliance cases with evidence attached." 
                },
                { 
                  q: "Does DeepSense support XML and PDF exports?", 
                  a: "Yes. DeepSense can generate structured exports such as XML, PDF, JSON, CSV, and evidence bundles depending on configured workflows." 
                },
                { 
                  q: "Can DeepSense submit reports directly to regulators?", 
                  a: "Where configured, DeepSense can support submission through transport methods such as HTTPS or SFTP. If submission credentials are not configured, the system should clearly support manual filing rather than fake submission success." 
                },
                { 
                  q: "Are report actions audited?", 
                  a: "Yes. Every report edit, approval, export, submission attempt, status change, and reviewer action is audited." 
                },
                { 
                  q: "Can DeepSense support approval workflows?", 
                  a: "Yes. Reports can be routed through analyst, compliance officer, MLRO, or senior reviewer approval workflows." 
                }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors"
                    >
                      <span className="text-base font-bold font-manrope text-neutral-900">{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-50 text-sm text-zinc-500 font-inter leading-relaxed animate-in fade-in duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 16: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to automate regulatory reporting?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Move from suspicious activity to <br />
                <span className="text-white/40">regulator-ready evidence faster.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense connects AML monitoring, fraud investigations, screening matches, graph evidence, analyst notes, and report generation into one audit-ready compliance workflow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/case-management" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Case Management
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
