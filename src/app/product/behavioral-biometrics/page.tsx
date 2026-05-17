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
  ShoppingBag,
  Wallet,
  History,
  TrendingDown,
  Clock,
  FileSpreadsheet,
  FileText,
  Search
} from "lucide-react";

export default function BehavioralBiometricsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Simulator states
  const [telemetryType, setTelemetryType] = useState<string>("human");
  const [keystrokeDelay, setKeystrokeDelay] = useState<number>(142);
  const [behaviorRisk, setBehaviorRisk] = useState<number>(14);
  const [adaptiveAction, setAdaptiveAction] = useState<string>("NO_FRICTION");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleTelemetryChange = (type: string) => {
    setTelemetryType(type);
    if (type === "human") {
      setKeystrokeDelay(142);
      setBehaviorRisk(14);
      setAdaptiveAction("NO_FRICTION (Natural Typing Rhythm)");
    } else if (type === "bot") {
      setKeystrokeDelay(2);
      setBehaviorRisk(98);
      setAdaptiveAction("SESSION_REVOKED (Mechanical Cadence Detected)");
    } else {
      setKeystrokeDelay(64);
      setBehaviorRisk(56);
      setAdaptiveAction("TRIGGER_MFA_CHALLENGE (Unusual Navigation Flow)");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Fingerprint className="w-3.5 h-3.5 text-lime-400" />
                Behavioral Biometrics & Continuous Authentication
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Bots, Imposters, and Compromised <br />
                <span className="text-zinc-400">Sessions Through Human Behavior.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense analyzes typing cadence, touch behavior, mouse movement, navigation rhythm, session timing, interaction patterns, and behavioral anomalies to identify suspicious activity continuously across onboarding, login, payments, and active sessions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/account-takeover" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Account Takeover
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for financial institutions, fintechs, payment providers, crypto exchanges, gaming platforms, and enterprise security teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Behavioral Intelligence Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">CONTINUOUS USER BEHAVIOR telemetry MONITOR</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SIGNAL TELEMETRY: HUMAN vs BOT</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Typing rhythm simulator and triggers */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Behavior Simulator Panel</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">KEYSTROKE DWELL TIME</span>
                        <span className="text-white font-bold text-xs">{keystrokeDelay} ms</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">INTERACTION STYLE PROFILE</span>
                        <span className="text-white">
                          {telemetryType === "human" ? "Variable cadence (Dynamic human flow)" : telemetryType === "bot" ? "Constant cadence (Headless Bot Script)" : "Erratic flow (Atypical user sweep)"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "human", label: "Simulate Legitimate Human Typing" },
                        { id: "bot", label: "Simulate Scripted Headless Bot navigation" },
                        { id: "anomaly", label: "Trigger Atypical Navigation anomaly" }
                      ].map((sim) => (
                        <div 
                          key={sim.id}
                          onClick={() => handleTelemetryChange(sim.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            telemetryType === sim.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{sim.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Decisions Panel & Risk meter */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Continuous Behavioral Risk Score</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {behaviorRisk}/100 Risk
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">STATUS: {adaptiveAction}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Typing Cadence Score</span>
                          <span className={telemetryType === "bot" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {telemetryType === "bot" ? "FAILED (Highly Constant)" : "PASSED (Natural Drift)"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Mouse Trajectory Check</span>
                          <span className={telemetryType === "bot" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {telemetryType === "bot" ? "AUTOMATED (Straight Vectors)" : "PASSED (Organic Curvatures)"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Navigation Flow Consistency</span>
                          <span className={telemetryType === "anomaly" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {telemetryType === "anomaly" ? "UNUSUAL_PATHWAYS" : "CLEAN"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Insider Risk Signal</span>
                          <span className="text-white">0 Malicious Logs (Clean)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-brand-lime text-neutral-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/90 transition-all text-center">
                        Enforce Adaptive Friction
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        View Continuous Session Logs
                      </button>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Security Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Passwords and MFA Are No Longer Enough.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern attackers increasingly bypass traditional authentication using stolen credentials, session hijacking, malware, social engineering, bots, and MFA fatigue attacks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stolen Credentials", desc: "Attackers use breached usernames and passwords to impersonate legitimate users.", icon: <FileCheck /> },
                { title: "Session Hijacking", desc: "Compromised sessions bypass traditional login-based security.", icon: <Users /> },
                { title: "Automated Bots", desc: "Bots imitate normal user behavior to avoid detection and abuse platforms at scale.", icon: <Cpu /> },
                { title: "Behavioral Mimicry", desc: "Attackers attempt to imitate real users using scripts and automation frameworks.", icon: <Fingerprint /> },
                { title: "Insider Threats", desc: "Suspicious employee or privileged-user activity may appear valid at the identity layer.", icon: <AlertTriangle /> },
                { title: "Static Authentication", desc: "Most systems authenticate users once and trust sessions indefinitely.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE BEHAVIORAL INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Continuous Verification</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Continuous Identity Verification Through Behavioral Intelligence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense evaluates how users behave — not just who they claim to be — to detect fraud, impersonation, automation, insider abuse, and suspicious session activity in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Typing Biometrics", desc: "Analyze keystroke timing, typing rhythm, cadence, and interaction consistency." },
                { title: "Navigation Intelligence", desc: "Track click paths, page transitions, browsing behavior, and interaction flow anomalies." },
                { title: "Mouse & Touch Dynamics", desc: "Evaluate cursor movement, swipe behavior, scrolling patterns, and interaction smoothness." },
                { title: "Bot Detection", desc: "Identify scripted interactions, automation frameworks, headless browsers, and behavioral inconsistencies." },
                { title: "Continuous Authentication", desc: "Continuously evaluate user behavior after login to detect evolving compromise indicators." },
                { title: "Insider & UEBA Signals", desc: "Identify suspicious employee actions, privilege misuse, abnormal access behavior, and operational anomalies." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: BEHAVIORAL BIOMETRICS SIGNALS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Subtle Signals</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Behavioral Signals That Are Difficult to Fake.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense captures subtle behavioral patterns that help distinguish legitimate users from imposters, bots, and compromised sessions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Typing Cadence", desc: "Measure typing speed, rhythm, pauses, and consistency during interactions." },
                { title: "Mouse Movement Trajectory", desc: "Analyze cursor velocity, trajectory, hesitation, acceleration, and precision curves." },
                { title: "Touch & Swipe Behavior", desc: "Evaluate mobile interaction rhythm, swipe pressure, and gesture consistency." },
                { title: "Navigation Rhythm", desc: "Monitor page traversal timing, interaction sequencing, and session pacing." },
                { title: "Session Timing Velocity", desc: "Detect unusual inactivity, rapid automation, or suspicious interaction bursts." },
                { title: "Interaction Friction Check", desc: "Identify unusual hesitation, repetitive patterns, or scripted actions." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sig.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: BOT & AUTOMATION DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Anti-Captcha Automation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect Automated Abuse Beyond Traditional CAPTCHA.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense identifies bots and automated abuse using behavioral analysis instead of relying only on static challenge-response systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Scripted Navigation Detection", desc: "Identify repetitive, machine-like navigation flows and interaction timing." },
                { title: "Headless Browser Detection", desc: "Detect suspicious browser characteristics and automation frameworks." },
                { title: "Behavioral Inconsistency Checks", desc: "Identify sessions that fail to behave like legitimate humans." },
                { title: "Session Velocity Tracking", desc: "Detect impossible interaction speeds and suspicious action bursts." },
                { title: "Multi-Account Automation", desc: "Identify coordinated automation activity across accounts, devices, or wallets." },
                { title: "Adaptive Challenge Escalation", desc: "Trigger stronger verification parameters when automation risk increases." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CONTINUOUS AUTHENTICATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Continuous Evaluation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Verify Identity Continuously — Not Just at Login.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense continuously evaluates session behavior after authentication to detect compromised sessions and evolving account takeover risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Session Drift Detection", desc: "Identify sessions that gradually diverge from normal customer behavior." },
                { title: "Behavioral Risk Scoring", desc: "Update risk scores dynamically throughout the session lifecycle." },
                { title: "Adaptive Friction Enforcement", desc: "Apply MFA, biometric checks, or additional verification only when risk increases." },
                { title: "Privileged Action Monitoring", desc: "Evaluate sensitive actions such as transfers, password resets, payout changes, or admin operations." },
                { title: "Cross-Channel Correlation", desc: "Correlate browser, mobile, API, payment, and device activity together." },
                { title: "Session Revocation commands", desc: "Terminate suspicious sessions automatically before fraud escalates." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{val.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: UEBA & INSIDER THREAT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">UEBA Profiling</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Detect Abnormal User and Entity Behavior Across the Organization.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense extends behavioral intelligence into UEBA-style monitoring for suspicious employee, administrator, and operational activity.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Privilege Misuse Detection", desc: "Identify unusual access patterns, privilege escalation, and risky operational actions." },
                    { title: "Insider Threat Indicators", desc: "Detect abnormal behavior from employees, agents, vendors, or administrators." },
                    { title: "Access Pattern Analysis", desc: "Monitor unusual login times, locations, devices, and workflow activity." }
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

              {/* Right Column: Visual UEBA anomalies timeline mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">ORGANIZATIONAL UEBA MONITOR</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Operator ID: OPR-801</span>
                      <span className="text-red-400 font-bold">PRIVILEGE_ESC_ATTEMPT</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Action Timing Check</span>
                      <span className="text-red-400 font-bold">ERRATIC (Rapid queries outside office hours)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: ADAPTIVE AUTHENTICATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Challenge Triggers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Reduce Friction While Increasing Security.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense uses behavioral intelligence to apply security dynamically instead of challenging every user equally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Step-Up MFA", desc: "Trigger MFA only when behavioral risk increases." },
                { title: "Biometric Verification", desc: "Require liveness or selfie verification for suspicious activity." },
                { title: "Session Challenge triggers", desc: "Challenge suspicious sessions before sensitive actions occur." },
                { title: "Transaction Holds", desc: "Pause risky payments or transfers pending behavioral check resolutions." },
                { title: "Progressive Friction parameters", desc: "Increase security parameters gradually as behavioral anomalies escalate." },
                { title: "Silent Monitoring flow", desc: "Continue monitoring low-confidence anomalies without disrupting legitimate users immediately." }
              ].map((res, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{res.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: FRAUD & RISK INTEGRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Behavioral Intelligence Connected to Fraud, AML, and Graph Risk.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Behavioral signals become significantly more powerful when combined with transaction intelligence, graph analytics, device risk, AML exposure, and document fraud signals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Detection Contribution", desc: "Behavioral anomalies contribute directly to fraud scoring and transaction monitoring." },
                { title: "Account Takeover Protection", desc: "Behavioral drift strengthens account compromise detection." },
                { title: "Graph Intelligence networks", desc: "Suspicious sessions and devices become connected fraud entities inside graph investigations." },
                { title: "AML Monitoring links", desc: "Behavioral anomalies linked to suspicious movement patterns strengthen AML investigations." },
                { title: "Case Management workflows", desc: "High-risk behavioral events can automatically create investigation cases." },
                { title: "SIEM & Security Operations", desc: "Export behavioral intelligence events into security monitoring workflows and SOC operations." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: REAL-TIME ANALYST VISIBILITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Analyst Portal</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Give Analysts Full Visibility Into Suspicious Session Behavior.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Behavior timelines", desc: "Visualize key interactions, scroll actions, and keystroke events in chronological order." },
                { title: "Typing cadence comparisons", desc: "Compare current keystroke metrics against user baseline signatures visually." },
                { title: "Bot probability score logs", desc: "Observe exact automation, mechanical flow, and puppet driver scores." },
                { title: "Linked device intelligence", desc: "Correlate abnormal session behavior with untrusted operating system parameters." },
                { title: "Graph-linked sessions", desc: "Map identical telemetry patterns across separate accounts and device signatures." },
                { title: "Adaptive response history", desc: "Track every step-up verification prompted, completed, or bypassed during the session." }
              ].map((ana, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ana.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ana.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Behavioral Intelligence for High-Risk Digital Platforms.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Detect suspicious banking sessions, account takeover attempts, and fraudulent transfers." },
                { title: "Fintech", desc: "Protect wallets, onboarding, payouts, and customer accounts against automation and impersonation." },
                { title: "E-Commerce", desc: "Detect checkout bots, account abuse, refund fraud, and credential stuffing." },
                { title: "Gaming & Betting", desc: "Identify automation, multi-accounting, account sharing, and suspicious player behavior." },
                { title: "Crypto & Web3", desc: "Protect exchange accounts, wallets, and privileged actions from compromised sessions." },
                { title: "Enterprise Platforms", desc: "Monitor employee behavior, privileged access, insider threats, and operational anomalies." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: SECURITY & PRIVACY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Privacy Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Privacy-Aware Behavioral Intelligence.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that require explainable behavioral intelligence while maintaining governance, privacy, and operational transparency.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Tenant isolation", "Role-based access", "Encrypted telemetry", "Evidence controls",
                "Audit logging", "Private deploy", "On-prem deploy", "Configurable telemetry"
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Behavior FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What are behavioral biometrics?", 
                  a: "Behavioral biometrics analyze how users interact with systems — including typing, navigation, touch behavior, and session rhythm — to identify suspicious activity." 
                },
                { 
                  q: "Can DeepSense detect bots?", 
                  a: "Yes. DeepSense detects scripted interactions, automation frameworks, behavioral inconsistencies, and suspicious navigation patterns." 
                },
                { 
                  q: "Does DeepSense support continuous authentication?", 
                  a: "Yes. DeepSense continuously evaluates session behavior after login to detect evolving account compromise risk." 
                },
                { 
                  q: "Can behavioral intelligence contribute to fraud scoring?", 
                  a: "Yes. Behavioral signals integrate directly into fraud scoring, account takeover detection, graph intelligence, and AML investigations." 
                },
                { 
                  q: "Does DeepSense support insider threat monitoring?", 
                  a: "Yes. DeepSense includes UEBA-style capabilities for suspicious employee and privileged-user behavior analysis." 
                },
                { 
                  q: "Can DeepSense trigger adaptive authentication?", 
                  a: "Yes. Behavioral risk can dynamically trigger MFA, biometric checks, liveness verification, session challenges, or account restrictions." 
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

        {/* ================= SECTION 14: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to detect suspicious behavior in real time?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect users and platforms through continuous <br />
                <span className="text-white/40">behavioral intelligence and continuous authentication.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense combines behavioral biometrics, bot detection, continuous authentication, UEBA-style analytics, and adaptive security workflows to stop suspicious sessions before fraud escalates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore AML Monitoring
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
