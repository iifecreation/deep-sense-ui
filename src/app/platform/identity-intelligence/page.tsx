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

export default function IdentityIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive console parameters
  const [identityType, setIdentityType] = useState<string>("standard");
  const [docVerifications, setDocVerifications] = useState<boolean>(true);
  const [biometricLiveness, setBiometricLiveness] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic identity metrics
  const calculateIdentityMetrics = () => {
    let trustScore = 98;
    let legitimacyRating = "HIGHLY SECURE";
    let syntheticProbability = 1;
    let biometricAuthenticity = 99;
    let recommendation = "IDENTITY SECURE: standard KYC parameters validated";
    let color = "text-emerald-400";
    
    if (identityType === "synthetic") {
      trustScore = 14;
      legitimacyRating = "LAYERED SYNTHETIC PROXY MATCH";
      syntheticProbability = 94;
      biometricAuthenticity = 8;
      recommendation = "CRITICAL FRAUD SIGNAL: synthetic proxy metrics matched across external provider data registries.";
      color = "text-red-400 animate-pulse";
    }
    if (docVerifications) {
      biometricAuthenticity = Math.max(biometricAuthenticity - 4, 12);
    }
    if (biometricLiveness) {
      syntheticProbability = Math.max(syntheticProbability - 10, 2);
    }
    
    return { trustScore, legitimacyRating, syntheticProbability, biometricAuthenticity, recommendation, color };
  };

  const { trustScore, legitimacyRating, syntheticProbability, biometricAuthenticity, recommendation, color } = calculateIdentityMetrics();

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
                DIGITAL IDENTITY & TRUST INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Build Trusted Digital Identity and Secure <br />
                <span className="text-zinc-400">Every Customer Interaction</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Identity Intelligence helps enterprises verify identities, detect onboarding fraud, orchestrate KYC operations, correlate entity relationships, and strengthen digital trust using AI-powered identity analytics and real-time onboarding intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Identity Intelligence Demo
                </Link>
                <Link href="/platform/identity-intelligence#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Identity Trust
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, telecoms, healthcare organizations, marketplaces, payment platforms, gaming ecosystems, and enterprise onboarding environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Unified Identity Trust Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Unified Identity Trust Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">IDENTITY ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live onboarding and identity intelligence environment visualizing identity verification, biometric trust scoring, synthetic identity detection, onboarding analytics, document verification, identity graph relationships, authentication risk, and AI-powered onboarding intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Identity Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Identity Verification",
                        "KYC Orchestration",
                        "Biometric Analysis",
                        "Document Intelligence",
                        "Synthetic Identity Detection",
                        "Identity Graph Explorer",
                        "Authentication Analytics",
                        "Onboarding Risk Monitoring",
                        "AI Identity Assistant",
                        "Compliance Controls"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.4</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Identity Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE IDENTITY STREAM</span>
                        <span>SURVEILLANCE ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Identity validation</span>
                          <select 
                            value={identityType} 
                            onChange={(e) => setIdentityType(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="standard">Standard KYC validation</option>
                            <option value="synthetic">Layered synthetic proxy check</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Structured OCR</span>
                          <input 
                            type="checkbox" 
                            checked={docVerifications} 
                            onChange={(e) => setDocVerifications(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Passive security</span>
                          <input 
                            type="checkbox" 
                            checked={biometricLiveness} 
                            onChange={(e) => setBiometricLiveness(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Onboarding Trust</span>
                          <span className={`text-xl font-bold mt-1 block ${trustScore < 40 ? "text-red-400" : "text-emerald-400"}`}>
                            {trustScore}%
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Synthetic Probability</span>
                          <span className={`text-xl font-bold mt-1 block ${syntheticProbability > 50 ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>{syntheticProbability}%</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Biometric Score</span>
                          <span className="text-xl font-bold text-white mt-1 block">{biometricAuthenticity}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Identity Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Identity Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:49:50] • onboarding submissions: passport validation extraction validated</div>
                        <div>[18:50:05] • document uploads: barcode consistency verified against global registry</div>
                        <div>[18:50:20] • biometric sessions: passive liveness checks recorded successfully</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Identity legitimacy rating</span>
                          <span className="mt-1 block text-white text-[11px] leading-relaxed">
                            {legitimacyRating}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI Onboarding insights</span>
                          <p className={`mt-1 block text-[11px] leading-relaxed ${color}`}>
                            {recommendation}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active KYC screening live</span>
                      <span>• device trust indicators synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Trust Layer</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Digital Identity Intelligence Across the Enterprise
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Identity Intelligence continuously evaluates: onboarding activity, customer identity records, biometric telemetry, authentication events, document legitimacy, behavioral signals, identity relationships, and operational anomalies. The platform creates a unified identity trust layer that helps organizations: prevent onboarding fraud, detect synthetic identities, strengthen KYC operations, reduce account compromise, accelerate onboarding decisions, improve identity governance, and centralize customer trust intelligence. Unlike disconnected onboarding systems, DeepSense continuously correlates: identities, devices, sessions, behavioral patterns, onboarding workflows, operational history, and transaction activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "prevent onboarding fraud", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "detect synthetic identities", desc: "Verify portal checkouts without introducing user friction." },
                { title: "strengthen KYC operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "reduce account compromise", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "accelerate onboarding decisions", desc: "Support digital GRC with active security control overlays." },
                { title: "improve identity governance", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Identity Trust Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Identity Verification", desc: "Verify government-issued IDs, passports, driver’s licenses, proof-of-address records, business registration documents, and onboarding submissions." },
                { title: "OCR & Document Intelligence", desc: "Extract names, ID numbers, MRZ records, barcode data, structured onboarding metadata, and document authenticity indicators." },
                { title: "Biometric Verification", desc: "Analyze facial matching, selfie verification, liveness detection, biometric spoofing indicators, deepfake resistance, and authentication integrity." },
                { title: "Synthetic Identity Detection", desc: "Identify fabricated identities, identity inconsistencies, onboarding manipulation, linked fraud ecosystems, fake document patterns, and suspicious onboarding relationships." },
                { title: "Identity Trust Scoring", desc: "Generate onboarding trust scores, identity legitimacy ratings, authentication confidence levels, fraud exposure analytics, and operational trust indicators." },
                { title: "Authentication Intelligence", desc: "Monitor login consistency, account takeover indicators, suspicious authentication behavior, credential abuse, session anomalies, and access risk exposure." },
                { title: "Identity Graph Intelligence", desc: "Visualize linked identities, shared devices, onboarding ecosystems, suspicious identity clusters, authentication relationships, and operational correlations." },
                { title: "AI Identity Intelligence", desc: "Use AI to explain onboarding anomalies, summarize identity risk, detect evolving fraud techniques, prioritize high-risk onboarding, and accelerate investigations." },
                { title: "KYC Workflow Orchestration", desc: "Automate onboarding reviews, escalation routing, sanctions checks, remediation workflows, compliance approvals, and governance tracking." },
                { title: "Governance & Audit Readiness", desc: "Maintain onboarding audit trails, immutable identity logs, compliance evidence, governance approvals, remediation history, and operational transparency." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
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

        {/* ================= SECTION 4: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Builds Digital Identity Trust
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests onboarding records, biometric captures, authentication telemetry, device intelligence, document uploads, session activity, and operational metadata." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using OCR extraction, biometric analysis, graph intelligence, behavioral analytics, device trust, and operational context." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates identity legitimacy, onboarding consistency, authentication risk, synthetic identity indicators, device integrity, and operational anomalies." },
                { title: "Step 4 — Scoring", desc: "The system generates onboarding trust scores, biometric confidence ratings, fraud exposure indicators, authentication risk classifications, and identity intelligence summaries." },
                { title: "Step 5 — Action", desc: "High-risk identity activity triggers onboarding restrictions, remediation workflows, analyst escalations, compliance reviews, and governance approvals." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl relative flex flex-col justify-between">
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

        {/* ================= SECTION 5: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for High-Trust Digital Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "processor", label: "Telecom Providers" },
                { id: "betting", label: "Healthcare" },
                { id: "enterprise", label: "Marketplaces & Ecommerce" }
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
            <div className="w-full bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Verify customer onboarding, lending applications, account access, and AML/KYC operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure wallet onboarding, payment identity verification, digital account creation, and authentication trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor subscriber verification, SIM registration, onboarding legitimacy, and identity abuse exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect patient onboarding, insurance verification, digital identity workflows, and operational trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake seller onboarding, account farming, identity abuse, and onboarding fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade Identity Security and Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Explainable Identity Decisions", desc: "Transparent onboarding reasoning and trust scoring." },
                { title: "Immutable Identity Logging", desc: "Tamper-resistant onboarding and authentication history." },
                { title: "Multi-Tenant Identity Isolation", desc: "Secure enterprise identity segregation." },
                { title: "Role-Based Identity Access", desc: "Granular permissions and operational controls." },
                { title: "Governance Workflow Integration", desc: "Integrated compliance and onboarding escalation." },
                { title: "Flexible Deployment Models", desc: "SaaS, hybrid, private cloud, on-premise." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">IDENTITY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Identity Intelligence?", 
                  a: "DeepSense Identity Intelligence is a real-time digital identity trust platform that analyzes onboarding activity, authentication telemetry, biometric signals, and identity relationships to prevent fraud and strengthen onboarding trust." 
                },
                { 
                  q: "Can DeepSense detect synthetic identities?", 
                  a: "Yes. The platform continuously identifies fabricated identities, onboarding inconsistencies, linked fraud ecosystems, and suspicious identity relationships." 
                },
                { 
                  q: "Does DeepSense support biometric verification and liveness detection?", 
                  a: "Yes. DeepSense supports facial verification, selfie analysis, liveness detection, biometric authenticity scoring, and deepfake resistance." 
                },
                { 
                  q: "Can DeepSense detect account takeover and authentication abuse?", 
                  a: "Yes. The platform monitors suspicious authentication behavior, session anomalies, credential abuse, and authentication risk exposure." 
                },
                { 
                  q: "Does DeepSense support enterprise KYC orchestration?", 
                  a: "Yes. DeepSense automates onboarding reviews, escalation workflows, sanctions checks, governance approvals, and remediation coordination." 
                },
                { 
                  q: "Is DeepSense Identity Intelligence suitable for enterprise deployment?", 
                  a: "Yes. DeepSense is designed for enterprise-scale onboarding operations, digital identity trust environments, fraud prevention, and governance programs." 
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

        {/* ================= SECTION 8: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Identity at Enterprise Scale</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Verify identities, prevent onboarding fraud, strengthen KYC operations, and centralize identity trust intelligence using DeepSense Identity Intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Identity Intelligence Demo
              </Link>
              <Link href="/platform/identity-intelligence#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Identity Trust
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
