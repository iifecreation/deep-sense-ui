"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Key, 
  Layers, 
  Cpu, 
  Network, 
  BarChart3, 
  History, 
  Award, 
  Server, 
  FileCheck, 
  Activity, 
  Eye, 
  Scale, 
  Download,
  Search, 
  ChevronRight,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Printer,
  Info,
  Terminal,
  RefreshCw,
  HelpCircle,
  Users,
  Clock,
  Zap,
  HardDrive,
  FileSpreadsheet,
  Gavel,
  FileSearch,
  Bell,
  FileWarning,
  Bug,
  Code,
  ShieldAlert,
  Flame,
  Radio,
  FileCode,
  Sparkles,
  Copyright,
  BookmarkCheck,
  Building2,
  UserCheck,
  Briefcase,
  FileText,
  Workflow,
  Check,
  Sliders,
  Play
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function TrustCenterPage() {
  // Real-time counter simulation
  const [tenantsProtected, setTenantsProtected] = useState(142050);
  const [eventsProcessed, setEventsProcessed] = useState(3892405120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTenantsProtected(prev => prev + Math.floor(Math.random() * 3));
      setEventsProcessed(prev => prev + Math.floor(Math.random() * 750 + 200));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Interactive Architecture Diagram state
  const [selectedArchComponent, setSelectedArchComponent] = useState<string>("WAF Layer");

  const archComponents = [
    { name: "Global Edge Routing", desc: "Multi-region Anycast DNS & DDoS mitigation shielding all ingress traffic.", latency: "12ms", status: "Active" },
    { name: "WAF Layer", desc: "Advanced web application firewall filtering OWASP Top 10 & zero-day exploits.", latency: "8ms", status: "Active" },
    { name: "API Gateway", desc: "Rate limiting, TLS 1.3 termination, and strict schema validation.", latency: "15ms", status: "Active" },
    { name: "Authentication Layer", desc: "Zero-trust identity verification, MFA enforcement, and token issuance.", latency: "22ms", status: "Active" },
    { name: "Fraud Intelligence Engine", desc: "Real-time scoring evaluating device fingerprinting, behavioral biometrics & velocity.", latency: "35ms", status: "Active" },
    { name: "AI Orchestration Systems", desc: "Coordinating LLM reasoning, explainability generation, and guardrail enforcement.", latency: "45ms", status: "Active" },
    { name: "Graph Intelligence Cluster", desc: "In-memory graph analytics mapping entity relationships and collaborative risk rings.", latency: "28ms", status: "Active" },
    { name: "Event Streaming Pipeline", desc: "Apache Kafka backbone ensuring guaranteed exactly-once delivery of telemetry.", latency: "5ms", status: "Active" },
    { name: "Operational Analytics Layer", desc: "ClickHouse columnar storage powering real-time CISO dashboards & reporting.", latency: "18ms", status: "Active" },
    { name: "Governance Engine", desc: "Continuous policy enforcement, data residency routing, and retention pruning.", latency: "10ms", status: "Active" },
    { name: "Audit Logging Infrastructure", desc: "Immutable, cryptographically verifiable append-only ledger for all platform actions.", latency: "14ms", status: "Active" },
    { name: "Regional Failover Systems", desc: "Hot-standby clusters across AWS, GCP, and Azure ensuring 99.95% availability.", latency: "0ms", status: "Standby" }
  ];

  // Interactive AI Governance Dashboard state
  const [selectedAIWidget, setSelectedAIWidget] = useState<string>("Confidence Scoring");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-manrope text-neutral-900 selection:bg-brand-lime selection:text-neutral-900">
      <Navbar />
      
      <main className="pt-28">
        
        {/* 1. Hero Section */}
        <section className="bg-neutral-900 text-white py-20 px-6 md:px-12 lg:px-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-brand-lime text-xs font-extrabold uppercase tracking-widest border border-white/10 shadow-2xl backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span>ENTERPRISE TRUST, SECURITY & GOVERNANCE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase italic leading-[1.0] text-white max-w-6xl">
              Trust <span className="text-brand-lime">Center.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-inter max-w-4xl leading-relaxed italic">
              DeepSense provides enterprise-grade fraud intelligence infrastructure, AI governance systems, operational resilience controls, security monitoring, privacy protections, and compliance frameworks designed for regulated, high-scale, and mission-critical operational environments.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="mailto:security@deepsense.ai?subject=Enterprise Security Review Request" 
                className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Request Security Review
              </Link>
              <Link 
                href="/legal/security-compliance" 
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full font-extrabold text-xs uppercase tracking-wider text-white transition-all text-center backdrop-blur-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-brand-lime" />
                Download Compliance Pack
              </Link>
              <Link 
                href="mailto:trust@deepsense.ai" 
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 rounded-full font-extrabold text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all text-center backdrop-blur-md"
              >
                Contact Trust Team
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Enterprise Trust Metrics Strip */}
        <section className="bg-neutral-950 border-b border-white/10 py-10 px-6 md:px-12 lg:px-24 relative z-20 shadow-2xl">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Platform Availability</span>
              <p className="text-lg md:text-xl font-black text-white italic">99.95%</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Security Monitoring</span>
              <p className="text-lg md:text-xl font-black text-brand-lime italic">24/7</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Global Regions</span>
              <p className="text-lg md:text-xl font-black text-white italic">Multi-Region</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Encryption Coverage</span>
              <p className="text-lg md:text-xl font-black text-white italic">100%</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">AI Gov Monitoring</span>
              <p className="text-lg md:text-xl font-black text-white italic">Continuous</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Audit Logging Coverage</span>
              <p className="text-lg md:text-xl font-black text-white italic">Full Platform</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Tenants Protected</span>
              <p className="text-lg md:text-xl font-black text-brand-lime italic font-mono">{tenantsProtected.toLocaleString()}</p>
            </div>
            <div className="space-y-1 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Events Processed</span>
              <p className="text-lg md:text-xl font-black text-white italic font-mono">{eventsProcessed.toLocaleString()}</p>
            </div>
          </div>
        </section>

        {/* 3. Trust Navigation Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 space-y-12">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
              Governance & Compliance <span className="text-zinc-400">Registry.</span>
            </h2>
            <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
              Explore our comprehensive portfolio of institutional policies, security frameworks, and compliance certifications. E.g. fully audit-ready for enterprise procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Security & Compliance",
                desc: "Infrastructure security, encryption, monitoring, and compliance frameworks.",
                href: "/legal/security-compliance",
                icon: <ShieldCheck className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Privacy & Data Governance",
                desc: "Privacy-by-design architecture, retention governance, and operational data protection.",
                href: "/legal/privacy-policy",
                icon: <Lock className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Responsible AI",
                desc: "Explainable AI systems, governance controls, and operational accountability.",
                href: "/legal/ai-policy",
                icon: <Cpu className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Data Processing Agreement",
                desc: "Enterprise privacy obligations, SCCs, and processing governance.",
                href: "/legal/dpa",
                icon: <FileText className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Subprocessors",
                desc: "Approved infrastructure providers and vendor governance.",
                href: "/legal/subprocessors",
                icon: <Server className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Service Availability",
                desc: "SLA commitments, uptime guarantees, and resilience architecture.",
                href: "/legal/sla",
                icon: <Activity className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Vulnerability Disclosure",
                desc: "Responsible disclosure, coordinated remediation, and security research.",
                href: "/legal/vulnerability-disclosure",
                icon: <Bug className="w-6 h-6 text-brand-lime" />
              },
              {
                title: "Regulatory Compliance",
                desc: "Governance alignment, auditability, and operational controls.",
                href: "/legal/regulatory-compliance",
                icon: <Gavel className="w-6 h-6 text-brand-lime" />
              }
            ].map((card, idx) => (
              <Link 
                key={idx}
                href={card.href}
                className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-neutral-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-neutral-900 uppercase tracking-tight italic group-hover:text-emerald-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed not-italic">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-extrabold text-neutral-900 group-hover:underline uppercase tracking-wider">
                  <span>Explore Documentation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-lime group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Security Architecture Section */}
        <section className="bg-white border-y border-zinc-200 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                <Layers className="w-3.5 h-3.5 text-brand-lime" />
                <span>INFRASTRUCTURE TOPOLOGY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Enterprise Security <span className="text-emerald-600">Architecture.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense infrastructure is designed using zero-trust architecture, operational segmentation, distributed failover systems, AI observability, and continuous monitoring principles.
              </p>
            </div>

            {/* Interactive Architecture Diagram */}
            <div className="bg-neutral-900 rounded-[32px] p-8 md:p-12 text-white border border-white/10 shadow-2xl space-y-8 relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Interactive Topology Explorer</span>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight text-white mt-1">Select a Component to Audit Controls</h3>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
                  <span className="text-zinc-300">Live SIEM Telemetry Active</span>
                </div>
              </div>

              {/* Grid of clickable components */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {archComponents.map((comp, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedArchComponent(comp.name)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 ${
                      selectedArchComponent === comp.name 
                        ? "bg-brand-lime text-neutral-900 border-brand-lime shadow-lg scale-105" 
                        : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <span className="text-xs font-extrabold uppercase tracking-tight leading-snug block">{comp.name}</span>
                    <div className="flex items-center justify-between w-full pt-2 border-t border-current/10">
                      <span className="text-[9px] font-mono opacity-80">{comp.latency}</span>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wider font-mono ${
                        comp.status === "Active" ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-500/20 text-zinc-400"
                      }`}>
                        {comp.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detailed display box for selected component */}
              {archComponents.filter(c => c.name === selectedArchComponent).map((comp, idx) => (
                <div key={idx} className="bg-neutral-950 border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-fadeIn">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-brand-lime" />
                      <h4 className="text-xl font-black text-white uppercase italic tracking-tight">{comp.name}</h4>
                    </div>
                    <p className="text-sm text-zinc-400 font-inter leading-relaxed">{comp.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase text-zinc-500 block font-mono">Ingress Latency</span>
                      <span className="text-sm font-black text-white font-mono">{comp.latency}</span>
                    </div>
                    <div className="space-y-1 border-l border-white/10 pl-4">
                      <span className="text-[10px] uppercase text-zinc-500 block font-mono">Audit Logging</span>
                      <span className="text-sm font-black text-brand-lime font-mono">Enabled (SHA-256)</span>
                    </div>
                    <div className="space-y-1 border-l border-white/10 pl-4">
                      <span className="text-[10px] uppercase text-zinc-500 block font-mono">Status</span>
                      <span className="text-sm font-black text-emerald-400 font-mono">{comp.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Feature Grid */}
            <div className="space-y-8 pt-8">
              <h3 className="text-2xl font-bold text-neutral-900 uppercase italic tracking-tight text-center">
                Core Architectural Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { title: "Zero-Trust Architecture", desc: "Identity-aware access enforcement across all microservice boundaries." },
                  { title: "Encryption Everywhere", desc: "AES-256 for data at rest + TLS 1.2/1.3 mandatory in transit." },
                  { title: "Tenant Isolation", desc: "Cryptographically segmented operational environments and dedicated VPC options." },
                  { title: "SIEM Integration", desc: "Continuous real-time telemetry monitoring forwarded to enterprise SOCs." },
                  { title: "MFA Enforcement", desc: "Strict identity protection and hardware key support for privileged roles." },
                  { title: "Infrastructure Monitoring", desc: "Real-time observability, automated self-healing, and anomaly detection." },
                  { title: "Governance Logging", desc: "Audit-ready traceability with immutable append-only ledger storage." },
                  { title: "AI Security Controls", desc: "AI infrastructure isolation, prompt guardrails, and model weight protection." },
                  { title: "DDoS Mitigation", desc: "Multi-terabit edge filtering absorbing volumetric and application attacks." },
                  { title: "Automated Compliance", desc: "Continuous control mapping verifying SOC2, ISO 27001, and GDPR alignment." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-3 hover:border-neutral-900 transition-all">
                    <div className="w-10 h-10 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-neutral-900 shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="text-sm font-extrabold text-neutral-900 uppercase tracking-tight italic">{item.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. AI Governance & Explainability Section */}
        <section className="bg-zinc-900 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

          <div className="max-w-[1440px] mx-auto space-y-16 relative z-10">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-brand-lime text-[10px] font-extrabold uppercase tracking-widest border border-white/10">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI ACCOUNTABILITY & TRANSPARENCY</span>
              </div>
              <h2 className="text-3xl md:text:5xl font-black tracking-tight uppercase italic text-white">
                Responsible AI & <span className="text-brand-lime">Explainability.</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense AI systems are designed for operational accountability, explainability, governance transparency, and human oversight. E.g. zero black-box decisioning.
              </p>
            </div>

            {/* Interactive AI Governance Dashboard */}
            <div className="bg-neutral-950 border border-white/15 rounded-[32px] p-8 md:p-12 shadow-2xl space-y-12">
              
              {/* Dashboard Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Live AI Governance Console</span>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight text-white mt-1">Audit AI Decision Explainability</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Confidence Scoring", "Reasoning Summaries", "Graph Evidence", "Anomaly Rationale"].map((tab, tIdx) => (
                    <button 
                      key={tIdx}
                      onClick={() => setSelectedAIWidget(tab)}
                      className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                        selectedAIWidget === tab 
                          ? "bg-brand-lime text-neutral-900 shadow-lg font-black" 
                          : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Tab Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  {selectedAIWidget === "Confidence Scoring" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-6 h-6 text-brand-lime" />
                        <h4 className="text-xl font-black uppercase italic text-white">Probabilistic Confidence Calibration</h4>
                      </div>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">
                        Every automated fraud inference is accompanied by a calibrated confidence score (0.00 to 1.00). Decisions falling below custom enterprise thresholds are automatically routed to human-in-the-loop review queues.
                      </p>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4 font-mono">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-400">Current Evaluation: <span className="text-white font-bold">Transaction #9821A</span></span>
                          <span className="text-brand-lime font-bold">Confidence: 98.7% (High)</span>
                        </div>
                        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                          <div className="bg-brand-lime h-full rounded-full w-[98.7%]" />
                        </div>
                        <p className="text-[11px] text-zinc-500 italic">Threshold setting: &gt; 90.0% auto-enforce. Fully compliant with EU AI Act risk tiering.</p>
                      </div>
                    </div>
                  )}

                  {selectedAIWidget === "Reasoning Summaries" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-brand-lime" />
                        <h4 className="text-xl font-black uppercase italic text-white">Natural Language Reasoning Logs</h4>
                      </div>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">
                        DeepSense LLM orchestration synthesizes complex multi-vector risk signals into clear, auditable natural language summaries, enabling compliance officers to instantly verify the exact rationale behind an intervention.
                      </p>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-xs">
                        <div className="text-brand-lime font-bold">// AI EXPLAINABILITY SUMMARY OUTPUT:</div>
                        <p className="text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5">
                          &ldquo;High probability of synthetic identity takeover detected. User velocity exceeded 5x standard deviation across 3 unrelated merchant tenants within 14 minutes. Device fingerprint matches known emulator cluster (Hash: #882B). Action: Challenge session via biometric liveness.&rdquo;
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedAIWidget === "Graph Evidence" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <Network className="w-6 h-6 text-brand-lime" />
                        <h4 className="text-xl font-black uppercase italic text-white">Collaborative Risk Ring Mapping</h4>
                      </div>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">
                        Decisions are backed by cryptographic graph evidence connecting entities across shared attributes (NFC cards, device IDs, IP subnets). This visual proof is permanently archived for regulatory auditability.
                      </p>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-zinc-400">Target Entity: <span className="text-white font-bold">usr_9921_x</span></span>
                          <span className="text-rose-400 font-bold">2 Direct Sanction Hops</span>
                        </div>
                        <div className="text-zinc-400 space-y-1 pt-1">
                          <p>Hop 1: Shared Device Fingerprint &rarr; <span className="text-white">dev_7712</span></p>
                          <p>Hop 2: Known Adverse Media Ring &rarr; <span className="text-rose-400 font-bold">Flagged Syndicate #44A</span></p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedAIWidget === "Anomaly Rationale" && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <Activity className="w-6 h-6 text-brand-lime" />
                        <h4 className="text-xl font-black uppercase italic text-white">Behavioral Anomaly Rationale</h4>
                      </div>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">
                        Identifies subtle deviations in user cadence, touch biometrics, and navigation sequences. Anomaly rationale isolates the exact feature vector responsible for triggering a defensive workflow.
                      </p>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-xs">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                            <span className="text-zinc-500 block text-[10px]">Cadence Deviation</span>
                            <span className="text-white font-bold text-sm">+4.2&sigma; (Bot-like)</span>
                          </div>
                          <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                            <span className="text-zinc-500 block text-[10px]">Gyroscope Variance</span>
                            <span className="text-white font-bold text-sm">0.00 (Static Emulator)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Animated Human-in-the-Loop Workflow */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Human-in-the-Loop Architecture</span>
                    <h4 className="text-lg font-black uppercase italic text-white mt-1">Four-Stage Governance Pipeline</h4>
                  </div>

                  <div className="space-y-6 relative before:absolute before:left-6 before:top-6 before:bottom-6 before:w-0.5 before:bg-white/10">
                    {[
                      { step: "01", title: "AI Detection", desc: "Multi-model inference flags anomalous activity in real time." },
                      { step: "02", title: "Analyst Review", desc: "Human expert audits explainability logs and graph evidence." },
                      { step: "03", title: "Governance Approval", desc: "Automated policy check ensures regulatory compliance." },
                      { step: "04", title: "Action Execution", desc: "Defensive intervention deployed with immutable audit trail." }
                    ].map((wf, wIdx) => (
                      <div key={wIdx} className="flex items-start gap-4 relative z-10">
                        <div className="w-12 h-12 bg-neutral-900 border border-brand-lime/40 rounded-2xl flex items-center justify-center font-black text-brand-lime font-mono shrink-0 shadow-md">
                          {wf.step}
                        </div>
                        <div className="space-y-1 pt-1">
                          <h5 className="text-sm font-extrabold text-white uppercase italic tracking-tight">{wf.title}</h5>
                          <p className="text-xs text-zinc-400 font-inter">{wf.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Governance Metrics Strip */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">AI Decisions Reviewed</span>
                  <p className="text-xl font-black text-white italic font-mono">98.4%</p>
                </div>
                <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Gov Approval Coverage</span>
                  <p className="text-xl font-black text-brand-lime italic font-mono">100%</p>
                </div>
                <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Explainability Trace</span>
                  <p className="text-xl font-black text-white italic font-mono">Full Coverage</p>
                </div>
                <div className="space-y-1 pr-4">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">AI Audit Logging</span>
                  <p className="text-xl font-black text-emerald-400 italic font-mono">Enabled (SHA-256)</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Compliance & Governance Frameworks Section */}
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                <Award className="w-3.5 h-3.5 text-brand-lime" />
                <span>REGULATORY ALIGNMENT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Compliance & Governance <span className="text-emerald-600">Frameworks.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense maintains rigorous alignment with global security standards, privacy regulations, and financial compliance frameworks.
              </p>
            </div>

            {/* Compliance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { framework: "GDPR", status: "Supported", desc: "Full compliance with EU Data Protection requirements, DPA availability, and Article 30 record keeping." },
                { framework: "SOC 2 Type II", status: "Supported", desc: "Continuous automated auditing of Security, Availability, and Confidentiality trust principles." },
                { framework: "ISO 27001", status: "Supported", desc: "Information Security Management System (ISMS) certified across all global operational facilities." },
                { framework: "PCI DSS", status: "Operational Support", desc: "Secure tokenization and infrastructure isolation supporting Level 1 merchant transaction flows." },
                { framework: "AML Governance", status: "Supported", desc: "Automated KYC/KYB, sanction screening, and suspicious activity report (SAR) generation logic." },
                { framework: "AI Governance", status: "Supported", desc: "Alignment with EU AI Act, NIST AI RMF, and automated explainability documentation pipelines." },
                { framework: "Privacy-by-Design", status: "Enabled", desc: "Default operational minimization, configurable retention pruning, and strict tenant boundary controls." },
                { framework: "Auditability", status: "Full Platform", desc: "Cryptographically verifiable append-only ledger logging every administrative and analytical action." }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-4 flex flex-col justify-between hover:border-neutral-900 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-black uppercase italic text-neutral-900">{item.framework}</span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider font-mono ${
                        item.status === "Supported" || item.status === "Enabled" || item.status === "Full Platform"
                          ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                          : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] font-extrabold text-neutral-900 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                    <span>Audit Ready</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Governance Features Strip */}
            <div className="bg-neutral-900 rounded-[32px] p-8 md:p-12 text-white border border-white/10 shadow-xl space-y-8">
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-center text-white">
                Core Governance Capabilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {[
                  { title: "Immutable Audit Logs", icon: <History className="w-6 h-6 text-brand-lime mx-auto mb-2" /> },
                  { title: "Governance Workflows", icon: <Workflow className="w-6 h-6 text-brand-lime mx-auto mb-2" /> },
                  { title: "Regional Residency", icon: <Globe className="w-6 h-6 text-brand-lime mx-auto mb-2" /> },
                  { title: "Operational Traceability", icon: <FileCheck className="w-6 h-6 text-brand-lime mx-auto mb-2" /> },
                  { title: "Executive Reporting", icon: <BarChart3 className="w-6 h-6 text-brand-lime mx-auto mb-2" /> },
                  { title: "Access Governance", icon: <Key className="w-6 h-6 text-brand-lime mx-auto mb-2" /> }
                ].map((gov, gIdx) => (
                  <div key={gIdx} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                    {gov.icon}
                    <span className="text-xs font-bold uppercase tracking-tight block text-zinc-200">{gov.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 7. Live Platform Status Widget */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                <Activity className="w-3.5 h-3.5 text-brand-lime" />
                <span>REAL-TIME OBSERVABILITY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Operational Status & <span className="text-emerald-600">Infrastructure Health.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense maintains continuous public transparency regarding platform uptime, API latency, and regional infrastructure health.
              </p>
            </div>

            {/* Widget Container */}
            <div className="bg-white border border-zinc-200 rounded-[32px] p-8 md:p-12 shadow-xl space-y-12">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-100 pb-8">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Global Infrastructure Map & Telemetry</span>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight text-neutral-900 mt-1">All Systems Operational</h3>
                </div>
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-5 py-2.5 rounded-full text-xs font-bold text-emerald-800 shadow-sm font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>99.99% Current SLA Uptime</span>
                </div>
              </div>

              {/* Status Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { service: "APIs", status: "Operational", uptime: "100%", latency: "12ms" },
                  { service: "Fraud Scoring", status: "Operational", uptime: "99.99%", latency: "35ms" },
                  { service: "AI Intelligence", status: "Operational", uptime: "100%", latency: "45ms" },
                  { service: "Authentication", status: "Operational", uptime: "100%", latency: "22ms" },
                  { service: "Webhooks", status: "Operational", uptime: "99.98%", latency: "15ms" },
                  { service: "Reporting Infra", status: "Operational", uptime: "100%", latency: "18ms" }
                ].map((stat, sIdx) => (
                  <div key={sIdx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-tight text-neutral-900 block">{stat.service}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-mono flex items-center gap-1">
                        <Check className="w-3 h-3" /> {stat.status}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-500">Uptime: <strong className="text-neutral-900">{stat.uptime}</strong></span>
                      <span className="text-zinc-500">{stat.latency}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Map Simulation strip */}
              <div className="p-8 bg-neutral-900 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10 shadow-lg">
                <div className="space-y-2 max-w-lg">
                  <div className="flex items-center gap-2 text-brand-lime text-xs font-extrabold uppercase tracking-widest font-mono">
                    <Globe className="w-4 h-4" />
                    <span>Multi-Region Active-Active Routing</span>
                  </div>
                  <p className="text-sm text-zinc-300 font-inter leading-relaxed">
                    Traffic is automatically balanced across distributed edge locations (US-East, US-West, EU-Central, AP-Southeast) ensuring zero operational downtime during regional carrier outages.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/legal/sla" 
                    className="px-6 py-3 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs uppercase tracking-wider transition-all text-center"
                  >
                    View Historical Uptime
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 8. Privacy & Data Governance Section */}
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                <Lock className="w-3.5 h-3.5 text-brand-lime" />
                <span>PRIVACY BY DESIGN</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Privacy, Residency & <span className="text-emerald-600">Data Governance.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense operates using privacy-by-design and governance-by-default operational principles.
              </p>
            </div>

            {/* Governance Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Regional Residency Controls", desc: "Geographic data governance ensuring data remains strictly within authorized national borders (EU, US, APAC).", icon: <Globe className="w-6 h-6 text-brand-lime" /> },
                { title: "Data Retention Policies", desc: "Configurable lifecycle management with automated cryptographic purging of stale operational records.", icon: <Clock className="w-6 h-6 text-brand-lime" /> },
                { title: "Encryption Controls", desc: "Data protection via customer-managed KMS keys (CMK), envelope encryption, and perfect forward secrecy.", icon: <Lock className="w-6 h-6 text-brand-lime" /> },
                { title: "Operational Segmentation", desc: "Tenant isolation enforcing strict logical barriers across databases, event streams, and AI memories.", icon: <Layers className="w-6 h-6 text-brand-lime" /> },
                { title: "Access Governance", desc: "RBAC & MFA mandatory for all internal engineering access, backed by continuous quarterly audits.", icon: <Key className="w-6 h-6 text-brand-lime" /> },
                { title: "AI Traceability", desc: "Explainable operational intelligence mapping exact training runs, prompt guardrails, and model weights.", icon: <Cpu className="w-6 h-6 text-brand-lime" /> }
              ].map((feat, fIdx) => (
                <div key={fIdx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-4 hover:border-neutral-900 transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-md text-white">
                      {feat.icon}
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-neutral-900">{feat.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Governance Enforced</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Linked Pages Cards */}
            <div className="p-8 bg-neutral-900 rounded-[32px] text-white border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-black italic uppercase tracking-tight text-center text-white">
                Audit Core Privacy Documentation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Privacy Policy", href: "/legal/privacy-policy" },
                  { title: "Data Processing Agreement (DPA)", href: "/legal/dpa" },
                  { title: "Data Retention Policy", href: "/legal/data-retention" },
                  { title: "Law Enforcement Requests Policy", href: "/legal/law-enforcement" }
                ].map((link, lIdx) => (
                  <Link 
                    key={lIdx}
                    href={link.href}
                    className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-brand-lime transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-extrabold uppercase tracking-tight text-white group-hover:text-brand-lime transition-colors">{link.title}</span>
                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-brand-lime transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 9. Vendor & Infrastructure Governance Section */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-brand-lime" />
                <span>SUPPLIER ACCOUNTABILITY</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Infrastructure Providers & <span className="text-emerald-600">Vendor Governance.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense maintains rigorous vendor governance procedures for cloud providers, AI infrastructure vendors, observability tooling, authentication systems, and communications infrastructure.
              </p>
            </div>

            {/* Vendor Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { provider: "AWS", purpose: "Core Cloud Infrastructure & Regional Hosting Nodes" },
                { provider: "Cloudflare", purpose: "Edge Security, WAF & Volumetric DDoS Mitigation" },
                { provider: "OpenAI", purpose: "Enterprise AI Infrastructure & LLM Reasoning Engines" },
                { provider: "Datadog", purpose: "Continuous Observability & SIEM Telemetry Monitoring" },
                { provider: "Auth0", purpose: "Enterprise Identity Management & MFA Orchestration" }
              ].map((vendor, vIdx) => (
                <div key={vIdx} className="bg-white border border-zinc-200 rounded-3xl p-8 space-y-4 flex flex-col justify-between hover:border-neutral-900 transition-all shadow-sm">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime font-black font-mono text-xs shadow-md">
                      {vendor.provider.slice(0, 3).toUpperCase()}
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-neutral-900 pt-2">{vendor.provider}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{vendor.purpose}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
                    <span>Security Reviewed</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link 
                href="/legal/subprocessors"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>View Full Subprocessor Registry</span>
                <ArrowRight className="w-4 h-4 text-brand-lime" />
              </Link>
            </div>

          </div>
        </section>

        {/* 10. Procurement & Enterprise Readiness Section */}
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                <Briefcase className="w-3.5 h-3.5 text-brand-lime" />
                <span>RFP & AUDIT ENABLEMENT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Procurement & <span className="text-emerald-600">Enterprise Readiness.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense supports enterprise procurement workflows including security reviews, vendor assessments, AI governance evaluations, compliance questionnaires, operational architecture reviews, and legal documentation requests.
              </p>
            </div>

            {/* Available Documentation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { doc: "Security Overview", avail: "Download", href: "/legal/security-compliance" },
                { doc: "DPA Agreement", avail: "Download", href: "/legal/dpa" },
                { doc: "SLA Commitments", avail: "Download", href: "/legal/sla" },
                { doc: "Privacy Policy", avail: "Download", href: "/legal/privacy-policy" },
                { doc: "AI Governance Policy", avail: "Download", href: "/legal/ai-policy" },
                { doc: "Vendor Governance Summary", avail: "Request", href: "mailto:procurement@deepsense.ai?subject=Vendor Governance Summary Request" },
                { doc: "Architecture Overview", avail: "Request", href: "mailto:security@deepsense.ai?subject=Architecture Overview Request" }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-neutral-900 transition-all shadow-sm">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-white shadow-md">
                      <FileCheck className="w-6 h-6 text-brand-lime" />
                    </div>
                    <h4 className="text-lg font-black uppercase italic text-neutral-900">{item.doc}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">
                      Official enterprise documentation available for immediate procurement review and compliance archiving.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-200">
                    {item.avail === "Download" ? (
                      <Link 
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 hover:underline uppercase tracking-wider"
                      >
                        <Download className="w-3.5 h-3.5 text-brand-lime" />
                        <span>Download Document</span>
                      </Link>
                    ) : (
                      <Link 
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-lime hover:underline uppercase tracking-wider bg-neutral-900 px-4 py-2 rounded-xl w-full justify-center shadow-md"
                      >
                        <span>Request Packet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Link 
                href="/legal/security-compliance"
                className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Request Compliance Pack
              </Link>
              <Link 
                href="mailto:security@deepsense.ai?subject=Schedule Security Review"
                className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Schedule Security Review
              </Link>
              <Link 
                href="mailto:trust@deepsense.ai"
                className="px-8 py-4 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center"
              >
                Contact Trust Team
              </Link>
            </div>

          </div>
        </section>

        {/* 11. Security Incident & Disclosure Section */}
        <section className="bg-zinc-50 py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1440px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-lime" />
                <span>COORDINATED RESPONSE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Security Research & <span className="text-emerald-600">Incident Coordination.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic">
                DeepSense supports coordinated disclosure and responsible security research to ensure continuous platform protection.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Vulnerability Disclosure Program",
                  desc: "Review our responsible disclosure guidelines, safe harbor protections, and PGP reporting keys.",
                  href: "/legal/vulnerability-disclosure",
                  icon: <Bug className="w-6 h-6 text-brand-lime" />
                },
                {
                  title: "Incident Response Framework",
                  desc: "Explore our documented 24/7 escalation workflows, SIEM integration, and triage procedures.",
                  href: "/legal/security-compliance",
                  icon: <Radio className="w-6 h-6 text-brand-lime" />
                },
                {
                  title: "Law Enforcement Requests",
                  desc: "Audit our transparent guidelines for handling lawful government and regulatory disclosure requests.",
                  href: "/legal/law-enforcement",
                  icon: <Gavel className="w-6 h-6 text-brand-lime" />
                }
              ].map((card, idx) => (
                <Link 
                  key={idx}
                  href={card.href}
                  className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-neutral-900 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-neutral-900 uppercase tracking-tight italic group-hover:text-emerald-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed not-italic">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center gap-2 text-xs font-extrabold text-neutral-900 group-hover:underline uppercase tracking-wider">
                    <span>Audit Framework</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-lime group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* 12. Enterprise FAQ Section */}
        <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-200">
          <div className="max-w-[1000px] mx-auto space-y-16">
            
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-neutral-900">
                Frequently Asked <span className="text-emerald-600">Questions.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed italic max-w-2xl mx-auto">
                Review common CISO inquiries regarding data residency, AI explainability, audit logging, and subprocessor governance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { q: "Does DeepSense support regional data residency?", a: "Yes. DeepSense supports regional infrastructure and jurisdiction-aware governance controls. Data can be pinned to specific cloud nodes in the EU, US, or APAC to satisfy national sovereignty mandates." },
                { q: "Are AI systems explainable?", a: "Yes. DeepSense AI systems support explainability, auditability, and governance review workflows. Every automated decision generates clear natural language reasoning summaries and cryptographic graph evidence." },
                { q: "Can enterprises request architecture reviews?", a: "Yes. Enterprise customers may request procurement reviews, architecture sessions, and governance walkthroughs with our dedicated security engineering team." },
                { q: "Does DeepSense maintain audit logging?", a: "Yes. Auditability and operational traceability are core platform principles. All administrative and analytical actions are recorded in an immutable, cryptographically verifiable append-only ledger." },
                { q: "Are subprocessors security reviewed?", a: "Yes. Vendors undergo governance, security, privacy, and operational risk reviews prior to onboarding, backed by continuous automated monitoring." }
              ].map((faq, idx) => (
                <div 
                  key={idx}
                  className="border border-zinc-200 rounded-2xl overflow-hidden transition-all bg-zinc-50"
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left font-bold text-base md:text-lg text-neutral-900 flex justify-between items-center gap-4 hover:bg-zinc-100/50 transition-colors uppercase italic tracking-tight"
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-zinc-200 shrink-0 shadow-sm">
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-neutral-900" /> : <ChevronDown className="w-4 h-4 text-neutral-900" />}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-zinc-600 font-inter leading-relaxed border-t border-zinc-200/60 pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 13. Final Enterprise CTA Section */}
        <section className="bg-neutral-900 text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden border-b border-white/5 shadow-2xl">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
          
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
              Build Fraud Intelligence <span className="text-brand-lime">on Trusted Infrastructure.</span>
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg font-inter leading-relaxed italic max-w-2xl">
              DeepSense combines AI governance, operational transparency, enterprise-grade security, and globally scalable fraud intelligence infrastructure to support modern operational risk management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="/company/contact"
                className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Request Enterprise Demo
              </Link>
              <Link 
                href="mailto:trust@deepsense.ai"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full font-extrabold text-xs uppercase tracking-wider text-white transition-all text-center backdrop-blur-md hover:scale-105 active:scale-95"
              >
                Contact Trust Team
              </Link>
              <Link 
                href="/legal/security-compliance"
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 rounded-full font-extrabold text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all text-center backdrop-blur-md"
              >
                Download Compliance Pack
              </Link>
            </div>
          </div>
        </section>

        {/* 14. Footer Trust Strip */}
        <section className="bg-neutral-950 border-b border-white/10 py-8 px-6 md:px-12 lg:px-24 relative z-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <ShieldCheck className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Zero-Trust Security</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Cpu className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Responsible AI</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Globe className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Global Infrastructure</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Lock className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Privacy-by-Design</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <FileCheck className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Full Auditability</span>
            </div>
            <div className="flex items-center justify-center gap-2 pr-4">
              <Network className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fraud Intelligence</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
