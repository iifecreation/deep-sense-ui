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
  Filter,
  Search
} from "lucide-react";

export default function CaseManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Triage Workspace mockup states
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [analystNotes, setAnalystNotes] = useState<string>("");
  const [caseList, setCaseList] = useState([
    { id: "CASE-984", label: "Global Sanctions SDN Match", severity: "CRITICAL", assignee: "Sarah Jenkins", timestamp: "10:14 AM", status: "PENDING" },
    { id: "CASE-902", label: "Synthetic ID / MRZ Check Failed", severity: "HIGH", assignee: "Sarah Jenkins", timestamp: "10:16 AM", status: "PENDING" },
    { id: "CASE-810", label: "APP Scam / Fast Funds Structuring", severity: "MEDIUM", assignee: "Unassigned", timestamp: "10:20 AM", status: "OPEN" },
  ]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleResolveCase = (idx: number, status: string) => {
    const updated = [...caseList];
    updated[idx].status = status;
    setCaseList(updated);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-red-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-red-400" />
                Unified Fraud & AML Investigation Platform
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Investigate Fraud, AML, Identity, <br />
                <span className="text-zinc-400">and Payment Risk From One Workspace.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense centralizes alerts, investigations, evidence, graph intelligence, analyst collaboration, regulatory workflows, and audit trails into one connected operations platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fraud Detection
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for fraud operations teams, AML investigators, compliance analysts, payment risk teams, and enterprise security operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Investigation Command Center Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">ENTERPRISE INVESTIGATION COMMAND CENTER</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">WORKSPACE ID: COMP-OPS-1</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Alerts list */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Triage Queue Feed</span>
                    
                    <div className="space-y-3">
                      {caseList.map((item, idx) => (
                        <div 
                          key={item.id} 
                          onClick={() => setSelectedCase(idx)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex justify-between items-center ${
                            selectedCase === idx 
                              ? "bg-red-500/20 border-red-500" 
                              : "bg-black/40 border-white/5 hover:border-white/10"
                          }`}
                        >
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono text-zinc-500">[{item.timestamp}] {item.id}</span>
                            <span className="block text-xs font-bold text-white tracking-tight">{item.label}</span>
                          </div>
                          <span className={`px-2 py-0.5 text-[8px] font-black rounded uppercase tracking-wider ${
                            item.severity === "CRITICAL" 
                              ? "bg-red-500/20 text-red-400" 
                              : item.severity === "HIGH"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-indigo-500/20 text-indigo-400"
                          }`}>
                            {item.severity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Case details and timeline */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">ACTIVE CASE FOCUS</span>
                          <h4 className="text-lg font-bold text-white tracking-tight mt-1">
                            {caseList[selectedCase].id} • {caseList[selectedCase].label}
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">ASSIGNEE: {caseList[selectedCase].assignee}</span>
                      </div>

                      {/* Evidence Timeline Mockup */}
                      <div className="space-y-3 font-mono text-[10px] text-zinc-400">
                        <div className="flex gap-4">
                          <span className="text-red-400">● 10:14 AM</span>
                          <span>Velocity threshold exceeded on merchant gateway</span>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-red-400">● 10:15 AM</span>
                          <span>Connected graph contains 14 pass-through accounts</span>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-brand-lime">● 10:24 AM</span>
                          <span>Analyst Sarah Jenkins promoted case status</span>
                        </div>
                      </div>

                      {/* Notes Box */}
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Add Investigation Notes</span>
                        <textarea 
                          value={analystNotes} 
                          onChange={(e) => setAnalystNotes(e.target.value)}
                          placeholder="Type case resolution summary..."
                          className="w-full h-16 bg-white/10 border border-white/10 text-white rounded-xl p-3 focus:outline-none focus:border-red-500 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button 
                        onClick={() => handleResolveCase(selectedCase, "RESOLVED_TRUE")}
                        className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-all text-center"
                      >
                        File suspicious activity report
                      </button>
                      <button 
                        onClick={() => handleResolveCase(selectedCase, "RESOLVED_FALSE")}
                        className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center"
                      >
                        Dismiss false positive
                      </button>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Ops Issue</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Most Investigation Teams Work Across Fragmented Systems.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraud, AML, onboarding, payment risk, procurement, and compliance investigations are often scattered across disconnected tools, spreadsheets, emails, and manual workflows. Analysts lose critical context while operational risk increases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Alert Overload", desc: "Teams receive thousands of disconnected alerts without prioritization or context.", icon: <AlertTriangle /> },
                { title: "Manual Investigations", desc: "Analysts spend hours gathering transactions, devices, graph links, documents, and supporting evidence manually.", icon: <Search /> },
                { title: "Poor Collaboration", desc: "Fraud, AML, compliance, and security teams struggle to coordinate investigations efficiently.", icon: <Users /> },
                { title: "Weak Auditability", desc: "Many systems lack complete audit trails, investigation history, and evidence lineage.", icon: <History /> },
                { title: "Regulatory Pressure", desc: "Institutions must maintain explainable investigations and regulator-ready evidence.", icon: <FileCheck /> },
                { title: "Operational Delays", desc: "Disconnected workflows slow response times and increase fraud losses.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE INVESTIGATION PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Operations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Connected Workspace for Every Investigation.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies fraud operations, AML investigations, identity verification reviews, payment disputes, procurement investigations, and enterprise risk workflows into one operational platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Fraud Investigations", desc: "Investigate suspicious transactions, fraud rings, account abuse, chargebacks, and payment anomalies." },
                { title: "AML Investigations", desc: "Manage suspicious activity, structuring alerts, sanctions matches, PEP exposure, and transaction monitoring workflows." },
                { title: "Document Fraud Reviews", desc: "Review fake IDs, duplicate identities, liveness failures, deepfake risk, and onboarding fraud evidence." },
                { title: "Account Takeover Operations", desc: "Analyze compromised sessions, risky devices, behavioral anomalies, and suspicious login activity." },
                { title: "Payment Risk Operations", desc: "Investigate APP scams, NFC abuse, CNP fraud, wallet risk, and token misuse." },
                { title: "Enterprise Risk Cases", desc: "Manage procurement fraud, DLP violations, UEBA alerts, third-party exposure, and controls findings." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CASE LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations flow</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Structured Investigation Workflows From Alert to Resolution.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense provides configurable case workflows that standardize investigations while preserving flexibility for different teams and risk domains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Alert Created", desc: "Fraud engines, AML monitoring, screening systems, graph intelligence, or controls monitoring generate alerts automatically." },
                { title: "Case Opened", desc: "DeepSense creates a centralized investigation with linked evidence and risk context." },
                { title: "Assignment & Routing", desc: "Cases are routed based on severity, geography, business unit, queue, or analyst specialization." },
                { title: "Investigation Review", desc: "Analysts review evidence, graph relationships, documents, transactions, and linked entities." },
                { title: "Escalation Management", desc: "Complex investigations can escalate to senior investigators, AML officers, compliance teams, or legal teams." },
                { title: "Resolution tagging", desc: "Cases are resolved with documented decisions, evidence attachments, and regulatory outcomes." },
                { title: "Reporting & Audit", desc: "Generate SARs, STRs, evidence packs, exports, and audit trails automatically." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-red-500 font-mono block">STAGE 0{idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: INVESTIGATION WORKSPACE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Visual Triage</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  A Complete Investigation Workspace for Analysts.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides analysts with all investigation evidence in one centralized interface.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Transaction Timeline View", desc: "View transfers, payments, withdrawals, wallet events, and suspicious activity chronologically." },
                    { title: "Graph Intelligence Explorer", desc: "Explore linked accounts, devices, wallets, beneficiaries, merchants, and suspicious clusters visually." },
                    { title: "Triggered Risk Signals", desc: "Review triggered rules, ML scores, graph risk, device intelligence, AML exposure, and behavioral anomalies." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-red-500 transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{feat.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Split Screen Case Workspace Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">SPLIT-SCREEN INVESTIGATION WORKSPACE</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Linked Device Footprint</span>
                      <span className="text-red-400 font-bold">EMULATOR_DETECTED</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Biometric Typing Speed</span>
                      <span className="text-red-400 font-bold">ABNORMAL (BOT_VELOCITY)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: ANALYST COLLABORATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Operations Collaboration</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Collaborative Investigations.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense enables fraud, AML, compliance, and security teams to work together inside a shared investigation environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Case Assignment", desc: "Assign cases to individuals, queues, departments, or regional teams." },
                { title: "Internal Team Notes", desc: "Add investigation commentary, escalation context, and decision rationale." },
                { title: "Mentions & Notifications", desc: "Notify investigators, reviewers, or compliance officers directly within workflows." },
                { title: "Escalation Management", desc: "Escalate high-risk cases with preserved context and linked evidence." },
                { title: "Isolated Team Queues", desc: "Manage fraud, AML, onboarding, procurement, payment, and DLP investigations separately." },
                { title: "Operational SLA Tracking", desc: "Monitor case response times, investigation duration, and operational bottlenecks." }
              ].map((collab, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{collab.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{collab.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: EVIDENCE & AUDIT TRAIL ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Evidence locker</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Maintain Complete Investigation Transparency.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense automatically records every action, decision, workflow change, and evidence update to support auditability and regulatory compliance.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Immutable Audit Trails", desc: "Track every investigation action and decision historically." },
                    { title: "Complete Evidence Lineage", desc: "Preserve the origin and chain-of-custody for linked evidence." },
                    { title: "Timeline Reconstruction", desc: "Replay investigation events chronologically to trace decision rationale." }
                  ].map((aud, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-red-500 transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{aud.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{aud.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: History audit trail logger mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">IMMUTABLE OPERATIONS JOURNAL</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between">
                      <span>Action: Case Generated</span>
                      <span className="text-white">Auto-system</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Action: Assigned to sarah_jenkins</span>
                      <span className="text-white">Workflow Router</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Action: SAR Report Form drafted</span>
                      <span className="text-white">Sarah Jenkins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: REGULATORY REPORTING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Regulator Ready</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connected Regulatory Reporting Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense transforms investigations into regulator-ready reporting workflows automatically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "SAR / STR Generation", desc: "Generate suspicious activity and suspicious transaction reports directly from investigations." },
                { title: "Evidence Packaging", desc: "Attach transaction history, graph evidence, analyst notes, and screening results automatically." },
                { title: "XML & PDF Export formats", desc: "Support regulator-ready export formats and compliance reporting workflows." },
                { title: "Submission Tracking Logs", desc: "Track submission status, regulator references, and escalation history." },
                { title: "Internal Review Staging", desc: "Require review and approval before suspicious reports are promoted for submission." },
                { title: "Regulatory Audit Logs", desc: "Maintain full reporting lineage and compliance evidence historically." }
              ].map((rep, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{rep.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{rep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: CROSS-DOMAIN INVESTIGATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-16">
              Investigate Every Risk Domain From One Platform.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Operations", desc: "Transaction fraud, chargebacks, bonus abuse, APP scams, and merchant fraud." },
                { title: "AML Monitoring", desc: "Structuring, layering, mule activity, sanctions exposure, and suspicious movement." },
                { title: "Identity & Document Fraud", desc: "Fake IDs, synthetic identities, duplicate onboarding, deepfakes, and biometric risk." },
                { title: "Payment Fraud", desc: "CNP fraud, NFC abuse, wallet misuse, token replay, and terminal fraud." },
                { title: "Procurement & Vendor Risk", desc: "Invoice fraud, shell vendors, collusion, duplicate payments, and procurement anomalies." },
                { title: "Enterprise Risk", desc: "UEBA alerts, DLP incidents, controls failures, and third-party exposure investigations." }
              ].map((dom, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dom.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{dom.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: AUTOMATION & ORCHESTRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Automated Dispatcher</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Automate Investigations and Operational Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense reduces manual effort by automating case creation, evidence collection, routing, escalation, and workflow actions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Auto-Case Creation", desc: "Create investigations automatically from fraud or AML signals." },
                { title: "Smart Queue Routing", desc: "Route cases dynamically based on severity, geography, queue, or specialization." },
                { title: "Workflow Automation rules", desc: "Trigger approvals, escalations, notifications, and actions automatically." },
                { title: "SLA Deadline Enforcement", desc: "Monitor operational deadlines and escalation thresholds historically." },
                { title: "Notification Engine", desc: "Send alerts through email, webhooks, queues, or custom integrations." },
                { title: "AI-Assisted Case Prioritization", desc: "Prioritize high-risk cases using unified scoring and graph intelligence." }
              ].map((aut, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{aut.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{aut.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Operational Visibility Across Fraud and Compliance Teams.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Queue Performance Metrics", desc: "Monitor workload distribution and operational bottlenecks." },
                { title: "Analyst Productivity tracking", desc: "Track investigation throughput and resolution efficiency." },
                { title: "Fraud Loss Analysis", desc: "Analyze emerging fraud patterns and operational exposure over time." }
              ].map((an, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{an.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{an.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Designed for High-Risk and Regulated Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Manage fraud investigations, AML workflows, suspicious transfers, and sanctions exposure." },
                { title: "Fintech", desc: "Investigate onboarding fraud, wallet abuse, payment anomalies, and account takeover." },
                { title: "Payments", desc: "Handle disputes, merchant risk, terminal fraud, and transaction investigations." },
                { title: "Crypto & Web3", desc: "Monitor wallet risk, suspicious transfers, sanctions exposure, and mule activity." },
                { title: "E-Commerce", desc: "Investigate checkout fraud, refund abuse, promo abuse, and multi-accounting." },
                { title: "Enterprise & Procurement", desc: "Manage procurement fraud, UEBA alerts, DLP incidents, and third-party investigations." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-red-500/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Enterprise Operations and Regulatory Environments.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations requiring explainable investigations, operational accountability, and regulatory audit readiness.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Multi-tenant isolation", "Audit logging", "Evidence retention",
                "Workflow approvals", "Encryption", "On-prem deployment", "Private cloud"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Triage FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense create cases automatically?", 
                  a: "Yes. DeepSense can automatically generate investigations from fraud alerts, AML events, document reviews, graph detections, and payment anomalies." 
                },
                { 
                  q: "Can analysts collaborate inside cases?", 
                  a: "Yes. Analysts can assign cases, add notes, escalate investigations, mention teams, and track workflows collaboratively." 
                },
                { 
                  q: "Does DeepSense support SAR and STR workflows?", 
                  a: "Yes. DeepSense supports SAR/STR generation, evidence packaging, approval workflows, and reporting exports." 
                },
                { 
                  q: "Can investigations include graph intelligence?", 
                  a: "Yes. Graph relationships and fraud-ring evidence can be attached directly into investigations." 
                },
                { 
                  q: "Are investigation actions audited?", 
                  a: "Yes. Every action, decision, escalation, evidence update, and workflow change is fully audited." 
                },
                { 
                  q: "Can DeepSense support multiple investigation teams?", 
                  a: "Yes. Fraud, AML, onboarding, procurement, security, and compliance teams can operate within separate or shared workflows." 
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

        {/* ================= SECTION 15: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to modernize fraud and AML operations?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Unify investigations, evidence, and <br />
                <span className="text-white/40">regulatory workflows with DeepSense.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize fraud operations, AML investigations, payment disputes, identity reviews, graph intelligence, and compliance workflows into one operational platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-red-500 text-white rounded-full text-base font-bold font-manrope hover:bg-red-600 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/document-fraud" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Document Fraud Detection
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
