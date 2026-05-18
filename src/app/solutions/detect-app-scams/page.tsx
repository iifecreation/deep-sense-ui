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

export default function DetectAppScamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive app scam sandbox parameters
  const [interactionState, setInteractionState] = useState<string>("authentic");
  const [biometricTracking, setBiometricTracking] = useState<boolean>(true);
  const [deviceEnv, setDeviceEnv] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic session trust parameters
  const calculateSessionTrust = () => {
    let score = 98; // base trust score
    
    if (interactionState === "scam") score -= 52;
    if (!biometricTracking) score -= 22;
    if (deviceEnv) score -= 15;
    
    score = Math.max(score, 6);
    
    let status = "AUTHENTIC MOBILE SESSION";
    let color = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (score <= 35) {
      status = "REMOTE ACCESS SCAM TRIGGERED";
      color = "text-red-500 bg-red-500/10 border-red-500/20";
    } else if (score <= 65) {
      status = "HIGH VELOCITY BEHAVIORAL DRIFT";
      color = "text-amber-500 bg-amber-500/10 border-amber-500/20";
    } else if (score <= 85) {
      status = "UNVERIFIED EMULATOR CONTAINER DRIFT";
      color = "text-orange-400 bg-orange-400/10 border-orange-400/20";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateSessionTrust();

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
                MOBILE APP SCAM & BEHAVIORAL INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect App Scams and Protect Mobile <br />
                <span className="text-zinc-400">Customer Journeys in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises detect app-based scams, identify behavioral anomalies, prevent account takeover, and secure mobile ecosystems using AI-powered behavioral intelligence, device analytics, and real-time fraud detection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/detect-app-scams#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Mobile Scam Protection
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fintechs, banks, telecoms, ecommerce platforms, marketplaces, super apps, digital wallets, and enterprise mobile ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Behavioral Biometric & Mobile Scam Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Behavioral Biometric & Mobile Scam Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SCAM PROTECTION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live behavioral fraud intelligence environment visualizing touch and gesture biometrics, app session trust scoring, remote access indicators, behavioral drift detection, device compromise analytics, scam likelihood scoring, account takeover indicators, and real-time mobile risk intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono font-bold">Configure App Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Interaction state</span>
                        <select 
                          value={interactionState} 
                          onChange={(e) => setInteractionState(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Authentic human touch gesture</option>
                          <option value="scam">Remote access scam controller</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Tap pressure check</span>
                        <input 
                          type="checkbox" 
                          checked={biometricTracking} 
                          onChange={(e) => setBiometricTracking(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Emulator environments</span>
                        <input 
                          type="checkbox" 
                          checked={deviceEnv} 
                          onChange={(e) => setDeviceEnv(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Behavioral Biometrics Analyzer */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Panel 2 — Behavioral Biometrics Analyzer</span>
                      
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Typing cadence</span>
                          <span className="text-zinc-300">STABLE</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Touch pressure</span>
                          <span className="text-zinc-300">{biometricTracking ? "NORMAL" : "DRIFT DETECTED"}</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Swipe consistency</span>
                          <span className="text-zinc-300">92.4%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• abnormal interaction patterns tracked</span>
                      <span>• remote access probability evaluated</span>
                      <span>• accessibility permissions indexed</span>
                    </div>
                  </div>

                  {/* Right Column: Device & Mobile Threat Timeline */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Panel 4 — Mobile Threat Timeline</span>
                      
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Remote control</span>
                          <span className={interactionState === "scam" ? "text-red-400 animate-pulse" : "text-emerald-400"}>
                            {interactionState === "scam" ? "ACTIVE DETECTED" : "NONE"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Emulator check</span>
                          <span className={deviceEnv ? "text-red-400" : "text-emerald-400"}>
                            {deviceEnv ? "VIRTUAL DETECTED" : "SECURE PORTABLE"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Overlay attacks</span>
                          <span className="text-zinc-300">NONE DETECTED</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• session trust score calculated</span>
                      <span>• device compromise analytics active</span>
                      <span>• real-time mobile risk intelligence live</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel — Decision & Scorecard */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">Panel 1 — Mobile Trust Scorecard</span>
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full border text-[11px] font-black tracking-wider ${color}`}>
                        {status}
                      </span>
                      <span className="text-zinc-400">Mobile session trust resolved</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-500 block">SESSION TRUST SCORE</span>
                    <span className="text-2xl font-black text-white">{score}/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Mobile Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Mobile Ecosystems Face Increasing App-Based Scam and Social Engineering Threats
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern digital platforms increasingly rely on: mobile banking, super apps, ecommerce applications, digital wallets, mobile onboarding, app-based authentication, in-app payments, and customer self-service ecosystems. Fraudsters increasingly exploit mobile ecosystems using: remote access scams, overlay attacks, social engineering, fake app environments, malware-assisted fraud, account takeover, emulator abuse, session hijacking, and accessibility exploitation. Traditional fraud systems often struggle with: behavioral biometric analysis, real-time mobile session intelligence, device compromise visibility, scam pattern correlation, account takeover prevention, and operational scalability. Without connected mobile intelligence, organizations face: scam-related financial losses, customer trust erosion, account compromise, payment fraud, operational abuse, reputational damage, and increased fraud remediation costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Remote Access Scams", desc: "Fraudsters manipulate victims into granting remote control of mobile devices.", icon: <Shield /> },
                { title: "Behavioral Identity Manipulation", desc: "Attackers increasingly imitate legitimate user behavior patterns.", icon: <Users /> },
                { title: "Overlay & Accessibility Abuse", desc: "Malicious apps exploit mobile permissions and overlay systems.", icon: <Sliders /> },
                { title: "Emulator & Fake Device Environments", desc: "Fraudsters simulate mobile environments to evade traditional controls.", icon: <Clock /> },
                { title: "Account Takeover", desc: "Compromised mobile sessions enable unauthorized transactions and abuse.", icon: <Building /> },
                { title: "Social Engineering Attacks", desc: "Scammers exploit trust and human behavior to bypass security controls.", icon: <Sliders /> }
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

            {/* Mobile Fraud Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">MOBILE FRAUD LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. App Interaction", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Behavioral Analysis", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Device Verification", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Scam Scoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Intervention Workflows", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance Operations", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Mobile Scam and Behavioral Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral biometrics, device intelligence, graph analytics, session monitoring, AI anomaly detection, mobile telemetry analysis, and governance automation into a unified mobile fraud intelligence platform. The platform continuously evaluates: touch behavior, session integrity, device trust, onboarding consistency, behavioral drift, app telemetry, remote access indicators, graph relationships, and operational risk signals. DeepSense enables organizations to: detect app scams in real time, prevent account takeover, strengthen mobile trust, reduce fraud losses, improve customer protection, automate scam investigations, and modernize mobile fraud defense.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Detect app scams in real time", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Prevent account takeover", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen mobile trust", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Reduce fraud losses", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve customer protection", desc: "Support digital GRC with active security control overlays." },
                { title: "Automate scam investigations", desc: "Block duplicate submissions before cash-outs settle." }
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
              Mobile Fraud & Behavioral Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Behavioral Biometrics", desc: "Analyze typing cadence, touch pressure, swipe velocity, gesture consistency, navigation behavior, and interaction anomalies." },
                { title: "App Scam Detection", desc: "Detect remote access scams, overlay attacks, fake app behavior, accessibility abuse, malicious automation, and suspicious mobile workflows." },
                { title: "Device Trust Intelligence", desc: "Identify rooted devices, emulator environments, spoofed hardware, compromised operating systems, and suspicious mobile telemetry." },
                { title: "Account Takeover Detection", desc: "Monitor abnormal login behavior, session hijacking indicators, behavioral drift, authentication inconsistencies, and unauthorized access patterns." },
                { title: "Behavioral Trust Scoring", desc: "Generate session trust scores, mobile legitimacy ratings, behavioral confidence analytics, scam probability indicators, and operational exposure ratings." },
                { title: "Session & Interaction Analytics", desc: "Analyze mobile session behavior, app navigation flow, interaction consistency, customer journey anomalies, and automation indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked devices, scam ecosystems, connected accounts, session relationships, and behavioral fraud networks." },
                { title: "AI Scam Detection", desc: "Identify coordinated scam behavior, synthetic interaction patterns, automated workflows, social engineering indicators, and fraud orchestration activity." },
                { title: "Case Management & Investigations", desc: "Coordinate scam investigations, fraud escalations, customer protection workflows, evidence management, and remediation tracking." },
                { title: "Governance & Fraud Oversight", desc: "Support mobile fraud governance, operational transparency, customer protection programs, audit readiness, and enterprise fraud reporting." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Mobile App Scams
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests app telemetry, touch interactions, device signals, session activity, onboarding workflows, authentication events, and customer journey telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral biometrics, graph intelligence, device trust analytics, AI anomaly detection, session telemetry, and scam intelligence indicators." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates behavioral legitimacy, device integrity, session trust, account takeover indicators, scam exposure, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates session trust scores, fraud alerts, authentication interventions, account restrictions, and customer protection warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers scam investigations, fraud escalations, remediation workflows, governance reporting, and operational reviews." }
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
              Built for Mobile-First Digital Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Mobile Banking" },
                { id: "superapp", label: "Fintech & Super Apps" },
                { id: "ecommerce", label: "Ecommerce & Marketplaces" },
                { id: "telecom", label: "Telecom Applications" },
                { id: "wallet", label: "Digital Wallet Ecosystems" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect mobile payments, customer sessions, onboarding workflows, and digital wallets.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "superapp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor behavioral anomalies, session integrity, account takeover, and transaction trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure customer accounts, mobile checkout flows, app interactions, and payment journeys.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect subscriber abuse, SIM-related fraud, onboarding manipulation, and session anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "wallet" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent scam-driven transfers, remote access abuse, wallet compromise, and mobile fraud exposure.</h4>
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
              Real-Time Mobile Fraud and Scam Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Mobile Scam Operations Dashboard", desc: "Behavioral fraud alerts, scam visibility, account takeover indicators, and mobile risk analytics." },
                { title: "Behavioral Trust Intelligence", desc: "Session trust scoring, behavioral consistency analytics, interaction anomalies, and fraud probability visibility." },
                { title: "Device & Mobile Integrity Dashboard", desc: "Emulator detection, rooted device visibility, overlay attack monitoring, and mobile telemetry analytics." },
                { title: "Scam Relationship Analytics", desc: "Linked devices, connected scam ecosystems, graph relationships, and operational exposure visibility." },
                { title: "Investigation Workspace", desc: "Session timelines, graph investigations, evidence management, customer protection workflows, and GRC compliance reporting." }
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
                Enterprise-Grade Security for Mobile Fraud Protection
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single mobile device verified.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Scam Decisions", desc: "Every fraud decision includes reason codes, behavioral evidence, device indicators, graph relationships, and session context." },
                { title: "Audit Logging", desc: "Track fraud escalations, customer protection workflows, scam investigations, and governance actions." },
                { title: "Multi-Tenant Mobile Security", desc: "Secure operational separation across mobile ecosystems, application environments, and verification workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with fraud governance, operational resilience, mobile security frameworks, and customer protection obligations." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">MOBILE SCAM PROTECTION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect mobile app scams in real time?", 
                  a: "Yes. DeepSense continuously evaluates behavioral biometrics, device telemetry, session anomalies, and scam indicators in real time." 
                },
                { 
                  q: "Does DeepSense support behavioral biometric analysis?", 
                  a: "Yes. The platform analyzes typing cadence, touch behavior, swipe consistency, navigation flow, and interaction anomalies." 
                },
                { 
                  q: "Can DeepSense detect remote access scams and overlay attacks?", 
                  a: "Yes. DeepSense identifies remote-control indicators, overlay abuse, accessibility exploitation, and suspicious device behavior." 
                },
                { 
                  q: "Does DeepSense support account takeover prevention?", 
                  a: "Yes. The platform detects session hijacking, behavioral drift, authentication inconsistencies, and unauthorized mobile access." 
                },
                { 
                  q: "Can DeepSense identify emulator and fake device environments?", 
                  a: "Yes. DeepSense continuously monitors emulator farms, rooted devices, spoofed environments, and suspicious mobile telemetry." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale mobile ecosystems?", 
                  a: "Yes. DeepSense is designed for fintechs, banks, telecoms, marketplaces, ecommerce platforms, and enterprise mobile operations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Protect Mobile Customer Journeys With Real-Time Scam Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure mobile applications and prevent <br />
                <span className="text-white/40 font-bold">app scams dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect app scams, prevent account takeover, strengthen mobile trust, and reduce fraud exposure using enterprise-grade behavioral intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/detect-app-scams#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Mobile Scam Protection
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
