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

export default function TelecomMobileMoneyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("mobilemoney");
  
  // Interactive Telecom parameters
  const [simSwapStatus, setSimSwapStatus] = useState<string>("normal");
  const [agentVerification, setAgentVerification] = useState<boolean>(true);
  const [walletVelocity, setWalletVelocity] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic telecom risk parameters
  const calculateTelecomRisk = () => {
    let score = 15; // base risk score
    
    if (simSwapStatus === "swap") score += 40;
    if (walletVelocity) score += 35;
    if (!agentVerification) score += 18;
    
    score = Math.min(score, 99);
    
    let status = "SECURE WALLET LEDGER";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "SIM SWAP ATTACK DETECTED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "MULE WALLET ACTIVITY FLAGGED";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "AGENT PAYOUT OUTLIER";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateTelecomRisk();

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
                MOBILE MONEY & TELECOM FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Secure Mobile Money and Telecom Ecosystems <br />
                <span className="text-zinc-400">From Fraud and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps telecom operators, wallet providers, and mobile money platforms detect fraud, secure transactions, monitor AML exposure, prevent SIM abuse, and strengthen digital trust using real-time intelligence and AI-driven risk analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/telecom-mobile-money#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Telecom Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for telecom operators, mobile money providers, digital wallet ecosystems, super apps, remittance platforms, and carrier-grade payment infrastructures.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Telecom Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">SIM Trust Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CARRIER GUARD ENCLAVE ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Telecom Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">SIM Swap Activity</span>
                        <select 
                          value={simSwapStatus} 
                          onChange={(e) => setSimSwapStatus(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Standard Identity verification</option>
                          <option value="swap">Sudden SIM swap</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Agent KYC Cleared</span>
                        <input 
                          type="checkbox" 
                          checked={agentVerification} 
                          onChange={(e) => setAgentVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Wallet Velocity spike</span>
                        <input 
                          type="checkbox" 
                          checked={walletVelocity} 
                          onChange={(e) => setWalletVelocity(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE CARRIER CORE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">SIM Swap Detection</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {simSwapStatus === "swap" ? "Attack Vector Active" : "Stable identity"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Agent Risk Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {agentVerification ? "Continuous check live" : "KYC Outdated Warning"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">MOBILE WALLET RISK SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Telecom Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Telecom and Mobile Money Ecosystems Face Expanding Fraud Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern telecom and mobile money ecosystems process wallet transfers, airtime transactions, agent cash-in/cash-out operations, P2P payments, merchant payments, remittances, onboarding workflows, and digital identity activity. Fraudsters increasingly exploit telecom ecosystems using SIM swap attacks, account takeover, mule wallets, fake agents, onboarding fraud, social engineering, synthetic identities, wallet farming, and collusive fraud networks. Traditional telecom fraud systems often struggle with real-time payment velocity, fragmented operational visibility, mobile identity abuse, agent ecosystem monitoring, AML governance, and scalable fraud investigations. Without connected telecom intelligence, organizations face wallet fraud losses, customer trust erosion, AML exposure, operational abuse, regulatory pressure, agent fraud, and mobile identity compromise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "SIM Swap Fraud", desc: "Attackers hijack mobile identities to compromise wallets and accounts.", icon: <Shield /> },
                { title: "Mobile Wallet Abuse", desc: "Fraudsters exploit P2P transfers, cash-out operations, and wallet ecosystems.", icon: <Users /> },
                { title: "Agent Network Fraud", desc: "Rogue agents manipulate onboarding, payouts, and customer workflows.", icon: <Sliders /> },
                { title: "Mule Wallet Activity", desc: "Coordinated fraud rings move funds through linked wallet networks.", icon: <Clock /> },
                { title: "Onboarding Fraud", desc: "Synthetic identities and fake onboarding campaigns target telecom ecosystems.", icon: <Building /> },
                { title: "AML & Regulatory Pressure", desc: "Mobile money providers face growing financial crime and compliance obligations.", icon: <Sliders /> }
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

            {/* Telecom Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">TELECOM RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "User inputs digital signup details, triggering device KYC verifications." },
                  { title: "2. SIM Swap check", desc: "DeepSense scans active SIM details instantly for rapid takeover signs." },
                  { title: "3. Wallet Transfer", desc: "Active transaction configurations monitored for P2P farming patterns." },
                  { title: "4. Fraud Scoring", desc: "Score engines map transaction value and agent locations dynamically." },
                  { title: "5. AML Monitor", desc: "Continuous checks run asynchronously against PEP and global watchlists." },
                  { title: "6. Investigations", desc: "Rogue signals routed dynamically to collaborative resolution queues." }
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
              Unified Telecom Fraud, AML, and Wallet Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines telecom fraud detection, mobile wallet intelligence, behavioral analytics, SIM trust monitoring, AML screening, graph intelligence, and governance automation into a unified telecom risk platform. The platform continuously evaluates wallet activity, customer trust, SIM integrity, onboarding behavior, device intelligence, transaction anomalies, AML indicators, graph relationships, and operational risk telemetry. DeepSense enables telecom and wallet providers to stop fraud in real time, secure mobile identities, reduce wallet abuse, strengthen AML programs, improve customer trust, reduce operational losses, and scale secure financial inclusion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop fraud in real time", desc: "Block wire and wallet abuse dynamically under millisecond latency." },
                { title: "Secure mobile identities", desc: "Track SIM swap replacements dynamically to avoid rogue cash-outs." },
                { title: "Reduce wallet abuse", desc: "Spot P2P farming and automated bot transfers continuously." },
                { title: "Strengthen AML programs", desc: "PEP watchlists scanned continuously to secure digital inclusion." },
                { title: "Improve customer trust", desc: "Eliminate customer friction by replacing rules with behavioral telemetry." },
                { title: "Reduce operational losses", desc: "Flag rogue agents manipulating cash configurations automatically." }
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
              Telecom & Mobile Money Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Mobile Wallet Fraud Detection", desc: "Detect suspicious transfers, wallet farming, payout abuse, transaction anomalies, mule wallet activity, and merchant fraud." },
                { title: "SIM Swap Detection", desc: "Identify SIM replacement activity, suspicious SIM changes, identity takeover indicators, device inconsistencies, and account compromise attempts." },
                { title: "Account Takeover Prevention", desc: "Protect wallet accounts, customer sessions, login workflows, authentication systems, and mobile identity integrity." },
                { title: "Agent Risk Intelligence", desc: "Monitor onboarding abuse, cash-out anomalies, suspicious agent activity, transaction irregularities, and collusive behavior." },
                { title: "AML & Financial Crime Monitoring", desc: "Continuously evaluate suspicious transfers, sanctions exposure, high-risk wallets, transaction laundering, and AML typologies." },
                { title: "Behavioral Analytics", desc: "Analyze wallet behavior, transaction intent, session anomalies, mobile interaction patterns, and operational trust indicators." },
                { title: "Device & SIM Intelligence", desc: "Detect shared devices, spoofed environments, emulator farms, SIM-device inconsistencies, and suspicious infrastructure." },
                { title: "Graph Intelligence", desc: "Visualize linked wallets, connected agents, mule ecosystems, shared devices, transaction relationships, and fraud rings." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, AML escalations, agent reviews, onboarding investigations, and evidence management." },
                { title: "Governance & Operational Monitoring", desc: "Support telecom governance, audit readiness, operational controls, compliance monitoring, and remediation workflows." }
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
              How DeepSense Protects Telecom and Mobile Money Platforms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests wallet transactions, SIM activity, onboarding events, agent operations, login sessions, customer interactions, and operational telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using SIM intelligence, behavioral analytics, device trust, graph relationships, AML indicators, and fraud telemetry." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates wallet legitimacy, transaction risk, customer trust, SIM integrity, fraud relationships, and operational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, transaction interventions, AML escalations, agent alerts, and operational risk indicators." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers fraud investigations, onboarding reviews, AML workflows, operational escalations, and governance reporting." }
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
              Built for Modern Telecom and Wallet Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "mobilemoney", label: "Mobile Money Providers" },
                { id: "telecom", label: "Telecom Operators" },
                { id: "superapps", label: "Super Apps & Wallets" },
                { id: "agentnetworks", label: "Agent Banking Networks" },
                { id: "crossborder", label: "Cross-Border Wallet Platforms" }
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
              {activeTab === "mobilemoney" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect wallet transfers, P2P payments, customer onboarding, and cash-out operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure mobile wallets. Analyze transaction velocity and device trust indicators dynamically to block rogue cashouts.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor SIM swap attacks, customer trust, account compromise, and onboarding fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track SIM swap events. Secure approval workflows and analyze threshold indicators before identity changes are committed to carrier records.
                  </p>
                </div>
              )}
              {activeTab === "superapps" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect wallet farming, referral abuse, mule activity, and transaction anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard online banking interfaces. Block fake synthetic registrations automatically during KYC checks.
                  </p>
                </div>
              )}
              {activeTab === "agentnetworks" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure agent onboarding, cash operations, payout workflows, and operational integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate private agent accounts. Align relationship logs directly with GRC evidence matrices.
                  </p>
                </div>
              )}
              {activeTab === "crossborder" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage international transfers, AML exposure, sanctions monitoring, and fraud relationships.</h4>
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
              Connected Across the Telecom Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links wallet fraud deciders with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Decisioning", desc: "Real-time wallet scoring and transaction intervention orchestration." },
                { title: "Device Fingerprinting", desc: "SIM trust analysis and suspicious infrastructure detection." },
                { title: "Behavioral Biometrics", desc: "Continuous mobile behavior and session trust analysis." },
                { title: "AML Monitoring", desc: "Suspicious wallet activity and sanctions exposure detection." },
                { title: "Graph Intelligence", desc: "Connected wallet ecosystems and mule network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection across agents and operations." },
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
              Real-Time Telecom Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Telecom Fraud Operations Dashboard", desc: "Wallet fraud monitoring, SIM risk analytics, transaction visibility, and operational fraud alerts." },
                { title: "Mobile Wallet Intelligence", desc: "Wallet trust scoring, transfer monitoring, payout analytics, and suspicious activity trends." },
                { title: "Agent Risk Analytics", desc: "Onboarding quality, operational anomalies, collusive activity monitoring, and cash-out intelligence." },
                { title: "AML & Compliance Dashboard", desc: "Sanctions exposure, suspicious transfer monitoring, high-risk wallet analytics, and governance visibility." },
                { title: "Investigation Workspace", desc: "Linked wallets, graph investigations, transaction timelines, and operational intelligence." }
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
              Designed for Mobile Financial Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous telecom fraud models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Mobile Money Providers", "Telecom Operators", "Digital Wallet Platforms", "Super Apps", "Agent Banking Networks", "Remittance Platforms",
                "Airtime Platforms", "Embedded Telecom Finance", "Rural Banking Platforms", "Carrier Billing Platforms", "Fintech-Telecom Partnerships", "Cross-Border Wallet Networks"
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
                Enterprise-Grade Security for Telecom and Wallet Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single carrier transaction.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every fraud and transaction decision includes reason codes, behavioral evidence, and SIM trust indicators." },
                { title: "Audit Logging", desc: "Track onboarding reviews, transaction decisions, AML escalations, and agent investigations." },
                { title: "Multi-Tenant Telecom Security", desc: "Secure operational separation across telecom organizations, wallet ecosystems, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML, telecom governance, GRC, and financial compliance frameworks." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">TELECOM FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect SIM swap fraud in real time?", 
                  a: "Yes. DeepSense continuously monitors SIM events, device relationships, and identity trust indicators to detect SIM swap attacks." 
                },
                { 
                  q: "Does DeepSense support mobile wallet fraud monitoring?", 
                  a: "Yes. The platform supports P2P transfers, merchant payments, wallet ecosystems, and mobile transaction fraud detection." 
                },
                { 
                  q: "Can DeepSense detect mule wallet networks?", 
                  a: "Yes. DeepSense uses graph intelligence and behavioral analytics to identify connected wallet fraud ecosystems." 
                },
                { 
                  q: "Does DeepSense support telecom agent monitoring?", 
                  a: "Yes. The platform continuously evaluates onboarding quality, cash-out behavior, payout anomalies, and operational integrity." 
                },
                { 
                  q: "Can DeepSense support AML monitoring for mobile money?", 
                  a: "Yes. DeepSense supports suspicious activity monitoring, sanctions screening, and AML risk scoring for telecom financial ecosystems." 
                },
                { 
                  q: "Is DeepSense suitable for carrier-grade telecom environments?", 
                  a: "Yes. DeepSense is designed for high-scale telecom operations, mobile money ecosystems, and enterprise-grade fraud governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Secure Mobile Financial Ecosystems With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure carrier operations and stop <br />
                <span className="text-white/40 font-bold">mobile fraud schemes dynamically at scale.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect wallet ecosystems, detect SIM abuse, strengthen AML monitoring, and improve customer trust using enterprise-grade telecom fraud and mobile money intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/telecom-mobile-money#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Telecom Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
