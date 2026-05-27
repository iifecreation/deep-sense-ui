"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Globe, 
  Scale, 
  Shield, 
  Zap, 
  Layers, 
  Activity, 
  Clock, 
  Filter,
  BarChart3,
  Lightbulb,
  Building,
  GraduationCap,
  Users,
  ShieldCheck, 
  Lock, 
  Database, 
  Key, 
  Cpu, 
  Network, 
  History, 
  Award, 
  Server, 
  FileCheck, 
  Eye, 
  AlertCircle, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight,
  Printer, 
  Terminal, 
  RefreshCw, 
  HelpCircle, 
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
  Workflow, 
  Check, 
  Sliders, 
  Play
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

interface ComplianceSection {
  id: string;
  title: string;
}

const complianceSections: ComplianceSection[] = [
  { id: "governance-overview", title: "Governance Overview" },
  { id: "compliance-frameworks", title: "Compliance Frameworks" },
  { id: "ai-governance", title: "AI Governance" },
  { id: "security-controls", title: "Security Controls" },
  { id: "privacy-data-governance", title: "Privacy & Data Governance" },
  { id: "auditability-logging", title: "Auditability & Logging" },
  { id: "risk-management", title: "Risk Management" },
  { id: "fraud-aml-governance", title: "Fraud & AML Governance" },
  { id: "data-residency", title: "Data Residency" },
  { id: "vendor-governance", title: "Vendor Governance" },
  { id: "operational-resilience", title: "Operational Resilience" },
  { id: "evidence-documentation", title: "Evidence & Documentation" },
  { id: "procurement-readiness", title: "Procurement Readiness" },
  { id: "compliance-faqs", title: "Compliance FAQs" },
  { id: "contact-governance", title: "Contact Governance Team" }
];

