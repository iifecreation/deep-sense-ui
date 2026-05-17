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

export default function PlatformGovernancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("risk");
  
  // Interactive console parameters
  const [governanceMode, setGovernanceMode] = useState<string>("global");
  const [policyForcing, setPolicyForcing] = useState<boolean>(true);
  const [aiAuditLog, setAiAuditLog] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic governance metrics
  const calculateGovMetrics = () => {
    let postureScore = "99.8%";
    let unresolvedActions = "0 open tasks";
    let policyExposure = "Immaculate";
    let recommendation = "GOVERNANCE CORE STABLE: 100% active policies aligned to SOX overrides";
    let color = "text-emerald-400";
    
    if (governanceMode === "local") {
      postureScore = "54.2%";
      unresolvedActions = "18 pending tasks";
      policyExposure = "High";
      recommendation = "CRITICAL POLICY ALERT: unresolved AML exception detected inside sovereign region.";
      color = "text-red-400 animate-pulse";
    }
    if (policyForcing) {
      unresolvedActions = "0 pending tasks";
    }
    if (aiAuditLog) {
      policyExposure = "Transparent Audit Trail Verified";
    }
    
    return { postureScore, unresolvedActions, policyExposure, recommendation, color };
  };

  const { postureScore, unresolvedActions, policyExposure, recommendation, color } = calculateGovMetrics();

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
                <Scale className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                ENTERPRISE GOVERNANCE & OPERATIONAL ACCOUNTABILITY
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Centralize Governance, Operational <br />
                <span className="text-zinc-400">Accountability, and Executive Oversight</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Governance helps enterprises operationalize policy enforcement, AI accountability, fraud governance, audit traceability, operational transparency, and executive oversight across distributed fraud, risk, and operational intelligence environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Governance Overview
                </Link>
                <Link href="/platform/governance#lifecycle" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Governance Operations
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise governance teams, risk offices, fraud leadership, compliance organizations, executive stakeholders, and regulated operational environments.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Enterprise Governance Intelligence Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GOVERNANCE ENVELOPE ACTIVE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live governance command environment visualizing: operational accountability, governance workflows, policy enforcement, AI oversight, executive governance analytics, audit traceability, operational escalation chains, and organizational risk exposure.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Governance Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Governance Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Governance Policies",
                        "AI Governance",
                        "Executive Oversight",
                        "Operational Accountability",
                        "Risk Governance",
                        "Audit Traceability",
                        "Policy Enforcement",
                        "Governance Workflows",
                        "Operational Escalations",
                        "Governance Intelligence"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v4.1</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Governance Operations Workspace */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE GOVERNANCE OPERATIONS WORKSPACE</span>
                        <span>SOX OVERLAYS ONLINE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Governance Scope</span>
                          <select 
                            value={governanceMode} 
                            onChange={(e) => setGovernanceMode(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="global">Active SOX frameworks</option>
                            <option value="local">Local telemetry override</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Policy Forcing</span>
                          <input 
                            type="checkbox" 
                            checked={policyForcing} 
                            onChange={(e) => setPolicyForcing(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">AI Audit Logging</span>
                          <input 
                            type="checkbox" 
                            checked={aiAuditLog} 
                            onChange={(e) => setAiAuditLog(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Governance Posture</span>
                          <span className="text-xl font-bold text-white mt-1 block">{postureScore}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Unresolved actions</span>
                          <span className="text-xl font-bold text-white mt-1 block">{unresolvedActions}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Policy exposure</span>
                          <span className={`text-xl font-bold mt-1 block ${policyExposure === "High" ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {policyExposure}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Governance Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Governance Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:28:00] • policy changes: global GRC boundary checks updated and enforced</div>
                        <div>[19:28:15] • AI governance reviews: automated decision explainability score isolated</div>
                        <div>[19:28:30] • audit evidence updates: tamper-resistant log blocks written in ledger</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Governance Summaries</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI-Generated Analysis</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">executive governance alerts</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous data classification audit trace verified. Zero drift.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active SIEM endpoint connections healthy</span>
                      <span>• disaster recovery pipelines operational</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: GOVERNANCE OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Strategic Oversight</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Governance Embedded Across Every Operational Layer
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Governance centralizes: operational oversight, policy enforcement, AI accountability, executive reporting, governance approvals, audit traceability, remediation workflows, and enterprise accountability. The platform continuously governs: fraud operations, onboarding intelligence, transaction monitoring, AI decisioning, workflow automation, operational escalations, infrastructure activity, and governance workflows. DeepSense enables organizations to: strengthen operational transparency, reduce governance fragmentation, operationalize executive oversight, centralize accountability, govern AI responsibly, improve audit readiness, and coordinate governance decisions globally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "strengthen operational transparency", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "reduce governance fragmentation", desc: "Verify portal checkouts without introducing user friction." },
                { title: "operationalize executive oversight", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "centralize accountability", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "govern AI responsibly", desc: "Support digital GRC with active security control overlays." },
                { title: "improve audit readiness", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="capabilities">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Governance Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Policy Governance & Enforcement", desc: "Enforce fraud policies, operational controls, approval requirements, escalation procedures, AI governance rules, and access governance." },
                { title: "Executive Oversight & Visibility", desc: "Provide governance dashboards, operational summaries, organizational risk heatmaps, executive intelligence, and strategic governance reporting." },
                { title: "AI Governance & Accountability", desc: "Govern AI recommendations, automated decisioning, AI explainability, operational approvals, model accountability, and governance traceability." },
                { title: "Operational Accountability", desc: "Track analyst decisions, operational escalations, governance approvals, workflow execution, remediation ownership, and organizational accountability." },
                { title: "Governance Workflow Orchestration", desc: "Coordinate approvals, policy reviews, governance escalations, operational remediation, executive sign-offs, and audit workflows." },
                { title: "Audit Traceability", desc: "Maintain immutable logs, operational history, governance evidence, AI traceability, remediation records, and executive approvals." },
                { title: "Governance Risk Intelligence", desc: "Identify governance drift, operational gaps, unresolved risk exposure, control weaknesses, and accountability failures." },
                { title: "AI Governance Intelligence", desc: "Use AI to summarize governance issues, prioritize risk exposure, explain policy violations, identify operational bottlenecks, and strengthen executive visibility." },
                { title: "Enterprise Segregation of Duties", desc: "Support role separation, governance boundaries, approval hierarchy enforcement, operational restrictions, and privileged workflow controls." },
                { title: "Governance Reporting & Analytics", desc: "Generate governance posture reports, executive summaries, audit intelligence, operational accountability analytics, and policy effectiveness metrics." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">GOV-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: GOVERNANCE LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="lifecycle">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Workflow Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Operationalizes Governance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests analyst actions, workflow activity, AI decisions, transaction monitoring events, onboarding escalations, governance actions, and operational telemetry." },
                { title: "Step 2 — Policy Correlation", desc: "The platform maps operational workflows, governance policies, AI accountability rules, escalation procedures, organizational controls, and executive oversight frameworks." },
                { title: "Step 3 — Monitoring", desc: "DeepSense continuously evaluates policy adherence, operational accountability, governance exposure, unresolved escalations, AI transparency, and workflow execution integrity." },
                { title: "Step 4 — Escalation", desc: "The system orchestrates remediation workflows, governance approvals, operational escalations, executive sign-offs, audit workflows, and accountability tracking." },
                { title: "Step 5 — Audit Readiness", desc: "The platform centralizes evidence, maintains governance logs, generates executive reports, tracks accountability, and stores operational history." }
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

        {/* ================= SECTION 5: AI GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Cognitive Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              AI-Powered Governance Intelligence and Executive Transparency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AI Governance Summaries", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "Executive Risk Prioritization", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Policy Violation Explanations", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Governance Drift Detection", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "Operational Accountability", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "AI Decision Traceability", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: SUPPORTED FRAMEWORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Frameworks</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Support for Enterprise Governance Frameworks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "risk", label: "Enterprise Risk" },
                { id: "ai", label: "AI Governance" },
                { id: "aml", label: "AML Governance" },
                { id: "audit", label: "Internal Audit" },
                { id: "segregation", label: "Segregation of Duties" },
                { id: "regulatory", label: "Regulatory Accountability" }
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
              {activeTab === "risk" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Enterprise risk management & threshold alignment.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "ai" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Explainable AI operational governance & transparency.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "aml" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">AML/CFT regulatory operational compliance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "audit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Internal GRC audit preparedness and continuous mapping.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "segregation" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Granular role-based boundaries & segregation of operational duties.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "regulatory" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Enterprise regulatory accountability monitoring.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">GOVERNANCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Governance?", 
                  a: "DeepSense Governance is an enterprise governance operating layer that centralizes operational accountability, policy enforcement, AI governance, executive oversight, and governance intelligence." 
                },
                { 
                  q: "Can DeepSense govern AI operational decisions?", 
                  a: "Yes. DeepSense supports explainable AI governance, operational approvals, AI traceability, accountability workflows, and governance oversight controls." 
                },
                { 
                  q: "Does DeepSense provide executive governance visibility?", 
                  a: "Yes. The platform provides executive dashboards, governance risk heatmaps, operational accountability analytics, and strategic oversight reporting." 
                },
                { 
                  q: "Can organizations operationalize governance workflows and approvals?", 
                  a: "Yes. DeepSense orchestrates governance approvals, escalation workflows, remediation coordination, audit traceability, and accountability enforcement." 
                },
                { 
                  q: "Does DeepSense maintain audit-ready governance traceability?", 
                  a: "Yes. DeepSense maintains immutable governance logs, operational evidence, AI traceability records, remediation history, and executive approval tracking." 
                },
                { 
                  q: "Is DeepSense Governance suitable for regulated enterprise environments?", 
                  a: "Yes. DeepSense is designed for enterprise governance organizations, operational risk programs, AI governance initiatives, and regulated operational ecosystems." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Operationalize Enterprise Governance With Real-Time Intelligence and Accountability</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Centralize operational oversight and scale <br />
                <span className="text-white/40 font-bold font-bold font-bold">verifiable accountability metrics.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize operational oversight, govern AI responsibly, strengthen executive accountability, and orchestrate enterprise governance workflows using DeepSense Governance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Governance Overview
              </Link>
              <Link href="/platform/governance#lifecycle" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Governance Operations
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
