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

export default function SecurityPlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("saas");
  
  // Interactive console parameters
  const [securityScope, setSecurityScope] = useState<string>("global");
  const [threatDefense, setThreatDefense] = useState<boolean>(true);
  const [anomalyRules, setAnomalyRules] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic security metrics
  const calculateSecurityMetrics = () => {
    let trustScore = "99.98%";
    let activeThreatsCount = 0;
    let anomalySignals = 0;
    let recommendation = "PLATFORM HYGIENE IMMACULATE: Zero-trust filters active across all nodes";
    let color = "text-emerald-400";
    
    if (securityScope === "local") {
      trustScore = "74.12%";
      activeThreatsCount = 8;
      anomalySignals = 14;
      recommendation = "CRITICAL THREAT ALERT: rogue endpoint credentials bypassing boundary verification.";
      color = "text-red-400 animate-pulse";
    }
    if (threatDefense) {
      trustScore = "99.45%";
    }
    if (anomalyRules) {
      anomalySignals = Math.max(anomalySignals - 6, 0);
    }
    
    return { trustScore, activeThreatsCount, anomalySignals, recommendation, color };
  };

  const { trustScore, activeThreatsCount, anomalySignals, recommendation, color } = calculateSecurityMetrics();

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
                <Shield className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                ENTERPRISE PLATFORM SECURITY & ZERO-TRUST OPERATIONS
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Secure Fraud Intelligence <br />
                <span className="text-zinc-400">Infrastructure Built for Enterprise Trust</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Security protects fraud operations, AI intelligence systems, transaction monitoring, governance workflows, and enterprise operational data using zero-trust architecture, continuous threat monitoring, encryption, and enterprise-grade infrastructure controls.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Security Overview
                </Link>
                <Link href="/platform/security#architecture" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Security Architecture
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, enterprises, payment processors, telecoms, regulated industries, and mission-critical operational environments.
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
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">DeepSense Security Operations Command Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">THREAT DETECTION: ACTIVE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A real-time enterprise security operations environment visualizing zero-trust enforcement, active threat monitoring, infrastructure health, suspicious access activity, tenant isolation, API security, governance controls, and operational resilience.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Security Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Security Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Zero-Trust Access",
                        "Identity Security",
                        "Threat Monitoring",
                        "Infrastructure Security",
                        "API Protection",
                        "Tenant Isolation",
                        "Encryption Controls",
                        "Governance Security",
                        "SIEM Integrations",
                        "AI Security Intelligence"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v2.1</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Threat Intelligence Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE THREAT INTELLIGENCE STREAM</span>
                        <span>SHIELD MATRIX ONLINE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Endpoint Isolation</span>
                          <select 
                            value={securityScope} 
                            onChange={(e) => setSecurityScope(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="global">Zero-Trust Boundaries</option>
                            <option value="local">Local override warning</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Continuous Scanning</span>
                          <input 
                            type="checkbox" 
                            checked={threatDefense} 
                            onChange={(e) => setThreatDefense(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Adaptive RBAC checks</span>
                          <input 
                            type="checkbox" 
                            checked={anomalyRules} 
                            onChange={(e) => setAnomalyRules(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Trust Indicator</span>
                          <span className="text-xl font-bold text-white mt-1 block">{trustScore}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Active threats</span>
                          <span className={`text-xl font-bold mt-1 block ${activeThreatsCount > 0 ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {activeThreatsCount} alerts
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Anomaly Signals</span>
                          <span className={`text-xl font-bold mt-1 block ${anomalySignals > 0 ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>
                            {anomalySignals} detected
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:22:10] • authentication events: biometric MFA validated on primary workspace</div>
                        <div>[19:22:25] • API abuse attempts: invalid payload signature isolated by threat engine</div>
                        <div>[19:22:40] • policy violations: zero violations in tenant segregation protocols</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Threat Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI-Generated Threat Analysis</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">tenant isolation status</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous cryptographic volume checks complete. Workload segmentation absolute.
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

        {/* ================= SECTION 2: SECURITY OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Operational Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Enterprise-Grade Security Across Every Layer of the Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Security protects: fraud operations, AI intelligence systems, transaction monitoring infrastructure, onboarding workflows, governance operations, investigation environments, enterprise integrations, and operational telemetry. The platform combines: zero-trust architecture, role-based access control, tenant isolation, continuous monitoring, infrastructure hardening, encryption, governance enforcement, and operational resilience. DeepSense is designed to secure: enterprise fraud intelligence, sensitive operational data, high-volume transaction systems, regulated environments, and global operational deployments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "zero-trust architecture", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "tenant isolation", desc: "Verify portal checkouts without introducing user friction." },
                { title: "continuous monitoring", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "infrastructure hardening", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "encryption & telemetry security", desc: "Support digital GRC with active security control overlays." },
                { title: "governance & audit trails", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Security Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Zero-Trust Architecture", desc: "Enforce identity verification, least-privilege access, session trust evaluation, continuous authentication, and policy-driven access controls." },
                { title: "Role-Based Access Control", desc: "Control analyst permissions, admin access, governance approvals, operational segmentation, tenant restrictions, and workflow isolation." },
                { title: "Multi-Tenant Isolation", desc: "Provide tenant segmentation, workload isolation, data separation, operational boundaries, and secure regional deployment controls." },
                { title: "Encryption & Protection", desc: "Support encryption at rest, encryption in transit, key management, tokenization, and secure storage architecture." },
                { title: "Threat Detection & Monitoring", desc: "Monitor suspicious access, infrastructure anomalies, API abuse, privilege escalation, operational compromise, and insider threats." },
                { title: "Infrastructure Security", desc: "Protect cloud infrastructure, Kubernetes workloads, API gateways, streaming pipelines, graph databases, and AI systems." },
                { title: "API & Integration Security", desc: "Secure API authentication, webhook verification, integration permissions, token lifecycle management, and traffic protection." },
                { title: "Governance Security Controls", desc: "Enforce audit logging, immutable records, governance approvals, policy monitoring, and compliance workflows." },
                { title: "AI Security Intelligence", desc: "Use AI to identify suspicious behavior, detect access anomalies, prioritize incidents, summarize threats, and correlate attack indicators." },
                { title: "Enterprise Resilience", desc: "Support disaster recovery, regional failover, backup management, high availability, and operational continuity." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">SEC-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: SECURITY ARCHITECTURE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="architecture">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Architecture Layers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Secure-by-Design Platform Architecture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Layer 1 — Identity", desc: "SSO, MFA, adaptive authentication, privileged access governance, and device trust validation controls." },
                { title: "Layer 2 — Application", desc: "Protects APIs, frontend services, fraud engines, AI workloads, and orchestration services across the stack." },
                { title: "Layer 3 — Data", desc: "Secures graph databases, operational telemetry, transaction data, onboarding records, and audit evidence cryptographically." },
                { title: "Layer 4 — Infrastructure", desc: "Monitors containers, orchestration systems, cloud workloads, network segmentation, and runtime environments continuously." },
                { title: "Layer 5 — Governance", desc: "Provides SIEM integration, audit logging, operational monitoring, governance enforcement, and threat intelligence feeds." }
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

        {/* ================= SECTION 5: THREAT MONITORING FEATURES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Defense Systems</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Continuous Threat Monitoring and Operational Defense
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Access Anomaly Detection", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "API Abuse Monitoring", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Privileged Access Oversight", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Infrastructure Drift Detection", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "Operational Threat Correlation", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "AI-Powered Incident Prioritization", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: COMPLIANCE & DEPLOYMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="deployment">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Operations</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Flexible Enterprise Deployment Models
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "saas", label: "SaaS Deployment" },
                { id: "private", label: "Private Cloud" },
                { id: "hybrid", label: "Hybrid Infrastructure" },
                { id: "onpremise", label: "On-Premise Deployment" },
                { id: "regional", label: "Regional Hosting Controls" },
                { id: "failover", label: "Multi-Region Failover" }
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
              {activeTab === "saas" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Fully managed enterprise-grade SaaS infrastructure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "private" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Dedicated private cloud deployment.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "hybrid" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Hybrid on-premise and cloud orchestration boundaries.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "onpremise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Self-hosted local on-premise execution environment.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "regional" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Isolated regional deployment controls.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "failover" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">High-availability multi-region automatic disaster failover.</h4>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">SECURITY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "How does DeepSense secure enterprise fraud operations?", 
                  a: "DeepSense uses zero-trust security, RBAC, tenant isolation, encryption, continuous monitoring, governance enforcement, and operational resilience controls." 
                },
                { 
                  q: "Does DeepSense support enterprise identity providers?", 
                  a: "Yes. DeepSense integrates with SSO providers, MFA systems, enterprise IAM platforms, and adaptive authentication workflows." 
                },
                { 
                  q: "Is customer data isolated across tenants?", 
                  a: "Yes. DeepSense supports enterprise-grade tenant isolation, workload segmentation, operational boundaries, and regional deployment controls." 
                },
                { 
                  q: "Does DeepSense support regulated environments?", 
                  a: "Yes. DeepSense supports governance controls, audit logging, compliance workflows, encryption standards, and operational oversight for regulated industries." 
                },
                { 
                  q: "Can DeepSense monitor operational security threats in real time?", 
                  a: "Yes. The platform continuously monitors authentication behavior, infrastructure telemetry, API traffic, access anomalies, and operational risk indicators." 
                },
                { 
                  q: "Does DeepSense support hybrid and private cloud deployments?", 
                  a: "Yes. DeepSense supports SaaS, hybrid, private cloud, regional hosting, and on-premise deployment architectures." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Secure Enterprise Fraud Intelligence With Zero-Trust Operations</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect operational intelligence and secure <br />
                <span className="text-white/40 font-bold font-bold font-bold">sensitive GRC analytics.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect operational intelligence, secure fraud investigations, strengthen governance enforcement, and maintain enterprise resilience using DeepSense Security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Security Overview
              </Link>
              <Link href="/platform/security#architecture" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Security Architecture
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
