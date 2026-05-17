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

export default function PaymentProcessorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("psp");
  
  // Interactive processor risk sandbox parameters
  const [merchantState, setMerchantState] = useState<string>("authentic");
  const [launderingMonitor, setLaunderingMonitor] = useState<boolean>(true);
  const [regulatoryScope, setRegulatoryScope] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic processor risk parameters
  const calculateProcessorRisk = () => {
    let score = 98; // base legitimacy score
    
    if (merchantState === "synthetic") score -= 52;
    if (!launderingMonitor) score -= 22;
    if (regulatoryScope) score -= 15;
    
    score = Math.max(score, 9);
    
    let status = "AUTHORIZED COMPLIANT ECOSYSTEM";
    let color = "text-emerald-500";
    if (score <= 35) {
      status = "CRITICAL LAUNDERING SHELL DETECTED";
      color = "text-red-500";
    } else if (score <= 65) {
      status = "UNMAPPED MULTI-MERCHANT ROUTING VECTOR";
      color = "text-amber-500";
    } else if (score <= 85) {
      status = "UNRESOLVED AML COMPLIANCE AUDIT EXCEPTION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateProcessorRisk();

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
                PAYMENT PROCESSOR FRAUD & RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Payment Ecosystems With Real-Time <br />
                <span className="text-zinc-400">Fraud and Merchant Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps payment processors detect fraud, monitor merchant ecosystems, reduce chargebacks, identify transaction laundering, and strengthen operational trust using AI-powered analytics and real-time payment intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/payment-processors#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Payment Risk Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for payment processors, acquirers, PSPs, gateways, fintechs, embedded finance platforms, and enterprise payment ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Payment Network Risk Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Payment Network Risk Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ECOSYSTEM PROTECTION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live payment processor operations center visualizing merchant trust scoring, payment fraud monitoring, transaction laundering detection, chargeback analytics, AML exposure indicators, authorization anomaly detection, processor ecosystem heatmaps, and merchant relationship intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Processor Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Merchant status</span>
                        <select 
                          value={merchantState} 
                          onChange={(e) => setMerchantState(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Trusted onboarded merchant</option>
                          <option value="synthetic">High risk synthetic shell store</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Real-time graph mapping</span>
                        <input 
                          type="checkbox" 
                          checked={launderingMonitor} 
                          onChange={(e) => setLaunderingMonitor(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">International screening</span>
                        <input 
                          type="checkbox" 
                          checked={regulatoryScope} 
                          onChange={(e) => setRegulatoryScope(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PROCESSOR TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Merchant Relationship Graph</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {merchantState === "synthetic" ? "Active Laundering Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Processor Exposure Heatmap</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {regulatoryScope ? "Active Screening Alert" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">MERCHANT LEGITIMACY SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Transaction laundering filters active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Processor Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Payment Processors Face Expanding Fraud and Regulatory Exposure
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern payment processors manage: merchant onboarding, transaction authorization, cross-border payments, settlement workflows, dispute operations, AML monitoring, chargeback management, and payment ecosystem governance. Fraudsters increasingly exploit payment ecosystems using: transaction laundering, synthetic merchants, card-not-present fraud, chargeback abuse, mule merchant networks, account takeover, refund manipulation, collusive payment ecosystems, and processor abuse. Traditional payment risk systems often struggle with: real-time merchant trust visibility, ecosystem-wide fraud intelligence, transaction graph correlation, AML monitoring scalability, cross-merchant abuse detection, and processor governance automation. Without connected processor intelligence, organizations face: rising fraud losses, network penalties, AML exposure, regulatory scrutiny, merchant abuse, operational inefficiencies, reputational damage, and customer trust erosion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Transaction Laundering", desc: "Fraudsters use seemingly legitimate merchants to process illegal transactions.", icon: <Shield /> },
                { title: "High-Risk Merchant Ecosystems", desc: "Payment processors struggle to continuously evaluate merchant legitimacy.", icon: <Users /> },
                { title: "Card-Not-Present Fraud", desc: "Digital payment ecosystems remain vulnerable to remote payment abuse.", icon: <Sliders /> },
                { title: "Chargeback Escalation", desc: "Dispute ratios create processor and merchant ecosystem exposure.", icon: <Clock /> },
                { title: "Mule Merchant Networks", desc: "Connected merchant ecosystems hide coordinated financial crime activity.", icon: <Building /> },
                { title: "AML & Compliance Pressure", desc: "Processors face increasing regulatory expectations for real-time monitoring.", icon: <Sliders /> }
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

            {/* Payment Processor Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">PAYMENT PROCESSOR LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Merchant Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Authorization Scoring", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. AML Monitoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Settlement Analysis", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Dispute Workflows", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance Reporting", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Payment Processor and Merchant Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines transaction analytics, merchant trust scoring, behavioral intelligence, graph analytics, AML monitoring, device intelligence, and governance automation into a unified payment processor intelligence platform. The platform continuously evaluates: merchant activity, transaction behavior, authorization patterns, settlement workflows, chargeback exposure, AML indicators, graph relationships, operational anomalies, and ecosystem-wide fraud signals. DeepSense enables payment processors to: reduce fraud losses, strengthen merchant governance, improve transaction trust, detect laundering networks, automate payment risk monitoring, reduce operational exposure, and strengthen ecosystem resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce fraud losses", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Strengthen merchant governance", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Improve transaction trust", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Detect laundering networks", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Automate payment risk monitoring", desc: "Support digital GRC with active security control overlays." },
                { title: "Reduce operational exposure", desc: "Block duplicate submissions before cash-outs settle." }
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
              Payment Ecosystem Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Merchant Risk Scoring", desc: "Generate merchant trust scores, transaction legitimacy ratings, chargeback exposure indicators, AML risk analytics, and processor exposure metrics." },
                { title: "Transaction Fraud Detection", desc: "Detect suspicious authorizations, velocity anomalies, card testing activity, transaction laundering, abnormal payment flows, and processor abuse." },
                { title: "Chargeback & Dispute Monitoring", desc: "Monitor dispute ratios, refund anomalies, representment effectiveness, friendly fraud indicators, and merchant abuse patterns." },
                { title: "AML & Financial Crime Monitoring", desc: "Identify suspicious transaction chains, mule merchant ecosystems, sanctions exposure, high-risk settlement behavior, and laundering typologies." },
                { title: "Behavioral Analytics", desc: "Analyze merchant behavior, transaction consistency, operational workflows, settlement patterns, and ecosystem trust indicators." },
                { title: "Device & Session Intelligence", desc: "Detect suspicious merchant environments, shared infrastructure, spoofed devices, account takeover indicators, and operational anomalies." },
                { title: "Graph Intelligence", desc: "Visualize merchant ecosystems, connected accounts, laundering networks, shared infrastructure, and collusive transaction relationships." },
                { title: "Authorization & Settlement Monitoring", desc: "Track approval quality, settlement inconsistencies, suspicious routing behavior, payment orchestration anomalies, and operational exposure." },
                { title: "Case Management & Investigations", desc: "Coordinate merchant investigations, AML escalations, dispute reviews, evidence workflows, and remediation tracking." },
                { title: "Governance & Processor Oversight", desc: "Support payment governance, processor transparency, audit readiness, operational oversight, and regulatory reporting." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Protects Payment Processor Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests payment authorizations, merchant onboarding, settlement activity, refund telemetry, dispute workflows, device signals, and transaction metadata." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, AML indicators, device trust analytics, payment telemetry, and ecosystem risk scoring." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates merchant legitimacy, transaction trust, settlement exposure, laundering indicators, dispute anomalies, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates merchant risk scores, fraud alerts, AML escalations, settlement restrictions, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers merchant investigations, processor reviews, AML escalation workflows, governance reporting, and regulatory remediation." }
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
              Built for Modern Payment Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "psp", label: "Payment Service Providers" },
                { id: "acquirer", label: "Acquiring Banks" },
                { id: "embedded", label: "Embedded Finance Platforms" },
                { id: "crossborder", label: "Cross-Border Networks" },
                { id: "digital", label: "Digital Commerce Platforms" }
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
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect merchant onboarding, payment authorization, dispute operations, and settlement integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "acquirer" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor merchant ecosystems, processor exposure, transaction laundering, and AML obligations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "embedded" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure integrated payments, merchant trust, transaction legitimacy, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "crossborder" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect laundering activity, suspicious settlements, mule ecosystems, and high-risk routing behavior.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "digital" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent payment abuse, merchant fraud, refund manipulation, and transaction laundering.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Payment Ecosystem Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Processor Risk Operations Dashboard", desc: "Fraud alerts, merchant risk visibility, settlement anomalies, and dispute analytics." },
                { title: "Merchant Trust Intelligence", desc: "Merchant trust scoring, onboarding analytics, behavioral indicators, and ecosystem exposure visibility." },
                { title: "AML & Laundering Dashboard", desc: "Suspicious transaction chains, sanctions monitoring, high-risk merchant visibility, and laundering indicators." },
                { title: "Chargeback & Refund Analytics", desc: "Dispute ratios, refund abuse monitoring, representment analytics, and operational exposure indicators." },
                { title: "Investigation Workspace", desc: "Merchant timelines, graph investigations, evidence management, and GRC compliance reporting." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">SaaS Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Grade Security for Payment Infrastructure Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single payment ecosystem.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Payment Decisions", desc: "Every risk decision includes reason codes, behavioral evidence, transaction indicators, graph relationships, and AML context." },
                { title: "Audit Logging", desc: "Track merchant investigations, AML reviews, dispute escalations, and governance actions." },
                { title: "Multi-Tenant Payment Security", desc: "Secure operational separation across processor ecosystems, merchant environments, and verification workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, AML obligations, sanctions compliance, and payment governance." },
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

        {/* ================= SECTION 9: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">PAYMENT INFRASTRUCTURE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect transaction laundering in real time?", 
                  a: "Yes. DeepSense continuously evaluates merchant behavior, settlement activity, graph relationships, and transaction anomalies to identify laundering indicators." 
                },
                { 
                  q: "Does DeepSense support merchant trust scoring?", 
                  a: "Yes. The platform generates dynamic merchant legitimacy scores using behavioral analytics, transaction telemetry, dispute exposure, and operational trust indicators." 
                },
                { 
                  q: "Can DeepSense reduce processor chargeback exposure?", 
                  a: "Yes. DeepSense identifies dispute-prone transactions, refund abuse, and friendly fraud indicators while automating payment risk monitoring." 
                },
                { 
                  q: "Does DeepSense support AML monitoring for payment ecosystems?", 
                  a: "Yes. The platform continuously monitors sanctions exposure, suspicious transaction chains, laundering typologies, and high-risk merchant activity." 
                },
                { 
                  q: "Can DeepSense identify connected fraud ecosystems?", 
                  a: "Yes. DeepSense uses graph intelligence to detect connected merchants, mule ecosystems, shared infrastructure, and collusive payment relationships." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale payment processors?", 
                  a: "Yes. DeepSense is designed for high-scale payment processors, acquiring banks, fintech platforms, and global payment infrastructures." 
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

        {/* ================= SECTION 10: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Payment Ecosystem Trust With Real-Time Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure processor pipelines and prevent <br />
                <span className="text-white/40 font-bold">transaction laundering dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Reduce fraud losses, monitor merchant ecosystems, automate payment risk governance, and strengthen processor resilience using enterprise-grade payment intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/payment-processors#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Payment Risk Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
