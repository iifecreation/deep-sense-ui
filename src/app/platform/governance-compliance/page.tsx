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
  Building,
  Sliders,
  ClipboardCheck,
  Briefcase
} from "lucide-react";

export default function GovernanceCompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive console parameters
  const [governanceAuditScope, setGovernanceAuditScope] = useState<string>("active");
  const [remediationRouting, setRemediationRouting] = useState<boolean>(true);
  const [frameworkChecks, setFrameworkChecks] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic compliance metrics
  const calculateComplianceMetrics = () => {
    let complianceRisk = 12;
    let governancePosture = "98%";
    let overdueItems = 0;
    let recommendation = "GOVERNANCE POSTURE SECURE: continuous compliance monitoring validated";
    let color = "text-emerald-400";
    
    if (governanceAuditScope === "override") {
      complianceRisk = 88;
      governancePosture = "32%";
      overdueItems = 14;
      recommendation = "CRITICAL NON-COMPLIANCE EXPOSURE: GRC control frameworks bypassed. Remediation tasks overdue.";
      color = "text-red-400 animate-pulse";
    }
    if (remediationRouting) {
      governancePosture = "94%";
    }
    if (frameworkChecks) {
      complianceRisk = Math.max(complianceRisk - 6, 2);
    }
    
    return { complianceRisk, governancePosture, overdueItems, recommendation, color };
  };

  const { complianceRisk, governancePosture, overdueItems, recommendation, color } = calculateComplianceMetrics();

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
                <Smartphone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                ENTERPRISE GOVERNANCE & COMPLIANCE INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Automate Governance, Strengthen Compliance, <br />
                <span className="text-zinc-400">and Centralize Operational Oversight</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Governance & Compliance helps enterprises automate governance workflows, enforce operational controls, streamline audits, orchestrate remediation actions, and maintain continuous compliance visibility using AI-powered operational intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Governance Demo
                </Link>
                <Link href="/platform/governance-compliance#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Compliance Operations
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for compliance teams, internal audit organizations, AML programs, risk management teams, fraud operations, enterprise governance offices, and regulated industries.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Governance & Compliance Operations Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Governance & Compliance Operations Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GOVERNANCE ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live governance intelligence environment visualizing compliance posture, policy violations, remediation workflows, audit readiness, operational risk exposure, governance approvals, AI-generated compliance insights, and control effectiveness monitoring.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Governance Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Compliance Monitoring",
                        "Policy Enforcement",
                        "Audit Management",
                        "Risk Registers",
                        "Remediation Workflows",
                        "Governance Approvals",
                        "Regulatory Reporting",
                        "AI Compliance Assistant",
                        "Operational Controls",
                        "Evidence Vault"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.4</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Compliance Overview */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE COMPLIANCE OVERVIEW</span>
                        <span>GRC SURVEILLANCE ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Governance Scope</span>
                          <select 
                            value={governanceAuditScope} 
                            onChange={(e) => setGovernanceAuditScope(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="active">Active GRC controls overlay</option>
                            <option value="override">Local baseline overrides</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Remediation Routing</span>
                          <input 
                            type="checkbox" 
                            checked={remediationRouting} 
                            onChange={(e) => setRemediationRouting(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">SOX Operational Controls</span>
                          <input 
                            type="checkbox" 
                            checked={frameworkChecks} 
                            onChange={(e) => setFrameworkChecks(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Compliance risk</span>
                          <span className={`text-xl font-bold mt-1 block ${complianceRisk > 50 ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>
                            {complianceRisk}%
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Governance Posture</span>
                          <span className="text-xl font-bold text-white mt-1 block">{governancePosture}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Overdue Remediation</span>
                          <span className="text-xl font-bold text-white mt-1 block">{overdueItems} items</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Governance Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Governance Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:45:42] • policy changes: segregation of operational GRC parameters enforced</div>
                        <div>[18:46:02] • governance approvals: wire threshold sign-offs authorized by compliance</div>
                        <div>[18:46:25] • remediation execution: audit trace recorded on decentralized ledger</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI Governance Recommendations</span>
                          <span className={`mt-1 block text-white text-[11px] leading-relaxed ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Audit Exposure indicators</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous compliance monitoring parsed successfully. Mapped all active GRC evidence loops.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active policy compliance checks active</span>
                      <span>• audit readiness metrics synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">GRC Control Plane</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Governance Intelligence Across Fraud, Risk, and Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Governance & Compliance centralizes: compliance monitoring, governance enforcement, audit readiness, remediation orchestration, operational oversight, risk intelligence, regulatory workflows, and enterprise reporting. The platform connects: fraud operations, transaction monitoring, AI decisioning, workflow automation, investigation activity, operational controls, audit evidence, and policy enforcement. DeepSense enables organizations to: reduce compliance overhead, automate governance operations, improve audit readiness, centralize enterprise controls, strengthen operational transparency, accelerate remediation, and improve executive visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "reduce compliance overhead", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "automate governance operations", desc: "Verify portal checkouts without introducing user friction." },
                { title: "improve audit readiness", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "centralize enterprise controls", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "strengthen operational transparency", desc: "Support digital GRC with active security control overlays." },
                { title: "accelerate remediation", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Governance & Compliance Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Continuous Compliance Monitoring", desc: "Monitor operational controls, transaction activity, policy adherence, governance workflows, risk exposure, and compliance drift." },
                { title: "Governance Workflow Automation", desc: "Automate approvals, escalations, remediation tracking, audit workflows, control attestations, and compliance reviews." },
                { title: "Audit Readiness & Evidence", desc: "Centralize evidence collection, investigation records, operational logs, remediation history, AI decision records, and governance approvals." },
                { title: "Policy Enforcement", desc: "Enforce operational controls, segregation of duties, fraud governance, AML procedures, risk management policies, and compliance obligations." },
                { title: "Risk Registers & Oversight", desc: "Track enterprise risks, unresolved findings, operational exposure, remediation status, governance gaps, and control failures." },
                { title: "AI Governance Intelligence", desc: "Use AI to summarize audit findings, identify governance gaps, prioritize remediation, explain policy violations, generate compliance insights, and detect operational anomalies." },
                { title: "Regulatory Reporting", desc: "Generate AML reports, fraud metrics, governance dashboards, compliance summaries, audit reports, and executive intelligence briefings." },
                { title: "Remediation Orchestration", desc: "Coordinate remediation tasks, analyst assignments, governance approvals, operational reviews, and issue resolution workflows." },
                { title: "Role-Based Governance Controls", desc: "Support granular permissions, approval hierarchies, workflow restrictions, operational segregation, and governance oversight." },
                { title: "Immutable Audit Logging", desc: "Maintain tamper-resistant logs, operational history, analyst actions, AI recommendations, governance approvals, and remediation records." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
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

        {/* ================= SECTION 4: WORKFLOW LIFE CYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Automates Governance Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests fraud alerts, operational telemetry, transaction activity, investigation records, workflow execution data, governance approvals, and audit evidence." },
                { title: "Step 2 — Correlation", desc: "The platform enriches activity using AI governance intelligence, control validation, policy mapping, operational context, remediation tracking, and audit correlation." },
                { title: "Step 3 — Monitoring", desc: "DeepSense continuously evaluates policy adherence, control effectiveness, remediation progress, operational anomalies, unresolved risks, and compliance exposure." },
                { title: "Step 4 — Action", desc: "The system triggers remediation workflows, compliance escalations, governance approvals, audit notifications, operational restrictions, and executive reporting." },
                { title: "Step 5 — Readiness", desc: "The platform stores evidence, maintains audit history, tracks approvals, generates compliance reports, and centralizes governance intelligence." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl relative flex flex-col justify-between">
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

        {/* ================= SECTION 5: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Regulated Enterprise Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "processor", label: "Payment Processors" },
                { id: "betting", label: "Gaming & Betting" },
                { id: "enterprise", label: "Enterprise Risk Organizations" }
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
            <div className="w-full bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage AML governance, fraud compliance, operational controls, and audit readiness.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Automate onboarding governance, transaction oversight, fraud remediation, and policy enforcement.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Coordinate dispute governance, merchant oversight, operational risk controls, and compliance escalations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor AML controls, responsible gaming oversight, fraud governance, and operational remediation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Enforce governance frameworks, operational transparency, internal controls, and audit coordination.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: STANDARDS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">COMPLIANCE COMPATIBILITY</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Support for Enterprise Governance Frameworks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                "AML Compliance Programs",
                "KYC Governance Controls",
                "PCI DSS Alignment",
                "SOX Operational Controls",
                "GDPR & Privacy Governance",
                "ISO 27001 Operational Oversight",
                "Enterprise Risk Management Programs",
                "Internal Audit & Assurance Workflows"
              ].map((std, idx) => (
                <div key={idx} className="bg-white border border-zinc-100 p-8 rounded-[36px] shadow-xs">
                  <div className="space-y-2">
                    <span className="text-red-500 font-bold block mb-2 font-mono">STD-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{std}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade Governance Security and Operational Controls
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Immutable Governance Logging", desc: "Tamper-resistant operational history." },
                { title: "Role-Based Governance Access", desc: "Granular permissions and approval control." },
                { title: "Explainable AI Governance Decisions", desc: "Transparent governance reasoning and escalation logic." },
                { title: "Multi-Tenant Governance Isolation", desc: "Secure enterprise segregation and oversight." },
                { title: "Governance Workflow Enforcement", desc: "Integrated operational policy enforcement." },
                { title: "Flexible Deployment Models", desc: "SaaS, hybrid, private cloud, on-premise." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">GOVERNANCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Governance & Compliance?", 
                  a: "DeepSense Governance & Compliance is an enterprise governance intelligence platform that automates compliance workflows, operational oversight, remediation orchestration, audit readiness, and governance reporting." 
                },
                { 
                  q: "Can DeepSense automate compliance workflows?", 
                  a: "Yes. The platform automates approvals, remediation coordination, audit workflows, escalation chains, evidence collection, and governance reporting." 
                },
                { 
                  q: "Does DeepSense support immutable audit logging?", 
                  a: "Yes. DeepSense maintains tamper-resistant logs for analyst activity, governance approvals, AI recommendations, operational decisions, and remediation history." 
                },
                { 
                  q: "Can AI assist governance and audit teams?", 
                  a: "Yes. AI copilots summarize compliance gaps, prioritize remediation, explain policy violations, generate audit insights, and accelerate governance reviews." 
                },
                { 
                  q: "Does DeepSense support enterprise governance frameworks?", 
                  a: "Yes. DeepSense supports AML programs, KYC governance, PCI DSS alignment, SOX controls, privacy governance, operational oversight, and enterprise risk management initiatives." 
                },
                { 
                  q: "Is DeepSense Governance & Compliance suitable for enterprise-scale operations?", 
                  a: "Yes. DeepSense is designed for enterprise governance organizations, regulated industries, operational risk teams, compliance offices, and large-scale audit environments." 
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

        {/* ================= SECTION 9: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Governance and Compliance With Real-Time Operational Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Automate governance workflows, centralize audit readiness, streamline remediation operations, and strengthen enterprise oversight using DeepSense Governance & Compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Governance Demo
              </Link>
              <Link href="/platform/governance-compliance#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Compliance Operations
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