export default function ComplianceCenterPage() {
  // Real-time counter simulation
  const [fraudEventsGoverned, setFraudEventsGoverned] = useState(1894205120);

  useEffect(() => {
    const interval = setInterval(() => {
      setFraudEventsGoverned(prev => prev + Math.floor(Math.random() * 850 + 300));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Sticky Navigation active section tracking
  const [activeSection, setActiveSection] = useState<string>("governance-overview");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToAnchor = (id: string) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Interactive Architecture Illustration state
  const [selectedArchLayer, setSelectedArchLayer] = useState<string>("WAF Layer");

  const archLayers = [
    { name: "WAF Layer", desc: "Enterprise edge protection filtering volumetric exploits and malicious payloads.", status: "Governed" },
    { name: "Authentication Gateway", desc: "Zero-trust identity verification enforcing strict MFA and RBAC boundaries.", status: "Governed" },
    { name: "Fraud Intelligence Cluster", desc: "Real-time probabilistic scoring engines evaluating transaction risk rings.", status: "Governed" },
    { name: "AI Orchestration", desc: "Coordinating LLM reasoning, explainability generation, and guardrail enforcement.", status: "Governed" },
    { name: "Observability Systems", desc: "Continuous SIEM telemetry ingestion monitoring infrastructure health.", status: "Governed" },
    { name: "Governance Layer", desc: "Automated policy execution, data residency routing, and retention pruning.", status: "Governed" },
    { name: "Audit Logging Pipeline", desc: "Immutable append-only ledger archiving every platform action with SHA-256 hashes.", status: "Governed" },
    { name: "Regional Failover Systems", desc: "Multi-cloud hot standby infrastructure ensuring 99.95% continuous availability.", status: "Standby" }
  ];

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
          <div className="absolute top-0 left-1/3 w-[800px] h-[400px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-brand-lime text-xs font-extrabold uppercase tracking-widest border border-white/10 shadow-2xl backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span>ENTERPRISE COMPLIANCE OPERATIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase italic leading-[1.0] text-white max-w-6xl">
              Compliance <span className="text-brand-lime">Center.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl font-inter max-w-4xl leading-relaxed italic">
              DeepSense provides enterprise-grade governance, operational traceability, AI accountability, privacy controls, infrastructure security, audit logging, and compliance tooling designed to support regulated operational environments and modern enterprise risk programs.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="mailto:governance@deepsense.ai?subject=Request Compliance Review" 
                className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Request Compliance Review
              </Link>
              <Link 
                href="/legal/security-compliance" 
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full font-extrabold text-xs uppercase tracking-wider text-white transition-all text-center backdrop-blur-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-brand-lime" />
                Download Compliance Pack
              </Link>
              <Link 
                href="mailto:governance@deepsense.ai" 
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 rounded-full font-extrabold text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-all text-center backdrop-blur-md"
              >
                Contact Governance Team
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Enterprise Compliance Metrics Strip */}
        <section className="bg-neutral-950 border-b border-white/10 py-10 px-6 md:px-12 lg:px-24 relative z-20 shadow-2xl">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Audit Logging Coverage</span>
              <p className="text-lg md:text-xl font-black text-white italic">100%</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">AI Explainability</span>
              <p className="text-lg md:text-xl font-black text-brand-lime italic">Full</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Workflow Traceability</span>
              <p className="text-lg md:text-xl font-black text-white italic">Enabled</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Residency Controls</span>
              <p className="text-lg md:text-xl font-black text-white italic">Multi-Region</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Infra Monitoring</span>
              <p className="text-lg md:text-xl font-black text-white italic">24/7</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Policy Enforcement</span>
              <p className="text-lg md:text-xl font-black text-white italic">Platform-Wide</p>
            </div>
            <div className="space-y-1 border-r border-white/5 last:border-r-0 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Risk Monitoring</span>
              <p className="text-lg md:text-xl font-black text-brand-lime italic font-mono">Real-Time</p>
            </div>
            <div className="space-y-1 pr-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Daily Events Governed</span>
              <p className="text-lg md:text-xl font-black text-white italic font-mono">{fraudEventsGoverned.toLocaleString()}</p>
            </div>
          </div>
        </section>

        {/* 3. Main Workspace with Sticky Left Navigation */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Compliance Navigation Sidebar */}
            <div className="lg:col-span-3 bg-white border border-zinc-200 rounded-[32px] p-6 shadow-sm sticky top-28 space-y-6">
              <div className="space-y-2 border-b border-zinc-100 pb-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-tight font-manrope">Compliance Operations</h3>
                <p className="text-[11px] text-zinc-500 font-inter">Audit framework matrices, AI logging, and vendor controls.</p>
              </div>

              <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
                {complianceSections.map((sec) => (
                  <button 
                    key={sec.id}
                    onClick={() => scrollToAnchor(sec.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      activeSection === sec.id 
                        ? "bg-neutral-900 text-brand-lime border-neutral-900 font-extrabold shadow-sm" 
                        : "bg-white text-neutral-800 border-transparent hover:border-zinc-200 hover:bg-zinc-50 font-bold"
                    }`}
                  >
                    <span className="text-xs tracking-tight">{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${activeSection === sec.id ? "text-brand-lime" : "text-zinc-400"}`} />
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400 font-inter">Procurement Pack?</span>
                <Link href="/legal/security-compliance" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                  Download
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right Column Compliance Content Sections */}
            <div className="lg:col-span-9 bg-white border border-zinc-200 rounded-[32px] p-8 md:p-14 shadow-sm space-y-24">
              
              {/* Section 1: Governance Overview */}
              <div id="governance-overview" ref={(el) => { sectionRefs.current["governance-overview"] = el; }} className="space-y-8 scroll-mt-28">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Building2 className="w-3.5 h-3.5 text-brand-lime" />
                    <span>FOUNDATIONAL ARCHITECTURE</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Governance-by-Design <span className="text-emerald-600">Architecture.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense integrates governance, security, privacy, AI accountability, operational traceability, and fraud intelligence oversight directly into platform infrastructure and workflows.
                  </p>
                </div>

                {/* Governance Capability Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: "Role-Based Governance", desc: "Granular operational access control restricting sensitive case data and system overrides to authorized personnel." },
                    { title: "Workflow Traceability", desc: "End-to-end investigation visibility archiving exact analyst query parameters and decision timestamps." },
                    { title: "AI Governance Controls", desc: "Explainability & human oversight mandatory for all high-impact automated risk scoring inferences." },
                    { title: "Immutable Audit Trails", desc: "Audit-ready operational history stored in a cryptographically verifiable append-only ledger." },
                    { title: "Executive Reporting", desc: "Governance analytics & KPIs generating automated compliance digests for CISO and board review." },
                    { title: "Operational Approvals", desc: "Escalation & review workflows enforcing dual-authorization for critical defensive rule modifications." },
                    { title: "Incident Governance", desc: "Structured operational escalation workflows integrating directly with enterprise SIEM and SOAR systems." },
                    { title: "Regional Governance", desc: "Jurisdiction-aware controls dynamically pinning tenant data to authorized geographic sovereign clouds." }
                  ].map((cap, cIdx) => (
                    <div key={cIdx} className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-2 hover:border-neutral-900 transition-all shadow-sm">
                      <div className="flex items-center gap-2 text-neutral-900 font-black uppercase text-sm italic">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{cap.title}</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-inter leading-relaxed pl-6">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Compliance Frameworks */}
              <div id="compliance-frameworks" ref={(el) => { sectionRefs.current["compliance-frameworks"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Award className="w-3.5 h-3.5 text-brand-lime" />
                    <span>FRAMEWORK DASHBOARD</span>
                  </div>
                  <h2 className="text-2xl md:text:4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Compliance & Regulatory <span className="text-emerald-600">Alignment.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    Review our operational alignment with core international security standards, data protection mandates, and financial compliance frameworks.
                  </p>
                </div>

                {/* Framework Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {[
                    {
                      title: "Card 1 — GDPR Alignment",
                      status: "Supported",
                      coverage: ["privacy-by-design", "retention governance", "residency controls", "access governance", "deletion workflows"],
                      desc: "Full operational compliance with EU data protection mandates, automated Article 30 logging, and instant DPA availability."
                    },
                    {
                      title: "Card 2 — SOC 2 Governance",
                      status: "Alignment Ready",
                      coverage: ["operational controls", "logging", "monitoring", "access governance", "incident management"],
                      desc: "Continuous automated auditing verifying strict adherence to Security, Availability, and Confidentiality trust principles."
                    },
                    {
                      title: "Card 3 — ISO 27001 Governance",
                      status: "Supported",
                      coverage: ["ISMS governance", "operational controls", "risk management", "vendor governance"],
                      desc: "Information Security Management System (ISMS) certified across all core infrastructure and engineering facilities."
                    },
                    {
                      title: "Card 4 — PCI DSS Operational Support",
                      status: "Supported",
                      coverage: ["transaction governance", "encryption", "monitoring", "operational segregation"],
                      desc: "Secure tokenization and multi-layer infrastructure isolation supporting Level 1 merchant transaction flows."
                    },
                    {
                      title: "Card 5 — AML & Fraud Governance",
                      status: "Supported",
                      coverage: ["transaction monitoring", "onboarding intelligence", "operational escalation", "suspicious activity governance"],
                      desc: "Automated KYC/KYB, sanction screening, and straight-through STR/SAR generation logic."
                    },
                    {
                      title: "Card 6 — AI Governance",
                      status: "Enabled",
                      coverage: ["explainability", "human oversight", "auditability", "operational accountability"],
                      desc: "Alignment with EU AI Act and NIST AI RMF, enforcing strict explainability logs and guardrails."
                    }
                  ].map((card, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-neutral-900 transition-all shadow-sm">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                          <h3 className="text-base font-black uppercase tracking-tight italic text-neutral-900">{card.title.split(" — ")[1]}</h3>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider font-mono ${
                            card.status === "Supported" || card.status === "Enabled" 
                              ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" 
                              : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                          }`}>
                            {card.status}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Coverage Scope</span>
                          <div className="flex flex-wrap gap-1.5">
                            {card.coverage.map((cov, cIdx) => (
                              <span key={cIdx} className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md text-[10px] font-bold text-neutral-800 uppercase tracking-tight shadow-2xs">
                                {cov}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-extrabold text-neutral-900 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-lime" /> Audit Ready
                        </span>
                        <Link href="/legal/security-compliance" className="hover:underline flex items-center gap-1 text-emerald-600">
                          View Evidence <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: AI Governance Operations */}
              <div id="ai-governance" ref={(el) => { sectionRefs.current["ai-governance"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Cpu className="w-3.5 h-3.5 text-brand-lime" />
                    <span>EXPLAINABLE AI OPERATIONS</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    AI Governance & <span className="text-emerald-600">Explainability Operations.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense AI systems are governed using operational accountability, explainability controls, human oversight, and continuous governance monitoring.
                  </p>
                </div>

                {/* AI Governance Dashboard */}
                <div className="bg-neutral-900 rounded-[32px] p-8 md:p-12 text-white border border-white/10 shadow-2xl space-y-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Live AI Governance Console</span>
                      <h3 className="text-2xl font-black italic uppercase tracking-tight text-white mt-1">Explainability Coverage & Metrics</h3>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
                      <span className="text-zinc-300">Continuous Logging Active</span>
                    </div>
                  </div>

                  {/* Explainability Coverage Widgets */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Explainability Logging</span>
                      <p className="text-2xl font-black text-white italic font-mono">100%</p>
                      <span className="text-[10px] text-emerald-400 block font-inter">SHA-256 Verified</span>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Human Review Coverage</span>
                      <p className="text-2xl font-black text-brand-lime italic font-mono">98%</p>
                      <span className="text-[10px] text-zinc-400 block font-inter">High-Impact Tier</span>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">AI Traceability</span>
                      <p className="text-2xl font-black text-white italic font-mono">Enabled</p>
                      <span className="text-[10px] text-zinc-400 block font-inter">Full Prompt Logging</span>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Gov Escalations</span>
                      <p className="text-2xl font-black text-emerald-400 italic font-mono">Real-Time</p>
                      <span className="text-[10px] text-zinc-400 block font-inter">Zero Latency</span>
                    </div>
                  </div>

                  {/* Human-in-the-Loop Flow */}
                  <div className="bg-neutral-950 border border-white/10 rounded-2xl p-8 space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Human-in-the-Loop Operational Flow</span>
                      <h4 className="text-lg font-black uppercase italic text-white mt-1">Four-Stage Decision Pipeline</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                      {[
                        { step: "01", title: "AI Detection", desc: "Multi-model inference flags anomalous activity." },
                        { step: "02", title: "Analyst Review", desc: "Human expert audits explainability logs." },
                        { step: "03", title: "Gov Approval", desc: "Automated policy check ensures compliance." },
                        { step: "04", title: "Action Execution", desc: "Intervention deployed with immutable trail." }
                      ].map((wf, wIdx) => (
                        <div key={wIdx} className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-2 relative">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-brand-lime font-mono">{wf.step}</span>
                            {wIdx < 3 && <ArrowRight className="w-4 h-4 text-zinc-500 hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20" />}
                          </div>
                          <h5 className="text-sm font-extrabold text-white uppercase italic tracking-tight">{wf.title}</h5>
                          <p className="text-[11px] text-zinc-400 font-inter">{wf.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Governance Features Grid */}
                  <div className="space-y-4 pt-4">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block font-mono text-center">Core AI Governance Features</span>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["AI audit trails", "explainability dashboards", "governance approvals", "operational overrides", "anomaly reviews", "confidence scoring"].map((feat, fIdx) => (
                        <span key={fIdx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2 shadow-sm">
                          <Check className="w-3.5 h-3.5 text-brand-lime" /> {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Section 4: Security Controls */}
              <div id="security-controls" ref={(el) => { sectionRefs.current["security-controls"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
                    <span>INFRASTRUCTURE HARDENING</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Security Governance & <span className="text-emerald-600">Infrastructure Controls.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    Review our comprehensive matrix of technical safeguards, encryption standards, and zero-trust perimeter defenses.
                  </p>
                </div>

                {/* Security Control Matrix Table */}
                <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Control Area</th>
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Capability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { area: "Encryption", cap: "AES-256 at rest + TLS 1.2/1.3 mandatory across all transit boundaries" },
                        { area: "MFA", cap: "Supported & mandatory for all privileged administrative access" },
                        { area: "RBAC", cap: "Granular governance enforcing least privilege across all operational roles" },
                        { area: "SIEM Monitoring", cap: "Continuous real-time ingestion forwarded to centralized SOC dashboards" },
                        { area: "Zero-Trust Architecture", cap: "Enabled with identity-aware microservice session verification" },
                        { area: "Tenant Isolation", cap: "Multi-layer segmentation with dedicated VPC and KMS options" },
                        { area: "Infrastructure Monitoring", cap: "24/7 automated observability, anomaly detection, and self-healing" },
                        { area: "AI Infrastructure Security", cap: "Governed with strict model weight protection and prompt guardrails" }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                          <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                            <ShieldAlert className="w-3.5 h-3.5 text-brand-lime" />
                            {row.area}
                          </td>
                          <td className="p-4 text-zinc-600 font-inter italic">{row.cap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Interactive Architecture Illustration */}
                <div className="bg-neutral-900 rounded-[32px] p-8 md:p-12 text-white border border-white/10 shadow-xl space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Interactive Architecture Illustration</span>
                    <h3 className="text-xl font-black italic uppercase tracking-tight text-white mt-1">Select an Operational Layer to Audit</h3>
                  </div>

                  {/* Grid of clickable layers */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {archLayers.map((layer, lIdx) => (
                      <button 
                        key={lIdx}
                        onClick={() => setSelectedArchLayer(layer.name)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 ${
                          selectedArchLayer === layer.name 
                            ? "bg-brand-lime text-neutral-900 border-brand-lime shadow-lg scale-105 font-black" 
                            : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-xs font-extrabold uppercase tracking-tight leading-snug block">{layer.name}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded font-extrabold uppercase tracking-wider font-mono w-max ${
                          layer.status === "Governed" ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-500/20 text-zinc-400"
                        }`}>
                          {layer.status}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Detailed display box */}
                  {archLayers.filter(l => l.name === selectedArchLayer).map((layer, lIdx) => (
                    <div key={lIdx} className="bg-neutral-950 border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-fadeIn">
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-3">
                          <Terminal className="w-5 h-5 text-brand-lime" />
                          <h4 className="text-xl font-black text-white uppercase italic tracking-tight">{layer.name}</h4>
                        </div>
                        <p className="text-sm text-zinc-400 font-inter leading-relaxed">{layer.desc}</p>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider font-mono">Verification Status:</span>
                        <span className="text-xs font-black text-emerald-400 uppercase tracking-wider font-mono bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">{layer.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Privacy & Data Governance */}
              <div id="privacy-data-governance" ref={(el) => { sectionRefs.current["privacy-data-governance"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Lock className="w-3.5 h-3.5 text-brand-lime" />
                    <span>DATA PROTECTION</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Privacy & Data <span className="text-emerald-600">Governance Controls.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense operates using privacy-by-design and governance-by-default operational principles to safeguard sensitive customer information.
                  </p>
                </div>

                {/* Governance Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  {[
                    { title: "Regional Residency Controls", desc: "Geographic governance ensuring data remains strictly within authorized national borders.", icon: <Globe className="w-6 h-6 text-brand-lime" /> },
                    { title: "Retention Management", desc: "Configurable lifecycle controls with automated cryptographic purging of stale records.", icon: <Clock className="w-6 h-6 text-brand-lime" /> },
                    { title: "Deletion Workflows", desc: "Secure disposal procedures verifying complete unrecoverable erasure upon contract termination.", icon: <HardDrive className="w-6 h-6 text-brand-lime" /> },
                    { title: "Access Governance", desc: "Least privilege access enforced via strict RBAC, MFA, and quarterly access audits.", icon: <Key className="w-6 h-6 text-brand-lime" /> },
                    { title: "Operational Segmentation", desc: "Tenant isolation enforcing logical barriers across databases, event streams, and AI memories.", icon: <Layers className="w-6 h-6 text-brand-lime" /> },
                    { title: "Data Export Controls", desc: "Governed offboarding enabling secure, encrypted data extraction in standard formats.", icon: <FileSpreadsheet className="w-6 h-6 text-brand-lime" /> }
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-4 hover:border-neutral-900 transition-all flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-md text-white">
                          {feat.icon}
                        </div>
                        <h4 className="text-base font-black uppercase italic text-neutral-900">{feat.title}</h4>
                        <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wider">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Governance Enforced</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Linked Governance Pages */}
                <div className="p-8 bg-neutral-900 rounded-[32px] text-white border border-white/10 shadow-xl space-y-6">
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-center text-white">
                    Audit Linked Governance Policies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { title: "Privacy Policy", href: "/legal/privacy-policy" },
                      { title: "DPA Agreement", href: "/legal/dpa" },
                      { title: "Data Retention Policy", href: "/legal/data-retention" },
                      { title: "Cookie Policy", href: "/legal/cookies" },
                      { title: "Law Enforcement Requests", href: "/legal/law-enforcement" }
                    ].map((link, lIdx) => (
                      <Link 
                        key={lIdx}
                        href={link.href}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-brand-lime transition-all flex items-center justify-between group"
                      >
                        <span className="text-xs font-extrabold uppercase tracking-tight text-white group-hover:text-brand-lime transition-colors">{link.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-brand-lime transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 6: Auditability & Logging */}
              <div id="auditability-logging" ref={(el) => { sectionRefs.current["auditability-logging"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <History className="w-3.5 h-3.5 text-brand-lime" />
                    <span>IMMUTABLE LEDGER</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Auditability, Traceability & <span className="text-emerald-600">Governance Logging.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense maintains immutable audit logs, operational traceability, AI decision trails, workflow execution history, access records, governance approvals, and escalation timelines.
                  </p>
                </div>

                {/* Audit Dashboard */}
                <div className="bg-neutral-900 rounded-[32px] p-8 md:p-12 text-white border border-white/10 shadow-xl space-y-8">
                  <div>
                    <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest block font-mono">Audit Operations Dashboard</span>
                    <h3 className="text-xl font-black italic uppercase tracking-tight text-white mt-1">Platform Traceability Metrics</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-white/10 pb-8">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Audit Logging Coverage</span>
                      <p className="text-xl font-black text-white italic font-mono">Full Platform</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Gov Traceability</span>
                      <p className="text-xl font-black text-brand-lime italic font-mono">Enabled</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Access Monitoring</span>
                      <p className="text-xl font-black text-white italic font-mono">Continuous</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">AI Audit Trails</span>
                      <p className="text-xl font-black text-emerald-400 italic font-mono">Enabled</p>
                    </div>
                  </div>

                  {/* Export Capabilities */}
                  <div className="space-y-4 pt-2">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block font-mono text-center">Supported Evidence Export Formats</span>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["CSV", "JSON", "PDF evidence bundles", "investigation timelines", "governance archives"].map((exp, eIdx) => (
                        <span key={eIdx} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2 shadow-sm">
                          <Download className="w-3.5 h-3.5 text-brand-lime" /> {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: Risk Management */}
              <div id="risk-management" ref={(el) => { sectionRefs.current["risk-management"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <ShieldAlert className="w-3.5 h-3.5 text-brand-lime" />
                    <span>RISK OPERATIONS</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Enterprise Risk & <span className="text-emerald-600">Governance Operations.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense provides continuous risk monitoring, automated escalation workflows, and executive risk reporting to support modern enterprise risk programs.
                  </p>
                </div>

                {/* Risk Governance Features */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                  {[
                    "Fraud Risk Scoring",
                    "Operational Escalation",
                    "AI Risk Monitoring",
                    "Governance Thresholds",
                    "Executive Risk Reporting",
                    "Regional Governance Policies"
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-2 hover:border-neutral-900 transition-all shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center border border-zinc-200 shrink-0 shadow-2xs">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs font-extrabold text-neutral-900 uppercase tracking-tight italic">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Risk Dashboard Example Table */}
                <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm pt-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Risk Area</th>
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { area: "Fraud Operations", status: "Monitored" },
                        { area: "AI Governance", status: "Governed" },
                        { area: "Infrastructure Security", status: "Protected" },
                        { area: "Vendor Governance", status: "Assessed" },
                        { area: "Compliance Operations", status: "Active" }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                          <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                            <Activity className="w-3.5 h-3.5 text-brand-lime" />
                            {row.area}
                          </td>
                          <td className="p-4 text-emerald-600 font-extrabold font-mono uppercase tracking-wider">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 8: Fraud & AML Governance */}
              <div id="fraud-aml-governance" ref={(el) => { sectionRefs.current["fraud-aml-governance"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Scale className="w-3.5 h-3.5 text-brand-lime" />
                    <span>FINANCIAL COMPLIANCE</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Fraud Intelligence & <span className="text-emerald-600">AML Governance.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense supports transaction monitoring, onboarding intelligence, suspicious activity governance, graph intelligence, investigation orchestration, and operational escalation workflows.
                  </p>
                </div>

                {/* Operational Governance Features Table */}
                <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm pt-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Feature</th>
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Capability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feat: "Fraud Case Management", cap: "Enabled" },
                        { feat: "AML Escalation Workflows", cap: "Supported" },
                        { feat: "Graph Intelligence", cap: "Real-Time" },
                        { feat: "Investigation Auditability", cap: "Full" },
                        { feat: "Executive Reporting", cap: "Enabled" }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                          <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                            <FileSearch className="w-3.5 h-3.5 text-brand-lime" />
                            {row.feat}
                          </td>
                          <td className="p-4 text-neutral-800 font-extrabold font-mono uppercase tracking-wider">{row.cap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 9: Data Residency */}
              <div id="data-residency" ref={(el) => { sectionRefs.current["data-residency"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Globe className="w-3.5 h-3.5 text-brand-lime" />
                    <span>SOVEREIGN CLOUDS</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Regional Residency & <span className="text-emerald-600">Sovereignty Controls.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense supports regional hosting, tenant-specific residency, jurisdiction-aware governance, geographic processing controls, and private deployment options.
                  </p>
                </div>

                {/* Supported Regions Table */}
                <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm pt-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Region</th>
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { reg: "United States", status: "Supported" },
                        { reg: "European Union", status: "Supported" },
                        { reg: "United Kingdom", status: "Supported" },
                        { reg: "Asia-Pacific", status: "Supported" },
                        { reg: "Middle East & Africa", status: "Supported" }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                          <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-brand-lime" />
                            {row.reg}
                          </td>
                          <td className="p-4 text-emerald-600 font-extrabold font-mono uppercase tracking-wider">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 10: Vendor Governance */}
              <div id="vendor-governance" ref={(el) => { sectionRefs.current["vendor-governance"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Building2 className="w-3.5 h-3.5 text-brand-lime" />
                    <span>THIRD-PARTY RISK</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Vendor Governance & <span className="text-emerald-600">Subprocessor Oversight.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense maintains governance procedures for cloud providers, AI infrastructure vendors, observability providers, authentication systems, and operational tooling.
                  </p>
                </div>

                {/* Vendor Governance Controls */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4">
                  {[
                    "security reviews",
                    "compliance assessments",
                    "privacy analysis",
                    "resilience scoring",
                    "governance monitoring"
                  ].map((ctrl, cIdx) => (
                    <div key={cIdx} className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-center space-y-2 shadow-2xs">
                      <ShieldCheck className="w-5 h-5 text-brand-lime mx-auto" />
                      <span className="text-xs font-extrabold text-neutral-900 uppercase tracking-tight block">{ctrl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    href="/legal/subprocessors"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>View Authorized Subprocessors</span>
                    <ArrowRight className="w-4 h-4 text-brand-lime" />
                  </Link>
                </div>
              </div>

              {/* Section 11: Operational Resilience */}
              <div id="operational-resilience" ref={(el) => { sectionRefs.current["operational-resilience"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Activity className="w-3.5 h-3.5 text-brand-lime" />
                    <span>BUSINESS CONTINUITY</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Operational Resilience & <span className="text-emerald-600">Continuity.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense maintains distributed failover, regional redundancy, backup governance, continuity planning, infrastructure observability, and resilience testing.
                  </p>
                </div>

                {/* Resilience Metrics Table */}
                <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm pt-4">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Metric</th>
                        <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Platform Availability", target: "99.95%" },
                        { metric: "Disaster Recovery Testing", target: "Scheduled" },
                        { metric: "RTO", target: "<4 Hours" },
                        { metric: "RPO", target: "<15 Minutes" }
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                          <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-brand-lime" />
                            {row.metric}
                          </td>
                          <td className="p-4 text-emerald-600 font-extrabold font-mono uppercase tracking-wider">{row.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 12: Evidence & Documentation */}
              <div id="evidence-documentation" ref={(el) => { sectionRefs.current["evidence-documentation"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <FileCheck className="w-3.5 h-3.5 text-brand-lime" />
                    <span>DOWNLOAD CENTER</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Governance Evidence & <span className="text-emerald-600">Compliance Documentation.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    Access our comprehensive library of official compliance artifacts, security certificates, and legal agreements.
                  </p>
                </div>

                {/* Download Center Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                  {[
                    { doc: "Security Overview", access: "Download", href: "/legal/security-compliance" },
                    { doc: "DPA Agreement", access: "Download", href: "/legal/dpa" },
                    { doc: "SLA Commitments", access: "Download", href: "/legal/sla" },
                    { doc: "Privacy Policy", access: "Download", href: "/legal/privacy-policy" },
                    { doc: "AI Governance Policy", access: "Download", href: "/legal/ai-policy" },
                    { doc: "Vendor Governance Summary", access: "Request", href: "mailto:governance@deepsense.ai?subject=Vendor Governance Summary Request" },
                    { doc: "Architecture Review", access: "Request", href: "mailto:security@deepsense.ai?subject=Architecture Review Request" },
                    { doc: "Compliance Questionnaire", access: "Request", href: "mailto:governance@deepsense.ai?subject=Compliance Questionnaire Request" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 space-y-6 flex flex-col justify-between hover:border-neutral-900 transition-all shadow-sm">
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-white shadow-md">
                          <FileText className="w-6 h-6 text-brand-lime" />
                        </div>
                        <h4 className="text-base font-black uppercase italic text-neutral-900">{item.doc}</h4>
                        <p className="text-xs text-zinc-500 font-inter leading-relaxed">
                          Official enterprise documentation available for immediate procurement review.
                        </p>
                      </div>
                      <div className="pt-4 border-t border-zinc-200">
                        {item.access === "Download" ? (
                          <Link 
                            href={item.href}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 hover:underline uppercase tracking-wider"
                          >
                            <Download className="w-3.5 h-3.5 text-brand-lime" />
                            <span>Download Pack</span>
                          </Link>
                        ) : (
                          <Link 
                            href={item.href}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-lime hover:underline uppercase tracking-wider bg-neutral-900 px-4 py-2 rounded-xl w-full justify-center shadow-md"
                          >
                            <span>Request Access</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link 
                    href="/legal/security-compliance"
                    className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
                  >
                    Download Compliance Pack
                  </Link>
                  <Link 
                    href="mailto:security@deepsense.ai?subject=Request Security Review"
                    className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
                  >
                    Request Security Review
                  </Link>
                  <Link 
                    href="mailto:governance@deepsense.ai?subject=Schedule Governance Review"
                    className="px-8 py-4 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center"
                  >
                    Schedule Governance Review
                  </Link>
                </div>
              </div>

              {/* Section 13: Procurement Readiness */}
              <div id="procurement-readiness" ref={(el) => { sectionRefs.current["procurement-readiness"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-neutral-900 text-[10px] font-extrabold uppercase tracking-widest border border-zinc-200">
                    <Briefcase className="w-3.5 h-3.5 text-brand-lime" />
                    <span>RFP ENABLEMENT</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Procurement & <span className="text-emerald-600">Enterprise Readiness.</span>
                  </h2>
                  <p className="text-sm md:text-base text-zinc-500 font-inter leading-relaxed italic">
                    DeepSense supports RFP workflows, vendor assessments, security reviews, AI governance evaluations, procurement questionnaires, and operational governance reviews.
                  </p>
                </div>

                {/* Enterprise Review Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                  {[
                    "architecture walkthroughs",
                    "compliance discussions",
                    "AI explainability reviews",
                    "governance sessions",
                    "security reviews"
                  ].map((cap, cIdx) => (
                    <div key={cIdx} className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-center space-y-2 shadow-2xs">
                      <Users className="w-5 h-5 text-brand-lime mx-auto" />
                      <span className="text-xs font-extrabold text-neutral-900 uppercase tracking-tight block">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 14: Compliance FAQs */}
              <div id="compliance-faqs" ref={(el) => { sectionRefs.current["compliance-faqs"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200">
                <div className="space-y-3 border-b border-zinc-100 pb-6 text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Compliance <span className="text-emerald-600">FAQs.</span>
                  </h2>
                  <p className="text-xs md:text-sm text-zinc-500 font-inter leading-relaxed italic">
                    Review common inquiries regarding enterprise audit readiness, regional residency controls, and explainable AI governance.
                  </p>
                </div>

                <div className="space-y-4 pt-4 max-w-3xl mx-auto">
                  {[
                    { q: "Does DeepSense support regulated enterprise environments?", a: "Yes. DeepSense is designed for compliance-sensitive and governance-heavy operational environments, including Tier 1 banking, healthcare, and critical infrastructure." },
                    { q: "Are AI systems explainable and governed?", a: "Yes. DeepSense supports explainability, auditability, governance workflows, and human oversight. Every model inference provides transparent reasoning summaries and confidence calibration." },
                    { q: "Can enterprises request procurement documentation?", a: "Yes. DeepSense provides comprehensive procurement, governance, security, and compliance documentation directly through our download center or via secure email request." },
                    { q: "Does DeepSense maintain audit trails?", a: "Yes. Immutable auditability and operational traceability are core platform capabilities. All actions are logged in a cryptographically verifiable append-only ledger." },
                    { q: "Are regional residency controls supported?", a: "Yes. DeepSense supports regional deployments and jurisdiction-aware governance, allowing data to be pinned to specific sovereign clouds in the US, EU, UK, APAC, or MEA." }
                  ].map((faq, idx) => (
                    <div key={idx} className="border border-zinc-200 rounded-2xl overflow-hidden transition-all bg-zinc-50 shadow-2xs">
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 text-left font-bold text-sm md:text-base text-neutral-900 flex justify-between items-center gap-4 hover:bg-zinc-100/50 transition-colors uppercase italic tracking-tight"
                      >
                        <span>{faq.q}</span>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-zinc-200 shrink-0 shadow-sm">
                          {openFaq === idx ? <ChevronUp className="w-4 h-4 text-neutral-900" /> : <ChevronDown className="w-4 h-4 text-neutral-900" />}
                        </div>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-6 text-xs text-zinc-600 font-inter leading-relaxed border-t border-zinc-200/60 pt-4 animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 15: Contact Governance */}
              <div id="contact-governance" ref={(el) => { sectionRefs.current["contact-governance"] = el; }} className="space-y-8 scroll-mt-28 pt-8 border-t border-zinc-200 text-center max-w-2xl mx-auto">
                <div className="space-y-3 border-b border-zinc-100 pb-6">
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic text-neutral-900">
                    Contact <span className="text-emerald-600">Governance Team.</span>
                  </h2>
                  <p className="text-xs md:text-sm text-zinc-500 font-inter leading-relaxed italic">
                    Have specific questions regarding RFP submissions, custom compliance questionnaires, or AI audit readiness? Our specialized governance officers are ready to assist.
                  </p>
                </div>
                <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl space-y-4 shadow-sm">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">Designated Governance Office</span>
                  <a href="mailto:governance@deepsense.ai" className="text-lg font-black text-neutral-900 block hover:underline">governance@deepsense.ai</a>
                  <p className="text-xs text-zinc-500 font-inter">Average response time: &lt; 2 hours for enterprise procurement inquiries.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. Final Enterprise CTA Section */}
        <section className="bg-neutral-900 text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden border-b border-white/5 shadow-2xl">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
          
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
              Governance, Security & Compliance <span className="text-brand-lime">Built Into Every Workflow.</span>
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg font-inter leading-relaxed italic max-w-2xl">
              DeepSense combines fraud intelligence, operational traceability, explainable AI, privacy governance, and enterprise-grade infrastructure security into a unified compliance-ready operational platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link 
                href="mailto:governance@deepsense.ai?subject=Request Compliance Review"
                className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all text-center shadow-lg hover:scale-105 active:scale-95"
              >
                Request Compliance Review
              </Link>
              <Link 
                href="mailto:governance@deepsense.ai"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full font-extrabold text-xs uppercase tracking-wider text-white transition-all text-center backdrop-blur-md hover:scale-105 active:scale-95"
              >
                Contact Governance Team
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

        {/* 5. Footer Governance Strip */}
        <section className="bg-neutral-950 border-b border-white/10 py-8 px-6 md:px-12 lg:px-24 relative z-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <ShieldCheck className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Zero-Trust Security</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Cpu className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Explainable AI</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <FileCheck className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Full Auditability</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Globe className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Regional Governance</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-r border-white/5 last:border-r-0 pr-4">
              <Lock className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Privacy-by-Design</span>
            </div>
            <div className="flex items-center justify-center gap-2 pr-4">
              <Network className="w-4 h-4 text-brand-lime" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Fraud Intelligence Gov</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
