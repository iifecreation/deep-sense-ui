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

export default function TransactionMonitoringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("bank");
  
  // Interactive console parameters
  const [paymentCorridor, setPaymentCorridor] = useState<string>("domestic");
  const [sanctionsScreening, setSanctionsScreening] = useState<boolean>(true);
  const [complianceMode, setComplianceMode] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic transaction metrics
  const calculateTransactionMetrics = () => {
    let trustScore = 98;
    let amlExposure = "LOW";
    let explainText = "Legitimate settlement patterns validated across correspondent nodes.";
    let alertColor = "text-emerald-400";
    
    if (paymentCorridor === "international") {
      trustScore = 11;
      amlExposure = "CRITICAL SANCTIONS OVERLAP DETECTED";
      explainText = "Cross-border routing traced to high-risk jurisdiction corridors. Flagged structurings indicate layering bypass thresholds.";
      alertColor = "text-red-400 animate-pulse";
    }
    if (sanctionsScreening) {
      trustScore = Math.max(trustScore - 4, 3);
    }
    if (complianceMode) {
      trustScore = Math.max(trustScore - 12, 1);
    }
    
    return { trustScore, amlExposure, explainText, alertColor };
  };

  const { trustScore, amlExposure, explainText, alertColor } = calculateTransactionMetrics();

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
                REAL-TIME TRANSACTION & AML INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Monitor Transactions, Detect Financial <br />
                <span className="text-zinc-400">Crime, and Stop Fraud in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Transaction Monitoring continuously analyzes payment activity, transfers, wallet movement, settlement behavior, and transaction relationships to identify suspicious activity, strengthen fraud prevention, and automate financial intelligence operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Transaction Monitoring Demo
                </Link>
                <Link href="/platform/transaction-monitoring#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Financial Intelligence
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, payment processors, digital wallets, telecoms, gaming ecosystems, marketplaces, and enterprise financial operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Real-Time Financial Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Real-Time Financial Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">TRANSACTION ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live financial monitoring environment visualizing suspicious transactions, AML risk indicators, transaction chains, velocity anomalies, laundering patterns, payment ecosystem relationships, sanctions exposure, and transaction trust scoring.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Monitoring Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Transaction Surveillance",
                        "AML Monitoring",
                        "Payment Analytics",
                        "Transaction Tracing",
                        "Wallet Intelligence",
                        "Behavioral Correlation",
                        "Merchant Monitoring",
                        "Sanctions Screening",
                        "AI Financial Insights",
                        "Fraud Escalations"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.4</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Transaction Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE TRANSACTION STREAM</span>
                        <span>SURVEILLANCE ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Payment Corridor</span>
                          <select 
                            value={paymentCorridor} 
                            onChange={(e) => setPaymentCorridor(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="domestic">Domestic transfer check</option>
                            <option value="international">High-risk international route</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Sanctions Screening</span>
                          <input 
                            type="checkbox" 
                            checked={sanctionsScreening} 
                            onChange={(e) => setSanctionsScreening(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Compliance mode</span>
                          <input 
                            type="checkbox" 
                            checked={complianceMode} 
                            onChange={(e) => setComplianceMode(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Transaction Trust</span>
                          <span className={`text-xl font-bold mt-1 block ${trustScore < 40 ? "text-red-400" : "text-emerald-400"}`}>
                            {trustScore}/100
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">AML Exposure level</span>
                          <span className={`text-xs font-bold mt-1 block leading-tight truncate ${alertColor}`}>{amlExposure}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom timeline console */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:43:50] • payment initiation: domestic ledger deposit validated successfully</div>
                        <div>[18:44:05] • transaction routing: node relationships calculated over deep graph layers</div>
                        <div>[18:44:20] • settlement activity: escrow unlocked under automated GRC protocols</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Explanations</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Suspicious Activity Indicators</span>
                          <span className="mt-1 block text-white text-[11px] leading-relaxed">
                            {explainText}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Linked Entity Intelligence</span>
                          <p className="mt-1 leading-relaxed">
                            Sanction lists screening parsed successfully. Mapped 2 layered nodes in correspondent channels.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active sanctions screens live</span>
                      <span>• cross border velocity aligned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Real-Time Surveillance</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time Intelligence Across Every Financial Transaction
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Transaction Monitoring continuously evaluates: payment activity, wallet transfers, settlement flows, merchant transactions, cross-border movement, behavioral consistency, transaction relationships, and operational anomalies. The platform enables organizations to: detect suspicious activity earlier, identify laundering typologies, strengthen AML operations, reduce fraud losses, improve payment trust, automate financial investigations, and centralize transaction intelligence. Unlike static rule systems, DeepSense combines: AI-driven anomaly detection, graph intelligence, behavioral analytics, device intelligence, transaction tracing, and adaptive trust scoring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "detect suspicious activity earlier", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "identify laundering typologies", desc: "Verify portal checkouts without introducing user friction." },
                { title: "strengthen AML operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "reduce fraud losses", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "improve payment trust", desc: "Support digital GRC with active security control overlays." },
                { title: "automate financial investigations", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Financial Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Transaction Surveillance", desc: "Monitor payments, transfers, withdrawals, deposits, settlements, wallet activity, merchant transactions, and cross-border flows." },
                { title: "AML & Financial Crime Detection", desc: "Identify laundering typologies, mule activity, suspicious transaction chains, sanctions exposure, layering behavior, and structuring patterns." },
                { title: "Transaction Trust Scoring", desc: "Generate payment legitimacy ratings, transaction trust scores, AML exposure indicators, operational risk analytics, and merchant trust classifications." },
                { title: "Behavioral Transaction Analytics", desc: "Analyze transaction consistency, spending behavior, transfer anomalies, wallet interaction patterns, and operational deviations." },
                { title: "Transaction Graph Intelligence", desc: "Visualize transaction chains, linked wallets, merchant ecosystems, laundering networks, and suspicious entity relationships." },
                { title: "Velocity & Pattern Monitoring", desc: "Detect rapid transaction spikes, abnormal payment behavior, transaction bursts, suspicious routing activity, and coordinated fraud patterns." },
                { title: "Cross-Border Risk Intelligence", desc: "Monitor geographic anomalies, sanctions exposure, jurisdiction risk, international payment flows, and high-risk corridors." },
                { title: "AI Financial Intelligence", desc: "Use AI to summarize suspicious activity, prioritize high-risk alerts, explain transaction anomalies, identify emerging fraud campaigns, and accelerate investigations." },
                { title: "Automated Escalation Workflows", desc: "Automate fraud escalations, AML reviews, payment holds, analyst routing, suspicious activity reporting, and governance workflows." },
                { title: "Executive & Compliance Reporting", desc: "Generate AML reports, fraud trend analysis, suspicious activity summaries, operational dashboards, and governance intelligence." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
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

        {/* ================= SECTION 4: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Suspicious Financial Activity
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests payment activity, transfers, wallet telemetry, settlement events, authentication signals, merchant activity, and transaction metadata." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using graph intelligence, behavioral analytics, device trust, AML typologies, sanctions intelligence, and operational context." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates transaction legitimacy, laundering indicators, behavioral anomalies, suspicious velocity, linked ecosystem exposure, and operational risk." },
                { title: "Step 4 — Scoring", desc: "The system generates transaction trust scores, aml exposure ratings, suspicious activity alerts, risk prioritization, and investigation summaries." },
                { title: "Step 5 — Action", desc: "High-risk financial activity triggers transaction holds, AML escalation, analyst investigations, governance workflows, and suspicious activity reporting." }
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

        {/* ================= SECTION 5: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Enterprise Financial Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-5xl">
              {[
                { id: "bank", label: "Banks & Financial Institutions" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "processor", label: "Payment Processors" },
                { id: "betting", label: "Gaming & Betting" },
                { id: "telecom", label: "Telecom & Digital Wallets" }
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
              {activeTab === "bank" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect suspicious transfers, laundering activity, mule accounts, and payment fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet abuse, onboarding fraud, suspicious payments, and transaction anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure merchant ecosystems, settlements, dispute activity, and cross-border payments.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify laundering patterns, bonus abuse transfers, suspicious wallet activity, and transaction manipulation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Analyze airtime fraud, wallet laundering, mobile money abuse, and suspicious transfers.</h4>
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
              Enterprise-Grade Financial Governance and Compliance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Explainable Financial Decisions", desc: "Transparent transaction reasoning and AML scoring." },
                { title: "Immutable Audit Logging", desc: "Tamper-resistant financial investigation history." },
                { title: "Multi-Tenant Financial Isolation", desc: "Secure enterprise transaction segregation." },
                { title: "Role-Based Financial Access", desc: "Granular transaction intelligence permissions." },
                { title: "Governance Workflow Integration", desc: "Integrated AML and compliance escalation." },
                { title: "Flexible Deployment Models", desc: "SaaS, hybrid, private cloud, on-premise." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">TRANSACTION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Transaction Monitoring?", 
                  a: "DeepSense Transaction Monitoring is a real-time financial intelligence platform that analyzes payment activity, transaction flows, wallet movement, and behavioral telemetry to detect fraud and suspicious financial activity." 
                },
                { 
                  q: "Can DeepSense detect AML typologies and laundering patterns?", 
                  a: "Yes. The platform continuously identifies suspicious transaction chains, layering activity, mule ecosystems, structuring behavior, and laundering typologies." 
                },
                { 
                  q: "Does DeepSense support real-time transaction risk scoring?", 
                  a: "Yes. DeepSense generates adaptive transaction trust scores and AML exposure indicators in real time." 
                },
                { 
                  q: "Can DeepSense trace transaction relationships and payment chains?", 
                  a: "Yes. The platform uses graph intelligence to visualize linked wallets, payment flows, transaction ecosystems, and suspicious entity relationships." 
                },
                { 
                  q: "Does DeepSense support cross-border risk monitoring?", 
                  a: "Yes. DeepSense monitors international payment flows, sanctions exposure, geographic anomalies, and high-risk jurisdictions." 
                },
                { 
                  q: "Is DeepSense Transaction Monitoring suitable for enterprise-scale deployment?", 
                  a: "Yes. DeepSense is designed for enterprise-scale banks, fintechs, payment processors, digital wallets, and financial intelligence operations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Financial Intelligence With Real-Time Transaction Monitoring</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect suspicious activity, strengthen AML operations, trace financial relationships, and centralize enterprise transaction intelligence using DeepSense Transaction Monitoring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Transaction Monitoring Demo
              </Link>
              <Link href="/platform/transaction-monitoring#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Financial Intelligence
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
