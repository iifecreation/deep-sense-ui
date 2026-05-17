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
  UserCheck
} from "lucide-react";

export default function SyntheticIdentityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive Synthetic Identity Risk States
  const [identityFragments, setIdentityFragments] = useState<boolean>(true);
  const [documentReused, setDocumentReused] = useState<boolean>(true);
  const [selfieDeepfake, setSelfieDeepfake] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic synthetic risk score based on inputs
  const calculateSyntheticRisk = () => {
    let score = 10;
    if (identityFragments) score += 30;
    if (documentReused) score += 25;
    if (selfieDeepfake) score += 34;
    
    score = Math.min(score, 99);
    
    let decision = "RELEASE ONBOARDING SUCCESS";
    let color = "text-emerald-500";
    if (score >= 75) {
      decision = "BLOCK SIGNUP & FLAG SYNTHETIC SYSTEM";
      color = "text-red-500";
    } else if (score >= 50) {
      decision = "ESC ESCALATE TO ENHANCED KYC";
      color = "text-amber-500";
    } else if (score >= 30) {
      decision = "REQUIRE LIVE VIDEO ID";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculateSyntheticRisk();

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
                <UserCheck className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME SYNTHETIC IDENTITY FRAUD DETECTION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Synthetic Identities <br />
                <span className="text-zinc-400">Before They Become Financial Losses</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps banks, fintechs, telecom wallets, marketplaces, and digital platforms identify fabricated identities, coordinated onboarding fraud, mule account networks, and identity abuse using graph intelligence, behavioral analytics, document verification, and real-time risk scoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/identity-verification" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Identity Intelligence
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise onboarding, fraud prevention, KYC operations, digital banking, payment ecosystems, and high-risk customer acquisition environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Advanced Identity Investigation Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Identity Verification Diagnostics</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">KYC ENCLAVE SECURE INTEGRITY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Onboarding Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">PII Attribute Fragments</span>
                        <input 
                          type="checkbox" 
                          checked={identityFragments} 
                          onChange={(e) => setIdentityFragments(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">ID Document Reused (Graph)</span>
                        <input 
                          type="checkbox" 
                          checked={documentReused} 
                          onChange={(e) => setDocumentReused(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Selfie Liveness Anomaly</span>
                        <input 
                          type="checkbox" 
                          checked={selfieDeepfake} 
                          onChange={(e) => setSelfieDeepfake(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE IDENTITY DIAGNOSTIC REPORT</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Document Consistency</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {documentReused ? "Duplicate Upload Flagged" : "Unique ID Document"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Identity Profile Status</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Active verification loops</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">SYNTHETIC IDENTITY RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUTOMATED KYC RECOMMENDATION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{decision}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Attribute correlation: SSN-Name match failed</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Frauds</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Synthetic Identity Fraud Is Growing More Sophisticated
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraudsters increasingly create synthetic identities by combining real identity fragments, fake credentials, manipulated documents, stolen PII, mule infrastructure, emulator environments, and fabricated behavioral patterns. These identities are used to open fraudulent accounts, farm incentives, commit payment fraud, launder funds, evade sanctions controls, abuse credit systems, and bypass onboarding workflows. Traditional verification systems often validate documents or data points independently without detecting coordinated identity construction, linked onboarding activity, device reuse, graph relationships, synthetic behavioral patterns, and identity lifecycle abuse. Without connected identity intelligence, organizations face onboarding fraud losses, mule account expansion, payment abuse, regulatory exposure, AML risk, and operational inefficiencies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Fabricated Identities", desc: "Fraudsters combine fake and stolen information to construct seemingly legitimate customers.", icon: <Users /> },
                { title: "Mule Account Networks", desc: "Synthetic identities are used to create money mule ecosystems for fraud and laundering.", icon: <Network /> },
                { title: "Document Reuse", desc: "The same identity documents are reused across multiple fraudulent accounts.", icon: <FileSpreadsheet /> },
                { title: "Emulator-Driven Onboarding", desc: "Fraud rings automate onboarding using device farms and scripted environments.", icon: <Server /> },
                { title: "Identity Farming", desc: "Fraudsters mature synthetic accounts over time before exploiting them financially.", icon: <Clock /> },
                { title: "Cross-Platform Abuse", desc: "Synthetic identities are reused across fintechs, marketplaces, wallets, and payment ecosystems.", icon: <Globe /> }
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

            {/* Synthetic Identity Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">SYNTHETIC IDENTITY LIFECYCLE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Synthetic parameters and document uploads captured inside secure enclave." },
                  { title: "2. Identity Stitching", desc: "Correlates fragment matches to identify artificial credit builder activity." },
                  { title: "3. Maturation Sleep", desc: "Synthetic accounts remain dormant, building synthetic credibility scores." },
                  { title: "4. Fraud Trigger", desc: "Massive simultaneous credit line withdrawals initiated across institutions." },
                  { title: "5. Enforcement Log", desc: "Flagged profiles and connected hardware parameters blacklisted globally." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Security</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Connected Identity Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines identity verification, document fraud analysis, graph intelligence, behavioral biometrics, device intelligence, and onboarding analytics into a unified synthetic identity detection platform. The platform continuously evaluates identity consistency, onboarding behavior, device relationships, document authenticity, graph connectivity, payment relationships, behavioral anomalies, session intelligence, and fraud exposure history. DeepSense enables organizations to stop synthetic onboarding, reduce fraud losses, detect mule ecosystems, improve onboarding trust, strengthen KYC programs, reduce false positives, and accelerate investigations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop synthetic onboarding", desc: "Instantly identify synthesized PII combinations before KYC approval." },
                { title: "Reduce fraud losses", desc: "Filter out fabricated credit seekers during registration." },
                { title: "Detect mule networks", desc: "Expose linked identity accounts routed to centralized payout hubs." },
                { title: "Improve onboarding trust", desc: "Validate organic users with zero secondary friction." },
                { title: "Strengthen KYC programs", desc: "Enhance standard KYC systems with deep hardware and graph checks." },
                { title: "Accelerate investigations", desc: "Supply fraud specialists with comprehensive relationship timelines." }
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
              Enterprise Synthetic Identity Detection Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Identity Consistency Analysis", desc: "Validate name consistency, DOB relationships, address integrity, identity attribute coherence, and historical onboarding patterns." },
                { title: "Document Reuse Detection", desc: "Identify repeated document uploads, duplicate identity documents, manipulated onboarding records, and cross-account document usage." },
                { title: "Device Correlation", desc: "Detect shared devices, emulator farms, proxy infrastructure, onboarding clusters, and linked identity environments." },
                { title: "Behavioral Identity Intel", desc: "Analyze onboarding behavior, interaction patterns, navigation consistency, automation indicators, and synthetic behavioral signals." },
                { title: "Face & Identity Correlation", desc: "Correlate reused faces, facial similarity patterns, onboarding image relationships, and identity-linked biometric activity." },
                { title: "Graph Intelligence", desc: "Visualize linked identities, mule account ecosystems, shared infrastructure, payment relationships, fraud clusters, and onboarding rings." },
                { title: "Payment & Wallet Correlation", desc: "Track linked payment instruments, wallet reuse, payout overlap, mule payment flows, and transaction relationships." },
                { title: "Lifecycle Monitoring", desc: "Monitor account maturation, delayed fraud activation, onboarding-to-payment transitions, and evolving risk exposure." },
                { title: "Real-Time Risk Scoring", desc: "Generate synthetic identity scores, onboarding trust scores, mule likelihood indicators, and fraud network exposure ratings." },
                { title: "Investigation & Cases", desc: "Automatically create identity fraud cases, escalate high-risk onboarding, attach graph evidence, track linked entities, and support investigations." }
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
              How DeepSense Detects Synthetic Identities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests KYC submissions, device telemetry, onboarding sessions, document uploads, biometric events, and payment setup activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches onboarding using document intelligence, identity consistency checks, behavioral analysis, device trust, graph relationships, and payment telemetry." },
                { title: "Step 3 — Correlation", desc: "DeepSense evaluates document reuse, linked onboarding clusters, emulator indicators, synthetic behavior, identity anomalies, and shared infrastructure." },
                { title: "Step 4 — Decisioning", desc: "The system generates synthetic identity scores, onboarding risk decisions, investigation recommendations, and enhanced due diligence triggers." },
                { title: "Step 5 — Enforcement", desc: "High-risk identities trigger onboarding review, step-up verification, enhanced KYC, account restrictions, and fraud investigations." }
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
              Built for High-Risk Identity Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Digital Banking" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Wallets" },
                { id: "ecommerce", label: "Ecommerce & Marketplaces" },
                { id: "crypto", label: "Crypto & Web3 Platforms" }
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
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fraudulent onboarding, mule account creation, synthetic lending, and account farming.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit applications. Expose synthetic accounts matured over 12 months claiming massive loans and vanish without trace.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect fake customer ecosystems, onboarding abuse, and wallet fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Expose users registering with synthesized SSNs to extract referral signup rewards and incentive programs.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify SIM-linked accounts, mobile money mule networks, and coordinated wallet abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Block coordinated mule rings registering thousands of telecom wallets on burner SIM cards to launder transaction revenues.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Reduce fake seller onboarding, marketplace fraud, and abusive accounts.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure e-commerce supplier verification. Prevent fake merchant profiles from listing counterfeit goods on global marketplaces.
                  </p>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor sybil attacks, wallet farming, and coordinated onboarding abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Expose bots generating bulk accounts using stolen identity document fragments to claim sybil airdrop allocations.
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
              Connected Across the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies identity risk checks with our overarching document, biometric, graph, and case workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Document Fraud Detection", desc: "Detect manipulated or reused onboarding documents." },
                { title: "KYC Verification", desc: "Strengthen onboarding trust and verification workflows." },
                { title: "Device Fingerprinting", desc: "Identify shared infrastructure and emulator environments." },
                { title: "Behavioral Biometrics", desc: "Detect automated and synthetic interaction behavior." },
                { title: "Graph Intelligence", desc: "Visualize connected fraud ecosystems and mule networks." },
                { title: "AML Monitoring", desc: "Correlate synthetic identities with financial crime exposure." },
                { title: "Case Management", desc: "Escalate high-risk onboarding into investigation workflows." }
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
              Real-Time Identity Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Identity Risk Operations Dashboard", desc: "Onboarding risk analytics, synthetic identity alerts, approval trends, and fraud exposure tracking." },
                { title: "Identity Graph Intelligence", desc: "Linked onboarding clusters, mule network maps, shared infrastructure, and payment relationships." },
                { title: "Document Reuse Monitoring", desc: "Duplicate document alerts, repeated onboarding attempts, and cross-account analysis." },
                { title: "Behavioral Identity Analytics", desc: "Onboarding behavior heatmaps, automation detection, session anomaly logs, and trust metrics." },
                { title: "Investigation Workspace", desc: "Identity timelines, onboarding evidence portfolios, linked account clusters, and graph flows." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Ecosystems</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Modern Digital Identity Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure identity verification protocols across global onboarding workflows.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Telecom Wallets", "Ecommerce", "Marketplaces", "Crypto Platforms",
                "Digital Lending", "BNPL Providers", "Gaming Platforms", "Embedded Finance", "Insurance", "Consumer Platforms"
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
                Explainable Identity Intelligence and Enterprise Governance
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes exposure to sensitive PII through controlled access, tokenization, and secure identity handling practices.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Identity Decisions", desc: "Every onboarding decision includes reason codes, identity evidence, and graph relationships." },
                { title: "Audit Logging", desc: "Track onboarding reviews, analyst decisions, and identity escalations." },
                { title: "Multi-Tenant Isolation", desc: "Secure operational isolation across organizations and identity telemetry." },
                { title: "Privacy-Conscious Architecture", desc: "Minimize exposure to sensitive PII using secure tokenization and access protocols." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise environments." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Identity FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is synthetic identity fraud?", 
                  a: "Synthetic identity fraud occurs when attackers combine real and fake identity information to create fraudulent but believable identities." 
                },
                { 
                  q: "Can DeepSense detect linked synthetic identities?", 
                  a: "Yes. DeepSense uses graph intelligence, behavioral analytics, device intelligence, and document correlation to identify connected synthetic identities." 
                },
                { 
                  q: "Does DeepSense support document reuse detection?", 
                  a: "Yes. The platform detects repeated document usage, duplicate onboarding attempts, and manipulated identity submissions." 
                },
                { 
                  q: "Can the platform detect mule account ecosystems?", 
                  a: "Yes. DeepSense identifies linked onboarding, payment relationships, and coordinated fraud infrastructure associated with mule activity." 
                },
                { 
                  q: "Does DeepSense support real-time onboarding decisions?", 
                  a: "Yes. The platform provides millisecond-level onboarding risk scoring and identity trust decisioning." 
                },
                { 
                  q: "Can DeepSense integrate with existing KYC workflows?", 
                  a: "Yes. DeepSense supports APIs, webhooks, orchestration pipelines, and provider-agnostic onboarding integrations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Stop Synthetic Identity Fraud Before It Scales</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect onboarding workflows and detect <br />
                <span className="text-white/40 font-bold">fabricated identities before they cause losses.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect onboarding workflows, detect fabricated identities, uncover mule ecosystems, and strengthen digital trust using enterprise-grade identity intelligence and graph-powered fraud detection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/identity-verification" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Identity Intelligence
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
