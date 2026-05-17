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

export default function PlatformScalabilityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("compute");
  
  // Interactive console parameters
  const [clusterCapacity, setClusterCapacity] = useState<string>("baseline");
  const [elasticFailover, setElasticFailover] = useState<boolean>(true);
  const [vectorAcceleration, setVectorAcceleration] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic scalability metrics
  const calculateScalabilityMetrics = () => {
    let globalThroughput = "2.4M msg/sec";
    let utilizationIndex = "48%";
    let activeNodes = "1,200 clusters";
    let recommendation = "SCALING NODES GREEN: global cluster workloads aligned dynamically";
    let color = "text-emerald-400";
    
    if (clusterCapacity === "overload") {
      globalThroughput = "24.8M msg/sec";
      utilizationIndex = "96.4%";
      activeNodes = "8,400 clusters";
      recommendation = "CRITICAL METRIC HIGH: scaling limits approaching capacity threshold warnings.";
      color = "text-red-400 animate-pulse";
    }
    if (elasticFailover) {
      activeNodes = "4,200 clusters";
    }
    if (vectorAcceleration) {
      utilizationIndex = "18%";
    }
    
    return { globalThroughput, utilizationIndex, activeNodes, recommendation, color };
  };

  const { globalThroughput, utilizationIndex, activeNodes, recommendation, color } = calculateScalabilityMetrics();

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
                <Globe className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                GLOBAL FRAUD INTELLIGENCE INFRASTRUCTURE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Built to Scale Fraud Intelligence <br />
                <span className="text-zinc-400">Across Global Enterprise Operations</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense delivers distributed real-time fraud intelligence, AI orchestration, graph analytics, transaction monitoring, and operational governance at global scale using cloud-native infrastructure engineered for resilience, elasticity, and low-latency decisioning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Scalability Review
                </Link>
                <Link href="/platform/scalability#infrastructure" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Global Infrastructure
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Designed for banks, payment processors, telecoms, enterprises, governments, marketplaces, and global operational ecosystems processing millions of real-time events.
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
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Global Distributed Intelligence Infrastructure Map</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SCALING CLUSTERS: ONLINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A real-time infrastructure visualization showing: global regions, distributed fraud scoring clusters, AI inference nodes, graph processing engines, event streaming pipelines, failover systems, operational throughput, and cross-region orchestration.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Infrastructure Scaling Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Scaling Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Event Streaming",
                        "AI Processing",
                        "Graph Correlation",
                        "Regional Failover",
                        "Elastic Scaling",
                        "Infrastructure Observability",
                        "API Throughput",
                        "Operational Resilience",
                        "Multi-Tenant Scaling",
                        "Distributed Storage"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v4.0</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Global Operational Intelligence Map */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>GLOBAL OPERATIONAL INTELLIGENCE MAP</span>
                        <span>LATENCY OPTIMIZER ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Cluster load</span>
                          <select 
                            value={clusterCapacity} 
                            onChange={(e) => setClusterCapacity(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="baseline">Baseline metrics</option>
                            <option value="overload">Peak transaction surge</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Elastic Failover</span>
                          <input 
                            type="checkbox" 
                            checked={elasticFailover} 
                            onChange={(e) => setElasticFailover(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">GPU Acceleration</span>
                          <input 
                            type="checkbox" 
                            checked={vectorAcceleration} 
                            onChange={(e) => setVectorAcceleration(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">global throughput</span>
                          <span className="text-xl font-bold text-white mt-1 block">{globalThroughput}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">utilization Index</span>
                          <span className="text-xl font-bold text-white mt-1 block">{utilizationIndex}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Active nodes</span>
                          <span className="text-xl font-bold text-white mt-1 block">{activeNodes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Infrastructure Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Infrastructure Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:26:00] • scaling events: automatic auto-scaling provisions 12 additional clusters</div>
                        <div>[19:26:15] • workload redistribution: regional database replication sync complete</div>
                        <div>[19:26:30] • failover activity: geographic failover health validation cleared</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Infrastructure Scaling</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI Inference latency</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">SLA compliance</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous sub-second scoring tracking cleared. Zero latency drift.
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

        {/* ================= SECTION 2: OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Hyperscale Infrastructure</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Distributed Intelligence Infrastructure Built for Enterprise Scale
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense infrastructure is engineered to support: real-time fraud detection, AI-driven investigations, graph intelligence processing, behavioral analytics, transaction monitoring, governance workflows, operational orchestration, and executive intelligence. The platform combines: distributed event streaming, cloud-native orchestration, elastic compute infrastructure, AI inference pipelines, regional failover systems, distributed graph processing, operational telemetry monitoring, and infrastructure observability. DeepSense enables organizations to: process millions of concurrent events, maintain low-latency fraud scoring, scale investigations globally, support multi-region deployments, optimize operational resilience, and centralize global intelligence operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "process millions of events", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "maintain low-latency scoring", desc: "Verify portal checkouts without introducing user friction." },
                { title: "scale investigations globally", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "support multi-region deployments", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "optimize operational resilience", desc: "Support digital GRC with active security control overlays." },
                { title: "centralize global intelligence", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise-Scale Infrastructure Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Distributed Event Processing", desc: "Process transaction streams, onboarding telemetry, behavioral analytics, authentication activity, governance workflows, and operational telemetry." },
                { title: "Elastic Auto-Scaling Infrastructure", desc: "Automatically scale ingestion pipelines, AI workloads, fraud scoring engines, graph databases, orchestration systems, and investigation environments." },
                { title: "Real-Time Fraud Scoring at Scale", desc: "Support sub-second decisioning, low-latency evaluations, distributed scoring engines, operational prioritization, and adaptive trust models." },
                { title: "Global Multi-Region Deployments", desc: "Enable regional redundancy, geographic failover, local operational control, data residency support, and distributed orchestration." },
                { title: "AI Inference Scalability", desc: "Scale AI copilots, graph reasoning, anomaly detection, behavioral intelligence, workflow recommendations, and operational summarization." },
                { title: "Distributed Graph Intelligence", desc: "Support multi-hop graph analysis, relationship correlation, transaction tracing, fraud ring detection, entity clustering, and path optimization." },
                { title: "Operational Resilience & Failover", desc: "Provide automatic recovery, infrastructure redundancy, service continuity, distributed failover, and workload redistribution." },
                { title: "Multi-Tenant Isolation", desc: "Maintain tenant segmentation, workload separation, regional isolation, secure operational scaling, and enterprise boundaries." },
                { title: "Infrastructure Observability", desc: "Monitor ingestion latency, fraud scoring speed, AI inference timing, graph performance, operational throughput, and SLA compliance." },
                { title: "High-Volume API & Webhooks", desc: "Handle massive API throughput, webhook orchestration, streaming integrations, and operational synchronization." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">SCAL-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: INFRASTRUCTURE LAYERS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="infrastructure">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Architecture Layers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Global Infrastructure Designed for Continuous Operational Availability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Layer 1 — Regional Ingestion", desc: "Collect local telemetry, transaction activity, onboarding workflows, authentication events, and operational streams." },
                { title: "Layer 2 — Processing Clusters", desc: "Execute fraud scoring, AI enrichment, graph correlation, behavioral analysis, and operational orchestration." },
                { title: "Layer 3 — Intelligence Coordination", desc: "Synchronize graph relationships, operational intelligence, governance activity, workflow execution, and AI reasoning." },
                { title: "Layer 4 — Global Orchestration", desc: "Coordinate infrastructure scaling, failover systems, workload balancing, resilience monitoring, and regional health." },
                { title: "Layer 5 — Governance & Security", desc: "Enforce tenant isolation, operational controls, encryption, governance oversight, and infrastructure security." }
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

        {/* ================= SECTION 5: ELASTIC INFRASTRUCTURE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Scaling Control</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Elastic Infrastructure for Dynamic Operational Demand
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Auto-Scaling Compute Clusters", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "Distributed Queue Management", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Real-Time Workload Redistribution", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Adaptive AI Resource Allocation", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "High-Speed Graph Query Scaling", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "Operational Burst Handling", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: AI INFRASTRUCTURE SCALING tabs ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Scaling</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              AI-Native Infrastructure for Massive Operational Intelligence Workloads
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "compute", label: "Elastic Auto-Scaling" },
                { id: "queue", label: "Queue Management" },
                { id: "redistribute", label: "Workload Balancing" },
                { id: "gpu", label: "Adaptive GPU Allocation" },
                { id: "graph", label: "Graph Query Scaling" },
                { id: "burst", label: "Operational Bursting" }
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
              {activeTab === "compute" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Dynamic compute cluster auto-scaling thresholds.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "queue" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Distributed queue buffers and streaming message balancing.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "redistribute" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Multi-region automatic workloads redistribution.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "gpu" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Dedicated AI processor GPU acceleration arrays.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "graph" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Sub-second multi-hop graph path analysis workloads scaling.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "burst" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Dynamic burst allocation and failover memory layers.</h4>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">SCALABILITY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense support global enterprise deployments?", 
                  a: "Yes. DeepSense supports multi-region deployments, regional failover, distributed orchestration, and enterprise-grade global operational infrastructure." 
                },
                { 
                  q: "How does DeepSense scale real-time fraud detection?", 
                  a: "DeepSense uses distributed event processing, elastic compute infrastructure, AI orchestration, and low-latency fraud scoring pipelines." 
                },
                { 
                  q: "Can the platform handle large transaction volumes and operational spikes?", 
                  a: "Yes. DeepSense dynamically scales infrastructure to handle transaction surges, onboarding spikes, AI processing demand, and investigation workloads." 
                },
                { 
                  q: "Does DeepSense support operational resilience and disaster recovery?", 
                  a: "Yes. The platform includes multi-region failover, distributed redundancy, disaster recovery automation, and continuous operational monitoring." 
                },
                { 
                  q: "How does DeepSense optimize AI workloads at scale?", 
                  a: "DeepSense uses distributed inference pipelines, vector processing systems, retrieval orchestration, and adaptive AI resource allocation." 
                },
                { 
                  q: "Is DeepSense suitable for mission-critical operational environments?", 
                  a: "Yes. DeepSense is designed for high-scale, low-latency, mission-critical fraud intelligence and operational governance environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Scale Fraud Intelligence Across Global Enterprise Operations</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Scale fraud intelligence globally and enforce <br />
                <span className="text-white/40 font-bold font-bold font-bold">continuous operational resilience.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Deploy distributed fraud intelligence, AI orchestration, graph analytics, and operational governance infrastructure at enterprise scale using DeepSense Scalability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Scalability Review
              </Link>
              <Link href="/platform/scalability#infrastructure" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Global Infrastructure
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
