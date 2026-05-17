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

export default function DeviceIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive console parameters
  const [emulatorMode, setEmulatorMode] = useState<string>("native");
  const [canvasEntropy, setCanvasEntropy] = useState<boolean>(true);
  const [proxyNetwork, setProxyNetwork] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic device metrics
  const calculateDeviceMetrics = () => {
    let trustScore = 96;
    let environmentLegitimacy = "HIGHLY SECURE";
    let spoofingProbability = 2;
    let infrastructureRisk = "LOW";
    let explainText = "Legitimate hardware configurations parsed successfully.";
    
    if (emulatorMode === "simulation") {
      trustScore = 14;
      environmentLegitimacy = "EMULATOR VIRTUAL LAYER TRIGGERED";
      spoofingProbability = 94;
      infrastructureRisk = "CRITICAL RISK";
      explainText = "Android emulator signature found sharing Canvas fingerprint patterns with known automated registration farms.";
    }
    if (canvasEntropy) {
      spoofingProbability = Math.max(spoofingProbability - 5, 1);
    }
    if (proxyNetwork) {
      infrastructureRisk = "HIGH DATACENTER EXPOSURE";
      trustScore = Math.max(trustScore - 22, 10);
    }
    
    return { trustScore, environmentLegitimacy, spoofingProbability, infrastructureRisk, explainText };
  };

  const { trustScore, environmentLegitimacy, spoofingProbability, infrastructureRisk, explainText } = calculateDeviceMetrics();

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
                DEVICE TRUST & ENVIRONMENT INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Device Spoofing, Emulator Farms, <br />
                <span className="text-zinc-400">and Session Compromise in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Device Intelligence continuously analyzes browser telemetry, mobile integrity, device fingerprints, environmental signals, and session behavior to identify suspicious infrastructure, stop fraud, and strengthen digital trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Device Intelligence Demo
                </Link>
                <Link href="/platform/device-intelligence#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Device Trust
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fintechs, banks, telecoms, marketplaces, gaming ecosystems, ecommerce platforms, payment processors, and enterprise digital platforms.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Real-Time Device Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Real-Time Device Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">DEVICE ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live device intelligence environment visualizing device trust scoring, emulator detection, browser fingerprinting, rooted device indicators, session compromise analytics, mobile integrity monitoring, proxy and VPN detection, and infrastructure risk analysis.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Device Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Browser Fingerprinting",
                        "Emulator Detection",
                        "Mobile Integrity",
                        "Session Intelligence",
                        "Infrastructure Analysis",
                        "Device Trust Scoring",
                        "Proxy & VPN Detection",
                        "Device Relationship Graph",
                        "AI Infrastructure Insights",
                        "Environment Telemetry"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.3</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Device Telemetry Stream */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE DEVICE TELEMETRY STREAM</span>
                        <span>TELEMETRY FEED ACTIVE</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Emulator Detection</span>
                          <select 
                            value={emulatorMode} 
                            onChange={(e) => setEmulatorMode(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="native">Standard native device</option>
                            <option value="simulation">Active simulation farm</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Canvas Entropy</span>
                          <input 
                            type="checkbox" 
                            checked={canvasEntropy} 
                            onChange={(e) => setCanvasEntropy(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Datacenter Proxies</span>
                          <input 
                            type="checkbox" 
                            checked={proxyNetwork} 
                            onChange={(e) => setProxyNetwork(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Device Trust score</span>
                          <span className={`text-xl font-bold mt-1 block ${trustScore < 45 ? "text-red-400" : "text-emerald-400"}`}>
                            {trustScore}/100
                          </span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Spoofing probability</span>
                          <span className="text-xl font-bold text-white mt-1 block">{spoofingProbability}%</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Infrastructure Risk</span>
                          <span className="text-xs font-bold text-white mt-1 block leading-tight truncate">{infrastructureRisk}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom timeline console */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:42:40] • login activity: proxy fingerprint updated from cached registry</div>
                        <div>[18:42:55] • device changes: emulator indicator flags analyzed natively</div>
                        <div>[18:43:05] • risk escalation event: concurrent session integrity trace parsed</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Explanations</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Environment legitimacy</span>
                          <span className="mt-1 block text-white text-[11px] leading-relaxed">
                            {environmentLegitimacy}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI Infrastructure explanation</span>
                          <p className="mt-1 leading-relaxed">
                            {explainText}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active proxy tracing active</span>
                      <span>• sensor consistency validated</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Device Fingerprinting</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Device Trust Intelligence Across Every Session and Interaction
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Device Intelligence continuously evaluates: browser fingerprints, mobile telemetry, hardware characteristics, session consistency, device behavior, environmental signals, network infrastructure, and authentication telemetry. The platform builds persistent device trust models that help organizations: detect suspicious infrastructure, identify emulator farms, stop account takeover, detect bot activity, identify spoofed environments, strengthen onboarding trust, and reduce fraud losses. Unlike static device fingerprinting systems, DeepSense adapts continuously as infrastructure, browsers, operating systems, and fraud techniques evolve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "detect suspicious infrastructure", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "identify emulator farms", desc: "Verify portal checkouts without introducing user friction." },
                { title: "stop account takeover", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "detect bot activity", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "identify spoofed environments", desc: "Support digital GRC with active security control overlays." },
                { title: "strengthen onboarding trust", desc: "Block duplicate submissions before cash-outs settle." }
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
              Enterprise Device Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Browser Fingerprinting", desc: "Analyze browser attributes, canvas fingerprints, WebGL signatures, timezone inconsistencies, plugin behavior, and sensor entropy." },
                { title: "Emulator & Virtual Detection", desc: "Detect Android emulators, iOS simulation environments, virtual machines, spoofed hardware, automation frameworks, and synthetic environments." },
                { title: "Mobile Integrity Monitoring", desc: "Identify rooted devices, jailbroken systems, insecure operating environments, tampered applications, runtime manipulation, and mobile compromise indicators." },
                { title: "Session Trust Intelligence", desc: "Monitor device switching, session consistency, authentication anomalies, environmental drift, concurrent access patterns, and suspicious session behavior." },
                { title: "Proxy & VPN Detection", desc: "Detect residential proxies, VPN infrastructure, TOR usage, datacenter routing, traffic obfuscation, and suspicious network behavior." },
                { title: "Device Trust Scoring", desc: "Generate persistent device reputation, infrastructure trust scores, environment legitimacy ratings, spoofing probability indicators, and operational exposure analytics." },
                { title: "Linked Device Correlation", desc: "Connect shared infrastructure, linked accounts, onboarding ecosystems, suspicious device clusters, automation farms, and fraud relationships." },
                { title: "AI Infrastructure Intelligence", desc: "Use AI to identify emerging spoofing techniques, explain device anomalies, prioritize high-risk environments, detect coordinated infrastructure abuse, and adapt trust models dynamically." },
                { title: "Behavioral Device Analytics", desc: "Analyze interaction-device consistency, session rhythm, environmental stability, device-user trust alignment, and operational anomalies." },
                { title: "Cross-Platform Device Correlation", desc: "Correlate web sessions, mobile devices, authentication flows, transaction telemetry, onboarding workflows, and operational systems." }
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
              How DeepSense Detects Suspicious Infrastructure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests browser fingerprints, mobile telemetry, authentication events, session metadata, infrastructure signals, network routing data, and operating environment telemetry." },
                { title: "Step 2 — Profiling", desc: "The platform continuously learns trusted environments, stable device patterns, behavioral consistency, infrastructure reputation, environment legitimacy, and authentication baselines." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates emulator indicators, spoofing anomalies, rooted devices, suspicious routing, session compromise indicators, and infrastructure abuse patterns." },
                { title: "Step 4 — Scoring", desc: "The system generates device trust scores, infrastructure legitimacy ratings, account takeover indicators, automation exposure analytics, and environment risk classifications." },
                { title: "Step 5 — Action", desc: "High-risk infrastructure triggers MFA enforcement, onboarding restrictions, session termination, fraud escalation, and governance workflows." }
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
              Built for High-Risk Digital Infrastructure Environments
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
                { id: "enterprise", label: "Enterprise Security Teams" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect account takeover, suspicious authentication, device spoofing, and onboarding abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet infrastructure, synthetic onboarding, automation ecosystems, and session anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure customer sessions, checkout workflows, fake account ecosystems, and payment infrastructure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify emulator farms, multi-accounting, automated wagering, and bonus abuse infrastructure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Analyze insider infrastructure anomalies, suspicious workforce devices, operational compromise indicators, and unauthorized environments.</h4>
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
              Enterprise-Grade Infrastructure Security and Governance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Explainable Infrastructure Decisions", desc: "Transparent environment risk reasoning and trust scoring." },
                { title: "Immutable Audit Logging", desc: "Tamper-resistant infrastructure history." },
                { title: "Multi-Tenant Infrastructure Isolation", desc: "Secure enterprise environment separation." },
                { title: "Role-Based Operational Access", desc: "Granular device intelligence permissions." },
                { title: "Governance Workflow Integration", desc: "Integrated operational and compliance escalation." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">DEVICE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Device Intelligence?", 
                  a: "DeepSense Device Intelligence is a real-time infrastructure analysis engine that evaluates browser telemetry, mobile environments, authentication behavior, and device trust signals to detect fraud and suspicious infrastructure." 
                },
                { 
                  q: "Can DeepSense detect emulators and spoofed environments?", 
                  a: "Yes. The platform continuously identifies emulator farms, spoofed hardware, virtual environments, rooted devices, and synthetic infrastructure." 
                },
                { 
                  q: "Does DeepSense support persistent device trust scoring?", 
                  a: "Yes. DeepSense generates evolving device reputation and trust models using telemetry, behavior, session consistency, and infrastructure analytics." 
                },
                { 
                  q: "Can DeepSense detect account takeover infrastructure?", 
                  a: "Yes. The platform detects suspicious device switching, compromised sessions, abnormal authentication behavior, and infrastructure anomalies." 
                },
                { 
                  q: "Does DeepSense support proxy and VPN detection?", 
                  a: "Yes. DeepSense identifies VPNs, residential proxies, TOR routing, datacenter infrastructure, and suspicious network obfuscation patterns." 
                },
                { 
                  q: "Is DeepSense Device Intelligence suitable for enterprise deployment?", 
                  a: "Yes. DeepSense is designed for enterprise-scale fraud prevention, onboarding protection, authentication security, and operational infrastructure intelligence." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Infrastructure With Real-Time Device Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect spoofed environments, stop account takeover, strengthen onboarding trust, and uncover suspicious infrastructure using enterprise-grade device intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Device Intelligence Demo
              </Link>
              <Link href="/platform/device-intelligence#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Device Trust
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
