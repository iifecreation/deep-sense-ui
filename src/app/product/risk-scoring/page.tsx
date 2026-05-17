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
  Coins,
  ShoppingBag,
  Wallet,
  TrendingDown,
  Clock,
  FileSpreadsheet
} from "lucide-react";

export default function RiskScoringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Scoring dials state simulation
  const [currentScore, setCurrentScore] = useState<number>(91);
  const [confidence, setConfidence] = useState<number>(98);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Simulating live scoring engine updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScore(Math.floor(Math.random() * 20) + 75);
      setConfidence(Math.floor(Math.random() * 5) + 94);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                Unified Risk Decisioning Engine
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                One Risk Score Across Fraud, AML, <br />
                <span className="text-zinc-400">Identity, Payments, and Behavior.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense combines machine learning, rules, graph analytics, behavioral biometrics, AML intelligence, document fraud signals, and device risk into one explainable decision engine. We provide intelligent decision infrastructure, not just alerts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fraud Detection
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for institutions that require explainable, real-time, audit-ready risk decisions.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Unified Risk Score Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">UNIFIED RISK DECISION ENGINE</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">LATENCY: 38ms</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Big Score Dial & Output */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between items-center text-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Overall Central Risk Score</span>
                    
                    <div className="my-6 space-y-2">
                      <span className="text-6xl md:text-7xl font-black italic tracking-tighter text-brand-lime animate-pulse">
                        {currentScore}/100
                      </span>
                      <span className="block text-red-500 text-[10px] font-extrabold uppercase tracking-widest">• CRITICAL SCORE THREAT DETECTED</span>
                    </div>

                    <div className="w-full space-y-3">
                      <div className="flex justify-between text-xs text-white/60">
                        <span>Decision Confidence</span>
                        <span className="font-bold text-white">{confidence}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-white/60">
                        <span>System Output Status</span>
                        <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-black rounded uppercase tracking-widest">AUTO-BLOCKED</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Signal Weights & Contributions */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Scoring Factor Contributions</span>
                    
                    <div className="space-y-4">
                      {[
                        { label: "Graph Network Contribution", val: 82, color: "bg-brand-lime" },
                        { label: "AML watchlists Matching Check", val: 94, color: "bg-red-500" },
                        { label: "Document Exif Forensic Tampering", val: 89, color: "bg-amber-500" },
                        { label: "Device Emulators Profile Matching", val: 91, color: "bg-indigo-500" },
                        { label: "Behavioral Typology Deviations", val: 78, color: "bg-teal-500" }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1 text-xs">
                          <div className="flex justify-between text-white/80">
                            <span>{item.label}</span>
                            <span className="font-bold">{item.val}/100 Threat</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                          </div>
                        </div>
                      ))}
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Legacy System Issue</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Most Risk Systems Are Fragmented.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraud systems, AML monitoring, identity verification, payment risk, behavioral analytics, and compliance tools often operate independently. Analysts are forced to investigate disconnected alerts without unified context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Siloed Signals", desc: "Transaction risk, device risk, document fraud, sanctions matches, and account behavior are evaluated separately.", icon: <Layers /> },
                { title: "Inconsistent Decisions", desc: "Disconnected tools create conflicting risk outcomes and inconsistent customer experiences.", icon: <AlertTriangle /> },
                { title: "High False Positives", desc: "Rule-only systems lack contextual intelligence and overwhelm analysts with unnecessary reviews.", icon: <TrendingDown /> },
                { title: "Black-Box AI", desc: "Many ML systems cannot explain why a customer, payment, or session was blocked, creating compliance vulnerabilities.", icon: <Lock /> },
                { title: "Slow Investigations", desc: "Analysts waste time manually correlating alerts, transactions, graph entities, and supporting evidence across multiple screens.", icon: <Clock /> },
                { title: "Governance Gaps", desc: "Organizations struggle to manage thresholds, policy changes, approvals, and audit requirements safely.", icon: <FileSpreadsheet /> }
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

        {/* ================= SECTION 3: DEEPSENSE UNIFIED SCORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Our Synthesis Core</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[900px] tracking-tight">
              DeepSense Turns Every Signal Into One Decision.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense ingests signals across transactions, identities, devices, wallets, documents, merchants, sessions, and graph relationships to generate a unified, explainable risk score in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-20">
              {[
                { title: "Transaction Intelligence", desc: "Amounts, velocity, merchant behavior, geography, payment patterns, and transaction anomalies.", icon: <Wallet /> },
                { title: "AML Intelligence", desc: "Sanctions hits, PEP exposure, adverse media, structuring behavior, mule activity, and suspicious movement.", icon: <Building2 /> },
                { title: "Identity Intelligence", desc: "Document fraud, duplicate identities, synthetic identity indicators, liveness risk, and biometric anomalies.", icon: <FileCheck /> },
                { title: "Device Intelligence", desc: "New devices, rooted phones, emulators, VPN/TOR usage, spoofing indicators, and shared-device abuse.", icon: <Smartphone /> },
                { title: "Behavioral Biometrics", desc: "Typing cadence, navigation rhythm, checkout behavior, session anomalies, and behavioral deviations.", icon: <Fingerprint /> },
                { title: "Graph Intelligence", desc: "Fraud rings, linked entities, shared beneficiaries, connected merchants, wallet farms, and suspicious networks.", icon: <Layers /> },
                { title: "Payment Intelligence", desc: "CNP fraud, APP scams, NFC risk, token replay, wallet abuse, and chargeback behavior.", icon: <Coins /> },
                { title: "Enterprise Risk Signals", desc: "DLP findings, procurement anomalies, UEBA signals, policy violations, and controls failures.", icon: <FileSpreadsheet /> }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl border border-zinc-200/60 flex items-center justify-center text-neutral-900 shadow-xs">
                    {sig.icon}
                  </div>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sig.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: EXPLAINABLE AI ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Explainable AI Core</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Explainable Decisions, Not Black Boxes.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides transparent scoring explanations so analysts, compliance teams, auditors, and regulators understand exactly why risk decisions were made.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Central Score Breakdown", desc: "View how rules, ML, graph, AML, device, behavioral, and document signals contributed to the final score." },
                    { title: "Standardized Reason Codes", desc: "Generate reason codes such as duplicate_document, impossible_travel, or sanctions_match." },
                    { title: "Evidence Context Integration", desc: "Attach linked transactions, graph entities, documents, sessions, sanctions hits, and behavioral evidence." },
                    { title: "Transparent Confidence Levels", desc: "Distinguish between strong evidence, weak evidence, and insufficient-data conditions." }
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

              {/* Right Column: Score Explanation Panel Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <span className="text-white font-bold block text-sm">RISK EXPLANATION AUDIT PANEL</span>
                      <span className="text-[10px] text-zinc-400">Calculated Decision ID: DEC-7104</span>
                    </div>
                    <span className="text-brand-lime text-xs font-black">Score: 91/100</span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">Deterministic Rules Fired</span>
                      <span className="text-red-400 font-bold">+22 (impossible_travel)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">Graph Connected-Entity Risk</span>
                      <span className="text-red-400 font-bold">+18 (shared_device_abuse)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">Document Exif Metadata Forensics</span>
                      <span className="text-red-400 font-bold">+19 (mrz_checksum_failed)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">Machine Learning Threat Score</span>
                      <span className="text-red-400 font-bold">+14 (anomaly_velocity)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">AML PEP & Sanctions Screening</span>
                      <span className="text-red-400 font-bold">+12 (SDN_partial_match)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">Device Intelligence profile check</span>
                      <span className="text-red-400 font-bold">+11 (emulator_detected)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Behavioral Biometrics Deviation</span>
                      <span className="text-red-400 font-bold">+9 (non_human_speed)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: MULTI-LAYERED DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Defense Depth</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              A Multi-Layered Detection Stack.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines deterministic logic with adaptive intelligence to improve fraud detection accuracy while reducing false positives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-20">
              {[
                { title: "Rules Engine", desc: "Deterministic fraud rules with configurable thresholds, workflows, governance, and simulations." },
                { title: "Machine Learning", desc: "Supervised learning models score transactions, sessions, identities, and payment behavior." },
                { title: "Anomaly Detection", desc: "Isolation Forest and statistical analysis identify outliers and unusual activity patterns." },
                { title: "Graph Analytics", desc: "Connected-entity analysis reveals fraud rings, mule clusters, and duplicate identities." },
                { title: "Behavioral Intelligence", desc: "Behavioral biometrics identify abnormal users, session impersonation, and automated abuse." },
                { title: "AML Intelligence", desc: "Sanctions, PEP, adverse media, and suspicious movement patterns contribute to risk." },
                { title: "Device Risk", desc: "Device trust scoring detects spoofing, emulators, rooted phones, and multi-account abuse." }
              ].map((layer, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{layer.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>

            {/* Infographic: layered AI stack diagram */}
            <div className="w-full max-w-[800px] bg-neutral-950 p-8 rounded-[40px] text-white border border-white/5 shadow-3xl text-left relative overflow-hidden flex flex-col gap-4">
              <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">LAYERED SCORING PIPELINE DEPLOYMENT</span>
              
              <div className="flex flex-col gap-2.5">
                {[
                  "Layer 1: Rules & Custom Threshold policy",
                  "Layer 2: Supervised ML Scoring algorithms",
                  "Layer 3: Graph Rings connected clusters check",
                  "Layer 4: Behavioral Biometric rhythm profiles",
                  "Layer 5: Ingested AML Watchlist screening context"
                ].map((row, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white/80">{row}</span>
                    <span className="text-brand-lime text-[10px] font-mono">Running</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: DECISION ORCHESTRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Orchestration Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Automate Real-Time Risk Decisions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense converts risk scores into automated actions that reduce fraud while maintaining operational control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-16">
              {[
                { title: "Allow", desc: "Approve low-risk activity automatically with minimal friction." },
                { title: "Review", desc: "Escalate suspicious events to analysts with full evidence context." },
                { title: "Block", desc: "Prevent high-risk transactions, onboarding attempts, sessions, or wallet actions." },
                { title: "Hold", desc: "Pause transfers or payouts pending manual review." },
                { title: "Step-Up Authentication", desc: "Require MFA, liveness checks, biometrics, or document verification." },
                { title: "Session Revocation", desc: "Terminate compromised sessions or suspicious devices immediately." },
                { title: "Dynamic Policy Actions", desc: "Apply organization-specific actions based on thresholds, products, geographies, customer tiers, or channels." }
              ].map((dec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{dec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{dec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: POLICY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Policy Controls</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Govern Risk Policies Safely at Enterprise Scale.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides governance controls for policy changes, threshold management, simulations, approvals, and audit readiness.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Shadow Mode Testing", desc: "Test new rules and models against live traffic without impacting customer decisions." },
                    { title: "Immutable Versioning", desc: "Track every rule, threshold, model, and policy change historically." },
                    { title: "Approval Workflows", desc: "Require multi-step approvals before high-impact policy changes are deployed." },
                    { title: "Rollback Support", desc: "Instantly revert risky deployments or scoring changes." }
                  ].map((gov, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{gov.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{gov.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Policy Governance Dashboard Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <span className="text-white font-bold block text-sm">RULE REVISION HISTORY & AUDIT</span>
                      <span className="text-[10px] text-zinc-400">Active policy: v4.2.1 • Rollback ready</span>
                    </div>
                    <span className="px-2 py-0.5 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[8px] font-black rounded uppercase tracking-widest">SHADOW ACTIVE</span>
                  </div>

                  <div className="space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Rule 04: Velocity Check</span>
                      <span className="text-white font-bold">Updated by Mark R. (Pending approval)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Rule 12: impossible_travel</span>
                      <span className="text-white font-bold">Active in production • Version 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Model 02: ML Risk</span>
                      <span className="text-white font-bold">Shadow mode testing against live events</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: RISK PROFILES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Persistent Entities</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Persistent Risk Profiles Across Every Entity.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense continuously updates risk profiles for customers, accounts, devices, wallets, merchants, vendors, terminals, and beneficiaries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Customer Risk Profiles", desc: "Aggregate onboarding, transaction, AML, behavioral, and device risk over time." },
                { title: "Device Risk Profiles", desc: "Track spoofing indicators, linked accounts, abuse history, and trust levels." },
                { title: "Merchant Risk Profiles", desc: "Monitor dispute rates, fraud clusters, terminal anomalies, and suspicious activity." },
                { title: "Wallet & Token Profiles", desc: "Evaluate provisioning behavior, token replay, NFC abuse, and contactless risk." },
                { title: "Vendor Risk Profiles", desc: "Assess procurement exposure, invoice anomalies, sanctions hits, and third-party risk." }
              ].map((prof, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{prof.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{prof.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: REAL-TIME ARCHITECTURE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Resilient Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built for High-Volume, Real-Time Decisioning.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Low-Latency APIs", desc: "Score transactions and events in milliseconds, perfectly tuned for high-volume inline requests." },
                { title: "Event-Driven Pipelines", desc: "Full support for Kafka event streams, queues, webhooks, and asynchronous workflows." },
                { title: "Horizontal Scalability", desc: "Scale scoring workers, AML jobs, graph analytics, and case queue lookups independently." },
                { title: "Resilient Ingestion", desc: "Built-in retries, dead-letter queues, transaction idempotency, and fail-safe system logic." },
                { title: "Multi-Tenant Isolation", desc: "Strict organization-level boundaries separating customer data, scoring rules, and alert queues." },
                { title: "Flexible Deployment", desc: "Run DeepSense as SaaS, Private Cloud, Customer VPC, On-Premise, or Air-Gapped." }
              ].map((arch, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{arch.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{arch.desc}</p>
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
              A Central Command Center for Risk Decisions.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
              {/* Left Column Panels List */}
              <div className="lg:col-span-5 flex flex-col gap-4 bg-white/5 border border-white/10 p-8 rounded-[36px] backdrop-blur-md">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-2">Workspace Interfaces</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Unified Risk Scores", "Live Transactions", "Fraud Alerts", "AML Matches", 
                    "Behavioral Risk", "Graph Clusters", "Document Fraud", "ATO Sessions", 
                    "Payment Risk", "Cases"
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

        {/* ================= SECTION 11: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Trusted Across High-Risk Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Real-time transaction monitoring, APP scams, AML, sanctions, and ATO prevention.", icon: <Building2 /> },
                { title: "Fintech", desc: "Inline onboarding scoring, wallet risk, KYC intelligence, and fraud prevention.", icon: <Cpu /> },
                { title: "Payments", desc: "CNP fraud, NFC fraud, token intelligence, merchant risk, and chargeback analytics.", icon: <Wallet /> },
                { title: "E-Commerce", desc: "Checkout fraud, behavioral analytics, bot mitigation, and refund abuse detection.", icon: <ShoppingBag /> },
                { title: "Crypto & Web3", desc: "Wallet monitoring, sanctions exposure, graph risk, and suspicious transfer analysis.", icon: <Globe /> },
                { title: "Enterprises", desc: "Procurement risk, UEBA, DLP, GRC, controls monitoring, and third-party risk.", icon: <Briefcase /> }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-6 hover:shadow-xl hover:bg-white hover:border-brand-lime/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-zinc-100 flex items-center justify-center text-neutral-900 shadow-sm">
                    {ind.icon}
                  </div>
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Central FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What contributes to the DeepSense risk score?", 
                  a: "DeepSense combines rules, ML models, anomaly detection, graph analytics, device intelligence, AML signals, behavioral biometrics, document fraud signals, and payment intelligence." 
                },
                { 
                  q: "Are DeepSense decisions explainable?", 
                  a: "Yes. Every decision includes score breakdowns, reason codes, evidence context, and audit-ready explanations." 
                },
                { 
                  q: "Can organizations customize scoring thresholds?", 
                  a: "Yes. Organizations can configure thresholds, policies, workflows, interventions, and decision bands." 
                },
                { 
                  q: "Does DeepSense support shadow mode?", 
                  a: "Yes. New policies and models can be tested against live traffic without affecting production decisions." 
                },
                { 
                  q: "Can DeepSense score events in real time?", 
                  a: "Yes. DeepSense is optimized for low-latency, real-time decisioning across transactions, onboarding, sessions, and payments." 
                },
                { 
                  q: "Does the scoring engine integrate with AML and document fraud?", 
                  a: "Yes. AML, sanctions, PEP, document fraud, behavioral risk, and payment risk all contribute to unified scoring." 
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

        {/* ================= SECTION 13: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to unify your risk decisions?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Replace fragmented risk tools with <br />
                <span className="text-white/40">one explainable decisioning engine.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps organizations score fraud, AML, identity, payment, and behavioral risk in real time while maintaining transparency, governance, and operational control.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/rules-engine" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Rules Engine
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
