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

export default function WorkflowAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive console parameters
  const [operationalState, setOperationalState] = useState<string>("active");
  const [orchestrationFilter, setOrchestrationFilter] = useState<boolean>(true);
  const [overrideControls, setOverrideControls] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic automation metrics
  const calculateAutomationMetrics = () => {
    let throughput = 1240;
    let SLAEfficiency = 98;
    let healthFactor = 99;
    let recommendation = "SYSTEM HEALTH EXCELLENT: standard routing active";
    let color = "text-emerald-400";
    
    if (operationalState === "offline") {
      throughput = 0;
      SLAEfficiency = 14;
      healthFactor = 22;
      recommendation = "CRITICAL WARNING: offline baseline detected, manual routing overrides recommended";
      color = "text-red-400 animate-pulse";
    }
    if (orchestrationFilter) {
      SLAEfficiency = Math.max(SLAEfficiency - 2, 80);
    }
    if (overrideControls) {
      healthFactor = Math.max(healthFactor - 12, 10);
    }
    
    return { throughput, SLAEfficiency, healthFactor, recommendation, color };
  };

  const { throughput, SLAEfficiency, healthFactor, recommendation, color } = calculateAutomationMetrics();

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
                FRAUD OPERATIONS & WORKFLOW ORCHESTRATION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Automate Fraud Operations and Accelerate <br />
                <span className="text-zinc-400">Enterprise Response Workflows</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Workflow Automation helps enterprises orchestrate investigations, automate fraud response, trigger adaptive controls, streamline governance operations, and coordinate analyst workflows using AI-powered orchestration and real-time operational intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Workflow Automation Demo
                </Link>
                <Link href="/platform/workflow-automation#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Automation Studio
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fraud operations, AML teams, compliance organizations, payment risk teams, SOC analysts, governance teams, and enterprise operational environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Fraud Operations Automation Studio */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Fraud Operations Automation Studio</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">AUTOMATION ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A fully interactive orchestration environment where teams can build fraud workflows, automate investigations, trigger adaptive controls, route escalations, orchestrate remediation, configure governance workflows, integrate AI decisioning, and monitor operational automation.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Sidebar: Workflow Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Workflow Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Fraud Automation",
                        "Investigation Routing",
                        "AML Escalations",
                        "Account Controls",
                        "AI Workflow Builder",
                        "Governance Automation",
                        "Notification Engine",
                        "Risk Prioritization",
                        "Analyst Assignment",
                        "Integration Connectors"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.4</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Canvas — Drag-and-Drop Workflow Builder */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DRAG-AND-DROP CANVAS</span>
                        <span>BUILDER SCREEN ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Operational State</span>
                          <select 
                            value={operationalState} 
                            onChange={(e) => setOperationalState(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="active">Active automation stream</option>
                            <option value="offline">Offline sandbox baseline</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Orchestration filter</span>
                          <input 
                            type="checkbox" 
                            checked={orchestrationFilter} 
                            onChange={(e) => setOrchestrationFilter(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Override controls</span>
                          <input 
                            type="checkbox" 
                            checked={overrideControls} 
                            onChange={(e) => setOverrideControls(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Orchestrations / sec</span>
                          <span className="text-xl font-bold text-white mt-1 block">{throughput} flow</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">SLA efficiency</span>
                          <span className="text-xl font-bold text-white mt-1 block">{SLAEfficiency}%</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Workflow health</span>
                          <span className={`text-xl font-bold mt-1 block ${healthFactor < 45 ? "text-red-400" : "text-emerald-400"}`}>
                            {healthFactor}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Workflow Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:44:42] • trigger event: cross-channel velocity anomaly triggers risk override</div>
                        <div>[18:45:02] • AI decision: routing case to high-priority sanctions queue</div>
                        <div>[18:45:20] • remediation completion: ledger hold executed dynamically</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel: Workflow Analytics */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI recommendation status</span>
                          <span className={`mt-1 block font-bold text-[11px] ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">SLA Indicator Metrics</span>
                          <p className="mt-1 leading-relaxed">
                            Computed average queue latency at 12 milliseconds. Bottlenecks resolved.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active integration connectors validated</span>
                      <span>• operational dependencies synchronized</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Orchestration Center</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Intelligent Automation Across Fraud and Risk Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Workflow Automation orchestrates: fraud response, AML investigations, onboarding escalations, transaction monitoring, remediation workflows, analyst operations, governance enforcement, and operational coordination. The platform connects: fraud alerts, graph intelligence, AI decisioning, behavioral analytics, transaction monitoring, device intelligence, investigation systems, and governance workflows. DeepSense enables organizations to: reduce manual investigations, accelerate fraud response, standardize operations, improve SLA performance, strengthen governance, automate operational decisions, and scale fraud operations efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "reduce manual investigations", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "accelerate fraud response", desc: "Verify portal checkouts without introducing user friction." },
                { title: "standardize operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "improve SLA performance", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "strengthen governance", desc: "Support digital GRC with active security control overlays." },
                { title: "scale operations efficiently", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Workflow Orchestration Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Drag-and-Drop Workflow Builder", desc: "Build fraud workflows, AML processes, onboarding reviews, escalation chains, remediation orchestration, and governance approvals." },
                { title: "AI-Powered Decisioning", desc: "Use AI to prioritize alerts, summarize cases, recommend escalations, classify suspicious activity, automate investigations, and optimize routing." },
                { title: "Fraud Response Automation", desc: "Automate account freezes, payment holds, MFA enforcement, session revocation, onboarding restrictions, and transaction blocking." },
                { title: "Investigation Routing", desc: "Automatically assign analysts, escalate high-risk alerts, balance workloads, prioritize cases, enforce SLAs, and coordinate reviews." },
                { title: "AML & Compliance Automation", desc: "Orchestrate suspicious activity reviews, SAR generation, sanctions escalation, KYC workflows, governance approvals, and audit reporting." },
                { title: "Remediation Orchestration", desc: "Trigger customer notifications, identity verification, password resets, risk reviews, access revocation, and governance tasks." },
                { title: "Cross-System Integrations", desc: "Connect SIEM systems, payment gateways, identity platforms, case management tools, cloud infrastructure, and communication platforms." },
                { title: "SLA & Escalation Management", desc: "Monitor response timelines, investigation SLAs, escalation delays, workflow bottlenecks, operational health, and analyst workload." },
                { title: "Governance Workflow Enforcement", desc: "Enforce approval chains, segregation of duties, audit controls, remediation reviews, operational transparency, and policy compliance." },
                { title: "Workflow Analytics & Reporting", desc: "Generate automation metrics, operational KPIs, SLA performance reports, remediation analytics, and workflow effectiveness insights." }
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
              How DeepSense Automates Fraud Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests fraud alerts, transaction anomalies, onboarding escalations, behavioral anomalies, AML triggers, device intelligence, and operational telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches workflows using graph intelligence, AI recommendations, risk scoring, behavioral analytics, entity correlation, and operational context." },
                { title: "Step 3 — Execution", desc: "DeepSense executes automated escalations, analyst routing, remediation actions, fraud controls, governance approvals, and operational notifications." },
                { title: "Step 4 — Action", desc: "Teams investigate alerts, review AI insights, coordinate escalations, approve actions, and complete remediation." },
                { title: "Step 5 — Closure", desc: "The platform records workflow history, logs operational decisions, tracks SLA compliance, stores governance evidence, and generates audit reports." }
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
              Built for Enterprise Operational Intelligence
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Automate AML reviews, fraud escalations, payment controls, and onboarding governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Coordinate account takeover response, wallet investigations, onboarding reviews, and fraud remediation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Orchestrate dispute workflows, merchant reviews, transaction monitoring, and compliance escalations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage bonus abuse investigations, wagering fraud response, account restrictions, and AML operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Enforce governance controls, insider-risk workflows, operational escalations, and compliance remediation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade Operational Governance and Security
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Immutable Workflow Logging", desc: "Tamper-resistant operational history." },
                { title: "Role-Based Workflow Access", desc: "Granular permissions and workflow controls." },
                { title: "Explainable AI Decisioning", desc: "Transparent orchestration reasoning." },
                { title: "Multi-Tenant Operational Isolation", desc: "Secure enterprise workflow separation." },
                { title: "Governance Workflow Integration", desc: "Integrated approval and audit processes." },
                { title: "Flexible Deployment Models", desc: "SaaS, hybrid, private cloud, on-premise." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4 shadow-xs">
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">AUTOMATION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Workflow Automation?", 
                  a: "DeepSense Workflow Automation is an enterprise orchestration engine that automates fraud operations, investigations, escalations, remediation workflows, and governance processes." 
                },
                { 
                  q: "Can DeepSense automate fraud response actions?", 
                  a: "Yes. The platform can automate account freezes, MFA enforcement, onboarding restrictions, payment holds, escalations, and remediation workflows." 
                },
                { 
                  q: "Does DeepSense support AI-assisted workflow orchestration?", 
                  a: "Yes. AI copilots prioritize alerts, summarize investigations, optimize routing, recommend remediation, and automate operational decisioning." 
                },
                { 
                  q: "Can organizations create custom fraud workflows?", 
                  a: "Yes. Teams can build custom workflows using the drag-and-drop automation studio with configurable conditions, AI logic, and remediation actions." 
                },
                { 
                  q: "Does DeepSense support governance and approval workflows?", 
                  a: "Yes. The platform supports approval chains, audit logging, segregation of duties, governance escalation, and compliance reporting." 
                },
                { 
                  q: "Is DeepSense Workflow Automation suitable for enterprise-scale operations?", 
                  a: "Yes. DeepSense is designed for enterprise fraud operations, AML programs, compliance organizations, and large-scale operational orchestration." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Automate Fraud Operations and Accelerate Enterprise Response</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Streamline investigations, automate remediation workflows, enforce governance controls, and orchestrate enterprise fraud operations using DeepSense Workflow Automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Workflow Automation Demo
              </Link>
              <Link href="/platform/workflow-automation#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Automation Studio
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
