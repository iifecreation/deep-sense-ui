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

export default function CaseManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive workspace parameters
  const [severity, setSeverity] = useState<string>("standard");
  const [remediation, setRemediation] = useState<boolean>(true);
  const [override, setOverride] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic workspace parameters
  const calculateWorkspaceMetrics = () => {
    let activeAlerts = 14;
    let riskFactor = 31;
    let actionLabel = "STANDARD AUDIT REQUIRED";
    let color = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    
    if (severity === "high") {
      activeAlerts = 248;
      riskFactor = 94;
      actionLabel = "HIGH-SEVERITY SYNDICATE ATTACK TRIGGERED";
      color = "text-red-500 bg-red-500/10 border-red-500/20";
    }
    if (remediation) {
      riskFactor = Math.max(riskFactor - 18, 4);
    }
    if (override) {
      riskFactor = Math.max(riskFactor - 10, 2);
    }
    
    return { activeAlerts, riskFactor, actionLabel, color };
  };

  const { activeAlerts, riskFactor, actionLabel, color } = calculateWorkspaceMetrics();

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
                INVESTIGATION ORCHESTRATION & CASE INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Centralize Fraud Investigations and <br />
                <span className="text-zinc-400">Operational Response in One Workspace</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Case Management helps enterprises investigate fraud faster, orchestrate analyst workflows, automate escalations, manage evidence, and coordinate remediation actions using AI-powered operational intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Investigation Demo
                </Link>
                <Link href="/platform/case-management#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Investigation Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fraud analysts, AML teams, compliance investigators, SOC operations, payment risk teams, governance organizations, and enterprise operational intelligence environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Unified Investigation Operations Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Unified Investigation Operations Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CASE MANAGEMENT CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live fraud investigation workspace visualizing active investigations, analyst assignments, AI-generated summaries, linked entities, evidence chains, escalation workflows, remediation actions, and governance timelines.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Left Sidebar Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Investigation Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Active Cases",
                        "Fraud Alerts",
                        "AI Investigation Assistant",
                        "Entity Explorer",
                        "Timeline Replay",
                        "AML Reviews",
                        "Escalations",
                        "Evidence Vault",
                        "Analyst Collaboration",
                        "Governance Reporting",
                        "Workflow Automation"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.1</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Main Investigation Workspace */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>MAIN INVESTIGATION VIEWPORT</span>
                        <span>SOC CONSOLE ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Severity Level</span>
                          <select 
                            value={severity} 
                            onChange={(e) => setSeverity(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="standard">Standard operational audit</option>
                            <option value="high">High-severity syndicate campaign</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Remediation Rules</span>
                          <input 
                            type="checkbox" 
                            checked={remediation} 
                            onChange={(e) => setRemediation(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Workflow overrides</span>
                          <input 
                            type="checkbox" 
                            checked={override} 
                            onChange={(e) => setOverride(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Active alert correlations</span>
                          <span className="text-xl font-bold text-white mt-1 block">{activeAlerts} cases</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Workspace Risk score</span>
                          <span className={`text-xl font-bold mt-1 block ${riskFactor > 50 ? "text-red-400" : "text-emerald-400"}`}>
                            {riskFactor}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Console Log */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:40:02] • account creation event: resolved mule footprint ID #8102</div>
                        <div>[18:40:40] • login activity: cross-channel velocity anomaly triggers risk override</div>
                        <div>[18:41:00] • payment flows: settlement blocked under priority AML escalation rules</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel: Case Details */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — Case details</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Case Resolution Status</span>
                          <span className={`mt-1 block font-bold text-[11px] ${color}`}>
                            {actionLabel}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI Remediation Recommendation</span>
                          <p className="mt-1 leading-relaxed">
                            {severity === "high" 
                              ? "Trigger immediate multi-tenant account freeze and request KYC reviews." 
                              : "Execute standard timeline rebuild and audit verification."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• evidence vaults verified</span>
                      <span>• analyst collaboration metrics parsed</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Centralized Response</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Built for Real-Time Fraud and Risk Investigations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Case Management centralizes: fraud investigations, AML reviews, onboarding escalations, insider-risk operations, dispute investigations, governance workflows, operational remediation, and analyst collaboration. The platform unifies: fraud alerts, graph intelligence, AI analysis, evidence management, workflow orchestration, and governance reporting. Unlike fragmented ticketing systems, DeepSense provides: one unified investigation environment, one operational timeline, one evidence system, one analyst workspace, and one governance audit trail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "one unified investigation environment", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "one operational timeline", desc: "Verify portal checkouts without introducing user friction." },
                { title: "one evidence system", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "one analyst workspace", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "one governance audit trail", desc: "Support digital GRC with active security control overlays." }
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
              Enterprise Investigation Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Centralized Case Management", desc: "Manage fraud investigations, AML escalations, onboarding reviews, insider-risk cases, dispute operations, and governance workflows." },
                { title: "AI Investigation Assistance", desc: "Automatically generate fraud summaries, case narratives, escalation recommendations, operational insights, evidence summaries, and SAR-ready intelligence." },
                { title: "Alert Correlation", desc: "Connect linked fraud alerts, onboarding anomalies, suspicious transactions, behavioral indicators, graph relationships, and operational telemetry." },
                { title: "Timeline Reconstruction", desc: "Replay account activity, transaction flows, onboarding sessions, authentication events, analyst interventions, and escalation workflows." },
                { title: "Evidence Management", desc: "Store screenshots, session telemetry, transaction records, onboarding documents, analyst notes, and governance records." },
                { title: "Analyst Collaboration", desc: "Enable shared investigations, analyst comments, escalation handoffs, operational coordination, and approval workflows." },
                { title: "Workflow Automation", desc: "Automate case routing, alert prioritization, escalation chains, remediation workflows, review requests, and governance notifications." },
                { title: "Governance & Audit Logging", desc: "Track analyst actions, investigation decisions, remediation activity, AI recommendations, governance approvals, and operational history." },
                { title: "Remediation Orchestration", desc: "Trigger account freezes, MFA enforcement, KYC reviews, payment holds, access revocation, and customer notifications." },
                { title: "Executive Reporting", desc: "Generate investigation metrics, fraud trend analysis, operational summaries, governance dashboards, and compliance reporting." }
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

        {/* ================= SECTION 4: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Orchestrates Enterprise Investigations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests fraud alerts, transaction anomalies, onboarding escalations, device intelligence, graph indicators, AML triggers, and operational telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches cases using AI summaries, graph intelligence, behavioral analytics, entity resolution, transaction tracing, and operational context." },
                { title: "Step 3 — Assignment", desc: "DeepSense automatically prioritizes cases, routes investigations, assigns analysts, escalates high-risk activity, and triggers workflow automation." },
                { title: "Step 4 — Action", desc: "Analysts investigate entities, review evidence, analyze timelines, coordinate escalations, and trigger remediation actions." },
                { title: "Step 5 — Closure", desc: "The platform logs operational activity, stores evidence, generates governance reports, maintains audit history, and tracks remediation outcomes." }
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
              Built for Enterprise Investigation Operations
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
                { id: "enterprise", label: "Enterprise Risk Teams" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Investigate transaction fraud, AML activity, onboarding abuse, and payment anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage account takeover, onboarding fraud, referral abuse, and wallet compromise.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Coordinate dispute investigations, merchant reviews, AML escalations, and transaction tracing.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect bonus abuse, betting syndicates, account farming, and collusive ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Investigate insider threats, operational anomalies, governance exposure, and compliance incidents.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Governance and Audit Readiness
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Immutable Audit Logging", desc: "Tamper-resistant operational history." },
                { title: "Role-Based Investigation Access", desc: "Granular permissions and segregation of duties." },
                { title: "Explainable Investigation Decisions", desc: "Transparent AI and analyst actions." },
                { title: "Compliance Workflow Integration", desc: "Integrated governance escalation processes." },
                { title: "Evidence Retention Policies", desc: "Secure enterprise evidence management." },
                { title: "Multi-Tenant Operational Security", desc: "Enterprise-grade investigation isolation." }
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

        {/* ================= SECTION 7: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">CASE MANAGEMENT FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Case Management?", 
                  a: "DeepSense Case Management is an enterprise investigation orchestration platform that centralizes fraud investigations, AML reviews, operational escalations, remediation workflows, and governance reporting." 
                },
                { 
                  q: "Can AI assist analysts during investigations?", 
                  a: "Yes. AI copilots summarize cases, explain alerts, prioritize risk, correlate entities, and recommend remediation actions." 
                },
                { 
                  q: "Does DeepSense support investigation workflow automation?", 
                  a: "Yes. The platform automates routing, escalation chains, remediation workflows, analyst assignment, and governance notifications." 
                },
                { 
                  q: "Can investigators collaborate across teams?", 
                  a: "Yes. Analysts can collaborate through shared workspaces, notes, escalation handoffs, and operational coordination tools." 
                },
                { 
                  q: "Does DeepSense maintain audit and governance records?", 
                  a: "Yes. All analyst actions, AI recommendations, remediation workflows, and operational decisions are logged immutably for auditability." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale operational investigations?", 
                  a: "Yes. DeepSense is designed for large-scale fraud operations, AML programs, enterprise governance environments, and real-time investigation orchestration." 
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

        {/* ================= SECTION 8: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Fraud Investigations and Operational Response</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize investigations, automate fraud response, accelerate analyst workflows, and strengthen governance operations using DeepSense Case Management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Investigation Demo
              </Link>
              <Link href="/platform/case-management#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Investigation Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
