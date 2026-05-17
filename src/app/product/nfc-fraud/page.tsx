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
  Wifi,
  CreditCard,
  Target,
  FileSpreadsheet,
  Gauge
} from "lucide-react";

export default function NFCFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive E-commerce NFC Provisioning & Tap Risk Simulator States
  const [eventType, setEventType] = useState<string>("provisioning");
  const [tokenStatus, setTokenStatus] = useState<string>("fresh");
  const [cryptogramValid, setCryptogramValid] = useState<boolean>(true);
  const [terminalTrust, setTerminalTrust] = useState<string>("trusted");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Dynamic risk scoring calculations based on simulator controls
  const calculateRisk = () => {
    let score = 15;
    if (eventType === "provisioning") {
      score += 15;
      if (tokenStatus === "replayed") score += 35;
      if (!cryptogramValid) score += 20;
      if (terminalTrust === "rogue") score += 15;
    } else {
      score += 10;
      if (tokenStatus === "replayed") score += 40;
      if (!cryptogramValid) score += 30;
      if (terminalTrust === "rogue") score += 25;
    }
    
    score = Math.min(score, 99);
    
    let decision = "APPROVE";
    let color = "text-emerald-500";
    if (score >= 75) {
      decision = "DECLINE & SUSPEND TOKEN";
      color = "text-red-500";
    } else if (score >= 50) {
      decision = "STEP-UP (Biometric Challenge)";
      color = "text-amber-500";
    } else if (score >= 30) {
      decision = "HOLD FOR REVIEW";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculateRisk();

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
                <Wifi className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME NFC PAYMENT FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Stop Contactless Payment Fraud <br />
                <span className="text-zinc-400">Before Authorization</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense detects tap-to-pay fraud, wallet provisioning abuse, token replay attacks, rogue terminals, and high-risk NFC payment behavior in real time across mobile wallets, banking apps, telecom wallets, transit systems, and contactless payment ecosystems.
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
                  Trusted for real-time payment risk monitoring across banking, fintech, telecom wallets, transit payments, and digital commerce ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Advanced Animated Enterprise Payment-Risk Scene */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Contactless Payment Risk Control</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">EMV TOKEN AUTHORIZATION FLOW</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Payment Signals</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 block mb-2">Event Context</span>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: "provisioning", label: "Wallet Provisioning" },
                            { id: "tap_to_pay", label: "Tap-to-Pay" }
                          ].map((t) => (
                            <button 
                              key={t.id} 
                              onClick={() => setEventType(t.id)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${eventType === t.id ? "bg-red-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-zinc-500 block mb-2">Token Status</span>
                        <div className="grid grid-cols-2 gap-2">
                          {["fresh", "replayed"].map((tk) => (
                            <button 
                              key={tk} 
                              onClick={() => setTokenStatus(tk)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${tokenStatus === tk ? "bg-red-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {tk} Token
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">EMV Cryptogram Valid</span>
                        <input 
                          type="checkbox" 
                          checked={cryptogramValid} 
                          onChange={(e) => setCryptogramValid(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div>
                        <span className="text-zinc-500 block mb-2">POS Terminal Status</span>
                        <div className="grid grid-cols-2 gap-2">
                          {["trusted", "rogue"].map((term) => (
                            <button 
                              key={term} 
                              onClick={() => setTerminalTrust(term)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${terminalTrust === term ? "bg-red-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {term} Terminal
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE NFC TELEMETRY REAL-TIME</span>
                        <span>CHIP INTERFACE READY</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Gauge className="w-3.5 h-3.5 text-zinc-500" />
                            <span className="text-[9px] text-zinc-500 uppercase block">Device Trust Meter</span>
                          </div>
                          <span className="text-xs font-bold block text-zinc-300">Apple Pay (SE active)</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Fingerprint className="w-3.5 h-3.5 text-zinc-500" />
                            <span className="text-[9px] text-zinc-500 uppercase block">Token Risk Analysis</span>
                          </div>
                          <span className="text-xs font-bold block text-zinc-300">
                            {tokenStatus === "fresh" ? "Fresh token verified" : "Stale token replay flagged"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">NFC RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">DECISION RECOMMENDATION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{decision}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Secure Element validation: Active (Jailbreak: False)</span>
                      <span>PCI-Safe Tokenization Active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Contactless Vulnerability</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Contactless Payments Created New Fraud Attack Surfaces
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              As contactless payments accelerate globally, fraudsters increasingly exploit weaknesses in NFC ecosystems, wallet provisioning flows, mobile devices, transit systems, tokenization processes, and merchant terminals. Traditional fraud systems often cannot evaluate device trust, wallet provisioning legitimacy, token replay behavior, relay attack indicators, terminal compromise, cross-wallet fraud patterns, and behavioral anomalies during payment authorization. Modern payment fraud requires real-time behavioral, device, graph, and transaction intelligence working together before authorization decisions are finalized.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Wallet Provisioning Fraud", desc: "Fraudsters provision stolen cards into digital wallets using synthetic identities, compromised accounts, or social engineering attacks.", icon: <Smartphone /> },
                { title: "Token Replay Attacks", desc: "Attackers reuse stolen or intercepted payment tokens across devices, wallets, or merchant ecosystems.", icon: <Zap /> },
                { title: "Rogue POS Terminals", desc: "Compromised or fake terminals can facilitate fraudulent contactless transactions and relay attacks.", icon: <Server /> },
                { title: "Relay Attacks", desc: "Fraudsters relay NFC communication between victim devices and malicious terminals to bypass proximity requirements.", icon: <Activity /> },
                { title: "Telecom Wallet Abuse", desc: "Mobile money and telecom wallets face increasing account takeover, mule activity, and unauthorized wallet transfers.", icon: <Target /> },
                { title: "Transit Fraud", desc: "Transit systems processing high-volume tap transactions face replay abuse, wallet sharing, and payment bypass schemes.", icon: <Lock /> }
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

            {/* Legit vs Malicious NFC Relay Path Visualization */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">RELAY ATTACK THREAT PATHWAY</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-manrope">
                {/* Legit Path */}
                <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-3xl">
                  <span className="text-emerald-700 font-bold block mb-3 font-mono">LEGITIMATE CONTACTLESS PATH</span>
                  <div className="space-y-2 text-xs text-emerald-800">
                    <p>1. Cardholder phone initiates dynamic EMV session key generation inside secure element.</p>
                    <p>2. Physical proximity constraints verified via low NFC broadcast latency (&lt; 15ms).</p>
                    <p>3. Direct dynamic authorization approved by payment terminal.</p>
                  </div>
                </div>

                {/* Malicious Path */}
                <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
                  <span className="text-red-700 font-bold block mb-3 font-mono">MALICIOUS RELAY ATTACK PATH</span>
                  <div className="space-y-2 text-xs text-red-800">
                    <p>1. Fraudulent node intercepts phone NFC signal using dynamic relay proxy transmitters.</p>
                    <p>2. Signal relayed over network to rogue POS terminal miles away, causing transaction latency (&gt; 120ms).</p>
                    <p>3. DeepSense flags latency mismatch and suspends dynamic token before authorization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Contactless Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time NFC & Mobile Wallet Fraud Detection
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines payment intelligence, device trust, graph analysis, behavioral biometrics, token risk analysis, and transaction scoring into a unified contactless payment fraud platform. The platform evaluates every payment interaction in milliseconds using device intelligence, wallet trust analysis, EMV transaction telemetry, token risk scoring, behavioral anomalies, merchant risk profiling, graph intelligence, transaction correlation, relay attack indicators, and geospatial analysis. DeepSense enables payment providers to reduce fraud losses, stop wallet abuse, secure mobile payments, protect transit systems, strengthen authorization decisions, reduce false positives, and investigate payment fraud faster.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce fraud losses", desc: "Instantly identify replayed tokens and provisioning bypasses." },
                { title: "Stop wallet abuse", desc: "Block compromised devices and green path vulnerabilities." },
                { title: "Secure mobile payments", desc: "Keep contactless POS taps authentic and verified." },
                { title: "Protect transit systems", desc: "Block ticket farm and replay abuse at the turnstiles." },
                { title: "Strengthen auth decisions", desc: "Enrich authorization parameters with device secure enclave trust." },
                { title: "Speed investigations", desc: "Equip analysts with connected terminal and device graph metrics." }
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
              Enterprise NFC Fraud Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Wallet Provisioning Risk", desc: "Detect suspicious card enrollment, synthetic identity provisioning, rapid wallet creation, device mismatch, provisioning velocity, and compromised accounts." },
                { title: "Device Trust Intelligence", desc: "Analyze rooted/jailbroken devices, emulator detection, secure element trust, device spoofing, cloned devices, and trusted device history." },
                { title: "Token Replay Detection", desc: "Identify repeated token usage, abnormal token reuse, impossible token movement, cross-device token anomalies, and suspicious authorization patterns." },
                { title: "Rogue Terminal Detection", desc: "Monitor terminal fraud clusters, abnormal terminal velocity, merchant-terminal anomalies, compromised payment devices, and coordinated terminal abuse." },
                { title: "Relay Attack Analysis", desc: "Detect impossible proximity behavior, suspicious latency patterns, terminal-device inconsistencies, repeated relay indicators, and location anomalies." },
                { title: "Behavioral Payment Intel", desc: "Analyze payment timing, interaction behavior, mobile session anomalies, checkout behavioral changes, and customer payment rhythm." },
                { title: "Telecom Wallet Fraud", desc: "Protect against mobile wallet takeovers, SIM-swap linked fraud, rapid wallet cash-out, telecom mule activity, and wallet farm abuse." },
                { title: "Transit Payment Fraud", desc: "Detect repeated transit replay attempts, wallet sharing abuse, invalid authorization loops, transit token manipulation, and suspicious commuter patterns." },
                { title: "Real-Time Decisions", desc: "Decision outcomes: approve, review, decline, require MFA, step-up verification, temporary hold, create investigation case." },
                { title: "PCI-Conscious Token Arch", desc: "DeepSense never stores raw PAN, CVV, raw cryptograms, or magnetic stripe data. Only secure hashes, fingerprints, and tokenized references are retained." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Defense Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Contactless Payment Fraud
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Payment Ingestion", desc: "DeepSense ingests NFC transaction events, wallet provisioning events, device telemetry, merchant data, token metadata, and payment authorization requests." },
                { title: "Step 2 — Device Enrichment", desc: "The platform enriches transactions with device reputation, wallet trust score, behavioral history, geolocation intelligence, merchant risk profile, and graph relationships." },
                { title: "Step 3 — Risk Evaluation", desc: "DeepSense evaluates relay attack signals, token anomalies, wallet abuse patterns, payment velocity, cross-channel fraud indicators, and behavioral deviations." },
                { title: "Step 4 — Fraud Decisioning", desc: "The platform generates payment risk score, decision reason codes, explainable risk outcomes, and intervention recommendations." },
                { title: "Step 5 — Case Workflow", desc: "High-risk events automatically create fraud alerts, linked cases, graph evidence, transaction timelines, and wallet investigation flows." }
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

        {/* ================= SECTION 6: DETECTION & USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Deployment Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Modern Contactless Payment Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Select an ecosystem area below to explore how DeepSense optimizes risk decisions across networks.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Banking & Card Issuers" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Wallets" },
                { id: "transit", label: "Transit Systems" },
                { id: "merchants", label: "Merchants & Acquirers" }
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
            <div className="w-full bg-white border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left">
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect mobile banking wallets, tokenized cards, and tap-to-pay authorizations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    DeepSense integrates with issuer core networks to score mobile wallet creation, device binding events, and individual payment tokens. Ensure compromised card credentials are not provisioned onto fraudulent devices.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect wallet provisioning abuse, synthetic onboarding, and account takeover payments.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Identify neobank debit card spoofing and token reuse exploits. Verify device elements and secure enclave health signatures before provisioning cards.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor mobile money fraud, SIM-swap abuse, and wallet mule networks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Telecom and carrier wallets face massive velocity and SIM swap account takeovers. DeepSense evaluates phone carrier records and high-frequency transfers in real time.
                  </p>
                </div>
              )}
              {activeTab === "transit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent ticket replay abuse, unauthorized turnstile taps, and wallet sharing.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    High-volume transit gates require millisecond-level decision turnarounds. DeepSense handles high-velocity tap limits and prevents commuter token replication.
                  </p>
                </div>
              )}
              {activeTab === "merchants" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify rogue terminals, terminal collusion, and merchant fraud clusters.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Map out terminal farms and acquire metrics to spot suspicious acquiring behavior. Instantly flag terminals operating geographic travel anomalies.
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
              Unified With the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies NFC fraud scoring with our overarching graph, compliance, and case management suites.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Device Fingerprinting", desc: "Correlate trusted and suspicious payment devices." },
                { title: "Behavioral Biometrics", desc: "Analyze behavioral deviations during payment activity." },
                { title: "Graph Intelligence", desc: "Identify connected fraud rings, terminal abuse, and mule clusters." },
                { title: "Account Takeover Prevention", desc: "Detect payments linked to compromised sessions and identities." },
                { title: "AML Monitoring", desc: "Correlate suspicious payment behavior with financial crime typologies." },
                { title: "Case Management", desc: "Automatically escalate high-risk payment events for investigation." },
                { title: "Regulatory Reporting", desc: "Generate audit-ready payment fraud evidence." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Dashboard</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Payment Fraud Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "NFC Fraud Operations Dashboard", desc: "Live payment streams, turnstile tap velocities, geographic maps, and risk weight allocations." },
                { title: "Wallet Provisioning Analytics", desc: "Provisioning approval percentages, device age trends, SMS interception alerts, and onboarding anomalies." },
                { title: "Token Risk Intelligence", desc: "Suspicious token reuse profiles, issuer risk exposures, and counter status check statistics." },
                { title: "Terminal Risk Monitoring", desc: "Rogue terminal clusters, MCC category overrides, and geographic travel alerts." },
                { title: "Fraud Investigation Workspace", desc: "Transaction timelines, payment network cryptograms, device enclaves, and case notes." }
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
              Designed for High-Volume Payment Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure, real-time protection across globally scalable contactless architectures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banks", "Card Issuers", "Payment Processors", "Fintech Platforms", "Mobile Wallet Providers", "Telecom Wallet Operators",
                "Transit Payment Operators", "Acquirers", "Digital Commerce Platforms", "Super Apps", "Marketplaces", "Embedded Finance Platforms"
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
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">PCI Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Secure, Explainable, and Audit-Ready
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense uses secure, tokenized storage architecture designed to reduce exposure to sensitive payment data.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "PCI-Conscious Architecture", desc: "Tokenized storage architecture designed to reduce exposure to sensitive payment data." },
                { title: "Explainable Decisions", desc: "Every payment decision includes reason codes, risk explanations, and scoring evidence." },
                { title: "Audit Logging", desc: "Track analyst actions, payment interventions, reviews, and decisions." },
                { title: "Multi-Tenant Isolation", desc: "Secure organizational separation across payment data, models, and workflows." },
                { title: "Deployment Flexibility", desc: "Available via SaaS, private cloud, hybrid, and on-premise." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">NFC FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Does DeepSense support mobile wallet fraud detection?", 
                  a: "Yes. DeepSense detects fraud across Apple Pay, Google Pay, telecom wallets, banking wallets, and custom tokenized payment ecosystems." 
                },
                { 
                  q: "Can DeepSense detect token replay attacks?", 
                  a: "Yes. The platform monitors token reuse behavior, device inconsistencies, transaction anomalies, and replay indicators in real time." 
                },
                { 
                  q: "Does DeepSense store raw card data?", 
                  a: "No. DeepSense is designed around tokenized and fingerprint-based architectures and does not store raw PAN, CVV, or track data." 
                },
                { 
                  q: "Can the platform detect rogue terminals?", 
                  a: "Yes. DeepSense correlates merchant, terminal, transaction, and graph intelligence to identify suspicious terminal activity." 
                },
                { 
                  q: "Does DeepSense support telecom wallet ecosystems?", 
                  a: "Yes. The platform supports telecom wallet fraud monitoring, mobile money abuse detection, and SIM-linked risk analysis." 
                },
                { 
                  q: "How fast are fraud decisions generated?", 
                  a: "DeepSense is designed for millisecond-level real-time payment decisioning." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase">Secure Contactless Payments With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect mobile wallets, NFC transactions, <br />
                <span className="text-white/40 font-bold">and digital payment ecosystems.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect mobile wallets, NFC transactions, transit systems, and digital payment ecosystems with enterprise-grade fraud detection and explainable real-time decisioning.
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
