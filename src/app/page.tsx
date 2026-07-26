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
  Link as LinkIcon,
  Fingerprint,
  Smartphone
} from "lucide-react";

export default function Home() {
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
          {/* Subtle neon gradient background blobs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none" />
          {/* Background grid pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />

          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Centered Hero Content */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">

              <h1 className="text-4xl md:text-6xl lg:text-[76px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Fraud, Verify Identity, <br />
                <span className="text-zinc-400">and Stop Financial Crime in Real Time.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed mt-2">
                DeepSense unifies transaction fraud detection, AML monitoring, document fraud detection, KYC verification, behavioral intelligence, payment risk, GRC, and case management into one enterprise-grade platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-lime/15 text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/overview" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Platform
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 w-full max-w-[650px] mx-auto">
                <p className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider mb-2">
                  Built for High-Risk and Regulated Sectors
                </p>
                <p className="text-zinc-500 text-xs font-inter leading-relaxed">
                  Built for banks, fintechs, payment processors, crypto platforms, e-commerce, telecom wallets, and regulated enterprises.
                </p>
              </div>
            </div>

            {/* Visual Column below it — Centered 7 Premium Interactive Visual Cards Grid */}
            <div className="w-full mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {/* Card 1: Document Fraud Signal */}
                <div className="bg-neutral-900 text-white p-6 rounded-[24px] border border-white/5 shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-brand-lime">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Forensics active</span>
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg font-bold font-manrope">Document Fraud Signal</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed">Suspicious editing tool signature identified in uploaded document metadata.</p>
                </div>

                {/* Card 2: MRZ Check Failed */}
                <div className="bg-red-50 border border-red-100 p-6 rounded-[24px] shadow-sm hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-red-600">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Passport Validation</span>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 font-manrope">MRZ Check Failed</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">Invalid MRZ line 2 checksum calculation. Document rejected.</p>
                </div>

                {/* Card 3: Face Match Risk */}
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-[24px] shadow-sm hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-amber-600">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Biometric Check</span>
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[8px] font-bold uppercase rounded">Fail</span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 font-manrope">Face Match Risk: High</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">Portrait on ID card does not match selfie biometrics. Potential deepfake injection detected.</p>
                </div>

                {/* Card 4: Sanctions Match */}
                <div className="bg-neutral-900 text-white p-6 rounded-[24px] border border-white/5 shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3 lg:col-span-2">
                  <div className="flex justify-between items-center text-brand-lime">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Sanctions Watch</span>
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg font-bold font-manrope">Sanctions Match Found</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed">Extracted document name matched OFAC SDN listing. Onboarding held.</p>
                </div>

                {/* Card 5: APP Scam Detected */}
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-[24px] shadow-sm hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-amber-600">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Payment Warning</span>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 font-manrope">APP Scam Detected</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">Authorized push scam flags triggered for beneficiary account.</p>
                </div>

                {/* Card 6: ATO Session Blocked */}
                <div className="bg-indigo-900 text-white p-6 rounded-[24px] border border-indigo-800 shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col gap-3 lg:col-span-2">
                  <div className="flex justify-between items-center text-indigo-300">
                    <span className="text-[9px] uppercase font-bold tracking-widest">Session Risk</span>
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-lg font-bold font-manrope">ATO Session Blocked</h4>
                  <p className="text-[11px] text-indigo-200/70 leading-relaxed">Suspicious device-fingerprint swap and abnormal typing biometrics halted.</p>
                </div>

                {/* Card 7: Risk Score */}
                <div className="bg-neutral-900 text-white p-6 rounded-[24px] border border-white/5 shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-center gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-brand-lime">Risk Engine</span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <h4 className="text-3xl font-black font-manrope italic">Risk Score: 94/100</h4>
                  <p className="text-xs text-white/50 leading-relaxed">Integrated signals generated high-confidence threat score.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Legacy System Problem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-20 max-w-[850px] tracking-tight">
              Financial Crime Has Outgrown Traditional Fraud Tools.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                {
                  title: "Fraud is cross-channel",
                  desc: "Criminals move across payments, accounts, devices, documents, wallets, merchants, and identities.",
                  icon: <Activity className="w-5 h-5" />
                },
                {
                  title: "AML teams are overloaded",
                  desc: "Suspicious activity, sanctions hits, PEP exposure, and regulatory workflows are often disconnected.",
                  icon: <Globe className="w-5 h-5" />
                },
                {
                  title: "Identity fraud is evolving",
                  desc: "Synthetic identities, deepfakes, fake documents, mule accounts, and multi-account abuse bypass simple checks.",
                  icon: <UserCheck className="w-5 h-5" />
                },
                {
                  title: "Risk systems are fragmented",
                  desc: "Fraud, AML, compliance, security, procurement, and GRC teams often work from separate tools.",
                  icon: <Settings className="w-5 h-5" />
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 border border-gray-100">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{card.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Premium Quote Callout */}
            <div className="mt-20 w-full max-w-[1000px] bg-neutral-900 text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-lime/10 blur-3xl rounded-full" />
              <p className="text-2xl md:text-4xl font-extrabold font-manrope tracking-tight leading-tight italic max-w-[700px] mx-auto text-white/90">
                “DeepSense connects every signal into one risk decision.”
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Title and Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">The DeepSense Solution</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  One Platform for Fraud, AML, Identity, Payments Risk, and Compliance.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense combines machine learning, rules, graph intelligence, behavioral analytics, document verification, sanctions screening, and case workflows to detect risk before losses happen.
                </p>
              </div>

              {/* Right Pillars Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {[
                  {
                    t: "Real-Time Decisioning",
                    d: "Score payments, logins, documents, wallets, vendors, and customers instantly.",
                    icon: <Zap className="w-5 h-5" />
                  },
                  {
                    t: "Unified Risk Intelligence",
                    d: "Connect fraud, AML, identity, device, graph, and compliance signals into one profile.",
                    icon: <Database className="w-5 h-5" />
                  },
                  {
                    t: "Investigation Workflow",
                    d: "Create alerts, cases, evidence timelines, analyst actions, and audit trails automatically.",
                    icon: <Activity className="w-5 h-5" />
                  },
                  {
                    t: "Enterprise Governance",
                    d: "Monitor controls, regulatory reports, third-party risk, DLP, and policy compliance.",
                    icon: <Settings className="w-5 h-5" />
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] hover:bg-white hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-neutral-900">
                      {pillar.icon}
                    </div>
                    <h4 className="text-lg font-bold font-manrope text-neutral-900">{pillar.t}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{pillar.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: PLATFORM MODULES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Matrix</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built Across the Entire <span className="text-zinc-400">Risk Lifecycle.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Fraud Detection",
                  desc: "Transaction fraud, CNP fraud, APP scams, NFC fraud, friendly fraud, bonus abuse.",
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  title: "Document Fraud & KYC",
                  desc: "Fake IDs, OCR extraction, MRZ validation, metadata forensics, biometrics, liveness, deepfake detection, and synthetic identity signals.",
                  icon: <UserCheck className="w-5 h-5" />
                },
                {
                  title: "AML Monitoring",
                  desc: "Sanctions, PEP, adverse media, transaction monitoring, mule detection, STR/SAR/CTR workflows.",
                  icon: <Globe className="w-5 h-5" />
                },
                {
                  title: "Identity & Access Risk",
                  desc: "Account takeover, behavioral biometrics, device fingerprinting, session risk, adaptive challenges.",
                  icon: <Fingerprint className="w-5 h-5" />
                },
                {
                  title: "Graph Intelligence",
                  desc: "Fraud rings, mule networks, shared devices, shared beneficiaries, duplicate documents, and multi-account abuse.",
                  icon: <Database className="w-5 h-5" />
                },
                {
                  title: "Enterprise Risk & GRC",
                  desc: "Controls monitoring, DLP, procurement fraud, third-party risk, SOX/PCI/ISO/GDPR reporting.",
                  icon: <FileSpreadsheet className="w-5 h-5" />
                }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-10 rounded-[40px] hover:shadow-2xl hover:shadow-indigo-50/50 hover:border-indigo-100 transition-all duration-300 flex flex-col gap-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                    {mod.icon}
                  </div>
                  <div className="space-y-3 relative z-10">
                    <h4 className="text-xl font-bold font-manrope text-neutral-900">{mod.title}</h4>
                    <p className="text-sm text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Workflow Engineering</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-24 max-w-[800px] tracking-tight">
              From Signal to Decision <span className="text-zinc-400">in Milliseconds.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-full text-left relative">
              {/* Connector line for large screens */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0" />

              {[
                { title: "1. Ingest", desc: "Send transactions, logins, documents, wallet events, screening requests, vendor data, or behavioral telemetry." },
                { title: "2. Enrich", desc: "DeepSense adds device, IP, graph, identity, sanctions, merchant, terminal, and behavioral context." },
                { title: "3. Score", desc: "Rules, ML, anomaly detection, graph analytics, AML screening, and domain engines calculate risk." },
                { title: "4. Decide", desc: "Return allow, review, block, step-up, hold payment, revoke session, or create case." },
                { title: "5. Investigate", desc: "Alerts, cases, evidence, explanations, timelines, and regulatory reports are created automatically." },
                { title: "6. Learn", desc: "Feedback, case outcomes, rules, simulations, and risk profiles improve future decisions." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col gap-6 relative z-10 group">
                  <div className="w-20 h-20 bg-white border-2 border-zinc-100 rounded-full flex items-center justify-center shadow-lg group-hover:border-brand-lime transition-all duration-300">
                    <span className="text-xl font-bold text-neutral-900 group-hover:text-brand-lime transition-colors">{idx + 1}</span>
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

        {/* ================= SECTION 6: FRAUD COVERAGE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Comprehensive Shield</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Detect Modern Fraud <span className="text-zinc-400">Across Every Channel.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: "Account Takeover", desc: "Detect credential stuffing, new-device logins, impossible travel, session hijacking, and MFA abuse." },
                { title: "APP Scams", desc: "Identify risky beneficiaries, mule accounts, payment manipulation, scam typologies, and intervention triggers." },
                { title: "CNP Fraud", desc: "Stop stolen-card use, card testing, bot checkout, BIN mismatch, 3DS failure, and shipping anomalies." },
                { title: "NFC & Wallet Fraud", desc: "Detect token replay, wallet provisioning abuse, relay attacks, rogue terminals, and contactless velocity spikes." },
                { title: "Synthetic Identity", desc: "Find fake identities, duplicate documents, reused faces, suspicious devices, and thin-file profiles." },
                { title: "Friendly Fraud", desc: "Detect chargeback abuse, refund abuse, return abuse, delivery disputes, and customer misuse patterns." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  <div className="flex flex-col gap-4">
                    <div className="w-1.5 h-8 bg-brand-lime rounded-full" />
                    <h4 className="text-lg font-bold font-manrope text-neutral-900">{card.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ADDED DEDICATED SECTION: DOCUMENT FRAUD & IDENTITY VERIFICATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-[900px] mx-auto mb-20 flex flex-col items-center">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-4">Forensic ID Verification</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-6">
                Document Fraud & Identity Verification
              </h2>
              <p className="text-lg text-brand-lime font-bold font-manrope uppercase tracking-wider mb-6">
                Stop fake identities before they enter your platform.
              </p>
              <p className="text-base text-zinc-600 font-inter leading-relaxed max-w-[800px]">
                DeepSense verifies identity documents, extracts trusted data, detects tampering, validates MRZ checksums, compares faces, checks liveness, and screens extracted identities against sanctions, PEP, adverse media, and internal watchlists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
              {[
                {
                  title: "OCR & Field Extraction",
                  desc: "Extract names, dates of birth, document numbers, expiry dates, addresses, and nationality from passports, IDs, bank statements, invoices, and proof-of-address documents.",
                  icon: <Terminal className="w-5 h-5" />
                },
                {
                  title: "MRZ & Document Validation",
                  desc: "Validate passport MRZ checksums, expiry dates, issuing countries, document numbers, and field consistency.",
                  icon: <FileCheck className="w-5 h-5" />
                },
                {
                  title: "Tampering & Metadata Forensics",
                  desc: "Detect suspicious editing tools, PDF manipulation, EXIF inconsistencies, duplicate compression, and altered document metadata.",
                  icon: <Eye className="w-5 h-5" />
                },
                {
                  title: "Duplicate Document Detection",
                  desc: "Find reused documents, duplicate IDs, repeated document numbers, near-duplicate images, and identity reuse across multiple accounts.",
                  icon: <Database className="w-5 h-5" />
                },
                {
                  title: "Face Match & Liveness",
                  desc: "Compare document portraits to selfies, detect failed liveness, selfie reuse, replay attacks, and deepfake risk.",
                  icon: <UserCheck className="w-5 h-5" />
                },
                {
                  title: "KYC + AML Screening",
                  desc: "Screen extracted names, dates of birth, documents, nationalities, and addresses against sanctions, PEP, adverse media, and organization watchlists.",
                  icon: <Globe className="w-5 h-5" />
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] hover:bg-white hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col gap-6">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-neutral-900">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{card.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/product/document-fraud" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full font-bold text-base font-manrope hover:bg-brand-lime/90 transition-all hover:scale-105 active:scale-95 shadow-xl inline-flex items-center gap-3">
                Explore Document Fraud Detection
                <ArrowRight className="w-4 h-4 text-neutral-900" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: AML & COMPLIANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Suite</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                AML Monitoring Built Into the Risk Engine.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense screens customers, counterparties, transactions, vendors, and extracted document identities against global and internal risk sources.
              </p>
            </div>

            {/* Right Capabilities Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                { title: "Sanctions Screening", desc: "OFAC, UN, EU, UK OFSI, OpenSanctions, and organization watchlists." },
                { title: "PEP & Adverse Media", desc: "Identify politically exposed persons, negative media, enforcement exposure, and high-risk entities." },
                { title: "Transaction Monitoring", desc: "Detect structuring, pass-through accounts, mule networks, rapid in/out movement, and suspicious activity." },
                { title: "Regulatory Reporting", desc: "Generate SAR, STR, CTR, XML/PDF exports, evidence packs, and audit-ready workflows." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-3">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: IDENTITY & DOCUMENT INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Identity Verification</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Verify Real Customers. <span className="text-zinc-400">Detect Fake Identities.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Document Fraud Detection", desc: "OCR, MRZ validation, metadata forensics, duplicate documents, tampering signals." },
                { title: "Biometric Risk", desc: "Face match, liveness, deepfake detection, selfie reuse, provider-backed checks." },
                { title: "Synthetic Identity", desc: "Cross-check identity attributes, device reuse, document reuse, behavior mismatch, and graph links." },
                { title: "KYC Screening", desc: "Screen extracted names, DOB, nationality, documents, and addresses against AML sources." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
                  <div className="w-1.5 h-8 bg-brand-lime rounded-full" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{card.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: ENTERPRISE RISK, GRC & CONTROLS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Continuous Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Beyond Fraud: <span className="text-zinc-400">Continuous Risk Governance.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Continuous Controls Monitoring", desc: "Automatically test controls, create findings, collect evidence, and track attestations." },
                { title: "GRC Frameworks", desc: "Map controls and evidence to SOX, PCI DSS, ISO 27001, SOC 2, GDPR, NIST CSF, and AML programs." },
                { title: "DLP Monitoring", desc: "Detect sensitive data exposure, bulk exports, API key leakage, PII/PCI/PHI findings, and exfiltration risk." },
                { title: "Third-Party Risk", desc: "Monitor vendor risk, procurement anomalies, supplier exposure, contracts, questionnaires, and SBOM risk." }
              ].map((card, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] hover:bg-white hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-neutral-900">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{card.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: DASHBOARD PREVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-neutral-900 text-white rounded-[60px] mx-4 my-10 overflow-hidden relative border border-white/5 shadow-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <span className="text-brand-lime font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Operational Center</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-center leading-tight mb-20">
              A Single Command Center <span className="text-white/40">for Risk Teams.</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              {/* Left Column: List of Dashboard panels with updated forensic list */}
              <div className="lg:col-span-5 flex flex-col gap-4 bg-white/5 border border-white/10 p-8 rounded-[36px] backdrop-blur-md">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-2">Workspace Interfaces</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Fraud Alerts", "AML Cases", "ATO Sessions", "Document Reviews", "KYC Risk Queue",
                    "Failed MRZ Checks", "Duplicate Documents", "Face Match Alerts", "Deepfake Signals", "Synthetic Identity Cases"
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                  {[
                    { label: "$4.2M blocked", value: "Real-time prevention", sub: "Saved platform cash flow" },
                    { label: "1,248 alerts reviewed", value: "Assigned & resolved", sub: "Under 12m triage avg" },
                    { label: "98.7% decision uptime", value: "High availability", sub: "Continuous latency audits" },
                    { label: "142 active cases", value: "Pending triage", sub: "Assigned to GRC experts" },
                    { label: "37 high-risk entities", value: "Held for review", sub: "Compliance watchlists" }
                  ].map((stat, idx) => (
                    <div key={idx} className={`p-8 bg-black/30 rounded-[32px] border border-white/5 flex flex-col justify-between min-h-[160px] ${idx === 4 ? "sm:col-span-2" : ""}`}>
                      <h4 className="text-2xl md:text-3xl font-black font-manrope text-white italic">{stat.label}</h4>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-lime block">{stat.value}</span>
                        <p className="text-[10px] text-white/30 font-inter">{stat.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Adaptation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Purpose-Built for <span className="text-zinc-400">High-Risk Industries.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Banks", desc: "Verify customers, detect synthetic identities, stop fake documents, and prevent mule onboarding.", icon: <Building2 className="w-5 h-5" /> },
                { title: "Fintechs", desc: "Secure onboarding with document fraud detection, liveness checks, KYC screening, and identity risk scoring.", icon: <Coins className="w-5 h-5" /> },
                { title: "Payment Processors", desc: "Detect CNP fraud, merchant risk, NFC fraud, token replay, chargebacks, and dispute abuse.", icon: <Wallet className="w-5 h-5" /> },
                { title: "E-commerce", desc: "Prevent bot checkout, promo abuse, payment fraud, friendly fraud, refund abuse, and fake accounts.", icon: <ShoppingBag className="w-5 h-5" /> },
                { title: "Crypto", desc: "Detect fake IDs, duplicate identities, sanctioned users, mule wallets, and risky onboarding flows.", icon: <Globe className="w-5 h-5" /> },
                { title: "Telecom Wallets", desc: "Detect SIM swap-linked wallet fraud, NFC payments, agent collusion, and cash-out networks.", icon: <Smartphone className="w-5 h-5" /> },
                { title: "Gaming & Betting", desc: "Stop multi-accounting, bonus abuse, fake KYC documents, duplicate IDs, and synthetic identities.", icon: <Activity className="w-5 h-5" /> },
                { title: "Enterprises", desc: "Monitor procurement fraud, vendor risk, DLP, UEBA, controls, and compliance posture.", icon: <Settings className="w-5 h-5" /> }
              ].map((uc, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-neutral-900">
                    {uc.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-manrope text-neutral-900">{uc.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: SECURITY & DEPLOYMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Headline */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Trust</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Ready by Design.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is engineered with rigorous architecture to handle institutional volumes with bank-grade security and isolation.
              </p>
            </div>

            {/* Right Column: Deployment Points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-left">
              {[
                { title: "Secure Multi-Tenancy", desc: "Every organization has isolated data, rules, users, billing, cases, and configurations.", icon: <Lock /> },
                { title: "Role-Based Access Control", desc: "Granular permissions for analysts, investigators, admins, compliance officers, and super admins.", icon: <Users /> },
                { title: "Audit Trails", desc: "Every decision, rule change, case update, report action, and sensitive event is logged.", icon: <Clock /> },
                { title: "Deployment Flexibility", desc: "Run DeepSense as SaaS, private cloud, customer VPC, on-premise, or air-gapped deployment.", icon: <Globe /> },
                { title: "Data Protection", desc: "Encryption, retention controls, redaction, privacy requests, audit evidence, and secure integrations.", icon: <Shield /> }
              ].map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-neutral-900 shrink-0 shadow-sm">
                    {pt.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-manrope text-neutral-900">{pt.title}</h4>
                    <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: INTEGRATIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Connected Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-16">
              Connect DeepSense to <span className="text-zinc-400">Your Existing Stack.</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-[1100px] mx-auto">
              {[
                "Core Banking", "Payment Processors", "Card Networks", "KYC Providers", "OCR Providers",
                "Biometric Providers", "SIEM Platforms", "Data Warehouses", "Webhook Consumers",
                "Stripe Billing", "SFTP / HTTPS Reporting", "Redis / Celery Workers", "Cloud Object Storage"
              ].map((item, idx) => (
                <div key={idx} className="px-6 py-3.5 bg-zinc-50 border border-zinc-200/60 rounded-full flex items-center gap-2.5 hover:bg-white hover:shadow-lg hover:border-brand-lime/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span className="text-xs font-bold tracking-tight text-neutral-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: SOCIAL PROOF ================= */}
        <section className="py-20 bg-zinc-50/50 px-6 md:px-12 lg:px-24 text-center border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-zinc-500 font-manrope text-sm font-extrabold uppercase tracking-wider mb-10">
              Built for modern fraud, AML, risk, and compliance teams.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1200px] mx-auto">
              {[
                "API-first", "Multi-tenant", "Real-time", "Audit-ready", "On-prem capable", "Provider-agnostic"
              ].map((badge, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-brand-lime mb-2" />
                  <span className="text-xs font-bold font-manrope text-neutral-950 uppercase tracking-widest">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />

            <div className="space-y-4 max-w-[700px] relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Ready to Unify Fraud, AML, <br />
                <span className="text-white/40">Identity, and Risk?</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                See how DeepSense helps financial institutions detect threats, reduce losses, automate compliance, and investigate risk from one platform.
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

        {/* ================= SECTION 16: FAQ ================= */}
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
                  a: "DeepSense is an enterprise risk intelligence platform for fraud detection, AML monitoring, identity verification, payment risk, GRC, and case management."
                },
                {
                  q: "Can DeepSense make real-time decisions?",
                  a: "Yes. DeepSense is designed for inline scoring and can return allow, review, block, step-up, hold, or case-creation decisions in under 100ms."
                },
                {
                  q: "Does DeepSense support AML?",
                  a: "Yes. It supports sanctions screening, PEP screening, adverse media, transaction monitoring, customer risk profiling, and regulatory reporting workflows."
                },
                {
                  q: "Does DeepSense support identity fraud?",
                  a: "Yes. It supports document fraud detection, OCR, MRZ validation, biometrics, liveness, deepfake detection, duplicate document detection, and synthetic identity signals."
                },
                {
                  q: "Can DeepSense detect account takeover?",
                  a: "Yes. It uses login telemetry, device intelligence, behavioral biometrics, credential abuse detection, session risk, and adaptive intervention policies."
                },
                {
                  q: "Can DeepSense be deployed on-premise?",
                  a: "Yes. DeepSense can run as SaaS, private cloud, customer VPC, on-premise, or air-gapped depending on customer requirements."
                },
                {
                  q: "Is DeepSense only for banks?",
                  a: "No. It supports banks, fintechs, payment companies, e-commerce, crypto, telecom wallets, gaming, insurance, and enterprise risk teams."
                },
                {
                  q: "Does DeepSense integrate with SIEM tools?",
                  a: "Yes. It can export risk and security events to SIEM systems through webhooks, CEF/LEEF/syslog, and connector-based integrations."
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

      </main>
      <Footer />
    </>
  );
}
