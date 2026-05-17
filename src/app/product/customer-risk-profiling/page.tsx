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
  BadgeAlert,
  Gauge
} from "lucide-react";

export default function CustomerRiskProfilingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive Customer Risk Profiling states
  const [velocityAnomaly, setVelocityAnomaly] = useState<boolean>(true);
  const [pepSanctionsHit, setPepSanctionsHit] = useState<boolean>(true);
  const [deviceCompromised, setDeviceCompromised] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic customer risk score based on inputs
  const calculateCustomerRisk = () => {
    let score = 15; // start with baseline
    
    if (velocityAnomaly) score += 25;
    if (pepSanctionsHit) score += 40;
    if (deviceCompromised) score += 19;
    
    score = Math.min(score, 99);
    
    let classification = "LOW RISK TIER";
    let color = "text-emerald-500";
    if (score >= 75) {
      classification = "HIGH RISK TIER (Auto-EDD)";
      color = "text-red-500";
    } else if (score >= 50) {
      classification = "MEDIUM RISK TIER (Step-Up verification)";
      color = "text-amber-500";
    } else if (score >= 30) {
      classification = "MEDIUM RISK TIER (Require Carrier Check)";
      color = "text-orange-400";
    }
    
    return { score, classification, color };
  };

  const { score, classification, color } = calculateCustomerRisk();

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
                <BadgeAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                CONTINUOUS CUSTOMER RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Build Real-Time Customer Risk Profiles <br />
                <span className="text-zinc-400">Across the Entire Lifecycle</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense continuously evaluates customer behavior, onboarding trust, transaction activity, device intelligence, AML exposure, and fraud signals to generate dynamic customer risk profiles that evolve in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore AML & Fraud Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, payment providers, telecom wallets, marketplaces, digital banking, and enterprise risk operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Customer Risk Intelligence Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Continuous Profiling Monitor</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">RISK ENVELOPE SECURE ASSESSMENT</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Risk Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Transaction Velocity Anomaly</span>
                        <input 
                          type="checkbox" 
                          checked={velocityAnomaly} 
                          onChange={(e) => setVelocityAnomaly(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">PEP / Sanctions Hit</span>
                        <input 
                          type="checkbox" 
                          checked={pepSanctionsHit} 
                          onChange={(e) => setPepSanctionsHit(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Compromised Device (Root/Emulator)</span>
                        <input 
                          type="checkbox" 
                          checked={deviceCompromised} 
                          onChange={(e) => setDeviceCompromised(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE CUSTOMER RISK PROFILE</span>
                        <span>SESSION ANALYSIS ACTIVE</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">AML Exposure Status</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {pepSanctionsHit ? "Sanctions Match Confirmed" : "No Matches Found"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Behavioral Trust Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Consistency check active</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">DYNAMIC RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUTOMATED OPERATIONAL TIER</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{classification}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Attribute correlation: SSN-Name match active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Dynamic Risk</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Customer Risk Is Dynamic — Not Static
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Traditional customer risk assessments are often manual, infrequent, rules-based, and disconnected from real-time behavior. Organizations commonly assign customer risk only during onboarding without continuously evaluating transaction behavior, account changes, device trust, AML exposure, fraud signals, sanctions changes, behavioral anomalies, and relationship risk. As fraud and financial crime evolve, static risk profiles become outdated quickly. Without continuous customer risk intelligence, organizations face delayed fraud detection, AML monitoring gaps, mule account exposure, ineffective due diligence, high false positives, operational inefficiencies, and regulatory risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Static Risk Reviews", desc: "Periodic reviews fail to capture rapidly changing customer behavior.", icon: <Clock /> },
                { title: "Fragmented Intelligence", desc: "Fraud, AML, onboarding, and payment risk systems often operate independently.", icon: <Workflow /> },
                { title: "Hidden Relationship Risk", desc: "Linked entities and connected fraud ecosystems remain undetected.", icon: <Network /> },
                { title: "Delayed AML Escalation", desc: "High-risk customers may continue operating before reviews occur.", icon: <AlertTriangle /> },
                { title: "Inefficient Due Diligence", desc: "Teams waste resources reviewing low-risk customers while high-risk activity escalates.", icon: <Scale /> },
                { title: "Limited Explainability", desc: "Organizations struggle to justify why customers were classified as high risk.", icon: <FileSpreadsheet /> }
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

            {/* Lifecycle Trust Timeline Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">CUSTOMER LIFECYCLE TRUST TIMELINE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Basic identity and KYC parameters collected to establish baseline trust score." },
                  { title: "2. Transaction Peak", desc: "Evaluates rapid transfers against historical peer aggregation rules." },
                  { title: "3. AML Screening", desc: "Real-time query of PEP databases and adverse media updates." },
                  { title: "4. Risk Score drift", desc: "Identifies gradual deviations in device and location telemetry." },
                  { title: "5. Risk Escalation", desc: "Continuous profiling index triggers adaptive due diligence and analyst logs." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Customer Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud analytics, AML monitoring, identity intelligence, behavioral analysis, transaction scoring, sanctions screening, graph intelligence, and device trust into a unified customer risk profiling platform. The platform continuously evaluates onboarding trust, transaction behavior, payment activity, sanctions exposure, device risk, graph relationships, behavioral anomalies, investigation history, and financial crime indicators. DeepSense enables organizations to continuously monitor customer risk, strengthen AML programs, improve fraud detection, automate due diligence prioritization, reduce false positives, accelerate investigations, and support audit-ready governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Continuously monitor customer risk", desc: "Incorporate instant telemetry to update profiles without periodic backlogs." },
                { title: "Strengthen AML programs", desc: "Automate screening checks against global PEP databases." },
                { title: "Improve fraud detection", desc: "Block account takeover indicators and payment anomalies instantly." },
                { title: "Automate due diligence", desc: "Auto-escalate high-risk users to Enhanced Due Diligence queues." },
                { title: "Reduce false positives", desc: "Leverage machine learning scoring models to ignore minor anomalies." },
                { title: "Support audit-ready governance", desc: "Supply regulators with transparent and explainable decision trails." }
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
              Enterprise Customer Risk Profiling Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Dynamic Customer Risk Scoring", desc: "Generate continuous risk scores, trust ratings, fraud likelihood indicators, AML exposure scores, and lifecycle risk intelligence." },
                { title: "Lifecycle Risk Monitoring", desc: "Monitor onboarding events, account activity, transaction behavior, payment risk, profile changes, and device trust evolution." },
                { title: "AML & Sanctions Correlation", desc: "Correlate sanctions exposure, PEP status, adverse media, suspicious activity, AML typologies, and financial crime indicators." },
                { title: "Behavioral Risk Intelligence", desc: "Analyze transaction behavior, login patterns, interaction anomalies, device behavior, customer consistency, and trust deviations." },
                { title: "Graph Relationship Intelligence", desc: "Visualize linked customers, shared devices, connected wallets, mule ecosystems, related entities, and fraud networks." },
                { title: "Risk Tiering & Segmentation", desc: "Support low/medium/high risk tiers, adaptive risk segmentation, policy-driven classifications, customer trust bands, and onboarding trust levels." },
                { title: "EDD Workflows", desc: "Trigger EDD reviews, manual investigations, step-up verification, customer escalations, and compliance workflows." },
                { title: "Continuous Monitoring", desc: "Detect risk score drift, sanctions updates, transaction anomalies, onboarding inconsistencies, and account takeover indicators." },
                { title: "Explainable Risk Decisions", desc: "Provide reason codes, scoring explanations, linked evidence, graph relationships, and behavioral context." },
                { title: "Case Management & Investigations", desc: "Automatically create customer risk cases, escalate high-risk entities, attach evidence timelines, and route analyst workflows." }
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
              How DeepSense Builds Continuous Customer Risk Profiles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests onboarding data, KYC information, transaction events, payment activity, behavioral telemetry, device intelligence, and screening results." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches profiles using sanctions intelligence, AML indicators, fraud signals, graph relationships, payment telemetry, and behavioral analytics." },
                { title: "Step 3 — Continuous Evaluation", desc: "DeepSense evaluates customer trust evolution, suspicious activity, transaction anomalies, linked fraud exposure, onboarding integrity, and financial crime indicators." },
                { title: "Step 4 — Dynamic Scoring", desc: "The system generates customer risk scores, AML exposure ratings, lifecycle trust profiles, and risk segmentation classifications." },
                { title: "Step 5 — Investigation", desc: "High-risk profiles trigger investigations, EDD workflows, analyst reviews, ongoing monitoring, and escalation management." }
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
              Built for Modern Financial Risk Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Banking" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Wallets" },
                { id: "ecommerce", label: "Marketplaces" },
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor customer lifecycle risk, AML exposure, and suspicious transaction behavior.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit portfolios. Expose synthetic accounts matured over 12 months claiming massive loans and vanish without trace.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect onboarding fraud, synthetic identities, and evolving payment risk.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Expose users registering with synthesized SSNs to extract referral signup rewards and incentive programs.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify wallet mule activity, linked entities, and mobile money abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Block coordinated mule rings registering thousands of telecom wallets on burner SIM cards to launder transaction revenues.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Assess seller trust, payout risk, account reputation, and platform abuse exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure e-commerce supplier verification. Prevent fake merchant profiles from listing counterfeit goods on global marketplaces.
                  </p>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet-linked risk, sanctions exposure, and suspicious transaction behavior.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Analyze blockchain transaction dependencies to group related wallet clusters and prevent automated scripts from draining token distribution budgets.
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
              Unified Across the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies customer risk assessment with AML monitoring, sanctions checks, real-time transaction scoring, and device/graph ledgers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "AML Monitoring", desc: "Continuously correlate customer behavior with AML typologies and suspicious activity." },
                { title: "Sanctions & PEP Screening", desc: "Monitor changes in sanctions exposure and politically exposed person relationships." },
                { title: "Transaction Fraud Detection", desc: "Incorporate real-time fraud activity into customer risk scoring." },
                { title: "Device Fingerprinting", desc: "Strengthen trust analysis using device and session intelligence." },
                { title: "Graph Intelligence", desc: "Visualize connected entities and linked fraud ecosystems." },
                { title: "Behavioral Biometrics", desc: "Analyze trust and consistency through behavioral analytics." },
                { title: "Case Management", desc: "Escalate high-risk customers into investigation workflows." }
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
              Real-Time Customer Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Customer Risk Operations Dashboard", desc: "Risk distribution, customer segmentation, trust score trends, and high-risk entity monitoring." },
                { title: "AML & Fraud Exposure Analytics", desc: "Suspicious activity trends, sanctions exposure monitoring, fraud-linked customer risk, and AML typologies." },
                { title: "Relationship Intelligence Dashboard", desc: "Linked entity graphs, shared infrastructure analysis, and connected customer ecosystems." },
                { title: "Lifecycle Risk Monitoring", desc: "Onboarding-to-transaction timelines, risk drift alerts, profile evolution tracking, and behavioral trust analysis." },
                { title: "Investigation Workspace", desc: "Customer timelines, risk evidence, transaction history, and graph investigation tools." }
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
              Designed for Enterprise Risk & Compliance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous customer profiling to secure high-growth fintechs and digital banks globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Payment Processors", "Telecom Wallets", "Digital Banking", "Marketplaces",
                "Crypto Platforms", "Insurance", "Wealth Management", "Lending Platforms", "BNPL Providers", "Enterprise Compliance Teams"
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
                Explainable, Governed, and Audit-Ready
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes exposure to sensitive personal data through controlled access, tokenization, and governed workflows.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every customer risk score includes reason codes, behavioral evidence, AML indicators, and graph relationships." },
                { title: "Audit Logging", desc: "Track analyst reviews, risk score changes, investigation workflows, and escalation history." },
                { title: "Multi-Tenant Security", desc: "Secure isolation across organizations, customer datasets, analyst teams, and compliance workflows." },
                { title: "Privacy-Conscious Risk Intel", desc: "Minimize exposure to sensitive data using controlled access, tokenization, and governed workflows." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Customer FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is customer risk profiling?", 
                  a: "Customer risk profiling continuously evaluates customer behavior, onboarding trust, transaction activity, AML exposure, and fraud indicators to assess risk over time." 
                },
                { 
                  q: "Does DeepSense support continuous risk monitoring?", 
                  a: "Yes. DeepSense continuously monitors onboarding activity, transactions, behavioral changes, sanctions exposure, and financial crime indicators." 
                },
                { 
                  q: "Can customer risk scores change dynamically?", 
                  a: "Yes. Risk scores evolve in real time based on behavioral, transactional, AML, and fraud intelligence." 
                },
                { 
                  q: "Does the platform support AML and fraud correlation?", 
                  a: "Yes. DeepSense unifies AML monitoring, sanctions screening, fraud detection, and identity intelligence into connected customer risk profiles." 
                },
                { 
                  q: "Can the platform trigger enhanced due diligence workflows?", 
                  a: "Yes. DeepSense supports EDD escalation, manual review routing, and ongoing monitoring workflows." 
                },
                { 
                  q: "Is customer risk scoring explainable?", 
                  a: "Yes. Every risk decision includes explainable reason codes, evidence, and behavioral context." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Static Reviews Into Continuous Risk Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Transform static reviews into continuous <br />
                <span className="text-white/40 font-bold">real-time customer risk intelligence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Continuously monitor customer trust, detect evolving financial crime exposure, and strengthen onboarding and AML programs using enterprise-grade customer risk intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore AML & Fraud Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
