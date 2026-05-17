"use client";

import React, { useState, useEffect } from "react";
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
  FileCheck,
  Layers,
  Terminal,
  ChevronDown,
  ChevronUp,
  Server,
  HelpCircle,
  Send,
  Smartphone,
  Eye,
  Users,
  BookOpen,
  Briefcase,
  Building2,
  ShoppingBag,
  Wallet,
  History,
  TrendingDown,
  Clock,
  FileSpreadsheet,
  FileText,
  Search
} from "lucide-react";

export default function AmlMonitoringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Compliance Dashboard mockup state
  const [activeTypology, setActiveTypology] = useState<string>("structuring");
  const [alertSeverity, setAlertSeverity] = useState<string>("HIGH");
  const [sarStatus, setSarStatus] = useState<string>("DRAFT_CREATED");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleTypologyChange = (type: string) => {
    setActiveTypology(type);
    if (type === "structuring") {
      setAlertSeverity("HIGH");
      setSarStatus("DRAFT_READY (Structuring Anomaly)");
    } else if (type === "mule") {
      setAlertSeverity("CRITICAL");
      setSarStatus("AUTO_ESCALATED (Mule Network Ring)");
    } else {
      setAlertSeverity("MEDIUM");
      setSarStatus("MONITORING (Rapid Transfer Flow)");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                AML Transaction Monitoring & Compliance Intelligence
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Suspicious Activity, Monitor AML Risk, <br />
                <span className="text-zinc-400">and Automate Compliance Workflows.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense monitors transactions, customers, counterparties, accounts, devices, documents, and graph relationships to detect money laundering patterns, mule activity, sanctions exposure, and suspicious financial behavior.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/sanctions-screening" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Sanctions Screening
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, crypto platforms, payment companies, telecom wallets, lenders, and regulated financial institutions.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive AML Compliance Command-Center Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">AML TRANSACTIONS COMPLIANCE HUB</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FLOW ACTIVE • Real Time & Batch Processing</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Suspicious Activity triggers and selectors */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">AML Typology Simulator</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">ENRICHED TRANSACTION CONTEXT</span>
                        <span className="text-white font-bold text-xs">Mule_Score (94/100) • Graph_Ring_Active</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">MATCHED AML TYPOLOGY RULES</span>
                        <span className="text-white">
                          {activeTypology === "structuring" ? "Structuring Check ($9,900 series anomaly)" : activeTypology === "mule" ? "Mule Pass-through network active" : "Rapid incoming to cash-out sweep"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "structuring", label: "Simulate Structuring (Sub-threshold deposits)" },
                        { id: "mule", label: "Simulate Mule Pass-Through flow" },
                        { id: "rapid", label: "Trigger Rapid In/Out transaction burst" }
                      ].map((type) => (
                        <div 
                          key={type.id}
                          onClick={() => handleTypologyChange(type.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeTypology === type.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Decisions Panel & Risk meter */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">AML Alert Severity Level</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {alertSeverity} Severity
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">STR/SAR REPORT: {sarStatus}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Structuring Anomaly</span>
                          <span className={activeTypology === "structuring" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeTypology === "structuring" ? "DETECTED (9 sub-deposits)" : "PASSED"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Mule Flow Check</span>
                          <span className={activeTypology === "mule" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeTypology === "mule" ? "MULE_CLUSTER_CONFIRMED" : "PASSED"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">PEP Screening Match</span>
                          <span className="text-brand-lime font-bold">CLEAR (Fuzzy search positive)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Audited Compliance Log</span>
                          <span className="text-white">Immutably stored (Hash verified)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-brand-lime text-neutral-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/90 transition-all text-center">
                        Auto-Compile STR Report
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Escalate to Case Workflow
                      </button>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Fragmented Compliance</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AML Teams Are Fighting More Risk With More Fragmented Tools.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Financial crime moves across accounts, counterparties, jurisdictions, wallets, devices, and transaction channels. Traditional AML systems often detect suspicious activity late, generate excessive alerts, and separate monitoring from investigation and reporting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fragmented Monitoring", desc: "Transaction monitoring, sanctions screening, customer risk, and case management often live in separate systems.", icon: <FileCheck /> },
                { title: "Alert Overload", desc: "Compliance teams face high volumes of low-quality alerts without enough context to prioritize risk.", icon: <Users /> },
                { title: "Mule Networks", desc: "Money moves through layered accounts, pass-through flows, and hidden beneficiary networks.", icon: <Network /> },
                { title: "Slow Reporting", desc: "Preparing SAR, STR, or CTR reports manually can take hours or days.", icon: <Clock /> },
                { title: "Static AML Rules", desc: "Traditional rules struggle to detect evolving typologies and cross-channel laundering patterns.", icon: <AlertTriangle /> },
                { title: "Weak Evidence Trails", desc: "Investigators often lack complete transaction history, graph evidence, notes, and audit-ready documentation.", icon: <History /> }
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
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE AML SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected AML</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AML Monitoring Connected to Fraud, Identity, Graph, and Case Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense brings transaction monitoring, screening, customer risk profiling, graph intelligence, case management, and regulatory reporting into one connected AML operations platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Transaction Monitoring", desc: "Detect suspicious activity across deposits, transfers, withdrawals, payouts, wallet movements, and high-risk transaction flows." },
                { title: "Customer Risk Profiling", desc: "Continuously evaluate customer risk using onboarding, behavior, transaction, screening, geography, and graph signals." },
                { title: "Sanctions & PEP Screening", desc: "Screen customers, counterparties, vendors, documents, and transactions against sanctions, PEP, adverse media, and watchlists." },
                { title: "Mule & Pass-Through Detection", desc: "Identify accounts receiving funds and rapidly forwarding them with minimal retention." },
                { title: "Graph-Based AML", desc: "Reveal hidden relationships, shared beneficiaries, suspicious clusters, and laundering networks." },
                { title: "Regulatory Reporting", desc: "Generate SAR, STR, CTR, XML/PDF exports, evidence packs, approvals, and audit trails." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: AML TYPOLOGY DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Emerging typologies</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect Suspicious Activity Across Modern AML Typologies.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense monitors known and emerging financial crime typologies using rules, graph intelligence, behavioral signals, and transaction analytics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Structuring Detection", desc: "Detect repeated transactions just below reporting thresholds across configurable time windows." },
                { title: "Pass-Through Accounts", desc: "Identify accounts that receive funds and quickly transfer them out with low balance retention." },
                { title: "Mule Account detection", desc: "Detect accounts acting as intermediaries in fraud, scam, or laundering networks." },
                { title: "Rapid In / Out Movement", desc: "Identify suspicious funds movement where incoming funds are quickly cashed out." },
                { title: "Multi-Account Layering", desc: "Detect complex transaction chains designed to obscure the source or destination of funds." },
                { title: "High-Risk Countries", desc: "Monitor activity involving high-risk jurisdictions, unusual cross-border flows, and geography anomalies." },
                { title: "Suspicious Beneficiaries", desc: "Detect beneficiaries receiving funds from many unrelated accounts or linked to prior risk signals." },
                { title: "Dormant Account Reactivation", desc: "Identify accounts that become active after long inactivity and immediately perform high-risk transactions." }
              ].map((typo, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">TYPOLOGY {idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{typo.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{typo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: TRANSACTION MONITORING WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Real-time & Batch</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Monitor Transactions in Real Time and in Batch.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports both inline transaction risk checks and scheduled AML batch analytics for deeper pattern detection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "1. Ingest Transactions", desc: "Receive transaction events from core banking systems, wallets, payment processors, ledgers, or APIs." },
                { title: "2. Enrich Context", desc: "Add customer risk, counterparty history, device intelligence, geography, sanctions exposure, graph links, and behavior context." },
                { title: "3. Detect AML Signals", desc: "Evaluate rules, typologies, thresholds, anomalies, and graph patterns." },
                { title: "4. Score AML Risk", desc: "Generate AML risk scores with reason codes, severity, confidence, and evidence." },
                { title: "5. Create Alerts & Cases", desc: "Route suspicious activity into AML investigation queues automatically." },
                { title: "6. Report When Needed", desc: "Generate SAR/STR/CTR workflows with evidence and analyst notes." }
              ].map((step, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SANCTIONS, PEP & WATCHLIST INTEGRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sanctions Screening</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Screen Customers and Transactions Against Global and Internal Risk Sources.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              AML monitoring becomes more powerful when transaction behavior is evaluated alongside sanctions, PEP, adverse media, and organization-specific watchlist signals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Global Sanctions Lists", desc: "Screen against OFAC, UN, EU, UK OFSI/HMT, and OpenSanctions lists automatically." },
                { title: "PEP Exposure checks", desc: "Identify domestic and foreign politically exposed persons during onboarding." },
                { title: "Adverse Media Matches", desc: "Flag individuals mentioned in negative news or financial crime databases." },
                { title: "Fuzzy Name Matching", desc: "Leverage intelligent triage and alias matching to resolve common name variations." },
                { title: "High-Risk Countries", desc: "Flag issuing jurisdictions and citizenships on watchlists." },
                { title: "False-Positive Resolution", desc: "Fuzzy matching reduces manual review queue burden." }
              ].map((aml, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{aml.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{aml.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: CUSTOMER RISK PROFILING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Continuous profiling</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Continuously Monitor Customer Risk After Onboarding.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense builds living risk profiles that update as customers transact, change behavior, trigger screening hits, or connect to suspicious entities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "KYC Onboarding logs", desc: "Integrate customer verification status and initial onboarding scores." },
                { title: "Device & Behavioral risk", desc: "Update profile context continuously with device and session biometrics drift signals." },
                { title: "AML Case outcomes", desc: "Factor in historical alert alerts, notes, and previous STR reviews." }
              ].map((inp, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{inp.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{inp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: GRAPH-POWERED AML ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Graph Analysis</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Reveal Mule Networks and Hidden Financial Crime Relationships.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Money laundering and scam networks often rely on connected accounts and beneficiaries. DeepSense graph intelligence helps AML teams see these relationships clearly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Shared Beneficiary Detection", desc: "Identify many accounts sending funds to the same risky destination." },
                { title: "Mule Network Discovery", desc: "Detect networks of accounts receiving and forwarding suspicious funds." },
                { title: "Risk Propagation links", desc: "Increase risk for entities linked to known suspicious accounts or sanctioned exposure." },
                { title: "Relationship Timelines flow", desc: "Understand how entity relationships and device links evolve over time." },
                { title: "Suspicious Clusters profiling", desc: "Identify concentrated risk across accounts, wallets, devices, and counterparties." },
                { title: "Evidence Packaging support", desc: "Attach graph screenshots and node linkages directly to compliance reports." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: AML CASE MANAGEMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Workspace</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Turn AML Alerts Into Structured Investigations.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides case workflows for suspicious activity, sanctions hits, PEP exposure, adverse media, and customer due diligence reviews.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Unified AML Alert Queues", desc: "Prioritize alerts by severity, match confidence, and customer risk tiers." },
                    { title: "EDD & CDD Escalation flows", desc: "Push higher-risk alerts to compliance officers with complete evidence context." },
                    { title: "Immutably Audited action history", desc: "Track every comment, state transition, and document download immutably." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{feat.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual AML investigation timeline mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">AML COMPLIANCE QUEUE</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Target: Structuring Alert</span>
                      <span className="text-red-400 font-bold">REVIEW_PENDING</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Matched Rule</span>
                      <span className="text-red-400 font-bold">SUB_THRESHOLD_DEPOSITS_SERIES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: REGULATORY REPORTING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Regulatory Filing</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Generate SAR, STR, and CTR Workflows From Real Evidence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps compliance teams move from suspicious activity detection to regulator-ready reporting workflows faster.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Automated Report Drafting", desc: "Create SAR/STR/CTR reports populated directly from AML cases." },
                { title: "Evidence Package attachment", desc: "Attach transaction trails, graph relationships, and screening hits." },
                { title: "Structured XML / PDF Export", desc: "Export XML sheets formatted for FinCEN and country regulators." },
                { title: "Internal Approval routing", desc: "Enforce review workflows before exporting regulatory files." },
                { title: "Submission Reference tracking", desc: "Maintain regulatory logs, feedback states, and case history." },
                { title: "Filing Lineage audit", desc: "Track exact data fields, compilation dates, and author profiles." }
              ].map((rep, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{rep.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{rep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: COMPLIANCE OPERATIONS DASHBOARD ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Command center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Give AML Teams Full Operational Visibility.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense provides dashboards that help AML leaders monitor alert volume, investigation performance, customer risk, reporting status, and program effectiveness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Open AML Cases", desc: "Track ongoing analyst triage items." },
                { title: "EDD Review Queue", desc: "Monitor enhanced due diligence progression." },
                { title: "Filing Status tracker", desc: "Audit SAR drafts, review pipelines, and submissions." },
                { title: "Alert Volume Analytics", desc: "Analyze false-positive rates and typology triggers." }
              ].map((wid, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[28px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{wid.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{wid.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Inlets</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              AML Intelligence Connected to Fraud, Identity, Payments, and Enterprise Risk.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense connects AML monitoring to the broader financial crime ecosystem so teams can detect overlap between fraud, identity abuse, suspicious transactions, and compliance exposure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Scoring Integration", desc: "AML signals contribute directly to fraud and transaction risk scoring." },
                { title: "Document Fraud & KYC feeds", desc: "Extracted identity fields and onboarding risk feed AML monitoring." },
                { title: "Graph Intelligence networks", desc: "Connected entity analysis strengthens mule and laundering detection." },
                { title: "Payment Fraud context", desc: "APP scams, wallet risk, NFC fraud, and suspicious beneficiaries contribute to AML context." },
                { title: "Case Management flows", desc: "AML alerts are routed into investigation workflows with evidence." },
                { title: "Regulatory Reporting pipelines", desc: "Cases can become SAR/STR/CTR workflows with audit-ready evidence." }
              ].map((int, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              AML Monitoring for Regulated and High-Risk Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Monitor suspicious transactions, mule accounts, structuring, sanctions exposure, and customer risk." },
                { title: "Fintech", desc: "Detect suspicious wallet activity, rapid movement, onboarding risk, and high-risk customers." },
                { title: "Crypto & Web3", desc: "Monitor wallet flows, sanctions exposure, high-risk jurisdictions, and suspicious counterparties." },
                { title: "Payments", desc: "Detect suspicious payment flows, merchant risk, beneficiary exposure, and scam-related movement." },
                { title: "Telecom Wallets", desc: "Identify SIM-linked wallet abuse, cash-out networks, mule activity, and high-risk agents." },
                { title: "Lending", desc: "Detect suspicious funding flows, synthetic identity risk, and risky repayment behavior." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Auditing</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Compliance Governance and Audit Readiness.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that require explainable AML decisions, complete investigation records, and regulatory audit support.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Tenant isolation", "Audit logging", "Evidence retention",
                "SAR approvals", "Data encryption", "Watchlist history", "On-prem deploy"
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Compliance FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What AML typologies does DeepSense detect?", 
                  a: "DeepSense detects structuring, pass-through accounts, mule activity, rapid in/out movement, suspicious beneficiaries, high-risk countries, and layered transaction patterns." 
                },
                { 
                  q: "Does DeepSense support sanctions screening?", 
                  a: "Yes. DeepSense supports sanctions, PEP, adverse media, internal watchlists, and customer risk screening workflows." 
                },
                { 
                  q: "Can DeepSense create AML cases automatically?", 
                  a: "Yes. Suspicious activity, screening hits, and monitoring alerts can automatically create AML investigation cases." 
                },
                { 
                  q: "Does DeepSense support SAR and STR reporting?", 
                  a: "Yes. DeepSense supports SAR/STR/CTR workflows, evidence packaging, XML/PDF exports, approval workflows, and submission tracking where configured." 
                },
                { 
                  q: "Can AML risk affect transaction scoring?", 
                  a: "Yes. AML signals can contribute directly to customer, account, and transaction risk scores." 
                },
                { 
                  q: "Can DeepSense be deployed on-premise?", 
                  a: "Yes. DeepSense supports SaaS, private cloud, customer VPC, on-premise, and air-gapped deployment models." 
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

        {/* ================= SECTION 16: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to modernize AML monitoring?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Detect suspicious activity, investigate <br />
                <span className="text-white/40">faster, and report with confidence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense connects AML transaction monitoring, sanctions screening, customer risk profiling, graph intelligence, case management, and regulatory reporting into one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/sanctions-screening" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Sanctions Screening
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
