"use client";

import React, { useState } from "react";
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
  Layers,
  Server,
  HelpCircle,
  Smartphone,
  Eye,
  Users,
  Building2,
  Wallet,
  Clock,
  RefreshCw,
  Scale,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  FileSpreadsheet,
  Workflow,
  Search,
  Check,
  ClipboardCheck,
  Sliders
} from "lucide-react";

export default function ContinuousControlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive Control States
  const [sanctionsApiHourly, setSanctionsApiHourly] = useState<boolean>(true);
  const [realtimePrivilegeAudit, setRealtimePrivilegeAudit] = useState<boolean>(true);
  const [webhookHookOnline, setWebhookHookOnline] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic control health score based on inputs
  const calculateControlHealth = () => {
    let score = 25; // baseline
    if (sanctionsApiHourly) score += 25;
    if (realtimePrivilegeAudit) score += 25;
    if (webhookHookOnline) score += 24;
    
    score = Math.min(score, 99);
    
    let status = "CRITICAL FAILURES DETECTED";
    let color = "text-red-500";
    if (score >= 90) {
      status = "AUDIT-READY STATUS";
      color = "text-emerald-500";
    } else if (score >= 60) {
      status = "COMPLIANCE DRIFT WARNING";
      color = "text-amber-500";
    } else if (score >= 40) {
      status = "ACCESS SEGREGATION ANOMALY";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateControlHealth();

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-50/40 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-red-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <ClipboardCheck className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME CONTROLS MONITORING & GOVERNANCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Continuously Monitor Controls <br />
                <span className="text-zinc-400">Across Fraud, AML, Security, and Compliance</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises automate control testing, detect policy violations, monitor operational risk, and maintain audit-ready compliance evidence using continuous controls monitoring and real-time governance intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore GRC Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for regulated enterprises, financial institutions, fintechs, payment platforms, and enterprise governance teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Controls Monitoring Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Controls Monitoring Diagnostics</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GOVERNANCE ENCLAVE AUDIT-READY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Control Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Sanctions API Freshness (Hourly)</span>
                        <input 
                          type="checkbox" 
                          checked={sanctionsApiHourly} 
                          onChange={(e) => setSanctionsApiHourly(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Real-Time Privilege Audit</span>
                        <input 
                          type="checkbox" 
                          checked={realtimePrivilegeAudit} 
                          onChange={(e) => setRealtimePrivilegeAudit(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Mule Wallet Alert Hook Online</span>
                        <input 
                          type="checkbox" 
                          checked={webhookHookOnline} 
                          onChange={(e) => setWebhookHookOnline(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE CONTROL EFFECTIVENESS MATRIX</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Evidence Collection</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {webhookHookOnline ? "Webhook Logs Archived" : "Evidence Missing (Warning)"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Access Governance</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {realtimePrivilegeAudit ? "SoD Violations: 0" : "Dormant Access Detected"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">CONTROL HEALTH SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUDIT READY STATUS</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: SOX/PCI framework active</span>
                      <span>Secure tokenization isolation live</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Manual Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Manual Control Monitoring Creates Operational and Regulatory Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Most organizations still rely on spreadsheets, periodic audits, manual evidence collection, disconnected compliance systems, and static control reviews. As fraud, security threats, AML obligations, and regulatory expectations evolve, manual control monitoring becomes inefficient, reactive, difficult to scale, and prone to gaps and failures. Organizations struggle to continuously validate fraud controls, AML workflows, access reviews, sanctions freshness, segregation of duties, webhook reliability, payment controls, and operational governance. Without continuous monitoring, organizations face audit failures, regulatory exposure, undetected control breakdowns, delayed remediation, operational blind spots, and increased fraud and compliance risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Manual Evidence Collection", desc: "Teams spend excessive time collecting screenshots, exports, and audit evidence.", icon: <FileSpreadsheet /> },
                { title: "Delayed Detection", desc: "Control failures are often identified weeks or months after occurring.", icon: <Clock /> },
                { title: "Fragmented Governance", desc: "Compliance, fraud, AML, and security controls operate in disconnected environments.", icon: <Workflow /> },
                { title: "Audit Readiness Gaps", desc: "Organizations struggle to maintain continuously updated audit evidence.", icon: <ClipboardCheck /> },
                { title: "Policy Drift", desc: "Controls become outdated or inconsistently enforced across environments.", icon: <Sliders /> },
                { title: "Limited Operational Visibility", desc: "Leadership lacks real-time visibility into enterprise control effectiveness.", icon: <Eye /> }
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

            {/* Control Failure Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">CONTROL FAILURE LIFECYCLE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Control Execution", desc: "Enterprise controls run continuously across fraud and AML databases." },
                  { title: "2. Monitoring Layer", desc: "DeepSense captures logs and webhook parameters in secure enclave." },
                  { title: "3. Failure Detection", desc: "Anomalies triggered immediately upon detection of inactive hooks." },
                  { title: "4. Evidence Captured", desc: "Automated screenshots and system metrics logged for auditors." },
                  { title: "5. Remediation Queue", desc: "Incident cases created and routed to appropriate operations teams." },
                  { title: "6. Attestation Log", desc: "Analyst confirms fix, appending signed evidence block to ledger." }
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col items-center justify-between">
                    <div>
                      <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                      <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 5 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Governance</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Continuous Controls Monitoring & Governance Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines governance automation, fraud intelligence, AML monitoring, operational telemetry, workflow orchestration, and audit evidence management into a unified continuous controls monitoring platform. The platform continuously evaluates control execution, workflow integrity, policy enforcement, operational anomalies, access governance, fraud prevention controls, AML control effectiveness, evidence completeness, and compliance posture. DeepSense enables organizations to automate control validation, reduce audit overhead, improve governance visibility, accelerate remediation, continuously monitor compliance, reduce operational risk, and strengthen enterprise resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Automate control validation", desc: "Replace static checks with real-time API state evaluations." },
                { title: "Reduce audit overhead", desc: "Automate screenshot gathering and secure log exports." },
                { title: "Improve governance visibility", desc: "Track system changes on an explainable, unified control dashboard." },
                { title: "Accelerate remediation", desc: "Instantly alert compliance teams when critical hooks drop." },
                { title: "Continuously monitor compliance", desc: "Maintain constant audit readiness without periodic rushes." },
                { title: "Strengthen enterprise resilience", desc: "Minimize policy drift and maintain operational reliability." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Continuous Controls Monitoring Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Automated Control Testing", desc: "Continuously validate fraud controls, AML controls, onboarding workflows, payment controls, operational safeguards, and policy enforcement." },
                { title: "Real-Time Failure Detection", desc: "Detect failed workflows, broken integrations, inactive controls, enforcement gaps, policy violations, and monitoring outages." },
                { title: "Evidence Collection Automation", desc: "Automatically capture logs, workflow evidence, screenshots, event histories, approvals, and remediation records." },
                { title: "Segregation of Duties Monitoring", desc: "Identify conflicting permissions, privileged access abuse, policy violations, unauthorized workflow overlaps, and governance conflicts." },
                { title: "Access Governance Monitoring", desc: "Continuously review privileged access, role drift, dormant accounts, admin activity, and access anomalies." },
                { title: "AML & Compliance Monitoring", desc: "Validate sanctions freshness, screening workflows, reporting integrity, transaction monitoring controls, and case escalation policies." },
                { title: "Fraud Control Governance", desc: "Monitor fraud rule execution, scoring consistency, decisioning workflows, intervention policies, and model performance drift." },
                { title: "Workflow & Integration Health", desc: "Track webhook delivery failures, provider outages, API health, orchestration failures, and job execution anomalies." },
                { title: "Continuous Risk Scoring", desc: "Generate control effectiveness scores, governance risk indicators, operational health metrics, and compliance posture ratings." },
                { title: "Audit & Attestation Workflows", desc: "Support evidence attestation, control sign-offs, audit preparation, remediation tracking, and governance approvals." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">CAP-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Automates Continuous Controls Monitoring
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests control definitions, workflow telemetry, policy rules, access logs, fraud signals, AML events, and operational metrics." },
                { title: "Step 2 — Evaluation", desc: "The platform continuously evaluates control execution, workflow compliance, access integrity, integration reliability, and governance consistency." },
                { title: "Step 3 — Failure Detection", desc: "DeepSense identifies failed controls, policy drift, operational anomalies, segregation conflicts, and governance breakdowns." },
                { title: "Step 4 — Evidence & Scoring", desc: "The platform generates audit evidence, control effectiveness scores, compliance indicators, and governance risk metrics." },
                { title: "Step 5 — Remediation", desc: "High-risk failures trigger alerts, remediation workflows, analyst reviews, escalation policies, and governance investigations." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                    <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < 4 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Enterprise Governance & Compliance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Financial Institutions" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "security", label: "Enterprise Security Teams" },
                { id: "compliance", label: "Compliance Teams" },
                { id: "governance", label: "Risk & Governance Teams" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold font-manrope uppercase transition-all tracking-wider ${activeTab === tab.id ? "bg-red-600 text-white shadow-lg" : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full bg-white border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor AML controls, fraud prevention workflows, access governance, and regulatory reporting integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Ensure sanctions APIs refresh dynamically every 60 minutes. Keep detailed validation traces for financial regulators.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Validate onboarding controls, payment controls, API reliability, and fraud decisioning governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track transactional controls. Alert operations instantly if custom payment velocity filters drop out.
                  </p>
                </div>
              )}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect privilege misuse, policy violations, operational anomalies, and control failures.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Continuous monitoring of privileged administrators to prevent role drift and unauthorized system overrides.
                  </p>
                </div>
              )}
              {activeTab === "compliance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Automate audit evidence collection, attestation workflows, control testing, and remediation tracking.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Replace manual audit workflows with automated screenshots, database states, and secure log archiving.
                  </p>
                </div>
              )}
              {activeTab === "governance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage enterprise controls, operational risk, governance visibility, and policy enforcement.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Consolidate operational controls across scattered departments to deliver single-pane-of-glass governance reports.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Synergy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Integrated Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense integrates continuous control monitoring with core fraud engines, AML screening, and identity databases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Detection", desc: "Monitor fraud control effectiveness and rule execution integrity." },
                { title: "AML Monitoring", desc: "Validate sanctions screening, monitoring workflows, and reporting controls." },
                { title: "Case Management", desc: "Escalate failed controls into investigation and remediation workflows." },
                { title: "SIEM Integrations", desc: "Correlate operational and governance events with enterprise security telemetry." },
                { title: "Audit Logs", desc: "Continuously validate governance and operational accountability." },
                { title: "Identity & Access Governance", desc: "Monitor privileged access and segregation-of-duties conflicts." },
                { title: "Regulatory Reporting", desc: "Ensure compliance reporting workflows remain operational and audit-ready." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Governance & Control Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Control Operations Dashboard", desc: "Control health monitoring, failed control alerts, operational risk trends, and governance visibility." },
                { title: "Compliance Monitoring Analytics", desc: "Compliance posture, audit readiness, evidence completion, and remediation tracking." },
                { title: "Access Governance Dashboard", desc: "Privileged access reviews, role drift monitoring, SoD conflict analysis, and admin activity intelligence." },
                { title: "Workflow Integrity Monitoring", desc: "API reliability, webhook health, orchestration status, and provider availability." },
                { title: "Investigation Workspace", desc: "Failed control timelines, evidence reviews, remediation workflows, and governance investigations." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Enterprise Governance Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy real-time control metrics to satisfy standard and custom GRC protocols globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Insurance", "Payment Processors", "Telecom Platforms", "Healthcare",
                "Government", "Enterprise SaaS", "Ecommerce", "Marketplaces", "Crypto Platforms", "Regulated Enterprises"
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <Building2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-neutral-900 font-manrope uppercase tracking-wider">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">SaaS Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Audit-Ready Governance and Enterprise Security
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense supports governance initiatives aligned with standard compliance programs and enterprise risk frameworks.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Control Decisions", desc: "Every control event includes execution evidence, failure context, and workflow telemetry." },
                { title: "Audit Logging", desc: "Track control executions, analyst actions, remediation workflows, and governance reviews." },
                { title: "Multi-Tenant Isolation", desc: "Secure operational isolation across organizations, controls, and compliance datasets." },
                { title: "Compliance-Ready Architecture", desc: "Engineered to satisfy SOX, PCI DSS, ISO 27001, SOC 2, and AML program requirements." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise infrastructure." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec.title}</span>
                  <p className="text-xs text-zinc-500">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Controls FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is Continuous Controls Monitoring?", 
                  a: "Continuous Controls Monitoring (CCM) automates the continuous validation of operational, fraud, compliance, and governance controls in real time." 
                },
                { 
                  q: "Can DeepSense automate evidence collection?", 
                  a: "Yes. DeepSense automatically captures audit evidence, workflow telemetry, operational logs, and remediation history." 
                },
                { 
                  q: "Does DeepSense support segregation of duties monitoring?", 
                  a: "Yes. The platform detects SoD conflicts, privilege overlap, and governance violations." 
                },
                { 
                  q: "Can DeepSense monitor fraud and AML controls?", 
                  a: "Yes. DeepSense continuously validates fraud rules, AML workflows, sanctions freshness, and compliance processes." 
                },
                { 
                  q: "Does the platform support audit workflows?", 
                  a: "Yes. DeepSense supports attestation workflows, remediation tracking, evidence packaging, and audit readiness monitoring." 
                },
                { 
                  q: "Can DeepSense integrate with enterprise systems?", 
                  a: "Yes. The platform supports APIs, SIEM integrations, orchestration workflows, webhooks, and enterprise telemetry pipelines." 
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

        {/* ================= SECTION 12: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Move From Periodic Audits to Continuous Governance Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Move from manual periodic audits to continuous <br />
                <span className="text-white/40 font-bold">real-time governance intelligence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Continuously validate controls, automate evidence collection, strengthen governance visibility, and reduce operational risk using enterprise-grade controls monitoring and compliance intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore GRC Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
