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

export default function ReduceChargebacksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("ecommerce");
  
  // Interactive chargeback sandbox parameters
  const [transactionState, setTransactionState] = useState<string>("authentic");
  const [representmentAuto, setRepresentmentAuto] = useState<boolean>(true);
  const [cardTypeScope, setCardTypeScope] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic transaction trust parameters
  const calculateTransactionTrust = () => {
    let score = 97; // base trust score
    
    if (transactionState === "dispute") score -= 52;
    if (!representmentAuto) score -= 22;
    if (cardTypeScope) score -= 14;
    
    score = Math.max(score, 7);
    
    let status = "AUTHORIZED COMPLIANT TRANSACTION";
    let color = "text-emerald-500";
    if (score <= 35) {
      status = "COORDINATED REMOTE FRAUD ATTEMPT";
      color = "text-red-500";
    } else if (score <= 65) {
      status = "MANUAL REPRESENTMENT GAPS DETECTED";
      color = "text-amber-500";
    } else if (score <= 85) {
      status = "UNVERIFIED COMMERCIAL CARD REDEMPTION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateTransactionTrust();

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
                CHARGEBACK & PAYMENT DISPUTE INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Reduce Chargebacks and Strengthen <br />
                <span className="text-zinc-400">Payment Trust in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises reduce chargebacks, detect payment abuse, automate dispute workflows, and improve transaction trust using AI-powered fraud analytics, behavioral intelligence, and real-time payment monitoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/reduce-chargebacks#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Chargeback Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fintechs, ecommerce platforms, subscription businesses, payment processors, marketplaces, gaming ecosystems, and digital commerce operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Chargeback Intelligence & Dispute Resolution Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Chargeback Intelligence & Dispute Resolution Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">PAYMENT PROTECTION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live payment dispute intelligence environment visualizing chargeback risk scoring, friendly fraud detection, dispute representment workflows, payment anomaly detection, card-not-present risk analytics, merchant trust intelligence, refund abuse indicators, and transaction lifecycle visibility.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Payment Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Transaction state</span>
                        <select 
                          value={transactionState} 
                          onChange={(e) => setTransactionState(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Genuine verified purchase</option>
                          <option value="dispute">Fraudulent proxy dispute</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Auto-evidence capture</span>
                        <input 
                          type="checkbox" 
                          checked={representmentAuto} 
                          onChange={(e) => setRepresentmentAuto(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Tokenized ApplePay cards</span>
                        <input 
                          type="checkbox" 
                          checked={cardTypeScope} 
                          onChange={(e) => setCardTypeScope(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE TRANSACTION TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Representment Workspace</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {transactionState === "dispute" ? "Active Dispute Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Chargeback Risk Timeline</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {cardTypeScope ? "Active ApplePay Valid" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">TRANSACTION TRUST SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Friendly fraud filters active</span>
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
              Chargebacks and Payment Disputes Continue to Increase Across Digital Commerce Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern commerce platforms process: online payments, subscription renewals, marketplace transactions, digital purchases, mobile commerce activity, recurring billing, cross-border payments, and refund workflows. Fraudsters and abusive users increasingly exploit payment ecosystems using: friendly fraud, stolen cards, refund abuse, account takeover, synthetic identities, subscription manipulation, card testing, dispute farming, and collusive transaction networks. Traditional payment systems often struggle with: real-time payment visibility, dispute intelligence, transaction trust scoring, cross-channel fraud correlation, manual representment operations, and operational scalability. Without connected chargeback intelligence, organizations face: rising dispute ratios, payment losses, processor penalties, merchant account risk, operational inefficiencies, reputational damage, and customer trust erosion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Friendly Fraud", desc: "Legitimate customers falsely dispute valid transactions.", icon: <Shield /> },
                { title: "Card-Not-Present Fraud", desc: "Digital payment ecosystems remain vulnerable to remote payment abuse.", icon: <Users /> },
                { title: "Refund & Subscription Abuse", desc: "Fraudsters exploit refund workflows and recurring billing systems.", icon: <Sliders /> },
                { title: "Dispute Management Complexity", desc: "Manual representment workflows reduce operational efficiency.", icon: <Clock /> },
                { title: "Transaction Trust Visibility Gaps", desc: "Organizations struggle to assess payment legitimacy in real time.", icon: <Building /> },
                { title: "Processor & Network Risk", desc: "High dispute ratios increase exposure with payment processors and card networks.", icon: <Sliders /> }
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

            {/* Payment Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">PAYMENT LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Payment Authorization", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Trust Scoring", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Detection", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Dispute Monitoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Representment Workflows", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance Operations", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Chargeback Prevention and Payment Trust Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines payment fraud analytics, behavioral intelligence, transaction trust scoring, dispute automation, graph analysis, device intelligence, and governance automation into a unified chargeback intelligence platform. The platform continuously evaluates: transaction legitimacy, customer trust, refund behavior, payment anomalies, device reputation, dispute activity, graph relationships, authorization patterns, and operational abuse indicators. DeepSense enables organizations to: reduce chargebacks, improve payment trust, strengthen representment operations, detect friendly fraud, reduce payment losses, improve operational efficiency, and protect merchant ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce chargebacks", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Improve payment trust", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen representment operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Detect friendly fraud", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Reduce payment losses", desc: "Support digital GRC with active security control overlays." },
                { title: "Improve operational efficiency", desc: "Block duplicate submissions before cash-outs settle." }
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
              Payment Trust & Dispute Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Chargeback Prevention", desc: "Detect suspicious payments, dispute-prone transactions, authorization anomalies, account compromise, card testing activity, and transaction abuse." },
                { title: "Friendly Fraud Detection", desc: "Identify suspicious customer disputes, behavioral inconsistencies, refund manipulation, repeated abuse patterns, and collusive dispute activity." },
                { title: "Transaction Trust Scoring", desc: "Generate payment trust scores, authorization confidence ratings, customer legitimacy indicators, dispute probability analytics, and merchant risk scores." },
                { title: "Dispute & Representment Automation", desc: "Automate evidence collection, representment workflows, dispute escalation, payment verification, and operational case management." },
                { title: "Refund Abuse Monitoring", desc: "Detect repeated refunds, suspicious cancellation behavior, policy exploitation, refund laundering, and operational abuse patterns." },
                { title: "Behavioral Analytics", desc: "Analyze payment behavior, transaction consistency, customer activity, session anomalies, and behavioral trust indicators." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator environments, shared infrastructure, suspicious sessions, and account takeover indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked transactions, connected customers, fraud ecosystems, refund abuse rings, and shared payment infrastructure." },
                { title: "Case Management & Investigations", desc: "Coordinate dispute investigations, representment reviews, payment escalations, evidence workflows, and remediation tracking." },
                { title: "Governance & Payment Oversight", desc: "Support dispute governance, processor reporting, operational transparency, payment oversight, and audit readiness." }
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
              How DeepSense Reduces Chargebacks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transaction telemetry, payment authorizations, refund activity, subscription workflows, customer sessions, dispute activity, and device signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, device trust analytics, payment telemetry, fraud indicators, and transaction reputation scoring." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates transaction legitimacy, customer trust, refund exposure, dispute risk, payment anomalies, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates transaction risk scores, fraud interventions, representment workflows, refund restrictions, and dispute escalation alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers dispute investigations, payment reviews, remediation workflows, governance reporting, and processor escalation." }
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
              Built for Modern Payment and Commerce Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "ecommerce", label: "Ecommerce Platforms" },
                { id: "subscription", label: "Subscription Businesses" },
                { id: "financial", label: "Fintech Platforms" },
                { id: "gaming", label: "Gaming & Digital Goods" },
                { id: "marketplace", label: "Marketplaces & Merchants" }
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
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect digital payments, checkout workflows, refund operations, and customer trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "subscription" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor recurring billing abuse, cancellation manipulation, payment anomalies, and customer disputes.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure payment authorization, transaction integrity, digital wallets, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "gaming" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect refund abuse, virtual purchase fraud, account compromise, and transaction laundering.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent friendly fraud, dispute farming, payment manipulation, and operational abuse.</h4>
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
              Real-Time Chargeback and Payment Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Chargeback Operations Dashboard", desc: "Dispute alerts, transaction fraud monitoring, refund abuse visibility, and authorization analytics." },
                { title: "Transaction Trust Intelligence", desc: "Payment trust scoring, behavioral indicators, customer legitimacy analytics, and dispute probability visibility." },
                { title: "Refund & Subscription Analytics", desc: "Cancellation abuse visibility, refund anomaly detection, recurring billing analytics, and operational exposure indicators." },
                { title: "Dispute Representment Dashboard", desc: "Evidence collection status, representment workflows, processor escalations, and dispute resolution analytics." },
                { title: "Investigation Workspace", desc: "Transaction timelines, graph investigations, evidence management, and GRC compliance reporting." }
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
                Enterprise-Grade Security for Payment and Dispute Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single payment settled.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Payment Decisions", desc: "Every transaction decision includes reason codes, behavioral evidence, payment indicators, graph relationships, and dispute context." },
                { title: "Audit Logging", desc: "Track dispute escalations, refund investigations, payment reviews, and operational workflows." },
                { title: "Multi-Tenant Payment Security", desc: "Secure operational separation across merchant ecosystems, payment environments, and verification workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, AML obligations, payment governance, and operational resilience." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">PAYMENT DISPUTE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense reduce chargebacks in real time?", 
                  a: "Yes. DeepSense continuously evaluates transaction legitimacy, behavioral anomalies, refund activity, and dispute indicators in real time." 
                },
                { 
                  q: "Does DeepSense support friendly fraud detection?", 
                  a: "Yes. The platform identifies suspicious customer disputes, repeated abuse behavior, refund manipulation, and collusive dispute ecosystems." 
                },
                { 
                  q: "Can DeepSense automate dispute representment?", 
                  a: "Yes. DeepSense automates evidence collection, representment workflows, dispute escalation, and operational case management." 
                },
                { 
                  q: "Does DeepSense support refund and subscription abuse monitoring?", 
                  a: "Yes. The platform detects suspicious refund activity, cancellation manipulation, recurring billing abuse, and operational inconsistencies." 
                },
                { 
                  q: "Can DeepSense improve transaction trust scoring?", 
                  a: "Yes. DeepSense uses behavioral analytics, device intelligence, graph analysis, and payment telemetry to generate dynamic trust scores." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale payment ecosystems?", 
                  a: "Yes. DeepSense is designed for large-scale commerce platforms, fintechs, payment processors, subscription businesses, and digital marketplaces." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Payment Trust and Reduce Chargeback Exposure</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure checkout channels and prevent <br />
                <span className="text-white/40 font-bold">chargebacks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Reduce disputes, prevent payment abuse, automate representment workflows, and strengthen transaction trust using enterprise-grade chargeback intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/reduce-chargebacks#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Chargeback Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
