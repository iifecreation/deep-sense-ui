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

export default function GovernmentPublicSectorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("tax");
  
  // Interactive Government parameters
  const [procurementChannel, setProcurementChannel] = useState<string>("legacy");
  const [citizenVerification, setCitizenVerification] = useState<boolean>(true);
  const [disbursementAmount, setDisbursementAmount] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic government risk parameters
  const calculateGovernmentRisk = () => {
    let score = 10; // base risk score
    
    if (procurementChannel === "bidder") score += 40;
    if (disbursementAmount) score += 35;
    if (!citizenVerification) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "SECURE PROCUREMENT ROUTE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED SUBSIDY FRAUD RING";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED eID REGISTRATION";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE DISBURSEMENT DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateGovernmentRisk();

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
                PUBLIC SECTOR FRAUD & GOVERNANCE INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Public Systems From <br />
                <span className="text-zinc-400">Fraud, Abuse, and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps government agencies and public-sector institutions detect fraud, secure digital services, monitor AML exposure, strengthen procurement governance, and improve operational transparency using real-time intelligence and AI-driven risk analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/government-public-sector#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Public Sector Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for government agencies, regulators, tax authorities, public-benefit programs, law enforcement operations, and national digital transformation initiatives.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Government Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Public Procurement Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GOVERNMENT INTELLIGENCE GATEWAY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Public Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Procurement Channel</span>
                        <select 
                          value={procurementChannel} 
                          onChange={(e) => setProcurementChannel(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="legacy">Legacy Vendor list</option>
                          <option value="bidder">Sudden new bidder profile</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Citizen eID verified</span>
                        <input 
                          type="checkbox" 
                          checked={citizenVerification} 
                          onChange={(e) => setCitizenVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High value disbursement spike</span>
                        <input 
                          type="checkbox" 
                          checked={disbursementAmount} 
                          onChange={(e) => setDisbursementAmount(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PUBLIC SECTOR TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Procurement Risk Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {procurementChannel === "bidder" ? "High Risk Bidder Warning" : "Legacy vendor cleared"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Benefit Abuse Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {disbursementAmount ? "Coordinated Payout Alert" : "Stable history check"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">PUBLIC FRAUD RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Graph relationship active</span>
                      <span>Secure tokenization isolation live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Government Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Public-Sector Fraud and Abuse Continue to Expand
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Government agencies increasingly manage digital citizen services, public benefit programs, procurement ecosystems, cross-border payments, grants and subsidies, taxation workflows, identity systems, and national payment infrastructures. Fraudsters increasingly exploit public-sector systems using identity fraud, benefit abuse, procurement corruption, fake vendors, subsidy fraud, organized fraud rings, mule accounts, insider abuse, and sanctions evasion. Traditional government systems often struggle with fragmented operational visibility, manual investigations, disconnected agency workflows, delayed fraud detection, limited behavioral intelligence, and operational inefficiencies. Without connected intelligence, public institutions face large-scale financial leakage, operational abuse, public trust erosion, governance failures, delayed investigations, compliance pressure, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Benefit & Subsidy Fraud", desc: "Fraudsters exploit welfare, subsidy, and grant programs using fake or manipulated identities.", icon: <Shield /> },
                { title: "Procurement Corruption", desc: "Public procurement ecosystems remain vulnerable to collusion and payment abuse.", icon: <Users /> },
                { title: "Identity Fraud", desc: "Digital government services increasingly face onboarding and impersonation attacks.", icon: <Sliders /> },
                { title: "Organized Fraud Rings", desc: "Coordinated criminal networks exploit multiple public-sector programs simultaneously.", icon: <Clock /> },
                { title: "Insider Threats", desc: "Internal abuse and operational misconduct create governance and financial exposure.", icon: <Building /> },
                { title: "AML & Sanctions Exposure", desc: "Government institutions must monitor financial crime and high-risk transactions continuously.", icon: <Sliders /> }
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

            {/* Public Fraud Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">PUBLIC FRAUD LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Citizen registers via national digital portal, validating identity." },
                  { title: "2. Verification", desc: "SIM swap checks and biometric data matched to detect synthetic profiles." },
                  { title: "3. Disbursements", desc: "Benefit wire transfers screened dynamically for mule network patterns." },
                  { title: "4. Fraud Scoring", desc: "Risk Score generated using real-time telemetry inputs." },
                  { title: "5. Investigations", desc: "Rogue alerts routed directly to specialized agency Special Investigation queues." },
                  { title: "6. Remediation", desc: "Mitigation reports prepared to satisfy GRC board requirements." }
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col items-center justify-between">
                    <div>
                      <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                      <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 5 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Public-Sector Fraud & Governance Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, identity intelligence, AML monitoring, procurement analytics, graph analysis, behavioral analytics, and governance automation into a unified public-sector risk platform. The platform continuously evaluates citizen onboarding, payments and disbursements, procurement workflows, behavioral anomalies, AML indicators, sanctions exposure, operational integrity, graph relationships, and public-sector fraud indicators. DeepSense enables government institutions to: reduce fraud losses, improve transparency, strengthen digital trust, modernize investigations, improve operational efficiency, accelerate governance workflows, and strengthen citizen confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce fraud losses", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Improve transparency", desc: "Audit citizen interactions and payment distributions continuously." },
                { title: "Strengthen digital trust", desc: "Verify national eID signups without introducing user friction." },
                { title: "Modernize investigations", desc: "Equip investigators with structured, connected relationship graphs." },
                { title: "Improve operational efficiency", desc: "Automate verification checks to resolve backlogs instantly." },
                { title: "Accelerate governance workflows", desc: "Generate compliance records matching sovereign audit specifications." }
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
              Public-Sector Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Benefit & Subsidy Fraud Detection", desc: "Detect duplicate beneficiaries, fake identities, suspicious disbursements, coordinated abuse patterns, grant fraud, and subsidy manipulation." },
                { title: "Citizen Identity Verification", desc: "Verify digital identities, onboarding legitimacy, document authenticity, liveness sessions, and synthetic identities." },
                { title: "Procurement & Vendor Risk Monitoring", desc: "Monitor procurement corruption, fake vendors, duplicate invoices, collusive bidding, payment anomalies, and vendor governance exposure." },
                { title: "AML & Sanctions Monitoring", desc: "Identify suspicious transactions, sanctions exposure, high-risk entities, laundering indicators, and cross-border risk." },
                { title: "Behavioral Analytics", desc: "Analyze operational workflows, citizen interactions, employee behavior, transaction anomalies, and operational trust indicators." },
                { title: "Insider Threat Detection", desc: "Detect operational abuse, privilege misuse, unauthorized access, suspicious workflow manipulation, and governance violations." },
                { title: "Fraud Ring Detection", desc: "Visualize linked beneficiaries, connected vendors, shared devices, mule ecosystems, collusive networks, and organized fraud rings." },
                { title: "Public Payment Risk Monitoring", desc: "Monitor grants, subsidies, public disbursements, tax refunds, procurement payments, and social payments." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, procurement reviews, AML escalations, evidence workflows, and remediation tracking." },
                { title: "Governance & Audit Readiness", desc: "Support operational governance, audit logging, compliance reporting, controls monitoring, and public accountability workflows." }
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

        {/* ================= SECTION 5: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Protects Public-Sector Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests citizen records, disbursement activity, procurement workflows, identity telemetry, transaction data, operational signals, and investigation records." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, graph relationships, sanctions intelligence, AML indicators, device intelligence, and fraud telemetry." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates citizen trust, payment legitimacy, procurement integrity, operational anomalies, fraud relationships, and governance exposure." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, AML alerts, procurement warnings, identity risk indicators, and operational escalations." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, procurement reviews, operational escalations, remediation workflows, and governance reporting." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Modern Public-Sector Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "tax", label: "Tax & Revenue" },
                { id: "social", label: "Social Benefit Programs" },
                { id: "procurement", label: "Procurement & Treasury" },
                { id: "identity", label: "National Digital ID" },
                { id: "enforcement", label: "Law Enforcement" }
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
              {activeTab === "tax" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect refund fraud, fake filings, suspicious payments, and organized abuse networks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure national treasury files. Analyze tax refund requests for duplicated account profiles and synthetic anomalies.
                  </p>
                </div>
              )}
              {activeTab === "social" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect subsidy disbursements, welfare payments, beneficiary onboarding, and public fund integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate beneficiary lists. Enforce identity liveness validation checks during disbursement operations.
                  </p>
                </div>
              )}
              {activeTab === "procurement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor procurement corruption, vendor abuse, disbursement anomalies, and operational integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "identity" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure onboarding workflows, citizen verification, identity trust, and authentication systems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate citizen ID registrations. Enforce liveness check verification dynamically.
                  </p>
                </div>
              )}
              {activeTab === "enforcement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Accelerate investigations, graph analysis, AML intelligence, and operational visibility.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Equip law enforcement investigators with clear transaction relationship flows and auto-compiled reports dynamically.
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
              Connected Across the Public-Sector Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links citizen fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Identity Intelligence", desc: "Citizen verification and synthetic identity prevention." },
                { title: "Procurement & Vendor Risk", desc: "Public procurement monitoring and corruption detection." },
                { title: "AML Monitoring", desc: "Suspicious activity and sanctions exposure monitoring." },
                { title: "Graph Intelligence", desc: "Connected fraud ecosystem and organized network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection and insider-risk intelligence." },
                { title: "GRC & Controls Monitoring", desc: "Governance visibility and audit readiness monitoring." },
                { title: "Case Management", desc: "Fraud investigations and evidence workflow orchestration." }
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
              Real-Time Public-Sector Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Public Fraud Operations Dashboard", desc: "Fraud alerts, disbursement monitoring, procurement analytics, and operational fraud visibility." },
                { title: "Citizen Trust Intelligence", desc: "Onboarding analytics, identity risk scoring, behavioral trust indicators, and synthetic identity monitoring." },
                { title: "Procurement Governance Dashboard", desc: "Vendor risk analytics, procurement integrity monitoring, payment anomaly visibility, and corruption indicators." },
                { title: "AML & Financial Crime Analytics", desc: "Suspicious transaction monitoring, sanctions exposure, organized network intelligence, and operational risk visibility." },
                { title: "Investigation Workspace", desc: "Linked entities, investigation timelines, evidence management, graph analysis, and operational intelligence." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES / SEGMENTS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Public Institutions and Government Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous public-sector fraud models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Tax Authorities", "Treasury Departments", "Social Benefit Programs", "National ID Programs", "Public Procurement Agencies", "Law Enforcement Agencies",
                "Customs & Border Operations", "Central Banks", "Government Payment Platforms", "Municipal Governments", "Public Healthcare Programs", "National Digital Service Platforms"
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
                Enterprise-Grade Security for Government Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and sovereign hosting options for every single agency scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and governance decision includes reason codes, behavioral evidence, and sanctions indicators." },
                { title: "Audit Logging", desc: "Track investigations, procurement reviews, payment decisions, and governance workflows." },
                { title: "Multi-Tenant Government Security", desc: "Secure operational separation across agencies, operational environments, and investigation workflows." },
                { title: "Compliance & Sovereign Governance", desc: "Support initiatives aligned with AML, public-sector governance, GRC, and sovereign compliance." },
                { title: "Flexible Deployment Models", desc: "Available via sovereign cloud, private cloud, hybrid, or on-premise infrastructure." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">GOVERNMENT FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect public-sector fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates disbursements, procurement activity, onboarding workflows, and operational telemetry to detect fraud in real time." 
                },
                { 
                  q: "Does DeepSense support procurement corruption detection?", 
                  a: "Yes. The platform identifies suspicious vendors, collusive relationships, duplicate invoices, and procurement governance anomalies." 
                },
                { 
                  q: "Can DeepSense support AML and sanctions monitoring?", 
                  a: "Yes. DeepSense supports suspicious activity detection, sanctions screening, and financial crime intelligence workflows." 
                },
                { 
                  q: "Does DeepSense support citizen identity verification?", 
                  a: "Yes. The platform supports onboarding verification, liveness detection, synthetic identity prevention, and digital identity trust analytics." 
                },
                { 
                  q: "Can DeepSense support government investigations?", 
                  a: "Yes. DeepSense provides graph investigations, evidence management, case workflows, and operational intelligence for investigative teams." 
                },
                { 
                  q: "Is DeepSense suitable for sovereign and government environments?", 
                  a: "Yes. DeepSense is designed for enterprise government operations, sovereign deployments, and national-scale governance programs." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Modernize Public-Sector Fraud and Governance Operations</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure public systems and prevent <br />
                <span className="text-white/40 font-bold">financial exposure vulnerabilities dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect public funds, strengthen citizen trust, improve operational transparency, and modernize investigations using enterprise-grade fraud and governance intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/government-public-sector#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Public Sector Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
