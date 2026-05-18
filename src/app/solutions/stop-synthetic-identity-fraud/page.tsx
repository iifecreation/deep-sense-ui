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

export default function StopSyntheticIdentityFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive GRC identity parameters
  const [identityStitching, setIdentityStitching] = useState<string>("authentic");
  const [behavioralBot, setBehavioralBot] = useState<boolean>(false);
  const [proxyDevice, setProxyDevice] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic synthetic risk parameters
  const calculateSyntheticRisk = () => {
    let score = 94; // base health score
    
    if (identityStitching === "synthetic") score -= 44;
    if (behavioralBot) score -= 28;
    if (proxyDevice) score -= 15;
    
    score = Math.max(score, 6);
    
    let status = "AUTHENTIC PROFILE VERIFIED";
    let color = "text-emerald-500";
    if (score <= 35) {
      status = "SYNTHETIC PROFILE STITCHING CRITICAL";
      color = "text-red-500";
    } else if (score <= 65) {
      status = "UNTRUSTED EMULATOR ONBOARDING CLUSTER";
      color = "text-amber-500";
    } else if (score <= 85) {
      status = "AUTOMATED BOT TYPING DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateSyntheticRisk();

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
                SYNTHETIC IDENTITY & ONBOARDING INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Synthetic Identities and Stop <br />
                <span className="text-zinc-400">Fraudulent Account Creation in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises detect synthetic identities, identify onboarding fraud rings, monitor identity trust, and secure digital onboarding workflows using AI-powered analytics, graph intelligence, and behavioral verification.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/stop-synthetic-identity-fraud#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Identity Intelligence
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, telecoms, lenders, marketplaces, insurance providers, and enterprise onboarding ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Synthetic Identity Risk Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Synthetic Identity Risk Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ONBOARDING VERIFICATION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  An interactive onboarding intelligence environment showing identity trust scoring, behavioral onboarding analytics, synthetic identity indicators, graph-linked onboarding ecosystems, mule account relationships, document and device consistency analysis, identity timeline reconstruction, and fraud ring intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Onboarding Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Identity attributes</span>
                        <select 
                          value={identityStitching} 
                          onChange={(e) => setIdentityStitching(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Real authenticated credentials</option>
                          <option value="synthetic">Fabricated stitched attributes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Automated keypress bot</span>
                        <input 
                          type="checkbox" 
                          checked={behavioralBot} 
                          onChange={(e) => setBehavioralBot(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Spoofed browser emulator</span>
                        <input 
                          type="checkbox" 
                          checked={proxyDevice} 
                          onChange={(e) => setProxyDevice(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE ONBOARDING TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Behavioral Identity Analytics</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {identityStitching === "synthetic" ? "Active Stitching Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Synthetic Identity Timeline</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {proxyDevice ? "Active Emulation Alert" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">IDENTITY LEGITIMACY SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Device & Session checks active</span>
                      <span>Secure tokenization isolation live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Verification Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Synthetic Identity Fraud Is Rapidly Evolving Across Digital Onboarding Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern digital onboarding systems process: customer registrations, financial onboarding, telecom subscriber activation, lending applications, marketplace onboarding, insurance enrollment, digital identity verification, and remote authentication workflows. Fraudsters increasingly exploit onboarding ecosystems using: fabricated identities, stolen credentials, synthetic profiles, mule account networks, AI-generated onboarding artifacts, document manipulation, device spoofing, and coordinated onboarding abuse. Traditional onboarding systems often struggle with: cross-session identity correlation, behavioral trust analysis, graph-based fraud detection, mule ecosystem identification, onboarding scalability, and synthetic identity detection accuracy. Without connected onboarding intelligence, organizations face: account opening fraud, AML exposure, financial losses, identity abuse, compliance failures, reputational damage, and operational inefficiencies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Fabricated Identity Creation", desc: "Fraudsters combine real and fake credentials to build synthetic identities.", icon: <Shield /> },
                { title: "Mule Account Ecosystems", desc: "Synthetic identities are used to create coordinated laundering and abuse networks.", icon: <Users /> },
                { title: "Device & Session Spoofing", desc: "Fraudsters manipulate onboarding environments to evade detection.", icon: <Sliders /> },
                { title: "AI-Assisted Identity Fraud", desc: "AI-generated identities and onboarding artifacts increase fraud sophistication.", icon: <Clock /> },
                { title: "Repeated Credential Reuse", desc: "Shared onboarding attributes create hidden fraud relationships across ecosystems.", icon: <Building /> },
                { title: "AML & Compliance Exposure", desc: "Synthetic identities increase financial crime and regulatory risk.", icon: <Sliders /> }
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

            {/* Identity Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">IDENTITY LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Document Verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Behavioral Analysis", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Graph Correlation", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Fraud Scoring", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance Workflows", desc: "Approved payouts executed securely with complete compliance reports." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Synthetic Identity and Onboarding Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral analytics, graph intelligence, onboarding telemetry, device intelligence, OCR verification, AI anomaly detection, and governance automation into a unified identity trust platform. The platform continuously evaluates: onboarding activity, behavioral trust, identity consistency, device reputation, onboarding relationships, synthetic identity indicators, graph ecosystems, fraud exposure, and operational anomalies. DeepSense enables organizations to: prevent synthetic onboarding, reduce fraud losses, strengthen KYC operations, improve onboarding trust, detect fraud rings, accelerate investigations, and modernize identity governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Prevent synthetic onboarding", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Reduce fraud losses", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen KYC operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Improve onboarding trust", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Detect fraud rings", desc: "Support digital GRC with active security control overlays." },
                { title: "Accelerate investigations", desc: "Block duplicate submissions before cash-outs settle." }
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
              Identity Trust & Synthetic Fraud Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Synthetic Identity Detection", desc: "Detect fabricated identities, identity stitching, fake onboarding records, synthetic profile anomalies, mule account indicators, and onboarding inconsistencies." },
                { title: "Identity Trust Scoring", desc: "Generate onboarding trust scores, identity legitimacy ratings, behavioral confidence indicators, fraud probability analytics, and account risk scores." },
                { title: "Behavioral Analytics", desc: "Analyze onboarding behavior, typing cadence, session anomalies, interaction patterns, automation indicators, and behavioral consistency." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator farms, shared infrastructure, suspicious environments, and device-switching anomalies." },
                { title: "Document & Identity Correlation", desc: "Compare submitted IDs, onboarding records, behavioral patterns, device attributes, account consistency, and cross-session identity signals." },
                { title: "Graph Intelligence", desc: "Visualize linked identities, mule ecosystems, shared onboarding signals, fraud relationships, connected accounts, and onboarding abuse rings." },
                { title: "AI Fraud Detection", desc: "Identify AI-generated identities, synthetic onboarding patterns, manipulated artifacts, automation workflows, and suspicious onboarding orchestration." },
                { title: "AML & Compliance Monitoring", desc: "Monitor high-risk onboarding, sanctions exposure, suspicious onboarding clusters, laundering indicators, and financial crime exposure." },
                { title: "Case Management & Investigations", desc: "Coordinate onboarding investigations, KYC escalations, fraud reviews, remediation workflows, and evidence management." },
                { title: "Governance & Identity Assurance", desc: "Support onboarding governance, compliance readiness, audit workflows, identity trust reporting, and operational transparency." }
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

        {/* ================= SECTION 5: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Synthetic Identity Fraud
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests registration activity, identity documents, behavioral telemetry, device signals, session activity, onboarding workflows, and authentication events." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, OCR verification, device intelligence, AI anomaly detection, and onboarding trust indicators." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates identity legitimacy, onboarding consistency, behavioral trust, device integrity, fraud relationships, and synthetic identity indicators." },
                { title: "Step 4 — Decisioning", desc: "The system generates identity trust scores, onboarding alerts, fraud escalations, KYC interventions, and AML warnings." },
                { title: "Step 5 — Action", desc: "High-risk onboarding triggers identity investigations, fraud reviews, remediation workflows, governance reporting, and compliance escalation." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Digital Identity and Onboarding Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Providers" },
                { id: "insurance", label: "Insurance Providers" },
                { id: "marketplace", label: "Digital Marketplaces" }
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
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect customer onboarding, lending applications, account opening workflows, and AML operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect fake onboarding, mule account creation, onboarding abuse, and synthetic identities.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure subscriber activation, SIM registration, onboarding trust, and digital identity workflows.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "insurance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor policy onboarding, applicant legitimacy, claims identity verification, and operational fraud exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake seller onboarding, multi-account abuse, account farming, and identity manipulation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Identity Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Synthetic Identity Operations Dashboard", desc: "Onboarding fraud alerts, identity anomalies, mule ecosystem visibility, and behavioral analytics." },
                { title: "Identity Trust Intelligence", desc: "Onboarding trust scoring, identity consistency indicators, behavioral trust analytics, and fraud probability visibility." },
                { title: "Device & Behavioral Analytics", desc: "Device reputation monitoring, session anomaly visibility, onboarding behavior analytics, and automation detection indicators." },
                { title: "Graph Relationship Dashboard", desc: "Linked identities, shared devices, onboarding fraud rings, and connected ecosystems." },
                { title: "Investigation Workspace", desc: "Onboarding timelines, graph investigations, evidence management, and GRC compliance reporting." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">SaaS Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Grade Security for Identity Verification Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single identity verified.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Identity Decisions", desc: "Every onboarding decision includes reason codes, behavioral evidence, graph relationships, device indicators, and onboarding context." },
                { title: "Audit Logging", desc: "Track onboarding reviews, KYC escalations, fraud investigations, and governance actions." },
                { title: "Multi-Tenant Identity Security", desc: "Secure operational separation across onboarding environments, enterprise teams, and verification workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with KYC obligations, AML frameworks, identity governance, and operational resilience." },
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

        {/* ================= SECTION 9: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">IDENTITY VERIFICATION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect synthetic identities in real time?", 
                  a: "Yes. DeepSense continuously evaluates onboarding activity, behavioral anomalies, device intelligence, and graph relationships to identify synthetic identities." 
                },
                { 
                  q: "Does DeepSense support behavioral onboarding analytics?", 
                  a: "Yes. The platform analyzes typing behavior, onboarding interaction patterns, session consistency, and automation indicators." 
                },
                { 
                  q: "Can DeepSense identify mule account ecosystems?", 
                  a: "Yes. DeepSense uses graph intelligence and onboarding correlation analytics to detect connected fraud and laundering networks." 
                },
                { 
                  q: "Does DeepSense support document and identity verification?", 
                  a: "Yes. The platform combines OCR intelligence, document verification, identity trust scoring, and behavioral analytics." 
                },
                { 
                  q: "Can DeepSense support AML and KYC operations?", 
                  a: "Yes. DeepSense strengthens onboarding governance, suspicious activity monitoring, sanctions screening, and compliance workflows." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale onboarding environments?", 
                  a: "Yes. DeepSense is designed for large-scale onboarding ecosystems, financial institutions, fintechs, telecoms, and enterprise identity operations." 
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

        {/* ================= SECTION 10: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Onboarding Ecosystems With Real-Time Identity Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure digital registries and prevent <br />
                <span className="text-white/40 font-bold">synthetic identities dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect synthetic identities, reduce onboarding fraud, strengthen KYC workflows, and improve digital trust using enterprise-grade identity intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/stop-synthetic-identity-fraud#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
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
