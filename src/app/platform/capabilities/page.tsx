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

export default function PlatformCapabilitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLayer, setActiveLayer] = useState<number>(1);
  
  // Interactive GRC simulation state
  const [opState, setOpState] = useState<string>("live");
  const [graphVis, setGraphVis] = useState<boolean>(true);
  const [aiFocus, setAiFocus] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic GRC metrics
  const calculateGrcMetrics = () => {
    let throughput = 12450;
    let latency = 42;
    let riskFactor = 12;
    
    if (opState === "attack") {
      throughput = 38900;
      latency = 128;
      riskFactor = 88;
    }
    if (!graphVis) {
      latency += 45;
    }
    if (aiFocus) {
      latency -= 18;
      riskFactor = Math.max(riskFactor - 25, 4);
    }
    
    return { throughput, latency, riskFactor };
  };

  const { throughput, latency, riskFactor } = calculateGrcMetrics();

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
                DEEPSENSE FRAUD INTELLIGENCE PLATFORM
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                One Unified Platform for Fraud Intelligence, <br />
                <span className="text-zinc-400">Risk Operations, and Enterprise Trust</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense unifies fraud detection, behavioral analytics, graph intelligence, case management, governance automation, identity verification, transaction monitoring, and AI-driven investigations into a single enterprise-grade intelligence platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Platform Demo
                </Link>
                <Link href="/platform/capabilities#architecture" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Architecture
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for financial institutions, fintechs, telecoms, governments, marketplaces, enterprises, gaming ecosystems, and digital platforms operating at scale.
                </span>
              </div>
            </div>

            {/* Hero Interactive Widget: DeepSense Unified Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">DeepSense Unified Intelligence Command Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">PLATFORM OPERATIONS CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  Massive enterprise intelligence control plane showing fraud events flowing in real time, graph-linked entities, AI-generated alerts, operational health, analyst investigations, live transaction streams, risk scoring systems, compliance controls, fraud ring visualization, and cross-product intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Sidebar — Platform Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Platform Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Fraud Intelligence",
                        "Graph Analytics",
                        "Behavioral Analytics",
                        "Identity Intelligence",
                        "Transaction Monitoring",
                        "AML Monitoring",
                        "Device Intelligence",
                        "Case Management",
                        "Compliance Automation",
                        "AI Copilot",
                        "Workflow Automation",
                        "Risk Scoring",
                        "Entity Resolution",
                        "Threat Intelligence",
                        "Admin Console"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v1.2</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center main area: Controls & Visualization */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE DATA STREAMS</span>
                        <span>SOC MONITORING ACTIVE</span>
                      </div>

                      {/* Config parameters */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Operational State</span>
                          <select 
                            value={opState}
                            onChange={(e) => setOpState(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-1.5 py-0.5 text-[9px] w-full"
                          >
                            <option value="live">Live stream active</option>
                            <option value="attack">Simulated coordinated attack</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Graph Clustering</span>
                          <input 
                            type="checkbox" 
                            checked={graphVis} 
                            onChange={(e) => setGraphVis(e.target.checked)}
                            className="w-3.5 h-3.5 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">AI Analyst Focus</span>
                          <input 
                            type="checkbox" 
                            checked={aiFocus} 
                            onChange={(e) => setAiFocus(e.target.checked)}
                            className="w-3.5 h-3.5 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Incoming events/sec</span>
                          <span className="text-xl font-bold text-white mt-1 block">{throughput.toLocaleString()}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Fraud score latency</span>
                          <span className="text-xl font-bold text-white mt-1 block">{latency}ms</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Aggregated Risk Factor</span>
                          <span className={`text-xl font-bold mt-1 block ${riskFactor > 50 ? "text-red-400" : "text-emerald-400"}`}>
                            {riskFactor}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Investigation Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Investigation Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:35:01] • Alert generated: synthetic account farming threshold crossed</div>
                        <div>[18:35:12] • Investigation assigned: cross-border payout anomaly mapped to graph</div>
                        <div>[18:36:20] • AI Recommendation: enforce immediate MFA intervention on matching devices</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Intelligence Panel */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Analyst Feed</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI-generated Explanation</span>
                          <p className="mt-1 leading-relaxed">
                            Detected shell merchant network laundering transaction traffic under utility billing proxies.
                          </p>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Graph Correlations</span>
                          <p className="mt-1 leading-relaxed">
                            Mule device footprint matched 4 historical account compromise nodes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• investigation recommendations ready</span>
                      <span>• suspicious entity clusters parsed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / PLATFORM OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Fraud OS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Built as a Real-Time Fraud Intelligence Operating System
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense is a modular intelligence platform designed to help enterprises detect fraud, orchestrate investigations, monitor operational risk, automate governance, strengthen trust ecosystems, and centralize fraud operations. The platform combines: real-time analytics, graph intelligence, AI orchestration, behavioral analytics, workflow automation, entity resolution, device intelligence, identity verification, and governance controls. Unlike disconnected point solutions, DeepSense creates: one operational intelligence layer, one unified risk graph, one investigation environment, one governance control plane, and one fraud intelligence architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "One operational intelligence layer", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "One unified risk graph", desc: "Verify portal checkouts without introducing user friction." },
                { title: "One investigation environment", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "One governance control plane", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "One fraud intelligence architecture", desc: "Support digital GRC with active security control overlays." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION / PLATFORM ARCHITECTURE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="architecture">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Platform Architecture</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Modular Platform Architecture Layers
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Inspect how data coordinates dynamically from initial event streams up to the immutable audit governance ledger.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full text-left">
              {/* Layers List */}
              <div className="lg:col-span-5 space-y-4">
                {[
                  { num: 1, name: "Layer 1 — Data Ingestion Engine", desc: "Supports APIs, Kafka streams, webhooks, SDK telemetry, SIEM feeds, payment streams, transaction systems, mobile telemetry, cloud event ingestion, and batch pipelines." },
                  { num: 2, name: "Layer 2 — Intelligence Processing Engine", desc: "Processes behavioral analytics, graph relationships, risk scoring, anomaly detection, AI correlation, rules orchestration, entity resolution, and session analytics." },
                  { num: 3, name: "Layer 3 — Unified Risk Graph", desc: "Builds entity relationships, fraud ecosystems, identity linkage, behavioral correlation, device relationships, financial flows, insider networks, and operational dependencies." },
                  { num: 4, name: "Layer 4 — Decision & Orchestration Engine", desc: "Supports fraud interventions, workflow automation, escalation routing, analyst assignment, adaptive scoring, transaction blocking, case generation, and governance enforcement." },
                  { num: 5, name: "Layer 5 — Investigation & Governance Layer", desc: "Provides investigation workspaces, evidence management, analyst tooling, compliance reporting, audit logging, remediation workflows, AI copilots, and executive reporting." }
                ].map((layer) => (
                  <button
                    key={layer.num}
                    onClick={() => setActiveLayer(layer.num)}
                    className={`w-full p-6 rounded-2xl border text-left transition-all ${activeLayer === layer.num ? "bg-neutral-900 border-neutral-900 text-white shadow-xl" : "bg-zinc-50 border-zinc-100 text-neutral-800 hover:bg-zinc-100"}`}
                  >
                    <span className="text-[10px] font-mono font-bold block mb-1">LAYER 0{layer.num}</span>
                    <span className="text-base font-bold font-manrope block">{layer.name}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Viewport */}
              <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-[36px] flex flex-col justify-between min-h-[400px]">
                <div className="space-y-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">ARCHITECTURE VIEWPORT</span>
                  
                  {activeLayer === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-manrope text-neutral-900">Layer 1 — Data Ingestion Engine</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">
                        Supports APIs, Kafka streams, webhooks, SDK telemetry, SIEM feeds, payment streams, transaction systems, mobile telemetry, cloud event ingestion, and batch pipelines.
                      </p>
                    </div>
                  )}
                  {activeLayer === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-manrope text-neutral-900">Layer 2 — Intelligence Processing Engine</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">
                        Processes behavioral analytics, graph relationships, risk scoring, anomaly detection, AI correlation, rules orchestration, entity resolution, and session analytics.
                      </p>
                    </div>
                  )}
                  {activeLayer === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-manrope text-neutral-900">Layer 3 — Unified Risk Graph</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">
                        Builds entity relationships, fraud ecosystems, identity linkage, behavioral correlation, device relationships, financial flows, insider networks, and operational dependencies.
                      </p>
                    </div>
                  )}
                  {activeLayer === 4 && (
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-manrope text-neutral-900">Layer 4 — Decision & Orchestration Engine</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">
                        Supports fraud interventions, workflow automation, escalation routing, analyst assignment, adaptive scoring, transaction blocking, case generation, and governance enforcement.
                      </p>
                    </div>
                  )}
                  {activeLayer === 5 && (
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold font-manrope text-neutral-900">Layer 5 — Investigation & Governance Layer</h4>
                      <p className="text-sm text-zinc-500 font-inter leading-relaxed">
                        Provides investigation workspaces, evidence management, analyst tooling, compliance reporting, audit logging, remediation workflows, AI copilots, and executive reporting.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-zinc-200 mt-8 text-[11px] text-zinc-400 font-mono">
                  Sovereign deployment configurations validated dynamically.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Fraud Detection", desc: "Detect payment fraud, onboarding fraud, account takeover, insider abuse, AML exposure, synthetic identities, transaction laundering, and mobile scams." },
                { title: "Behavioral Analytics Engine", desc: "Analyze typing cadence, transaction behavior, workflow consistency, session anomalies, employee behavior, and customer interaction patterns." },
                { title: "Graph Intelligence System", desc: "Visualize fraud rings, linked accounts, transaction chains, identity ecosystems, device relationships, and insider networks." },
                { title: "AI Copilot & Analyst Intelligence", desc: "Enable investigation summaries, AI recommendations, automated evidence analysis, entity explanations, fraud narratives, and escalation suggestions." },
                { title: "Risk Scoring Framework", desc: "Generate trust scores, transaction risk, onboarding confidence, device trust, merchant legitimacy, and behavioral integrity." },
                { title: "Identity Intelligence", desc: "Support KYC verification, biometric analysis, document intelligence, onboarding trust, and synthetic identity detection." },
                { title: "Device Intelligence", desc: "Detect emulator farms, spoofed environments, rooted devices, session hijacking, and remote access abuse." },
                { title: "Transaction Monitoring", desc: "Monitor payment flows, suspicious transfers, velocity anomalies, AML indicators, settlement abuse, and dispute activity." },
                { title: "Workflow Automation", desc: "Automate investigations, escalations, fraud interventions, remediation workflows, analyst routing, and governance operations." },
                { title: "Governance & Compliance", desc: "Support audit readiness, AML frameworks, KYC compliance, SOX controls, governance reporting, and operational transparency." }
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

        {/* ================= SECTION 5: AI ENGINE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">AI Native</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              AI-Native Fraud Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense integrates AI across every layer of the platform. The AI engine continuously explains fraud decisions, summarizes investigations, identifies hidden patterns, detects anomalies, correlates entity relationships, recommends actions, prioritizes alerts, and accelerates investigations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "AI Fraud Analyst", desc: "Auto-generates fraud narratives, alert explanations, investigation summaries, and escalation recommendations." },
                { title: "AI Behavioral Engine", desc: "Learns normal user behavior, operational baselines, transaction patterns, and workforce activity." },
                { title: "AI Graph Correlation", desc: "Discovers hidden fraud rings, suspicious entity clusters, laundering ecosystems, and insider collusion." },
                { title: "AI Governance Assistant", desc: "Supports audit summaries, remediation guidance, compliance reporting, and governance recommendations." }
              ].map((ai, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl flex flex-col gap-4">
                  <Cpu className="w-8 h-8 text-red-500" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ai.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ai.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: INTEGRATIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Infrastructure Connected</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built for Enterprise Infrastructure
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { cat: "Payments & Banking", items: ["Stripe", "Adyen", "Flutterwave", "Paystack", "Visa", "Mastercard"] },
                { cat: "Cloud & Infrastructure", items: ["AWS", "Azure", "GCP", "Snowflake", "Databricks"] },
                { cat: "Security & SIEM", items: ["Splunk", "Sentinel", "CrowdStrike", "Okta", "Palo Alto"] },
                { cat: "Enterprise Systems", items: ["Salesforce", "SAP", "Oracle", "ServiceNow", "Workday"] },
                { cat: "Data Streaming", items: ["Kafka", "RabbitMQ", "Pub/Sub", "Kinesis"] }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-red-500 font-bold block mb-4 font-mono uppercase tracking-wider">{item.cat}</span>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((it, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] text-zinc-500 font-mono">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: SECURITY & RELIABILITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Zero Trust</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade Security & Reliability
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Zero-Trust Architecture", desc: "Granular identity and access enforcement." },
                { title: "Multi-Tenant Isolation", desc: "Secure tenant separation at infrastructure level." },
                { title: "End-to-End Encryption", desc: "Encryption at rest and in transit." },
                { title: "Immutable Audit Logging", desc: "Tamper-resistant operational history." },
                { title: "Regional Deployment Controls", desc: "Support for global data residency requirements." },
                { title: "High Availability Infrastructure", desc: "Enterprise uptime and resilience architecture." }
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

        {/* ================= SECTION 8: PERSONAS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Aligned Teams</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Designed for Every Risk and Operations Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                { role: "Fraud Analysts", desc: "Investigate fraud and suspicious activity." },
                { role: "Risk Teams", desc: "Monitor enterprise operational exposure." },
                { role: "AML Teams", desc: "Detect suspicious financial activity." },
                { role: "Compliance Teams", desc: "Automate governance and controls." },
                { role: "Security Operations", desc: "Monitor insider and operational threats." },
                { role: "Executives", desc: "Access enterprise-wide intelligence visibility." }
              ].map((per, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <span className="text-xs font-bold font-manrope text-neutral-900 uppercase tracking-wider">{per.role}</span>
                  <p className="text-xs text-zinc-500">{per.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">PLATFORM OPERATIONS FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Is DeepSense modular?", 
                  a: "Yes. DeepSense is fully modular and organizations can deploy only the capabilities they require." 
                },
                { 
                  q: "Can DeepSense integrate with existing infrastructure?", 
                  a: "Yes. DeepSense integrates with payment systems, cloud platforms, SIEMs, ERPs, CRMs, identity systems, and data pipelines." 
                },
                { 
                  q: "Does DeepSense support AI-assisted investigations?", 
                  a: "Yes. AI copilots assist analysts with summaries, graph analysis, investigation recommendations, and operational intelligence." 
                },
                { 
                  q: "Can DeepSense operate in real time?", 
                  a: "Yes. The platform is designed for sub-second decisioning and real-time fraud orchestration." 
                },
                { 
                  q: "Does DeepSense support enterprise governance requirements?", 
                  a: "Yes. DeepSense includes governance automation, audit logging, compliance workflows, and executive reporting." 
                },
                { 
                  q: "Is DeepSense suitable for global enterprise deployment?", 
                  a: "Yes. DeepSense supports multi-region deployments, multi-tenant architecture, enterprise scalability, and high-availability infrastructure." 
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

        {/* ================= SECTION 10: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build a Unified Fraud Intelligence and Risk Operations Platform</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure enterprise ecosystems and build <br />
                <span className="text-white/40 font-bold">operational trust dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize fraud detection, investigations, behavioral analytics, graph intelligence, and governance operations into one enterprise-grade intelligence platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Platform Demo
              </Link>
              <Link href="/platform/capabilities#architecture" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Platform Architecture
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
