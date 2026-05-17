"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Shield, 
  Activity, 
  UserCheck, 
  AlertTriangle, 
  Settings, 
  Cpu, 
  Zap, 
  Database, 
  Lock, 
  Terminal, 
  Eye, 
  Users, 
  BookOpen, 
  FileSpreadsheet, 
  Clock, 
  TrendingDown, 
  Briefcase, 
  Building2, 
  Coins, 
  ShoppingBag, 
  Wallet, 
  CheckCircle2, 
  ArrowRight, 
  Globe,
  FileCheck,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Layers,
  Send,
  Fingerprint
} from "lucide-react";

export default function ProductOverviewPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Centered Hero Content */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                Unified Fraud, AML & Risk Intelligence Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                One Platform to Detect Fraud, Verify Identity, <br />
                <span className="text-zinc-400">Monitor AML Risk, and Manage Financial Crime.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed mt-2">
                DeepSense brings fraud detection, AML monitoring, document intelligence, account takeover prevention, payment risk, GRC, and investigation workflows into one real-time decisioning platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore the Platform
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 w-full max-w-[650px] mx-auto">
                <p className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider mb-2">
                  Built for High-Risk and Regulated Sectors
                </p>
                <p className="text-zinc-500 text-xs font-inter leading-relaxed">
                  Built for banks, fintechs, payment processors, e-commerce platforms, crypto companies, telecom wallets, and regulated enterprises.
                </p>
              </div>
            </div>

            {/* Illustration: Command Center Dashboard Mockup Grid */}
            <div className="w-full mt-4 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <LogoDot />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">COMMAND CENTER: REAL-TIME DECISIONING</span>
                  </div>
                  <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-extrabold rounded-full uppercase tracking-widest">Live Risk Pipeline</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Central Risk Score Card */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col justify-between min-h-[160px] hover:border-brand-lime/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider">
                      <span>Central Decision score</span>
                      <Cpu className="w-3.5 h-3.5 text-brand-lime" />
                    </div>
                    <div className="my-2">
                      <span className="text-4xl md:text-5xl font-black italic text-white">94/100</span>
                      <span className="block text-red-500 text-[10px] font-extrabold uppercase mt-1 tracking-wider">• CRITICAL RISK RATING</span>
                    </div>
                    <p className="text-[10px] text-white/40">Multi-engine scoring calculated threats cross-domain.</p>
                  </div>

                  {/* Fraud Alert Card */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col justify-between min-h-[160px] hover:border-brand-lime/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider">
                      <span>Live Alert Engine</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-manrope">Card-Not-Present Anomaly</h4>
                      <span className="text-xs text-white/60 block mt-1">Velocity spike: 12 attempts/min</span>
                    </div>
                    <p className="text-[10px] text-white/40">Automatic hold triggered on card token.</p>
                  </div>

                  {/* Sanctions Match Card */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col justify-between min-h-[160px] hover:border-brand-lime/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider">
                      <span>OFAC SDN Ingestion</span>
                      <Globe className="w-3.5 h-3.5 text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-manrope">Sanctions Match Found</h4>
                      <span className="text-xs text-red-400 font-extrabold block mt-1">98.2% Identity Match</span>
                    </div>
                    <p className="text-[10px] text-white/40">Extracted customer data flagged for sanction check.</p>
                  </div>

                  {/* Document Fraud Card */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col justify-between min-h-[160px] hover:border-brand-lime/30 transition-all duration-300">
                    <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider">
                      <span>Document Verification</span>
                      <FileCheck className="w-3.5 h-3.5 text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white font-manrope">Fake ID Forensics Active</h4>
                      <span className="text-xs text-amber-400 font-extrabold block mt-1">MRZ Checksum Failure</span>
                    </div>
                    <p className="text-[10px] text-white/40">Tampering signature found in document exif metadata.</p>
                  </div>

                  {/* Graph Ring Visualization */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex flex-col justify-between min-h-[160px] hover:border-brand-lime/30 transition-all duration-300 lg:col-span-2">
                    <div className="flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-wider">
                      <span>Graph Ring Network</span>
                      <Layers className="w-3.5 h-3.5 text-brand-lime" />
                    </div>
                    <div className="flex items-center gap-6 my-2">
                      <div className="flex -space-x-3">
                        <div className="w-9 h-9 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-[10px] font-bold text-brand-lime">D1</div>
                        <div className="w-9 h-9 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-[10px] font-bold text-brand-lime">D2</div>
                        <div className="w-9 h-9 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-[10px] font-bold text-brand-lime">D3</div>
                      </div>
                      <div className="text-xs text-white/70">
                        <span className="font-bold block text-white">Fraud Ring Linked</span>
                        <span>3 devices shared same duplicate document ID</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-white/40">Shared credentials flagged across multi-account registrations.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PLATFORM SUMMARY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Unified Operations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[900px] tracking-tight">
              DeepSense Connects Every Risk Signal Into One Decision.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern financial crime does not happen in one place. A single fraud attempt may involve a stolen device, a fake document, a mule account, a risky beneficiary, a suspicious login, and a high-risk transaction. DeepSense connects these signals across your organization and turns them into real-time decisions your teams can act on.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Detection", desc: "Score transactions, detect anomalies, identify fraud rings, and block suspicious activity before losses occur.", icon: <Shield className="w-5 h-5" /> },
                { title: "AML Monitoring", desc: "Monitor transactions, detect structuring, identify mule activity, screen sanctions, and manage suspicious activity workflows.", icon: <Building2 className="w-5 h-5" /> },
                { title: "Document Fraud & KYC", desc: "Verify documents, validate MRZ, detect tampering, compare faces, check liveness, and uncover synthetic identities.", icon: <FileCheck className="w-5 h-5" /> },
                { title: "Account Takeover Protection", desc: "Detect suspicious logins, credential abuse, new-device risk, session hijacking, and behavioral anomalies.", icon: <Fingerprint className="w-5 h-5" /> },
                { title: "Payment Fraud", desc: "Detect APP scams, CNP fraud, NFC fraud, token abuse, bonus abuse, friendly fraud, and chargeback misuse.", icon: <Wallet className="w-5 h-5" /> },
                { title: "Enterprise Risk & GRC", desc: "Monitor controls, DLP violations, procurement risk, third-party exposure, regulatory evidence, and audit readiness.", icon: <FileSpreadsheet className="w-5 h-5" /> }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 flex flex-col gap-6 group">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{card.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: HOW THE PLATFORM WORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Platform Pipelines</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-24 max-w-[850px] tracking-tight">
              From Raw Event to Risk Decision in Milliseconds.
            </h2>

            {/* Horizontal pipeline representation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-full text-left relative">
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0" />
              
              {[
                { title: "1. Ingest", desc: "Send transactions, login events, documents, wallet activity, vendor data, behavioral telemetry, screening requests, or payment events through APIs, webhooks, or streams." },
                { title: "2. Enrich", desc: "DeepSense adds device intelligence, IP reputation, customer history, graph links, sanctions context, document signals, merchant risk, and behavioral patterns." },
                { title: "3. Score", desc: "Rules, machine learning, anomaly detection, graph analytics, AML screening, document intelligence, and domain-specific engines calculate risk." },
                { title: "4. Decide", desc: "Return allow, review, block, step-up MFA, hold payment, revoke session, reject onboarding, or create case." },
                { title: "5. Investigate", desc: "DeepSense creates alerts, cases, evidence timelines, explanations, analyst tasks, audit trails, and regulatory workflows." },
                { title: "6. Learn", desc: "Case outcomes, analyst feedback, simulations, rule analytics, and risk profiles improve future decisions." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col gap-6 relative z-10 group">
                  <div className="w-20 h-20 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center shadow-lg group-hover:border-brand-lime transition-all duration-300">
                    <span className="text-xl font-bold text-neutral-900 group-hover:text-brand-lime">{idx + 1}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{step.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CORE PRODUCT MODULES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Matrix</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                A Full Financial Crime Intelligence Stack.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: "Real-Time Fraud Detection", desc: "Detect suspicious transactions, velocity spikes, unusual amounts, risky merchants, mule activity, and account abuse.", icon: <Shield /> },
                { title: "AML Transaction Monitoring", desc: "Identify structuring, rapid movement, pass-through accounts, mule networks, suspicious counterparties, and high-risk jurisdictions.", icon: <Building2 /> },
                { title: "Sanctions, PEP & Watchlist Screening", desc: "Screen customers, vendors, counterparties, documents, and transactions against global and internal risk sources.", icon: <Globe /> },
                { title: "Document Fraud Detection", desc: "Detect fake IDs, manipulated PDFs, invalid MRZ checksums, duplicate documents, face mismatch, failed liveness, and deepfake risk.", icon: <FileCheck /> },
                { title: "Account Takeover Prevention", desc: "Monitor logins, sessions, devices, behavioral signals, credential attacks, and suspicious access patterns.", icon: <Fingerprint /> },
                { title: "Payment Fraud Intelligence", desc: "Protect CNP payments, NFC transactions, wallets, tokens, APP payments, chargebacks, refunds, and promotions.", icon: <Wallet /> },
                { title: "Graph Intelligence", desc: "Uncover fraud rings, shared devices, mule networks, duplicate identities, risky beneficiaries, and connected entities.", icon: <Layers /> },
                { title: "Case Management", desc: "Manage alerts, evidence, analyst notes, escalations, resolutions, audit logs, and regulatory report workflows.", icon: <Terminal /> },
                { title: "Enterprise Risk & GRC", desc: "Monitor controls, DLP, procurement risk, third-party risk, regulatory frameworks, compliance evidence, and enterprise risk posture.", icon: <FileSpreadsheet /> }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[40px] hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col gap-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                    {mod.icon}
                  </div>
                  <div className="space-y-3 relative z-10">
                    <h4 className="text-xl font-bold font-manrope text-neutral-900">{mod.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: UNIFIED RISK ENGINE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Unified Signal Engine</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                    One Risk Engine Across Fraud, AML, Identity, Payments, and Compliance.
                  </h2>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed mt-2">
                    Instead of running disconnected tools for fraud, AML, KYC, payment risk, and compliance, DeepSense creates a unified risk profile for every customer, account, device, document, wallet, vendor, merchant, and transaction.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Signal Inputs list */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Signal Inputs</span>
                    <ul className="space-y-2 text-xs text-zinc-500 font-inter">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Transaction anomaly</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> New device login</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Sanctions watch hit</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Invalid document MRZ</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Duplicate document</li>
                    </ul>
                  </div>

                  {/* Decision Outputs list */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Action Outputs</span>
                    <ul className="space-y-2 text-xs text-zinc-500 font-inter">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Decisive risk score</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Reason threat codes</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Allow / Block action</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Case queue created</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lime" /> Audit trail entry</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Risk Score Breakdown Widget Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-10 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <h4 className="text-white text-sm font-bold font-manrope">RISK ENGINE: SCORE DECOMPOSITION</h4>
                    <span className="text-brand-lime text-[10px] font-bold uppercase tracking-wider">Calculated: 94/100</span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { name: "Custom Fraud Rules Engine", pct: 25, color: "bg-brand-lime" },
                      { name: "Machine Learning Risk Score", pct: 20, color: "bg-indigo-500" },
                      { name: "AML watchlists & Sanctions", pct: 15, color: "bg-red-500" },
                      { name: "Graph Rings & Identity Links", pct: 15, color: "bg-amber-500" },
                      { name: "Device Forensics & Metadata", pct: 10, color: "bg-purple-500" },
                      { name: "Document Tamper Verification", pct: 10, color: "bg-blue-500" },
                      { name: "Behavioral Typing & Biometrics", pct: 5, color: "bg-teal-500" }
                    ].map((row, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-inter">
                          <span className="text-white/70">{row.name}</span>
                          <span className="text-white font-extrabold">{row.pct}% weighting</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: WHY TEAMS USE DEEPSENSE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">User Personas</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built for Teams That Need Speed, Accuracy, and Control.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: "Fraud Teams", desc: "Detect fraud faster, reduce false positives, investigate cases, and stop losses before they clear.", icon: <Shield /> },
                { title: "AML Teams", desc: "Monitor suspicious activity, screen watchlists, manage cases, and generate audit-ready reports.", icon: <Building2 /> },
                { title: "Risk Teams", desc: "Prioritize high-risk entities, monitor exposure, track trends, and coordinate risk response.", icon: <TrendingDown /> },
                { title: "Compliance Teams", desc: "Collect evidence, manage controls, review reports, and maintain audit-ready workflows.", icon: <FileSpreadsheet /> },
                { title: "Security Teams", desc: "Detect account takeover, UEBA anomalies, data leakage, suspicious access, and SIEM-exportable events.", icon: <Lock /> },
                { title: "Operations Teams", desc: "Centralize cases, alerts, tasks, investigations, and customer risk decisions.", icon: <Activity /> }
              ].map((team, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-neutral-900">
                    {team.icon}
                  </div>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{team.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: DEPLOYMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Deployment Matrix</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-20 max-w-[850px] tracking-tight">
              Deploy DeepSense Your Way.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-16">
              {[
                { title: "Cloud SaaS", desc: "Launch quickly with DeepSense hosted infrastructure, managed updates, and scalable cloud operations." },
                { title: "Private Cloud", desc: "Deploy in your AWS, Azure, or GCP environment with tighter data control and enterprise configuration." },
                { title: "On-Premise", desc: "Run DeepSense inside your own infrastructure for banks, governments, and regulated institutions." },
                { title: "Air-Gapped", desc: "Support high-security environments where outbound connectivity is restricted or unavailable." }
              ].map((opt, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-md transition-all">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{opt.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>

            {/* Deployment Graphic Illustration */}
            <div className="w-full bg-neutral-950 p-6 rounded-[32px] border border-white/5 shadow-2xl flex flex-col md:flex-row justify-around gap-6 items-center max-w-[1000px] text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-lime">SAAS CLOUD</span>
              <div className="w-2 h-2 rounded-full bg-white/10 hidden md:block" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">CUSTOMER VPC (AWS/AZURE)</span>
              <div className="w-2 h-2 rounded-full bg-white/10 hidden md:block" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">ON-PREM DATA CENTER</span>
              <div className="w-2 h-2 rounded-full bg-white/10 hidden md:block" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">AIR-GAPPED ENVIRONMENT</span>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SECURITY & COMPLIANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Security</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Regulated Environments.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for financial institutions and regulated organizations that require strong governance, auditability, and operational control.
              </p>
            </div>

            {/* Right grid: 9 security points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-left">
              {[
                "Multi-tenant data isolation", "Role-based access control", "Audit logging",
                "Encryption at rest & transit", "Provider-secret masking", "Webhook signing",
                "Data retention controls", "Privacy / deletion flows", "Regulatory evidence tracking"
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[11px] font-bold font-manrope text-neutral-950 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INTEGRATIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Ecosystem Connectivity</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-16">
              Connect to Your Existing Risk and Security Stack.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-[1150px] mx-auto">
              {[
                "Core banking systems", "Payment processors", "Card networks", "KYC providers",
                "OCR providers", "Biometric providers", "SIEM platforms", "Data warehouses",
                "Webhook consumers", "Regulatory gateways", "Cloud object storage",
                "Redis / Celery workers", "Stripe billing"
              ].map((group, idx) => (
                <div key={idx} className="px-6 py-4 bg-zinc-50 border border-zinc-200/60 rounded-full flex items-center gap-2.5 hover:bg-white hover:shadow-lg hover:border-brand-lime/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span className="text-xs font-bold tracking-tight text-neutral-900">{group}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: PRODUCT PREVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-neutral-900 text-white rounded-[60px] mx-4 my-10 overflow-hidden relative border border-white/5 shadow-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <span className="text-brand-lime font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Operational Center</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-center leading-tight mb-20">
              A Single Workspace for Every Risk Decision.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              {/* Left Column: List of Dashboard panels */}
              <div className="lg:col-span-5 flex flex-col gap-4 bg-white/5 border border-white/10 p-8 rounded-[36px] backdrop-blur-md">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-2">Workspace Interfaces</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Live Fraud Alerts", "AML Case Queue", "Document Reviews", "ATO Sessions", 
                    "Graph Rings", "NFC Risk", "Chargebacks", "Control Findings", 
                    "Vendor Risk", "DLP Violations", "Regulatory Reports"
                  ].map((panel, idx) => (
                    <div key={idx} className="p-3.5 bg-black/40 rounded-2xl border border-white/5 flex items-center gap-2.5 hover:border-brand-lime/20 hover:bg-black/60 transition-all cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-brand-lime" />
                      <span className="text-[12px] font-bold tracking-tight text-white/80">{panel}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Stat tiles */}
              <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {[
                    { label: "Real-time decisions", value: "Sub-100ms API Scoring", sub: "Score logins, payments, and document verification inline" },
                    { label: "Unified risk profiles", value: "Cross-Engine Synthesis", sub: "Merge fraud rules, graph data, and sanctions monitoring" },
                    { label: "Audit-ready evidence", value: "Regulatory Compliance", sub: "Generate instant SAR reports and controls findings exfiltration" },
                    { label: "Cross-domain case management", value: "Central Triage Workspace", sub: "Equip analysts with shared alerts, timelines, and notes" }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-8 bg-black/30 rounded-[32px] border border-white/5 flex flex-col justify-between min-h-[160px]">
                      <h4 className="text-xl font-bold font-manrope text-white tracking-tight">{stat.label}</h4>
                      <div className="space-y-1 mt-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-lime block">{stat.value}</span>
                        <p className="text-[10px] text-white/40 font-inter mt-1 leading-relaxed">{stat.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Reference Desk</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense?", 
                  a: "DeepSense is an enterprise fraud, AML, identity, payment risk, and compliance intelligence platform." 
                },
                { 
                  q: "Is DeepSense only for fraud detection?", 
                  a: "No. DeepSense also supports AML monitoring, document fraud detection, KYC, account takeover prevention, payment fraud, procurement risk, DLP, GRC, and case management." 
                },
                { 
                  q: "Can DeepSense make real-time decisions?", 
                  a: "Yes. DeepSense is designed for inline risk scoring and can return allow, review, block, step-up, hold, revoke, or case-creation decisions." 
                },
                { 
                  q: "Does DeepSense support document fraud detection?", 
                  a: "Yes. It supports OCR, MRZ validation, metadata forensics, duplicate detection, biometrics, liveness, deepfake detection, and KYC screening." 
                },
                { 
                  q: "Can DeepSense be deployed on-premise?", 
                  a: "Yes. DeepSense supports SaaS, private cloud, customer VPC, on-premise, and air-gapped deployment models." 
                },
                { 
                  q: "Does DeepSense integrate with existing systems?", 
                  a: "Yes. DeepSense is API-first and supports webhooks, SIEM integrations, provider integrations, regulatory exports, and enterprise workflows." 
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
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to unify financial crime intelligence?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Bring fraud, AML, identity, and risk <br />
                <span className="text-white/40">into one decisioning platform.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                See how DeepSense helps organizations detect threats faster, reduce losses, automate investigations, and manage compliance from one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/resources/documentation" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                View API Docs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

// Simple Logo indicator dot component helper
function LogoDot() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
      <div className="w-1.5 h-1.5 rounded-full bg-brand-lime/50" />
      <div className="w-1 h-1 rounded-full bg-brand-lime/20" />
    </div>
  );
}
