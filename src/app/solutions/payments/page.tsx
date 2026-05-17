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

export default function PaymentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("processors");
  
  // Interactive Payments simulator states
  const [merchantCategory, setMerchantCategory] = useState<string>("ecommerce");
  const [transactionVal, setTransactionVal] = useState<string>("5000");
  const [muleRingPattern, setMuleRingPattern] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic payments fraud metrics
  const calculatePaymentsRisk = () => {
    let score = 15; // base risk score
    
    if (merchantCategory === "highrisk") score += 20;
    if (transactionVal === "5000") score += 15;
    if (muleRingPattern) score += 48;
    
    score = Math.min(score, 99);
    
    let status = "SECURE AUTH ROUTING";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED MULE RING DETECTED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "APP SCAM DETECTED";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE DRIFT WARNING";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculatePaymentsRisk();

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
                <Wallet className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME PAYMENT PAYMENT FRAUD & TRANSACTION RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Modern Payment Ecosystems <br />
                <span className="text-zinc-400">From Fraud and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps payment processors, PSPs, gateways, acquirers, and digital payment platforms detect fraud, secure transactions, reduce chargebacks, monitor AML exposure, and stop payment abuse using real-time intelligence and AI-driven risk decisioning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/payments#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Payment Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for payment processors, gateways, acquirers, wallet providers, remittance platforms, and instant payment ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Payment Intelligence Operations Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Payment Auth Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">PSP RUNTIME SHIELD ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Payment Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Merchant Segment</span>
                        <select 
                          value={merchantCategory} 
                          onChange={(e) => setMerchantCategory(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="ecommerce">Standard E-commerce</option>
                          <option value="highrisk">High Risk Category</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Transaction Value</span>
                        <select 
                          value={transactionVal} 
                          onChange={(e) => setTransactionVal(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="50">$50 Micro payment</option>
                          <option value="5000">$5,000 Wire transfer</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Mule / Ring Cluster detected</span>
                        <input 
                          type="checkbox" 
                          checked={muleRingPattern} 
                          onChange={(e) => setMuleRingPattern(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PAYMENT CORE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Authorization Risk Engine</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {transactionVal === "5000" ? "High Value Audit" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Merchant Risk Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {merchantCategory === "highrisk" ? "PEP Screen Active" : "Merchant Standard"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">PAYMENT FRAUD SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Payment Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Payment Fraud Evolves at the Speed of Transactions
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern payment ecosystems process instant transfers, RTP transactions, ACH payments, wallet transfers, card payments, cross-border transactions, merchant settlements, and embedded finance activity. Fraudsters increasingly exploit payment systems using APP scams, account takeover, mule accounts, stolen credentials, synthetic identities, merchant abuse, refund fraud, and transaction laundering. Traditional payment fraud systems often struggle with real-time transaction velocity, fragmented risk signals, cross-channel visibility, false positives, operational scalability, and explainable decisioning. Without connected payment intelligence, organizations face increased fraud losses, chargeback escalation, customer trust erosion, regulatory pressure, operational inefficiencies, and merchant risk exposure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Instant Payment Fraud", desc: "Real-time payment rails leave little time for manual intervention.", icon: <Shield /> },
                { title: "APP Scams", desc: "Social engineering attacks increasingly target payment ecosystems.", icon: <Users /> },
                { title: "Merchant Risk Exposure", desc: "Fraudulent merchants and transaction laundering create operational risk.", icon: <Sliders /> },
                { title: "Cross-Border Complexity", desc: "International payments increase sanctions and AML exposure.", icon: <Clock /> },
                { title: "Chargeback Growth", desc: "Dispute volumes and friendly fraud continue to increase.", icon: <Building /> },
                { title: "Fragmented Fraud Signals", desc: "Risk data is often spread across multiple disconnected systems.", icon: <Sliders /> }
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

            {/* Payment Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">PAYMENT RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Authorization", desc: "PSP receives credit card transaction metadata from terminal." },
                  { title: "2. Monitoring", desc: "Device attributes mapped instantly against stable merchant profiles." },
                  { title: "3. Fraud Score", desc: "DeepSense computes real-time score to block mule payouts." },
                  { title: "4. Interventions", desc: "Suspicious wires held automatically until GRC confirmation." },
                  { title: "5. Investigation", desc: "High-risk alerts routing directly to payments resolution hubs." },
                  { title: "6. Audit Log", desc: "Immutable compliance records generated to satisfy PEP standards." }
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
              Unified Payment Fraud & Transaction Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines payment fraud detection, behavioral analytics, merchant intelligence, AML monitoring, graph analysis, device intelligence, and governance automation into a unified payment risk platform. The platform continuously evaluates transaction behavior, merchant activity, customer trust, device intelligence, payment anomalies, AML indicators, sanctions exposure, graph relationships, and operational risk telemetry. DeepSense enables payment organizations to stop fraud in real time, reduce chargebacks, improve authorization quality, strengthen merchant oversight, reduce false positives, accelerate investigations, and improve customer trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop fraud in real time", desc: "Block wire and APP scams dynamically under millisecond latency." },
                { title: "Reduce chargebacks", desc: "Detect and flag friendly fraud before settlement occurs." },
                { title: "Improve authorization quality", desc: "Clean up transactions using behavioral telemetry inputs." },
                { title: "Strengthen merchant oversight", desc: "Monitor merchant onboarding and settlement profiles continuously." },
                { title: "Reduce false positives", desc: "Filter legitimate spend metrics from coordinated mule patterns." },
                { title: "Accelerate investigations", desc: "Supply fraud analysts with linked graph visualizations instantly." }
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
              Payment Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Transaction Fraud Detection", desc: "Detect payment fraud, transaction anomalies, APP scams, mule activity, suspicious transfers, and refund abuse." },
                { title: "Authorization Risk Decisioning", desc: "Analyze authorization trust, transaction intent, behavioral consistency, payment velocity, risk exposure, and customer trust indicators." },
                { title: "Merchant Risk Monitoring", desc: "Monitor merchant onboarding, settlement behavior, transaction laundering, refund anomalies, operational abuse, and high-risk merchant activity." },
                { title: "Chargeback & Dispute Intelligence", desc: "Identify dispute trends, friendly fraud, abnormal refund behavior, merchant dispute exposure, and operational weaknesses." },
                { title: "AML & Sanctions Monitoring", desc: "Continuously evaluate suspicious transactions, sanctions exposure, cross-border payment risk, AML typologies, and high-risk counterparties." },
                { title: "Behavioral Analytics", desc: "Analyze payment behavior, transaction intent, session anomalies, device trust, and account behavior." },
                { title: "Device & Session Intelligence", desc: "Detect emulator activity, spoofed devices, shared infrastructure, account takeover indicators, and suspicious payment environments." },
                { title: "Graph Intelligence", desc: "Visualize linked payments, connected merchants, mule networks, shared accounts, fraud ecosystems, and payment relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, dispute workflows, AML escalations, merchant reviews, and evidence management." },
                { title: "Governance & Operational Monitoring", desc: "Support audit readiness, controls monitoring, operational governance, compliance visibility, and remediation tracking." }
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
              How DeepSense Protects Payment Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transactions, authorizations, wallet activity, merchant telemetry, dispute events, customer sessions, and operational signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using device intelligence, behavioral analytics, graph relationships, sanctions intelligence, fraud telemetry, and AML indicators." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates transaction legitimacy, merchant risk, payment intent, customer exposure, fraud relationships, and operational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, authorization decisions, AML escalations, merchant interventions, and operational alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, fraud reviews, dispute workflows, AML escalations, and governance reporting." }
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
                { id: "processors", label: "Payment Processors" },
                { id: "wallets", label: "Digital Wallets" },
                { id: "gateways", label: "PSPs & Gateways" },
                { id: "crossborder", label: "Cross-Border Payments" },
                { id: "embedded", label: "Embedded Platforms" }
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
              {activeTab === "processors" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect authorization flows, merchant activity, payment routing, and settlement integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "wallets" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor peer-to-peer payments, wallet fraud, account takeover, and suspicious transfers.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "gateways" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect merchant abuse, transaction laundering, payment anomalies, and onboarding fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "crossborder" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage sanctions exposure, international transfer risk, AML compliance, and suspicious counterparties.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "embedded" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure API-based transactions, partner payment flows, embedded checkout experiences, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track retail checkout endpoints. Secure approval workflows and analyze behavior indicators dynamically.
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
              Connected Across the Payment Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links transaction fraud deciders with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Decisioning", desc: "Real-time payment scoring and intervention orchestration." },
                { title: "AML Monitoring", desc: "Continuous suspicious transaction and sanctions monitoring." },
                { title: "Merchant Risk Intelligence", desc: "Merchant onboarding, settlement, and operational risk analytics." },
                { title: "Device Fingerprinting", desc: "Transaction trust analysis using device and session intelligence." },
                { title: "Graph Intelligence", desc: "Connected payment ecosystem and mule network visibility." },
                { title: "UEBA & Behavioral Analytics", desc: "Behavioral anomaly detection and payment intent analysis." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and audit readiness monitoring." }
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
              Real-Time Payment Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Payment Fraud Operations Dashboard", desc: "Transaction monitoring, authorization analytics, fraud heatmaps, and suspicious transfer visibility." },
                { title: "Merchant Risk Intelligence", desc: "Merchant trust scoring, onboarding analytics, settlement risk monitoring, and operational anomaly detection." },
                { title: "Chargeback & Dispute Dashboard", desc: "Dispute trends, refund analytics, friendly fraud indicators, and merchant exposure visibility." },
                { title: "AML & Compliance Analytics", desc: "Sanctions exposure, suspicious payment monitoring, cross-border transaction intelligence, and governance visibility." },
                { title: "Investigation Workspace", desc: "Payment timelines, linked entities, graph investigations, dispute evidence, and operational intelligence." }
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
              Designed for High-Volume Payment Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous payment fraud models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Payment Processors", "PSPs", "Payment Gateways", "Acquirers", "Digital Wallets", "Remittance Platforms",
                "Embedded Payments", "Cross-Border Payments", "Merchant Acquiring", "Card Processors", "Open Banking Platforms", "Real-Time Payment Networks"
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
                Enterprise-Grade Security for Modern Payment Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single authorization scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Payment Decisions", desc: "Every fraud and authorization decision includes reason codes, behavioral evidence, and device intelligence." },
                { title: "Audit Logging", desc: "Track payment decisions, dispute workflows, merchant reviews, and AML escalations." },
                { title: "Multi-Tenant Payment Security", desc: "Secure operational separation across payment organizations, merchant environments, and customer operations." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, AML regulations, sanctions, and GRC frameworks." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">PAYMENT FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense support real-time payment fraud detection?", 
                  a: "Yes. DeepSense provides millisecond-level transaction scoring and fraud decisioning for high-volume payment environments." 
                },
                { 
                  q: "Does DeepSense support instant payment rails?", 
                  a: "Yes. The platform supports RTP, ACH, wallet payments, peer-to-peer transfers, and embedded payment ecosystems." 
                },
                { 
                  q: "Can DeepSense reduce chargebacks and disputes?", 
                  a: "Yes. DeepSense detects dispute abuse, friendly fraud, refund anomalies, and suspicious merchant behavior." 
                },
                { 
                  q: "Does DeepSense support merchant risk monitoring?", 
                  a: "Yes. The platform continuously evaluates merchant onboarding, settlement behavior, and transaction laundering indicators." 
                },
                { 
                  q: "Can DeepSense support cross-border payment monitoring?", 
                  a: "Yes. DeepSense supports sanctions screening, AML monitoring, and international payment risk intelligence." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise payment environments?", 
                  a: "Yes. DeepSense is designed for large-scale payment operations, fraud governance, AML compliance, and operational resilience." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Secure Payment Ecosystems With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure payment ecosystems and stop <br />
                <span className="text-white/40 font-bold">financial crime vulnerabilities at scale.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect transactions, reduce chargebacks, strengthen merchant oversight, and improve payment trust using enterprise-grade payment fraud and AML intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/payments#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Payment Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
