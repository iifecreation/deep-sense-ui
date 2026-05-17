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

export default function PlatformArchitecturePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("multiregion");
  
  // Interactive console parameters
  const [systemLoad, setSystemLoad] = useState<string>("baseline");
  const [streamClustering, setStreamClustering] = useState<boolean>(true);
  const [failoverSync, setFailoverSync] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic architecture metrics
  const calculateArchMetrics = () => {
    let ingestionThroughput = "2.4M msg/sec";
    let ingestionLatency = "1.4 ms";
    let scoringSpeed = "12 ms";
    let recommendation = "DISTRIBUTED CORES GREEN: stream ingestion pipelines executing at peak metrics";
    let color = "text-emerald-400";
    
    if (systemLoad === "spike") {
      ingestionThroughput = "14.8M msg/sec";
      ingestionLatency = "92.4 ms";
      scoringSpeed = "48 ms";
      recommendation = "CRITICAL THROTTLING ALERT: traffic spike requires cluster auto-scaling scaling checks.";
      color = "text-red-400 animate-pulse";
    }
    if (streamClustering) {
      ingestionLatency = "0.9 ms";
    }
    if (failoverSync) {
      scoringSpeed = "8 ms";
    }
    
    return { ingestionThroughput, ingestionLatency, scoringSpeed, recommendation, color };
  };

  const { ingestionThroughput, ingestionLatency, scoringSpeed, recommendation, color } = calculateArchMetrics();

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
                <Network className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME FRAUD INTELLIGENCE INFRASTRUCTURE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Built on a Distributed Intelligence <br />
                <span className="text-zinc-400">Architecture Designed for Enterprise Scale</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense combines streaming analytics, AI orchestration, graph intelligence, behavioral telemetry, workflow automation, and governance infrastructure into a unified real-time fraud intelligence operating system designed for modern digital ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Architecture Review
                </Link>
                <Link href="/platform/architecture#pipelines" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Infrastructure Design
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, telecoms, payment processors, enterprises, governments, and mission-critical operational environments requiring high-scale real-time intelligence.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">DeepSense Distributed Intelligence Architecture</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">INFRA CORE STATUS: NOMINAL</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live infrastructure visualization showing event ingestion pipelines, AI processing layers, graph intelligence systems, streaming analytics, orchestration engines, governance controls, global deployment regions, and operational telemetry flows.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Infrastructure Layers */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Infrastructure Layers</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Event Ingestion",
                        "Stream Processing",
                        "AI Intelligence Layer",
                        "Graph Engine",
                        "Behavioral Analytics",
                        "Workflow Orchestration",
                        "Governance Infrastructure",
                        "Storage & Data Lake",
                        "Security Layer",
                        "Global Deployment Control"
                      ].map((lay, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{lay}</span>
                          <span className="text-[9px] text-zinc-600">v4.0</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Real-Time Distributed System Map */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>REAL-TIME DISTRIBUTED SYSTEM MAP</span>
                        <span>CLUSTER COORDINATION ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Operational Load</span>
                          <select 
                            value={systemLoad} 
                            onChange={(e) => setSystemLoad(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="baseline">Baseline telemetry</option>
                            <option value="spike">Spike load (10x limit)</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Stream Clustering</span>
                          <input 
                            type="checkbox" 
                            checked={streamClustering} 
                            onChange={(e) => setStreamClustering(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Failover multi-sync</span>
                          <input 
                            type="checkbox" 
                            checked={failoverSync} 
                            onChange={(e) => setFailoverSync(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">System throughput</span>
                          <span className="text-xl font-bold text-white mt-1 block">{ingestionThroughput}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Ingestion latency</span>
                          <span className="text-xl font-bold text-white mt-1 block">{ingestionLatency}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Fraud scoring speed</span>
                          <span className="text-xl font-bold text-white mt-1 block">{scoringSpeed}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:25:00] • ingestion events: streaming transaction payloads entering Kafka cores</div>
                        <div>[19:25:15] • AI processing execution: model scoring pipeline computed in GPU clusters</div>
                        <div>[19:25:30] • graph correlation cycles: entity resolution links identified and cached</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Infrastructure telemetry</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI Inference timing</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">infrastructure health</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous data ingestion tracking active. Multi-tenant database boundaries verified.
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

        {/* ================= SECTION 2: ARCHITECTURE OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Foundational Layers</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Unified Intelligence Architecture for Fraud, Risk, and Governance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense is built as a distributed intelligence platform designed to unify: fraud detection, graph intelligence, behavioral analytics, transaction monitoring, onboarding trust, workflow orchestration, AI-assisted investigations, and governance operations. The architecture combines: streaming data pipelines, distributed event processing, graph databases, AI inference systems, orchestration engines, operational telemetry, governance infrastructure, and scalable cloud-native services. DeepSense enables enterprises to: process millions of operational events, perform sub-second fraud scoring, orchestrate global investigations, centralize operational visibility, scale fraud intelligence globally, and maintain enterprise resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "process millions of events", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "perform sub-second fraud scoring", desc: "Verify portal checkouts without introducing user friction." },
                { title: "orchestrate global investigations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "centralize operational visibility", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "scale fraud intelligence globally", desc: "Support digital GRC with active security control overlays." },
                { title: "maintain enterprise resilience", desc: "Block duplicate submissions before cash-outs settle." }
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
              Distributed Architecture Layers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Data Ingestion Layer", desc: "Ingest transactions, onboarding telemetry, authentication events, device intelligence, API activity, behavioral telemetry, SIEM streams, and operational logs." },
                { title: "Stream Processing Layer", desc: "Process fraud scoring, behavioral analysis, anomaly detection, AI enrichment, transaction evaluation, and operational correlation." },
                { title: "AI Intelligence Layer", desc: "Power AI copilots, investigation summaries, anomaly reasoning, graph correlation, workflow recommendations, and operational prioritization." },
                { title: "Graph Intelligence Layer", desc: "Build fraud graphs, entity relationships, transaction chains, device ecosystems, onboarding relationships, and insider-risk networks." },
                { title: "Operational Intelligence Layer", desc: "Coordinate case management, workflow automation, governance operations, remediation orchestration, analyst collaboration, and executive reporting." },
                { title: "Governance & Audit Layer", desc: "Provide immutable audit logging, governance approvals, compliance workflows, operational traceability, AI explainability, and enterprise oversight." },
                { title: "Security & Infrastructure Layer", desc: "Protect APIs, workloads, tenants, operational telemetry, governance systems, and identity infrastructure." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">LAY-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: REAL-TIME PIPELINES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="pipelines">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Fraud Intelligence Pipeline
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Collection", desc: "DeepSense collects user interactions, transactions, onboarding workflows, authentication activity, device telemetry, and operational events." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using graph intelligence, behavioral models, device trust, identity analytics, AI intelligence, and operational history." },
                { title: "Step 3 — Processing", desc: "DeepSense evaluates fraud indicators, anomaly patterns, relationship intelligence, trust scores, governance exposure, and operational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud risk scores, AI investigation summaries, escalation recommendations, operational insights, and remediation triggers." },
                { title: "Step 5 — Orchestration", desc: "DeepSense executes fraud interventions, analyst escalations, remediation workflows, governance approvals, and executive reporting." }
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

        {/* ================= SECTION 5: CLOUD-NATIVE DESIGN ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Infrastructure Specs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Cloud-Native Infrastructure Designed for Resilience and Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Kubernetes Services", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "Distributed Streaming", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Elastic Auto-Scaling", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Multi-Region Failover", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "High Availability Clusters", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "Observability Metrics", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: GLOBAL DEPLOYMENT tabs ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Operations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Global Infrastructure for Enterprise Intelligence Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "multiregion", label: "Multi-Region Cloud" },
                { id: "private", label: "Private Cloud" },
                { id: "hybrid", label: "Hybrid Enterprise" },
                { id: "residency", label: "Data Residency Controls" },
                { id: "failover", label: "High-Availability Failover" },
                { id: "disaster", label: "Disaster Recovery" }
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
              {activeTab === "multiregion" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Multi-region distributed cluster orchestration.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "private" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Private cloud infrastructure boundaries.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "hybrid" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Hybrid corporate hosting architecture.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "residency" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Isolated data residency regional hosting zones.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "failover" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">High-availability multi-region backup cluster synchronization.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "disaster" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Continuous cryptographic data backups & replication.</h4>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">ARCH FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What architecture powers DeepSense?", 
                  a: "DeepSense is built on a distributed cloud-native architecture combining streaming pipelines, AI inference systems, graph intelligence, operational orchestration, and governance infrastructure." 
                },
                { 
                  q: "Can DeepSense process data in real time?", 
                  a: "Yes. The platform supports sub-second fraud scoring, real-time anomaly detection, live graph correlation, and continuous operational intelligence processing." 
                },
                { 
                  q: "Does DeepSense support global enterprise deployments?", 
                  a: "Yes. DeepSense supports multi-region cloud deployments, private cloud environments, hybrid infrastructure, and regional data residency controls." 
                },
                { 
                  q: "Is the platform AI-native?", 
                  a: "Yes. AI infrastructure is embedded across investigations, graph intelligence, workflow automation, operational intelligence, and governance systems." 
                },
                { 
                  q: "Does DeepSense support enterprise-grade resilience and failover?", 
                  a: "Yes. The platform includes distributed infrastructure, high availability clustering, failover systems, disaster recovery, and operational observability." 
                },
                { 
                  q: "Can DeepSense integrate into existing enterprise infrastructure?", 
                  a: "Yes. DeepSense integrates with payment systems, SIEM platforms, cloud environments, streaming infrastructure, identity systems, and governance ecosystems." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Power Enterprise Fraud Intelligence With Distributed Real-Time Infrastructure</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Deploy AI-native fraud intelligence and scale <br />
                <span className="text-white/40 font-bold font-bold font-bold">operational GRC architectures.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Deploy AI-native fraud intelligence, graph analytics, operational orchestration, and governance infrastructure at enterprise scale using DeepSense Architecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Architecture Review
              </Link>
              <Link href="/platform/architecture#pipelines" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Infrastructure Design
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
