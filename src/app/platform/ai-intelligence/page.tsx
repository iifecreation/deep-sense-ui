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

export default function AIIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("detection");
  
  // Interactive console parameters
  const [aiConfidence, setAiConfidence] = useState<string>("high");
  const [anomalyTrace, setAnomalyTrace] = useState<boolean>(true);
  const [explainableDecisions, setExplainableDecisions] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic AI metrics
  const calculateAiMetrics = () => {
    let fraudConfidence = "99.8%";
    let severityRating = "Minimal risk drift";
    let riskExposure = "Low";
    let recommendation = "AI AGENT STABLE: Continuous deep-reasoning matrix aligned across nodes";
    let color = "text-emerald-400";
    
    if (aiConfidence === "low") {
      fraudConfidence = "41.2%";
      severityRating = "CRITICAL BIAS WARNING";
      riskExposure = "High";
      recommendation = "CRITICAL ANOMALY ALERT: anomalous routing pattern detected inside neural workspace.";
      color = "text-red-400 animate-pulse";
    }
    if (anomalyTrace) {
      severityRating = "Traced & isolated";
    }
    if (explainableDecisions) {
      riskExposure = "Absolute Transparency";
    }
    
    return { fraudConfidence, severityRating, riskExposure, recommendation, color };
  };

  const { fraudConfidence, severityRating, riskExposure, recommendation, color } = calculateAiMetrics();

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
                <Cpu className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                AI-NATIVE FRAUD INTELLIGENCE ENGINE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                AI Intelligence Designed for Real-Time <br />
                <span className="text-zinc-400">Fraud, Risk, and Operational Decisioning</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense AI Intelligence Core powers fraud detection, graph investigations, behavioral analytics, transaction monitoring, onboarding trust, governance automation, and operational orchestration using explainable, adaptive, enterprise-grade artificial intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request AI Intelligence Demo
                </Link>
                <Link href="/platform/ai-intelligence#architecture" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore AI Architecture
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise fraud operations, financial intelligence teams, governance organizations, payment ecosystems, digital platforms, and mission-critical operational environments.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">AI Fraud Intelligence Orchestration Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">REASONING CORE: ONLINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live AI intelligence environment visualizing: anomaly detection, fraud reasoning, graph intelligence, AI copilots, operational summarization, workflow recommendations, adaptive risk scoring, and governance explainability.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: AI Intelligence Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "AI Copilot",
                        "Fraud Reasoning Engine",
                        "Behavioral Intelligence",
                        "Graph AI",
                        "Operational Summarization",
                        "Transaction Intelligence",
                        "Identity Intelligence",
                        "Governance AI",
                        "Workflow Optimization",
                        "AI Explainability"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v5.0</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Real-Time AI Intelligence Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>REAL-TIME AI INTELLIGENCE STREAM</span>
                        <span>NEURAL WEIGHTS NOMINAL</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Deep Reasoning</span>
                          <select 
                            value={aiConfidence} 
                            onChange={(e) => setAiConfidence(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="high">Strict alignment weights</option>
                            <option value="low">Local override warning</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Anomaly Trace</span>
                          <input 
                            type="checkbox" 
                            checked={anomalyTrace} 
                            onChange={(e) => setAnomalyTrace(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Force Transparency</span>
                          <input 
                            type="checkbox" 
                            checked={explainableDecisions} 
                            onChange={(e) => setExplainableDecisions(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Fraud confidence</span>
                          <span className="text-xl font-bold text-white mt-1 block">{fraudConfidence}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Anomaly severity</span>
                          <span className="text-xl font-bold text-white mt-1 block">{severityRating}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Risk exposure</span>
                          <span className={`text-xl font-bold mt-1 block ${riskExposure === "High" ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {riskExposure}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:27:10] • AI decision cycles: deep reasoning graph path trace computed</div>
                        <div>[19:27:25] • anomaly detections: low-latency payment anomalies routed to analyst</div>
                        <div>[19:27:40] • graph correlations: entity clusters mapped dynamically</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Copilot Reasoning</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI Reasoning Traceability</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">governance transparency</span>
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

        {/* ================= SECTION 2: AI OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Autonomous Risk Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Unified AI Intelligence Layer Across Fraud, Risk, and Governance
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense AI continuously analyzes: transactions, onboarding workflows, behavioral telemetry, authentication activity, graph relationships, operational workflows, governance activity, and enterprise risk signals. The AI Intelligence Core powers: fraud detection, adaptive risk scoring, graph reasoning, operational copilots, anomaly detection, investigation acceleration, workflow orchestration, and governance automation. Unlike isolated AI systems, DeepSense AI reasons across: connected entities, operational history, transaction ecosystems, behavioral patterns, infrastructure telemetry, and governance workflows. This enables organizations to: detect fraud earlier, reduce false positives, accelerate investigations, automate operations, improve operational visibility, and strengthen governance oversight.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "detect fraud earlier", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "reduce false positives", desc: "Verify portal checkouts without introducing user friction." },
                { title: "accelerate investigations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "automate operations", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "improve operational visibility", desc: "Support digital GRC with active security control overlays." },
                { title: "strengthen governance oversight", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise AI Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Adaptive Fraud Detection", desc: "Identify transaction anomalies, onboarding abuse, account takeover, behavioral drift, infrastructure manipulation, and coordinated fraud campaigns." },
                { title: "AI Investigation Copilot", desc: "Assist analysts with case summaries, investigation recommendations, graph reasoning, entity analysis, fraud prioritization, and remediation guidance." },
                { title: "Graph AI Intelligence", desc: "Reason across fraud rings, linked entities, transaction chains, device relationships, identity ecosystems, and insider-risk networks." },
                { title: "Behavioral Intelligence", desc: "Analyze session behavior, operational consistency, transaction rhythm, authentication anomalies, onboarding patterns, and workflow deviations." },
                { title: "AI-Powered Risk Scoring", desc: "Generate fraud risk scores, onboarding trust ratings, transaction legitimacy, behavioral trust indicators, and operational exposure analytics." },
                { title: "Real-Time Anomaly Detection", desc: "Continuously monitor operational spikes, suspicious behavior, graph anomalies, infrastructure drift, transaction irregularities, and governance inconsistencies." },
                { title: "Workflow & Decision Automation", desc: "Automate escalations, remediation workflows, analyst routing, fraud interventions, governance approvals, and operational prioritization." },
                { title: "Explainable AI Intelligence", desc: "Provide AI reasoning visibility, evidence-backed decisions, operational traceability, governance transparency, and analyst explainability." },
                { title: "AI Operational Summarization", desc: "Generate fraud summaries, executive intelligence, investigation recaps, operational insights, governance reports, and anomaly explanations." },
                { title: "Continuous Learning", desc: "Continuously learn from fraud investigations, analyst feedback, behavioral telemetry, operational outcomes, transaction ecosystems, and governance workflows." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">AI-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: AI LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Workflow Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense AI Detects and Orchestrates Fraud Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Collection", desc: "DeepSense ingests transaction streams, onboarding data, authentication telemetry, behavioral signals, graph relationships, operational workflows, and governance activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using graph intelligence, behavioral analytics, device trust, identity scoring, operational context, and historical patterns." },
                { title: "Step 3 — Reasoning", desc: "DeepSense evaluates fraud probability, anomaly severity, relationship exposure, onboarding legitimacy, behavioral consistency, and governance risk." },
                { title: "Step 4 — Recommendations", desc: "The system generates fraud summaries, operational recommendations, workflow triggers, risk prioritization, governance escalations, and remediation actions." },
                { title: "Step 5 — Human Oversight", desc: "Analysts review AI insights, validate escalations, coordinate investigations, approve governance actions, and provide operational feedback." }
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

        {/* ================= SECTION 5: AI COPILOT WORKSPACE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Autonomous Copilots</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              AI Copilots for Fraud and Operational Intelligence Teams
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Natural Language Assistant", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "AI Fraud Summaries", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Graph Relationship Explanations", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Operational Prioritization", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "Governance Recommendations", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "Workflow Automation Assistance", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: AI INFRASTRUCTURE layers tabs ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="architecture">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Enterprise AI Infrastructure Built for Real-Time Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "detection", label: "Fraud Detection" },
                { id: "identity", label: "Identity Intelligence" },
                { id: "monitoring", label: "Transaction Monitoring" },
                { id: "behavioral", label: "Behavioral Analytics" },
                { id: "graph", label: "Graph Intelligence" },
                { id: "automation", label: "Workflow Automation" }
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
              {activeTab === "detection" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Explainable deep-inference scoring metrics.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "identity" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Synthetic identity correlation workflows.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "monitoring" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Continuous real-time stream processing and AML matching.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "behavioral" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Adaptive behavioral biometric indicators analysis.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "graph" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Entity resolution and multi-hop graph relationship tracing.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "automation" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">AI-suggested orchestration routes and playbooks execution.</h4>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">AI COGNITIVE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What powers DeepSense AI Intelligence?", 
                  a: "DeepSense AI combines graph intelligence, behavioral analytics, anomaly detection, operational telemetry, and adaptive reasoning models to power real-time fraud intelligence." 
                },
                { 
                  q: "Can DeepSense AI explain its fraud decisions?", 
                  a: "Yes. DeepSense provides explainable AI reasoning, evidence-backed recommendations, operational traceability, and governance transparency." 
                },
                { 
                  q: "Does DeepSense AI continuously learn from operational activity?", 
                  a: "Yes. The platform continuously adapts using investigation outcomes, analyst feedback, behavioral telemetry, and evolving fraud patterns." 
                },
                { 
                  q: "Can AI automate operational workflows and fraud response?", 
                  a: "Yes. DeepSense AI orchestrates escalations, prioritization, workflow automation, remediation actions, and governance approvals." 
                },
                { 
                  q: "Does DeepSense support human oversight and governance controls?", 
                  a: "Yes. DeepSense includes human-in-the-loop validation, AI governance approvals, operational transparency, and audit-ready traceability." 
                },
                { 
                  q: "Is DeepSense AI suitable for enterprise-scale deployments?", 
                  a: "Yes. DeepSense AI is designed for distributed enterprise infrastructure, real-time operational intelligence, and mission-critical fraud environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Fraud Operations With Enterprise AI Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Deploy explainable AI fraud detection and <br />
                <span className="text-white/40 font-bold font-bold font-bold">automate complex analyst playbooks.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Deploy explainable AI fraud detection, operational copilots, graph intelligence, and adaptive decisioning across enterprise-scale operational ecosystems using DeepSense AI Intelligence Core.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request AI Intelligence Demo
              </Link>
              <Link href="/platform/ai-intelligence#architecture" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore AI Architecture
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
