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

export default function AccountTakeoverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive ATO Dashboard mockup states
  const [activeDefense, setActiveDefense] = useState<string>("travel");
  const [loginRiskScore, setLoginRiskScore] = useState<number>(89);
  const [sessionAction, setSessionAction] = useState<string>("FORCE_MFA_CHALLENGE");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleDefenseChange = (defenseType: string) => {
    setActiveDefense(defenseType);
    if (defenseType === "travel") {
      setLoginRiskScore(89);
      setSessionAction("FORCE_MFA_CHALLENGE (Impossible Travel Detected)");
    } else if (defenseType === "biometrics") {
      setLoginRiskScore(94);
      setSessionAction("SESSION_REVOKED (Bot / Mimicry Signal)");
    } else {
      setLoginRiskScore(32);
      setSessionAction("ALLOW_SESSION (Clean Session Logs)");
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
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                Account Takeover & Session Protection
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Stop Account Takeovers Before <br />
                <span className="text-zinc-400">Sessions Become Financial Losses.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense combines behavioral biometrics, device intelligence, session analytics, graph intelligence, impossible travel detection, MFA risk analysis, and fraud scoring to detect and stop account takeover attacks in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/behavioral-biometrics" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Behavioral Biometrics
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, payment platforms, crypto exchanges, e-commerce companies, gaming platforms, and enterprise security teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive ATO Command-Center Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">ACCOUNT TAKEOVER PROTECTION PORTAL</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">MONITOR ACTIVE • Continuous Session Profiling</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Active Session Map and control triggers */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Session Threat Diagnostics</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">LAST LOGIN LOCATION</span>
                        <span className="text-white font-bold">Lagos, Nigeria $\rightarrow$ London, GBR</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">ELAPSED TIME DIFFERENCE</span>
                        <span className="text-white">12 Minutes (Impossible Travel)</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">DEVICE TRUST SCORE</span>
                        <span className="text-red-400 font-bold">UNTRUSTED_OS_EMULATOR</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "travel", label: "Analyze Travel Feasibility & Locations" },
                        { id: "biometrics", label: "Compare Typing Cadence & Rhythm" },
                        { id: "clean", label: "Inspect Normal Verified Session" }
                      ].map((def) => (
                        <div 
                          key={def.id}
                          onClick={() => handleDefenseChange(def.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeDefense === def.id 
                              ? "bg-red-500/10 border-red-500 text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{def.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Decisions Panel & Risk meter */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Adaptive Login Risk Score</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {loginRiskScore}/100 Risk
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">ACTION: {sessionAction}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Impossible Travel Status</span>
                          <span className={activeDefense === "travel" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeDefense === "travel" ? "HIGH_TRAVEL_VELOCITY" : "PASSED"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Typing Cadence Check</span>
                          <span className={activeDefense === "biometrics" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeDefense === "biometrics" ? "BOT_MIMICRY_DETECTED" : "MATCHES_PROFILE"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">IP Reputation Status</span>
                          <span className="text-white">VPN / Proxy Detected</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Session Token Integrity</span>
                          <span className="text-brand-lime font-bold">Valid Token (Replay Clear)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-all text-center">
                        Revoke active Session
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Escalate to SOC Triage
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Threat Mechanics</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Account Takeovers Are Becoming Faster, Smarter, and Harder to Detect.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern attackers use credential stuffing, phishing kits, malware, session hijacking, SIM swaps, MFA fatigue, device spoofing, bots, and behavioral imitation to compromise accounts at scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Credential Stuffing", desc: "Attackers use breached username/password combinations across platforms to gain unauthorized access.", icon: <FileCheck /> },
                { title: "Session Hijacking", desc: "Compromised tokens, stolen cookies, and replayed sessions bypass basic login security.", icon: <Users /> },
                { title: "MFA Fatigue", desc: "Attackers abuse push notifications and repeated MFA prompts to trick users into approving access.", icon: <AlertTriangle /> },
                { title: "Device Spoofing", desc: "Fraudsters disguise emulators, rooted devices, VPNs, and automated browsers as legitimate users.", icon: <Smartphone /> },
                { title: "Behavioral Mimicry", desc: "Bots and attackers attempt to imitate legitimate user behavior to avoid detection.", icon: <Fingerprint /> },
                { title: "Delayed Fraud Detection", desc: "Many systems only analyze login events instead of monitoring sessions continuously.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE ATO PROTECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Continuous Protection</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Continuous Session Intelligence Beyond Traditional Authentication.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense evaluates every login, session, device interaction, behavioral signal, and transaction continuously to identify compromised accounts before fraud escalates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Login Risk Analysis", desc: "Analyze login attempts using device intelligence, location, IP reputation, impossible travel, and graph-linked risk." },
                { title: "Behavioral Biometrics", desc: "Monitor typing cadence, navigation patterns, session rhythm, interaction timing, and behavioral consistency." },
                { title: "Device Intelligence", desc: "Detect rooted devices, emulators, VPNs, TOR usage, device spoofing, and suspicious device reuse." },
                { title: "Session Monitoring", desc: "Continuously score active sessions for suspicious activity and evolving takeover indicators." },
                { title: "Adaptive Authentication", desc: "Trigger MFA, biometric verification, liveness checks, or additional verification dynamically." },
                { title: "Real-Time Fraud Prevention", desc: "Block transactions, revoke sessions, freeze actions, or escalate cases automatically when risk increases." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: LOGIN RISK INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Evaluation Layer</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Evaluate Every Login Attempt in Real Time.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense evaluates login context using risk signals across identity, device, behavior, geography, graph intelligence, and historical activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Impossible Travel Detection", desc: "Detect impossible geographic movement between logins based on time and physical distance." },
                { title: "New Device Detection", desc: "Identify device signatures never previously associated with the user profile." },
                { title: "IP Reputation checks", desc: "Analyze VPNs, TOR exit nodes, residential proxies, cloud ranges, and suspicious IPs." },
                { title: "Velocity Analysis", desc: "Detect rapid login attempts, credential stuffing, and password spray patterns." },
                { title: "Device Trust Scoring", desc: "Assign trust levels based on device history, abuse exposure, and risk indicators." },
                { title: "Behavioral Consistency", desc: "Compare current login dynamics against historical user profiles." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sig.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: BEHAVIORAL BIOMETRICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Interaction Profiling</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect Suspicious Sessions Using Behavioral Biometrics.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense continuously analyzes user interaction patterns to identify bots, imposters, automated abuse, and compromised sessions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Typing Cadence Rhythm", desc: "Monitor typing velocity, keystroke dwell timing, and interaction consistency." },
                { title: "Navigation Patterns flow", desc: "Analyze click progression, page transitions, and browse behavior anomalies." },
                { title: "Mouse & Touch Dynamics", desc: "Evaluate cursor path smoothness, touch swipe vectors, and scrolling rhythm." },
                { title: "Session Pacing indicators", desc: "Detect scripted pacing, mechanical delays, and automated workflow triggers." },
                { title: "Behavioral Drift logs", desc: "Identify sessions that diverge from established customer interaction signatures." },
                { title: "Bot Detection frameworks", desc: "Detect automated browsing tools, headless environments, and puppet controllers." }
              ].map((chk, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{chk.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{chk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: DEVICE INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Hardware Analysis</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Identify Suspicious Devices and Infrastructure.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense evaluates devices continuously to identify risky infrastructure associated with account takeover activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Rooted & Jailbreak checks", desc: "Identify operating systems with weakened security parameters." },
                { title: "Emulator Detection logs", desc: "Detect emulated sandbox environments designed to scale fraud operations." },
                { title: "Suspicious Device Reuse", desc: "Identify hardware profiles linked to multiple accounts or fraud rings." },
                { title: "VPN & Proxy Masking checks", desc: "Flag proxy servers, residential proxies, and VPN nodes." },
                { title: "Browser Integrity verification", desc: "Examine browser runtime variables, canvas signatures, and header overrides." },
                { title: "Device Velocity throttling", desc: "Detect rapid login attempts originating from a singular hardware fingerprint." }
              ].map((dev, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dev.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{dev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: CREDENTIAL STUFFING & PASSWORD SPRAY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Brute Force Mitigation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Stop Automated Login Attacks Before Accounts Are Compromised.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense detects large-scale authentication abuse using velocity analysis, infrastructure intelligence, and behavioral signals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Credential Stuffing Detection", desc: "Identify repeated login attempts using breached credential combinations." },
                { title: "Password Spray Detection", desc: "Detect low-volume distributed attacks targeting many accounts with common passwords." },
                { title: "Bot Activity Analysis", desc: "Identify scripted login behavior and automation frameworks." },
                { title: "Infrastructure Correlation", desc: "Link suspicious login activity through IPs, devices, proxies, and graph relationships." },
                { title: "Adaptive Blocking", desc: "Throttle, block, challenge, or rate-limit suspicious login flows dynamically." },
                { title: "Session Containment", desc: "Prevent compromised sessions from escalating into fraud activity." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: MFA & ADAPTIVE AUTHENTICATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Adaptive Challenges</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Use Adaptive Authentication Instead of Static Friction.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense triggers authentication challenges dynamically based on risk rather than applying the same controls to every user.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Step-Up MFA", desc: "Require MFA only when risk increases." },
                { title: "Biometric Verification", desc: "Trigger selfie verification or liveness checks for suspicious sessions." },
                { title: "Device Verification", desc: "Require trusted-device confirmation during risky login attempts." },
                { title: "Session Challenge", desc: "Request additional verification before allowing sensitive actions." },
                { title: "MFA Fatigue Detection", desc: "Detect suspicious repeated MFA prompts and approval abuse patterns." },
                { title: "Progressive Friction", desc: "Apply stronger controls gradually as risk escalates." }
              ].map((act, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{act.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: SESSION RISK MONITORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Active Profiling</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Monitor Sessions Continuously — Not Just at Login.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense continuously evaluates session behavior after authentication to detect evolving compromise indicators.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Sudden behavioral dynamics drift", desc: "Observe session timing, navigation paths, and transaction pacing changes." },
                    { title: "Privilege escalation attempts", desc: "Block unauthorized sweeps to change contact details or wallet targets." },
                    { title: "Session Token reuse checks", desc: "Validate session signature hashes to identify hijacked browser cookies." }
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

              {/* Right Column: Visual session monitoring timeline mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">LIVE SESSION TIMELINE MONITOR</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Session ID: SES-9812</span>
                      <span className="text-red-400 font-bold">BEHAVIORAL_DRIFT_HIGH</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Mouse Velocity Check</span>
                      <span className="text-red-400 font-bold">BOT_MIMICRY_DETECTED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: REAL-TIME RESPONSE ACTIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Auto-Response</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Respond Automatically Before Fraud Escalates.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense converts suspicious session intelligence into automated protective actions in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Session Revocation", desc: "Terminate suspicious sessions immediately to stop attackers." },
                { title: "Transaction Blocking", desc: "Stop risky transfers, payouts, or account actions before completion." },
                { title: "Account Freeze", desc: "Temporarily freeze compromised accounts pending investigation." },
                { title: "Step-Up Verification", desc: "Trigger biometric checks, MFA, or identity verification dynamically." },
                { title: "Analyst Escalation", desc: "Create fraud investigations automatically for suspicious account activity." },
                { title: "User Notification", desc: "Alert customers about suspicious activity and account actions." }
              ].map((res, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{res.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: INTEGRATION WITH RISK PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Cross-Domain Risk</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connect ATO Signals to Fraud, AML, and Graph Intelligence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense connects session risk with broader fraud and financial crime intelligence across the platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Scoring Integration", desc: "ATO risk contributes directly to onboarding and transaction risk scoring." },
                { title: "Graph Intelligence links", desc: "Suspicious devices, IPs, sessions, and accounts feed network rings graph." },
                { title: "AML Monitoring feeds", desc: "Compromised accounts triggering suspicious money transfers feed compliance logs." },
                { title: "Case Management workspace", desc: "High-risk sessions automatically generate investigation cases and evidence timelines." },
                { title: "Behavioral Biometrics tracking", desc: "Cadence and interaction anomalies contribute directly to session score thresholds." },
                { title: "SIEM & Webhooks streams", desc: "ATO events can be exported into enterprise monitoring and incident-response systems." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Protect Accounts Across High-Risk Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Protect online banking, transfers, account recovery, and mobile sessions from takeover attacks." },
                { title: "Fintech", desc: "Secure wallets, onboarding, payouts, and customer accounts against fraudulent access." },
                { title: "Crypto & Web3", desc: "Detect compromised wallets, suspicious sessions, and high-risk transfers." },
                { title: "E-Commerce", desc: "Prevent account hijacking, loyalty abuse, refund fraud, and payment misuse." },
                { title: "Gaming & Betting", desc: "Detect multi-account abuse, account sharing, and compromised player accounts." },
                { title: "Enterprise Platforms", desc: "Monitor privileged access, suspicious employee sessions, and insider-threat indicators." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Controls</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Enterprise Security and Compliance Teams.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations requiring explainable session intelligence, fraud governance, and audit-ready security workflows.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Audit logging", "Session evidence", "Tenant isolation",
                "Webhook signing", "Case evidence", "Private deploy", "On-prem deploy"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">ATO FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is account takeover detection?", 
                  a: "DeepSense analyzes login behavior, devices, sessions, biometrics, behavioral patterns, and transaction activity to identify compromised accounts." 
                },
                { 
                  q: "Does DeepSense support behavioral biometrics?", 
                  a: "Yes. DeepSense supports behavioral analysis such as typing cadence, navigation patterns, interaction timing, and session behavior monitoring." 
                },
                { 
                  q: "Can DeepSense detect impossible travel?", 
                  a: "Yes. DeepSense calculates suspicious geographic movement between login events and evaluates travel feasibility." 
                },
                { 
                  q: "Does DeepSense monitor sessions continuously?", 
                  a: "Yes. DeepSense evaluates sessions continuously after authentication rather than only during login." 
                },
                { 
                  q: "Can suspicious sessions be blocked automatically?", 
                  a: "Yes. DeepSense can revoke sessions, block transactions, freeze accounts, trigger MFA, and escalate investigations automatically." 
                },
                { 
                  q: "Can ATO signals connect to fraud scoring?", 
                  a: "Yes. Account takeover signals contribute directly to fraud scoring, graph intelligence, AML monitoring, and case workflows." 
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

        {/* ================= SECTION 15: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to stop account takeovers?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect customer accounts with continuous <br />
                <span className="text-white/40">session intelligence and adaptive fraud prevention.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense combines login risk, behavioral biometrics, device intelligence, graph analytics, and real-time response workflows to stop account takeover fraud before losses occur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/behavioral-biometrics" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Behavioral Biometrics
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
