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

export default function PrivacyPlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("gdpr");
  
  // Interactive console parameters
  const [governanceScope, setGovernanceScope] = useState<string>("global");
  const [dataMinimization, setDataMinimization] = useState<boolean>(true);
  const [explainableAI, setExplainableAI] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic privacy metrics
  const calculatePrivacyMetrics = () => {
    let residencyCompliance = "100%";
    let explainabilityScore = "98.4%";
    let privacyRiskExposure = "Low";
    let recommendation = "SYSTEM TRUST HIGH: GDPR controls verified globally across all regions";
    let color = "text-emerald-400";
    
    if (governanceScope === "local") {
      residencyCompliance = "42%";
      explainabilityScore = "54.1%";
      privacyRiskExposure = "High";
      recommendation = "CRITICAL ETHICAL ALERT: unmasked raw PII detected inside training telemetry nodes.";
      color = "text-red-400 animate-pulse";
    }
    if (dataMinimization) {
      explainabilityScore = "99.1%";
    }
    if (explainableAI) {
      privacyRiskExposure = "Immaculate";
    }
    
    return { residencyCompliance, explainabilityScore, privacyRiskExposure, recommendation, color };
  };

  const { residencyCompliance, explainabilityScore, privacyRiskExposure, recommendation, color } = calculatePrivacyMetrics();

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
                <Scale className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                PRIVACY, DATA PROTECTION & RESPONSIBLE AI
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Sensitive Data and Govern AI <br />
                <span className="text-zinc-400">With Enterprise-Grade Privacy Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Privacy & Data Ethics helps organizations enforce data protection policies, maintain responsible AI governance, support global privacy regulations, and build trusted operational intelligence systems with transparency, accountability, and ethical oversight.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Privacy Overview
                </Link>
                <Link href="/platform/privacy#responsible-ai" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Responsible AI
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for regulated enterprises, financial institutions, telecoms, healthcare organizations, public sector agencies, and privacy-conscious global platforms.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Privacy & Responsible AI Governance Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SOVEREIGNTY SHIELD: ENFORCED</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A real-time privacy governance environment visualizing data residency controls, consent management, AI explainability, privacy risk exposure, data access activity, governance approvals, operational transparency, and compliance posture.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Privacy Governance Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Governance Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Data Governance",
                        "Consent Management",
                        "Responsible AI Controls",
                        "Privacy Monitoring",
                        "Data Residency",
                        "Access Governance",
                        "Retention Policies",
                        "Compliance Intelligence",
                        "AI Explainability",
                        "Governance Audit Trail"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v1.1</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Privacy Intelligence Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE PRIVACY INTELLIGENCE STREAM</span>
                        <span>PRIVACY ENVELOPE ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Data Sovereignty</span>
                          <select 
                            value={governanceScope} 
                            onChange={(e) => setGovernanceScope(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="global">EU / US sovereign zones</option>
                            <option value="local">Local telemetry override</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Minimize raw PII</span>
                          <input 
                            type="checkbox" 
                            checked={dataMinimization} 
                            onChange={(e) => setDataMinimization(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Force Explainable AI</span>
                          <input 
                            type="checkbox" 
                            checked={explainableAI} 
                            onChange={(e) => setExplainableAI(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Residency Compliance</span>
                          <span className="text-xl font-bold text-white mt-1 block">{residencyCompliance}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Explainability score</span>
                          <span className="text-xl font-bold text-white mt-1 block">{explainabilityScore}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Privacy risk</span>
                          <span className={`text-xl font-bold mt-1 block ${privacyRiskExposure === "High" ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>
                            {privacyRiskExposure}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Governance Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Governance Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:24:10] • policy updates: global sovereign metadata protection applied</div>
                        <div>[19:24:25] • consent changes: user opting out of third-party profiling resolved</div>
                        <div>[19:24:40] • data access events: cryptographically isolated volume audit cleared</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Privacy Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI Governance Status</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">operational transparency</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous data classification audit trace verified. Zero drift.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• model alignment validated</span>
                      <span>• immutable ledger synchronization complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PRIVACY OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Responsible Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Responsible Intelligence Built on Privacy, Transparency, and Trust
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Privacy & Data Ethics protects: customer identity data, transaction telemetry, onboarding records, operational intelligence, AI-generated insights, behavioral analytics, investigation evidence, and governance workflows. The platform combines: privacy-by-design architecture, responsible AI governance, explainable intelligence, data minimization, consent management, operational transparency, access governance, and regulatory controls. DeepSense enables organizations to: strengthen customer trust, reduce privacy exposure, enforce ethical AI practices, support global compliance, centralize governance oversight, and maintain operational accountability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "strengthen customer trust", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "reduce privacy exposure", desc: "Verify portal checkouts without introducing user friction." },
                { title: "enforce ethical AI practices", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "support global compliance", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "centralize governance oversight", desc: "Support digital GRC with active security control overlays." },
                { title: "maintain operational accountability", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Privacy & Ethical Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Privacy-by-Design Architecture", desc: "Enforce data minimization, secure data handling, operational segregation, access governance, and privacy-first workflows." },
                { title: "Responsible AI Governance", desc: "Support explainable AI, human oversight, model transparency, governance approvals, and ethical operational review." },
                { title: "Consent & Preference Management", desc: "Manage customer consent, data-sharing preferences, retention policies, communication permissions, and regulatory consent requirements." },
                { title: "Data Residency & Sovereignty", desc: "Control regional storage, jurisdiction enforcement, geographic restrictions, residency compliance, and operational segregation." },
                { title: "Sensitive Data Classification", desc: "Identify PII, financial records, authentication data, onboarding documents, operational intelligence, and regulated information." },
                { title: "Access Governance & Monitoring", desc: "Monitor privileged access, operational activity, data usage, unauthorized exposure, policy violations, and governance anomalies." },
                { title: "Explainable AI & Transparency", desc: "Provide AI reasoning visibility, evidence-backed recommendations, investigation traceability, governance explanations, and operational accountability." },
                { title: "Retention & Lifecycle Management", desc: "Automate retention enforcement, archival policies, secure deletion, governance reviews, and evidence lifecycle controls." },
                { title: "AI Ethics Monitoring", desc: "Use AI to identify governance drift, detect bias indicators, prioritize privacy risks, summarize governance exposure, and strengthen operational transparency." },
                { title: "Regulatory Compliance Intelligence", desc: "Support GDPR, PCI DSS, SOC 2, ISO 27001, AML governance, and enterprise audit readiness." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">PRIV-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: GOVERNANCE LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Workflow Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Governs Sensitive Data and AI Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Classification", desc: "DeepSense classifies identity records, transaction telemetry, behavioral analytics, operational evidence, onboarding documents, and AI-generated intelligence." },
                { title: "Step 2 — Enforcement", desc: "The platform applies access controls, residency rules, consent policies, operational restrictions, governance workflows, and ethical AI controls." },
                { title: "Step 3 — Monitoring", desc: "DeepSense continuously evaluates access activity, policy violations, operational anomalies, AI transparency, governance compliance, and privacy exposure." },
                { title: "Step 4 — Explainability", desc: "The system generates explainable AI reasoning, governance summaries, privacy exposure analytics, operational transparency insights, and ethical review workflows." },
                { title: "Step 5 — Audit Readiness", desc: "The platform logs governance actions, stores evidence, tracks approvals, maintains audit trails, and generates compliance reports." }
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

        {/* ================= SECTION 5: RESPONSIBLE AI ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="responsible-ai">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Ethical Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Responsible AI Built for Enterprise Accountability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Explainable AI Decisions", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "Human-in-the-Loop Controls", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Governance Approval Workflows", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "AI Operational Traceability", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "Ethical Intelligence Oversight", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "AI Governance Reporting", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
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

        {/* ================= SECTION 6: REGULATORY FRAMEWORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="frameworks">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Global Regulatory and Governance Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "gdpr", label: "GDPR Readiness" },
                { id: "pci", label: "PCI DSS Controls" },
                { id: "soc", label: "SOC 2 Alignment" },
                { id: "iso", label: "ISO 27001 Governance" },
                { id: "aml", label: "AML Operational Governance" },
                { id: "residency", label: "Data Residency Compliance" }
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
              {activeTab === "gdpr" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">GDPR Compliance & Data Portability frameworks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "pci" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Cardholder data encryption & validation under PCI DSS Level 1.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "soc" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">SOC 2 Type II trust principles and system controls.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "iso" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">ISO/IEC 27001 Information Security Management frameworks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "aml" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">AML/CFT regulatory operational compliance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "residency" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Data residency & sovereign regional isolation.</h4>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">PRIVACY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "How does DeepSense protect sensitive operational data?", 
                  a: "DeepSense uses encryption, role-based access controls, tenant isolation, governance enforcement, retention policies, and privacy-by-design architecture." 
                },
                { 
                  q: "Does DeepSense support responsible AI governance?", 
                  a: "Yes. DeepSense provides explainable AI, governance approvals, operational transparency, human oversight, and ethical intelligence controls." 
                },
                { 
                  q: "Can organizations manage regional data residency requirements?", 
                  a: "Yes. DeepSense supports geographic deployment controls, regional storage enforcement, and data sovereignty management." 
                },
                { 
                  q: "Does DeepSense support global privacy regulations?", 
                  a: "Yes. DeepSense supports GDPR readiness, PCI DSS controls, SOC 2 alignment, ISO 27001 governance, and enterprise audit workflows." 
                },
                { 
                  q: "Can DeepSense monitor operational privacy risks in real time?", 
                  a: "Yes. The platform continuously monitors access activity, policy violations, governance exposure, operational anomalies, and AI transparency indicators." 
                },
                { 
                  q: "Is DeepSense suitable for regulated enterprise environments?", 
                  a: "Yes. DeepSense is designed for regulated industries, enterprise governance programs, operational intelligence environments, and privacy-sensitive deployments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Operational Intelligence With Responsible AI and Privacy Governance</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect sensitive data and strengthen <br />
                <span className="text-white/40 font-bold font-bold font-bold">governance accountability.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect sensitive data, strengthen governance accountability, enforce responsible AI controls, and centralize privacy intelligence using DeepSense Privacy & Data Ethics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Privacy Overview
              </Link>
              <Link href="/platform/privacy#responsible-ai" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Responsible AI
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
