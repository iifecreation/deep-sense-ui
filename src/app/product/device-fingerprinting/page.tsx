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
  Cpu as HardwareIcon,
  Wifi,
  Search,
  Check
} from "lucide-react";

export default function DeviceFingerprintingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive Browser Telemetry Diagnostic states
  const [rootJailbreak, setRootJailbreak] = useState<boolean>(true);
  const [emulatorActive, setEmulatorActive] = useState<boolean>(true);
  const [residentialProxy, setResidentialProxy] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic device trust score based on inputs
  const calculateDeviceTrust = () => {
    let score = 95; // start with perfect score
    
    if (rootJailbreak) score -= 40;
    if (emulatorActive) score -= 35;
    if (residentialProxy) score -= 15;
    
    score = Math.max(score, 3);
    
    let decision = "APPROVE DEVICE SESSION";
    let color = "text-emerald-500";
    if (score < 30) {
      decision = "BLOCK ACCESS & REPORT INFRASTRUCTURE";
      color = "text-red-500";
    } else if (score < 60) {
      decision = "CHALLENGE WITH RISK-BASED MFA";
      color = "text-amber-500";
    } else if (score < 85) {
      decision = "STEP-UP VERIFICATION REQUIRED";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculateDeviceTrust();

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
                <Fingerprint className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME DEVICE INTELLIGENCE & TRUST
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Identify Fraudulent Devices <br />
                <span className="text-zinc-400">Before Fraud Happens</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense combines advanced device fingerprinting, behavioral telemetry, network intelligence, and graph analytics to detect high-risk devices, account sharing, emulator farms, spoofed environments, and connected fraud infrastructure in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fraud Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, ecommerce platforms, telecom wallets, gaming ecosystems, marketplaces, and enterprise fraud operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Device Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <HardwareIcon className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Device Telemetry Diagnostic</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">PERSISTENT HARDWARE SYNC ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Environment Attributes</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Jailbreak / Root OS</span>
                        <input 
                          type="checkbox" 
                          checked={rootJailbreak} 
                          onChange={(e) => setRootJailbreak(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Android/iOS Emulator</span>
                        <input 
                          type="checkbox" 
                          checked={emulatorActive} 
                          onChange={(e) => setEmulatorActive(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Residential Proxy Network</span>
                        <input 
                          type="checkbox" 
                          checked={residentialProxy} 
                          onChange={(e) => setResidentialProxy(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE HARDWARE SIGNATURE ANALYSIS</span>
                        <span>SESSION ACTIVE</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Persistent Device Hash</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">ID: fp_9921_aa92</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Shared Device Graph</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Nodes Linked: 4 profiles</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">DEVICE TRUST SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUTOMATED ENFORCEMENT RECOMMENDATION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{decision}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Telemetry parameters: Screen canvas match</span>
                      <span>GDPR-Safe Hashed Metadata active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Device Vulnerabilities</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Fraudsters Hide Behind Devices, Emulators, and Shared Infrastructure
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern fraud operations increasingly rely on emulator farms, spoofed devices, VPN/proxy infrastructure, device cloning, session hijacking, shared devices, and synthetic onboarding environments. Traditional security systems often depend only on IP addresses, cookies, browser metadata, and static authentication. These signals are easily manipulated by sophisticated attackers. Without advanced device intelligence, organizations struggle to detect repeat fraud actors, multi-account abuse, account takeover infrastructure, synthetic identity clusters, coordinated fraud rings, and automated onboarding farms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Emulator Farms", desc: "Fraudsters use virtualized environments to automate account creation and abuse.", icon: <Server /> },
                { title: "Device Spoofing", desc: "Attackers manipulate browser and device fingerprints to evade fraud controls.", icon: <Zap /> },
                { title: "Shared Device Abuse", desc: "Multiple fraudulent accounts operate from the same device infrastructure.", icon: <Users /> },
                { title: "VPN & Proxy Networks", desc: "Attackers hide geolocation and identity behind anonymized infrastructure.", icon: <Globe /> },
                { title: "Rooted & Compromised Devices", desc: "High-risk devices bypass platform security and integrity protections.", icon: <Shield /> },
                { title: "Cross-Account Fraud", desc: "Fraud rings reuse infrastructure across onboarding, payments, and abuse campaigns.", icon: <Network /> }
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

            {/* Session Threat Timeline Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">DEVICE SESSION RISK LIFECYCLE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Device Load", desc: "Hashed hardware metadata and canvas identifiers evaluated." },
                  { title: "2. Root Status Sync", desc: "Secure element enclave signatures queried to flag rooted devices." },
                  { title: "3. Network Match", desc: "Proxy networks and geolocation mismatches parsed." },
                  { title: "4. Graph Correlation", desc: "Identifies whether device is shared by multiple suspect nodes." },
                  { title: "5. Risk Output", desc: "Device score logs immediate adaptive MFA challenges." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Device Security</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time Device Trust & Fraud Infrastructure Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines device fingerprinting, behavioral telemetry, network analysis, graph intelligence, and session risk scoring into a unified device intelligence platform. The platform continuously evaluates device integrity, environment trust, session behavior, network reputation, cross-account relationships, fraud infrastructure reuse, emulator indicators, spoofing signals, and payment-device correlation. DeepSense enables organizations to stop repeat fraud, identify linked abuse, reduce account takeover risk, improve onboarding trust, strengthen payment authorization, reduce false positives, and detect coordinated fraud infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop repeat fraud", desc: "Instantly recognize blacklisted devices across organization layers." },
                { title: "Identify linked abuse", desc: "Reveal when 20 accounts share a single browser footprint." },
                { title: "Reduce ATO risk", desc: "Block logins initiated on unverified device enclaves." },
                { title: "Improve onboarding trust", desc: "Score mobile devices during signup events in milliseconds." },
                { title: "Strengthen payment auth", desc: "Correlate credit card transactions with historical device logs." },
                { title: "Detect coordinated rings", desc: "Map emulator clusters using our advanced graph ledger." }
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
              Enterprise Device Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Persistent Fingerprinting", desc: "Generate resilient fingerprints using browser telemetry, mobile signals, hardware characteristics, behavioral attributes, network telemetry, and session metadata." },
                { title: "Device Trust Scoring", desc: "Analyze device history, fraud exposure, behavioral consistency, authentication trust, transaction risk, and infrastructure reputation." },
                { title: "Emulator Detection", desc: "Detect virtualized environments, automated browsers, synthetic mobile devices, device farms, sandboxed sessions, and scripted environments." },
                { title: "Rooted & Jailbreak Alerts", desc: "Identify rooted Android devices, jailbroken iOS devices, modified OS environments, insecure runtime environments, and elevated-risk devices." },
                { title: "VPN / TOR / Proxy Intelligence", desc: "Monitor anonymized infrastructure, high-risk VPN networks, TOR activity, residential proxy abuse, geolocation masking, and network trust." },
                { title: "Shared Device Detection", desc: "Correlate linked accounts, multi-account abuse, shared wallets, fraud clusters, household relationships, and suspicious infrastructure reuse." },
                { title: "Session Risk Intelligence", desc: "Evaluate login behavior, session anomalies, impossible travel, interaction inconsistencies, and session hijack indicators." },
                { title: "Device Graph Intelligence", desc: "Visualize connected devices, linked accounts, fraud infrastructure, payment relationships, abuse clusters, and coordinated fraud ecosystems." },
                { title: "Trusted Device Management", desc: "Support trusted device lists, adaptive authentication, risk-based MFA, device authorization policies, and continuous trust monitoring." },
                { title: "Real-Time Risk Decisioning", desc: "Decision outcomes include approve, challenge, require MFA, step-up verification, block access, and create investigation case." }
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
              How DeepSense Builds Device Trust Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests browser telemetry, mobile device data, session activity, network intelligence, authentication events, and payment telemetry." },
                { title: "Step 2 — Analysis", desc: "The platform evaluates device integrity, emulator indicators, spoofing attempts, rooted/jailbroken signals, proxy/VPN usage, and network trust." },
                { title: "Step 3 — Correlation", desc: "DeepSense correlates linked accounts, shared infrastructure, payment relationships, behavioral patterns, and historical fraud exposure." },
                { title: "Step 4 — Scoring", desc: "The platform generates device trust scores, session risk scores, fraud likelihood, and account linkage indicators." },
                { title: "Step 5 — Enforcement", desc: "High-risk activity triggers adaptive authentication, MFA enforcement, onboarding restrictions, payment review, and fraud investigations." }
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
              Built for High-Risk Digital Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Banking & Fintech" },
                { id: "ecommerce", label: "Ecommerce & Marketplaces" },
                { id: "gaming", label: "Gaming & Betting Platforms" },
                { id: "telecom", label: "Telecom Wallets" },
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect account onboarding, logins, and payment authorization.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure retail neobank account logins. Identify when compromised profiles are accessed from rooted hardware environments running geolocation proxies.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect account farming, checkout fraud, and refund abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Verify digital checkout events using resilient device identifiers, blocking coupon-scraping bots running bulk browser environments.
                  </p>
                </div>
              )}
              {activeTab === "gaming" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify emulator abuse, multi-account gaming fraud, and bonus farming.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Identify coordinated players betting opposing outcomes across linked profiles to clear bonus rollover thresholds with zero risk.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor mobile money, SIM-swap abuse, and telecom fraud rings.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Telecom and carrier wallets face massive velocity and SIM swap account takeovers. DeepSense evaluates phone carrier records and high-frequency transfers in real time.
                  </p>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect wallet farming, sybil attacks, and coordinated infrastructure abuse.</h4>
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
              Unified Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies device trust diagnostics with our overarching biometrics, KYC, graph, and transaction ledgers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Behavioral Biometrics", desc: "Correlate device trust with behavioral interaction patterns." },
                { title: "Account Takeover Prevention", desc: "Detect suspicious login infrastructure and compromised sessions." },
                { title: "Transaction Fraud Detection", desc: "Strengthen payment risk scoring using device intelligence." },
                { title: "Graph Intelligence", desc: "Identify connected fraud infrastructure and linked entities." },
                { title: "KYC Verification", desc: "Strengthen onboarding trust and synthetic identity detection." },
                { title: "Case Management", desc: "Escalate suspicious devices into investigation workflows." },
                { title: "AML Monitoring", desc: "Correlate device infrastructure with financial crime investigations." }
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
              Real-Time Device Intelligence Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Device Operations Dashboard", desc: "Device trust analytics, fraud exposure monitoring, and session activity tracking." },
                { title: "Emulator & Spoofing Intelligence", desc: "Emulator heatmaps, automation alerts, and suspicious environment monitoring." },
                { title: "Shared Infrastructure Analytics", desc: "Linked accounts, shared devices, and network overlap monitoring." },
                { title: "Session Risk Monitoring", desc: "Login anomalies, session hijack indicators, and impossible travel analyses." },
                { title: "Investigation Workspace", desc: "Device history logs, connected graph maps, and fraud evidence timelines." }
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
              Designed for Enterprise Fraud Prevention
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure, real-time protection across globally scalable contactless architectures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Ecommerce", "Gaming & Betting", "Telecom Wallets", "Crypto Platforms",
                "Digital Banking", "Marketplaces", "Super Apps", "BNPL Providers", "Embedded Finance", "Consumer Platforms"
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
                Privacy-Conscious, Explainable, and Enterprise-Ready
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes exposure to personal data using hashed and tokenized device intelligence architectures.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Privacy-Conscious Fingerprinting", desc: "Minimize exposure to personal data using hashed and tokenized architectures." },
                { title: "Explainable Risk Decisions", desc: "Every risk decision includes trust indicators, environment analysis, and behavioral evidence." },
                { title: "Audit Logging", desc: "Track authentication events, reviews, and enforcement actions." },
                { title: "Multi-Tenant Isolation", desc: "Secure organizational separation across telemetry datasets." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Device FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is device fingerprinting?", 
                  a: "Device fingerprinting identifies devices using browser, mobile, behavioral, and environment telemetry to establish device trust and detect fraud." 
                },
                { 
                  q: "Can DeepSense detect emulators and spoofed devices?", 
                  a: "Yes. DeepSense detects emulators, virtualized environments, automation infrastructure, and spoofing attempts in real time." 
                },
                { 
                  q: "Does DeepSense support mobile device intelligence?", 
                  a: "Yes. The platform supports mobile device trust analysis, rooted/jailbroken detection, and mobile session intelligence." 
                },
                { 
                  q: "Can the platform identify shared devices across accounts?", 
                  a: "Yes. DeepSense correlates linked accounts, payment methods, sessions, and behavioral telemetry to identify shared infrastructure." 
                },
                { 
                  q: "Does DeepSense support adaptive authentication?", 
                  a: "Yes. The platform supports risk-based MFA, step-up authentication, and trusted device workflows." 
                },
                { 
                  q: "Is device fingerprinting privacy-conscious?", 
                  a: "Yes. DeepSense is designed around tokenized and privacy-conscious telemetry collection architectures." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Experiences With Device Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Detect fraud infrastructure and stop account <br />
                <span className="text-white/40 font-bold">abuse using real-time session intelligence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect fraud infrastructure, stop account abuse, strengthen authentication, and improve payment trust using enterprise-grade device fingerprinting and real-time session intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/fraud-detection" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Fraud Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
