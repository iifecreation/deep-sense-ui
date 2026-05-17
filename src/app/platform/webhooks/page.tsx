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

export default function PlatformWebhooksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("api");
  
  // Interactive console parameters
  const [throughputPreset, setThroughputPreset] = useState<string>("baseline");
  const [webhookTracing, setWebhookTracing] = useState<boolean>(true);
  const [eventReplayActive, setEventReplayActive] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic API metrics
  const calculateApiMetrics = () => {
    let apiThroughput = "242,000 req/min";
    let webhookSuccess = "99.99%";
    let ingestionLatency = "1.2 ms";
    let recommendation = "API GATEWAY NOMINAL: all multi-region nodes processing events with sub-millisecond route latency";
    let color = "text-emerald-400";
    
    if (throughputPreset === "burst") {
      apiThroughput = "14,800,000 req/min";
      webhookSuccess = "91.2%";
      ingestionLatency = "142.8 ms";
      recommendation = "CRITICAL BUFFER SPIKE: distributed queues auto-scaling automatically to buffer downstream endpoints.";
      color = "text-red-400 animate-pulse";
    }
    if (webhookTracing) {
      webhookSuccess = "100.00%";
    }
    if (eventReplayActive) {
      ingestionLatency = "0.8 ms";
    }
    
    return { apiThroughput, webhookSuccess, ingestionLatency, recommendation, color };
  };

  const { apiThroughput, webhookSuccess, ingestionLatency, recommendation, color } = calculateApiMetrics();

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
                <Sliders className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME APIs, WEBHOOKS & EVENT INFRASTRUCTURE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Power Real-Time Fraud Intelligence <br />
                <span className="text-zinc-400">With Enterprise APIs and Event Infrastructure</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense APIs & Webhooks enable enterprises to ingest operational telemetry, stream fraud intelligence, orchestrate workflows, automate escalations, and synchronize AI-driven operational intelligence across distributed systems in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Explore API Platform
                </Link>
                <Link href="/platform/webhooks#architecture" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  View Developer Docs
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise engineering teams, fraud platforms, fintechs, payment ecosystems, cloud-native environments, and high-scale operational infrastructures.
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
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Real-Time Event Orchestration & API Control Plane</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">EVENT BUS: ONLINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live API orchestration environment visualizing: fraud event ingestion, webhook execution, operational synchronization, API request flows, AI intelligence streaming, workflow automation, integration observability, and event-driven infrastructure.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Developer Infrastructure Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Developer Infrastructure</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "REST APIs",
                        "GraphQL APIs",
                        "Streaming APIs",
                        "Webhooks",
                        "Event Routing",
                        "Fraud Intelligence APIs",
                        "AI APIs",
                        "Workflow Triggers",
                        "API Security",
                        "Integration Monitoring"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v4.4</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Operational Event Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE OPERATIONAL EVENT STREAM</span>
                        <span>LATENCY BUFFER NOMINAL</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Ingestion Load</span>
                          <select 
                            value={throughputPreset} 
                            onChange={(e) => setThroughputPreset(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="baseline">Standard operational baseline</option>
                            <option value="burst">Peak Black Friday 100x spikes</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Webhook tracing</span>
                          <input 
                            type="checkbox" 
                            checked={webhookTracing} 
                            onChange={(e) => setWebhookTracing(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Event Replay</span>
                          <input 
                            type="checkbox" 
                            checked={eventReplayActive} 
                            onChange={(e) => setEventReplayActive(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">API Throughput</span>
                          <span className="text-xl font-bold text-white mt-1 block">{apiThroughput}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Webhook Success</span>
                          <span className="text-xl font-bold text-white mt-1 block">{webhookSuccess}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Ingestion Latency</span>
                          <span className={`text-xl font-bold mt-1 block ${ingestionLatency === "142.8 ms" ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {ingestionLatency}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:29:10] • API requests: transaction payload evaluation complete in 1.2ms</div>
                        <div>[19:29:25] • webhook retries: automatic retry scheduler backoff cleared</div>
                        <div>[19:29:40] • integration failures: none detected globally</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI-Generated Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">API GATEWAY TELEMETRY</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">dependency analytics</span>
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

        {/* ================= SECTION 2: APIs OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Developer Connectivity</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time Connectivity for Fraud, Risk, and Operational Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense APIs & Webhooks provide: real-time fraud intelligence ingestion, AI-powered operational enrichment, workflow automation triggers, webhook orchestration, event streaming infrastructure, operational synchronization, distributed intelligence delivery, and enterprise integration capabilities. The platform enables organizations to: integrate fraud detection into applications, automate operational workflows, stream AI intelligence in real time, synchronize investigations, centralize telemetry ingestion, reduce operational latency, and orchestrate distributed intelligence systems. DeepSense supports: REST APIs, GraphQL APIs, event-driven architecture, streaming ingestion, webhook orchestration, and developer-first infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "integrate fraud detection", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "automate operational workflows", desc: "Verify portal checkouts without introducing user friction." },
                { title: "stream AI intelligence", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "synchronize investigations", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "centralize telemetry", desc: "Support digital GRC with active security control overlays." },
                { title: "reduce operational latency", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Developer Infrastructure Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Fraud Ingestion", desc: "Expose fraud scoring, transaction risk evaluation, onboarding trust scoring, identity intelligence, device intelligence, and graph intelligence." },
                { title: "Event-Driven Webhooks", desc: "Trigger fraud escalations, onboarding decisions, transaction alerts, workflow automation, governance actions, and operational notifications." },
                { title: "AI Intelligence APIs", desc: "Access AI summaries, anomaly explanations, graph reasoning, operational insights, investigation recommendations, and executive intelligence." },
                { title: "Streaming Data Ingestion", desc: "Support Kafka streams, event queues, operational telemetry, transaction ingestion, behavioral analytics streams, and distributed event routing." },
                { title: "Workflow Automation APIs", desc: "Coordinate escalation workflows, remediation actions, analyst routing, governance approvals, and operational orchestration." },
                { title: "Graph Intelligence APIs", desc: "Query entity relationships, fraud rings, transaction chains, device ecosystems, onboarding relationships, and insider-risk networks." },
                { title: "Authentication & Security", desc: "Support OAuth2, JWT authentication, API key management, RBAC enforcement, token rotation, and tenant isolation." },
                { title: "Event Replay & Recovery", desc: "Enable webhook replay, operational recovery, failed event retry, event history tracking, and infrastructure resilience." },
                { title: "Integration Observability", desc: "Monitor API latency, webhook execution, request throughput, infrastructure health, dependency analytics, and SLA performance." },
                { title: "Developer Experience", desc: "Provide SDKs, sandbox environments, API explorers, webhook simulators, integration templates, and developer analytics." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">API-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: ARCHITECTURE LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="architecture">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Architecture Layers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Event-Driven Architecture Built for Real-Time Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Event Ingestion", desc: "DeepSense ingests transactions, onboarding telemetry, authentication events, behavioral signals, fraud alerts, and governance activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using AI intelligence, graph correlation, behavioral analytics, device trust, and operational context." },
                { title: "Step 3 — Decisioning", desc: "DeepSense evaluates fraud probability, transaction legitimacy, onboarding trust, governance exposure, and operational anomalies." },
                { title: "Step 4 — Webhook Execution", desc: "The system triggers fraud alerts, remediation workflows, onboarding approvals, governance escalations, and operational notifications." },
                { title: "Step 5 — Synchronization", desc: "DeepSense synchronizes external platforms, SIEM systems, payment infrastructure, fraud tooling, and operational intelligence systems." }
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

        {/* ================= SECTION 5: REAL-TIME AUTOMATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Orchestration Control</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Automate Fraud Operations With Event-Driven Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Event Ingestion", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "AI-Powered Operational Triggers", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Real-Time Escalation Routing", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Automated Governance Notifications", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "Distributed Workflow Coordination", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "Operational Sync Intelligence", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: API SECURITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Integrations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade API Security and Operational Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Secure Authentication", desc: "OAuth2, JWT, RBAC, API key governance." },
                { title: "Encrypted Operational Traffic", desc: "Secure API and webhook communication." },
                { title: "Multi-Tenant Isolation", desc: "Secure enterprise integration segregation." },
                { title: "Immutable Operational Logging", desc: "Audit-ready API and webhook history." },
                { title: "Governance Workflow Controls", desc: "Integrated approval and operational enforcement." },
                { title: "Infrastructure Resilience & Recovery", desc: "Replay-aware event infrastructure and failover." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">DEVELOPER FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What APIs does DeepSense provide?", 
                  a: "DeepSense provides APIs for fraud scoring, onboarding intelligence, transaction monitoring, graph intelligence, AI insights, workflow automation, and governance operations." 
                },
                { 
                  q: "Does DeepSense support real-time webhooks and event streaming?", 
                  a: "Yes. DeepSense supports event-driven webhook orchestration, operational notifications, workflow triggers, and streaming intelligence pipelines." 
                },
                { 
                  q: "Can enterprises integrate DeepSense into existing infrastructure?", 
                  a: "Yes. DeepSense integrates with payment systems, SIEMs, onboarding platforms, cloud infrastructure, fraud tooling, and operational ecosystems." 
                },
                { 
                  q: "Does DeepSense support enterprise-grade API security?", 
                  a: "Yes. The platform supports OAuth2, JWT authentication, RBAC enforcement, encryption, tenant isolation, and operational governance controls." 
                },
                { 
                  q: "Can organizations monitor API and webhook performance in real time?", 
                  a: "Yes. DeepSense provides observability dashboards, webhook monitoring, API analytics, SLA tracking, and operational infrastructure monitoring." 
                },
                { 
                  q: "Is DeepSense suitable for large-scale developer and operational environments?", 
                  a: "Yes. DeepSense is designed for enterprise-scale event-driven architectures, distributed operational infrastructure, and mission-critical fraud intelligence environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Real-Time Fraud Intelligence Into Every System and Workflow</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Orchestrate event-driven decisioning and scale <br />
                <span className="text-white/40 font-bold font-bold font-bold">verifiable API pipelines globally.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Integrate AI-powered fraud intelligence, automate operational workflows, orchestrate event-driven decisioning, and synchronize enterprise intelligence using DeepSense APIs & Webhooks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Explore API Platform
              </Link>
              <Link href="/platform/webhooks#architecture" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                View Developer Docs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
