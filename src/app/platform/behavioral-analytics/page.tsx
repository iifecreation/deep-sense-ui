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

export default function BehavioralAnalyticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive console parameters
  const [velocityMode, setVelocityMode] = useState<string>("standard");
  const [driftTracking, setDriftTracking] = useState<boolean>(true);
  const [workforceCorrelation, setWorkforceCorrelation] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic behavioral metrics
  const calculateBehavioralMetrics = () => {
    let trustScore = 91;
    let confidence = 98;
    let anomalyProbability = 4;
    let explainText = "Legitimate gesture cadence matches baseline tracking parameters.";
    
    if (velocityMode === "robotic") {
      trustScore = 12;
      confidence = 94;
      anomalyProbability = 96;
      explainText = " robotic cadence bursts detected: rapid touch pressure variations bypass natural physical gravity parameters.";
    }
    if (driftTracking) {
      confidence = Math.max(confidence - 6, 85);
    }
    if (workforceCorrelation) {
      anomalyProbability = Math.max(anomalyProbability - 10, 2);
    }
    
    return { trustScore, confidence, anomalyProbability, explainText };
  };

  const { trustScore, confidence, anomalyProbability, explainText } = calculateBehavioralMetrics();

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
                BEHAVIORAL INTELLIGENCE & ANOMALY DETECTION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Fraud and Operational Risk via <br />
                <span className="text-zinc-400">Real-Time Behavioral Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Behavioral Analytics continuously analyzes user interactions, onboarding activity, device behavior, operational workflows, and transaction patterns to detect anomalies, strengthen trust scoring, and stop fraud before losses occur.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Behavioral Analytics Demo
                </Link>
                <Link href="/platform/behavioral-analytics#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Behavioral Intelligence
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for financial institutions, fintechs, telecoms, enterprises, gaming ecosystems, marketplaces, payment processors, and digital platforms operating at scale.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Real-Time Behavioral Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Real-Time Behavioral Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">BEHAVIORAL ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live behavioral monitoring environment visualizing user interaction analytics, session trust scoring, onboarding behavior, account takeover indicators, device trust signals, operational anomalies, behavioral drift, automation detection, and workforce behavior analytics.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Behavioral Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Session Intelligence",
                        "Behavioral Biometrics",
                        "Trust Scoring",
                        "Insider Risk Analytics",
                        "Device Behavior",
                        "User Journey Analytics",
                        "Automation Detection",
                        "Onboarding Intelligence",
                        "Workforce Analytics",
                        "AI Behavioral Insights"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.2</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Behavioral Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE BEHAVIORAL STREAM VIEWPORT</span>
                        <span>ANOMALY DETECTION ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Interaction Velocity</span>
                          <select 
                            value={velocityMode} 
                            onChange={(e) => setVelocityMode(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="standard">Standard navigation rhythm</option>
                            <option value="robotic">Coordinated robotic bursts</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Drift Tracking</span>
                          <input 
                            type="checkbox" 
                            checked={driftTracking} 
                            onChange={(e) => setDriftTracking(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Workforce correlation</span>
                          <input 
                            type="checkbox" 
                            checked={workforceCorrelation} 
                            onChange={(e) => setWorkforceCorrelation(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Behavioral Trust</span>
                          <span className={`text-xl font-bold mt-1 block ${trustScore < 40 ? "text-red-400" : "text-emerald-400"}`}>
                            {trustScore}%
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Anomaly confidence</span>
                          <span className="text-xl font-bold text-white mt-1 block">{confidence}%</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">ATO Probability</span>
                          <span className={`text-xl font-bold mt-1 block ${anomalyProbability > 50 ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>
                            {anomalyProbability}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom timeline console */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:41:42] • onboarding behavior: physical touch pressure indicators cataloged</div>
                        <div>[18:42:02] • authentication activity: typing cadence baseline drift verified</div>
                        <div>[18:42:15] • transaction interactions: gesture signature matches blocked bots</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Explanations</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Behavioral Anomaly detected</span>
                          <span className="mt-1 block text-white text-[11px] leading-relaxed">
                            {explainText}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Device integrity status</span>
                          <p className="mt-1 leading-relaxed">
                            Rooted environment checks completed. No emulator frame injections observed.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active drift triggers live</span>
                      <span>• touch metrics synchronized</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Continuous Baseline</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Behavioral Intelligence Across Every Digital Interaction
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Behavioral Analytics continuously models: user behavior, transaction activity, onboarding interactions, employee workflows, mobile interactions, device telemetry, operational activity, and authentication behavior. The platform learns: trusted behavior baselines, normal operational workflows, legitimate user interaction patterns, device trust characteristics, and transaction consistency. This allows organizations to: detect fraud earlier, identify account compromise, reduce false positives, stop automation abuse, strengthen onboarding trust, uncover insider threats, and improve operational visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "detect fraud earlier", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "identify account compromise", desc: "Verify portal checkouts without introducing user friction." },
                { title: "reduce false positives", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "stop automation abuse", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "strengthen onboarding trust", desc: "Support digital GRC with active security control overlays." },
                { title: "uncover insider threats", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Behavioral Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Behavioral Biometrics", desc: "Analyze typing cadence, touch pressure, swipe behavior, mouse movement, navigation rhythm, and interaction consistency." },
                { title: "Session Intelligence", desc: "Monitor login behavior, session anomalies, navigation flow, authentication consistency, suspicious activity patterns, and user journey deviations." },
                { title: "Account Takeover Detection", desc: "Detect behavioral drift, unauthorized interaction patterns, credential abuse, suspicious device switching, and abnormal transaction behavior." },
                { title: "Automation & Bot Detection", desc: "Identify scripted interactions, emulator activity, automation frameworks, bot-driven onboarding, synthetic interactions, and suspicious navigation velocity." },
                { title: "Device Behavioral Intelligence", desc: "Analyze device usage patterns, environmental consistency, rooted devices, emulator behavior, spoofed environments, and device trust evolution." },
                { title: "Onboarding Behavioral Analytics", desc: "Detect synthetic onboarding, suspicious registration flows, abnormal onboarding timing, referral abuse behavior, and onboarding automation indicators." },
                { title: "Workforce & Insider Analytics", desc: "Monitor employee workflows, privileged access behavior, operational anomalies, insider-risk indicators, and suspicious access patterns." },
                { title: "Behavioral Trust Scoring", desc: "Generate user trust scores, session confidence ratings, interaction legitimacy indicators, operational risk analytics, and behavioral consistency metrics." },
                { title: "AI Behavioral Correlation", desc: "Use AI to identify hidden anomalies, explain behavioral deviations, correlate suspicious activity, prioritize investigations, and detect evolving attack patterns." },
                { title: "Cross-Channel Intelligence", desc: "Correlate web interactions, mobile activity, transaction behavior, onboarding telemetry, authentication events, and workforce operations." }
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
              How DeepSense Detects Behavioral Anomalies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests interaction telemetry, session activity, transaction behavior, onboarding workflows, authentication signals, mobile telemetry, and workforce events." },
                { title: "Step 2 — Modeling", desc: "The platform continuously learns trusted user behavior, device consistency, interaction patterns, operational workflows, transaction norms, and session characteristics." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates anomaly indicators, interaction consistency, session trust, behavioral drift, automation indicators, and operational deviations." },
                { title: "Step 4 — Scoring", desc: "The system generates behavioral trust scores, anomaly confidence ratings, account takeover indicators, insider-risk alerts, and operational exposure metrics." },
                { title: "Step 5 — Action", desc: "High-risk behavioral activity triggers fraud interventions, MFA enforcement, analyst escalation, onboarding reviews, and governance workflows." }
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
              Built for High-Risk Digital Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "processor", label: "Ecommerce" },
                { id: "betting", label: "Gaming & Betting" },
                { id: "enterprise", label: "Enterprise Risk Teams" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect account takeover, payment fraud, onboarding abuse, and transaction anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet abuse, synthetic onboarding, referral manipulation, and suspicious interactions.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure customer sessions, checkout workflows, loyalty abuse, and fake account ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify bonus abuse, emulator activity, automated wagering, and collusive interactions.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Analyze insider threats, workforce anomalies, privileged access abuse, and operational inconsistencies.</h4>
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
              Enterprise-Grade Behavioral Security and Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Explainable Behavioral Decisions", desc: "Transparent anomaly reasoning and trust scoring." },
                { title: "Immutable Audit Logging", desc: "Tamper-resistant operational history." },
                { title: "Multi-Tenant Behavioral Isolation", desc: "Secure enterprise data separation." },
                { title: "Role-Based Access Control", desc: "Granular behavioral intelligence permissions." },
                { title: "Governance Workflow Integration", desc: "Integrated compliance and operational reviews." },
                { title: "Flexible Deployment Models", desc: "SaaS, private cloud, hybrid, on-premise." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">BEHAVIORAL FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Behavioral Analytics?", 
                  a: "DeepSense Behavioral Analytics is a real-time behavioral intelligence engine that analyzes interactions, sessions, onboarding activity, transactions, and workforce behavior to detect fraud and operational anomalies." 
                },
                { 
                  q: "Can DeepSense detect account takeover?", 
                  a: "Yes. The platform continuously evaluates behavioral drift, device changes, suspicious session activity, and interaction anomalies to identify account compromise." 
                },
                { 
                  q: "Does DeepSense support behavioral biometrics?", 
                  a: "Yes. DeepSense analyzes typing cadence, touch behavior, swipe velocity, mouse movement, and interaction consistency." 
                },
                { 
                  q: "Can DeepSense detect automation and bot activity?", 
                  a: "Yes. The platform identifies scripted interactions, emulator behavior, suspicious navigation patterns, and synthetic automation activity." 
                },
                { 
                  q: "Does DeepSense support insider-risk monitoring?", 
                  a: "Yes. DeepSense analyzes employee behavior, privileged access activity, operational anomalies, and suspicious workforce patterns." 
                },
                { 
                  q: "Is DeepSense Behavioral Analytics suitable for enterprise deployment?", 
                  a: "Yes. DeepSense is designed for enterprise-scale behavioral intelligence, fraud prevention, operational risk monitoring, and governance environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Fraud Prevention With Real-Time Behavioral Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect anomalies, stop account takeover, strengthen trust scoring, and uncover operational risk using enterprise-grade behavioral analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Behavioral Analytics Demo
              </Link>
              <Link href="/platform/behavioral-analytics#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Behavioral Intelligence
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
