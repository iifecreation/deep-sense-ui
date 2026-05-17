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
  Percent,
  Sliders,
  ClipboardCheck,
  Building
} from "lucide-react";

export default function ProcurementRiskPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("ap");
  
  // Interactive simulator states
  const [invoiceMatch, setInvoiceMatch] = useState<string>("near-duplicate");
  const [vendorScreened, setVendorScreened] = useState<boolean>(true);
  const [splitInvoice, setSplitInvoice] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic procurement risk metrics based on states
  const calculateProcurementRisk = () => {
    let score = 10; // base risk score
    
    if (invoiceMatch === "exact") score += 45;
    if (invoiceMatch === "near-duplicate") score += 25;
    if (!vendorScreened) score += 30;
    if (splitInvoice) score += 24;
    
    score = Math.min(score, 99);
    
    let status = "LOW VENDOR EXPOSURE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "HIGH PROCUREMENT FRAUD RISK";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "SPLIT INVOICE WARNING";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "NEAR-DUPLICATE SUBMISSION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateProcurementRisk();

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
                PROCUREMENT FRAUD & VENDOR RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Procurement Fraud and Vendor Risk <br />
                <span className="text-zinc-400">Before Payments Leave Your Organization</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises identify invoice fraud, vendor manipulation, payment anomalies, duplicate invoices, sanctions exposure, and procurement abuse using real-time risk intelligence, workflow analytics, graph detection, and continuous governance monitoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Enterprise Risk Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise procurement teams, finance operations, AP departments, regulated enterprises, internal audit groups, and governance programs.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Procurement Intelligence Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Vendor AP Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FINANCE PROTOCOL ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Procurement Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Invoice Match State</span>
                        <select 
                          value={invoiceMatch} 
                          onChange={(e) => setInvoiceMatch(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="clean">Clean Invoice</option>
                          <option value="near-duplicate">Near-Duplicate submitted</option>
                          <option value="exact">Exact Duplicate found</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Sanctions Screening Passed</span>
                        <input 
                          type="checkbox" 
                          checked={vendorScreened} 
                          onChange={(e) => setVendorScreened(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Split Invoice Scheme</span>
                        <input 
                          type="checkbox" 
                          checked={splitInvoice} 
                          onChange={(e) => setSplitInvoice(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PROCUREMENT GRAPH MATRIX</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Duplicate Invoice Monitoring</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {invoiceMatch === "clean" ? "No matches" : "Similarity Flagged"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Sanctions Status</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {vendorScreened ? "Database Screened" : "Screening Pending"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">VENDOR RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">PROCUREMENT STATUS</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: ERP telemetry mapped</span>
                      <span>Secure tokenization isolation live</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">AP Vulnerabilities</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Procurement Fraud Often Hides Inside Normal Business Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Procurement and accounts payable ecosystems are increasingly targeted by invoice fraud, fake vendors, collusive suppliers, approval manipulation, payment diversion, vendor impersonation, sanctions exposure, and insider abuse. Many organizations still rely on manual invoice reviews, fragmented ERP monitoring, reactive audits, and disconnected procurement workflows. Traditional controls often fail to detect linked vendor relationships, duplicate payments, split invoice schemes, abnormal approval behavior, vendor bank account manipulation, and employee-vendor conflicts. Without continuous procurement intelligence, organizations face financial losses, compliance exposure, operational inefficiencies, audit failures, vendor governance blind spots, and elevated fraud risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Duplicate Invoice Fraud", desc: "Fraudsters manipulate invoice timing, formatting, or amounts to trigger duplicate payments.", icon: <FileSpreadsheet /> },
                { title: "Vendor Impersonation", desc: "Attackers spoof legitimate vendors to redirect payments or manipulate approvals.", icon: <Users /> },
                { title: "Split Invoice Schemes", desc: "Large invoices are split into smaller amounts to bypass approval thresholds.", icon: <Sliders /> },
                { title: "Employee-Vendor Collusion", desc: "Internal employees collaborate with vendors to manipulate procurement workflows.", icon: <Network /> },
                { title: "High-Risk Vendor Exposure", desc: "Organizations unknowingly transact with sanctioned or risky third parties.", icon: <AlertTriangle /> },
                { title: "Procurement Workflow Abuse", desc: "Weak controls create opportunities for unauthorized approvals and payment fraud.", icon: <Sliders /> }
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

            {/* Invoice Fraud Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">INVOICE FRAUD LIFECYCLE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Invoice Submitted", desc: "Supplier uploads billing PDF via vendor portal." },
                  { title: "2. ERP Validation", desc: "DeepSense tracks parameters like routing numbers, timing, and values." },
                  { title: "3. Duplicate Scan", desc: "Similarity engines map values to search for near-duplicates in ledger." },
                  { title: "4. Relationship Audit", desc: "Graph maps search for overlaps in addresses between employee and supplier." },
                  { title: "5. Risk Escalation", desc: "Suspicious matches routed instantly to procurement investigators." },
                  { title: "6. Attestation fixed", desc: "Lead analyst signs off, marking fake vendor profile blocked in ERP." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected AP Risk</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Procurement Fraud & Vendor Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines procurement analytics, payment intelligence, vendor risk scoring, graph analysis, sanctions screening, workflow governance, and continuous controls monitoring into a unified procurement risk platform. The platform continuously evaluates vendor onboarding, invoice activity, payment behavior, approval workflows, employee relationships, sanctions exposure, procurement anomalies, third-party risk indicators, and operational governance signals. DeepSense enables organizations to reduce procurement fraud, improve vendor governance, strengthen AP controls, accelerate investigations, automate risk monitoring, improve audit readiness, and protect enterprise payments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce procurement fraud", desc: "Enforce real-time checks on duplicate invoices and vendor bank changes." },
                { title: "Improve vendor governance", desc: "Continually monitor PEP databases, high-risk countries, and sanctions tables." },
                { title: "Strengthen AP controls", desc: "Flag split-invoice threshold schemes before payments exit corporate wallets." },
                { title: "Accelerate investigations", desc: "Examine employee-vendor conflicts through interactive relationship graphs." },
                { title: "Automate risk monitoring", desc: "Eliminate static manual samples. Inspect 100% of vendor transactions." },
                { title: "Protect enterprise payments", desc: "Validate that billing details perfectly correspond with known clean histories." }
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
              Enterprise Procurement Risk Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Vendor Risk Scoring", desc: "Generate vendor trust scores, sanctions exposure ratings, payment risk indicators, procurement governance metrics, and operational risk profiles." },
                { title: "Duplicate Invoice Detection", desc: "Identify duplicate invoices, near-duplicate submissions, invoice manipulation, repeated payment requests, and suspicious billing patterns." },
                { title: "Vendor Bank Account Monitoring", desc: "Detect sudden bank account changes, shared payout accounts, risky beneficiary relationships, payment diversion attempts, and abnormal payout behavior." },
                { title: "Procurement Workflow Analytics", desc: "Analyze approval patterns, workflow anomalies, threshold bypass attempts, unusual procurement timing, and abnormal reviewer activity." },
                { title: "Employee-Vendor Relationship", desc: "Correlate shared addresses, linked bank accounts, connected devices, communication overlaps, and suspicious relationship indicators." },
                { title: "Sanctions & Adverse Media", desc: "Continuously monitor sanctions exposure, adverse media, politically exposed persons, high-risk jurisdictions, and third-party governance risks." },
                { title: "Payment Fraud Intelligence", desc: "Detect unusual payment activity, high-risk transfers, rapid vendor payments, suspicious approval chains, and procurement fraud indicators." },
                { title: "Graph Intelligence", desc: "Visualize vendor ecosystems, linked suppliers, connected employees, shared payment infrastructure, and collusive procurement networks." },
                { title: "Continuous Controls Monitoring", desc: "Validate procurement controls, approval workflows, segregation of duties, payment governance, and vendor onboarding policies." },
                { title: "Investigation & Case Management", desc: "Automatically create procurement risk cases, escalate suspicious vendors, attach invoice evidence, assign investigations, and track remediation workflows." }
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

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Procurement Fraud and Vendor Risk
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests invoices, purchase orders, vendor records, payment activity, approval workflows, ERP telemetry, and onboarding data." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches records using sanctions screening, graph intelligence, behavioral analytics, payment telemetry, relationship analysis, and governance policies." },
                { title: "Step 3 — Correlation", desc: "DeepSense evaluates duplicate invoice patterns, approval anomalies, vendor risk exposure, payment irregularities, linked entities, and procurement governance gaps." },
                { title: "Step 4 — Scoring", desc: "The system generates vendor risk scores, procurement fraud indicators, payment risk ratings, and operational governance metrics." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers procurement investigations, approval reviews, vendor escalations, remediation workflows, and governance reporting." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Enterprise Procurement & Finance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "ap", label: "Accounts Payable Teams" },
                { id: "procurement", label: "Procurement Teams" },
                { id: "audit", label: "Internal Audit Teams" },
                { id: "compliance", label: "Compliance Teams" },
                { id: "cfo", label: "CFO & Finance Leadership" }
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
              {activeTab === "ap" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect duplicate invoices, payment anomalies, approval manipulation, and suspicious vendor activity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Protect Accounts Payable databases. Match active invoices to previous payouts dynamically to avoid costly errors.
                  </p>
                </div>
              )}
              {activeTab === "procurement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor vendor onboarding risk, procurement governance, third-party exposure, and workflow integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Verify supplier registration credentials. Screen every new payee across global database registers instantly.
                  </p>
                </div>
              )}
              {activeTab === "audit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Investigate procurement fraud, control failures, collusive activity, and governance violations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Facilitate internal corporate audits. Track billing adjustments and vendor bank shifts dynamically.
                  </p>
                </div>
              )}
              {activeTab === "compliance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Validate sanctions compliance, vendor governance, procurement controls, and audit readiness.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Maintain audit readiness. Screen vendor structures dynamically against high-risk jurisdictional watchlists.
                  </p>
                </div>
              )}
              {activeTab === "cfo" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Gain enterprise procurement visibility, payment risk analytics, governance intelligence, and operational resilience insights.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Supply financial executives with comprehensive risk reports. Ensure that corporate spend profiles correspond with GRC frameworks.
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
              Unified Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links procurement risk engines with active AML workflows, SIEM pipelines, access governance systems, and automated incident case dashboards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Continuous Controls Monitoring", desc: "Validate procurement controls and payment governance continuously." },
                { title: "GRC Management", desc: "Map procurement risks into enterprise governance workflows." },
                { title: "AML Monitoring", desc: "Correlate vendor activity with suspicious financial crime indicators." },
                { title: "Sanctions & Adverse Media Screening", desc: "Continuously monitor vendor exposure and third-party risk." },
                { title: "Graph Intelligence", desc: "Identify collusive procurement ecosystems and linked entities." },
                { title: "Case Management", desc: "Escalate procurement anomalies into investigation workflows." },
                { title: "SIEM Integrations", desc: "Correlate procurement telemetry with enterprise security operations." }
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
              Real-Time Procurement Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Procurement Operations Dashboard", desc: "Vendor risk monitoring, invoice fraud alerts, payment analytics, and procurement governance visibility." },
                { title: "Vendor Intelligence Analytics", desc: "Sanctions exposure, third-party risk trends, adverse media monitoring, and vendor relationship mapping." },
                { title: "Invoice Fraud Monitoring", desc: "Duplicate invoice detection, billing anomalies, approval irregularities, and payment manipulation analytics." },
                { title: "Governance & Compliance Dashboard", desc: "Procurement controls, SoD conflicts, remediation workflows, and audit readiness monitoring." },
                { title: "Investigation Workspace", desc: "Invoice timelines, vendor graph analysis, linked relationships, payment evidence, and remediation workflows." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Enterprise Procurement Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure vendor governance engines to monitor corporate spending channels globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Healthcare", "Insurance", "Government", "Manufacturing",
                "Telecom", "Energy", "Enterprise SaaS", "Retail", "Ecommerce", "Global Enterprises"
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
                Audit-Ready Procurement Governance and Risk Intelligence
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense secures procurement datasets using strict multi-tenant separation, explainable risk calculations, and tokenized financial information.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Procurement Decisions", desc: "Every procurement risk event includes invoice evidence, workflow telemetry, and vendor relationships." },
                { title: "Audit Logging", desc: "Track approval activity, invoice reviews, vendor changes, and governance escalations." },
                { title: "Multi-Tenant Security", desc: "Secure operational separation across organizations, procurement environments, and vendor datasets." },
                { title: "Privacy & Financial Data Protection", desc: "DeepSense minimizes exposure to sensitive financial and vendor data through governed access." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise deployment." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">AP FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect duplicate invoices?", 
                  a: "Yes. DeepSense identifies exact and near-duplicate invoices, suspicious billing patterns, and payment manipulation attempts." 
                },
                { 
                  q: "Does DeepSense support vendor sanctions screening?", 
                  a: "Yes. The platform continuously screens vendors against sanctions, adverse media, and third-party risk datasets." 
                },
                { 
                  q: "Can DeepSense identify employee-vendor collusion?", 
                  a: "Yes. The platform uses graph intelligence, relationship analysis, and payment telemetry to detect suspicious procurement relationships." 
                },
                { 
                  q: "Does DeepSense support ERP integrations?", 
                  a: "Yes. DeepSense supports APIs, ERP integrations, webhooks, and enterprise procurement telemetry pipelines." 
                },
                { 
                  q: "Can the platform monitor procurement approval workflows?", 
                  a: "Yes. DeepSense continuously evaluates approvals, threshold bypass behavior, workflow anomalies, and segregation-of-duties conflicts." 
                },
                { 
                  q: "Is the platform suitable for enterprise procurement governance?", 
                  a: "Yes. DeepSense is designed for enterprise procurement operations, audit readiness, third-party governance, and operational risk management." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Protect Procurement Operations From Fraud and Third-Party Risk</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure procurement channels and prevent <br />
                <span className="text-white/40 font-bold">accounts payable fraud in real time.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect procurement fraud, strengthen vendor governance, reduce payment risk, and improve audit readiness using enterprise-grade procurement intelligence and continuous controls monitoring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Enterprise Risk Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
