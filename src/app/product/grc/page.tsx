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
  ClipboardCheck
} from "lucide-react";

export default function GRCPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive GRC parameters
  const [frameworkScope, setFrameworkScope] = useState<string>("soc2");
  const [evidenceContinuous, setEvidenceContinuous] = useState<boolean>(true);
  const [policyConnected, setPolicyConnected] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic GRC scores based on parameters
  const calculateGRCPerformance = () => {
    let score = 30; // base score
    
    if (evidenceContinuous) score += 35;
    if (policyConnected) score += 30;
    
    score = Math.min(score, 99);
    
    let status = "CRITICAL COMPLIANCE FAILURES";
    let color = "text-red-500";
    if (score >= 90) {
      status = "FULLY COMPLIANT & AUDIT-READY";
      color = "text-emerald-500";
    } else if (score >= 60) {
      status = "REMEDIATION STEPS REQUIRED";
      color = "text-amber-500";
    } else if (score >= 40) {
      status = "EVIDENCE ATTRIBUTES OUT OF SYNC";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateGRCPerformance();

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
                <Building className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                ENTERPRISE GRC & RISK GOVERNANCE PLATFORM
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Unify Governance, Risk, and Compliance <br />
                <span className="text-zinc-400">Into One Intelligent Platform</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises centralize risk management, controls governance, audit readiness, policy operations, and compliance intelligence using real-time monitoring, connected workflows, and enterprise-grade governance automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Enterprise Risk Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for financial institutions, regulated enterprises, fintechs, security teams, internal audit groups, compliance operations, and enterprise governance programs.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Executive Governance Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">GRC Unified Analytics Command</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GOVERNANCE ENCLAVE ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure GRC Scope</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Compliance Framework</span>
                        <select 
                          value={frameworkScope} 
                          onChange={(e) => setFrameworkScope(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="soc2">SOC 2 Type II</option>
                          <option value="pci">PCI-DSS v4.0</option>
                          <option value="sox">SOX Compliance</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Continuous Evidence Sync</span>
                        <input 
                          type="checkbox" 
                          checked={evidenceContinuous} 
                          onChange={(e) => setEvidenceContinuous(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Connected Graph Policies</span>
                        <input 
                          type="checkbox" 
                          checked={policyConnected} 
                          onChange={(e) => setPolicyConnected(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE GRC MASTER MATRIX</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Active Framework Coverage</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {frameworkScope} Verified
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Evidence Orchestration</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {evidenceContinuous ? "Hashed ledger archive live" : "Manual review pending"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">COMPLIANCE POSTURE VALUE</span>
                          <span className="text-3xl font-black text-white">{score}%</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUDIT READY STATUS</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control coverage: Connected policy mapping live</span>
                      <span>Secure tokenization isolation active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">GRC Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Governance and Compliance Are Increasingly Complex
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprises face expanding regulatory obligations, evolving operational risks, increasing fraud exposure, and growing governance complexity across fraud operations, AML compliance, cybersecurity, vendor ecosystems, privacy obligations, operational resilience, internal controls, and enterprise risk management. Many organizations still rely on spreadsheets, disconnected GRC tools, manual audits, fragmented workflows, and siloed compliance programs. Without centralized governance intelligence, organizations struggle to monitor enterprise risk consistently, maintain audit readiness, coordinate remediation, track policy compliance, manage controls effectively, provide executive visibility, and reduce operational exposure. This creates governance blind spots, delayed remediation, audit inefficiencies, increased compliance costs, and operational risk accumulation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Fragmented Governance", desc: "Risk, compliance, security, fraud, and audit teams operate across disconnected systems.", icon: <Network /> },
                { title: "Manual Compliance Processes", desc: "Evidence collection and governance workflows remain highly manual and time-consuming.", icon: <FileSpreadsheet /> },
                { title: "Limited Risk Visibility", desc: "Leadership lacks unified enterprise-wide risk intelligence.", icon: <Eye /> },
                { title: "Audit Readiness Challenges", desc: "Organizations struggle to maintain continuously updated evidence and control mappings.", icon: <ClipboardCheck /> },
                { title: "Delayed Remediation", desc: "Control failures and policy violations remain unresolved for extended periods.", icon: <Clock /> },
                { title: "Regulatory Complexity", desc: "Multiple frameworks create overlapping governance and reporting burdens.", icon: <Sliders /> }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                    {prob.icon}
                  </div>
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>

            {/* Risk Assessment Workflow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">RISK ASSESSMENT WORKFLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Risk Identification", desc: "Scans enterprise datasets to discover operational and transaction liabilities." },
                  { title: "2. Impact Scoring", desc: "Calculates residual risk rating based on current framework models." },
                  { title: "3. Controls Mapping", desc: "Links specific security controls and webhooks directly to the target risk profile." },
                  { title: "4. Remediation SLA", desc: "Creates task actions with strict timelines if controls drop below safe thresholds." },
                  { title: "5. Board Reporting", desc: "Visualizes unified risk indicators for audit executives and GRC stakeholders." }
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col items-center justify-between">
                    <div>
                      <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                      <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 4 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Enterprise Resilience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Connected Governance & Enterprise Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines governance automation, enterprise risk management, controls intelligence, audit orchestration, policy governance, operational telemetry, and compliance monitoring into a unified GRC platform. The platform continuously evaluates operational risk, control effectiveness, compliance posture, audit readiness, remediation progress, policy adherence, fraud exposure, AML governance, and enterprise resilience. DeepSense enables organizations to centralize governance operations, automate compliance workflows, strengthen operational resilience, improve executive visibility, reduce audit overhead, accelerate remediation, and unify enterprise risk intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Centralize governance", desc: "Unify fraud operations, compliance systems, and internal GRC structures." },
                { title: "Automate compliance", desc: "Build automated attestation loops to verify controls continuously." },
                { title: "Strengthen operational resilience", desc: "Instantly alert internal auditors if sanctions verification lines fail." },
                { title: "Improve executive visibility", desc: "Supply board members with clean, unified GRC metrics." },
                { title: "Reduce audit overhead", desc: "Automate historical evidence collections to simplify audit steps." },
                { title: "Accelerate remediation", desc: "Route failed control warnings to technical and risk operators instantly." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise GRC Management Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Enterprise Risk Management", desc: "Manage operational risks, fraud risks, AML exposure, security risks, third-party risks, and regulatory exposure." },
                { title: "Controls Management", desc: "Support control libraries, control ownership, testing schedules, evidence mapping, control monitoring, and effectiveness scoring." },
                { title: "Compliance Framework Mapping", desc: "Map controls and workflows to SOX, PCI DSS, ISO 27001, SOC 2, GDPR, AML compliance programs, and NIST CSF." },
                { title: "Policy Management", desc: "Manage policy creation, approvals, versioning, attestation workflows, policy distribution, and exception handling." },
                { title: "Audit Management", desc: "Coordinate audit planning, evidence collection, findings management, audit workflows, remediation tracking, and auditor collaboration." },
                { title: "Risk Assessments", desc: "Conduct enterprise risk assessments, control gap analysis, inherent vs residual risk analysis, impact scoring, and likelihood modeling." },
                { title: "Remediation Workflow", desc: "Track findings remediation, issue ownership, SLA monitoring, escalation workflows, corrective actions, and governance approvals." },
                { title: "Continuous Compliance Monitoring", desc: "Monitor policy violations, control failures, operational anomalies, governance drift, and workflow integrity." },
                { title: "Executive & Board Reporting", desc: "Generate governance dashboards, risk summaries, compliance posture reports, audit status updates, and remediation analytics." },
                { title: "Evidence & Attestation", desc: "Maintain audit evidence, attestations, approvals, governance history, and workflow traceability." }
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

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Powers Enterprise Governance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests controls, policies, audits, operational telemetry, fraud intelligence, AML workflows, security events, and compliance evidence." },
                { title: "Step 2 — Evaluation", desc: "The platform evaluates control effectiveness, policy adherence, workflow integrity, compliance posture, and operational risk indicators." },
                { title: "Step 3 — Correlation", desc: "DeepSense correlates controls, risks, incidents, findings, remediation workflows, audit evidence, and operational anomalies." },
                { title: "Step 4 — Scoring", desc: "The system generates enterprise risk scores, compliance ratings, control effectiveness metrics, and remediation priority indicators." },
                { title: "Step 5 — Action", desc: "High-risk findings trigger remediation workflows, governance escalation, evidence reviews, compliance investigations, and executive reporting." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col justify-between">
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

        {/* ================= SECTION 6: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Modern Governance & Compliance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Financial Institutions" },
                { id: "security", label: "Enterprise Security Teams" },
                { id: "audit", label: "Internal Audit Teams" },
                { id: "compliance", label: "Compliance Operations" },
                { id: "executive", label: "Executive Risk Committees" }
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
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage AML governance, fraud controls, operational resilience, and regulatory compliance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure banking operations. Map transactional controls directly to standard GRC audit logs.
                  </p>
                </div>
              )}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor security controls, governance drift, access governance, and operational risk.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Audit security environments continuously. Ensure role privileges remain structured to mitigate risk.
                  </p>
                </div>
              )}
              {activeTab === "audit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Coordinate audit planning, evidence reviews, findings management, and remediation tracking.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Simplify auditor interactions. Supply secure GRC logins enabling self-service evidence review.
                  </p>
                </div>
              )}
              {activeTab === "compliance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Automate policy governance, attestation workflows, control mapping, and regulatory readiness.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Organize enterprise compliance initiatives. Dynamically match policy items to active IT controls.
                  </p>
                </div>
              )}
              {activeTab === "executive" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Gain enterprise risk visibility, board-level reporting, remediation oversight, and governance intelligence.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Equip corporate executives with actionable insight. Streamline high-level board risk reviews.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Synergy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links GRC management with AML screening, active fraud detection, privileged access, and incident remediation databases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Continuous Controls Monitoring", desc: "Continuously validate controls and governance workflows." },
                { title: "AML Monitoring", desc: "Correlate compliance exposure with financial crime operations." },
                { title: "Fraud Detection", desc: "Integrate fraud governance and operational risk visibility." },
                { title: "SIEM Integrations", desc: "Correlate enterprise security telemetry with governance workflows." },
                { title: "Audit Logs", desc: "Maintain immutable governance and operational accountability trails." },
                { title: "Case Management", desc: "Escalate governance findings into investigation and remediation workflows." },
                { title: "Third-Party Risk", desc: "Monitor vendor and supply chain governance exposure." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Governance & Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Enterprise Risk Dashboard", desc: "Risk heatmaps, operational exposure, governance scoring, and compliance posture visibility." },
                { title: "Controls Monitoring Dashboard", desc: "Control effectiveness, testing schedules, failed controls, and remediation progress." },
                { title: "Audit Operations Workspace", desc: "Audit timelines, evidence tracking, findings management, and remediation workflows." },
                { title: "Compliance Intelligence Analytics", desc: "Framework coverage, attestation completion, policy compliance, and governance metrics." },
                { title: "Executive Reporting Center", desc: "Board-ready dashboards, risk summaries, audit readiness indicators, and enterprise governance KPIs." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Regulated Enterprise Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure governance dashboards to enforce custom GRC policies across corporate groups.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Insurance", "Healthcare", "Government", "Payment Processors",
                "Telecom", "Enterprise SaaS", "Ecommerce", "Marketplaces", "Energy", "Global Enterprises"
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <Building2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-neutral-900 font-manrope uppercase tracking-wider">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">SaaS Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Grade Governance and Audit Readiness
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense unifies operational controls and corporate policies to fulfill SOC2, PCI, SOX, and general compliance requirements.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Governance Intelligence", desc: "Every governance decision includes control evidence, policy relationships, and remediation history." },
                { title: "Audit Logging", desc: "Track governance actions, policy updates, remediation workflows, and approvals." },
                { title: "Multi-Tenant Security", desc: "Secure operational separation across organizations, governance environments, and compliance programs." },
                { title: "Compliance-Ready Architecture", desc: "Engineered to satisfy SOX, PCI DSS, ISO 27001, SOC 2, GDPR, and AML programs." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise environments." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec.title}</span>
                  <p className="text-xs text-zinc-500">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">GRC FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is GRC management?", 
                  a: "Governance, Risk, and Compliance (GRC) management centralizes enterprise risk oversight, controls governance, compliance workflows, audit readiness, and operational accountability." 
                },
                { 
                  q: "Can DeepSense support multiple compliance frameworks?", 
                  a: "Yes. DeepSense supports frameworks including SOX, PCI DSS, ISO 27001, SOC 2, GDPR, AML governance programs, and custom enterprise frameworks." 
                },
                { 
                  q: "Does DeepSense automate audit evidence collection?", 
                  a: "Yes. The platform continuously collects and maps evidence across governance workflows and operational systems." 
                },
                { 
                  q: "Can the platform manage remediation workflows?", 
                  a: "Yes. DeepSense supports issue tracking, remediation assignment, SLA monitoring, escalation workflows, and governance approvals." 
                },
                { 
                  q: "Does DeepSense provide executive reporting?", 
                  a: "Yes. The platform includes executive dashboards, governance KPIs, board-ready reporting, and enterprise risk summaries." 
                },
                { 
                  q: "Can DeepSense integrate with existing enterprise IT setups?", 
                  a: "Yes. DeepSense supports APIs, SIEM integrations, workflow orchestration, webhooks, and enterprise telemetry pipelines." 
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

        {/* ================= SECTION 12: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Centralize Governance, Risk, and Compliance Operations</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Centralize GRC workflows and accelerate continuous <br />
                <span className="text-white/40 font-bold">real-time governance intelligence enterprise-wide.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Strengthen governance visibility, automate compliance workflows, reduce operational risk, and maintain continuous audit readiness using enterprise-grade GRC intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Enterprise Risk Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
