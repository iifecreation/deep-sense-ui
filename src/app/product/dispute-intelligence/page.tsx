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
  Briefcase,
  FileSpreadsheet,
  Gauge,
  Workflow,
  Search,
  Check
} from "lucide-react";

export default function DisputeIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("ecommerce");
  
  // Interactive Dispute Resolution SLA & Evidence Calculator States
  const [disputeReason, setDisputeReason] = useState<string>("inr");
  const [issuerBank, setIssuerBank] = useState<string>("chase");
  const [chargebackAmount, setChargebackAmount] = useState<number>(1250);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Dynamic SLA and recovery probability calculations
  const calculateDisputeMetrics = () => {
    let baseSla = 7.5; // days
    let recoveryProb = 45; // %
    
    if (disputeReason === "inr") {
      baseSla -= 2.0;
      recoveryProb += 25;
    } else if (disputeReason === "ua") {
      baseSla += 1.5;
      recoveryProb += 15;
    } else {
      baseSla -= 0.5;
      recoveryProb += 30;
    }
    
    if (issuerBank === "chase") {
      baseSla -= 1.0;
      recoveryProb += 10;
    } else if (issuerBank === "barclays") {
      baseSla += 0.5;
      recoveryProb += 5;
    }
    
    if (chargebackAmount > 2000) {
      baseSla += 1.2;
      recoveryProb -= 10;
    } else {
      baseSla -= 0.6;
      recoveryProb += 5;
    }
    
    recoveryProb = Math.min(recoveryProb, 98);
    baseSla = Math.max(baseSla, 1.8);
    
    let priority = "MEDIUM";
    let priorityColor = "text-amber-500";
    if (chargebackAmount >= 1500) {
      priority = "CRITICAL (Auto-Escalate)";
      priorityColor = "text-red-500";
    } else if (chargebackAmount < 500) {
      priority = "LOW (Auto-Settle)";
      priorityColor = "text-emerald-500";
    }
    
    return { 
      sla: baseSla.toFixed(1), 
      probability: recoveryProb, 
      priority, 
      priorityColor 
    };
  };

  const { sla, probability, priority, priorityColor } = calculateDisputeMetrics();

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-indigo-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                ENTERPRISE DISPUTE & CHARGEBACK OPERATIONS
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Centralize Dispute Intelligence and <br />
                <span className="text-zinc-400">Chargeback Operations</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps payment providers, fintechs, merchants, issuers, and marketplaces manage disputes, automate evidence workflows, detect fraud-linked chargebacks, and improve representment outcomes using real-time payment intelligence and advanced analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Payment Fraud Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for modern payment ecosystems handling high-volume disputes, chargebacks, refunds, and transaction investigations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Dispute Operations Command Center Simulator */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-indigo-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-indigo-400 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Dispute SLA & Evidence Control</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">DISPUTE SLA TRACKER ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Operational Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 block mb-2">Dispute Reason</span>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "inr", label: "INR (Not Received)" },
                            { id: "ua", label: "UA (Unauthorized)" },
                            { id: "sub", label: "Subscription" }
                          ].map((t) => (
                            <button 
                              key={t.id} 
                              onClick={() => setDisputeReason(t.id)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${disputeReason === t.id ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-500 block mb-2">Issuer Bank</span>
                        <div className="grid grid-cols-3 gap-2">
                          {["chase", "barclays", "citi"].map((tk) => (
                            <button 
                              key={tk} 
                              onClick={() => setIssuerBank(tk)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${issuerBank === tk ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {tk}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-500 block mb-2">Chargeback Amount ($)</span>
                        <input 
                          type="range"
                          min="100"
                          max="5000"
                          step="100"
                          value={chargebackAmount}
                          onChange={(e) => setChargebackAmount(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                        <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                          <span>$100</span>
                          <span className="text-white font-bold">${chargebackAmount}</span>
                          <span>$5,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE OPERATIONAL METRICS MONITOR</span>
                        <span>SLA ENGINE READY</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Dispute Operations Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Active Queue: 12 Cases</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Dispute SLA Target</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">{sla} Days Average</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">RECOVERY PROBABILITY STATUS</span>
                          <span className="text-3xl font-black text-white">{probability}%</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">PRIORITY ROUTING RECOMMENDED</span>
                          <span className={`text-xs font-black uppercase ${priorityColor}`}>{priority}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>SLA Enforcement Limit: 10.0 Days Max</span>
                      <span>Visa Ethoca/Verifi Integration Live</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Fragmented Systems</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Dispute Operations Are Fragmented and Reactive
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern payment ecosystems process large volumes of disputes across cards, wallets, ACH transfers, mobile payments, marketplaces, BNPL systems, telecom wallets, and subscription billing. Most organizations still manage disputes using disconnected systems, spreadsheets, manual evidence gathering, and siloed fraud workflows. As dispute volumes increase, organizations struggle with slow investigations, poor evidence management, inconsistent representment, operational inefficiencies, rising chargeback losses, lack of dispute visibility, and fraud-linked dispute blind spots. Without centralized dispute intelligence, teams cannot effectively identify coordinated dispute abuse, merchant fraud patterns, issuer anomalies, repeat customer abuse, and operational bottlenecks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Manual Evidence Collection", desc: "Analysts spend excessive time gathering payment, delivery, and behavioral evidence.", icon: <FileSpreadsheet /> },
                { title: "Disconnected Fraud & Disputes", desc: "Fraud teams and dispute teams often operate independently without shared intelligence.", icon: <Workflow /> },
                { title: "Rising Chargeback Ratios", desc: "High dispute rates increase financial losses and scheme monitoring risk.", icon: <Gauge /> },
                { title: "Limited Investigation Visibility", desc: "Organizations lack unified timelines and graph visibility across disputes.", icon: <Eye /> },
                { title: "Inconsistent Representment", desc: "Manual processes reduce representment quality and recovery success.", icon: <Scale /> },
                { title: "Coordinated Abuse Rings", desc: "Fraud networks exploit weak dispute operations and fragmented systems.", icon: <Network /> }
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

            {/* Dispute Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">DEEPSENSE UBSCRIBED DISPUTE WORKFLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Dispute Ingest", desc: "Real-time webhook ingestion of dispute reason codes." },
                  { title: "2. Evidence Package", desc: "Automated retrieval of positive delivery proof and digital logins." },
                  { title: "3. Representment Send", desc: "Issuer evidence packaged and submitted via automated APIs." },
                  { title: "4. Case Escalation", desc: "High-value disputes auto-routed to priority analyst queues." },
                  { title: "5. Resolution Log", desc: "Dispute outcome logged to continuously update customer risk scores." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Centralized Operations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Dispute Operations & Payment Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines dispute management, fraud analytics, graph intelligence, payment telemetry, evidence orchestration, and operational workflow automation into a unified dispute intelligence platform. The platform centralizes disputes, chargebacks, refunds, representment workflows, transaction evidence, behavioral analytics, merchant intelligence, and customer dispute profiles. DeepSense enables organizations to reduce operational overhead, improve recovery rates, accelerate investigations, strengthen representment quality, detect coordinated abuse, improve dispute visibility, and reduce payment losses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce operational overhead", desc: "Substitute disconnected spreadsheets with automated evidence retrieval queues." },
                { title: "Improve recovery rates", desc: "Leverage machine learning score evaluations to prioritize high-recovery probability representments." },
                { title: "Accelerate investigations", desc: "Furnish dispute specialists with consolidated transaction timelines." },
                { title: "Strengthen representment", desc: "Ensure issuer evidence complies strictly with network reason code mandates." },
                { title: "Detect coordinated abuse", desc: "Map repeat chargeback farms using our advanced linked payment graph." },
                { title: "Reduce payment losses", desc: "Mitigate bottom-line leakage from uncontested card brand disputes." }
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
              Enterprise Dispute Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Centralized Dispute Operations", desc: "Manage chargebacks, disputes, refunds, representment workflows, investigation queues, and SLA tracking." },
                { title: "Evidence Automation", desc: "Automatically assemble transaction evidence, delivery records, device telemetry, session history, behavioral evidence, and customer activity logs." },
                { title: "Fraud-Linked Disputes", desc: "Correlate disputes with transaction fraud, account takeover, device abuse, refund abuse, synthetic identities, and coordinated fraud rings." },
                { title: "Customer Dispute Profiling", desc: "Track dispute history, refund patterns, abuse indicators, payment reputation, and repeat offender behavior." },
                { title: "Merchant & Issuer Analytics", desc: "Analyze dispute ratios, issuer behavior, merchant exposure, recovery performance, fraud-linked disputes, and operational efficiency." },
                { title: "Graph Investigation Intelligence", desc: "Visualize linked transactions, connected accounts, shared devices, dispute rings, payment relationships, and coordinated abuse networks." },
                { title: "Operational Workflow Automation", desc: "Automate case assignment, escalation workflows, evidence packaging, dispute prioritization, analyst routing, and SLA enforcement." },
                { title: "Real-Time Risk Scoring", desc: "Generate dispute risk scores, abuse likelihood, recovery probability, fraud correlation indicators, and operational priority scores." },
                { title: "Multi-Channel Payment Support", desc: "Support cards, ACH, RTP, wallets, BNPL, telecom wallets, marketplace payments, and embedded finance." },
                { title: "Audit-Ready Investigation Trails", desc: "Maintain analyst actions, evidence history, workflow events, dispute decisions, escalation records, and regulatory evidence." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-indigo-600 font-bold block mb-2 font-mono">CAP-0{idx+1}</span>
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
              How DeepSense Powers Modern Dispute Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests disputes, chargebacks, refunds, transaction events, payment telemetry, delivery confirmations, and behavioral activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches disputes using device intelligence, graph analysis, customer trust profiles, behavioral analytics, payment risk indicators, and transaction history." },
                { title: "Step 3 — Correlation", desc: "DeepSense automatically correlates transaction timelines, login activity, customer interactions, delivery evidence, digital consumption, and linked fraud signals." },
                { title: "Step 4 — Routing", desc: "The platform generates dispute severity scores, representment recommendations, recovery probability estimates, and operational routing decisions." },
                { title: "Step 5 — Resolution", desc: "Analysts investigate disputes using graph intelligence, evidence timelines, linked payment history, customer behavior analysis, and fraud signals." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-indigo-600 font-black text-sm block mb-3 font-mono">{step.title}</span>
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
              Built for Modern Payment & Commerce Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "ecommerce", label: "Ecommerce Platforms" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "subscription", label: "Subscription Businesses" },
                { id: "marketplaces", label: "Marketplaces" },
                { id: "telecom", label: "Telecom Wallets" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold font-manrope uppercase transition-all tracking-wider ${activeTab === tab.id ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full bg-white border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage delivery disputes, refund abuse, false chargebacks, and customer claims.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    DeepSense parses shipping courier telemetry and correlates GPS data to demonstrate positive proof of delivery, defeating "item not received" claims with 100% certainty.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor payment disputes, wallet chargebacks, and merchant abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Help neobank gateways identify credit card disputes matching synthetic consumer behavior to prevent financial write-offs.
                  </p>
                </div>
              )}
              {activeTab === "subscription" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Handle recurring billing disputes, cancellation conflicts, and post-consumption claims.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure recurring authorization streams automatically. Expose users executing recurring transactions and asserting fraudulent billing claims after digital access consumption.
                  </p>
                </div>
              )}
              {activeTab === "marketplaces" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect seller-buyer collusion, coordinated refund abuse, and policy exploitation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Expose collusion networks where buyer accounts repeatedly coordinate transactions and file mock disputes to split merchant payouts.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Investigate wallet disputes, transfer reversals, mobile money fraud, and payout conflicts.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure mobile wallet activation rewards. Correlate carrier logs and SIM age parameters to expose bulk-registered phone farms.
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
              Integrated Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies dispute operations with our wider transaction, behavioral, graph, and AML systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Transaction Fraud Detection", desc: "Correlate disputes with real-time fraud decisions." },
                { title: "Behavioral Biometrics", desc: "Analyze customer interaction behavior and payment activity." },
                { title: "Graph Intelligence", desc: "Visualize linked fraud networks and coordinated abuse rings." },
                { title: "Device Fingerprinting", desc: "Identify shared devices and suspicious payment infrastructure." },
                { title: "Case Management", desc: "Escalate disputes into enterprise investigation workflows." },
                { title: "AML Monitoring", desc: "Correlate suspicious payment disputes with financial crime risk." },
                { title: "Regulatory Reporting", desc: "Generate audit-ready evidence and investigation summaries." }
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
              Real-Time Dispute Operations Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Dispute Operations Dashboard", desc: "Dispute queues, analyst workloads, SLA tracking, and escalation monitoring." },
                { title: "Chargeback Analytics", desc: "Chargeback ratios, recovery rates, issuer analytics, and dispute trends." },
                { title: "Representment Intelligence", desc: "Win/loss analytics, evidence quality metrics, recovery optimization, and dispute outcome tracking." },
                { title: "Fraud Correlation Dashboard", desc: "Linked fraud disputes, account takeover overlap, coordinated abuse clusters, and refund fraud indicators." },
                { title: "Investigation Workspace", desc: "Dispute timelines, graph evidence, payment relationships, and customer activity history." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Target Verticals</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Complex Payment Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure, real-time protection across globally scalable contactless architectures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Ecommerce", "Fintech", "Payment Processors", "Digital Banking", "BNPL Platforms", "Telecom Wallets",
                "Subscription Businesses", "Marketplaces", "Gaming Platforms", "Travel Platforms", "Delivery Platforms", "Embedded Finance Providers"
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <Building2 className="w-4 h-4 text-indigo-500" />
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
                Enterprise-Grade Security and Governance
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes sensitive data exposure using tokenized architectures and controlled access workflows.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Dispute Decisions", desc: "Every operational recommendation includes reason codes, evidence summaries, fraud indicators, and transaction context." },
                { title: "Audit Logging", desc: "Track analyst reviews, dispute actions, workflow changes, representment updates, and escalation history." },
                { title: "Multi-Tenant Security", desc: "Secure separation across merchants, payment environments, investigation teams, and operational workflows." },
                { title: "Privacy-Conscious Evidence", desc: "Minimize sensitive data exposure using tokenized architectures and controlled access workflows." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise deployment." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Dispute FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Does DeepSense support chargeback operations?", 
                  a: "Yes. DeepSense provides centralized dispute and chargeback management with investigation workflows and analytics." 
                },
                { 
                  q: "Can DeepSense automate representment evidence collection?", 
                  a: "Yes. The platform automatically correlates transaction, behavioral, device, and delivery evidence for investigations and representment." 
                },
                { 
                  q: "Can disputes be linked to fraud investigations?", 
                  a: "Yes. DeepSense correlates disputes with fraud alerts, account takeover, refund abuse, and graph intelligence." 
                },
                { 
                  q: "Does the platform support issuer and merchant analytics?", 
                  a: "Yes. DeepSense provides issuer behavior analysis, merchant dispute monitoring, recovery metrics, and operational reporting." 
                },
                { 
                  q: "Can the platform support multi-channel payments?", 
                  a: "Yes. DeepSense supports cards, ACH, wallets, BNPL, RTP, telecom wallets, and embedded finance ecosystems." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise dispute teams?", 
                  a: "Yes. The platform is designed for high-volume enterprise dispute operations with workflow automation and investigation intelligence." 
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-indigo-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase">Modernize Dispute Operations With Real-Time Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Centralize dispute operations, automate evidence workflows, <br />
                <span className="text-white/40 font-bold">and improve representment outcomes globally.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize dispute operations, automate evidence workflows, improve representment outcomes, and reduce payment losses using enterprise-grade dispute intelligence and fraud analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/fraud-detection" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Payment Fraud Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
