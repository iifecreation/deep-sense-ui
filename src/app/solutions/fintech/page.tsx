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

export default function FintechPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("neobanks");
  
  // Interactive Fintech simulator parameters
  const [apiType, setApiType] = useState<string>("webhook");
  const [kycLiveness, setKycLiveness] = useState<boolean>(true);
  const [emulatorSpike, setEmulatorSpike] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic fintech fraud metrics based on parameters
  const calculateFintechRisk = () => {
    let score = 15; // base risk score
    
    if (apiType === "batch") score += 20;
    if (emulatorSpike) score += 50;
    if (!kycLiveness) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "SECURE FINTECH RUNTIME";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED EMULATOR ATTACK";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "SYNTHETIC ID ONBOARDING";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "API LATENCY DRIFT DETECTED";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateFintechRisk();

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
                <Cpu className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                FRAUD & FINANCIAL CRIME PLATFORM FOR FINTECH
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Scale Fintech Growth <br />
                <span className="text-zinc-400">Without Scaling Fraud Risk</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps fintechs detect fraud, secure onboarding, monitor AML exposure, protect payments, and automate financial crime operations using real-time intelligence, behavioral analytics, and connected risk decisioning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/fintech#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fintech Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for neo banks, payment apps, embedded finance platforms, digital wallets, lending platforms, and high-growth fintech ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Modern Fintech Risk Intelligence Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Fintech API Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FINTECH CORE ENCLAVE SHIELD</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Fintech Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Integration Mode</span>
                        <select 
                          value={apiType} 
                          onChange={(e) => setApiType(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="webhook">Active Webhook API</option>
                          <option value="batch">Delayed Batch Queue</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">KYC Document Liveness</span>
                        <input 
                          type="checkbox" 
                          checked={kycLiveness} 
                          onChange={(e) => setKycLiveness(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Emulator Spike detected</span>
                        <input 
                          type="checkbox" 
                          checked={emulatorSpike} 
                          onChange={(e) => setEmulatorSpike(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE FINTECH API TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Onboarding Trust Engine</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {kycLiveness ? "Liveness verified" : "Liveness Outdated"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">API Event Stream Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {apiType === "webhook" ? "Continuous Check Live" : "Batch lag Warning"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">REAL-TIME FRAUD SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Fintech Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Fintech Growth Creates New Fraud and Compliance Challenges
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fintech platforms operate in high-speed digital environments where onboarding is instant, payments move in real time, customer acquisition scales rapidly, fraud evolves continuously, and regulatory scrutiny increases. Fraudsters increasingly target fintech ecosystems using synthetic identities, account takeover, referral abuse, payment fraud, mule activity, emulator farms, onboarding automation, and social engineering. Traditional fraud tools often cannot keep pace with API-first architectures, real-time payment flows, modern customer journeys, embedded finance ecosystems, and rapid product iteration. Without connected fraud and compliance intelligence, fintechs face accelerated fraud losses, operational bottlenecks, onboarding abuse, payment risk exposure, AML compliance pressure, and customer trust erosion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Instant Payment Fraud", desc: "Real-time payments increase fraud velocity and operational pressure.", icon: <Shield /> },
                { title: "Synthetic Onboarding", desc: "Fraudsters exploit rapid onboarding workflows using fabricated identities.", icon: <Users /> },
                { title: "Account Takeover", desc: "Compromised accounts increasingly target digital wallets and fintech ecosystems.", icon: <Sliders /> },
                { title: "Referral & Bonus Abuse", desc: "Growth programs attract coordinated fraud rings and multi-account abuse.", icon: <Clock /> },
                { title: "AML & Regulatory Pressure", desc: "Fintechs face increasing expectations around monitoring and governance.", icon: <Building /> },
                { title: "Scaling Operational Complexity", desc: "Fraud, compliance, onboarding, and payment operations become difficult to unify.", icon: <Sliders /> }
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

            {/* Fintech Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">FINTECH RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "User triggers rapid digital signup via mobile wallet API." },
                  { title: "2. Transactions", desc: "P2P or RTP instantly evaluated under millisecond pipelines." },
                  { title: "3. Fraud Scoring", desc: "Graph algorithms map linked accounts and device farms in real time." },
                  { title: "4. AML Monitor", desc: "Continuous watchlist checks run asynchronously to verify recipients." },
                  { title: "5. Investigations", desc: "Flagged anomalies routed instantly to collaborative dashboards." },
                  { title: "6. GRC Attestation", desc: "Immutable compliance logs compiled to satisfy regulatory audits." }
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
              One Unified Platform for Fintech Fraud, AML, and Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, onboarding intelligence, AML monitoring, behavioral analytics, payment risk scoring, graph intelligence, and governance automation into a unified fintech risk platform. The platform continuously evaluates onboarding behavior, payment activity, customer trust, transaction anomalies, device intelligence, behavioral patterns, AML exposure, graph relationships, and operational risk indicators. DeepSense enables fintechs to stop fraud in real time, secure digital onboarding, protect instant payments, reduce operational friction, strengthen compliance, scale safely, and improve customer trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop fraud in real time", desc: "Evaluate P2P and RTP transactions under millisecond speed." },
                { title: "Secure digital onboarding", desc: "Detect synthetic identities and deepfakes during initial signups." },
                { title: "Protect instant payments", desc: "Block wallet takeover schemes before funds are routed to external accounts." },
                { title: "Reduce operational friction", desc: "Drop false alerts by swapping static rules with behavioral telemetry." },
                { title: "Strengthen compliance", desc: "Continuous PEP database checks to stay aligned with GRC requirements." },
                { title: "Scale safely", desc: "Ensure spend profiles map seamlessly with unified risk dashboards." }
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
              Fintech Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Fraud Detection", desc: "Detect transaction fraud, payment abuse, wallet fraud, account takeover, onboarding fraud, and refund abuse." },
                { title: "Identity & KYC Intelligence", desc: "Verify customer identities, onboarding documents, liveness sessions, deepfake attacks, and synthetic identities." },
                { title: "Instant Payment Risk", desc: "Monitor RTP payments, ACH transfers, wallet transactions, peer-to-peer payments, and cross-border transfers." },
                { title: "Behavioral Analytics", desc: "Analyze onboarding behavior, session anomalies, transaction intent, behavioral drift, and account trust." },
                { title: "Device Fingerprinting", desc: "Detect emulators, shared devices, spoofed environments, VPN/proxy abuse, and linked fraud infrastructure." },
                { title: "AML & Customer Monitoring", desc: "Continuously evaluate suspicious activity, sanctions exposure, customer risk, transaction anomalies, and AML typologies." },
                { title: "Bonus & Referral Abuse", desc: "Identify referral fraud, incentive abuse, account farming, synthetic onboarding campaigns, and collusive reward networks." },
                { title: "Graph Intelligence", desc: "Visualize linked accounts, fraud rings, shared wallets, mule ecosystems, and connected payment relationships." },
                { title: "Case Management", desc: "Coordinate fraud investigations, AML reviews, onboarding escalations, dispute workflows, and evidence management." },
                { title: "Governance & Controls", desc: "Support compliance visibility, audit readiness, operational controls, governance workflows, and remediation tracking." }
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
              How DeepSense Protects Fintech Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests onboarding events, transactions, wallet activity, API telemetry, login sessions, customer interactions, and operational events." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using device intelligence, behavioral analytics, graph relationships, sanctions screening, AML indicators, and fraud telemetry." },
                { title: "Step 3 — Decisioning", desc: "DeepSense evaluates onboarding trust, payment risk, customer exposure, account compromise indicators, fraud relationships, and operational anomalies." },
                { title: "Step 4 — Enforcement", desc: "The system generates fraud alerts, onboarding decisions, AML escalations, payment interventions, and operational risk indicators." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, EDD workflows, fraud reviews, compliance escalations, and governance reporting." }
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
              Built for Modern Fintech Business Models
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "neobanks", label: "Neo Banks" },
                { id: "wallets", label: "Digital Wallets" },
                { id: "embedded", label: "Embedded Finance" },
                { id: "lending", label: "Lending Platforms" },
                { id: "cross", label: "Cross-Border Fintechs" }
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
              {activeTab === "neobanks" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect digital onboarding, mobile banking, instant payments, and customer authentication.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure mobile wallets. Analyze login timing and device trust indicators dynamically to block rogue transfers.
                  </p>
                </div>
              )}
              {activeTab === "wallets" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet fraud, peer-to-peer transfers, account takeover, and payout abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "embedded" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure API-based transactions, partner onboarding, payment orchestration, and financial workflows.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "lending" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect synthetic borrowers, onboarding fraud, repayment abuse, and mule activity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Protect credit portfolios. Map credit applications to synthetic identity alerts dynamically.
                  </p>
                </div>
              )}
              {activeTab === "cross" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage sanctions exposure, international transfers, AML risk, and fraud relationships.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure cross-border P2P pipelines. Track wire routing details against sanctions tables in real time.
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
              Connected Across the Fintech Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links transaction fraud deciders with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Decisioning", desc: "Real-time transaction scoring and intervention orchestration." },
                { title: "KYC & Identity Intelligence", desc: "Document verification, liveness, and synthetic identity prevention." },
                { title: "Payment Fraud Intelligence", desc: "RTP, ACH, wallet, card, and transfer risk monitoring." },
                { title: "Behavioral Biometrics", desc: "Continuous trust analysis and behavioral anomaly detection." },
                { title: "AML Monitoring", desc: "Continuous suspicious activity and customer risk evaluation." },
                { title: "Graph Intelligence", desc: "Connected fraud ecosystem and mule network visibility." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and compliance intelligence." }
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
              Real-Time Fintech Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Operations Dashboard", desc: "Real-time fraud alerts, onboarding risk analytics, payment monitoring, and operational fraud visibility." },
                { title: "Customer Trust Analytics", desc: "Lifecycle trust scoring, onboarding quality metrics, behavioral risk indicators, and account integrity monitoring." },
                { title: "Payment Risk Intelligence", desc: "Wallet transaction monitoring, instant payment analytics, fraud heatmaps, and transfer risk visibility." },
                { title: "AML & Compliance Dashboard", desc: "Sanctions exposure, suspicious activity trends, customer risk analytics, and governance monitoring." },
                { title: "Investigation Workspace", desc: "Graph investigations, linked entities, evidence timelines, and fraud intelligence workflows." }
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
              Designed for High-Growth Financial Platforms
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous fintech risk models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Neo Banks", "Digital Wallets", "Embedded Finance", "Payment Apps", "Lending Platforms", "Buy Now Pay Later",
                "Remittance Platforms", "Cross-Border Payments", "Payroll Fintechs", "Investment Platforms", "Crypto Fintechs", "Financial Super Apps"
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
                Enterprise-Grade Security for Modern Fintech Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single onboarding scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and onboarding decision includes reason codes, behavioral evidence, and device intelligence." },
                { title: "Audit Logging", desc: "Track onboarding reviews, fraud interventions, AML escalations, and governance actions." },
                { title: "Multi-Tenant Fintech Security", desc: "Secure operational separation across fintech organizations, customer environments, and operational workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML, KYC, PCI DSS, and GRC frameworks." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">FINTECH FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense support real-time fintech fraud detection?", 
                  a: "Yes. DeepSense provides millisecond-level fraud scoring and real-time risk decisioning across fintech ecosystems." 
                },
                { 
                  q: "Does DeepSense support digital onboarding security?", 
                  a: "Yes. The platform supports KYC verification, deepfake detection, liveness checks, and synthetic identity prevention." 
                },
                { 
                  q: "Can DeepSense monitor instant payments?", 
                  a: "Yes. DeepSense supports real-time payment monitoring across RTP, ACH, wallets, peer-to-peer transfers, and embedded finance flows." 
                },
                { 
                  q: "Does DeepSense support API-first fintech architectures?", 
                  a: "Yes. The platform is designed for API-first environments with webhooks, orchestration pipelines, and developer-friendly integrations." 
                },
                { 
                  q: "Can DeepSense help fintechs reduce onboarding abuse?", 
                  a: "Yes. The platform detects synthetic identities, emulator farms, referral abuse, and coordinated onboarding fraud." 
                },
                { 
                  q: "Is DeepSense suitable for regulated fintech environments?", 
                  a: "Yes. DeepSense supports AML monitoring, governance workflows, audit readiness, and enterprise compliance operations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Scale Fintech Growth With Real-Time Risk Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Accelerate fintech growth and stop <br />
                <span className="text-white/40 font-bold">financial crime vulnerabilities at scale.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Secure onboarding, protect instant payments, reduce fraud exposure, and strengthen compliance operations using enterprise-grade fintech fraud and AML intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/fintech#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Fintech Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
