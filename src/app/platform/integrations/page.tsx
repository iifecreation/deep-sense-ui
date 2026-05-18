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

export default function PlatformIntegrationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("payments");
  
  // Interactive console parameters
  const [integrationScope, setIntegrationScope] = useState<string>("global");
  const [webhookTracing, setWebhookTracing] = useState<boolean>(true);
  const [apiThrottling, setApiThrottling] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic integration metrics
  const calculateIntegrationMetrics = () => {
    let apiLatency = "4.2 ms";
    let ingestionThroughput = "1.8M msg/min";
    let failedWebhooks = 0;
    let recommendation = "INTEGRATION FABRIC GREEN: API endpoints synchronized perfectly globally";
    let color = "text-emerald-400";
    
    if (integrationScope === "local") {
      apiLatency = "142.8 ms";
      ingestionThroughput = "240k msg/min";
      failedWebhooks = 18;
      recommendation = "CRITICAL METRIC EXPOSURE: unthrottled payment API spikes causing timeout errors.";
      color = "text-red-400 animate-pulse";
    }
    if (webhookTracing) {
      apiLatency = "3.1 ms";
    }
    if (apiThrottling) {
      failedWebhooks = Math.max(failedWebhooks - 12, 0);
    }
    
    return { apiLatency, ingestionThroughput, failedWebhooks, recommendation, color };
  };

  const { apiLatency, ingestionThroughput, failedWebhooks, recommendation, color } = calculateIntegrationMetrics();

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
                ENTERPRISE CONNECTIVITY & OPERATIONAL INTEGRATIONS
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Connect Fraud Intelligence <br />
                <span className="text-zinc-400">Across Your Entire Enterprise Ecosystem</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Integrations unify payment systems, cloud infrastructure, fraud platforms, operational tooling, governance systems, and AI intelligence environments into one connected real-time fraud operations ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Explore Integrations
                </Link>
                <Link href="/platform/integrations#architecture" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  View Integration Architecture
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise environments requiring secure, scalable, real-time connectivity across fraud operations, governance systems, AI infrastructure, and operational intelligence platforms.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Sliders className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Unified Enterprise Integration Control Plane</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CONNECTION BUS: NOMINAL</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A real-time integration orchestration environment visualizing: API connectivity, event ingestion pipelines, webhook orchestration, fraud telemetry streams, cloud infrastructure synchronization, governance integrations, operational data exchange, and AI enrichment workflows.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Integration Categories */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Integration Categories</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Payment Integrations",
                        "Identity Providers",
                        "SIEM & Security",
                        "Cloud Infrastructure",
                        "Data Streaming",
                        "Governance Systems",
                        "CRM & ERP",
                        "AI & Analytics",
                        "Workflow Automation",
                        "API & Webhooks"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v3.2</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Real-Time Connectivity Map */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>REAL-TIME CONNECTIVITY MAP</span>
                        <span>TELEMETRY CONNECTOR ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Integration Scope</span>
                          <select 
                            value={integrationScope} 
                            onChange={(e) => setIntegrationScope(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="global">Connected globally</option>
                            <option value="local">Local sandbox isolation</option>
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
                          <span className="text-zinc-500 block uppercase">Rate-limiting limits</span>
                          <input 
                            type="checkbox" 
                            checked={apiThrottling} 
                            onChange={(e) => setApiThrottling(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Ingestion throughput</span>
                          <span className="text-xl font-bold text-white mt-1 block">{ingestionThroughput}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">API Latency</span>
                          <span className="text-xl font-bold text-white mt-1 block">{apiLatency}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Failed webhooks</span>
                          <span className={`text-xl font-bold mt-1 block ${failedWebhooks > 0 ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {failedWebhooks} items
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:26:00] • integration events: partner Stripe telemetry payload synchronized</div>
                        <div>[19:26:15] • webhook execution: case updates pushed to regional GRC instances</div>
                        <div>[19:26:30] • synchronization jobs: AWS cloud database keys rotated automatically</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Integration Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI-Generated Analysis</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">Dependency analytics</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous multi-region SaaS data sync complete. 100% endpoints operational.
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

        {/* ================= SECTION 2: INTEGRATIONS OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Ecosystem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Connected Intelligence Ecosystem Across Fraud, Risk, and Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Integrations connect: fraud detection systems, payment infrastructure, onboarding platforms, SIEM environments, identity providers, governance tooling, cloud infrastructure, and enterprise operational systems. The platform enables organizations to: centralize operational telemetry, enrich fraud intelligence, automate cross-system workflows, synchronize investigations, reduce operational silos, accelerate deployment, and improve governance visibility. DeepSense supports: real-time APIs, event-driven architecture, streaming pipelines, webhook orchestration, secure authentication, and distributed integration infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "centralize operational telemetry", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "enrich fraud intelligence", desc: "Verify portal checkouts without introducing user friction." },
                { title: "automate cross-system workflows", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "synchronize investigations", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "reduce operational silos", desc: "Support digital GRC with active security control overlays." },
                { title: "improve governance visibility", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Integration Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time API Infrastructure", desc: "Support REST APIs, GraphQL APIs, streaming APIs, low-latency ingestion, secure authentication, and operational telemetry exchange." },
                { title: "Webhook Orchestration", desc: "Enable fraud event notifications, workflow triggers, operational escalations, investigation synchronization, governance updates, and real-time system coordination." },
                { title: "Payment Infrastructure", desc: "Connect payment gateways, banking systems, card processors, wallet ecosystems, settlement infrastructure, and transaction intelligence platforms." },
                { title: "Identity & Access", desc: "Integrate Okta, Azure AD, Auth0, SSO providers, MFA systems, and enterprise IAM infrastructure." },
                { title: "SIEM & Security Connectivity", desc: "Support Splunk, Microsoft Sentinel, QRadar, CrowdStrike, Palo Alto, and enterprise security tooling." },
                { title: "Cloud & Data Infrastructure", desc: "Integrate AWS, Azure, GCP, Snowflake, Databricks, Kafka, Kinesis, and Pub/Sub." },
                { title: "CRM & Enterprise Operations", desc: "Connect Salesforce, SAP, Oracle, ServiceNow, and Workday." },
                { title: "AI & Analytics Ecosystems", desc: "Enable AI enrichment, vector intelligence, analytics pipelines, ML orchestration, and operational intelligence processing." },
                { title: "Governance & Compliance", desc: "Synchronize audit tooling, governance workflows, compliance reporting, remediation systems, and operational oversight platforms." },
                { title: "Observability & Monitoring", desc: "Monitor API performance, webhook execution, ingestion health, synchronization latency, operational dependencies, and infrastructure resilience." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">INT-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: ARCHITECTURE LAYERS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="architecture">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Architecture Layers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Event-Driven Integration Architecture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Layer 1 — API Gateway", desc: "Handles authentication, rate limiting, request validation, routing, API governance, and operational telemetry." },
                { title: "Layer 2 — Event Streaming", desc: "Processes transaction streams, fraud events, onboarding telemetry, operational workflows, and governance notifications." },
                { title: "Layer 3 — Orchestration", desc: "Coordinates webhook execution, workflow synchronization, event routing, operational enrichment, and AI correlation." },
                { title: "Layer 4 — Enrichment", desc: "Enriches fraud signals, graph intelligence, behavioral analytics, transaction context, and operational metadata." },
                { title: "Layer 5 — Observability", desc: "Provides integration observability, governance enforcement, operational auditing, SLA tracking, and resilience monitoring." }
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

        {/* ================= SECTION 5: MARKETPLACE CATEGORIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="marketplace">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Integration Hub</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Enterprise Integration Marketplace
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "payments", label: "Payment Providers" },
                { id: "identity", label: "Identity Providers" },
                { id: "security", label: "Security Platforms" },
                { id: "cloud", label: "Cloud Infrastructure" },
                { id: "operational", label: "Operational Systems" },
                { id: "streaming", label: "Data Streaming" }
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
              {activeTab === "payments" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Stripe, Adyen, Flutterwave, Paystack, Visa, and Mastercard.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "identity" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Okta, Auth0, and Azure AD.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Splunk, Sentinel, CrowdStrike, and Palo Alto.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "cloud" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">AWS, Azure, GCP, Snowflake, and Databricks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "operational" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Salesforce, SAP, ServiceNow, and Workday.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "streaming" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Kafka, Kinesis, RabbitMQ, and Pub/Sub.</h4>
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
              Enterprise-Grade Integration Security and Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Secure API Authentication", desc: "OAuth, tokenization, key rotation, and RBAC enforcement." },
                { title: "Encrypted Operational Traffic", desc: "Secure event and telemetry exchange." },
                { title: "Integration Audit Logging", desc: "Immutable operational integration history." },
                { title: "Governance Workflow Controls", desc: "Integrated compliance and approval enforcement." },
                { title: "Multi-Tenant Integration Isolation", desc: "Secure enterprise operational boundaries." },
                { title: "Infrastructure Resilience", desc: "Failover-aware integration orchestration." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">INTEGRATION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What systems can DeepSense integrate with?", 
                  a: "DeepSense integrates with payment systems, cloud infrastructure, SIEM platforms, identity providers, governance tooling, AI ecosystems, and enterprise operational systems." 
                },
                { 
                  q: "Does DeepSense support real-time APIs and webhooks?", 
                  a: "Yes. DeepSense provides low-latency APIs, webhook orchestration, event streaming, and operational synchronization infrastructure." 
                },
                { 
                  q: "Can DeepSense integrate into existing fraud and security environments?", 
                  a: "Yes. DeepSense integrates with existing fraud tooling, SIEM systems, governance platforms, operational analytics infrastructure, and enterprise ecosystems." 
                },
                { 
                  q: "Does DeepSense support event-driven architecture?", 
                  a: "Yes. DeepSense uses distributed event-driven infrastructure for real-time intelligence synchronization and operational orchestration." 
                },
                { 
                  q: "Can organizations monitor integration performance and operational health?", 
                  a: "Yes. DeepSense provides integration observability, webhook monitoring, SLA tracking, operational telemetry analytics, and infrastructure health monitoring." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale integration environments?", 
                  a: "Yes. DeepSense is designed for high-scale, multi-region enterprise connectivity with secure operational orchestration and resilient infrastructure." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Unify Enterprise Fraud Intelligence Through Real-Time Connectivity</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Connect fraud systems, operational tooling, <br />
                <span className="text-white/40 font-bold font-bold font-bold">and trace suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Connect fraud systems, operational tooling, governance workflows, and AI intelligence into one unified enterprise ecosystem using DeepSense Integrations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Explore Integrations
              </Link>
              <Link href="/platform/integrations#architecture" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                View Integration Architecture
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
