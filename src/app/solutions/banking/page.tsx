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

export default function BankingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("retail");
  
  // Interactive Banking simulator states
  const [paymentType, setPaymentType] = useState<string>("rtp");
  const [sanctionsScreened, setSanctionsScreened] = useState<boolean>(true);
  const [appScamMule, setAppScamMule] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic banking fraud parameters
  const calculateBankingRisk = () => {
    let score = 15; // base risk score
    
    if (paymentType === "wire") score += 20;
    if (appScamMule) score += 50;
    if (!sanctionsScreened) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "NORMAL BANKING LEDGER";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "HIGH MULE ACTIVITY WARNING";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "APP SCAM DETECTED";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "SANCTIONS DRIFT DETECTED";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateBankingRisk();

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
                ENTERPRISE FRAUD & FINANCIAL CRIME PLATFORM FOR BANKING
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Modern Banking Ecosystems <br />
                <span className="text-zinc-400">From Fraud and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps retail banks, commercial banks, digital banks, and financial institutions detect fraud, monitor AML risk, verify customer identities, secure payments, and strengthen governance using real-time intelligence and connected risk analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/banking#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Banking Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Designed for modern banking operations across retail banking, digital banking, commercial banking, payments, treasury, lending, and financial crime compliance teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Banking Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Banking Risk Ledger Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CORE LEDGER GUARD SHIELD</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Banking parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Payment Engine</span>
                        <select 
                          value={paymentType} 
                          onChange={(e) => setPaymentType(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="rtp">Real-Time RTP</option>
                          <option value="wire">International Wire</option>
                          <option value="ach">ACH Batch Settlement</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">PEP & Sanctions Cleared</span>
                        <input 
                          type="checkbox" 
                          checked={sanctionsScreened} 
                          onChange={(e) => setSanctionsScreened(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Mule / APP Scam indicators</span>
                        <input 
                          type="checkbox" 
                          checked={appScamMule} 
                          onChange={(e) => setAppScamMule(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE BANKING CORE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Instant payment check</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {appScamMule ? "Mule pattern flagged" : "Clear routing"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">PEP screening</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {sanctionsScreened ? "Continuous Check Live" : "Assessments Outdated"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">BANKING FRAUD RISK SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Banking Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Banking Fraud and Compliance Risks Are Rapidly Evolving
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Banks face increasingly sophisticated threats across digital banking, real-time payments, wire transfers, onboarding, account takeover, APP scams, mule activity, sanctions exposure, synthetic identities, and insider risk. Traditional banking systems often rely on siloed fraud tools, delayed AML reviews, fragmented customer intelligence, static rules, and disconnected case management. This creates operational blind spots, delayed investigations, increased fraud losses, poor customer experience, high false positives, regulatory pressure, and governance complexity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Real-Time Payment Fraud", desc: "Instant payment ecosystems accelerate fraud and APP scam exposure.", icon: <Shield /> },
                { title: "Digital Banking Risk", desc: "Online and mobile banking channels expand attack surfaces for fraudsters.", icon: <Users /> },
                { title: "AML & Sanctions Pressure", desc: "Regulators expect continuous monitoring and explainable compliance workflows.", icon: <Sliders /> },
                { title: "Synthetic Identity Growth", desc: "Fraudsters increasingly exploit onboarding and digital account creation.", icon: <Clock /> },
                { title: "Customer Experience Friction", desc: "Banks must balance fraud prevention with seamless digital experiences.", icon: <Building /> },
                { title: "Operational Complexity", desc: "Fraud, AML, compliance, and security teams often operate independently.", icon: <Sliders /> }
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

            {/* Banking Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">BANKING RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Customer inputs signup details, triggering document verifications." },
                  { title: "2. Payments", desc: "Active transaction patterns tracked across ACH or wire protocols." },
                  { title: "3. AML Monitor", desc: "Continuous screening of counterparties against sanctions records." },
                  { title: "4. Fraud Scoring", desc: "DeepSense maps risk scoring dynamically to identify APP scam threats." },
                  { title: "5. Investigations", desc: "High-risk signals routed to fraud operations queues." },
                  { title: "6. Governance Review", desc: "Immutable compliance logs compiled to satisfy regulatory audits." }
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
              One Unified Platform for Banking Fraud, AML, Identity, and Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, AML monitoring, sanctions screening, payment intelligence, behavioral analytics, customer risk scoring, and enterprise governance into a unified banking risk platform. The platform continuously evaluates customer behavior, transaction risk, payment activity, onboarding integrity, AML exposure, sanctions relationships, device trust, graph intelligence, and operational anomalies. DeepSense enables banks to stop fraud faster, reduce AML risk, improve onboarding trust, secure real-time payments, reduce operational costs, strengthen audit readiness, and improve customer trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop fraud faster", desc: "Block wire fraud and account takeover attempts with millisecond latency." },
                { title: "Reduce AML risk", desc: "Identify structuring patterns and suspicious transfers dynamically." },
                { title: "Improve onboarding trust", desc: "Weed out synthetic identities and deepfakes during initial KYC." },
                { title: "Secure real-time payments", desc: "Scan RTP and mobile wallet operations continuously for APP scams." },
                { title: "Reduce operational costs", desc: "Substitute rules with machine learning to eliminate high false positives." },
                { title: "Strengthen audit readiness", desc: "Maintain regulatory evidence repositories to satisfy audits." }
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
              Banking Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Fraud Detection", desc: "Detect wire fraud, APP scams, account takeover, payment fraud, mule activity, and transaction anomalies." },
                { title: "AML Transaction Monitoring", desc: "Identify structuring, suspicious transfers, rapid movement patterns, sanctions exposure, AML typologies, and suspicious customer behavior." },
                { title: "Customer Risk Profiling", desc: "Continuously evaluate onboarding trust, lifecycle risk, transaction behavior, AML exposure, and behavioral anomalies." },
                { title: "Digital Identity Verification", desc: "Verify customer identities, onboarding documents, liveness sessions, deepfake attempts, and synthetic identities." },
                { title: "Account Takeover Prevention", desc: "Protect digital banking sessions, authentication workflows, login activity, MFA workflows, and session integrity." },
                { title: "Payment Fraud Intelligence", desc: "Monitor ACH transfers, RTP payments, card activity, mobile wallet risk, NFC transactions, and wire payments." },
                { title: "Sanctions & PEP Screening", desc: "Continuously screen customers, beneficiaries, counterparties, business entities, and payment flows." },
                { title: "Graph Intelligence", desc: "Visualize mule networks, linked customers, shared devices, payment relationships, and fraud ecosystems." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud alerts, AML investigations, sanctions reviews, evidence workflows, and analyst escalations." },
                { title: "Governance & Compliance", desc: "Support audit readiness, regulatory evidence, control monitoring, governance reporting, and operational resilience." }
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
              How DeepSense Protects Banking Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transactions, onboarding events, payment activity, login telemetry, AML events, customer interactions, and operational signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches banking events using device intelligence, behavioral analytics, AML indicators, graph relationships, sanctions intelligence, and fraud telemetry." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates payment risk, onboarding trust, customer exposure, behavioral anomalies, financial crime indicators, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, AML alerts, sanctions matches, onboarding decisions, and operational risk indicators." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, EDD workflows, fraud reviews, case escalations, and governance reporting." }
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
              Built for Modern Banking Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "retail", label: "Retail Banking" },
                { id: "commercial", label: "Commercial Banking" },
                { id: "digital", label: "Digital Banks" },
                { id: "wealth", label: "Wealth & Private Banking" },
                { id: "cross", label: "Cross-Border Banking" }
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
              {activeTab === "retail" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect online banking, consumer payments, onboarding, and digital account access.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure consumer profiles. Map login anomalies and device trust indicators dynamically to block rogue transfers.
                  </p>
                </div>
              )}
              {activeTab === "commercial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor treasury payments, corporate onboarding, high-value transfers, and operational fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track corporate treasury payments. Secure approval workflows and analyze threshold indicators before money leaves the bank.
                  </p>
                </div>
              )}
              {activeTab === "digital" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect synthetic onboarding, account farming, APP scams, and digital payment fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard online banking interfaces. Block fake synthetic registrations automatically during KYC checks.
                  </p>
                </div>
              )}
              {activeTab === "wealth" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Strengthen customer due diligence, transaction monitoring, relationship intelligence, and compliance governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate private investor accounts. Align relationship logs directly with GRC evidence matrices.
                  </p>
                </div>
              )}
              {activeTab === "cross" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage sanctions exposure, international payment risk, correspondent banking controls, and AML investigations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
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
              Connected Across the Banking Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links transaction fraud deciders with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Decisioning", desc: "Real-time transaction fraud scoring and intervention orchestration." },
                { title: "AML Monitoring", desc: "Continuous suspicious activity detection and investigation workflows." },
                { title: "Identity Intelligence", desc: "KYC, document verification, and synthetic identity detection." },
                { title: "Payment Risk Intelligence", desc: "RTP, ACH, card, wallet, and wire fraud monitoring." },
                { title: "Graph Intelligence", desc: "Connected fraud network and mule ecosystem visibility." },
                { title: "UEBA & Behavioral Analytics", desc: "Behavioral anomaly detection and insider-risk monitoring." },
                { title: "GRC & Controls Monitoring", desc: "Continuous governance and operational resilience monitoring." }
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
              Real-Time Banking Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking Fraud Operations Dashboard", desc: "Live fraud alerts, payment monitoring, transaction risk analytics, and fraud heatmaps." },
                { title: "AML & Compliance Dashboard", desc: "Suspicious activity trends, sanctions exposure, case workflows, and EDD monitoring." },
                { title: "Customer Risk Intelligence", desc: "Lifecycle risk scoring, onboarding trust analytics, customer segmentation, and fraud exposure visibility." },
                { title: "Payment Risk Analytics", desc: "Wire fraud monitoring, RTP transaction intelligence, APP scam indicators, and card fraud trends." },
                { title: "Investigation Workspace", desc: "Graph investigations, linked customers, evidence timelines, and operational intelligence." }
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
              Designed for Modern Financial Institutions
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure banking governance engines across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Retail Banking", "Commercial Banking", "Digital Banking", "Private Banking", "Credit Unions", "Payment Banks",
                "Challenger Banks", "Neo Banks", "Cross-Border Banking", "Treasury Operations", "Corporate Banking", "Embedded Banking Platforms"
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
                Enterprise-Grade Security and Regulatory Governance
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single banking transaction.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and AML decision includes reason codes, behavioral evidence, and customer context." },
                { title: "Audit Logging", desc: "Track analyst reviews, onboarding actions, AML escalations, and governance workflows." },
                { title: "Multi-Tenant Banking Security", desc: "Secure operational separation across banking entities, customer environments, and governance workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML, KYC, sanctions, PCI DSS, SOX, and GRC frameworks." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise infrastructure." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">BANK FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense support real-time banking fraud detection?", 
                  a: "Yes. DeepSense provides millisecond-level fraud scoring and payment risk decisioning across banking channels." 
                },
                { 
                  q: "Does DeepSense support AML transaction monitoring?", 
                  a: "Yes. The platform supports suspicious activity monitoring, sanctions screening, customer risk profiling, and regulatory reporting workflows." 
                },
                { 
                  q: "Can DeepSense help reduce APP scam losses?", 
                  a: "Yes. DeepSense analyzes beneficiary risk, customer behavior, payment anomalies, and mule indicators to detect APP scams." 
                },
                { 
                  q: "Does DeepSense support digital banking environments?", 
                  a: "Yes. The platform supports online banking, mobile banking, onboarding, authentication security, and payment fraud monitoring." 
                },
                { 
                  q: "Can DeepSense integrate with core banking systems?", 
                  a: "Yes. DeepSense supports APIs, event streams, webhooks, orchestration pipelines, and enterprise banking integrations." 
                },
                { 
                  q: "Is DeepSense suitable for regulated banking environments?", 
                  a: "Yes. DeepSense is designed for enterprise banking governance, AML compliance, audit readiness, and operational resilience." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Modernize Banking Fraud and Financial Crime Operations</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Modernize banking operations and stop <br />
                <span className="text-white/40 font-bold">financial crime schemes in real time.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect customers, secure payments, strengthen AML programs, and improve operational resilience using real-time banking fraud intelligence and connected risk analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/banking#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Banking Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
